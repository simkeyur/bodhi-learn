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
        ['Change sheep to sheeps', 'The plural of sheep is sheep.'],
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
        ['Change lamb to lam', 'Lamb is spelled with a silent b at the end.'],
        'Change i to I',
        ['Change sweet to sweat', 'Sweet describes the taste of clover.'],
      ],
      answer: 2,
      explain: 'The pronoun "I" must always be capitalized, especially at the start of a sentence.',
    }),
    mcq({
      standard: 'rla:1.11B.ii', cites: [3],
      stem: 'Which sentence adds the most helpful detail about the baby lamb in sentence 3?',
      choices: [
        ['The big barn had red paint on the doors.', 'This describes the barn, not the baby lamb.'],
        'It had soft curly wool and nudged my hand.',
        ['Farms have many different kinds of animals.', 'This is general information, not a detail about the lamb.'],
        ['Tractors were parked along the dirt road.', 'Tractors are not related to petting the lamb.'],
      ],
      answer: 1,
      explain: 'Describing its soft curly wool gives a clear detail about the lamb.',
    }),
    mcq({
      standard: 'rla:1.11D.ii', cites: [1],
      stem: 'What change, if any, should be made to sentence 1?',
      choices: [
        ['Change visited to visit.', 'The trip happened in the past, so visited is correct.'],
        ['Change dairy to dary.', 'Dairy is spelled correctly.'],
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
        ['is asking the reader a question about the farm', 'An asking sentence would end with a question mark.'],
        'is sharing strong excitement about the visit',
        ['forgot to finish the sentence with a period', 'An exclamation mark is used on purpose to show feeling.'],
        ['is telling someone to do something right away', 'Sentence 5 expresses an excited feeling, not a command.'],
      ],
      answer: 1,
      explain: 'An exclamation point shows strong emotion or excitement about the adventure.',
    }),
  ],
});
