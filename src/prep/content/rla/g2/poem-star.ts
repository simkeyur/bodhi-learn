// Grade 2 poem reading set: The Star by Jane Taylor (1806)

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G2_SET_POEM_STAR: ReadingSet = makeSet({
  id: 'g2-poem-star',
  grade: 2,
  kind: 'reading',
  title: 'The Star',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [
    {
      id: 'g2-pass-star',
      title: 'The Star',
      genre: 'poetry',
      author: 'Jane Taylor',
      source: 'Rhymes for the Nursery, 1806',
      blocks: [
        { kind: 'line', text: 'Twinkle, twinkle, little star,' },
        { kind: 'line', text: 'How I wonder what you are!' },
        { kind: 'line', text: 'Up above the world so high,' },
        { kind: 'line', text: 'Like a diamond in the sky.' },
        { kind: 'line', text: 'When the blazing sun is gone,' },
        { kind: 'line', text: 'When he nothing shines upon,' },
        { kind: 'line', text: 'Then you show your little light,' },
        { kind: 'line', text: 'Twinkle, twinkle, all the night.' },
        { kind: 'line', text: 'Then the traveler in the dark' },
        { kind: 'line', text: 'Thanks you for your tiny spark;' },
        { kind: 'line', text: 'He could not see which way to go,' },
        { kind: 'line', text: 'If you did not twinkle so.' },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.9B', cites: [1, 2],
      stem: 'Which two words at the ends of lines 1 and 2 create a rhyming pair?',
      choices: [
        'star and are',
        ['twinkle and wonder', 'These words do not rhyme.'],
        ['high and little', 'High and little do not have matching ending sounds.'],
        ['world and sky', 'World and sky do not rhyme.'],
      ],
      answer: 0,
      explain: 'Star and are end with the same rhyming sound at the end of the first two lines.',
    }),
    mcq({
      standard: 'rla:2.10D', cites: [4],
      stem: 'In line 4, what does the poet compare the star to when writing "Like a diamond in the sky"?',
      choices: [
        'A sparkling, brilliant gemstone',
        ['A fluffy white cloud', 'Diamonds are sparkly, not soft or fluffy.'],
        ['A shiny silver coin', 'The poet compares the star\'s sparkle to a diamond.'],
        ['A bright yellow butterfly flying in the sun', 'The simile compares the glittering light to a diamond.'],
      ],
      answer: 0,
      explain: 'The poet uses a simile comparing the glittering star to a brilliant, sparkling diamond.',
    }),
    mcq({
      standard: 'rla:2.10F', cites: [1, 8, 12],
      stem: 'Why does the poet repeat the words "twinkle, twinkle" throughout the poem?',
      choices: [
        ['To explain how hot stars become in outer space', 'The poem is a gentle rhyme, not science facts about heat.'],
        'To create a musical rhythm that mimics flickering starlight',
        ['To warn travelers never to walk in the dark', 'The star helps the traveler, not warns against walking.'],
        ['To show that the poet ran out of other words', 'Poets repeat words on purpose for musical effect.'],
      ],
      answer: 1,
      explain: 'Repeating "twinkle, twinkle" creates a musical, rhythmic beat that mimics flickering starlight.',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [9, 10, 11],
      stem: 'Why does the traveler in the dark thank the little star?',
      choices: [
        'Its bright spark helps him see where to walk.',
        ['It gives off warmth to keep him comfortable at night.', 'Stars in the night sky do not provide heat.'],
        ['It tells him stories along the quiet road.', 'Stars do not talk or tell stories.'],
        ['It drops sparkling gems onto the ground.', 'Diamonds are only a comparison in stanza 1.'],
      ],
      answer: 0,
      explain: 'Lines 10-12 state that the traveler could not see where to walk without the star\'s guiding spark.',
    }),
    mcq({
      standard: 'rla:2.6E', cites: [1, 2, 3],
      stem: 'How might a reader connect their own personal experience to the speaker in stanza 1?',
      choices: [
        'By remembering looking at the night sky and wondering about bright stars',
        ['By thinking about planting seeds in a garden', 'Gardening is unrelated to stargazing.'],
        ['By remembering walking through a dark forest in winter', 'Stanza 1 expresses quiet curiosity about a star.'],
        ['By recalling a ride on a carousel with flashing lights', 'The poem describes gazing up at the sky at night.'],
      ],
      answer: 0,
      explain: 'Looking at stars and feeling curious wonder is a common personal experience shared with the speaker.',
    }),
    mcq({
      standard: 'rla:2.10A', cites: [1, 2, 3, 4],
      stem: 'What is the poet\'s main purpose in writing "The Star"?',
      choices: [
        'To express wonder and admiration for a star',
        ['To calculate the distance between planets', 'This is a lyrical nursery poem, not astronomy math.'],
        ['To persuade people to purchase telescopes', 'The poem expresses artistic wonder, not an advertisement.'],
        ['To describe how the sun warms the Earth during the day', 'The poem celebrates starlight shining at night.'],
      ],
      answer: 0,
      explain: 'The poet conveys feelings of childlike wonder and appreciation for the beauty of starlight.',
    }),
  ],
});
