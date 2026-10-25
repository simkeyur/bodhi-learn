// Grade 3 reading and writing: sets, drafts, generators, and essay prompts.

import type { Rng } from '../../rng.ts';
import type { EssayPrompt, Item, ReadingSet } from '../../types.ts';
import { G3_RLA_GENERATORS } from './generators.ts';
import { FICTION_KITE } from './fiction-kite.ts';
import { FOLKTALE_ARMADILLO } from './folktale-armadillo.ts';
import { FICTION_GARDEN } from './fiction-garden.ts';
import { BIO_BESSIE } from './bio-bessie.ts';
import { INFO_BATS } from './info-bats.ts';
import { INFO_BLUEBONNET } from './info-bluebonnet.ts';
import { ARG_RECESS } from './arg-recess.ts';
import { PERSUADE_TREES } from './persuade-trees.ts';
import { POEM_SWING } from './poem-swing.ts';
import { POEM_CATERPILLAR } from './poem-caterpillar.ts';
import { DRAMA_MARKET } from './drama-market.ts';
import { PAIRED_RIVERS } from './paired-rivers.ts';
import { EDIT_SPACE } from './edit-space.ts';
import { EDIT_ZOO } from './edit-zoo.ts';
import { EDIT_MUSEUM } from './edit-museum.ts';
import { EDIT_PARK } from './edit-park.ts';
import { EDIT_LIBRARY } from './edit-library.ts';
import { EDIT_BAKING } from './edit-baking.ts';

export { G3_RLA_GENERATORS };

export const G3_RLA_SETS: ReadingSet[] = [
  FICTION_KITE, FOLKTALE_ARMADILLO, FICTION_GARDEN, BIO_BESSIE, INFO_BATS, INFO_BLUEBONNET,
  ARG_RECESS, PERSUADE_TREES, POEM_SWING, POEM_CATERPILLAR, DRAMA_MARKET, PAIRED_RIVERS,
  EDIT_SPACE, EDIT_ZOO, EDIT_MUSEUM, EDIT_PARK, EDIT_LIBRARY, EDIT_BAKING,
];

const INFO_CHECKLIST: EssayPrompt['checklist'] = [
  { title: 'Organization and development', items: [
    'My first paragraph states a clear central idea answering the prompt.',
    'Each body paragraph explains one main reason or detail.',
    'I used specific facts and details from the selection as evidence.',
    'I explained how my evidence supports my central idea.',
    'I used linking words (first, also, for example, next) to connect ideas.',
    'My conclusion sums up my central idea neatly.',
  ] },
  { title: 'Conventions', items: [
    'Every sentence is complete with a subject and verb.',
    'I checked capital letters, commas, and periods.',
    'I checked my spelling, especially words copied from the text.',
  ] },
];

const ARG_CHECKLIST: EssayPrompt['checklist'] = [
  { title: 'Organization and development', items: [
    'My first paragraph states my clear claim or opinion.',
    'Each body paragraph gives reasons that support my claim.',
    'I used facts and details from the text to support my reasons.',
    'I explained why my reasons make sense.',
    'I used linking words (because, also, therefore) to connect thoughts.',
    'My conclusion restates my opinion and urges the reader to agree.',
  ] },
  { title: 'Conventions', items: [
    'Every sentence is complete and correctly punctuated.',
    'I checked capital letters, commas, and ending punctuation marks.',
    'I checked my spelling throughout the draft.',
  ] },
];

export const G3_RLA_ESSAYS: EssayPrompt[] = [
  {
    id: 'g3-essay-bats',
    grade: 3,
    setId: 'g3-info-bats',
    mode: 'informational',
    prompt: 'Read "Austin\'s Amazing Flying Mammals." Write an informational essay explaining how the Mexican free-tailed bats survive under the Congress Avenue Bridge and why they are beneficial to the state of Texas. Support your explanation with facts and details from the article.',
    checklist: INFO_CHECKLIST,
  },
  {
    id: 'g3-essay-recess',
    grade: 3,
    setId: 'g3-arg-recess',
    mode: 'argumentative',
    prompt: 'Read "More Recess, Better Learning." Should third-grade elementary students have thirty minutes of daily outdoor recess? Write an argumentative essay stating your claim and supporting it with clear reasons and evidence from the text.',
    checklist: ARG_CHECKLIST,
  },
];

let counter = 0;

export function makeG3RlaItem(standard: string, difficulty: 1 | 2 | 3, rng: Rng): Item {
  const gens = G3_RLA_GENERATORS[standard];
  if (!gens?.length) throw new Error(`No generator for ${standard}`);
  const draft = gens[Math.floor(rng() * gens.length)](rng, difficulty);
  counter += 1;
  return { id: `${standard}-${difficulty}-${counter}-${Math.floor(rng() * 1e9).toString(36)}`, grade: 3, subject: 'rla', standard, difficulty, ...draft };
}
