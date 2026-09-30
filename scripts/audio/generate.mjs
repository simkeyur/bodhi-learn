#!/usr/bin/env node
// Master audio generator: renders every clip in scripts/audio/manifest.mjs with
// Gemini TTS into public/audio/, ready for the app.
//
//   npm run audio                  render everything that is new or changed (resumable; re-run to continue)
//   npm run audio -- --check       verify the manifest covers every clip the app uses (no API calls)
//   npm run audio -- --audition    render a few sample lines in several voices to compare
//
// Options:
//   --voice <name>      Gemini prebuilt voice (default: Sulafat)
//   --model <id>        TTS model (default: gemini-3.8-flash-lite-tts)
//   --fallback-model <id> model to switch to when --model's daily quota runs out
//                       (default: gemini-3.1-flash-tts-preview; --no-fallback to just stop).
//                       Clips made by the fallback are re-rendered with --model on later runs.
//   --only <list>       only these folders or kinds, comma separated (e.g. letters,words or cheer,prompt)
//   --match <regex>     only paths matching this regex (e.g. "phonics_A|readalong/r6")
//   --force             re-render even if the clip is up to date (still reuses the raw-audio cache)
//   --fresh             ignore the raw-audio cache and call the API again
//   --concurrency <n>   parallel requests (default: 3)
//   --rpm <n>           max requests per minute (default: 9, just under Tier 1's 10 RPM; 429s are retried)
//   --limit <n>         stop after n API calls (handy for a trial run)
//   --dry-run           list what would be generated
//   --prune             delete clips in public/audio that the manifest no longer lists
//   --audition [voices] comma separated voices (default: a shortlist of warm voices)
//
// Needs GEMINI_API_KEY in src/.env, .env or the environment, and ffmpeg on PATH.

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { buildManifest, PHRASES, MATH } from './manifest.mjs';
import { RETRY_PHRASES } from '../../src/utils/speech.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..', '..');
const CACHE_DIR = path.join(rootDir, '.audio-cache');
const AUDIO_DIR = path.join(rootDir, 'public', 'audio');
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/interactions';

const AUDITION_VOICES = ['Sulafat', 'Achird', 'Vindemiatrix', 'Leda', 'Aoede', 'Callirrhoe'];
const AUDITION_PATHS = [
  'phrases/greet_slide_read.mp3',
  'letters/phonics_B.mp3',
  'words/OLIVE.mp3',
  'words/spelling_CAT.mp3',
  'exclamations/woohoo.mp3',
  'phrases/oops_try_again.mp3',
  'stories/s1_p1.mp3',
];

// ---------- CLI ----------

function parseArgs(argv) {
  const opts = {
    voice: 'Sulafat',
    model: 'gemini-3.8-flash-lite-tts',
    fallbackModel: 'gemini-3.1-flash-tts-preview',
    concurrency: 3,
    rpm: 9,
    limit: Infinity,
  };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    const next = () => argv[++i];
    switch (arg) {
      case '--voice': opts.voice = next(); break;
      case '--model': opts.model = next(); break;
      case '--fallback-model': opts.fallbackModel = next(); break;
      case '--no-fallback': opts.fallbackModel = null; break;
      case '--only': opts.only = next().split(',').map((s) => s.trim()); break;
      case '--match': opts.match = new RegExp(next()); break;
      case '--force': opts.force = true; break;
      case '--fresh': opts.fresh = true; break;
      case '--concurrency': opts.concurrency = Math.max(1, Number(next())); break;
      case '--rpm': opts.rpm = Number(next()); break;
      case '--limit': opts.limit = Number(next()); break;
      case '--dry-run': opts.dryRun = true; break;
      case '--prune': opts.prune = true; break;
      case '--check': opts.check = true; break;
      case '--audition':
        opts.audition = argv[i + 1] && !argv[i + 1].startsWith('--')
          ? next().split(',').map((s) => s.trim())
          : AUDITION_VOICES;
        break;
      default:
        console.error(`Unknown option: ${arg}`);
        process.exit(1);
    }
  }
  return opts;
}

function getApiKey() {
  for (const envPath of [path.join(rootDir, 'src', '.env'), path.join(rootDir, '.env')]) {
    if (!fs.existsSync(envPath)) continue;
    const content = fs.readFileSync(envPath, 'utf-8');
    const match = content.match(/^\s*(?:GEMINI_API_KEY|GOOGLE_API_KEY|gemini_key)\s*=\s*(.+)$/im);
    if (match) return match[1].trim().replace(/^['"]|['"]$/g, '');
  }
  return process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || null;
}

// ---------- Coverage check ----------

function listSourceFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const full = path.join(dir, d.name);
    if (d.isDirectory()) return listSourceFiles(full);
    return /\.(ts|tsx)$/.test(d.name) ? [full] : [];
  });
}

