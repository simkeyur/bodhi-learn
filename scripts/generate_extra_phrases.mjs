import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function getApiKey() {
  const envPaths = [
    path.join(rootDir, 'src', '.env'),
    path.join(rootDir, '.env'),
  ];
  for (const envPath of envPaths) {
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      const match = content.match(/openai_key\s*=\s*(.+)/i) || content.match(/OPENAI_API_KEY\s*=\s*(.+)/i);
      if (match && match[1]) {
        return match[1].trim().replace(/^['"]|['"]$/g, '');
      }
    }
  }
  return process.env.OPENAI_API_KEY || null;
}

const API_KEY = getApiKey();
if (!API_KEY) {
  console.error('Error: OpenAI API Key not found');
  process.exit(1);
}

const VOICE = 'nova';
const OUTPUT_DIR = path.join(rootDir, 'public', 'audio');

async function synthesizeText(text, outputPath, speed = 0.82) {
  if (fs.existsSync(outputPath)) {
    console.log(`[Skip] Already exists: ${path.basename(outputPath)}`);
    return;
  }

  console.log(`[Generating @ ${speed}x] "${text}" -> ${path.basename(outputPath)}`);
  const response = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'tts-1',
      voice: VOICE,
      input: text,
      speed: speed,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI TTS Error (${response.status}): ${errorText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  fs.writeFileSync(outputPath, Buffer.from(arrayBuffer));
  await new Promise((res) => setTimeout(res, 220));
}

async function run() {
  const phrasesDir = path.join(OUTPUT_DIR, 'phrases');
  const mathDir = path.join(OUTPUT_DIR, 'math');
  const sentencesDir = path.join(OUTPUT_DIR, 'sentences');

  [phrasesDir, mathDir, sentencesDir].forEach((d) => fs.mkdirSync(d, { recursive: true }));

  // 1. Math wrong / correct & questions
  const MATH_AUDIO = [
    { id: 'math_try_again', text: "Let's count the items together! Take your time.", speed: 0.80 },
    { id: 'math_correct', text: "That's right! You got it right! Star earned!", speed: 0.82 },
    { id: 'count_try_again', text: "Count carefully and try again! You can do it!", speed: 0.80 },
    { id: 'count_correct', text: "Yes! There are that many! You got a star!", speed: 0.82 },
    { id: 'how_many', text: "How many are there?", speed: 0.82 },
    { id: 'tap_and_count', text: "Tap and count the items!", speed: 0.82 },
    { id: 'what_is', text: "What is", speed: 0.82 },
    { id: 'plus', text: "plus", speed: 0.80 },
    { id: 'minus', text: "minus", speed: 0.80 },
    { id: 'equals', text: "equals", speed: 0.80 },
    { id: 'equals_what', text: "equals what?", speed: 0.82 },
  ];

  for (const m of MATH_AUDIO) {
    await synthesizeText(m.text, path.join(mathDir, `${m.id}.mp3`), m.speed);
  }

  // 2. Spelling & Quest feedback
  const FEEDBACK_AUDIO = [
    { id: 'spelling_try_again', text: "Oops! Let's try spelling it again.", speed: 0.80 },
    { id: 'spelling_correct', text: "You spelled the word! Awesome job!", speed: 0.82 },
    { id: 'letter_try_again', text: "Almost! Try another letter!", speed: 0.80 },
    { id: 'letter_correct', text: "Awesome! You found the letter! Star earned!", speed: 0.82 },
    { id: 'sticker_unlocked', text: "You unlocked a new sticker! Awesome!", speed: 0.82 },
    { id: 'sticker_need_stars', text: "Play more games to earn stars for this sticker!", speed: 0.82 },
    { id: 'story_finished', text: "You finished the whole story! You earned two stars!", speed: 0.82 },
  ];

  for (const fb of FEEDBACK_AUDIO) {
    await synthesizeText(fb.text, path.join(phrasesDir, `${fb.id}.mp3`), fb.speed);
  }

  // 3. Sight Word Example Sentences
  const SIGHT_WORD_SENTENCES = [
    { id: 'w1', text: 'I see a happy star!' },
    { id: 'w2', text: 'You can do anything!' },
    { id: 'w3', text: 'That is a big elephant!' },
    { id: 'w4', text: 'The apple is bright red.' },
    { id: 'w5', text: 'The warm sun is shining.' },
    { id: 'w6', text: 'The cute cat drinks milk.' },
    { id: 'w7', text: 'I like reading stories.' },
    { id: 'w8', text: 'Let us play together outside!' },
    { id: 'w9', text: 'Twinkle, twinkle little star.' },
    { id: 'w10', text: 'Watch the bunny jump high!' },
    { id: 'w11', text: 'The sky is clear and blue.' },
    { id: 'w12', text: 'Friends always help each other.' },
    { id: 'w13', text: 'Today is a happy day!' },
    { id: 'w14', text: 'You are my best friend!' },
    { id: 'w15', text: 'The rocket flies to the moon!' },
    { id: 'w16', text: 'The fairy has magic dust!' },
  ];

  for (const s of SIGHT_WORD_SENTENCES) {
    await synthesizeText(s.text, path.join(sentencesDir, `${s.id}.mp3`), 0.80);
  }

  // 4. Greetings
  const GREETINGS = [
    { id: 'greet_phonics', text: 'Let us explore the Alphabet!' },
    { id: 'greet_sight_words', text: 'Welcome to Sight Words Safari!' },
    { id: 'greet_stories', text: 'Pick a wonderful story to read!' },
    { id: 'greet_counting', text: 'Let us count together in the meadow!' },
    { id: 'greet_math', text: 'Time for fun visual math!' },
    { id: 'greet_stickers', text: 'Welcome to your sticker playground!' },
    { id: 'greet_tracing_abc', text: 'Welcome to the ABC Tracing Journey! Let us trace letters!' },
    { id: 'greet_tracing_words', text: 'Let us practice spelling and tracing words!' },
  ];

  for (const g of GREETINGS) {
    await synthesizeText(g.text, path.join(phrasesDir, `${g.id}.mp3`), 0.82);
  }

  console.log('✅ All prompt, feedback, math, and sentence natural audio files generated!');
}

run().catch((err) => {
  console.error('Error generating extra phrases:', err);
  process.exit(1);
});
