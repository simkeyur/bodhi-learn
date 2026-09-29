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

async function synthesizeText(text, outputPath, speed = 0.88) {
  if (fs.existsSync(outputPath)) {
    console.log(`[Skip] Exists: ${path.basename(outputPath)}`);
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
  await new Promise((res) => setTimeout(res, 250));
}

async function run() {
  const exclDir = path.join(OUTPUT_DIR, 'exclamations');
  const phrasesDir = path.join(OUTPUT_DIR, 'phrases');
  fs.mkdirSync(exclDir, { recursive: true });
  fs.mkdirSync(phrasesDir, { recursive: true });

  // 1. Fun kid exclamations for wins, stars, correct answers!
  const EXCLAMATIONS = [
    { id: 'woohoo', text: 'Woohoo!!', speed: 0.92 },
    { id: 'yay', text: 'Yay!!', speed: 0.92 },
    { id: 'hurray', text: 'Hurray!!', speed: 0.92 },
    { id: 'yippee', text: 'Yippee!!', speed: 0.92 },
    { id: 'super', text: 'Super duper!!', speed: 0.90 },
    { id: 'awesome', text: 'Awesome!!', speed: 0.90 },
    { id: 'bingo', text: 'Bingo! You did it!', speed: 0.88 },
    { id: 'high_five', text: 'High five!!', speed: 0.90 },
    { id: 'you_rock', text: 'You rock!!', speed: 0.90 },
    { id: 'shining_star', text: "You're a shining star!!", speed: 0.88 },
  ];

  for (const item of EXCLAMATIONS) {
    await synthesizeText(item.text, path.join(exclDir, `${item.id}.mp3`), item.speed);
  }

  // 2. Encouraging & Gentle phrases for retries / wrong answers
  const GENTLE_RETRY_PHRASES = [
    { id: 'oops_try_again', text: "Oops! Don't worry, let's try again!", speed: 0.85 },
    { id: 'almost_there', text: "Almost! You can do it! Give it another try!", speed: 0.85 },
    { id: 'not_quite', text: "Not quite, but good try! Let's do it together!", speed: 0.84 },
    { id: 'count_again', text: "Let's count them again! Take your time.", speed: 0.82 },
    { id: 'keep_trying', text: "Keep going! You are doing great!", speed: 0.85 },
  ];

  for (const item of GENTLE_RETRY_PHRASES) {
    await synthesizeText(item.text, path.join(phrasesDir, `${item.id}.mp3`), item.speed);
  }

  // 3. Spoken sentences for prompts & rewards
  const APP_SENTENCES = [
    { id: 'can_you_find', text: 'Can you find the letter', speed: 0.85 },
    { id: 'find_the_letter', text: 'Find the letter', speed: 0.85 },
    { id: 'trace_the_letter', text: 'Trace the letter', speed: 0.85 },
    { id: 'great_job_counting', text: 'Great job! You counted all of them!', speed: 0.85 },
    { id: 'you_spelled_word', text: 'You spelled and traced the word! Outstanding! You earned a star!', speed: 0.84 },
    { id: 'welcome_explorer', text: 'Hello little explorer! What would you like to play today?', speed: 0.85 },
    { id: 'how_many_quiz', text: 'How many items are there?', speed: 0.85 },
    { id: 'tap_and_count_prompt', text: 'Tap and count each item!', speed: 0.85 },
  ];

  for (const item of APP_SENTENCES) {
    await synthesizeText(item.text, path.join(phrasesDir, `${item.id}.mp3`), item.speed);
  }

  console.log('✅ Generated all exclamations and kid phrases!');
}

run().catch(console.error);
