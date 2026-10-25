// Grade 3 reading walkthroughs (part 1: 3.3A through 3.10B).
// Skills with generators work like math. Passage skills bring two short samples from g3-rla-passages.ts.

import { mcq, sample } from '../rla/author.ts';
import type { Lesson } from '../types.ts';
import {
  ARMADILLO, BATS, BIOGRAPHY_OCHOA, CAMP, FABLE, FROGS_TOADS, LEMONADE,
  LIBRARY, RECYCLE, SCENE, STORM_POEM, TALL_TALE,
} from './g3-rla-passages.ts';
import { G3_RLA_LESSONS_MORE } from './g3-rla-more.ts';

const G3_RLA_LESSONS_FIRST: Lesson[] = [
  {
    code: 'rla:3.3A',
    goal: 'You will learn to use a dictionary or glossary to find a word\'s meaning, pronunciation, and syllables.',
    words: [
      { term: 'dictionary', meaning: 'A reference book or digital tool listing words alphabetically with meanings and pronunciations.' },
      { term: 'guide words', meaning: 'The two words at the top of a dictionary page showing the first and last words on that page.' },
    ],
    ideas: [
      { title: 'Check all definitions', text: 'Many words have multiple numbered meanings. Read all definitions before choosing the one that fits your sentence.' },
      { title: 'Use pronunciation and syllable dots', text: 'Dots between syllables show how to divide the word, and pronunciation symbols show how to say it.' },
    ],
    samples: [
      sample(ARMADILLO, mcq({
        standard: 'rla:3.3A', cites: [1],
        stem: 'Read this dictionary entry for the word **relic**:\n\n**rel·ic** /ˈrelik/ *noun*\n1. an object surviving from an earlier time\n2. a keepsake or souvenir\n3. a remaining fragment\n\nWhich definition best matches the word **relic** as used in paragraph 1?',
        choices: [
          'Definition 1',
          ['Definition 2', 'Paragraph 1 refers to an ancient animal, not a personal souvenir.'],
          ['Definition 3', 'The author describes an entire animal, not a small torn fragment.'],
          ['None of the definitions', 'Definition 1 fits an animal looking like it survived from prehistoric times.'],
        ],
        answer: 0,
        explain: 'In paragraph 1, calling the armadillo a "prehistoric relic" means it looks like a creature that has survived from an ancient era.',
      }), 4),
      sample(BATS, mcq({
        standard: 'rla:3.3A', cites: [2],
        stem: 'Read this dictionary entry for the word **benefit**:\n\n**ben·e·fit** /ˈbenəfit/ *noun*\n1. an advantage or profit gained from something\n2. a public performance to raise money\n3. a payment made by insurance\n\nWhich definition best matches the word **benefit** as used in paragraph 2?',
        choices: [
          'Definition 1',
          ['Definition 2', 'The bats are not putting on a charity performance.'],
          ['Definition 3', 'Bats do not make insurance payments.'],
          ['None of the definitions', 'Definition 1 is an exact fit because eating insect pests is an advantage for farmers.'],
        ],
        answer: 0,
        explain: 'In paragraph 2, saying bats are a "huge benefit to local farmers" means they provide an advantage by eating crop pests.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.3B',
    goal: 'You will learn to use context clues within and beyond a sentence to determine the meaning of unfamiliar words.',
    words: [
      { term: 'context clues', meaning: 'Hints and details in surrounding sentences that help you figure out an unknown word.' },
    ],
    ideas: [
      { title: 'Read before and after', text: 'Look at the sentences right before and right after the unfamiliar word for definitions or examples.' },
      { title: 'Substitute a familiar word', text: 'Test your guessed meaning in the sentence to see if it makes complete sense.' },
    ],
    samples: [
      sample(ARMADILLO, mcq({
        standard: 'rla:3.3B', cites: [2],
        stem: 'In paragraph 2, what does the word **keen** mean?',
        choices: [
          'Sharp, sensitive, and highly developed',
          ['Weak and ineffective', 'Paragraph 2 explains they sniff out bugs buried six inches deep, showing strength.'],
          ['Loud and noisy', 'Keen refers to sense of smell, not sound.'],
          ['Heavy and clumsy', 'Keen describes a sharp ability.'],
        ],
        answer: 0,
        explain: 'Because armadillos can smell insects six inches underground, "keen" means sharp, sensitive, and acute.',
      }), 3),
      sample(BATS, mcq({
        standard: 'rla:3.3B', cites: [2],
        stem: 'In paragraph 2, what does the word **nocturnal** mean?',
        choices: [
          'Active primarily during the night',
          ['Sleeping all night long', 'The bats emerge at sunset to hunt, so they are active at night.'],
          ['Afraid of the dark', 'Bats fly at twilight and night.'],
          ['Dangerous to humans', 'Paragraph 2 describes them as gentle mammals.'],
        ],
        answer: 0,
        explain: 'Because the bats emerge at sunset to hunt for insects across the night, "nocturnal" means active at night.',
      }), 3),
    ],
  },
  {
    code: 'rla:3.3C',
    goal: 'You will learn to identify the meanings of common affixes (im-, non-, dis-, in-, pre-, -ness, -y, -ful) and use them to understand words.',
    words: [
      { term: 'prefix', meaning: 'A word part added to the beginning of a base word that changes its meaning.' },
      { term: 'suffix', meaning: 'A word part added to the end of a base word that changes its meaning or part of speech.' },
    ],
    ideas: [
      { title: 'Separate prefix and base', text: 'In "disagree," the prefix dis- means opposite of, so disagree means opposite of agree.' },
      { title: 'Suffix clues', text: 'The suffix -ful means full of (helpful = full of help), and -ness means a state of being (kindness = being kind).' },
    ],
  },
  {
    code: 'rla:3.3D',
    goal: 'You will learn to identify, use, and explain antonyms, synonyms, idioms, homophones, and homographs in texts.',
    words: [
      { term: 'homophone', meaning: 'Words that sound identical but have different spellings and meanings (bare / bear).' },
      { term: 'synonym', meaning: 'A word having the same or nearly the same meaning as another word.' },
      { term: 'antonym', meaning: 'A word having the opposite meaning of another word.' },
    ],
    ideas: [
      { title: 'Context reveals homophones', text: 'Listen to the sentence meaning to choose the right spelling, like "their" (possession) versus "there" (place).' },
      { title: 'Idioms are non-literal', text: 'Phrases like "butterflies in your stomach" mean nervous, not real insects.' },
    ],
  },
  {
    code: 'rla:3.6C',
    goal: 'You will learn to make, correct, and confirm predictions using text features, genre characteristics, and text structure.',
    words: [
      { term: 'prediction', meaning: 'A thoughtful guess about what will happen next, based on evidence from the text.' },
    ],
    ideas: [
      { title: 'Look at titles and clues', text: 'Use headings, illustrations, and early character actions to forecast upcoming events.' },
      { title: 'Confirm or revise', text: 'As you read further, check whether your prediction was correct or if new clues require a change.' },
    ],
    samples: [
      sample(LEMONADE, mcq({
        standard: 'rla:3.6C', cites: [1, 2],
        stem: 'Based on paragraph 2, what can the reader predict Mateo will do when he arrives with his bicycle bell?',
        choices: [
          'His cheerful song will attract neighborhood customers to the stand.',
          ['He will crash his bicycle into Elena\'s wooden table.', 'Mateo is described as singing cheerfully, not riding recklessly.'],
          ['He will drink all the lemonade himself.', 'He is helping advertise the stand.'],
          ['He will tell neighbors not to buy lemonade.', 'His song praises the lemonade as the best in Texas.'],
        ],
        answer: 0,
        explain: 'Ringing his bell and singing a catchy song attracts neighbors, predicting a crowd of thirsty customers.',
      }), 4),
      sample(FABLE, mcq({
        standard: 'rla:3.6C', cites: [1, 2, 3],
        stem: 'Based on paragraphs 1–3, what prediction can the reader make about Grasshopper when winter arrives?',
        choices: [
          'Grasshopper will have no food stored and will suffer from hunger.',
          ['Grasshopper will fly to Hawaii for the winter.', 'The fable takes place on the prairie.'],
          ['Grasshopper will build a brick house.', 'Grasshopper spends his summer playing, not building.'],
          ['Grasshopper will harvest wheat in the snow.', 'Wheat does not grow in frozen winter.'],
        ],
        answer: 0,
        explain: 'Because Grasshopper spent the entire summer playing while Ant stored food, the reader can predict he will be hungry in winter.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.6E',
    goal: 'You will learn to make connections to personal experiences, ideas in other texts, and society.',
    words: [
      { term: 'connection', meaning: 'A link between what you are reading and yourself (text-to-self), another text (text-to-text), or the world (text-to-world).' },
    ],
    ideas: [
      { title: 'Text-to-self', text: 'Relate a character\'s feelings or dilemmas to times you faced similar situations.' },
      { title: 'Text-to-text', text: 'Compare characters or themes across different stories, such as hard workers in fables.' },
    ],
    samples: [
      sample(CAMP, mcq({
        standard: 'rla:3.6E', cites: [1, 2],
        stem: 'How might a reader connect their own personal experience to the narrator\'s feelings in the story?',
        choices: [
          'By remembering a time they felt nervous about trying a new activity, only to discover they actually loved it.',
          ['By recalling a time they bought a telescope.', 'Telescopes are in the lemonade story, not camp.'],
          ['By building a robot for a science fair.', 'Robots are from a different draft.'],
          ['By picking cotton on a farm.', 'Cotton farming is in Bessie Coleman\'s life.'],
        ],
        answer: 0,
        explain: 'The narrator starts out dreading camp but ends up having fun and making a friend, a relatable personal experience for many readers.',
      }), 4),
      sample(FABLE, mcq({
        standard: 'rla:3.6E', cites: [1, 4],
        stem: 'How does the moral in "The Ant and the Grasshopper" connect to real life in society?',
        choices: [
          'It reminds people that preparing and working ahead of time prevents hardship in the future.',
          ['It proves that insects make great pets.', 'The fable teaches human lessons through animal characters.'],
          ['It shows that summer days are colder than winter days.', 'Summer is hot and winter is cold.'],
          ['It suggests people should never share food with neighbors.', 'Ant shared food while giving helpful advice.'],
        ],
        answer: 0,
        explain: 'The fable teaches the timeless life principle that hard work and planning ahead protect against future difficulties.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.6F',
    goal: 'You will learn to make inferences and use text evidence to support your understanding.',
    words: [
      { term: 'inference', meaning: 'A logical conclusion reached by combining text clues with background knowledge.' },
    ],
    ideas: [
      { title: 'Look for unstated truths', text: 'Authors do not tell you everything directly. Look at characters\' actions to figure out their feelings.' },
      { title: 'Anchor with evidence', text: 'Every good inference must be supported by specific words or sentences in the passage.' },
    ],
    samples: [
      sample(LEMONADE, mcq({
        standard: 'rla:3.6F', cites: [3],
        stem: 'What can the reader infer about Elena when she hands Mateo half the earnings in paragraph 3?',
        choices: [
          'She recognizes Mateo\'s advertising was crucial to the stand\'s success and wants to be fair.',
          ['She wants Mateo to buy her another pitcher.', 'She gives him money to keep.'],
          ['She does not want any money for herself.', 'She shares the money equally.'],
          ['She is angry at Mateo for ringing his bell.', 'She smiles warmly and praises him.'],
        ],
        answer: 0,
        explain: 'Smiling and calling Mateo "the real star of our stand" shows Elena recognized her brother\'s contribution and treated him fairly.',
      }), 4),
      sample(CAMP, mcq({
        standard: 'rla:3.6F', cites: [2],
        stem: 'What can the reader infer about Jamal based on paragraph 2?',
        choices: [
          'He is friendly, knowledgeable about the outdoors, and welcoming to his new cabin mate.',
          ['He wishes the narrator had been assigned to a different cabin.', 'Jamal shares nature tips and becomes a best friend.'],
          ['He is terrified of the dark woods.', 'Jamal points out stars and listens calmly for owls.'],
          ['He has never visited a summer camp before.', 'Jamal knows the constellations and owl calls.'],
        ],
        answer: 0,
        explain: 'Jamal shows the narrator stars and owl calls, proving he is welcoming and knowledgeable about outdoor nature.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.6G',
    goal: 'You will learn to evaluate details read to determine key ideas in a text.',
    words: [
      { term: 'key idea', meaning: 'The most important thought or point the author wants the reader to understand.' },
      { term: 'detail', meaning: 'A specific fact, example, or description that supports a key idea.' },
    ],
    ideas: [
      { title: 'Separate main from minor', text: 'Minor details are interesting, but key ideas explain the whole paragraph or section.' },
      { title: 'Ask what it adds up to', text: 'Ask yourself: What big point do all these supporting facts prove together?' },
    ],
    samples: [
      sample(ARMADILLO, mcq({
        standard: 'rla:3.6G', cites: [2],
        stem: 'Which detail from paragraph 2 supports the idea that armadillos have effective defenses against predators?',
        choices: [
          'They can leap three feet straight up into the air and scurry into thorny thickets.',
          ['They have poor eyesight and weak hearing.', 'Weak eyesight is a physical limitation, not a defense.'],
          ['They are the state mammal of Texas.', 'State mammal designation is a fact from paragraph 1.'],
          ['They eat earthworms and beetles.', 'Eating earthworms describes their diet.'],
        ],
        answer: 0,
        explain: 'Leaping three feet in the air and running into thorny brush directly demonstrates their escape defenses against predators.',
      }), 4),
      sample(BATS, mcq({
        standard: 'rla:3.6G', cites: [2],
        stem: 'Which detail from paragraph 2 supports the key idea that the bat colony is beneficial to local agriculture?',
        choices: [
          'The bats consume thousands of pounds of crop-eating insects every single night.',
          ['Spectators gather on the riverbank at sunset.', 'Spectators watching is a tourism detail.'],
          ['The bats migrate to Austin each spring.', 'Migration is from paragraph 1.'],
          ['The colony forms a swirling ribbon in the sky.', 'The ribbon describes their appearance in flight.'],
        ],
        answer: 0,
        explain: 'Consuming thousands of pounds of pest insects directly proves the agricultural benefit to Texas farmers.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.6H',
    goal: 'You will learn to synthesize information across texts to create new understanding.',
    words: [
      { term: 'synthesize', meaning: 'Combining ideas from different parts of a text or multiple texts to form a fresh, complete understanding.' },
    ],
    ideas: [
      { title: 'Put puzzle pieces together', text: 'Connect a fact from one section with an example from another to see the bigger picture.' },
      { title: 'Look for common threads', text: 'Find what themes or scientific principles unite two different passages.' },
    ],
    samples: [
      sample(FROGS_TOADS, mcq({
        standard: 'rla:3.6H', cites: [1, 2],
        stem: 'When synthesizing paragraphs 1 and 2, what new conclusion can the reader draw about amphibians?',
        choices: [
          'An animal\'s physical characteristics—like leg length and skin moisture—are specifically adapted to the environment in which it lives.',
          ['All amphibians prefer swimming in deep lakes.', 'Toads live in dry gardens and rocky deserts.'],
          ['Frogs and toads cannot survive in Texas.', 'Both are native Texas creatures.'],
          ['Bumpy skin makes toads move faster than frogs.', 'Frogs have longer legs and jump farther.'],
        ],
        answer: 0,
        explain: 'Combining facts about frogs needing ponds and toads thriving in deserts shows that physical traits reflect environmental adaptations.',
      }), 4),
      sample(LEMONADE, mcq({
        standard: 'rla:3.6H', cites: [1, 3],
        stem: 'By synthesizing Elena\'s initial thought in paragraph 1 with her statement in paragraph 3, what new understanding emerges?',
        choices: [
          'Working cooperatively with younger siblings can lead to greater success than trying to do everything alone.',
          ['Selling lemonade is the easiest way to buy a telescope.', 'The story is about sibling cooperation, not business advice.'],
          ['Younger brothers always ruin outdoor projects.', 'Mateo saved the stand by bringing customers.'],
          ['Science kits cost too much money.', 'The cost of the kit is not discussed.'],
        ],
        answer: 0,
        explain: 'Connecting Elena\'s early dismissal of Mateo with her later praise shows that working together produces better outcomes than working alone.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.7C',
    goal: 'You will learn to use text evidence to support an appropriate response.',
    words: [
      { term: 'text evidence', meaning: 'Exact words, phrases, or facts quoted from a text that prove your answer is correct.' },
    ],
    ideas: [
      { title: 'Quote accurately', text: 'Find the exact sentence in the text that directly proves your statement.' },
      { title: 'Avoid guessing', text: 'Do not rely on memory alone; reread the cited paragraph to verify the evidence.' },
    ],
    samples: [
      sample(ARMADILLO, mcq({
        standard: 'rla:3.7C', cites: [1],
        stem: 'Which quotation from paragraph 1 proves that armadillos have hard body armor?',
        choices: [
          '"Covered in bony armor plates called scutes..."',
          ['"The nine-banded armadillo is the official small state mammal of Texas."', 'This names its official state title.'],
          ['"When startled by a predator..."', 'This introduces predator reactions in paragraph 2.'],
          ['"Armadillos have poor eyesight..."', 'This describes eyesight in paragraph 2.'],
        ],
        answer: 0,
        explain: 'The phrase "Covered in bony armor plates called scutes" directly proves the existence of hard body armor.',
      }), 4),
      sample(BATS, mcq({
        standard: 'rla:3.7C', cites: [1],
        stem: 'Which detail from paragraph 1 tells where the bats roost in Austin?',
        choices: [
          '"beneath the warm concrete crevices of the Congress Avenue Bridge"',
          ['"in deep limestone caves near the river"', 'The passage states they live under the bridge.'],
          ['"inside hollow oak trees in the city park"', 'The text mentions the bridge, not trees.'],
          ['"on top of downtown skyscrapers"', 'They roost beneath bridge spans.'],
        ],
        answer: 0,
        explain: 'Paragraph 1 explicitly states that the bats roost "beneath the warm concrete crevices of the Congress Avenue Bridge."',
      }), 4),
    ],
  },
  {
    code: 'rla:3.7D',
    goal: 'You will learn to retell and paraphrase texts in ways that maintain meaning and logical order.',
    words: [
      { term: 'paraphrase', meaning: 'Putting an author\'s ideas into your own words while keeping the original meaning.' },
      { term: 'retell', meaning: 'Summarizing key events in chronological order without changing what happened.' },
    ],
    ideas: [
      { title: 'Keep the sequence', text: 'Retell what happened first, next, and last so the timeline remains clear.' },
      { title: 'Stay faithful to meaning', text: 'Do not add outside facts or change characters\' motivations when paraphrasing.' },
    ],
    samples: [
      sample(LEMONADE, mcq({
        standard: 'rla:3.7D', cites: [2, 3],
        stem: 'Which statement best paraphrases paragraphs 2 and 3 in logical order?',
        choices: [
          'When no customers arrived at the stand, Mateo\'s cheerful song drew a large crowd, leading to a profitable day that the siblings shared.',
          ['Elena made lots of money and bought a new bicycle for her brother.', 'Mateo already had a bicycle, and Elena bought a science kit.'],
          ['Mateo sold all the lemonade himself while Elena stayed home.', 'Elena ran the stand and Mateo advertised.'],
          ['The neighbors complained about Mateo\'s bell ringing.', 'Customers lined up cheerfully.'],
        ],
        answer: 0,
        explain: 'This choice maintains the order and meaning: no customers, Mateo singing, large crowd, and sharing profits.',
      }), 4),
      sample(FABLE, mcq({
        standard: 'rla:3.7D', cites: [1, 4],
        stem: 'Which statement best retells the conflict and outcome of "The Ant and the Grasshopper"?',
        choices: [
          'While Ant worked to store food for winter, Grasshopper played; when freezing winter came, hungry Grasshopper had to beg Ant for food.',
          ['Grasshopper helped Ant harvest wheat all summer long.', 'Grasshopper laughed at Ant and played.'],
          ['Ant froze in the snow because she forgot her food.', 'Ant was warm and well-fed in her nest.'],
          ['Grasshopper bought food at a grocery store.', 'Fables feature natural animal settings.'],
        ],
        answer: 0,
        explain: 'This choice accurately retells the conflict (working vs. playing) and the resolution (Grasshopper asking Ant for winter food).',
      }), 4),
    ],
  },
  {
    code: 'rla:3.8A',
    goal: 'You will learn to infer the theme of a work, distinguishing theme from topic.',
    words: [
      { term: 'theme', meaning: 'The central message, life lesson, or moral that the author wants the reader to take away.' },
      { term: 'topic', meaning: 'The general subject of the text (such as friendship, sports, or camping), usually summarized in one or two words.' },
    ],
    ideas: [
      { title: 'Theme is a full message', text: 'A topic is "friendship." A theme is "True friends help each other in times of trouble."' },
      { title: 'Look at the resolution', text: 'How a character\'s problem is solved usually reveals the author\'s message.' },
    ],
    samples: [
      sample(FABLE, mcq({
        standard: 'rla:3.8A',
        stem: 'Which statement expresses the theme of "The Ant and the Grasshopper"?',
        choices: [
          'Planning ahead and working diligently prepares you for future difficulties.',
          ['Insects are the most musical creatures in nature.', 'This is a minor descriptive detail, not a life lesson.'],
          ['Prairie winters are always snowy and cold.', 'Weather is a setting fact, not a theme.'],
          ['Sunflower stalks provide the best shade.', 'This is a physical detail.'],
        ],
        answer: 0,
        explain: 'The central moral of the fable is that diligence and planning ahead protect against future hardship.',
      }), 4),
      sample(CAMP, mcq({
        standard: 'rla:3.8A',
        stem: 'Which statement best expresses the theme of "First Night at Camp"?',
        choices: [
          'Keeping an open mind about new experiences can lead to unexpected joy and friendship.',
          ['Summer camps should always have air-conditioned cabins.', 'This expresses an opinion about camp facilities.'],
          ['Mosquitoes are the most dangerous insects in Texas.', 'Mosquito bites are a humorous detail.'],
          ['Camping is too difficult for third-graders.', 'The narrator ended up enjoying the camp.'],
        ],
        answer: 0,
        explain: 'The narrator starts out expecting misery, but learns that being open to new experiences leads to friendship and fun.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.8B',
    goal: 'You will learn to explain the relationships among major and minor characters in literary texts.',
    words: [
      { term: 'major character', meaning: 'The central figure around whom the story revolves.' },
      { term: 'minor character', meaning: 'A supporting character who helps advance the plot or reveal traits of the main character.' },
    ],
    ideas: [
      { title: 'Observe interactions', text: 'Notice how characters talk to each other, cooperate, or resolve disagreements.' },
      { title: 'Track changes', text: 'See if characters become closer, learn to respect each other, or change their minds.' },
    ],
    samples: [
      sample(LEMONADE, mcq({
        standard: 'rla:3.8B', cites: [1, 3],
        stem: 'How does Elena\'s attitude toward Mateo change during the story?',
        choices: [
          'At first she dismisses him as too young, but later she appreciates his creativity and shares the profits.',
          ['She starts out loving his help, but ends up asking him to leave.', 'Her appreciation grows rather than decreasing.'],
          ['She ignores him throughout the entire day.', 'She hands him half the earnings with a warm smile.'],
          ['She competes against him to see who sells more.', 'They work together as a family team.'],
        ],
        answer: 0,
        explain: 'Elena initially turns Mateo away, but after his catchy advertising saves the stand, she happily calls him the star of the day.',
      }), 4),
      sample(SCENE, mcq({
        standard: 'rla:3.8B', cites: [3, 4, 5],
        stem: 'How does Coach Vance help Maria during the audition scene?',
        choices: [
          'He offers encouraging words and calming advice to help her overcome her nervousness.',
          ['He tells her that her singing voice is not loud enough.', 'He encourages her warmly.'],
          ['He orders her to leave the auditorium.', 'He sits at his clipboard listening patiently.'],
          ['He plays the piano while singing the solo himself.', 'Maria sings the audition solo.'],
        ],
        answer: 0,
        explain: 'Coach Vance smiles, normalizes her nervousness, and tells her to breathe and picture singing at home, putting Maria at ease.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.8C',
    goal: 'You will learn to analyze plot elements, including the sequence of events, conflict, and resolution.',
    words: [
      { term: 'conflict', meaning: 'The main problem or challenge that characters must face and resolve.' },
      { term: 'resolution', meaning: 'How the story\'s conflict is solved or brought to a satisfying close.' },
    ],
    ideas: [
      { title: 'Identify the problem', text: 'Ask yourself: What does the main character want, and what obstacle stands in their way?' },
      { title: 'Follow the steps to resolution', text: 'Trace the sequence of actions that leads from the problem to the solution.' },
    ],
    samples: [
      sample(LEMONADE, mcq({
        standard: 'rla:3.8C', cites: [2, 3],
        stem: 'What is the main conflict in "The Lemonade Stand," and how is it resolved?',
        choices: [
          'Elena has no customers until Mateo attracts a crowd with his song, making the stand a success.',
          ['The lemonade spills on the sidewalk, so they must make fresh juice.', 'No lemonade is spilled.'],
          ['A sudden rainstorm washes the stand away.', 'The weather is sunny all day.'],
          ['Elena loses her money jar, but Mateo finds it.', 'The money jar fills with coins.'],
        ],
        answer: 0,
        explain: 'The central problem of having zero customers is resolved when Mateo sings and rings his bell, bringing a line of neighbors.',
      }), 4),
      sample(SCENE, mcq({
        standard: 'rla:3.8C', cites: [3, 4, 5],
        stem: 'What internal conflict does Maria experience in "The Audition"?',
        choices: [
          'She feels nervous butterflies before singing, but overcomes her fear with Coach Vance\'s encouragement.',
          ['She forgets the words to her song completely.', 'She sings the lyrics confidently.'],
          ['She argues with Coach Vance about which song to perform.', 'She politely announces her song.'],
          ['She cannot find the stage microphone.', 'She steps directly toward the microphone.'],
        ],
        answer: 0,
        explain: 'Maria clutches her music nervously, but takes a deep breath and sings in a clear, confident voice after receiving encouragement.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.8D',
    goal: 'You will learn to explain the influence of the setting on the plot in literary texts.',
    words: [
      { term: 'setting', meaning: 'The time and place in which a story occurs, including the weather and environment.' },
    ],
    ideas: [
      { title: 'Setting creates challenges', text: 'A stormy prairie, hot sun, or dark night can create problems characters must overcome.' },
      { title: 'Setting affects mood', text: 'A sunny front porch feels cheerful, while a dark spooky forest creates suspense.' },
    ],
    samples: [
      sample(CAMP, mcq({
        standard: 'rla:3.8D', cites: [1, 2],
        stem: 'How does the outdoor setting of Camp Lone Star influence the narrator\'s feelings?',
        choices: [
          'The natural nighttime setting with starry skies and owl calls helps the narrator see the beauty of the outdoors.',
          ['The air-conditioned dining hall makes the narrator want to stay inside all week.', 'The narrator enjoys looking at the outdoor stars.'],
          ['A dangerous river flood traps the campers.', 'No flood occurs in the story.'],
          ['A loud city siren keeps the campers awake.', 'The setting is a peaceful outdoor forest camp.'],
        ],
        answer: 0,
        explain: 'Spotting the Big Dipper and hearing a horned owl in the natural setting changes the narrator\'s mind about camping.',
      }), 4),
      sample(TALL_TALE, mcq({
        standard: 'rla:3.8D', cites: [1, 2],
        stem: 'How does the rugged West Texas setting influence the plot in "Pecos Bill and the Cyclone"?',
        choices: [
          'The wild desert landscape and fierce prairie tornadoes provide the perfect backdrop for Bill\'s superhuman feats.',
          ['The frozen Arctic ice caps prevent Bill from riding animals.', 'The setting is the warm Texas desert.'],
          ['City skyscrapers block Bill from lassoing.', 'The setting is open, wide prairie.'],
          ['Heavy ocean waves capsize Bill\'s ship.', 'The tall tale takes place on the Texas desert plains.'],
        ],
        answer: 0,
        explain: 'The wide open Texas desert with giant twisters allows legendary cowboy Pecos Bill to perform exaggerated western stunts.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.9A',
    goal: 'You will learn to demonstrate knowledge of distinguishing characteristics of well-known children\'s literature such as folktales, fables, fairy tales, legends, and myths.',
    words: [
      { term: 'fable', meaning: 'A short fictional story, usually with animal characters, that teaches a moral or life lesson.' },
      { term: 'tall tale', meaning: 'A humorous story featuring a larger-than-life hero and wildly exaggerated feats.' },
    ],
    ideas: [
      { title: 'Fables have morals', text: 'Stories like "The Ant and the Grasshopper" conclude with a clear lesson about human behavior.' },
      { title: 'Tall tales exaggerate', text: 'Heroes like Pecos Bill rope tornadoes and ride cougars for comedic and legendary effect.' },
    ],
    samples: [
      sample(FABLE, mcq({
        standard: 'rla:3.9A', cites: [1, 4],
        stem: 'Which characteristic shows that "The Ant and the Grasshopper" is a traditional fable?',
        choices: [
          'It features talking animal characters whose actions teach a clear moral lesson about working and planning.',
          ['It presents real scientific measurements of insect body parts.', 'The story is an imaginative fictional story, not a biology text.'],
          ['It describes an astronaut flying to outer space.', 'The characters are prairie insects.'],
          ['It provides a step-by-step recipe for making bread.', 'It teaches a life lesson, not a cooking recipe.'],
        ],
        answer: 0,
        explain: 'Talking animals with distinct human traits teaching a moral lesson ("those who play all summer go hungry in winter") defines a fable.',
      }), 4),
      sample(TALL_TALE, mcq({
        standard: 'rla:3.9A', cites: [1, 2],
        stem: 'Which element is a distinguishing characteristic of American tall tales found in the story of Pecos Bill?',
        choices: [
          'Wildly exaggerated superhuman feats, such as riding a tornado like a bucking horse.',
          ['Realistic facts about weather patterns and barometric pressure.', 'Tall tales use humorous exaggeration, not weather science.'],
          ['Careful historical documentation of legal treaties.', 'Tall tales are legendary folklore.'],
          ['A quiet, peaceful lesson about planting flowers.', 'Bill rides wild animals and tames tornadoes.'],
        ],
        answer: 0,
        explain: 'Riding a tornado like a horse and lassoing with a rattlesnake are classic examples of extreme exaggeration typical of tall tales.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.9B',
    goal: 'You will learn to explain rhyme scheme, sound devices, and structural elements such as stanzas in a variety of poems.',
    words: [
      { term: 'rhyme scheme', meaning: 'The pattern of rhymes at the ends of poem lines, labeled with letters like AABB or ABAB.' },
      { term: 'stanza', meaning: 'A group of lines forming a verse in a poem, separated by blank spaces.' },
      { term: 'onomatopoeia', meaning: 'Words that imitate natural sounds (like "Boom!" or "buzz").' },
    ],
    ideas: [
      { title: 'Label end rhymes', text: 'Give the first rhyming sound A, the second B, and trace the pattern across lines.' },
      { title: 'Listen to sound words', text: 'Sound devices make poems musical and help readers hear the action.' },
    ],
    samples: [
      sample(STORM_POEM, mcq({
        standard: 'rla:3.9B', cites: [1, 2, 3, 4],
        stem: 'What is the rhyme scheme of the first stanza (lines 1–4) in "Prairie Thunder"?',
        choices: [
          'AABB (sky/by rhyme, and light/night rhyme)',
          ['ABAB', 'Line 1 rhymes with line 2, not line 3.'],
          ['ABCB', 'Lines 1 and 2 also rhyme.'],
          ['Free verse', 'The stanza has a clear rhyming pattern.'],
        ],
        answer: 0,
        explain: 'Lines 1 and 2 end in sky/by (AA), and lines 3 and 4 end in light/night (BB), forming an AABB pattern.',
      }), 4),
      sample(STORM_POEM, mcq({
        standard: 'rla:3.9B', cites: [5],
        stem: 'In line 5, the word "Boom!" is an example of which sound device?',
        choices: [
          'Onomatopoeia, because the word imitates the loud crashing sound of thunder.',
          ['Simile', 'A simile compares two things using "like" or "as."'],
          ['Metaphor', 'A metaphor compares two things directly without using like or as.'],
          ['Hyperbole', 'Boom is a sound-imitation word, not an exaggeration.'],
        ],
        answer: 0,
        explain: '"Boom!" is onomatopoeia because it phonetically imitates the physical sound of a thunderclap.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.9C',
    goal: 'You will learn to discuss elements of drama such as characters, dialogue, setting, and acts.',
    words: [
      { term: 'dialogue', meaning: 'The words spoken aloud by actors in a play, written after character names.' },
      { term: 'stage directions', meaning: 'Instructions in brackets or italics telling actors how to move, speak, or act.' },
    ],
    ideas: [
      { title: 'Look for speaker tags', text: 'In scripts, the character\'s name appears before their lines, followed by dialogue.' },
      { title: 'Stage directions give actions', text: 'Words in brackets like [smiles warmly] tell what characters do, not what they say.' },
    ],
    samples: [
      sample(SCENE, mcq({
        standard: 'rla:3.9C', cites: [3],
        stem: 'What do the bracketed words *[Clutching her music sheet nervously]* in speech 3 tell the reader?',
        choices: [
          'They describe Maria\'s physical actions and inner emotional state on stage.',
          ['They are lines that Maria must shout to the audience.', 'Stage directions are not spoken aloud.'],
          ['They give instructions to the lighting crew.', 'They tell Maria how to hold her sheet and act.'],
          ['They describe the author\'s personal life.', 'Stage directions guide the performance.'],
        ],
        answer: 0,
        explain: 'Stage directions in brackets instruct the actor how to move and show the character\'s nervousness physically.',
      }), 4),
      sample(SCENE, mcq({
        standard: 'rla:3.9C', cites: [1, 2],
        stem: 'Where does the reader find information about the time and place of the drama?',
        choices: [
          'In the setting description at the beginning of Scene 1.',
          ['In Maria\'s spoken dialogue.', 'Maria sings a song.'],
          ['In the piano sheet music.', 'The sheet music contains song notes.'],
          ['In the closing credits.', 'Setting is introduced at the start of the scene.'],
        ],
        answer: 0,
        explain: 'The script describes the setting (the stage of an elementary school auditorium with a piano) right after the scene heading.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.9D.i',
    goal: 'You will learn to recognize characteristics and structures of informational text, including the central idea with supporting evidence.',
    words: [
      { term: 'central idea', meaning: 'The main point or big message that an informational text conveys to the reader.' },
    ],
    ideas: [
      { title: 'Combine headings and facts', text: 'Look at what the title, headings, and supporting paragraphs all discuss in common.' },
      { title: 'Check supporting evidence', text: 'Make sure the central idea is backed by factual details throughout the passage.' },
    ],
    samples: [
      sample(ARMADILLO, mcq({
        standard: 'rla:3.9D.i', cites: [1, 2],
        stem: 'What is the central idea of the selection "The Nine-Banded Armadillo"?',
        choices: [
          'The nine-banded armadillo is a unique Texas mammal equipped with bony armor, keen senses, and jumping defenses.',
          ['Armadillos make wonderful indoor household pets.', 'The passage describes armadillos in pastures and gardens.'],
          ['All mammals in Texas have armored shells.', 'Armor is unique to armadillos.'],
          ['Armadillos can fly like bats.', 'Armadillos walk and jump, but do not fly.'],
        ],
        answer: 0,
        explain: 'The passage explores the armadillo\'s armor, keen smelling ability, and jumping defenses, summarizing its unique biology.',
      }), 4),
      sample(BATS, mcq({
        standard: 'rla:3.9D.i', cites: [1, 2],
        stem: 'What is the central idea of "Austin\'s Urban Bat Colony"?',
        choices: [
          'Austin\'s Congress Avenue Bridge hosts a massive bat colony that benefits agriculture by consuming thousands of pounds of insects nightly.',
          ['Bridges in Austin are dangerous places to visit at sunset.', 'Spectators safely gather to watch the bats.'],
          ['Farmers in Texas catch bats to sell at markets.', 'Farmers benefit from bats hunting insects.'],
          ['Bats migrate south to Austin during cold winter blizzards.', 'Bats migrate north to Austin in spring.'],
        ],
        answer: 0,
        explain: 'The text focuses on where the bats live under the bridge and how their insect-eating habits help local farmers.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.9D.ii',
    goal: 'You will learn to recognize informational text features such as sections, tables, graphs, timelines, bullets, numbers, and bold font.',
    words: [
      { term: 'text feature', meaning: 'Design elements like subheadings, sidebars, bold words, and bullet points that help readers navigate informational texts.' },
    ],
    ideas: [
      { title: 'Sidebars provide extras', text: 'Sidebars highlight interesting bonus facts that complement the main text.' },
      { title: 'Headings organize ideas', text: 'Subheadings tell you what topic will be covered in the paragraphs below them.' },
    ],
    samples: [
      sample(ARMADILLO, mcq({
        standard: 'rla:3.9D.ii', cites: [3],
        stem: 'What information does the author provide in the "Fast Fact" sidebar of the armadillo article?',
        choices: [
          'Female armadillos almost always give birth to four identical quadruplet babies.',
          ['Armadillos sleep in high cedar trees.', 'The sidebar discusses quadruplet births.'],
          ['Armadillos were first discovered in 1980.', 'No dates are mentioned in the sidebar.'],
          ['The scientific name for grasshoppers.', 'Grasshoppers are from a different story.'],
        ],
        answer: 0,
        explain: 'The sidebar specifically highlights the unique biological fact that mother armadillos give birth to identical quadruplets.',
      }), 4),
      sample(ARMADILLO, mcq({
        standard: 'rla:3.9D.ii', cites: [1],
        stem: 'Why did the author use the bold heading "Armor on Four Legs" at the beginning of the passage?',
        choices: [
          'To introduce the section explaining the armadillo\'s protective bony shell.',
          ['To list spelling words for a Friday quiz.', 'Headings organize informational topics.'],
          ['To name a brand of metal cooking pots.', 'The article is about living animals.'],
          ['To ask a question about reptiles.', 'Armadillos are mammals.'],
        ],
        answer: 0,
        explain: '"Armor on Four Legs" previews the section discussing the armadillo\'s bony scute plates.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.9D.iii',
    goal: 'You will learn to recognize informational organizational patterns such as cause and effect and problem and solution.',
    words: [
      { term: 'cause and effect', meaning: 'A text structure showing why something happens (cause) and what happens as a result (effect).' },
      { term: 'problem and solution', meaning: 'A text structure that introduces a dilemma and explains how it was solved.' },
    ],
    ideas: [
      { title: 'Cause leads to effect', text: 'Look for signal words like "because," "so," "as a result," and "therefore."' },
      { title: 'Problem has a fix', text: 'Identify the trouble characters or people face and the steps taken to fix it.' },
    ],
    samples: [
      sample(BATS, mcq({
        standard: 'rla:3.9D.iii', cites: [2],
        stem: 'What cause-and-effect relationship is explained in paragraph 2 of the bat article?',
        choices: [
          'Because bats consume thousands of pounds of insects, local farmers save crops from damage.',
          ['Because the sun sets, bridges collapse into rivers.', 'Bridges remain sturdy.'],
          ['Because tourists visit, bats stop flying.', 'Tourists watch the flight peacefully.'],
          ['Because farmers spray chemicals, bats migrate.', 'Bats reduce the need for chemicals.'],
        ],
        answer: 0,
        explain: 'The cause (bats eating pest insects) produces the effect (crops being protected from insect damage).',
      }), 4),
      sample(RECYCLE, mcq({
        standard: 'rla:3.9D.iii', cites: [1, 2],
        stem: 'What problem and solution are presented in the recycling passage?',
        choices: [
          'The problem is overflowing aluminum trash in landfills, and the solution is joining the school Clean Team to recycle cans.',
          ['The problem is cold weather, and the solution is buying winter jackets.', 'Weather is not the subject of the passage.'],
          ['The problem is lack of books, and the solution is opening libraries.', 'Libraries are from a different text.'],
          ['The problem is noisy bats, and the solution is moving bridges.', 'Bats are from a different text.'],
        ],
        answer: 0,
        explain: 'The passage highlights cafeteria trash in landfills as a problem and presents recycling aluminum cans as the practical solution.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.9E.i',
    goal: 'You will learn to recognize characteristics and structures of argumentative text by identifying the claim.',
    words: [
      { term: 'claim', meaning: 'The main point, argument, or position that an author wants readers to accept.' },
    ],
    ideas: [
      { title: 'Look for "should" or "must"', text: 'Claims often use words like "should," "ought to," or "it is important to."' },
      { title: 'Usually in intro and conclusion', text: 'Authors state their central claim near the beginning and reinforce it at the end.' },
    ],
    samples: [
      sample(LIBRARY, mcq({
        standard: 'rla:3.9E.i', cites: [1],
        stem: 'What is the author\'s primary claim in the library passage?',
        choices: [
          'The public library should expand its operating hours to include Sunday afternoons.',
          ['City council members should resign from office.', 'The author politely petitions the council.'],
          ['High school students should stop volunteering.', 'Volunteers are praised for offering help.'],
          ['All library books should be sold at discounts.', 'The issue is operating hours, not selling books.'],
        ],
        answer: 0,
        explain: 'Paragraph 1 clearly states the author\'s central claim: "Our public library should expand its operating hours to include Sunday afternoons."',
      }), 4),
      sample(RECYCLE, mcq({
        standard: 'rla:3.9E.i', cites: [1, 3],
        stem: 'What claim does the speaker make in the cafeteria clean team passage?',
        choices: [
          'Students should join the Clean Team and recycle their clean aluminum cans to protect the environment.',
          ['Elementary schools should eliminate lunch periods completely.', 'Lunch is when the recycling happens.'],
          ['Landfills should be built on school playgrounds.', 'Recycling keeps trash out of landfills.'],
          ['Students should buy glass bottles instead of aluminum cans.', 'The passage advocates recycling aluminum.'],
        ],
        answer: 0,
        explain: 'The speaker urges classmates to join the Clean Team and recycle cans in blue bins to reduce waste.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.9E.ii',
    goal: 'You will learn to recognize characteristics and structures of argumentative text by distinguishing facts from opinion.',
    words: [
      { term: 'fact', meaning: 'A statement that can be proven true or false using evidence, records, or scientific observation.' },
      { term: 'opinion', meaning: 'A personal belief, feeling, or judgment that cannot be proven true for everyone.' },
    ],
    ideas: [
      { title: 'Facts can be verified', text: 'Numbers, measurements, dates, and official records are facts.' },
      { title: 'Opinions express feelings', text: 'Words like "best," "worst," "wonderful," and "should" signal opinions.' },
    ],
    samples: [
      sample(RECYCLE, mcq({
        standard: 'rla:3.9E.ii', cites: [2],
        stem: 'Which statement from the passage is a verifiable fact?',
        choices: [
          'Recycling saves ninety-five percent of the energy needed to make metal from scratch.',
          ['Recycling is the most thrilling chore in the whole world.', 'Thrilling is a subjective personal feeling.'],
          ['Soda from a can always tastes better than water.', 'Taste preference is a personal opinion.'],
          ['Every student loves blue recycling bins.', 'Feelings cannot be proven for every individual.'],
        ],
        answer: 0,
        explain: 'Saving 95 percent of energy is a measurable, scientific statistic that can be verified with laboratory research.',
      }), 4),
      sample(LIBRARY, mcq({
        standard: 'rla:3.9E.ii', cites: [2],
        stem: 'Which statement from the library passage is a verifiable fact?',
        choices: [
          'Eight out of ten third-graders surveyed said they would visit the library on Sundays.',
          ['Sundays are the only relaxing days of the week.', 'Relaxation is an opinion.'],
          ['Libraries are the most beautiful buildings in the city.', 'Beauty is a personal aesthetic judgment.'],
          ['Every parent works sixty hours every week.', 'Work schedules vary among parents.'],
        ],
        answer: 0,
        explain: 'The survey results showing eight out of ten students voting in favor can be proven with actual poll data.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.9E.iii',
    goal: 'You will learn to recognize characteristics and structures of argumentative text by identifying the intended audience or reader.',
    words: [
      { term: 'audience', meaning: 'The specific group of people for whom a text is written.' },
    ],
    ideas: [
      { title: 'Check the greeting', text: 'Notice who is addressed directly, such as "To the members of the city council."' },
      { title: 'Consider the decision-makers', text: 'Ask yourself: Who has the authority or ability to make the change the author wants?' },
    ],
    samples: [
      sample(LIBRARY, mcq({
        standard: 'rla:3.9E.iii', cites: [1],
        stem: 'Who is the primary intended audience for the library letter?',
        choices: [
          'Members of the city council who vote on library operating hours and budgets.',
          ['Preschool toddlers who do not read yet.', 'The text is addressed to city leaders.'],
          ['Astronauts training for moon missions.', 'The topic is local city libraries.'],
          ['Professional athletes playing soccer.', 'Athletics is unrelated to municipal libraries.'],
        ],
        answer: 0,
        explain: 'The letter opens with "To the members of the city council" and asks them to vote on Sunday hours.',
      }), 4),
      sample(RECYCLE, mcq({
        standard: 'rla:3.9E.iii', cites: [1],
        stem: 'Who is the primary intended audience for the cafeteria recycling speech?',
        choices: [
          'Fellow elementary students who eat lunch in the cafeteria.',
          ['City garbage truck mechanics in Dallas.', 'The speech addresses peers in the cafeteria.'],
          ['Highway construction workers paving roads.', 'The setting is a school lunchroom.'],
          ['College professors teaching geology.', 'The audience is fellow classmates.'],
        ],
        answer: 0,
        explain: 'The speech begins with "Fellow students, look around the cafeteria" and encourages classmates to drop cans in bins.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.10A',
    goal: 'You will learn to explain the author\'s purpose and message within a text.',
    words: [
      { term: 'author\'s purpose', meaning: 'The main reason an author writes: to persuade, inform, or entertain (PIE).' },
      { term: 'message', meaning: 'The central insight or takeaway the author wants readers to understand.' },
    ],
    ideas: [
      { title: 'Persuade, inform, or entertain', text: 'Does the author want to convince you of an idea, teach you true facts, or tell an enjoyable story?' },
      { title: 'Look at the genre and tone', text: 'Informational texts inform with facts, while argumentative essays persuade readers to act.' },
    ],
    samples: [
      sample(BATS, mcq({
        standard: 'rla:3.10A',
        stem: 'What is the author\'s main purpose in writing "Austin\'s Urban Bat Colony"?',
        choices: [
          'To inform readers about the habits and agricultural benefits of Austin\'s bridge bats.',
          ['To persuade readers never to visit the Congress Avenue Bridge.', 'The author describes spectators enjoying the flight.'],
          ['To entertain readers with a fictional myth about talking bats.', 'The text presents true scientific facts.'],
          ['To provide recipes for cooking insects.', 'No human recipes are included.'],
        ],
        answer: 0,
        explain: 'The author provides facts about where the bats live, when they fly, and how they help farmers, which informs the reader.',
      }), 4),
      sample(LIBRARY, mcq({
        standard: 'rla:3.10A',
        stem: 'What is the author\'s main purpose in writing the library selection?',
        choices: [
          'To persuade city council members to open the public library on Sundays.',
          ['To entertain readers with a funny story about overdue books.', 'The text is a formal persuasive proposal.'],
          ['To describe the history of paper manufacturing.', 'Paper making is not discussed.'],
          ['To give directions for checking out audiobooks.', 'No checkout instructions are provided.'],
        ],
        answer: 0,
        explain: 'The author presents reasons, survey data, and volunteer offers to persuade city council members to vote for Sunday library hours.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.10B',
    goal: 'You will learn to explain how the use of text structure contributes to the author\'s purpose.',
    words: [
      { term: 'text structure', meaning: 'The way an author organizes information in a text (chronological, cause/effect, compare/contrast).' },
    ],
    ideas: [
      { title: 'Chronological order tells stories', text: 'Biographies and stories use time order to show how someone\'s life developed step by step.' },
      { title: 'Structure serves the purpose', text: 'Comparing two things helps readers see their differences clearly.' },
    ],
    samples: [
      sample(BIOGRAPHY_OCHOA, mcq({
        standard: 'rla:3.10B', cites: [1, 2],
        stem: 'How does the chronological structure of the biography support the author\'s purpose?',
        choices: [
          'It shows Ellen Ochoa\'s life progression from a student facing obstacles to a historic astronaut and leader.',
          ['It explains how to repair broken space shuttle wings.', 'No wing repair instructions are provided.'],
          ['It lists musical instruments in order of popularity.', 'The flute is only mentioned as her childhood hobby.'],
          ['It compares California weather to Houston weather.', 'Climate comparisons are not made.'],
        ],
        answer: 0,
        explain: 'Tracing her journey in time order highlights her persistence through college obstacles to becoming a pioneering astronaut.',
      }), 4),
      sample(FROGS_TOADS, mcq({
        standard: 'rla:3.10B', cites: [1, 2],
        stem: 'How does the compare-and-contrast structure of "Frogs and Toads of Texas" support the author\'s purpose?',
        choices: [
          'It clearly highlights the differences in physical traits and habitats between frogs and toads.',
          ['It tells a fictional adventure story about two animal friends.', 'The text is an informational comparison, not fiction.'],
          ['It lists Texas rivers from longest to shortest.', 'No river lengths are listed.'],
          ['It explains how to care for tadpoles in an aquarium.', 'Aquarium care is not discussed.'],
        ],
        answer: 0,
        explain: 'Comparing smooth skin and long legs in frogs with rough skin and short legs in toads clarifies how the two amphibians differ.',
      }), 4),
    ],
  },
];

export const G3_RLA_LESSONS: Lesson[] = [...G3_RLA_LESSONS_FIRST, ...G3_RLA_LESSONS_MORE];
