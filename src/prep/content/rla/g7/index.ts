// Grade 7 reading: reading sets, editing drafts, generators, and essay prompts.

import type { Rng } from '../../rng.ts';
import type { EssayPrompt, Item, ReadingSet } from '../../types.ts';
import { G7_RLA_GENERATORS } from './generators.ts';
import { FICTION_ALVAREZ } from './fiction-alvarez.ts';
import { MYTH_DAEDALUS } from './myth-daedalus.ts';
import { FICTION_STORM } from './fiction-storm.ts';
import { BIO_KATHERINE } from './bio-katherine.ts';
import { INFO_MONARCH } from './info-monarch.ts';
import { INFO_SUPERVOLCANO } from './info-supervolcano.ts';
import { ARG_HOMEWORK } from './arg-homework.ts';
import { PERSUADE_WETLANDS } from './persuade-wetlands.ts';
import { POEM_DICKINSON } from './poem-dickinson.ts';
import { POEM_DUNBAR } from './poem-dunbar.ts';
import { DRAMA_BROADCAST } from './drama-broadcast.ts';
import { PAIRED_GALVESTON } from './paired-galveston.ts';
import { EDIT_SPACE } from './edit-space.ts';
import { EDIT_OCEAN } from './edit-ocean.ts';
import { EDIT_SOLAR } from './edit-solar.ts';
import { EDIT_GARDEN } from './edit-garden.ts';
import { EDIT_ROBOTICS } from './edit-robotics.ts';
import { EDIT_LETTER } from './edit-letter.ts';

export { G7_RLA_GENERATORS };

export const G7_RLA_SETS: ReadingSet[] = [
  FICTION_ALVAREZ,
  MYTH_DAEDALUS,
  FICTION_STORM,
  BIO_KATHERINE,
  INFO_MONARCH,
  INFO_SUPERVOLCANO,
  ARG_HOMEWORK,
  PERSUADE_WETLANDS,
  POEM_DICKINSON,
  POEM_DUNBAR,
  DRAMA_BROADCAST,
  PAIRED_GALVESTON,
  EDIT_SPACE,
  EDIT_OCEAN,
  EDIT_SOLAR,
  EDIT_GARDEN,
  EDIT_ROBOTICS,
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

export const G7_RLA_ESSAYS: EssayPrompt[] = [
  {
    id: 'g7-essay-katherine',
    grade: 7,
    setId: 'g7-bio-katherine',
    mode: 'informational',
    prompt:
      `Read "Orbits of Genius: Katherine Johnson." Write an informational essay explaining how Katherine Johnson's mathematical talent, determination, and meticulous accuracy were essential to early American spaceflight. Use evidence from the selection to support your response.`,
    checklist: INFO_CHECKLIST,
  },
  {
    id: 'g7-essay-homework',
    grade: 7,
    setId: 'g7-arg-homework',
    mode: 'argumentative',
    prompt:
      'Read "Rethinking the Morning Bell: The Case for Later School Start Times." Should middle schools shift start times to 8:30 a.m. or later? Write an argumentative essay stating your claim and supporting it with reasons and evidence from the passage. Address what counterarguments critics might make and provide a rebuttal.',
    checklist: ARG_CHECKLIST,
  },
];

let counter = 0;

export function makeG7RlaItem(standard: string, difficulty: 1 | 2 | 3, rng: Rng): Item {
  const gens = G7_RLA_GENERATORS[standard];
  if (!gens?.length) throw new Error(`No generator for ${standard}`);
  const draft = gens[Math.floor(rng() * gens.length)](rng, difficulty);
  counter += 1;
  return {
    id: `${standard}-${difficulty}-${counter}-${Math.floor(rng() * 1e9).toString(36)}`,
    grade: 7,
    subject: 'rla',
    standard,
    difficulty,
    ...draft,
  };
}
