// Grade 1 poetry reading set: The Three Little Kittens

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G1_SET_POEM_KITTENS: ReadingSet = makeSet({
  id: 'g1-poem-kittens',
  grade: 1,
  kind: 'reading',
  title: 'The Three Little Kittens',
  intro: 'Read the poem and choose the best answer to each question.',
  passages: [
    {
      id: 'g1-pass-kittens',
      title: 'The Three Little Kittens',
      author: 'Eliza Lee Follen',
      source: 'Traditional rhyme; this version credited to Follen in New Nursery Songs for All Good Children (1843)',
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
        { kind: 'line', text: '"Oh, let us have some pie."', stanzaEnd: true },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:1.9A', cites: [1, 2],
      stem: 'This selection is a nursery rhyme because it—',
      choices: [
        'has rhyming words and lines that repeat',
        ['explains how to knit warm winter mittens', 'The poem is a playful story about kittens, not instructions for knitting.'],
        ['gives science facts about kitten families', 'The selection is a traditional rhyme, not a science article.'],
        ['lists ingredients for baking a sweet pie', 'Pie is a treat in the rhyme, not a recipe to follow.'],
      ],
      answer: 0,
      explain: 'Nursery rhymes feature rhythmic, rhyming verses and memorable animal characters.',
    }),
    mcq({
      standard: 'rla:1.9B', cites: [2, 6],
      stem: 'Which two words in the poem rhyme?',
      choices: [
        ['kittens and pie', 'Kittens and pie do not have the same ending sound.'],
        'cry and pie',
        ['lost and dear', 'Lost and dear do not rhyme.'],
        ['three and mittens', 'Three and mittens do not rhyme.'],
      ],
      answer: 1,
      explain: 'Cry and pie share the same ending long i sound, so they rhyme.',
    }),
    mcq({
      standard: 'rla:1.8C', cites: [9, 12],
      stem: 'What problem do the kittens solve in lines 9 through 12?',
      choices: [
        ['They bake a pie to eat with milk', 'Their mother offers pie after they find their mittens.'],
        ['They learn how to stay quiet indoors', 'The kittens meow and purr; staying quiet is not the problem.'],
        'They search for and find their missing mittens',
        ['They clean their dirty paws outside', 'Missing mittens was the problem they solved.'],
      ],
      answer: 2,
      explain: 'In line 12, the kittens announce that they found their missing mittens.',
    }),
    mcq({
      standard: 'rla:1.10D', cites: [15],
      stem: 'In line 15, the sound word **"Purr-r"** helps the reader know that the kittens are—',
      choices: [
        ['cold from playing outside in snow', 'Purring is a sound of happiness, not feeling cold.'],
        ['frightened by a sudden loud noise', 'Cats do not purr when they are scared.'],
        ['worried about their mother\'s rule', 'The kittens are excited to eat pie, not worried.'],
        'happy and pleased',
      ],
      answer: 3,
      explain: 'Cats purr when they are cozy, happy, and satisfied.',
    }),
    mcq({
      standard: 'rla:1.6E', cites: [1, 9],
      stem: 'A reader can connect this poem to a time when they—',
      choices: [
        ['helped care for baby animals on a small farm', 'The kittens are characters in a rhyme, not farm animals.'],
        ['baked sweet pies in the kitchen with family', 'The main event in the poem is losing and finding mittens.'],
        'lost something and looked until they found it',
        ['wore warm gloves to play in cold winter snow', 'The connection is about misplacing an item and finding it.'],
      ],
      answer: 2,
      explain: 'Children can easily connect to the feeling of misplacing an item and looking for it.',
    }),
    mcq({
      standard: 'rla:1.10A', cites: [1, 2],
      stem: 'Why did the poet write this poem?',
      choices: [
        ['To explain why pet kittens need mittens', 'Real kittens do not wear mittens; this is just for fun.'],
        'To tell a funny rhyming story for children',
        ['To teach readers how to bake sweet pies', 'The poem does not teach how to bake pies.'],
        ['To describe how cats catch mice outdoors', 'The poem is a playful story about kittens and mittens.'],
      ],
      answer: 1,
      explain: 'The author wrote this poem to entertain young readers with a musical, rhyming tale.',
    }),
  ],
});
