// Grade 5 fiction told in the first person, with a strong narrator's voice. Questions cover point of view,
// voice, characters, plot, inference, words in context and summary.

import { makeSet, mcq, twoq } from '../author.ts';

export const FICTION_PARTNER = makeSet({
  id: 'g5-fiction-partner',
  grade: 5,
  kind: 'reading',
  title: 'The Science Fair Partner',
  intro: 'Read the story and choose the best answer to each question.',
  passages: [{
    id: 'g5-fiction-partner-p',
    title: 'The Science Fair Partner',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'When Ms. Ortega read the partner list for the science fair, I was sure there had been a mistake. "Priya and Diego," she said. Diego? The boy who fell asleep during the fire drill? I had been planning my project since September. I had a binder. I had color-coded tabs. Diego had a pencil, and it was usually missing its eraser.' },
      { kind: 'p', text: 'Our project was supposed to answer a question: Which material keeps ice from melting the longest? I made a schedule with a box for every afternoon. Diego looked at it and said, "Cool." Then he put it in his backpack, where things go to disappear forever.' },
      { kind: 'p', text: 'On Monday, Diego didn\'t come to the library to help. On Tuesday, he said he had to leave early. On Wednesday, I wrapped twelve ice cubes in foil, wool, and newspaper all by myself and timed them until my eyes hurt. By Thursday, I was so annoyed that I marched up to him at lunch.' },
      { kind: 'p', text: '"Do you even care about this project?" I asked.' },
      { kind: 'p', text: 'Diego stared at his tray. "I care," he said quietly. "My mom started working nights, so I pick up my little sister from day care every afternoon. I can\'t stay after school."' },
      { kind: 'p', text: 'I felt my face get hot. I had been so busy filling in boxes on my schedule that I never asked why his boxes were empty.' },
      { kind: 'p', text: 'That night, my phone buzzed. It was a photo from Diego: his kitchen table covered with ice cubes in cups. Each cup was wrapped in something different. There were socks, bubble wrap, a winter hat, and even a sheet of aluminum foil folded like an accordion. Underneath he had written, "Tested 8 more materials. Bubble wrap won. My sister helped time them."' },
      { kind: 'p', text: 'I just stared. He had tested more materials in one night than I had in three days.' },
      { kind: 'p', text: 'On the day of the fair, our poster had two kinds of handwriting: my neat printing and Diego\'s wild capital letters. When the judges asked why bubble wrap worked so well, Diego explained that the trapped air acts like a blanket and keeps warm air from reaching the ice. I couldn\'t have said it better myself. Actually, I couldn\'t have said it at all.' },
      { kind: 'p', text: 'We won second place. Diego\'s little sister got to hold the ribbon, and she wouldn\'t let go of it for the rest of the night.' },
      { kind: 'p', text: 'I still have my binder with its color-coded tabs. But now I leave one box empty on every schedule. It\'s for asking questions, and I don\'t mean the science kind.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:5.10E', cites: [5],
      stem: 'The story is narrated from Priya\'s first-person point of view. How does this perspective affect what the reader experiences?',
      choices: [
        ['The reader knows from the very beginning that Diego has significant family responsibilities preventing him from staying after school.', 'Because Priya is the first-person narrator, the reader only discovers Diego\'s duties when he explains them at lunch.'],
        'The reader experiences Priya\'s internal thoughts and assumptions, learning about Diego\'s situation at the same time she does.',
        ['The reader observes the science fair preparations objectively through Ms. Ortega\'s classroom instructions and rules.', 'Ms. Ortega is not the narrator; the story is filtered through Priya\'s personal perspective.'],
        ['The reader gains equal access to both Priya\'s and Diego\'s private feelings throughout their week of experiment testing.', 'A first-person narrative only shares the narrator\'s personal thoughts, not those of other characters.'],
      ],
      answer: 1,
      explain: 'First-person narration limits the reader\'s knowledge to Priya\'s viewpoint, so the reader shares her initial assumptions and discovers Diego\'s home responsibilities at the same moment she does.',
    }),
    mcq({
      standard: 'rla:5.10F', cites: [1],
      stem: 'Read these sentences from paragraph 1. "I had a binder. I had color-coded tabs. Diego had a pencil, and it was usually missing its eraser." What tone do these sentences convey about Priya\'s voice?',
      choices: [
        ['A panicked and overwhelmed voice worried about failing the science fair.', 'Priya feels confident and well-prepared with her binder, not panicked about failing.'],
        'An organized, detail-oriented voice with a touch of dry humor.',
        ['A deeply sorrowful voice grieving the lack of close classroom friends.', 'Priya is expressing irritation and pride in her organization, not sorrow or grief.'],
        ['A scholarly, scientific voice analyzing the chemical properties of graphite.', 'The tone is casual and humorous rather than a formal scientific analysis.'],
      ],
      answer: 1,
      explain: 'Priya\'s punchy sentences and playful complaint about the missing eraser convey an organized, methodical personality with an amusing, dry perspective.',
    }),
    twoq({
      standard: 'rla:5.8B', cites: [6, 11],
      a: {
        prompt: 'Part A: How does Priya\'s character develop through her partnership with Diego?',
        choices: [
          ['She decides that planning and schedules are completely useless and abandons her color-coded binder.', 'Priya keeps her binder and schedules; she simply leaves space to understand people.'],
          'She realizes that judging others hastily can be misleading and learns to listen before making assumptions.',
          ['She concludes that working entirely alone on school projects is better than collaborating with peers.', 'Priya celebrates their second-place ribbon and values what Diego contributed to their success.'],
          ['She loses her enthusiasm for experimental science after learning how difficult data collection can be.', 'Priya remains proud of their science fair results and continues using organized methods.'],
        ],
        answer: 1,
      },
      b: {
        prompt: 'Part B: Which sentence from the story best supports the answer to Part A?',
        choices: [
          ['"By Thursday, I was so annoyed that I marched up to him at lunch." (paragraph 3)', 'Marching up in annoyance shows Priya\'s initial frustration before she understands Diego\'s situation.'],
          ['"When Ms. Ortega read the partner list for the science fair, I was sure there had been a mistake." (paragraph 1)', 'Thinking a mistake was made shows her initial bias, not her later growth and empathy.'],
          '"I still have my binder with its color-coded tabs. But now I leave one box empty on every schedule." (paragraph 11)',
          ['"We won second place. Diego\'s little sister got to hold the ribbon..." (paragraph 10)', 'Winning second place reports the competition result rather than Priya\'s personal growth.'],
        ],
        answer: 2,
      },
      explain: 'Priya recognizes in paragraph 6 that she was too busy filling in schedule boxes to ask about Diego\'s life. By paragraph 11, leaving an empty box on every schedule symbolizes her newfound empathy and openness to others.',
    }),
    mcq({
      standard: 'rla:5.8C', cites: [4, 5],
      stem: 'Which event represents the climax of the story?',
      choices: [
        ['Ms. Ortega assigns Priya and Diego to work together on the fifth-grade insulation science project.', 'The assignment is the opening inciting incident that sets up the conflict.'],
        ['Priya tests ice cubes wrapped in foil, wool, and newspaper at the library.', 'Testing ice alone in the library is rising action showing Priya\'s mounting frustration.'],
        'Diego explains at lunch that he must care for his sister while his mother works nights.',
        ['The judges award second place to the insulation experiment and present a ribbon.', 'Receiving the ribbon is part of the falling action and resolution.'],
      ],
      answer: 2,
      explain: 'The turning point of the narrative occurs during the confrontation at lunch when Diego reveals his caregiving duties, completely transforming Priya\'s understanding of him.',
    }),
    mcq({
      standard: 'rla:5.6F', cites: [9],
      stem: 'In paragraph 9, Priya notes, "Actually, I couldn\'t have said it at all." What can the reader infer from this statement?',
      choices: [
        ['Priya was too anxious and overwhelmed to speak clearly in front of the competition judges.', 'Priya was confident about the project and was not silenced by fear.'],
        'Diego understood the scientific principles of heat transfer better than Priya expected.',
        ['Priya disagreed strongly with Diego\'s explanation about trapped air pockets and heat transfer.', 'Priya admired Diego\'s explanation and admitted it was better than anything she could say.'],
        ['The judges refused to give Priya an opportunity to answer questions about the experiment.', 'The judges listened to Diego\'s explanation, and Priya recognized his superior answer.'],
      ],
      answer: 1,
      explain: 'Priya\'s admission highlights Diego\'s deep practical grasp of why bubble wrap insulated the ice, challenging her initial assumption that he lacked academic interest.',
    }),
    mcq({
      standard: 'rla:5.3B', cites: [2],
      stem: 'In paragraph 2, Priya describes Diego\'s backpack as a place "where things go to disappear forever." What does this phrase convey?',
      choices: [
        ['Diego intentionally hides his homework assignments from teachers and parents.', 'The humor reflects disorganization, not deliberate deception or hiding papers.'],
        'Diego often misplaces important school papers because his backpack is messy.',
        ['Diego carries multiple backpacks containing specialized compartments and zippers.', 'The statement is an exaggeration about clutter, not a description of backpack features.'],
        ['The project schedule was stolen from Diego\'s locker by an unknown classmate.', 'The schedule was not stolen; Priya simply expects it will be lost in the clutter.'],
      ],
      answer: 1,
      explain: 'Priya uses a humorous hyperbole to characterize Diego as messy and prone to misplacing school handouts in his cluttered backpack.',
    }),
    mcq({
      standard: 'rla:5.7D',
      stem: 'Which statement provides the best summary of the story?',
      choices: [
        'After feeling frustrated by her disorganized partner, Priya discovers that Diego has evening family responsibilities; together they combine their talents to create an award-winning science fair project.',
        ['Priya organizes a detailed schedule with empty boxes to track an experiment about melting ice, but Diego puts the papers into his backpack and leaves school early on Monday and Tuesday afternoon without helping.', 'This option describes early rising action details and omits Diego\'s home testing, the presentation, and the resolution.'],
        ['Diego cares for his younger sister after school while his mother works the night shift, conducting ice cube experiments on his kitchen table with socks, bubble wrap, and an accordion-folded foil sheet.', 'This describes Diego\'s circumstances but leaves out Priya\'s perspective, their conflict, and how they worked together.'],
        ['Ms. Ortega partners Priya and Diego for a fifth-grade science fair project, and the pair successfully win first place after presenting an insulation experiment to a panel of school judges.', 'They won second place rather than first, and this summary omits the personal conflict and Priya\'s growth.'],
      ],
      answer: 0,
      explain: 'A complete summary identifies the main characters, the conflict over partnership expectations, the revelation that resolves the tension, and their joint success at the fair.',
    }),
  ],
});
