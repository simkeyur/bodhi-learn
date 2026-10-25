// Grade 5 reading walkthroughs. Skills with generators work like math (the example and "your turn" come from
// the generator). Passage skills bring two short samples: one to watch worked, one to try.

import { mcq, sample } from '../rla/author.ts';
import type { Lesson } from '../types.ts';

export const G5_RLA_LESSONS: Lesson[] = [
  // ---------- Generated skills ----------
  {
    code: 'rla:5.3C',
    goal: 'You\'ll learn to use prefixes, suffixes and roots to figure out what a word means.',
    words: [
      { term: 'prefix', meaning: 'A word part added to the beginning of a word, like trans- in transport.' },
      { term: 'suffix', meaning: 'A word part added to the end of a word, like -logy in biology.' },
      { term: 'root', meaning: 'The main part of a word that carries its meaning, like photo in photograph.' },
    ],
    ideas: [
      { title: 'Break the word into parts', text: 'Find a part you know, then think about what is left. **Super** + **sonic** means beyond the speed of sound.', example: 'trans (across) + port (carry) = carry across' },
      { title: 'Learn the common parts', text: '**trans-** means across. **super-** means above or beyond. **-ive** means tending to. **-logy** means the study of. **geo** means earth. **photo** means light.' },
      { title: 'Check it in the sentence', text: 'Put your meaning in place of the word. If the sentence still makes sense, your meaning is probably right.' },
    ],
  },
  {
    code: 'rla:5.2B.vi',
    goal: 'You\'ll learn how adding a suffix can change the spelling of a base word.',
    words: [
      { term: 'base word', meaning: 'A word that a suffix is added to, like hope in hoping.' },
      { term: 'suffix', meaning: 'An ending such as -ing, -ed, -er, -est, -ly or -ness.' },
    ],
    ideas: [
      { title: 'Drop the silent e', text: 'If a word ends in a silent **e**, drop the e before an ending that starts with a vowel.', example: 'hope + ing = hoping · bake + er = baker' },
      { title: 'Double the last consonant', text: 'If a short word ends in one vowel and one consonant, double the consonant before -ed, -ing, -er or -est.', example: 'stop + ed = stopped · big + est = biggest' },
      { title: 'Change y to i', text: 'If a word ends in a consonant and **y**, change the y to i before most endings (but keep it before -ing).', example: 'carry + ed = carried · happy + ness = happiness' },
    ],
  },
  {
    code: 'rla:5.11D.ii',
    goal: 'You\'ll learn the past tense of irregular verbs, the ones that don\'t just add -ed.',
    words: [
      { term: 'past tense', meaning: 'The verb form that tells about something that already happened.' },
      { term: 'irregular verb', meaning: 'A verb whose past tense doesn\'t end in -ed, like go and went.' },
    ],
    ideas: [
      { title: 'Not every verb adds -ed', text: 'Most verbs add -ed (walk, walked), but many common ones change instead.', example: 'go → went · grow → grew · bring → brought · write → wrote' },
      { title: 'Past tense vs. helping verbs', text: 'Some verbs have a different form after has, have or had. Without a helper, use the simple past.', example: 'She **wrote** a letter. · She **has written** a letter.' },
      { title: 'Listen for it', text: 'Read the sentence in your head. "The puppy growed" should sound wrong. Trust your ear, then check.' },
    ],
  },
  {
    code: 'rla:5.11D.iv',
    goal: 'You\'ll learn to use the right form of an adjective when you compare things.',
    words: [
      { term: 'comparative', meaning: 'The form that compares two things: taller, more careful.' },
      { term: 'superlative', meaning: 'The form that compares three or more things: tallest, most careful.' },
    ],
    ideas: [
      { title: 'Two things or more?', text: 'Comparing two? Use **-er** or **more**. Comparing three or more? Use **-est** or **most**.', example: 'Ana is taller than Ben. · Ana is the tallest in the class.' },
      { title: 'Short words and long words', text: 'Short adjectives add -er and -est. Longer ones use more and most. Never use both.', example: 'faster, fastest · more beautiful, most beautiful · not "more taller"' },
      { title: 'Some are irregular', text: 'A few adjectives change completely.', example: 'good, better, best · bad, worse, worst' },
    ],
  },
  {
    code: 'rla:5.11D.i',
    goal: 'You\'ll learn to spot and fix run-ons, comma splices and fragments.',
    words: [
      { term: 'complete sentence', meaning: 'A group of words with a subject and a verb that expresses a complete thought.' },
      { term: 'run-on', meaning: 'Two complete sentences joined with nothing between them.' },
      { term: 'comma splice', meaning: 'Two complete sentences joined with only a comma.' },
      { term: 'fragment', meaning: 'A group of words that is not a complete thought.' },
    ],
    ideas: [
      { title: 'Find the complete thoughts', text: 'Count how many complete thoughts a sentence has. Two thoughts need something to join them.' },
      { title: 'Ways to fix a run-on', text: 'Split it into two sentences, or join the thoughts with a comma and a joining word (and, but, so, or).', example: 'The bus was late, so we missed the first song.' },
      { title: 'Fix a fragment', text: 'A group of words starting with because, when or after needs another complete thought to finish it.', example: '"Because the bus was late." → "Because the bus was late, we missed the first song."' },
    ],
  },
  {
    code: 'rla:5.11D.ix',
    goal: 'You\'ll learn to capitalize abbreviations, initials, acronyms and the names of organizations.',
    words: [
      { term: 'abbreviation', meaning: 'A short form of a word, like Dr. for Doctor.' },
      { term: 'initial', meaning: 'The first letter of a name, like the J. in J. T. Robinson.' },
      { term: 'acronym', meaning: 'A word made from the first letters of other words, like FBI.' },
    ],
    ideas: [
      { title: 'Titles and initials', text: 'Abbreviated titles and initials are capitalized and end with a period.', example: 'Dr. Maria Ortiz · Mr. Daniel Kim · J. T. Robinson' },
      { title: 'Acronyms are all capitals', text: 'Each letter in an acronym stands for a word, so every letter is a capital.', example: 'FBI · YMCA' },
      { title: 'Names of organizations', text: 'Capitalize each important word. Short words like and, of and the stay lowercase unless they come first.', example: 'Texas Parks and Wildlife Department' },
    ],
  },
  {
    code: 'rla:5.11D.iii',
    goal: 'You\'ll learn to match verbs with collective nouns, the nouns that name a group.',
    words: [
      { term: 'collective noun', meaning: 'A noun that names a group as one thing, like team, class, flock or family.' },
      { term: 'subject-verb agreement', meaning: 'Using a singular verb with a singular subject and a plural verb with a plural subject.' },
    ],
    ideas: [
      { title: 'A group acting as one', text: 'A collective noun names a group as one unit, so it usually takes a singular verb.', example: 'The team **is** practicing. · The flock **is** flying south.' },
      { title: 'Watch for "of" phrases', text: 'In "a flock of geese," the subject is flock, not geese. Ignore the "of" phrase when you match the verb.' },
    ],
  },

  // ---------- Passage skills ----------
  {
    code: 'rla:5.8C',
    goal: 'You\'ll learn to find the parts of a plot: rising action, climax, falling action and resolution.',
    words: [
      { term: 'conflict', meaning: 'The main problem a character faces.' },
      { term: 'rising action', meaning: 'Events that build tension as the character tries to solve the problem.' },
      { term: 'climax', meaning: 'The turning point, the most exciting moment.' },
      { term: 'resolution', meaning: 'How the problem is solved or how the story ends.' },
    ],
    ideas: [
      { title: 'Start with the problem', text: 'Ask: what does the main character want, and what is in the way? Everything in the plot connects to that problem.' },
      { title: 'Look for the turning point', text: 'The climax is where things change for good: the character wins, loses, or makes a big choice. After it, the tension drops.' },
      { title: 'Check the ending', text: 'The resolution shows how things turn out, and often how the character has changed.' },
    ],
    samples: [
      sample({
        id: 'g5-sample-plot-1', title: 'The Spelling Bee', genre: 'fiction',
        blocks: [
          { kind: 'p', text: 'Ruby had studied for the spelling bee for weeks, but when she walked on stage, her mind went blank.' },
          { kind: 'p', text: 'One by one, the other spellers sat down after missing words. Soon only Ruby and a boy named Omar were left.' },
          { kind: 'p', text: 'Then the judge read Ruby\'s word: "necessary." Ruby closed her eyes, pictured her flashcard, and spelled it slowly. "Correct!"' },
          { kind: 'p', text: 'Omar missed his next word, and Ruby won. On the way home, she decided she would never be afraid of the stage again.' },
        ],
      }, mcq({
        standard: 'rla:5.8C',
        stem: 'Which event is the climax of the story?',
        choices: ['Ruby studies for weeks.', 'Ruby\'s mind goes blank on stage.', 'Ruby spells "necessary" correctly when only two spellers are left.', 'Ruby walks home.'],
        answer: 2,
        explain: 'The tension builds as spellers sit down until only two are left. The turning point is Ruby spelling her hardest word correctly. After that, the story winds down.',
      }), 5),
      sample({
        id: 'g5-sample-plot-2', title: 'The Lost Kite', genre: 'fiction',
        blocks: [
          { kind: 'p', text: 'Diego\'s new kite climbed higher and higher until a gust of wind snapped the string.' },
          { kind: 'p', text: 'He chased it across the park, past the playground and the pond. The kite drifted lower and landed in the top of an old oak tree.' },
          { kind: 'p', text: 'Diego asked the park ranger for help. She brought a long pole with a hook and, on her third try, pulled the kite free.' },
          { kind: 'p', text: 'Diego thanked her. The next time he flew his kite, he used a stronger string.' },
        ],
      }, mcq({
        standard: 'rla:5.8C',
        stem: 'What is the resolution of the story?',
        choices: ['The wind snaps the kite string.', 'The kite lands in an oak tree.', 'Diego chases the kite across the park.', 'The ranger gets the kite down, and Diego uses a stronger string next time.'],
        answer: 3,
        explain: 'The resolution is how the problem gets solved and how things end: the ranger frees the kite, and Diego learns to use a stronger string.',
      }), 5),
    ],
  },
  {
    code: 'rla:5.9D.i',
    goal: 'You\'ll learn to find the central idea of an informational text and the evidence that supports it.',
    words: [
      { term: 'central idea', meaning: 'The most important idea the whole text is about.' },
      { term: 'supporting evidence', meaning: 'Facts, examples and details that explain or prove the central idea.' },
    ],
    ideas: [
      { title: 'Big enough for the whole text', text: 'The central idea covers every paragraph, not just one. If an answer fits only one paragraph, it is a detail.' },
      { title: 'Use the title and headings', text: 'Titles and headings show the topic. Ask: what is the author saying about that topic?' },
      { title: 'Check the support', text: 'Most details in the text should help explain the central idea. If they do, you found it.' },
    ],
    samples: [
      sample({
        id: 'g5-sample-central-1', title: 'Busy Beavers', genre: 'informational',
        blocks: [
          { kind: 'p', text: 'Beavers are some of nature\'s best builders. With their strong front teeth, they cut down trees and drag the branches into streams.' },
          { kind: 'p', text: 'They pile the branches and pack them with mud to build dams. A dam slows the water and creates a pond.' },
          { kind: 'p', text: 'In the pond, beavers build lodges with underwater doors that keep them safe from predators.' },
        ],
      }, mcq({
        standard: 'rla:5.9D.i',
        stem: 'What is the central idea of the passage?',
        choices: ['Beavers have strong front teeth.', 'Beavers are skilled builders who change the land to make safe homes.', 'Beaver lodges have underwater doors.', 'Streams are full of trees and branches.'],
        answer: 1,
        explain: 'Every paragraph is about beavers building: cutting trees, making dams and building lodges. The other choices are single details.',
      }), 5),
      sample({
        id: 'g5-sample-central-2', title: 'Why We Need Sleep', genre: 'informational',
        blocks: [
          { kind: 'p', text: 'Sleep is not just resting. While you sleep, your brain sorts and stores what you learned during the day.' },
          { kind: 'p', text: 'Sleep also helps your body grow and heal. Children release more growth hormone while they sleep.' },
          { kind: 'p', text: 'Without enough sleep, people have trouble paying attention and get sick more often. Doctors say kids your age need about nine to twelve hours a night.' },
        ],
      }, mcq({
        standard: 'rla:5.9D.i',
        stem: 'Which sentence best states the central idea?',
        choices: ['Doctors say kids need nine to twelve hours of sleep.', 'The brain stores information at night.', 'Sleep is important because it helps both your brain and your body.', 'People who do not sleep get sick.'],
        answer: 2,
        explain: 'The passage explains how sleep helps the brain (paragraph 1) and the body (paragraphs 2 and 3). The other choices are details that support that idea.',
      }), 5),
    ],
  },
  {
    code: 'rla:5.6F',
    goal: 'You\'ll learn to make inferences: smart guesses based on clues in the text and what you already know.',
    words: [
      { term: 'inference', meaning: 'A conclusion you reach from clues in the text plus what you already know.' },
      { term: 'evidence', meaning: 'The words in the text that support your inference.' },
    ],
    ideas: [
      { title: 'Clues + what you know', text: 'Authors don\'t say everything. Put the clues together with what you know about people and the world.', example: 'Text: "Mia\'s umbrella dripped by the door." + You know: umbrellas drip after rain → It was raining.' },
      { title: 'Prove it', text: 'A good inference has evidence. Point to the exact words that led you there.' },
      { title: 'Not too far', text: 'Wrong answers often go beyond the clues. If the text gives no evidence for it, it is a guess, not an inference.' },
    ],
    samples: [
      sample({
        id: 'g5-sample-infer-1', title: 'Moving Day', genre: 'fiction',
        blocks: [
          { kind: 'p', text: 'Jada sat on a cardboard box in her empty bedroom. The walls looked strange without her posters.' },
          { kind: 'p', text: 'She ran her fingers over the pencil marks by the door, where her dad had measured her height every birthday. She did not want to leave them behind.' },
          { kind: 'p', text: 'Outside, the truck driver honked twice. Jada wiped her eyes and walked slowly down the stairs.' },
        ],
      }, mcq({
        standard: 'rla:5.6F',
        stem: 'How does Jada most likely feel about moving?',
        choices: ['Excited to see her new room', 'Sad to leave her home', 'Angry at the truck driver', 'Bored from packing all day'],
        answer: 1,
        explain: 'Clues: she doesn\'t want to leave the pencil marks, she wipes her eyes, and she walks slowly. Together they show she is sad to leave.',
      }), 5),
      sample({
        id: 'g5-sample-infer-2', title: 'The Science Fair', genre: 'fiction',
        blocks: [
          { kind: 'p', text: 'Marcus glued the last label onto his poster at 11 p.m. His volcano model sat on the kitchen table, still wet with paint.' },
          { kind: 'p', text: 'The next morning, he yawned through breakfast and nearly fell asleep on the bus. He held the volcano on his lap the whole way, both hands wrapped around the base.' },
        ],
      }, mcq({
        standard: 'rla:5.6F',
        stem: 'Which inference is best supported by the passage?',
        choices: ['Marcus finished his project at the last minute.', 'Marcus does not like science.', 'Marcus\'s volcano will win first prize.', 'Marcus forgot his project at home.'],
        answer: 0,
        explain: 'He glued the last label at 11 p.m., the paint was still wet, and he was tired the next morning. He finished just before the fair. Nothing tells us he will win.',
      }), 5),
    ],
  },
];
