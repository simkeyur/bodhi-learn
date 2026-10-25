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
      stem: 'Which pairs of words from lines 1–4 are rhyming words?',
      choices: [
        ['"Brown" and "leaf"', 'These words do not rhyme.'],
        '"furry" and "hurry", and "walk" and "stalk"',
        ['"caterpillar" and "shady"', 'These words have different ending sounds.'],
        ['"take" and "not"', 'These words do not share the same ending vowel or consonant sounds.'],
      ],
      answer: 1,
      explain: 'Lines 1 and 2 end in "furry" and "hurry" (rhyming pair), and lines 3 and 4 end in "walk" and "stalk" (rhyming pair).',
    }),
    mcq({
      standard: 'rla:3.10D', cites: [1, 2],
      stem: 'How does the description "Brown and furry / Caterpillar in a hurry" appeal to the reader\'s senses?',
      choices: [
        ['It describes the loud roar of a ferocious beast.', 'The caterpillar is small and gentle.'],
        'It appeals to sight and touch by describing the caterpillar\'s color, texture, and quick scurrying motion.',
        ['It appeals to taste by describing a delicious meal.', 'The lines describe an insect, not food.'],
        ['It appeals to hearing by describing thunderstorm sounds.', 'No weather sounds are described.'],
      ],
      answer: 1,
      explain: '"Brown" creates a visual image of color, "furry" suggests the tactile feel of tiny hairs, and "in a hurry" paints a picture of swift, urgent movement.',
    }),
    mcq({
      standard: 'rla:3.8A', cites: [9, 10],
      stem: 'Which statement best expresses the theme of the poem?',
      choices: [
        ['Insects should stay away from all green plants.', 'Caterpillars seek out leaves and stalks to feed and pupate.'],
        'Life cycles in nature involve dramatic and miraculous transformations.',
        ['Birds of prey are afraid of garden caterpillars.', 'Birds of prey hunt caterpillars.'],
        ['Toads are the most dangerous animals in the world.', 'Toads are simply natural predators of small insects.'],
      ],
      answer: 1,
      explain: 'Lines 9 and 10 conclude by revealing the wonder of metamorphosis: spinning a chrysalis to "live again a butterfly."',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [7, 8],
      stem: 'What can the reader infer about the caterpillar\'s life based on lines 7–8 ("No toad spy you, / Hovering bird of prey pass by you")?',
      choices: [
        'The small caterpillar faces constant danger from hungry predators in its garden habitat.',
        ['The caterpillar has magical powers to defeat giant animals.', 'The speaker hopes predators pass by without noticing it.'],
        ['Toads and birds protect caterpillars from getting wet in the rain.', 'Toads and birds are predators seeking to eat caterpillars.'],
        ['The caterpillar lives indoors where no animals can find it.', 'The caterpillar walks on leaves and stalks in nature.'],
      ],
      answer: 0,
      explain: 'Hoping that toads will not spot it and birds will pass by highlights the vulnerability of the small insect surrounded by natural predators.',
    }),
    mcq({
      standard: 'rla:3.6G', cites: [3, 4, 5, 6],
      stem: 'According to lines 3–6, what is the caterpillar searching for?',
      choices: [
        ['A pool of deep water for swimming.', 'Caterpillars do not swim.'],
        ['A flower pot filled with sweet honey.', 'Honey is not sought by caterpillars.'],
        'A safe, shady leaf, stalk, or suitable spot to rest and spin.',
        ['An underground tunnel to escape the winter frost.', 'The caterpillar searches for a leaf or stalk.'],
      ],
      answer: 2,
      explain: 'Lines 3–6 instruct the caterpillar to take its walk to a "shady leaf, or stalk... Which may be the chosen spot."',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [9, 10],
      stem: 'Which lines from the poem provide evidence of the caterpillar\'s transformation into a winged insect?',
      choices: [
        '"Spin and die, / To live again a butterfly."',
        ['"Brown and furry / Caterpillar in a hurry..."', 'This describes the initial crawling insect.'],
        ['"Take your walk / To the shady leaf, or stalk..."', 'This describes looking for a spot.'],
        ['"No toad spy you..."', 'This describes avoiding predators.'],
      ],
      answer: 0,
      explain: 'Lines 9–10 explicitly describe spinning a cocoon/chrysalis to "live again a butterfly," providing direct evidence of metamorphosis.',
    }),
  ],
});