function runCheck(manifest) {
  const used = { phrase: new Set(RETRY_PHRASES), math: new Set() };
  for (const file of listSourceFiles(path.join(rootDir, 'src'))) {
    const code = fs.readFileSync(file, 'utf-8');
    for (const m of code.matchAll(/clip\.(phrase|math)\(([^)]*)\)/g)) {
      // For `cond ? 'a' : 'b'` only the branches are clip ids
      const arg = m[2].includes('?') ? m[2].slice(m[2].indexOf('?')) : m[2];
      for (const id of arg.matchAll(/'([a-z0-9_]+)'/g)) used[m[1]].add(id[1]);
    }
  }

  let problems = 0;
  for (const [kind, table] of [['phrase', PHRASES], ['math', MATH]]) {
    for (const id of used[kind]) {
      if (!table[id]) {
        console.log(`✗ clip.${kind}('${id}') is used in src/ but has no text in manifest.mjs`);
        problems++;
      }
    }
    for (const id of Object.keys(table)) {
      if (!used[kind].has(id)) console.log(`· ${kind} "${id}" is in the manifest but not used by the app`);
    }
  }

  // A clip counts as rendered only if the record says it came from this generator
  // (older recordings kept as stand-ins get replaced on the next run)
  const recordPath = path.join(AUDIO_DIR, 'manifest.json');
  const rendered = fs.existsSync(recordPath) ? JSON.parse(fs.readFileSync(recordPath, 'utf-8')).clips ?? {} : {};
  const missing = manifest.filter((e) => !rendered[e.path] || !fs.existsSync(path.join(AUDIO_DIR, e.path)));
  const stale = staleFiles(manifest);
  console.log(`\nManifest: ${manifest.length} clips.`);
  if (missing.length) {
    console.log(`${missing.length} not rendered yet (run \`npm run audio\`): ${missing.slice(0, 12).map((e) => e.path).join(', ')}${missing.length > 12 ? ', …' : ''}`);
  }
  if (stale.length) {
    console.log(`${stale.length} files in public/audio are no longer used (remove with --prune).`);
  }
  console.log(problems ? `\n${problems} problem(s) found.` : '\n✓ Every clip the app uses is in the manifest.');
  return problems === 0;
}

// Files in public/audio the manifest no longer lists (besides the manifest record itself)
function staleFiles(manifest) {
  const wanted = new Set(manifest.map((e) => e.path));
  return listFiles(AUDIO_DIR).filter((p) => p !== 'manifest.json' && !wanted.has(p));
}

function prune(manifest, dryRun) {
  const stale = staleFiles(manifest);
  for (const p of stale) {
    console.log(`${dryRun ? 'would remove' : 'removed'} public/audio/${p}`);
    if (!dryRun) fs.rmSync(path.join(AUDIO_DIR, p));
  }
  const record = path.join(AUDIO_DIR, 'manifest.json');
  if (!dryRun && fs.existsSync(record)) {
    const data = JSON.parse(fs.readFileSync(record, 'utf-8'));
    for (const p of stale) delete data.clips?.[p];
    fs.writeFileSync(record, JSON.stringify(data, null, 2) + '\n');
  }
  console.log(`${stale.length} unused clip(s) ${dryRun ? 'found' : 'pruned'}.`);
}

function listFiles(dir, prefix = '') {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const rel = prefix ? `${prefix}/${d.name}` : d.name;
    return d.isDirectory() ? listFiles(path.join(dir, d.name), rel) : [rel];
  });
}

// ---------- Gemini TTS ----------

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

let shownQuotaMessage = false;
let dailyQuotaHit = false;

function quotaMessage(errText) {
  try {
    return JSON.parse(errText).error?.message?.split('\n')[0] ?? errText.slice(0, 200);
  } catch {
    return errText.slice(0, 200);
  }
}

// Google puts the suggested wait in error.details[].retryDelay, e.g. "23s"
function retryDelayFrom(errText) {
  const match = errText.match(/"retryDelay"\s*:\s*"(\d+(?:\.\d+)?)s"/);
  return match ? Number(match[1]) : 0;
}

