// Every grade Bodhi Prep has content for, per subject. Screens and tests look grades up here instead of importing
// a grade's files directly, so adding a grade is: its files, plus one entry below. docs/CURRICULUM.md section 4
// (math) and docs/READING_PLAN.md (reading) have the steps. Pure: no React or browser APIs.

import type { Rng } from './rng.ts';
import type { EssayPrompt, Item, Lesson, ReadingSet, Standard, Strand, Subject } from './types.ts';
import type { Gen } from './generators/build.ts';
import { G1_MATH, G1_MATH_STRANDS } from '../data/standards/g1-math.ts';
import { G1_GENERATORS, makeG1MathItem } from './generators/g1/index.ts';
import { G1_MATH_LESSONS } from './lessons/g1-math.ts';
import { G2_MATH, G2_MATH_STRANDS } from '../data/standards/g2-math.ts';
import { G2_GENERATORS, makeG2MathItem } from './generators/g2/index.ts';
import { G2_MATH_LESSONS } from './lessons/g2-math.ts';
import { G3_MATH, G3_MATH_STRANDS } from '../data/standards/g3-math.ts';
import { G3_GENERATORS, makeG3MathItem } from './generators/g3/index.ts';
import { G3_MATH_LESSONS } from './lessons/g3-math.ts';
import { G4_MATH, G4_MATH_STRANDS } from '../data/standards/g4-math.ts';
import { G4_GENERATORS, makeG4MathItem } from './generators/g4/index.ts';
import { G4_MATH_LESSONS } from './lessons/g4-math.ts';
import { G5_MATH, G5_MATH_STRANDS } from '../data/standards/g5-math.ts';
import { G5_GENERATORS, makeG5MathItem } from './generators/g5/index.ts';
import { G5_MATH_LESSONS } from './lessons/g5-math.ts';
import { G6_MATH, G6_MATH_STRANDS } from '../data/standards/g6-math.ts';
import { G6_GENERATORS, makeG6MathItem } from './generators/g6/index.ts';
import { G6_MATH_LESSONS } from './lessons/g6-math.ts';
import { G7_MATH, G7_MATH_STRANDS } from '../data/standards/g7-math.ts';
import { G7_GENERATORS, makeG7MathItem } from './generators/g7/index.ts';
import { G7_MATH_LESSONS } from './lessons/g7-math.ts';
import { G8_MATH, G8_MATH_STRANDS } from '../data/standards/g8-math.ts';
import { G8_GENERATORS, makeG8MathItem } from './generators/g8/index.ts';
import { G8_MATH_LESSONS } from './lessons/g8-math.ts';
import { G5_RLA, G5_RLA_STRANDS } from '../data/standards/g5-rla.ts';
import { G5_RLA_ESSAYS, G5_RLA_GENERATORS, G5_RLA_SETS, makeG5RlaItem } from './rla/g5/index.ts';
import { G5_RLA_LESSONS } from './lessons/g5-rla.ts';

export interface GradeContent {
  grade: number;
  subject: 'math';
  strands: Strand[];
  standards: Standard[];
  generators: Record<string, Gen[]>; // standard code -> generators
  makeItem: (code: string, difficulty: 1 | 2 | 3, rng: Rng) => Item;
  lessons: Lesson[];
  // From TEA's blueprint: readiness and supporting standards per strand (strand 1 first). The tests check the
  // standards list against it.
  blueprint: { readiness: number[]; supporting: number[] };
}

export const GRADES: Record<number, GradeContent> = {
  1: {
    grade: 1,
    subject: 'math',
    strands: G1_MATH_STRANDS,
    standards: G1_MATH,
    generators: G1_GENERATORS,
    makeItem: makeG1MathItem,
    lessons: G1_MATH_LESSONS,
    blueprint: { readiness: [3, 4, 3, 3], supporting: [4, 7, 8, 7] },
  },
  2: {
    grade: 2,
    subject: 'math',
    strands: G2_MATH_STRANDS,
    standards: G2_MATH,
    generators: G2_GENERATORS,
    makeItem: makeG2MathItem,
    lessons: G2_MATH_LESSONS,
    blueprint: { readiness: [4, 5, 4, 3], supporting: [6, 4, 8, 9] },
  },
  3: {
    grade: 3,
    subject: 'math',
    strands: G3_MATH_STRANDS,
    standards: G3_MATH,
    generators: G3_GENERATORS,
    makeItem: makeG3MathItem,
    lessons: G3_MATH_LESSONS,
    blueprint: { readiness: [4, 5, 3, 1], supporting: [10, 9, 6, 6] },
  },
  4: {
    grade: 4,
    subject: 'math',
    strands: G4_MATH_STRANDS,
    standards: G4_MATH,
    generators: G4_GENERATORS,
    makeItem: makeG4MathItem,
    lessons: G4_MATH_LESSONS,
    blueprint: { readiness: [3, 5, 4, 1], supporting: [10, 7, 7, 4] },
  },
  5: {
    grade: 5,
    subject: 'math',
    strands: G5_MATH_STRANDS,
    standards: G5_MATH,
    generators: G5_GENERATORS,
    makeItem: makeG5MathItem,
    lessons: G5_MATH_LESSONS,
    blueprint: { readiness: [2, 6, 3, 1], supporting: [4, 9, 5, 6] },
  },
  6: {
    grade: 6,
    subject: 'math',
    strands: G6_MATH_STRANDS,
    standards: G6_MATH,
    generators: G6_GENERATORS,
    makeItem: makeG6MathItem,
    lessons: G6_MATH_LESSONS,
    blueprint: { readiness: [4, 6, 3, 3], supporting: [11, 11, 3, 10] },
  },
  7: {
    grade: 7,
    subject: 'math',
    strands: G7_MATH_STRANDS,
    standards: G7_MATH,
    generators: G7_GENERATORS,
    makeItem: makeG7MathItem,
    lessons: G7_MATH_LESSONS,
    blueprint: { readiness: [2, 5, 4, 2], supporting: [5, 7, 5, 8] },
  },
  8: {
    grade: 8,
    subject: 'math',
    strands: G8_MATH_STRANDS,
    standards: G8_MATH,
    generators: G8_GENERATORS,
    makeItem: makeG8MathItem,
    lessons: G8_MATH_LESSONS,
    blueprint: { readiness: [1, 5, 5, 2], supporting: [3, 9, 9, 6] },
  },
};

