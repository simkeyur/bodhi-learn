// Every grade Bodhi Prep has content for. Screens and tests look grades up here instead of importing a grade's
// files directly, so adding a grade is: its standards, generators and walkthroughs, plus one entry below.
// docs/CURRICULUM.md section 4 has the steps. Pure: no React or browser APIs.

import type { Rng } from './rng.ts';
import type { Item, Lesson, Standard, Strand } from './types.ts';
import type { Gen } from './generators/build.ts';
import { G1_MATH, G1_MATH_STRANDS } from '../data/standards/g1-math.ts';
import { G1_GENERATORS, makeG1MathItem } from './generators/g1/index.ts';
import { G1_MATH_LESSONS } from './lessons/g1-math.ts';
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

export const BUILT_GRADES: number[] = Object.keys(GRADES).map(Number).sort((a, b) => a - b);

// The content for a child's grade. A grade without content yet gets the nearest built grade (the lower one on a
// tie), and the screens say so.
export function contentFor(grade: number | null): GradeContent {
  const g = grade ?? BUILT_GRADES[0];
  if (GRADES[g]) return GRADES[g];
  const nearest = [...BUILT_GRADES].sort((a, b) => Math.abs(a - g) - Math.abs(b - g) || a - b)[0];
  return GRADES[nearest];
}

// Standard codes start with their grade ("5.4F"), so any code can be looked up without knowing the grade
const gradeOf = (code: string): number => Number.parseInt(code, 10);

export function findStandard(code: string): Standard | undefined {
  return GRADES[gradeOf(code)]?.standards.find((s) => s.code === code);
}

export function findLesson(code: string): Lesson | undefined {
  return GRADES[gradeOf(code)]?.lessons.find((l) => l.code === code);
}

export function makeItem(code: string, difficulty: 1 | 2 | 3, rng: Rng): Item {
  const content = GRADES[gradeOf(code)];
  if (!content) throw new Error(`No content for ${code}`);
  return content.makeItem(code, difficulty, rng);
}
