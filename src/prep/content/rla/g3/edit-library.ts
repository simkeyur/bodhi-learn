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
        'Guessing the secret culprit kept me turning pages.',
        ['The library carpet is dark blue with gold stripes running between the shelves.', 'Carpet color does not explain why the mysteries were exciting.'],
        ['My teacher wears wire reading glasses when grading spelling tests on Friday.', 'Teacher glasses are off topic.'],
        ['Bookmarks can be made from folded index cards decorated with colored markers.', 'Bookmark crafting is not relevant to story excitement.'],
      ],
      answer: 0,
      explain: 'Describing how guessing the culprit kept the reader engaged adds a vivid, specific detail about reading mysteries.',
    }),
    mcq({
      standard: 'rla:3.11C', cites: [7, 8],
      stem: 'What is the best revision of sentence 8 to include the celebratory achievement from sentence 7?',
      choices: [
        ['Principal Ramos hosted a cafeteria party, and muffins were eaten because of books.', 'Passive phrasing is wordy and awkward.'],
        'Principal Ramos gave a muffin party to celebrate our five hundred books.',
        ['Because of blueberry muffins, our third-grade class read five hundred books easily.', 'Muffins did not cause the reading; they rewarded it.'],
        ['Party hosted in cafeteria by Principal Ramos reading five hundred books all alone.', 'This makes it sound like the principal read all the books alone.'],
      ],
      answer: 1,
      explain: 'Connecting the class achievement with the celebration creates a clear, concise sentence.',
    }),
    mcq({
      standard: 'rla:3.11D.i', cites: [3],
      stem: 'In sentence 3, what is the subject of the sentence, and why does the past-tense verb "tracked" agree with it?',
      choices: [
        ['"bookmarks" is the noun acting as the subject of the sentence', '"Bookmarks" is the object of the preposition "on."'],
        ['"progress" is the direct object noun acting as the subject', '"Progress" is the direct object.'],
        '"Students" is the plural subject.',
        ['"daily" is an adverb describing how the students tracked', '"Daily" is an adverb.'],
      ],
      answer: 2,
      explain: '"Students" is the plural subject performing the action of tracking their reading progress.',
    }),
    mcq({
      standard: 'rla:3.11D.iv', cites: [6],
      stem: 'Why did Sofia use the comparative adjective "faster" in sentence 6?',
      choices: [
        ['To compare three different chapter books checked out from the library', 'The sentence compares reading speed over time.'],
        ['To describe the bright rainbow colors of the paper bookmarks used', 'Speed is not a color.'],
        ['To show that the author was feeling tired after completing reading', 'Comparative -er indicates improvement in speed.'],
        'To compare her speed to earlier weeks.',
      ],
      answer: 3,
      explain: '"Faster" is a comparative adjective ending in -er comparing Sofia\'s improved speed to her earlier speed.',
    }),
    mcq({
      standard: 'rla:3.11D.vi', cites: [5],
      stem: 'In sentence 5, which phrase is a prepositional phrase indicating the location where reading occurred?',
      choices: [
        '"in my bedroom"',
        ['"Every evening"', 'This is a time phrase.'],
        ['"for thirty minutes"', 'This tells how long the reading lasted.'],
        ['"turning off the lamp"', 'This is an action phrase.'],
      ],
      answer: 0,
      explain: '"In my bedroom" begins with the preposition "in" and tells the specific place where the reading happened.',
    }),
    mcq({
      standard: 'rla:3.11D.xi', cites: [9],
      stem: 'If Sofia wrote "vocabulary" as "vocabulery," what change should be made to sentence 9?',
      choices: [
        ['Change "vocabulery" to "vocabulry"', 'This misspells the word by omitting the syllable.'],
        ['Change "vocabulery" to "vocabulairy"', 'This introduces an incorrect vowel team.'],
        'Change "vocabulery" to "vocabulary"',
        ['Change "vocabulery" to "vocabularry"', 'Do not double the r.'],
      ],
      answer: 2,
      explain: 'The correct grade-appropriate spelling ends with -ary: "vocabulary."',
    }),
  ],
});
