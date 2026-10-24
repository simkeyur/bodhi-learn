// Grade 5 math: every one of the 36 standards has at least one generator (checked by a test).

import type { Rng } from '../../rng.ts';
import type { Item } from '../../types.ts';
import type { Gen } from '../build.ts';
import { STRAND1 } from './strand1.ts';
import { STRAND2 } from './strand2.ts';
import { STRAND3 } from './strand3.ts';
import { STRAND4 } from './strand4.ts';

export const G5_GENERATORS: Record<string, Gen[]> = { ...STRAND1, ...STRAND2, ...STRAND3, ...STRAND4 };

let counter = 0;

export function makeG5MathItem(standard: string, difficulty: 1 | 2 | 3, rng: Rng): Item {
  const gens = G5_GENERATORS[standard];
  if (!gens?.length) throw new Error(`No generator for ${standard}`);
  const draft = gens[Math.floor(rng() * gens.length)](rng, difficulty);
  counter += 1;
  return { id: `${standard}-${difficulty}-${counter}-${Math.floor(rng() * 1e9).toString(36)}`, grade: 5, subject: 'math', standard, difficulty, ...draft };
}
