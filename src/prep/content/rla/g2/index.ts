// Grade 2 Reading Language Arts content index.

import type { EssayPrompt, Item, ReadingSet } from '../../types.ts';
import type { Rng } from '../../rng.ts';
import { G2_RLA_GENERATORS } from './generators.ts';
import { G2_SET_FICTION_PUPPY } from './fiction-puppy.ts';
import { G2_SET_FABLE_TURTLE } from './fable-turtle.ts';
import { G2_SET_INFO_MONARCH } from './info-monarch.ts';
import { G2_SET_INFO_SUNFLOWERS } from './info-sunflowers.ts';
import { G2_SET_POEM_STAR } from './poem-star.ts';
import { G2_SET_POEM_WIND } from './poem-wind.ts';
import { G2_SET_DRAMA_PICNIC } from './drama-picnic.ts';
import { G2_SET_PERSUADE_PLAYGROUND } from './persuade-playground.ts';
import { G2_SET_EDIT_GARDEN } from './edit-garden.ts';
import { G2_SET_EDIT_PET } from './edit-pet.ts';
import { G2_SET_EDIT_KITE } from './edit-kite.ts';

export const G2_RLA_SETS: ReadingSet[] = [
  G2_SET_FICTION_PUPPY,
  G2_SET_FABLE_TURTLE,
  G2_SET_INFO_MONARCH,
  G2_SET_INFO_SUNFLOWERS,
  G2_SET_POEM_STAR,
  G2_SET_POEM_WIND,
  G2_SET_DRAMA_PICNIC,
  G2_SET_PERSUADE_PLAYGROUND,
  G2_SET_EDIT_GARDEN,
  G2_SET_EDIT_PET,
  G2_SET_EDIT_KITE,
];

export { G2_RLA_GENERATORS };

// Grades 1 and 2 have no essay prompts (TEA assesses composition orally and via classroom writing)
export const G2_RLA_ESSAYS: EssayPrompt[] = [];

let counter = 0;

export function makeG2RlaItem(standard: string, difficulty: 1 | 2 | 3, rng: Rng): Item {
  const gens = G2_RLA_GENERATORS[standard];
  if (!gens?.length) throw new Error(`No generator for ${standard}`);
  const draft = gens[Math.floor(rng() * gens.length)](rng, difficulty);
  counter += 1;
  return { id: `${standard}-${difficulty}-${counter}-${Math.floor(rng() * 1e9).toString(36)}`, grade: 2, subject: 'rla', standard, difficulty, ...draft };
}
