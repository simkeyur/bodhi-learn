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
        ['"hikers can see preserved dinosaur tracks"', 'This is the complete subject, verb, and direct object clause of the sentence.'],
        ['"during hot summer months"', 'This phrase appears in sentence 4 and indicates time rather than location.'],
        ['"touch the ancient stone"', 'This verb phrase appears in the final sentence of the passage.'],
        '"along the rocky bed"',
      ],
      answer: 3,
      explain: '"Along the rocky bed" begins with the preposition "along" and tells where the action takes place.',
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
        'Acrocanthosaurus left large three-toed tracks, while sauropods made giant round impressions like elephant footprints.',
        ['The enormous three-toed tracks were left by a fierce meat-eating predator, a sauropod track can measure more than three feet across.', 'Joining two independent clauses with only a comma creates a comma splice.'],
        ['Acrocanthosaurus left three-toed tracks and sauropod tracks measured three feet across and looked like footprints.', 'Stringing thoughts together with repeated "and" conjunctions makes the sentence wordy and awkward.'],
        ['Because Acrocanthosaurus left three-toed tracks, sauropods left footprints that resembled giant elephant prints.', 'The conjunction "Because" incorrectly establishes a cause-and-effect relationship between the two species.'],
      ],
      answer: 0,
      explain: 'Using the conjunction "while" directly contrasts the two different dinosaur tracks in a single clear sentence.',
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
      stem: 'Carlos wants to add a detail after sentence 8 about what park rangers explain. Which sentence is best?',
      choices: [
        ['Rangers wear wide-brimmed khaki hats and drive four-wheel-drive trucks across rocky park trails.', 'Describing ranger attire and vehicles does not provide a detail about geology.'],
        ['Camping at state parks is a favorite outdoor hobby for many families in Central Texas.', 'Camping recreation does not develop the idea of teaching geology on guided walks.'],
        'They explain how layers of soft river mud gradually hardened into solid limestone rock.',
        ['Gift shops near state parks frequently sell guidebooks and plastic toy fossils.', 'Commercial gift shops do not explain what park rangers teach during nature walks.'],
      ],
      answer: 2,
      explain: 'Explaining how river mud hardened into limestone provides a relevant scientific detail about the geology topic mentioned in sentence 8.',
    }),
  ],
});
