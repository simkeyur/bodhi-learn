// Grade 8 reading: reading sets, editing drafts, generators, and essay prompts.

import type { Rng } from '../../rng.ts';
import type { EssayPrompt, Item, ReadingSet } from '../../types.ts';
import { G8_RLA_GENERATORS } from './generators.ts';
import { FICTION_CANYON } from './fiction-canyon.ts';
import { MYTH_PROMETHEUS } from './myth-prometheus.ts';
import { FICTION_TELEGRAPH } from './fiction-telegraph.ts';
import { BIO_ARMSTRONG } from './bio-armstrong.ts';
import { INFO_BIOLUMINESCENCE } from './info-bioluminescence.ts';
import { INFO_EXOPLANETS } from './info-exoplanets.ts';
import { ARG_SCREEN_TIME } from './arg-screen-time.ts';
import { PERSUADE_DARKSKY } from './persuade-darksky.ts';
import { POEM_FROST } from './poem-frost.ts';
import { POEM_WHITMAN } from './poem-whitman.ts';
import { DRAMA_TRIAL } from './drama-trial.ts';
import { PAIRED_ALAMO } from './paired-alamo.ts';
import { EDIT_SPACE } from './edit-space.ts';
import { EDIT_OCEAN } from './edit-ocean.ts';
import { EDIT_SOLAR } from './edit-solar.ts';
import { EDIT_GARDEN } from './edit-garden.ts';
import { EDIT_ROBOTICS } from './edit-robotics.ts';
import { EDIT_LETTER } from './edit-letter.ts';

export { G8_RLA_GENERATORS };

export const G8_RLA_SETS: ReadingSet[] = [
  FICTION_CANYON,
  MYTH_PROMETHEUS,
  FICTION_TELEGRAPH,
  BIO_ARMSTRONG,
  INFO_BIOLUMINESCENCE,
  INFO_EXOPLANETS,
  ARG_SCREEN_TIME,
  PERSUADE_DARKSKY,
  POEM_FROST,
  POEM_WHITMAN,
  DRAMA_TRIAL,
  PAIRED_ALAMO,
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

export const G8_RLA_ESSAYS: EssayPrompt[] = [
  {
    id: 'g8-essay-armstrong',
    grade: 8,
    setId: 'g8-bio-armstrong',
    mode: 'informational',
    prompt:
      'Read "Footsteps in the Sea of Tranquility." Write an informational essay explaining how Neil Armstrong\'s engineering discipline, emotional composure, and quiet determination contributed to the historic success of Apollo 11. Use evidence from the selection to support your response.',
    checklist: INFO_CHECKLIST,
  },
  {
    id: 'g8-essay-screen-time',
    grade: 8,
    setId: 'g8-arg-screen-time',
    mode: 'argumentative',
    prompt:
      'Read "The Case for Mindful Tech: Reclaiming Adolescence." Should middle schools implement bell-to-bell bans on student smartphone use? Write an argumentative essay stating your claim and supporting it with reasons and evidence from the passage. Address what counterarguments critics might make and provide a thoughtful rebuttal.',
    checklist: ARG_CHECKLIST,
  },
];

let counter = 0;

export function makeG8RlaItem(standard: string, difficulty: 1 | 2 | 3, rng: Rng): Item {
  const gens = G8_RLA_GENERATORS[standard];
  if (!gens?.length) throw new Error(`No generator for ${standard}`);
  const draft = gens[Math.floor(rng() * gens.length)](rng, difficulty);
  counter += 1;
  return {
    id: `${standard}-${difficulty}-${counter}-${Math.floor(rng() * 1e9).toString(36)}`,
    grade: 8,
    subject: 'rla',
    standard,
    difficulty,
    ...draft,
  };
}
