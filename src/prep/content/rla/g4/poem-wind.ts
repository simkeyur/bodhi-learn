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
        ['The heavy flapping of wet laundry hung out to dry on a backyard line during a summer storm.', 'The simile suggests a soft, whispery rustle rather than heavy laundry in a storm.'],
        'The soft, whispering rustle of a steady breeze brushing across the meadow lawn.',
        ['The loud stomping of leather boots hurrying down a gravel garden path.', 'The fabric comparison conveys light swishing rather than heavy footsteps on gravel.'],
        ['The chilling spray of rain soaking through wet winter clothing in an open park.', 'The poet describes a dry rustling sound rather than wet rain soaking clothing.'],
      ],
      answer: 1,
      explain: 'The comparison to skirts sweeping across grass conveys the soft rustle of wind passing over the lawn.',
    }),
    mcq({
      standard: 'rla:4.10D', cites: [5, 6, 11, 12, 17, 18],
      stem: 'Why does the poet repeat the couplet ("O wind, a-blowing all day long, / O wind, that sings so loud a song!") at the end of each stanza?',
      choices: [
        ['To signal that the speaker is becoming tired and hopes the noisy wind will stop blowing soon.', 'The speaker celebrates the wind with awe rather than wishing for it to stop.'],
        ['To remind the reader where kites and songbirds build their nests during the spring season.', 'Kites are recreational toys mentioned in the opening stanza, not animals with nests.'],
        'To establish a rhythmic musical refrain that emphasizes the wind\'s nonstop, audible presence.',
        ['To show that the strong breeze blows only in the middle of dark, stormy winter nights.', 'The refrain specifically says "a-blowing all day long," contradicting stormy nights.'],
      ],
      answer: 2,
      explain: 'Repeating the lines creates a steady song-like rhythm and emphasizes that the wind never stops blowing.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [8, 10],
      stem: 'What can the reader infer about the speaker\'s thoughts in stanza 2?',
      choices: [
        ['The speaker is terrified that violent gusts will shatter windows and damage the family home.', 'The speaker reflects with wonder rather than feeling terrified of property damage.'],
        ['The speaker suspects that the wind is an imaginary creature hiding inside a dark bedroom closet.', 'The speaker observes the wind\'s actions outdoors rather than imagining it in a closet.'],
        ['The speaker plans to build an enormous wooden container to capture the wind and examine its physical shape.', 'The speaker contemplates the mystery of invisibility rather than trying to build a trap.'],
        'The speaker is fascinated by the mystery of an unseen force that can exert such strong physical power.',
      ],
      answer: 3,
      explain: 'Stanza 2 contrasts feeling the strong push of the wind with the mystery of never being able to see it.',
    }),
    msq({
      standard: 'rla:4.8A',
      stem: 'Which **two** themes are explored throughout the poem?',
      choices: [
        'Natural forces can inspire a deep sense of wonder, curiosity, and imagination in a child.',
        'Powerful forces in the world can remain completely invisible while still producing mighty effects.',
        ['Children should always remain indoors whenever chilly autumn breezes begin to blow.', 'The speaker delights in running outside in the wind rather than staying indoors.'],
        ['Flying paper kites in open fields is far too dangerous for young people to attempt.', 'Kites tossed high in the sky illustrate joyous flight rather than danger.'],
        ['Wild beasts roaming through open fields are more dangerous than mountain spirits.', 'The mention of beasts is a poetic personification wondering what the wind is, not a warning.'],
      ],
      answers: [0, 1],
      explain: 'The speaker observes nature with wonder and reflects on how an invisible force can produce mighty effects.',
    }),
    mcq({
      standard: 'rla:4.10F', cites: [14, 15, 16],
      stem: 'How do the questions in lines 14 through 16 ("are you young or old?", "Are you a beast... / Or just a stronger child than me?") affect the speaker\'s voice?',
      choices: [
        ['They make the speaker sound like an impatient researcher demanding scientific answers from an assistant.', 'The speaker wonders with poetic curiosity rather than speaking like an impatient scientist.'],
        'They create an imaginative, inquisitive voice that reflects a child trying to understand nature.',
        ['They show that the speaker is confused and doubts whether moving air actually exists.', 'The speaker knows the wind exists and is trying to imagine what kind of being it is.'],
        ['They give the impression that the speaker is weary and wants to fall asleep in the grass.', 'The questioning reflects active, lively imagination rather than sleepy fatigue.'],
      ],
      answer: 1,
      explain: 'Asking whether the wind is young, old, an animal, or a stronger child shows a curious, imaginative voice.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [9],
      stem: 'Which quotation from the poem describes the physical sensation of the wind making contact with the speaker?',
      choices: [
        '"I felt you push, I heard you call," (line 9)',
        ['"I saw you toss the kites on high" (line 1)', 'Line 1 describes the visual observation of kites, not physical contact.'],
        ['"And blow the birds about the sky;" (line 2)', 'Line 2 describes watching birds in flight rather than tactile feeling.'],
        ['"O blower, are you young or old?" (inquisitive question in line 14)', 'Line 14 poses a speculative question rather than describing a physical sensation.'],
      ],
      answer: 0,
      explain: 'In line 9, the speaker says "I felt you push," which describes a physical touch sensation.',
    }),
  ],
});
