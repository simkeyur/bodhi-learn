// Grade 4 poetry: Emily Dickinson's "A Bird came down the Walk" (published 1891). Public domain.
// Questions cover figurative language (4.9B), imagery (4.10D), inference (4.6F),
// words in context (4.3B), setting (4.8D), and text evidence (4.7C).

import { makeSet, mcq, msq } from '../author.ts';

export const POEM_BIRD = makeSet({
  id: 'g4-poem-bird',
  grade: 4,
  kind: 'reading',
  title: 'A Bird came down the Walk',
  intro: 'Read the poem and choose the best answer to each question.',
  passages: [{
    id: 'g4-poem-bird-p',
    title: 'A Bird came down the Walk',
    author: 'Emily Dickinson',
    source: 'Poems, Second Series (1891)',
    genre: 'poetry',
    blocks: [
      { kind: 'line', text: 'A Bird came down the Walk—' },
      { kind: 'line', text: 'He did not know I saw—' },
      { kind: 'line', text: 'He bit an Angleworm in halves' },
      { kind: 'line', text: 'And ate the fellow, raw,' , stanzaEnd: true },

      { kind: 'line', text: 'And then he drank a Dew' },
      { kind: 'line', text: 'From a convenient Grass—' },
      { kind: 'line', text: 'And then hopped sidewise to the Wall' },
      { kind: 'line', text: 'To let a Beetle pass—' , stanzaEnd: true },

      { kind: 'line', text: 'He glanced with rapid eyes' },
      { kind: 'line', text: 'That hurried all abroad—' },
      { kind: 'line', text: 'They looked like frightened Beads, I thought—' },
      { kind: 'line', text: 'He stirred his Velvet Head' , stanzaEnd: true },

      { kind: 'line', text: 'Like one in danger, Cautious,' },
      { kind: 'line', text: 'I offered him a Crumb,' },
      { kind: 'line', text: 'And he unrolled his feathers' },
      { kind: 'line', text: 'And rowed him softer home—' , stanzaEnd: true },

      { kind: 'line', text: 'Than Oars divide the Ocean,' },
      { kind: 'line', text: 'Too silver for a seam—' },
      { kind: 'line', text: 'Or Butterflies, off Banks of Noon' },
      { kind: 'line', text: 'Leap, plashless as they swim.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.9B', cites: [11],
      stem: 'In line 11, what does the poet\'s simile ("They looked like frightened Beads, I thought") convey about the bird\'s eyes?',
      choices: [
        ['They were made of colorful glass beads from a necklace.', 'The comparison is imaginative, not literal glass.'],
        'They were small, round, shiny, and darting nervously around in alarm.',
        ['They were closed tightly because the bird was sleepy.', 'The bird\'s eyes were open and glancing rapidly.'],
        ['They were blind and could not see the beetle.', 'The bird saw everything around it with rapid glances.'],
      ],
      answer: 1,
      explain: 'Comparing eyes to frightened beads creates a vivid picture of small, round, shiny eyes darting around with anxious alertness.',
    }),
    mcq({
      standard: 'rla:4.10D', cites: [15, 16, 17],
      stem: 'In lines 15 through 17, how does the poet describe the bird\'s flight through the air?',
      choices: [
        ['By comparing the bird\'s flight to a roaring train engine.', 'The poet emphasizes quiet gentleness, not loud engines.'],
        ['By describing how loudly the bird flapped against the garden wall.', 'The bird flew away silently.'],
        'By using the metaphor of rowing a boat smoothly and silently through water without leaving a seam.',
        ['By explaining that the bird hopped on foot rather than flying.', 'The bird unrolled his feathers and flew.'],
      ],
      answer: 2,
      explain: 'The poet metaphorically describes flight as rowing through air ("rowed him softer home / Than Oars divide the Ocean"), evoking graceful, silent motion.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [7, 8],
      stem: 'What can the reader infer about the bird\'s behavior in lines 7 and 8 ("And then hopped sidewise to the Wall / To let a Beetle pass")?',
      choices: [
        'The bird was observant and deliberately stepped aside to give the beetle room.',
        ['The bird was terrified of the beetle and flew away instantly.', 'The bird simply hopped sidewise and stayed in the garden.'],
        ['The bird was looking for another worm to eat inside the wall.', 'Line 8 states explicitly it was to let the beetle pass.'],
        ['The bird injured its wing on the wooden fence.', 'The bird flew effortlessly a moment later.'],
      ],
      answer: 0,
      explain: 'The speaker observes a polite, humorous natural moment where the bird shifts to the wall to let another small creature go by.',
    }),
    mcq({
      standard: 'rla:4.3B', cites: [6],
      stem: 'In line 6, what does the word **convenient** mean in the phrase "From a convenient Grass"?',
      choices: [
        ['difficult to find in the dark', 'The grass was right there in front of the bird.'],
        'handy, nearby, and easy to reach',
        ['tall and dangerous to climb', 'Grass is not dangerous to a bird.'],
        ['dry and dead from drought', 'It held morning dew, so it was fresh.'],
      ],
      answer: 1,
      explain: 'Convenient means easily accessible or suited to comfort; the blade of grass was conveniently within reach so the bird could sip the dew droplet.',
    }),
    msq({
      standard: 'rla:4.8D', cites: [1, 5, 7, 14],
      stem: 'Which **two** details establish the quiet garden setting of the poem?',
      choices: [
        'The bird drinks dew from a blade of grass next to a garden wall.',
        'The speaker quietly observes the bird and offers it a bread crumb on the path.',
        ['A thunderstorm shakes the branches of heavy trees.', 'The weather is calm and sunny ("Banks of Noon").'],
        ['Crowds of noisy children run along the sidewalk.', 'The speaker watches alone in silence.'],
        ['Boats row across a stormy ocean filled with splashing waves.', 'Rowing oars and ocean are figurative metaphors for smooth flight, not the physical setting.'],
      ],
      answers: [0, 1],
      explain: 'The garden setting is grounded in the walking path, grass with dew, garden wall, and the gentle human offering a crumb in quiet stillness.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [13, 14, 15],
      stem: 'Which lines show the moment when the interaction between the human speaker and the bird occurs?',
      choices: [
        '"Like one in danger, Cautious, / I offered him a Crumb,"',
        ['"He bit an Angleworm in halves / And ate the fellow, raw,"', 'This is the bird eating alone.'],
        ['"And then he drank a Dew / From a convenient Grass—"', 'This shows the bird drinking.'],
        ['"Than Oars divide the Ocean, / Too silver for a seam—"', 'This describes the bird\'s departing flight.'],
      ],
      answer: 0,
      explain: 'Lines 13–14 record the direct attempt at connection: the cautious speaker reaches out to offer a crumb of food.',
    }),
  ],
});
