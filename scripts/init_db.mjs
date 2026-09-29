import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { DatabaseSync } from 'node:sqlite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const dbDir = path.join(rootDir, 'db');
const dbPath = path.join(dbDir, 'bodhi_learn.db');
const schemaPath = path.join(dbDir, 'schema.sql');
const seedPath = path.join(dbDir, 'seed.sql');

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Remove old db if exists to start fresh
if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
}

const db = new DatabaseSync(dbPath);

// Execute Schema
const schemaSql = fs.readFileSync(schemaPath, 'utf-8');
db.exec(schemaSql);

// Curriculum Datasets
const ALPHABET_DATA = [
  { letter: 'A', word: 'Apple', emoji: '🍎', color: '#F87171', phonicsSound: 'ah', sentence: 'A is for Apple. Sweet and crunchy!' },
  { letter: 'B', word: 'Ball', emoji: '⚽', color: '#3B82F6', phonicsSound: 'buh', sentence: 'B is for Ball. Bounce, catch, and play!' },
  { letter: 'C', word: 'Cat', emoji: '🐱', color: '#FBBF24', phonicsSound: 'kuh', sentence: 'C is for Cat. Purr and meow!' },
  { letter: 'D', word: 'Dolphin', emoji: '🐬', color: '#38BDF8', phonicsSound: 'duh', sentence: 'D is for Dolphin. Jumping in waves!' },
  { letter: 'E', word: 'Elephant', emoji: '🐘', color: '#818CF8', phonicsSound: 'eh', sentence: 'E is for Elephant with a long trunk!' },
  { letter: 'F', word: 'Frog', emoji: '🐸', color: '#4ADE80', phonicsSound: 'fuh', sentence: 'F is for Frog. Ribbit, hop hop!' },
  { letter: 'G', word: 'Giraffe', emoji: '🦒', color: '#FACC15', phonicsSound: 'juh', sentence: 'G is for Giraffe reaching the tall trees!' },
  { letter: 'H', word: 'Heart', emoji: '💖', color: '#F472B6', phonicsSound: 'huh', sentence: 'H is for Heart. Full of love and joy!' },
  { letter: 'I', word: 'Ice Cream', emoji: '🍦', color: '#F43F5E', phonicsSound: 'eye', sentence: 'I is for Ice Cream. Yummy and cool!' },
  { letter: 'J', word: 'Jellyfish', emoji: '🪼', color: '#A78BFA', phonicsSound: 'juh', sentence: 'J is for Jellyfish glowing in the ocean!' },
  { letter: 'K', word: 'Kangaroo', emoji: '🦘', color: '#EA580C', phonicsSound: 'kuh', sentence: 'K is for Kangaroo hopping high!' },
  { letter: 'L', word: 'Lion', emoji: '🦁', color: '#EAB308', phonicsSound: 'luh', sentence: 'L is for Lion. King of the jungle!' },
  { letter: 'M', word: 'Monkey', emoji: '🐵', color: '#D97706', phonicsSound: 'muh', sentence: 'M is for Monkey swinging on branches!' },
  { letter: 'N', word: 'Nest', emoji: '🪺', color: '#B45309', phonicsSound: 'nuh', sentence: 'N is for Nest where baby birds sleep!' },
  { letter: 'O', word: 'Owl', emoji: '🦉', color: '#9333EA', phonicsSound: 'awe', sentence: 'O is for Owl. Wise in the night!' },
  { letter: 'P', word: 'Penguin', emoji: '🐧', color: '#0284C7', phonicsSound: 'puh', sentence: 'P is for Penguin waddling on ice!' },
  { letter: 'Q', word: 'Queen', emoji: '👑', color: '#C084FC', phonicsSound: 'kwuh', sentence: 'Q is for Queen wearing a shining crown!' },
  { letter: 'R', word: 'Rocket', emoji: '🚀', color: '#EF4444', phonicsSound: 'ruh', sentence: 'R is for Rocket zooming to the stars!' },
  { letter: 'S', word: 'Sun', emoji: '☀️', color: '#F59E0B', phonicsSound: 'sss', sentence: 'S is for Sun shining warm and bright!' },
  { letter: 'T', word: 'Tiger', emoji: '🐯', color: '#F97316', phonicsSound: 'tuh', sentence: 'T is for Tiger with colorful stripes!' },
  { letter: 'U', word: 'Unicorn', emoji: '🦄', color: '#EC4899', phonicsSound: 'you', sentence: 'U is for Unicorn sparkling with magic!' },
  { letter: 'V', word: 'Volcano', emoji: '🌋', color: '#DC2626', phonicsSound: 'vuh', sentence: 'V is for Volcano tall and mighty!' },
  { letter: 'W', word: 'Whale', emoji: '🐳', color: '#0EA5E9', phonicsSound: 'wuh', sentence: 'W is for Whale singing in the sea!' },
  { letter: 'X', word: 'Xylophone', emoji: '🎼', color: '#10B981', phonicsSound: 'zyl', sentence: 'X is for Xylophone playing musical notes!' },
  { letter: 'Y', word: 'Yacht', emoji: '⛵', color: '#06B6D4', phonicsSound: 'yuh', sentence: 'Y is for Yacht sailing on the water!' },
  { letter: 'Z', word: 'Zebra', emoji: '🦓', color: '#64748B', phonicsSound: 'zzz', sentence: 'Z is for Zebra with black and white stripes!' },
];

