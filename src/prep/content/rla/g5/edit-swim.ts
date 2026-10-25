// Grade 5 revising and editing: a student's opinion piece with planted errors, one per question.

import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_SWIM = makeSet({
  id: 'g5-edit-swim',
  grade: 5,
  kind: 'editing',
  title: 'Every Kid Should Learn to Swim',
  intro: 'Nadia wrote this paper to share her opinion. Read the paper and look for the revisions and corrections it needs. Then answer the questions.',
  passages: [{
    id: 'g5-edit-swim-p',
    title: 'Every Kid Should Learn to Swim',
    genre: 'argumentative',
    blocks: [
      { kind: 'sentences', sentences: [
        'Swimming is a thing.',
        'It is fun, it is good exercise, and it can even save a life.',
        'Every student in our town should have the chance to take swimming lessons.',
      ] },
      { kind: 'sentences', sentences: [
        'First, swimming gives children protecsion around water.',
        'Texas has many lakes, rivers, and pools, and accidents can happen quickly, even to people who are used to the water.',
        'A child who know how to swim can stay calm and get to safety.',
      ] },
      { kind: 'sentences', sentences: [
        'Swimming is also great exercise.',
        'It works almost every muscle in the body, from your shoulders all the way down to your toes.',
        'It is gentle on the joints; however, people of all ages can enjoy it.',
      ] },
      { kind: 'sentences', sentences: [
        'Some families cannot afford lessons.',
        'Our city could offer free lessons at the community pool on weekday mornings during the summer.',
        'The pools lifeguards are already trained to teach.',
        'In the end, swimming is a skill that keeps people safe and healthy for their whole lives.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:5.11B.i', cites: [1],
      stem: 'Nadia wants to replace sentence 1 with a stronger introduction. Which sentence would best do this?',
      choices: [
        ['Swimming is something people do.', 'This is as vague as sentence 1.'],
        'Swimming is one of the most important skills a person can learn.',
        ['My favorite color is blue, like the water in a pool.', 'This is off topic.'],
        ['In conclusion, swimming is good.', '"In conclusion" belongs at the end, not the beginning.'],
      ],
      answer: 1,
      explain: 'A strong introduction tells the reader what the paper is about and why it matters. The second choice sets up Nadia\'s opinion clearly.',
    }),
    inq({
      standard: 'rla:5.2B.ii', cites: [4],
      stem: 'Read sentence 4. Choose the correct spelling.',
      sentence: [
        'First, swimming gives children ',
        { options: ['protecsion', 'protecshun', 'protection', 'protektion'], answer: 2 },
        ' around water.',
      ],
      explain: 'Protect + -ion = protection. The t now sounds like /sh/, but it is still spelled with a t.',
    }),
    inq({
      standard: 'rla:5.11D.i', cites: [6],
      stem: 'Read sentence 6. Choose the verb that correctly completes the sentence.',
      sentence: [
        'A child who ',
        { options: ['know', 'knows', 'knowing', 'have known'], answer: 1 },
        ' how to swim can stay calm and get to safety.',
      ],
      explain: '"Who" refers to "a child," which is singular, so the verb is knows.',
    }),
    inq({
      standard: 'rla:5.11D.v', cites: [9],
      stem: 'Read sentence 9. Choose the word that best connects the two ideas.',
      sentence: [
        'It is gentle on the joints; ',
        { options: ['however', 'therefore', 'for example', 'meanwhile'], answer: 1 },
        ', people of all ages can enjoy it.',
      ],
      explain: 'People of all ages can enjoy swimming because it is gentle on the joints. The second idea is a result, so use therefore, not however.',
    }),
    mcq({
      standard: 'rla:5.11D.viii', cites: [10, 11],
      stem: 'What is the best way to combine sentences 10 and 11?',
      choices: [
        'Because some families cannot afford lessons, our city could offer free lessons at the community pool on weekday mornings during the summer.',
        ['Some families cannot afford lessons, our city could offer free lessons at the community pool on weekday mornings during the summer.', 'This is a comma splice.'],
        ['Although some families cannot afford lessons, our city could offer free lessons at the community pool on weekday mornings during the summer.', 'Although shows a contrast, but the second idea is a solution to the first.'],
        ['Some families cannot afford lessons, so because our city could offer free lessons at the community pool.', 'This doesn\'t make sense.'],
      ],
      answer: 0,
      explain: 'Families not affording lessons is the reason the city should offer free ones. "Because" joins the two ideas into one complex sentence.',
    }),
    inq({
      standard: 'rla:5.11D', cites: [12],
      stem: 'Read sentence 12. Choose the correct word.',
      sentence: [
        'The ',
        { options: ['pools', 'pool\'s', 'pools\'s', 'pool'], answer: 1 },
        ' lifeguards are already trained to teach.',
      ],
      explain: 'The lifeguards belong to the pool, so the word needs an apostrophe and s: pool\'s.',
    }),
  ],
});
