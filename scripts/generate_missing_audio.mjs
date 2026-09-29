// Generates studio clips that the app references but earlier scripts never created:
// story titles, every word in the stories and Slide & Read sentences, and the short
// connector phrases used to build feedback sentences from clips.
//
// Story text is read straight from src/data/learningData.ts so the audio can't
// drift from what's on screen. Existing files are skipped.
//
// Usage: node scripts/generate_missing_audio.mjs   (needs Node 22.18+ for .ts imports)

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { STORIES, READ_ALONG_SENTENCES } from '../src/data/learningData.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function getApiKey() {
  for (const envPath of [path.join(rootDir, 'src', '.env'), path.join(rootDir, '.env')]) {
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      const match = content.match(/openai_key\s*=\s*(.+)/i) || content.match(/OPENAI_API_KEY\s*=\s*(.+)/i);
      if (match && match[1]) return match[1].trim().replace(/^['"]|['"]$/g, '');
    }
  }
  return process.env.OPENAI_API_KEY || null;
}

const API_KEY = getApiKey();
if (!API_KEY) {
  console.error('Error: OpenAI API Key not found in src/.env or .env');
  process.exit(1);
}

const VOICE = 'nova';
const OUTPUT_DIR = path.join(rootDir, 'public', 'audio');

async function synthesizeText(text, outputPath, speed = 0.85) {
  if (fs.existsSync(outputPath)) return false;
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  console.log(`[Generating @ ${speed}x] "${text}" -> ${path.relative(OUTPUT_DIR, outputPath)}`);
  const response = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ model: 'tts-1', voice: VOICE, input: text, speed }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI TTS Error (${response.status}): ${await response.text()}`);
  }

  fs.writeFileSync(outputPath, Buffer.from(await response.arrayBuffer()));
  await new Promise((res) => setTimeout(res, 220));
  return true;
}

// Connector phrases combined with letter/number/word clips at runtime
const PHRASES = [
  { id: 'thats', text: "That's" },
  { id: 'lets_find', text: "Let's find" },
  { id: 'there_are', text: 'There are' },
  { id: 'count_to', text: "Let's count to" },
  { id: 'lets_trace_word', text: "Let's trace the word" },
  { id: 'you_need', text: 'You need' },
  { id: 'stars_for_sticker', text: 'stars for this sticker. Play more games to earn stars!' },
  { id: 'buddy_hello', text: "Hi there! I'm Buddy the Bear!" },
  { id: 'you_have', text: 'You have' },
  { id: 'stars_word', text: 'stars!' },
  { id: 'what_to_play', text: 'What would you like to play today?' },
  { id: 'tap_letters_to_spell', text: 'Tap the letters to spell' },
  { id: 'greet_slide_read', text: "Let's read together! Slide your finger under each word." },
  { id: 'slide_prompt', text: 'Slide your finger under the words!' },
  { id: 'read_it_all', text: 'You read it all by yourself!' },
];

const titleCase = (w) => w[0].toUpperCase() + w.slice(1).toLowerCase();

async function run() {
  let created = 0;
  const count = async (...args) => { if (await synthesizeText(...args)) created += 1; };

  for (const p of PHRASES) {
    await count(p.text, path.join(OUTPUT_DIR, 'phrases', `${p.id}.mp3`), 0.85);
  }

  // Subtraction answers can be zero
  await count('Zero', path.join(OUTPUT_DIR, 'numbers', '0.mp3'), 0.82);

  for (const story of STORIES) {
    await count(story.title, path.join(OUTPUT_DIR, 'stories', `${story.id}_title.mp3`), 0.82);
    // Pages are regenerated only if missing, so edited text needs its file deleted first
    for (const [i, page] of story.pages.entries()) {
      await count(page.text, path.join(OUTPUT_DIR, 'stories', `${story.id}_p${i}.mp3`), 0.82);
    }
  }

  // Slide & Read: each full sentence, read back after the child finishes sliding
  for (const sentence of READ_ALONG_SENTENCES) {
    await count(sentence.text, path.join(OUTPUT_DIR, 'readalong', `${sentence.id}.mp3`), 0.82);
  }

  // Every word a child can tap or slide over (numbers use the numbers/ clips)
  const words = new Set(
    [...STORIES.flatMap((s) => s.pages.map((p) => p.text)), ...READ_ALONG_SENTENCES.map((s) => s.text)]
      .flatMap((text) => text.split(/\s+/))
      .map((w) => w.toUpperCase().replace(/[^A-Z]/g, ''))
      .filter(Boolean)
  );
  for (const w of words) {
    await count(titleCase(w), path.join(OUTPUT_DIR, 'words', `${w}.mp3`), 0.80);
  }

  console.log(`✅ Done. Created ${created} new clip(s).`);
}

run().catch((err) => {
  console.error('Error generating audio:', err);
  process.exit(1);
});
