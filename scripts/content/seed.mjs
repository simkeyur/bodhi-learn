// Publishes the question packs in src/content/packs/*.json to Firestore, where installed apps pull them.
//
//   npm run content:seed -- --dry-run     show what would change
//   npm run content:seed                  publish packs whose version is newer than what is online
//   npm run content:seed -- --force       publish everything, even if the online version is newer
//
// Needs admin access to the project. By default it asks gcloud for a token
// (`gcloud auth login` as someone with the Firebase Admin / Datastore User role); set
// GOOGLE_OAUTH_ACCESS_TOKEN to supply your own. With FIRESTORE_EMULATOR_HOST set it seeds the emulator. Uses the Firestore REST API, so there is nothing to install.
//
// Workflow: edit a pack, bump its "version", run this. Apps check content_meta/current on launch and
// download only the packs whose version went up.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const PROJECT = process.env.FIREBASE_PROJECT || 'bodhi-learn';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../src/content/packs');
// FIRESTORE_EMULATOR_HOST (e.g. 127.0.0.1:8080) points this at a local emulator instead of production
const EMULATOR = process.env.FIRESTORE_EMULATOR_HOST;
const BASE = `${EMULATOR ? `http://${EMULATOR}` : 'https://firestore.googleapis.com'}/v1/projects/${PROJECT}/databases/(default)/documents`;
const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const force = args.has('--force');

const token = () => {
  if (EMULATOR) return 'owner'; // the emulator accepts this as an admin
  if (process.env.GOOGLE_OAUTH_ACCESS_TOKEN) return process.env.GOOGLE_OAUTH_ACCESS_TOKEN;
  return execFileSync('gcloud', ['auth', 'print-access-token'], { encoding: 'utf8' }).trim();
};

// JS value -> Firestore REST value
const encode = (v) => {
  if (v === null || v === undefined) return { nullValue: null };
  if (typeof v === 'string') return { stringValue: v };
  if (typeof v === 'boolean') return { booleanValue: v };
  if (typeof v === 'number') return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
  if (Array.isArray(v)) return { arrayValue: { values: v.map(encode) } };
  return { mapValue: { fields: Object.fromEntries(Object.entries(v).map(([k, x]) => [k, encode(x)])) } };
};
const decodeVersion = (doc) => Number(doc?.fields?.version?.integerValue ?? doc?.fields?.version?.doubleValue ?? 0);

const call = async (method, url, body) => {
  const res = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${bearer}`, 'Content-Type': 'application/json', 'x-goog-user-project': PROJECT },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`${method} ${url} -> ${res.status} ${await res.text()}`);
  return res.json();
};

const bearer = token();

const files = fs.readdirSync(ROOT).filter((f) => f.endsWith('.json')).sort();
const meta = { version: 0, packs: {} };
let wrote = 0;

for (const file of files) {
  const pack = JSON.parse(fs.readFileSync(path.join(ROOT, file), 'utf8'));
  const { subject, version } = pack;
  if (!subject || !Number.isInteger(version) || !Array.isArray(pack.questions)) throw new Error(`${file} is not a valid pack`);

  const remote = await call('GET', `${BASE}/content_packs/${subject}`);
  const online = remote ? decodeVersion(remote) : 0;
  const publish = force || version > online;
  console.log(`${subject.padEnd(8)} local v${version} · online ${remote ? `v${online}` : 'none'} · ${pack.questions.length} questions · ${publish ? (dryRun ? 'would publish' : 'publishing') : 'skipped'}`);

  meta.packs[subject] = publish ? version : online;
  if (publish && !dryRun) {
    await call('PATCH', `${BASE}/content_packs/${subject}`, { fields: encode(pack).mapValue.fields });
    wrote++;
  }
}

meta.version = Math.max(0, ...Object.values(meta.packs));
if (!dryRun && wrote > 0) {
  await call('PATCH', `${BASE}/content_meta/current`, { fields: encode({ ...meta, updatedAt: new Date().toISOString() }).mapValue.fields });
}
console.log(dryRun ? 'Dry run: nothing written.' : wrote ? `Published ${wrote} pack(s); content version ${meta.version}.` : 'Everything online is already up to date.');
