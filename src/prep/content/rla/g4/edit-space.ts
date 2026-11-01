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
        ['The rover is about the size of a small car it carries seven advanced scientific instruments designed to analyze soil and rock.', 'Leaving out a conjunction or proper punctuation between two independent clauses creates a run-on sentence.'],
        'The rover is about the size of a small car, and it carries seven advanced scientific instruments designed to analyze soil and rock.',
        ['Because the rover is about the size of a small car with seven advanced scientific instruments designed to analyze soil and rock.', 'Starting the clause with "Because" without an independent main clause turns the sentence into a fragment.'],
        ['The rover is about the size of a small car, carrying seven advanced scientific instruments, designed to analyze soil and rock.', 'Adding extra commas around the participle phrases makes the sentence awkward and disjointed.'],
      ],
      answer: 1,
      explain: 'Sentence 5 is a comma splice. Adding the coordinating conjunction "and" correctly connects the two independent clauses.',
    }),
    mcq({
      standard: 'rla:4.11B.ii', cites: [4],
      stem: 'Marcus wants to add a detail after sentence 4 explaining why Jezero Crater was picked. Which sentence best achieves this?',
      choices: [
        ['Astronomers have identified hundreds of craters on the rocky moons surrounding Jupiter and Saturn.', 'Mentioning moons of other planets does not explain why NASA chose Jezero Crater on Mars.'],
        ['Spacecraft traveling from Earth take several months to cross the vacuum of interplanetary space.', 'Travel time to Mars is an interesting fact, but it does not explain why this crater was selected.'],
        'Satellite images showed that a river once flowed into a deep lake inside the crater basin.',
        ['Many planetary craters are named after historical astronomers and prominent scientific figures.', 'Explaining naming conventions does not provide a scientific reason for exploring this crater.'],
      ],
      answer: 2,
      explain: 'Explaining that satellite photos showed an ancient lake in the crater provides a clear scientific reason for exploring that specific site.',
    }),
    mcq({
      standard: 'rla:4.11C', cites: [7, 8],
      stem: 'What is the most effective way to combine sentences 7 and 8?',
      choices: [
        'A tiny robotic helicopter named Ingenuity accompanied the rover, flying more than seventy times to test powered flight in the thin atmosphere.',
        ['A tiny robotic helicopter named Ingenuity accompanied the rover to test flight, it flew over dunes more than seventy times exceeding expectations.', 'Joining two complete sentences with only a comma creates an incorrect comma splice.'],
        ['Ingenuity flew more than seventy times over dunes and accompanied the rover and tested powered flight in the thin Martian atmosphere.', 'Stringing clauses together with repeated "and" conjunctions makes the sentence wordy and clumsy.'],
        ['Because Ingenuity flew more than seventy times over rugged dunes, it accompanied the rover to test powered flight on Mars.', 'This sentence incorrectly suggests that flying seventy times was the cause of being sent to Mars.'],
      ],
      answer: 0,
      explain: 'Combining the ideas using a participial phrase ("flying more than seventy times") creates a smooth, grammatically correct sentence.',
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
        ['On the other hand,', 'This signals contrast, but sentence 6 provides examples of what the instruments do.'],
        ['In the meantime,', 'This indicates simultaneous events rather than an illustration of how the rover works.'],
        ['Suddenly,', 'This signals an abrupt event rather than an explanation of the rover\'s planned scientific tasks.'],
        'For example,',
      ],
      answer: 3,
      explain: '"For example" clearly signals that sentence 6 illustrates how the instruments mentioned in sentence 5 are used.',
    }),
  ],
});
