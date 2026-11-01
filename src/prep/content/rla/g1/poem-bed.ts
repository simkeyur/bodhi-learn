// Grade 1 poetry reading set: Bed in Summer

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G1_SET_POEM_BED: ReadingSet = makeSet({
  id: 'g1-poem-bed',
  grade: 1,
  kind: 'reading',
  title: 'Bed in Summer',
  intro: 'Read the poem and choose the best answer to each question.',
  passages: [
    {
      id: 'g1-pass-bed',
      title: 'Bed in Summer',
      author: 'Robert Louis Stevenson',
      source: 'A Child\'s Garden of Verses (1885)',
      genre: 'poetry',
      blocks: [
        { kind: 'line', text: 'In winter I get up at night' },
        { kind: 'line', text: 'And dress by yellow candle-light.' },
        { kind: 'line', text: 'In summer, quite the other way,' },
        { kind: 'line', text: 'I have to go to bed by day.', stanzaEnd: true },
        { kind: 'line', text: 'I have to go to bed and see' },
        { kind: 'line', text: 'The birds still hopping on the tree,' },
        { kind: 'line', text: 'Or hear the grown-up people\'s feet' },
        { kind: 'line', text: 'Still going past me in the street.', stanzaEnd: true },
        { kind: 'line', text: 'And does it not seem hard to you,' },
        { kind: 'line', text: 'When all the sky is clear and blue,' },
        { kind: 'line', text: 'And I should like so much to play,' },
        { kind: 'line', text: 'To have to go to bed by day?', stanzaEnd: true },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:1.9B', cites: [1, 2],
      stem: 'Which words rhyme in lines 1 and 2?',
      choices: [
        'night and light',
        ['dress and candle', 'Dress and candle do not have the same ending sound.'],
        ['winter and night', 'Winter and night do not rhyme.'],
        ['yellow and dress', 'Yellow and dress do not rhyme.'],
      ],
      answer: 0,
      explain: 'Night and light rhyme because they have the same ending "-ight" sound.',
    }),
    mcq({
      standard: 'rla:1.10D', cites: [10],
      stem: 'In line 10, the phrase **"clear and blue"** helps the reader visualize—',
      choices: [
        ['a dark night', 'Clear and blue describes daylight, not a dark storm.'],
        'a bright, sunny daytime sky',
        ['a cold winter morning in snow', 'The poem contrasts winter nights with sunny summer days.'],
        ['a quiet street with no people', 'Clear and blue describes the sky above, not the street.'],
      ],
      answer: 1,
      explain: 'A clear and blue sky paints a picture of a bright sunny day.',
    }),
    mcq({
      standard: 'rla:1.10E', cites: [1, 4],
      stem: 'The speaker in the poem uses the word **"I"** because—',
      choices: [
        ['a parent is explaining why it is time to sleep', 'The speaker is the child who has to go to bed.'],
        'a child is sharing their own feelings about bedtime',
        ['a bird in the tree is singing to the people', 'Birds are mentioned in line 6, but a bird is not speaking.'],
        ['a person walking down the street is talking', 'The speaker is looking out from inside a bedroom.'],
      ],
      answer: 1,
      explain: 'The pronoun "I" shows that the poem is written from the child\'s first-person point of view.',
    }),
    mcq({
      standard: 'rla:1.6F', cites: [6, 11],
      stem: 'Why does the speaker think going to bed in summer is hard?',
      choices: [
        ['The bedroom is too dark to find the bed.', 'In summer it is still daylight when the child goes to bed.'],
        ['Winter storms rattle the window glass.', 'Winter is mentioned in stanza 1, but the problem is summer bedtime.'],
        'The sky is still bright and the child wants to play.',
        ['The birds outside make scary noises.', 'The birds are just hopping on branches while it is still light.'],
      ],
      answer: 2,
      explain: 'The child feels it is hard to sleep when the sky is blue and birds are still hopping outside.',
    }),
    mcq({
      standard: 'rla:1.9B', cites: [4, 12],
      stem: 'The line **"To have to go to bed by day"** is repeated in the poem to emphasize that the child—',
      choices: [
        'wants to stay awake and play',
        ['prefers winter bedtime over summer days', 'The child mentions winter, but the main feeling is wanting to play now.'],
        ['likes watching birds sleep in the trees', 'The birds are still awake hopping around in the branches.'],
        ['needs to get dressed by yellow candle-light', 'Candle-light was used on cold winter mornings.'],
      ],
      answer: 0,
      explain: 'Repeating the line highlights the child\'s complaint about bedtime during daylight.',
    }),
    mcq({
      standard: 'rla:1.10A', cites: [4, 12],
      stem: 'The poet wrote this poem to—',
      choices: [
        'show how a child feels about going to bed in daylight',
        ['teach children how to tell time on a clock', 'The poem does not teach about clocks or telling time.'],
        ['explain why birds hop around on tree branches in the yard', 'The poem is about bedtime, not bird behavior.'],
        ['describe what cold winter mornings feel like inside', 'The winter lines are used to contrast with summer bedtime.'],
      ],
      answer: 0,
      explain: 'The poem expresses the relatable feeling of a child having to go to sleep while it is still light.',
    }),
  ],
});
