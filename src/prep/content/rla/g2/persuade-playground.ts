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
        'Oak Park needs more swings for kids.',
        ['The city should replace the playground with parking.', 'The author wants more swings, not parking.'],
        ['Children should stay home and play video games all day.', 'The author encourages active outdoor play.'],
        ['The park director should remove all existing swings.', 'The author wants additional swings.'],
      ],
      answer: 0,
      explain: 'Paragraph 1 clearly states the main argument that Oak Park needs more swings.',
    }),
    mcq({
      standard: 'rla:2.9E.ii', cites: [1],
      stem: 'Which statement from paragraph 1 is a **fact** that can be proven true?',
      choices: [
        ['"Swinging is the most exciting activity in the state of Texas."', 'Excitement is a personal opinion.'],
        'There are only two belt swings on the entire playground.',
        ['"Oak Park is the prettiest playground in the entire city."', 'Prettiness is a subjective opinion.'],
        ['"All children love waiting in long lines on sunny afternoons."', 'Waiting is a feeling/opinion, and waiting is disliked.'],
      ],
      answer: 1,
      explain: 'Counting the two physical belt swings on the playground is a verifiable fact.',
    }),
    mcq({
      standard: 'rla:2.9E.i', cites: [2],
      stem: 'What problem does the author describe in paragraph 2 to support the claim?',
      choices: [
        ['The playground slide is covered in thick, wet mud.', 'The slide is not discussed.'],
        ['The park water fountain is completely broken and dry.', 'Water fountains are not mentioned.'],
        'Kids wait in long lines and get upset.',
        ['Park benches near the swings need fresh green paint.', 'Benches are not mentioned.'],
      ],
      answer: 2,
      explain: 'Paragraph 2 explains that having only two swings causes long lines and arguments among children.',
    }),
    mcq({
      standard: 'rla:2.9E.i', cites: [3],
      stem: 'What specific action does the author ask the Park Director to take?',
      choices: [
        'Add four new swings to Oak Park.',
        ['Build a concrete swimming pool in the grass.', 'Swimming pools are not requested.'],
        ['Cut down all the shady oak trees in the park.', 'Trees are not discussed for removal.'],
        ['Close the playground early every single afternoon.', 'Closing the park is the opposite of helping children play.'],
      ],
      answer: 0,
      explain: 'Paragraph 3 directly requests: "Please add four new swings to Oak Park."',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [3],
      stem: 'Why does the author mention that swinging builds arm strength?',
      choices: [
        ['To explain how to win weightlifting medals in sports.', 'Weightlifting is not mentioned.'],
        'To show swinging is healthy exercise.',
        ['To prove that swings are dangerous for young children.', 'The author argues swings are beneficial.'],
        ['To argue that schools should cancel afternoon recess.', 'The author supports active recess play.'],
      ],
      answer: 1,
      explain: 'Mentioning arm strength gives a healthy reason why having swings benefits children.',
    }),
    mcq({
      standard: 'rla:2.10A', cites: [1, 2, 3],
      stem: 'What is the author\'s main purpose in writing this letter?',
      choices: [
        ['To tell a silly story about broken playground swings.', 'This is a serious persuasive letter, not a fictional story.'],
        ['To describe how plastic swings are made in factories.', 'Manufacturing is not discussed.'],
        'To persuade the director to add swings.',
        ['To teach children how to pump their legs on swings.', 'Pumping legs is not instructional content.'],
      ],
      answer: 2,
      explain: 'The letter is written to convince the park director to approve adding more swings to the park.',
    }),
  ],
});
