// Grade 5 reading: the reference grade for docs/READING_PLAN.md. Other grades copy this layout:
// one file per set, generators for sentence-level skills, walkthroughs, and essay prompts.

import type { Rng } from '../../rng.ts';
import type { EssayPrompt, Item, ReadingSet } from '../../types.ts';
import { G5_RLA_GENERATORS } from './generators.ts';
import { FICTION_STORM } from './fiction-storm.ts';
import { INFO_BATS } from './info-bats.ts';
import { POEM_SHADOW } from './poem-shadow.ts';
import { EDIT_GARDEN } from './edit-garden.ts';
import { FOLKTALE_ROADRUNNER } from './folktale-roadrunner.ts';
import { FICTION_PARTNER } from './fiction-partner.ts';
import { BIO_COLEMAN } from './bio-coleman.ts';
import { INFO_STORMS } from './info-storms.ts';
import { ARG_RECESS } from './arg-recess.ts';
import { PERSUADE_SHELTER } from './persuade-shelter.ts';
import { POEM_WIND } from './poem-wind.ts';
import { DRAMA_GARDEN } from './drama-garden.ts';
import { PAIRED_MONARCHS } from './paired-monarchs.ts';
import { EDIT_LETTER } from './edit-letter.ts';
import { EDIT_SWIM } from './edit-swim.ts';
import { EDIT_HONEYBEES } from './edit-honeybees.ts';
import { EDIT_FISHING } from './edit-fishing.ts';
import { EDIT_LANTERN } from './edit-lantern.ts';

export { G5_RLA_GENERATORS };

// Reading sets in a sensible order for the passage list: stories, then nonfiction, poems, drama, the pair
export const G5_RLA_SETS: ReadingSet[] = [
  FICTION_STORM, FOLKTALE_ROADRUNNER, FICTION_PARTNER, BIO_COLEMAN, INFO_BATS, INFO_STORMS, ARG_RECESS, PERSUADE_SHELTER,
  POEM_SHADOW, POEM_WIND, DRAMA_GARDEN, PAIRED_MONARCHS,
  EDIT_GARDEN, EDIT_LETTER, EDIT_SWIM, EDIT_HONEYBEES, EDIT_FISHING, EDIT_LANTERN,
];

// The rubric as yes/no checks a child can answer about their own essay. Based on TEA's two scored parts:
// organization and development (3 points) and conventions (3 points).
const INFO_CHECKLIST: EssayPrompt['checklist'] = [
  { title: 'Organization and development', items: [
    'My first paragraph states a clear central idea that answers the prompt.',
    'Each body paragraph explains one reason or part of my idea.',
    'I used specific facts and details from the article as evidence.',
    'I explained how my evidence supports my central idea.',
    'I used transitions (first, also, for example, as a result) to connect ideas.',
    'My conclusion sums up my central idea without just repeating it.',
  ] },
  { title: 'Conventions', items: [
    'Every sentence is complete: no run-ons, comma splices or fragments.',
    'I checked capital letters, commas and end punctuation.',
    'I checked my spelling, especially words copied from the article.',
  ] },
];

const ARG_CHECKLIST: EssayPrompt['checklist'] = [
  { title: 'Organization and development', items: [
    'My first paragraph states a clear claim: what I think and why it matters.',
    'Each body paragraph gives one reason that supports my claim.',
    'I used facts and details from the passage as evidence for my reasons.',
    'I explained how each piece of evidence supports my claim.',
    'I described what someone who disagrees might say, and explained why my claim is still right.',
    'My conclusion restates my claim and asks the reader to agree or act.',
  ] },
  { title: 'Conventions', items: [
    'Every sentence is complete: no run-ons, comma splices or fragments.',
    'I checked capital letters, commas and end punctuation.',
    'I checked my spelling, especially words copied from the passage.',
  ] },
];

export const G5_RLA_ESSAYS: EssayPrompt[] = [
  {
    id: 'g5-essay-bats',
    grade: 5,
    setId: 'g5-info-bats',
    mode: 'informational',
    prompt: 'Read "The Bats of Bracken Cave." Write an informational essay explaining why the bats of Bracken Cave are important and why their home is protected. Use evidence from the article to support your response.',
    checklist: INFO_CHECKLIST,
  },
  {
    id: 'g5-essay-recess',
    grade: 5,
    setId: 'g5-arg-recess',
    mode: 'argumentative',
    prompt: 'Read "More Recess, Better Learning." Should students have a longer recess? Write an argumentative essay that states your claim and supports it with reasons and evidence from the passage. Include what someone who disagrees might say.',
    checklist: ARG_CHECKLIST,
  },
];

let counter = 0;

export function makeG5RlaItem(standard: string, difficulty: 1 | 2 | 3, rng: Rng): Item {
  const gens = G5_RLA_GENERATORS[standard];
  if (!gens?.length) throw new Error(`No generator for ${standard}`);
  const draft = gens[Math.floor(rng() * gens.length)](rng, difficulty);
  counter += 1;
  return { id: `${standard}-${difficulty}-${counter}-${Math.floor(rng() * 1e9).toString(36)}`, grade: 5, subject: 'rla', standard, difficulty, ...draft };
}
