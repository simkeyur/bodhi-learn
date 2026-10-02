// Where the app gets its learning content from:
//   1. the packs bundled with the app (so a first launch works with no network),
//   2. newer packs pulled from Firestore and kept in IndexedDB on this device.
// On each launch the app asks Firestore whether anything is newer (one tiny read) and downloads
// only the packs that changed. Offline, it just uses what it already has.

import { useSyncExternalStore } from 'react';
import { SUBJECTS, type Subject } from '../firebase/schema';
import { readPack } from './select';
import type { QuestionPack } from './types';

type Packs = Partial<Record<Subject, QuestionPack>>;

const modules = import.meta.glob<unknown>('./packs/*.json', { eager: true, import: 'default' });

const bundled: Packs = {};
for (const mod of Object.values(modules)) {
  const pack = readPack(mod);
  if (pack) bundled[pack.subject] = pack;
}

let packs: Packs = { ...bundled };
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export type ContentStatus = 'bundled' | 'checking' | 'up-to-date' | 'updated' | 'offline';
let status = 'bundled' as ContentStatus;
let statusSnapshot = { status, packs };
const publish = (next?: ContentStatus) => {
  if (next) status = next;
  statusSnapshot = { status, packs };
  emit();
};

// ---------- IndexedDB cache ----------

const DB_NAME = 'bodhi-content';
const STORE = 'packs';

const openDb = (): Promise<IDBDatabase> =>
  new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });

async function readCached(): Promise<QuestionPack[]> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const req = db.transaction(STORE).objectStore(STORE).getAll();
    req.onsuccess = () => resolve((req.result as unknown[]).map(readPack).filter((p): p is QuestionPack => p !== null));
    req.onerror = () => reject(req.error);
  });
}

async function writeCached(pack: QuestionPack): Promise<void> {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put(pack, pack.subject);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

const adopt = (pack: QuestionPack): boolean => {
  const have = packs[pack.subject];
  if (have && have.version >= pack.version) return false;
  packs = { ...packs, [pack.subject]: pack };
  return true;
};

let started: Promise<void> | null = null;

// Call once at startup. Safe to call again (e.g. when the browser comes back online): it only re-checks.
export function syncContent(): Promise<void> {
  if (started) return started;
  started = (async () => {
    try {
      for (const cached of await readCached()) adopt(cached);
      publish();
    } catch { /* no IndexedDB: bundled content is still fine */ }

    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      publish('offline');
      return;
    }
    publish('checking');
    try {
      const cloud = await import('../firebase/cloud');
      const meta = await cloud.fetchContentMeta();
      let changed = false;
      for (const subject of SUBJECTS) {
        const remoteVersion = meta?.packs?.[subject];
        if (typeof remoteVersion !== 'number' || remoteVersion <= (packs[subject]?.version ?? 0)) continue;
        const remote = readPack(await cloud.fetchContentPack(subject));
        if (remote && adopt(remote)) {
          changed = true;
          await writeCached(remote).catch(() => {});
        }
      }
      publish(changed ? 'updated' : 'up-to-date');
    } catch {
      publish('offline');
    }
  })().finally(() => { started = null; });
  return started;
}

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => { listeners.delete(l); };
};

export function useContent() {
  return useSyncExternalStore(subscribe, () => statusSnapshot);
}
