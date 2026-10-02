// Run with: npm run test:rules  (starts the Firestore emulator; needs Java)
import fs from 'fs';
import assert from 'assert/strict';
import { test, after, before } from 'node:test';
import { initializeTestEnvironment, assertFails, assertSucceeds } from '@firebase/rules-unit-testing';
import { doc, getDoc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';

let env;

before(async () => {
  env = await initializeTestEnvironment({
    projectId: 'bodhi-learn-rules-test',
    firestore: {
      rules: fs.readFileSync('firestore.rules', 'utf8'),
      host: '127.0.0.1',
      port: 8080,
    },
  });
});

after(async () => {
  await env?.cleanup();
});

const validDoc = (overrides = {}) => ({
  schemaVersion: 1,
  profile: { kidName: 'Bodhi', ageBracket: 'kindergarten' },
  settings: { speechEnabled: true, voiceSpeed: 0.85 },
  progress: { stars: 5, unlockedStickers: ['st1'], placedStickers: [], botSolved: ['pk-1', 'k-2'] },
  updatedAt: serverTimestamp(),
  ...overrides,
});

const asUser = (uid) => env.authenticatedContext(uid).firestore();
const asGuest = () => env.unauthenticatedContext().firestore();

test('owner can create, read, update and delete their own document', async () => {
  const ref = doc(asUser('alice'), 'users/alice');
  await assertSucceeds(setDoc(ref, validDoc()));
  const snap = await assertSucceeds(getDoc(ref));
  assert.equal(snap.data().progress.stars, 5);
  await assertSucceeds(setDoc(ref, validDoc({ progress: { stars: 9, unlockedStickers: ['st1', 'st2'], placedStickers: [] } })));
  await assertSucceeds(deleteDoc(ref));
});

test('documents from older app versions (no botSolved) are still valid', async () => {
  const ref = doc(asUser('olivia'), 'users/olivia');
  await assertSucceeds(setDoc(ref, validDoc({ progress: { stars: 3, unlockedStickers: ['st1'], placedStickers: [] } })));
});

test("users cannot read or write someone else's document", async () => {
  await env.withSecurityRulesDisabled(async (ctx) => {
    await setDoc(doc(ctx.firestore(), 'users/alice'), { schemaVersion: 1 });
  });
  const bobsView = doc(asUser('bob'), 'users/alice');
  await assertFails(getDoc(bobsView));
  await assertFails(setDoc(bobsView, validDoc()));
  await assertFails(deleteDoc(bobsView));
});

test('signed-out visitors have no access', async () => {
  const ref = doc(asGuest(), 'users/alice');
  await assertFails(getDoc(ref));
  await assertFails(setDoc(ref, validDoc()));
});

test('invalid data is rejected', async () => {
  const ref = doc(asUser('carol'), 'users/carol');
  const bad = {
    'negative stars': validDoc({ progress: { stars: -1, unlockedStickers: [], placedStickers: [] } }),
    'fractional stars': validDoc({ progress: { stars: 1.5, unlockedStickers: [], placedStickers: [] } }),
    'botSolved too long': validDoc({ progress: { stars: 1, unlockedStickers: [], placedStickers: [], botSolved: new Array(61).fill('x') } }),
    'botSolved not a list': validDoc({ progress: { stars: 1, unlockedStickers: [], placedStickers: [], botSolved: 'pk-1' } }),
    'unknown progress field': validDoc({ progress: { stars: 1, unlockedStickers: [], placedStickers: [], badges: [] } }),
    'huge sticker list': validDoc({ progress: { stars: 1, unlockedStickers: [], placedStickers: new Array(301).fill({ id: 'x' }) } }),
    'empty name': validDoc({ profile: { kidName: '', ageBracket: 'pre-k' } }),
    'long name': validDoc({ profile: { kidName: 'x'.repeat(41), ageBracket: 'pre-k' } }),
    'unknown age bracket': validDoc({ profile: { kidName: 'A', ageBracket: 'college' } }),
    'voice speed out of range': validDoc({ settings: { speechEnabled: true, voiceSpeed: 5 } }),
    'wrong schema version': validDoc({ schemaVersion: 2 }),
    'extra top-level field': validDoc({ isAdmin: true }),
    'extra nested field': validDoc({ settings: { speechEnabled: true, voiceSpeed: 1, extra: 1 } }),
    'client-supplied timestamp': validDoc({ updatedAt: new Date('2020-01-01') }),
  };
  for (const [name, data] of Object.entries(bad)) {
    await assertFails(setDoc(ref, data), name);
  }
});

test('other collections are closed', async () => {
  const db = asUser('alice');
  await assertFails(setDoc(doc(db, 'anything/else'), { a: 1 }));
  await assertFails(getDoc(doc(db, 'anything/else')));
});
