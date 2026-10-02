// Thin wrapper over the Firebase SDK. Loaded on demand (dynamic import) so people
// who never sign in don't download it.

import { initializeApp } from 'firebase/app';
import {
  connectAuthEmulator,
  GoogleAuthProvider,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  reauthenticateWithPopup,
  signInWithCredential,
  signInWithPopup,
  signInWithRedirect,
  signOut as firebaseSignOut,
  type User,
} from 'firebase/auth';
import {
  connectFirestoreEmulator,
  deleteDoc,
  doc,
  getDoc,
  initializeFirestore,
  onSnapshot,
  persistentLocalCache,
  persistentMultipleTabManager,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { firebaseConfig } from './config';
import { toDocData, type SyncedState } from './schema';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Offline-first: reads come from a local cache and writes queue until we're back online
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
});

// `npm run dev:emulators` points the app at local emulators (real rules, fake accounts)
if (import.meta.env.VITE_FIREBASE_EMULATORS === 'true') {
  connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
  // Test helper (emulator builds only): sign in as a fake Google user without the popup
  (window as unknown as Record<string, unknown>).__testSignIn = (email: string, name: string) =>
    signInWithCredential(auth, GoogleAuthProvider.credential(JSON.stringify({ sub: email, email, email_verified: true, display_name: name })));
}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export interface CloudUser {
  uid: string;
  name: string;
  email: string;
  photoURL: string | null;
}

const toCloudUser = (u: User): CloudUser => ({
  uid: u.uid,
  name: u.displayName ?? '',
  email: u.email ?? '',
  photoURL: u.photoURL,
});

export function watchAuth(onChange: (user: CloudUser | null) => void) {
  return onAuthStateChanged(auth, (u) => onChange(u ? toCloudUser(u) : null));
}

export async function signInWithGoogle() {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    const code = (err as { code?: string }).code;
    if (code === 'auth/popup-blocked') {
      // Some mobile browsers block popups; fall back to a full-page redirect
      await signInWithRedirect(auth, provider);
      return;
    }
    if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') return;
    throw err;
  }
}

export const signOutUser = () => firebaseSignOut(auth);

export interface CloudSnapshot {
  exists: boolean;
  data: unknown;
  fromCache: boolean;
  hasPendingWrites: boolean;
}

export function subscribeToProgress(uid: string, onData: (snap: CloudSnapshot) => void, onError: (err: Error) => void) {
  return onSnapshot(
    doc(db, 'users', uid),
    { includeMetadataChanges: true },
    (snap) => onData({
      exists: snap.exists(),
      data: snap.data(),
      fromCache: snap.metadata.fromCache,
      hasPendingWrites: snap.metadata.hasPendingWrites,
    }),
    onError,
  );
}

export function saveProgress(uid: string, state: SyncedState) {
  return setDoc(doc(db, 'users', uid), { ...toDocData(state), updatedAt: serverTimestamp() });
}

// Removes the progress document and the sign-in account itself
export async function deleteAccountAndData(uid: string) {
  await deleteDoc(doc(db, 'users', uid));
  const user = auth.currentUser;
  if (!user) return;
  try {
    await deleteUser(user);
  } catch (err) {
    if ((err as { code?: string }).code === 'auth/requires-recent-login') {
      await reauthenticateWithPopup(user, provider);
      await deleteUser(user);
    } else {
      throw err;
    }
  }
}

// Learning content is public (see firestore.rules): readable with no sign-in
export async function fetchContentMeta(): Promise<{ version: number; packs: Record<string, number> } | null> {
  const snap = await getDoc(doc(db, 'content_meta', 'current'));
  return snap.exists() ? (snap.data() as { version: number; packs: Record<string, number> }) : null;
}

export async function fetchContentPack(subject: string): Promise<unknown> {
  const snap = await getDoc(doc(db, 'content_packs', subject));
  return snap.exists() ? snap.data() : null;
}
