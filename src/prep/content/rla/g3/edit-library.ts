// Grade 3 editing draft: A student's draft about the school reading challenge.
import { makeSet, mcq } from '../author.ts';

export const EDIT_LIBRARY = makeSet({
  id: 'g3-edit-library',
  grade: 3,
  kind: 'editing',
  title: 'Our School Reading Challenge',
  intro: 'Sofia wrote this article for the school newspaper about a reading challenge. Read her draft and look for any corrections she needs to make. Then answer the questions.',
  passages: [{
    id: 'g3-edit-library-p',
    title: 'Our School Reading Challenge',
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        'In September, our school librarian Mrs. Sanchez announced a fun reading challenge.',
        'Every third-grade student was encouraged to read twenty books before the end of the semester.',
        'Students tracked their daily reading progress on colorful paper bookmarks.',
        'I chose exciting mystery novels, animal adventure stories, and Texas history books.',
        'Every evening, I read quietly in my bedroom for thirty minutes before turning off the lamp.',
        'Mrs. Sanchez placed gold foil star stickers beside our names on the large hallway display banner.',
      ] },
      { kind: 'sentences', sentences: [
        'My reading speed grew faster as I practiced each week throughout the autumn term.',
        'By December, our class had read more than five hundred books together.',
        'Principal Ramos hosted a celebration party in the cafeteria with fresh blueberry muffins.',
        'Reading so many wonderful books helped me discover new authors and expand my vocabulary.',
        'I plan to continue reading new chapter books throughout the upcoming spring semester.',
        'Our proud parents congratulated all the third graders for showing such wonderful reading dedication.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.11B.ii', cites: [3, 4],
      stem: 'Which supporting detail should Sofia add after sentence 4 to explain what made the mystery books so exciting?',
      choices: [
        'Trying to solve the clues before the main detective kept me turning pages late into the evening.',
        ['The school library bookshelf contains twenty different reference encyclopedias about world geography and history.', 'Mentioning reference encyclopedias provides catalog facts rather than explaining why mysteries are exciting.'],
        ['School library books must always be returned within two weeks to avoid overdue fines.', 'Library circulation rules do not describe the thrilling plot of mystery novels.'],
        ['Sofia\'s reading teacher organizes spelling tests in alphabetical order each Friday.', 'Classroom spelling tests are unrelated to Sofia\'s enjoyment of mystery books.'],
      ],
      answer: 0,
      explain: 'Describing how guessing the culprit kept the reader engaged adds a vivid, specific detail about reading mysteries.',
    }),
    mcq({
      standard: 'rla:3.11C', cites: [7, 8],
      stem: 'What is the best way to combine sentence 7 and sentence 8 to celebrate the class achievement?',
      choices: [
        ['Principal Ramos hosted a party with blueberry muffins, and five hundred books were read by students in the cafeteria.', 'Awkward passive phrasing confuses the location where the reading took place.'],
        'To celebrate our class reading more than five hundred books together, Principal Ramos hosted a party with fresh blueberry muffins.',
        ['Because blueberry muffins were served in the cafeteria, our third-grade class read more than five hundred books together.', 'Muffins were a reward for reading, not the original cause that made students read books.'],
        ['Reading five hundred books together, a party was hosted by Principal Ramos eating fresh blueberry muffins in December.', 'The introductory participial phrase dangles and illogically modifies "a party."'],
      ],
      answer: 1,
      explain: 'Connecting the class achievement with the celebration creates a clear, concise sentence.',
    }),
    mcq({
      standard: 'rla:3.11D.i', cites: [3],
      stem: 'In sentence 3, what is the subject of the sentence that agrees with the verb "tracked"?',
      choices: [
        ['the direct object progress', '"Progress" is the direct object receiving the action of tracking, not the subject.'],
        ['the prepositional object bookmarks', '"Bookmarks" is the object of the preposition "on" rather than the subject of the sentence.'],
        'the plural noun Students',
        ['the descriptive adverb daily', '"Daily" is a modifier describing frequency rather than a noun subject.'],
      ],
      answer: 2,
      explain: '"Students" is the plural subject performing the action of tracking their reading progress.',
    }),
    mcq({
      standard: 'rla:3.11D.iv', cites: [6],
      stem: 'Why did Sofia choose the comparative adjective "faster" in sentence 6?',
      choices: [
        ['To compare three different chapter books she checked out from the school library shelves', 'Comparing three or more items requires the superlative form "fastest" rather than "faster."'],
        ['To describe the physical shape and colorful design of her paper bookmark', '"Faster" is an adjective comparing speed rather than describing physical shapes or designs.'],
        ['To explain that her teacher read the mystery novels more quickly than the students', 'The sentence describes Sofia\'s individual growth rather than comparing her to her teacher.'],
        'To compare her improved reading speed during the autumn against her speed when the challenge began',
      ],
      answer: 3,
      explain: '"Faster" is a comparative adjective ending in -er comparing Sofia\'s improved speed to her earlier speed.',
    }),
    mcq({
      standard: 'rla:3.11D.vi', cites: [5],
      stem: 'In sentence 5, which phrase is a prepositional phrase indicating the location where Sofia read?',
      choices: [
        'the phrase in my bedroom',
        ['the phrase Every evening', '"Every evening" tells when the activity occurred, not where.'],
        ['the phrase for thirty minutes', '"For thirty minutes" tells duration of time rather than physical location.'],
        ['the phrase before turning off the lamp', '"Before turning off the lamp" indicates the sequence of events rather than a location.'],
      ],
      answer: 0,
      explain: '"In my bedroom" begins with the preposition "in" and tells the specific place where the reading happened.',
    }),
    mcq({
      standard: 'rla:3.11D.xi', cites: [9],
      stem: 'If Sofia wrote "vocabulary" as "vocabulery," how should she correct the spelling in sentence 9?',
      choices: [
        ['Change vocabulery to vocabulry', 'Omitting the vowel a leaves out a necessary syllable in the word.'],
        ['Change vocabulery to vocabulairy', 'Adding the letter i creates an incorrect spelling that does not match standard English.'],
        'Change vocabulery to vocabulary',
        ['Change vocabulery to vocabularry', 'Doubling the r is incorrect because standard spelling uses a single r before the y.'],
      ],
      answer: 2,
      explain: 'The correct grade-appropriate spelling ends with -ary: "vocabulary."',
    }),
  ],
});
