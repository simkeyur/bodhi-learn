// Grade 3 argumentative: An opinion essay advocating for school field trips.
// Word count: ~263 words (range 250-650).
// Questions cover claim (3.9E.i), facts vs opinion (3.9E.ii), audience (3.9E.iii),
// author's purpose (3.10A), inference (3.6F), key details (3.6G), and text evidence (3.7C).

import { makeSet, mcq } from '../author.ts';

export const ARG_FIELDTRIPS = makeSet({
  id: 'g3-arg-fieldtrips',
  grade: 3,
  kind: 'reading',
  title: 'Learning on the Move: Why Field Trips Matter',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g3-arg-fieldtrips-p',
    title: 'Learning on the Move: Why Field Trips Matter',
    genre: 'argumentative',
    blocks: [
      { kind: 'p', text: 'On a sunny Tuesday morning, Mrs. Lopez\'s third-grade class walks out of the school doors. Instead of sitting at desks with paper worksheets, the students ride a yellow bus to a local nature center. There, they see real owls. They touch smooth rocks. They watch honeybees work in a hive. School field trips give students great experiences that cannot be matched inside a classroom. Every elementary school should make sure students go on field trips.' },
      { kind: 'p', text: 'First, field trips make book lessons come alive. In science class, children read about plant life cycles from a book. But during a trip to a garden, they can smell sweet flowers. They can look at plant roots in damp soil. They can plant seeds with their own hands. Seeing real things helps children understand ideas and remember facts longer.' },
      { kind: 'p', text: 'Second, trips teach children how to explore their town with good manners. Outside school walls, students learn to walk quietly in museums. They ask polite questions to guides. They stay close to their partners. In my view, learning how to be polite guests in public places is just as helpful as scoring high on a spelling test.' },
      { kind: 'p', text: 'Some school leaders worry that field trips cost too much money. Others worry that trips take time away from class tests. However, many great trips are free. Classes can walk to a nearby fire station. They can tour a public library. They can study native trees in a city park. These simple visits build wonder without spending money. Field trips are not wasted hours; they are an important part of learning.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9E.i', cites: [1],
      stem: 'What is the author\'s central claim in the essay?',
      choices: [
        'Elementary schools should ensure that all students participate in educational field trips.',
        ['Third-grade students should spend every school day learning outdoors at nature centers.', 'The author advocates regular field trips, not spending every day away.'],
        ['Teachers should stop assigning paper worksheets and reading science textbooks in classroom lessons.', 'The author believes field trips support classroom learning, not replace it entirely.'],
        ['School districts should replace yellow school buses with walking tours to save fuel.', 'The author mentions yellow buses as a normal way to travel on trips.'],
      ],
      answer: 0,
      explain: 'In paragraph 1, the author directly states the claim: "Every elementary school should make sure students go on field trips."',
    }),
    mcq({
      standard: 'rla:3.9E.ii', cites: [2],
      stem: 'Which statement from paragraph 2 is a factual statement that can be proven true?',
      choices: [
        ['Visiting a flower garden is always the most enjoyable part of the school year.', 'Personal enjoyment is a subjective opinion, not a provable fact.'],
        'Students visiting a garden can observe plant roots growing in the damp soil.',
        ['Every elementary child prefers hands-on gardening over reading library books.', 'Individual reading preferences vary and cannot be universally proven.'],
        ['Smelling fresh blossoms is much more important than taking science notes.', 'Judging importance is a personal value judgment rather than a verifiable fact.'],
      ],
      answer: 1,
      explain: 'Observing plant roots during a garden visit is an observable, provable fact.',
    }),
    mcq({
      standard: 'rla:3.9E.ii', cites: [3],
      stem: 'Which phrase from paragraph 3 signals that the author is expressing an opinion rather than stating a verifiable fact?',
      choices: [
        ['"Outside school walls"', 'This phrase describes a physical location rather than an opinion.'],
        ['"teach children how to explore"', 'This phrase introduces an educational reason rather than signaling a personal viewpoint.'],
        '"In my view"',
        ['"ask polite questions to guides"', 'Asking polite questions is an observable student behavior rather than an opinion phrase.'],
      ],
      answer: 2,
      explain: 'The phrase "In my view" clearly signals the author\'s personal opinion and judgment.',
    }),
    mcq({
      standard: 'rla:3.9E.iii', cites: [1, 4],
      stem: 'Who is the author\'s primary intended audience for this essay?',
      choices: [
        ['Bus drivers and mechanics who maintain transportation routes for schools.', 'The essay discusses student learning and academic value rather than bus maintenance.'],
        ['Scientists who work full time researching honeybee behavior in outdoor nature centers.', 'Honeybees are an example of what children observe, not the intended reader.'],
        'School administrators and educators who make decisions about schedules and budgets.',
        ['Tour guides who design informational pamphlets for public city parks.', 'Park staff already provide tours; the essay is aimed at people deciding whether classes can go.'],
      ],
      answer: 2,
      explain: 'The essay is directed toward school leaders, principals, and teachers who have the authority to schedule school field trips.',
    }),
    mcq({
      standard: 'rla:3.10A', cites: [1, 2, 3, 4],
      stem: 'What is the author\'s main purpose for writing the essay?',
      choices: [
        ['To explain how honeybees build hives and produce honey in nature centers.', 'Honeybees are an example of what children observe, not the main topic of the essay.'],
        'To persuade readers that field trips provide valuable learning experiences for students.',
        ['To compare the differences between visiting a fire station and touring a museum.', 'The author mentions different locations to show variety, not to compare how they operate.'],
        ['To entertain readers with a humorous story about a third-grade bus ride.', 'The passage is a persuasive essay with structured arguments, not an entertaining fictional story.'],
      ],
      answer: 1,
      explain: 'The author wrote the essay to convince readers that field trips provide essential educational and social benefits for elementary students.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4],
      stem: 'What can the reader infer from paragraph 4 about field trips?',
      choices: [
        ['Field trips are only worthwhile if students travel long distances across the state.', 'Paragraph 4 emphasizes that nearby local visits in town are educational and inspiring.'],
        'Schools can provide meaningful learning trips without spending large amounts of money.',
        ['Teachers prefer to cancel field trips so students have more time for written tests.', 'The author argues against canceling trips and explains that they are an essential part of learning.'],
        ['Public libraries and city parks require paid admission tickets for elementary classes.', 'Paragraph 4 states that trips to local libraries and city parks can be taken without cost.'],
      ],
      answer: 1,
      explain: 'Paragraph 4 points out that walking to a local fire station, library, or park provides rich experiences without costing money.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [1],
      stem: 'Which quotation from paragraph 1 shows what students do at the nature center?',
      choices: [
        ['"On a sunny Tuesday morning, Mrs. Lopez\'s third-grade class walks out of the school doors."', 'This sentence describes students departing from the school building, not activities at the center.'],
        ['"Instead of sitting at desks with paper worksheets, the students ride a yellow bus to a local nature center."', 'This sentence describes riding the bus rather than the specific nature observations.'],
        '"There, they see real owls."',
        ['"Every elementary school should make sure students go on field trips."', 'This sentence states the author\'s overall persuasive claim rather than student activities.'],
      ],
      answer: 2,
      explain: 'In paragraph 1, the text describes how students at the nature center see real owls, touch rocks, and watch bees.',
    }),
    mcq({
      standard: 'rla:3.9E.i', cites: [4],
      stem: 'Which statement best summarizes the concluding argument made in paragraph 4?',
      choices: [
        ['Standardized testing should replace all afternoon activities during the spring term.', 'The author argues that tests should not crowd out valuable hands-on learning experiences.'],
        ['Schools should spend their annual budgets on distant travel rather than classroom materials.', 'The author emphasizes free and low-cost local destinations rather than expensive distant travel.'],
        ['Elementary classes should only visit outdoor parks when the weather is warm and dry.', 'Paragraph 4 focuses on budget and learning benefits rather than weather guidelines.'],
        'Field trips are an essential part of a well-rounded education rather than lost instructional time.',
      ],
      answer: 3,
      explain: 'In paragraph 4, the author concludes by reinforcing the claim that field trips are an essential and important part of student learning.',
    }),
  ],
});
