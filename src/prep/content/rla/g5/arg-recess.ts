// Grade 5 argumentative text: an original student essay with a claim, facts on both sides and a counterargument.
// Questions cover the claim, how facts are used for and against, the audience and the structure.

import { makeSet, mcq, msq, twoq } from '../author.ts';

export const ARG_RECESS = makeSet({
  id: 'g5-arg-recess',
  grade: 5,
  kind: 'reading',
  title: 'More Recess, Better Learning',
  intro: 'Read the argument and choose the best answer to each question.',
  passages: [{
    id: 'g5-arg-recess-p',
    title: 'More Recess, Better Learning',
    genre: 'argumentative',
    blocks: [
      { kind: 'p', text: 'To the members of the Pecan Grove School Board:' },
      { kind: 'p', text: 'Right now, students at Pecan Grove Elementary get fifteen minutes of recess a day. That is barely enough time to get outside, find a ball, and choose teams before the bell rings. I believe our school should give every student at least thirty minutes of recess each day.' },
      { kind: 'p', text: 'First, recess helps students learn. When children sit still for hours, it becomes hard to pay attention. Many teachers have noticed that students listen better and finish more work after they have had time to run and play. Doctors\' groups such as the American Academy of Pediatrics say that recess is an important part of the school day because it gives children\'s brains a needed break.' },
      { kind: 'p', text: 'Second, recess keeps students healthy. Doctors recommend that children be active for about an hour every day. Many students ride a bus home and then sit down to do homework, so recess may be one of the only times they move all day. Thirty minutes of running, jumping, and climbing would help students get much closer to that goal.' },
      { kind: 'p', text: 'Third, recess teaches skills that cannot be learned from a textbook. On the playground, students make up games, take turns, and solve arguments without an adult telling them what to do. These are the same skills people need to work on a team when they grow up.' },
      { kind: 'p', text: 'Some people argue that a longer recess would take time away from reading and math. It is true that the school day only has so many hours. However, a few extra minutes of class are not helpful if students are too restless to focus. A student who has had a real break is ready to learn, which means the class time that remains is used better.' },
      { kind: 'p', text: 'Others worry that more recess means more chances for students to get hurt. But teachers already watch the playground carefully, and the school could add a second recess helper. Keeping students safe is important, and so is keeping them active.' },
      { kind: 'p', text: 'Fifteen minutes is not enough. Thirty minutes of recess would help students learn more, stay healthy, and practice getting along. I ask the school board to vote for a longer recess at its next meeting. Our students, and our teachers, will thank you.' },
      { kind: 'p', text: 'Sincerely, Camila Reyes, fifth grade' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:5.9E.i',
      stem: 'What is the author\'s claim?',
      choices: [
        ['Recess helps students make friends.', 'This is part of one reason, not the main claim.'],
        'The school should give every student at least thirty minutes of recess each day.',
        ['Students should do less homework.', 'Homework is mentioned only as a detail.'],
        ['The playground needs more equipment.', 'The author never asks for new equipment.'],
      ],
      answer: 1,
      explain: 'A claim is the main point the author wants readers to agree with. Camila states it at the end of paragraph 2 and repeats it in the conclusion.',
      cites: [2, 8],
    }),
    twoq({
      standard: 'rla:5.9E.i', cites: [2, 8],
      a: {
        prompt: 'Part A: What action does the author want her readers to take?',
        choices: [
          ['Watch the playground more carefully', 'This is a solution she mentions, not her main request.'],
          'Vote for a longer recess',
          ['Hire more reading teachers', 'Reading teachers are not mentioned.'],
          ['Let students play outside after school', 'She is asking about recess during the school day.'],
        ],
        answer: 1,
      },
      b: {
        prompt: 'Part B: Which sentence from the argument best supports the answer to Part A?',
        choices: [
          ['"That is barely enough time to get outside, find a ball, and choose teams before the bell rings."', 'This describes the problem, not the action she wants.'],
          ['"These are the same skills people need to work on a team when they grow up."', 'This is a reason, not the request.'],
          '"I ask the school board to vote for a longer recess at its next meeting."',
          ['"Keeping students safe is important, and so is keeping them active."', 'This answers a worry; it is not the request.'],
        ],
        answer: 2,
      },
      explain: 'In the conclusion (paragraph 8), Camila asks the board directly to "vote for a longer recess at its next meeting."',
    }),
    mcq({
      standard: 'rla:5.9E.ii', cites: [3],
      stem: 'Why does the author mention the American Academy of Pediatrics in paragraph 3?',
      choices: [
        'To show that experts agree recess helps children learn',
        ['To explain how doctors are trained', 'The paragraph is about recess, not doctor training.'],
        ['To argue against having recess', 'The fact supports her claim.'],
        ['To tell readers where to get a checkup', 'Checkups are not the topic.'],
      ],
      answer: 0,
      explain: 'Facts from experts make an argument stronger. Naming a doctors\' group shows that people who study children\'s health agree with her reason.',
    }),
    msq({
      standard: 'rla:5.9E.ii',
      stem: 'Which **two** facts does the author use to support her claim that recess keeps students healthy?',
      choices: [
        'Doctors recommend that children be active for about an hour every day.',
        ['Teachers already watch the playground carefully.', 'This answers a worry about safety; it is not about health.'],
        'Many students ride a bus home and then sit down to do homework.',
        ['Students make up games and take turns.', 'This supports a different reason: learning skills.'],
        ['The school day only has so many hours.', 'This is part of the argument against her claim.'],
      ],
      answers: [0, 2],
      explain: 'Paragraph 4 gives the health reason. Children need about an hour of activity, and many students sit on the bus and at home, so recess may be their only chance to move.',
      cites: [4],
    }),
    mcq({
      standard: 'rla:5.9E.ii', cites: [6],
      stem: 'How does the author respond to people who say a longer recess would take time away from reading and math?',
      choices: [
        ['She says reading and math are not important.', 'She never says that.'],
        ['She agrees and changes her claim to twenty minutes.', 'She keeps her claim of thirty minutes.'],
        'She admits the school day is limited, then explains that rested students use class time better.',
        ['She says the school day should be made longer.', 'She doesn\'t suggest a longer day.'],
      ],
      answer: 2,
      explain: 'Paragraph 6 presents the argument against her claim. She admits "the school day only has so many hours," then explains why more recess still helps learning.',
    }),
    mcq({
      standard: 'rla:5.9E.iii',
      stem: 'Who is the intended audience for this argument?',
      choices: [
        ['Students who want more recess', 'Students might agree, but she is writing to the people who can make the decision.'],
        'The members of the school board',
        ['Parents who drive students home', 'Parents are not addressed.'],
        ['Doctors who study children', 'Doctors are mentioned as experts, not as readers.'],
      ],
      answer: 1,
      explain: 'The argument begins "To the members of the Pecan Grove School Board" and asks the board to vote. The audience is the group that can change the rule.',
      cites: [1],
    }),
    mcq({
      standard: 'rla:5.10B',
      stem: 'Why does the author answer two arguments against her claim in paragraphs 6 and 7?',
      choices: [
        ['To show that she has changed her mind', 'She hasn\'t changed her mind.'],
        'To show she has thought about the other side, which makes her argument more convincing',
        ['To give the history of recess', 'Those paragraphs don\'t give any history.'],
        ['To list the rules of the playground', 'No rules are listed.'],
      ],
      answer: 1,
      explain: 'Arguments are stronger when the writer answers what others might say. By responding to worries about class time and safety, Camila shows readers she has considered both sides.',
      cites: [6, 7],
    }),
  ],
});
