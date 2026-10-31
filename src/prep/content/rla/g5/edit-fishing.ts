// Grade 5 revising and editing: a student's personal narrative with planted errors, one per question.

import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_FISHING = makeSet({
  id: 'g5-edit-fishing',
  grade: 5,
  kind: 'editing',
  title: 'My First Fishing Trip',
  intro: 'Ava wrote this story about a trip with her uncle. Read the story and look for the revisions and corrections it needs. Then answer the questions.',
  passages: [{
    id: 'g5-edit-fishing-p',
    title: 'My First Fishing Trip',
    genre: 'literaryNonfiction',
    blocks: [
      { kind: 'sentences', sentences: [
        'Last summer, my uncle Ray took me fishing at Lake Travis for the first time.',
        'We woke up before sunrise and drived to the dock while the sky was still dark.',
        'The lake was so still that it looked like a sheet of glass stretching all the way to the hills.',
      ] },
      { kind: 'sentences', sentences: [
        'Uncle Ray showed me how to bait the hook and cast the line.',
        'My first cast landed in a tree.',
        'My second cast landed in the water, but nothing happened for a long time.',
        'After an hour, a flock of birds were circling over the water.',
      ] },
      { kind: 'sentences', sentences: [
        'Suddenly, my rod bent almost in half.',
        '"Reel it in slowly! shouted Uncle Ray."',
        'My arms ached, but I kept turning the handle.',
        'At last, a shiny bass flopped onto the dock.',
      ] },
      { kind: 'sentences', sentences: [
        'We took a picture and then let the fish go back into the lake.',
        'I will never forget that morning, espeshally the moment the fish jumped.',
      ] },
    ],
  }],
  items: [
    inq({
      standard: 'rla:5.11D.ii', cites: [2],
      stem: 'Read sentence 2. Choose the correct verb.',
      sentence: [
        'We woke up before sunrise and ',
        { options: ['drived', 'drove', 'driven', 'drive'], answer: 1 },
        ' to the dock while the sky was still dark.',
      ],
      explain: 'Drive is an irregular verb. Its past tense is drove.',
    }),
    mcq({
      standard: 'rla:5.11C', cites: [5, 6],
      stem: 'What is the most effective way to combine sentences 5 and 6?',
      choices: [
        ['My first cast landed in a tree, and my second cast landed in the water, and nothing happened for a long time.', 'This creates a repetitive run-on sentence joined by multiple "and" conjunctions.'],
        'My first cast landed in a tree, but my second landed in the water, where nothing bit for a long time.',
        ['When my first cast landed in a tree, my second cast landed in the water, but nothing happened for a long time.', '"When" suggests both casts happened simultaneously instead of in sequence.'],
        ['After my first cast landed in a tree, my second cast landed in deep water without anything happening for hours.', 'This adds details not in the original text and uses an awkward phrasing.'],
      ],
      answer: 1,
      explain: '"But" shows the contrast between the two casts, and "where" adds what happened in the water. The combined sentence keeps every idea without repeating "cast landed."',
    }),
    inq({
      standard: 'rla:5.11D.iii', cites: [7],
      stem: 'Read sentence 7. Choose the verb that correctly completes the sentence.',
      sentence: [
        'After an hour, a flock of birds ',
        { options: ['were', 'was', 'are', 'be'], answer: 1 },
        ' circling over the water.',
      ],
      explain: 'Flock is a collective noun that names one group, so it takes a singular verb. The story is in the past, so use was.',
    }),
    mcq({
      standard: 'rla:5.11D.x', cites: [9],
      stem: 'What is the correct way to write sentence 9?',
      choices: [
        '"Reel it in slowly!" shouted Uncle Ray.',
        ['"Reel it in slowly! shouted my uncle Ray."', 'The quotation marks must go around only the words Uncle Ray says.'],
        ['Reel it in slowly! "shouted Uncle Ray."', 'The quotation marks are around the wrong words.'],
        ['"Reel it in slowly!" Shouted Uncle Ray.', 'Shouted should not be capitalized because the sentence continues.'],
      ],
      answer: 0,
      explain: 'Quotation marks go around the exact words someone says: "Reel it in slowly!" The words "shouted Uncle Ray" are outside the quotation marks.',
    }),
    inq({
      standard: 'rla:5.2B.iii', cites: [13],
      stem: 'Read sentence 13. Choose the correct spelling.',
      sentence: [
        'I will never forget that morning, ',
        { options: ['espeshally', 'especially', 'especialy', 'expecially'], answer: 1 },
        ' the moment the fish jumped.',
      ],
      explain: 'Es-pe-cial-ly: the word especial plus -ly, so it has two l\'s and a c (not sh).',
    }),
    mcq({
      standard: 'rla:5.11B.i', cites: [13],
      stem: 'Ava wants to add a sentence after sentence 13 to conclude her story. Which sentence would best do this?',
      choices: [
        ['Lake Travis is a deep reservoir located along the Colorado River near northwest Austin.', 'This gives geographical background facts rather than reflecting on the personal experience.'],
        ['Many local anglers recommend using live bait instead of artificial plastic lures for bass.', 'This provides general fishing advice rather than concluding Ava\'s personal narrative.'],
        ['Uncle Ray promised that next weekend we could visit an outdoor tackle shop to buy more gear.', 'This introduces a future errand rather than reflecting on the significance of the first catch.'],
        'Now, whenever I see a still lake, I remember catching my very first fish.',
      ],
      answer: 3,
      explain: 'A strong conclusion connects back to the story\'s main experience and tells why it mattered to the writer.',
    }),
  ],
});
