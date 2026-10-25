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
        ['dress and summer', 'Dress and summer do not rhyme.'],
        ['winter and way', 'Winter and way do not share ending sounds.'],
        ['yellow and bed', 'Yellow and bed do not rhyme.'],
      ],
      answer: 0,
      explain: 'Night and light rhyme because they have the same ending "-ight" sound.',
    }),
    mcq({
      standard: 'rla:1.10D', cites: [10],
      stem: 'In line 10, the phrase **"clear and blue"** helps the reader visualize—',
      choices: [
        ['a dark stormy night with thunder', 'The line describes bright blue daylight.'],
        'a bright sunny daytime sky',
        ['a cold snowy ground in winter', 'Clear and blue refers to summer sky.'],
        ['a deep green forest lake', 'Clear and blue describes the sky overhead.'],
      ],
      answer: 1,
      explain: 'A clear and blue sky paints a picture of a bright sunny day.',
    }),
    mcq({
      standard: 'rla:1.10E', cites: [1, 4],
      stem: 'The speaker in the poem uses the word **"I"** because—',
      choices: [
        ['a bird is talking to other birds', 'A child is the speaker.'],
        'the child is sharing personal thoughts and feelings',
        ['a teacher is giving a science lesson', 'The speaker is a child describing bedtime.'],
        ['the poem is about a stranger in town', 'The child is sharing their own experience.'],
      ],
      answer: 1,
      explain: 'The pronoun "I" shows that the poem is written from the child\'s first-person point of view.',
    }),
    mcq({
      standard: 'rla:1.6F', cites: [6, 11],
      stem: 'Why does the speaker think going to bed in summer is hard?',
      choices: [
        ['The bed is too cold in the summertime.', 'Summer is warm, not freezing.'],
        ['The house is very noisy with music.', 'The speaker hears footsteps and birds outside.'],
        'The sun is still shining and there is time to play.',
        ['The child does not have any warm pajamas.', 'Pajamas are not the problem.'],
      ],
      answer: 2,
      explain: 'The child feels it is hard to sleep when the sky is blue and birds are still hopping outside.',
    }),
    mcq({
      standard: 'rla:1.9B', cites: [4, 12],
      stem: 'The line **"To have to go to bed by day"** repeats in line 12 to emphasize that the child—',
      choices: [
        ['loves going to sleep early', 'The child dislikes going to bed early.'],
        ['wants winter to arrive sooner', 'The child just wants to keep playing.'],
        ['wants to buy a yellow candle', 'The candle was used in winter.'],
        'really wishes to stay outside and play',
      ],
      answer: 3,
      explain: 'Repeating the line highlights the child\'s complaint about bedtime during daylight.',
    }),
    mcq({
      standard: 'rla:1.10A', cites: [4, 12],
      stem: 'The poet wrote this poem to—',
      choices: [
        'share how children feel about bedtime in the summer',
        ['teach children how to tell time on a clock', 'The poem does not teach clock reading.'],
        ['explain why birds hop in the trees', 'The poem is about a child\'s bedtime experience.'],
        ['persuade readers to move to another town', 'The poem expresses a universal childhood feeling.'],
      ],
      answer: 0,
      explain: 'The poem expresses the relatable feeling of a child having to go to sleep while it is still light.',
    }),
  ],
});
