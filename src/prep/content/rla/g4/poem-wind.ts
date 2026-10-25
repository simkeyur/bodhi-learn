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
        ['The sight of colorful dresses hanging on a clothesline.', 'The line describes sound and motion on the ground, not laundry.'],
        'The gentle, rustling swish made by the wind as it brushes through grass.',
        ['The stomping noise of heavy boots running across a lawn.', 'Ladies\' skirts make a soft swishing sound, not heavy stomping.'],
        ['A windy rainstorm soaking people\'s clothes.', 'The simile focuses on the whispery rustle of moving fabric.'],
      ],
      answer: 1,
      explain: 'The comparison to skirts sweeping across grass conveys the soft, rustling whisper of the wind passing through the lawn.',
    }),
    mcq({
      standard: 'rla:4.10D', cites: [5, 6, 11, 12, 17, 18],
      stem: 'Why does the poet repeat the couplet "O wind, a-blowing all day long, / O wind, that sings so loud a song!" at the end of each stanza?',
      choices: [
        ['To show that the speaker is tired of listening to the breeze.', 'The speaker is filled with wonder, not boredom.'],
        ['To explain where kites come from in the spring.', 'Kites are mentioned only in line 1.'],
        'To create a musical refrain that reinforces the wind\'s constant, powerful presence.',
        ['To suggest that the wind only blows during nighttime.', 'Line 5 says "a-blowing all day long."'],
      ],
      answer: 2,
      explain: 'A repeated refrain creates a song-like rhythm throughout the poem and reminds the reader that the wind sings and blows continuously.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [8, 10],
      stem: 'What can the reader infer about the speaker\'s fascination with the wind in stanza 2?',
      choices: [
        'The speaker is puzzled and amazed because the wind\'s effects are everywhere, yet the wind itself remains invisible.',
        ['The speaker is terrified that the wind will blow the house away.', 'The tone is curious and admiring, not fearful.'],
        ['The speaker believes the wind is hiding inside the basement.', 'Lines 8 and 10 state the wind cannot be seen at all.'],
        ['The speaker wants to build a kite that flies higher than the clouds.', 'Kites were mentioned earlier, but stanza 2 focuses on invisibility.'],
      ],
      answer: 0,
      explain: 'Stanza 2 emphasizes the contrast between feeling the push and seeing the actions of the wind while never being able to see the wind itself.',
    }),
    msq({
      standard: 'rla:4.8A',
      stem: 'Which **two** themes are explored in the poem?',
      choices: [
        'The forces of nature can inspire wonder and imaginative questions in a child.',
        'Things that cannot be seen can still have immense power and presence.',
        ['Children should stay indoors whenever the weather turns windy.', 'The poem celebrates experiencing nature outdoors.'],
        ['Flying kites is dangerous when gusts become too strong.', 'Kites are described playfully in line 1.'],
        ['Wild beasts in fields are more dangerous than mountain spirits.', 'Lines 15–16 are poetic wonders, not real warnings about beasts.'],
      ],
      answers: [0, 1],
      explain: 'The speaker observes nature with childlike imagination and meditates on how an invisible force can produce mighty, tangible effects.',
    }),
    mcq({
      standard: 'rla:4.10F', cites: [14, 15, 16],
      stem: 'How do the questions in lines 14 through 16 contribute to the speaker\'s voice?',
      choices: [
        ['They make the speaker sound like an angry scientist conducting a test.', 'The speaker\'s tone is playful and curious.'],
        'They highlight the speaker\'s childlike imagination and curiosity about the unseen wind.',
        ['They show that the speaker is bored and wants to go to sleep.', 'The speaker is actively observing and wondering.'],
        ['They prove that the speaker does not believe the wind is real.', 'The speaker knows the wind is real and feels it push.'],
      ],
      answer: 1,
      explain: 'Wondering whether the wind is young, old, a wild beast, or "just a stronger child than me" demonstrates a uniquely youthful, imaginative voice.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [9],
      stem: 'Which line from the poem uses sensory details to describe how the speaker physically experiences the wind?',
      choices: [
        '"I felt you push, I heard you call,"',
        ['"I saw you toss the kites on high"', 'This describes a visual observation of kites, not a physical touch on the speaker.'],
        ['"And blow the birds about the sky;"', 'This describes seeing birds blown.'],
        ['"O blower, are you young or old?"', 'This is a speculative question.'],
      ],
      answer: 0,
      explain: 'Line 9 describes direct sensory touch ("I felt you push") and sound ("I heard you call").',
    }),
  ],
});