const SIGHT_WORDS = [
  { id: 'w1', word: 'SEE', level: 'pre-k', hint: 'Look with your eyes', emoji: '👀', exampleSentence: 'I see a happy star!' },
  { id: 'w2', word: 'CAN', level: 'pre-k', hint: 'You are able to do it', emoji: '💪', exampleSentence: 'You can do anything!' },
  { id: 'w3', word: 'BIG', level: 'pre-k', hint: 'Huge and tall', emoji: '🐘', exampleSentence: 'That is a big elephant!' },
  { id: 'w4', word: 'RED', level: 'pre-k', hint: 'Color of strawberries', emoji: '🍓', exampleSentence: 'The apple is bright red.' },
  { id: 'w5', word: 'SUN', level: 'pre-k', hint: 'Shines in the sky', emoji: '☀️', exampleSentence: 'The warm sun is shining.' },
  { id: 'w6', word: 'CAT', level: 'pre-k', hint: 'A furry friend who purrs', emoji: '🐱', exampleSentence: 'The cute cat drinks milk.' },
  { id: 'w7', word: 'LIKE', level: 'kindergarten', hint: 'Something you enjoy', emoji: '👍', exampleSentence: 'I like reading stories.' },
  { id: 'w8', word: 'PLAY', level: 'kindergarten', hint: 'Have fun with friends', emoji: '⚽', exampleSentence: 'Let us play together outside!' },
  { id: 'w9', word: 'STAR', level: 'kindergarten', hint: 'Twinkling in night sky', emoji: '⭐', exampleSentence: 'Twinkle, twinkle little star.' },
  { id: 'w10', word: 'JUMP', level: 'kindergarten', hint: 'Hop off both feet', emoji: '🦘', exampleSentence: 'Watch the bunny jump high!' },
  { id: 'w11', word: 'BLUE', level: 'kindergarten', hint: 'Color of the ocean', emoji: '🌊', exampleSentence: 'The sky is clear and blue.' },
  { id: 'w12', word: 'HELP', level: 'kindergarten', hint: 'Give a hand to someone', emoji: '🤝', exampleSentence: 'Friends always help each other.' },
  { id: 'w13', word: 'HAPPY', level: 'grade1', hint: 'Big smile on your face', emoji: '😄', exampleSentence: 'Today is a happy day!' },
  { id: 'w14', word: 'FRIEND', level: 'grade1', hint: 'Someone you care about', emoji: '🧸', exampleSentence: 'You are my best friend!' },
  { id: 'w15', word: 'ROCKET', level: 'grade1', hint: 'Flies into outer space', emoji: '🚀', exampleSentence: 'The rocket flies to the moon!' },
  { id: 'w16', word: 'MAGIC', level: 'grade1', hint: 'Full of wonder and sparkles', emoji: '✨', exampleSentence: 'The fairy has magic dust!' },
];

