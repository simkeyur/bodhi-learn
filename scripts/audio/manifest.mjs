// The single source of truth for every narrated clip in the app.
//
// Each entry is { path, text, style }:
//   path  - file path inside a voice set (matches the `clip` helpers in src/utils/speech.ts)
//   text  - exactly what is spoken
//   style - delivery direction for the TTS model (never spoken aloud)
//
// Content comes straight from src/data/learningData.ts and the clip id lists in
// src/utils/speech.ts, so adding a word, story or sentence there automatically
// adds its audio here. Only the hand-written prompts below need editing by hand.

import {
  ALPHABET_DATA,
  SIGHT_WORDS,
  STORIES,
  TRACING_WORDS,
  READ_ALONG_SENTENCES,
} from '../../src/data/learningData.ts';
import { EXCLAMATIONS, RETRY_PHRASES, wordKey } from '../../src/utils/speech.ts';

// Delivery styles, by kind of clip
export const STYLES = {
  letter: 'Say only the name of this single letter of the alphabet, clearly and warmly, like a kindergarten teacher pointing at it on a chart. No extra words.',
  phonics: 'Warm, playful kindergarten teacher introducing a letter to a young child. Gentle, unhurried pace with a short pause after the first sentence.',
  number: 'Say only this number, clearly and cheerfully, like counting objects together with a young child.',
  word: 'Say only this one word, clearly and naturally, at a gentle pace, as a teacher reading a flash card to a young child. Calm statement tone.',
  spelling: 'Spell the word slowly for a young child: say each letter name with a short, even pause between letters, then say the whole word happily.',
  cheer: 'Very excited and joyful, celebrating a young child\'s success. Big smile, bright and energetic, short and punchy.',
  encourage: 'Gentle, kind and reassuring teacher helping a young child who made a mistake. Never disappointed. Warm and patient.',
  prompt: 'Warm, friendly kindergarten teacher talking to a young child. Clear, gentle pace, inviting and happy.',
  // Fragments are stitched together with letters, numbers and words at runtime
  lead: 'Calm, friendly teacher voice. This is the start of a sentence that continues with another word: keep the pitch level at the end, no final falling tone, no pause.',
  tail: 'Calm, friendly teacher voice. This is the end of a sentence that began with other words: natural, warm finish.',
  story: 'Cozy, expressive storyteller reading a picture book aloud to a young child. Gentle pace, lively but soft, clear words.',
  sentence: 'Read this sentence naturally and clearly for a beginning reader. Gentle pace, friendly tone, every word distinct.',
};

// Hand-written prompts (phrases/ and math/). Keys are the ids passed to
// clip.phrase() / clip.math() in the app.
export const PHRASES = {
  // Greetings, played when a world opens
  greet_tracing_abc: ['prompt', "Welcome to ABC Tracing! Let's trace some letters!"],
  greet_tracing_words: ['prompt', "Let's practice tracing words!"],
  greet_phonics: ['prompt', "Let's explore letters and their sounds!"],
  greet_sight_words: ['prompt', "Welcome to Sight Words! Let's spell some words."],
  greet_stories: ['prompt', "It's story time! Pick a book to read."],
  greet_counting: ['prompt', "Let's count together in the meadow!"],
  greet_math: ['prompt', "Welcome to the Math Kitchen! Let's add and take away."],
  greet_stickers: ['prompt', 'Welcome to your sticker playground!'],
  greet_slide_read: ['prompt', "Let's read together! Slide your finger under each word."],

  // Buddy the Bear: buddy_hello, [you_have, <number>, stars_word], what_to_play
  buddy_hello: ['prompt', "Hi there! I'm Buddy the Bear!"],
  what_to_play: ['prompt', 'What would you like to play today?'],

  // Instructions
  tap_and_count_prompt: ['prompt', 'Tap each one and count out loud!'],
  how_many_quiz: ['prompt', 'How many are there?'],

  // Celebrations
  great_job_counting: ['cheer', 'Great job! You counted all of them!'],
  great_tracing: ['cheer', 'Wonderful tracing! You did it!'],
  star_earned: ['cheer', 'Hooray! You earned a star!'],
  sticker_unlocked: ['cheer', 'You unlocked a new sticker!'],
  story_finished: ['cheer', 'You finished the whole story! You earned two stars!'],
  you_spelled_word: ['cheer', 'You spelled and traced the word! You earned a star!'],

  // Gentle retries (oops_try_again, almost_there, keep_trying are picked at random)
  oops_try_again: ['encourage', "Oops! That's okay. Let's try again!"],
  almost_there: ['encourage', 'Almost! You can do it. Try one more time!'],
  keep_trying: ['encourage', "Keep going! You're doing great!"],
  count_again: ['encourage', "Let's count them again. Take your time!"],
  spelling_try_again: ['encourage', "Oops! Let's try spelling it again."],

  // Sentence starters, followed by a letter / number / word clip
  can_you_find: ['lead', 'Can you find the letter'],
  find_the_letter: ['lead', 'Find the letter'],
  trace_the_letter: ['lead', 'Trace the letter'],
  lets_find: ['lead', "Let's find"],
  lets_trace_word: ['lead', "Let's trace the word"],
  tap_letters_to_spell: ['lead', 'Tap the letters to spell'],
  thats: ['lead', "That's"],
  there_are: ['lead', 'There are'],
  count_to: ['lead', "Let's count to"],
  you_have: ['lead', 'You have'],
  you_need: ['lead', 'You need'],

  // Sentence endings, after a number clip
  stars_word: ['tail', 'stars!'],
  stars_for_sticker: ['tail', 'stars for this sticker. Play more games to earn stars!'],
};

