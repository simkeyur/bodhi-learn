// Grade 5 revising and editing: an original student-style draft with planted errors, one per question.
// Sentences are numbered; every question cites the sentence(s) it is about.

import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_GARDEN = makeSet({
  id: 'g5-edit-garden',
  grade: 5,
  kind: 'editing',
  title: 'Our Class Garden',
  intro: 'Leo wrote this paper about his class garden. Read the paper and look for the revisions and corrections it needs. Then answer the questions.',
  passages: [{
    id: 'g5-edit-garden-p',
    title: 'Growing More Than Vegetables',
    genre: 'literaryNonfiction',
    blocks: [
      { kind: 'sentences', sentences: [
        'Last spring, my class at Pecan Grove Elementary started a garden in the empty lot behind the cafeteria.',
        'Our teacher asked a volunteer from the texas master gardeners association to show us how to get started.',
        'We planted tomatoes, peppers, and sunflowers in four long rows and labeled each row with a painted stick.',
      ] },
      { kind: 'sentences', sentences: [
        'For the first week, nothing seemed to happen, and some of us wondered if we had done something wrong.',
        'Then the seeds sprouted, and the plants growed quickly in the warm April weather.',
        'By May, the sunflowers were the more taller plants in the whole garden, even taller than our teacher.',
        'Every morning, two students checked the soil they watered the plants if it felt dry.',
      ] },
      { kind: 'sentences', sentences: [
        'In June, the leaves on the tomato plant was turning yellow.',
        'After reading a gardening book from the library, we learned that tomatoes need at least six hours of sunlight a day.',
        'We moved the tomato pots.',
        'We moved them to a sunny corner near the fence.',
        'Within two weeks, new green leaves appeared, and the first small tomatoes began to grow.',
      ] },
      { kind: 'sentences', sentences: [
        'At the end of the school year, we picked enough vegetables to make a salad for the whole class.',
        'Our garden taught us a lot.',
      ] },
    ],
  }],
  items: [
    inq({
      standard: 'rla:5.11D.ix', cites: [2],
      stem: 'Read sentence 2. Choose the correct way to write the name of the group.',
      sentence: [
        'Our teacher asked a volunteer from the ',
        { options: ['texas master gardeners association', 'Texas master gardeners association', 'Texas Master Gardeners Association', 'Texas Master gardeners Association'], answer: 2 },
        ' to show us how to get started.',
      ],
      explain: 'The name of an organization is a proper noun, so each important word starts with a capital letter: Texas Master Gardeners Association.',
    }),
    mcq({
      standard: 'rla:5.11D.ii', cites: [5],
      stem: 'What change, if any, should be made in sentence 5?',
      choices: [
        'Change **growed** to **grew**',
        ['Change **sprouted** to **sprout**', 'Sprouted is correct. The sentence tells about the past.'],
        ['Change **warm** to **warmer**', 'The sentence is not comparing two kinds of weather.'],
        ['Make no change', 'There is an error in the sentence.'],
      ],
      answer: 0,
      explain: 'Grow is an irregular verb. Its past tense is grew, not growed.',
    }),
    mcq({
      standard: 'rla:5.11D.iv', cites: [6],
      stem: 'What is the correct way to write sentence 6?',
      choices: [
        ['By May, the sunflowers were the more tallest plants in the whole garden, even taller than our teacher.', 'Never use more with an -est word.'],
        ['By May, the sunflowers were the taller plants in the whole garden, even taller than our teacher.', 'Taller compares two things. The sunflowers are compared with every plant in the garden.'],
        'By May, the sunflowers were the tallest plants in the whole garden, even taller than our teacher.',
        ['By May, the sunflowers were the most tall plants in the whole garden, even taller than our teacher.', 'Short words like tall add -est instead of using most.'],
      ],
      answer: 2,
      explain: 'When you compare more than two things (all the plants in the garden), use the superlative form. For a short word like tall, add -est: tallest.',
    }),
    mcq({
      standard: 'rla:5.11D.i', cites: [7],
      stem: 'What is the best way to correct sentence 7?',
      choices: [
        ['Every morning, two students checked the soil, they watered the plants if it felt dry.', 'A comma alone cannot join two complete sentences. That is a comma splice.'],
        ['Every morning, two students checked the soil and they watered the plants and if it felt dry.', 'This adds an extra and that makes the sentence confusing.'],
        ['Every morning, two students checked. The soil they watered the plants if it felt dry.', 'The second part is not a complete thought.'],
        'Every morning, two students checked the soil. They watered the plants if it felt dry.',
      ],
      answer: 3,
      explain: 'Sentence 7 is a run-on: two complete sentences joined with nothing between them. Splitting it into two sentences fixes it.',
    }),
    inq({
      standard: 'rla:5.11D.vi', cites: [8],
      stem: 'Read sentence 8. Choose the verb that correctly completes the sentence.',
      sentence: [
        'In June, the leaves on the tomato plant ',
        { options: ['was', 'were', 'is', 'be'], answer: 1 },
        ' turning yellow.',
      ],
      explain: 'The subject is leaves, not plant. "On the tomato plant" is a prepositional phrase. Leaves is plural and the sentence is in the past, so the verb is were.',
    }),
    mcq({
      standard: 'rla:5.11C', cites: [10, 11],
      stem: 'What is the most effective way to combine sentences 10 and 11?',
      choices: [
        'We moved the tomato pots to a sunny corner near the fence.',
        ['We moved the tomato pots, we moved them to a sunny corner near the fence.', 'This joins two sentences with a comma (a comma splice) and repeats words.'],
        ['We moved the tomato pots and we moved them, to a sunny corner near the fence.', 'This repeats words and puts the comma in the wrong place.'],
        ['Moving the tomato pots, to a sunny corner near the fence, we moved them.', 'This is confusing and repeats "moved."'],
      ],
      answer: 0,
      explain: 'Both sentences say the same thing: we moved the pots. Putting the place ("to a sunny corner near the fence") into the first sentence removes the repeated words.',
    }),
    mcq({
      standard: 'rla:5.11B.i', cites: [14],
      stem: 'Leo wants to add a sentence after sentence 14 to conclude his paper. Which sentence best does this?',
      choices: [
        ['Sunflowers can grow to be more than ten feet tall.', 'This adds a new fact instead of wrapping up the paper.'],
        ['Next year, our school might also start a recycling club.', 'This changes the topic.'],
        'We learned that growing food takes patience, teamwork, and paying attention to what plants need.',
        ['Our teacher is named Mrs. Alvarez.', 'This detail does not wrap up the paper.'],
      ],
      answer: 2,
      explain: 'A strong conclusion connects back to the main idea. Sentence 14 says the garden "taught us a lot," and the best choice tells what they learned, using ideas from the paper: waiting for seeds, sharing the work, and moving the tomatoes to the sun.',
    }),
  ],
});
