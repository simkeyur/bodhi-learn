// Grade 4 reading and writing: sets, drafts, generators, and essay prompts.

import type { Rng } from '../../rng.ts';
import type { EssayPrompt, Item, ReadingSet } from '../../types.ts';
import { G4_RLA_GENERATORS } from './generators.ts';
import { FICTION_GOAT } from './fiction-goat.ts';
import { FOLKTALE_COYOTE } from './folktale-coyote.ts';
import { FICTION_TREEHOUSE } from './fiction-treehouse.ts';
import { BIO_STINSON } from './bio-stinson.ts';
import { INFO_LONGHORN } from './info-longhorn.ts';
import { INFO_CAVERNS } from './info-caverns.ts';
import { ARG_SCIENCE } from './arg-science.ts';
import { PERSUADE_COMPOST } from './persuade-compost.ts';
import { POEM_WIND } from './poem-wind.ts';
import { POEM_BIRD } from './poem-bird.ts';
import { DRAMA_STAGECOACH } from './drama-stagecoach.ts';
import { PAIRED_WILDFLOWERS } from './paired-wildflowers.ts';
import { EDIT_SPACE } from './edit-space.ts';
import { EDIT_ALAMO } from './edit-alamo.ts';
import { EDIT_LIBRARY } from './edit-library.ts';
import { EDIT_DINOSAUR } from './edit-dinosaur.ts';
import { EDIT_GARDEN } from './edit-garden.ts';
import { EDIT_SHELTER } from './edit-shelter.ts';

export { G4_RLA_GENERATORS };

export const G4_RLA_SETS: ReadingSet[] = [
  FICTION_GOAT, FOLKTALE_COYOTE, FICTION_TREEHOUSE, BIO_STINSON, INFO_LONGHORN, INFO_CAVERNS,
  ARG_SCIENCE, PERSUADE_COMPOST, POEM_WIND, POEM_BIRD, DRAMA_STAGECOACH, PAIRED_WILDFLOWERS,
  EDIT_SPACE, EDIT_ALAMO, EDIT_LIBRARY, EDIT_DINOSAUR, EDIT_GARDEN, EDIT_SHELTER,
];

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

export const G4_RLA_ESSAYS: EssayPrompt[] = [
  {
    id: 'g4-essay-longhorn',
    grade: 4,
    setId: 'g4-info-longhorn',
    mode: 'informational',
    prompt: 'Read "The Marvel of the Texas Longhorn." Write an informational essay explaining how the Texas Longhorn adapted to survive in harsh conditions and why it became an important part of Texas history. Use facts and evidence from the article to support your answer.',
    checklist: INFO_CHECKLIST,
  },
  {
    id: 'g4-essay-science',
    grade: 4,
    setId: 'g4-arg-science',
    mode: 'argumentative',
    prompt: 'Read "Hands-On Science: Why Fourth Graders Need More Labs." Should elementary schools provide weekly hands-on science experiments for every student? Write an argumentative essay stating your claim and supporting it with reasons and evidence from the text. Address what someone who disagrees might say.',
    checklist: ARG_CHECKLIST,
  },
];

let counter = 0;

export function makeG4RlaItem(standard: string, difficulty: 1 | 2 | 3, rng: Rng): Item {
  const gens = G4_RLA_GENERATORS[standard];
  if (!gens?.length) throw new Error(`No generator for ${standard}`);
  const draft = gens[Math.floor(rng() * gens.length)](rng, difficulty);
  counter += 1;
  return { id: `${standard}-${difficulty}-${counter}-${Math.floor(rng() * 1e9).toString(36)}`, grade: 4, subject: 'rla', standard, difficulty, ...draft };
}
