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
        ['Robins like to sing in the rain.', 'The text is about building nests, not singing.'],
        'Robins work together to build safe nests for their eggs.',
        ['Garden worms are good food for birds.', 'The passage discusses building materials, not food.'],
        ['Trees lose their green leaves in autumn.', 'The setting is springtime nest-building.'],
      ],
      answer: 1,
      explain: 'The main idea is that robin parents work together to build a safe, warm nest for their eggs.',
    }),
    mcq({
      standard: 'rla:1.9D.iii', cites: [2],
      stem: 'What is the final step the robins take to finish the nest?',
      choices: [
        'Lining the inside with soft feathers.',
        ['Finding dry grass in the garden.', 'Gathering grass happens at the beginning.'],
        ['Carrying mud up into the tree.', 'Mud is used before the soft lining is placed.'],
        ['Painting the outside with bright colors.', 'Birds do not paint nests.'],
      ],
      answer: 0,
      explain: 'Paragraph 2 states: "Finally, they line the inside of the nest with soft feathers."',
    }),
    mcq({
      standard: 'rla:1.10A', cites: [1, 2],
      stem: 'The author wrote this selection mainly to—',
      choices: [
        ['entertain readers with a story about a flying cat', 'The selection is about robins, not cats.'],
        ['persuade readers to buy a pet bird', 'The text does not try to sell pets.'],
        'inform readers about how robins build their homes',
        ['describe how to plant apple trees', 'The text explains how birds build nests.'],
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
        'put careful work and care into protecting their eggs',
        ['only live in gardens during the winter', 'They build nests in spring.'],
        ['never use soft materials in nests', 'They line the nest with soft feathers.'],
        ['leave their eggs alone on the bare grass', 'They build cozy nests high in trees.'],
      ],
      answer: 0,
      explain: 'All details combined show how carefully robins construct their nests to keep eggs safe.',
    }),
    mcq({
      standard: 'rla:1.10C', cites: [2],
      stem: 'The words **Next** and **Finally** help the reader understand—',
      choices: [
        'the order of steps in building a nest',
        ['where robins find their food', 'These words show sequence, not food locations.'],
        ['why birds have wings to fly', 'These transition words show time order.'],
        ['how cold the winter snow can be', 'The text is set in spring.'],
      ],
      answer: 0,
      explain: 'Words like Next and Finally show the chronological order of how the nest is constructed.',
    }),
    mcq({
      standard: 'rla:1.7C', cites: [2],
      stem: 'Which sentence shows that the nest is soft inside?',
      choices: [
        ['"They carry these building supplies in their beaks."', 'This tells how robins carry things.'],
        ['"They search the garden for small twigs."', 'Twigs are not soft.'],
        '"Finally, they line the inside of the nest with soft feathers."',
        ['"Next, the robins use wet mud."', 'Mud holds the nest together.'],
      ],
      answer: 2,
      explain: 'The sentence says the inside of the nest has soft feathers.',
    }),
  ],
});
