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
        ['To explain why military aviation played such a decisive role in European World War I combat.', 'The paragraph mentions John\'s wartime service only to provide context for his conversation with Bessie.'],
        ['To prove that John was a more experienced and capable pilot than his younger sister Bessie.', 'John was not an aviator; he was teasing his sister during a conversation in the barbershop.'],
        'To illustrate the unexpected moment that sparked Bessie\'s determination to become a pilot.',
        ['To describe the daily routines of American soldiers who remained stationed in postwar France.', 'The anecdote focuses on Bessie\'s personal decision rather than military life in France.'],
      ],
      answer: 2,
      explain: 'An anecdote is a brief, meaningful real-life story. John\'s joke sparked Bessie\'s resolve: "She decided right then that she would fly" (paragraph 4).',
    }),
    msq({
      standard: 'rla:5.6G',
      stem: 'Which **two** details best show that Bessie was determined?',
      choices: [
        ['She was one of thirteen children born to a poor family.', 'This describes her family size, not her personal determination.'],
        'When American schools refused her, she learned French and went to France.',
        ['She worked as a manicurist in a Chicago barbershop.', 'This describes her early job, not an act of determination.'],
        'She kept training even after a classmate died in a crash.',
        ['Crowds came to see her perform aerial tricks across the country.', 'This demonstrates her popularity, not her inner perseverance.'],
      ],
      answers: [1, 3],
      explain: 'Bessie demonstrated determination by finding an alternative path when American schools turned her away and by persevering through deadly training conditions in France.',
    }),
    twoq({
      standard: 'rla:5.7C', cites: [8],
      a: {
        prompt: 'Part A: What does Bessie\'s condition for flying in Waxahachie reveal about her character?',
        choices: [
          ['She felt anxious about performing dangerous aerial stunts before hometown crowds.', 'Bessie was eager to fly once fair conditions were met and was not intimidated by stunts.'],
          'She used her public fame to take a courageous stand against racial discrimination.',
          ['She demanded higher financial compensation from the event managers before flying.', 'The passage discusses her insistence on integrated entrance gates, not money.'],
          ['She held a bitter grudge against Texas and refused to ever visit her home state.', 'Bessie gladly accepted the invitation to perform once organizers agreed to her terms.'],
        ],
        answer: 1,
      },
      b: {
        prompt: 'Part B: Which sentence from the selection best supports the answer to Part A?',
        choices: [
          ['"She flew loops and figure eights and walked out on the wings of her plane." (paragraph 8)', 'This sentence describes her aerobatic maneuvers rather than her moral stand against discrimination.'],
          ['"Today, schools and streets carry Bessie Coleman\'s name." (paragraph 10)', 'This sentence describes posthumous honors rather than her stand in Waxahachie.'],
          ['"She died in a plane accident in 1926, before she could open it." (paragraph 9)', 'This quotation reports her death rather than her refusal to perform under segregated conditions.'],
          '"When she was invited to perform in her hometown of Waxahachie, she refused to fly unless Black and white spectators could enter through the same gate." (paragraph 8)',
        ],
        answer: 3,
      },
      explain: 'Bessie used her prominence as a performer to insist that Black and white spectators enter through the same gate, demonstrating her commitment to racial fairness.',
    }),
    mcq({
      standard: 'rla:5.10B',
      stem: 'The author structures Bessie Coleman\'s biography in chronological order. How does this organizational pattern support the author\'s purpose?',
      choices: [
        'It traces how Bessie systematically confronted and overcame successive social barriers throughout her life.',
        ['It contrasts Bessie\'s flying techniques with those of other prominent female barnstormers of the 1920s.', 'The biography does not compare Bessie\'s piloting techniques to those of other barnstormers.'],
        ['It provides aspiring aviators with step-by-step instructions for completing solo cross-country flights.', 'The selection is a historical narrative of Coleman\'s life, not an aeronautical training manual.'],
        ['It explains the complex military strategies used by French and American forces during World War I.', 'World War I is mentioned only briefly to explain John Coleman\'s military service.'],
      ],
      answer: 0,
      explain: 'Presenting events in time order allows the reader to follow Bessie\'s journey from the Texas cotton fields to international pilot certification, highlighting how she conquered each barrier step by step.',
    }),
    mcq({
      standard: 'rla:5.6F', cites: [6],
      stem: 'Why did Bessie attend French language classes at night while working in Chicago?',
      choices: [
        ['She needed to read French poetry and historical literature for college.', 'Bessie studied French specifically to pursue pilot training, not literature.'],
        ['Her employer at the Chicago barbershop required staff to speak French.', 'Her manicurist job at the barbershop had no connection to foreign languages.'],
        ['Her brother John insisted that all family members learn foreign idioms.', 'John playfully teased her about French women; he never demanded that she study languages.'],
        'To prepare herself to communicate and study at an aviation school in France.',
      ],
      answer: 3,
      explain: 'Paragraph 6 explains that because American flight schools denied her admission, Bessie studied French at night to prepare for flight instruction in France.',
    }),
    mcq({
      standard: 'rla:5.3B', cites: [5],
      stem: 'In paragraph 5, the author writes that every flight school "turned her away." What does the phrase **turned her away** mean in this context?',
      choices: [
        ['advised her to study numbers', 'Bessie already had a gift for math; the schools outright rejected her admission.'],
        ['taught her how to steer a plane', 'The schools denied her entry rather than providing flight instruction.'],
        'refused to admit or teach her',
        ['directed her toward other fields', 'The schools rejected her completely because of prejudice rather than advising alternative careers.'],
      ],
      answer: 2,
      explain: 'The preceding sentence states that American schools would not accept women or Black students, showing that "turned her away" means refused admission.',
    }),
    mcq({
      standard: 'rla:5.10A',
      stem: 'What central message does the author convey through Bessie Coleman\'s life story?',
      choices: [
        ['Early twentieth-century aviation was far too perilous for anyone except military-trained combat pilots.', 'While aviation was hazardous, the central theme celebrates Coleman\'s fearless triumph over adversity.'],
        'Perseverance and courage empower individuals to overcome deep-seated prejudices and achieve their dreams.',
        ['Older siblings should refrain from teasing younger family members about career choices and personal goals.', 'John\'s teasing served as a spark for Bessie\'s career rather than the central moral lesson of the text.'],
        ['Mastering a foreign language is an essential prerequisite for entering modern technical professions.', 'Learning French was a practical means to an end, not the overarching moral message of the biography.'],
      ],
      answer: 1,
      explain: 'The final paragraph emphasizes that Coleman "refused to let anyone decide where she could go," reinforcing the message that determination enables people to overcome unfair barriers.',
    }),
  ],
});
