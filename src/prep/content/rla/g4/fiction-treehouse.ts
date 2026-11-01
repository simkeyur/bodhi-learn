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
      stem: 'From which point of view is the story narrated?',
      choices: [
        'First-person, told by an older cousin who shares personal thoughts and memories.',
        ['Third-person limited, focusing strictly on what Lucas sees and feels from the ground.', 'The narrator uses first-person pronouns like "I" and "my" to describe personal thoughts.'],
        ['Third-person omniscient, told by an outside narrator who knows everyone\'s thoughts.', 'The story is told through the cousin\'s eyes rather than an all-knowing narrator.'],
        ['Second-person, written to instruct the reader directly on how to build treehouses.', 'The selection is a fictional story rather than instructional manual written to "you."'],
      ],
      answer: 0,
      explain: 'The narrator uses first-person pronouns ("I consider myself", "My younger cousin") to share personal experiences directly.',
    }),
    mcq({
      standard: 'rla:4.8C', cites: [4, 8, 9],
      stem: 'Which event represents the climax of the story?',
      choices: [
        ['The narrator wipes sticky tree sap off his face while sitting on the treehouse floor.', 'Wiping tree sap is a small realistic detail during the opening exposition.'],
        ['Lucas accidentally bumps the open supply bag on the railing and drops his stuffed armadillo.', 'Dropping the armadillo sets the plot in motion during rising action.'],
        'The narrator carefully maneuvers the makeshift fishing pole to hook Barnaby and lift him to safety.',
        ['Lucas smiles and compliments his cousin on being a great builder after hugging his toy.', 'Lucas praising his cousin occurs in the falling action and resolution.'],
      ],
      answer: 2,
      explain: 'The climax is the moment of greatest tension when the narrator delicately maneuvers the bamboo pole and hook to retrieve the toy.',
    }),
    twoq({
      standard: 'rla:4.8B', cites: [1, 9, 10],
      a: {
        prompt: 'Part A: How does the narrator\'s attitude toward Lucas change over the course of the story?',
        choices: [
          'He shifts from feeling impatient and critical to being supportive and empathetic.',
          ['He decides that Lucas should never be allowed near the treehouse ladder again.', 'The narrator works collaboratively with Lucas rather than banning him from the tree.'],
          ['He gives up on the rescue effort and tells Lucas to climb down and ask Grandma.', 'The narrator takes responsibility and invents a rescue tool rather than sending Lucas away.'],
          ['He becomes furious because Lucas ruined his afternoon building schedule.', 'Seeing Lucas\'s heartbreak prompts genuine empathy rather than anger over lost time.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation best supports the answer to Part A?',
        choices: [
          ['"My younger cousin, Lucas, is not a builder."', 'This sentence from paragraph 1 shows the narrator\'s initial critical opinion.'],
          '"I wanted to tell him that stuffed toys are tough. But looking at Lucas\'s sad face, I knew my building project had to wait."',
          ['"His elbow bumped an open bag on the railing."', 'This sentence from paragraph 4 explains how the toy fell.'],
          ['"He held his stuffed armadillo, Barnaby, under his arm like a small football."', 'This quotation from paragraph 2 describes Lucas holding the toy before climbing.'],
        ],
        answer: 1,
      },
      explain: 'While the narrator began by teasing Lucas, seeing Lucas\'s heartbreak prompts empathy, causing the narrator to put aside building to help him.',
    }),
    mcq({
      standard: 'rla:4.3B', cites: [7],
      stem: 'Read this sentence from paragraph 7: "Good builders do not cry; we improvise." What does the word **improvise** mean in this context?',
      choices: [
        ['to abandon an unfinished project when conditions become too difficult', 'The narrator perseveres and solves the problem rather than giving up.'],
        ['to consult a printed construction blueprint before taking any action', 'The narrator invents a tool on the spot rather than following a printed manual.'],
        ['to travel to a local hardware store to purchase specialized equipment', 'The narrator uses materials already leaning against the tree rather than buying new tools.'],
        'to solve an unexpected problem creatively using whatever materials are available',
      ],
      answer: 3,
      explain: 'To improvise means to solve a problem on the spot using whatever tools or materials happen to be nearby.',
    }),
    mcq({
      standard: 'rla:4.10F', cites: [1, 7],
      stem: 'How does the author\'s language ("castle in the sky," "we improvise") shape the narrator\'s voice?',
      choices: [
        ['It makes the narrator sound hesitant and frightened of taking any risks outdoors.', 'The narrator expresses confidence and pride rather than timid hesitation.'],
        'It establishes an energetic, confident, and resourceful personality.',
        ['It creates the impression of a strict and grumpy scientist lecturing a student.', 'The narrator speaks as a relatable, creative cousin rather than a grumpy lecturer.'],
        ['It makes the narrative sound like an official historical document from long ago.', 'The wording is casual and energetic rather than resembling a formal historical text.'],
      ],
      answer: 1,
      explain: 'Phrases like "castle in the sky" and "we improvise" establish a confident, creative, and lively narrative voice.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [8],
      stem: 'What can the reader infer from the detail that Lucas holds the narrator\'s belt loops in paragraph 8?',
      choices: [
        ['Lucas is frightened of heights and trying to pull his cousin down the wooden ladder.', 'Lucas acts as a partner in the rescue rather than pulling his cousin away.'],
        ['Lucas wants to snatch the bamboo fishing pole and hook the toy himself.', 'Lucas trusts his cousin to operate the long pole while he provides support.'],
        ['Lucas is crying so hard that he cannot stand up on the wooden treehouse floor.', 'Lucas focuses on helping with both hands rather than collapsing from tears.'],
        'Lucas wants to anchor and steady his cousin while he leans far over the railing.',
      ],
      answer: 3,
      explain: 'Holding belt loops while someone leans over a high railing keeps them steady and prevents them from falling.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [3],
      stem: 'Which quotation shows the narrator\'s confidence in the strength of the oak tree?',
      choices: [
        ['"My younger cousin, Lucas, is not a builder."', 'This sentence describes Lucas\'s lack of building experience, not the tree.'],
        ['"He held his stuffed armadillo, Barnaby, under his arm like a small football."', 'This sentence describes how Lucas carried his armadillo toy.'],
        '"The thick limbs are stronger than telephone poles."',
        ['"Then I saw a long bamboo fishing pole leaning against the tree trunk..."', 'This sentence describes finding the fishing pole rather than the tree\'s strength.'],
      ],
      answer: 2,
      explain: 'Comparing the limbs to telephone poles demonstrates the narrator\'s firm belief that the tree is strong and safe.',
    }),
  ],
});
