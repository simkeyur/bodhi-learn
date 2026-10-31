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
        'Warm chocolate melted between our graham crackers.',
        ['Campfires require dry wood matches and adult supervision to start outdoors.', 'This is general instructions, not a vivid sensory detail.'],
        ['My dad drives a four-door pickup truck with large all-terrain tires.', 'Vehicle details are off topic.'],
        ['Garner State Park was established decades ago by state conservation teams.', 'Park history does not enhance the campfire meal.'],
      ],
      answer: 0,
      explain: 'Describing warm melted chocolate between graham crackers adds appetizing sensory imagery that enriches the narrative.',
    }),
    mcq({
      standard: 'rla:3.11C', cites: [3, 4],
      stem: 'What is the best way to combine sentence 3 and sentence 4 into one smooth sentence?',
      choices: [
        ['The Frio River flowed beside our campsite, and it was cold, and we swam together in it.', 'This is repetitive and stringy.'],
        'The clear Frio River flowed beside our campsite, and swimming in it felt great.',
        ['Because the river was cold, we set up our green canvas tent beside the campsite water.', 'This introduces an incorrect cause-and-effect relationship.'],
        ['Water was freezing cold, but ninety degrees afternoon was swimming gently by the tent.', 'This phrasing is confusing and ungrammatical.'],
      ],
      answer: 1,
      explain: 'Combining the river setting with the swimming experience creates a clear, fluent compound sentence.',
    }),
    mcq({
      standard: 'rla:3.11D.ii', cites: [2],
      stem: 'In sentence 2, the verb "set" describes an action that happened in the past. What clue in sentence 1 confirms that past-tense verbs should be used?',
      choices: [
        ['"Texas Hill Country"', 'This is a geographical location.'],
        ['"shady native pecan trees"', 'This describes physical scenery.'],
        '"Last July"',
        ['"green canvas tent"', 'This describes an object.'],
      ],
      answer: 2,
      explain: 'The time phrase "Last July" at the start of sentence 1 establishes that the camping trip took place in the past.',
    }),
    mcq({
      standard: 'rla:3.11D.iii', cites: [3],
      stem: 'In sentence 3, what kind of noun is "Frio River"?',
      choices: [
        ['Common noun naming a general thing', 'Common nouns are general names like "river."'],
        'Proper noun',
        ['Plural noun referring to many things', 'It names one specific river.'],
        ['Pronoun replacing a person\'s name', 'It is a specific geographical name.'],
      ],
      answer: 1,
      explain: '"Frio River" is a proper noun naming a specific river, which is why both words are capitalized.',
    }),
    mcq({
      standard: 'rla:3.11D.v', cites: [7],
      stem: 'In sentence 7, which word is an adverb of time telling when the stargazing took place?',
      choices: [
        ['"twinkling"', '"Twinkling" is a participle modifying stars.'],
        ['"dark"', '"Dark" is an adjective describing the sky.'],
        ['"stars"', '"Stars" is a noun.'],
        '"Later"',
      ],
      answer: 3,
      explain: '"Later" tells when the action happened, making it an adverb of time.',
    }),
    mcq({
      standard: 'rla:3.11D.ix', cites: [1],
      stem: 'Why is "Garner State Park" capitalized in sentence 1?',
      choices: [
        ['All compound words in English must always begin with capital letters.', 'General compound words are not capitalized.'],
        ['It is an adjective phrase that describes how the campers were feeling.', 'It names a location, not a feeling.'],
        ['It acts as the main action verb telling what the campers did in July.', '"Camped" is the verb.'],
        'It names a specific state park.',
      ],
      answer: 3,
      explain: 'Official names of state parks are proper nouns and must be capitalized.',
    }),
  ],
});
