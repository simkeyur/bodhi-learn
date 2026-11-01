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
        ['AABB, where lines 1 and 2 rhyme and lines 3 and 4 rhyme', 'Swing does not rhyme with blue.'],
        'ABAB, where lines 1 and 3 rhyme and lines 2 and 4 rhyme',
        ['ABCB, where only lines 2 and 4 rhyme at the ends of the lines', 'Line 1 and line 3 also rhyme.'],
        ['AABA, where line 3 does not rhyme with any other line in the stanza', 'Line 3 rhymes directly with line 1.'],
      ],
      answer: 1,
      explain: 'Lines 1 and 3 rhyme (swing / thing) and lines 2 and 4 rhyme (blue / do), creating an ABAB rhyme scheme.',
    }),
    mcq({
      standard: 'rla:3.10D', cites: [6, 7, 8],
      stem: 'How does the imagery in lines 6–8 appeal to the reader\'s sense of sight?',
      choices: [
        ['It shows the reader dark storm clouds gathering over an abandoned barn.', 'The poem presents a sunny, open landscape viewed from above.'],
        ['It helps the reader picture a crowded, noisy city street lined with tall brick buildings.', 'The speaker looks out over open pastures and rural scenery.'],
        'It paints a vivid picture of rolling countryside filled with rivers, trees, and cattle.',
        ['It creates a visual image of a bird building a nest high in the treetops.', 'The lines describe the wide view of the countryside, not nesting birds.'],
      ],
      answer: 2,
      explain: 'Mentioning rivers, trees, and cattle over the wide countryside creates a panoramic visual image of the landscape viewed from high above.',
    }),
    mcq({
      standard: 'rla:3.10E', cites: [3, 6, 11],
      stem: 'From which point of view is the poem written?',
      choices: [
        'First-person, told by a speaker who shares the personal joy of swinging high into the air.',
        ['Third-person, told by an outside narrator who observes children playing at a park.', 'The speaker uses first-person pronouns like "I" throughout.'],
        ['Second-person, written as an instructional guide explaining how to hang a rope swing.', 'The poem expresses delight in swinging rather than building directions.'],
        ['Third-person, describing how farm animals perceive children flying above their pasture.', 'The cattle are part of the scenery seen below, not the narrators of the poem.'],
      ],
      answer: 0,
      explain: 'The speaker uses first-person words ("I do think," "Till I can see," "I go flying") to describe their own delightful experience.',
    }),
    mcq({
      standard: 'rla:3.8A',
      stem: 'Which statement best expresses the theme of the poem?',
      choices: [
        ['Children should only play on playground swings when an adult is watching.', 'The poem focuses on the thrill of flight rather than safety rules.'],
        ['Looking at the world from high above makes familiar places seem frightening.', 'The speaker finds the elevated view pleasant and exciting.'],
        'Simple outdoor activities can bring deep feelings of happiness and wonder.',
        ['Country life is too quiet and lonely compared to living in a busy town.', 'The speaker takes great delight in the rural view of rivers and cattle.'],
      ],
      answer: 2,
      explain: 'The poem celebrates the timeless magic of swinging high into the air, calling it "the pleasantest thing / Ever a child can do."',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [9, 10, 11, 12],
      stem: 'What can the reader infer about the movement of the swing in the third stanza?',
      choices: [
        ['The swing has stopped moving and is hanging still above the garden lawn.', 'The speaker explicitly states "flying again," showing that the swing is in motion.'],
        ['The child is afraid of falling and wants the swing to stop moving immediately.', 'Exclamation marks and cheerful words reflect happiness rather than terror.'],
        ['The swing rope gets tangled around a tree branch as it reaches the roof.', 'The swing moves freely up and down without getting caught or tangled.'],
        'The swing swoops smoothly upward and downward in a continuous, flowing rhythm.',
      ],
      answer: 3,
      explain: 'Looking down at the roof and then going "flying again / Up in the air and down" captures the continuous rising and dipping motion of swinging.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [3, 4],
      stem: 'Which lines show how much the speaker enjoys swinging?',
      choices: [
        '"Oh, I do think it the pleasantest thing / Ever a child can do!"',
        ['"Till I look down on the garden green, / Down on the roof so brown—"', 'These lines describe looking down at roofs and gardens rather than stating personal enjoyment.'],
        ['"Rivers and trees and cattle and all / Over the countryside—"', 'These lines describe the rural scenery rather than expressing the child\'s feelings.'],
        ['"Up in the air and over the wall, / Till I can see so wide,"', 'These lines describe the height and broad view rather than stating that swinging is the best activity.'],
      ],
      answer: 0,
      explain: 'Declaring swinging "the pleasantest thing / Ever a child can do" directly states how much the speaker loves it.',
    }),
  ],
});
