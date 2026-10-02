import { useCallback, useEffect, useRef, useState } from 'react';
import { DEFAULT_STATE, fromDocData, stateKey, unionIds, type SyncedState } from './schema';
import type { CloudUser } from './cloud';

type Cloud = typeof import('./cloud');

export type SyncStatus = 'guest' | 'connecting' | 'saving' | 'saved' | 'offline' | 'error';

// Remembers that this browser has signed in before, so we restore the session on load.
// Guests never set it, so they never download the Firebase SDK.
const HINT_KEY = 'bodhi_cloud_hint';
const SAVE_DELAY_MS = 800;

const friendlyError = (err: unknown) => {
  const code = (err as { code?: string }).code ?? '';
  if (code === 'auth/network-request-failed') return "Can't reach Google. Check the internet connection and try again.";
  if (code === 'auth/unauthorized-domain') return 'This web address is not authorized for sign-in yet.';
  if (code === 'permission-denied') return "Couldn't save to the cloud (permission denied).";
  return 'Something went wrong. Please try again.';
};

// Keeps `state` in sync with the signed-in parent's Firestore document:
//  - first load: cloud wins if the account already has progress; a brand-new account
//    adopts this device's progress
//  - afterwards: local changes are saved (debounced) and remote changes (another device)
//    are applied live
export function useCloudSync(state: SyncedState, applyState: (state: SyncedState) => void, onSignedOut?: () => void) {
  const [user, setUser] = useState<CloudUser | null>(null);
  const [authReady, setAuthReady] = useState(() => {
    try { return !localStorage.getItem(HINT_KEY); } catch { return true; }
  });
  const [status, setStatus] = useState<SyncStatus>('guest');
  const [error, setError] = useState<string | null>(null);
  const [syncTick, setSyncTick] = useState(0); // re-runs the save check after each server snapshot
  // True once the signed-in account turned out to already have saved progress (so this device just loads it)
  const [restored, setRestored] = useState(false);

  const cloudRef = useRef<Cloud | null>(null);
  const unsubAuthRef = useRef<(() => void) | null>(null);
  const loadingRef = useRef<Promise<Cloud> | null>(null);
  const stateRef = useRef(state);
  const applyRef = useRef(applyState);
  const signedOutRef = useRef(onSignedOut);
  const lastKeyRef = useRef<string | null>(null); // key of the copy we know the cloud has
  const readyRef = useRef(false); // first server snapshot handled
  const deletingRef = useRef(false);
  const prevUidRef = useRef<string | null>(null);
  const createdRef = useRef(false); // this session created the account's document (so nothing was restored)

  useEffect(() => {
    stateRef.current = state;
    applyRef.current = applyState;
    signedOutRef.current = onSignedOut;
  });

  const loadCloud = useCallback((): Promise<Cloud> => {
    loadingRef.current ??= import('./cloud').then((cloud) => {
      cloudRef.current = cloud;
      return cloud;
    });
    return loadingRef.current;
  }, []);

  const startAuthWatch = useCallback((cloud: Cloud) => {
    if (unsubAuthRef.current) return;
    unsubAuthRef.current = cloud.watchAuth((next) => {
      const prev = prevUidRef.current;
      prevUidRef.current = next?.uid ?? null;
      setUser(next);
      setAuthReady(true);
      try {
        if (next) localStorage.setItem(HINT_KEY, '1');
        else localStorage.removeItem(HINT_KEY);
      } catch { /* storage unavailable */ }
      if (prev && !next) {
        // Signed out (or session ended): don't leave one family's progress on a shared device
        deletingRef.current = false;
        applyRef.current({ ...DEFAULT_STATE });
        signedOutRef.current?.();
      }
    });
  }, []);

  // Returning visitors: restore the session
  useEffect(() => {
    let hinted = false;
    try { hinted = !!localStorage.getItem(HINT_KEY); } catch { /* ignore */ }
    if (!hinted) return;
    loadCloud().then(startAuthWatch).catch(() => setAuthReady(true));
    return () => {
      unsubAuthRef.current?.();
      unsubAuthRef.current = null;
    };
  }, [loadCloud, startAuthWatch]);

  // Live link to the signed-in user's document
  useEffect(() => {
    readyRef.current = false;
    lastKeyRef.current = null;
    setRestored(false);
    createdRef.current = false;
    const cloud = cloudRef.current;
    if (!user || !cloud) {
      setStatus('guest');
      return;
    }

    setStatus('connecting');
    const unsubscribe = cloud.subscribeToProgress(
      user.uid,
      (snap) => {
        if (deletingRef.current) return;

        if (!snap.exists) {
          // A cache-only "missing" proves nothing (offline new device): wait for the server
          if (snap.fromCache) {
            setStatus(navigator.onLine ? 'connecting' : 'offline');
            return;
          }
          // Brand-new account: adopt this device's progress
          createdRef.current = true;
          readyRef.current = true;
          const mine = stateRef.current;
          lastKeyRef.current = stateKey(mine);
          setStatus('saving');
          cloud.saveProgress(user.uid, mine).then(() => setStatus('saved')).catch((err) => {
            lastKeyRef.current = null;
            setError(friendlyError(err));
            setStatus('error');
          });
          return;
        }

        if (!createdRef.current) setRestored(true);

        // Our own write is in flight; the server's answer will follow
        if (snap.hasPendingWrites) {
          setStatus('saving');
          return;
        }

        readyRef.current = true;
        const remote = fromDocData(snap.data);
        lastKeyRef.current = stateKey(remote);
        // Solved levels only grow, so keep any this device has that the account lacks
        // (the save effect below then uploads them)
        const merged = { ...remote, botSolved: unionIds(remote.botSolved, stateRef.current.botSolved) };
        if (stateKey(merged) !== stateKey(stateRef.current)) applyRef.current(merged);
        setSyncTick((t) => t + 1);
        setStatus(snap.fromCache ? (navigator.onLine ? 'connecting' : 'offline') : 'saved');
      },
      (err) => {
        setError(friendlyError(err));
        setStatus('error');
      },
    );
    return unsubscribe;
  }, [user]);

  // Save local changes
  useEffect(() => {
    const cloud = cloudRef.current;
    if (!user || !cloud || !readyRef.current || deletingRef.current) return;
    const key = stateKey(state);
    if (key === lastKeyRef.current) return;

    const timer = window.setTimeout(() => {
      lastKeyRef.current = key; // before writing, so the echo of this write isn't treated as new
      setStatus('saving');
      cloud.saveProgress(user.uid, stateRef.current).then(() => setStatus('saved')).catch((err) => {
        lastKeyRef.current = null;
        setError(friendlyError(err));
        setStatus('error');
      });
    }, SAVE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [state, user, syncTick]);

  // Load the SDK ahead of the tap so the sign-in popup opens inside the gesture
  const preload = useCallback(() => {
    loadCloud().then(startAuthWatch).catch(() => {});
  }, [loadCloud, startAuthWatch]);

  const signIn = useCallback(async () => {
    setError(null);
    try {
      const cloud = cloudRef.current ?? (await loadCloud());
      startAuthWatch(cloud);
      await cloud.signInWithGoogle();
    } catch (err) {
      setError(friendlyError(err));
    }
  }, [loadCloud, startAuthWatch]);

  const signOut = useCallback(async () => {
    setError(null);
    try {
      await cloudRef.current?.signOutUser();
    } catch (err) {
      setError(friendlyError(err));
    }
  }, []);

  const deleteAccount = useCallback(async () => {
    const cloud = cloudRef.current;
    if (!cloud || !user) return false;
    setError(null);
    deletingRef.current = true; // keep the sync from re-creating the document
    try {
      await cloud.deleteAccountAndData(user.uid);
      return true;
    } catch (err) {
      deletingRef.current = false;
      setError(friendlyError(err));
      return false;
    }
  }, [user]);

  return { user, authReady, status, error, restored, preload, signIn, signOut, deleteAccount };
}
