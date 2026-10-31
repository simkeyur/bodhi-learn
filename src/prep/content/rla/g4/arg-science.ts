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
      { kind: 'p', text: 'Walk into many fourth-grade rooms on a Tuesday. You will likely see students reading science books. They fill out worksheets at their desks. Reading about magnets and plant life is helpful. Still, it is not the best way to learn science. Memorizing lists of words for a Friday quiz does not teach kids how scientists explore questions. Elementary schools should provide weekly hands-on science lab sessions for every fourth-grade student.' },
      { kind: 'p', text: 'First, hands-on labs help students remember what they learn. Words on a paper page can fade quickly from memory. Doing a real test makes ideas stick in the mind. For example, a student can build a closed electric circuit. She connects a small battery, a switch, and a wire. The bulb lights up right away. She sees how electric power travels along the path. Touching the parts and seeing the bright bulb creates a clear memory that no textbook drawing can match.' },
      { kind: 'p', text: 'Second, science labs teach kids how to work well in teams. In a typical lab, three or four students work together on a challenge. They share the tasks fairly. One child pours liquid into a cup. Another child tracks the time on a clock. A third child writes notes in a lab journal. When a test does not go as planned, the team talks about it. They try to find out why an ice cube melted so fast. This group work helps students think like engineers and doctors.' },
      { kind: 'p', text: 'Some adults worry that science labs cost too much money. They think of costly glass jars, special tools, and expensive microscopes. But great labs do not need fancy gear. Teachers can use common home supplies to teach big lessons. Items like vinegar, baking soda, plastic cups, and dry beans cost very little. Yet they show how matter changes and how seeds sprout. Local parent clubs can also help buy basic kits for classrooms.' },
      { kind: 'p', text: 'Science is not a game you only watch from the sidelines. It is something you do with your own hands. By giving fourth graders weekly lab time, schools can spark real wonder. We can help students understand tough ideas, build strong skills, and inspire future scientists.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.9E.i', cites: [1],
      stem: 'What is the author\'s primary claim in the essay?',
      choices: [
        ['Textbooks should be removed from all classrooms.', 'The author acknowledges textbooks are helpful, but argues for adding labs.'],
        'Schools should give fourth graders weekly science labs.',
        ['Elementary schools should spend thousands of dollars on fancy lab tools.', 'The author argues against expensive equipment, suggesting simple household supplies.'],
        ['Every student should choose between studying science and playing sports.', 'The passage does not argue for choosing between sports and science.'],
      ],
      answer: 1,
      explain: 'In paragraph 1, the author states the central claim: "Elementary schools should provide weekly hands-on science lab sessions for every fourth-grade student."',
    }),
    mcq({
      standard: 'rla:4.9E.ii', cites: [2],
      stem: 'Which example does the author use in paragraph 2 to support the claim?',
      choices: [
        'Building an electric circuit that lights up a small bulb.',
        ['A school survey showing that students prefer recess over science class.', 'Recess preferences are not mentioned in paragraph 2.'],
        ['A famous astronaut explaining how tough it is to build a rocket engine.', 'No astronaut is mentioned in paragraph 2.'],
        ['A long list of every science fair that has happened in Texas since 1950.', 'No list of science fairs is provided.'],
      ],
      answer: 0,
      explain: 'In paragraph 2, the author uses the example of building an electric circuit to show how hands-on work helps students remember concepts.',
    }),
    mcq({
      standard: 'rla:4.9E.iii',
      stem: 'Who is the author\'s most likely intended audience for this essay?',
      choices: [
        ['Kindergarten students who are just learning the alphabet.', 'The text is written for educational decision-makers.'],
        ['Astronauts preparing to fly into outer space on a space flight.', 'The focus is on elementary school curricula.'],
        'School principals and leaders who make curriculum plans.',
        ['Store managers who sell costly glass beakers and microscopes.', 'The author suggests using cheap household goods rather than buying expensive microscopes.'],
      ],
      answer: 2,
      explain: 'The author addresses school leaders and decision-makers who have the power to schedule and fund weekly science labs.',
    }),
    mcq({
      standard: 'rla:4.10A',
      stem: 'What is the author\'s main purpose in writing this selection?',
      choices: [
        ['To give step-by-step directions for making a toy boat at home.', 'The author mentions experiments as examples, not DIY project steps.'],
        'To persuade school leaders to include weekly hands-on labs.',
        ['To tell a funny story about a messy science lab with vinegar.', 'The selection is an argumentative essay, not a fictional story.'],
        ['To explain the history of how glass jars and beakers were made.', 'The history of glassware is not the author\'s objective.'],
      ],
      answer: 1,
      explain: 'The author writes to persuade school decision-makers to add weekly hands-on experiments to the fourth-grade science curriculum.',
    }),
    msq({
      standard: 'rla:4.6G', cites: [3, 4],
      stem: 'Which **two** points does the author make in paragraph 4 to address concerns about lab costs?',
      choices: [
        'Effective elementary science experiments can use cheap household supplies.',
        'Parent clubs can help purchase basic science kits for classrooms.',
        ['Students should pay a weekly lab fee to purchase their own microscopes.', 'The author never suggests charging students fees.'],
        ['Schools can eliminate art and music classes to fund science equipment.', 'The author never advocates cutting other arts programs.'],
        ['High-tech laboratory gear is required for learning basic physics.', 'The author states the exact opposite: high-tech gear is not necessary.']
      ],
      answers: [0, 1],
      explain: 'Paragraph 4 explains that cheap supplies like vinegar and baking soda work well, and parent clubs can help buy kits.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [3],
      stem: 'What can the reader infer about team science labs based on paragraph 3?',
      choices: [
        ['Students argue constantly and learn less than when working alone.', 'The author emphasizes positive collaboration and problem-solving.'],
        'Teamwork in labs helps prepare students for future STEM careers.',
        ['Every student must write the exact same notes in a science journal.', 'The text notes students share tasks like timing and pouring.'],
        ['Experiments in school labs always turn out the way students expect.', 'The text notes results sometimes fail to match expectations.'],
      ],
      answer: 1,
      explain: 'Paragraph 3 notes that discussing unexpected results and sharing tasks in labs helps students think like engineers and doctors.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [1],
      stem: 'Which detail from paragraph 1 shows what currently happens in many fourth-grade science classes?',
      choices: [
        '"They fill out worksheets at their desks."',
        ['"Elementary schools should provide weekly hands-on science lab sessions..."', 'This is the author\'s recommendation, not the current status.'],
        ['"Science is not a game you only watch from the sidelines."', 'This is a concluding statement from paragraph 5.'],
        ['"Teachers can use common home supplies to teach big lessons."', 'This is from paragraph 4 discussing supply costs.'],
      ],
      answer: 0,
      explain: 'Paragraph 1 describes current classrooms where students read books and "fill out worksheets at their desks."',
    }),
    mcq({
      standard: 'rla:4.9E.i', cites: [5],
      stem: 'Which statement best expresses the claim the author reinforces in paragraph 5?',
      choices: [
        ['Schools should replace science textbooks with outdoor sports games.', 'The author uses a sports metaphor, not a call for athletics.'],
        ['School districts should spend less time on difficult science topics.', 'The author wants more time dedicated to science labs.'],
        ['Universities should give free safety goggles to all local schools.', 'Safety goggles are not discussed in paragraph 5.'],
        'Weekly labs spark curiosity and help fourth graders learn.',
      ],
      answer: 3,
      explain: 'In paragraph 5, the author concludes by stating that weekly lab time sparks wonder, builds skills, and helps students learn.',
    }),
  ],
});
