// Grade 6 editing draft: Lego Robotics.
import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_ROBOTICS = makeSet({
  id: 'g6-edit-robotics',
  grade: 6,
  kind: 'editing',
  title: 'Gears, Code, and Teamwork',
  intro: 'Priya wrote this article for the school website about her robotics team. Read the text and choose the best revisions and corrections. Then answer the questions.',
  passages: [{
    id: 'g6-edit-robotics-p',
    title: 'Gears, Code, and Teamwork',
    genre: 'informational',
    blocks: [
      {
        kind: 'sentences', sentences: [
          'Designing and programming a competitive autonomous robot requires technical knowledge, creative ingenuity, teamwork, and immense patience.',
          'This season, our enthusiastic six-member middle school robotics team built an agile robot to complete ten simulated disaster-relief missions on a four-by-eight-foot game field.',
          'The robot had to navigate across loose sand pits, lift fallen debris beams, and accurately deliver essential emergency medical supplies within a strict two-and-a-half-minute time limit.',
        ]
      },
      {
        kind: 'sentences', sentences: [
          'The collection of gears and motors on our robot were carefully calibrated after dozens of test runs.',
          'During our first practice tournament, our robot\'s color sensor failed to detect the black boundary line; therefore, the machine rolled off the table.',
          'We realized that ambient gym lighting was interfering with the sensor readings.',
          'Our dedicated lead programmer quickly rewrote the optical calibration code, while our mechanical builder constructed a small cardboard light shield around the sensitive sensor.',
        ]
      },
      {
        kind: 'sentences', sentences: [
          'Students who want to join our team must demonstrate either strong problem-solving skills nor a willingness to learn from repeated design failures.',
          'At the crowded regional championship tournament in San Antonio, our robot scored 340 points and proudly earned the prestigious Innovation Project Award.',
          'Our team learned that success in engineering comes from testing ideas, listening to teammates, and never giving up.',
        ]
      },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.10D.iv', cites: [4],
      stem: 'What change, if any, should be made in sentence 4?',
      choices: [
        ['Change **gears** to **geers**', 'Gears is spelled correctly.'],
        'Change **were** to **was**',
        ['Change **carefully** to **careful**', 'Carefully is the correct adverb modifying calibrated.'],
        ['Make no change', 'The subject "collection" is singular and requires "was."'],
      ],
      answer: 1,
      explain: 'The subject of the sentence is "collection" (singular), not the plural nouns in the prepositional phrase ("of gears and motors"). A singular subject takes "was."',
    }),
    mcq({
      standard: 'rla:6.10D.iii', cites: [5],
      stem: 'In sentence 5, how is the conjunctive adverb **therefore** used correctly?',
      choices: [
        'It has a semicolon before it and a comma after it to show cause and effect.',
        ['It should be replaced by "meanwhile" because the two actions happened at once.', 'The fall was a direct result of the sensor failure, not an unrelated concurrent event.'],
        ['It should be placed at the very end of the sentence without any commas.', 'Conjunctive adverbs require proper punctuation.'],
        ['It should be changed to "however" to show a strong contrast in the sentence.', 'The robot fell, which is a consequence, not a contradiction.'],
      ],
      answer: 0,
      explain: '"Therefore" indicates a direct cause-and-effect result. Joining two independent clauses with a semicolon, "therefore," and a comma is grammatically correct.',
    }),
    mcq({
      standard: 'rla:6.10D.vi', cites: [8],
      stem: 'What change should be made in sentence 8 to correct the correlative conjunctions?',
      choices: [
        ['Change **either** to **both** and keep **nor**', 'Both pairs with and, never nor.'],
        ['Change **must** to **ought to have**', 'This alters the meaning of the present requirement.'],
        'Change **nor** to **or**',
        ['Delete **either** and leave **nor** alone', 'Nor cannot be used without neither.'],
      ],
      answer: 2,
      explain: 'The correlative conjunction "either" must pair with "or," not "nor." ("Neither" pairs with "nor.")',
    }),
    inq({
      standard: 'rla:6.10D.v', cites: [8],
      stem: 'Read sentence 8. Choose the relative pronoun that correctly refers to the students.',
      sentence: [
        'Students ',
        { options: ['which', 'who', 'whom', 'whose'], answer: 1 },
        ' want to join our team must demonstrate either strong problem-solving skills or a willingness to learn.',
      ],
      explain: 'Use "who" as the subject relative pronoun referring to people (students).',
    }),
    mcq({
      standard: 'rla:6.10B.ii', cites: [2],
      stem: 'Which specific fact could Priya add after sentence 2 to develop the idea of simulated disaster-relief missions?',
      choices: [
        ['Our team shirts were bright royal blue with silver numbers printed on the front and back.', 'Shirt colors do not develop the topic of disaster-relief game missions.'],
        'For example, one mission required our robot to push a miniature raft across a flooded zone.',
        ['Some middle school students in our district prefer playing sports rather than robotics.', 'Unrelated athletic preferences do not develop the robotics missions.'],
        ['Lego bricks and plastic gears were first invented in Denmark several decades ago.', 'The history of plastic toys is irrelevant to this year\'s game challenges.'],
      ],
      answer: 1,
      explain: 'This sentence provides a vivid, specific example of a disaster-relief mission on the playing field, adding depth and concrete detail.',
    }),
    mcq({
      standard: 'rla:6.10C', cites: [1],
      stem: 'Priya wants to improve her word choice in sentence 1. Which word could best replace **knowledge** to convey a deeper level of scientific skill?',
      choices: [
        'expertise',
        ['stuff', 'Stuff is informal and vague.'],
        ['information', 'Information is general, whereas expertise implies mastery.'],
        ['guesses', 'Engineering relies on precision, not wild guesses.'],
      ],
      answer: 0,
      explain: '"Expertise" denotes high-level skill and specialized knowledge, making the sentence more precise and mature.',
    }),
  ],
});
