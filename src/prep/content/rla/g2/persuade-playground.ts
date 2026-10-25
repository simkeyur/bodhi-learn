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
          text: 'Dear Park Director, our neighborhood Oak Park needs more swing sets. Right now, there are only two belt swings on the entire playground for dozens of neighborhood children.',
        },
        {
          kind: 'p',
          text: 'On sunny afternoons, children have to wait in long lines for a turn on the swings. Some kids get frustrated and argue when other children swing too long. Nobody enjoys waiting ten minutes just to swing for two minutes.',
        },
        {
          kind: 'p',
          text: 'Swinging is wonderful exercise that builds arm strength and helps kids stay active outdoors. Please add four new swings to Oak Park so all children can play together happily.',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.8E.i', cites: [1],
      stem: 'What is the author\'s main claim in this letter?',
      choices: [
        'Oak Park needs more swing sets installed for neighborhood children.',
        ['The city should replace the playground with a parking lot.', 'The author wants more swings, not parking.'],
        ['Children should stay home and play video games.', 'The author encourages active outdoor play.'],
        ['The park director should remove all swings from the playground.', 'The author wants additional swings.'],
      ],
      answer: 0,
      explain: 'Paragraph 1 clearly states the main argument: "our neighborhood Oak Park needs more swing sets."',
    }),
    mcq({
      standard: 'rla:2.8E.ii', cites: [1],
      stem: 'Which statement from paragraph 1 is a **fact** that can be proven true?',
      choices: [
        ['Swinging is the most exciting activity in Texas.', 'Excitement is a personal opinion.'],
        'There are only two belt swings on the entire playground.',
        ['Oak Park is the prettiest park in the whole city.', 'Prettiness is a subjective opinion.'],
        ['All children love waiting in lines.', 'Waiting is a feeling/opinion, and waiting is disliked.'],
      ],
      answer: 1,
      explain: 'Counting the two physical belt swings on the playground is a verifiable fact.',
    }),
    mcq({
      standard: 'rla:2.8E.i', cites: [2],
      stem: 'What problem does the author describe in paragraph 2 to support the claim?',
      choices: [
        ['The playground slide is covered in wet mud.', 'The slide is not discussed.'],
        ['The park water fountain is broken.', 'Water fountains are not mentioned.'],
        'Long waiting lines frustrate children and lead to playground arguments.',
        ['Park benches need fresh green paint.', 'Benches are not mentioned.'],
      ],
      answer: 2,
      explain: 'Paragraph 2 explains that having only two swings causes long lines and arguments among children.',
    }),
    mcq({
      standard: 'rla:2.8E.i', cites: [3],
      stem: 'What specific action does the author ask the Park Director to take?',
      choices: [
        'Add four new swings to Oak Park.',
        ['Build a giant concrete swimming pool.', 'Swimming pools are not requested.'],
        ['Cut down the shady oak trees.', 'Trees are not discussed for removal.'],
        ['Close the park early every afternoon.', 'Closing the park is the opposite of helping children play.'],
      ],
      answer: 0,
      explain: 'Paragraph 3 directly requests: "Please add four new swings to Oak Park."',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [3],
      stem: 'Why does the author mention that swinging builds arm strength?',
      choices: [
        ['To explain how to win weightlifting medals.', 'Weightlifting is not mentioned.'],
        'To show that swinging provides healthy physical exercise for growing kids.',
        ['To prove that swings are dangerous for young children.', 'The author argues swings are beneficial.'],
        ['To argue that schools should cancel recess.', 'The author supports active recess play.'],
      ],
      answer: 1,
      explain: 'Mentioning arm strength gives a healthy reason why having swings benefits children.',
    }),
    mcq({
      standard: 'rla:2.9A', cites: [1, 2, 3],
      stem: 'What is the author\'s main purpose in writing this letter?',
      choices: [
        ['To entertain readers with a silly story about broken swings.', 'This is a serious persuasive letter, not a fictional story.'],
        ['To describe how swings are manufactured in factories.', 'Manufacturing is not discussed.'],
        'To persuade the park director to install more swings for children.',
        ['To teach children how to pump their legs while swinging.', 'Pumping legs is not instructional content.'],
      ],
      answer: 2,
      explain: 'The letter is written to convince the park director to approve adding more swings to the park.',
    }),
  ],
});
