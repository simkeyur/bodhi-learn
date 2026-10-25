// Grade 5 revising and editing: a student's how-to paper with planted errors, one per question.

import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_LANTERN = makeSet({
  id: 'g5-edit-lantern',
  grade: 5,
  kind: 'editing',
  title: 'How to Make a Paper Lantern',
  intro: 'Sam wrote these directions for a class how-to book. Read the directions and look for the revisions and corrections they need. Then answer the questions.',
  passages: [{
    id: 'g5-edit-lantern-p',
    title: 'How to Make a Paper Lantern',
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        'Paper lanterns are fun to make and can brighten up any room.',
        'All you need is construction paper, scissors, tape, and a ruler.',
      ] },
      { kind: 'sentences', sentences: [
        'First, fold a sheet of papper in half the long way.',
        'Next, use the ruler to draw lines across the fold, about one inch apart.',
        'Stop each line about an inch before the open edge.',
        'Carefully cut along each line, but do not cut all the way through the paper.',
      ] },
      { kind: 'sentences', sentences: [
        'Unfold the paper and roll it into a tube.',
        'Tape the edges together at the top and bottom.',
        'The cut strips will puff out, which gives the lantern its shape.',
        'Everybody who make a lantern will want to add a handle.',
        'To make a handle, cut a thin strip of paper and tape it across the top.',
      ] },
      { kind: 'sentences', sentences: [
        'You can hang your lantern by a window.',
        'You have finished decorating it.',
        'Paper lanterns are a cheap and easy way to make any room feel like a party.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:5.11B.ii', cites: [2],
      stem: 'Sam wants to add a sentence after sentence 2 to give the reader a helpful detail. Which sentence would best do this?',
      choices: [
        ['Paper is made from trees.', 'This fact doesn\'t help the reader make the lantern.'],
        'A sheet of paper that is about 9 inches by 12 inches works best.',
        ['Lanterns are pretty.', 'This is an opinion that doesn\'t add useful information.'],
        ['You will need some things.', 'This is too vague to help.'],
      ],
      answer: 1,
      explain: 'In directions, a helpful detail tells the reader exactly what to do or use. The paper size is a specific detail that helps readers succeed.',
    }),
    inq({
      standard: 'rla:5.2B.iv', cites: [3],
      stem: 'Read sentence 3. Choose the correct spelling.',
      sentence: [
        'First, fold a sheet of ',
        { options: ['papper', 'paper', 'paiper', 'papur'], answer: 1 },
        ' in half the long way.',
      ],
      explain: 'Pa-per divides after the long a (V/CV), so the first syllable is open and there is only one p.',
    }),
    mcq({
      standard: 'rla:5.11B.i', cites: [7],
      stem: 'Which transition should be added to the beginning of sentence 7?',
      choices: [
        ['However,', 'However shows a contrast, but this is the next step.'],
        ['For example,', 'Sentence 7 is a step, not an example.'],
        'Then,',
        ['In conclusion,', 'The directions aren\'t ending yet.'],
      ],
      answer: 2,
      explain: 'Directions tell steps in order. "Then" shows that unfolding the paper is the next step after cutting.',
    }),
    inq({
      standard: 'rla:5.11D.vii', cites: [10],
      stem: 'Read sentence 10. Choose the verb that correctly completes the sentence.',
      sentence: [
        'Everybody who ',
        { options: ['make', 'makes', 'are making', 'have made'], answer: 1 },
        ' a lantern will want to add a handle.',
      ],
      explain: 'Everybody is an indefinite pronoun that is singular, so the verb is makes.',
    }),
    mcq({
      standard: 'rla:5.11D.viii', cites: [12, 13],
      stem: 'What is the best way to combine sentences 12 and 13?',
      choices: [
        ['You can hang your lantern by a window, you have finished decorating it.', 'This is a comma splice.'],
        ['You can hang your lantern by a window because you have finished decorating it before.', 'Because doesn\'t show the right order of steps.'],
        'After you have finished decorating it, you can hang your lantern by a window.',
        ['Although you have finished decorating it, you can hang your lantern by a window.', 'Although shows a contrast that doesn\'t fit.'],
      ],
      answer: 2,
      explain: 'Decorating comes first and hanging comes next. "After" joins the two ideas into one complex sentence and shows the order.',
    }),
  ],
});
