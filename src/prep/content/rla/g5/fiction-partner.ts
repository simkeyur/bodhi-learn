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
      standard: 'rla:5.10E',
      stem: 'The story is told in the first person by Priya. How does this affect what the reader knows?',
      choices: [
        'The reader knows Priya\'s thoughts but learns about Diego\'s life only when he tells her.',
        ['The reader knows what every character is thinking.', 'A first-person narrator can share only her own thoughts.'],
        ['The reader learns Diego\'s secret before Priya does.', 'The reader finds out about Diego\'s sister at the same moment Priya does.'],
        ['The reader sees the story from Ms. Ortega\'s point of view.', 'Ms. Ortega is not the narrator.'],
      ],
      answer: 0,
      explain: 'Priya tells the story using "I." Readers share her thoughts and her mistaken idea about Diego, so they are surprised along with her when he explains why he leaves early (paragraph 5).',
      cites: [5],
    }),
    mcq({
      standard: 'rla:5.10F', cites: [1],
      stem: 'Read these sentences from paragraph 1. "I had a binder. I had color-coded tabs. Diego had a pencil, and it was usually missing its eraser." What do these sentences show about the narrator\'s voice?',
      choices: [
        ['She sounds frightened and nervous.', 'Nothing in these sentences shows fear.'],
        'She sounds organized and a little bit funny as she complains.',
        ['She sounds sad and lonely.', 'She is annoyed, not sad.'],
        ['She sounds formal, like a textbook.', 'The short sentences and the joke about the eraser sound casual, not formal.'],
      ],
      answer: 1,
      explain: 'Voice is the personality you hear in the writing. The short, punchy sentences and the joke about Diego\'s eraser show a narrator who loves being organized and is a little funny when she complains.',
    }),
    twoq({
      standard: 'rla:5.8B', cites: [6, 11],
      a: {
        prompt: 'Part A: How does Priya change because of her conflict with Diego?',
        choices: [
          'She learns to ask about people instead of judging them.',
          ['She decides to stop making schedules.', 'She still uses her binder and schedules.'],
          ['She decides to work alone from now on.', 'She works with Diego and they succeed together.'],
          ['She becomes less interested in science.', 'Nothing shows she loses interest in science.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which sentence from the story best supports the answer to Part A?',
        choices: [
          ['"By Thursday, I was so annoyed that I marched up to him at lunch." (paragraph 3)', 'This shows her annoyance before she changes.'],
          ['"We won second place." (paragraph 10)', 'This tells what happened, not how Priya changed.'],
          ['"I just stared." (paragraph 8)', 'This shows surprise, not the lasting change.'],
          '"But now I leave one box empty on every schedule. It\'s for asking questions, and I don\'t mean the science kind." (paragraph 11)',
        ],
        answer: 3,
      },
      explain: 'Priya realizes she never asked why Diego\'s boxes were empty (paragraph 6). At the end she leaves a box on every schedule for asking people questions (paragraph 11).',
    }),
    mcq({
      standard: 'rla:5.8C',
      stem: 'Which event is the climax of the story?',
      choices: [
        ['Ms. Ortega reads the partner list.', 'This starts the conflict at the beginning.'],
        'Diego explains why he can\'t stay after school.',
        ['Diego\'s sister holds the ribbon.', 'This is part of the resolution.'],
        ['Priya wraps ice cubes in foil and wool.', 'This is rising action, as Priya grows more annoyed.'],
      ],
      answer: 1,
      explain: 'The conflict is between Priya and Diego. The turning point comes when Priya confronts him and learns the truth (paragraphs 4 and 5). After that, her feelings and their teamwork change.',
      cites: [4, 5],
    }),
    mcq({
      standard: 'rla:5.6F', cites: [9],
      stem: 'In paragraph 9, Priya says, "Actually, I couldn\'t have said it at all." What can the reader infer from this?',
      choices: [
        ['Priya was too nervous to speak to the judges.', 'She doesn\'t say she was nervous.'],
        ['Priya thinks Diego\'s explanation was wrong.', 'She says she couldn\'t have said it better, so she agrees with him.'],
        'Diego understood the science better than Priya expected.',
        ['The judges did not ask Priya any questions.', 'The story doesn\'t say this.'],
      ],
      answer: 2,
      explain: 'Priya admits she couldn\'t have explained why bubble wrap works. This shows Diego understood the science well, which surprises her after she had judged him.',
    }),
    mcq({
      standard: 'rla:5.3B', cites: [2],
      stem: 'In paragraph 2, Priya says Diego\'s backpack is a place "where things go to disappear forever." What does this suggest?',
      choices: [
        'Diego loses track of papers easily.',
        ['Diego\'s backpack is very large.', 'The phrase is about losing things, not size.'],
        ['Diego hides things on purpose.', 'Nothing suggests he hides things on purpose.'],
        ['The schedule was stolen.', 'The schedule isn\'t stolen. It just gets lost in the backpack.'],
      ],
      answer: 0,
      explain: 'Priya is exaggerating to be funny. Things that "disappear forever" in a backpack get lost, so she thinks Diego will lose the schedule.',
    }),
    mcq({
      standard: 'rla:5.7D',
      stem: 'Which is the best summary of the story?',
      choices: [
        ['Priya has a binder with color-coded tabs. Diego has a pencil. They test ice cubes. Bubble wrap wins.', 'This lists details but leaves out the conflict and how Priya changes.'],
        'Priya thinks her science fair partner Diego doesn\'t care, until she learns he cares for his sister after school. He tests materials at home, they win second place, and Priya learns to ask before judging.',
        ['Diego\'s mom starts working nights, so he picks up his sister from day care every afternoon.', 'This is one important detail, not a summary of the whole story.'],
        ['Priya and Diego enter the science fair and win first place because bubble wrap is the best material.', 'They win second place, and this leaves out the conflict.'],
      ],
      answer: 1,
      explain: 'A good summary tells the conflict, the most important events in order, and how it ends, including how the main character changes.',
    }),
  ],
});
