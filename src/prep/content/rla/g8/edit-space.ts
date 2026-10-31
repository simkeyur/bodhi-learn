// Grade 8 editing draft: Voyager: The Golden Record into Deep Space
import { makeSet, mcq } from '../author.ts';

export const EDIT_SPACE = makeSet({
  id: 'g8-edit-space',
  grade: 8,
  kind: 'editing',
  title: 'Voyager: The Golden Record into Deep Space',
  intro: 'Read the draft and choose the best answer to each question.',
  passages: [{
    id: 'g8-edit-space-p',
    title: 'Voyager: The Golden Record into Deep Space',
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        'In 1977, NASA launched twin robotic probes named Voyager 1 and Voyager 2 to explore the outer gas giant planets of our solar system.',
        'Scientists recognized that after completing their planetary flybys, the spacecraft would eventually drift into interstellar space forever.',
        'Astronomer Carl Sagan chaired a committee to assemble a cultural time capsule for any extraterrestrial civilization that might discover the probes.',
      ] },
      { kind: 'sentences', sentences: [
        "The result was the Golden Record, a twelve-inch gold-plated copper phonograph disc mounted to each probe's exterior.",
        'Encrypted on the record are 115 analog images depicting terrestrial life, mathematical formulas, and scientific diagrams.',
        'The audio track contains greetings spoken in fifty-five human languages, natural sounds such as thunder and whale songs, and ninety minutes of diverse musical compositions.',
        'Because space is a near-perfect vacuum, the records will remain readable for over a billion years.',
      ] },
      { kind: 'sentences', sentences: [
        "The team wanted to represent humanity's collective spirit, they included works by Bach, Beethoven, and Blind Willie Johnson.",
        'A message was also inscribed by President Jimmy Carter expressing our hope to join a galactic community.',
        'Voyager 1 crossed into interstellar space in 2012; its golden messenger carries our story quietly across the cosmic ocean.',
      ] },
      { kind: 'sentences', sentences: [
        'As it travels past the heliosphere, the Golden Record serves as an eternal monument to human curiosity, creativity, and the yearning for cosmic fellowship.',
        'Future generations can look up at the night sky knowing that our voice echoes among the distant stars.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:8.10B.i', cites: [1, 2, 3],
      stem: 'Which introductory sentence could best be added before sentence 1 to establish a compelling thesis for the draft?',
      choices: [
        ['Many rockets are built by private commercial corporations in Florida.', 'This introduces private rocket corporations, which is irrelevant to Voyager\'s 1977 mission.'],
        ['Phonograph records were invented by Thomas Edison in the nineteenth century.', 'Edison\'s invention history distracts from Voyager\'s space mission.'],
        'Humanity\'s greatest message was launched aboard the Voyager probes.',
        ['Voyager 2 visited Uranus and Neptune before its scientific cameras ceased.', 'This provides a narrow operational detail rather than an engaging thesis.'],
      ],
      answer: 2,
      explain: 'This sentence provides an engaging hook and establishes the controlling idea of sending a message into interstellar space.',
    }),
    mcq({
      standard: 'rla:8.10B.ii', cites: [6],
      stem: 'The writer wants to add a specific example reflecting depth of thought after sentence 6. Which sentence best accomplishes this goal?',
      choices: [
        'For example, the music includes Navajo chants and Chuck Berry songs.',
        ['Many scientists bought commercial vinyl albums at local shops to test needles.', 'Testing commercial vinyl records does not show depth of thought about the Golden Record\'s cultural diversity.'],
        ['Cassette tapes and compact discs were not popular during the late 1970s.', 'This discusses obsolete recording media rather than the contents of the record.'],
        ['Microphones were placed in recording studios with thick soundproof walls.', 'Microphone placement is an irrelevant technical detail.'],
      ],
      answer: 0,
      explain: 'Naming specific culturally diverse musical selections provides concrete evidence and depth of thought.',
    }),
    mcq({
      standard: 'rla:8.10C', cites: [7],
      stem: 'What is the most effective revision of sentence 7 to improve sentence variety and sophisticated style?',
      choices: [
        ['Because of space being a vacuum, the records will stay readable for years.', 'This phrasing is informal and grammatically clumsy.'],
        ['Space is a vacuum, and so the records will last a billion years in flight.', 'This uses a simplistic compound sentence structure.'],
        ['A billion years is how long records will be readable because space has no air.', 'This creates an awkward passive opening.'],
        'Shielded in deep space, the records will survive for a billion years.',
      ],
      answer: 3,
      explain: 'Beginning with a participial phrase enhances sentence variety and maintains an elevated style.',
    }),
    mcq({
      standard: 'rla:8.10D.i', cites: [8],
      stem: 'Sentence 8 contains a comma splice. How should it be correctly edited?',
      choices: [
        ['The team wanted to represent humanity\'s collective spirit, and they, included works by Bach and Beethoven.', 'The comma after \'they\' incorrectly separates the subject from the verb.'],
        'Because the team wanted to represent humanity, they included works by Bach, Beethoven, and Blind Willie.',
        ['The team wanting to represent humanity\'s collective spirit, included works by Bach, Beethoven, and Blind Willie.', 'This creates an awkward fragmented participle structure.'],
        ['The team wanted to represent humanity\'s spirit so therefore they included works by Bach and Blind Willie Johnson.', 'Using \'so therefore\' together is redundant and lacks necessary punctuation.'],
      ],
      answer: 1,
      explain: 'Turning the first independent clause into a subordinate clause starting with \'Because\' resolves the comma splice cleanly.',
    }),
    mcq({
      standard: 'rla:8.10D.ii', cites: [9],
      stem: 'Sentence 9 is written in the passive voice. How can it best be revised into the active voice?',
      choices: [
        'President Jimmy Carter also inscribed an eloquent message of galactic hope.',
        ['A message had been inscribed by President Carter expressing hope for galactic peace.', 'This remains in the passive voice using past perfect tense.'],
        ['President Jimmy Carter, by him a message was inscribed expressing our galactic hope.', 'This is convoluted and remains passive.'],
        ['Expressing our hope for galactic peace, a message was inscribed by President Carter.', 'The main clause remains passive with a dangling modifier.'],
      ],
      answer: 0,
      explain: 'Making President Jimmy Carter the subject of the active verb \'inscribed\' produces direct, energetic writing.',
    }),
    mcq({
      standard: 'rla:8.10D.vi', cites: [10],
      stem: 'How should sentence 10 be punctuated to separate its independent clauses correctly?',
      choices: [
        ['Voyager 1 crossed into interstellar space in 2012, its golden messenger carries our story quietly across space.', 'A comma alone between two independent clauses creates a comma splice.'],
        'Voyager 1 entered deep space in 2012; its messenger carries our story across the ocean.',
        ['Voyager 1 crossed into interstellar space in 2012: its golden messenger, carries our story quietly across space.', 'A comma after \'messenger\' incorrectly separates the subject and verb.'],
        ['Voyager 1 crossed into interstellar space in 2012 (its golden messenger) carries our story quietly across space.', 'Parentheses around the subject create a fragmented clause.'],
      ],
      answer: 1,
      explain: 'The semicolon correctly joins two closely related independent clauses without a coordinating conjunction.',
    }),
  ],
});
