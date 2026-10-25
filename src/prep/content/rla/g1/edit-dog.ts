// Grade 1 editing draft: My Dog Max

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G1_SET_EDIT_DOG: ReadingSet = makeSet({
  id: 'g1-edit-dog',
  grade: 1,
  kind: 'editing',
  title: 'My Dog Max',
  intro: 'Read the draft and choose the best answer to each question.',
  passages: [
    {
      id: 'g1-pass-draft-dog',
      title: 'My Dog Max',
      genre: 'informational',
      blocks: [
        {
          kind: 'sentences',
          sentences: [
            'My dog Max is a playful brown puppy.',
            'Every afternoon, he runs across the green yard to catch his red rubber ball.',
            'Yesterday, max found a hidden bone near the garden fence.',
            'He chewed happily on his treat in the warm sunshine',
            'I love to spend time with my faithful puppy.',
          ],
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:1.11B.i', cites: [2],
      stem: 'Which sentence could best be added after sentence 2 to tell more about playing ball?',
      choices: [
        'He wags his tail each time he brings the ball back.',
        ['Winter snow covers the sidewalk in January.', 'Winter snow does not fit a sunny ball game.'],
        ['My teacher gave us new spelling words.', 'Spelling words are unrelated to playing with a puppy.'],
        ['Bicycles have two black rubber tires.', 'Bicycles are off-topic.'],
      ],
      answer: 0,
      explain: 'Adding that he brings the ball back fits the topic of playing catch with the puppy.',
    }),
    mcq({
      standard: 'rla:1.11D.viii', cites: [3],
      stem: 'What change should be made in sentence 3?',
      choices: [
        ['Change found to finded', 'Found is the correct irregular past tense of find.'],
        'Change max to Max',
        ['Change bone to bones', 'Sentence 3 refers to a single hidden bone.'],
        ['Change fence to fense', 'Fence is spelled f-e-n-c-e.'],
      ],
      answer: 1,
      explain: 'Max is a proper noun (the dog\'s name), so it must begin with a capital letter: Max.',
    }),
    mcq({
      standard: 'rla:1.11D.ix', cites: [4],
      stem: 'What change should be made in sentence 4?',
      choices: [
        'Add a period at the end of the sentence',
        ['Add a question mark at the end', 'Sentence 4 is a statement, not a question.'],
        ['Change sunshine to sunny', 'Sunshine is the correct compound noun.'],
        ['Change chewed to chew', 'The sentence tells about what happened yesterday.'],
      ],
      answer: 0,
      explain: 'Sentence 4 is missing end punctuation; a declarative statement needs a period.',
    }),
    mcq({
      standard: 'rla:1.11D.i', cites: [2],
      stem: 'What change, if any, should be made to sentence 2?',
      choices: [
        ['Change runs to run', 'Singular subject "he" takes singular verb "runs."'],
        'No change is needed in sentence 2.',
        ['Change yard to yerd', 'Yard is spelled y-a-r-d.'],
        ['Change green to greenly', 'Green is the correct adjective modifying yard.'],
      ],
      answer: 1,
      explain: 'Sentence 2 has correct subject-verb agreement and spelling; no change is needed.',
    }),
    mcq({
      standard: 'rla:1.11C', cites: [4],
      stem: 'Which words could best replace **"his treat"** in sentence 4 to add specific detail?',
      choices: [
        ['a thing', 'A thing is vague, not descriptive.'],
        ['something big', 'Something big does not specify what the treat was.'],
        'his smooth white bone',
        ['food', 'Food is less descriptive than treat.'],
      ],
      answer: 2,
      explain: '"His smooth white bone" adds clear, vivid details about what the dog was chewing.',
    }),
  ],
});
