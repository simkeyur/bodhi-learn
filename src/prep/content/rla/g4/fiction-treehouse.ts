// Grade 4 fiction: first-person narrative. Questions cover point of view (4.10E), plot (4.8C),
// character interactions (4.8B), inference (4.6F), voice (4.10F), context clues (4.3B), and text evidence (4.7C).

import { makeSet, mcq, twoq } from '../author.ts';

export const FICTION_TREEHOUSE = makeSet({
  id: 'g4-fiction-treehouse',
  grade: 4,
  kind: 'reading',
  title: 'The Great Treehouse Rescue',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g4-fiction-treehouse-p',
    title: 'The Great Treehouse Rescue',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'I consider myself a good builder. Give me cedar scrap boards, a box of nails, and twenty feet of rope, and I can build a castle in the sky. My younger cousin, Lucas, is not a builder. Lucas is an expert at dropping tools, stepping on dry sticks, and asking questions that nobody can answer.' },
      { kind: 'p', text: '"Are you sure that branch can hold two people and a heavy toolbox?" Lucas asked from the bottom of the ladder. He held his stuffed armadillo, Barnaby, under his arm like a small football.' },
      { kind: 'p', text: '"Lucas," I sighed, wiping tree sap from my face. "This big oak tree has stood behind Grandma\'s house for a hundred years. The thick limbs are stronger than telephone poles. Now climb up before the sun goes down behind the windmill."' },
      { kind: 'p', text: 'Lucas climbed up the wooden steps. But as he reached the floor of the treehouse, trouble hit. His elbow bumped an open bag on the railing. Barnaby slipped from his hands, bounced off a lower branch, and landed on a thin limb high above the rocky creek.' },
      { kind: 'p', text: 'Lucas froze. Tears came to his eyes. "Barnaby," he whispered softly. "He will fall into the creek and wash all the way down to the ocean."' },
      { kind: 'p', text: 'I wanted to tell him that stuffed toys are tough. But looking at Lucas\'s sad face, I knew my building project had to wait. I could not reach the branch by climbing. The wood was too thin to hold my weight.' },
      { kind: 'p', text: 'Then I saw a long bamboo fishing pole leaning against the tree trunk and my coil of yellow rope. "Do not worry," I told Lucas. "Good builders do not cry; we improvise."' },
      { kind: 'p', text: 'I tied a small wire hook from my tackle box to the tip of the bamboo pole. I taped it tight with black tape. I leaned over the railing while Lucas held my belt loops with both hands. I guided the long rod down through the green leaves.' },
      { kind: 'p', text: 'The wire hook caught Barnaby\'s tail. Holding my breath, I lifted the pole slowly. Lucas grabbed Barnaby\'s ear and pulled him onto the wooden floor. Lucas hugged his armadillo with a giant smile.' },
      { kind: 'p', text: '"Okay," Lucas said, wiping away his tears. "Maybe you really are a great builder."' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.10E', cites: [1],
      stem: 'From which point of view is the story told?',
      choices: [
        'First-person, told by an older cousin.',
        ['Third-person limited, focusing on Lucas\'s feelings in the yard.', 'The narrator uses words like "I", "me", and "my".'],
        ['Third-person omniscient, told by a narrator outside the family.', 'The story is narrated directly by a character using "I."'],
        ['Second-person, speaking directly to the reader as "you" in line.', 'The narrator tells their own story.'],
      ],
      answer: 0,
      explain: 'The narrator uses first-person pronouns ("I consider myself", "My younger cousin") to share personal experiences directly.',
    }),
    mcq({
      standard: 'rla:4.8C', cites: [4, 8, 9],
      stem: 'Which event represents the climax of the story?',
      choices: [
        ['The narrator wipes sticky tree sap from his face.', 'This is a small detail near the start.'],
        ['Lucas drops his stuffed armadillo onto a thin branch.', 'This is the problem that begins the rescue.'],
        'The narrator hooks Barnaby with the long pole.',
        ['Lucas compliments the narrator on being a great builder.', 'This is the resolution after the toy is safe.'],
      ],
      answer: 2,
      explain: 'The climax is the moment of greatest tension when the narrator delicately maneuvers the bamboo pole and hook to retrieve the toy.',
    }),
    twoq({
      standard: 'rla:4.8B', cites: [1, 9, 10],
      a: {
        prompt: 'Part A: How does the narrator\'s feeling toward Lucas change?',
        choices: [
          'He becomes caring and helpful instead of annoyed.',
          ['He decides that Lucas should never play near the treehouse again.', 'The narrator is pleased to help Lucas.'],
          ['He leaves the platform and lets Lucas solve the problem alone.', 'The narrator stays and builds a tool to help.'],
          ['He grows angry because Lucas ruined the afternoon construction.', 'The narrator put building aside willingly.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation best supports the answer to Part A?',
        choices: [
          ['"My younger cousin, Lucas, is not a builder."', 'This shows only his initial teasing attitude.'],
          '"I knew my building project had to wait."',
          ['"His elbow bumped an open bag on the railing."', 'This describes the accident happening.'],
          ['"He held his stuffed armadillo, Barnaby, under his arm like a small football."', 'This describes Lucas holding his toy.'],
        ],
        answer: 1,
      },
      explain: 'While the narrator began by teasing Lucas, seeing Lucas\'s heartbreak prompts empathy, causing the narrator to put aside building to help him.',
    }),
    mcq({
      standard: 'rla:4.3B', cites: [7],
      stem: 'Read this sentence from paragraph 7: "Good builders do not cry; we improvise." What does **improvise** mean?',
      choices: [
        ['to give up and walk away from a difficult challenge', 'The narrator did not give up.'],
        ['to follow a printed instruction manual step by step', 'There was no manual; the narrator used tools on hand.'],
        ['to buy brand-new tools at the local hardware store', 'The narrator used items already on hand.'],
        'to solve a problem with what is on hand',
      ],
      answer: 3,
      explain: 'To improvise means to solve a problem on the spot using whatever tools or materials happen to be nearby.',
    }),
    mcq({
      standard: 'rla:4.10F', cites: [1, 7],
      stem: 'How does the author\'s word choice contribute to the narrator\'s voice?',
      choices: [
        ['It makes the narrator sound fearful and unsure of every step.', 'The narrator speaks with humor and creative confidence.'],
        'It creates a confident and inventive personality.',
        ['It gives the impression of a strict and grumpy scientist.', 'The tone is playful and warm, not grumpy.'],
        ['It sounds like a formal history textbook from the past.', 'The language is casual and energetic.'],
      ],
      answer: 1,
      explain: 'Phrases like "castle in the sky" and "we improvise" establish a confident, creative, and lively narrative voice.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [8],
      stem: 'What can the reader infer from Lucas holding the narrator\'s belt loops?',
      choices: [
        ['Lucas was trying to pull his cousin back down the steps.', 'Lucas was assisting the rescue effort.'],
        ['Lucas was scared of heights and trying to climb on him.', 'Lucas was steadying his cousin on the platform.'],
        ['Lucas wanted to take the long bamboo pole for himself.', 'Lucas was focused on rescuing his armadillo.'],
        'Lucas wanted to keep the narrator from falling.',
      ],
      answer: 3,
      explain: 'Holding belt loops while someone leans over a high railing keeps them steady and prevents them from falling.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [3],
      stem: 'Which quotation shows the narrator\'s confidence in the oak tree?',
      choices: [
        ['"My younger cousin, Lucas, is not a builder."', 'This describes Lucas, not the tree.'],
        ['"He held his stuffed armadillo, Barnaby, under his arm like a small football."', 'This describes Lucas holding his toy.'],
        '"The thick limbs are stronger than telephone poles."',
        ['"Then I saw a long bamboo fishing pole leaning against the tree trunk..."', 'This describes finding a tool.'],
      ],
      answer: 2,
      explain: 'Comparing the limbs to telephone poles demonstrates the narrator\'s firm belief that the tree is strong and safe.',
    }),
  ],
});
