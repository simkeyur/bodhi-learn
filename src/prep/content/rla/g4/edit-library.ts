// Grade 4 revising and editing: a student's formal letter to the school principal requesting graphic novels.
// Questions cover reflexive pronouns (4.11D.vii), adverbs of frequency and degree (4.11D.v),
// complete sentences (4.11D.i), deleting unnecessary words (4.11C), prefix spelling (4.2B.v),
// and purposeful transitions (4.11B.i).

import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_LIBRARY = makeSet({
  id: 'g4-edit-library',
  grade: 4,
  kind: 'editing',
  title: 'A Letter for More Graphic Novels',
  intro: 'Maya wrote this letter to Principal Gomez. Read the draft and look for the revisions and corrections she needs to make. Then answer the questions.',
  passages: [{
    id: 'g4-edit-library-p',
    title: 'A Proposal for Our Library',
    genre: 'correspondence',
    blocks: [
      { kind: 'note', text: 'Dear Principal Gomez,' },
      { kind: 'sentences', sentences: [
        'My name is Maya Chen, and I am writing to you on behalf of the fourth-grade reading club.',
        'Our school library is a wonderful sanctuary for readers, but many students find its fiction shelves lacking modern graphic novels.',
        'Graphic novels combine rich storytelling with stunning visual art, which helps readers picture complex storylines clearly.',
        'Students who struggle with lengthy chapter books often find they can read graphic novels all by theirselves without feeling discouraged.',
      ] },
      { kind: 'sentences', sentences: [
        'Whenever new illustrated books arrive in the library, they are checked out immediate and never sit on the shelves for long.',
        'Because so many eager students want to borrow them.',
        'Expanding our graphic novel collection would encourage reluctant readers to visit the library regularly.',
        'Some people think graphic novels are too easy, research shows they introduce advanced vocabulary and historical themes.',
      ] },
      { kind: 'sentences', sentences: [
        'It would be a misstake to ignore this powerful reading format.',
        'Thank you for considering our proposal to expand our library collection.',
      ] },
      { kind: 'note', text: 'Sincerely, Maya Chen' },
    ],
  }],
  items: [
    inq({
      standard: 'rla:4.11D.vii', cites: [4],
      stem: 'Read sentence 4. Choose the correct reflexive pronoun to complete the sentence.',
      sentence: [
        'Students who struggle with lengthy chapter books often find they can read graphic novels all by ',
        { options: ['theirselves', 'themselves', 'themself', 'them'], answer: 1 },
        ' without feeling discouraged.',
      ],
      explain: 'The pronoun refers to plural students. The correct standard reflexive pronoun is "themselves." "Theirselves" is not a standard English word.',
    }),
    inq({
      standard: 'rla:4.11D.v', cites: [5],
      stem: 'Read sentence 5. Choose the adverb that correctly completes the sentence.',
      sentence: [
        'Whenever new illustrated books arrive in the library, they are checked out ',
        { options: ['immediate', 'immediately', 'immediatly', 'immediatley'], answer: 1 },
        ' and never sit on the shelves for long.',
      ],
      explain: 'Use the adverb form "immediately" (with suffix -ly) to describe the action of checking out books quickly.',
    }),
    mcq({
      standard: 'rla:4.11D.i', cites: [6],
      stem: 'Sentence 6 is a sentence fragment. What is the most effective way to correct it?',
      choices: [
        'Connect it to sentence 5: "...and never sit on the shelves for long because so many eager students want to borrow them."',
        ['Leave it as an independent sentence ending with an exclamation point.', 'Adding an exclamation point does not fix an incomplete thought starting with "because."'],
        ['Change "Because" to "Since" and leave it as its own sentence.', '"Since" also creates a dependent clause fragment.'],
        ['Delete the entire sentence because students shouldn\'t borrow books.', 'The sentence provides an important supporting explanation.'],
      ],
      answer: 0,
      explain: 'A clause starting with "because" is a dependent fragment; joining it to the independent clause in sentence 5 completes the thought.',
    }),
    mcq({
      standard: 'rla:4.11C', cites: [8],
      stem: 'What is the best way to correct sentence 8 to fix the run-on error?',
      choices: [
        ['Some people think graphic novels are too easy research shows they introduce advanced vocabulary.', 'This leaves it as a run-on with no joining word.'],
        'Although some people think graphic novels are too easy, research shows they introduce advanced vocabulary and historical themes.',
        ['Some people think graphic novels are too easy, and but research shows they introduce advanced vocabulary.', 'Using "and but" together is ungrammatical.'],
        ['Too easy, research shows they introduce advanced vocabulary.', 'This leaves out the initial subject.'],
      ],
      answer: 1,
      explain: 'Adding the subordinating conjunction "Although" creates a clear, coherent complex sentence that contrasts the misconception with the scientific research.',
    }),
    inq({
      standard: 'rla:4.2B.v', cites: [9],
      stem: 'Read sentence 9. Choose the correct spelling of the word with the prefix mis-.',
      sentence: [
        'It would be a ',
        { options: ['misstake', 'mistake', 'miztake', 'mistayk'], answer: 1 },
        ' to ignore this powerful reading format.',
      ],
      explain: 'Mistake is spelled with one s: mistake.',
    }),
    mcq({
      standard: 'rla:4.11B.i', cites: [7],
      stem: 'Maya wants to add a transition to sentence 7 to introduce the positive outcome of her proposal. Which phrase works best?',
      choices: [
        'As a result,',
        ['Earlier that morning,', 'This indicates a specific past time of day, which does not fit.'],
        ['Instead of that,', 'This suggests replacing something with an alternative.'],
        ['Unfortunately,', '"Unfortunately" indicates bad news, but sentence 7 describes a positive outcome.'],
      ],
      answer: 0,
      explain: '"As a result" effectively introduces the logical positive consequence that would occur if the principal expands the collection.',
    }),
  ],
});
