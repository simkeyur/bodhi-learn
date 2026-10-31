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
        ['Third graders should spend every school day learning at science centers.', 'The author advocates regular field trips, not spending every day away.'],
        'Schools should make sure students go on field trips.',
        ['Classroom teachers should stop reading science textbooks to children.', 'The author believes trips support textbooks, not replace them entirely.'],
        ['Elementary students should never take yellow buses during the school day.', 'The author mentions yellow buses as a normal way to travel on trips.'],
      ],
      answer: 1,
      explain: 'In paragraph 1, the author directly states the claim: "Every elementary school should make sure students go on field trips."',
    }),
    mcq({
      standard: 'rla:3.9E.ii', cites: [2],
      stem: 'Which statement from paragraph 2 is a fact that can be proved true?',
      choices: [
        ['Visiting a flower garden is always the most exciting part of third grade.', 'Excitement is a personal feeling and opinion, not a provable fact.'],
        ['Every child loves digging their hands into wet garden dirt after school.', 'Not all children feel the same way about gardening.'],
        'During a trip to a garden, students can look at plant roots.',
        ['Gardening is much more entertaining than reading stories in a library.', 'Entertaining is a subjective opinion.'],
      ],
      answer: 2,
      explain: 'Observing plant roots during a garden visit is an observable, provable fact.',
    }),
    mcq({
      standard: 'rla:3.9E.ii', cites: [3],
      stem: 'Which words from paragraph 3 signal that the author is expressing an opinion rather than stating a fact?',
      choices: [
        ['"Outside school walls"', 'This phrase describes a physical location, not an opinion.'],
        ['"Second, trips teach children"', 'This introduces a reason, not personal judgment words.'],
        '"In my view"',
        ['"close to their partners"', 'Staying close describes a physical rule, not an opinion.'],
      ],
      answer: 2,
      explain: 'The phrase "In my view" clearly signals the author\'s personal opinion and judgment.',
    }),
    mcq({
      standard: 'rla:3.9E.iii', cites: [1, 4],
      stem: 'Who is the author\'s primary intended audience for this essay?',
      choices: [
        ['Bus mechanics who repair engines on yellow school buses.', 'The essay focuses on student learning, not bus maintenance.'],
        'School leaders and teachers who plan lessons.',
        ['Botanists who work inside university science laboratories.', 'The essay addresses elementary school activities, not university research.'],
        ['Tour guides who welcome visitors to Texas nature centers.', 'The author aims to convince educators to schedule trips.'],
      ],
      answer: 1,
      explain: 'The essay is directed toward school leaders, principals, and teachers who have the authority to schedule school field trips.',
    }),
    mcq({
      standard: 'rla:3.10A', cites: [1, 2, 3, 4],
      stem: 'What is the author\'s main purpose for writing the essay?',
      choices: [
        ['To explain how bumblebees construct honeycombs inside hives.', 'Honeybees are briefly mentioned as an example, not the purpose.'],
        ['To compare how public libraries differ from town fire stations.', 'Libraries and stations are listed as examples of free visits.'],
        'To persuade readers that students need field trips.',
        ['To describe the history of yellow school buses built in Texas.', 'Bus history is not mentioned in the text.'],
      ],
      answer: 2,
      explain: 'The author wrote the essay to convince readers that field trips provide essential educational and social benefits for elementary students.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4],
      stem: 'What can the reader infer from paragraph 4 about field trips?',
      choices: [
        ['Trips are only helpful if students travel far away from town.', 'Paragraph 4 emphasizes that nearby local visits are valuable.'],
        ['Students prefer staying in classrooms to take extra practice tests.', 'The author argues students benefit from leaving desks.'],
        ['Schools must buy expensive tickets before going on any trip.', 'Paragraph 4 explains that many great trips are free.'],
        'Valuable trips can take place close to school for free.',
      ],
      answer: 3,
      explain: 'Paragraph 4 points out that walking to a local fire station, library, or park provides rich experiences without costing money.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [1],
      stem: 'Which quotation from paragraph 1 shows what students do at the nature center?',
      choices: [
        ['"Mrs. Lopez\'s third-grade class walks out of the school doors."', 'This describes students leaving the building.'],
        ['"Instead of sitting at desks with paper worksheets..."', 'This describes classroom work.'],
        '"There, they see real owls."',
        ['"Every elementary school should make sure students go on field trips."', 'This states the author\'s main claim.'],
      ],
      answer: 2,
      explain: 'In paragraph 1, the text describes how students at the nature center see real owls, touch rocks, and watch bees.',
    }),
    mcq({
      standard: 'rla:3.9E.i', cites: [4],
      stem: 'Which statement best restates the claim made in paragraph 4?',
      choices: [
        ['Practice tests should take up the entire school day.', 'The author believes test practice should not crowd out valuable trips.'],
        ['Students should spend money on long bus trips every week.', 'The author emphasizes that trips can be free and local.'],
        'Field trips are an important part of learning.',
        ['Schools should cancel visits to local fire stations.', 'The author recommends visiting local fire stations.'],
      ],
      answer: 2,
      explain: 'In paragraph 4, the author concludes by reinforcing the claim that field trips are an essential and important part of student learning.',
    }),
  ],
});
