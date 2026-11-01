// Grade 5 fiction (folktale): an original pourquoi tale. Questions cover folktale traits, plot, summary,
// predictions, a dictionary entry, text evidence and themes.

import { makeSet, mcq, msq, twoq } from '../author.ts';

export const FOLKTALE_ROADRUNNER = makeSet({
  id: 'g5-folktale-roadrunner',
  grade: 5,
  kind: 'reading',
  title: 'Why Roadrunner Never Stops Running',
  intro: 'Read the folktale and choose the best answer to each question.',
  passages: [{
    id: 'g5-folktale-roadrunner-p',
    title: 'Why Roadrunner Never Stops Running',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'Long ago, when the desert was young, Roadrunner did not run at all. She strolled from bush to bush, admiring her long tail feathers and the speckled crest on her head. She spent so much time looking at her reflection in the water holes that the other animals called her Puddle-Gazer.' },
      { kind: 'p', text: 'Coyote, on the other hand, was the fastest animal in the desert, and he made sure everyone knew it. "No one can catch me," he would brag, "and no one can outrun me either."' },
      { kind: 'p', text: 'One summer, a great drought came. The sun blazed day after day, and the water holes dried up one by one. Soon there was only one place left that might still hold water: a hidden spring far beyond the red mesa, a full day\'s journey away.' },
      { kind: 'p', text: 'The animals gathered for a council beneath the old mesquite tree. "Someone must find out if the spring is still full," said Grandmother Tortoise. "But the way is long, and the sand is hot enough to cook a lizard."' },
      { kind: 'p', text: 'Coyote yawned and stretched. "I would go," he said, "but my paws are far too precious for that burning sand."' },
      { kind: 'p', text: 'Then Roadrunner stepped forward. "I will go," she said quietly. The animals laughed. Even Lizard, who was hardly bigger than a pecan, laughed so hard he fell off his rock. "Puddle-Gazer?" said Coyote. "You\'ll stop to admire yourself in the first mirage!"' },
      { kind: 'p', text: 'Roadrunner set off at a walk. The sand burned her feet, so she walked faster. It burned even more, so she began to trot. Then she discovered something surprising. If she stretched her neck out and held her tail straight behind her, she could skim across the sand so quickly that it barely touched her toes.' },
      { kind: 'p', text: 'By sunset she reached the hidden spring. It was still half full of cool, clear water. Roadrunner drank, and then, without stopping to look at her reflection, she turned and raced back through the night.' },
      { kind: 'p', text: 'At dawn, the animals woke to find her standing beneath the mesquite tree, dusty and out of breath. "There is water," she gasped, "and enough for everyone if we share." The animals followed her across the desert, and not one of them laughed.' },
      { kind: 'p', text: 'From that day on, Roadrunner never stopped running. That is why, even now, when you see a roadrunner dash across a dusty Texas road, she is always in a hurry. She is still carrying good news to anyone who will listen.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:5.9A', cites: [10],
      stem: 'This story is a pourquoi tale, a traditional folktale that explains natural origins. Which feature best shows this?',
      choices: [
        'It explains how the roadrunner developed its fast running style and why it darts across the desert.',
        ['It describes the harsh conditions of a severe summer drought that causes desert water holes to dry up.', 'The desert drought establishes the realistic setting, but setting alone does not define a pourquoi tale.'],
        ['It includes talking animal characters that gather for an emergency council under a shady mesquite tree.', 'Anthropomorphic talking animals appear in many genres, including fables and fairy tales.'],
        ['It introduces a boastful coyote who brags that no other animal in the desert can outrun his speed.', 'Boastful characters are common in folklore, but explaining an origin is what makes it a pourquoi tale.'],
      ],
      answer: 0,
      explain: '"Pourquoi" means "why" in French. A pourquoi tale explains why something in nature came to be, such as why the roadrunner always runs swiftly across the desert.',
    }),
    mcq({
      standard: 'rla:5.8C', cites: [6],
      stem: 'Which event is part of the rising action of the folktale?',
      choices: [
        ['Roadrunner spends her mornings admiring her speckled crest and long feathers in peaceful water pools.', 'Roadrunner\'s vanity at the water holes introduces her character during the opening exposition.'],
        'The other desert animals laugh and mock Roadrunner when she volunteers to seek out the hidden spring.',
        ['Roadrunner returns at dawn and announces to the thirsty animals that the hidden spring holds fresh water.', 'Returning at dawn to announce water represents the resolution of the crisis, not rising action.'],
        ['Roadrunner continues sprinting across dusty Texas roadways as she carries messages across the plains.', 'Running across modern roads is the concluding moral explanation at the very end of the tale.'],
      ],
      answer: 1,
      explain: 'The rising action consists of events that build suspense after the drought problem begins. The animals mocking Roadrunner increases the conflict before she proves herself.',
    }),
    mcq({
      standard: 'rla:5.7D',
      stem: 'Which statement provides the best summary of the folktale?',
      choices: [
        'When a severe drought threatens the desert, vain Roadrunner volunteers to cross the burning sand to find water; by running fast to protect her feet, she discovers her natural speed and saves the thirsty community.',
        ['Roadrunner spends her time looking at her reflection in water pools until the other desert creatures nickname her Puddle-Gazer, while boastful Coyote brags that no one in the desert can catch him.', 'This statement focuses only on character descriptions in the opening paragraphs and omits the central drought and journey.'],
        ['The desert animals hold an urgent council beneath an old mesquite tree, where Grandmother Tortoise asks Coyote to run to the red mesa, but Coyote refuses because the burning sand will hurt his paws.', 'This summary describes only the council debate and leaves out Roadrunner\'s dangerous journey and rescue of the animals.'],
        ['Roadrunner reaches a hidden mountain spring at sunset and drinks the cool water before resting under a shady bush, returning the next evening after the drought has ended across the valley.', 'Roadrunner did not rest overnight and rain did not end the drought; she immediately raced back through the night to guide the animals.'],
      ],
      answer: 0,
      explain: 'A strong summary covers the essential plot elements in order: the drought crisis, Roadrunner\'s courageous mission, how she adapted to the hot sand, and her successful rescue of the animal community.',
    }),
    mcq({
      standard: 'rla:5.6C', cites: [6],
      stem: 'In paragraph 6, the animals laugh when Roadrunner steps forward. Because this selection is a traditional folktale, what can the reader predict will happen?',
      choices: [
        'Roadrunner will overcome the doubts of the other creatures and successfully locate the life-saving water.',
        ['Roadrunner will quickly give up her journey and hide beneath a desert rock to escape the blazing heat.', 'In traditional folklore, mocked characters typically persist and prove their doubters wrong.'],
        ['Coyote will reconsider his decision and race ahead of Roadrunner to claim credit for finding the spring.', 'Coyote remains selfish and cautious about his paws, giving no indication of changing his mind.'],
        ['A sudden desert rainstorm will arrive before Roadrunner reaches the mesa, making her long run unnecessary.', 'A sudden storm would contradict the folktale pattern of a hero proving her strength through effort.'],
      ],
      answer: 0,
      explain: 'Folktales frequently follow an underdog motif where the character whom others doubt becomes the unlikely hero who saves the day.',
    }),
    mcq({
      standard: 'rla:5.3A', cites: [7],
      stem: [
        'Read this dictionary entry.',
        '**skim** (skĭm) verb. 1. to remove a floating layer from the surface of a liquid 2. to move quickly and lightly over a surface 3. to read through a written text rapidly to locate main ideas',
        'Which definition best matches the meaning of **skim** as it is used in paragraph 7?',
      ],
      choices: [
        ['Definition 1 (to remove a floating layer from the surface of a liquid)', 'Roadrunner is moving across sand, not removing something from the surface of a liquid.'],
        'Definition 2 (to move quickly and lightly over a surface)',
        ['Definition 3 (to read through a written text rapidly to locate main ideas)', 'Paragraph 7 describes physical movement across hot sand, not reading text.'],
        ['None of the dictionary definitions match the sentence in the passage', 'Definition 2 accurately describes moving lightly and rapidly across the sand.'],
      ],
      answer: 1,
      explain: 'Paragraph 7 describes Roadrunner moving "so quickly that it barely touched her toes," which corresponds directly to moving quickly and lightly over a surface (Definition 2).',
    }),
    twoq({
      standard: 'rla:5.7C', cites: [7],
      a: {
        prompt: 'Part A: What causes Roadrunner to increase her speed across the desert?',
        choices: [
          ['She hopes to prove that she is a faster runner than Coyote.', 'Roadrunner runs out of necessity to protect her feet, not to compete in a race against Coyote.'],
          'The intense heat of the desert sand begins burning her feet.',
          ['She catches sight of the cool water spring in the distance.', 'She begins speeding up near the start of her journey, long before the distant mesa is reached.'],
          ['The desert animals decide to pursue her across the plains.', 'The animals remain waiting under the mesquite tree and do not chase her.'],
        ],
        answer: 1,
      },
      b: {
        prompt: 'Part B: Which quotation from the folktale best supports the answer to Part A?',
        choices: [
          ['"Roadrunner set off at a walk." (paragraph 7)', 'This sentence describes how she began her journey, not why she increased her pace.'],
          ['"Roadrunner drank, and then, without stopping to look at her reflection, she turned and raced back through the night." (paragraph 8)', 'This sentence describes her return journey after she already discovered her speed.'],
          '"The sand burned her feet, so she walked faster. It burned even more, so she began to trot." (paragraph 7)',
          ['"\'I will go,\' she said quietly." (paragraph 6)', 'This sentence shows her volunteering at the council, not the reason she ran faster.'],
        ],
        answer: 2,
      },
      explain: 'Paragraph 7 directly states that the heat of the burning sand prompted Roadrunner to walk faster, trot, and ultimately discover her swift running stride.',
    }),
    msq({
      standard: 'rla:5.8A',
      stem: 'Which **two** themes does the folktale develop?',
      choices: [
        'An individual whom others overlook or doubt can achieve great things.',
        'Putting the needs of the community ahead of personal vanity brings true honor.',
        ['Speed and athletic pride are the most admirable qualities a leader can possess.', 'Coyote is the fastest animal, but his selfishness prevents him from helping the community.'],
        ['Desert animals should avoid traveling outside their home territory during dry seasons.', 'The animals survive specifically because Roadrunner was willing to travel beyond the mesa.'],
        ['Mocking friends who make mistakes is an effective way to encourage them to work harder.', 'The story criticizes the animals for laughing at Roadrunner and shows that mockery is unjustified.'],
      ],
      answers: [0, 1],
      explain: 'The story shows that Roadrunner, despite being mocked as vain and weak, courageously risks herself to save the community, while the boastful Coyote refuses to help.',
    }),
  ],
});
