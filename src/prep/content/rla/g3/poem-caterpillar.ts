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
        ['"brown" and "leaf", and "caterpillar" and "shady"', 'These words do not rhyme.'],
        '"furry" and "hurry", and "walk" and "stalk"',
        ['"take" and "hurry", and "walk" and "leaf"', 'These word pairs do not rhyme.'],
        ['"shady" and "stalk", and "brown" and "hurry"', 'These words end with completely different sounds.'],
      ],
      answer: 1,
      explain: 'Lines 1 and 2 end in "furry" and "hurry" (rhyming pair), and lines 3 and 4 end in "walk" and "stalk" (rhyming pair).',
    }),
    mcq({
      standard: 'rla:3.10D', cites: [1, 2],
      stem: 'How does the phrase "Brown and furry / Caterpillar in a hurry" appeal to the reader\'s senses?',
      choices: [
        ['It appeals to hearing by describing the loud buzzing noise made by garden insects.', 'The lines do not describe buzzing sounds or insect noises.'],
        'It appeals to sight and touch by describing the insect\'s color and fuzzy texture.',
        ['It appeals to smell by describing the scent of damp leaves in the morning sun.', 'The description mentions the caterpillar\'s fur and speed rather than plant scents.'],
        ['It appeals to taste by describing what the caterpillar likes to eat on the stem.', 'The poem does not describe the taste of food in these opening lines.'],
      ],
      answer: 1,
      explain: '"Brown" creates a visual picture of color, "furry" describes texture, and "in a hurry" suggests quick crawling movement.',
    }),
    mcq({
      standard: 'rla:3.8A', cites: [9, 10],
      stem: 'Which statement best expresses the theme of the poem?',
      choices: [
        ['Insects should avoid resting on green leaves because garden plants are dangerous.', 'Leaves and stalks provide safe resting spots for caterpillars, not hazards.'],
        ['Predators like birds of prey will always flee from smaller creatures in nature.', 'Birds hunt caterpillars; they are not afraid of them.'],
        'The natural world holds remarkable wonders as living creatures transform through their life cycles.',
        ['Caterpillars spend their entire lives hurrying along garden paths without resting.', 'The poem explains that the caterpillar stops to spin a chrysalis and transform.'],
      ],
      answer: 2,
      explain: 'Lines 9 and 10 highlight the wonder of natural metamorphosis: spinning a chrysalis to become a butterfly.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [7, 8],
      stem: 'What can the reader infer about the caterpillar from lines 7–8 ("No toad spy you, / Hovering bird of prey pass by you")?',
      choices: [
        'The small caterpillar is in constant danger of being spotted and eaten by predators.',
        ['The caterpillar uses sharp claws and sudden movements to defend itself against hungry toads.', 'The poem shows it relies on camouflage and luck to avoid being seen.'],
        ['Toads and birds are helpful companions that guide the insect to a shady stalk.', 'Toads and birds of prey are dangerous enemies, not friendly guides.'],
        ['The caterpillar can fly away quickly whenever a predator passes nearby.', 'The caterpillar cannot fly until it transforms into a butterfly in line 10.'],
      ],
      answer: 0,
      explain: 'Hoping that toads will not spot it and birds will pass by shows that the small caterpillar is vulnerable to predators.',
    }),
    mcq({
      standard: 'rla:3.6G', cites: [3, 4, 5, 6],
      stem: 'According to lines 3–6, what is the caterpillar searching for?',
      choices: [
        ['A warm patch of open soil where it can dig an underground burrow.', 'The caterpillar seeks an elevated plant leaf or stalk rather than digging into the dirt.'],
        'A safe, shady leaf or plant stalk where it can rest and spin.',
        ['A bright garden flower that provides sweet nectar for morning food.', 'The poem mentions walking to a leaf or stalk to spin, not hunting for flower nectar.'],
        ['A hollow tree branch where other caterpillars gather to build nests.', 'The poem describes an individual journey to a chosen leaf, not nesting in a hollow tree.'],
      ],
      answer: 1,
      explain: 'Lines 3–6 state that the caterpillar walks to a "shady leaf, or stalk... Which may be the chosen spot."',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [9, 10],
      stem: 'Which line shows that the caterpillar transforms into a winged creature?',
      choices: [
        ['"Brown and furry / Caterpillar in a hurry,"', 'Lines 1 and 2 describe the furry crawling stage before transformation.'],
        ['"To the shady leaf, or stalk,"', 'Line 4 describes the plant leaf where the caterpillar travels.'],
        ['"Hovering bird of prey pass by you;"', 'Line 8 describes a predatory bird rather than the caterpillar\'s own transformation.'],
        '"To live again a butterfly."',
      ],
      answer: 3,
      explain: 'The phrase "To live again a butterfly" directly states the transformation into a winged insect.',
    }),
  ],
});
