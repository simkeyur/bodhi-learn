// Grade 5 poetry: Christina Rossetti's "Who Has Seen the Wind?" (Sing-Song, 1872), public domain.
// Questions cover structure and sound, personification, inference, words in context, speaker and theme.

import { makeSet, mcq, msq, twoq } from '../author.ts';

const L = (text: string, stanzaEnd = false) => ({ kind: 'line' as const, text, stanzaEnd });

export const POEM_WIND = makeSet({
  id: 'g5-poem-wind',
  grade: 5,
  kind: 'reading',
  title: 'Who Has Seen the Wind?',
  intro: 'Read the poem and choose the best answer to each question.',
  passages: [{
    id: 'g5-poem-wind-p',
    title: 'Who Has Seen the Wind?',
    genre: 'poetry',
    author: 'Christina Rossetti',
    source: 'Sing-Song: A Nursery Rhyme Book, 1872',
    blocks: [
      L('Who has seen the wind?'),
      L('Neither I nor you:'),
      L('But when the leaves hang trembling,'),
      L('The wind is passing through.', true),
      L('Who has seen the wind?'),
      L('Neither you nor I:'),
      L('But when the trees bow down their heads,'),
      L('The wind is passing by.'),
    ],
  }],
  items: [
    mcq({
      standard: 'rla:5.9B',
      stem: 'How are the two stanzas of the poem alike?',
      choices: [
        'Each one asks the same question, answers it, and then describes what the wind does.',
        ['Each one describes a different season.', 'The poem doesn\'t mention seasons.'],
        ['Each one is told by a different speaker.', 'The same speaker says both stanzas.'],
        ['Each one has lines that do not rhyme at all.', 'Lines 2 and 4, and lines 6 and 8, rhyme.'],
      ],
      answer: 0,
      explain: 'Both stanzas begin with "Who has seen the wind?", answer "Neither I nor you," and then show what the wind does. Repeating a pattern like this gives the poem a song-like rhythm.',
    }),
    mcq({
      standard: 'rla:5.10D', cites: [7],
      stem: 'In line 7, the poet writes that the trees "bow down their heads." What does this personification help the reader picture?',
      choices: [
        ['Trees that are growing taller', 'Bowing down is the opposite of growing taller.'],
        'Treetops bending low in a strong wind',
        ['People bowing to each other politely', 'The line is about trees, not people.'],
        ['Trees losing all of their leaves', 'The line describes bending, not losing leaves.'],
      ],
      answer: 1,
      explain: 'Personification gives human actions to things that aren\'t human. Trees don\'t have heads, but picturing them "bowing" helps you see the tops bending in a strong wind.',
    }),
    twoq({
      standard: 'rla:5.6F', cites: [3, 4],
      a: {
        prompt: 'Part A: What idea about the wind does the poem suggest?',
        choices: [
          ['The wind is something only a few people can see.', 'The poem says "Neither I nor you" have seen it.'],
          'You can know the wind is there by what it does to things around it.',
          ['The wind is dangerous and should be avoided.', 'The poem describes the wind gently.'],
          ['The wind only blows at night.', 'The poem doesn\'t mention time of day.'],
        ],
        answer: 1,
      },
      b: {
        prompt: 'Part B: Which lines best support the answer to Part A?',
        choices: [
          ['"Who has seen the wind? / Neither I nor you:" (lines 1–2)', 'These lines say no one sees the wind, but not how we know it\'s there.'],
          '"But when the leaves hang trembling, / The wind is passing through." (lines 3–4)',
          ['"Who has seen the wind?" (line 5)', 'This repeats the question.'],
          ['"Neither you nor I:" (line 6)', 'This repeats the answer.'],
        ],
        answer: 1,
      },
      explain: 'No one can see the wind (lines 1–2), but when leaves tremble we know "the wind is passing through" (lines 3–4). We know the wind by its effects.',
    }),
    mcq({
      standard: 'rla:5.3B', cites: [3],
      stem: 'In line 3, the leaves "hang trembling." What does **trembling** mean?',
      choices: [
        ['falling to the ground', 'The leaves are still hanging.'],
        ['changing color', 'Nothing in the poem is about color.'],
        'shaking slightly',
        ['growing quickly', 'The wind makes them move, not grow.'],
      ],
      answer: 2,
      explain: 'The wind is "passing through" the leaves, so they move a little while still hanging on the branch. Trembling means shaking slightly.',
    }),
    mcq({
      standard: 'rla:5.9B',
      stem: 'The speaker says "Neither I nor you" and "Neither you nor I." Whom is the speaker talking to?',
      choices: [
        ['The wind', 'The speaker asks about the wind but talks to a person.'],
        'The reader, or a listener like a child',
        ['The trees', 'The trees are described, not spoken to.'],
        ['The poet\'s teacher', 'No teacher is mentioned.'],
      ],
      answer: 1,
      explain: 'The speaker includes "you" alongside "I," as if talking with a listener. Since the poem comes from a book of nursery rhymes, the listener is likely a child or the reader.',
    }),
    msq({
      standard: 'rla:5.8A',
      stem: 'Which **two** ideas could be themes of the poem?',
      choices: [
        'Some things are real even if we can\'t see them.',
        ['Trees are the most important plants.', 'Trees are an example, not the lesson.'],
        'Paying attention to small details helps us understand the world.',
        ['Windy days are the best days to play outside.', 'The poem doesn\'t talk about playing.'],
        ['Leaves fall off trees in the autumn.', 'The leaves are trembling, not falling.'],
      ],
      answers: [0, 2],
      explain: 'The wind is invisible, yet the poem shows it is real. We notice it by watching small details like trembling leaves and bending trees.',
    }),
  ],
});
