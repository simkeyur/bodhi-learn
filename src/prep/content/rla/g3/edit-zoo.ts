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
        'Their eighteen-inch dark purple tongues help them strip thorny branches without getting hurt.',
        ['The zoo gift shop sells small stuffed giraffes, plush monkeys, and striped toy zebras to visitors.', 'Souvenir sales at the gift shop do not provide information about giraffe anatomy.'],
        ['Giraffe habitats at the zoo are cleaned and swept by keepers every morning.', 'Daily zookeeper cleaning schedules describe human routines rather than animal traits.'],
        ['Acacia trees grow in warm regions across Africa and parts of Australia.', 'The geographic distribution of acacia trees describes botany rather than giraffe physical features.'],
      ],
      answer: 0,
      explain: 'Describing how giraffes use their long tongues to grasp leaves adds fascinating, relevant detail about their physical traits.',
    }),
    mcq({
      standard: 'rla:3.11C', cites: [7],
      stem: 'If Carlos wrote "Carlos and me took lots of photos," what revision should be made to sentence 7?',
      choices: [
        ['Change Carlos and me to Me and Carlos', '"Me" is an objective pronoun and cannot be used as a subject, even when placed first.'],
        'Change Carlos and me to Carlos and I',
        ['Change took to take', 'The events occurred yesterday, so the past tense verb "took" is correct.'],
        ['Change photos to photoes', '"Photos" is the standard plural spelling and does not take the ending -es.'],
      ],
      answer: 1,
      explain: '"Carlos and I" are subjects of the sentence. You say "I took," so the compound subject requires "Carlos and I."',
    }),
    mcq({
      standard: 'rla:3.11D.ii', cites: [1],
      stem: 'What change should be made to sentence 1 if the field trip is scheduled to happen next week instead of yesterday?',
      choices: [
        ['Change the past-tense verb took to takes', '"Takes" is a present-tense verb and does not express future events occurring next week.'],
        ['Change the past-tense verb took to taken', '"Taken" is a past participle and cannot function alone as the predicate of a sentence.'],
        'Change the past-tense verb took to will take',
        ['Change the past-tense verb took to taking', '"Taking" is a participle that requires a helping verb such as "will be" to show future action.'],
      ],
      answer: 2,
      explain: 'Events occurring in the future ("next week") require the future-tense verb form "will take."',
    }),
    mcq({
      standard: 'rla:3.11D.x', cites: [6],
      stem: 'Why are commas used in sentence 6: "We saw giant tortoises, green tree frogs, and a colorful corn snake resting peacefully on a log"?',
      choices: [
        ['To set off direct spoken dialogue between two students on the tour.', 'The sentence contains narrative description rather than spoken dialogue in quotation marks.'],
        ['To join two complete independent clauses together with a coordinating conjunction.', 'The sentence contains a single subject and verb with a compound object list, not two independent clauses.'],
        ['To separate the name of a city from its surrounding county or state.', 'The sentence names reptiles and amphibians, not geographical locations like cities or states.'],
        'To separate three or more individual items listed in a series.',
      ],
      answer: 3,
      explain: 'Commas are standardly placed between items in a series of three or more things.',
    }),
    mcq({
      standard: 'rla:3.11D.vii', cites: [9],
      stem: 'In sentence 9, which word is the pronoun that refers to the students in the class?',
      choices: [
        ['the action verb leaving', '"Leaving" is a verb form indicating departure, not a pronoun referring to people.'],
        ['the descriptive adjective shady', '"Shady" is a descriptive adjective modifying the cedar elm tree.'],
        'the subject pronoun we',
        ['the common noun tree', '"Tree" is a concrete noun naming a plant rather than a pronoun replacing a person.'],
      ],
      answer: 2,
      explain: '"We" is the first-person plural subject pronoun referring back to the students.',
    }),
    mcq({
      standard: 'rla:3.11D.iv', cites: [8],
      stem: 'What form of adjective is "most exciting" as used in sentence 8?',
      choices: [
        'Superlative adjective comparing one exhibit against all other zoo exhibits',
        ['Comparative adjective comparing exactly two animal exhibits at the zoo', 'Comparative adjectives compare only two things; comparing among all exhibits requires the superlative form.'],
        ['Descriptive adverb explaining how the lions moved inside their habitat', 'The phrase describes the noun "exhibit" rather than modifying a verb as an adverb.'],
        ['Predicate noun renaming the subject at the beginning of the clause', 'The phrase functions as an adjective modifying a noun, not as a predicate noun.'],
      ],
      answer: 0,
      explain: '"Most exciting" is the superlative adjective form used when comparing one item against all other items in a group.',
    }),
  ],
});