function makeRateLimiter(rpm) {
  if (!rpm) return async () => {};
  const interval = 60000 / rpm;
  let nextSlot = 0;
  return async () => {
    const now = Date.now();
    const wait = Math.max(0, nextSlot - now);
    nextSlot = Math.max(now, nextSlot) + interval;
    if (wait) await sleep(wait);
  };
}

// Models that reject speech_metadata annotations (e.g. gemini-3.1-flash-tts-preview)
// get the style as a spoken-style prefix instead, which they don't read aloud
const noAnnotationModels = new Set();

function requestBody({ model, voice, text, style }) {
  const content = noAnnotationModels.has(model)
    ? { type: 'text', text: `${style} Say: ${text}` }
    : { type: 'text', text, annotations: [{ type: 'speech_metadata', style }] };
  return {
    model,
    input: [{ type: 'user_input', content: [content] }],
    response_format: { type: 'audio' },
    generation_config: { speech_config: [{ voice }] },
  };
}

class DailyQuotaError extends Error {}

async function synthesize({ apiKey, model, voice, text, style }, throttle) {
  for (let attempt = 1; ; attempt++) {
    const sentAnnotations = !noAnnotationModels.has(model);
    const body = requestBody({ model, voice, text, style });
    await throttle();
    let res;
    try {
      res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'x-goog-api-key': apiKey, 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (err) {
      if (attempt >= 6) throw err;
      await sleep(2000 * 2 ** attempt);
      continue;
    }

    if (res.status === 429 || res.status >= 500) {
      const errText = await res.text();
      if (res.status === 429) {
        const message = quotaMessage(errText);
        if (!shownQuotaMessage) {
          shownQuotaMessage = true;
          console.log(`  Rate limited by Gemini: ${message}`);
        }
        // A used-up daily quota won't recover by waiting a few seconds
        if (/per\s*day|PerDay|daily/i.test(errText)) {
          throw new DailyQuotaError(`Daily quota reached for ${model}: ${message}`);
        }
      }
      if (attempt >= 10) throw new Error(`HTTP ${res.status} after ${attempt} attempts: ${errText.slice(0, 300)}`);
      const retryAfter = Number(res.headers.get('retry-after')) || retryDelayFrom(errText);
      const wait = retryAfter > 0 ? retryAfter * 1000 + 500 : Math.min(60000, 2000 * 2 ** attempt);
      console.log(`  … ${res.status}, retrying in ${Math.round(wait / 1000)}s`);
      await sleep(wait);
      continue;
    }
    if (!res.ok) {
      const errText = await res.text();
      // Wording varies: "Speech annotations are not supported" / "Speech metadata is not supported"
      // (decided by what this request sent: parallel requests can race the first one here)
      if (res.status === 400 && /(annotations?|metadata) (are|is) not supported/i.test(errText) && sentAnnotations) {
        noAnnotationModels.add(model);
        attempt--;
        continue;
      }
      throw new Error(`HTTP ${res.status}: ${errText.slice(0, 500)}`);
    }

    const json = await res.json();
    const audio = (json.steps ?? [])
      .filter((s) => s.type === 'model_output')
      .flatMap((s) => s.content ?? [])
      .filter((c) => c.type === 'audio' && c.data)
      .at(-1);
    if (!audio) {
      throw new Error(`No audio in response: ${JSON.stringify(json).slice(0, 500)}`);
    }
    const bytes = Buffer.from(audio.data, 'base64');
    // Unary responses are WAV; wrap raw 24 kHz 16-bit mono PCM just in case
    return bytes.subarray(0, 4).toString() === 'RIFF' ? bytes : wrapPcmAsWav(bytes, 24000);
  }
}

function wrapPcmAsWav(pcm, sampleRate) {
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20); // PCM
  header.writeUInt16LE(1, 22); // mono
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([header, pcm]);
}

// Trim leading/trailing silence (so chained clips flow), even out loudness, encode small MP3
const FILTERS = [
  'silenceremove=start_periods=1:start_duration=0:start_threshold=-50dB',
  'areverse',
  'silenceremove=start_periods=1:start_duration=0:start_threshold=-50dB',
  'areverse',
  'loudnorm=I=-16:TP=-1.5:LRA=11',
  'adelay=delays=40:all=1',
  'apad=pad_dur=0.08',
  // Re-chunk into MP3-sized frames (libmp3lame rejects some frames loudnorm emits)
  'aresample=24000',
  'asetnsamples=n=1152:p=1',
].join(',');

