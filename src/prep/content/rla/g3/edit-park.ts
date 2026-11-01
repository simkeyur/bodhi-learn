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
      stem: 'Which sensory detail should Liam add after sentence 6 to make the marshmallow roasting scene more vivid?',
      choices: [
        'The sticky, sweet sugar melted into warm chocolate between crisp graham crackers.',
        ['Campfire wood should be purchased from park rangers to prevent the spread of tree pests.', 'Firewood regulations provide park guidelines rather than appetizing sensory imagery.'],
        ['Garner State Park covers over fourteen hundred acres along the Edwards Plateau.', 'Giving park acreage is factual geography that does not enhance the campfire meal scene.'],
        ['Liam\'s family bought their camping equipment at a sporting goods store in San Antonio.', 'Store locations for equipment do not describe the sights, smells, or tastes of roasting marshmallows.'],
      ],
      answer: 0,
      explain: 'Describing warm melted chocolate between graham crackers adds appetizing sensory imagery that enriches the narrative.',
    }),
    mcq({
      standard: 'rla:3.11C', cites: [3, 4],
      stem: 'What is the best way to combine sentence 3 and sentence 4 into one smooth sentence?',
      choices: [
        ['The clear Frio River flowed beside our campsite, and the water was freezing cold, and we swam together on the hot afternoon.', 'Stringing three independent clauses together with "and" creates a repetitive, awkward compound sentence.'],
        'Although the clear Frio River water was freezing cold, swimming in it felt wonderful on that ninety-degree afternoon.',
        ['Because the Frio River water was freezing cold, our family pitched our green canvas tent under the pecan trees.', 'Using "because" falsely claims that cold water was the reason the tent was set up under pecan trees.'],
        ['Flowing beside our campsite, ninety degrees felt cold when the water was swimming with our family in July.', 'The phrasing confuses the subject and illogically claims the ninety degrees was swimming.'],
      ],
      answer: 1,
      explain: 'Combining the river setting with the swimming experience creates a clear, fluent compound sentence.',
    }),
    mcq({
      standard: 'rla:3.11D.ii', cites: [2],
      stem: 'In sentence 2, the verb "set" describes an action in the past. What context clue in sentence 1 confirms that past-tense verbs should be used?',
      choices: [
        ['the proper noun Texas Hill Country', '"Texas Hill Country" is a place name and does not indicate when the events occurred.'],
        ['the noun phrase native pecan trees', '"Native pecan trees" describes flora at the campsite rather than establishing the narrative timeframe.'],
        'the time expression Last July',
        ['the object noun green canvas tent', '"Green canvas tent" describes a shelter prop rather than providing a temporal clue.'],
      ],
      answer: 2,
      explain: 'The time phrase "Last July" at the start of sentence 1 establishes that the camping trip took place in the past.',
    }),
    mcq({
      standard: 'rla:3.11D.iii', cites: [3],
      stem: 'In sentence 3, what kind of noun is "Frio River" and why is it capitalized?',
      choices: [
        ['It is a common noun naming any flowing body of water.', '"Frio River" names a unique, specific landmark rather than acting as a general common noun.'],
        'It is a proper noun naming a specific geographical river.',
        ['It is a collective noun describing a large group of campers.', 'Collective nouns refer to groups of individuals or animals rather than single bodies of water.'],
        ['It is an abstract noun expressing a feeling of quiet wonder.', 'A physical river is a tangible, concrete proper noun rather than an abstract concept or feeling.'],
      ],
      answer: 1,
      explain: '"Frio River" is a proper noun naming a specific river, which is why both words are capitalized.',
    }),
    mcq({
      standard: 'rla:3.11D.v', cites: [7],
      stem: 'In sentence 7, which word is an adverb of time telling when the family gazed at the stars?',
      choices: [
        ['twinkling', '"Twinkling" is an adjective describing the appearance of the stars, not an adverb of time.'],
        ['dark', '"Dark" is a descriptive adjective modifying the noun "sky."'],
        ['stars', '"Stars" is a noun naming the physical objects seen in the sky.'],
        'Later',
      ],
      answer: 3,
      explain: '"Later" tells when the action happened, making it an adverb of time.',
    }),
    mcq({
      standard: 'rla:3.11D.ix', cites: [1],
      stem: 'Why is "Garner State Park" written with capital letters in sentence 1?',
      choices: [
        ['It is the complete subject that performs the main action in the sentence.', 'The subject of the sentence is "my family"; the park name is the object of the preposition "at."'],
        ['It is an adverbial preposition that tells how the campers pitched their tent.', '"Garner State Park" is a proper noun identifying a location, not an adverbial preposition.'],
        ['It is a compound common noun that describes all outdoor camping areas.', 'It identifies a single, specific park rather than functioning as a general common noun.'],
        'It is a proper noun that names a specific, official state park.',
      ],
      answer: 3,
      explain: 'Official names of state parks are proper nouns and must be capitalized.',
    }),
  ],
});
