// Grade 2 editing draft: Flying a Kite

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G2_SET_EDIT_KITE: ReadingSet = makeSet({
  id: 'g2-edit-kite',
  grade: 2,
  kind: 'editing',
  title: 'Flying a Kite',
  intro: 'Read the draft and choose the best answer to each question.',
  passages: [
    {
      id: 'g2-pass-kite',
      title: 'Flying a Kite',
      genre: 'informational',
      blocks: [
        {
          kind: 'sentences',
          sentences: [
            'Last Saturday, Sam and his father built a colorful paper diamond kite at their kitchen table.',
            'They used wooden dowels, red paper but long yellow ribbons for the tail.',
            'When they reached the open park, a steady breeze lifted the kite into the sky.',
            'Sam gripped the string handle tightly as the kite danced high above the oak trees.',
            'Sam smiled with pride becuase his homemade creation soared so gracefully.',
            'Flying a kite on a breezy afternoon is one of the best weekend activities.',
          ],
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.11D.viii', cites: [2],
      stem: 'What change should be made in sentence 2?',
      choices: [
        ['Change used to use', 'Used is the correct past tense.'],
        'Change but to and',
        ['Change long to longer', 'Long is the correct descriptive adjective.'],
        ['Change ribbons to ribbon', 'Ribbons is plural, describing multiple ribbons.'],
      ],
      answer: 1,
      explain: 'The sentence lists materials used together, so the conjunction "and" is needed instead of "but."',
    }),
    mcq({
      standard: 'rla:2.11D.vi', cites: [3],
      stem: 'Which preposition correctly completes the phrase "lifted the kite ___ the sky" in sentence 3?',
      choices: [
        'into',
        ['along', 'Along does not show upward movement into the sky.'],
        ['across', 'Across shows movement side to side, not up.'],
        ['beside', 'Beside does not express destination.'],
      ],
      answer: 0,
      explain: '"Into" expresses movement from the ground upward into the open sky.',
    }),
    mcq({
      standard: 'rla:2.11D.v', cites: [4],
      stem: 'In sentence 4, the phrase "high above the oak trees" tells—',
      choices: [
        ['when the kite was made.', 'Time is when; high above tells where.'],
        ['who built the paper kite.', 'Who tells the person.'],
        'where the kite flew.',
        ['why the kite had ribbon.', 'Why tells reason, not location.'],
      ],
      answer: 2,
      explain: '"High above the oak trees" is an adverbial prepositional phrase answering where the kite flew.',
    }),
    mcq({
      standard: 'rla:2.11D.xi', cites: [5],
      stem: 'What change should be made in sentence 5?',
      choices: [
        ['Change the verb smiled to smiles', 'Smiled is the correct past tense.'],
        'Change becuase to because',
        ['Change the past verb soared to soar', 'Soared matches the past tense.'],
        ['Change gracefully to graceful', 'Gracefully is the correct adverb modifying soared.'],
      ],
      answer: 1,
      explain: 'Because is spelled b-e-c-a-u-s-e.',
    }),
    mcq({
      standard: 'rla:2.11B.i', cites: [1],
      stem: 'Which transition phrase would best connect sentence 1 to the rest of the draft?',
      choices: [
        'To begin the project,',
        ['In final conclusion for the day,', 'In conclusion belongs at the end of a paper.'],
        ['On the other hand with doubts,', 'On the other hand shows contrast, which does not fit.'],
        ['Suddenly and without warning,', 'Suddenly implies unexpected shock, which does not fit building a kite.'],
      ],
      answer: 0,
      explain: '"To begin the project" introduces the sequence of building and flying the kite smoothly.',
    }),
  ],
});
