// Grade 4 reading walkthroughs (part 1: 4.3A through 4.10B).
// Skills with generators work like math. Passage skills bring two short samples from g4-rla-passages.ts.

import { mcq, sample } from '../rla/author.ts';
import type { Lesson } from '../types.ts';
import {
  ARMADILLO, BATS, BIOGRAPHY_OCHOA, CAMP, FABLE, FROGS_TOADS, LEMONADE,
  LIBRARY, PAIRED_PLASTIC, RECYCLE, SCENE, STORM_POEM, TALL_TALE,
} from './g4-rla-passages.ts';
import { G4_RLA_LESSONS_MORE } from './g4-rla-more.ts';

const G4_RLA_LESSONS_FIRST: Lesson[] = [
  {
    code: 'rla:4.3A',
    goal: 'You will learn to use a dictionary or glossary to find a word\'s meaning, pronunciation, and syllables.',
    words: [
      { term: 'dictionary', meaning: 'A reference book or digital tool listing words in alphabetical order with definitions.' },
      { term: 'guide words', meaning: 'The words at the top of a dictionary page showing the first and last words on that page.' },
    ],
    ideas: [
      { title: 'Check multiple meanings', text: 'Many words have more than one numbered definition. Read all of them and pick the one that fits your sentence.' },
      { title: 'Use pronunciation and syllables', text: 'Pronunciation respellings and dot dividers show how to pronounce and divide a word.' },
    ],
    samples: [
      sample(ARMADILLO, mcq({
        standard: 'rla:4.3A', cites: [1],
        stem: 'Read this dictionary entry for the word **relic**.\n\n**rel·ic** /ˈrelik/\n*noun*\n1. an object surviving from an earlier time, especially one of historical interest.\n2. a part of a deceased holy person\'s body or belongings.\n3. a remaining scrap or fragment.\n\nWhich definition best matches the word **relic** as used in paragraph 1?',
        choices: [
          'Definition 1',
          ['Definition 2', 'Paragraph 1 refers to an ancient animal, not a holy person\'s belongings.'],
          ['Definition 3', 'The author describes an entire living animal, not a torn scrap.'],
          ['None of the definitions', 'Definition 1 is an exact fit for an animal looking like it survived from prehistoric times.'],
        ],
        answer: 0,
        explain: 'In paragraph 1, calling the armadillo a "prehistoric relic" means it looks like an animal that has survived from an ancient era.',
      }), 4),
      sample(BATS, mcq({
        standard: 'rla:4.3A', cites: [2],
        stem: 'Read this dictionary entry for the word **boon**.\n\n**boon** /bo͞on/\n*noun*\n1. a thing that is helpful or beneficial.\n2. a favor or request.\n*adjective*\n3. close, pleasant, or intimate.\n\nWhich definition best describes how **boon** is used in paragraph 2?',
        choices: [
          'Definition 1',
          ['Definition 2', 'The bats are providing a real benefit, not asking for a favor.'],
          ['Definition 3', 'Boon is used as a noun after the article "a", not an adjective.'],
          ['None of the definitions', 'Definition 1 fits because eating pest insects is helpful to farmers.'],
        ],
        answer: 0,
        explain: 'Calling the insect-eating bats "a boon to local farmers" means they are a helpful benefit to agriculture.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.3B',
    goal: 'You will learn to use context clues within and beyond a sentence to determine the meaning of unfamiliar words.',
    words: [
      { term: 'context clues', meaning: 'Hints found in surrounding words and sentences that help you understand an unfamiliar word.' },
    ],
    ideas: [
      { title: 'Read around the word', text: 'Look at the sentences right before and after the hard word for explanations, examples, or synonyms.' },
      { title: 'Substitute your guess', text: 'Replace the unfamiliar word with your meaning to see if the sentence still makes sense.' },
    ],
    samples: [
      sample(ARMADILLO, mcq({
        standard: 'rla:4.3B', cites: [2],
        stem: 'In paragraph 2, what does the word **suburban** most likely mean?',
        choices: [
          'A residential area located just outside a larger city.',
          ['Deep at the bottom of the Pacific Ocean.', 'Armadillos live on land, not under the ocean.'],
          ['High on a snowy mountain peak.', 'The text describes gardens and thickets, not snowy peaks.'],
          ['Inside an industrial factory building.', 'Suburban describes neighborhoods with yards and gardens.'],
        ],
        answer: 0,
        explain: 'The context of wandering through residential gardens points to suburban neighborhoods near cities.',
      }), 4),
      sample(BATS, mcq({
        standard: 'rla:4.3B', cites: [2],
        stem: 'Read this sentence from paragraph 2. "These gentle nocturnal mammals are a boon to local farmers..." What does **nocturnal** mean?',
        choices: [
          'Active primarily during the night.',
          ['Living permanently underwater.', 'Bats fly in the air and roost under bridges.'],
          ['Eating only green plants and fruit.', 'The next clause says they eat thousands of pounds of insects.'],
          ['Unable to fly in open air.', 'The text describes them flying in a swirling cloud.'],
        ],
        answer: 0,
        explain: 'Paragraph 2 notes that the bats emerge at sunset and fly through the evening, showing that nocturnal means night-active.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.3C',
    goal: 'You will learn to determine the meaning of words with affixes like mis-, sub-, -ment, -ity and roots like auto, graph, meter.',
    words: [
      { term: 'affix', meaning: 'A prefix or suffix added to a base word.' },
      { term: 'root', meaning: 'The core word part carrying the fundamental meaning.' },
    ],
    ideas: [
      { title: 'Break words into parts', text: 'Identify the root and affixes: auto (self) + graph (write) = a person\'s handwritten signature.' },
      { title: 'Recognize common roots', text: 'Auto means self, graph means write, meter means measure. Sub- means under, mis- means bad/wrong.' },
    ],
  },
  {
    code: 'rla:4.3D',
    goal: 'You will learn to identify, use, and explain the meaning of homophones like reign/rain.',
    words: [
      { term: 'homophone', meaning: 'Words that sound identical but differ in spelling and meaning.' },
    ],
    ideas: [
      { title: 'Check sentence clues', text: 'Look at how the word is used in context: a king reigns over a kingdom, while rain falls from the sky.' },
      { title: 'Verify spelling', text: 'Ensure the chosen spelling matches the exact intended meaning.' },
    ],
  },
  {
    code: 'rla:4.6C',
    goal: 'You will learn to make, correct, and confirm predictions using text features and genre structures.',
    words: [
      { term: 'prediction', meaning: 'An educated guess about what will happen next based on clues and text evidence.' },
    ],
    ideas: [
      { title: 'Use text clues', text: 'Combine what the text states with what you already know to predict what will happen next.' },
      { title: 'Confirm or adjust', text: 'As you read further, check if your prediction was right or revise your thinking.' },
    ],
    samples: [
      sample(LEMONADE, mcq({
        standard: 'rla:4.6C', cites: [2],
        stem: 'When Mateo begins ringing his bicycle bell and singing loudly in paragraph 2, what can the reader predict?',
        choices: [
          'His energetic commotion will attract the attention of neighbors and draw customers to the stand.',
          ['The neighbors will call the police to complain about the noise.', 'Mateo was singing a cheerful song about lemonade.'],
          ['Elena will pack up her stand and go home crying.', 'Elena was hoping for customers to stop.'],
          ['A rainstorm will immediately wash away the lemonade stand.', 'The weather is warm and sunny.'],
        ],
        answer: 0,
        explain: 'Mateo\'s lively jingle and bell ringing are designed to draw neighborhood attention, leading to customers stopping by.',
      }), 4),
      sample(FABLE, mcq({
        standard: 'rla:4.6C', cites: [2],
        stem: 'After the dove rescues the drowning ant in paragraph 2, what can a reader familiar with fables predict?',
        choices: [
          'The ant will find an opportunity to repay the dove\'s kindness later in the story.',
          ['The dove will eat the ant for lunch.', 'The dove showed compassion and rescued the ant.'],
          ['The hunter will catch both the dove and the ant.', 'Fables reward helpful actions.'],
          ['The spring will dry up completely.', 'The moral revolves around mutual help.'],
        ],
        answer: 0,
        explain: 'In classic fables, an act of kindness is rewarded when the smaller creature later saves the larger helper.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.6E',
    goal: 'You will learn to make connections to personal experiences, other texts, and society.',
    words: [
      { term: 'text connection', meaning: 'Linking what you read to your own life, another book, or the wider world.' },
    ],
    ideas: [
      { title: 'Text-to-self', text: 'Think about a time you experienced a similar emotion or challenge as a character.' },
      { title: 'Text-to-world', text: 'Connect events in the story to real-world community efforts or news.' },
    ],
    samples: [
      sample(CAMP, mcq({
        standard: 'rla:4.6E', cites: [1, 2],
        stem: 'How might a reader connect their personal experiences to the narrator\'s feelings in "First Night at Camp"?',
        choices: [
          'By remembering a time they felt nervous about trying a new activity but ended up having fun.',
          ['By recalling how to build a space satellite in science class.', 'Space satellites are not related to camping feelings.'],
          ['By calculating how many miles it takes to drive to Florida.', 'Driving distances are unrelated.'],
          ['By memorizing the names of all the rivers in Texas.', 'Geography memorization is not an emotional connection.'],
        ],
        answer: 0,
        explain: 'Most readers have experienced being anxious about unfamiliar situations (new camp, new school) and then finding friendship.',
      }), 4),
      sample(LEMONADE, mcq({
        standard: 'rla:4.6E', cites: [1, 3],
        stem: 'Which real-life connection can students make to Elena sharing her earnings with Mateo?',
        choices: [
          'Recognizing that teamwork and sharing rewards is fair when both people help a project succeed.',
          ['Believing that older siblings should always keep all the money.', 'Elena realized Mateo deserved half.'],
          ['Thinking that lemonade stands are illegal in Texas.', 'The story is about family cooperation.'],
          ['Understanding how to build a wooden sailboat.', 'Sailboats are not related to lemonade.'],
        ],
        answer: 0,
        explain: 'Elena\'s decision connects to real-world fairness: when teammates contribute significantly to success, sharing the reward is just.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.6F',
    goal: 'You will learn to make inferences and use text evidence to support your understanding.',
    words: [
      { term: 'inference', meaning: 'A conclusion reached by combining text clues with your own background knowledge.' },
    ],
    ideas: [
      { title: 'Read between the lines', text: 'Authors don\'t always state everything directly; look at characters\' actions to infer their true feelings.' },
      { title: 'Anchor with evidence', text: 'Always support your inference with a specific sentence or detail from the text.' },
    ],
    samples: [
      sample(LEMONADE, mcq({
        standard: 'rla:4.6F', cites: [3],
        stem: 'What can the reader infer about Elena when she hands Mateo half the coins in paragraph 3?',
        choices: [
          'She recognized that her brother\'s creative help was essential to the stand\'s success.',
          ['She wanted Mateo to buy all the lemons for tomorrow.', 'She gave it to him as fair sharing, not a business errand.'],
          ['She was tired of holding the heavy glass jar.', 'She handed him half the money out of appreciation.'],
          ['She was afraid Mateo would take her telescope.', 'She happily shared the earnings.'],
        ],
        answer: 0,
        explain: 'Admitting "You were the real star of the stand" and handing over half the earnings proves Elena recognized his contribution.',
      }), 4),
      sample(BATS, mcq({
        standard: 'rla:4.6F', cites: [2],
        stem: 'What can the reader infer about the relationship between Austin residents and the bats from paragraph 2?',
        choices: [
          'The community appreciates the bats for their pest control and enjoys watching their evening flights.',
          ['Residents stay indoors because they are terrified of the bats.', 'Hundreds gather on the bridge to watch the spectacle.'],
          ['Farmers try to trap the bats to keep them away from crops.', 'The bats help farmers by eating crop-destroying insects.'],
          ['City officials are trying to tear down the bridge.', 'The bridge provides a celebrated roosting site.'],
        ],
        answer: 0,
        explain: 'The bats provide huge insect-control benefits and draw admiring crowds to the bridge each evening.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.6G',
    goal: 'You will learn to evaluate details read to determine key ideas.',
    words: [
      { term: 'key idea', meaning: 'An important point that directly supports the central message or theme.' },
    ],
    ideas: [
      { title: 'Separate big ideas from minor facts', text: 'Ask yourself: If this detail were removed, would the main point still make sense?' },
      { title: 'Look for repeated emphasis', text: 'Key ideas are often supported by multiple details throughout the selection.' },
    ],
    samples: [
      sample(BATS, mcq({
        standard: 'rla:4.6G', cites: [2],
        stem: 'Which detail is most important to the key idea that Mexican free-tailed bats are beneficial to humans?',
        choices: [
          'They consume up to twenty thousand pounds of crop-damaging insects in a single night.',
          ['They roost beneath concrete bridge spans.', 'Where they roost is an interesting detail, but does not explain their benefit to humans.'],
          ['They migrate north to Austin each spring.', 'Migration is seasonal behavior, not an explanation of human benefit.'],
          ['They have soft brown fur.', 'Fur color is a minor physical detail.'],
        ],
        answer: 0,
        explain: 'Consuming tens of thousands of pounds of harmful crop pests directly proves their immense agricultural benefit.',
      }), 4),
      sample(ARMADILLO, mcq({
        standard: 'rla:4.6G', cites: [2],
        stem: 'Which detail best explains how armadillos find food despite poor eyesight?',
        choices: [
          'Their keen sense of smell detects insects buried six inches under the soil.',
          ['They leap three feet into the air when startled.', 'Leaping is a defense reaction, not a foraging tool.'],
          ['They have bony armor plates on their backs.', 'Armor protects them from predators.'],
          ['They are the state mammal of Texas.', 'Being a state symbol is an honor, not a foraging method.'],
        ],
        answer: 0,
        explain: 'Paragraph 2 explains that their sharp sense of smell allows them to locate subterranean beetles and worms.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.6H',
    goal: 'You will learn to synthesize information across texts to create new understanding.',
    words: [
      { term: 'synthesize', meaning: 'Combining ideas from two or more texts to form a broader conclusion.' },
    ],
    ideas: [
      { title: 'Find the common thread', text: 'Identify the common topic both authors are discussing from different angles.' },
      { title: 'Combine insights', text: 'Put facts from Text 1 together with details from Text 2 to see the bigger picture.' },
    ],
    samples: [
      sample(PAIRED_PLASTIC, mcq({
        standard: 'rla:4.6H', cites: [1, 2],
        stem: 'What new understanding can a reader gain by combining the information in both texts?',
        choices: [
          'While plastic pollution is a severe global environmental threat, dedicated local community volunteer cleanups can make an immediate positive difference.',
          ['Ocean plastic only harms sea turtles in Florida.', 'Text 2 mentions Galveston, Texas.'],
          ['Beach cleanups are ineffective and should be discontinued.', 'The Galveston cleanup removed five tons of trash in four hours.'],
          ['Plastic breaks down in water within a few days.', 'Text 1 notes plastic breaks into microplastics that persist.'],
        ],
        answer: 0,
        explain: 'Synthesizing the serious problem in Text 1 with the community solution in Text 2 shows how local action addresses pollution.',
      }), 4),
      sample(PAIRED_PLASTIC, mcq({
        standard: 'rla:4.6H', cites: [1, 2],
        stem: 'Based on both texts, why is collecting shoreline trash so urgent?',
        choices: [
          'Because wave action breaks discarded plastic into tiny pieces that marine wildlife consume, causing harm.',
          ['Because tourists dislike looking at seaweed on the beach.', 'The texts focus on plastic and wildlife, not seaweed.'],
          ['Because coastal cities sell plastic bottles to fund schools.', 'Neither text mentions selling plastic.'],
          ['Because sand disappears when plastic touches it.', 'Plastic does not destroy sand.'],
        ],
        answer: 0,
        explain: 'Combining Text 1\'s fact about microplastics harming animals with Text 2\'s protection of sea turtles shows why cleanup is critical.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.7C',
    goal: 'You will learn to use text evidence to support your answers and responses.',
    words: [
      { term: 'text evidence', meaning: 'Exact words, phrases, or facts quoted directly from the passage.' },
    ],
    ideas: [
      { title: 'Look back in the text', text: 'Do not rely solely on memory; reread the specific paragraph to locate the exact sentence.' },
      { title: 'Match question to proof', text: 'Make sure your chosen quote directly answers the question being asked.' },
    ],
    samples: [
      sample(BATS, mcq({
        standard: 'rla:4.7C', cites: [2],
        stem: 'Which detail from paragraph 2 provides evidence that the bat colony is a popular tourist attraction?',
        choices: [
          '"Spectators gather on the bridge walkways every evening to witness the spectacle."',
          ['"These gentle nocturnal mammals are a boon to local farmers..."', 'This shows agricultural benefit, not tourism.'],
          ['"At sunset, the colony emerges in a massive swirling cloud..."', 'This describes the flight.'],
          ['"Each spring, hundreds of thousands of Mexican free-tailed bats migrate north..."', 'This describes migration.'],
        ],
        answer: 0,
        explain: 'Pointing out that crowds of spectators gather on the bridge walkways directly proves the bats are a major public attraction.',
      }), 4),
      sample(LEMONADE, mcq({
        standard: 'rla:4.7C', cites: [3],
        stem: 'Which quotation best proves that Elena appreciated Mateo\'s assistance?',
        choices: [
          '"\'You were the real star of the stand,\' she admitted warmly."',
          ['"For an entire hour, not a single neighbor stopped."', 'This describes her initial frustration.'],
          ['"Elena wanted to earn enough money to purchase a new telescope."', 'This states her goal in paragraph 1.'],
          ['"Elena set up her lemonade stand."', 'This describes starting the project.'],
        ],
        answer: 0,
        explain: 'Calling Mateo the "real star of the stand" directly expresses Elena\'s genuine gratitude.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.7D',
    goal: 'You will learn to retell, paraphrase, or summarize texts maintaining meaning and logical order.',
    words: [
      { term: 'summary', meaning: 'A brief statement of the main points of a text in logical chronological order.' },
    ],
    ideas: [
      { title: 'Beginning, middle, and end', text: 'A complete story summary includes the main character\'s goal, the problem, and how it is resolved.' },
      { title: 'Leave out minor details', text: 'A good summary captures the big picture without bogging down in trivial facts.' },
    ],
    samples: [
      sample(LEMONADE, mcq({
        standard: 'rla:4.7D', cites: [1, 2, 3],
        stem: 'Which statement provides the best summary of "The Lemonade Stand"?',
        choices: [
          'Elena struggles to sell lemonade until her younger brother attracts customers with a silly song, leading her to share her earnings with him.',
          ['Elena wants to buy a telescope so she sells sweet lemonade on Saturday morning.', 'This leaves out the problem, Mateo\'s solution, and the ending.'],
          ['Mateo rides his bicycle down the sidewalk while singing songs to neighbors.', 'This is just one action from the middle of the story.'],
          ['Neighbors line up around the block because they are thirsty for cold drinks.', 'This focuses on customer reactions rather than the characters\' arc.'],
        ],
        answer: 0,
        explain: 'This summary captures the goal, the initial conflict, Mateo\'s turning point, and the happy resolution.',
      }), 4),
      sample(FABLE, mcq({
        standard: 'rla:4.7D', cites: [1, 2, 3],
        stem: 'Which is the best summary of "The Ant and the Dove"?',
        choices: [
          'A dove rescues a drowning ant with a leaf, and the ant later returns the favor by stinging a hunter who was aiming at the dove.',
          ['An ant falls into a mountain spring while taking a morning drink.', 'This covers only the first paragraph.'],
          ['A hunter tries to capture wild doves using a heavy net in the forest.', 'This leaves out the ant\'s rescue and the main theme.'],
          ['Birds in the forest always help insects find green leaves.', 'This is an overgeneralized statement.'],
        ],
        answer: 0,
        explain: 'The summary covers both connected events in proper order, showing how mutual kindness resolved both perils.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.8A',
    goal: 'You will learn to infer basic themes supported by text evidence.',
    words: [
      { term: 'theme', meaning: 'The central message, life lesson, or moral that an author conveys through a story.' },
    ],
    ideas: [
      { title: 'Look at how characters grow', text: 'What did the main character learn by the end of the story? That lesson often reveals the theme.' },
      { title: 'Think about big life lessons', text: 'Themes apply to anyone\'s life, such as teamwork, honesty, perseverance, or kindness.' },
    ],
    samples: [
      sample(FABLE, mcq({
        standard: 'rla:4.8A', cites: [3],
        stem: 'What is the primary theme of "The Ant and the Dove"?',
        choices: [
          'Acts of kindness are remembered, and one good deed often leads to another.',
          ['Hunters should never walk in the woods during the summer.', 'This is advice about hunting, not a theme.'],
          ['Ants are much stronger swimmers than birds.', 'The ant was drowning until rescued.'],
          ['Small insects should always stay away from water.', 'This is safety advice, not a life lesson.'],
        ],
        answer: 0,
        explain: 'The explicit moral and story events demonstrate that helping someone in need often results in them helping you in return.',
      }), 4),
      sample(LEMONADE, mcq({
        standard: 'rla:4.8A', cites: [1, 3],
        stem: 'Which theme is best developed in "The Lemonade Stand"?',
        choices: [
          'Working together and appreciating each person\'s unique strengths leads to success.',
          ['Older siblings should never trust younger children with chores.', 'Elena learned that her brother was very helpful.'],
          ['Telescopes are too expensive for children to buy.', 'Elena earned plenty of money with Mateo\'s help.'],
          ['Lemonade tastes better with extra sugar.', 'This is a culinary preference, not a theme.'],
        ],
        answer: 0,
        explain: 'Elena\'s willingness to value Mateo\'s unique talent shows that collaboration and mutual appreciation lead to success.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.8B',
    goal: 'You will learn to explain the interactions of characters and the changes they undergo.',
    words: [
      { term: 'character interaction', meaning: 'How characters talk, act, and react toward one another.' },
      { term: 'character change', meaning: 'How a character\'s attitude, feelings, or beliefs transform over the course of a story.' },
    ],
    ideas: [
      { title: 'Track feelings from start to end', text: 'Notice how a character behaves in paragraph 1 compared to the final paragraph.' },
      { title: 'Find the turning point', text: 'What specific event caused the character to change their mind or behavior?' },
    ],
    samples: [
      sample(LEMONADE, mcq({
        standard: 'rla:4.8B', cites: [1, 3],
        stem: 'How does Elena\'s attitude toward Mateo change by the end of the story?',
        choices: [
          'She changes from dismissing him as too young to respecting him as an equal partner.',
          ['She becomes jealous because the neighbors liked his song better.', 'Elena was grateful and gave him half the money.'],
          ['She decides to buy two telescopes instead of one.', 'The text focuses on her attitude toward Mateo.'],
          ['She tells him to never come near her stand again.', 'She welcomed his help warmly.'],
        ],
        answer: 0,
        explain: 'At first Elena says Mateo is too young; by the end, she hands him half the earnings and calls him the star of the stand.',
      }), 4),
      sample(CAMP, mcq({
        standard: 'rla:4.8B', cites: [1, 2],
        stem: 'How does the interaction with Jamal change the narrator\'s feelings about camp?',
        choices: [
          'Jamal\'s friendliness and shared stargazing help the narrator feel welcomed and excited.',
          ['Jamal persuades the narrator to sneak home on the bus.', 'The narrator decides to stay and enjoy camp.'],
          ['Jamal complains about the mosquitoes, making the narrator feel worse.', 'Jamal teaches him how to enjoy the night sounds.'],
          ['Jamal takes the narrator\'s flashlight without asking.', 'Their interaction was positive and formed a friendship.'],
        ],
        answer: 0,
        explain: 'Jamal\'s welcoming attitude in showing the narrator constellations transforms dread into genuine enjoyment.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.8C',
    goal: 'You will learn to analyze plot elements including rising action, climax, falling action, and resolution.',
    words: [
      { term: 'rising action', meaning: 'The series of events and complications that build suspense toward the turning point.' },
      { term: 'climax', meaning: 'The most exciting or critical moment of the story where the main conflict turns.' },
      { term: 'resolution', meaning: 'How the story ends and the problem is resolved.' },
    ],
    ideas: [
      { title: 'Climb the plot mountain', text: 'Introduction sets the scene; rising action builds tension; climax is the peak; falling action and resolution wind down.' },
      { title: 'Find the turning point', text: 'The climax is the exact moment when the outcome of the main problem is determined.' },
    ],
    samples: [
      sample(LEMONADE, mcq({
        standard: 'rla:4.8C', cites: [2],
        stem: 'Which event in "The Lemonade Stand" serves as the turning point (climax)?',
        choices: [
          'Mateo marches down the sidewalk ringing his bell and singing his catchy lemonade jingle.',
          ['Elena decides to buy a new telescope.', 'This is the opening exposition in paragraph 1.'],
          ['No customers stop by for an entire hour.', 'This is the problem in the rising action.'],
          ['Elena splits the money with Mateo at the end of the day.', 'This is the resolution.'],
        ],
        answer: 0,
        explain: 'Mateo\'s spontaneous advertising campaign is the turning point that turns an unsuccessful venture into a booming business.',
      }), 4),
      sample(FABLE, mcq({
        standard: 'rla:4.8C', cites: [3],
        stem: 'What is the climax of "The Ant and the Dove"?',
        choices: [
          'The ant stings the hunter\'s foot, causing him to drop the net and allowing the dove to escape.',
          ['The ant walks to the mountain spring to take a drink.', 'This is the beginning exposition.'],
          ['The dove drops a green leaf into the stream.', 'This is the first rescue.'],
          ['The hunter wakes up early in the morning.', 'This is minor rising action.'],
        ],
        answer: 0,
        explain: 'The sting at the critical moment when the net is aimed is the peak action that saves the dove\'s life.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.8D',
    goal: 'You will learn to explain the influence of the setting on the plot of a story.',
    words: [
      { term: 'setting', meaning: 'The time and place in which a story occurs, including cultural and historical context.' },
    ],
    ideas: [
      { title: 'How setting creates problems', text: 'Weather, location, or time period often force characters to act or create obstacles.' },
      { title: 'Look for sensory details of place', text: 'Notice how the surroundings shape what the characters hear, see, and do.' },
    ],
    samples: [
      sample(CAMP, mcq({
        standard: 'rla:4.8D', cites: [1, 2],
        stem: 'How does the outdoor camp setting influence the narrator\'s initial conflict?',
        choices: [
          'The presence of insects and lack of air conditioning challenge the narrator\'s indoor preferences.',
          ['A severe flood forces the campers to evacuate.', 'There is no flood in the story.'],
          ['The camp is located in a noisy downtown subway station.', 'It is an outdoor forest camp with owls.'],
          ['The camp counselors require everyone to speak Spanish.', 'Language requirements are not mentioned.'],
        ],
        answer: 0,
        explain: 'The narrator prefers indoor comforts, so being placed in a rustic wooded environment creates the initial internal conflict.',
      }), 4),
      sample(FABLE, mcq({
        standard: 'rla:4.8D', cites: [1],
        stem: 'How does the setting of a mountain spring create the initial problem in the fable?',
        choices: [
          'The swift flowing current of the water sweeps the tiny ant downstream.',
          ['The mountain rocks were covered in hot volcanic lava.', 'There is no lava in the fable.'],
          ['The spring was frozen solid into ice.', 'The water was flowing quickly.'],
          ['The trees in the forest blocked all sunlight.', 'The danger came from the rushing water.'],
        ],
        answer: 0,
        explain: 'The rushing water of the mountain spring creates the life-or-death crisis for the tiny ant.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.9A',
    goal: 'You will learn the distinguishing characteristics of folktales, fables, legends, myths, and tall tales.',
    words: [
      { term: 'fable', meaning: 'A short tale, usually with animal characters, that teaches a moral lesson.' },
      { term: 'tall tale', meaning: 'A humorous story featuring exaggerated, larger-than-life heroes.' },
      { term: 'hyperbole', meaning: 'Extreme exaggeration used for comic or dramatic effect.' },
    ],
    ideas: [
      { title: 'Fables teach morals', text: 'Fables feature talking animals and end with an explicit lesson about behavior.' },
      { title: 'Tall tales exaggerate', text: 'Tall tale heroes do impossible feats, like lassoing tornadoes or digging canyons.' },
    ],
    samples: [
      sample(TALL_TALE, mcq({
        standard: 'rla:4.9A', cites: [1, 2],
        stem: 'Which element in "Pecos Bill and the Cyclone" is a defining characteristic of tall tales?',
        choices: [
          'Wild hyperbole, such as riding a bucking cyclone and carving the Grand Canyon when falling off.',
          ['A realistic diary entry written by a pioneer farmer.', 'The feats are magical and completely exaggerated.'],
          ['A rhyming poem that explains how tornadoes form.', 'The story is written in humorous prose paragraphs.'],
          ['A formal news report from the National Weather Service.', 'The story is an American folklore tall tale.'],
        ],
        answer: 0,
        explain: 'Extreme exaggeration (hyperbole)—like using a rattlesnake as a whip and riding a tornado—is the hallmark of American tall tales.',
      }), 4),
      sample(FABLE, mcq({
        standard: 'rla:4.9A', cites: [3],
        stem: 'How can the reader tell that "The Ant and the Dove" is a fable?',
        choices: [
          'It features talking animals and concludes with an explicit moral lesson.',
          ['It includes historical dates and newspaper headlines.', 'There are no historical dates; it is traditional folklore.'],
          ['It describes an astronaut landing on the moon.', 'The characters are forest creatures.'],
          ['It contains stage directions for actors.', 'It is a narrative story, not a play script.'],
        ],
        answer: 0,
        explain: 'Animal characters demonstrating human virtues and ending with a clear moral ("One good turn deserves another") define a fable.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.9B',
    goal: 'You will learn to explain figurative language such as simile, metaphor, and personification in poetry.',
    words: [
      { term: 'personification', meaning: 'Giving human qualities or actions to animals, objects, or nature.' },
      { term: 'metaphor', meaning: 'Comparing two things directly by stating one is the other.' },
    ],
    ideas: [
      { title: 'Notice human traits in nature', text: 'When the poet writes that "thunder grumbles" or "thirsty yucca drinks," that is personification.' },
      { title: 'Find comparisons', text: 'Similes use like or as; metaphors make direct statements of comparison.' },
    ],
    samples: [
      sample(STORM_POEM, mcq({
        standard: 'rla:4.9B', cites: [3, 5],
        stem: 'In lines 3 and 5, how does the poet use personification to describe the storm and the desert?',
        choices: [
          'By describing the thunder as "grumbling" and the yucca as "drinking."',
          ['By explaining how meteorologists measure rainfall in inches.', 'The poet uses poetic language, not weather instruments.'],
          ['By comparing the rain to glass beads falling from the sky.', 'Glass beads are not mentioned in this poem.'],
          ['By claiming that animals built a wooden shelter.', 'Animals building shelters is not in the text.'],
        ],
        answer: 0,
        explain: 'Giving thunder the human ability to grumble and plant life the human action of drinking are clear examples of personification.',
      }), 4),
      sample(STORM_POEM, mcq({
        standard: 'rla:4.9B', cites: [2],
        stem: 'What does the personification in line 2 ("While desert shadows start to creep") suggest?',
        choices: [
          'The darkness is advancing slowly, quietly, and stealthily across the sand.',
          ['Scorpions are crawling across the ground.', 'The line describes shadows, not insects.'],
          ['The sun is rising in the early morning.', 'Shadows creeping accompanied by storm clouds indicate dusk or storm darkness.'],
          ['People are sneaking into a canyon tent.', 'The phrase refers to natural shadows.'],
        ],
        answer: 0,
        explain: 'Describing shadows as creeping suggests a slow, stealthy movement of darkness across the desert.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.9C',
    goal: 'You will learn to explain the structure of drama, including character tags, acts, scenes, and stage directions.',
    words: [
      { term: 'stage directions', meaning: 'Instructions in parentheses or italics telling actors how to speak, move, and react.' },
      { term: 'character tag', meaning: 'The character\'s name in capital letters showing who speaks next.' },
    ],
    ideas: [
      { title: 'Drama is written to be acted', text: 'Dialogue tells the story through spoken lines, while stage directions guide physical performance.' },
      { title: 'Follow scene settings', text: 'Scene descriptions set the location, time, and mood at the beginning of each scene.' },
    ],
    samples: [
      sample(SCENE, mcq({
        standard: 'rla:4.9C', cites: [2],
        stem: 'What information is provided by the stage direction "(gripping the table edge)" in speech 1?',
        choices: [
          'It reveals Carlos\'s physical tension and nervousness through body language.',
          ['It tells Carlos to push the table into the hallway.', 'He is gripping the edge in anxiety, not moving furniture.'],
          ['It indicates that the table is broken and about to collapse.', 'The volcano model had a leak, but the table was fine.'],
          ['It tells Maya when to enter the stage.', 'Maya was already on stage holding vinegar.'],
        ],
        answer: 0,
        explain: 'Gripping the table edge physically demonstrates Carlos\'s intense anxiety before the judges arrive.',
      }), 4),
      sample(SCENE, mcq({
        standard: 'rla:4.9C', cites: [1],
        stem: 'Why does the playwright begin the scene with an italicized paragraph before any dialogue?',
        choices: [
          'To establish the setting, background situation, and initial character positions for the audience and actors.',
          ['To list all the props that the school science fair purchased.', 'It sets the scene rather than listing inventory.'],
          ['To explain the final score given by the judges.', 'Judging has not occurred yet.'],
          ['To recite a poem about volcanoes.', 'The play is in prose dramatic format.'],
        ],
        answer: 0,
        explain: 'The initial stage direction establishes the cafeteria location, timing (fifteen minutes before judging), and character actions.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.9D.i',
    goal: 'You will learn to recognize the characteristics of informational text, including the central idea with supporting evidence.',
    words: [
      { term: 'central idea', meaning: 'The most important overarching point the author wants readers to understand from an informational text.' },
    ],
    ideas: [
      { title: 'Find the umbrella idea', text: 'The central idea covers all the main points in the passage, not just one paragraph.' },
      { title: 'Verify with supporting facts', text: 'Look for supporting details that prove and explain the central idea throughout the text.' },
    ],
    samples: [
      sample(BATS, mcq({
        standard: 'rla:4.9D.i', cites: [1, 2],
        stem: 'What is the central idea of the selection "Austin\'s Urban Bat Colony"?',
        choices: [
          'Mexican free-tailed bats in Austin provide vital insect control for farmers and create a celebrated wildlife spectacle.',
          ['Mexican free-tailed bats only eat mosquitoes during the month of July.', 'The text states they eat up to 20,000 pounds of insects nightly.'],
          ['The Congress Avenue Bridge was built solely to house bats.', 'The bats chose the bridge naturally after it was constructed.'],
          ['Austin farmers built the bridge to attract bats.', 'Farmers benefit from bats, but did not construct the bridge.'],
        ],
        answer: 0,
        explain: 'The central idea encompasses both their migration/roosting and their dual value: massive pest control and beloved civic attraction.',
      }), 4),
      sample(ARMADILLO, mcq({
        standard: 'rla:4.9D.i', cites: [1, 2],
        stem: 'What is the central idea of "The Nine-Banded Armadillo"?',
        choices: [
          'The nine-banded armadillo is an armored Texas mammal with unique physical adaptations for survival and feeding.',
          ['Armadillos are blind animals that only live inside wooden boxes.', 'They live in the wild in burrows and thickets.'],
          ['The state of Texas recently banned armadillos from gardens.', 'The armadillo is the official state small mammal.'],
          ['Female armadillos cannot survive without eating earthworms.', 'This is a single diet detail.'],
        ],
        answer: 0,
        explain: 'The article focuses on the armadillo\'s physical features (scutes, legs, claws) and senses that help it forage and survive.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.9D.ii',
    goal: 'You will learn to recognize informational text features like diagrams, pronunciation guides, and sidebars.',
    words: [
      { term: 'text feature', meaning: 'Special parts of an informational text that help organize or illustrate information.' },
      { term: 'diagram', meaning: 'A drawing or visual model that explains how something works or is structured.' },
    ],
    ideas: [
      { title: 'Don\'t skip text features', text: 'Captions, sidebars, and diagrams often contain key facts that are not in the main paragraphs.' },
      { title: 'Connect visual and text', text: 'Look back and forth between the text and the graphic feature to deepen your comprehension.' },
    ],
    samples: [
      sample(ARMADILLO, mcq({
        standard: 'rla:4.9D.ii', cites: [3],
        stem: 'How does the "Fast Fact" sidebar contribute to the reader\'s knowledge?',
        choices: [
          'It provides a surprising biological detail that armadillos give birth to identical quadruplets.',
          ['It explains how to catch an armadillo with a net.', 'No catching instructions are given.'],
          ['It lists the names of famous scientists who studied fossils.', 'No scientists are named in the sidebar.'],
          ['It tells what year Texas was founded.', 'The sidebar is about armadillo reproduction.'],
        ],
        answer: 0,
        explain: 'The sidebar highlights the unique fact that female nine-banded armadillos produce identical four-pup litters from one egg.',
      }), 4),
      sample(BATS, mcq({
        standard: 'rla:4.9D.ii', cites: [1],
        stem: 'Why did the author mention the specific name "Ann W. Richards Congress Avenue Bridge"?',
        choices: [
          'To identify the exact real-world geographic location in Austin where the colony roosts.',
          ['To explain who designed the bridge\'s concrete pillars.', 'The text identifies the landmark name.'],
          ['To suggest that readers avoid visiting the city of Austin.', 'Spectators gather happily to watch.'],
          ['To prove that bats avoid man-made structures.', 'The bats thrive under this bridge.'],
        ],
        answer: 0,
        explain: 'Naming the landmark gives precise real-world context so readers can locate the celebrated urban bat bridge.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.9D.iii',
    goal: 'You will learn to recognize organizational patterns in informational text, including compare and contrast.',
    words: [
      { term: 'compare and contrast', meaning: 'An organizational pattern showing how two or more things are alike and different.' },
      { term: 'chronological order', meaning: 'Presenting events or steps in the time sequence they occurred.' },
    ],
    ideas: [
      { title: 'Look for comparison signal words', text: 'Words like both, similarly, in contrast, however, and on the other hand signal compare and contrast.' },
      { title: 'Use a Venn diagram mindset', text: 'Separate the features shared by both subjects from the features unique to each.' },
    ],
    samples: [
      sample(FROGS_TOADS, mcq({
        standard: 'rla:4.9D.iii', cites: [1, 2],
        stem: 'How does the author organize the information in "Comparing Frogs and Toads"?',
        choices: [
          'By using a compare-and-contrast structure, first explaining shared traits and then contrasting physical differences.',
          ['By describing a personal story of finding a frog in a pond.', 'The text is an objective informational article, not a personal story.'],
          ['By presenting an argument that toads make better pets than frogs.', 'The text is scientific comparison, not an argument.'],
          ['By listing historical events from 1800 to the present.', 'The text describes animal physiology, not historical dates.'],
        ],
        answer: 0,
        explain: 'The subheadings ("Shared Characteristics" and "Key Differences") clearly structure the compare-and-contrast pattern.',
      }), 4),
      sample(FROGS_TOADS, mcq({
        standard: 'rla:4.9D.iii', cites: [2],
        stem: 'In paragraph 2, what signal phrase does the author use to introduce the contrast between frogs and toads?',
        choices: [
          '"In contrast"',
          ['"For example"', 'This introduces an example, not a contrast.'],
          ['"As a result"', 'This signals cause and effect.'],
          ['"First of all"', 'This signals sequence.'],
        ],
        answer: 0,
        explain: '"In contrast" is an explicit transitional phrase used to highlight differences between frogs and toads.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.9E.i',
    goal: 'You will learn to identify the claim in an argumentative text.',
    words: [
      { term: 'claim', meaning: 'The main stance or opinion that an author is trying to prove in an argument.' },
    ],
    ideas: [
      { title: 'Find the author\'s position', text: 'Ask yourself: What does the author want me to believe or do? Look in the opening or closing paragraphs.' },
      { title: 'Separate claim from facts', text: 'The claim is the author\'s argument; the facts are the evidence used to support that argument.' },
    ],
    samples: [
      sample(LIBRARY, mcq({
        standard: 'rla:4.9E.i', cites: [1],
        stem: 'What is the author\'s main claim in "Open the Library on Weekends"?',
        choices: [
          'The public library should expand its operating schedule to include Sunday hours.',
          ['High school students should be required to volunteer at the library.', 'Volunteering is a supporting solution, not the main claim.'],
          ['The city council should close the library during the summer.', 'The author wants the library open more, not closed.'],
          ['All textbooks should be replaced with digital tablets.', 'Digital tablets are not mentioned.'],
        ],
        answer: 0,
        explain: 'Paragraph 1 directly states the claim: "Our public library should expand its operating hours to include Sundays."',
      }), 4),
      sample(RECYCLE, mcq({
        standard: 'rla:4.9E.i', cites: [1, 3],
        stem: 'What claim does the speaker make in "Join the Cafeteria Clean Team"?',
        choices: [
          'Students should take responsibility for recycling aluminum cans in the cafeteria to protect the environment.',
          ['The cafeteria should stop serving hot food.', 'The speech is about recycling cans and trays, not cutting meals.'],
          ['Every student should buy fifty soda cans each week.', 'The speaker encourages recycling cans, not buying more.'],
          ['Trash cans should be banned from school property.', 'The speaker recommends using recycling bins beside trash cans.'],
        ],
        answer: 0,
        explain: 'The speaker urges students to take action by placing aluminum cans in the blue recycling bins to conserve energy and reduce waste.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.9E.ii',
    goal: 'You will learn to explain how an author uses facts to support an argument.',
    words: [
      { term: 'factual evidence', meaning: 'Truthful statements, statistics, or scientific data that back up a claim.' },
    ],
    ideas: [
      { title: 'Look for data and numbers', text: 'Authors use percentages, survey counts, and scientific measurements to make arguments convincing.' },
      { title: 'Connect fact to claim', text: 'Ask how each fact proves the author\'s point: does it show a benefit or prove that a solution works?' },
    ],
    samples: [
      sample(LIBRARY, mcq({
        standard: 'rla:4.9E.ii', cites: [2],
        stem: 'Which fact from paragraph 2 does the author use to prove that students want Sunday library hours?',
        choices: [
          'A school survey where eight out of ten fourth-graders said they would use the library on Sundays.',
          ['A statement that elementary students like to play outside on weekends.', 'The author discusses quiet study spaces.'],
          ['A report that books in the library were written by Texas authors.', 'Authors are not mentioned.'],
          ['A calculation showing the distance from the school to the library.', 'Distance calculations are not provided.'],
        ],
        answer: 0,
        explain: 'The survey showing that 8 out of 10 fourth-graders want Sunday access provides factual evidence of strong student demand.',
      }), 4),
      sample(RECYCLE, mcq({
        standard: 'rla:4.9E.ii', cites: [2],
        stem: 'Which scientific fact in paragraph 2 supports the argument that recycling aluminum saves resources?',
        choices: [
          'Recycling aluminum saves ninety-five percent of the energy required to make metal from scratch.',
          ['Styrofoam trays are white and lightweight.', 'This describes color and weight, not aluminum recycling.'],
          ['Landfills in Texas are located outside city limits.', 'This is a geographical statement.'],
          ['Students enjoy drinking cold milk at lunch.', 'This is a preference, not evidence of resource conservation.'],
        ],
        answer: 0,
        explain: 'Citing the 95% energy savings provides concrete scientific proof of the tremendous environmental benefit of recycling aluminum.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.9E.iii',
    goal: 'You will learn to identify the intended audience or reader of an argumentative text.',
    words: [
      { term: 'intended audience', meaning: 'The specific group of people the author wrote the piece to persuade or inform.' },
    ],
    ideas: [
      { title: 'Check the greeting and tone', text: 'Does the text address "Fellow students," "Dear Principal," or "City Council"? That reveals the audience.' },
      { title: 'Consider who has power to act', text: 'The intended audience is often the group that can make the decision the author wants.' },
    ],
    samples: [
      sample(LIBRARY, mcq({
        standard: 'rla:4.9E.iii', cites: [1],
        stem: 'Who is the intended audience for "Open the Library on Weekends"?',
        choices: [
          'The city council members who vote on library operating budgets and schedules.',
          ['Kindergarten students learning to read picture books.', 'The formal letter addresses civic decision-makers.'],
          ['Airplane pilots flying over Texas.', 'Pilots have no connection to local municipal library hours.'],
          ['Librarians working in another state.', 'The piece is a petition to the local city council.'],
        ],
        answer: 0,
        explain: 'Paragraph 1 specifically addresses "the members of the city council," the government officials who set public library schedules.',
      }), 4),
      sample(RECYCLE, mcq({
        standard: 'rla:4.9E.iii', cites: [1],
        stem: 'Who is the primary intended audience for "Join the Cafeteria Clean Team"?',
        choices: [
          'Students who eat lunch in the school cafeteria.',
          ['City sanitation workers driving garbage trucks.', 'The speaker is addressing peers at school.'],
          ['Architects designing new school buildings.', 'The speech is about recycling lunch trash.'],
          ['Professional chefs working at gourmet restaurants.', 'The context is an elementary school cafeteria.'],
        ],
        answer: 0,
        explain: 'The greeting "Fellow students" and references to "your lunch" show that the speaker is persuading fellow classmates.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.10A',
    goal: 'You will learn to explain the author\'s purpose and message within a text.',
    words: [
      { term: 'author\'s purpose', meaning: 'The main reason an author writes: to persuade, inform, or entertain (PIE).' },
      { term: 'message', meaning: 'The core takeaway idea the author wants the reader to understand.' },
    ],
    ideas: [
      { title: 'Determine the big goal', text: 'Is the author teaching real facts (inform), telling a story (entertain), or urging action (persuade)?' },
      { title: 'Find the message', text: 'Ask yourself: What does the author want me to remember after I finish reading?' },
    ],
    samples: [
      sample(BIOGRAPHY_OCHOA, mcq({
        standard: 'rla:4.10A', cites: [1, 2],
        stem: 'What is the author\'s main purpose in writing the biography of Dr. Ellen Ochoa?',
        choices: [
          'To inform readers about Dr. Ochoa\'s groundbreaking career as an astronaut and engineer.',
          ['To persuade readers to study electrical engineering at Stanford.', 'The author celebrates her life, not advertising a college.'],
          ['To describe how to pilot the space shuttle Discovery.', 'Piloting instructions are not the focus.'],
          ['To entertain readers with a fictional myth about outer space.', 'Dr. Ochoa is a real historical pioneer.'],
        ],
        answer: 0,
        explain: 'The biography informs readers about Dr. Ochoa\'s education, space missions, and leadership at NASA.',
      }), 4),
      sample(RECYCLE, mcq({
        standard: 'rla:4.10A', cites: [1, 3],
        stem: 'What is the author\'s main purpose in "Join the Cafeteria Clean Team"?',
        choices: [
          'To persuade fellow students to recycle their aluminum cans instead of throwing them away.',
          ['To inform readers about the chemical formula of bauxite ore.', 'The author writes a persuasive school speech, not a chemistry paper.'],
          ['To entertain readers with a story about a talking soda can.', 'The speech is a realistic persuasive appeal.'],
          ['To complain about the food served in the cafeteria.', 'The author focuses on recycling containers, not cafeteria recipes.'],
        ],
        answer: 0,
        explain: 'The author\'s clear objective is persuasion: encouraging classmates to use the blue recycling bins.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.10B',
    goal: 'You will learn to explain how the use of text structure contributes to the author\'s purpose.',
    words: [
      { term: 'text structure', meaning: 'How information in a text is organized, such as cause-and-effect, problem-solution, or sequence.' },
    ],
    ideas: [
      { title: 'Identify the framework', text: 'Does the author set up a problem and propose a fix? Or explain why something happened (cause and effect)?' },
      { title: 'Connect structure to purpose', text: 'A problem-and-solution structure helps an author persuade readers that action is needed.' },
    ],
    samples: [
      sample(LIBRARY, mcq({
        standard: 'rla:4.10B', cites: [1, 2, 3],
        stem: 'How does the problem-and-solution text structure support the author\'s purpose in "Open the Library on Weekends"?',
        choices: [
          'It identifies the problem of working families lacking weekend library access and proposes the practical solution of using volunteers on Sundays.',
          ['It lists historical dates of when libraries were first established.', 'The text is organized by problem and solution, not a historical timeline.'],
          ['It compares public libraries to private bookstores.', 'No bookstores are mentioned.'],
          ['It describes the steps to check out a digital e-book.', 'E-book checkout procedures are not discussed.'],
        ],
        answer: 0,
        explain: 'Presenting a clear civic problem (closed on weekends) followed by a practical solution (volunteers) effectively supports the petition.',
      }), 4),
      sample(RECYCLE, mcq({
        standard: 'rla:4.10B', cites: [1, 2, 3],
        stem: 'How does the cause-and-effect structure in paragraph 2 support the author\'s argument for recycling?',
        choices: [
          'It shows that throwing away aluminum causes 500 years of landfill waste, while recycling causes a 95% energy savings.',
          ['It explains the order in which students should line up for lunch.', 'The text discusses environmental impact, not lunch line sequence.'],
          ['It contrasts cafeteria trays with paper plates.', 'It focuses on the effects of recycling aluminum.'],
          ['It lists the names of students on the Clean Team.', 'Names are not listed in paragraph 2.'],
        ],
        answer: 0,
        explain: 'Highlighting the negative effects of trash versus the massive positive effects of recycling reinforces the author\'s plea to recycle.',
      }), 4),
    ],
  },
];

export const G4_RLA_LESSONS: Lesson[] = [...G4_RLA_LESSONS_FIRST, ...G4_RLA_LESSONS_MORE];
