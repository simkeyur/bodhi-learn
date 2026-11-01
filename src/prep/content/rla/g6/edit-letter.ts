// Grade 6 editing draft: Bike lane formal letter.
import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_LETTER = makeSet({
  id: 'g6-edit-letter',
  grade: 6,
  kind: 'editing',
  title: 'A Safer Route to School',
  intro: 'Sophia wrote this formal letter to the city public works director. Read the letter and choose the best answers to the questions.',
  passages: [{
    id: 'g6-edit-letter-p',
    title: 'A Safer Route to School',
    genre: 'correspondence',
    blocks: [
      { kind: 'note', text: 'Dear Director Alvarez,' },
      {
        kind: 'sentences', sentences: [
          'I am writing this formal letter on behalf of the student council at Oak Creek Middle School to urgently request the installation of a protected, bollard-separated bicycle lane along Elm Street.',
          'Over two hundred middle school students currently walk, skate, or ride their bicycles to and from school each morning along this busy route.',
          'However, Elm Street has no dedicated bicycle shoulder, and speeding motor vehicles creates dangerous conditions for young riders navigating morning traffic.',
        ]
      },
      {
        kind: 'sentences', sentences: [
          'Last month, our student council conducted a comprehensive campus-wide neighborhood transportation survey among local families and teachers.',
          'Over seventy percent of surveyed parents said they would enthusiastically encourage their children to bike to school if a safe, barrier-separated lane existed along Elm Street.',
          'Furthermore, increasing daily bicycle ridership would significantly reduce morning vehicle congestion, noise pollution, and exhaust emissions around our campus drop-off zones.',
        ]
      },
      {
        kind: 'sentences', sentences: [
          'The city of Austin recently received a federal infrastructure grant from the Safe Routes to School Program to upgrade local school neighborhoods.',
          'Using a small portion of these designated municipal funds for Elm Street would improve pedestrian and cyclist safety for generations of future middle school students.',
          'Thank you for your tireless dedication to public safety, and thank you for taking the time to carefully consider our student proposal.',
        ]
      },
      { kind: 'note', text: 'Sincerely,\nSophia Chen\nStudent Council President' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.10D.ii', cites: [3],
      stem: 'What change should be made in sentence 3 to correct subject-verb agreement?',
      choices: [
        ['Change **has** to **have**', 'Elm Street is singular and correctly takes has.'],
        'Change **creates** to **create**',
        ['Change **dangerous** to **dangerously**', 'Dangerous is the correct adjective modifying conditions.'],
        ['Change **dedicated** to **dedicate**', 'Dedicated is the correct adjective modifying shoulder.'],
      ],
      answer: 1,
      explain: 'The subject in the second clause is "speeding motor vehicles" (plural), which requires the plural verb "create," not "creates."',
    }),
    inq({
      standard: 'rla:6.10D.vii', cites: [7],
      stem: 'Read sentence 7. Choose the correct capitalization for the name of the municipal entity.',
      sentence: [
        'The ',
        { options: ['city of Austin', 'City of Austin', 'City Of Austin', 'city of austin'], answer: 1 },
        ' recently received a federal grant from the Safe Routes to School Program.',
      ],
      explain: 'When referring to the official municipal government as an entity, "City of Austin" is capitalized as a proper noun.',
    }),
    mcq({
      standard: 'rla:6.10D.iii', cites: [6],
      stem: 'In sentence 6, how does the word **Furthermore** strengthen the letter\'s argument?',
      choices: [
        'It introduces another positive benefit of the proposed bike lane.',
        ['It apologizes to Director Alvarez for taking up his valuable time.', 'The word introduces a strong new argument, not an apology.'],
        ['It indicates that the student council opposes cycling to campus.', 'The student council strongly supports bicycle riding.'],
        ['It explains that construction will require several years to finish.', 'Project timelines are not discussed in sentence 6.'],
      ],
      answer: 0,
      explain: '"Furthermore" signals an added supporting argument: beyond student safety, the bike lane reduces traffic congestion and air pollution.',
    }),
    mcq({
      standard: 'rla:6.10D.viii', cites: [4],
      stem: 'What is the correct punctuation for sentence 4?',
      choices: [
        'Last month, our student council conducted a transportation survey.',
        ['Last month our student council, conducted an extensive safety survey.', 'A comma should not separate the subject from the verb.'],
        ['Last month; our student council conducted a transportation survey.', 'A semicolon cannot follow a simple prepositional time phrase.'],
        ['Last, month our student council conducted a transportation survey.', 'Last month is a unified time phrase.'],
      ],
      answer: 0,
      explain: 'An introductory time phrase ("Last month,") should be followed by a comma before the main clause.',
    }),
    inq({
      standard: 'rla:6.10D.ix', cites: [5],
      stem: 'Read sentence 5. Choose the correct homophone to complete the thought.',
      sentence: [
        'Over seventy percent of parents said ',
        { options: ['they\'re', 'there', 'their', 'they'], answer: 3 },
        ' would encourage their children to bike to school if a safe lane existed.',
      ],
      explain: 'The subject pronoun "they" is required before the modal verb "would encourage."',
    }),
    mcq({
      standard: 'rla:6.10B.i', cites: [1],
      stem: 'Which opening sentence could Sophia use to state the purpose of her letter even more clearly?',
      choices: [
        ['I am writing this letter because I enjoy riding my bicycle on sunny afternoons after classes.', 'This personal hobby statement is too informal for a municipal proposal.'],
        ['Some drivers in our neighborhood drive too fast and honk their horns at students every morning.', 'Complaining casually about drivers does not state a clear municipal request.'],
        'On behalf of our student council, I am petitioning the city for a bike lane on Elm Street.',
        ['Elm Street has tall pecan trees that drop heavy branches and leaves during autumn storms.', 'Pecan tree leaves are irrelevant to traffic safety.'],
      ],
      answer: 2,
      explain: 'This revision establishes a formal, respectful tone and immediately articulates the official organizational purpose of the letter.',
    }),
  ],
});
