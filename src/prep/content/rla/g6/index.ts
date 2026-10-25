// Grade 6 reading: reading sets, editing drafts, generators, and essay prompts.

import type { Rng } from '../../rng.ts';
import type { EssayPrompt, Item, ReadingSet } from '../../types.ts';
import { G6_RLA_GENERATORS } from './generators.ts';
import { FICTION_CANYON } from './fiction-canyon.ts';
import { MYTH_ARACHNE } from './myth-arachne.ts';
import { FICTION_CLOCKWORK } from './fiction-clockwork.ts';
import { BIO_OCHOA } from './bio-ochoa.ts';
import { INFO_CAVES } from './info-caves.ts';
import { INFO_DEEPSEA } from './info-deepsea.ts';
import { ARG_SCREENS } from './arg-screens.ts';
import { PERSUADE_DARKSKY } from './persuade-darksky.ts';
import { POEM_FROST } from './poem-frost.ts';
import { POEM_SANDBURG } from './poem-sandburg.ts';
import { DRAMA_ARCHEOLOGY } from './drama-archeology.ts';
import { PAIRED_BISON } from './paired-bison.ts';
import { EDIT_SPACE } from './edit-space.ts';
import { EDIT_ROBOTICS } from './edit-robotics.ts';
import { EDIT_WILDFLOWER } from './edit-wildflower.ts';
import { EDIT_RECYCLE } from './edit-recycle.ts';
import { EDIT_AQUARIUM } from './edit-aquarium.ts';
import { EDIT_LETTER } from './edit-letter.ts';

export { G6_RLA_GENERATORS };

export const G6_RLA_SETS: ReadingSet[] = [
  FICTION_CANYON,
  MYTH_ARACHNE,
  FICTION_CLOCKWORK,
  BIO_OCHOA,
  INFO_CAVES,
  INFO_DEEPSEA,
  ARG_SCREENS,
  PERSUADE_DARKSKY,
  POEM_FROST,
  POEM_SANDBURG,
  DRAMA_ARCHEOLOGY,
  PAIRED_BISON,
  EDIT_SPACE,
  EDIT_ROBOTICS,
  EDIT_WILDFLOWER,
  EDIT_RECYCLE,
  EDIT_AQUARIUM,
  EDIT_LETTER,
];

const INFO_CHECKLIST: EssayPrompt['checklist'] = [
  {
    title: 'Organization and development',
    items: [
      'My first paragraph states a clear central idea that addresses the prompt.',
      'Each body paragraph develops one aspect of my central idea with logical transitions.',
      'I incorporated specific facts, quotes, and examples from the article as evidence.',
      'I explained how each piece of evidence directly supports my controlling idea.',
      'I used varied sentence structures and precise vocabulary.',
      'My conclusion synthesizes the main points without merely repeating them.',
    ],
  },
  {
    title: 'Conventions',
    items: [
      'Every sentence is complete with proper subject-verb agreement (no fragments or run-ons).',
      'I checked punctuation, including commas in complex sentences and around transitions.',
      'I checked spelling and capitalization of proper nouns and technical terms.',
    ],
  },
];

const ARG_CHECKLIST: EssayPrompt['checklist'] = [
  {
    title: 'Organization and development',
    items: [
      'My introductory paragraph presents a clear, debatable claim.',
      'Each body paragraph provides a focused reason supporting my claim.',
      'I supported my reasons with concrete evidence and facts from the text.',
      'I acknowledged an opposing viewpoint (counterargument) and provided a thoughtful rebuttal.',
      'I used logical transitional phrases (such as furthermore, however, and consequently).',
      'My concluding paragraph restates the claim and reinforces why the issue matters.',
    ],
  },
  {
    title: 'Conventions',
    items: [
      'Every sentence is grammatically complete, avoiding comma splices and run-on sentences.',
      'I used correct capitalization and end punctuation.',
      'I verified the correct spelling of commonly confused words and key vocabulary.',
    ],
  },
];

export const G6_RLA_ESSAYS: EssayPrompt[] = [
  {
    id: 'g6-essay-ochoa',
    grade: 6,
    setId: 'g6-bio-ochoa',
    mode: 'informational',
    prompt:
      'Read "Charting the Stars: Ellen Ochoa." Write an informational essay explaining how Ellen Ochoa\'s curiosity, determination, and scientific innovations contributed to space exploration and opened doors for future generations. Use evidence from the selection to support your response.',
    checklist: INFO_CHECKLIST,
  },
  {
    id: 'g6-essay-screens',
    grade: 6,
    setId: 'g6-arg-screens',
    mode: 'argumentative',
    prompt:
      'Read "Put the Phones Away: Reclaiming Focus in Middle School." Should middle schools enact a strict bell-to-bell ban on personal smartphones? Write an argumentative essay stating your claim and supporting it with reasons and evidence from the passage. Address what critics might argue and provide a rebuttal.',
    checklist: ARG_CHECKLIST,
  },
];

let counter = 0;

export function makeG6RlaItem(standard: string, difficulty: 1 | 2 | 3, rng: Rng): Item {
  const gens = G6_RLA_GENERATORS[standard];
  if (!gens?.length) throw new Error(`No generator for ${standard}`);
  const draft = gens[Math.floor(rng() * gens.length)](rng, difficulty);
  counter += 1;
  return {
    id: `${standard}-${difficulty}-${counter}-${Math.floor(rng() * 1e9).toString(36)}`,
    grade: 6,
    subject: 'rla',
    standard,
    difficulty,
    ...draft,
  };
}
