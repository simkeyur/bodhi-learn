// Grade 4 fiction: an original story. Questions cover plot elements, character interactions,
// words in context, setting, theme, text evidence, and inferences.

import { makeSet, mcq, msq, twoq } from '../author.ts';

export const FICTION_GOAT = makeSet({
  id: 'g4-fiction-goat',
  grade: 4,
  kind: 'reading',
  title: 'The Blue Ribbon Goat',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g4-fiction-goat-p',
    title: 'The Blue Ribbon Goat',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'Ten-year-old Mateo stood outside the animal barn at the county fair. He held a wire brush in his hand. Inside the wooden pen stood Barnaby, his Boer goat. Mateo had brushed Barnaby\'s white coat until it shined like clean cloth. But the goat was refusing to move.' },
      { kind: 'p', text: '"He knows it is his turn in the ring," said his sister Sofia. She leaned over the wooden railing. "Last year my calf did the same thing before judging. She planted all four feet and acted like she was stuck to the ground."' },
      { kind: 'p', text: '"The judge is calling our class right now," Mateo said softly. "If I cannot lead him into the ring in two minutes, we will be out of the contest. I have practiced walking him every morning since March."' },
      { kind: 'p', text: 'Barnaby lowered his head. He was a good eater, but right now he seemed scared. Loud voices came over the speakers. Colorful flags fluttered from the metal roof.' },
      { kind: 'p', text: 'Mateo pulled on the leather halter. But Barnaby dug his feet into the wood shavings. Pulling harder only made the goat lean back. Mateo took a slow breath. Getting upset would not help. He could not drag a heavy goat across the barn.' },
      { kind: 'p', text: 'Then Mateo remembered what his grandfather always said at their Texas ranch: *A stubborn goat follows food, not force.*' },
      { kind: 'p', text: 'Mateo reached into his pocket. He pulled out a small handful of green alfalfa pellets. He placed two pellets in his palm. He held his open hand near Barnaby\'s black nose. Barnaby sniffed the air with curiosity. He stretched his neck forward, ate the pellets, and took one tentative step.' },
      { kind: 'p', text: '"That is it," Sofia whispered with a smile. "Keep him looking at you, not the crowd."' },
      { kind: 'p', text: 'Mateo stepped backward out of the pen. He dropped one pellet every few feet on the floor. Wanting the tasty treat, Barnaby trotted smoothly behind him. They walked out of the barn and into the bright dirt ring. The announcer called, "Entry number forty-two, enter the ring!"' },
      { kind: 'p', text: 'In the show ring, Mateo held Barnaby\'s head high. He placed the goat\'s feet neatly on the dirt. He looked the judge in the eye. Barnaby stood still, calm and proud. Ten minutes later, the judge pinned a blue ribbon on Mateo\'s shirt. Mateo patted Barnaby\'s back. The goat gently bumped Mateo\'s hand, looking for one last treat.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.8C', cites: [3, 9],
      stem: 'Which event marks the climax of the story?',
      choices: [
        ['Mateo brushes Barnaby\'s white coat in the wooden barn pen.', 'This is rising action at the beginning.'],
        ['Sofia tells Mateo about how her young calf froze last year.', 'This is background conversation.'],
        'Mateo coaxes Barnaby into the ring with pellets.',
        ['The judge pins a blue ribbon onto Mateo\'s shirt pocket.', 'This is the resolution after the problem is solved.'],
      ],
      answer: 2,
      explain: 'The climax is the turning point of greatest tension. Mateo is about to be disqualified when he solves the problem by coaxing Barnaby into the arena.',
    }),
    twoq({
      standard: 'rla:4.8B', cites: [1, 5, 10],
      a: {
        prompt: 'Part A: How does Mateo change from the beginning of the story to the end?',
        choices: [
          'He moves from feeling worried to feeling confident.',
          ['He starts out bored and ends up wishing he had entered a calf.', 'Mateo was never bored; he worked hard since March.'],
          ['He changes from listening to Sofia to ignoring her helpful ideas.', 'Sofia encouraged him throughout the event.'],
          ['He begins angry at Barnaby and ends up selling him to a neighbor.', 'Mateo patted Barnaby proudly at the end.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation best supports the answer to Part A?',
        choices: [
          ['"Inside the wooden pen stood Barnaby, his Boer goat."', 'This describes the setting at the start.'],
          ['"Pulling harder only made the goat lean back."', 'This shows the initial struggle.'],
          '"He looked the judge in the eye."',
          ['"The goat gently bumped Mateo\'s hand, looking for one last treat."', 'This describes the goat\'s behavior.'],
        ],
        answer: 2,
      },
      explain: 'Mateo starts worried about disqualification. In paragraph 10, he stands with head high and looks the judge in the eye, demonstrating earned confidence.',
    }),
    mcq({
      standard: 'rla:4.3B', cites: [7],
      stem: 'Read this sentence from paragraph 7: "He stretched his neck forward, ate the pellets, and took one tentative step." What does the word **tentative** mean?',
      choices: [
        ['moving in a clumsy manner', 'The goat took a careful step, not clumsy.'],
        'careful and unsure',
        ['acting in an angry manner', 'Barnaby was calming down.'],
        ['leaping with great energy', 'A tentative step is cautious, not energetic.'],
      ],
      answer: 1,
      explain: 'Barnaby was suspicious earlier. His first step forward while sniffing the food is cautious and hesitant.',
    }),
    mcq({
      standard: 'rla:4.8D', cites: [4],
      stem: 'How does the setting influence Barnaby in paragraph 4?',
      choices: [
        ['Chilly weather makes Barnaby feel sleepy and sluggish in the pen.', 'The barn was warm.'],
        ['The smell of other animals makes Barnaby try to run away.', 'Animal smells are not mentioned.'],
        ['Mud in the arena makes it too slippery for Barnaby to walk.', 'Barnaby was still in his pen on shavings.'],
        'Loud speakers and flags make him afraid to move.',
      ],
      answer: 3,
      explain: 'Paragraph 4 explains that Barnaby is scared by loud voices over the speakers and flags fluttering from the roof, causing him to freeze.',
    }),
    msq({
      standard: 'rla:4.8A',
      stem: 'Which **two** themes are developed in the story?',
      choices: [
        'Patience and understanding work better than force.',
        ['Older siblings always know the right answers.', 'Sofia shared a story, but Mateo solved the problem using his grandfather\'s advice.'],
        'Remembering wise advice can help solve difficult moments.',
        ['Livestock competitions are too noisy for animals.', 'The setting was noisy, but that is a detail rather than a broad theme.'],
        ['Goats should never be trained for competitions.', 'Barnaby won a blue ribbon when handled properly.'],
      ],
      answers: [0, 2],
      explain: 'Mateo realizes pulling harder fails, while understanding what the animal needs succeeds. He also recalls his grandfather\'s advice, which provides the solution.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [5, 6],
      stem: 'What can the reader infer about Mateo\'s grandfather from paragraphs 5 and 6?',
      choices: [
        'He has experience raising animals.',
        ['He served as an official judge at the county fair.', 'The text says he had a Texas ranch, not that he was a judge.'],
        ['He told Mateo never to enter animal competitions.', 'He offered helpful animal advice, not discouraging words.'],
        ['He prefers working with horses rather than goats.', 'The text mentions his advice about goats.'],
      ],
      answer: 0,
      explain: 'Grandfather\'s rule reflects seasoned knowledge gained from years of working with ranch animals.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [3],
      stem: 'Which quotation from paragraph 3 shows that Mateo prepared for the show?',
      choices: [
        ['"The judge is calling our class right now," Mateo said softly.', 'This reports the announcer\'s call.'],
        '"I have practiced walking him every morning since March."',
        ['"If I cannot lead him into the ring in two minutes, we will be out of the contest."', 'This describes the consequence.'],
        ['"She planted all four feet and acted like she was stuck to the ground."', 'This describes Sofia\'s calf from paragraph 2.'],
      ],
      answer: 1,
      explain: 'Practicing every morning for months demonstrates consistent dedication and personal preparation for the show.',
    }),
  ],
});
