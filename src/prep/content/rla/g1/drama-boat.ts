// Grade 1 drama reading set: The Paper Boat

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G1_SET_DRAMA_BOAT: ReadingSet = makeSet({
  id: 'g1-drama-boat',
  grade: 1,
  kind: 'reading',
  title: 'The Paper Boat',
  intro: 'Read the play and choose the best answer to each question.',
  passages: [
    {
      id: 'g1-pass-boat',
      title: 'The Paper Boat',
      genre: 'drama',
      blocks: [
        {
          kind: 'speech',
          speaker: 'EMMA',
          text: 'Look at this folded blue paper boat I made! It has two pointed sails.',
        },
        {
          kind: 'speech',
          speaker: 'LIAM',
          text: 'That is neat, Emma. Let us fill the wash basin with water to see if it will float.',
        },
        {
          kind: 'speech',
          speaker: 'EMMA',
          text: 'Watch it bob on the tiny waves! It is sailing across our pretend ocean.',
        },
        {
          kind: 'speech',
          speaker: 'LIAM',
          text: 'You are a great ship builder, Emma. Let us fold a yellow boat next!',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:1.9C', cites: [1, 2],
      stem: 'Who are the characters in this play?',
      choices: [
        'Emma and Liam',
        ['Carlos and Mia', 'Carlos and Mia are not in this play.'],
        ['A sailor and a captain', 'The characters are two children named Emma and Liam.'],
        ['Two fish in a pond', 'The characters are people talking.'],
      ],
      answer: 0,
      explain: 'The speaker names shown before each line are EMMA and LIAM.',
    }),
    mcq({
      standard: 'rla:1.9C', cites: [2],
      stem: 'Where does the action in this play take place?',
      choices: [
        ['On a real pirate ship at sea.', 'The children are playing pretend indoors.'],
        ['In a deep snowy forest.', 'The play is not set in a forest.'],
        'Inside near a wash basin filled with water.',
        ['At a noisy baseball stadium.', 'The play is set inside with a water basin.'],
      ],
      answer: 2,
      explain: 'Liam suggests filling a wash basin with water to float the paper boat.',
    }),
    mcq({
      standard: 'rla:1.8C', cites: [2, 3],
      stem: 'What do Emma and Liam do to test the paper boat?',
      choices: [
        ['They throw it into the trash can.', 'They want to play with the boat.'],
        'They place it in a water basin to see if it floats.',
        ['They tear it into tiny paper pieces.', 'They keep the boat safe.'],
        ['They fly it like a kite in the yard.', 'Paper boats float on water, not fly.'],
      ],
      answer: 1,
      explain: 'Liam says, "Let us fill the wash basin with water to see if it will float."',
    }),
    mcq({
      standard: 'rla:1.6C', cites: [4],
      stem: 'What will Emma and Liam most likely do next?',
      choices: [
        ['Go to sleep in their beds.', 'They are excited to continue playing.'],
        ['Walk to the grocery store.', 'They are playing inside with paper craft.'],
        'Fold a yellow paper boat together.',
        ['Eat lunch at the cafeteria.', 'Liam suggests folding a yellow boat next.'],
      ],
      answer: 2,
      explain: 'Liam says: "Let us fold a yellow boat next!"',
    }),
    mcq({
      standard: 'rla:1.8B', cites: [4],
      stem: 'How does Liam feel about Emma\'s paper boat?',
      choices: [
        'He is impressed and thinks she is a great builder.',
        ['He is jealous and refuses to look.', 'Liam compliments Emma and calls it neat.'],
        ['He is bored and walks away.', 'Liam joins in the fun.'],
        ['He is frightened of the paper sails.', 'Liam enjoys playing with the boat.'],
      ],
      answer: 0,
      explain: 'Liam says, "That is neat" and "You are a great ship builder, Emma."',
    }),
    mcq({
      standard: 'rla:1.6F', cites: [3],
      stem: 'Which words show that the boat stays on top of the water?',
      choices: [
        ['"two pointed sails"', 'This describes the shape of the paper.'],
        ['"folded blue paper boat"', 'This tells what the boat was made of.'],
        ['"great ship builder"', 'This is a compliment from Liam.'],
        '"Watch it bob on the tiny waves!"',
      ],
      answer: 3,
      explain: 'Bobbing on the waves shows that the paper boat is floating successfully.',
    }),
  ],
});
