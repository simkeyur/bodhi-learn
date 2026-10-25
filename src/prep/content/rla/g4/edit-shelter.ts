// Grade 4 revising and editing: a narrative about volunteering at an animal shelter.
// Questions cover reflexive pronouns (4.11D.vii), complete sentences (4.11D.i), nouns (4.11D.iii),
// adverbs of degree (4.11D.v), word choice (4.11C), and dialogue punctuation (4.11D.x).

import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_SHELTER = makeSet({
  id: 'g4-edit-shelter',
  grade: 4,
  kind: 'editing',
  title: 'Helping at the Shelter',
  intro: 'Elena wrote this personal narrative about volunteering at the local animal shelter. Read the draft and look for the revisions and corrections she needs to make. Then answer the questions.',
  passages: [{
    id: 'g4-edit-shelter-p',
    title: 'A Day with the Rescue Dogs',
    genre: 'fiction',
    blocks: [
      { kind: 'sentences', sentences: [
        'On Saturday morning, my brother and I volunteered at the Hill Country Humane Society in Kerrville.',
        'The shelter manager, Mrs. Vance, showed us how to brush the friendly golden retrievers and refill their clean water bowls.',
        'We prepared each dog bed by ourselves so that every rescued animal felt warm and secure.',
        'The dogs barked cheerfully when they saw us coming down the hallway with their morning biscuits.',
      ] },
      { kind: 'sentences', sentences: [
        'One little terrier puppy named Barnaby was extremely playful, he chased a rubber tennis ball back and forth.',
        'Two energetic puppy tumbled over each other on the soft green lawn outside.',
        'Mrs. Vance told us that exercise helps dogs stay calm and well-behaved while waiting for permanent adoptive homes.',
        'I felt very proud to help these loving animals find happiness.',
      ] },
      { kind: 'sentences', sentences: [
        '"You two did a wonderful job today," Mrs. Vance said with a warm smile.',
        '"Can we come back next Saturday?" I asked eagerly___',
      ] },
    ],
  }],
  items: [
    inq({
      standard: 'rla:4.11D.vii', cites: [3],
      stem: 'Read sentence 3. Choose the correct reflexive pronoun to complete the sentence.',
      sentence: [
        'We prepared each dog bed by ',
        { options: ['ourselves', 'ourself', 'themselves', 'us'], answer: 0 },
        ' so that every rescued animal felt warm and secure.',
      ],
      explain: 'The subject pronoun is "We" (plural first person). The correct reflexive pronoun is "ourselves." "Ourself" is not a standard English word.',
    }),
    mcq({
      standard: 'rla:4.11D.i', cites: [5],
      stem: 'What is the correct way to fix the comma splice in sentence 5?',
      choices: [
        ['One little terrier puppy named Barnaby was extremely playful he chased a rubber tennis ball back and forth.', 'Removing the comma creates an incorrect run-on sentence.'],
        'One little terrier puppy named Barnaby was extremely playful, and he chased a rubber tennis ball back and forth.',
        ['One little terrier puppy named Barnaby being playful chasing a ball.', 'This creates an incomplete fragment with no main verb.'],
        ['Extremely playful, a tennis ball was chased by him.', 'This has an awkward passive structure.'],
      ],
      answer: 1,
      explain: 'Sentence 5 contains two complete thoughts joined only by a comma. Inserting the coordinating conjunction "and" after the comma creates a correct compound sentence.',
    }),
    inq({
      standard: 'rla:4.11D.iii', cites: [6],
      stem: 'Read sentence 6. Choose the correct plural noun form.',
      sentence: [
        'Two energetic ',
        { options: ['puppy', 'puppies', 'puppys', 'puppies\''], answer: 1 },
        ' tumbled over each other on the soft green lawn outside.',
      ],
      explain: 'Puppy ends in a consonant and y; change y to i and add -es to form the plural noun puppies.',
    }),
    inq({
      standard: 'rla:4.11D.v', cites: [8],
      stem: 'Read sentence 8. Which word is an adverb of degree describing how proud Elena felt?',
      sentence: [
        'I felt ',
        { options: ['very', 'often', 'weekly', 'seldom'], answer: 0 },
        ' proud to help these loving animals find happiness.',
      ],
      explain: '"Very" is an adverb of degree that modifies the adjective "proud," describing the intensity of her pride.',
    }),
    inq({
      standard: 'rla:4.11D.x', cites: [10],
      stem: 'Read sentence 10. Choose the correct punctuation to end the dialogue.',
      sentence: [
        '"Can we come back next Saturday?" I asked eagerly',
        { options: ['.', '?', '."', '?"'], answer: 0 },
      ],
      explain: 'The question mark is already inside the quotation marks at the end of the spoken words ("...Saturday?"). The sentence finishes after the speech tag ("I asked eagerly") with a period.',
    }),
    mcq({
      standard: 'rla:4.11C', cites: [4],
      stem: 'What is the most effective revision to improve the word choice and clarity of sentence 4?',
      choices: [
        'The rescue dogs wagged their tails and barked excitedly as we carried the fresh morning biscuits down the hallway.',
        ['The dogs did some barking stuff when we came.', 'This uses vague, informal phrasing.'],
        ['Hallway walking happened with biscuits and dogs were loud.', 'This is passive and awkward.'],
        ['Down the hallway we walked and biscuits were eaten by dogs.', 'This is disjointed and unclear.'],
      ],
      answer: 0,
      explain: 'Replacing generic words with precise action verbs ("wagged their tails," "barked excitedly") and clear phrasing significantly improves the descriptive quality.',
    }),
  ],
});
