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
      { kind: 'p', text: 'I consider myself an expert builder. Give me a pile of cedar scrap boards, a box of galvanized nails, and twenty feet of yellow nylon rope, and I can build a castle in the sky. My nine-year-old cousin, Lucas, is not an expert builder. Lucas is an expert at dropping hammers, stepping on dry twigs when we are trying to be stealthy, and asking questions that nobody knows the answer to.' },
      { kind: 'p', text: '"Are you completely sure that branch can hold two human beings and a toolbox?" Lucas asked from the bottom of the wooden ladder. He was clutching his stuffed armadillo, Barnaby, under his arm like a football.' },
      { kind: 'p', text: '"Lucas," I sighed, wiping pine sap from my forehead. "This live oak has stood behind Grandma\'s house since Texas was a republic. The limbs are thicker than telephone poles. Now climb up before the sun sinks behind the windmill."' },
      { kind: 'p', text: 'Lucas scampered up the rungs, but as he reached the trapdoor platform, disaster struck. His elbow bumped the open canvas tote bag hanging from the railing. Barnaby slipped from his grasp, bounced off a lower limb, and landed squarely on a narrow branch forty feet above the rocky creek bed.' },
      { kind: 'p', text: 'Lucas froze. His eyes welled with tears, and his lower lip started to quiver. "Barnaby," he whispered. "He\'s going to fall into the creek and wash all the way to the Gulf of Mexico."' },
      { kind: 'p', text: 'I wanted to tell him that armadillos are tough, even stuffed ones. But looking at Lucas\'s stricken face, I knew my treehouse project had to wait. I couldn\'t reach the branch by climbing; the wood was too slender to support my weight.' },
      { kind: 'p', text: 'Then I spotted the bamboo fishing pole propped against the trunk and my coil of yellow rope. "Don\'t panic," I told Lucas. "Engineers don\'t cry; we improvise."' },
      { kind: 'p', text: 'I tied a small wire hook from my tackle box to the tip of the bamboo pole, securing it tightly with electrical tape. Leaning over the railing while Lucas held my belt loops with both hands, I slowly guided the long bamboo rod downward through the dense leaves.' },
      { kind: 'p', text: 'The wire hook snagged Barnaby\'s woven tail. Holding my breath, I gently reeled the pole upward until Lucas was able to grab Barnaby\'s furry ear and pull him onto the safety of the platform. Lucas clutched his armadillo tight, his grin stretching from ear to ear.' },
      { kind: 'p', text: '"Okay," Lucas announced, wiping away his tears. "Maybe you really are an expert builder."' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.10E', cites: [1],
      stem: 'From which point of view is the story told?',
      choices: [
        'First-person point of view, told by the older cousin who builds the treehouse.',
        ['Third-person limited point of view, focusing only on the thoughts of Lucas.', 'The narrator uses words like "I", "me", and "my", showing first-person narration.'],
        ['Third-person omniscient point of view, told by an outside narrator who knows all thoughts.', 'The story is narrated directly by a character using the pronoun "I."'],
        ['Second-person point of view, speaking directly to the reader as "you."', 'The narrator tells their own experience rather than giving commands to "you."'],
      ],
      answer: 0,
      explain: 'The narrator uses first-person pronouns ("I consider myself", "My nine-year-old cousin") to share personal experiences and thoughts directly.',
    }),
    mcq({
      standard: 'rla:4.8C', cites: [4, 8, 9],
      stem: 'Which event represents the climax of the story?',
      choices: [
        ['The narrator wipes pine sap from his forehead.', 'This is a small sensory detail during the beginning.'],
        ['Lucas drops his stuffed armadillo from the treehouse platform.', 'This is the inciting incident that creates the central problem.'],
        'The narrator carefully hooks Barnaby with the bamboo pole and reels him back to the platform.',
        ['Lucas compliments the narrator on being an expert builder.', 'This is the resolution after the rescue is complete.'],
      ],
      answer: 2,
      explain: 'The climax is the moment of greatest tension when the narrator delicately maneuvers the bamboo pole and hook to retrieve the endangered toy.',
    }),
    twoq({
      standard: 'rla:4.8B', cites: [1, 9, 10],
      a: {
        prompt: 'Part A: How does the narrator\'s relationship with Lucas change during the rescue?',
        choices: [
          'The narrator learns to be more caring and protective toward Lucas instead of just being annoyed by him.',
          ['The narrator decides that Lucas should never be allowed near the treehouse again.', 'The narrator is pleased to help Lucas and enjoys his final smile.'],
          ['Lucas decides to build his own treehouse on a different tree.', 'Lucas remains on the platform and admires his cousin\'s ingenuity.'],
          ['The narrator becomes angry because Lucas interrupted the construction work.', 'The narrator put the building aside willingly to help his cousin.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which sentence from the story best supports the answer to Part A?',
        choices: [
          ['"My nine-year-old cousin, Lucas, is not an expert builder." (paragraph 1)', 'This shows only his initial teasing attitude.'],
          '"But looking at Lucas\'s stricken face, I knew my treehouse project had to wait." (paragraph 6)',
          ['"Lucas scampered up the rungs, but as he reached the trapdoor platform, disaster struck." (paragraph 4)', 'This describes the accident happening.'],
          ['"Are you completely sure that branch can hold two human beings and a toolbox?" (paragraph 2)', 'This is Lucas questioning the branch strength.'],
        ],
        answer: 1,
      },
      explain: 'While the narrator began by teasing Lucas about being clumsy, seeing Lucas\'s heartbreak prompts genuine empathy, causing the narrator to put aside personal projects to help.',
    }),
    mcq({
      standard: 'rla:4.3B', cites: [7],
      stem: 'Read this sentence from paragraph 7. "Engineers don\'t cry; we improvise." What does the word **improvise** mean in this context?',
      choices: [
        ['to give up and walk away from a challenge', 'The narrator did not give up.'],
        'to solve a problem using whatever materials are available',
        ['to follow a printed instruction manual step by step', 'There was no manual; the narrator used a fishing pole and wire.'],
        ['to purchase brand-new tools at the hardware store', 'The narrator used items already on hand.'],
      ],
      answer: 1,
      explain: 'To improvise means to create or solve something on the spot using whatever tools or materials happen to be nearby.',
    }),
    mcq({
      standard: 'rla:4.10F', cites: [1, 7],
      stem: 'How does the author\'s word choice contribute to the narrator\'s voice?',
      choices: [
        ['It makes the narrator sound fearful and unsure of every step.', 'The narrator speaks with humor and creative confidence.'],
        'It creates a humorous, confident, and inventive personality.',
        ['It gives the impression of a strict and grumpy scientist.', 'The tone is playful and warm, not strict or grumpy.'],
        ['It sounds like a formal history textbook from the 1800s.', 'The language is contemporary, casual, and energetic.'],
      ],
      answer: 1,
      explain: 'Lines like "castle in the sky," "expert at dropping hammers," and "engineers don\'t cry; we improvise" establish a witty, capable, and lively narrative voice.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [8],
      stem: 'What can the reader infer from the fact that Lucas held the narrator\'s belt loops while the narrator reached over the railing?',
      choices: [
        'Lucas wanted to keep the narrator from slipping and falling while leaning over.',
        ['Lucas was trying to pull the narrator back into the treehouse.', 'Lucas was assisting the rescue effort, not stopping it.'],
        ['Lucas was afraid of heights and trying to climb onto the narrator.', 'Lucas was steadying his cousin on the platform.'],
        ['Lucas wanted to steal the fishing pole.', 'Lucas was focused on rescuing his stuffed armadillo.'],
      ],
      answer: 0,
      explain: 'Holding someone\'s belt loops while they lean over a high railing is an instinctive way to act as an anchor and keep them from tumbling over the edge.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [3],
      stem: 'Which quotation from the text shows the narrator\'s confidence in the strength of the tree?',
      choices: [
        '"This live oak has stood behind Grandma\'s house since Texas was a republic. The limbs are thicker than telephone poles."',
        ['"I consider myself an expert builder." (paragraph 1)', 'This shows confidence in building skills, not the tree itself.'],
        ['"He was clutching his stuffed armadillo, Barnaby, under his arm like a football." (paragraph 2)', 'This describes Lucas holding his toy.'],
        ['"Then I spotted the bamboo fishing pole propped against the trunk..." (paragraph 7)', 'This shows noticing an object, not the tree\'s strength.'],
      ],
      answer: 0,
      explain: 'Comparing the limbs to telephone poles and pointing out that the oak has survived for over a century demonstrates the narrator\'s firm belief that the tree is completely solid.',
    }),
  ],
});