// Reading: authored passage sets and editing drafts, plus generators for the skills that work one sentence at
// a time. A standard is practised through whichever of the two has questions on it.
export interface ReadingContent {
  grade: number;
  subject: 'rla';
  strands: Strand[];
  standards: Standard[]; // codes start with 'rla:'
  sets: ReadingSet[];
  generators: Record<string, Gen[]>;
  makeItem: (code: string, difficulty: 1 | 2 | 3, rng: Rng) => Item;
  lessons: Lesson[];
  essays: EssayPrompt[];
  blueprint: { readiness: number[]; supporting: number[] };
}

export const READING: Record<number, ReadingContent> = {
  5: {
    grade: 5,
    subject: 'rla',
    strands: G5_RLA_STRANDS,
    standards: G5_RLA,
    sets: G5_RLA_SETS,
    generators: G5_RLA_GENERATORS,
    makeItem: makeG5RlaItem,
    lessons: G5_RLA_LESSONS,
    essays: G5_RLA_ESSAYS,
    blueprint: { readiness: [9, 5], supporting: [22, 16] },
  },
};

export const BUILT_GRADES: number[] = Object.keys(GRADES).map(Number).sort((a, b) => a - b);
export const BUILT_READING: number[] = Object.keys(READING).map(Number).sort((a, b) => a - b);

// The grade itself, or the nearest built one (the lower one on a tie)
const nearest = (built: number[], grade: number | null): number => {
  const g = grade ?? built[0];
  return built.includes(g) ? g : [...built].sort((a, b) => Math.abs(a - g) - Math.abs(b - g) || a - b)[0];
};

// The content for a child's grade. A grade without content yet gets the nearest built grade, and the screens
// say so.
export const contentFor = (grade: number | null): GradeContent => GRADES[nearest(BUILT_GRADES, grade)];
export const readingFor = (grade: number | null): ReadingContent => READING[nearest(BUILT_READING, grade)];

// Codes say their subject and grade: '5.4F' is grade 5 math, 'rla:5.9D.i' is grade 5 reading
export const subjectOf = (code: string): Subject => (code.startsWith('rla:') ? 'rla' : 'math');
const gradeOf = (code: string): number => Number.parseInt(code.replace(/^rla:/, ''), 10);
const lookup = (code: string): GradeContent | ReadingContent | undefined =>
  subjectOf(code) === 'rla' ? READING[gradeOf(code)] : GRADES[gradeOf(code)];

// Where a skill's subject lists its skills
export const skillsPage = (code: string): string => (subjectOf(code) === 'rla' ? '/reading' : '/math');

// What screens show: the code without its subject prefix
export const shortCode = (code: string): string => code.replace(/^rla:/, '');

export function findStandard(code: string): Standard | undefined {
  return lookup(code)?.standards.find((s) => s.code === code);
}

export function findLesson(code: string): Lesson | undefined {
  return lookup(code)?.lessons.find((l) => l.code === code);
}

// Whether a standard's questions can be generated (math, and some reading skills)
export const hasGenerator = (code: string): boolean => !!lookup(code)?.generators[code]?.length;

export function makeItem(code: string, difficulty: 1 | 2 | 3, rng: Rng): Item {
  const content = lookup(code);
  if (!content) throw new Error(`No content for ${code}`);
  return content.makeItem(code, difficulty, rng);
}

// ---------- Reading sets ----------

export function findSet(id: string): ReadingSet | undefined {
  for (const r of Object.values(READING)) {
    const set = r.sets.find((s) => s.id === id);
    if (set) return set;
  }
  return undefined;
}

// The sets with questions on a standard, most questions first
export function setsFor(code: string): ReadingSet[] {
  const r = READING[gradeOf(code)];
  if (!r) return [];
  const count = (s: ReadingSet) => s.items.filter((i) => i.standard === code).length;
  return r.sets.filter((s) => count(s) > 0).sort((a, b) => count(b) - count(a));
}

// Whether a standard has anything to practise yet (a generator or a set question)
export const hasPractice = (code: string): boolean => hasGenerator(code) || setsFor(code).length > 0;

export function findEssay(id: string): EssayPrompt | undefined {
  for (const r of Object.values(READING)) {
    const e = r.essays.find((x) => x.id === id);
    if (e) return e;
  }
  return undefined;
}
