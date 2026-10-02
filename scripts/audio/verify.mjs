#!/usr/bin/env node
// Audio QA: transcribes rendered clips with Gemini and compares them to the manifest text,
// so a voice model that adds, drops or misreads words is caught without listening to 350 clips.
//
//   npm run audio:verify                  check every clip
//   npm run audio:verify -- --only letters,phrases
//   npm run audio:verify -- --match "can_you_find|find_the_letter"
//   npm run audio:verify -- --listen      also write a page (public/_check/) to listen to the flagged clips
//   npm run audio:verify -- --model gemini-2.5-flash --concurrency 4
//
// Prints each mismatch (expected vs heard) and exits 1 if there are any.
// Needs GEMINI_API_KEY in src/.env, .env or the environment.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { buildManifest } from './manifest.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..', '..');
const AUDIO_DIR = path.join(rootDir, 'public', 'audio');

const opts = { model: 'gemini-2.5-flash', concurrency: 4 };
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--model') opts.model = args[++i];
  else if (args[i] === '--concurrency') opts.concurrency = Number(args[++i]);
  else if (args[i] === '--only') opts.only = args[++i].split(',');
  else if (args[i] === '--match') opts.match = new RegExp(args[++i]);
  else if (args[i] === '--all') opts.all = true;
  else if (args[i] === '--listen') opts.listen = true;
  else { console.error(`Unknown option ${args[i]}`); process.exit(1); }
}

