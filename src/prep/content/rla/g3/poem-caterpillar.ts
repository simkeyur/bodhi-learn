// Grade 3 poetry: "The Caterpillar" by Christina Rossetti (from Sing-Song: A Nursery Rhyme Book, 1872).
// Public domain (published before 1930).
// Length: 10 lines (range 8-48 lines).
// Questions cover poetry elements: rhyme, rhythm, stanzas (3.9B),
// imagery & figurative language (3.10D), theme (3.8A), inference (3.6F),
// key details (3.6G), and text evidence (3.7C).

import { makeSet, mcq } from '../author.ts';

export const POEM_CATERPILLAR = makeSet({
  id: 'g3-poem-caterpillar',
  grade: 3,
  kind: 'reading',
  title: 'The Caterpillar',
  intro: 'Read the poem and choose the best answer to each question.',
  passages: [{
    id: 'g3-poem-caterpillar-p',
    title: 'The Caterpillar',
    author: 'Christina Rossetti (1872)',
    source: 'Sing-Song: A Nursery Rhyme Book',
    genre: 'poetry',
    blocks: [
      { kind: 'line', text: 'Brown and furry' },
      { kind: 'line', text: 'Caterpillar in a hurry,' },
      { kind: 'line', text: 'Take your walk' },
      { kind: 'line', text: 'To the shady leaf, or stalk,' },
      { kind: 'line', text: 'Or what not,' },
      { kind: 'line', text: 'Which may be the chosen spot.' },
      { kind: 'line', text: 'No toad spy you,' },
      { kind: 'line', text: 'Hovering bird of prey pass by you;' },
      { kind: 'line', text: 'Spin and die,' },
      { kind: 'line', text: 'To live again a butterfly.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9B', cites: [1, 2, 3, 4],
      stem: 'Which pairs of words from lines 1–4 rhyme?',
      choices: [
        ['"Brown" and "leaf", and "caterpillar" and "shady"', 'These words do not rhyme.'],
        '"furry" and "hurry", and "walk" and "stalk"',
        ['"take" and "not", and "caterpillar" and "hurry"', 'These words do not rhyme.'],
        ['"shady" and "leaf", and "hurry" and "stalk"', 'These words do not share ending sounds.'],
      ],
      answer: 1,
      explain: 'Lines 1 and 2 end in "furry" and "hurry" (rhyming pair), and lines 3 and 4 end in "walk" and "stalk" (rhyming pair).',
    }),
    mcq({
      standard: 'rla:3.10D', cites: [1, 2],
      stem: 'How does the phrase "Brown and furry / Caterpillar in a hurry" appeal to senses?',
      choices: [
        ['It describes the loud roar of a hungry wild beast in the forest.', 'The caterpillar is small and quiet.'],
        ['It appeals to hearing by describing the loud crash of thunder.', 'No weather sounds are mentioned.'],
        'It appeals to sight and touch with color and texture.',
        ['It appeals to taste by describing a delicious fruit dinner.', 'The line describes an insect, not food.'],
      ],
      answer: 2,
      explain: '"Brown" creates a visual picture of color, "furry" describes texture, and "in a hurry" suggests quick crawling movement.',
    }),
    mcq({
      standard: 'rla:3.8A', cites: [9, 10],
      stem: 'Which statement best expresses the theme of the poem?',
      choices: [
        'Nature includes amazing changes in life cycles.',
        ['Insects should avoid living on green leaves and tall garden stalks.', 'Caterpillars naturally seek out leaves.'],
        ['Birds of prey are afraid of tiny furry creatures in the garden.', 'Birds of prey hunt caterpillars.'],
        ['Garden toads are the most dangerous animals on the entire earth.', 'Toads are simply normal predators of insects.'],
      ],
      answer: 0,
      explain: 'Lines 9 and 10 highlight the wonder of natural metamorphosis: spinning a chrysalis to become a butterfly.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [7, 8],
      stem: 'What can the reader infer about the caterpillar from lines 7–8?',
      choices: [
        ['The caterpillar has magical powers to frighten larger creatures.', 'The speaker hopes predators pass by without seeing it.'],
        ['Toads and birds protect small garden insects from cold rainstorms.', 'Toads and birds hunt caterpillars.'],
        ['The caterpillar lives inside houses where animals cannot find it.', 'The caterpillar walks on leaves outdoors.'],
        'The small caterpillar faces danger from predators.',
      ],
      answer: 3,
      explain: 'Hoping that toads will not spot it and birds will pass by shows that the small caterpillar is vulnerable to predators.',
    }),
    mcq({
      standard: 'rla:3.6G', cites: [3, 4, 5, 6],
      stem: 'According to lines 3–6, what is the caterpillar looking for?',
      choices: [
        ['A deep puddle of rainwater for afternoon swimming.', 'Caterpillars do not swim.'],
        ['A small garden flowerpot filled with sweet honey.', 'Honey is not mentioned.'],
        'A shady leaf or stalk to rest and spin.',
        ['An underground tunnel to hide from cold frost.', 'The caterpillar searches for a plant leaf or stalk.'],
      ],
      answer: 2,
      explain: 'Lines 3–6 state that the caterpillar walks to a "shady leaf, or stalk... Which may be the chosen spot."',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [9, 10],
      stem: 'Which lines show that the caterpillar becomes a butterfly?',
      choices: [
        ['"Take your walk / To the shady leaf, or stalk, / Or what not,"', 'This describes walking to a plant.'],
        ['"No toad spy you, / Hovering bird of prey pass by you;"', 'This describes avoiding predators.'],
        ['"Brown and furry / Caterpillar in a hurry,"', 'This describes the insect at the start.'],
        '"To live again a butterfly."',
      ],
      answer: 3,
      explain: 'The phrase "To live again a butterfly" directly states the transformation into a winged insect.',
    }),
  ],
});
