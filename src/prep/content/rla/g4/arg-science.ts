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
      stem: 'What is the author\'s central claim in the essay?',
      choices: [
        'Elementary schools should provide weekly hands-on science lab sessions for every fourth-grade student.',
        ['School districts should completely eliminate all printed science textbooks and worksheets from elementary classrooms.', 'The author acknowledges that reading textbooks is helpful, but argues for adding experiments.'],
        ['Elementary schools should invest thousands of dollars in high-powered microscopes and specialized laboratory glassware.', 'The author specifically explains that costly microscopes and glass beakers are not required.'],
        ['Fourth-grade teachers should replace science instruction with daily organized outdoor sports and athletics.', 'The author uses a sports comparison to explain engagement, not to suggest replacing science with games.'],
      ],
      answer: 0,
      explain: 'In paragraph 1, the author states the central claim: "Elementary schools should provide weekly hands-on science lab sessions for every fourth-grade student."',
    }),
    mcq({
      standard: 'rla:4.9E.ii', cites: [2],
      stem: 'Which example does the author provide in paragraph 2 to support the value of hands-on learning?',
      choices: [
        ['Reviewing a diagram in a science textbook that shows how electrical currents move through metal wires.', 'The author contrasts passive textbook diagrams with the memorable experience of building a circuit.'],
        'Building an electric circuit with a battery and switch to see a small light bulb illuminate immediately.',
        ['Memorizing a glossary list of electrical engineering terms for a written Friday morning vocabulary quiz.', 'The author specifically criticizes memorizing vocabulary lists for weekly tests without hands-on testing.'],
        ['Conducting an annual school survey to find out whether students prefer physical science over life science.', 'Student preference surveys are not discussed or cited in the paragraph.'],
      ],
      answer: 1,
      explain: 'In paragraph 2, the author uses the example of building an electric circuit to show how hands-on work helps students remember concepts.',
    }),
    mcq({
      standard: 'rla:4.9E.iii',
      stem: 'Who is the author\'s primary intended audience for this essay?',
      choices: [
        ['Laboratory technicians who calibrate specialized scientific instruments in university research centers.', 'The essay discusses elementary school schedules and curriculum decisions, not university research.'],
        ['Commercial manufacturers who sell expensive glass beakers and electronic scales to high schools.', 'The author recommends affordable kitchen supplies rather than purchasing commercial glassware.'],
        'School administrators, curriculum directors, and educators who make scheduling decisions.',
        ['High school students preparing for college entrance examinations in physics and chemistry.', 'The text focuses on fourth-grade students, not high school students preparing for college exams.'],
      ],
      answer: 2,
      explain: 'The author addresses school leaders and decision-makers who have the power to schedule and fund weekly science labs.',
    }),
    mcq({
      standard: 'rla:4.10A',
      stem: 'What is the author\'s main purpose in writing this selection?',
      choices: [
        'To persuade educational leaders to incorporate regular, hands-on science experiments into the elementary school week.',
        ['To provide teachers with step-by-step instructions for assembling complex electrical circuit boards in a classroom.', 'The circuit is an example of effective learning, not a detailed technical instructional manual.'],
        ['To entertain readers with a humorous personal narrative about an unexpected chemical reaction in the kitchen.', 'The passage is a persuasive argument presenting evidence, not an entertaining personal story.'],
        ['To explain the historical evolution of science textbooks and worksheets used in American elementary schools.', 'The author focuses on curriculum reform rather than providing a historical timeline of textbooks.'],
      ],
      answer: 0,
      explain: 'The author writes to persuade school decision-makers to add weekly hands-on experiments to the fourth-grade science curriculum.',
    }),
    msq({
      standard: 'rla:4.6G', cites: [3, 4],
      stem: 'Which **two** points does the author make in paragraph 4 to address concerns about the cost of science labs?',
      choices: [
        'Effective elementary experiments can be conducted using inexpensive, common household supplies.',
        'Parent-teacher organizations and community clubs can help purchase basic classroom science kits.',
        ['Students should be required to pay individual weekly lab fees to purchase personal equipment.', 'The author recommends affordable household supplies and never suggests charging student fees.'],
        ['School boards can reduce funding for fine arts and physical education to purchase lab supplies.', 'The author does not propose reallocating funds away from arts or music classes.'],
        ['Modern high-tech laboratory gear is essential for understanding basic physical science principles.', 'The author emphasizes that expensive, high-tech tools are unnecessary for learning foundational ideas.'],
      ],
      answers: [0, 1],
      explain: 'Paragraph 4 explains that cheap supplies like vinegar and baking soda work well, and parent clubs can help buy kits.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [3],
      stem: 'What can the reader infer about collaborative science labs based on paragraph 3?',
      choices: [
        ['Students who work in small lab groups learn less than when they read textbooks in complete silence.', 'The author argues that collaborative labs promote deeper thinking and engagement than quiet reading alone.'],
        'Working in teams helps students develop communication and problem-solving skills needed in future careers.',
        ['Every student in a lab group must complete identical tasks at the exact same moment during an experiment.', 'Group members divide responsibilities like timing, pouring, and taking notes rather than doing identical tasks.'],
        ['Classroom experiments always produce perfect, expected results on the very first attempt.', 'The author notes that tests sometimes fail to go as planned, which provides valuable learning moments.'],
      ],
      answer: 1,
      explain: 'Paragraph 3 notes that discussing unexpected results and sharing tasks in labs helps students think like engineers and doctors.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [1],
      stem: 'Which quotation from paragraph 1 describes what happens in many current fourth-grade science classrooms?',
      choices: [
        '"They fill out worksheets at their desks."',
        ['"Elementary schools should provide weekly hands-on science lab sessions for every fourth-grade student."', 'This sentence states the author\'s proposed recommendation rather than current classroom practice.'],
        ['"Touching the parts and seeing the bright bulb creates a clear memory that no textbook drawing can match."', 'This sentence from paragraph 2 explains why building a circuit helps memory, not current habits.'],
        ['"Teachers can use common home supplies to teach big lessons."', 'This sentence from paragraph 4 discusses using household supplies to save money.'],
      ],
      answer: 0,
      explain: 'Paragraph 1 describes current classrooms where students read books and "fill out worksheets at their desks."',
    }),
    mcq({
      standard: 'rla:4.9E.i', cites: [5],
      stem: 'Which statement best summarizes the concluding argument reinforced in paragraph 5?',
      choices: [
        ['Elementary schools should replace written science quizzes with competitive outdoor sports tournaments.', 'The author uses a sports comparison to explain active engagement, not to replace science with sports.'],
        ['School districts should reduce the time spent on complex science topics to prevent student academic frustration.', 'The author argues that labs help students understand difficult topics rather than avoiding them.'],
        ['Teachers should only allow students who score highest on tests to participate in hands-on experiments.', 'The author advocates weekly lab time for every fourth grader, not just top-scoring students.'],
        'Active participation in weekly science labs sparks curiosity and helps students master challenging concepts.',
      ],
      answer: 3,
      explain: 'In paragraph 5, the author concludes by stating that weekly lab time sparks wonder, builds skills, and helps students learn.',
    }),
  ],
});
