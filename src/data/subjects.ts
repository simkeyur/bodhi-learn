// The map of the app: four subjects, each with a quiz (any age, adaptive) and some games (younger ages).
// Pure data so the home screen, subject pages and tests all agree.

import type { Subject } from '../firebase/schema';

export interface Game {
  view: string; // view id understood by App.tsx
  title: string;
  blurb: string;
  icon: string;
  minAge: number;
  maxAge: number;
}

export interface SubjectInfo {
  id: Subject;
  title: string;
  icon: string;
  color: string;
  dark: string;
  tint: string;
  blurb: Record<'little' | 'explorer' | 'pro', string>;
  topics: string; // shown under the quiz entry
  games: Game[];
}

export const SUBJECT_INFO: Record<Subject, SubjectInfo> = {
  reading: {
    id: 'reading', title: 'Words', icon: '📖', color: '#F97316', dark: '#C2410C', tint: '#FFF7ED',
    blurb: { little: 'Letters, sounds and stories', explorer: 'Spelling, stories and grammar', pro: 'Vocabulary, grammar and reading' },
    topics: 'Rhymes, spelling, grammar, vocabulary and reading',
    games: [
      { view: 'phonics', title: 'Letters & Sounds', blurb: 'A–Z sound board and Letter Quest', icon: '🔤', minAge: 4, maxAge: 6 },
      { view: 'tracing-abc', title: 'ABC Tracing', blurb: 'Trace every letter with a magic brush', icon: '✏️', minAge: 4, maxAge: 5 },
      { view: 'tracing-words', title: 'Word Tracing', blurb: 'Trace whole words on handwriting lines', icon: '✍️', minAge: 4, maxAge: 7 },
      { view: 'sight-words', title: 'Sight Words', blurb: 'Spell words with letter puzzles', icon: '🧩', minAge: 5, maxAge: 8 },
      { view: 'slide-read', title: 'Slide & Read', blurb: 'Slide your finger under words to hear them', icon: '👉', minAge: 5, maxAge: 8 },
      { view: 'stories', title: 'Story Time', blurb: 'Read-along books, tap any word', icon: '📚', minAge: 4, maxAge: 9 },
    ],
  },
  math: {
    id: 'math', title: 'Math', icon: '🔢', color: '#0EA5E9', dark: '#0369A1', tint: '#F0F9FF',
    blurb: { little: 'Count, add and take away', explorer: 'Times tables, fractions and more', pro: 'Fractions, percentages and pre-algebra' },
    topics: 'From counting to algebra: it gets harder as you do',
    games: [
      { view: 'counting', title: 'Counting', blurb: 'Tap, pop & count with chimes', icon: '🎈', minAge: 4, maxAge: 6 },
      { view: 'math', title: 'Math Kitchen', blurb: 'Add & take away with yummy snacks', icon: '🍎', minAge: 4, maxAge: 8 },
    ],
  },
  logic: {
    id: 'logic', title: 'Logic', icon: '🧠', color: '#8B5CF6', dark: '#6D28D9', tint: '#F5F3FF',
    blurb: { little: 'Patterns and puzzles', explorer: 'Puzzles, patterns and coding', pro: 'Logic, binary, probability and code' },
    topics: 'Patterns, deduction, binary, probability and code',
    games: [
      { view: 'code-bot', title: 'Code the Bot', blurb: 'Program a robot with arrows to find the star', icon: '🤖', minAge: 5, maxAge: 11 },
      { view: 'patterns', title: 'Pattern Parade', blurb: 'What comes next? Spot the pattern', icon: '🎠', minAge: 4, maxAge: 9 },
      { view: 'machine', title: 'Magic Machine', blurb: 'Find the secret rule inside the machine', icon: '⚙️', minAge: 5, maxAge: 11 },
    ],
  },
  science: {
    id: 'science', title: 'Discover', icon: '🔭', color: '#10B981', dark: '#047857', tint: '#ECFDF5',
    blurb: { little: 'Animals, plants and weather', explorer: 'Space, nature and the human body', pro: 'Science, geography and history' },
    topics: 'Animals, space, the body, chemistry, physics and the world',
    games: [],
  },
};

export const SUBJECT_ORDER: Subject[] = ['reading', 'math', 'logic', 'science'];

export const gamesForAge = (subject: Subject, age: number): Game[] =>
  SUBJECT_INFO[subject].games.filter((g) => age >= g.minAge && age <= g.maxAge);

// All view ids that belong to a subject (for "which subject am I in?")
export const subjectOfView = (view: string): Subject | null => {
  for (const s of SUBJECT_ORDER) {
    if (view === `subject:${s}` || view === `quiz:${s}`) return s;
    if (SUBJECT_INFO[s].games.some((g) => g.view === view)) return s;
  }
  return null;
};

export const LEVEL_NAMES = ['', 'Starter', 'Starter', 'Easy', 'Easy', 'Medium', 'Medium', 'Hard', 'Hard', 'Expert', 'Expert'];
