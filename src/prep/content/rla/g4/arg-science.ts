// Grade 4 argumentative: an opinion essay advocating for hands-on science labs in elementary school.
// Questions cover claim (4.9E.i), facts used for argument (4.9E.ii), intended audience (4.9E.iii),
// author's purpose (4.10A), key ideas (4.6G), inference (4.6F), and text evidence (4.7C).

import { makeSet, mcq, msq } from '../author.ts';

export const ARG_SCIENCE = makeSet({
  id: 'g4-arg-science',
  grade: 4,
  kind: 'reading',
  title: 'Hands-On Science: Why Fourth Graders Need More Labs',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g4-arg-science-p',
    title: 'Hands-On Science: Why Fourth Graders Need More Labs',
    genre: 'argumentative',
    blocks: [
      { kind: 'p', text: 'Walk into many fourth-grade classrooms on a Tuesday afternoon, and you will likely see students quietly reading science textbooks and answering multiple-choice questions on photocopied worksheets. While reading about magnetism, electric circuits, and plant cycles is informative, it is simply not the most effective way for young minds to truly grasp scientific concepts. Memorizing vocabulary definitions for a Friday quiz does not teach students how scientists think, experiment, or explore. Elementary schools should provide dedicated weekly hands-on science laboratory sessions for every fourth-grade student.' },
      { kind: 'p', text: 'First and foremost, active experimentation significantly improves memory retention and conceptual understanding. Educational researchers at Texas universities recently conducted a study comparing two groups of elementary students studying the same science unit. Students who engaged in weekly physical lab experiments scored fifteen percent higher on concept mastery assessments than peers who only read about the same topics in textbooks. When a student builds an actual closed electrical circuit using a battery, copper wire, and a tiny switch, the concept of electron flow becomes unforgettable the moment the bulb glows brightly.' },
      { kind: 'p', text: 'Second, laboratory investigations teach essential collaboration, communication, and problem-solving skills that textbooks cannot duplicate. In a typical science lab, students work cooperatively in small teams of three or four. They must measure liquids carefully with graduated cylinders, record accurate observations in lab notebooks, and discuss unexpected results when an experiment fails to match their original hypothesis. When an ice cube melts faster than predicted, team members brainstorm reasons together. These collaborative problem-solving skills mirror the real work performed daily by engineers, medical doctors, and wildlife biologists.' },
      { kind: 'p', text: 'Some school administrators argue that laboratory supplies such as microscopes, beakers, and safety goggles are too costly for tight campus budgets. However, excellent elementary science does not require expensive high-tech gear. Simple everyday materials—baking soda, vinegar, dry pinto beans, plastic cups, food coloring, and craft magnets—cost only pennies per pupil while demonstrating core physics and chemistry principles effectively. Furthermore, local parent-teacher organizations often fund science kits willingly when teachers request them.' },
      { kind: 'p', text: 'Science is not a spectator sport meant to be observed passively from a textbook page. By investing time and modest resources into weekly hands-on investigations, our school district can ignite lifelong curiosity, raise academic performance, and inspire the next generation of Texas scientists.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.9E.i', cites: [1],
      stem: 'What is the author\'s primary claim in the essay?',
      choices: [
        ['Textbooks should be banned completely from fourth-grade classrooms.', 'The author acknowledges textbooks are informative, but argues for adding labs.'],
        'Elementary schools should provide weekly hands-on science lab sessions for fourth-grade students.',
        ['School districts must spend thousands of dollars on expensive laboratory microscopes.', 'The author argues against expensive equipment, suggesting simple household supplies.'],
        ['Every fourth grader should choose between studying science or playing sports.', 'The passage does not argue for choosing between sports and science.'],
      ],
      answer: 1,
      explain: 'In paragraph 1, the author states the central claim: "Elementary schools should provide dedicated weekly hands-on science laboratory sessions for every fourth-grade student."',
    }),
    mcq({
      standard: 'rla:4.9E.ii', cites: [2],
      stem: 'Which factual evidence does the author use in paragraph 2 to support the claim?',
      choices: [
        'A university research study showing students who do hands-on labs score 15 percent higher on assessments than those who only read.',
        ['A survey proving that fourth graders prefer recess over science class.', 'Recess preferences are not mentioned in paragraph 2.'],
        ['A quotation from an astronaut explaining the difficulty of rocket science.', 'No astronaut is quoted in paragraph 2.'],
        ['A historical list of all science fairs held in Texas since 1950.', 'No list of science fairs is provided.'],
      ],
      answer: 0,
      explain: 'Paragraph 2 cites research by Texas universities showing students who conduct physical experiments score 15 percent higher on concept mastery.',
    }),
    mcq({
      standard: 'rla:4.9E.iii',
      stem: 'Who is the author\'s most likely intended audience for this essay?',
      choices: [
        ['Kindergarten students learning their alphabet.', 'The text is written at an analytical level for older readers and educational decision-makers.'],
        ['Professional astronauts preparing for an international space mission.', 'The focus is on elementary school curricula.'],
        'School principals, teachers, administrators, and school board members who make curriculum and scheduling decisions.',
        ['Store managers selling expensive microscope equipment.', 'The author suggests using cheap household goods rather than buying expensive microscopes.'],
      ],
      answer: 2,
      explain: 'The author addresses school administrators, classroom practices, and district priorities, aiming to convince educational leaders and parent organizations to implement weekly labs.',
    }),
    mcq({
      standard: 'rla:4.10A',
      stem: 'What is the author\'s main purpose in writing this selection?',
      choices: [
        ['To explain step-by-step instructions for building an electric battery.', 'The author mentions circuits as an example, but does not provide DIY instructions.'],
        'To persuade educational decision-makers to incorporate weekly hands-on experiments into the fourth-grade curriculum.',
        ['To tell an entertaining fictional story about a chaotic science experiment.', 'The selection is an argumentative essay, not a fictional narrative.'],
        ['To describe the history of graduated cylinders and beakers in science.', 'The history of glassware is not the author\'s objective.'],
      ],
      answer: 1,
      explain: 'The author\'s goal is persuasive: arguing reasons and answering objections to convince leaders to add weekly hands-on science labs.',
    }),
    msq({
      standard: 'rla:4.6G', cites: [3, 4],
      stem: 'Which **two** points does the author make in paragraph 4 to address concerns about lab costs?',
      choices: [
        'Effective elementary science experiments can be conducted using inexpensive everyday materials.',
        'Parent-teacher organizations frequently provide grant funding to purchase elementary science kits.',
        ['Students should pay a weekly lab fee to purchase their own microscopes.', 'The author never suggests charging students fees.'],
        ['Schools can eliminate art and music classes to fund science equipment.', 'The author never advocates cutting other arts programs.'],
        ['High-tech laboratory gear is required for learning basic physics.', 'The author states the exact opposite: high-tech gear is not necessary.'],
      ],
      answers: [0, 1],
      explain: 'Paragraph 4 counters budget objections by showing cheap everyday materials (baking soda, vinegar, beans) cost pennies, and PTOs willingly help fund kits.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [3],
      stem: 'What can the reader infer about team science labs based on paragraph 3?',
      choices: [
        ['Students argue constantly and learn less than when working alone.', 'The author emphasizes positive collaboration and problem-solving.'],
        'Working with lab partners prepares children for future collaborative careers in STEM fields.',
        ['Every student must choose the exact same hypothesis for an experiment.', 'The text notes students discuss unexpected differences.'],
        ['Experiments always produce the results students originally expected.', 'The text notes results sometimes fail to match hypotheses, teaching resilience.'],
      ],
      answer: 1,
      explain: 'Paragraph 3 directly links small team problem-solving and recording data to the real-world daily collaborative work of engineers, doctors, and biologists.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [1],
      stem: 'Which detail from paragraph 1 shows what currently happens in many fourth-grade science classes?',
      choices: [
        '"Walk into many fourth-grade classrooms on a Tuesday afternoon, and you will likely see students reading science textbooks and answering multiple-choice questions on worksheets."',
        ['"Elementary schools should provide dedicated weekly hands-on science laboratory sessions..."', 'This is the author\'s recommendation, not the current status.'],
        ['"Science is not a spectator sport meant to be observed passively..."', 'This is a concluding metaphor in paragraph 5.'],
        ['"Simple everyday materials cost only pennies per pupil..."', 'This is from paragraph 4 discussing supply costs.'],
      ],
      answer: 0,
      explain: 'The opening sentence of paragraph 1 describes the current standard classroom routine of reading textbooks and filling out worksheets.',
    }),
    mcq({
      standard: 'rla:4.9E.i', cites: [5],
      stem: 'Which statement best expresses the claim the author reinforces in paragraph 5?',
      choices: [
        ['Textbooks should be replaced entirely with outdoor athletic games.', 'The phrase "spectator sport" is a metaphor, not a call for athletics.'],
        ['School districts should reduce the amount of time spent teaching science.', 'The author wants more time dedicated to science labs.'],
        'Investing in hands-on investigations inspires future scientists and improves student learning.',
        ['Texas universities should provide free safety goggles to all schools.', 'Safety goggles are not discussed in paragraph 5.'],
      ],
      answer: 2,
      explain: 'In paragraph 5, the author concludes by restating that investing in hands-on science investigations sparks curiosity and academic performance.',
    }),
  ],
});
