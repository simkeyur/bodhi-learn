// Grade 1 writing walkthroughs (part 2: Strand 2 Writing, 17 standards).

import { mcq, sample } from '../rla/author.ts';
import type { Lesson } from '../types.ts';
import { MINI_ANT, MINI_CAT, MINI_DRAFT_DOG, MINI_FROGS, MINI_NEST } from './g1-rla-passages.ts';

export const G1_RLA_LESSONS_MORE: Lesson[] = [
  {
    code: 'rla:1.2C.i',
    goal: 'You will learn to spell words with closed, open, silent e, and vowel team patterns.',
    words: [
      { term: 'spelling pattern', meaning: 'The regular way sounds are spelled in words.' },
    ],
    ideas: [
      { title: 'Check the vowel sound', text: 'Short vowels need a closing consonant (c-a-t). Long vowels often use silent e (h-o-m-e) or vowel teams (t-r-e-e).' },
      { title: 'Say sounds slowly', text: 'Stretch each sound in the word before writing down the letters.' },
    ],
  },
  {
    code: 'rla:1.2C.ii',
    goal: 'You will learn to spell words with initial and final consonant blends and digraphs.',
    words: [
      { term: 'blend', meaning: 'Two consonants whose sounds blend together, like st in fast.' },
      { term: 'digraph', meaning: 'Two letters making one sound, like sh in fish.' },
    ],
    ideas: [
      { title: 'Listen for both sounds in blends', text: 'In st, pl, and bl, both consonant sounds are pronounced and written.' },
      { title: 'Remember digraph pairs', text: 'Sh, ch, and th are teams of two letters for one sound.' },
    ],
  },
  {
    code: 'rla:1.2C.iii',
    goal: 'You will learn to spell words using common sound-spelling patterns.',
    words: [
      { term: 'sound-spelling', meaning: 'Matching sounds to letters to spell words correctly.' },
    ],
    ideas: [
      { title: 'Sound it out', text: 'Break the word into beginning, middle, and ending sounds.' },
      { title: 'Use word families', text: 'If you can spell cat, you can spell bat, hat, and mat.' },
    ],
  },
  {
    code: 'rla:1.2C.iv',
    goal: 'You will learn to spell grade 1 high-frequency words.',
    words: [
      { term: 'sight word', meaning: 'A high-frequency word you know how to read and spell by heart.' },
    ],
    ideas: [
      { title: 'Memorize tricky parts', text: 'Some words like they and said have tricky vowel spellings to memorize.' },
      { title: 'Write and check', text: 'Practice writing the word from memory and check your spelling.' },
    ],
  },
  {
    code: 'rla:1.11B.i',
    goal: 'You will learn to organize drafts with a clear beginning, middle, and end.',
    words: [
      { term: 'organization', meaning: 'Putting ideas in a clear and logical order.' },
    ],
    ideas: [
      { title: 'Follow a sequence', text: 'Tell events in the order they happened using words like first, next, and then.' },
      { title: 'Keep related ideas together', text: 'Put sentences that talk about the same idea next to each other.' },
    ],
    samples: [
      sample(MINI_DRAFT_DOG, mcq({
        standard: 'rla:1.11B.i', cites: [2],
        stem: 'Which sentence could best be added after sentence 2 to tell more about playing ball?',
        choices: [
          'He wags his tail each time he brings the ball back.',
          ['Winter snow covers the sidewalk in January.', 'Winter snow does not fit a sunny ball game.'],
          ['My teacher gave us new spelling words.', 'Spelling words are unrelated to playing with a puppy.'],
          ['Bicycles have two black rubber tires.', 'Bicycles are off-topic.'],
        ],
        answer: 0,
        explain: 'Adding that he brings the ball back fits the topic of playing catch with the puppy.',
      }), 1),
      sample(MINI_DRAFT_DOG, mcq({
        standard: 'rla:1.11B.i', cites: [1],
        stem: 'Sentence 1 is a good opening sentence because it—',
        choices: [
          'introduces the main character of the draft, Max the dog',
          ['lists five different chores to do on a farm', 'The draft is about a puppy, not chores.'],
          ['asks the reader a difficult math riddle', 'It is an opening statement, not a math riddle.'],
          ['explains why winter is the coldest season', 'The draft is about a puppy.'],
        ],
        answer: 0,
        explain: 'Sentence 1 introduces the dog Max, giving the draft a clear beginning.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.11B.ii',
    goal: 'You will learn to develop an idea in drafts by adding specific and relevant details.',
    words: [
      { term: 'detail', meaning: 'Specific information that tells more about a person, place, or event.' },
    ],
    ideas: [
      { title: 'Paint a clear picture', text: 'Use color, size, and action words so readers can picture the scene.' },
      { title: 'Stay on topic', text: 'Add details that connect directly to the main idea of the story.' },
    ],
    samples: [
      sample(MINI_DRAFT_DOG, mcq({
        standard: 'rla:1.11B.ii', cites: [1],
        stem: 'Which detail in sentence 1 helps the reader picture the dog Max?',
        choices: [
          'He is described as a playful brown puppy.',
          ['He has green wheels.', 'Dogs do not have wheels.'],
          ['He lives on a spaceship.', 'Max lives at home.'],
          ['He can fly through clouds.', 'Dogs cannot fly.'],
        ],
        answer: 0,
        explain: 'Describing him as a playful brown puppy gives specific visual and personality details.',
      }), 1),
      sample(MINI_DRAFT_DOG, mcq({
        standard: 'rla:1.11B.ii', cites: [2],
        stem: 'In sentence 2, what detail tells what kind of ball Max chases?',
        choices: [
          ['a huge metal bowling ball', 'Max chases a toy rubber ball.'],
          'a red rubber ball',
          ['a soccer ball kicked over a fence', 'The ball is described as red rubber.'],
          ['a paper balloon floating in the air', 'Max plays with a rubber ball.'],
        ],
        answer: 1,
        explain: 'Sentence 2 specifically describes the ball as a red rubber ball.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.11C',
    goal: 'You will learn to revise drafts by adding details in words to make sentences stronger.',
    words: [
      { term: 'revise', meaning: 'To make changes to writing to make it clearer and more interesting.' },
    ],
    ideas: [
      { title: 'Add descriptive words', text: 'Replace plain words with vivid words that describe color, size, and feeling.' },
      { title: 'Read your draft aloud', text: 'Listening to your writing helps you find spots where more detail is needed.' },
    ],
  },
  {
    code: 'rla:1.11D.i',
    goal: 'You will learn to write complete sentences with subject-verb agreement.',
    words: [
      { term: 'complete sentence', meaning: 'A group of words that expresses a full thought with a naming part and an action part.' },
      { term: 'subject-verb agreement', meaning: 'Matching singular subjects with singular verbs (the cat runs, cats run).' },
    ],
    ideas: [
      { title: 'Check singular and plural', text: 'One puppy runs (add -s to verb). Two puppies run (no -s on verb).' },
      { title: 'Make sure it is complete', text: 'A complete sentence tells who or what did something.' },
    ],
  },
  {
    code: 'rla:1.11D.ii',
    goal: 'You will learn to use past and present verb tense correctly in drafts.',
    words: [
      { term: 'verb tense', meaning: 'The form of a verb that shows when an action happens (past or present).' },
    ],
    ideas: [
      { title: 'Look for time clue words', text: 'Yesterday means past tense (played). Today or now means present tense (plays).' },
      { title: 'Keep tenses consistent', text: 'Do not switch back and forth between past and present in the same paragraph.' },
    ],
  },
  {
    code: 'rla:1.11D.iii',
    goal: 'You will learn to use singular, plural, common, and proper nouns correctly.',
    words: [
      { term: 'noun', meaning: 'A word that names a person, place, or thing.' },
      { term: 'proper noun', meaning: 'The specific name of a person, place, or holiday, always capitalized.' },
    ],
    ideas: [
      { title: 'Add -s for more than one', text: 'One cow, five cows. One dog, two dogs.' },
      { title: 'Capitalize special names', text: 'Names of people (Max, Leo) and places (Texas) must be capitalized.' },
    ],
  },
  {
    code: 'rla:1.11D.iv',
    goal: 'You will learn to use adjectives and articles (a, an, the) correctly.',
    words: [
      { term: 'adjective', meaning: 'A describing word that tells what kind, which one, or how many.' },
      { term: 'article', meaning: 'Special words like a, an, and the that come before nouns.' },
    ],
    ideas: [
      { title: 'Use an before vowels', text: 'Say "an apple" and "an egg," but "a ball" and "a dog."' },
      { title: 'Use the for specific things', text: 'Use "the" when you are talking about a specific item.' },
    ],
  },
  {
    code: 'rla:1.11D.v',
    goal: 'You will learn to use adverbs that convey time such as today, now, soon, and yesterday.',
    words: [
      { term: 'time adverb', meaning: 'A word telling when an action happens, like soon, now, or yesterday.' },
    ],
    ideas: [
      { title: 'Answer when', text: 'Words like today, now, and soon tell when something occurs.' },
      { title: 'Place for smooth reading', text: 'Time words often sound best at the beginning or end of a sentence.' },
    ],
  },
  {
    code: 'rla:1.11D.vi',
    goal: 'You will learn to use prepositions like in, on, under, and with.',
    words: [
      { term: 'preposition', meaning: 'A word that shows position or location, like in, on, or under.' },
    ],
    ideas: [
      { title: 'Show where things are', text: 'The puppy is under the porch. The book is on the desk.' },
      { title: 'Check the meaning', text: 'Make sure the preposition clearly shows the location.' },
    ],
  },
  {
    code: 'rla:1.11D.vii',
    goal: 'You will learn to use pronouns correctly: I, me, he, she, they, and we.',
    words: [
      { term: 'pronoun', meaning: 'A word that takes the place of a noun, like he for Carlos.' },
    ],
    ideas: [
      { title: 'Use subject pronouns for the actor', text: 'He, she, we, and they do the action.' },
      { title: 'Use object pronouns after verbs', text: 'Give the ball to me or help him.' },
    ],
  },
  {
    code: 'rla:1.11D.viii',
    goal: 'You will learn to capitalize the beginning of sentences and the pronoun "I".',
    words: [
      { term: 'capital letter', meaning: 'An uppercase letter used at the start of a sentence or for the word I.' },
    ],
    ideas: [
      { title: 'Every sentence starts with a capital', text: 'Always check that the first letter of every sentence is uppercase.' },
      { title: 'The pronoun I is always capital', text: 'Never write a lowercase i when referring to yourself.' },
    ],
  },
  {
    code: 'rla:1.11D.ix',
    goal: 'You will learn to use end punctuation marks (. ! ?) correctly.',
    words: [
      { term: 'period', meaning: 'An end mark (.) used for telling sentences (statements).' },
      { term: 'question mark', meaning: 'An end mark (?) used for asking sentences.' },
      { term: 'exclamation mark', meaning: 'An end mark (!) used for excited or urgent sentences.' },
    ],
    ideas: [
      { title: 'Check sentence type', text: 'Telling sentences get periods. Questions get question marks. Excited sentences get exclamation marks.' },
      { title: 'Never leave the end bare', text: 'Every complete sentence must finish with an end mark.' },
    ],
  },
  {
    code: 'rla:1.11D.x',
    goal: 'You will learn to edit spelling for grade 1 and high-frequency words.',
    words: [
      { term: 'edit', meaning: 'Checking writing for spelling, capitalization, and punctuation mistakes.' },
    ],
    ideas: [
      { title: 'Check each word carefully', text: 'Read your draft slowly word by word to spot spelling errors.' },
      { title: 'Use word patterns you know', text: 'Check short vowels, silent e, and common sight words.' },
    ],
  },
  {
    code: 'rla:1.7C',
    goal: 'You will learn to find the sentence that proves your answer.',
    words: [
      { term: 'evidence', meaning: 'The words in the text that show your answer is right.' },
    ],
    ideas: [
      { title: 'Answer first', text: 'Think of your answer to the question.' },
      { title: 'Find the words', text: 'Look back and find the sentence that shows your answer is right.' },
    ],
    samples: [
      sample(MINI_CAT, mcq({
        standard: 'rla:1.7C',
        stem: 'Which sentence shows that Sam moves fast?',
        choices: ['"Sam ran after it as fast as his little legs could carry him."', '"He tapped the ball with his tiny white paw."', '"The ball rolled under a wooden bench and stopped."', '"Sam the kitten loved playing in the sunny backyard."'],
        answer: 0,
        explain: 'The words "as fast as his little legs could carry him" prove that Sam moves fast.',
      }), 1),
      sample(MINI_NEST, mcq({
        standard: 'rla:1.7C',
        stem: 'Which sentence shows that both robins help build the nest?',
        choices: ['"Finally, they line the inside of the nest with soft feathers."', '"In the springtime, mother and father robins work together to make a warm nest."', '"Now the cozy nest is ready."', '"They carry these building supplies in their beaks."'],
        answer: 1,
        explain: 'The words "mother and father robins work together" prove that both robins help.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.7D',
    goal: 'You will learn to retell a story in order, using your own words.',
    words: [
      { term: 'retell', meaning: 'To tell what happened in a story, in order.' },
    ],
    ideas: [
      { title: 'Beginning, middle, end', text: 'Tell what happens first, next, and last.' },
      { title: 'Keep it short', text: 'Tell only the big things that happen.' },
    ],
    samples: [
      sample(MINI_ANT, mcq({
        standard: 'rla:1.7D',
        stem: 'Which tells the story in the right order?',
        choices: ['The ant falls in the water. The dove drops a leaf. The ant is safe.', 'The ant is safe. The ant falls in the water. The dove drops a leaf.', 'The dove falls in the water. The ant drops a leaf.', 'The ant climbs a tree. The dove flies away.'],
        answer: 0,
        explain: 'First the ant falls in, next the dove drops a leaf, and last the ant is safe.',
      }), 1),
      sample(MINI_FROGS, mcq({
        standard: 'rla:1.7D',
        stem: 'Which tells what happens in the right order?',
        choices: ['A frog lays a tadpole. The tadpole grows a tail.', 'A frog turns into an egg.', 'An egg becomes a tadpole. The tadpole grows legs. It becomes a frog.', 'Legs grow first. Then the egg hatches.'],
        answer: 2,
        explain: 'First there is an egg, then a tadpole, then a frog.',
      }), 1),
    ],
  },
  {
    code: 'rla:1.8A',
    goal: 'You will learn to find the theme, or lesson, of a story.',
    words: [
      { term: 'theme', meaning: 'The big lesson of a story.' },
    ],
    ideas: [
      { title: 'What is the lesson?', text: 'Think about what the characters learn.' },
      { title: 'Look for proof', text: 'Find what happens in the story that shows the lesson.' },
    ],
    samples: [
      sample(MINI_ANT, mcq({
        standard: 'rla:1.8A',
        stem: 'What can we learn from the dove?',
        choices: ['Birds like leaves.', 'Rivers are deep.', 'We should help others in trouble.', 'Ants are small.'],
        answer: 2,
        explain: 'The dove helps the ant, and the ant is saved. The lesson is to help others.',
      }), 1),
      sample(MINI_CAT, mcq({
        standard: 'rla:1.8A',
        stem: 'What is this story mostly about?',
        choices: ['a kitten having fun with a ball', 'a dog at the park', 'a bench that breaks', 'a garden with bees'],
        answer: 0,
        explain: 'Every part of the story is about Sam and his ball. That is the topic.',
      }), 1),
    ],
  },
];
