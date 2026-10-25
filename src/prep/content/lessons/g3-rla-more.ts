// Grade 3 reading walkthroughs (part 2: 3.10C through 3.11D.xi).

import { mcq, sample } from '../rla/author.ts';
import type { Lesson } from '../types.ts';
import { ARMADILLO, CAMP, DRAFT_ROBOT, LEMONADE, RECYCLE, STORM_POEM, TALL_TALE } from './g3-rla-passages.ts';

export const G3_RLA_LESSONS_MORE: Lesson[] = [
  {
    code: 'rla:3.10C',
    goal: 'You will learn how authors use print and graphic features like subheadings and sidebars to help readers.',
    words: [
      { term: 'print feature', meaning: 'Design elements like bold words, subheadings, and sidebars.' },
      { term: 'sidebar', meaning: 'A short box of extra facts placed beside the main text.' },
    ],
    ideas: [
      { title: 'Subheadings preview topics', text: 'Subheadings tell you what each section of text will be about before you read it.' },
      { title: 'Sidebars provide quick facts', text: 'Sidebars offer interesting extra details or facts that expand on the main article.' },
    ],
    samples: [
      sample(ARMADILLO, mcq({
        standard: 'rla:3.10C', cites: [3],
        stem: 'Why did the author include the sidebar "Fast Fact"?',
        choices: [
          'To share an interesting extra detail about how armadillos give birth to identical quadruplets.',
          ['To describe what armadillos eat.', 'The main text already describes their insect diet.'],
          ['To warn readers not to touch wild armadillos.', 'No warning is mentioned in the sidebar.'],
          ['To list all the state symbols of Texas.', 'Only the armadillo is mentioned.'],
        ],
        answer: 0,
        explain: 'The sidebar highlights the fascinating biological fact that female nine-banded armadillos give birth to identical quadruplets.',
      }), 4),
      sample(ARMADILLO, mcq({
        standard: 'rla:3.10C', cites: [1],
        stem: 'What is the purpose of the bold heading "Armor on Four Legs"?',
        choices: [
          'To introduce the section describing the armadillo\'s protective bony shell.',
          ['To explain why armadillos have poor eyesight.', 'Eyesight is discussed in the second paragraph.'],
          ['To prove that armadillos lived with dinosaurs.', 'The text says they look like prehistoric relics, not that they lived with dinosaurs.'],
          ['To provide a recipe for cooking wild game.', 'This is completely unrelated.'],
        ],
        answer: 0,
        explain: 'The heading prepares the reader for information about the armadillo\'s protective bony plates.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.10D',
    goal: 'You will learn to explain how imagery, figurative language, and sound devices achieve specific purposes.',
    words: [
      { term: 'simile', meaning: 'A comparison between two unlike things using like or as.' },
      { term: 'onomatopoeia', meaning: 'Words that imitate sounds, such as boom, buzz, or splash.' },
      { term: 'imagery', meaning: 'Vivid sensory words that appeal to sight, sound, smell, taste, or touch.' },
    ],
    ideas: [
      { title: 'Picture sensory images', text: 'Sensory words help readers visualize scenes and feel emotional atmosphere.' },
      { title: 'Listen for sound devices', text: 'Words like "Boom!" imitate loud noises and make descriptions more exciting.' },
    ],
    samples: [
      sample(STORM_POEM, mcq({
        standard: 'rla:3.10D', cites: [5],
        stem: 'In line 5, why does the poet use the word "Boom!"?',
        choices: [
          'To use onomatopoeia that imitates the sudden, loud crash of thunder.',
          ['To show that an airplane landed in the pasture.', 'The poem is describing a thunderstorm, not an airplane.'],
          ['To explain why cattle enjoy sleeping outside.', 'The noise wakes the cattle up.'],
          ['To tell the reader to turn on a radio.', 'No radio is mentioned.'],
        ],
        answer: 0,
        explain: '"Boom!" is an example of onomatopoeia that mimics the explosive sound of a lightning crack and thunder roll.',
      }), 4),
      sample(STORM_POEM, mcq({
        standard: 'rla:3.10D', cites: [7],
        stem: 'Which sense does the poet appeal to in line 7 ("Raindrops patter on the tin roof shed")?',
        choices: [
          'The sense of hearing.',
          ['The sense of smell.', 'Line 7 focuses on the tapping sound of raindrops, not scent.'],
          ['The sense of taste.', 'The line does not describe eating or tasting anything.'],
          ['The sense of sight.', 'Pattering describes the gentle sound of rainfall.'],
        ],
        answer: 0,
        explain: 'The word "patter" creates an auditory image appealing directly to the reader\'s sense of hearing.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.10E',
    goal: 'You will learn to identify first-person and third-person points of view in stories.',
    words: [
      { term: 'first-person', meaning: 'Told by a character inside the story using I, me, and we.' },
      { term: 'third-person', meaning: 'Told by an outside narrator using he, she, and they.' },
    ],
    ideas: [
      { title: 'Check narrator pronouns', text: 'Look at the pronouns outside dialogue. If the narrator says "I unpacked my bag," it is first person.' },
      { title: 'Notice narrator perspective', text: 'A first-person narrator shares private thoughts and feelings directly with the reader.' },
    ],
    samples: [
      sample(CAMP, mcq({
        standard: 'rla:3.10E', cites: [1],
        stem: 'How can the reader tell that "First Night at Camp" is written in the first-person point of view?',
        choices: [
          'The narrator uses words like "I" and "my" to describe personal feelings about camping.',
          ['The story is written in rhyming stanzas.', 'The story is in prose paragraphs, not rhyming stanzas.'],
          ['An outside narrator describes everyone from above.', 'The narrator is a character participating directly in the story.'],
          ['The author uses stage directions and character tags.', 'This is a narrative story, not a play.'],
        ],
        answer: 0,
        explain: 'Using first-person pronouns like "I" and "my" to recount personal experiences defines first-person narration.',
      }), 4),
      sample(LEMONADE, mcq({
        standard: 'rla:3.10E', cites: [1],
        stem: 'From which point of view is "The Lemonade Stand" told?',
        choices: [
          'Third-person point of view, told by an outside narrator who refers to Elena and Mateo by name.',
          ['First-person point of view, told directly by Mateo.', 'Mateo does not narrate the story using "I."'],
          ['First-person point of view, told directly by Elena.', 'Elena is referred to as "she," not "I."'],
          ['Second-person point of view, addressing the reader as "you."', 'The narrator tells a story about characters rather than "you."'],
        ],
        answer: 0,
        explain: 'An outside narrator tells the story using third-person pronouns ("she," "he," "her") and characters\' names.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.10F',
    goal: 'You will learn to explain how an author\'s word choice shapes the voice of a text.',
    words: [
      { term: 'voice', meaning: 'The distinct personality and style of the writer or speaker that comes through the words.' },
      { term: 'word choice', meaning: 'The specific words an author chooses to create mood and attitude.' },
    ],
    ideas: [
      { title: 'Notice tone and attitude', text: 'Does the author sound urgent, serious, funny, or energetic? Word choice creates that feeling.' },
      { title: 'Look at enthusiasm', text: 'Action verbs and exclamation marks create an urgent, persuasive voice.' },
    ],
    samples: [
      sample(CAMP, mcq({
        standard: 'rla:3.10F', cites: [1],
        stem: 'How does the opening sentence ("I have never considered myself an outdoors person") help establish the narrator\'s voice?',
        choices: [
          'It creates a humorous, candid, and relatable tone about disliking nature.',
          ['It makes the narrator sound like a strict forest ranger.', 'The narrator dislikes camping, unlike a ranger.'],
          ['It suggests the narrator is deeply interested in hunting.', 'The narrator prefers air conditioning and sofas.'],
          ['It makes the narrator sound like a scientist writing a textbook.', 'The tone is personal and conversational.'],
        ],
        answer: 0,
        explain: 'Humorously admitting a preference for indoor comforts creates a warm, candid, and relatable voice.',
      }), 4),
      sample(RECYCLE, mcq({
        standard: 'rla:3.10F', cites: [3],
        stem: 'In paragraph 3, the sentence "Drop your clean cans into the blue bins and help our school protect planet Earth!" creates a voice that is—',
        choices: [
          'Passionate, motivating, and encouraging teamwork.',
          ['Angry and accusing students of breaking cafeteria rules.', 'The author encourages students positively.'],
          ['Bored and indifferent about the environment.', 'The exclamation mark and strong words show caring.'],
          ['Sarcastic and joking about pollution.', 'The message is earnest and sincere.'],
        ],
        answer: 0,
        explain: 'Directly calling on fellow students to help protect planet Earth demonstrates an inspiring and motivating voice.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.10G',
    goal: 'You will learn to identify and explain the use of hyperbole in texts.',
    words: [
      { term: 'hyperbole', meaning: 'An intentional, extreme exaggeration used for emphasis or humor.' },
    ],
    ideas: [
      { title: 'Spot impossible feats', text: 'Hyperbole describes things that could never literally happen in real life.' },
      { title: 'Notice the humor', text: 'Tall tales use hyperbole to make heroes appear larger than life and entertain readers.' },
    ],
    samples: [
      sample(TALL_TALE, mcq({
        standard: 'rla:3.10G', cites: [1],
        stem: 'Which detail from paragraph 1 is an example of hyperbole?',
        choices: [
          'Bill used a rattlesnake as a lasso and rode a wild mountain lion.',
          ['Folks still tell stories out in West Texas.', 'People do tell folktales in Texas.'],
          ['Bill grew up on the desert plains.', 'Growing up in Texas is realistic.'],
          ['A green tornado spun down from the sky.', 'Severe storms do happen on the plains.'],
        ],
        answer: 0,
        explain: 'Roping cattle with a live venomous snake and riding a mountain lion are extreme exaggerations meant to entertain.',
      }), 4),
      sample(TALL_TALE, mcq({
        standard: 'rla:3.10G', cites: [2],
        stem: 'Why does the author use hyperbole when describing Bill riding the tornado?',
        choices: [
          'To make Pecos Bill seem superhuman, funny, and larger than life.',
          ['To teach students how to stay safe during severe weather.', 'Riding a tornado is impossible fantasy, not safety advice.'],
          ['To explain the scientific atmospheric causes of wind storms.', 'Tall tales are exaggerated legends, not science lessons.'],
          ['To argue that cowboys should work as meteorologists.', 'No career argument is being made.'],
        ],
        answer: 0,
        explain: 'Riding a tornado like a bucking horse is a classic tall-tale exaggeration that shows the hero\'s immense mythical power.',
      }), 4),
    ],
  },

  // Generated spelling standards
  {
    code: 'rla:3.2B.i',
    goal: 'You will learn to spell words with closed, open, VCe, vowel team, r-controlled, and final stable syllables.',
    words: [
      { term: 'closed syllable', meaning: 'A syllable ending in a consonant with a short vowel, like bas- in basket.' },
      { term: 'open syllable', meaning: 'A syllable ending in a vowel with a long sound, like mu- in music.' },
      { term: 'final stable syllable', meaning: 'A predictable ending syllable like -ble, -dle, or -tion.' },
    ],
    ideas: [
      { title: 'Break into syllables', text: 'Say the word slowly and clap out each syllable. Identify the vowel pattern in each chunk.' },
      { title: 'Check the syllable type', text: 'VCe syllables end in silent e. Vowel teams use two vowels together (ai, oa, ee).' },
    ],
  },
  {
    code: 'rla:3.2B.ii',
    goal: 'You will learn to spell homophones correctly based on their meaning in a sentence.',
    words: [
      { term: 'homophone', meaning: 'Words that sound the same but have different spellings and meanings, like reign and rain.' },
    ],
    ideas: [
      { title: 'Think about meaning', text: 'Always check what the sentence is saying. A queen reigns, but water falls as rain.' },
      { title: 'Picture memory clues', text: 'Flour has an "o-u" like soup for baking, while a flower grows in a garden.' },
    ],
  },
  {
    code: 'rla:3.2B.iii',
    goal: 'You will learn to spell multisyllabic words with multiple sound-spelling patterns.',
    words: [
      { term: 'multisyllabic', meaning: 'A word with three or more syllables, like ad-ven-ture.' },
    ],
    ideas: [
      { title: 'Tackle words part by part', text: 'Break long words into prefixes, base roots, and suffixes to spell each section accurately.' },
      { title: 'Watch common endings', text: 'Many long words end in predictable chunks like -ture, -tion, or -ity.' },
    ],
  },
  {
    code: 'rla:3.2B.iv',
    goal: 'You will learn syllable division patterns (VC/CV, V/CV, VC/V) to spell words accurately.',
    words: [
      { term: 'syllable division', meaning: 'Splitting words between consonants or vowels to identify sounds.' },
    ],
    ideas: [
      { title: 'Divide between double consonants', text: 'In words like rab-bit or traf-fic (VC/CV), divide between the two consonants.' },
      { title: 'Check open versus closed', text: 'In pi-lot (V/CV), divide after the vowel so the vowel is long.' },
    ],
  },
  {
    code: 'rla:3.2B.v',
    goal: 'You will learn to spell words using knowledge of prefixes like mis-, sub-, un-, re-, and dis-.',
    words: [
      { term: 'prefix', meaning: 'A letter or group of letters added to the beginning of a base word.' },
    ],
    ideas: [
      { title: 'Keep the base word whole', text: 'When you add a prefix, do not change the spelling of the base word: mis + spell = misspell.' },
      { title: 'Know the meanings', text: 'Mis- means wrong. Sub- means under. Re- means again. Un- and dis- mean not or opposite.' },
    ],
  },
  {
    code: 'rla:3.2B.vi',
    goal: 'You will learn how adding suffixes changes base words (dropping e, changing y to i, doubling consonants).',
    words: [
      { term: 'suffix', meaning: 'An ending added to a word, like -ing, -ed, -er, or -est.' },
    ],
    ideas: [
      { title: 'Drop the silent e', text: 'Drop the final e before a suffix starting with a vowel: dance + ing = dancing.' },
      { title: 'Double the consonant', text: 'Double the final consonant in short one-vowel words: jog + ing = jogging.' },
      { title: 'Change y to i', text: 'Change y to i before -ed or -est: tidy + ed = tidied.' },
    ],
  },
  {
    code: 'rla:3.2B.vii',
    goal: 'You will learn to spell words with silent letters such as kn, wr, gn, and mb.',
    words: [
      { term: 'silent letter', meaning: 'A letter in a word that is written but not spoken aloud, like the k in knight.' },
    ],
    ideas: [
      { title: 'Memorize silent pairs', text: 'K is silent before n (knee, knife, knot). W is silent before r (wrap, write, wrist).' },
      { title: 'Check the end of words', text: 'B is silent after m at the end of words (climb, thumb, crumb).' },
    ],
  },

  // Drafting and revising standards
  {
    code: 'rla:3.11B.i',
    goal: 'You will learn to organize drafts with clear introductions, purposeful transitions, and strong conclusions.',
    words: [
      { term: 'transition', meaning: 'A word or phrase that connects ideas smoothly, like furthermore, next, or however.' },
    ],
    ideas: [
      { title: 'Guide the reader', text: 'Use time transitions (first, next, finally) for steps, and cause-and-effect transitions (as a result, therefore) for results.' },
      { title: 'Use a comma after transitions', text: 'Introductory transitions at the beginning of a sentence are followed by a comma.' },
    ],
  },
  {
    code: 'rla:3.11B.ii',
    goal: 'You will learn to develop drafts by adding engaging and relevant supporting details.',
    words: [
      { term: 'supporting detail', meaning: 'Specific facts, examples, or sensory descriptions that back up a main idea.' },
    ],
    ideas: [
      { title: 'Ask what is missing', text: 'A strong supporting detail answers questions like how, why, or what does it look like.' },
      { title: 'Avoid unrelated facts', text: 'Make sure every added detail directly connects to the main topic of the paragraph.' },
    ],
    samples: [
      sample(DRAFT_ROBOT, mcq({
        standard: 'rla:3.11B.ii', cites: [2],
        stem: 'The writer wants to add a detail after sentence 2. Which sentence would best develop the description of Sparky?',
        choices: [
          'The small yellow lights blinked whenever the robot turned a sharp corner.',
          ['Robots were first invented many decades ago.', 'This is general history, not a description of Sparky.'],
          ['Cardboard boxes can be recycled at school.', 'Where boxes go after use is an unrelated fact.'],
          ['Some students walked home after school.', 'Walking home is completely irrelevant.'],
        ],
        answer: 0,
        explain: 'Describing how the yellow LED lights blinked adds a vivid, engaging detail that directly supports sentence 2.',
      }), 4),
      sample(DRAFT_ROBOT, mcq({
        standard: 'rla:3.11B.ii', cites: [5],
        stem: 'Which detail would best support sentence 5 by showing how the rubber bands helped Sparky?',
        choices: [
          'The textured rubber gripped the slick tile firmly, stopping Sparky from sliding sideways.',
          ['Tabletops are usually made of wood or plastic.', 'This describes classroom furniture rather than the robot.'],
          ['Our school mascot is a fierce Texas panther.', 'School mascots are unrelated to the science project.'],
          ['Rubber comes from tropical tree sap.', 'This is an unrelated manufacturing fact.'],
        ],
        answer: 0,
        explain: 'Explaining how the textured rubber gripped the slick floor provides direct evidence of how the problem was solved.',
      }), 4),
    ],
  },
  {
    code: 'rla:3.11C',
    goal: 'You will learn to revise drafts to improve sentence structure and word choice by adding, deleting, and combining ideas.',
    words: [
      { term: 'revision', meaning: 'Changing sentences to improve clarity, flow, and word choice.' },
      { term: 'combine sentences', meaning: 'Joining two short, choppy sentences into one smooth compound or complex sentence.' },
    ],
    ideas: [
      { title: 'Combine choppy thoughts', text: 'Use joining words like and, but, because, or while to connect related sentences.' },
      { title: 'Delete repetition', text: 'Remove words that repeat the same idea without adding new meaning.' },
    ],
    samples: [
      sample(DRAFT_ROBOT, mcq({
        standard: 'rla:3.11C', cites: [1, 2],
        stem: 'What is the most effective way to combine sentences 1 and 2?',
        choices: [
          'Last week, my team built a miniature science-fair robot named Sparky because it has bright yellow LED eyes.',
          ['My team built a robot, we named it Sparky.', 'This is a comma splice.'],
          ['We built a robot and named it and had yellow lights and built it last week.', 'This strings too many thoughts together with "and."'],
          ['Named Sparky, robots were built by our team last week.', 'This creates an awkward passive structure.'],
        ],
        answer: 0,
        explain: 'Combining the two thoughts into a single complex sentence smoothly connects the project to the robot\'s name and appearance.',
      }), 4),
      sample(DRAFT_ROBOT, mcq({
        standard: 'rla:3.11C', cites: [6],
        stem: 'What is the best revision of sentence 6 to improve descriptive word choice?',
        choices: [
          'Finally, Sparky smoothly navigated through the wooden maze without bumping into any obstacles.',
          ['Sparky went through the maze and did it really good.', 'This uses vague, informal phrasing.'],
          ['The moving through the maze was what Sparky did.', 'This is awkward and wordy.'],
          ['Sparky went because the maze was there.', 'This lacks descriptive detail.'],
        ],
        answer: 0,
        explain: 'Adding the descriptive adverb "smoothly" and specific noun "obstacles" enhances the clarity and vocabulary of the sentence.',
      }), 4),
    ],
  },

  // Generated editing standards
  {
    code: 'rla:3.11D',
    goal: 'You will learn to edit drafts using standard English conventions.',
    words: [
      { term: 'conventions', meaning: 'Rules of grammar, punctuation, capitalization, and spelling in written English.' },
    ],
    ideas: [
      { title: 'Proofread carefully', text: 'Read sentences one at a time to check for missing punctuation, run-ons, and spelling errors.' },
      { title: 'Check apostrophes and commas', text: 'Ensure commas appear before conjunctions in compound sentences and apostrophes mark possession.' },
    ],
  },
  {
    code: 'rla:3.11D.i',
    goal: 'You will learn to edit drafts for complete simple and compound sentences, avoiding run-ons and fragments.',
    words: [
      { term: 'compound sentence', meaning: 'Two complete thoughts joined with a comma and coordinating conjunction (FANBOYS).' },
      { term: 'run-on', meaning: 'Two sentences joined together without proper punctuation or conjunctions.' },
      { term: 'fragment', meaning: 'An incomplete sentence missing a subject, verb, or complete thought.' },
    ],
    ideas: [
      { title: 'Find the two thoughts', text: 'A compound sentence must have two independent clauses that could each stand alone.' },
      { title: 'Use comma plus conjunction', text: 'Always use a comma before for, and, nor, but, or, yet, so when joining sentences.' },
    ],
  },
  {
    code: 'rla:3.11D.ii',
    goal: 'You will learn to edit drafts for past, present, and future verb tenses.',
    words: [
      { term: 'past tense', meaning: 'Action that already happened (walked, ran).' },
      { term: 'present tense', meaning: 'Action happening right now or habitually (walks, runs).' },
      { term: 'future tense', meaning: 'Action that will happen later (will walk, will run).' },
    ],
    ideas: [
      { title: 'Check time clues', text: 'Words like yesterday signal past, today signals present, and tomorrow signals future.' },
      { title: 'Keep tenses consistent', text: 'Do not shift unexpectedly between past and present within the same sentence.' },
    ],
  },
  {
    code: 'rla:3.11D.iii',
    goal: 'You will learn to edit drafts for singular, plural, common, and proper nouns.',
    words: [
      { term: 'proper noun', meaning: 'A specific name of a person, place, or organization that must be capitalized.' },
      { term: 'irregular plural', meaning: 'A plural noun that does not just add -s, like children, wolves, or geese.' },
    ],
    ideas: [
      { title: 'Capitalize proper nouns', text: 'Names like Mr. Ramirez, Austin, and San Antonio are capitalized.' },
      { title: 'Check irregular plurals', text: 'Words like puppy become puppies; wolf becomes wolves; child becomes children.' },
    ],
  },
  {
    code: 'rla:3.11D.iv',
    goal: 'You will learn to use adjectives, including comparative and superlative forms, correctly.',
    words: [
      { term: 'comparative', meaning: 'Comparing two things using -er or more (faster, more colorful).' },
      { term: 'superlative', meaning: 'Comparing three or more things using -est or most (fastest, most colorful).' },
    ],
    ideas: [
      { title: 'Two or more than two?', text: 'Use -er when comparing two items. Use -est when comparing three or more.' },
      { title: 'Never double up', text: 'Never say "more faster" or "most cleanest"; choose either more or the -er ending, never both.' },
    ],
  },
  {
    code: 'rla:3.11D.v',
    goal: 'You will learn to use adverbs that convey time and manner correctly.',
    words: [
      { term: 'adverb of time', meaning: 'An adverb telling when something happens (yesterday, soon, now).' },
      { term: 'adverb of manner', meaning: 'An adverb telling how something happens (quietly, quickly, eagerly).' },
    ],
    ideas: [
      { title: 'Look for -ly endings', text: 'Many adverbs of manner end in -ly and tell how an action is performed.' },
      { title: 'Answer when or how', text: 'Adverbs modify verbs, adjectives, or other adverbs by answering when, where, or how.' },
    ],
  },
  {
    code: 'rla:3.11D.vi',
    goal: 'You will learn to identify and use prepositions and prepositional phrases in sentences.',
    words: [
      { term: 'preposition', meaning: 'A word showing location, direction, or time, like above, behind, through, or under.' },
      { term: 'prepositional phrase', meaning: 'A group of words beginning with a preposition and ending with a noun, like behind the trees.' },
    ],
    ideas: [
      { title: 'Look for location and time', text: 'Prepositions answer where or when: under the shade, across the river, during the night.' },
      { title: 'Find the whole phrase', text: 'A prepositional phrase includes the preposition, its modifiers, and its object.' },
    ],
  },
  {
    code: 'rla:3.11D.vii',
    goal: 'You will learn to use subject, object, and possessive pronouns correctly.',
    words: [
      { term: 'subject pronoun', meaning: 'A pronoun used as the subject of a sentence (I, you, he, she, it, we, they).' },
      { term: 'object pronoun', meaning: 'A pronoun used as the object of a verb or preposition (me, you, him, her, it, us, them).' },
    ],
    ideas: [
      { title: 'Test by taking away the other person', text: 'To decide between "Carlos and I" or "Carlos and me", drop "Carlos and" to hear what sounds right.' },
      { title: 'Subject versus object', text: 'Use subject pronouns before the verb and object pronouns after the verb.' },
    ],
  },
  {
    code: 'rla:3.11D.viii',
    goal: 'You will learn to use coordinating conjunctions to form compound subjects, predicates, and sentences.',
    words: [
      { term: 'coordinating conjunction', meaning: 'FANBOYS: for, and, nor, but, or, yet, so.' },
    ],
    ideas: [
      { title: 'Match the meaning', text: '"And" adds ideas; "but" contrasts; "or" offers choices; "so" shows consequences.' },
      { title: 'Comma before conjunction', text: 'When joining two complete sentences, place a comma immediately before the coordinating conjunction.' },
    ],
  },
  {
    code: 'rla:3.11D.ix',
    goal: 'You will learn to capitalize official titles of people, holidays, and geographical names and places.',
    words: [
      { term: 'capitalization', meaning: 'Using capital letters for specific proper nouns, events, and titles.' },
    ],
    ideas: [
      { title: 'Titles before names', text: 'Capitalize titles when they come directly before a name: Mayor Alvarez, Dr. Chen.' },
      { title: 'Holidays and places', text: 'Always capitalize holidays (Thanksgiving, Labor Day) and cities and states (Austin, Texas).' },
    ],
  },
  {
    code: 'rla:3.11D.x',
    goal: 'You will learn to edit drafts for punctuation marks: apostrophes in contractions and possessives, commas in series and dates.',
    words: [
      { term: 'contraction', meaning: 'Two words combined with an apostrophe replacing missing letters (can\'t, don\'t).' },
      { term: 'comma in a series', meaning: 'Commas separating three or more items in a list.' },
    ],
    ideas: [
      { title: 'Apostrophes replace letters', text: 'In can\'t, the apostrophe replaces "no" from cannot.' },
      { title: 'Commas in dates and lists', text: 'Put a comma between the day and year in dates: May 4, 2024. Use commas between items in a list.' },
    ],
  },
  {
    code: 'rla:3.11D.xi',
    goal: 'You will learn to edit drafts for correct spelling of grade-appropriate and high-frequency words.',
    words: [
      { term: 'high-frequency words', meaning: 'Words that appear frequently in reading and writing, like because, friends, and answer.' },
    ],
    ideas: [
      { title: 'Remember spelling tricks', text: 'Big Elephants Can Always Understand Small Elephants spells BECAUSE.' },
      { title: 'Watch tricky letters', text: 'Remember the silent w in answer and the "ie" in friend ("a friend to the end").' },
    ],
  },
];
