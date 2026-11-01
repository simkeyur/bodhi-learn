// Grade 2 persuasive reading set: More Swings for Our Park

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G2_SET_PERSUADE_PLAYGROUND: ReadingSet = makeSet({
  id: 'g2-persuade-playground',
  grade: 2,
  kind: 'reading',
  title: 'More Swings for Oak Park',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [
    {
      id: 'g2-pass-playground',
      title: 'More Swings for Oak Park',
      genre: 'persuasive',
      blocks: [
        {
          kind: 'p',
          text: 'Dear Park Director, Oak Park needs more swings. Right now, there are only two belt swings on the entire playground. Many children visit the park each day.',
        },
        {
          kind: 'p',
          text: 'On sunny days, children wait in long lines for a turn. Some kids get upset when others swing too long. Nobody likes waiting a long time to swing.',
        },
        {
          kind: 'p',
          text: 'Swinging is good play that helps kids build arm strength. It keeps us healthy and active. Please add four new swings to Oak Park so we can all play together.',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.9E.i', cites: [1],
      stem: 'What is the author\'s main claim in this letter?',
      choices: [
        ['The city should replace the playground with parking spaces.', 'The author wants more swings, not parking.'],
        'Oak Park should add more belt swings for children to use together.',
        ['Children should stay home and play inside all day.', 'The author encourages active outdoor play.'],
        ['The park director should remove all broken swings.', 'The author wants additional swings added.'],
      ],
      answer: 1,
      explain: 'Paragraph 1 clearly states the main argument that Oak Park needs more swings.',
    }),
    mcq({
      standard: 'rla:2.9E.ii', cites: [1],
      stem: 'Which statement from paragraph 1 is a **fact** that can be proven true?',
      choices: [
        'There are only two belt swings on the entire neighborhood playground.',
        ['"Swinging is the most fun activity in the whole park."', 'Fun is a personal opinion.'],
        ['"Oak Park is the prettiest playground in the whole city."', 'Prettiness is a subjective opinion.'],
        ['"All children love waiting in lines on sunny days."', 'Waiting is disliked; this is not a fact.'],
      ],
      answer: 0,
      explain: 'Counting the two physical belt swings on the playground is a verifiable fact.',
    }),
    mcq({
      standard: 'rla:2.9E.i', cites: [2],
      stem: 'What problem does the author describe in paragraph 2 to support the claim?',
      choices: [
        'Children wait in long lines and get upset waiting for turns.',
        ['The playground slide is covered in thick, wet mud after rainstorms.', 'The slide is not mentioned in the letter.'],
        ['The park drinking fountain is broken and needs repair.', 'Water fountains are not discussed.'],
        ['The grass near the swings needs to be mowed by workers.', 'Lawn mowing is not mentioned.'],
      ],
      answer: 0,
      explain: 'Paragraph 2 explains that having only two swings causes long lines and arguments among children.',
    }),
    mcq({
      standard: 'rla:2.9E.i', cites: [3],
      stem: 'What specific action does the author ask the Park Director to take?',
      choices: [
        ['Build a swimming pool in the grass', 'A swimming pool is not requested.'],
        'Add four new swings to Oak Park',
        ['Cut down the shady trees in the park', 'Trees are not mentioned for removal.'],
        ['Close the playground early on sunny days', 'Closing the park is the opposite of helping kids play.'],
      ],
      answer: 1,
      explain: 'Paragraph 3 directly requests: "Please add four new swings to Oak Park."',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [3],
      stem: 'Why does the author mention that swinging builds arm strength?',
      choices: [
        'To show that swinging provides healthy exercise',
        ['To explain how athletes train for competitive sports', 'Sports training is not mentioned.'],
        ['To prove that playground equipment can be dangerous', 'The author argues swings are beneficial.'],
        ['To argue that schools should end afternoon recess', 'The author supports active play outdoors.'],
      ],
      answer: 0,
      explain: 'Mentioning arm strength gives a healthy reason why having swings benefits children.',
    }),
    mcq({
      standard: 'rla:2.10A', cites: [1, 2, 3],
      stem: 'What is the author\'s main purpose in writing this letter?',
      choices: [
        'To convince the director to add more swings to the park',
        ['To tell an amusing fictional story about playing on the playground', 'This is a persuasive letter, not an amusing story.'],
        ['To explain how swings are manufactured in factories', 'Manufacturing is not discussed.'],
        ['To teach young children how to pump their legs', 'The letter is a request, not how-to instructions.'],
      ],
      answer: 0,
      explain: 'The letter is written to convince the park director to approve adding more swings to the park.',
    }),
  ],
});