function getApiKey() {
  for (const envPath of [path.join(rootDir, 'src', '.env'), path.join(rootDir, '.env')]) {
    if (!fs.existsSync(envPath)) continue;
    const m = fs.readFileSync(envPath, 'utf-8').match(/^\s*(?:GEMINI_API_KEY|GOOGLE_API_KEY|gemini_key)\s*=\s*(.+)$/im);
    if (m) return m[1].trim().replace(/^['"]|['"]$/g, '');
  }
  return process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || null;
}

const apiKey = getApiKey();
if (!apiKey) {
  console.error('Missing Gemini key. Add GEMINI_API_KEY=... to src/.env or export it.');
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function transcribe(file) {
  const audio = fs.readFileSync(file).toString('base64');
  const body = {
    contents: [{
      parts: [
        { text: 'Transcribe this audio exactly, word for word, including any extra words at the start or end. Reply with only the transcript, no commentary. If it is silent or unintelligible, reply with [unclear].' },
        { inlineData: { mimeType: 'audio/mpeg', data: audio } },
      ],
    }],
    generationConfig: { temperature: 0 },
  };
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${opts.model}:generateContent`, {
      method: 'POST',
      headers: { 'x-goog-api-key': apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 429 || res.status >= 500) {
      if (attempt >= 8) throw new Error(`HTTP ${res.status}`);
      await sleep(Math.min(30000, 1500 * 2 ** attempt));
      continue;
    }
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
    const json = await res.json();
    return (json.candidates?.[0]?.content?.parts ?? []).map((p) => p.text ?? '').join('').trim();
  }
}

// Compare as spoken words: lowercase, no punctuation; digits and spelled-out numbers are equal
const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
const words = (text) =>
  text.toLowerCase().replace(/[^a-z0-9\s']/g, ' ').split(/\s+/).filter(Boolean)
    .map((w) => (/^\d+$/.test(w) && NUMBER_WORDS[Number(w)] ? NUMBER_WORDS[Number(w)] : w));

// Single letters and letter-by-letter spelling are heard many ways ("B", "bee", "be"): only flag extra words there
const LETTER_SOUNDS = { a: ['a', 'ay', 'eh'], b: ['b', 'bee', 'be'], c: ['c', 'see', 'sea'], d: ['d', 'dee'], e: ['e', 'ee'], f: ['f', 'ef', 'eff'],
  g: ['g', 'gee'], h: ['h', 'aitch', 'age'], i: ['i', 'eye'], j: ['j', 'jay'], k: ['k', 'kay'], l: ['l', 'el', 'ell'], m: ['m', 'em'], n: ['n', 'en'],
  o: ['o', 'oh'], p: ['p', 'pee'], q: ['q', 'queue', 'cue'], r: ['r', 'are'], s: ['s', 'es', 'ess'], t: ['t', 'tee', 'tea'], u: ['u', 'you'],
  v: ['v', 'vee'], w: ['w', 'double', 'you'], x: ['x', 'ex'], y: ['y', 'why'], z: ['z', 'zee', 'zed'] };

function judge(entry, heard) {
  const heardWords = words(heard);
  if (heard === '[unclear]' || heardWords.length === 0) return 'silent or unintelligible';

  // "Can you find the letter K?": the sentence must be there; the final letter is heard many ways
  if (/^letters\/(find|trace)_[A-Z]\.mp3$/.test(entry.path)) {
    const lead = words(entry.text).slice(0, -1);
    const missing = lead.filter((w) => !heardWords.includes(w));
    if (missing.length) return `missing: ${missing.join(' ')}`;
    return heardWords.length <= lead.length + 2 ? null : 'extra words after the letter';
  }

  if (/^letters\/[A-Z]\.mp3$/.test(entry.path)) {
    const letter = entry.text.toLowerCase();
    if (heardWords.length > 2 && !(letter === 'w' && heardWords.length <= 3)) return `extra words (expected just "${entry.text}")`;
    return heardWords.some((w) => LETTER_SOUNDS[letter].includes(w)) ? null : `heard a different letter`;
  }

  const expected = words(entry.text);
  if (entry.path.startsWith('words/spelling_')) {
    // "C, A, T... Cat!" : the word must be there and nothing much beyond it
    return heardWords.length <= expected.length + 2 ? null : 'extra words in spelling';
  }
  const missing = expected.filter((w) => !heardWords.includes(w));
  const extra = heardWords.filter((w) => !expected.includes(w));
  if (entry.kind === 'word' || entry.kind === 'number') {
    return heardWords.length <= 2 && missing.length === 0 ? null : `expected just "${entry.text}"`;
  }
  if (missing.length > Math.max(1, expected.length * 0.25)) return `missing: ${missing.join(' ')}`;
  if (extra.length > 0) return `extra words: ${extra.join(' ')}`;
  return null;
}

const entries = buildManifest().filter((e) => {
  if (!fs.existsSync(path.join(AUDIO_DIR, e.path))) return false;
  if (opts.only && !opts.only.some((o) => e.path.startsWith(`${o}/`))) return false;
  if (opts.match && !opts.match.test(e.path)) return false;
  return true;
});

console.log(`Checking ${entries.length} clips with ${opts.model}…\n`);
const problems = [];
let done = 0;
const queue = [...entries];

await Promise.all(Array.from({ length: opts.concurrency }, async () => {
  while (queue.length) {
    const entry = queue.shift();
    try {
      const heard = await transcribe(path.join(AUDIO_DIR, entry.path));
      const issue = judge(entry, heard);
      if (issue) {
        problems.push({ entry, heard, issue });
        console.log(`✗ ${entry.path}\n    expected: "${entry.text}"\n    heard:    "${heard}"\n    ${issue}`);
      } else if (opts.all) {
        console.log(`✓ ${entry.path}  "${heard}"`);
      }
    } catch (err) {
      problems.push({ entry, heard: '', issue: `could not check: ${err.message}` });
      console.log(`? ${entry.path}: ${err.message}`);
    }
    done++;
    if (done % 50 === 0) console.log(`  … ${done}/${entries.length}`);
  }
}));

if (opts.listen && problems.length) {
  const outDir = path.join(rootDir, 'public', '_check');
  fs.mkdirSync(outDir, { recursive: true });
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const rows = problems.sort((a, b) => a.entry.path.localeCompare(b.entry.path)).map((p) => `
    <tr><td><audio controls preload="none" src="/audio/${p.entry.path}"></audio></td>
    <td>${esc(p.entry.path)}</td><td>${esc(p.entry.text)}</td><td>${esc(p.heard)}</td></tr>`).join('');
  fs.writeFileSync(path.join(outDir, 'index.html'), `<!doctype html>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Clips to listen to</title>
<style>body{font-family:system-ui;margin:16px}table{border-collapse:collapse}td,th{border:1px solid #ddd;padding:6px;text-align:left;vertical-align:middle}audio{width:200px}</style>
<h1>${problems.length} clips the transcriber disagreed with</h1>
<p>The transcriber is unreliable on single words and letters, so trust your ears. "Expected" is what the clip should say.</p>
<table><tr><th>Play</th><th>Clip</th><th>Expected</th><th>Transcriber heard</th></tr>${rows}</table>`);
  console.log(`\nListen to them at http://localhost:5188/_check/ (dev server running)`);
}

console.log(problems.length ? `\n${problems.length} clip(s) need attention.` : `\n✓ All ${entries.length} clips sound like their text.`);
process.exit(problems.length ? 1 : 0);
