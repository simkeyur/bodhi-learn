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
      source: 'Little Songs for Little Boys and Girls (1827)',
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
      stem: 'This selection is a well-known nursery rhyme because—',
      choices: [
        'it has playful rhyming lines and repeating words',
        ['it teaches how to build a wooden barn', 'The poem is about kittens and mittens.'],
        ['it is an informational science report', 'The selection is a traditional rhyme.'],
        ['it gives directions for baking bread', 'It is a playful nursery poem.'],
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
        ['They learn how to bake a cherry pie.', 'Their mother gives them pie once mittens are found.'],
        ['They wash their faces with clean water.', 'The kittens solve the problem of missing mittens.'],
        'They find their missing mittens.',
        ['They run away into the woods.', 'The kittens stay home with their mother.'],
      ],
      answer: 2,
      explain: 'In line 12, the kittens announce that they found their missing mittens.',
    }),
    mcq({
      standard: 'rla:1.10D', cites: [15],
      stem: 'In line 15, the sound word **"Purr-r"** helps the reader know that the kittens are—',
      choices: [
        ['frightened of a thunderstorm', 'Purring is a sound of contentment, not fear.'],
        ['very cold in the winter snow', 'The kittens are happy about getting pie.'],
        ['angry at their mother', 'Purring indicates affection and happiness.'],
        'happy and pleased',
      ],
      answer: 3,
      explain: 'Cats purr when they are cozy, happy, and satisfied.',
    }),
    mcq({
      standard: 'rla:1.6E', cites: [1, 9],
      stem: 'A reader can connect this poem to a time when they—',
      choices: [
        'misplaced something and searched until they found it',
        ['built a tall wooden treehouse', 'The poem is about losing and finding mittens.'],
        ['swam in a deep ocean wave', 'The poem is set at home with kittens.'],
        ['planted carrot seeds in the dirt', 'The connection is about losing an item.'],
      ],
      answer: 0,
      explain: 'Children can easily connect to the feeling of misplacing an item and looking for it.',
    }),
    mcq({
      standard: 'rla:1.10A', cites: [1, 2],
      stem: 'Why did the poet write this poem?',
      choices: [
        ['To explain how wool mittens are made.', 'The poem is a playful story, not a craft guide.'],
        'To tell a cheerful rhyming story about kittens.',
        ['To warn people never to keep pets.', 'The poet wrote a fun rhyme for children.'],
        ['To teach readers how to count to ten.', 'The poem is a rhyming animal tale.'],
      ],
      answer: 1,
      explain: 'The author wrote this poem to entertain young readers with a musical, rhyming tale.',
    }),
  ],
});
