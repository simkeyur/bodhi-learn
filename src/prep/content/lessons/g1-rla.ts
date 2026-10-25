// Grade 1 reading walkthroughs (part 1: Strand 1 Reading, 32 standards).

import { mcq, sample } from '../rla/author.ts';
import type { Lesson } from '../types.ts';
import {
  MINI_ANT, MINI_APPLES, MINI_BED_POEM, MINI_BOAT, MINI_CAT, MINI_FROGS, MINI_KITTENS_POEM, MINI_NEST,
} from './g1-rla-passages.ts';
import { G1_RLA_LESSONS_MORE } from './g1-rla-more.ts';

const G1_RLA_LESSONS_FIRST: Lesson[] = [
  {
    code: 'rla:1.2B.i',
    goal: 'You will learn to decode words by matching letters to their sounds.',
    words: [
      { term: 'letter sound', meaning: 'The sound that a letter makes, such as /c/ /a/ /t/ for cat.' },
    ],
    ideas: [
      { title: 'Say each sound', text: 'Touch each letter and say its sound clearly before sliding them together.' },
      { title: 'Listen for the vowel', text: 'Short vowels make familiar sounds: a in cat, e in bed, i in pig, o in dog, u in sun.' },
    ],
  },
  {
    code: 'rla:1.2B.ii',
    goal: 'You will learn to decode words with consonant blends and digraphs like sh, ch, th, st, and bl.',
    words: [
      { term: 'consonant blend', meaning: 'Two consonants together where each sound is heard, like bl in blue.' },
      { term: 'digraph', meaning: 'Two letters teaming up to make a single sound, like sh in ship.' },
    ],
    ideas: [
      { title: 'Spot digraph teams', text: 'Sh, ch, and th make special sounds. Look for them at the start or end of words.' },
      { title: 'Blend smoothly', text: 'Slide consonant sounds together without pausing between them.' },
    ],
  },
  {
    code: 'rla:1.2B.iii',
    goal: 'You will learn to decode words with closed syllables, open syllables, silent e, and vowel teams.',
    words: [
      { term: 'silent e', meaning: 'An e at the end of a word that makes the first vowel say its long name, like in cake.' },
      { term: 'vowel team', meaning: 'Two vowels working together to make a long sound, like ee in tree.' },
    ],
    ideas: [
      { title: 'Check the end of the word', text: 'If there is a silent e at the end, the vowel before it says its name: home, lake.' },
      { title: 'Look for two vowels', text: 'When two vowels go walking, the first one does the talking: coat, rain.' },
    ],
  },
  {
    code: 'rla:1.2B.iv',
    goal: 'You will learn to decode compound words and contractions.',
    words: [
      { term: 'compound word', meaning: 'Two small words put together to make a new word, like sun + shine = sunshine.' },
      { term: 'contraction', meaning: 'A shortened word with an apostrophe, like can\'t for cannot.' },
    ],
    ideas: [
      { title: 'Find the two words', text: 'Split compound words in half to read each part: back + pack = backpack.' },
      { title: 'Look for the apostrophe', text: 'The apostrophe takes the place of missing letters: don\'t, isn\'t.' },
    ],
  },
  {
    code: 'rla:1.2B.v',
    goal: 'You will learn to decode words with word endings like -ed, -s, and -es.',
    words: [
      { term: 'inflectional ending', meaning: 'A word ending added to a base word, like -ed in jumped.' },
    ],
    ideas: [
      { title: 'Find the base word', text: 'Cover up the ending -ed or -ing to read the base word first, then add the ending.' },
      { title: 'Check the sound', text: '-ed can sound like /t/ in hopped, /d/ in played, or /id/ in planted.' },
    ],
  },
  {
    code: 'rla:1.2B.vi',
    goal: 'You will learn to read grade 1 high-frequency words quickly and easily.',
    words: [
      { term: 'high-frequency word', meaning: 'A common word you see often in books, such as they, said, and were.' },
    ],
    ideas: [
      { title: 'Practice by sight', text: 'Look at the whole word and remember how it sounds in a snap.' },
      { title: 'Read in sentences', text: 'Using the words in stories helps you remember them easily.' },
    ],
  },
  {
    code: 'rla:1.2D',
    goal: 'You will learn to identify the different parts of a book and what they tell you.',
    words: [
      { term: 'title', meaning: 'The name of a book or story.' },
      { term: 'author', meaning: 'The person who wrote the words in the book.' },
    ],
    ideas: [
      { title: 'Check the front cover', text: 'The cover tells the title, author, and illustrator of the book.' },
      { title: 'Use the title page', text: 'The title page inside gives extra information about the publisher.' },
    ],
  },
  {
    code: 'rla:1.2E',
    goal: 'You will learn to put words in alphabetical order (ABC order).',
    words: [
      { term: 'alphabetical order', meaning: 'Putting words in the order of the alphabet from A to Z.' },
    ],
    ideas: [
      { title: 'Look at the first letter', text: 'Find the first letter of each word and see which comes first in the alphabet.' },
      { title: 'Sing the ABCs', text: 'Say the alphabet quietly to yourself to check the order.' },
    ],
  },
  {
    code: 'rla:1.3A',
    goal: 'You will learn to use a picture dictionary to find the meanings of words.',
    words: [
      { term: 'picture dictionary', meaning: 'A book with words, definitions, and pictures that explain what words mean.' },
    ],
    ideas: [
      { title: 'Look at the picture', text: 'Illustrations show you what the object looks like.' },
      { title: 'Read the short definition', text: 'Simple words explain how the object is used or what it does.' },
    ],
  },
  {
    code: 'rla:1.3B',
    goal: 'You will learn to use illustrations and text clues to figure out word meanings.',
    words: [
      { term: 'context clues', meaning: 'Words and pictures in a story that help you understand a new word.' },
    ],
    ideas: [
      { title: 'Look at the pictures', text: 'Illustrations show clues about what unfamiliar words mean.' },
      { title: 'Read the words nearby', text: 'Sentences before and after a word explain what is happening.' },
    ],
    samples: [
      sample(MINI_CAT, mcq({
        standard: 'rla:1.3B', cites: [1],
        stem: 'In paragraph 1, the word **tapped** means—',
        choices: [
          ['bit with sharp teeth', 'Tapped describes using a paw, not biting.'],
          ['threw high into the air', 'Sam is on the ground touching the ball.'],
          ['washed with clean water', 'Tapped means touching lightly.'],
          'hit very gently with a paw',
        ],
        answer: 3,
        explain: 'Sam tapped the ball with his paw, which means touching or hitting it gently.',
      }), 1),
      sample(MINI_ANT, mcq({
        standard: 'rla:1.3B', cites: [2],
        stem: 'In paragraph 2, the word **drifted** means—',
        choices: [
          'floated gently across the water',
          ['sank quickly to the bottom', 'Drifted means staying afloat and moving with water.'],
          ['flew high into the clouds', 'The leaf was in the water, not flying.'],
          ['ran across the dirt road', 'The leaf moved in the river.'],
        ],
        answer: 0,
        explain: 'The leaf was on the river water, so drifted means floating gently to the bank.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.3C',
    goal: 'You will learn the meaning of words with the affixes -s, -ed, and -ing.',
    words: [
      { term: 'suffix', meaning: 'A letter or group of letters added to the end of a word.' },
    ],
    ideas: [
      { title: 'Check the ending', text: '-s means more than one, -ed means in the past, and -ing means happening right now.' },
      { title: 'Think about time', text: 'Jumping is happening today; jumped happened yesterday.' },
    ],
  },
  {
    code: 'rla:1.3D',
    goal: 'You will learn words that name actions, directions, and positions.',
    words: [
      { term: 'action word', meaning: 'A word telling what someone does, like run, hop, or swim.' },
      { term: 'position word', meaning: 'A word telling where something is, like under, on, or behind.' },
    ],
    ideas: [
      { title: 'Ask what it shows', text: 'Does the word tell an action (jump), a position (under), or a direction (left)?' },
      { title: 'Picture the sentence', text: 'Imagine where the object is or what it is doing.' },
    ],
  },
  {
    code: 'rla:1.6C',
    goal: 'You will learn to make and confirm predictions about what will happen next.',
    words: [
      { term: 'prediction', meaning: 'A smart guess about what will happen next in a story.' },
    ],
    ideas: [
      { title: 'Think about what happened so far', text: 'Use story events to guess what the character will do next.' },
      { title: 'Read on to check', text: 'Keep reading to see if your prediction came true.' },
    ],
    samples: [
      sample(MINI_CAT, mcq({
        standard: 'rla:1.6C', cites: [2],
        stem: 'What will Sam most likely do next?',
        choices: [
          ['Fly away into the sky.', 'Kittens cannot fly.'],
          'Keep playing happily with his red ball.',
          ['Swim across a wide lake.', 'The kitten is under a garden bench.'],
          ['Plant flower seeds in the dirt.', 'Kittens do not plant gardens.'],
        ],
        answer: 1,
        explain: 'At the end of paragraph 2, Sam pats the ball happily, showing he will keep playing with it.',
      }), 1),
      sample(MINI_BOAT, mcq({
        standard: 'rla:1.6C', cites: [4],
        stem: 'What will Emma and Liam most likely do next?',
        choices: [
          ['Go to sleep in their beds.', 'They are excited to continue playing.'],
          ['Walk to the grocery store.', 'They are playing inside with paper craft.'],
          'Fold a yellow paper boat together.',
          ['Eat lunch at the cafeteria.', 'Liam suggests folding a yellow boat next.'],
        ],
        answer: 2,
        explain: 'Liam says: "Let us fold a yellow boat next!"',
      }), 1),
    ],
  },
  {
    code: 'rla:1.6E',
    goal: 'You will learn to make connections between stories and your own life.',
    words: [
      { term: 'connection', meaning: 'How a story reminds you of your own life or another book.' },
    ],
    ideas: [
      { title: 'Think about your experiences', text: 'Has something like this ever happened to you?' },
      { title: 'Understand characters better', text: 'Connecting with characters helps you understand how they feel.' },
    ],
    samples: [
      sample(MINI_KITTENS_POEM, mcq({
        standard: 'rla:1.6E', cites: [1, 3],
        stem: 'A reader can connect this poem to a time when they—',
        choices: [
          'misplaced something and searched until they found it',
          ['built a tall wooden treehouse', 'The poem is about losing and finding mittens.'],
          ['swam in a deep ocean wave', 'The poem is set at home with kittens.'],
          ['planted carrot seeds in the dirt', 'The connection is about losing an item.'],
        ],
        answer: 0,
        explain: 'Children can easily connect to the feeling of misplacing an item and looking for it.',
      }), 1),
      sample(MINI_CAT, mcq({
        standard: 'rla:1.6E', cites: [1],
        stem: 'Reading about Sam the kitten might remind readers of—',
        choices: [
          ['a scary movie about monsters', 'The story is gentle and playful.'],
          'playing with a favorite pet or toy in their yard',
          ['riding a train across mountains', 'The story is set in a backyard.'],
          ['cooking soup in a restaurant', 'The story is about a kitten playing.'],
        ],
        answer: 1,
        explain: 'Playing with a kitten and a ball connects to everyday experiences with pets.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.6F',
    goal: 'You will learn to make inferences and find text evidence to support your thinking.',
    words: [
      { term: 'inference', meaning: 'Using clues from the story plus what you know to figure something out.' },
      { term: 'text evidence', meaning: 'Words directly from the story that prove your answer.' },
    ],
    ideas: [
      { title: 'Look for clues', text: 'The author does not tell you everything directly. Find clue words.' },
      { title: 'Prove it with words', text: 'Point to the exact sentence in the text that shows you are right.' },
    ],
    samples: [
      sample(MINI_ANT, mcq({
        standard: 'rla:1.6F', cites: [2],
        stem: 'How does the ant feel after reaching the grassy bank?',
        choices: [
          ['Angry at the river water.', 'The ant is grateful, not angry.'],
          ['Tired of playing games.', 'The ant was in danger, not playing.'],
          ['Hungry for sweet fruit.', 'The story does not mention hunger.'],
          'Safe and thankful to the kind dove.',
        ],
        answer: 3,
        explain: 'Paragraph 2 states that the ant reached the bank safely and thanked the kind dove.',
      }), 1),
      sample(MINI_NEST, mcq({
        standard: 'rla:1.6F', cites: [2],
        stem: 'Why do robins line the inside of the nest with soft feathers?',
        choices: [
          ['To make the nest heavy so it falls.', 'Robins want the nest to stay securely in the tree.'],
          ['To scare away garden insects.', 'Feathers do not scare insects.'],
          ['To hide from the father robin.', 'Both parents work together.'],
          'To make a gentle and warm place for the eggs.',
        ],
        answer: 3,
        explain: 'Paragraph 2 explains that the soft feathers make the nest cozy and safe for fragile eggs.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.6G',
    goal: 'You will learn to evaluate details to determine what is most important.',
    words: [
      { term: 'key detail', meaning: 'An important piece of information that supports the big idea.' },
    ],
    ideas: [
      { title: 'Separate big and small facts', text: 'Ask: does this detail help explain the main point?' },
      { title: 'Focus on what matters', text: 'Pay attention to facts that answer the main question.' },
    ],
    samples: [
      sample(MINI_FROGS, mcq({
        standard: 'rla:1.6G', cites: [2],
        stem: 'Which detail shows how adult frogs are different from young tadpoles?',
        choices: [
          ['Adult frogs hatch from jelly eggs.', 'Tadpoles hatch from eggs.'],
          'Adult frogs can breathe air and hop on land.',
          ['Adult frogs swim with long fish tails.', 'Adult frogs lose their tails.'],
          ['Adult frogs sleep in tree branches all day.', 'The text says frogs hop on land.'],
        ],
        answer: 1,
        explain: 'Paragraph 2 explains that an adult frog can breathe air and hop on land, unlike tadpoles.',
      }), 1),
      sample(MINI_NEST, mcq({
        standard: 'rla:1.6G', cites: [2],
        stem: 'Which detail shows why robins use wet mud when building a nest?',
        choices: [
          'Mud cements the grass and twigs together into a sturdy shape.',
          ['Mud changes the color of the eggs.', 'Mud is used for the nest cup, not egg color.'],
          ['Mud keeps the birds from flying.', 'Birds fly freely.'],
          ['Mud feeds the hungry baby birds.', 'Birds eat worms and berries, not mud.'],
        ],
        answer: 0,
        explain: 'Paragraph 2 explains that mud cements the grass together into a cup shape.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.6H',
    goal: 'You will learn to synthesize information to create new understanding.',
    words: [
      { term: 'synthesize', meaning: 'Putting pieces of information together to form a fresh idea.' },
    ],
    ideas: [
      { title: 'Combine facts', text: 'Take what you learned from different paragraphs and put them together.' },
      { title: 'See the big picture', text: 'Ask yourself: what new understanding do I have now?' },
    ],
    samples: [
      sample(MINI_FROGS, mcq({
        standard: 'rla:1.6H', cites: [1, 2],
        stem: 'Putting the facts in both paragraphs together helps the reader understand that—',
        choices: [
          ['frogs stay the same their entire lives', 'Frogs change dramatically.'],
          'a frog goes through big changes as it grows into an adult',
          ['tadpoles never leave the pond water', 'Adult frogs leave the pond and hop on land.'],
          ['frog eggs are laid on high tree branches', 'Eggs are laid in pond water.'],
        ],
        answer: 1,
        explain: 'Combining facts shows the life cycle changes that turn a swimming tadpole into a land frog.',
      }), 1),
      sample(MINI_NEST, mcq({
        standard: 'rla:1.6H', cites: [1, 2],
        stem: 'Together, paragraphs 1 and 2 show that robins—',
        choices: [
          'put careful work and care into protecting their eggs',
          ['only live in gardens during the winter', 'They build nests in spring.'],
          ['never use soft materials in nests', 'They line the nest with soft feathers.'],
          ['leave their eggs alone on the bare grass', 'They build cozy nests high in trees.'],
        ],
        answer: 0,
        explain: 'All details combined show how carefully robins construct their nests to keep eggs safe.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.8B',
    goal: 'You will learn to describe main characters and the reasons for their actions.',
    words: [
      { term: 'character', meaning: 'A person or animal in a story.' },
      { term: 'reason', meaning: 'Why a character says, thinks, or does something.' },
    ],
    ideas: [
      { title: 'Ask why', text: 'Why did the character do that? What were they thinking or feeling?' },
      { title: 'Notice character actions', text: 'What characters do reveals what kind of character they are.' },
    ],
    samples: [
      sample(MINI_CAT, mcq({
        standard: 'rla:1.8B', cites: [2],
        stem: 'Why does Sam run as fast as he can?',
        choices: [
          'He wants to catch the rolling red ball.',
          ['He is scared of the buzzing bees.', 'Sam is excited to play, not scared.'],
          ['He hears his mother calling him for dinner.', 'No mother calls him in the story.'],
          ['He is looking for a warm place to hide.', 'He is chasing his toy ball.'],
        ],
        answer: 0,
        explain: 'Paragraph 2 says Sam ran fast because he was chasing after the red ball.',
      }), 1),
      sample(MINI_ANT, mcq({
        standard: 'rla:1.8B', cites: [2],
        stem: 'Why does the dove drop a green leaf into the river?',
        choices: [
          ['To make a soft nest on the ground.', 'The dove drops the leaf into the water to rescue the ant.'],
          ['To hide from a predator in the tree.', 'The dove is helping the ant.'],
          'To help the ant climb to safety.',
          ['To wash the leaf in the river.', 'The leaf acts as a life raft for the ant.'],
        ],
        answer: 2,
        explain: 'Paragraph 2 states that the dove dropped the leaf so the ant could climb on and float to safety.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.8C',
    goal: 'You will learn to describe plot elements including the problem and resolution.',
    words: [
      { term: 'problem', meaning: 'Something that goes wrong or needs fixing in a story.' },
      { term: 'resolution', meaning: 'How the problem is solved at the end.' },
    ],
    ideas: [
      { title: 'Identify what goes wrong', text: 'What trouble or challenge does the character face?' },
      { title: 'Find how it gets solved', text: 'Look at the ending to see how things turn out okay.' },
    ],
    samples: [
      sample(MINI_CAT, mcq({
        standard: 'rla:1.8C', cites: [2],
        stem: 'What happens after the ball rolls down the garden path?',
        choices: [
          ['The ball splashes into a deep pond.', 'The ball rolls under a bench, not into a pond.'],
          'Sam runs after it and finds it under a wooden bench.',
          ['A big dog takes the ball away.', 'No dog appears in this story.'],
          ['Sam goes inside the house to sleep.', 'Sam chases the ball and catches it.'],
        ],
        answer: 1,
        explain: 'Paragraph 2 tells us that Sam ran after the rolling ball and found it under a wooden bench.',
      }), 1),
      sample(MINI_ANT, mcq({
        standard: 'rla:1.8C', cites: [1],
        stem: 'What is the main problem the ant faces in the story?',
        choices: [
          'The ant falls into deep water and cannot swim.',
          ['The ant cannot find any green leaves.', 'Leaves are not what the ant was looking for.'],
          ['A dove chases the ant away from the river.', 'The dove helps the ant, not chases it.'],
          ['The sun is too hot on the path.', 'The problem is being swept into deep river water.'],
        ],
        answer: 0,
        explain: 'Paragraph 1 explains that a strong wave swept the ant into deep water where it struggled to stay afloat.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.8D',
    goal: 'You will learn to describe the setting of a story.',
    words: [
      { term: 'setting', meaning: 'Where and when a story takes place.' },
    ],
    ideas: [
      { title: 'Ask where and when', text: 'Is it daytime or nighttime? Is it in a yard, woods, or house?' },
      { title: 'Look for place words', text: 'Look for words like backyard, river, or kitchen that name the place.' },
    ],
    samples: [
      sample(MINI_CAT, mcq({
        standard: 'rla:1.8D', cites: [1],
        stem: 'Where does this story take place?',
        choices: [
          ['Inside a classroom at school.', 'The setting is outdoors in a backyard.'],
          ['On a sandy ocean beach.', 'The story takes place on green grass, not a beach.'],
          'In a sunny backyard garden.',
          ['Inside a noisy pet store.', 'The story takes place at home in the yard.'],
        ],
        answer: 2,
        explain: 'Paragraph 1 states that Sam loved playing in the sunny backyard.',
      }), 1),
      sample(MINI_ANT, mcq({
        standard: 'rla:1.8D', cites: [1],
        stem: 'Where do the events in this story take place?',
        choices: [
          ['Inside a cozy farmhouse kitchen.', 'The setting is outdoors by a river.'],
          'Near a clear river and a tree.',
          ['At a busy city playground.', 'The characters are an ant and dove by a natural river.'],
          ['On top of a snowy mountain.', 'The story happens by a warm river.'],
        ],
        answer: 1,
        explain: 'The story takes place by a clear river where the dove perches in a nearby tree.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.9A',
    goal: 'You will learn the characteristics of folktales, fables, and nursery rhymes.',
    words: [
      { term: 'fable', meaning: 'A short story with talking animals that teaches a helpful lesson.' },
      { term: 'nursery rhyme', meaning: 'A traditional short poem with rhyming words for young children.' },
    ],
    ideas: [
      { title: 'Look for talking animals', text: 'Fables often feature animal characters that act and talk like people.' },
      { title: 'Find the lesson', text: 'Fables teach us how to be kind, honest, or helpful.' },
    ],
    samples: [
      sample(MINI_ANT, mcq({
        standard: 'rla:1.9A', cites: [2],
        stem: 'This story is a fable because it teaches that—',
        choices: [
          ['ants should never drink cool water', 'The lesson is about kindness and helping, not avoiding water.'],
          'friends help each other when someone is in danger',
          ['birds only like to build large nests', 'The story is about saving the ant.'],
          ['rivers are always dangerous for everyone', 'The story teaches a moral lesson about kindness.'],
        ],
        answer: 1,
        explain: 'A fable teaches a lesson: here, the dove kindly helps the ant in trouble.',
      }), 1),
      sample(MINI_KITTENS_POEM, mcq({
        standard: 'rla:1.9A', cites: [1, 2, 3, 4],
        stem: 'This selection is a well-known nursery rhyme because—',
        choices: [
          'it has playful rhyming lines and repeating words',
          ['it teaches how to build a wooden barn', 'The poem is about kittens and mittens.'],
          ['it is an informational science report', 'The selection is a traditional rhyme.'],
          ['it gives directions for baking bread', 'It is a playful nursery poem.'],
        ],
        answer: 0,
        explain: 'Nursery rhymes feature rhythmic, rhyming verses and memorable animal characters.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.9B',
    goal: 'You will learn to identify rhyme, rhythm, and repetition in poems.',
    words: [
      { term: 'rhyme', meaning: 'Words that have the same ending sound, like cat and hat.' },
      { term: 'repetition', meaning: 'Words or lines that are repeated for emphasis or rhythm.' },
    ],
    ideas: [
      { title: 'Listen for ending sounds', text: 'Words at the ends of lines often rhyme: night and light, cry and pie.' },
      { title: 'Feel the rhythm', text: 'Poetry has a musical beat when read aloud.' },
    ],
    samples: [
      sample(MINI_KITTENS_POEM, mcq({
        standard: 'rla:1.9B', cites: [1, 2],
        stem: 'Which two words in the poem rhyme?',
        choices: [
          ['kittens and pie', 'Kittens and pie do not have the same ending sound.'],
          'cry and pie',
          ['lost and dear', 'Lost and dear do not rhyme.'],
          ['three and mittens', 'Three and mittens do not rhyme.'],
        ],
        answer: 1,
        explain: 'Cry and pie share the same ending long i sound, so they rhyme.',
      }), 1),
      sample(MINI_BED_POEM, mcq({
        standard: 'rla:1.9B', cites: [1],
        stem: 'Which words rhyme in the first stanza?',
        choices: [
          'night and light',
          ['dress and summer', 'Dress and summer do not rhyme.'],
          ['winter and way', 'Winter and way do not share ending sounds.'],
          ['yellow and bed', 'Yellow and bed do not rhyme.'],
        ],
        answer: 0,
        explain: 'Night and light rhyme because they have the same ending "-ight" sound.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.9C',
    goal: 'You will learn to discuss elements of drama such as characters and setting.',
    words: [
      { term: 'play', meaning: 'A story written for actors to speak and perform.' },
      { term: 'dialogue', meaning: 'The words that characters speak to one another.' },
    ],
    ideas: [
      { title: 'Notice character names', text: 'In a play, character names are written in ALL CAPS before their lines.' },
      { title: 'Understand who is talking', text: 'Follow the dialogue to see how characters interact.' },
    ],
    samples: [
      sample(MINI_BOAT, mcq({
        standard: 'rla:1.9C', cites: [1, 2],
        stem: 'Who are the characters in this play?',
        choices: [
          'Emma and Liam',
          ['Carlos and Mia', 'Carlos and Mia are not in this play.'],
          ['A sailor and a captain', 'The characters are two children named Emma and Liam.'],
          ['Two fish in a pond', 'The characters are people talking.'],
        ],
        answer: 0,
        explain: 'The speaker names shown before each line are EMMA and LIAM.',
      }), 1),
      sample(MINI_BOAT, mcq({
        standard: 'rla:1.9C', cites: [2],
        stem: 'Where does the action in this play take place?',
        choices: [
          ['On a real pirate ship at sea.', 'The children are playing pretend indoors.'],
          ['In a deep snowy forest.', 'The play is not set in a forest.'],
          'Inside near a wash basin filled with water.',
          ['At a noisy baseball stadium.', 'The play is set inside with a water basin.'],
        ],
        answer: 2,
        explain: 'Liam suggests filling a wash basin with water to float the paper boat.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.9D.i',
    goal: 'You will learn to recognize the central idea and supporting evidence in informational text.',
    words: [
      { term: 'central idea', meaning: 'The most important point the author wants you to know.' },
    ],
    ideas: [
      { title: 'Ask what it is mostly about', text: 'What is the big idea that all paragraphs talk about?' },
      { title: 'Check supporting facts', text: 'Look for facts that give details about that central idea.' },
    ],
    samples: [
      sample(MINI_FROGS, mcq({
        standard: 'rla:1.9D.i', cites: [1, 2],
        stem: 'What is the central idea of this selection?',
        choices: [
          ['Ponds are filled with freshwater plants.', 'The text is about tadpoles changing into frogs.'],
          'Tadpoles change and grow into adult frogs.',
          ['Frogs only swim underwater and never hop.', 'Frogs hop on land as adults.'],
          ['All animals hatch from tiny eggs.', 'The passage specifically describes frogs.'],
        ],
        answer: 1,
        explain: 'The selection describes the lifecycle changes from egg to tadpole to adult frog.',
      }), 1),
      sample(MINI_NEST, mcq({
        standard: 'rla:1.9D.i', cites: [1, 2],
        stem: 'What is the central idea of this selection?',
        choices: [
          ['Robins like to sing in the rain.', 'The text is about building nests, not singing.'],
          'Robins work together to build safe nests for their eggs.',
          ['Garden worms are good food for birds.', 'The passage discusses building materials, not food.'],
          ['Trees lose their green leaves in autumn.', 'The setting is springtime nest-building.'],
        ],
        answer: 1,
        explain: 'The main idea is that robin parents work together to build a safe, warm nest for their eggs.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.9D.ii',
    goal: 'You will learn to use informational text features and simple graphics to gain information.',
    words: [
      { term: 'text feature', meaning: 'A helpful part of a text like a heading or caption.' },
    ],
    ideas: [
      { title: 'Look at special parts', text: 'Headings, labels, and pictures help you find facts quickly.' },
      { title: 'Read captions', text: 'Words under pictures explain what is shown.' },
    ],
    samples: [
      sample(MINI_FROGS, mcq({
        standard: 'rla:1.9D.ii', cites: [1],
        stem: 'Paragraph 1 teaches the reader that young tadpoles—',
        choices: [
          ['can hop on green grass', 'Tadpoles swim; adult frogs hop.'],
          ['have wings to fly high', 'Tadpoles have tails, not wings.'],
          'have long tails and breathe underwater',
          ['eat sweet berries from bushes', 'The text explains how tadpoles breathe underwater.'],
        ],
        answer: 2,
        explain: 'Paragraph 1 states that tadpoles have long tails and breathe underwater through gills.',
      }), 1),
      sample(MINI_NEST, mcq({
        standard: 'rla:1.9D.ii', cites: [1],
        stem: 'Paragraph 1 lists materials robins gather in the garden, including—',
        choices: [
          'small twigs, dry grass, and string',
          ['metal nails and wooden boards', 'Birds gather natural twigs, not nails.'],
          ['plastic bottles and paper cups', 'Robins use natural garden materials.'],
          ['warm wool blankets from beds', 'Robins find twigs and grass in gardens.'],
        ],
        answer: 0,
        explain: 'Paragraph 1 states robins search for small twigs, dry grass, and bits of string.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.9D.iii',
    goal: 'You will learn organizational patterns like chronological order and description.',
    words: [
      { term: 'chronological order', meaning: 'The time order in which events or steps happen.' },
    ],
    ideas: [
      { title: 'Look for sequence words', text: 'Words like first, next, then, and finally show the order of steps.' },
      { title: 'Follow the timeline', text: 'Think about what must happen first before the next thing can occur.' },
    ],
    samples: [
      sample(MINI_FROGS, mcq({
        standard: 'rla:1.9D.iii', cites: [2],
        stem: 'What happens right after a tadpole grows two back legs?',
        choices: [
          'Two front legs appear.',
          ['The eggs float on the pond.', 'The eggs hatch before legs grow.'],
          ['The tadpole flies away.', 'Frogs do not fly.'],
          ['The gills get longer.', 'Gills disappear as lungs develop.'],
        ],
        answer: 0,
        explain: 'Paragraph 2 explains: "First, two back legs grow. Next, two front legs appear."',
      }), 1),
      sample(MINI_NEST, mcq({
        standard: 'rla:1.9D.iii', cites: [2],
        stem: 'What is the final step the robins take to finish the nest?',
        choices: [
          'Lining the inside with soft feathers.',
          ['Finding dry grass in the garden.', 'Gathering grass happens at the beginning.'],
          ['Carrying mud up into the tree.', 'Mud is used before the soft lining is placed.'],
          ['Painting the outside with bright colors.', 'Birds do not paint nests.'],
        ],
        answer: 0,
        explain: 'Paragraph 2 states: "Finally, they line the inside of the nest with soft feathers."',
      }), 1),
    ],
  },
  {
    code: 'rla:1.9E',
    goal: 'You will learn to recognize persuasive text and state what the author wants you to think or do.',
    words: [
      { term: 'persuade', meaning: 'To convince someone to think or do something.' },
      { term: 'opinion', meaning: 'What someone thinks or feels about a topic.' },
    ],
    ideas: [
      { title: 'Find the author\'s goal', text: 'What is the author trying to get you to believe or try?' },
      { title: 'Look for reasons', text: 'Good persuasive writing gives reasons to support the opinion.' },
    ],
    samples: [
      sample(MINI_APPLES, mcq({
        standard: 'rla:1.9E', cites: [1, 2],
        stem: 'What is the author trying to persuade the reader to do?',
        choices: [
          'Eat apples for a healthy and delicious snack.',
          ['Plant pumpkin seeds in the garden.', 'The text is about eating apples, not planting pumpkins.'],
          ['Stop drinking cold milk at breakfast.', 'Milk is not discussed in this text.'],
          ['Only eat candy after school.', 'The author encourages healthy fruit snacks.'],
        ],
        answer: 0,
        explain: 'The author argues that apples are the best fruit snack and encourages everyone to pack one.',
      }), 1),
      sample(MINI_APPLES, mcq({
        standard: 'rla:1.9E', cites: [2],
        stem: 'Which reason does the author give for why apples are good for you?',
        choices: [
          ['Apples are very soft like mashed potatoes.', 'The author calls apples crunchy.'],
          'Apples are full of vitamins that keep bodies strong.',
          ['Apples can be stored in the freezer all year.', 'Freezer storage is not mentioned.'],
          ['Apples cost less than oranges.', 'Cost is not mentioned in the passage.'],
        ],
        answer: 1,
        explain: 'Paragraph 2 states that apples have vitamins that keep your body strong and healthy.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.10A',
    goal: 'You will learn to discuss the author\'s purpose for writing a text.',
    words: [
      { term: 'author\'s purpose', meaning: 'The main reason why the author wrote the text (to inform, entertain, or persuade).' },
    ],
    ideas: [
      { title: 'Think about the PIE', text: 'Did the author write to Persuade, Inform, or Entertain?' },
      { title: 'Check the text type', text: 'Stories entertain, science texts inform, and opinion texts persuade.' },
    ],
    samples: [
      sample(MINI_FROGS, mcq({
        standard: 'rla:1.10A', cites: [1, 2],
        stem: 'Why did the author write this selection?',
        choices: [
          'To explain how a tadpole grows into a frog.',
          ['To tell a funny joke about animals.', 'This is an informational science text, not a joke.'],
          ['To ask readers to catch tadpoles.', 'The author does not ask readers to catch animals.'],
          ['To teach readers how to build a pond.', 'The text explains frog development.'],
        ],
        answer: 0,
        explain: 'The author wrote this text to inform readers about how tadpoles grow and change.',
      }), 1),
      sample(MINI_APPLES, mcq({
        standard: 'rla:1.10A', cites: [1, 2],
        stem: 'Why did the author write this selection?',
        choices: [
          ['To explain how to bake an apple pie.', 'The text is not a recipe.'],
          ['To tell a story about an apple tree monster.', 'This is a persuasive text, not fiction.'],
          'To convince readers to choose apples for a snack.',
          ['To describe how farmers pick oranges.', 'The text is about apples.'],
        ],
        answer: 2,
        explain: 'The author wants to persuade readers to choose and eat apples.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.10B',
    goal: 'You will learn how text structure helps the author achieve their purpose.',
    words: [
      { term: 'text structure', meaning: 'How the author organizes the information in the writing.' },
    ],
    ideas: [
      { title: 'Notice the organization', text: 'Is the text organized by time order, steps, or reasons?' },
      { title: 'Connect to purpose', text: 'Reasons help persuade; time order helps explain a process.' },
    ],
    samples: [
      sample(MINI_APPLES, mcq({
        standard: 'rla:1.10B', cites: [1, 2],
        stem: 'How does the author organize the ideas in this selection?',
        choices: [
          ['By telling a story with a beginning, middle, and end.', 'This is an opinion text with reasons, not a narrative.'],
          ['By listing rhyming words at the end of each line.', 'This is prose, not a poem.'],
          'By giving clear reasons why apples are a great choice.',
          ['By asking questions that have no answers.', 'The author makes statements and gives supporting facts.'],
        ],
        answer: 2,
        explain: 'The author provides reasons (taste, vitamins, energy) to support the main opinion.',
      }), 1),
      sample(MINI_FROGS, mcq({
        standard: 'rla:1.10B', cites: [2],
        stem: 'The author organizes the steps in paragraph 2 by—',
        choices: [
          'showing the order in which frog body parts grow',
          ['telling a funny animal joke', 'The text gives scientific facts in sequence.'],
          ['comparing frogs to giant elephants', 'Elephants are not mentioned.'],
          ['asking questions about weather in winter', 'The topic is frog lifecycle.'],
        ],
        answer: 0,
        explain: 'Paragraph 2 describes how legs grow and the tail shrinks in time order.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.10C',
    goal: 'You will learn to discuss print and graphic features authors use.',
    words: [
      { term: 'print feature', meaning: 'Special print like bold words or headings that guide the reader.' },
    ],
    ideas: [
      { title: 'Notice bold words', text: 'Authors make important words bold so they stand out.' },
      { title: 'Look at sequence signals', text: 'Words like First and Finally guide the reader through steps.' },
    ],
    samples: [
      sample(MINI_NEST, mcq({
        standard: 'rla:1.10C', cites: [2],
        stem: 'The words **Next** and **Finally** help the reader understand—',
        choices: [
          'the order of steps in building a nest',
          ['where robins find their food', 'These words show sequence, not food locations.'],
          ['why birds have wings to fly', 'These transition words show time order.'],
          ['how cold the winter snow can be', 'The text is set in spring.'],
        ],
        answer: 0,
        explain: 'Words like Next and Finally show the chronological order of how the nest is constructed.',
      }), 1),
      sample(MINI_FROGS, mcq({
        standard: 'rla:1.10C', cites: [2],
        stem: 'The words **First** and **Next** in paragraph 2 help the reader—',
        choices: [
          ['count how many frogs are in the pond', 'These words signal sequence, not counting.'],
          'follow how the tadpole changes over time',
          ['remember what color the lily pads are', 'The words show the timeline of growth.'],
          ['learn how to swim underwater', 'These transition words show order.'],
        ],
        answer: 1,
        explain: 'First and Next guide the reader through the stages of a tadpole\'s growth.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.10D',
    goal: 'You will learn to discuss how words help the reader visualize.',
    words: [
      { term: 'visualize', meaning: 'To picture something in your mind while reading.' },
      { term: 'sensory words', meaning: 'Words that appeal to sight, sound, smell, taste, or touch.' },
    ],
    ideas: [
      { title: 'Make a mind picture', text: 'Sensory words like bright blue, crunchy, or purr help you imagine the scene.' },
      { title: 'Use your senses', text: 'Think about what you would see, hear, or feel.' },
    ],
    samples: [
      sample(MINI_KITTENS_POEM, mcq({
        standard: 'rla:1.10D', cites: [4],
        stem: 'The sound word **"Purr-r"** helps the reader know that the kittens are—',
        choices: [
          ['frightened of a thunderstorm', 'Purring is a sound of contentment, not fear.'],
          ['very cold in the winter snow', 'The kittens are happy about getting pie.'],
          ['angry at their mother', 'Purring indicates affection and happiness.'],
          'happy and pleased',
        ],
        answer: 3,
        explain: 'Cats purr when they are cozy, happy, and satisfied.',
      }), 1),
      sample(MINI_BED_POEM, mcq({
        standard: 'rla:1.10D', cites: [3],
        stem: 'The phrase **"clear and blue"** helps the reader visualize—',
        choices: [
          ['a dark stormy night with thunder', 'The line describes bright blue daylight.'],
          'a bright sunny daytime sky',
          ['a cold snowy ground in winter', 'Clear and blue refers to summer sky.'],
          ['a deep green forest lake', 'Clear and blue describes the sky overhead.'],
        ],
        answer: 1,
        explain: 'A clear and blue sky paints a picture of a bright sunny day.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.10E',
    goal: 'You will learn to recognize first-person and third-person stories.',
    words: [
      { term: 'first person', meaning: 'A story told by a character using the pronoun "I".' },
      { term: 'third person', meaning: 'A story told by an outside narrator using he, she, or they.' },
    ],
    ideas: [
      { title: 'Look for "I"', text: 'If the narrator says "I went to bed," the story is first person.' },
      { title: 'Look for names and he/she', text: 'If the narrator says "Sam ran fast," the story is third person.' },
    ],
    samples: [
      sample(MINI_CAT, mcq({
        standard: 'rla:1.10E', cites: [1],
        stem: 'Who is telling this story?',
        choices: [
          'A narrator telling about Sam the kitten.',
          ['Sam the kitten using the word "I".', 'The story does not use "I"; it is told by an outside narrator.'],
          ['A child named Leo who owns the kitten.', 'Leo is not mentioned in the story.'],
          ['A bird sitting in a tall tree.', 'The narrator is telling the story, not a bird.'],
        ],
        answer: 0,
        explain: 'The story uses third-person words like "he" and "Sam," meaning an outside narrator is telling it.',
      }), 1),
      sample(MINI_BED_POEM, mcq({
        standard: 'rla:1.10E', cites: [1, 2, 3],
        stem: 'The speaker in the poem uses the word **"I"** because—',
        choices: [
          ['a bird is talking to other birds', 'A child is the speaker.'],
          'the child is sharing personal thoughts and feelings',
          ['a teacher is giving a science lesson', 'The speaker is a child describing bedtime.'],
          ['the poem is about a stranger in town', 'The child is sharing their own experience.'],
        ],
        answer: 1,
        explain: 'The pronoun "I" shows that the poem is written from the child\'s first-person point of view.',
      }), 1),
    ],
  },
];

export const G1_RLA_LESSONS: Lesson[] = [
  ...G1_RLA_LESSONS_FIRST,
  ...G1_RLA_LESSONS_MORE,
];
