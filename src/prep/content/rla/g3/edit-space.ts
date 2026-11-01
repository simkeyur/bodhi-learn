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
      stem: 'Elena wants to add a descriptive sentence after sentence 4 to explain how the Saturn V rocket made her feel. Which sentence should be added?',
      choices: [
        'Standing beneath the towering metal stages made me feel as small as an ant.',
        ['Saturn V rockets used thousands of gallons of liquid fuel during launches.', 'Mentioning rocket fuel provides technical history rather than personal feelings.'],
        ['Houston is located about fifty miles inland from the Gulf of Mexico.', 'Giving Houston\'s distance from the coast is off-topic geographical information.'],
        ['Many visiting families take photographs outside near the crowded museum parking lot entrance.', 'Describing families in the parking lot does not explain how Elena felt standing near the rocket.'],
      ],
      answer: 0,
      explain: 'Describing feeling "as small as an ant" next to the giant rocket adds an engaging, vivid detail about personal feelings.',
    }),
    mcq({
      standard: 'rla:3.11C', cites: [7, 8],
      stem: 'What is the best way to combine sentence 7 and sentence 8 into one clear sentence?',
      choices: [
        ['After lunch, we watched real astronauts practicing inside a pool, and divers wore pressurized spacesuits to float.', 'This sentence repeats details clunkily across two independent clauses connected by "and."'],
        'After lunch, we watched real astronauts wearing pressurized spacesuits practice spacewalks underwater.',
        ['Because astronauts wore pressurized spacesuits beneath the water, we watched them practice after our lunch.', 'Using "because" creates an inaccurate cause-and-effect relationship between lunch and suits.'],
        ['Wearing pressurized spacesuits, lunch was over when astronauts practiced floating weightlessly inside the pool.', 'The opening modifying phrase illogically describes "lunch" instead of the astronauts.'],
      ],
      answer: 1,
      explain: 'Combining the ideas smoothly explains what the astronauts wore and what they were practicing in the pool.',
    }),
    mcq({
      standard: 'rla:3.11D.ix', cites: [1],
      stem: 'In sentence 1, why is "Space Center Houston" written with capital letters?',
      choices: [
        ['It appears at the very beginning of the opening introductory sentence.', 'Sentence 1 begins with the words "Last Saturday," so this phrase does not start the sentence.'],
        ['It is a plural compound noun that describes many different science buildings.', 'Proper nouns are capitalized because they name specific entities, not because of plurality.'],
        'It is a proper noun that names a specific educational institution and city.',
        ['It is a descriptive phrase that tells how astronauts travel into outer space.', 'The phrase is a proper noun identifying a location, not an action verb.'],
      ],
      answer: 2,
      explain: 'Space Center Houston is a proper noun that names a specific institution and city, requiring capital letters.',
    }),
    mcq({
      standard: 'rla:3.11D.i', cites: [3],
      stem: 'If Elena changes "we walked" in sentence 3 to describe the singular subject "Uncle Mateo," which present-tense verb agrees with the subject?',
      choices: [
        ['Uncle Mateo walk', 'Singular third-person subjects take the verb form ending in -s ("walks").'],
        ['Uncle Mateo are walking', '"Are walking" uses a plural auxiliary verb that does not agree with a singular subject.'],
        ['Uncle Mateo walking', 'The present participle "walking" cannot stand alone as a complete predicate without a helping verb.'],
        'Uncle Mateo walks',
      ],
      answer: 3,
      explain: 'Singular third-person subjects take the present-tense verb ending in -s: "Uncle Mateo walks."',
    }),
    mcq({
      standard: 'rla:3.11D.x', cites: [9],
      stem: 'Elena wants to show that the freeze-dried ice cream belongs to one astronaut. Which phrase correctly shows the singular possessive?',
      choices: [
        ['bought the astronauts\' ice cream', 'Placing the apostrophe after the s forms a plural possessive referring to multiple astronauts.'],
        'bought the astronaut\'s ice cream',
        ['bought the astronauts ice cream', '"Astronauts" is a plural noun and needs an apostrophe to indicate possession.'],
        ['bought the astronaut ice cream', '"Astronaut" is a singular noun that needs an apostrophe and s to show possession.'],
      ],
      answer: 1,
      explain: 'Use an apostrophe with s (astronaut\'s) to show the singular possessive form.',
    }),
    mcq({
      standard: 'rla:3.11D.xi', cites: [10],
      stem: 'How should Elena correct the spelling of the underlined word if sentence 10 was written: "to lern more about distant planets"?',
      choices: [
        'Change lern to learn',
        ['Change lern to lurn', '"Lurn" is an incorrect phonetic spelling that does not use the standard vowel team -ear-.'],
        ['Change lern to learne', 'Modern English spelling does not add a silent e to the end of the word "learn."'],
        ['Change lern to larn', '"Larn" uses an incorrect vowel sound and is not the standard spelling.'],
      ],
      answer: 0,
      explain: 'The correct spelling is "learn" with the vowel team -ear-.',
    }),
  ],
});
