// Grade 3 editing draft: A student's draft about visiting the San Antonio Zoo.
import { makeSet, mcq } from '../author.ts';

export const EDIT_ZOO = makeSet({
  id: 'g3-edit-zoo',
  grade: 3,
  kind: 'editing',
  title: 'Our Adventure at the Zoo',
  intro: 'Carlos wrote this personal narrative about his class field trip to the zoo. Read his draft and look for any corrections he needs to make. Then answer the questions.',
  passages: [{
    id: 'g3-edit-zoo-p',
    title: 'Our Adventure at the Zoo',
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        'Yesterday morning, our third-grade class took a yellow school bus to the San Antonio Zoo.',
        'The morning weather was pleasantly warm, bright, and breezy across the shaded zoo grounds.',
        'First, our knowledgeable tour guide showed us the spacious African savannah habitat.',
        'Tall giraffes stretched their long slender necks to nibble sweet acacia leaves from high wooden baskets.',
        'Next, we walked along a winding stone pathway to visit the indoor reptile house.',
        'The colorful flamingos stood gracefully on one slender leg in the shallow blue pond.',
      ] },
      { kind: 'sentences', sentences: [
        'We saw giant tortoises, green tree frogs, and a colorful corn snake resting peacefully on a log.',
        'My friend Carlos and I took lots of photos with our cameras during the tour.',
        'The loud roaring lions were the most exciting animal exhibit of the whole afternoon.',
        'Before leaving, we ate cold strawberry popsicles under a shady cedar elm tree.',
        'Everyone agreed that our elementary class trip to the zoo was completely unforgettable.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.11B.ii', cites: [3, 4],
      stem: 'Which supporting detail should Carlos add after sentence 4 to explain more about giraffe physical traits?',
      choices: [
        'Giraffes have blue-black tongues that can measure up to eighteen inches long to grasp thorny branches safely.',
        ['The parking lot at the zoo was filled with dozens of cars.', 'Parking lot information does not explain giraffe behavior.'],
        ['I wore my newest blue sneakers on the class field trip.', 'Sneaker details are irrelevant to animal traits.'],
        ['Popcorn costs four dollars at the park concession stand.', 'Concession prices are unrelated to giraffes.'],
      ],
      answer: 0,
      explain: 'Describing the long, prehensile tongues that giraffes use to grasp leaves adds fascinating, relevant detail to the observation in sentence 4.',
    }),
    mcq({
      standard: 'rla:3.11C', cites: [7],
      stem: 'If Carlos wrote "Carlos and me took lots of photos," what revision should be made to sentence 7?',
      choices: [
        ['Change "took" to "take"', 'The event happened in the past ("Yesterday morning").'],
        'Change "Carlos and me" to "Carlos and I"',
        ['Change "photos" to "photoes"', '"Photos" is the correct plural spelling.'],
        ['Remove the word "lots"', 'The informal phrase is clear, but the subject pronoun is what requires standard correction.'],
      ],
      answer: 1,
      explain: '"Carlos and I" are the subjects of the sentence. You would say "I took," not "me took," so the compound subject requires "Carlos and I."',
    }),
    mcq({
      standard: 'rla:3.11D.ii', cites: [1],
      stem: 'What change should be made to sentence 1 if the field trip is happening next week instead of yesterday?',
      choices: [
        ['Change "took" to "taken"', '"Taken" requires a helping verb.'],
        ['Change "took" to "takes"', '"Takes" is present tense.'],
        'Change "took" to "will take"',
        ['Change "took" to "taking"', '"Taking" cannot stand alone as the main verb.'],
      ],
      answer: 2,
      explain: 'Events occurring in the future ("next week") require the future-tense verb form "will take."',
    }),
    mcq({
      standard: 'rla:3.11D.x', cites: [6],
      stem: 'Why are commas used in sentence 6: "We saw giant tortoises, green tree frogs, and a colorful corn snake resting peacefully on a log"?',
      choices: [
        'To separate three or more individual items listed in a series.',
        ['To set off dialogue spoken by a character.', 'No spoken quotation appears in the sentence.'],
        ['To join two completely separate sentences without a conjunction.', 'The sentence lists three noun phrases, not two independent clauses.'],
        ['To show that an animal was running fast.', 'Commas do not indicate animal speed.'],
      ],
      answer: 0,
      explain: 'Commas are standardly placed between items in a series of three or more things (tortoises, tree frogs, and a corn snake).',
    }),
    mcq({
      standard: 'rla:3.11D.vii', cites: [9],
      stem: 'In sentence 9, which word is the pronoun referring to the students in the class?',
      choices: [
        ['"leaving"', '"Leaving" is a verb form.'],
        '"we"',
        ['"shady"', '"Shady" is an adjective describing the tree.'],
        ['"tree"', '"Tree" is a noun.'],
      ],
      answer: 1,
      explain: '"We" is the first-person plural subject pronoun referring back to the students and chaperones on the trip.',
    }),
    mcq({
      standard: 'rla:3.11D.iv', cites: [8],
      stem: 'What form of adjective is "most exciting" as used in sentence 8?',
      choices: [
        ['Comparative adjective comparing two exhibits', 'Comparing two items would use "more exciting."'],
        'Superlative adjective comparing three or more exhibits',
        ['Adverb of frequency', '"Most exciting" describes the noun exhibit, making it an adjective.'],
        ['Proper noun', 'It is an adjective, not a name.'],
      ],
      answer: 1,
      explain: '"Most exciting" is the superlative form used when comparing one item against all other items in a group (all exhibits visited that day).',
    }),
  ],
});
