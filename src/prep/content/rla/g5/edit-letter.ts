// Grade 5 revising and editing: a student's letter (correspondence) with planted errors, one per question.

import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_LETTER = makeSet({
  id: 'g5-edit-letter',
  grade: 5,
  kind: 'editing',
  title: 'A Letter About the Park',
  intro: 'Jordan wrote this letter to the director of the city parks. Read the letter and look for the revisions and corrections it needs. Then answer the questions.',
  passages: [{
    id: 'g5-edit-letter-p',
    title: 'A Fountain for Westwood Park',
    genre: 'correspondence',
    blocks: [
      { kind: 'note', text: 'Dear Ms. Alvarez,' },
      { kind: 'sentences', sentences: [
        'My name is Jordan Price, and I am a fifth grader at Oak Hill Elementary.',
        'Me and my friends ride our bikes to Westwood Park almost every day after school.',
        'The park is a great place to play, but it has one big problem.',
        'There is no water fountain anywhere near the playground or the basketball courts.',
      ] },
      { kind: 'sentences', sentences: [
        'In the summer, the temperature in our town often climbs above 100 degrees.',
        'Many kids forget to bring water, and some of them feel dizzy after playing in the heat.',
        'Last week my little brother felt sick and we had to walk all the way home to get a drink.',
      ] },
      { kind: 'sentences', sentences: [
        'A water fountain would be a simple way to keep everyone safe and healthy.',
        'Families would not have to carry heavy bottles, and the plastic bottles people leave on the benches would dissappear.',
        'I beleive the whole neighborhood would thank you.',
        'Thank you for reading my letter.',
      ] },
      { kind: 'note', text: 'Sincerely, Jordan Price' },
    ],
  }],
  items: [
    inq({
      standard: 'rla:5.11D.vii', cites: [2],
      stem: 'Read sentence 2. Choose the correct words to complete the sentence.',
      sentence: [
        { options: ['Me and my friends', 'My friends and I', 'My friends and me', 'Me and my friend\'s'], answer: 1 },
        ' ride our bikes to Westwood Park almost every day after school.',
      ],
      explain: 'The pronoun is part of the subject, so use I, not me. It is polite to name others first: "My friends and I."',
    }),
    mcq({
      standard: 'rla:5.11D.x', cites: [7],
      stem: 'What is the correct way to write sentence 7?',
      choices: [
        ['Last week my little brother felt sick, we had to walk all the way home to get a drink.', 'A comma alone can\'t join two sentences.'],
        'Last week my little brother felt sick, and we had to walk all the way home to get a drink.',
        ['Last week my little brother felt sick and, we had to walk all the way home to get a drink.', 'The comma goes before and, not after it.'],
        ['Last week, my little brother, felt sick and we had to walk all the way home to get a drink.', 'Don\'t put a comma between the subject and the verb.'],
      ],
      answer: 1,
      explain: 'Sentence 7 is a compound sentence: two complete sentences joined by and. Put a comma before the joining word.',
    }),
    mcq({
      standard: 'rla:5.11B.ii', cites: [5],
      stem: 'Jordan wants to add a sentence after sentence 5 to support the idea that the heat is dangerous. Which sentence would best do this?',
      choices: [
        ['Some people like hot weather more than cold weather.', 'This is an opinion about weather, not support for the danger.'],
        ['Westwood Park has three picnic tables.', 'This detail is unrelated.'],
        'Doctors say that children who play outside in hot weather need to drink water often so they don\'t get sick.',
        ['The temperature is very hot in the summer.', 'This repeats sentence 5 without adding new support.'],
      ],
      answer: 2,
      explain: 'A good supporting sentence adds a specific fact. What doctors say about drinking water in hot weather shows why the heat is dangerous and why a fountain is needed.',
    }),
    inq({
      standard: 'rla:5.2B.v', cites: [9],
      stem: 'Read sentence 9. Choose the correct spelling of the word that completes the sentence.',
      sentence: [
        'Families would not have to carry heavy bottles, and the plastic bottles people leave on the benches would ',
        { options: ['dissappear', 'disappear', 'disapear', 'dissapear'], answer: 1 },
        '.',
      ],
      explain: 'Disappear is the prefix dis- plus appear. Keep one s from dis- and the double p from appear.',
    }),
    inq({
      standard: 'rla:5.11D.xi', cites: [10],
      stem: 'Read sentence 10. Choose the correct spelling.',
      sentence: [
        'I ',
        { options: ['beleive', 'belive', 'believe', 'beleave'], answer: 2 },
        ' the whole neighborhood would thank you.',
      ],
      explain: 'Remember "i before e except after c": believe.',
    }),
    mcq({
      standard: 'rla:5.11C', cites: [3, 4],
      stem: 'What is the most effective way to combine sentences 3 and 4?',
      choices: [
        'The park is a great place to play, but it has one big problem: there is no water fountain near the playground or the basketball courts.',
        ['The park is a great place to play, it has one big problem, there is no water fountain.', 'This joins sentences with only commas.'],
        ['The park is a great place to play and it has one big problem and there is no water fountain anywhere.', 'Too many ands make this hard to read.'],
        ['There is no water fountain, the park is a great place to play.', 'This leaves out the problem idea and uses a comma splice.'],
      ],
      answer: 0,
      explain: 'A colon can introduce what the problem is. The combined sentence keeps every idea and connects them clearly.',
    }),
  ],
});
