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
        ['visit the famous battle of the Alamo historic location in town.', 'All major words in the historic battle name must be capitalized.'],
        'visit the famous Battle of the Alamo historic site.',
        ['visit the famous Battle Of The Alamo historic landmark in town.', 'Short prepositions and articles like "of" and "the" inside a title stay lowercase.'],
        ['visit the famous battle of the alamo Historic park location.', 'The name of the battle itself needs capitals on major words.'],
      ],
      answer: 1,
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
        ['the school teacher', 'Teacher is a common noun.'],
        ['the yellow bus', 'Bus is a common noun.'],
        'Mr. Ramirez',
        ['Texas stories', 'Stories is a plural common noun.'],
      ],
      answer: 2,
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
        ['After touring the gardens, we sat under a massive oak tree, the trees were over one hundred years old.', 'This creates a comma splice.'],
        ['We ate our lunch and toured the gardens and the large oak tree was more than a hundred years old.', 'This strings too many unrelated thoughts together with "and."'],
        ['Eating our lunch under an oak tree, our tour guide talked about gardens that were very old.', 'This has a dangling modifier making it sound like the tour guide was eating.'],
        'We ate lunch under a century-old oak tree in the garden.',
      ],
      answer: 3,
      explain: 'Combining the ideas into a single clear sentence ("We ate lunch under a century-old oak tree in the garden") avoids repetition and comma splices.',
    }),
    mcq({
      standard: 'rla:4.11B.ii', cites: [5],
      stem: 'Diego wants to add a sensory detail after sentence 5. Which sentence best accomplishes this?',
      choices: [
        'The cool stone felt smooth, and visitors spoke in whispers.',
        ['San Antonio is located approximately eighty miles southwest of Austin on Interstate 35.', 'This is a geographical fact, not a sensory description of the shrine.'],
        ['Gift shops at historical monuments frequently sell souvenirs like keychains and postcards.', 'The gift shop comes later in the narrative.'],
        ['Many students prefer flying on airplanes rather than riding along on yellow school buses.', 'This is an irrelevant opinion about transportation.'],
      ],
      answer: 0,
      explain: 'Describing how the cool stone felt and the quiet whispers adds vivid sensory details to the description of the shrine.',
    }),
  ],
});
