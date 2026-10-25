// Grade 3 argumentative: An opinion essay advocating for 30 minutes of daily outdoor recess.
// Word count: ~310 words (range 250-650).
// Questions cover claim (3.9E.i), facts vs opinion (3.9E.ii), audience (3.9E.iii),
// author's purpose (3.10A), inference (3.6F), key details (3.6G), and text evidence (3.7C).

import { makeSet, mcq } from '../author.ts';

export const ARG_RECESS = makeSet({
  id: 'g3-arg-recess',
  grade: 3,
  kind: 'reading',
  title: 'More Recess, Better Learning',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g3-arg-recess-p',
    title: 'More Recess, Better Learning',
    genre: 'argumentative',
    blocks: [
      { kind: 'p', text: 'On a sunny Thursday morning at Oakridge Elementary, third graders sit motionless in plastic chairs for three straight hours, practicing math calculations and reading comprehension passages. By eleven o\'clock, many students are fidgeting with pencils, resting their chins on their desks, and losing focus. Elementary schools should provide at least thirty minutes of uninterrupted daily outdoor recess for all third-grade students.' },
      { kind: 'p', text: 'First, physical exercise directly boosts brain power and academic performance. Medical researchers at Texas pediatric hospitals report that aerobic activity—such as running, climbing on jungle gyms, and playing kickball—increases blood circulation and delivers more oxygen to the brain. Students who participate in daily recess return to class with sharper concentration, improved memory, and fewer behavioral disruptions.' },
      { kind: 'p', text: 'Second, unstructured playground time teaches valuable social and emotional skills that cannot be taught from a printed textbook. When children play games like four-square or soccer together, they must take turns, communicate clearly, negotiate fair rules, and resolve disagreements peacefully. In my opinion, learning how to be a fair teammate and make new friends on the playground is just as important as scoring well on a spelling quiz.' },
      { kind: 'p', text: 'Some school principals worry that longer recess takes away valuable instructional minutes needed for state test preparation. However, research proves that children who are given adequate movement breaks actually complete classroom tasks faster and remember new information better than children who sit at desks without rest. Giving students time to play outside is not wasted time; it is an essential investment in their health, happiness, and learning.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9E.i', cites: [1],
      stem: 'What is the author\'s central claim in the essay?',
      choices: [
        ['Elementary schools should replace all reading textbooks with soccer balls.', 'The author supports academics, but advocates adding outdoor playtime.'],
        'Elementary schools should provide at least thirty minutes of daily outdoor recess for third graders.',
        ['Third-grade students should stay indoors during sunny weather.', 'The author argues students need outdoor time.'],
        ['Classroom desks should be removed completely from classrooms.', 'The author discusses recess breaks, not eliminating desks.'],
      ],
      answer: 1,
      explain: 'In paragraph 1, the author directly states the claim: "Elementary schools should provide at least thirty minutes of uninterrupted daily outdoor recess for all third-grade students."',
    }),
    mcq({
      standard: 'rla:3.9E.ii', cites: [2],
      stem: 'Which statement from paragraph 2 is a verifiable scientific fact rather than a personal opinion?',
      choices: [
        'Aerobic activity increases blood circulation and delivers more oxygen to the brain.',
        ['Recess is the most enjoyable thirty minutes of any child\'s life.', 'Enjoyment is a personal feeling and opinion, not a scientific fact.'],
        ['Every student prefers playing kickball over reading poetry.', 'Preferences vary and cannot be verified as universal facts.'],
        ['Jungle gyms are more attractive than classroom whiteboards.', 'Appearance is a subjective opinion.'],
      ],
      answer: 0,
      explain: 'Medical findings about aerobic exercise increasing blood flow and oxygen delivery to the brain are objective, verifiable scientific facts.',
    }),
    mcq({
      standard: 'rla:3.9E.ii', cites: [3],
      stem: 'Which statement from paragraph 3 expresses the author\'s personal opinion?',
      choices: [
        ['"When children play games like four-square or soccer together, they must take turns..."', 'Taking turns is an observable rule of games.'],
        '"In my opinion, learning how to be a fair teammate and make new friends on the playground is just as important as scoring well on a spelling quiz."',
        ['"Children play games like four-square or soccer..."', 'This is a factual description of common games.'],
        ['"Unstructured playground time teaches social skills."', 'This describes educational observations.'],
      ],
      answer: 1,
      explain: 'The phrase "In my opinion" explicitly marks the statement comparing social skills to spelling quizzes as the author\'s personal viewpoint.',
    }),
    mcq({
      standard: 'rla:3.9E.iii',
      stem: 'Who is the author\'s primary intended audience for this essay?',
      choices: [
        ['Toddlers learning how to walk.', 'Toddlers do not attend elementary school or read persuasive essays.'],
        ['Professional soccer referees in Europe.', 'The focus is on elementary school schedules.'],
        'School principals, teachers, and school administrators who decide daily campus schedules.',
        ['Store clerks selling plastic chairs.', 'The essay addresses education policy, not furniture sales.'],
      ],
      answer: 2,
      explain: 'The author addresses school principals, instructional time, and campus scheduling decisions, aiming to convince educational leaders to provide daily recess.',
    }),
    mcq({
      standard: 'rla:3.10A',
      stem: 'What is the author\'s primary purpose in writing this selection?',
      choices: [
        ['To explain step-by-step rules for playing four-square.', 'Game rules are mentioned briefly as an example, not as instructions.'],
        'To persuade educators that daily outdoor recess improves student health, socialization, and academic focus.',
        ['To entertain readers with a humorous fiction story about a runaway kickball.', 'The selection is an argumentative essay, not a fictional narrative.'],
        ['To describe the history of plastic chairs manufactured in Texas.', 'Chair manufacturing is not discussed.'],
      ],
      answer: 1,
      explain: 'The author\'s goal is persuasive: providing reasons and scientific evidence to convince decision-makers to allocate 30 minutes of daily recess.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4],
      stem: 'What can the reader infer from the author\'s response to school principals in paragraph 4?',
      choices: [
        ['The author agrees that test preparation is the only thing that matters in school.', 'The author argues against sacrificing recess for test prep.'],
        'Taking brief physical breaks actually enhances children\'s ability to learn and perform on schoolwork.',
        ['Principals believe children should sleep during class instead of playing.', 'Principals worry about instructional minutes, not sleep.'],
        ['Children learn better when they are forced to sit still for eight hours.', 'The author explains sitting still too long hurts focus.'],
      ],
      answer: 1,
      explain: 'Paragraph 4 explains that research shows movement breaks help children work faster and retain knowledge, refuting the fear that recess wastes time.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [1],
      stem: 'Which detail from paragraph 1 shows how students behave when they sit too long without a break?',
      choices: [
        '"By eleven o\'clock, many students are fidgeting with pencils, resting their chins on their desks, and losing focus."',
        ['"On a sunny Thursday morning at Oakridge Elementary..."', 'This sets the time and location.'],
        ['"Elementary schools should provide at least thirty minutes of recess..."', 'This is the author\'s recommendation.'],
        ['"Medical researchers at Texas pediatric hospitals report..."', 'This introduces research in paragraph 2.'],
      ],
      answer: 0,
      explain: 'Fidgeting with pencils, resting chins on desks, and losing focus describe observable student behaviors caused by sitting too long.',
    }),
    mcq({
      standard: 'rla:3.9E.i', cites: [4],
      stem: 'Which statement best expresses the claim the author reinforces in the conclusion of paragraph 4?',
      choices: [
        ['Test preparation should be replaced entirely with indoor board games.', 'The author does not advocate board games.'],
        ['School days should be shortened to two hours.', 'The author proposes 30 minutes of recess.'],
        'Providing outdoor playtime is an essential investment that benefits student health and learning.',
        ['Children learn best when they sit at desks all afternoon.', 'The author argues against continuous desk sitting.'],
      ],
      answer: 2,
      explain: 'In the final sentence of paragraph 4, the author concludes that outdoor play is an essential investment in students\' health, happiness, and learning.',
    }),
  ],
});
