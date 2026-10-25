// Grade 3 editing draft: A student's draft about camping at Garner State Park.
import { makeSet, mcq } from '../author.ts';

export const EDIT_PARK = makeSet({
  id: 'g3-edit-park',
  grade: 3,
  kind: 'editing',
  title: 'Camping Under the Hill Country Stars',
  intro: 'Liam wrote this draft about his family camping trip. Read his draft and look for any corrections he needs to make. Then answer the questions.',
  passages: [{
    id: 'g3-edit-park-p',
    title: 'Camping Under the Hill Country Stars',
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        'Last July, my family camped at Garner State Park in the rugged Texas Hill Country.',
        'We set up our green canvas tent under a grove of shady native pecan trees.',
        'The clear spring-fed Frio River flowed gently beside our grassy family campsite.',
        'The water was freezing cold, but swimming in it felt wonderful on a ninety-degree afternoon.',
        'In the evening, Dad built a warm campfire with dry seasoned cedar logs.',
        'In the afternoon, we hiked along a scenic limestone trail to the summit of Old Baldy.',
      ] },
      { kind: 'sentences', sentences: [
        'We roasted sweet marshmallows on long sticks until they turned delicious golden brown.',
        'Later that night, we gazed up at thousands of twinkling stars in the dark sky.',
        'A barred owl hooted softly from a high branch above our cozy canvas tent.',
        'Camping outdoors helped me appreciate the peaceful natural beauty of Texas state parks.',
        'I cannot wait to return to Garner State Park with my family next summer.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.11B.ii', cites: [5, 6],
      stem: 'Which sensory detail should Liam add after sentence 6 to make the campfire scene more vivid?',
      choices: [
        'The melted chocolate was warm and gooey as we pressed it between crunchy graham crackers.',
        ['Campfires require matches and dry wood to start.', 'This is general instructions, not a vivid sensory detail.'],
        ['My dad drives a four-door pickup truck.', 'Vehicle specifications are off topic.'],
        ['Garner State Park was established decades ago.', 'Historical park founding dates do not enhance the campfire meal.'],
      ],
      answer: 0,
      explain: 'Describing the warm, gooey melted chocolate between crunchy graham crackers adds appetizing sensory imagery that enriches the narrative.',
    }),
    mcq({
      standard: 'rla:3.11C', cites: [3, 4],
      stem: 'What is the best way to combine sentence 3 and sentence 4 into one smooth sentence?',
      choices: [
        ['The Frio River flowed beside our campsite, and it was cold, and we swam.', 'This is repetitive and stringy.'],
        'Beside our campsite flowed the clear Frio River, where swimming in the freezing water felt wonderful on a ninety-degree afternoon.',
        ['Because the river was cold, we set up a tent beside our campsite.', 'This introduces an incorrect cause-and-effect relationship.'],
        ['Water was freezing, but ninety degrees afternoon was swimming gently.', 'This phrasing is confusing and ungrammatical.'],
      ],
      answer: 1,
      explain: 'Combining the setting detail of the river with the swimming experience creates a clear, fluent, and descriptive complex sentence.',
    }),
    mcq({
      standard: 'rla:3.11D.ii', cites: [2],
      stem: 'In sentence 2, the verb "set" describes an action that happened in the past. What clue in sentence 1 confirms that past-tense verbs should be used?',
      choices: [
        ['"Texas Hill Country"', 'This is a geographical location.'],
        '"Last July"',
        ['"shady native pecan trees"', 'This describes physical scenery.'],
        ['"green canvas tent"', 'This describes an object.'],
      ],
      answer: 1,
      explain: 'The time phrase "Last July" at the opening of sentence 1 establishes that the camping trip took place in the past.',
    }),
    mcq({
      standard: 'rla:3.11D.iii', cites: [3],
      stem: 'In sentence 3, what kind of noun is "Frio River"?',
      choices: [
        ['Common noun', 'Common nouns are general names like "river."'],
        'Proper noun',
        ['Plural noun', 'It names one specific river.'],
        ['Pronoun', 'It is a specific geographical name.'],
      ],
      answer: 1,
      explain: '"Frio River" is a proper noun naming a specific body of water, which is why both words are capitalized.',
    }),
    mcq({
      standard: 'rla:3.11D.v', cites: [7],
      stem: 'In sentence 7, which word is an adverb of time telling when the stargazing took place?',
      choices: [
        ['"twinkling"', '"Twinkling" is a participle modifying stars.'],
        ['"dark"', '"Dark" is an adjective describing the sky.'],
        '"Later"',
        ['"stars"', '"Stars" is a noun.'],
      ],
      answer: 2,
      explain: '"Later" tells when the action happened, making it an adverb of time.',
    }),
    mcq({
      standard: 'rla:3.11D.ix', cites: [1],
      stem: 'Why is "Garner State Park" capitalized in sentence 1?',
      choices: [
        'It is the specific proper name of a designated state park.',
        ['All compound words must be capitalized.', 'General words are not capitalized.'],
        ['It tells how the campers felt.', 'It names a location, not an emotion.'],
        ['It is the main verb of the sentence.', '"Camped" is the verb.'],
      ],
      answer: 0,
      explain: 'Official names of state parks, monuments, and public facilities are proper nouns and must be capitalized.',
    }),
  ],
});
