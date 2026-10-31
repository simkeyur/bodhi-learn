// Grade 2 reading walkthroughs (part 1: 2.2B.i through 2.9D.iii).

import { mcq, sample } from '../rla/author.ts';
import type { Lesson } from '../types.ts';
import {
  MINI_MONARCH, MINI_PICNIC, MINI_PUPPY, MINI_STAR_POEM, MINI_SUNFLOWERS, MINI_SWINGS, MINI_TURTLE,
} from './g2-rla-passages.ts';
import { G2_RLA_LESSONS_MORE } from './g2-rla-more.ts';

const G2_RLA_LESSONS_FIRST: Lesson[] = [
  {
    code: 'rla:2.2B.i',
    goal: 'You will learn to decode words with short, long, and variant vowels, trigraphs, and blends.',
    words: [
      { term: 'blend', meaning: 'Two or more consonants together where each sound is heard, like bl in blend.' },
      { term: 'digraph', meaning: 'Two letters that team up to make one sound, like sh or ch.' },
    ],
    ideas: [
      { title: 'Look for vowel teams', text: 'Vowel teams like oa, ai, and ee make long vowel sounds.' },
      { title: 'Blend sounds smoothly', text: 'Say each consonant sound in a blend and slide them together.' },
    ],
  },
  {
    code: 'rla:2.2B.ii',
    goal: 'You will learn to decode words with silent letters such as knife, gnat, and wrist.',
    words: [
      { term: 'silent letter', meaning: 'A letter in a word that is written but not spoken aloud, like k in knee.' },
    ],
    ideas: [
      { title: 'Spot silent pairs', text: 'Kn sounds like /n/ in knot. Wr sounds like /r/ in write. Gn sounds like /n/ in gnat.' },
      { title: 'Check word endings', text: 'Mb at the end of a word sounds like /m/ in thumb and climb.' },
    ],
  },
  {
    code: 'rla:2.2B.iii',
    goal: 'You will learn to decode multisyllabic words with closed, open, VCe, vowel team, and r-controlled syllables.',
    words: [
      { term: 'syllable', meaning: 'A word part that contains one vowel sound.' },
      { term: 'closed syllable', meaning: 'A syllable ending in a consonant with a short vowel, like bas- in basket.' },
    ],
    ideas: [
      { title: 'Clap the chunks', text: 'Break long words into syllable chunks to read each part accurately.' },
      { title: 'Notice silent e', text: 'VCe syllables end in silent e, which makes the vowel say its name.' },
    ],
  },
  {
    code: 'rla:2.2B.iv',
    goal: 'You will learn to decode compound words, contractions, and abbreviations.',
    words: [
      { term: 'compound word', meaning: 'Two smaller words joined together to make a new word, like backpack.' },
      { term: 'contraction', meaning: 'A short word made by putting two words together with an apostrophe, like can\'t.' },
    ],
    ideas: [
      { title: 'Find the two words', text: 'Look for the two smaller words inside compound words: sun + flower = sunflower.' },
      { title: 'Watch the apostrophe', text: 'The apostrophe shows where letters were left out in a contraction.' },
    ],
  },
  {
    code: 'rla:2.2B.v',
    goal: 'You will learn syllable division patterns (VCCV, VCV) to decode unfamiliar words.',
    words: [
      { term: 'syllable division', meaning: 'Splitting words into parts to decode them easily.' },
    ],
    ideas: [
      { title: 'Divide between double consonants', text: 'In words like rab-bit, divide between the two middle consonants.' },
      { title: 'Try open then closed', text: 'In words like ti-ger, divide after the vowel first so the vowel is long.' },
    ],
  },
  {
    code: 'rla:2.2B.vi',
    goal: 'You will learn to decode words with prefixes (un-, re-, dis-) and inflectional endings.',
    words: [
      { term: 'prefix', meaning: 'A word part added to the beginning of a word that changes its meaning.' },
      { term: 'suffix', meaning: 'An ending added to a base word, like -ed, -ing, or -est.' },
    ],
    ideas: [
      { title: 'Spot the base word', text: 'Cover the prefix and suffix to read the root base word first.' },
      { title: 'Know what endings show', text: '-ed shows past actions; -ing shows actions happening right now.' },
    ],
  },
  {
    code: 'rla:2.2B.vii',
    goal: 'You will learn to read grade 2 high-frequency words quickly and accurately.',
    words: [
      { term: 'high-frequency words', meaning: 'Words that appear frequently in reading, like because, friend, and would.' },
    ],
    ideas: [
      { title: 'Remember tricky spellings', text: 'Many common words have irregular sound patterns that must be memorized.' },
      { title: 'Practice reading smoothly', text: 'Recognizing high-frequency words by sight makes reading faster and easier.' },
    ],
  },
  {
    code: 'rla:2.2D',
    goal: 'You will learn to alphabetize words to the second letter and use reference tools.',
    words: [
      { term: 'alphabetical order', meaning: 'Arranging words according to the ABC order of their letters.' },
    ],
    ideas: [
      { title: 'Look at the first letter', text: 'Check the first letter of each word to see which letter comes first in the alphabet.' },
      { title: 'Look at the second letter', text: 'When two words start with the same letter, use the second letter: bear comes before bird.' },
    ],
  },
  {
    code: 'rla:2.3A',
    goal: 'You will learn to use print and digital glossaries and dictionaries to find word meanings.',
    words: [
      { term: 'glossary', meaning: 'A list of special words and their definitions found at the back of a book.' },
    ],
    ideas: [
      { title: 'Find the entry word', text: 'Glossary words are arranged alphabetically from A to Z.' },
      { title: 'Read the definition', text: 'The explanation tells you exactly what the unfamiliar word means.' },
    ],
  },
  {
    code: 'rla:2.3B',
    goal: 'You will learn to use context clues within and beyond a sentence to find word meanings.',
    words: [
      { term: 'context clues', meaning: 'Nearby words in a sentence that give hints about an unfamiliar word\'s meaning.' },
    ],
    ideas: [
      { title: 'Read nearby sentences', text: 'Look at the sentence before and after the tricky word for descriptive hints.' },
      { title: 'Substitute a guess', text: 'Replace the unknown word with your guess to see if the sentence still makes sense.' },
    ],
    samples: [
      sample(MINI_PUPPY, mcq({
        standard: 'rla:2.3B', cites: [1],
        stem: 'In paragraph 1, the word **whimpering** means making a—',
        choices: [
          'soft, crying sound.',
          ['loud, angry roar.', 'Whimpering is gentle and soft, not a roar.'],
          ['happy singing noise.', 'The puppy was shivering and frightened, not singing.'],
          ['heavy stomping sound.', 'Whimpering is a quiet vocal sound.'],
        ],
        answer: 0,
        explain: 'The puppy was shivering and scared, so whimpering means making a quiet crying noise.',
      }), 4),
      sample(MINI_MONARCH, mcq({
        standard: 'rla:2.3B', cites: [1],
        stem: 'In paragraph 1, what does the word **migration** mean?',
        choices: [
          'A long seasonal journey from one home to another.',
          ['A winter nap inside a dark cave.', 'Migration is travel, not sleep.'],
          ['A game played by baby caterpillars.', 'Migration is adult insect travel.'],
          ['A severe thunderstorm with wind.', 'Migration is not weather.'],
        ],
        answer: 0,
        explain: 'Paragraph 1 explains that monarchs travel over two thousand miles on their migration to Mexico.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.3C',
    goal: 'You will learn the meanings of prefixes (un-, re-) and suffixes (-ly, -er, -est).',
    words: [
      { term: 'affix', meaning: 'A prefix added to the front or a suffix added to the end of a base word.' },
    ],
    ideas: [
      { title: 'Prefix meanings', text: 'Un- means not (unhappy); re- means again (rewrite).' },
      { title: 'Suffix meanings', text: '-ly shows how (slowly); -er compares two; -est compares three or more.' },
    ],
  },
  {
    code: 'rla:2.3D',
    goal: 'You will learn to identify antonyms, synonyms, idioms, and homographs in context.',
    words: [
      { term: 'synonym', meaning: 'Words that have the same or almost the same meaning, like glad and happy.' },
      { term: 'antonym', meaning: 'Words that have opposite meanings, like hot and cold.' },
    ],
    ideas: [
      { title: 'Match similar words', text: 'Synonyms help writers avoid repeating the same word over and over.' },
      { title: 'Spot opposite pairs', text: 'Antonyms express contrast, such as day and night or fast and slow.' },
    ],
  },
  {
    code: 'rla:2.6C',
    goal: 'You will learn to make and confirm predictions using text features and clues.',
    words: [
      { term: 'prediction', meaning: 'A smart guess about what will happen next based on clues in the text.' },
    ],
    ideas: [
      { title: 'Use text clues', text: 'Think about what characters do and what usually happens in similar situations.' },
      { title: 'Check as you read', text: 'Read ahead to see if your prediction came true or if you need to adjust it.' },
    ],
    samples: [
      sample(MINI_PUPPY, mcq({
        standard: 'rla:2.6C', cites: [2],
        stem: 'What can the reader predict Leo will do after reading the telephone number on the puppy\'s collar?',
        choices: [
          'He will call the number to contact the puppy\'s owner.',
          ['He will chase the puppy away into the street.', 'Leo is gentle and caring.'],
          ['He will hide under the porch with the puppy all day.', 'Leo runs inside to get help.'],
          ['He will throw the collar into the trash.', 'The tag has important contact information.'],
        ],
        answer: 0,
        explain: 'Finding the owner\'s phone number allows the reader to predict that Leo will call to return the lost pet.',
      }), 4),
      sample(MINI_SUNFLOWERS, mcq({
        standard: 'rla:2.6C', cites: [2],
        stem: 'Based on paragraph 2, what will happen when a sunflower seed falls into warm garden soil next spring?',
        choices: [
          'It will sprout and grow into a tall new sunflower.',
          ['It will turn into a yellow butterfly.', 'Seeds grow into plants, not insects.'],
          ['It will freeze into an icicle.', 'Spring soil is warm and promotes growth.'],
          ['It will turn into a wooden backyard fence.', 'Seeds produce living plants.'],
        ],
        answer: 0,
        explain: 'Sunflowers produce seeds so new sunflower plants can sprout and grow in the spring soil.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.6E',
    goal: 'You will learn to make connections to personal experiences, other texts, and the world.',
    words: [
      { term: 'connection', meaning: 'How a story reminds you of your own life or another book you have read.' },
    ],
    ideas: [
      { title: 'Text-to-self', text: 'Think about a time you felt the same emotions as the character in the story.' },
      { title: 'Text-to-world', text: 'Connect facts in informational articles to animals or nature you have seen.' },
    ],
    samples: [
      sample(MINI_STAR_POEM, mcq({
        standard: 'rla:2.6E', cites: [1, 2],
        stem: 'How can a reader connect their own personal experience to stanza 1 of "The Star"?',
        choices: [
          'By remembering gazing up at the glittering night sky and wondering about stars.',
          ['By recalling a time they rode a horse in a parade.', 'Horse riding is not in the poem.'],
          ['By thinking about planting bean seeds in paper cups.', 'Gardening is unrelated to gazing at stars.'],
          ['By remembering building a snowman in winter.', 'The poem is about starlight.'],
        ],
        answer: 0,
        explain: 'Looking at stars and feeling childlike wonder is a universal personal experience connected to the poem.',
      }), 4),
      sample(MINI_PUPPY, mcq({
        standard: 'rla:2.6E', cites: [1, 2],
        stem: 'How does Leo\'s experience in the story connect to real life?',
        choices: [
          'Many families have lost or found a friendly neighborhood pet.',
          ['All wild animals wear metal collar tags.', 'Wild animals do not wear collars.'],
          ['People always sleep under wooden porches.', 'Porches are not bedrooms for people.'],
          ['Dogs build nests high in oak trees.', 'Dogs do not build tree nests.'],
        ],
        answer: 0,
        explain: 'Losing or finding a neighborhood pet is a realistic situation many children have experienced.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.6F',
    goal: 'You will learn to make inferences and use text evidence to support your understanding.',
    words: [
      { term: 'inference', meaning: 'A logical conclusion reached by combining text clues with what you already know.' },
      { term: 'text evidence', meaning: 'Words directly from the passage that prove your answer is correct.' },
    ],
    ideas: [
      { title: 'Look for unstated clues', text: 'Authors do not tell you everything directly. Actions reveal feelings.' },
      { title: 'Prove it with facts', text: 'Always point back to specific sentences in the passage as evidence.' },
    ],
    samples: [
      sample(MINI_PUPPY, mcq({
        standard: 'rla:2.6F', cites: [2],
        stem: 'Why did Buddy wag his tail when Leo held out his hand?',
        choices: [
          'Buddy realized Leo was friendly and felt safe with him.',
          ['Buddy was angry and wanted to bite Leo.', 'Wagging a tail indicates happiness, not anger.'],
          ['Buddy wanted to run away into the street.', 'Buddy stayed near Leo.'],
          ['Buddy was cold and wanted to sleep.', 'Wagging shows active friendly emotion.'],
        ],
        answer: 0,
        explain: 'Wagging a tail when sniffing an outstretched hand is evidence that the dog felt safe and friendly.',
      }), 4),
      sample(MINI_TURTLE, mcq({
        standard: 'rla:2.6F', cites: [2],
        stem: 'Why did Harry the Hare lose the race to Toby?',
        choices: [
          'Harry was overconfident and foolishly stopped to take a nap.',
          ['Harry got lost in a dark underground cave.', 'Harry was napping under an oak tree.'],
          ['Harry was not able to run fast.', 'Harry was very fast, but careless.'],
          ['The forest animals blocked Harry\'s path.', 'The animals cheered Toby at the finish line.'],
        ],
        answer: 0,
        explain: 'Harry\'s careless nap gave slow-and-steady Toby time to walk ahead and win the race.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.6G',
    goal: 'You will learn to evaluate details in informational texts to determine key ideas.',
    words: [
      { term: 'key idea', meaning: 'An important point that supports the central topic of a passage.' },
    ],
    ideas: [
      { title: 'Find supporting facts', text: 'Look for details that explain why, how, or where things happen.' },
      { title: 'Separate minor details', text: 'Ask yourself: Does this fact directly explain the main topic?' },
    ],
    samples: [
      sample(MINI_MONARCH, mcq({
        standard: 'rla:2.6G', cites: [2],
        stem: 'Which detail best explains why Texas is an important rest stop for monarchs?',
        choices: [
          'Blooming wildflowers provide sweet nectar that gives butterflies energy for travel.',
          ['Oak trees lose all their leaves in summer.', 'Leaves provide shelter, not food.'],
          ['Monarch caterpillars build stone houses.', 'Caterpillars eat milkweed.'],
          ['Texas has heavy snowstorms in autumn.', 'Texas autumns are warm.'],
        ],
        answer: 0,
        explain: 'Paragraph 1 explains that drinking sweet nectar from Texas wildflowers provides energy for their long journey.',
      }), 4),
      sample(MINI_SUNFLOWERS, mcq({
        standard: 'rla:2.6G', cites: [2],
        stem: 'Which detail explains how sunflowers help garden wildlife in late summer?',
        choices: [
          'Their flower heads produce hundreds of nutritious seeds for birds and squirrels.',
          ['Sunflowers grow taller than wooden fences.', 'Height shows growth, not animal food.'],
          ['Their yellow petals turn brown in the rain.', 'Petal color change does not feed animals.'],
          ['Sunflower stems make loud tapping sounds.', 'Plants do not make tapping sounds.'],
        ],
        answer: 0,
        explain: 'Producing hundreds of nutritious seeds directly supports hungry songbirds and squirrels.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.6H',
    goal: 'You will learn to synthesize information to create new understanding.',
    words: [
      { term: 'synthesize', meaning: 'Putting pieces of information together to form a bigger new idea.' },
    ],
    ideas: [
      { title: 'Connect across paragraphs', text: 'Take a fact from paragraph 1 and combine it with a fact from paragraph 2.' },
      { title: 'See the big picture', text: 'Ask yourself: What do these facts together teach me about the topic?' },
    ],
    samples: [
      sample(MINI_MONARCH, mcq({
        standard: 'rla:2.6H', cites: [1, 2],
        stem: 'By putting together the facts in paragraphs 1 and 2, what can the reader conclude?',
        choices: [
          'Growing nectar flowers and milkweed in Texas gardens helps monarchs complete their lifecycle.',
          ['Monarchs should stay in Canada all year round.', 'Cold northern winters would freeze monarchs.'],
          ['Texans should trap butterflies in plastic boxes.', 'Trapping does not help butterflies thrive.'],
          ['Wildflowers are harmful to migrating insects.', 'Wildflowers provide essential food.'],
        ],
        answer: 0,
        explain: 'Combining facts about adult migration and caterpillar food shows how garden plants protect the species.',
      }), 4),
      sample(MINI_SWINGS, mcq({
        standard: 'rla:2.6H', cites: [1, 2],
        stem: 'By combining the writer\'s points in paragraphs 1 and 2, what new understanding emerges?',
        choices: [
          'Improving park equipment encourages kids to exercise and prevents playground arguments.',
          ['Children prefer staying indoors on sunny days.', 'The writer emphasizes active outdoor play.'],
          ['All playgrounds should replace swings with parking lots.', 'The author wants more swings.'],
          ['Waiting in long lines is fun for young children.', 'Waiting causes frustration and arguments.'],
        ],
        answer: 0,
        explain: 'Putting together the points about exercise and long lines shows how added swings improve play and health.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.8B',
    goal: 'You will learn to describe character traits and the reasons for their actions.',
    words: [
      { term: 'character trait', meaning: 'How a character acts, thinks, or feels inside, like kind, brave, or boastful.' },
    ],
    ideas: [
      { title: 'Actions speak loudly', text: 'Look at what a character does when facing a challenge.' },
      { title: 'Internal vs external', text: 'External traits are physical looks; internal traits describe personality.' },
    ],
    samples: [
      sample(MINI_PUPPY, mcq({
        standard: 'rla:2.8B', cites: [2],
        stem: 'Which trait best describes Leo when he approaches the lost puppy?',
        choices: [
          'Gentle and patient.',
          ['Loud and angry.', 'Leo was very quiet and gentle.'],
          ['Careless and clumsy.', 'Leo moved carefully.'],
          ['Selfish and rude.', 'Leo helped the puppy get home.'],
        ],
        answer: 0,
        explain: 'Holding out his hand slowly to let the puppy sniff him shows Leo is gentle and patient.',
      }), 4),
      sample(MINI_TURTLE, mcq({
        standard: 'rla:2.8B', cites: [1],
        stem: 'How does Harry the Hare show that he is boastful in paragraph 1?',
        choices: [
          'He brags loudly to all the forest animals that he is the fastest creature alive.',
          ['He offers to carry Toby across the creek.', 'Harry laughed at Toby.'],
          ['He quietly reads a book under an oak tree.', 'Harry bragged aloud.'],
          ['He shares his food with hungry forest birds.', 'Harry was showing off his speed.'],
        ],
        answer: 0,
        explain: 'Bragging loudly that no one can beat him proves Harry is boastful and arrogant.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.8C',
    goal: 'You will learn to describe plot elements: main events, conflict, and resolution.',
    words: [
      { term: 'conflict', meaning: 'The main problem characters face in a story.' },
      { term: 'resolution', meaning: 'How the problem is solved and brought to a happy or fair ending.' },
    ],
    ideas: [
      { title: 'Find the problem', text: 'What goes wrong near the beginning of the story that characters must fix?' },
      { title: 'Track the solution', text: 'Look at how characters work together to overcome the problem at the end.' },
    ],
    samples: [
      sample(MINI_PUPPY, mcq({
        standard: 'rla:2.8C', cites: [2],
        stem: 'How is the problem in the story resolved?',
        choices: [
          'Leo calls the telephone number on the collar, and Mrs. Garcia comes to bring Buddy home.',
          ['Buddy runs away into the deep forest.', 'Buddy was returned to his owner.'],
          ['Leo builds a wooden doghouse in his room.', 'Buddy returned to his own home.'],
          ['Mrs. Garcia buys a new kitten.', 'Mrs. Garcia got her lost puppy back.'],
        ],
        answer: 0,
        explain: 'Calling the collar phone number connects Leo to Mrs. Garcia, resolving the lost-pet conflict.',
      }), 4),
      sample(MINI_TURTLE, mcq({
        standard: 'rla:2.8C', cites: [2],
        stem: 'How does Toby solve his problem during the race with Harry?',
        choices: [
          'Toby continues walking steadily step by step without quitting.',
          ['Toby takes a bicycle to ride across the hills.', 'Toby walked on his own legs.'],
          ['Toby wakes Harry up so they can finish together.', 'Toby kept walking to win.'],
          ['Toby asks a bird to fly him over the finish line.', 'Toby relied on his own steady effort.'],
        ],
        answer: 0,
        explain: 'Taking steady steps without stopping allowed Toby to overcome the disadvantage of slow speed.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.8D',
    goal: 'You will learn to describe the setting of a story and explain why it is important.',
    words: [
      { term: 'setting', meaning: 'Where and when a story takes place.' },
    ],
    ideas: [
      { title: 'Where and when', text: 'Notice clues about time of day, season, weather, and physical location.' },
      { title: 'Setting affects events', text: 'A hot sunny day makes characters seek shade; a backyard is where lost pets hide.' },
    ],
    samples: [
      sample(MINI_PUPPY, mcq({
        standard: 'rla:2.8D', cites: [1],
        stem: 'Where does the opening scene of the story take place?',
        choices: [
          'In Leo\'s backyard near the wooden porch on a Saturday morning.',
          ['At a busy downtown subway station.', 'The setting is a home backyard.'],
          ['Inside a crowded supermarket.', 'The setting is outdoors at home.'],
          ['On a sandy beach in Florida.', 'The setting is a neighborhood yard.'],
        ],
        answer: 0,
        explain: 'Paragraph 1 clearly states that Leo was in his backyard and looked under the wooden porch.',
      }), 4),
      sample(MINI_PICNIC, mcq({
        standard: 'rla:2.8D', cites: [1],
        stem: 'How does the hot sunny setting affect Mia and Sam\'s picnic?',
        choices: [
          'The bright midday heat warms their drinks and melts their chocolate cookies.',
          ['The freezing snow makes them shiver.', 'The setting is hot sun, not snow.'],
          ['Heavy rain washes away their checkered blanket.', 'There is no rain in the scene.'],
          ['Strong winds blow their basket into the river.', 'No river is present.'],
        ],
        answer: 0,
        explain: 'The burning midday sunshine causes their cookies to melt and forces them to seek shade under the oak tree.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.9A',
    goal: 'You will learn the distinguishing characteristics of folktales, fables, and fairy tales.',
    words: [
      { term: 'fable', meaning: 'A short traditional tale with talking animal characters that teaches a moral lesson.' },
    ],
    ideas: [
      { title: 'Animals with human traits', text: 'In fables, animals talk, race, brag, and learn lessons just like people.' },
      { title: 'Look for the moral', text: 'Fables always teach an important life rule, like being patient or humble.' },
    ],
    samples: [
      sample(MINI_TURTLE, mcq({
        standard: 'rla:2.9A', cites: [1, 2],
        stem: 'What makes "The Tortoise and the Hare" a classic fable?',
        choices: [
          'It features talking animals and teaches the moral that slow and steady wins the race.',
          ['It provides scientific measurements of turtle shells.', 'Fables are fictional stories, not science reports.'],
          ['It lists the official state symbols of Texas.', 'State symbols are not in fables.'],
          ['It is an instructional guide for building wooden fences.', 'No building guide is included.'],
        ],
        answer: 0,
        explain: 'Talking animals with human personalities and a clear moral lesson define the fable genre.',
      }), 4),
      sample(MINI_PUPPY, mcq({
        standard: 'rla:2.9A', cites: [1, 2],
        stem: 'How can the reader tell that "Finding Buddy" is realistic fiction rather than a fable?',
        choices: [
          'The characters are realistic humans and the puppy behaves like a real dog without talking.',
          ['The animals speak fluent English with the humans.', 'Buddy does not talk.'],
          ['Magical fairies solve the problem with wands.', 'No magic is present.'],
          ['The story takes place on a fantasy spaceship.', 'The setting is a real-world neighborhood.'],
        ],
        answer: 0,
        explain: 'Realistic fiction features real-world situations and ordinary animals that do not talk like humans.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.9B',
    goal: 'You will learn to explain visual patterns and structures in poems (rhyme, lines, stanzas).',
    words: [
      { term: 'stanza', meaning: 'A group of lines in a poem, similar to a paragraph in a story.' },
      { term: 'rhyme', meaning: 'Matching ending sounds in words, like star and are.' },
    ],
    ideas: [
      { title: 'Count the lines', text: 'Poems are arranged in distinct lines rather than continuous prose paragraphs.' },
      { title: 'Listen for rhyme', text: 'Look at the last word of each line to hear matching musical sounds.' },
    ],
    samples: [
      sample(MINI_STAR_POEM, mcq({
        standard: 'rla:2.9B', cites: [1, 2],
        stem: 'Which two rhyming words appear at the ends of lines 1 and 2?',
        choices: [
          'star and are',
          ['wonder and little', 'These words do not share rhyming ending sounds.'],
          ['high and sky', 'High and sky are at the ends of lines 3 and 4.'],
          ['twinkle and gone', 'These words do not rhyme.'],
        ],
        answer: 0,
        explain: 'Star and are end with the exact same vowel-consonant rhyming sound.',
      }), 4),
      sample(MINI_STAR_POEM, mcq({
        standard: 'rla:2.9B', cites: [1, 4],
        stem: 'How is "The Star" visually structured on the page?',
        choices: [
          'It is divided into four-line stanzas with short lines and rhyming endings.',
          ['It is written in one continuous prose paragraph.', 'Poems use line breaks, not long paragraphs.'],
          ['It is formatted as a dialogue script with speaker names.', 'This is a poem, not a script.'],
          ['It uses headings, bullet points, and numbered steps.', 'Bullet points are for informational lists.'],
        ],
        answer: 0,
        explain: 'The poem is organized into distinct four-line stanzas separated by blank space.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.9C',
    goal: 'You will learn to discuss elements of drama such as characters, dialogue, and setting.',
    words: [
      { term: 'dialogue', meaning: 'The words characters speak aloud to each other in a play.' },
      { term: 'stage directions', meaning: 'Instructions in brackets telling actors how to move and speak.' },
    ],
    ideas: [
      { title: 'Speaker tags', text: 'Character names in capital letters show who speaks each line of dialogue.' },
      { title: 'Brackets show action', text: 'Words in brackets like [wiping her forehead] tell actors what to do.' },
    ],
    samples: [
      sample(MINI_PICNIC, mcq({
        standard: 'rla:2.9C', cites: [1],
        stem: 'In the play, what is the purpose of the bracketed words "[Wiping her forehead and holding a blanket]"?',
        choices: [
          'They are stage directions guiding the actor\'s physical actions on stage.',
          ['They are words Mia shouts aloud to her neighbors.', 'Stage directions are acted, not spoken.'],
          ['They list ingredients for making chocolate cookies.', 'No recipe is provided.'],
          ['They tell what the audience should do.', 'Stage directions instruct the actors.'],
        ],
        answer: 0,
        explain: 'Stage directions tell actors how to move, react, and portray physical feelings on stage.',
      }), 4),
      sample(MINI_PICNIC, mcq({
        standard: 'rla:2.9C', cites: [2],
        stem: 'How does dialogue help the audience understand the characters\' problem?',
        choices: [
          'Sam explains out loud that the hot sun is melting their cookies and warming their drinks.',
          ['Mia whispers that she forgot the blanket at home.', 'Mia already has the blanket.'],
          ['Sam sings a song about swimming in a creek.', 'Sam discusses the hot sun.'],
          ['An outside narrator explains everything from above.', 'The characters speak for themselves in dialogue.'],
        ],
        answer: 0,
        explain: 'Dialogue allows characters to state their concerns and ideas directly to each other and the audience.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.9D.i',
    goal: 'You will learn to identify the central idea and supporting evidence in informational text.',
    words: [
      { term: 'central idea', meaning: 'The most important point the author wants you to understand about the topic.' },
    ],
    ideas: [
      { title: 'Ask what it is mostly about', text: 'Read the whole passage and ask: What big lesson or fact is shared?' },
      { title: 'Find supporting facts', text: 'Supporting details give proof and examples that back up the central idea.' },
    ],
    samples: [
      sample(MINI_MONARCH, mcq({
        standard: 'rla:2.9D.i', cites: [1, 2],
        stem: 'What is the central idea of "Monarch Butterflies in Texas"?',
        choices: [
          'Texas provides essential food and rest for monarch butterflies during migration.',
          ['Butterflies prefer living inside dark mountain caves in winter.', 'Monarchs rest in trees.'],
          ['Caterpillars only eat dry oak leaves.', 'Caterpillars eat milkweed leaves.'],
          ['Wildflowers bloom only when it snows.', 'Wildflowers bloom in warm weather.'],
        ],
        answer: 0,
        explain: 'The entire passage explains how Texas wildflowers and milkweed support monarchs during their travels.',
      }), 4),
      sample(MINI_SUNFLOWERS, mcq({
        standard: 'rla:2.9D.i', cites: [1, 2],
        stem: 'What is the central idea of "Sunflowers in the Summer"?',
        choices: [
          'Sunflowers grow tall, follow the sun, and produce nutritious seeds for wildlife.',
          ['Backyard fences are always taller than garden plants.', 'Sunflowers can grow taller than fences.'],
          ['Songbirds only eat sweet nectar from red roses.', 'Birds eat sunflower seeds.'],
          ['Sunflowers only grow in dark caves.', 'Sunflowers need warm sunlight.'],
        ],
        answer: 0,
        explain: 'The passage highlights sunflower growth height, tracking sunlight, and feeding wildlife with seeds.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.9D.ii',
    goal: 'You will learn to use features and graphics like headings and bold words to locate information.',
    words: [
      { term: 'heading', meaning: 'A short title above a section of text previewing what you will read.' },
    ],
    ideas: [
      { title: 'Preview sections', text: 'Headings help you quickly find specific topics without reading every single word.' },
      { title: 'Notice bold text', text: 'Important terms are often printed in bold or italic font.' },
    ],
    samples: [
      sample(MINI_SUNFLOWERS, mcq({
        standard: 'rla:2.9D.ii', cites: [1],
        stem: 'What does the heading "Tracking the Sunlight" tell the reader?',
        choices: [
          'The section will explain how sunflower buds turn to follow the sun across the sky.',
          ['The section will explain how to catch wild rabbits.', 'Rabbits are not in this section.'],
          ['The section will list ingredients for baking bread.', 'No recipe is provided.'],
          ['The section will describe winter snowstorms.', 'The text is about summer flowers.'],
        ],
        answer: 0,
        explain: 'The heading previews the scientific fact that sunflowers track the sun throughout the day.',
      }), 4),
      sample(MINI_SUNFLOWERS, mcq({
        standard: 'rla:2.9D.ii', cites: [2],
        stem: 'Which section should a reader check to learn about animals eating sunflower seeds?',
        choices: [
          'The section under the heading "A Treat for Birds."',
          ['The section under "Tracking the Sunlight."', 'That section is about turning toward the sun.'],
          ['The glossary at the front of the book.', 'The section heading directly points to animal food.'],
          ['The copyright page.', 'The copyright page lists publication dates, not animal facts.'],
        ],
        answer: 0,
        explain: 'Headings help readers locate specific facts; "A Treat for Birds" discusses animals eating seeds.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.9D.iii',
    goal: 'You will learn to recognize organizational patterns such as chronological order and cause and effect.',
    words: [
      { term: 'chronological order', meaning: 'Arranging events in the order in which they happen in time.' },
      { term: 'cause and effect', meaning: 'Why something happens (cause) and what happens as a result (effect).' },
    ],
    ideas: [
      { title: 'Look for time words', text: 'Words like first, morning, afternoon, and late summer signal time order.' },
      { title: 'Ask why it happened', text: 'Cause answers why; effect tells the result of the action.' },
    ],
    samples: [
      sample(MINI_MONARCH, mcq({
        standard: 'rla:2.9D.iii', cites: [1, 2],
        stem: 'How is the information in "Monarch Butterflies in Texas" organized?',
        choices: [
          'In time order, following the butterflies from autumn travel to spring return.',
          ['By listing butterfly species from smallest to largest.', 'Only monarchs are described.'],
          ['As a fictional adventure about talking insects.', 'The text is factual informational writing.'],
          ['By comparing butterfly wings to fish scales.', 'No fish comparisons are made.'],
        ],
        answer: 0,
        explain: 'The text uses chronological order, following the migration south in autumn and return north in spring.',
      }), 4),
      sample(MINI_SUNFLOWERS, mcq({
        standard: 'rla:2.9D.iii', cites: [1],
        stem: 'According to paragraph 1, what causes sunflower heads to turn west in the afternoon?',
        choices: [
          'The flower stems slowly turn to follow the sun as it moves westward.',
          ['Strong prairie wind blows the plants sideways.', 'Wind does not cause the steady daily turning.'],
          ['Heavy seeds pull the stem to the ground.', 'Seeds develop later in late summer.'],
          ['Songbirds push the flowers with their wings.', 'Birds do not push the flowers.'],
        ],
        answer: 0,
        explain: 'Tracking the sun across the sky is the cause of the westward movement.',
      }), 4),
    ],
  },
];

export const G2_RLA_LESSONS: Lesson[] = [...G2_RLA_LESSONS_FIRST, ...G2_RLA_LESSONS_MORE];
