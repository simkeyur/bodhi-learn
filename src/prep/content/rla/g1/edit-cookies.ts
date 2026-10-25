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
        ['Change stirred to stir', 'The sentence tells about what happened yesterday.'],
        ['Change raisins to rasins', 'Raisins is spelled r-a-i-s-i-n-s.'],
        ['Change oats to oat', 'Rolled oats is plural.'],
      ],
      answer: 0,
      explain: 'The first word of a sentence must begin with a capital letter: Next.',
    }),
    mcq({
      standard: 'rla:1.11D.iv', cites: [2],
      stem: 'In sentence 2, what kind of word is **"blue"**?',
      choices: [
        ['An action word that tells what they did', 'Blue is not an action (verb).'],
        ['A naming word for a person', 'Blue is not a person.'],
        'A describing word (adjective) that tells the color of the bowl',
        ['An ending punctuation mark', 'Blue is a word, not a mark.'],
      ],
      answer: 2,
      explain: 'Blue is an adjective that describes the noun bowl.',
    }),
    mcq({
      standard: 'rla:1.11B.i', cites: [2, 3],
      stem: 'The writer uses the words **"First"** and **"Next"** to—',
      choices: [
        ['tell where Grandma lives', 'These words show sequence, not a location.'],
        'show the order of steps in baking cookies',
        ['ask the reader a riddle', 'The draft is a story about baking.'],
        ['name the characters in the kitchen', 'First and Next are transition words of time.'],
      ],
      answer: 1,
      explain: 'First and Next are sequence words that show chronological order.',
    }),
    mcq({
      standard: 'rla:1.11C', cites: [5],
      stem: 'Which sentence could best be added after sentence 5 to complete the story?',
      choices: [
        ['Rain falls from dark gray clouds outside.', 'Rain is off-topic from cookie baking.'],
        ['Frogs hop near water ponds in spring.', 'Frogs have nothing to do with cookies.'],
        'We enjoyed eating the warm cookies with cold milk.',
        ['The school bus arrives at eight in the morning.', 'The bus is unrelated.'],
      ],
      answer: 2,
      explain: 'Eating the warm cookies with milk is a natural and satisfying conclusion to baking cookies.',
    }),
    mcq({
      standard: 'rla:1.11D.i', cites: [5],
      stem: 'What change, if any, should be made to sentence 5?',
      choices: [
        ['Change smelled to smells', 'The draft is written in past tense.'],
        'No change is needed in sentence 5.',
        ['Change delicious to deliciously', 'Smelled takes predicate adjective delicious.'],
        ['Change counter to countur', 'Counter is spelled c-o-u-n-t-e-r.'],
      ],
      answer: 1,
      explain: 'Sentence 5 is correct as written.',
    }),
  ],
});