export const MATH = {
  what_is: ['lead', 'What is'],
  plus: ['lead', 'plus'],
  minus: ['lead', 'minus'],
  equals: ['lead', 'equals'],
  math_try_again: ['encourage', "Let's count the items together. Take your time!"],
};

export const EXCLAMATION_TEXT = {
  woohoo: 'Woohoo!',
  yay: 'Yay!',
  hurray: 'Hooray!',
  yippee: 'Yippee!',
  super: 'Super duper!',
  awesome: 'Awesome!',
  bingo: 'Bingo! You did it!',
  high_five: 'High five!',
  you_rock: 'You rock!',
  shining_star: "You're a shining star!",
};

const NUMBER_NAMES = [
  'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
  'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty',
];

const titleCase = (w) => w[0].toUpperCase() + w.slice(1).toLowerCase();

export function buildManifest() {
  const entries = [];
  const add = (path, text, style) => entries.push({ path, text, style: STYLES[style], kind: style });

  // Letters: name + "A is for Apple..." sentence
  for (const item of ALPHABET_DATA) {
    add(`letters/${item.letter}.mp3`, item.letter, 'letter');
    add(`letters/phonics_${item.letter}.mp3`, item.sentence, 'phonics');
  }

  // Numbers 0-20 (counting goes to 15, sums to 20, subtraction can hit 0)
  NUMBER_NAMES.forEach((name, n) => add(`numbers/${n}.mp3`, name, 'number'));

  // Every single word the child can hear: sight words, tracing words, story words, slide & read words
  const words = new Set([
    ...SIGHT_WORDS.map((w) => w.word),
    ...TRACING_WORDS.map((w) => w.word),
    ...STORIES.flatMap((s) => s.pages.flatMap((p) => p.text.split(/\s+/))),
    ...READ_ALONG_SENTENCES.flatMap((s) => s.text.split(/\s+/)),
  ].map(wordKey).filter(Boolean));
  for (const w of [...words].sort()) {
    add(`words/${w}.mp3`, titleCase(w), 'word');
  }

  // Spelled-out words for sight words and word tracing: "C, A, T... Cat!"
  const spelled = new Set([...SIGHT_WORDS, ...TRACING_WORDS].map((w) => wordKey(w.word)));
  for (const w of [...spelled].sort()) {
    add(`words/spelling_${w}.mp3`, `${w.split('').join(', ')}... ${titleCase(w)}!`, 'spelling');
  }

  // Sight word example sentences
  for (const w of SIGHT_WORDS) {
    add(`sentences/${w.id}.mp3`, w.exampleSentence, 'sentence');
  }

  // Stories
  for (const story of STORIES) {
    add(`stories/${story.id}_title.mp3`, story.title, 'story');
    story.pages.forEach((page, i) => add(`stories/${story.id}_p${i}.mp3`, page.text, 'story'));
  }

  // Slide & Read full sentences
  for (const s of READ_ALONG_SENTENCES) {
    add(`readalong/${s.id}.mp3`, s.text, 'sentence');
  }

  // Cheers
  for (const id of EXCLAMATIONS) {
    if (!EXCLAMATION_TEXT[id]) throw new Error(`No text for exclamation "${id}" in manifest.mjs`);
    add(`exclamations/${id}.mp3`, EXCLAMATION_TEXT[id], 'cheer');
  }

  // Prompts and math
  for (const id of RETRY_PHRASES) {
    if (!PHRASES[id]) throw new Error(`No text for retry phrase "${id}" in manifest.mjs`);
  }
  for (const [id, [style, text]] of Object.entries(PHRASES)) add(`phrases/${id}.mp3`, text, style);
  for (const [id, [style, text]] of Object.entries(MATH)) add(`math/${id}.mp3`, text, style);

  return entries;
}
