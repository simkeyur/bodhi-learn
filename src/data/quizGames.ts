// The quiz games: each subject has several, every one a different topic group and way to play.
// They all share the subject's adaptive level (skills[subject].level). Pure data, no React.

import type { Subject } from '../firebase/schema';

// round:  8 questions, then a score
// sprint: 60 seconds, as many as you can
// lives:  3 lives, keep going until they run out
export type GameMode = 'round' | 'sprint' | 'lives';

export interface QuizGame {
  id: string;
  subject: Subject;
  title: string;
  blurb: string;
  icon: string;
  color: string;
  dark: string;
  tint: string;
  topics: string[]; // question topics this game draws from
  mode: GameMode;
  minAge: number;
  maxAge: number;
}

export const SPRINT_SECONDS = 60;
export const ROUND_QUESTIONS = 8;
export const LIVES = 3;
export const LIVES_CAP = 20; // a lives game ends after this many even if no lives were lost

export const MODE_LABEL: Record<GameMode, string> = {
  round: '8 questions',
  sprint: `Beat the clock · ${SPRINT_SECONDS}s`,
  lives: `${LIVES} lives · how far can you go?`,
};

export const QUIZ_GAMES: QuizGame[] = [
  // ----- Words -----
  {
    id: 'rhyme-time', subject: 'reading', title: 'Rhyme Time', icon: '🎵', mode: 'round', minAge: 4, maxAge: 8,
    blurb: 'Rhymes, sounds and spelling',
    topics: ['rhymes', 'sounds', 'letters', 'spelling', 'phonics', 'compound words', 'plurals', 'opposites'],
    color: '#FB7185', dark: '#E11D48', tint: '#FFF1F2',
  },
  {
    id: 'grammar-gym', subject: 'reading', title: 'Grammar Gym', icon: '💪', mode: 'round', minAge: 6, maxAge: 14,
    blurb: 'Sentences, punctuation and parts of speech',
    topics: ['sentences', 'punctuation', 'verbs', 'adjectives', 'nouns', 'tenses', 'contractions', 'parts of speech', 'grammar', 'homophones', 'commonly confused', 'plurals'],
    color: '#F97316', dark: '#C2410C', tint: '#FFF7ED',
  },
  {
    id: 'word-rush', subject: 'reading', title: 'Word Rush', icon: '⚡', mode: 'sprint', minAge: 7, maxAge: 14,
    blurb: 'Synonyms, opposites and word roots',
    topics: ['synonyms', 'antonyms', 'vocabulary', 'prefixes', 'word roots', 'context clues', 'connotation', 'opposites'],
    color: '#F59E0B', dark: '#B45309', tint: '#FFFBEB',
  },
  {
    id: 'story-sense', subject: 'reading', title: 'Story Sense', icon: '🕵️', mode: 'round', minAge: 7, maxAge: 14,
    blurb: 'Read between the lines',
    topics: ['comprehension', 'inference', 'figurative', 'literary devices', 'theme', 'purpose', 'genres', 'tone', 'rhetoric'],
    color: '#C084FC', dark: '#9333EA', tint: '#FAF5FF',
  },

  // ----- Math -----
  {
    id: 'quick-facts', subject: 'math', title: 'Quick Facts', icon: '⚡', mode: 'sprint', minAge: 4, maxAge: 14,
    blurb: 'Add, subtract, times and divide, fast',
    topics: ['addition', 'subtraction', 'multiplication', 'division'],
    color: '#0EA5E9', dark: '#0369A1', tint: '#F0F9FF',
  },
  {
    id: 'word-problems', subject: 'math', title: 'Word Problems', icon: '📝', mode: 'round', minAge: 5, maxAge: 14,
    blurb: 'Stories with a number to find',
    topics: ['word problems'],
    color: '#6366F1', dark: '#4338CA', tint: '#EEF2FF',
  },
  {
    id: 'shape-up', subject: 'math', title: 'Shape Up', icon: '📐', mode: 'round', minAge: 5, maxAge: 14,
    blurb: 'Sides, angles, area and volume',
    topics: ['geometry'],
    color: '#10B981', dark: '#047857', tint: '#ECFDF5',
  },
  {
    id: 'fraction-fun', subject: 'math', title: 'Fraction Fun', icon: '🍕', mode: 'round', minAge: 8, maxAge: 14,
    blurb: 'Fractions, decimals and percentages',
    topics: ['fractions', 'decimals', 'percentages'],
    color: '#F59E0B', dark: '#B45309', tint: '#FFFBEB',
  },
  {
    id: 'equation-lab', subject: 'math', title: 'Equation Lab', icon: '🧪', mode: 'round', minAge: 10, maxAge: 14,
    blurb: 'Algebra, powers, ratios and negatives',
    topics: ['algebra', 'exponents', 'order of operations', 'negative numbers', 'ratios', 'statistics'],
    color: '#8B5CF6', dark: '#6D28D9', tint: '#F5F3FF',
  },

  // ----- Logic -----
  {
    id: 'pattern-pop', subject: 'logic', title: 'Pattern Pop', icon: '🔮', mode: 'round', minAge: 4, maxAge: 14,
    blurb: 'What comes next? Spot the rule',
    topics: ['patterns', 'sequences', 'shapes', 'sorting', 'odd one out'],
    color: '#EC4899', dark: '#BE185D', tint: '#FDF2F8',
  },
  {
    id: 'brain-teasers', subject: 'logic', title: 'Brain Teasers', icon: '🧩', mode: 'round', minAge: 5, maxAge: 14,
    blurb: 'Riddles and reasoning',
    topics: ['puzzle', 'reasoning', 'deduction', 'time'],
    color: '#14B8A6', dark: '#0F766E', tint: '#F0FDFA',
  },
  {
    id: 'code-breakers', subject: 'logic', title: 'Code Breakers', icon: '💻', mode: 'lives', minAge: 7, maxAge: 14,
    blurb: 'Binary, codes and true or false',
    topics: ['code', 'binary', 'boolean', 'cipher', 'algorithms'],
    color: '#4F46E5', dark: '#3730A3', tint: '#EEF2FF',
  },
  {
    id: 'chance-counting', subject: 'logic', title: 'Chance & Counting', icon: '🎲', mode: 'round', minAge: 9, maxAge: 14,
    blurb: 'Odds, arrangements and primes',
    topics: ['probability', 'combinatorics', 'number theory'],
    color: '#F59E0B', dark: '#B45309', tint: '#FFFBEB',
  },

  // ----- Discover -----
  {
    id: 'living-world', subject: 'science', title: 'Living World', icon: '🌿', mode: 'round', minAge: 4, maxAge: 14,
    blurb: 'Animals, plants and the human body',
    topics: ['animals', 'plants', 'life cycles', 'food', 'body', 'senses', 'cells', 'genetics'],
    color: '#10B981', dark: '#047857', tint: '#ECFDF5',
  },
  {
    id: 'space-earth', subject: 'science', title: 'Space & Earth', icon: '🚀', mode: 'lives', minAge: 4, maxAge: 14,
    blurb: 'Planets, weather and places',
    topics: ['space', 'earth', 'weather', 'seasons', 'geography', 'history'],
    color: '#3B82F6', dark: '#1D4ED8', tint: '#EFF6FF',
  },
  {
    id: 'flags-capitals', subject: 'science', title: 'Flags & Capitals', icon: '🌍', mode: 'round', minAge: 7, maxAge: 14,
    blurb: 'Flags, capital cities and continents',
    topics: ['flags', 'capitals', 'countries'],
    color: '#0EA5E9', dark: '#0369A1', tint: '#F0F9FF',
  },
  {
    id: 'predict-it', subject: 'science', title: 'Predict It', icon: '🤔', mode: 'round', minAge: 9, maxAge: 14,
    blurb: 'What will happen? Think like a scientist',
    topics: ['predictions'],
    color: '#8B5CF6', dark: '#6D28D9', tint: '#F5F3FF',
  },
  {
    id: 'matter-energy', subject: 'science', title: 'Matter & Energy', icon: '⚗️', mode: 'round', minAge: 6, maxAge: 14,
    blurb: 'Forces, light, atoms and chemistry',
    topics: ['matter', 'forces', 'energy', 'light', 'chemistry', 'physics', 'atoms'],
    color: '#F43F5E', dark: '#BE123C', tint: '#FFF1F2',
  },
];

export const gameById = (id: string): QuizGame | undefined => QUIZ_GAMES.find((g) => g.id === id);

export const quizGamesFor = (subject: Subject, age: number): QuizGame[] =>
  QUIZ_GAMES.filter((g) => g.subject === subject && age >= g.minAge && age <= g.maxAge);
