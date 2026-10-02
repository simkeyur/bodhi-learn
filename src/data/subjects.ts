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
  color: string;
  dark: string;
  tint: string;
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
      { view: 'phonics', title: 'Letters & Sounds', blurb: 'A–Z sound board and Letter Quest', icon: '🔤', minAge: 4, maxAge: 6, color: '#38BDF8', dark: '#0284C7', tint: '#F0F9FF' },
      { view: 'tracing-abc', title: 'ABC Tracing', blurb: 'Trace every letter with a magic brush', icon: '✏️', minAge: 4, maxAge: 5, color: '#FB7185', dark: '#E11D48', tint: '#FFF1F2' },
      { view: 'tracing-words', title: 'Word Tracing', blurb: 'Trace whole words on handwriting lines', icon: '✍️', minAge: 4, maxAge: 7, color: '#8B5CF6', dark: '#6D28D9', tint: '#F5F3FF' },
      { view: 'sight-words', title: 'Sight Words', blurb: 'Spell words with letter puzzles', icon: '🧩', minAge: 5, maxAge: 8, color: '#C084FC', dark: '#9333EA', tint: '#FAF5FF' },
      { view: 'slide-read', title: 'Slide & Read', blurb: 'Slide your finger under words to hear them', icon: '👉', minAge: 5, maxAge: 8, color: '#3B82F6', dark: '#1E3A8A', tint: '#EFF6FF' },
      { view: 'stories', title: 'Story Time', blurb: 'Read-along books, tap any word', icon: '📚', minAge: 4, maxAge: 9, color: '#F97316', dark: '#C2410C', tint: '#FFF7ED' },
    ],
  },
  math: {
    id: 'math', title: 'Math', icon: '🔢', color: '#0EA5E9', dark: '#0369A1', tint: '#F0F9FF',
    blurb: { little: 'Count, add and take away', explorer: 'Times tables, fractions and more', pro: 'Fractions, percentages and pre-algebra' },
    topics: 'From counting to algebra: it gets harder as you do',
    games: [
      { view: 'counting', title: 'Counting', blurb: 'Tap, pop & count with chimes', icon: '🎈', minAge: 4, maxAge: 6, color: '#10B981', dark: '#059669', tint: '#ECFDF5' },
      { view: 'math', title: 'Math Kitchen', blurb: 'Add & take away with yummy snacks', icon: '🍎', minAge: 4, maxAge: 8, color: '#F59E0B', dark: '#D97706', tint: '#FFFBEB' },
    ],
  },
  logic: {
    id: 'logic', title: 'Logic', icon: '🧠', color: '#8B5CF6', dark: '#6D28D9', tint: '#F5F3FF',
    blurb: { little: 'Patterns and puzzles', explorer: 'Puzzles, patterns and coding', pro: 'Logic, binary, probability and code' },
    topics: 'Patterns, deduction, binary, probability and code',
    games: [
      { view: 'code-bot', title: 'Code the Bot', blurb: 'Program a robot with arrows to find the star', icon: '🤖', minAge: 5, maxAge: 11, color: '#14B8A6', dark: '#0F766E', tint: '#F0FDFA' },
      { view: 'patterns', title: 'Pattern Parade', blurb: 'What comes next? Spot the pattern', icon: '🎠', minAge: 4, maxAge: 9, color: '#EC4899', dark: '#BE185D', tint: '#FDF2F8' },
      { view: 'machine', title: 'Magic Machine', blurb: 'Find the secret rule inside the machine', icon: '⚙️', minAge: 5, maxAge: 11, color: '#0891B2', dark: '#155E75', tint: '#ECFEFF' },
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

export const LEVEL_NAMES = ['', 'Starter', 'Starter', 'Easy', 'Easy', 'Medium', 'Medium', 'Hard', 'Hard', 'Expert', 'Expert'];