function encodeMp3(wavPath, outPath) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  return new Promise((resolve, reject) => {
    const ff = spawn('ffmpeg', [
      '-y', '-loglevel', 'error', '-i', wavPath,
      '-af', FILTERS,
      '-ac', '1', '-ar', '24000', '-c:a', 'libmp3lame', '-b:a', '64k',
      outPath,
    ]);
    let stderr = '';
    ff.stderr.on('data', (d) => { stderr += d; });
    ff.on('error', reject);
    ff.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg failed: ${stderr}`))));
  });
}

// ---------- Rendering ----------

const RENDER_ORDER = ['phrases', 'math', 'exclamations', 'letters', 'numbers', 'readalong', 'sentences', 'stories', 'words'];
const renderPriority = (clipPath) => {
  const i = RENDER_ORDER.indexOf(clipPath.split('/')[0]);
  return i === -1 ? RENDER_ORDER.length : i;
};

const cacheKey = (e) =>
  crypto.createHash('sha1').update(JSON.stringify([e.model, e.voice, e.style, e.text])).digest('hex');

async function renderAll(jobs, opts, apiKey) {
  const throttle = makeRateLimiter(opts.rpm);
  fs.mkdirSync(CACHE_DIR, { recursive: true });

  let apiCalls = 0;
  let done = 0;
  const failures = [];
  const queue = [...jobs];

  let activeModel = opts.model;

  const worker = async () => {
    while (queue.length && !dailyQuotaHit) {
      const job = queue.shift();
      // Reuse audio already cached for the requested model; otherwise use whichever
      // model is active (the fallback, once the primary's daily quota is gone)
      if (job.model !== activeModel && !fs.existsSync(path.join(CACHE_DIR, `${cacheKey(job)}.wav`))) {
        job.model = activeModel;
      }
      const wavPath = path.join(CACHE_DIR, `${cacheKey(job)}.wav`);
      try {
        if (opts.fresh || !fs.existsSync(wavPath)) {
          if (apiCalls >= opts.limit) continue;
          apiCalls++;
          const wav = await synthesize({ apiKey, ...job }, throttle);
          fs.writeFileSync(wavPath, wav);
        }
        await encodeMp3(wavPath, job.outPath);
        job.onDone?.(job);
        done++;
        const via = job.model !== opts.model ? ` (${job.model})` : '';
        console.log(`[${done + failures.length}/${jobs.length}] ${job.label} "${job.text.slice(0, 60)}"${via}`);
      } catch (err) {
        if (err instanceof DailyQuotaError) {
          if (opts.fallbackModel && job.model !== opts.fallbackModel) {
            if (activeModel !== opts.fallbackModel) {
              activeModel = opts.fallbackModel;
              console.log(`↪ ${err.message.split(':')[0]}; switching to ${activeModel}`);
            }
            queue.unshift(job); // retry this clip with the fallback
            continue;
          }
          dailyQuotaHit = true;
          queue.unshift(job);
          console.log(`⏸ ${err.message}`);
          continue;
        }
        failures.push({ job, err });
        console.log(`✗ ${job.label}: ${err.message.split('\n')[0]}`);
      }
    }
  };

  await Promise.all(Array.from({ length: opts.concurrency }, worker));
  return { done, failures, apiCalls, skippedByLimit: jobs.length - done - failures.length };
}

async function runSet(manifest, opts, apiKey) {
  const setDir = AUDIO_DIR;
  const recordPath = path.join(setDir, 'manifest.json');
  const record = fs.existsSync(recordPath) ? JSON.parse(fs.readFileSync(recordPath, 'utf-8')) : { clips: {} };

  const selected = manifest.filter((e) => {
    if (opts.only && !opts.only.some((o) => e.path.startsWith(`${o}/`) || e.kind === o)) return false;
    if (opts.match && !opts.match.test(e.path)) return false;
    return true;
  });

  const jobs = selected
    .map((e) => ({ ...e, voice: opts.voice, model: opts.model }))
    // Clips with no Gemini version yet come first (then re-renders of clips made by
    // another model), and within each, what a child hears most comes first
    .sort((a, b) =>
      Number(Boolean(record.clips[a.path])) - Number(Boolean(record.clips[b.path])) ||
      renderPriority(a.path) - renderPriority(b.path))
    .filter((e) => {
      if (opts.force) return true;
      const prev = record.clips[e.path];
      const upToDate = prev && prev.text === e.text && prev.style === e.style && prev.voice === e.voice && prev.model === e.model;
      return !(upToDate && fs.existsSync(path.join(setDir, e.path)));
    })
    .map((e) => ({
      ...e,
      label: e.path,
      outPath: path.join(setDir, e.path),
      onDone: (job) => {
        record.clips[e.path] = { text: e.text, style: e.style, voice: e.voice, model: job.model };
      },
    }));

  console.log(`public/audio/  (voice ${opts.voice}, ${opts.model})`);
  console.log(`${selected.length} clips selected, ${selected.length - jobs.length} already up to date, ${jobs.length} to render.\n`);
  if (opts.dryRun) {
    for (const j of jobs) console.log(`  ${j.path.padEnd(34)} [${j.kind}] ${j.text}`);
    return true;
  }
  if (!jobs.length) return true;

  const saveRecord = () => {
    fs.mkdirSync(setDir, { recursive: true });
    record.updatedAt = new Date().toISOString();
    fs.writeFileSync(recordPath, JSON.stringify(record, null, 2) + '\n');
  };
  // Save progress even if interrupted with Ctrl+C
  for (const signal of ['SIGINT', 'SIGTERM']) {
    process.on(signal, () => { saveRecord(); process.exit(130); });
  }

  const result = await renderAll(jobs, opts, apiKey);
  saveRecord();
  printSummary(result);
  return result.failures.length === 0;
}

async function runAudition(manifest, opts, apiKey) {
  const outDir = path.join(rootDir, 'public', '_audition');
  const samples = AUDITION_PATHS.map((p) => manifest.find((e) => e.path === p)).filter(Boolean);
  const jobs = opts.audition.flatMap((voice) =>
    samples.map((e) => ({
      ...e,
      voice,
      model: opts.model,
      label: `${voice}/${e.path}`,
      outPath: path.join(outDir, voice, e.path),
    }))
  );
  console.log(`Auditioning ${opts.audition.length} voices × ${samples.length} lines (${opts.model})\n`);
  if (opts.dryRun) return true;

  const result = await renderAll(jobs, opts, apiKey);

  // A tiny page to compare voices side by side: http://localhost:5188/_audition/
  const rows = samples.map((e) => `
      <tr><th>${escapeHtml(e.text)}</th>${opts.audition.map((v) =>
        `<td><audio controls preload="none" src="${v}/${e.path}"></audio></td>`).join('')}</tr>`).join('');
  fs.writeFileSync(path.join(outDir, 'index.html'), `<!doctype html>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Voice audition</title>
<style>body{font-family:system-ui;margin:16px}table{border-collapse:collapse}th,td{border:1px solid #ddd;padding:6px;text-align:left;vertical-align:middle}th{font-weight:500;max-width:260px}audio{width:180px}</style>
<h1>Voice audition · ${escapeHtml(opts.model)}</h1>
<p>Pick a voice, then: <code>npm run audio -- --voice NAME --force</code></p>
<table><tr><th></th>${opts.audition.map((v) => `<th>${v}</th>`).join('')}</tr>${rows}
</table>
`);
  printSummary(result);
  console.log('\nCompare them at http://localhost:5188/_audition/ (with the dev server running).');
  return result.failures.length === 0;
}

function printSummary({ done, failures, apiCalls, skippedByLimit }) {
  console.log(`\n✅ ${done} rendered (${apiCalls} API calls).`);
  if (dailyQuotaHit) console.log('⏸ Gemini daily quota reached. Re-run the same command after it resets to continue.');
  if (skippedByLimit > 0) console.log(`⏸ ${skippedByLimit} left for the next run.`);
  if (failures.length) {
    console.log(`❌ ${failures.length} failed — re-run the same command to retry them:`);
    for (const { job, err } of failures) console.log(`   ${job.label}: ${err.message.split('\n')[0]}`);
  }
}

function escapeHtml(s) {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

// ---------- Main ----------

const opts = parseArgs(process.argv.slice(2));
const manifest = buildManifest();

if (opts.check) {
  process.exit(runCheck(manifest) ? 0 : 1);
}

if (opts.prune) {
  prune(manifest, opts.dryRun);
  process.exit(0);
}

const apiKey = getApiKey();
if (!apiKey && !opts.dryRun) {
  console.error('Missing Gemini key. Add GEMINI_API_KEY=... to src/.env (git-ignored) or export it.');
  process.exit(1);
}

const ok = opts.audition
  ? await runAudition(manifest, opts, apiKey)
  : await runSet(manifest, opts, apiKey);
process.exit(ok ? 0 : 1);
