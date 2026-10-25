// Mini-passages for Grade 1 walkthrough samples. Pure data.
// Each passage has wordCount >= 25 words to satisfy lesson test checks.

import type { Passage } from '../types.ts';

const p = (text: string) => ({ kind: 'p' as const, text });

export const MINI_CAT: Passage = {
  id: 'g1-mini-cat',
  title: 'The Red Ball',
  genre: 'fiction',
  blocks: [
    p('Sam the kitten loved playing in the sunny backyard. One afternoon, he found a shiny red rubber ball resting on the green grass. He tapped the ball with his tiny white paw.'),
    p('The red ball rolled down the sloping garden path! Sam ran after it as fast as his little legs could carry him. The ball rolled under a wooden bench and stopped. Sam squeezed under the bench and patted his favorite ball happily.'),
  ],
};

export const MINI_ANT: Passage = {
  id: 'g1-mini-ant',
  title: 'The Ant and the Dove',
  genre: 'fiction',
  blocks: [
    p('A thirsty little ant walked down to the clear river for a cool drink. Suddenly, a strong wave swept the ant into deep water. The ant struggled to stay afloat and cried out for help.'),
    p('A gentle dove perched in a nearby tree saw the ant in trouble. The dove quickly dropped a large green leaf into the water. The ant climbed onto the floating leaf and drifted safely to the grassy bank. The ant thanked the kind dove.'),
  ],
};

export const MINI_FROGS: Passage = {
  id: 'g1-mini-frogs',
  title: 'Tadpoles Grow Up',
  genre: 'informational',
  blocks: [
    p('Frogs begin their lives as tiny jelly eggs floating in a freshwater pond. Soon, the eggs hatch into little swimming creatures called tadpoles. Tadpoles have long tails and breathe underwater through gills.'),
    p('As weeks pass by, the tadpole begins to change. First, two back legs grow. Next, two front legs appear, and the tail shrinks away. Soon, the tadpole becomes a hopping green frog that can breathe air on land.'),
  ],
};

export const MINI_NEST: Passage = {
  id: 'g1-mini-nest',
  title: 'Robins Build a Nest',
  genre: 'informational',
  blocks: [
    p('In the springtime, mother and father robins work together to make a warm nest. They search the garden for small twigs, dry grass, and bits of string. They carry these building supplies in their beaks up into a sturdy tree.'),
    p('Next, the robins use wet mud to cement the grass together into a cup shape. Finally, they line the inside of the nest with soft feathers. Now the cozy nest is ready to keep fragile blue eggs safe and warm.'),
  ],
};

export const MINI_KITTENS_POEM: Passage = {
  id: 'g1-mini-kittens-poem',
  title: 'The Three Little Kittens',
  genre: 'poetry',
  blocks: [
    { kind: 'line', text: 'Three little kittens, they lost their mittens,' },
    { kind: 'line', text: 'And they began to cry,' },
    { kind: 'line', text: '"Oh, mother dear, we sadly fear,' },
    { kind: 'line', text: 'Our mittens we have lost."', stanzaEnd: true },
    { kind: 'line', text: '"What! lost your mittens, you naughty kittens!' },
    { kind: 'line', text: 'Then you shall have no pie."' },
    { kind: 'line', text: '"Mee-ow, mee-ow, mee-ow."' },
    { kind: 'line', text: '"No, you shall have no pie."', stanzaEnd: true },
    { kind: 'line', text: 'Three little kittens, they found their mittens,' },
    { kind: 'line', text: 'And they began to cry,' },
    { kind: 'line', text: '"Oh, mother dear, see here, see here,' },
    { kind: 'line', text: 'Our mittens we have found!"', stanzaEnd: true },
    { kind: 'line', text: '"Put on your mittens, you silly kittens,' },
    { kind: 'line', text: 'And you shall have some pie."' },
    { kind: 'line', text: '"Purr-r, purr-r, purr-r,"' },
    { kind: 'line', text: '"Oh, let us have some pie."' },
  ],
};

export const MINI_BED_POEM: Passage = {
  id: 'g1-mini-bed-poem',
  title: 'Bed in Summer',
  genre: 'poetry',
  blocks: [
    { kind: 'line', text: 'In winter I get up at night' },
    { kind: 'line', text: 'And dress by yellow candle-light.' },
    { kind: 'line', text: 'In summer, quite the other way,' },
    { kind: 'line', text: 'I have to go to bed by day.', stanzaEnd: true },
    { kind: 'line', text: 'I have to go to bed and see' },
    { kind: 'line', text: 'The birds still hopping on the tree,' },
    { kind: 'line', text: 'Or hear the grown-up people\'s feet' },
    { kind: 'line', text: 'Still going past me in the street.', stanzaEnd: true },
    { kind: 'line', text: 'And does it not seem hard to you,' },
    { kind: 'line', text: 'When all the sky is clear and blue,' },
    { kind: 'line', text: 'And I should like so much to play,' },
    { kind: 'line', text: 'To have to go to bed by day?' },
  ],
};

export const MINI_BOAT: Passage = {
  id: 'g1-mini-boat',
  title: 'The Paper Boat',
  genre: 'drama',
  blocks: [
    { kind: 'speech', speaker: 'EMMA', text: 'Look at this folded blue paper boat I made! It has two pointed sails.' },
    { kind: 'speech', speaker: 'LIAM', text: 'That is neat, Emma. Let us fill the wash basin with water to see if it will float.' },
    { kind: 'speech', speaker: 'EMMA', text: 'Watch it bob on the tiny waves! It is sailing across our pretend ocean.' },
    { kind: 'speech', speaker: 'LIAM', text: 'You are a great ship builder, Emma. Let us fold a yellow boat next!' },
  ],
};

export const MINI_APPLES: Passage = {
  id: 'g1-mini-apples',
  title: 'Eat Red Apples',
  genre: 'argumentative',
  blocks: [
    p('Apples are the best fruit to choose for afternoon snack time. Crisp red apples are sweet, crunchy, and delicious to eat. They taste wonderful right off the tree or sliced with peanut butter.'),
    p('Apples are also full of vitamins that keep your body strong and healthy. They give your brain energy to learn and play all day. Everyone should pack a juicy apple in their lunchbox every day!'),
  ],
};

export const MINI_DRAFT_DOG: Passage = {
  id: 'g1-mini-draft-dog',
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
};
