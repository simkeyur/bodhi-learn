// Grade 1 informational reading set: Robins Build a Nest

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G1_SET_INFO_NEST: ReadingSet = makeSet({
  id: 'g1-info-nest',
  grade: 1,
  kind: 'reading',
  title: 'Robins Build a Nest',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [
    {
      id: 'g1-pass-nest',
      title: 'Robins Build a Nest',
      genre: 'informational',
      blocks: [
        {
          kind: 'p',
          text: 'In the springtime, mother and father robins work together to make a warm nest. They search the garden for small twigs, dry grass, and bits of string. They carry these building supplies in their beaks up into a sturdy tree.',
        },
        {
          kind: 'p',
          text: 'Next, the robins use wet mud to cement the grass together into a cup shape. Finally, they line the inside of the nest with soft feathers. Now the cozy nest is ready to keep fragile blue eggs safe and warm.',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:1.9D.i', cites: [1, 2],
      stem: 'What is the central idea of this selection?',
      choices: [
        ['Robins sing happily in the garden branches.', 'The text is about building nests, not singing.'],
        'Robins build safe nests for eggs.',
        ['Parent robins search the yard for earthworms.', 'The passage discusses building materials, not food.'],
        ['Tall trees lose their green leaves in autumn.', 'The setting is springtime nest-building.'],
      ],
      answer: 1,
      explain: 'The main idea is that robin parents work together to build a safe, warm nest for their eggs.',
    }),
    mcq({
      standard: 'rla:1.9D.iii', cites: [2],
      stem: 'What is the final step the robins take to finish the nest?',
      choices: [
        'Lining the inside with soft feathers.',
        ['Finding dry grass and string in the garden.', 'Gathering grass happens at the beginning.'],
        ['Carrying wet mud up into the sturdy tree.', 'Mud is used before the soft lining is placed.'],
        ['Painting the outside of the nest with color.', 'Birds do not paint nests.'],
      ],
      answer: 0,
      explain: 'Paragraph 2 states: "Finally, they line the inside of the nest with soft feathers."',
    }),
    mcq({
      standard: 'rla:1.10A', cites: [1, 2],
      stem: 'The author wrote this selection mainly to—',
      choices: [
        ['tell a funny story about playful garden birds', 'The selection gives facts about birds, not a funny story.'],
        ['convince people to put birdhouses in yard trees', 'The text does not ask people to put up birdhouses.'],
        'explain how robins build nests',
        ['describe the insects that live in garden soil', 'The text explains how birds build nests.'],
      ],
      answer: 2,
      explain: 'The author provides factual information about how robins construct their nests.',
    }),
    mcq({
      standard: 'rla:1.3B', cites: [2],
      stem: 'In paragraph 2, the word **fragile** means easily—',
      choices: [
        ['found on the grass', 'Fragile describes how delicate the eggs are.'],
        ['washed with river water', 'Fragile does not mean washable.'],
        'broken or hurt',
        ['turned into a bird', 'Fragile means delicate and easily damaged.'],
      ],
      answer: 2,
      explain: 'Bird eggs have thin shells that are easily broken, so fragile means delicate or easily broken.',
    }),
    mcq({
      standard: 'rla:1.6H', cites: [1, 2],
      stem: 'Together, paragraphs 1 and 2 show that robins—',
      choices: [
        'take careful care of their eggs',
        ['build simple nests on the open ground', 'They build nests high in trees.'],
        ['leave eggs alone while they look for worms', 'They line the nest and keep eggs safe.'],
        ['stay in gardens only during cold winter days', 'They build nests in spring.'],
      ],
      answer: 0,
      explain: 'All details combined show how carefully robins construct their nests to keep eggs safe.',
    }),
    mcq({
      standard: 'rla:1.10C', cites: [2],
      stem: 'The words **Next** and **Finally** help the reader understand—',
      choices: [
        'the order of the steps',
        ['how parent birds find garden worms', 'These words show sequence, not food locations.'],
        ['where robins like to build high nests', 'These transition words show time order.'],
        ['why robins fly south before winter', 'The text is set in spring.'],
      ],
      answer: 0,
      explain: 'Words like Next and Finally show the chronological order of how the nest is constructed.',
    }),
    mcq({
      standard: 'rla:1.7C', cites: [2],
      stem: 'Which sentence shows that the nest is soft inside?',
      choices: [
        ['"In the springtime, mother and father robins work together to make a warm nest."', 'This introduces nest building.'],
        ['"They search the garden for small twigs, dry grass, and bits of string."', 'Twigs and grass are building materials.'],
        '"Finally, they line the inside of the nest with soft feathers."',
        ['"Next, the robins use wet mud to cement the grass together into a cup shape."', 'Mud holds the nest together.'],
      ],
      answer: 2,
      explain: 'The sentence says the inside of the nest has soft feathers.',
    }),
  ],
});