const STORIES = [
  {
    id: 's1',
    title: 'Bodhi and the Space Rocket',
    coverEmoji: '🚀',
    pages: [
      { text: 'Bodhi looked up at the night sky. The stars were twinkling bright.', imageEmoji: '✨', bgColor: '#1E1B4B' },
      { text: 'A friendly shiny rocket landed on the grass. "Hop in!" whispered the rocket.', imageEmoji: '🚀', bgColor: '#312E81' },
      { text: '3, 2, 1... Blast off! They zoomed past the yellow moon and smiling planets.', imageEmoji: '🌕', bgColor: '#0F172A' },
      { text: 'Bodhi collected three golden stars to take home as a souvenir.', imageEmoji: '⭐', bgColor: '#1E293B' },
      { text: '"What a wonderful adventure!" Bodhi said with a happy smile.', imageEmoji: '🥰', bgColor: '#3730A3' },
    ]
  },
  {
    id: 's2',
    title: 'The Puppy Who Loved To Count',
    coverEmoji: '🐶',
    pages: [
      { text: 'Barnaby the fluffy puppy loved walking in the sunny meadow.', imageEmoji: '🐶', bgColor: '#ECFDF5' },
      { text: 'He saw 1 busy honey bee buzzing near a sweet daisy.', imageEmoji: '🐝', bgColor: '#FEF3C7' },
      { text: 'Then he saw 2 playful butterflies dancing in the breeze.', imageEmoji: '🦋', bgColor: '#FEE2E2' },
      { text: 'Under a big oak tree, he found 3 yummy bones waiting for him!', imageEmoji: '🦴', bgColor: '#E0E7FF' },
      { text: 'Barnaby wagged his tail happily. Counting with friends was so much fun!', imageEmoji: '🐾', bgColor: '#F3E8FF' },
    ]
  }
];

const REWARD_STICKERS = [
  { id: 'st1', name: 'Super Star', emoji: '⭐', costStars: 3 },
  { id: 'st2', name: 'Rocket Rider', emoji: '🚀', costStars: 5 },
  { id: 'st3', name: 'Dancing Dino', emoji: '🦖', costStars: 5 },
  { id: 'st4', name: 'Magic Unicorn', emoji: '🦄', costStars: 6 },
  { id: 'st5', name: 'Rainbow Joy', emoji: '🌈', costStars: 4 },
  { id: 'st6', name: 'Cool Panda', emoji: '🐼', costStars: 6 },
  { id: 'st7', name: 'Golden Trophy', emoji: '🏆', costStars: 8 },
  { id: 'st8', name: 'Friendly Robot', emoji: '🤖', costStars: 7 },
  { id: 'st9', name: 'Sweet Cupcake', emoji: '🧁', costStars: 4 },
  { id: 'st10', name: 'Space Alien', emoji: '👾', costStars: 6 },
  { id: 'st11', name: 'Crown of Glory', emoji: '👑', costStars: 8 },
  { id: 'st12', name: 'Heart Balloon', emoji: '🎈', costStars: 4 },
];

const TRACING_WORDS = [
  { id: 'tw1', word: 'APPLE', emoji: '🍎', hint: 'Sweet and crunchy fruit' },
  { id: 'tw2', word: 'BALL', emoji: '⚽', hint: 'Bouncy round toy' },
  { id: 'tw3', word: 'CAT', emoji: '🐱', hint: 'Playful furry friend' },
  { id: 'tw4', word: 'DOG', emoji: '🐶', hint: 'Loyal puppy friend' },
  { id: 'tw5', word: 'STAR', emoji: '⭐', hint: 'Twinkling night light' },
  { id: 'tw6', word: 'SUN', emoji: '☀️', hint: 'Warm and bright' },
  { id: 'tw7', word: 'MOON', emoji: '🌙', hint: 'Glows in the dark sky' },
  { id: 'tw8', word: 'FISH', emoji: '🐟', hint: 'Swims in the clear water' },
  { id: 'tw9', word: 'BIRD', emoji: '🐦', hint: 'Flies high in the sky' },
  { id: 'tw10', word: 'TREE', emoji: '🌳', hint: 'Tall and green' },
  { id: 'tw11', word: 'CAKE', emoji: '🎂', hint: 'Sweet birthday treat' },
  { id: 'tw12', word: 'BODHI', emoji: '🌟', hint: 'Super star learner!' },
];

// SQL accumulator for seed.sql export
let seedSqlLines = ['-- Seed Data for Bodhi Learn (Cloudflare D1 & SQLite)\n'];

// 1. Insert Alphabet
const insertAlpha = db.prepare(`
  INSERT INTO alphabet (letter, word, emoji, color, phonics_sound, sentence)
  VALUES (?, ?, ?, ?, ?, ?)
`);

