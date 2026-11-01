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
        ['Theo asks Nina at breakfast if he can take on the responsibility of leading the goats into the barn.', 'Theo asking Nina occurs during the exposition, setting up the problem rather than resolving it.'],
        ['The radio crackles with a severe weather warning predicting high winds and afternoon hail across the hills.', 'The weather broadcast introduces rising tension, but the climax happens when Pepper is rescued in the storm.'],
        'Theo finds Pepper under the truck and leads her into the barn just as heavy hail begins falling.',
        ['Nina hands Theo the coffee can after the storm and promises he can lead the goats the following morning.', 'Nina handing Theo the coffee can happens during the resolution after the danger has passed.'],
      ],
      answer: 2,
      explain: 'The climax is the most intense turning point in the story, when Theo locates the missing goat under the truck and brings her into the barn just as heavy hail strikes.',
    }),
    twoq({
      standard: 'rla:5.8B', cites: [3, 11, 14],
      a: {
        prompt: 'Part A: How does Nina\'s attitude toward Theo change in the story?',
        choices: [
          ['She shifts from being impatient about the open gate to worrying about the approaching storm.', 'Nina worries about the storm, but this describes her reaction to the weather rather than her changing feelings toward Theo.'],
          'She moves from doubting his responsibility to trusting him with important farm duties.',
          ['She begins by ignoring his requests completely and ends by relying on him to give storm commands.', 'Nina directs the work during the storm and never ignores Theo; she takes charge while learning to trust his judgment.'],
          ['She starts out confident in his farming skills and grows nervous when the goats scatter in the rain.', 'Nina does not trust Theo at first because he previously left the pen gate unlatched.'],
        ],
        answer: 1,
      },
      b: {
        prompt: 'Part B: Which sentence from the story best supports the answer to Part A?',
        choices: [
          ['"His sister was thirteen and ran the goat pens on their family\'s hill farm like a ship\'s captain." (paragraph 1)', 'This sentence describes Nina\'s leadership style at the beginning of the story, not her changing feelings toward Theo.'],
          ['"Thunder rolled across the valley, so loud that Theo felt it in his chest." (paragraph 9)', 'This quotation highlights the intensity of the storm rather than Nina\'s attitude toward her brother.'],
          ['"Nina hesitated, rain dripping from her hair. Then she nodded." (paragraph 11)', 'Nina\'s hesitation shows the beginning of her willingness to listen, but handing him the can in paragraph 14 confirms full trust.'],
          '"Then Nina handed him the coffee can. \'Tomorrow,\' she said, \'you can lead them out.\'" (paragraph 14)',
        ],
        answer: 3,
      },
      explain: 'In paragraph 3, Nina refuses Theo\'s help because she remembers the gate incident. In paragraph 14, handing him the coffee can and telling him he can lead the goats out tomorrow shows her newfound trust.',
    }),
    mcq({
      standard: 'rla:5.3B', cites: [3],
      stem: 'Read this sentence from paragraph 3. "Goats are skittish, Theo." What does the word **skittish** mean in this sentence?',
      choices: [
        ['eager to search for fresh green plants', 'While goats like fresh plants, the context refers to how they react nervously to sudden noises.'],
        'easily frightened by sudden sounds',
        ['difficult to herd into confined spaces', 'Herding is challenging, but skittish describes their fearful temperament rather than space limits.'],
        ['stubborn and unwilling to follow orders', 'Stubborn animals refuse to move, but Nina warns that skittish goats scatter and run when startled.'],
      ],
      answer: 1,
      explain: 'Nina explains in the following sentence that "One loud noise and they scatter like marbles," showing that skittish means nervous and easily frightened.',
    }),
    mcq({
      standard: 'rla:5.8D', cites: [5],
      stem: 'How does the setting affect the plot of the story?',
      choices: [
        ['The isolated location of the hill farm makes the children feel lonely while their parents are in town.', 'The children focus urgently on the farm work and impending storm rather than feeling lonely.'],
        'An approaching storm with hail forces the children to secure the herd before their parents return.',
        ['The rugged slope between the creek and cedar trees prevents the goats from hearing Nina\'s call.', 'The goats hear the rattling corn can and trot toward the barn without difficulty.'],
        ['The aging roof of the wooden barn threatens to collapse when heavy thunder rolls through the valley.', 'The barn roof is noisy when rain and hail hit, but no one fears structural collapse.'],
      ],
      answer: 1,
      explain: 'The impending hailstorm over the open pasture creates an urgent problem that forces Theo and Nina to act quickly while their parents are away.',
    }),
    msq({
      standard: 'rla:5.8A',
      stem: 'Which **two** themes are developed in the story?',
      choices: [
        'Earning someone\'s trust requires demonstrating responsibility through actions.',
        'Paying close attention to small details can help solve an urgent problem.',
        ['Sudden thunderstorms in rural areas are far too dangerous for children to manage alone.', 'The story shows that the children work together successfully and calmly overcome the danger.'],
        ['Older siblings should always make every farm decision without consulting younger family members.', 'Nina succeeds because she listens to Theo\'s insight about Pepper\'s hiding habits.'],
        ['Farm animals are generally happier grazing on open hillsides than resting inside sheltered barns.', 'The goats must be sheltered inside the barn for their own safety during dangerous hail.'],
      ],
      answers: [0, 1],
      explain: 'Theo earns Nina\'s trust through his responsible actions in the storm, and he solves the crisis by remembering the small detail of Pepper\'s rainy-day hiding spot.',
    }),
    mcq({
      standard: 'rla:5.7D',
      stem: 'Which is the best summary of the story?',
      choices: [
        ['Theo asks Nina at breakfast if he can lead the goats, but she reminds him of past mistakes with the pasture gate. Later, their parents drive into town for supplies while the goats graze near the creek.', 'This statement focuses only on the opening situation and leaves out the central conflict, rescue, and resolution.'],
        ['Nina leads the goats toward the barn by shaking a can of corn while Theo walks behind with his arms wide. After thirteen goats enter the barn, thunder rumbles loudly across the open valley.', 'This summary describes rising action events but omits the main crisis of the missing goat and how Theo solves it.'],
        'When a severe hailstorm threatens their family farm while their parents are away, Theo uses his knowledge of a missing goat\'s habits to find her, proving his dependability and earning his sister\'s trust.',
        ['A storm strikes the hill farm, causing Nina to panic when fourteen goats scatter into the woods. Theo searches the garden beds to see if the animals are eating tomato plants before returning.', 'Only one goat went missing, Pepper hid under the truck rather than in the garden, and Nina did not panic.'],
      ],
      answer: 2,
      explain: 'A complete summary includes the main characters, the central problem of the storm and missing goat, Theo\'s key action, and the resolution of earned trust.',
    }),
    mcq({
      standard: 'rla:5.10E',
      stem: 'The story is told from the third-person point of view. How does this perspective benefit the reader?',
      choices: [
        ['It reveals only Nina\'s private worries about the herd while keeping Theo\'s true feelings completely hidden.', 'The narrator focuses on Theo\'s feelings and memories rather than keeping his perspective hidden.'],
        'It allows the reader to follow Theo\'s inner thoughts and memories while observing both siblings\' actions.',
        ['It presents the entire narrative through Theo\'s personal voice using first-person pronouns like "I" and "me."', 'A third-person narrator uses pronouns such as "he," "she," and "they" rather than first-person narration.'],
        ['It provides direct insight into what the skittish goats are thinking as thunder rolls across the pasture.', 'The narrator does not anthropomorphize the animals or reveal their thoughts.'],
      ],
      answer: 1,
      explain: 'The third-person perspective lets the reader observe both children\'s actions while focusing on Theo\'s internal thoughts, memories, and motivations.',
    }),
    mcq({
      standard: 'rla:5.6F', cites: [10],
      stem: 'Why does Theo think about the tomato plants in paragraph 10?',
      choices: [
        'Recalling how Pepper searched for food in the garden reminds him of her habit of hiding under the dry truck.',
        ['He is still feeling hurt that Nina criticized him at breakfast for accidentally leaving the garden gate unlatched.', 'Theo was discouraged earlier, but in paragraph 10 his mind is focused on tracking down the missing goat.'],
        ['He worries that the falling hail will ruin the family vegetables before his parents return home from town.', 'Theo is concerned about Pepper\'s safety rather than protecting the garden crops.'],
        ['He assumes Pepper has escaped into the tomato patch again and plans to run to the garden to catch her.', 'Theo remembers Pepper\'s rainy-day hiding spot under the truck rather than heading to the garden.'],
      ],
      answer: 0,
      explain: 'Thinking about how Pepper sought out food in the garden triggers Theo\'s memory of her favorite dry shelter under the truck whenever rain begins.',
    }),
  ],
});
