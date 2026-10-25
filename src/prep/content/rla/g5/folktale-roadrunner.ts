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
      standard: 'rla:5.9A',
      stem: 'This story is a pourquoi tale, a kind of folktale. Which detail best shows this?',
      choices: [
        'It explains how the roadrunner came to run so fast.',
        ['It takes place in the desert during a drought.', 'Many kinds of stories have a setting like this. It doesn\'t make the story a pourquoi tale.'],
        ['It includes animals that talk.', 'Talking animals appear in many folktales and fables, not only pourquoi tales.'],
        ['It has a character who brags.', 'A bragging character can appear in any story.'],
      ],
      answer: 0,
      explain: '"Pourquoi" means "why" in French. A pourquoi tale explains why something in nature is the way it is, such as why roadrunners are always running (paragraph 10).',
      cites: [10],
    }),
    mcq({
      standard: 'rla:5.8C',
      stem: 'Which event is part of the rising action?',
      choices: [
        ['Roadrunner admires her tail feathers in the water holes.', 'This comes at the very beginning. It introduces the character before the problem starts.'],
        'The animals laugh when Roadrunner offers to go to the spring.',
        ['Roadrunner tells the animals there is water for everyone.', 'This is the climax, when the problem is solved.'],
        ['Roadrunner never stops running after that day.', 'This is the resolution at the end.'],
      ],
      answer: 1,
      explain: 'The rising action is the series of events that builds tension after the problem begins. The drought creates the problem, and the animals laughing at Roadrunner raises the tension before she proves herself.',
      cites: [6],
    }),
    mcq({
      standard: 'rla:5.7D',
      stem: 'Which is the best summary of the folktale?',
      choices: [
        ['Roadrunner likes her tail feathers. Coyote is fast. Lizard falls off a rock. A tortoise speaks at a meeting.', 'This lists small details and leaves out the problem and how it is solved.'],
        ['During a drought, the animals argue under a mesquite tree about who is the fastest.', 'The animals never argue about speed, and this leaves out what happens.'],
        'During a drought, the animals laugh when vain Roadrunner volunteers to find a distant spring. The hot sand makes her run fast, she brings back news of water, and she has been running ever since.',
        ['Coyote refuses to help find water because his paws are precious, so the animals are angry at him.', 'Coyote refuses, but the story is about Roadrunner, and the animals are never shown being angry.'],
      ],
      answer: 2,
      explain: 'A summary tells the most important events in order: the problem (the drought), what the main character does (runs to the spring), and how it ends (she keeps running).',
    }),
    mcq({
      standard: 'rla:5.6C', cites: [6],
      stem: 'In paragraph 6, the animals laugh at Roadrunner. Because this story is a folktale, what could a reader best predict at this point?',
      choices: [
        'Roadrunner will surprise everyone by succeeding.',
        ['Roadrunner will give up and go home.', 'In folktales, the character who is laughed at usually proves the others wrong.'],
        ['Coyote will change his mind and go instead.', 'Nothing about Coyote suggests he will change.'],
        ['The drought will end the next day.', 'The story gives no clue that the rain is coming.'],
      ],
      answer: 0,
      explain: 'Folktales often follow a pattern: the character no one believes in becomes the hero. Knowing that pattern helps you predict that Roadrunner will succeed, and she does.',
    }),
    mcq({
      standard: 'rla:5.3A', cites: [7],
      stem: [
        'Read this dictionary entry.',
        '**skim** (skĭm) verb. 1. to remove something floating on top of a liquid 2. to move quickly and lightly over a surface 3. to read something quickly to find the main ideas',
        'Which meaning of **skim** is used in paragraph 7?',
      ],
      choices: [
        ['Meaning 1', 'Roadrunner is not removing anything from a liquid.'],
        'Meaning 2',
        ['Meaning 3', 'Roadrunner is running, not reading.'],
        ['None of the meanings fit.', 'Meaning 2 fits the sentence.'],
      ],
      answer: 1,
      explain: 'Roadrunner moves "so quickly that it barely touched her toes." She is moving quickly and lightly over the sand, which is meaning 2.',
    }),
    twoq({
      standard: 'rla:5.7C', cites: [7],
      a: {
        prompt: 'Part A: Why does Roadrunner first start to move faster?',
        choices: [
          ['She wants to beat Coyote in a race.', 'Coyote doesn\'t race her.'],
          'The hot sand burns her feet.',
          ['She sees the spring in the distance.', 'She is still far from the spring when she starts to speed up.'],
          ['The other animals are chasing her.', 'The animals stay under the mesquite tree.'],
        ],
        answer: 1,
      },
      b: {
        prompt: 'Part B: Which sentence from the folktale best supports the answer to Part A?',
        choices: [
          ['"Roadrunner set off at a walk."', 'This tells how she started, not why she sped up.'],
          ['"Roadrunner drank, and then, without stopping to look at her reflection, she turned and raced back through the night."', 'This happens after she reaches the spring.'],
          '"The sand burned her feet, so she walked faster."',
          ['"\'I will go,\' she said quietly."', 'This shows she volunteers, not why she runs.'],
        ],
        answer: 2,
      },
      explain: 'Paragraph 7 says, "The sand burned her feet, so she walked faster." The burning sand is the reason she speeds up, and soon she is running.',
    }),
    msq({
      standard: 'rla:5.8A',
      stem: 'Which **two** themes does the folktale develop?',
      choices: [
        'Someone others doubt can turn out to be a hero.',
        ['It is important to be the fastest.', 'Coyote is the fastest, but he is not the hero.'],
        'Helping others matters more than worrying about yourself.',
        ['Deserts are dangerous places to live.', 'The desert is the setting, not the lesson.'],
        ['Friends should never laugh at each other.', 'The animals laugh, but the story doesn\'t focus on that as its lesson.'],
      ],
      answers: [0, 2],
      explain: 'The animals doubt Roadrunner, but she saves them (paragraph 9). She stops admiring herself and races back to help everyone (paragraph 8), while Coyote only worries about his paws.',
    }),
  ],
});
