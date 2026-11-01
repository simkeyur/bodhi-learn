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
        'Robins work together to build a safe nest for their eggs.',
        ['Robins search the yard for small twigs and dry grass.', 'Finding twigs and grass is only one step in building the nest.'],
        ['Baby robins hatch from fragile blue eggs in spring.', 'The passage is about building the nest, not the eggs hatching.'],
        ['Trees keep birds safe from wind during cold storms.', 'The text describes robins building a nest, not tree protection.'],
      ],
      answer: 0,
      explain: 'The main idea is that robin parents work together to build a safe, warm nest for their eggs.',
    }),
    mcq({
      standard: 'rla:1.9D.iii', cites: [2],
      stem: 'What is the final step the robins take to finish the nest?',
      choices: [
        'Lining the inside with soft feathers',
        ['Finding small twigs and bits of string', 'Gathering twigs happens at the beginning.'],
        ['Cementing the grass with wet mud', 'Mud is used before the soft feathers are added.'],
        ['Laying blue eggs in the warm nest', 'The nest is completed before eggs are laid.'],
      ],
      answer: 0,
      explain: 'Paragraph 2 states: "Finally, they line the inside of the nest with soft feathers."',
    }),
    mcq({
      standard: 'rla:1.10A', cites: [1, 2],
      stem: 'The author wrote this selection mainly to—',
      choices: [
        'explain how robins build their nests',
        ['tell an imaginary story about two playful birds', 'The selection gives facts about birds, not a make-believe story.'],
        ['convince people to put birdhouses in yard trees', 'The text does not ask people to put up birdhouses.'],
        ['describe what baby birds like to eat in spring', 'The passage is about nest building, not bird food.'],
      ],
      answer: 0,
      explain: 'The author provides factual information about how robins construct their nests.',
    }),
    mcq({
      standard: 'rla:1.3B', cites: [2],
      stem: 'In paragraph 2, the word **fragile** means easily—',
      choices: [
        'broken',
        ['lost', 'Fragile describes how easily an egg can break, not losing it.'],
        ['hidden away', 'Fragile describes how easily an egg can break, not how it hides.'],
        ['washed clean', 'Fragile refers to how delicate the shell is.'],
      ],
      answer: 0,
      explain: 'Bird eggs have thin shells that are easily broken, so fragile means delicate or easily broken.',
    }),
    mcq({
      standard: 'rla:1.6H', cites: [1, 2],
      stem: 'Together, paragraphs 1 and 2 show that robins—',
      choices: [
        'take careful care to make a safe home for eggs',
        ['prefer to build nests on the open garden lawn', 'Robins build their nests high in sturdy trees.'],
        ['leave their nests as soon as spring arrives', 'Spring is when robins build their nests.'],
        ['collect materials only during cold winter days', 'Robins build their nests during the springtime.'],
      ],
      answer: 0,
      explain: 'All details combined show how carefully robins construct their nests to keep eggs safe.',
    }),
    mcq({
      standard: 'rla:1.10C', cites: [2],
      stem: 'The words **Next** and **Finally** help the reader understand—',
      choices: [
        'the steps in building a nest in order',
        ['how birds carry grass', 'The words show the sequence of steps, not how birds carry twigs.'],
        ['why robins choose tall trees', 'These transition words tell time order, not tree types.'],
        ['why bird eggs are blue instead of white', 'Next and Finally show order, not egg colors.'],
      ],
      answer: 0,
      explain: 'Words like Next and Finally show the chronological order of how the nest is constructed.',
    }),
    mcq({
      standard: 'rla:1.7C', cites: [2],
      stem: 'Which sentence shows that the nest is soft inside?',
      choices: [
        '"Finally, they line the inside of the nest with soft feathers."',
        ['"In the springtime, mother and father robins work together to make a warm nest."', 'This introduces the idea of a warm nest, but does not describe the soft inside.'],
        ['"They search the garden for small twigs, dry grass, and bits of string."', 'This lists the outer materials the birds collect.'],
        ['"Next, the robins use wet mud to cement the grass together into a cup shape."', 'This explains how the shape is held together by mud.'],
      ],
      answer: 0,
      explain: 'The sentence says the inside of the nest has soft feathers.',
    }),
  ],
});
