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
      standard: 'rla:5.9E.i', cites: [2, 8],
      stem: 'What is the author\'s primary claim in the essay?',
      choices: [
        ['Students need additional outdoor recess time primarily to form social friendships with their peers.', 'Making friends is one supporting reason mentioned in paragraph 5, not the overarching claim.'],
        'Pecan Grove Elementary should increase daily recess time to at least thirty minutes for every student.',
        ['Elementary school teachers should assign significantly less homework so children can play after school.', 'Homework is mentioned as an evening obstacle to exercise, not as the author\'s central proposal.'],
        ['The school board should purchase brand-new playground climbing gear and soccer balls for physical fitness.', 'The author asks for more recess time, never requesting new sports equipment or playground sets.'],
      ],
      answer: 1,
      explain: 'A claim is the main position the author argues. Camila introduces her claim in paragraph 2 and repeats it in paragraph 8, urging thirty minutes of daily recess.',
    }),
    twoq({
      standard: 'rla:5.9E.i', cites: [2, 8],
      a: {
        prompt: 'Part A: What specific action does Camila ask the school board members to take?',
        choices: [
          ['Require classroom teachers to monitor the school playground more closely', 'Additional monitoring is suggested as a safety countermeasure, not the main action requested.'],
          ['Hire certified physical education instructors to supervise after-school clubs', 'The essay asks for recess during the regular school day, not after-school sports staff.'],
          'Vote in favor of extending daily recess at their upcoming board meeting',
          ['Reduce instructional hours dedicated to fifth-grade reading and mathematics', 'Camila argues recess makes existing class time more effective, not that academics should be cut.'],
        ],
        answer: 2,
      },
      b: {
        prompt: 'Part B: Which quotation from the essay best supports the answer to Part A?',
        choices: [
          ['"That is barely enough time to get outside, find a ball, and choose teams before the bell rings." (paragraph 2)', 'This sentence describes the inadequacy of fifteen minutes, not the requested action.'],
          ['"These are the same skills people need to work on a team when they grow up." (paragraph 5)', 'This sentence explains the life skills developed through play rather than stating the board request.'],
          ['"Keeping students safe is important, and so is keeping them active." (paragraph 7)', 'This statement balances safety and physical activity, rather than asking for a board vote.'],
          '"I ask the school board to vote for a longer recess at its next meeting." (paragraph 8)',
        ],
        answer: 3,
      },
      explain: 'In paragraph 8, Camila directly calls on the board members to vote for longer recess at their next meeting.',
    }),
    mcq({
      standard: 'rla:5.9E.ii', cites: [3],
      stem: 'Why does the author cite the American Academy of Pediatrics in paragraph 3?',
      choices: [
        'To strengthen her argument by demonstrating that respected medical experts agree that breaks enhance learning.',
        ['To explain the academic coursework and residency training required to become a certified pediatrician.', 'The author cites the organization for its expertise on child development, not to explain medical training.'],
        ['To argue that pediatricians should conduct annual physical examinations inside elementary school clinics.', 'School health clinics and checkups are completely unrelated to the author\'s argument for recess.'],
        ['To suggest that elementary students should spend more hours in quiet classrooms reading medical literature.', 'The cited evidence supports active physical breaks, the opposite of spending more hours sitting quietly.'],
      ],
      answer: 0,
      explain: 'Citing the American Academy of Pediatrics provides expert medical evidence showing that children need mental breaks to support cognitive function.',
    }),
    msq({
      standard: 'rla:5.9E.ii', cites: [4],
      stem: 'Which **two** facts does the author use to support her claim that recess keeps students healthy?',
      choices: [
        'Doctors recommend that children be active for about an hour every day.',
        ['Teachers already watch the playground carefully to maintain student safety.', 'Supervision addresses playground safety concerns rather than physical health benefits.'],
        'Many students ride a bus home and then sit down to do homework.',
        ['Students make up games, take turns, and resolve their own playground disputes.', 'This supports the social and interpersonal skills benefit described in paragraph 5.'],
        ['The school day contains a limited number of hours for instructional learning.', 'This is part of the counterargument addressed in paragraph 6, not a health benefit.'],
      ],
      answers: [0, 2],
      explain: 'Paragraph 4 supports the health claim by citing the one-hour daily activity recommendation and pointing out that bus rides and homework leave children with little movement time.',
    }),
    mcq({
      standard: 'rla:5.9E.ii', cites: [6],
      stem: 'How does the author address the concern that a longer recess would take valuable time away from reading and math?',
      choices: [
        ['She suggests that academic subjects like reading and math are far less valuable to child development than sports.', 'Camila respects academic learning and argues recess helps students perform better in academic subjects.'],
        'She explains that restless students struggle to focus, so a brain break makes remaining class time more productive.',
        ['She offers a compromise to reduce her proposed recess extension from thirty minutes down to twenty minutes daily.', 'Camila maintains her thirty-minute request throughout the essay without offering compromises.'],
        ['She recommends extending the elementary school day by forty-five minutes to accommodate both recess and lessons.', 'The author does not propose lengthening the overall school day.'],
      ],
      answer: 1,
      explain: 'Paragraph 6 counters the academic concern by arguing that extra classroom minutes are unhelpful if students cannot focus, while refreshed students learn more efficiently.',
    }),
    mcq({
      standard: 'rla:5.9E.iii', cites: [1],
      stem: 'Who is the intended audience for Camila\'s persuasive argument?',
      choices: [
        ['Elementary students who are seeking new playground games and soccer activities during free time.', 'While students benefit from recess, the essay is formally addressed to the board that decides policy.'],
        ['Bus drivers and cafeteria monitors who supervise students during transportation and morning meals.', 'Support staff are not the decision-makers with the power to change daily instructional schedules.'],
        'The elected trustees of the local school board who have the authority to modify school schedules.',
        ['Pediatric physicians who research the physical health and cardiovascular fitness of young children.', 'Doctors are cited as expert authorities, not addressed as the target decision-makers.'],
      ],
      answer: 2,
      explain: 'The essay is addressed directly "To the members of the Pecan Grove School Board," the governing body with the legal authority to set school daily schedules.',
    }),
    mcq({
      standard: 'rla:5.10B', cites: [6, 7],
      stem: 'Why does the author include and respond to opposing arguments in paragraphs 6 and 7?',
      choices: [
        ['To show that she has reconsidered her original stance and now agrees that thirty minutes is too long.', 'Camila acknowledges concerns only to refute them, reaffirming her thirty-minute proposal in paragraph 8.'],
        ['To explain the historical evolution of playground safety regulations in Texas public school systems.', 'The essay addresses specific practical concerns rather than presenting a historical legal timeline.'],
        ['To outline specific disciplinary consequences for students who argue or misbehave during outdoor games.', 'The author argues recess teaches students to resolve their own disputes rather than discussing punishments.'],
        'To build credibility and reinforce her position by anticipating and resolving potential objections.',
      ],
      answer: 3,
      explain: 'Addressing counterarguments regarding academic instructional time and playground injuries strengthens the writer\'s credibility and reassures the audience that potential drawbacks have viable solutions.',
    }),
  ],
});
