// Grade 1 editing draft: Trip to the Farm

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G1_SET_EDIT_FARM: ReadingSet = makeSet({
  id: 'g1-edit-farm',
  grade: 1,
  kind: 'editing',
  title: 'Trip to the Farm',
  intro: 'Read the draft and choose the best answer to each question.',
  passages: [
    {
      id: 'g1-pass-draft-farm',
      title: 'Trip to the Farm',
      genre: 'informational',
      blocks: [
        {
          kind: 'sentences',
          sentences: [
            'On Saturday morning, our family visited a friendly dairy farm.',
            'We saw three woolly sheep and five big brown cow.',
            'The farmer let us pet a gentle baby lamb.',
            'i gave the lamb a handful of sweet clover.',
            'Visiting the farm was an exciting weekend adventure!',
          ],
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:1.11D.iii', cites: [2],
      stem: 'What change should be made in sentence 2?',
      choices: [
        'Change cow to cows',
        ['Change saw to see', 'The visit happened on Saturday in the past: saw.'],
        ['Change three to tree', 'Three is the number word.'],
        ['Change brown to browner', 'Brown correctly describes the color of the cows.'],
      ],
      answer: 0,
      explain: 'Because there are five cows, the plural form "cows" is required.',
    }),
    mcq({
      standard: 'rla:1.11D.viii', cites: [4],
      stem: 'What change should be made in sentence 4?',
      choices: [
        ['Change gave to gived', 'Gave is the correct irregular past tense of give.'],
        ['Change lamb to lam', 'Lamb is spelled l-a-m-b.'],
        'Change i to I',
        ['Change sweet to sweetly', 'Sweet is the adjective describing clover.'],
      ],
      answer: 2,
      explain: 'The pronoun "I" must always be capitalized, especially at the start of a sentence.',
    }),
    mcq({
      standard: 'rla:1.11B.ii', cites: [3],
      stem: 'Which sentence adds the most helpful detail about the baby lamb in sentence 3?',
      choices: [
        ['Farms have tall red barns with metal roofs.', 'This describes barns, not the baby lamb.'],
        'It had soft white wool.',
        ['The big barn has two wooden gates inside.', 'This describes barns, not the lamb.'],
        ['Loud tractors drive across the green pastures.', 'Tractors are unrelated to petting the lamb.'],
      ],
      answer: 1,
      explain: 'Describing its soft white wool gives a clear detail about the lamb.',
    }),
    mcq({
      standard: 'rla:1.11D.ii', cites: [1],
      stem: 'What change, if any, should be made to sentence 1?',
      choices: [
        ['Change visited to visit.', 'The trip happened on Saturday morning, so past tense visited is correct.'],
        ['Change dairy to dary.', 'Dairy is spelled d-a-i-r-y.'],
        'Make no change.',
        ['Change Saturday to saturday.', 'Days of the week are proper nouns and must be capitalized.'],
      ],
      answer: 2,
      explain: 'Sentence 1 is completely correct as written with proper capitalization and verb tense.',
    }),
    mcq({
      standard: 'rla:1.11D.ix', cites: [5],
      stem: 'Sentence 5 ends with an exclamation point because the writer—',
      choices: [
        ['asks a question about the animals on the farm', 'An asking sentence would end with a question mark.'],
        'shows strong excitement',
        ['wants to begin a brand new story about sheep', 'Exclamation points show strong feeling, not a new story.'],
        ['forgot to write the final words of the sentence', 'The sentence is a complete thought.'],
      ],
      answer: 1,
      explain: 'An exclamation point shows strong emotion or excitement about the adventure.',
    }),
  ],
});
