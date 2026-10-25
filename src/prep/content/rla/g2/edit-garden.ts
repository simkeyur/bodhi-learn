// Grade 2 editing draft: Our Classroom Garden

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G2_SET_EDIT_GARDEN: ReadingSet = makeSet({
  id: 'g2-edit-garden',
  grade: 2,
  kind: 'editing',
  title: 'Our Classroom Garden',
  intro: 'Read the draft and choose the best answer to each question.',
  passages: [
    {
      id: 'g2-pass-garden',
      title: 'Our Classroom Garden',
      genre: 'informational',
      blocks: [
        {
          kind: 'sentences',
          sentences: [
            'Last week, our second-grade class started a vegetable garden on our sunny windowsill.',
            'First, we planted tiny black bean seeds inside six small paper cups.',
            'Every morning, the green sprouts grow a little taller toward the warm sunlight.',
            'Yesterday afternoon, Carlos water each paper cup carefully with a small green watering can.',
            'On friday, we measured our bean plants with wooden rulers.',
            'Our teacher said we can take our thriving bean plants home next week.',
          ],
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.11D.i', cites: [3],
      stem: 'What change, if any, should be made to sentence 3?',
      choices: [
        ['Change sprouts to sprout', 'Sprouts is plural, matching the plural subject.'],
        'No change is needed in sentence 3.',
        ['Change grow to grows', 'Plural subject sprouts requires plural verb grow.'],
        ['Change warm to warmly', 'Warm describes the noun sunlight.'],
      ],
      answer: 1,
      explain: 'Sentence 3 is correct as written: plural subject "sprouts" agrees with plural verb "grow."',
    }),
    mcq({
      standard: 'rla:2.11D.ii', cites: [4],
      stem: 'What change should be made in sentence 4?',
      choices: [
        'Change water to watered',
        ['Change carefully to careful', 'Carefully is the correct adverb modifying the verb.'],
        ['Change with to from', 'With is the correct preposition showing the tool used.'],
        ['Change small to smaller', 'Small is the correct descriptive adjective.'],
      ],
      answer: 0,
      explain: 'Yesterday afternoon signals a past event, so the verb must be past tense: watered.',
    }),
    mcq({
      standard: 'rla:2.11D.ix', cites: [5],
      stem: 'What change should be made in sentence 5?',
      choices: [
        ['Change measured to measure', 'Measured is the correct past tense.'],
        ['Change bean to Bean', 'Bean is a common noun and should be lowercase.'],
        'Change friday to Friday',
        ['Change wooden to wood', 'Wooden is the proper adjective describing rulers.'],
      ],
      answer: 2,
      explain: 'Days of the week must always begin with a capital letter: Friday.',
    }),
    mcq({
      standard: 'rla:2.11D.x', cites: [6],
      stem: 'What is the correct punctuation mark to place at the end of sentence 6?',
      choices: [
        ['A question mark (?)', 'Sentence 6 is a statement, not an asking question.'],
        'A period (.)',
        ['An exclamation point (!)', 'Sentence 6 is a calm statement of fact.'],
        ['A comma (,)', 'Sentences never end with a comma.'],
      ],
      answer: 1,
      explain: 'A declarative sentence stating a fact ends with a period.',
    }),
    mcq({
      standard: 'rla:2.11C', cites: [1, 2],
      stem: 'What is the best way to combine sentences 1 and 2?',
      choices: [
        'Last week, our second-grade class started a windowsill garden by planting bean seeds in six small paper cups.',
        ['Our class started a garden, we planted bean seeds in cups.', 'This creates a comma splice.'],
        ['Last week we started a garden and planted seeds and cups were six and windowsill was sunny.', 'This strings too many thoughts with "and."'],
        ['Planting seeds in cups, a garden was started on our windowsill last week.', 'This creates an awkward passive sentence.'],
      ],
      answer: 0,
      explain: 'Combining the ideas with a prepositional phrase ("by planting bean seeds...") creates a smooth, cohesive sentence.',
    }),
  ],
});
