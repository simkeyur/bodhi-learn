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
        'The rover is about the size of a small car, and it carries seven advanced scientific instruments.',
        ['The rover is about the size of a small car it carries seven advanced scientific instruments.', 'A run-on with no punctuation between clauses is incorrect.'],
        ['The rover is about the size of a small car, carrying it carries seven advanced instruments.', 'Repeating "carrying it carries" is ungrammatical.'],
        ['About the size of a small car.', 'This creates an incomplete sentence fragment.'],
      ],
      answer: 0,
      explain: 'Sentence 5 is a comma splice (two complete sentences joined only by a comma). Fix it by adding the coordinating conjunction "and" after the comma.',
    }),
    mcq({
      standard: 'rla:4.11B.ii', cites: [4],
      stem: 'Marcus wants to add a supporting detail after sentence 4 explaining why Jezero Crater was selected. Which sentence best accomplishes this goal?',
      choices: [
        ['Many planets in our solar system have craters with interesting names.', 'This is a general comment that does not explain why Jezero was chosen.'],
        'Scientists chose Jezero Crater because orbital satellite images revealed that it was once filled with a deep lake fed by an ancient river.',
        ['Perseverance took over six months to travel through space from Florida to Mars.', 'This detail describes the flight duration rather than the crater selection.'],
        ['Telescopes were invented hundreds of years ago by European astronomers.', 'This detail is unrelated to Jezero Crater.'],
      ],
      answer: 1,
      explain: 'Adding the scientific explanation that Jezero Crater once held an ancient lake provides a specific, relevant detail explaining why the site was picked to search for evidence of past water and life.',
    }),
    mcq({
      standard: 'rla:4.11C', cites: [7, 8],
      stem: 'What is the most effective way to combine sentences 7 and 8?',
      choices: [
        ['A tiny robotic helicopter named Ingenuity tested powered flight, it flew seventy times exceeding expectations.', 'This creates a comma splice.'],
        'A tiny robotic helicopter named Ingenuity tested powered flight in the thin atmosphere, flying more than seventy times and exceeding all expectations.',
        ['Ingenuity flew more than seventy times and accompanied the rover and tested powered flight.', 'Too many "ands" make the sentence awkward and repetitive.'],
        ['Because Ingenuity flew seventy times, it accompanied the rover.', 'This reverses cause and effect.'],
      ],
      answer: 1,
      explain: 'Combining the sentences with a participial phrase ("flying more than seventy times and exceeding all expectations") creates a smooth, cohesive sentence.',
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
      stem: 'Marcus wants to add a transition to the beginning of sentence 6 to show how it connects to the previous sentence. Which word or phrase is the best choice?',
      choices: [
        ['Instead,', '"Instead" shows an alternative, which does not fit.'],
        ['Meanwhile,', '"Meanwhile" indicates two separate things occurring at once.'],
        'Specifically,',
        ['However,', '"However" indicates a contradiction, but sentence 6 gives details about the instruments.'],
      ],
      answer: 2,
      explain: '"Specifically" effectively introduces the exact tasks performed by the scientific instruments mentioned in the previous sentence.',
    }),
  ],
});
