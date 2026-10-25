// Grade 4 revising and editing: a science and history report about Dinosaur Valley State Park.
// Questions cover prepositional phrases (4.11D.vi), comparative adjectives (4.11D.iv),
// possessive apostrophes (4.11D.x), combining sentences (4.11C), suffix spelling (4.2B.vi),
// and supporting details (4.11B.ii).

import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_DINOSAUR = makeSet({
  id: 'g4-edit-dinosaur',
  grade: 4,
  kind: 'editing',
  title: 'Walking in Dinosaur Tracks',
  intro: 'Carlos wrote this report about a state park in Texas. Read the draft and look for the revisions and corrections he needs to make. Then answer the questions.',
  passages: [{
    id: 'g4-edit-dinosaur-p',
    title: 'Tracks in the Paluxy River',
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        'Located near Glen Rose, Texas, Dinosaur Valley State Park allows visitors to walk in the literal footprints of prehistoric creatures.',
        'Over one hundred million years ago, giant sauropods and theropods stomped across wet lime mud along an ancient sea shore.',
        'Today, hikers can see preserved dinosaur tracks along the rocky bed of the Paluxy River.',
        'During hot summer months when river waters recede, the tracks become much clear and easier to see.',
      ] },
      { kind: 'sentences', sentences: [
        'The enormous three-toed tracks were left by Acrocanthosaurus, a fierce meat-eating predator.',
        'A sauropod track can measure more than three feet across, resembling an elephant footprint.',
        'Scientists have studied the prehistoric animals trackways to understand how fast they ran.',
        'Park rangers conduct guided walks to teach families about geology.',
      ] },
      { kind: 'sentences', sentences: [
        'Seeing these ancient impressions in the riverbed was the most exciting thing on our trip.',
        'It was truely an unforgettable experience to touch the stone where a real dinosaur once walked.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.11D.vi', cites: [3],
      stem: 'Which phrase in sentence 3 is a prepositional phrase showing location?',
      choices: [
        ['"hikers can see"', 'This is the subject and verb phrase.'],
        '"along the rocky bed of the Paluxy River"',
        ['"preserved dinosaur tracks"', 'This is a noun phrase acting as the direct object.'],
        ['"Today"', 'This is a transitional time adverb.'],
      ],
      answer: 1,
      explain: '"Along the rocky bed of the Paluxy River" starts with the preposition "along" and specifies the exact location where tracks are visible.',
    }),
    inq({
      standard: 'rla:4.11D.iv', cites: [4],
      stem: 'Read sentence 4. Choose the correct comparative form of the adjective.',
      sentence: [
        'During hot summer months when river waters recede, the tracks become much ',
        { options: ['clear', 'clearer', 'clearest', 'more clear'], answer: 1 },
        ' and easier to see.',
      ],
      explain: 'When comparing two conditions (summer low water vs. regular water), use the comparative form ending in -er: clearer.',
    }),
    inq({
      standard: 'rla:4.11D.x', cites: [7],
      stem: 'Read sentence 7. Choose the correct possessive form of the noun.',
      sentence: [
        'Scientists have studied the prehistoric ',
        { options: ['animals', 'animals\'', 'animal\'s', 'animals\'s'], answer: 1 },
        ' trackways to understand how fast they ran.',
      ],
      explain: 'The trackways belong to plural animals. For a plural noun ending in s, place the apostrophe after the s: animals\'.',
    }),
    mcq({
      standard: 'rla:4.11C', cites: [5, 6],
      stem: 'What is the most effective way to combine sentences 5 and 6?',
      choices: [
        ['The enormous three-toed tracks were left by a predator, a sauropod track resembles an elephant.', 'This is a comma splice.'],
        'While enormous three-toed tracks were left by the predatory Acrocanthosaurus, round sauropod tracks measured over three feet across like elephant footprints.',
        ['Acrocanthosaurus left tracks and sauropods left tracks too.', 'This is repetitive and drops the key descriptive details.'],
        ['Left by Acrocanthosaurus, an elephant footprint measured three feet.', 'This creates a confusing misplaced modifier.'],
      ],
      answer: 1,
      explain: 'Using the subordinating conjunction "While" effectively contrasts the three-toed predator tracks with the giant, round sauropod tracks in one clear sentence.',
    }),
    inq({
      standard: 'rla:4.2B.vi', cites: [10],
      stem: 'Read sentence 10. Choose the correct spelling of the base word true with suffix -ly.',
      sentence: [
        'It was ',
        { options: ['truely', 'truly', 'trueley', 'truley'], answer: 1 },
        ' an unforgettable experience to touch the stone where a real dinosaur once walked.',
      ],
      explain: 'When adding -ly to true, drop the silent e: truly.',
    }),
    mcq({
      standard: 'rla:4.11B.ii', cites: [8],
      stem: 'Carlos wants to add a relevant detail to sentence 8 about what park rangers explain on their tours. Which sentence best supports the paragraph?',
      choices: [
        'Rangers explain that the tracks were fossilized when minerals gradually turned the ancient mud footprints into solid limestone rock.',
        ['Rangers wear green uniforms and drive white pickup trucks.', 'This describes uniforms rather than geological facts.'],
        ['Camping at state parks is a popular activity during spring break.', 'This is an unrelated general comment about camping.'],
        ['Many children enjoy playing video games about dinosaurs.', 'Video games are completely irrelevant to geology.'],
      ],
      answer: 0,
      explain: 'Explaining how minerals turned mud into solid stone provides an engaging scientific detail that fits the park ranger\'s geology lesson.',
    }),
  ],
});
