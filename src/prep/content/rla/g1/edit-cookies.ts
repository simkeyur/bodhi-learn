// Grade 1 editing draft: Baking Cookies

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G1_SET_EDIT_COOKIES: ReadingSet = makeSet({
  id: 'g1-edit-cookies',
  grade: 1,
  kind: 'editing',
  title: 'Baking Cookies',
  intro: 'Read the draft and choose the best answer to each question.',
  passages: [
    {
      id: 'g1-pass-draft-cookies',
      title: 'Baking Cookies',
      genre: 'informational',
      blocks: [
        {
          kind: 'sentences',
          sentences: [
            'Yesterday, Grandma and I baked warm oatmeal cookies.',
            'First, we mixed the sweet brown sugar and butter in a blue bowl.',
            'next, we stirred in raisins and rolled oats.',
            'The cookies baked in the hot oven for ten minutes.',
            'They smelled delicious as they cooled on the counter.',
          ],
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:1.11D.viii', cites: [3],
      stem: 'What change should be made in sentence 3?',
      choices: [
        'Change next to Next',
        ['Change stirred to stir', 'The sentence tells about yesterday, so past tense is needed.'],
        ['Change raisins to rasins', 'Raisins is spelled correctly.'],
        ['Change oats to oat', 'Rolled oats uses the plural form.'],
      ],
      answer: 0,
      explain: 'The first word of a sentence must begin with a capital letter: Next.',
    }),
    mcq({
      standard: 'rla:1.11D.iv', cites: [2],
      stem: 'In sentence 2, what kind of word is **"blue"**?',
      choices: [
        ['An action word that tells what they did', 'Blue is a color adjective, not an action verb.'],
        ['A naming word for a person in the family', 'Blue describes an object; it is not a person.'],
        'A describing word that tells about the bowl',
        ['A connecting word that joins two sentences', 'Blue is an adjective, not a conjunction.'],
      ],
      answer: 2,
      explain: 'Blue is an adjective that describes the noun bowl.',
    }),
    mcq({
      standard: 'rla:1.11B.i', cites: [2, 3],
      stem: 'The writer uses the words **"First"** and **"Next"** to—',
      choices: [
        ['describe what the kitchen looked like', 'First and Next show time order, not appearance.'],
        'show the order of the steps',
        ['count', 'These words show sequence, not a number count.'],
        ['explain why Grandma likes baking', 'These transition words show step order.'],
      ],
      answer: 1,
      explain: 'First and Next are sequence words that show chronological order.',
    }),
    mcq({
      standard: 'rla:1.11C', cites: [5],
      stem: 'Which sentence could best be added after sentence 5 to complete the story?',
      choices: [
        ['Grandma bought a new mixing spoon at the store.', 'Buying a spoon does not finish the baking story.'],
        ['The kitchen clock ticked loudly on the wall.', 'This does not give a good ending to eating cookies.'],
        'We ate two warm cookies with cold glasses of milk.',
        ['Oatmeal cookies are harder to bake than cakes.', 'Comparing cookies to cakes does not conclude the story.'],
      ],
      answer: 2,
      explain: 'Eating the warm cookies with milk is a natural and satisfying conclusion to baking cookies.',
    }),
    mcq({
      standard: 'rla:1.11D.i', cites: [5],
      stem: 'What change, if any, should be made to sentence 5?',
      choices: [
        ['Change smelled to smell.', 'The story is in past tense, so smelled is correct.'],
        'Make no change.',
        ['Change cooled to cools.', 'The sentence tells what happened yesterday.'],
        ['Change counter to countur.', 'Counter is spelled correctly.'],
      ],
      answer: 1,
      explain: 'Sentence 5 is correct as written.',
    }),
  ],
});
