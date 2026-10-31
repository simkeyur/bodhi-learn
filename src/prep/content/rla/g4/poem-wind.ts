// Grade 4 poetry: Robert Louis Stevenson's classic poem "The Wind" from A Child's Garden of Verses (1885).
// Public domain. Questions cover figurative language (4.9B), sound devices and imagery (4.10D),
// inference (4.6F), theme (4.8A), voice (4.10F), and text evidence (4.7C).

import { makeSet, mcq, msq } from '../author.ts';

export const POEM_WIND = makeSet({
  id: 'g4-poem-wind',
  grade: 4,
  kind: 'reading',
  title: 'The Wind',
  intro: 'Read the poem and choose the best answer to each question.',
  passages: [{
    id: 'g4-poem-wind-p',
    title: 'The Wind',
    author: 'Robert Louis Stevenson',
    source: 'A Child\'s Garden of Verses (1885)',
    genre: 'poetry',
    blocks: [
      { kind: 'line', text: 'I saw you toss the kites on high' },
      { kind: 'line', text: 'And blow the birds about the sky;' },
      { kind: 'line', text: 'And all around I heard you pass,' },
      { kind: 'line', text: 'Like ladies\' skirts across the grass—' },
      { kind: 'line', text: 'O wind, a-blowing all day long,' },
      { kind: 'line', text: 'O wind, that sings so loud a song!', stanzaEnd: true },

      { kind: 'line', text: 'I saw the different things you did,' },
      { kind: 'line', text: 'But always you yourself you hid.' },
      { kind: 'line', text: 'I felt you push, I heard you call,' },
      { kind: 'line', text: 'I could not see yourself at all—' },
      { kind: 'line', text: 'O wind, a-blowing all day long,' },
      { kind: 'line', text: 'O wind, that sings so loud a song!', stanzaEnd: true },

      { kind: 'line', text: 'O you that are so strong and cold,' },
      { kind: 'line', text: 'O blower, are you young or old?' },
      { kind: 'line', text: 'Are you a beast of field and tree,' },
      { kind: 'line', text: 'Or just a stronger child than me?' },
      { kind: 'line', text: 'O wind, a-blowing all day long,' },
      { kind: 'line', text: 'O wind, that sings so loud a song!' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.9B', cites: [4],
      stem: 'In line 4, what does the poet\'s simile ("Like ladies\' skirts across the grass") help the reader imagine?',
      choices: [
        ['The sight of laundry blowing on a neighborhood clothesline.', 'The line describes sound and motion on the ground, not laundry.'],
        'The soft swish of wind passing through the lawn.',
        ['The loud pounding of heavy footsteps racing down a path.', 'Ladies\' skirts make a soft swishing sound, not heavy stomping.'],
        ['A cold rainstorm soaking clothes during an afternoon gale.', 'The simile focuses on the whispery rustle of moving fabric.'],
      ],
      answer: 1,
      explain: 'The comparison to skirts sweeping across grass conveys the soft rustle of wind passing over the lawn.',
    }),
    mcq({
      standard: 'rla:4.10D', cites: [5, 6, 11, 12, 17, 18],
      stem: 'Why does the poet repeat the couplet "O wind, a-blowing all day long, / O wind, that sings so loud a song!" at the end of each stanza?',
      choices: [
        ['To show that the speaker is bored and wants to go indoors.', 'The speaker is filled with wonder, not boredom.'],
        ['To explain where kites and songbirds go in the spring.', 'Kites are mentioned only in line 1.'],
        'To emphasize the wind\'s constant, singing presence.',
        ['To show that the wind only blows during stormy nights.', 'Line 5 says "a-blowing all day long."'],
      ],
      answer: 2,
      explain: 'Repeating the lines creates a steady song-like rhythm and emphasizes that the wind never stops blowing.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [8, 10],
      stem: 'What can the reader infer about the speaker\'s feelings in stanza 2?',
      choices: [
        ['The speaker is terrified that gusts of wind will break windows.', 'The tone is curious and admiring, not fearful.'],
        ['The speaker believes that the wind is hiding inside the house.', 'Lines 8 and 10 state the wind cannot be seen at all.'] ,
        ['The speaker hopes to build a toy kite that can touch the clouds.', 'Kites were mentioned earlier, but stanza 2 focuses on invisibility.'],
        'The speaker wonders why an invisible force has such power.',
      ],
      answer: 3,
      explain: 'Stanza 2 contrasts feeling the strong push of the wind with the mystery of never being able to see it.',
    }),
    msq({
      standard: 'rla:4.8A',
      stem: 'Which **two** themes are explored in the poem?',
      choices: [
        'The forces of nature can inspire wonder in a child.',
        'Things that cannot be seen can still have great power.',
        ['Children should stay indoors whenever the weather turns windy.', 'The poem celebrates experiencing nature outdoors.'],
        ['Flying kites is dangerous when gusts become too strong.', 'Kites are described playfully in line 1.'],
        ['Wild beasts in fields are more dangerous than mountain spirits.', 'Lines 15–16 are poetic wonders, not real warnings about beasts.'],
      ],
      answers: [0, 1],
      explain: 'The speaker observes nature with wonder and reflects on how an invisible force can produce mighty effects.',
    }),
    mcq({
      standard: 'rla:4.10F', cites: [14, 15, 16],
      stem: 'How do the questions in lines 14 through 16 contribute to the speaker\'s voice?',
      choices: [
        ['They show that the speaker is tired and wants to fall asleep.', 'The speaker is actively observing and wondering.'],
        'They show the speaker\'s childlike curiosity about the wind.',
        ['They suggest the speaker doubts that the wind actually exists.', 'The speaker knows the wind is real and feels it push.'],
        ['They make the speaker sound like an adult doing an experiment.', 'The speaker\'s tone is playful and curious.'],
      ],
      answer: 1,
      explain: 'Asking whether the wind is young, old, an animal, or a stronger child shows a curious, imaginative voice.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [9],
      stem: 'Which line from the poem describes the physical feeling of being touched by the wind?',
      choices: [
        'Line 9, feeling the push of the wind',
        ['Line 1, watching kites fly high above the ground', 'This describes seeing kites, not physical touch.'],
        ['Line 2, seeing birds tossed across the blue sky', 'This describes seeing birds tossed by the breeze.'],
        ['Line 14, asking whether the blower is young or old', 'This is a question about age, not a touch sensation.'],
      ],
      answer: 0,
      explain: 'In line 9, the speaker says "I felt you push," which describes a physical touch sensation.',
    }),
  ],
});
