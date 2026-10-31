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
        'Standing near the giant rocket made me feel as small as an ant.',
        ['Saturn V rockets require thousands of gallons of liquid fuel stored in metal tanks.', 'This gives technical fuel specs rather than describing personal feelings.'],
        ['My uncle likes to drink cold lemon iced tea while eating his roast beef sandwich.', 'This is an irrelevant detail about food.'],
        ['There are many different kinds of pine trees planted along the parking lot edges.', 'Tree species outside are off topic.'],
      ],
      answer: 0,
      explain: 'Describing feeling "as small as an ant" next to the giant rocket adds an engaging, vivid detail about personal feelings.',
    }),
    mcq({
      standard: 'rla:3.11C', cites: [7, 8],
      stem: 'What is the best way to combine sentence 7 and sentence 8 into one clear sentence?',
      choices: [
        ['After lunch, we watched astronauts inside a pool, and divers wore suits in the water.', 'This is a clunky compound sentence that repeats details.'],
        'After lunch, we watched astronauts in spacesuits practice underwater.',
        ['Because we watched astronauts swimming, divers wore white spacesuits after our lunch.', 'This creates false cause-and-effect.'],
        ['Astronauts practiced underwater while after lunch we watched them wearing their suits.', 'This is awkward and confusing.'],
      ],
      answer: 1,
      explain: 'Combining the ideas smoothly explains what the astronauts wore and what they were practicing in the pool.',
    }),
    mcq({
      standard: 'rla:3.11D.ix', cites: [1],
      stem: 'In sentence 1, why is "Space Center Houston" capitalized?',
      choices: [
        ['It begins the opening sentence of the paragraph.', 'Sentence 1 begins with "Last Saturday."'],
        ['All long words must always have capital letters.', 'Words are not capitalized just because they are long.'],
        'It names a specific place and city.',
        ['It is an action word that tells what people do.', 'It is a proper noun, not an action verb.'],
      ],
      answer: 2,
      explain: 'Space Center Houston is a proper noun that names a specific institution and city, requiring capital letters.',
    }),
    mcq({
      standard: 'rla:3.11D.i', cites: [3],
      stem: 'If Elena changes "we walked" in sentence 3 to describe the singular subject "Uncle Mateo," which present-tense verb correctly agrees with the subject?',
      choices: [
        ['walk', 'Singular third-person subjects take verbs ending in -s.'],
        ['walking', '"Walking" needs a helping verb.'],
        ['are walking', '"Are walking" is plural.'],
        'walks',
      ],
      answer: 3,
      explain: 'Singular third-person subjects take the present-tense verb ending in -s: "Uncle Mateo walks."',
    }),
    mcq({
      standard: 'rla:3.11D.x', cites: [9],
      stem: 'What change, if any, should be made to sentence 9 if Elena writes "we bought astronauts ice cream"?',
      choices: [
        ["Change astronauts to astronauts' to show that many astronauts own the ice cream", 'The ice cream is a style associated with an astronaut, singular possessive.'],
        "Change astronauts to astronaut's",
        ['Change bought to buyed because past tense verbs always end in the letters -ed', '"Buyed" is an incorrect past-tense verb form.'],
        ['Leave astronauts unchanged because the word describes a kind of ice cream', 'An apostrophe is needed to show possession.'],
      ],
      answer: 1,
      explain: 'Use an apostrophe with s (astronaut\'s) to show the singular possessive form.',
    }),
    mcq({
      standard: 'rla:3.11D.xi', cites: [10],
      stem: 'How should Elena correct the misspelling if sentence 10 was written with the word "lern"?',
      choices: [
        'Change "lern" to "learn"',
        ['Change "lern" to "learne"', 'English does not use an e on the end of learn.'],
        ['Change "lern" to "lurn"', 'This is an incorrect spelling.'],
        ['Change "lern" to "larn"', 'This is an incorrect phonetic spelling.'],
      ],
      answer: 0,
      explain: 'The correct spelling is "learn" with the vowel team -ear-.',
    }),
  ],
});
