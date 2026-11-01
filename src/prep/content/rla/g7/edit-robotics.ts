// Grade 7 editing draft: Middle School Robotics Team.
import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_ROBOTICS = makeSet({
  id: 'g7-edit-robotics',
  grade: 7,
  kind: 'editing',
  title: 'Engineering the Rover',
  intro: 'Marcus wrote this report about his robotics team\'s preparation for the regional championship. Read Marcus\'s report and look for any revisions and corrections he needs to make. Then answer the questions.',
  passages: [{
    id: 'g7-edit-robotics-p',
    title: 'Engineering the Rover',
    genre: 'informational',
    blocks: [
      {
        kind: 'sentences', sentences: [
          'For six grueling months, the Oakridge Middle School robotics squad spent countless after-school hours preparing intensely for the regional FIRST Lego League championship tournament.',
          'Our engineering challenge was to design and construct an autonomous rover capable of navigating treacherous simulated planetary terrain.',
          'The rigorous competition arena featured jagged inclines, loose sand pits, and scattered rocky obstacles.',
        ]
      },
      {
        kind: 'sentences', sentences: [
          'Initially, our prototype rover struggled severely with mechanical traction on steep wooden ramps.',
          'Its smooth rubber tires slipped continuously against the polished plywood surface.',
          'The team redesigned the entire drivetrain by installing high-torque planetary gearboxes and heavy-duty knobby treaded tracks.',
          'We also mounted sensitive ultrasonic rangefinders and dual high-resolution optical cameras to detect unexpected arena obstacles.',
          'Our lead programmer, Lucas, wrote over four hundred lines of Python code to calibrate real-time navigation algorithms.',
        ]
      },
      {
        kind: 'sentences', sentences: [
          'During the decisive championship round, our rover executed its complex navigation tasks with absolute precision.',
          'The machine successfully retrieved all geological specimen canisters and returned safely to home base with two seconds remaining.',
          'Winning the championship trophy taught us that perseverance, technical collaboration, and rigorous iterative testing are the true hallmarks of engineering excellence.',
          'Our team looks forward to representing our school district at the upcoming state robotics championship in Dallas.',
        ]
      },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.10B.i', cites: [5, 6],
      stem: 'Marcus wants to improve the coherence between sentences 5 and 6. Which sentence could be added between them?',
      choices: [
        ['Many other middle school teams wore matching green t-shirts in the hall.', 'This introduces a social detail unrelated to drivetrain traction.'],
        'We realized a total overhaul of the wheels was necessary.',
        ['Lego bricks are made from durable acrylonitrile butadiene plastic.', 'This adds chemical manufacturing trivia about Legos.'],
        ['Our coach brought blueberry muffins for Saturday practice sessions.', 'This mentions team snacks, which disrupts the engineering focus.'],
      ],
      answer: 1,
      explain: 'This transition articulates the team\'s problem-solving insight that led directly from observing slipping tires to redesigning the drivetrain in sentence 6.',
    }),
    mcq({
      standard: 'rla:7.10B.ii', cites: [7, 8],
      stem: 'Marcus wants to add a detail after sentence 8 to clarify how the Python algorithms helped the rover navigate. Which sentence best accomplishes this?',
      choices: [
        'The code analyzed sensor data, calculating motor adjustments.',
        ['Python is a widely used programming language created in the Netherlands.', 'This provides general historical trivia about Python.'],
        ['Video games are also created by computer programmers using complex code.', 'This digresses into video game development.'],
        ['Computer monitors emit blue light that can cause eye strain during study.', 'This is unrelated medical trivia.'],
      ],
      answer: 0,
      explain: 'This detail specifically explains the functional mechanics of the algorithms, showing how real-time sensor processing governed rover movement.',
    }),
    mcq({
      standard: 'rla:7.10C', cites: [1],
      stem: 'Marcus wants to eliminate repetitive phrasing in sentence 1. How should sentence 1 be revised?',
      choices: [
        ['For six months of time, our squad spent hours after school preparing.', 'This retains redundant phrases like "six months of time" and "hours after school in the afternoon."'],
        'Our squad spent six months preparing for the robotics meet.',
        ['During six months that were grueling, the squad spent hours working.', 'This is wordy and weakens the sentence structure.'],
        ['Preparing for the tournament, six months were spent by our squad.', 'This creates a passive, dangling construction.'],
      ],
      answer: 1,
      explain: 'Replacing "afternoon hours" with "countless afternoons" tightens the prose while maintaining the vivid tone.',
    }),
    inq({
      standard: 'rla:7.10D.ii', cites: [4, 5],
      stem: 'Read sentence 5. Choose the correct verb tense to maintain consistency with the surrounding past-tense verbs.',
      sentence: [
        'Its smooth rubber tires ',
        { options: ['slip', 'slipped', 'will slip', 'slips'], answer: 1 },
        ' continuously against the polished surface.',
      ],
      explain: 'The narrative takes place in the past ("struggled," "redesigned"), so the simple past tense "slipped" is required.',
    }),
    inq({
      standard: 'rla:7.10D.v', cites: [9],
      stem: 'Read sentence 9. Choose the correct possessive pronoun to agree with the singular neuter antecedent "rover."',
      sentence: [
        'During the final round, our rover executed ',
        { options: ['their', 'its', 'it\'s', 'his'], answer: 1 },
        ' navigation tasks with flawless precision.',
      ],
      explain: '"Rover" is a singular non-gendered object, requiring the singular possessive pronoun "its" (without apostrophe).',
    }),
    inq({
      standard: 'rla:7.10D.viii', cites: [11],
      stem: 'Read sentence 11. Choose the correct punctuation for the series of three nouns.',
      sentence: [
        'Winning the regional trophy taught us that ',
        { options: ['perseverance technical collaboration and careful testing', 'perseverance, technical collaboration, and careful testing', 'perseverance; technical collaboration; and careful testing', 'perseverance, technical collaboration and, careful testing'], answer: 1 },
        ' are the hallmarks of engineering.',
      ],
      explain: 'Items in a series of three or more elements must be separated by commas, including a comma before the coordinating conjunction.',
    }),
  ],
});
