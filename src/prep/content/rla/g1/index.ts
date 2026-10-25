// Grade 1 Reading Language Arts content index.

import type { EssayPrompt, Item, ReadingSet } from '../../types.ts';
import type { Rng } from '../../rng.ts';
import { G1_RLA_GENERATORS } from './generators.ts';
import { G1_SET_FICTION_CAT } from './fiction-cat.ts';
import { G1_SET_FABLE_ANT } from './fable-ant.ts';
import { G1_SET_INFO_FROGS } from './info-frogs.ts';
import { G1_SET_INFO_NEST } from './info-nest.ts';
import { G1_SET_POEM_KITTENS } from './poem-kittens.ts';
import { G1_SET_POEM_BED } from './poem-bed.ts';
import { G1_SET_DRAMA_BOAT } from './drama-boat.ts';
import { G1_SET_PERSUADE_APPLES } from './persuade-apples.ts';
import { G1_SET_EDIT_DOG } from './edit-dog.ts';
import { G1_SET_EDIT_FARM } from './edit-farm.ts';
import { G1_SET_EDIT_COOKIES } from './edit-cookies.ts';

export const G1_RLA_SETS: ReadingSet[] = [
  G1_SET_FICTION_CAT,
  G1_SET_FABLE_ANT,
  G1_SET_INFO_FROGS,
  G1_SET_INFO_NEST,
  G1_SET_POEM_KITTENS,
  G1_SET_POEM_BED,
  G1_SET_DRAMA_BOAT,
  G1_SET_PERSUADE_APPLES,
  G1_SET_EDIT_DOG,
  G1_SET_EDIT_FARM,
  G1_SET_EDIT_COOKIES,
];

export { G1_RLA_GENERATORS };

// Grades 1 and 2 have no essay prompts (TEA assesses composition orally and via classroom writing)
export const G1_RLA_ESSAYS: EssayPrompt[] = [];

let counter = 0;

export function makeG1RlaItem(standard: string, difficulty: 1 | 2 | 3, rng: Rng): Item {
  const gens = G1_RLA_GENERATORS[standard];
  if (!gens?.length) throw new Error(`No generator for ${standard}`);
  const draft = gens[Math.floor(rng() * gens.length)](rng, difficulty);
  counter += 1;
  return { id: `${standard}-${difficulty}-${counter}-${Math.floor(rng() * 1e9).toString(36)}`, grade: 1, subject: 'rla', standard, difficulty, ...draft };
}
