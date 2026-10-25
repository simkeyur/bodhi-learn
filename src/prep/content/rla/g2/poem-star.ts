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
        { kind: 'line', text: 'Like a diamond in the sky.', stanzaEnd: true },
        { kind: 'line', text: 'When the blazing sun is gone,' },
        { kind: 'line', text: 'When he nothing shines upon,' },
        { kind: 'line', text: 'Then you show your little light,' },
        { kind: 'line', text: 'Twinkle, twinkle, all the night.', stanzaEnd: true },
        { kind: 'line', text: 'Then the traveler in the dark' },
        { kind: 'line', text: 'Thanks you for your tiny spark;' },
        { kind: 'line', text: 'He could not see which way to go,' },
        { kind: 'line', text: 'If you did not twinkle so.', stanzaEnd: true },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:2.8B', cites: [1, 2],
      stem: 'Which two words at the ends of lines 1 and 2 create a rhyming pair?',
      choices: [
        'star and are',
        ['twinkle and wonder', 'These words do not rhyme.'],
        ['high and sky', 'High and sky are at the ends of lines 3 and 4, not 1 and 2.'],
        ['world and little', 'These words do not have matching ending sounds.'],
      ],
      answer: 0,
      explain: 'Star and are end with the same rhyming sound at the end of the first two lines.',
    }),
    mcq({
      standard: 'rla:2.9D', cites: [4],
      stem: 'In line 4, what does the poet compare the star to when writing "Like a diamond in the sky"?',
      choices: [
        ['A fluffy white daytime cloud.', 'Diamonds are sparkly, not fluffy.'],
        'A brilliant, sparkling gemstone.',
        ['A golden yellow butterfly.', 'The comparison is to a diamond.'],
        ['A round metal coin.', 'Diamonds sparkle brightly in light.'],
      ],
      answer: 1,
      explain: 'The poet uses a simile comparing the glittering star to a brilliant, sparkling diamond.',
    }),
    mcq({
      standard: 'rla:2.9F', cites: [1, 8, 12],
      stem: 'Why does the poet repeat the words "twinkle, twinkle" throughout the poem?',
      choices: [
        ['To explain how to build a space rocket.', 'Rockets are not in this 1806 nursery poem.'],
        ['To warn people to stay indoors at night.', 'No warning is given.'],
        'To create a soothing, musical rhythm and emphasize the flickering light.',
        ['To show that the poet forgot other descriptive words.', 'Poets intentionally use repetition for musical effect.'],
      ],
      answer: 2,
      explain: 'Repeating "twinkle, twinkle" creates a musical, rhythmic beat that mimics flickering starlight.',
    }),
    mcq({
      standard: 'rla:2.6F', cites: [9, 10, 11],
      stem: 'Why does the traveler in the dark thank the little star?',
      choices: [
        'The star\'s gentle light guides the traveler along the dark path.',
        ['The star provides warm heat to cook supper.', 'Stars do not heat food.'],
        ['The star tells the traveler funny jokes.', 'Stars do not talk.'],
        ['The star drops sparkling diamonds into the road.', 'Diamonds are only a figurative comparison.'],
      ],
      answer: 0,
      explain: 'Lines 10-12 state that the traveler could not see where to walk without the star\'s guiding spark.',
    }),
    mcq({
      standard: 'rla:2.6E', cites: [1, 2, 3],
      stem: 'How might a reader connect their own personal experience to the speaker in stanza 1?',
      choices: [
        ['By remembering a time they rode a horse through the desert.', 'Horse riding is not in stanza 1.'],
        'By recalling looking up at the night sky and wondering about distant stars.',
        ['By thinking about planting vegetable seeds in a garden.', 'Gardening is unrelated to gazing at stars.'],
        ['By remembering a noisy birthday party.', 'Stanza 1 is quiet wonder about stars.'],
      ],
      answer: 1,
      explain: 'Looking at stars and feeling curious wonder is a common personal experience shared with the speaker.',
    }),
    mcq({
      standard: 'rla:2.9A', cites: [1, 2, 3, 4],
      stem: 'What is the poet\'s main purpose in writing "The Star"?',
      choices: [
        ['To teach students how to calculate distances in space.', 'This is a gentle nursery poem, not astronomy math.'],
        ['To persuade readers to buy expensive telescope lenses.', 'The poem expresses artistic wonder, not an advertisement.'],
        'To express joyful wonder and appreciation for the beautiful night sky.',
        ['To explain why the sun sets in the west.', 'The poem celebrates starlight.'],
      ],
      answer: 2,
      explain: 'The poet conveys feelings of childlike wonder and appreciation for the beauty of starlight.',
    }),
  ],
});