for (const a of ALPHABET_DATA) {
  insertAlpha.run(a.letter, a.word, a.emoji, a.color, a.phonicsSound, a.sentence);
  seedSqlLines.push(`INSERT OR REPLACE INTO alphabet (letter, word, emoji, color, phonics_sound, sentence) VALUES ('${a.letter}', '${a.word.replace(/'/g, "''")}', '${a.emoji}', '${a.color}', '${a.phonicsSound}', '${a.sentence.replace(/'/g, "''")}');`);
}

// 2. Insert Sight Words
const insertWord = db.prepare(`
  INSERT INTO sight_words (id, word, level, hint, emoji, example_sentence)
  VALUES (?, ?, ?, ?, ?, ?)
`);

for (const w of SIGHT_WORDS) {
  insertWord.run(w.id, w.word, w.level, w.hint, w.emoji, w.exampleSentence);
  seedSqlLines.push(`INSERT OR REPLACE INTO sight_words (id, word, level, hint, emoji, example_sentence) VALUES ('${w.id}', '${w.word}', '${w.level}', '${w.hint.replace(/'/g, "''")}', '${w.emoji}', '${w.exampleSentence.replace(/'/g, "''")}');`);
}

// 3. Insert Stories & Pages
const insertStory = db.prepare(`INSERT INTO stories (id, title, cover_emoji) VALUES (?, ?, ?)`);
const insertPage = db.prepare(`
  INSERT INTO story_pages (story_id, page_order, text, image_emoji, bg_color)
  VALUES (?, ?, ?, ?, ?)
`);

for (const s of STORIES) {
  insertStory.run(s.id, s.title, s.coverEmoji);
  seedSqlLines.push(`INSERT OR REPLACE INTO stories (id, title, cover_emoji) VALUES ('${s.id}', '${s.title.replace(/'/g, "''")}', '${s.coverEmoji}');`);

  s.pages.forEach((p, idx) => {
    insertPage.run(s.id, idx, p.text, p.imageEmoji, p.bgColor);
    seedSqlLines.push(`INSERT INTO story_pages (story_id, page_order, text, image_emoji, bg_color) VALUES ('${s.id}', ${idx}, '${p.text.replace(/'/g, "''")}', '${p.imageEmoji}', '${p.bgColor}');`);
  });
}

// 4. Insert Stickers
const insertSticker = db.prepare(`INSERT INTO reward_stickers (id, name, emoji, cost_stars) VALUES (?, ?, ?, ?)`);

for (const st of REWARD_STICKERS) {
  insertSticker.run(st.id, st.name, st.emoji, st.costStars);
  seedSqlLines.push(`INSERT OR REPLACE INTO reward_stickers (id, name, emoji, cost_stars) VALUES ('${st.id}', '${st.name.replace(/'/g, "''")}', '${st.emoji}', ${st.costStars});`);
}

// 5. Insert Tracing Words
const insertTracing = db.prepare(`INSERT INTO tracing_words (id, word, emoji, hint) VALUES (?, ?, ?, ?)`);

for (const tw of TRACING_WORDS) {
  insertTracing.run(tw.id, tw.word, tw.emoji, tw.hint);
  seedSqlLines.push(`INSERT OR REPLACE INTO tracing_words (id, word, emoji, hint) VALUES ('${tw.id}', '${tw.word}', '${tw.emoji}', '${tw.hint.replace(/'/g, "''")}');`);
}

// Write seed.sql
fs.writeFileSync(seedPath, seedSqlLines.join('\n'));

console.log('✅ SQLite database created at: db/bodhi_learn.db');
console.log('✅ Seed SQL script created at: db/seed.sql');

// Quick validation query
const countAlpha = db.prepare('SELECT count(*) as count FROM alphabet').get();
const countWords = db.prepare('SELECT count(*) as count FROM sight_words').get();
const countStories = db.prepare('SELECT count(*) as count FROM stories').get();
const countPages = db.prepare('SELECT count(*) as count FROM story_pages').get();
const countStickers = db.prepare('SELECT count(*) as count FROM reward_stickers').get();
const countTracing = db.prepare('SELECT count(*) as count FROM tracing_words').get();

console.log(`Database Contents:
- Alphabet letters: ${countAlpha.count}
- Sight words: ${countWords.count}
- Stories: ${countStories.count} (Pages: ${countPages.count})
- Reward stickers: ${countStickers.count}
- Tracing words: ${countTracing.count}
`);
