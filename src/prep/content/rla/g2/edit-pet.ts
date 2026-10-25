// Grade 2 editing draft: My Pet Hamster

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G2_SET_EDIT_PET: ReadingSet = makeSet({
  id: 'g2-edit-pet',
  grade: 2,
  kind: 'editing',
  title: 'My Pet Hamster',
  intro: 'Read the draft and choose the best answer to each question.',
  passages: [
    {
      id: 'g2-pass-pet',
      title: 'My Pet Hamster',
      genre: 'informational',
      blocks: [
        {
          kind: 'sentences',
          sentences: [
            'My family adopted a furry golden hamster named Squeaky from the neighborhood pet shelter.',
            'Every afternoon, I feed Squeaky crunchy orange carrot and sunflower seeds.',
            'Squeaky loves stuffing seeds inside her fluffy cheek pouches to save for later.',
            'His cage has a red plastic tunnel and a exercise wheel that spins silently.',
            'He enjoys snacking on fresh apples, seeds and crunchy broccoli bits.',
            'Having a gentle pet hamster has taught me how to be dependable and caring.',
          ],
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.11D.iii', cites: [2],
      stem: 'What change should be made in sentence 2?',
      choices: [
        'Change carrot to carrots',
        ['Change afternoon to afternoons', 'Every afternoon is singular.'],
        ['Change feed to fed', 'Every afternoon indicates present habitual action.'],
        ['Change seeds to seed', 'Seeds is plural, describing multiple seeds.'],
      ],
      answer: 0,
      explain: 'Crunchy orange carrots should be plural to match the multiple pieces of food being fed.',
    }),
    mcq({
      standard: 'rla:2.11D.vii', cites: [3],
      stem: 'What change should be made in sentence 3?',
      choices: [
        ['Change fluffy to fluffier', 'Fluffy correctly describes pouches.'],
        ['Change stuffing to stuff', 'Stuffing describes ongoing action.'],
        'Change her to his',
        ['Change save to saves', 'Save follows the infinitive "to."'],
      ],
      answer: 2,
      explain: 'The draft refers to Squeaky with masculine pronouns ("His cage", "He enjoys"), so her should be his.',
    }),
    mcq({
      standard: 'rla:2.11D.iv', cites: [4],
      stem: 'What change should be made in sentence 4?',
      choices: [
        ['Change has to have', 'Singular subject cage requires singular verb has.'],
        'Change a exercise wheel to an exercise wheel',
        ['Change spins to spin', 'Singular wheel requires spins.'],
        ['Change silently to silent', 'Silently is the correct adverb modifying spins.'],
      ],
      answer: 1,
      explain: 'Use the article "an" before words starting with a vowel sound: an exercise wheel.',
    }),
    mcq({
      standard: 'rla:2.11D.x', cites: [5],
      stem: 'What punctuation change should be made in sentence 5?',
      choices: [
        'Add a comma after seeds',
        ['Add a period after fresh', 'Fresh describes apples; no period belongs there.'],
        ['Remove the comma after apples', 'Commas belong between items in a series.'],
        ['Add a question mark at the end', 'The sentence is a statement, not a question.'],
      ],
      answer: 0,
      explain: 'Use commas to separate items in a series: apples, seeds, and crunchy broccoli bits.',
    }),
    mcq({
      standard: 'rla:2.11B.ii', cites: [4],
      stem: 'The writer wants to add a detail describing Squeaky\'s cage. Which sentence best develops sentence 4?',
      choices: [
        ['Hamsters were discovered in the Syrian desert long ago.', 'General history does not describe the cage.'],
        ['Some pets like large dogs need daily outdoor walks.', 'Dogs are unrelated to Squeaky\'s cage.'],
        'Soft wood shavings cover the cage floor so Squeaky can burrow and sleep warmly.',
        ['Pet stores sell many different types of pet food.', 'Store merchandise does not describe the cage.'],
      ],
      answer: 2,
      explain: 'Describing the soft wood shavings provides a specific, relevant detail about the cage.',
    }),
  ],
});
