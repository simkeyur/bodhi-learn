import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Read OpenAI Key from src/.env or .env
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
  console.error('Error: OpenAI API Key not found in src/.env or .env');
  process.exit(1);
}

const VOICE = 'nova'; // Warm, clear, friendly kid-teacher voice
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
      speed: speed, // Slow, clear, patient pace for children
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI TTS Error (${response.status}): ${errorText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  fs.writeFileSync(outputPath, Buffer.from(arrayBuffer));
  // Small pause to be polite to rate limits
  await new Promise((res) => setTimeout(res, 250));
}

async function run() {
  const lettersDir = path.join(OUTPUT_DIR, 'letters');
  const wordsDir = path.join(OUTPUT_DIR, 'words');
  const numbersDir = path.join(OUTPUT_DIR, 'numbers');
  const storiesDir = path.join(OUTPUT_DIR, 'stories');
  const phrasesDir = path.join(OUTPUT_DIR, 'phrases');

  [lettersDir, wordsDir, numbersDir, storiesDir, phrasesDir].forEach((d) => {
    fs.mkdirSync(d, { recursive: true });
  });

  // 1. ALPHABET & PHONICS
  const ALPHABET = [
    { letter: 'A', word: 'Apple', phrase: 'A is for Apple. Sweet and crunchy!' },
    { letter: 'B', word: 'Ball', phrase: 'B is for Ball. Bounce, catch, and play!' },
    { letter: 'C', word: 'Cat', phrase: 'C is for Cat. Purr and meow!' },
    { letter: 'D', word: 'Dolphin', phrase: 'D is for Dolphin. Jumping in waves!' },
    { letter: 'E', word: 'Elephant', phrase: 'E is for Elephant with a long trunk!' },
    { letter: 'F', word: 'Frog', phrase: 'F is for Frog. Ribbit, hop hop!' },
    { letter: 'G', word: 'Giraffe', phrase: 'G is for Giraffe reaching the tall trees!' },
    { letter: 'H', word: 'Heart', phrase: 'H is for Heart. Full of love and joy!' },
    { letter: 'I', word: 'Ice Cream', phrase: 'I is for Ice Cream. Yummy and cool!' },
    { letter: 'J', word: 'Jellyfish', phrase: 'J is for Jellyfish glowing in the ocean!' },
    { letter: 'K', word: 'Kangaroo', phrase: 'K is for Kangaroo hopping high!' },
    { letter: 'L', word: 'Lion', phrase: 'L is for Lion. King of the jungle!' },
    { letter: 'M', word: 'Monkey', phrase: 'M is for Monkey swinging on branches!' },
    { letter: 'N', word: 'Nest', phrase: 'N is for Nest where baby birds sleep!' },
    { letter: 'O', word: 'Owl', phrase: 'O is for Owl. Wise in the night!' },
    { letter: 'P', word: 'Penguin', phrase: 'P is for Penguin waddling on ice!' },
    { letter: 'Q', word: 'Queen', phrase: 'Q is for Queen wearing a shining crown!' },
    { letter: 'R', word: 'Rocket', phrase: 'R is for Rocket zooming to the stars!' },
    { letter: 'S', word: 'Sun', phrase: 'S is for Sun shining warm and bright!' },
    { letter: 'T', word: 'Tiger', phrase: 'T is for Tiger with colorful stripes!' },
    { letter: 'U', word: 'Unicorn', phrase: 'U is for Unicorn sparkling with magic!' },
    { letter: 'V', word: 'Volcano', phrase: 'V is for Volcano tall and mighty!' },
    { letter: 'W', word: 'Whale', phrase: 'W is for Whale singing in the sea!' },
    { letter: 'X', word: 'Xylophone', phrase: 'X is for Xylophone playing musical notes!' },
    { letter: 'Y', word: 'Yacht', phrase: 'Y is for Yacht sailing on the water!' },
    { letter: 'Z', word: 'Zebra', phrase: 'Z is for Zebra with black and white stripes!' },
  ];

  for (const item of ALPHABET) {
    // Single letter
    await synthesizeText(item.letter, path.join(lettersDir, `${item.letter}.mp3`));
    // Phonics sentence
    await synthesizeText(item.phrase, path.join(lettersDir, `phonics_${item.letter}.mp3`));
  }

  // 2. NUMBERS 1 TO 20
  const numberNames = [
    'One', 'Two', 'Three', 'Four', 'Five',
    'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
    'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty'
  ];

  for (let i = 1; i <= 20; i++) {
    await synthesizeText(numberNames[i - 1], path.join(numbersDir, `${i}.mp3`));
  }

  // 3. WORDS & SPELLINGS
  const WORDS = [
    'APPLE', 'BALL', 'CAT', 'DOG', 'STAR', 'SUN', 'MOON',
    'FISH', 'BIRD', 'TREE', 'CAKE', 'BODHI',
    'SEE', 'CAN', 'BIG', 'RED', 'LIKE', 'PLAY', 'JUMP', 'BLUE', 'HELP',
    'HAPPY', 'FRIEND', 'ROCKET', 'MAGIC'
  ];

  for (const w of WORDS) {
    const titleCase = w[0].toUpperCase() + w.slice(1).toLowerCase();
    // Word alone: slow, clear, gentle pace (0.80x)
    await synthesizeText(titleCase, path.join(wordsDir, `${w}.mp3`), 0.80);
    // Spelling: e.g. "A, P, P, L, E. ... Apple." slow patient pace (0.74x)
    const spellLetters = w.split('').join(', ');
    const spellPrompt = `${spellLetters}. ... ${titleCase}.`;
    await synthesizeText(spellPrompt, path.join(wordsDir, `spelling_${w}.mp3`), 0.74);
  }

  // 4. STORIES
  const STORY_PAGES = [
    // Story 1: Bodhi and the Space Rocket
    { id: 's1_p0', text: 'Bodhi looked up at the night sky. The stars were twinkling bright.' },
    { id: 's1_p1', text: 'A friendly shiny rocket landed on the grass. "Hop in!" whispered the rocket.' },
    { id: 's1_p2', text: '3, 2, 1... Blast off! They zoomed past the yellow moon and smiling planets.' },
    { id: 's1_p3', text: 'Bodhi collected three golden stars to take home as a souvenir.' },
    { id: 's1_p4', text: '"What a wonderful adventure!" Bodhi said with a happy smile.' },

    // Story 2: The Puppy Who Loved To Count
    { id: 's2_p0', text: 'Barnaby the fluffy puppy loved walking in the sunny meadow.' },
    { id: 's2_p1', text: 'He saw 1 busy honey bee buzzing near a sweet daisy.' },
    { id: 's2_p2', text: 'Then he saw 2 playful butterflies dancing in the breeze.' },
    { id: 's2_p3', text: 'Under a big oak tree, he found 3 yummy bones waiting for him!' },
    { id: 's2_p4', text: 'Barnaby wagged his tail happily. Counting with friends was so much fun!' },
  ];

  for (const sp of STORY_PAGES) {
    await synthesizeText(sp.text, path.join(storiesDir, `${sp.id}.mp3`), 0.82);
  }

  // 5. CELEBRATIONS & ENCOURAGEMENTS
  const PHRASES = [
    { id: 'awesome', text: 'Awesome job!' },
    { id: 'you_did_it', text: 'You did it! High five!' },
    { id: 'star_earned', text: 'Hooray! You earned a star!' },
    { id: 'try_again', text: "Almost! Let's try one more time!" },
    { id: 'great_counting', text: 'Super counting!' },
    { id: 'great_tracing', text: 'Wonderful tracing! You did it!' },
  ];

  for (const ph of PHRASES) {
    await synthesizeText(ph.text, path.join(phrasesDir, `${ph.id}.mp3`), 0.85);
  }

  console.log('✅ All natural studio audio files generated successfully in public/audio/!');
}

run().catch((err) => {
  console.error('Fatal error generating audio:', err);
  process.exit(1);
});
