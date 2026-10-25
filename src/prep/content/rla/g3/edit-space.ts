// Grade 3 editing draft: A student's draft about visiting Space Center Houston.
import { makeSet, mcq } from '../author.ts';

export const EDIT_SPACE = makeSet({
  id: 'g3-edit-space',
  grade: 3,
  kind: 'editing',
  title: 'My Trip to Space Center Houston',
  intro: 'Elena wrote this personal narrative about her family field trip to Houston. Read the draft and look for any corrections she needs to make. Then answer the questions.',
  passages: [{
    id: 'g3-edit-space-p',
    title: 'My Trip to Space Center Houston',
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        'Last Saturday, my uncle and I visited Space Center Houston for an exciting weekend field trip.',
        'It was the most memorable learning adventure of my entire third-grade school year.',
        'First, we walked inside a massive climate-controlled hangar to see a real Saturn V rocket.',
        'The giant rocket was longer than an entire football field and had five huge thruster engines at the base.',
        'Next, we touched a smooth black moon rock that Apollo astronauts brought back to Earth.',
      ] },
      { kind: 'sentences', sentences: [
        'Uncle Mateo explained that the volcanic lunar sample was more than three billion years old.',
        'After lunch, we watched real astronauts practicing spacewalks inside a giant underwater training pool.',
        'The divers wore heavy pressurized spacesuits to float weightlessly beneath the clear water.',
        'Finally, we bought sweet freeze-dried astronaut ice cream at the gift shop before driving home.',
        'I hope to visit the space center again soon to learn more about distant planets in our solar system.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.11B.ii', cites: [3, 4],
      stem: 'Elena wants to add a descriptive detail after sentence 4 to explain how the Saturn V rocket made visitors feel. Which sentence should be added?',
      choices: [
        'Standing next to such an enormous machine made me feel as small as a tiny garden ant.',
        ['Saturn V rockets require thousands of gallons of specialized rocket fuel.', 'This gives technical fuel specs rather than describing how it made visitors feel.'],
        ['My uncle likes to drink cold lemon iced tea with his sandwich.', 'This is an irrelevant detail about a beverage.'],
        ['There are many different kinds of pine trees growing outside the building.', 'Tree species are completely off topic.'],
      ],
      answer: 0,
      explain: 'Describing feeling "as small as a tiny garden ant" next to the giant rocket adds an engaging, vivid detail about personal reactions.',
    }),
    mcq({
      standard: 'rla:3.11C', cites: [7, 8],
      stem: 'What is the best way to combine sentence 7 and sentence 8 into one clear sentence?',
      choices: [
        ['After lunch, we watched astronauts in a pool, and divers wore spacesuits beneath the water.', 'This is a clunky compound sentence that repeats details.'],
        'After lunch, we watched astronauts wearing heavy pressurized spacesuits practice spacewalks inside a giant underwater pool.',
        ['Because we watched astronauts, the divers wore heavy white spacesuits after lunch.', 'This changes the meaning and creates false cause-and-effect.'],
        ['Underwater pool astronauts practiced while after lunch we watched them wearing suits.', 'This is awkward and grammatically confusing.'],
      ],
      answer: 1,
      explain: 'Combining the ideas into one smooth sentence clearly explains who was in the pool, what they wore, and what they were practicing.',
    }),
    mcq({
      standard: 'rla:3.11D.ix', cites: [1],
      stem: 'In sentence 1, why is "Space Center Houston" capitalized?',
      choices: [
        ['It is the first word in the sentence.', 'Sentence 1 begins with "Last Saturday."'],
        'It is a proper noun that names a specific educational facility and city.',
        ['All long compound words must be capitalized.', 'Common words are not capitalized just because they are long.'],
        ['It is an adjective describing a vehicle.', 'It is a proper noun naming a specific museum facility.'],
      ],
      answer: 1,
      explain: 'Space Center Houston is the official proper name of a specific institution and city, so all words must be capitalized.',
    }),
    mcq({
      standard: 'rla:3.11D.i', cites: [3],
      stem: 'If Elena changes "we walked" in sentence 3 to describe the singular subject "Uncle Mateo," which present-tense verb correctly agrees with the subject?',
      choices: [
        ['walk', 'Singular third-person subjects take verbs ending in -s.'],
        'walks',
        ['walking', '"Walking" needs an auxiliary helping verb.'],
        ['are walking', '"Are walking" is plural and does not agree with singular Uncle Mateo.'],
      ],
      answer: 1,
      explain: 'Singular third-person subjects (Uncle Mateo / he) take the present-tense verb ending in -s: "Uncle Mateo walks."',
    }),
    mcq({
      standard: 'rla:3.11D.x', cites: [9],
      stem: 'What change, if any, should be made to sentence 9 if Elena writes "we bought astronauts ice cream"?',
      choices: [
        ["Change astronauts to astronauts'", "The ice cream is a single product style, not plural possessive."],
        "Change astronauts to astronaut's to show that the ice cream is associated with an astronaut.",
        ['Change "bought" to "buyed"', '"Buyed" is an incorrect past-tense verb form.'],
        ['No change should be made.', 'Without an apostrophe, astronauts is just a plural noun without showing possession.'],
      ],
      answer: 1,
      explain: 'Use an apostrophe with s to show the possessive form indicating ice cream associated with an astronaut.',
    }),
    mcq({
      standard: 'rla:3.11D.xi', cites: [10],
      stem: 'How should Elena correct the misspelling if sentence 10 was written with the word "lern"?',
      choices: [
        ['Change "lern" to "lurn"', 'This is another misspelling.'],
        ['Change "lern" to "learne"', 'English does not use an e on the end of learn.'],
        'Change "lern" to "learn"',
        ['Change "lern" to "larn"', 'This is an incorrect phonetic spelling.'],
      ],
      answer: 2,
      explain: 'The correct grade-appropriate spelling of the base verb is "learn" with the vowel team -ear-.',
    }),
  ],
});
