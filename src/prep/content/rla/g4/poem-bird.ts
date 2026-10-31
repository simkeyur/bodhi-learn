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
        ['They looked like colorful glass beads on a party necklace.', 'The comparison is imaginative, not literal glass beads.'],
        'They were small, shiny, and darting in fear.',
        ['They were closed tightly because the bird was so tired.', 'The bird\'s eyes were open and glancing rapidly.'],
        ['They were completely blind and could not see the insect.', 'The bird saw everything around it with rapid glances.'],
      ],
      answer: 1,
      explain: 'Comparing eyes to frightened beads creates an image of small, shiny eyes darting around with nervous alertness.',
    }),
    mcq({
      standard: 'rla:4.10D', cites: [15, 16, 17],
      stem: 'In lines 15 through 17, how does the poet describe the bird\'s flight through the air?',
      choices: [
        ['By comparing the quick wings to a roaring train engine.', 'The poet emphasizes quiet gentleness, not loud engines.'],
        ['By explaining that the bird hopped along the garden wall.', 'The bird unrolled his feathers and flew.'],
        'By comparing silent flight to rowing on calm water.',
        ['By describing loud flapping sounds made against tree branches.', 'The bird flew away silently.'],
      ],
      answer: 2,
      explain: 'The poet metaphorically compares flight to rowing smoothly through ocean water without a splash.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [7, 8],
      stem: 'What can the reader infer about the bird\'s behavior in lines 7 and 8 ("And then hopped sidewise to the Wall / To let a Beetle pass")?',
      choices: [
        ['The bird was terrified of the beetle and flew off.', 'The bird simply hopped sidewise and stayed in the garden.'],
        ['The bird was hunting for another small bug to eat.', 'Line 8 states explicitly it was to let the beetle pass.'],
        ['The bird got injured while landing on the stones.', 'The bird flew effortlessly a moment later.'],
        'The bird politely moved aside for the beetle.',
      ],
      answer: 3,
      explain: 'The lines show the bird noticing the small beetle and shifting over to let it pass by.',
    }),
    mcq({
      standard: 'rla:4.3B', cites: [6],
      stem: 'In line 6, what does the word **convenient** mean in the phrase "From a convenient Grass"?',
      choices: [
        'nearby and easy to reach',
        ['difficult to find in tall plants', 'The grass was right there in front of the bird.'],
        ['taller than the garden boundary', 'Grass is not dangerous or hard for a bird to reach.'],
        ['completely dry from hot weather', 'It held morning dew, so it was fresh.'],
      ],
      answer: 0,
      explain: 'Convenient means easily accessible; the blade of grass was conveniently within reach so the bird could drink the dew.',
    }),
    msq({
      standard: 'rla:4.8D', cites: [1, 5, 7, 14],
      stem: 'Which **two** details establish the quiet garden setting of the poem?',
      choices: [
        'The bird drinks dew from grass next to a garden wall.',
        'The speaker watches the bird and offers a bread crumb.',
        ['A thunderstorm shakes the branches of heavy trees.', 'The weather is calm and sunny ("Banks of Noon").'],
        ['Crowds of noisy children run along the sidewalk.', 'The speaker watches alone in silence.'] ,
        ['Boats row across a stormy ocean filled with splashing waves.', 'Rowing oars and ocean are figurative metaphors for smooth flight, not the physical setting.'],
      ],
      answers: [0, 1],
      explain: 'The garden setting is grounded in the walking path, grass with dew, garden wall, and the gentle human offering a crumb in quiet stillness.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [13, 14, 15],
      stem: 'Which action shows the speaker attempting to connect with the bird?',
      choices: [
        'Offering the bird a bread crumb',
        ['Watching the bird eat a garden earthworm', 'This is the bird eating by itself, not an interaction with the speaker.'],
        ['Seeing the bird sip dew from a tall leaf', 'This shows the bird drinking by itself.'],
        ['Observing the bird fly toward the clouds', 'This describes the bird departing.'],
      ],
      answer: 0,
      explain: 'In lines 13–14, the speaker gently interacts with the bird by offering it a crumb of food.',
    }),
  ],
});
