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
        ['Frogs lay eggs in freshwater ponds.', 'The text is about tadpoles changing into frogs.'],
        'Tadpoles grow into frogs.',
        ['Frogs only swim underwater with fins.', 'Frogs hop on land as adults.'],
        ['Many animals hatch from tiny eggs in water.', 'The passage specifically describes frogs.'],
      ],
      answer: 1,
      explain: 'The selection describes the lifecycle changes from egg to tadpole to adult frog.',
    }),
    mcq({
      standard: 'rla:1.9D.iii', cites: [2],
      stem: 'What happens right after a tadpole grows two back legs?',
      choices: [
        'Two front legs appear.',
        ['The eggs float on the pond.', 'The eggs hatch before legs grow.'],
        ['The tadpole flies away.', 'Frogs do not fly.'],
        ['The gills get longer.', 'Gills disappear as lungs develop.'],
      ],
      answer: 0,
      explain: 'Paragraph 2 explains: "First, two back legs grow. Next, two front legs appear."',
    }),
    mcq({
      standard: 'rla:1.9D.ii', cites: [1],
      stem: 'Paragraph 1 teaches the reader that young tadpoles—',
      choices: [
        ['hop onto grassy banks near the pond', 'Tadpoles swim; adult frogs hop.'],
        ['have wings to fly high in the air', 'Tadpoles have tails, not wings.'],
        'swim with long tails',
        ['eat sweet berries from bushes by trees', 'The text explains how tadpoles breathe underwater.'],
      ],
      answer: 2,
      explain: 'Paragraph 1 states that tadpoles have long tails and breathe underwater through gills.',
    }),
    mcq({
      standard: 'rla:1.3B', cites: [2],
      stem: 'In paragraph 2, the word **shrinks** means becomes—',
      choices: [
        ['much bigger and wider', 'Shrinks means becoming smaller.'],
        ['brighter in color', 'Shrinks describes size, not color.'],
        ['faster in swimming', 'Shrinks refers to the tail getting smaller.'],
        'smaller and smaller',
      ],
      answer: 3,
      explain: 'As the tadpole becomes a frog, its tail shrinks, meaning it gets smaller until it is gone.',
    }),
    mcq({
      standard: 'rla:1.10A', cites: [1, 2],
      stem: 'Why did the author write this selection?',
      choices: [
        'To show how frogs grow.',
        ['To tell a funny joke about pets at a pond.', 'This is an informational science text, not a joke.'],
        ['To explain why frog eggs float on water.', 'The author describes the whole development process.'],
        ['To teach readers how to build a garden pond.', 'The text explains frog development.'],
      ],
      answer: 0,
      explain: 'The author wrote this text to inform readers about how tadpoles grow and change.',
    }),
    mcq({
      standard: 'rla:1.6G', cites: [2],
      stem: 'Which detail shows how adult frogs are different from young tadpoles?',
      choices: [
        ['Adult frogs hatch from jelly eggs in water.', 'Tadpoles hatch from eggs.'],
        'Adult frogs can hop on land.',
        ['Adult frogs swim with long, powerful tails.', 'Adult frogs lose their tails.'],
        ['Adult frogs sleep in tree branches all day long.', 'The text says frogs hop on land.'],
      ],
      answer: 1,
      explain: 'Paragraph 2 explains that an adult frog can breathe air and hop on land, unlike tadpoles.',
    }),
  ],
});
