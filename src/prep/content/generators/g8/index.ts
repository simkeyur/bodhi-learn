// Grade 8 math: every one of the 40 standards has at least one generator (checked by tests).

import type { Rng } from '../../rng.ts';
import type { Item } from '../../types.ts';
import type { Gen } from '../build.ts';
import { G8_STRAND1 } from './strand1.ts';
import { G8_STRAND2 } from './strand2.ts';
import { G8_STRAND3 } from './strand3.ts';
import { G8_STRAND4 } from './strand4.ts';

export const G8_GENERATORS: Record<string, Gen[]> = { ...G8_STRAND1, ...G8_STRAND2, ...G8_STRAND3, ...G8_STRAND4 };

let counter = 0;

export function makeG8MathItem(standard: string, difficulty: 1 | 2 | 3, rng: Rng): Item {
  const gens = G8_GENERATORS[standard];
  if (!gens?.length) throw new Error(`No generator for ${standard}`);
  const draft = gens[Math.floor(rng() * gens.length)](rng, difficulty);
  counter += 1;
  return { id: `${standard}-${difficulty}-${counter}-${Math.floor(rng() * 1e9).toString(36)}`, grade: 8, subject: 'math', standard, difficulty, ...draft };
}
