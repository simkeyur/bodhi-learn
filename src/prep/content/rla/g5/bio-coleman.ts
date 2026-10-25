// Grade 5 literary nonfiction: an original biography of Bessie Coleman (1892–1926), kept to well-documented
// facts. Questions cover anecdote, key ideas, text evidence, structure, inference, words in context and
// the author's message.

import { makeSet, mcq, msq, twoq } from '../author.ts';

export const BIO_COLEMAN = makeSet({
  id: 'g5-bio-coleman',
  grade: 5,
  kind: 'reading',
  title: 'Queen Bess Takes Flight',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g5-bio-coleman-p',
    title: 'Queen Bess Takes Flight',
    genre: 'literaryNonfiction',
    blocks: [
      { kind: 'p', text: 'The cotton fields around Waxahachie, Texas, stretched as far as young Bessie Coleman could see. Born in 1892 in the small town of Atlanta, Texas, Bessie was one of thirteen children. Her family was poor, and like many children she spent long, hot days picking cotton. But Bessie had a gift for numbers. When the cotton was weighed, she kept the count so carefully that no one could cheat her family out of a single penny.' },
      { kind: 'p', text: 'Bessie walked four miles each way to a one-room schoolhouse. She read every book she could find. She wanted more than the fields could offer, though she did not yet know what it would be.' },
      { kind: 'p', text: 'In her twenties, Bessie moved to Chicago, where two of her brothers lived. She worked in a barbershop, trimming and polishing customers\' fingernails. Her brother John had served in France during World War I, and he loved to tease her. One day he told her that women in France were better than the women at home because French women could fly airplanes.' },
      { kind: 'p', text: 'John was joking, but Bessie did not laugh. She decided right then that she would fly.' },
      { kind: 'p', text: 'That was easier to decide than to do. In the United States at that time, flight schools would not accept a student who was a woman, and they would not accept a student who was Black. Bessie was both. Every school she asked turned her away.' },
      { kind: 'p', text: 'So Bessie made a new plan. If American schools would not teach her, she would go to France, where some schools would. She took French classes at night. She saved every dollar she could, and a Chicago newspaper publisher helped her raise the rest. In 1920, she sailed across the Atlantic Ocean.' },
      { kind: 'p', text: 'Flight school in France was dangerous. The airplanes were made of wood and cloth, and Bessie watched a classmate die in a crash. She kept going. In June 1921, she earned an international pilot\'s license. She was the first African American woman in the world to do so.' },
      { kind: 'p', text: 'Back home, crowds came to see "Queen Bess" perform daring tricks in the sky. She flew loops and figure eights and walked out on the wings of her plane. When she was invited to perform in her hometown of Waxahachie, she refused to fly unless Black and white spectators could enter through the same gate. The organizers agreed.' },
      { kind: 'p', text: 'Bessie dreamed of opening a flight school so that young Black Americans would never be turned away the way she had been. She died in a plane accident in 1926, before she could open it. But her dream did not end. Flying clubs were named for her, and pilots she inspired went on to teach others.' },
      { kind: 'p', text: 'Today, schools and streets carry Bessie Coleman\'s name. When people tell her story, they often start with a brother\'s joke. They end with a woman who refused to let anyone decide where she could go, even the sky.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:5.10G', cites: [3, 4],
      stem: 'Why does the author include the anecdote about Bessie\'s brother John in paragraph 3?',
      choices: [
        'To show the moment that made Bessie decide to become a pilot',
        ['To explain why World War I started', 'The selection mentions the war only to explain where John had been.'],
        ['To show that John was a better pilot than Bessie', 'John was not a pilot. He was teasing her.'],
        ['To describe life in France after the war', 'The anecdote is about Bessie\'s decision, not life in France.'],
      ],
      answer: 0,
      explain: 'An anecdote is a short, interesting story about a real event. John\'s joke is the spark: "She decided right then that she would fly" (paragraph 4).',
    }),
    msq({
      standard: 'rla:5.6G',
      stem: 'Which **two** details best show that Bessie was determined?',
      choices: [
        ['She was one of thirteen children.', 'This describes her family, not her determination.'],
        'When American schools refused her, she learned French and went to France.',
        ['She worked in a barbershop in Chicago.', 'This was her job, not an example of determination.'],
        'She kept training even after a classmate died in a crash.',
        ['Crowds came to see her perform.', 'This shows she was popular, not how she kept going.'],
      ],
      answers: [1, 3],
      explain: 'Determined people keep going when things get hard. Bessie found a new way when schools turned her away (paragraph 6), and she kept training through danger (paragraph 7).',
    }),
    twoq({
      standard: 'rla:5.7C', cites: [8],
      a: {
        prompt: 'Part A: What does Bessie\'s decision about the show in Waxahachie show about her?',
        choices: [
          ['She was afraid to fly in front of her hometown.', 'She agreed to fly once her condition was met.'],
          'She used her fame to stand up for fair treatment.',
          ['She wanted to be paid more money.', 'Money is not mentioned.'],
          ['She did not want to return to Texas.', 'She did return to perform.'],
        ],
        answer: 1,
      },
      b: {
        prompt: 'Part B: Which sentence from the selection best supports the answer to Part A?',
        choices: [
          ['"She flew loops and figure eights and walked out on the wings of her plane."', 'This describes her tricks.'],
          '"She refused to fly unless Black and white spectators could enter through the same gate."',
          ['"Back home, crowds came to see \'Queen Bess\' perform daring tricks in the sky."', 'This shows she was famous, not how she used it.'],
          ['"Today, schools and streets carry Bessie Coleman\'s name."', 'This is about how she is remembered.'],
        ],
        answer: 1,
      },
      explain: 'Bessie was famous enough that the organizers wanted her. She used that to demand that everyone enter through the same gate (paragraph 8).',
    }),
    mcq({
      standard: 'rla:5.10B',
      stem: 'The author tells Bessie\'s story in time order, from her childhood to today. How does this structure help the author\'s purpose?',
      choices: [
        ['It compares Bessie with other pilots.', 'No other pilots are compared with Bessie.'],
        ['It lists the steps for learning to fly.', 'The selection tells a life story, not instructions.'],
        'It shows how Bessie\'s goal grew and how she overcame each obstacle along the way.',
        ['It explains the causes of World War I.', 'The war is only mentioned briefly.'],
      ],
      answer: 2,
      explain: 'Telling the events in order lets readers follow Bessie from the cotton fields, to her decision, to each obstacle and success. That builds the author\'s message about her determination.',
    }),
    mcq({
      standard: 'rla:5.6F', cites: [6],
      stem: 'Why did Bessie take French classes at night?',
      choices: [
        ['She wanted to read books in French.', 'The selection connects the classes to her plan to fly.'],
        ['Her job required her to speak French.', 'Her barbershop job had nothing to do with French.'],
        'She needed to understand her teachers at flight school in France.',
        ['Her brother John asked her to learn.', 'John teased her about flying, not about French.'],
      ],
      answer: 2,
      explain: 'Paragraph 6 explains her plan to go to France because some schools there would teach her. You can infer she learned French so she could understand her lessons there.',
    }),
    mcq({
      standard: 'rla:5.3B', cites: [5],
      stem: 'In paragraph 5, every school "turned her away." What does **turned her away** mean?',
      choices: [
        'refused to let her in',
        ['pointed her in a new direction', 'This is a literal meaning. The schools were saying no.'],
        ['taught her to turn a plane', 'She had not started lessons yet.'],
        ['spun her around', 'The schools didn\'t touch her.'],
      ],
      answer: 0,
      explain: 'The sentence before says the schools would not accept her. So "turned her away" means they refused to let her in.',
    }),
    mcq({
      standard: 'rla:5.10A',
      stem: 'What is the author\'s message in the selection?',
      choices: [
        ['Flying airplanes in the 1920s was too dangerous.', 'Flying was dangerous, but the message is about Bessie\'s courage.'],
        'A determined person can find a way around barriers others put in front of them.',
        ['Brothers should not tease their sisters.', 'The joke is what inspired Bessie, so the selection doesn\'t treat it as a lesson.'],
        ['Everyone should learn a second language.', 'Learning French was one step, not the message.'],
      ],
      answer: 1,
      explain: 'The last paragraph sums up the message: Bessie "refused to let anyone decide where she could go." Each obstacle in her story shows her finding a way around it.',
    }),
  ],
});
