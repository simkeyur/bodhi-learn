// Grade 4 reading walkthroughs (part 2: 4.10C through 4.11D.xi).

import { mcq, sample } from '../rla/author.ts';
import type { Lesson } from '../types.ts';
import { ARMADILLO, CAMP, DRAFT_ROBOT, LEMONADE, STORM_POEM } from './g4-rla-passages.ts';

export const G4_RLA_LESSONS_MORE: Lesson[] = [
  {
    code: 'rla:4.10C',
    goal: 'You will learn how authors use print and graphic features like subheadings and sidebars to help readers.',
    words: [
      { term: 'print feature', meaning: 'Design elements like bold words, subheadings, and sidebars.' },
      { term: 'sidebar', meaning: 'A short box of extra facts placed beside the main text.' },
    ],
    ideas: [
      { title: 'Subheadings preview topics', text: 'Subheadings tell you what each section of text will be about before you read it.' },
      { title: 'Sidebars provide quick facts', text: 'Sidebars offer interesting extra details or statistics that expand on the main article.' },
    ],
    samples: [
      sample(ARMADILLO, mcq({
        standard: 'rla:4.10C', cites: [3],
        stem: 'Why did the author include the sidebar "Fast Fact"?',
        choices: [
          'To share an interesting extra detail about how armadillos reproduce.',
          ['To describe what armadillos eat.', 'The main text already describes their diet.'],
          ['To warn readers not to touch wild armadillos.', 'No warning is mentioned in the sidebar.'],
          ['To list all the state symbols of Texas.', 'Only the armadillo is mentioned.'],
        ],
        answer: 0,
        explain: 'The sidebar highlights the fascinating biological fact that female armadillos give birth to identical quadruplets.',
      }), 4),
      sample(ARMADILLO, mcq({
        standard: 'rla:4.10C', cites: [1],
        stem: 'What is the purpose of the bold heading "Armor on Four Legs"?',
        choices: [
          'To introduce the section describing the armadillo\'s protective bony shell.',
          ['To explain why armadillos have poor eyesight.', 'Eyesight is discussed in the second paragraph.'],
          ['To prove that armadillos lived with dinosaurs.', 'The text says they look like relics, not that they lived with dinosaurs.'],
          ['To provide a recipe for cooking wild game.', 'This is completely unrelated.'],
        ],
        answer: 0,
        explain: 'The heading prepares the reader for information about the armadillo\'s physical scute armor.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.10D',
    goal: 'You will learn to explain how imagery, figurative language, and sound devices achieve specific purposes.',
    words: [
      { term: 'simile', meaning: 'A comparison between two unlike things using like or as.' },
      { term: 'imagery', meaning: 'Vivid sensory words that appeal to sight, sound, smell, taste, or touch.' },
      { term: 'alliteration', meaning: 'Repeating the same initial consonant sound in nearby words.' },
    ],
    ideas: [
      { title: 'Picture the comparisons', text: 'When an author uses a simile, think about what qualities the two things share.' },
      { title: 'Listen for sound devices', text: 'Rhyme and alliteration create rhythm and emphasize important feelings or images.' },
    ],
    samples: [
      sample(STORM_POEM, mcq({
        standard: 'rla:4.10D', cites: [1],
        stem: 'In line 1, what does the image of the sky turning "violet, bruised and deep" suggest?',
        choices: [
          'Dark, heavy thunderclouds are gathering for a storm.',
          ['Someone dropped purple paint across the clouds.', 'The description is figurative, not literal paint.'],
          ['The sun is shining brightly at midday.', 'Violet and bruised indicate darkness and storm.'],
          ['The sky was injured in an accident.', 'The sky is not literally injured; it looks dark like a bruise.'],
        ],
        answer: 0,
        explain: 'Describing the sky as violet and bruised creates an ominous image of dark storm clouds rolling in.',
      }), 4),
      sample(STORM_POEM, mcq({
        standard: 'rla:4.10D', cites: [8],
        stem: 'Which sense does the poet appeal to in line 8 ("The sweet earth smells of summer rain")?',
        choices: [
          'The sense of smell.',
          ['The sense of hearing.', 'Hearing is sound; "smells" appeals to scent.'],
          ['The sense of sight.', 'Line 8 focuses on smell rather than sight.'],
          ['The sense of taste.', 'The line does not describe eating anything.'],
        ],
        answer: 0,
        explain: 'Line 8 directly describes the clean, earthy scent that rises from the ground after a rainfall.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.10E',
    goal: 'You will learn to identify first-person and third-person points of view in stories.',
    words: [
      { term: 'first-person', meaning: 'Told by a character inside the story using I, me, and we.' },
      { term: 'third-person', meaning: 'Told by an outside narrator using he, she, and they.' },
    ],
    ideas: [
      { title: 'Check the pronouns', text: 'Look at the pronouns outside of quotation marks. If the narrator says "I went," it is first person.' },
      { title: 'Notice narrator perspective', text: 'A first-person narrator shares private thoughts and feelings directly with the reader.' },
    ],
    samples: [
      sample(CAMP, mcq({
        standard: 'rla:4.10E', cites: [1],
        stem: 'How can the reader tell that "First Night at Camp" is written in the first-person point of view?',
        choices: [
          'The narrator uses words like "I" and "my" to describe personal feelings about camp.',
          ['The story is written in rhyming stanzas.', 'The story is in prose paragraphs, not rhyming stanzas.'],
          ['An outside narrator describes everyone from above.', 'The narrator is a character participating directly in the story.'],
          ['The author uses stage directions and character tags.', 'This is a narrative story, not a play.'],
        ],
        answer: 0,
        explain: 'Using first-person pronouns like "I" and "my" to recount personal experiences defines first-person narration.',
      }), 4),
      sample(LEMONADE, mcq({
        standard: 'rla:4.10E', cites: [1],
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
    code: 'rla:4.10F',
    goal: 'You will learn to explain how an author\'s word choice shapes the voice of a text.',
    words: [
      { term: 'voice', meaning: 'The distinct personality and style of the writer or speaker that comes through the words.' },
      { term: 'word choice', meaning: 'The specific words an author chooses to create mood and attitude.' },
    ],
    ideas: [
      { title: 'Notice tone and attitude', text: 'Does the author sound funny, serious, worried, or enthusiastic? Word choice creates that feeling.' },
      { title: 'Look at personality', text: 'Vivid descriptions and informal expressions reveal a character\'s personality.' },
    ],
    samples: [
      sample(CAMP, mcq({
        standard: 'rla:4.10F', cites: [1],
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
      sample(LEMONADE, mcq({
        standard: 'rla:4.10F', cites: [2],
        stem: 'In paragraph 2, Mateo\'s silly song ("Ice-cold lemonade, sweet and bright, best in Texas day or night!") shows that his voice is—',
        choices: [
          'Playful, energetic, and eager to attract customers.',
          ['Angry and frustrated at his sister.', 'He is cheerfully helping his sister.'],
          ['Shy and whispering quietly.', 'He was singing loudly down the street.'],
          ['Bored and uninterested in helping.', 'He was active and enthusiastic.'],
        ],
        answer: 0,
        explain: 'Ringing his bell and singing a rhyming jingle reveals Mateo\'s cheerful and energetic personality.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.10G',
    goal: 'You will learn to identify and explain the purpose of anecdotes in writing.',
    words: [
      { term: 'anecdote', meaning: 'A short, interesting story about a real event used to illustrate a point.' },
    ],
    ideas: [
      { title: 'Spot the mini-story', text: 'An anecdote is a brief real-life story embedded inside a larger speech or article.' },
      { title: 'Understand its purpose', text: 'Authors use anecdotes to make their point more memorable, personal, and convincing.' },
    ],
    samples: [
      sample(CAMP, mcq({
        standard: 'rla:4.10G', cites: [2],
        stem: 'Why does the narrator share the short story about Jamal showing him the constellation Orion?',
        choices: [
          'To illustrate the specific moment when his attitude toward camp began to change.',
          ['To teach the reader astronomy facts about stars.', 'Astronomy is just the setting for the personal connection.'],
          ['To complain that stargazing caused mosquito bites.', 'The anecdote emphasizes that he made a best friend.'],
          ['To prove that flashlights should be banned at camp.', 'Flashlights are not mentioned.'],
        ],
        answer: 0,
        explain: 'The brief personal anecdote shows the turning point where friendship and stargazing made camp enjoyable.',
      }), 4),
      sample(LEMONADE, mcq({
        standard: 'rla:4.10G', cites: [2],
        stem: 'Why does the author include the anecdote of Mateo marching down the street singing his lemonade song?',
        choices: [
          'To show how Mateo\'s clever idea solved Elena\'s problem of having no customers.',
          ['To show that Mateo wanted to keep all the money for himself.', 'Mateo was helping Elena\'s stand succeed.'],
          ['To prove that loud noises frighten neighbors.', 'The neighbors happily bought lemonade.'],
          ['To explain how to make homemade lemonade.', 'No recipe is provided.'],
        ],
        answer: 0,
        explain: 'The anecdote shows the turning point in the business: Mateo\'s creative advertising drew a crowd.',
      }), 4),
    ],
  },
  // Generated standards (goal, words, ideas)
  {
    code: 'rla:4.2B.i',
    goal: 'You will learn to spell multisyllabic words with closed, open, VCe, vowel teams, r-controlled, and final stable syllables.',
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
    code: 'rla:4.2B.ii',
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
    code: 'rla:4.2B.iii',
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
    code: 'rla:4.2B.iv',
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
    code: 'rla:4.2B.v',
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
    code: 'rla:4.2B.vi',
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
    code: 'rla:4.11B.i',
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
    code: 'rla:4.11B.ii',
    goal: 'You will learn to develop drafts by adding engaging and relevant supporting details.',
    words: [
      { term: 'supporting detail', meaning: 'Specific facts, examples, or sensory descriptions that back up a main idea.' },
    ],
    ideas: [
      { title: 'Ask what\'s missing', text: 'A strong supporting detail answers questions like how, why, or what does it look like.' },
      { title: 'Avoid unrelated facts', text: 'Make sure every added detail directly connects to the main topic of the paragraph.' },
    ],
    samples: [
      sample(DRAFT_ROBOT, mcq({
        standard: 'rla:4.11B.ii', cites: [3],
        stem: 'The writer wants to add a sensory detail after sentence 3. Which sentence would best develop the description?',
        choices: [
          'The metallic paint glistened in the sunlight, giving the cardboard armor a polished chrome finish.',
          ['Robots were first invented many decades ago.', 'This is general history, not a description of the model.'],
          ['Cardboard boxes can be found at grocery stores.', 'Where boxes come from is an unrelated fact.'],
          ['Some students walked home after school.', 'Walking home is completely irrelevant.'],
        ],
        answer: 0,
        explain: 'Describing the glistening metallic finish provides a rich sensory detail that develops the visual appearance of the robot.',
      }), 4),
      sample(DRAFT_ROBOT, mcq({
        standard: 'rla:4.11B.ii', cites: [5],
        stem: 'Which detail would best support sentence 5 by showing how the robot moved?',
        choices: [
          'Small wheels hidden beneath the base allowed the robot to glide smoothly without tipping over.',
          ['Tabletops are usually made of wood or plastic.', 'This describes furniture rather than the robot.'],
          ['Our school mascot is a fierce Texas panther.', 'School mascots are unrelated to the science project.'],
          ['Cardboard comes from pressed wood fibers.', 'This is an unrelated manufacturing fact.'],
        ],
        answer: 0,
        explain: 'Explaining how the hidden wheels enabled the robot to roll supports the sentence about it moving across the table.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.11C',
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
        standard: 'rla:4.11C', cites: [1, 2],
        stem: 'What is the most effective way to combine sentences 1 and 2?',
        choices: [
          'Our team built a robot using cardboard boxes and plastic bottle caps, painting the body with shiny silver paint.',
          ['Our team built a robot, we painted the body silver.', 'This is a comma splice.'],
          ['We built a robot and painted it and used cardboard and caps.', 'This strings too many thoughts together with "and."'],
          ['Painted silver, cardboard boxes were used by our team.', 'This creates an awkward passive structure.'],
        ],
        answer: 0,
        explain: 'Combining the actions with a participial phrase ("painting the body with shiny silver paint") creates a smooth, cohesive sentence.',
      }), 4),
      sample(DRAFT_ROBOT, mcq({
        standard: 'rla:4.11C', cites: [3],
        stem: 'What is the best revision of sentence 3 ("It looked very realistic") to improve descriptive word choice?',
        choices: [
          'With its square shoulders and antenna, the robot looked remarkably like an authentic space probe.',
          ['It was really, really good.', 'This uses vague, informal words.'],
          ['Looking realistic was the thing it did.', 'This is awkward and wordy.'],
          ['The robot was realistic because it was.', 'This repeats words without adding description.'],
        ],
        answer: 0,
        explain: 'Adding precise details ("square shoulders and antenna", "authentic space probe") dramatically improves word choice and imagery.',
      }), 4),
    ],
  },
  {
    code: 'rla:4.11D',
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
    code: 'rla:4.11D.i',
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
    code: 'rla:4.11D.ii',
    goal: 'You will learn to edit drafts for the past tense of irregular verbs.',
    words: [
      { term: 'irregular verb', meaning: 'A verb that forms its past tense without adding -ed, like ran, flew, or taught.' },
    ],
    ideas: [
      { title: 'Memorize irregular forms', text: 'Teach becomes taught, fly becomes flew, choose becomes chose, and build becomes built.' },
      { title: 'Listen for error', text: 'Words like "teached" or "flyed" are classic incorrect forms that sound wrong when read aloud.' },
    ],
  },
  {
    code: 'rla:4.11D.iii',
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
    code: 'rla:4.11D.iv',
    goal: 'You will learn to use comparative and superlative forms of adjectives correctly.',
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
    code: 'rla:4.11D.v',
    goal: 'You will learn to use adverbs that convey frequency (always, often) and degree (very, extremely).',
    words: [
      { term: 'adverb of frequency', meaning: 'An adverb telling how often something happens (daily, seldom, usually).' },
      { term: 'adverb of degree', meaning: 'An adverb telling how intense or to what extent something is (extremely, quite, very).' },
    ],
    ideas: [
      { title: 'Show how often', text: 'Words like rarely, always, and often describe the frequency of habits and actions.' },
      { title: 'Show intensity', text: 'Words like thoroughly, somewhat, and extremely express the degree of an adjective or verb.' },
    ],
  },
  {
    code: 'rla:4.11D.vi',
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
    code: 'rla:4.11D.vii',
    goal: 'You will learn to use pronouns correctly, including reflexive pronouns like myself, himself, and themselves.',
    words: [
      { term: 'reflexive pronoun', meaning: 'A pronoun ending in -self or -selves used when the subject and object are the same.' },
    ],
    ideas: [
      { title: 'Match the subject', text: 'I matched with myself; he with himself; she with herself; we with ourselves; they with themselves.' },
      { title: 'Avoid non-standard forms', text: 'Words like "hisself" and "theirselves" are never correct in standard English.' },
    ],
  },
  {
    code: 'rla:4.11D.viii',
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
    code: 'rla:4.11D.ix',
    goal: 'You will learn to capitalize historical periods, events, documents, titles of books, and languages and nationalities.',
    words: [
      { term: 'capitalization', meaning: 'Using capital letters for specific proper nouns, events, and titles.' },
    ],
    ideas: [
      { title: 'Historic events and documents', text: 'Capitalize major historical events (American Revolution) and documents (Declaration of Independence).' },
      { title: 'Languages and titles', text: 'Always capitalize languages (Spanish, French) and the important words in book titles (Charlotte\'s Web).' },
    ],
  },
  {
    code: 'rla:4.11D.x',
    goal: 'You will learn to edit for punctuation marks: apostrophes in possessives, commas in compound sentences, and dialogue quotation marks.',
    words: [
      { term: 'possessive apostrophe', meaning: 'An apostrophe showing ownership (dog\'s collar, players\' uniforms).' },
      { term: 'quotation marks', meaning: 'Punctuation surrounding exact spoken words in dialogue.' },
    ],
    ideas: [
      { title: 'Punctuation inside quotes', text: 'Commas, periods, question marks, and exclamation points belong inside closing quotation marks.' },
      { title: 'Singular versus plural possessive', text: 'Add \'s for singular owners (the child\'s toy); add only an apostrophe after s for plural owners (the boys\' bikes).' },
    ],
  },
  {
    code: 'rla:4.11D.xi',
    goal: 'You will learn to edit drafts for correct spelling of grade-appropriate and high-frequency words.',
    words: [
      { term: 'high-frequency words', meaning: 'Words that appear frequently in reading and writing, like believe, favorite, and separate.' },
    ],
    ideas: [
      { title: 'Remember spelling tricks', text: 'There is "a rat" in separate. "I before e except after c" in believe and receive.' },
      { title: 'Double check silent letters', text: 'Watch for silent letters in words like tomorrow (one m, two r\'s) and library (don\'t forget the first r).' },
    ],
  },
];
