// Grade 1 informational reading set: Tadpoles Grow Up

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G1_SET_INFO_FROGS: ReadingSet = makeSet({
  id: 'g1-info-frogs',
  grade: 1,
  kind: 'reading',
  title: 'Tadpoles Grow Up',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [
    {
      id: 'g1-pass-frogs',
      title: 'Tadpoles Grow Up',
      genre: 'informational',
      blocks: [
        {
          kind: 'p',
          text: 'Frogs begin their lives as tiny jelly eggs floating in a freshwater pond. Soon, the eggs hatch into little swimming creatures called tadpoles. Tadpoles have long tails and breathe underwater through gills.',
        },
        {
          kind: 'p',
          text: 'As weeks pass by, the tadpole begins to change. First, two back legs grow. Next, two front legs appear, and the tail shrinks away. Soon, the tadpole becomes a hopping green frog that can breathe air on land.',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:1.9D.i', cites: [1, 2],
      stem: 'What is the central idea of this selection?',
      choices: [
        'Tadpoles grow and change into adult frogs.',
        ['Frogs lay jelly eggs in freshwater ponds.', 'Laying eggs is only the first step in how frogs grow.'],
        ['Tadpoles use their long tails to swim.', 'This is a supporting detail about tadpoles, not the main idea.'],
        ['Frogs hop on the grass near the water.', 'The passage describes the entire lifecycle, not just adult frogs hopping.'],
      ],
      answer: 0,
      explain: 'The selection describes how frogs hatch from eggs as tadpoles and grow into adult frogs.',
    }),
    mcq({
      standard: 'rla:1.9D.iii', cites: [2],
      stem: 'What happens right after a tadpole grows two back legs?',
      choices: [
        'Two front legs appear.',
        ['The long tail grows wider.', 'The tail shrinks away after the legs appear.'],
        ['The frog lays new jelly eggs.', 'Adult frogs lay eggs, not developing tadpoles.'],
        ['The egg hatches in the pond water.', 'The egg hatches before the tadpole begins growing legs.'],
      ],
      answer: 0,
      explain: 'Paragraph 2 explains: "First, two back legs grow. Next, two front legs appear."',
    }),
    mcq({
      standard: 'rla:1.9D.ii', cites: [1],
      stem: 'Paragraph 1 teaches the reader that young tadpoles—',
      choices: [
        'have long tails and breathe underwater through gills',
        ['hop onto grassy banks near the pond water', 'Young tadpoles swim in water; adult frogs hop on land.'],
        ['have small wings to fly into the air', 'Tadpoles have tails for swimming, not wings.'],
        ['eat sweet berries from garden bushes', 'The text describes tadpoles swimming and breathing through gills.'],
      ],
      answer: 0,
      explain: 'Paragraph 1 states that tadpoles have long tails and breathe underwater through gills.',
    }),
    mcq({
      standard: 'rla:1.3B', cites: [2],
      stem: 'In paragraph 2, the word **shrinks** means becomes—',
      choices: [
        ['longer', 'Shrinks means getting smaller, not longer.'],
        ['greener', 'Shrinks describes size getting smaller, not color.'],
        'smaller',
        ['faster', 'Shrinks refers to size, not swimming speed.'],
      ],
      answer: 2,
      explain: 'As the tadpole becomes a frog, its tail shrinks, meaning it becomes smaller until it disappears.',
    }),
    mcq({
      standard: 'rla:1.10A', cites: [1, 2],
      stem: 'Why did the author write this selection?',
      choices: [
        'To explain how tadpoles grow and change',
        ['To tell a funny story about pets at a pond', 'This is an informational science text that gives facts, not a story.'],
        ['To teach readers how to build a garden pond', 'The text explains how frogs develop, not how to build a pond.'] ,
        ['To describe the birds that visit freshwater lakes', 'The text focuses on frogs and tadpoles, not birds.'],
      ],
      answer: 0,
      explain: 'The author wrote this text to inform readers about how tadpoles grow and change.',
    }),
    mcq({
      standard: 'rla:1.6G', cites: [2],
      stem: 'Which detail shows how adult frogs are different from young tadpoles?',
      choices: [
        'Adult frogs can hop on land and breathe air.',
        ['Adult frogs hatch from jelly eggs in water.', 'Both tadpoles and frogs begin from eggs.'],
        ['Adult frogs swim using long, thin tails.', 'Adult frogs lose their tails as they grow.'],
        ['Adult frogs breathe underwater through gills.', 'Young tadpoles use gills, but adult frogs breathe air.'],
      ],
      answer: 0,
      explain: 'Paragraph 2 explains that an adult frog can breathe air and hop on land, unlike tadpoles.',
    }),
  ],
});
