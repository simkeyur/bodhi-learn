// Grade 4 revising and editing: an informational report about Mars exploration.
// Questions cover transitions (4.11B.i), supporting details (4.11B.ii), combining sentences (4.11C),
// complete sentences (4.11D.i), coordinating conjunctions (4.11D.viii), and spelling (4.11D.xi).

import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_SPACE = makeSet({
  id: 'g4-edit-space',
  grade: 4,
  kind: 'editing',
  title: 'Exploring the Red Planet',
  intro: 'Marcus wrote this report about robotic exploration on Mars. Read the report and look for the revisions and corrections he needs to make. Then answer the questions.',
  passages: [{
    id: 'g4-edit-space-p',
    title: 'Robots on the Red Planet',
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        'Mars is the fourth planet from the sun and is often called the Red Planet because iron minerals in its dusty soil oxidize and rust.',
        'For decades, curious scientists and astronomers have wondered if microscopic life ever existed on its barren, windblown surface.',
        'To answer this fascinating scientific question, NASA has sent robotic rovers across millions of miles to explore the planet\'s rocky surface.',
        'In February 2021, the Perseverance rover successfully touched down inside the rocky basin of Jezero Crater.',
      ] },
      { kind: 'sentences', sentences: [
        'The rover is about the size of a small car, it carries seven advanced scientific instruments designed to analyze soil and rock.',
        'Perseverance searches for signs of ancient microscopic life and carefully drills sample cores from Martian boulders.',
        'A tiny robotic helicopter named Ingenuity accompanied the rover to test powered flight in the thin Martian atmosphere.',
        'Ingenuity flew more than seventy times over rugged dunes, exceeding all original engineering expectations.',
      ] },
      { kind: 'sentences', sentences: [
        'These complex robotic missions require careful planing and tireless dedication by hundreds of aerospace engineers.',
        'Scientists beleive future human astronauts will one day follow the exciting path these brave robots have paved.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.11D.i', cites: [5],
      stem: 'What is the correct way to fix sentence 5?',
      choices: [
        'The rover is car-sized, and it carries seven instruments.',
        ['The rover is about the size of a small car it carries seven advanced scientific instruments.', 'A run-on with no punctuation between clauses is incorrect.'],
        ['The rover is about the size of a small car, carrying it carries seven advanced instruments.', 'Repeating "carrying it carries" is ungrammatical.'],
        ['The rover being about the size of a small car with scientific gear.', 'This creates an incomplete sentence fragment.'],
      ],
      answer: 0,
      explain: 'Sentence 5 is a comma splice. Fix it by adding the coordinating conjunction "and" between the two complete clauses.',
    }),
    mcq({
      standard: 'rla:4.11B.ii', cites: [4],
      stem: 'Marcus wants to add a detail after sentence 4 explaining why Jezero Crater was picked. Which sentence best achieves this?',
      choices: [
        ['Many planets in our solar system have craters named after famous scientists.', 'This does not explain why Jezero Crater was selected.'],
        ['Perseverance traveled for over six months through space to land in Texas.', 'This does not explain why Jezero Crater was chosen for the mission.'],
        'Satellite photos showed that an ancient lake once filled the crater.',
        ['Telescopes were invented hundreds of years ago by European astronomers.', 'This is unrelated to selecting Jezero Crater.'],
      ],
      answer: 2,
      explain: 'Explaining that satellite photos showed an ancient lake in the crater gives a clear reason why NASA chose that spot to search for signs of past water.',
    }),
    mcq({
      standard: 'rla:4.11C', cites: [7, 8],
      stem: 'What is the most effective way to combine sentences 7 and 8?',
      choices: [
        ['A tiny robotic helicopter named Ingenuity tested flight, it flew seventy times exceeding expectations.', 'This creates a comma splice.'],
        ['Ingenuity flew more than seventy times and accompanied the rover and tested powered flight.', 'Too many "ands" make the sentence awkward and repetitive.'],
        'Ingenuity tested powered flight, flying more than seventy times.',
        ['Because Ingenuity flew seventy times over dunes, it accompanied the rover to Mars.', 'This reverses cause and effect.'],
      ],
      answer: 2,
      explain: 'Combining the ideas using a participial phrase ("flying more than seventy times") creates a clear, concise sentence.',
    }),
    inq({
      standard: 'rla:4.2B.vi', cites: [9],
      stem: 'Read sentence 9. Choose the correct spelling of the word that completes the sentence.',
      sentence: [
        'These robotic missions require careful ',
        { options: ['planing', 'planning', 'planeing', 'planinng'], answer: 1 },
        ' by hundreds of aerospace engineers.',
      ],
      explain: 'Plan is a one-syllable word ending in one vowel and one consonant; double the n before adding -ing: planning.',
    }),
    inq({
      standard: 'rla:4.11D.xi', cites: [10],
      stem: 'Read sentence 10. Choose the correct spelling to complete the sentence.',
      sentence: [
        'Scientists ',
        { options: ['beleive', 'believe', 'belive', 'beleave'], answer: 1 },
        ' future human astronauts will one day follow the path these brave robots have paved.',
      ],
      explain: 'Remember the rule "i before e except after c": believe.',
    }),
    mcq({
      standard: 'rla:4.11B.i', cites: [6],
      stem: 'Marcus wants to add a transition to sentence 6 to show how it connects to sentence 5. Which word is best?',
      choices: [
        ['On the other hand,', 'This indicates a contrast that does not fit the context.'],
        ['All of a sudden,', 'This suggests an unexpected event rather than an explanation.'],
        ['In the meantime,', 'This indicates two things happening at once.'],
        'For example,',
      ],
      answer: 3,
      explain: '"For example" shows how the rover searches for life and drills rocks to illustrate the work of its instruments.',
    }),
  ],
});
