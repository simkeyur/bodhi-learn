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
        'They were small, shiny, and looking around nervously.',
        ['They were focused steadily on the crumb on the walk.', 'The bird glanced around in all directions rather than staring at one object.'],
        ['They were wide with surprise at discovering the speaker.', 'The poem notes earlier that the bird did not realize the speaker was watching.'],
        ['They were dark and calm after eating the worm.', 'The simile suggests fear and quick movement rather than calmness.'],
      ],
      answer: 0,
      explain: 'Comparing the bird\'s eyes to frightened beads creates an image of small, shiny eyes darting around with nervous alertness.',
    }),
    mcq({
      standard: 'rla:4.10D', cites: [15, 16, 17],
      stem: 'In lines 15 through 17, how does the poet describe the bird\'s flight through the air?',
      choices: [
        ['By emphasizing how fast the bird fluttered after eating the crumb.', 'The bird did not take the crumb, and the lines describe gentle grace rather than frantic speed.'],
        ['By detailing the whistling noise of wings rushing past the trees.', 'The poet emphasizes that the flight was softer than oars in water, not noisy.'],
        'By comparing the bird\'s smooth flight to oars moving silently through water.',
        ['By explaining how the bird glided down to rest on the garden grass.', 'The bird unrolled its feathers and flew away into the sky.'],
      ],
      answer: 2,
      explain: 'The poet uses a metaphor to compare the bird\'s flight to oars parting water smoothly without a splash.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [7, 8],
      stem: 'What can the reader infer about the bird\'s behavior in lines 7 and 8 ("And then hopped sidewise to the Wall / To let a Beetle pass")?',
      choices: [
        ['The bird was frightened by the beetle and flew away to hide behind the high brick garden wall.', 'The bird hopped aside on the walk instead of flying off.'],
        ['The bird moved out of the way so it could stalk the beetle as prey.', 'The bird simply stepped aside to let the beetle pass without attacking it.'],
        ['The bird was startled by the speaker stepping onto the walkway.', 'The speaker had not yet moved or offered the crumb.'],
        'The bird was aware of its surroundings and shared the path with another creature.',
      ],
      answer: 3,
      explain: 'Hopping aside to let the beetle pass indicates that the bird noticed the small insect and moved out of its way.',
    }),
    mcq({
      standard: 'rla:4.3B', cites: [6],
      stem: 'In line 6, what does the word **convenient** mean in the phrase "From a convenient Grass"?',
      choices: [
        ['growing in sunlight', 'The word refers to how accessible the blade of grass was, not whether it was sunny.'],
        'easy to reach',
        ['freshly planted', 'The word describes ease of access rather than how recently the grass grew.'],
        ['pleasantly cool', 'While morning dew can be cool, convenient describes location and accessibility.'],
      ],
      answer: 1,
      explain: 'Convenient means easy to access; the blade of grass was conveniently close at hand so the bird could sip dew.',
    }),
    msq({
      standard: 'rla:4.8D', cites: [1, 5, 7, 14],
      stem: 'Which **two** details establish the quiet garden setting of the poem?',
      choices: [
        'The bird drinks dew from a blade of grass next to a wall.',
        'The speaker stands nearby and offers the bird a crumb.',
        ['A sudden thunderstorm rolls over the garden fence.', 'The poem describes calm conditions without rain or storms.'],
        ['Other animals gather around the speaker to beg for food.', 'Only the bird and a passing beetle are on the walk.'],
        ['Boats row across ocean waves in the distance.', 'Oars dividing ocean water is a metaphor for flight, not a physical element of the garden setting.'],
      ],
      answers: [0, 1],
      explain: 'The garden setting is grounded in the walking path, grass with dew, garden wall, and the gentle human offering a crumb in quiet stillness.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [13, 14, 15],
      stem: 'Which action shows the speaker attempting to connect with the bird?',
      choices: [
        'Offering a crumb of bread to the cautious bird',
        ['Quietly stepping behind the wall to watch it eat', 'The bird hopped to the wall; the speaker did not hide behind it.'],
        ['Reaching down to catch the beetle on the pathway', 'The speaker did not touch or interact with the beetle.'],
        ['Calling out softly to guide the bird back home', 'The speaker offered food in silence rather than calling out.'],
      ],
      answer: 0,
      explain: 'In line 14, the speaker gently reaches out by offering the bird a crumb of food.',
    }),
  ],
});
