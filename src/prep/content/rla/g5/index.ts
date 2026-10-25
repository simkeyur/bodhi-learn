// Grade 5 reading: the reference grade for docs/READING_PLAN.md. Other grades copy this layout:
// one file per set, generators for sentence-level skills, walkthroughs, and essay prompts.

import type { Rng } from '../../rng.ts';
import type { EssayPrompt, Item, ReadingSet } from '../../types.ts';
import { G5_RLA_GENERATORS } from './generators.ts';
import { FICTION_STORM } from './fiction-storm.ts';
import { INFO_BATS } from './info-bats.ts';
import { POEM_SHADOW } from './poem-shadow.ts';
import { EDIT_GARDEN } from './edit-garden.ts';

export { G5_RLA_GENERATORS };

export const G5_RLA_SETS: ReadingSet[] = [FICTION_STORM, INFO_BATS, POEM_SHADOW, EDIT_GARDEN];

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

export const G5_RLA_ESSAYS: EssayPrompt[] = [
  {
    id: 'g5-essay-bats',
    grade: 5,
    setId: 'g5-info-bats',
    mode: 'informational',
    prompt: 'Read "The Bats of Bracken Cave." Write an informational essay explaining why the bats of Bracken Cave are important and why their home is protected. Use evidence from the article to support your response.',
    checklist: INFO_CHECKLIST,
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
