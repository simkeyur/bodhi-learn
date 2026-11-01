// Grade 4 revising and editing: a personal narrative about a fourth-grade field trip to San Antonio.
// Questions cover capitalization (4.11D.ix), irregular past tense (4.11D.ii), nouns (4.11D.iii),
// punctuation (4.11D.x), revising sentences (4.11C), and developing ideas (4.11B.ii).

import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_ALAMO = makeSet({
  id: 'g4-edit-alamo',
  grade: 4,
  kind: 'editing',
  title: 'Our Trip to the Alamo',
  intro: 'Diego wrote this narrative about his fourth-grade class trip to San Antonio. Read the draft and look for the revisions and corrections he needs to make. Then answer the questions.',
  passages: [{
    id: 'g4-edit-alamo-p',
    title: 'A Day at the Alamo',
    genre: 'fiction',
    blocks: [
      { kind: 'sentences', sentences: [
        'Last Friday morning, the entire fourth-grade class boarded a yellow charter bus for an unforgettable journey to San Antonio.',
        'We were studying Texas history and were excited to visit the famous battle of the alamo historic site.',
        'During the two-hour ride down Interstate 35, our teacher Mr. Ramirez told us stories about legendary figures like Davy Crockett and Jim Bowie.',
        'When the bus finally parked near Alamo Plaza, everyone gasped at the ancient limestone church.',
      ] },
      { kind: 'sentences', sentences: [
        'Inside the cool, dimly lit shrine, our park guide spoke softly about the brave defenders of 1836.',
        'We seen historical artifacts, including rusted flintlock muskets, silver belt buckles, and preserved letters.',
        'After touring the gardens, we sat under a massive oak tree and ate our lunch.',
        'The tour guide explained that the huge trees were over one hundred years old.',
      ] },
      { kind: 'sentences', sentences: [
        'Before leaving, my friend Liam bought a miniature bronze cannon at the gift shop.',
        '"This was the best field trip of the entire school year," exclaimed Liam___',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.11D.ix', cites: [2],
      stem: 'What is the correct way to capitalize the historic site in sentence 2?',
      choices: [
        ['visit the famous battle of the Alamo historic site', 'Battle is part of the proper name and must be capitalized.'],
        ['visit the famous Battle Of The Alamo historic site', 'Minor words like "of" and "the" inside a title or proper name remain lowercase.'],
        'visit the famous Battle of the Alamo historic site',
        ['visit the famous battle of the alamo Historic Site', 'The name of the battle itself needs capitalization on its major words.'],
      ],
      answer: 2,
      explain: 'Battle of the Alamo is the name of a specific historic event and site, so "Battle" and "Alamo" must be capitalized.',
    }),
    inq({
      standard: 'rla:4.11D.ii', cites: [6],
      stem: 'Read sentence 6. Choose the correct verb to complete the sentence.',
      sentence: [
        'We ',
        { options: ['seen', 'saw', 'seed', 'seeing'], answer: 1 },
        ' historical artifacts, including rusted flintlock muskets, silver belt buckles, and preserved letters.',
      ],
      explain: 'The past tense of the irregular verb see is saw. "Seen" requires a helping verb like have or had.',
    }),
    mcq({
      standard: 'rla:4.11D.iii', cites: [3],
      stem: 'Which word in sentence 3 is a proper noun naming a specific person?',
      choices: [
        ['Interstate 35', 'Interstate 35 is a proper noun naming a highway, not a person.'],
        'Mr. Ramirez',
        ['teacher', 'Teacher is a common noun naming an occupation.'],
        ['figures', 'Figures is a plural common noun.'],
      ],
      answer: 1,
      explain: 'Mr. Ramirez is the capitalized name of a specific person, which makes it a proper noun.',
    }),
    inq({
      standard: 'rla:4.11D.x', cites: [10],
      stem: 'Read sentence 10. Choose the correct punctuation to end Liam\'s exclamation.',
      sentence: [
        '"This was the best field trip of the entire school year," exclaimed Liam',
        { options: ['!', '!"', '.', '."'], answer: 0 },
      ],
      explain: 'The spoken dialogue ends before the speech tag ("exclaimed Liam"), so the sentence itself concludes with an exclamation point after Liam.',
    }),
    mcq({
      standard: 'rla:4.11C', cites: [7, 8],
      stem: 'What is the best way to combine sentences 7 and 8?',
      choices: [
        ['After touring the gardens, we sat under a massive oak tree and ate lunch, the huge trees were over a century old.', 'Joining two complete sentences with only a comma creates an incorrect comma splice.'],
        ['Our tour guide explained that huge trees were over a hundred years old and we sat under an oak tree and ate lunch.', 'Connecting clauses with repeated "and" conjunctions makes the sentence repetitious and wordy.'],
        ['While eating our lunch under a massive oak tree, the gardens were toured after our guide explained their long history.', 'The introductory dependent clause creates a confusing dangling modifier.'],
        'After touring the gardens, we ate lunch under a massive oak tree that our guide said was over a century old.',
      ],
      answer: 3,
      explain: 'Combining the ideas into one smooth sentence with a relative clause avoids repetition and comma splices.',
    }),
    mcq({
      standard: 'rla:4.11B.ii', cites: [5],
      stem: 'Diego wants to add a sensory detail after sentence 5. Which sentence best accomplishes this?',
      choices: [
        'The cool stone walls felt smooth, and visitors walked quietly in reverence.',
        ['San Antonio is located about eighty miles southwest of Austin on Interstate 35.', 'This gives a geographical location rather than describing sensory details.'],
        ['The gift shop sells collectible postcards, keychains, and miniature toy cannons.', 'The gift shop details appear later in the narrative and are not sensory descriptions of the shrine.'],
        ['Many schools across Texas organize annual bus field trips to visit historic landmarks.', 'This is a general statement about school field trips rather than a sensory description.'],
      ],
      answer: 0,
      explain: 'Describing how the cool stone walls felt and the quiet movement of visitors adds vivid sensory imagery to the description of the shrine.',
    }),
  ],
});
