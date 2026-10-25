// Grade 3 poetry: "The Swing" by Robert Louis Stevenson (from A Child's Garden of Verses, 1885).
// Public domain (published before 1930).
// Length: 12 lines (range 8-48 lines).
// Questions cover poetry elements: rhyme scheme, rhythm, stanzas (3.9B),
// imagery & figurative language (3.10D), point of view (3.10E), theme (3.8A),
// inference (3.6F), and text evidence (3.7C).

import { makeSet, mcq } from '../author.ts';

export const POEM_SWING = makeSet({
  id: 'g3-poem-swing',
  grade: 3,
  kind: 'reading',
  title: 'The Swing',
  intro: 'Read the poem and choose the best answer to each question.',
  passages: [{
    id: 'g3-poem-swing-p',
    title: 'The Swing',
    author: 'Robert Louis Stevenson (1885)',
    source: 'A Child\'s Garden of Verses',
    genre: 'poetry',
    blocks: [
      { kind: 'line', text: 'How do you like to go up in a swing,' },
      { kind: 'line', text: 'Up in the air so blue?' },
      { kind: 'line', text: 'Oh, I do think it the pleasantest thing' },
      { kind: 'line', text: 'Ever a child can do!', stanzaEnd: true },
      { kind: 'line', text: 'Up in the air and over the wall,' },
      { kind: 'line', text: 'Till I can see so wide,' },
      { kind: 'line', text: 'Rivers and trees and cattle and all' },
      { kind: 'line', text: 'Over the countryside—', stanzaEnd: true },
      { kind: 'line', text: 'Till I look down on the garden green,' },
      { kind: 'line', text: 'Down on the roof so brown—' },
      { kind: 'line', text: 'Up in the air I go flying again,' },
      { kind: 'line', text: 'Up in the air and down!' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9B', cites: [1, 2, 3, 4],
      stem: 'What is the rhyme scheme of the first stanza of the poem (lines 1–4)?',
      choices: [
        ['AABB, where line 1 rhymes with line 2 and line 3 rhymes with line 4', 'Swing does not rhyme with blue.'],
        'ABAB, where line 1 ("swing") rhymes with line 3 ("thing"), and line 2 ("blue") rhymes with line 4 ("do")',
        ['ABCB, where only the second and fourth lines rhyme', 'Line 1 and line 3 also rhyme.'],
        ['Free verse, with no regular rhyming pattern at the ends of lines', 'The poem follows a consistent alternating rhyme pattern.'],
      ],
      answer: 1,
      explain: 'Lines 1 and 3 rhyme (swing / thing) and lines 2 and 4 rhyme (blue / do), creating an ABAB rhyme scheme.',
    }),
    mcq({
      standard: 'rla:3.10D', cites: [6, 7, 8],
      stem: 'How does the imagery in lines 6–8 ("Till I can see so wide, / Rivers and trees and cattle and all / Over the countryside") appeal to the reader\'s senses?',
      choices: [
        ['It creates an eerie feeling of being lost in a dark maze.', 'The imagery is bright, open, and cheerful.'],
        'It paints a vivid visual picture of the broad, scenic countryside visible from high in the air.',
        ['It makes the reader imagine the smell of smoke from a factory chimney.', 'No smoke or factories are described.'],
        ['It describes the unpleasant taste of sour fruit.', 'The lines appeal to the sense of sight, not taste.'],
      ],
      answer: 1,
      explain: 'Mentioning rivers, trees, and cattle over the wide countryside creates a panoramic, vivid visual image of looking across open landscapes from above.',
    }),
    mcq({
      standard: 'rla:3.10E', cites: [3, 6, 11],
      stem: 'From which point of view is the poem written?',
      choices: [
        ['Third-person point of view told by an outside narrator who watches children play.', 'The speaker uses first-person pronouns like "I."'],
        'First-person point of view told by a child speaker sharing their personal joy while swinging.',
        ['Second-person point of view giving technical instructions on building swings.', 'The poem expresses personal delight rather than technical instructions.'],
        ['Third-person omniscient point of view describing the thoughts of grazing cattle.', 'Cattle thoughts are not described.'],
      ],
      answer: 1,
      explain: 'The speaker uses first-person pronouns ("I do think," "Till I can see," "I go flying") to describe their own delightful experience.',
    }),
    mcq({
      standard: 'rla:3.8A',
      stem: 'Which statement best expresses the central theme of the poem?',
      choices: [
        ['Children should stay indoors whenever clouds appear in the sky.', 'The poem celebrates playing outdoors in the open air.'],
        ['Riding in airplanes is much safer than swinging on playgrounds.', 'Airplanes are not mentioned in the poem.'],
        'Simple childhood play outdoors can bring boundless joy, wonder, and a sense of freedom.',
        ['Gardens require hard physical labor every afternoon.', 'The garden is viewed as a pleasant green sight from above.'],
      ],
      answer: 2,
      explain: 'The poem celebrates the simple, timeless magic of swinging high into the air, calling it "the pleasantest thing / Ever a child can do."',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [9, 10, 11, 12],
      stem: 'What can the reader infer about the motion of the swing from the third stanza?',
      choices: [
        'The swing rhythmically rises high and swoops back down in a continuous, thrilling motion.',
        ['The swing is broken and stationary on the grass.', 'The speaker says "Up in the air I go flying again."'],
        ['The child is afraid of heights and cries for help.', 'The child loves the sensation and feels like they are flying.'],
        ['The swing moves only sideways from left to right.', 'The text describes moving up and down.'],
      ],
      answer: 0,
      explain: 'Describing looking down at the roof and then going "flying again / Up in the air and down" captures the continuous back-and-forth, up-and-down rhythm of swinging.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [3, 4],
      stem: 'Which lines from the poem provide evidence of how much the speaker loves swinging?',
      choices: [
        '"Oh, I do think it the pleasantest thing / Ever a child can do!"',
        ['"Till I look down on the garden green..."', 'This describes looking down at the ground.'],
        ['"Rivers and trees and cattle and all..."', 'This describes the landscape.'],
        ['"Down on the roof so brown—"', 'This describes the color of a roof.'],
      ],
      answer: 0,
      explain: 'Declaring swinging "the pleasantest thing / Ever a child can do" is direct proof of the speaker\'s immense enjoyment.',
    }),
  ],
});
