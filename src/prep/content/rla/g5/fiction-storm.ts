// Grade 5 fiction: an original story. Questions cover plot, characters, setting, theme, words in context,
// summary, point of view and inference.

import { makeSet, mcq, msq, twoq } from '../author.ts';

export const FICTION_STORM = makeSet({
  id: 'g5-fiction-storm',
  grade: 5,
  kind: 'reading',
  title: 'Before the Storm',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g5-fiction-storm-p',
    title: 'Before the Storm',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'Theo had been waiting all summer for Nina to trust him with something important. His sister was thirteen and ran the goat pens on their family\'s hill farm like a ship\'s captain. Theo was ten, and so far his only job was carrying the feed buckets.' },
      { kind: 'p', text: '"Can I lead them in tonight?" he asked at breakfast. Their parents had driven to town for supplies and would not be back until evening.' },
      { kind: 'p', text: 'Nina did not look up from her cereal. "Last week you left the gate open, and Pepper ate half of Mom\'s tomato plants. Goats are skittish, Theo. One loud noise and they scatter like marbles."' },
      { kind: 'p', text: 'Theo stared at his spoon. He had apologized for the gate three times, but Nina never seemed to forget anything.' },
      { kind: 'p', text: 'By the afternoon, the sky over the hills had turned the color of an old bruise. The radio crackled with a storm warning: high winds and hail by five o\'clock. Out in the pasture, the goats grazed as if nothing were wrong, scattered across the slope between the cedar trees and the creek.' },
      { kind: 'p', text: '"We have to get them in now," Nina said, pulling on her boots. "I\'ll take the front. You walk behind and keep them moving. Don\'t run, and don\'t yell."' },
      { kind: 'p', text: 'They climbed the slope together. Nina rattled a coffee can of corn, and one by one the goats lifted their heads and trotted toward the sound. Theo walked behind them, arms spread wide, the way he had seen his sister do it a hundred times. The wind was rising, and the first fat raindrops smacked against his cap.' },
      { kind: 'p', text: 'At the barn, Nina counted out loud as the goats pushed through the door. "Eleven, twelve, thirteen." She stopped. "Fourteen should be Pepper. Where\'s Pepper?"' },
      { kind: 'p', text: 'Thunder rolled across the valley, so loud that Theo felt it in his chest. Nina\'s face went pale. "She\'ll panic in this. I have to go back up the hill."' },
      { kind: 'p', text: '"Wait," Theo said. He was thinking about the tomato plants, and about how Pepper always went wherever she could find something to chew. Then he remembered: every time it rained, Pepper squeezed under the rusty old truck behind the toolshed, where the ground stayed dry. "I think I know where she is."' },
      { kind: 'p', text: 'Nina hesitated, rain dripping from her hair. Then she nodded. "Go. I\'ll hold the door."' },
      { kind: 'p', text: 'Theo ran around the toolshed with hail beginning to bounce off the ground like popcorn. He dropped to his knees beside the truck. Two yellow eyes blinked back at him from the shadows. Pepper was curled up in the dry dirt, chewing calmly on a piece of cardboard.' },
      { kind: 'p', text: 'It took some coaxing and a handful of corn from his pocket, but Theo led her across the yard and through the barn door just as the hail grew to the size of grapes. Nina slammed the door shut behind them.' },
      { kind: 'p', text: 'For a moment the two of them stood dripping in the warm, dusty barn, listening to the storm hammer the tin roof. Then Nina handed him the coffee can. "Tomorrow," she said, "you can lead them out."' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:5.8C', cites: [12, 13],
      stem: 'Which event is the climax of the story?',
      choices: [
        ['Theo asks Nina if he can lead the goats into the barn.', 'This happens at the start. It sets up the problem but is not the turning point.'],
        ['The radio warns that a storm is coming.', 'The warning raises the tension, but the story has not reached its turning point yet.'],
        'Theo finds Pepper under the truck and leads her into the barn as the hail grows.',
        ['Nina hands Theo the coffee can.', 'This comes after the turning point. It shows how the problem is settled.'],
      ],
      answer: 2,
      explain: 'The climax is the most exciting moment, when the main problem turns. Pepper is missing in a hailstorm, and Theo finds her and brings her in just in time (paragraphs 12 and 13).',
    }),
    twoq({
      standard: 'rla:5.8B', cites: [3, 11, 14],
      a: {
        prompt: 'Part A: How does Nina\'s attitude toward Theo change in the story?',
        choices: [
          'She goes from doubting him to trusting him with an important job.',
          ['She goes from being angry about the goats to being angry about the storm.', 'Nina is worried about the storm, but the question is about how she feels toward Theo.'],
          ['She goes from ignoring him to teasing him.', 'Nina never teases Theo in the story.'],
          ['She goes from trusting him to worrying that he will get hurt.', 'This is backwards: at the start she does not trust him.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which sentence from the story best supports the answer to Part A?',
        choices: [
          ['"His sister was thirteen and ran the goat pens on their family\'s hill farm like a ship\'s captain." (paragraph 1)', 'This describes Nina, but it does not show her attitude changing.'],
          ['"Nina\'s face went pale." (paragraph 9)', 'This shows Nina is scared for Pepper, not how she feels about Theo.'],
          ['"Nina hesitated, rain dripping from her hair." (paragraph 11)', 'She hesitates here, but the change is complete only at the end.'],
          '"Then Nina handed him the coffee can. \'Tomorrow,\' she said, \'you can lead them out.\'" (paragraph 14)',
        ],
        answer: 3,
      },
      explain: 'At breakfast Nina reminds Theo about the open gate and says no (paragraph 3). After he finds Pepper, she hands him the coffee can and lets him lead the goats tomorrow (paragraph 14). Handing over the can shows her new trust.',
    }),
    mcq({
      standard: 'rla:5.3B', cites: [3],
      stem: 'Read this sentence from paragraph 3. "Goats are skittish, Theo." What does the word **skittish** mean?',
      choices: [
        ['hungry', 'Goats do like to eat, but Nina is talking about what happens after a loud noise.'],
        'easily frightened',
        ['hard to count', 'Nina counts the goats later, but that is not what skittish means.'],
        ['very stubborn', 'Stubborn animals stay put. Nina says the goats scatter.'],
      ],
      answer: 1,
      explain: 'The next sentence is the clue: "One loud noise and they scatter like marbles." Animals that run from a loud noise are easily frightened.',
    }),
    mcq({
      standard: 'rla:5.8D', cites: [5],
      stem: 'How does the setting affect the plot of the story?',
      choices: [
        ['The farm is far from town, so Theo and Nina are lonely.', 'The story never says they are lonely.'],
        'A storm is coming to the hill farm, so the goats must be brought in quickly while the parents are away.',
        ['The barn is old, so the children worry the roof will fall in.', 'The roof is loud in the storm, but no one worries it will fall.'],
        ['The creek floods, so the goats cannot cross it.', 'The creek is mentioned, but it never floods.'],
      ],
      answer: 1,
      explain: 'The coming storm on the open hillside creates the problem: the goats are spread out and must get into the barn before the hail. With their parents in town, Theo and Nina have to do it alone.',
    }),
    msq({
      standard: 'rla:5.8A',
      stem: 'Which **two** themes are developed in the story?',
      choices: [
        'People earn trust through their actions.',
        ['Storms are more dangerous than most people think.', 'The storm matters to the plot, but the story is not mainly a lesson about storms.'],
        'Paying attention to small details can help solve a big problem.',
        ['Animals are happier outside than in a barn.', 'Nothing in the story suggests this.'],
        ['Older siblings are always right.', 'Nina needs Theo\'s idea to find Pepper, so the story does not show this.'],
      ],
      answers: [0, 2],
      explain: 'Theo earns Nina\'s trust by finding Pepper, not by asking. He finds Pepper because he noticed where she hides when it rains, a small detail that solves the big problem.',
    }),
    mcq({
      standard: 'rla:5.7D',
      stem: 'Which is the best summary of the story?',
      choices: [
        ['Theo and Nina live on a farm with goats. A goat named Pepper eats tomato plants. Later there is a storm with hail.', 'This lists details but leaves out the main problem and how it is solved.'],
        'When a storm comes while their parents are away, Theo and Nina bring the goats in. Pepper is missing, and Theo finds her because he knows her hiding place. Nina decides to trust him with leading the goats.',
        ['Nina is a good leader of the goats. She shakes a coffee can of corn, and the goats follow her into the barn during a storm.', 'This tells only one part of the story and leaves out Theo\'s role.'],
        ['Theo wants a job on the farm. He apologizes for the open gate three times. Nina does not forget anything.', 'This covers only the beginning.'],
      ],
      answer: 1,
      explain: 'A good summary tells the main problem, the most important events and how it ends, in order, in a few sentences. The second choice does all of that.',
    }),
    mcq({
      standard: 'rla:5.10E',
      stem: 'The story is told in the third person. How does this help the reader?',
      choices: [
        'The narrator can describe both Theo\'s and Nina\'s actions while sharing Theo\'s thoughts.',
        ['The reader learns only what Nina is thinking.', 'The narrator mostly shares Theo\'s thoughts, not Nina\'s.'],
        ['Theo tells the story himself using "I" and "me."', 'That would be first person. This story uses "he" and "she."'],
        ['The reader learns what the goats are thinking.', 'The narrator never tells what the goats think.'],
      ],
      answer: 0,
      explain: 'A third-person narrator is outside the story and uses "he" and "she." Here the narrator follows Theo, sharing what he remembers and feels (paragraph 10), while also showing what Nina does.',
    }),
    mcq({
      standard: 'rla:5.6F', cites: [10],
      stem: 'Why does Theo think about the tomato plants in paragraph 10?',
      choices: [
        ['He is still upset that Nina keeps reminding him about the gate.', 'He was upset earlier, but in paragraph 10 he is solving a problem.'],
        ['He wants to check whether the hail has damaged the garden.', 'He never goes to the garden.'],
        'Remembering how Pepper hunts for things to chew helps him figure out where she might be.',
        ['He thinks Pepper is eating the tomato plants again.', 'He decides she is under the truck, not in the garden.'],
      ],
      answer: 2,
      explain: 'Theo thinks about how Pepper "always went wherever she could find something to chew," and then remembers her dry spot under the truck. The memory of the tomato plants leads him to her hiding place.',
    }),
  ],
});
