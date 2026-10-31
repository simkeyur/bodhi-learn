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
      stem: 'What is the rhyme scheme of the first stanza (lines 1–4)?',
      choices: [
        ['AABB, with lines 1 and 2 rhyming and lines 3 and 4 rhyming', 'Swing does not rhyme with blue.'],
        'ABAB, where lines 1 and 3 rhyme and 2 and 4 rhyme',
        ['ABCB, with only lines 2 and 4 rhyming at the line ends', 'Line 1 and line 3 also rhyme.'],
        ['Free verse, with no regular pattern of end rhymes at all', 'The poem follows a clear alternating rhyme pattern.'],
      ],
      answer: 1,
      explain: 'Lines 1 and 3 rhyme (swing / thing) and lines 2 and 4 rhyme (blue / do), creating an ABAB rhyme scheme.',
    }),
    mcq({
      standard: 'rla:3.10D', cites: [6, 7, 8],
      stem: 'How does the imagery in lines 6–8 appeal to the reader\'s senses?',
      choices: [
        ['It creates a gloomy feeling of getting lost in a dark maze.', 'The imagery is bright, open, and cheerful.'],
        ['It makes the reader imagine smelling smoke from a chimney.', 'No smoke or factories are mentioned.'],
        ['It describes the unpleasant taste of sour mountain berries.', 'The lines appeal to the sense of sight, not taste.'],
        'It paints a picture of wide green countryside.',
      ],
      answer: 3,
      explain: 'Mentioning rivers, trees, and cattle over the wide countryside creates a panoramic visual image of the landscape viewed from high above.',
    }),
    mcq({
      standard: 'rla:3.10E', cites: [3, 6, 11],
      stem: 'From which point of view is the poem written?',
      choices: [
        'First-person, told by a child enjoying the swing.',
        ['Third-person, told by an outside narrator watching children.', 'The speaker uses first-person pronouns like "I."'],
        ['Second-person, giving instructions for building playground swings.', 'The poem expresses personal delight rather than instructions.'],
        ['Third-person, sharing the thoughts of cattle in the meadow.', 'Cattle thoughts are not described.'],
      ],
      answer: 0,
      explain: 'The speaker uses first-person words ("I do think," "Till I can see," "I go flying") to describe their own delightful experience.',
    }),
    mcq({
      standard: 'rla:3.8A',
      stem: 'Which statement best expresses the theme of the poem?',
      choices: [
        ['Children should stay indoors whenever gray clouds appear.', 'The poem celebrates playing outdoors in the open air.'],
        ['Riding in airplanes is much more fun than playing outside.', 'Airplanes are not mentioned in the poem.'],
        'Simple outdoor play brings joy and freedom.',
        ['Gardening requires hard physical work every afternoon.', 'The garden is viewed as a pleasant green sight from above.'],
      ],
      answer: 2,
      explain: 'The poem celebrates the timeless magic of swinging high into the air, calling it "the pleasantest thing / Ever a child can do."',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [9, 10, 11, 12],
      stem: 'What can the reader infer about the swing in the third stanza?',
      choices: [
        ['The swing is broken and resting still on the garden grass.', 'The speaker says "Up in the air I go flying again."'],
        ['The child is afraid of heights and calls out for help.', 'The child loves the sensation of flying.'],
        ['The wooden swing moves only sideways from left to right.', 'The text describes moving up and down.'],
        'The swing swoops up and down in steady motion.',
      ],
      answer: 3,
      explain: 'Looking down at the roof and then going "flying again / Up in the air and down" captures the continuous rising and dipping motion of swinging.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [3, 4],
      stem: 'Which lines show how much the speaker enjoys swinging?',
      choices: [
        '"Oh, I do think it the pleasantest thing / Ever a child can do!"',
        ['"Till I look down on the garden green, / Down on the roof so brown—"', 'This describes looking down at the ground from the swing.'],
        ['"Rivers and trees and cattle and all / Over the countryside—"', 'This describes the wide view of the countryside.'],
        ['"Up in the air and over the wall, / Till I can see so wide,"', 'This describes swinging high over a wall.'],
      ],
      answer: 0,
      explain: 'Declaring swinging "the pleasantest thing / Ever a child can do" directly states how much the speaker loves it.',
    }),
  ],
});
