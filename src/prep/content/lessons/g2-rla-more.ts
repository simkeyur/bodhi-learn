// Grade 2 reading walkthroughs (part 2: 2.8E.i through 2.11D.xi).

import { mcq, sample } from '../rla/author.ts';
import type { Lesson } from '../types.ts';
import {
  MINI_DRAFT, MINI_MONARCH, MINI_PICNIC, MINI_PUPPY, MINI_STAR_POEM, MINI_SUNFLOWERS, MINI_SWINGS, MINI_TURTLE,
} from './g2-rla-passages.ts';

export const G2_RLA_LESSONS_MORE: Lesson[] = [
  {
    code: 'rla:2.8E.i',
    goal: 'You will learn to identify the author\'s claim and what the author wants you to think or do.',
    words: [
      { term: 'claim', meaning: 'The main idea or opinion that the author wants readers to agree with.' },
    ],
    ideas: [
      { title: 'Find the author\'s wish', text: 'Look for words like should, must, please, or need to see what is requested.' },
      { title: 'Look for the action', text: 'Ask yourself: What does the writer want readers or leaders to do?' },
    ],
    samples: [
      sample(MINI_SWINGS, mcq({
        standard: 'rla:2.8E.i', cites: [1],
        stem: 'What is the author\'s main claim in "More Swings for Oak Park"?',
        choices: [
          'Oak Park needs more swing sets installed for neighborhood children.',
          ['The playground should be closed permanently.', 'The author wants to improve the park, not close it.'],
          ['Children should stay home to play video games.', 'The author encourages active outdoor play.'],
          ['The park needs a giant concrete parking lot.', 'Parking lots are not mentioned.'],
        ],
        answer: 0,
        explain: 'Paragraph 1 clearly states the central claim: "our neighborhood park needs more swing sets."',
      }), 4),
      sample(MINI_SWINGS, mcq({
        standard: 'rla:2.8E.i', cites: [2],
        stem: 'What action does the writer want the Park Director to take?',
        choices: [
          'Add four new belt swings to Oak Park.',
          ['Paint the benches blue.', 'Bench painting is not requested.'],
          ['Remove the grass from the park.', 'The author does not ask to remove grass.'],
          ['Sell the playground equipment.', 'The author asks for additional swings.'],
        ],
        answer: 0,
        explain: 'The letter directly asks the director to add four new belt swings to the playground.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.8E.ii',
    goal: 'You will learn to distinguish facts from opinions in persuasive texts.',
    words: [
      { term: 'fact', meaning: 'A statement that can be proven true with evidence or counting.' },
      { term: 'opinion', meaning: 'A personal feeling, belief, or thought that cannot be proven true for everyone.' },
    ],
    ideas: [
      { title: 'Test for proof', text: 'Can you count it or look it up? Then it is a fact (e.g. there are two swings).' },
      { title: 'Watch for feeling words', text: 'Words like best, wonderful, or exciting signal a personal opinion.' },
    ],
    samples: [
      sample(MINI_SWINGS, mcq({
        standard: 'rla:2.8E.ii', cites: [1],
        stem: 'Which statement from paragraph 1 is a **fact**?',
        choices: [
          'There are only two swings on the playground.',
          ['Swinging is the most fun game in the world.', 'Fun is a personal opinion.'],
          ['Waiting in line is exciting.', 'Feelings about waiting are opinions.'],
          ['Oak Park is the prettiest park in Texas.', 'Prettiness is a subjective opinion.'],
        ],
        answer: 0,
        explain: 'Counting the two physical swings on the playground is a verifiable fact.',
      }), 4),
      sample(MINI_SWINGS, mcq({
        standard: 'rla:2.8E.ii', cites: [2],
        stem: 'Which statement from paragraph 2 expresses an **opinion**?',
        choices: [
          'Swinging provides wonderful exercise.',
          ['Swinging uses arm muscles.', 'Using arm muscles is an anatomical fact.'],
          ['Four new swings could be added to the park.', 'Adding four swings is a specific count.'],
          ['Kids play at Oak Park.', 'Kids playing in the park is a true fact.'],
        ],
        answer: 0,
        explain: 'Calling exercise "wonderful" is a personal opinion and feeling.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.9A',
    goal: 'You will learn to explain the author\'s purpose: to entertain, inform, or persuade.',
    words: [
      { term: 'author\'s purpose', meaning: 'The main reason an author writes: to entertain, inform, or persuade.' },
    ],
    ideas: [
      { title: 'Entertain with stories', text: 'Fun stories about lost puppies and racing turtles entertain readers.' },
      { title: 'Inform with facts', text: 'Articles about butterfly migration and sunflower growth teach facts.' },
    ],
    samples: [
      sample(MINI_PUPPY, mcq({
        standard: 'rla:2.9A', cites: [1, 2],
        stem: 'What was the author\'s main purpose in writing "Finding Buddy"?',
        choices: [
          'To entertain readers with a story about a boy helping a lost puppy get home.',
          ['To explain how veterinarians cure dog illnesses.', 'This is a story about finding a lost pet, not vet medicine.'],
          ['To persuade readers to buy gold collar tags.', 'The purpose is storytelling, not selling tags.'],
          ['To describe how wooden porches are constructed.', 'Porch building is unrelated.'],
        ],
        answer: 0,
        explain: 'The author wrote an entertaining narrative about kindness and helping a lost pet.',
      }), 4),
      sample(MINI_MONARCH, mcq({
        standard: 'rla:2.9A', cites: [1, 2],
        stem: 'What was the author\'s main purpose in writing "Monarch Butterflies in Texas"?',
        choices: [
          'To inform readers about how monarchs migrate and how people can help them.',
          ['To entertain readers with a silly fable about insects.', 'The text is factual nonfiction, not a fable.'],
          ['To persuade people to move to Mexico in the winter.', 'The butterflies migrate, not people.'],
          ['To teach students how to catch wild caterpillars.', 'The text encourages protecting caterpillars, not catching them.'],
        ],
        answer: 0,
        explain: 'The author shares facts to inform readers about butterfly migration and milkweed plants.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.9B',
    goal: 'You will learn to discuss how text structure contributes to the author\'s purpose.',
    words: [
      { term: 'text structure', meaning: 'How a piece of writing is organized, like a script, story, or article.' },
    ],
    ideas: [
      { title: 'Dialogue in plays', text: 'A play uses character tags and dialogue so actors can perform the scene.' },
      { title: 'Time order in science', text: 'Articles arrange seasonal steps in order so processes are clear.' },
    ],
    samples: [
      sample(MINI_PICNIC, mcq({
        standard: 'rla:2.9B', cites: [1, 2, 3],
        stem: 'How does formatting the text as a play with dialogue support the author\'s purpose?',
        choices: [
          'It allows actors to perform the scene and speak the characters\' feelings out loud.',
          ['It teaches readers how to identify wild oak species.', 'The focus is on the children\'s picnic scene.'],
          ['It lists historical dates in chronological order.', 'No historical dates appear.'],
          ['It rhymes the words at the end of every sentence.', 'The play is in prose dialogue.'],
        ],
        answer: 0,
        explain: 'Formatting the text as dramatic dialogue allows characters to express feelings through spoken lines.',
      }), 4),
      sample(MINI_MONARCH, mcq({
        standard: 'rla:2.9B', cites: [1, 2],
        stem: 'How does the chronological order in "Monarch Butterflies in Texas" support the author\'s purpose?',
        choices: [
          'It traces the butterflies\' seasonal journey from autumn travel south to spring return.',
          ['It tells a mystery story about lost insects.', 'The text is factual science, not a mystery.'],
          ['It lists butterfly wings from darkest to lightest.', 'No color ranking is made.'],
          ['It explains how to build a wooden butterfly box.', 'No construction instructions are provided.'],
        ],
        answer: 0,
        explain: 'Tracing the migration in time order clearly explains the annual lifecycle of the butterflies.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.9C',
    goal: 'You will learn to explain how authors use print and graphic features to help readers.',
    words: [
      { term: 'print feature', meaning: 'Special text elements like headings, bold words, and bullet points.' },
    ],
    ideas: [
      { title: 'Headings name topics', text: 'Headings help readers quickly see what each section of text explains.' },
      { title: 'Bold words highlight terms', text: 'Bold letters draw attention to important new vocabulary.' },
    ],
    samples: [
      sample(MINI_SUNFLOWERS, mcq({
        standard: 'rla:2.9C', cites: [1],
        stem: 'Why did the author include the heading "Tracking the Sunlight"?',
        choices: [
          'To preview the section that explains how flowers turn toward the sun.',
          ['To warn readers not to touch garden plants.', 'No warning is given.'],
          ['To explain how to build a wooden fence.', 'Fence building is not discussed.'],
          ['To list all the state symbols of Texas.', 'Only sunflowers are discussed.'],
        ],
        answer: 0,
        explain: 'The heading prepares the reader for facts about sunflowers following the sun across the sky.',
      }), 4),
      sample(MINI_SUNFLOWERS, mcq({
        standard: 'rla:2.9C', cites: [2],
        stem: 'How does the heading "A Treat for Birds" help the reader?',
        choices: [
          'It signals that the paragraph will explain how sunflower seeds feed wildlife.',
          ['It shows how to bake bread in an oven.', 'Baking bread is not mentioned.'],
          ['It explains how to identify bird feathers.', 'Bird feathers are not discussed.'],
          ['It tells what happens during winter snow.', 'The text describes late summer.'],
        ],
        answer: 0,
        explain: 'The heading directs readers to facts about hungry birds and squirrels eating seeds.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.9D',
    goal: 'You will learn to discuss descriptive, literal, and figurative language in texts.',
    words: [
      { term: 'simile', meaning: 'A comparison between two unlike things using the words like or as.' },
      { term: 'descriptive words', meaning: 'Vivid sensory words that help readers see, hear, or feel things.' },
    ],
    ideas: [
      { title: 'Picture the comparison', text: 'When a poet writes "Like a diamond in the sky," picture a sparkling gem.' },
      { title: 'Notice sensory words', text: 'Words like shivering, blazing, or whimpering create vivid images in your mind.' },
    ],
    samples: [
      sample(MINI_STAR_POEM, mcq({
        standard: 'rla:2.9D', cites: [4],
        stem: 'In line 4, what does the poet compare the star to when writing "Like a diamond in the sky"?',
        choices: [
          'A sparkling, glittering gemstone.',
          ['A fluffy daytime cloud.', 'Diamonds are sparkly, not fluffy.'],
          ['A golden yellow butterfly.', 'The comparison is directly to a diamond.'],
          ['A round silver coin.', 'Diamonds sparkle with brilliant light.'],
        ],
        answer: 0,
        explain: 'The simile compares the glittering star in the dark sky to a sparkling diamond.',
      }), 4),
      sample(MINI_STAR_POEM, mcq({
        standard: 'rla:2.9D', cites: [5],
        stem: 'What does the descriptive phrase "blazing sun" help the reader picture in line 5?',
        choices: [
          'A bright, burning hot sun in the daytime sky.',
          ['A cold block of winter ice.', 'Blazing describes intense heat and light.'],
          ['A gentle nighttime breeze.', 'The sun is blazing in the day.'],
          ['A quiet stream of water.', 'Streams do not blaze.'],
        ],
        answer: 0,
        explain: '"Blazing" creates a strong sensory image of burning heat and bright daytime light.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.9E',
    goal: 'You will learn to identify first-person and third-person points of view in texts.',
    words: [
      { term: 'first-person', meaning: 'Told by a character inside the story using I, me, and my.' },
      { term: 'third-person', meaning: 'Told by an outside storyteller using he, she, and they.' },
    ],
    ideas: [
      { title: 'Check the pronouns', text: 'Look at words outside dialogue: "I saw" is first person; "he saw" is third person.' },
      { title: 'Identify the narrator', text: 'Is the narrator participating in the story, or telling about others from outside?' },
    ],
    samples: [
      sample(MINI_TURTLE, mcq({
        standard: 'rla:2.9E', cites: [1, 2],
        stem: 'How can the reader tell that "The Tortoise and the Hare" is told in the third-person point of view?',
        choices: [
          'An outside storyteller refers to the characters by name and uses pronouns like "he."',
          ['Harry narrates the story directly using words like "I" and "my."', 'Harry does not narrate the story.'],
          ['The story is written in rhyming stanzas.', 'Rhyme does not determine point of view.'],
          ['The narrator talks directly to the reader as "you."', 'Second person is not used.'],
        ],
        answer: 0,
        explain: 'An outside narrator tells about Harry and Toby using third-person pronouns ("he," "him").',
      }), 4),
      sample(MINI_PUPPY, mcq({
        standard: 'rla:2.9E', cites: [1, 2],
        stem: 'From which point of view is "Finding Buddy" told?',
        choices: [
          'Third-person point of view, told by an outside narrator who describes Leo and Buddy.',
          ['First-person point of view, told directly by Leo using "I."', 'Leo does not narrate using "I."'],
          ['First-person point of view, told by Buddy the puppy.', 'The puppy does not tell the story.'],
          ['Second-person point of view, told directly to "you."', 'The story describes Leo\'s actions.'],
        ],
        answer: 0,
        explain: 'The storyteller stands outside the action and refers to Leo by name and third-person pronouns.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.9F',
    goal: 'You will learn to identify and explain the use of repetition in poems and texts.',
    words: [
      { term: 'repetition', meaning: 'Repeating words, lines, or sounds for emphasis, rhythm, or musical effect.' },
    ],
    ideas: [
      { title: 'Listen for repeating words', text: 'Notice words repeated in stanzas, like "twinkle, twinkle."' },
      { title: 'Ask why it repeats', text: 'Repetition creates rhythm, makes poems memorable, and emphasizes feelings.' },
    ],
    samples: [
      sample(MINI_STAR_POEM, mcq({
        standard: 'rla:2.9F', cites: [1, 8],
        stem: 'Why does the poet repeat the words "twinkle, twinkle" in lines 1 and 8?',
        choices: [
          'To create a pleasant musical rhythm that mimics flickering starlight.',
          ['Because the poet forgot other descriptive words.', 'Repetition is an intentional poetry technique.'],
          ['To warn travelers that storms are coming.', 'No storm warning is in the poem.'],
          ['To ask readers to count the number of stars.', 'The poem expresses wonder, not counting.'],
        ],
        answer: 0,
        explain: 'Repeating the words creates a soothing beat that mirrors the twinkling effect of starlight.',
      }), 4),
      sample(MINI_STAR_POEM, mcq({
        standard: 'rla:2.9F', cites: [5, 6],
        stem: 'Why does the poet start lines 5 and 6 with the word "When"?',
        choices: [
          'To build a rhythmic pattern that describes what happens after sunset.',
          ['To ask questions about daytime weather.', 'The lines are statements, not questions.'],
          ['To list school subjects in order.', 'School subjects are not discussed.'],
          ['To explain how to fly a kite.', 'Kites are not in the poem.'],
        ],
        answer: 0,
        explain: 'Repeating "When" at the start of adjacent lines creates parallel structure and musical rhythm.',
      }), 4),
    ],
  },

  // Generated spelling standards
  {
    code: 'rla:2.2C.i',
    goal: 'You will learn to spell one-syllable and multisyllabic words with syllable types and vowel patterns.',
    words: [
      { term: 'closed syllable', meaning: 'A syllable ending in a consonant with a short vowel, like bas- in basket.' },
      { term: 'vowel team', meaning: 'Two vowels working together to make one sound, like oa in coat or ai in snail.' },
    ],
    ideas: [
      { title: 'Clap the syllables', text: 'Break longer words into syllable chunks and spell each part.' },
      { title: 'Check vowel teams', text: 'Remember patterns like oa for long o in coat, and ai for long a in snail.' },
    ],
  },
  {
    code: 'rla:2.2C.ii',
    goal: 'You will learn to spell words with silent letters such as knife and gnat.',
    words: [
      { term: 'silent letter', meaning: 'A letter in a word that is written but not spoken aloud.' },
    ],
    ideas: [
      { title: 'Memorize silent pairs', text: 'K is silent before n (knife, knee, knot). W is silent before r (write, wrist).' },
      { title: 'Check word endings', text: 'B is silent after m at the end of words (thumb, climb, lamb).' },
    ],
  },
  {
    code: 'rla:2.2C.iii',
    goal: 'You will learn to spell compound words, contractions, and abbreviations.',
    words: [
      { term: 'compound word', meaning: 'Two base words joined together without spaces, like backpack.' },
      { term: 'contraction', meaning: 'Two words shortened with an apostrophe, like can\'t.' },
    ],
    ideas: [
      { title: 'Keep base words intact', text: 'Join the two words without dropping letters: sun + flower = sunflower.' },
      { title: 'Apostrophe placement', text: 'Put the apostrophe exactly where letters were removed: can + not = can\'t.' },
    ],
  },
  {
    code: 'rla:2.2C.iv',
    goal: 'You will learn to spell multisyllabic words with multiple sound-spelling patterns.',
    words: [
      { term: 'multisyllabic', meaning: 'A word with two or more syllables, like basket or kitten.' },
    ],
    ideas: [
      { title: 'Tackle part by part', text: 'Spell each syllable chunk carefully: bas-ket, kit-ten, mu-sic.' },
      { title: 'Watch double consonants', text: 'Many two-syllable words double the middle consonant: rab-bit, muf-fin.' },
    ],
  },
  {
    code: 'rla:2.2C.v',
    goal: 'You will learn to spell words using syllable division patterns and double consonants.',
    words: [
      { term: 'double consonant', meaning: 'Two identical consonants side by side, like bb in rabbit.' },
    ],
    ideas: [
      { title: 'Divide between twins', text: 'When two consonants stand in the middle, divide between them: nap-kin, traf-fic.' },
      { title: 'Keep the short vowel', text: 'Double consonants keep the first vowel sound short: kitten, muffin.' },
    ],
  },
  {
    code: 'rla:2.2C.vi',
    goal: 'You will learn to spell words with prefixes (un-, re-, dis-) and inflectional endings.',
    words: [
      { term: 'prefix', meaning: 'A beginning word part: un- (not), re- (again).' },
      { term: 'suffix', meaning: 'An ending word part: -ed (past), -ing (now), -est (most).' },
    ],
    ideas: [
      { title: 'Keep the base root', text: 'Attach the prefix without changing the root: un + happy = unhappy.' },
      { title: 'Check suffix rules', text: 'Add -ed for past tense (jumped) and -ing for ongoing actions (building).' },
    ],
  },

  // Drafting and revising standards
  {
    code: 'rla:2.11B.i',
    goal: 'You will learn to organize drafts with a clear beginning, middle, and ending structure.',
    words: [
      { term: 'organization', meaning: 'Arranging sentences in a clear and logical order so ideas make sense.' },
      { term: 'transition', meaning: 'Words like first, next, and finally that connect ideas smoothly.' },
    ],
    ideas: [
      { title: 'Start with a topic', text: 'The first sentence introduces what the whole draft will be about.' },
      { title: 'Use sequence words', text: 'Transitions like first, then, and finally guide readers step by step.' },
    ],
    samples: [
      sample(MINI_DRAFT, mcq({
        standard: 'rla:2.11B.i', cites: [1],
        stem: 'Which introductory phrase would best begin sentence 1?',
        choices: [
          'In our second-grade classroom,',
          ['In conclusion,', 'In conclusion belongs at the very end of a paper.'],
          ['On the other hand,', 'On the other hand shows contrast, which does not fit.'],
          ['Suddenly and shockingly,', 'Classroom pets are calm, not shocking.'],
        ],
        answer: 0,
        explain: '"In our second-grade classroom" smoothly establishes the setting and topic of the draft.',
      }), 4),
      sample(MINI_DRAFT, mcq({
        standard: 'rla:2.11B.i', cites: [5],
        stem: 'Why is sentence 5 an effective conclusion for the draft?',
        choices: [
          'It summarizes what students learn from caring for their pet.',
          ['It introduces a completely new topic about wild lions.', 'Lions are unrelated to the classroom pet.'],
          ['It complains about having to clean the cage.', 'The tone is positive and reflective.'],
          ['It asks the teacher for a homework extension.', 'Homework is not the topic.'],
        ],
        answer: 0,
        explain: 'Reflecting on learning responsibility and teamwork provides a strong, positive conclusion.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.11B.ii',
    goal: 'You will learn to develop drafts by adding specific and relevant supporting details.',
    words: [
      { term: 'supporting detail', meaning: 'Facts and descriptions that explain and develop the main idea.' },
    ],
    ideas: [
      { title: 'Add descriptive facts', text: 'Tell how things look, sound, feel, or act to make writing interesting.' },
      { title: 'Stay on topic', text: 'Make sure every detail directly connects to the main subject of the sentence.' },
    ],
    samples: [
      sample(MINI_DRAFT, mcq({
        standard: 'rla:2.11B.ii', cites: [3],
        stem: 'The writer wants to add a detail after sentence 3. Which sentence best develops the description of the cage?',
        choices: [
          'Soft pine shavings cover the cage floor so Squeaky can burrow and stay warm.',
          ['Hamsters were discovered in the desert long ago.', 'General history does not describe the cage.'],
          ['Dogs require outdoor walks every day.', 'Dogs are unrelated to Squeaky\'s cage.'],
          ['Grocery stores sell many fresh vegetables.', 'Grocery stores do not describe the cage.'],
        ],
        answer: 0,
        explain: 'Describing the soft pine shavings on the cage floor adds a specific, relevant detail.',
      }), 4),
      sample(MINI_DRAFT, mcq({
        standard: 'rla:2.11B.ii', cites: [2],
        stem: 'Which detail best develops sentence 2 by showing what Squeaky does with his food?',
        choices: [
          'He packs seeds into his stretchy cheek pouches to hide in his sleeping corner.',
          ['Water is made of hydrogen and oxygen.', 'Chemical facts are irrelevant.'],
          ['Our school mascot is a fierce blue panther.', 'School mascots do not relate to feeding the hamster.'],
          ['Cardboard boxes can be recycled.', 'Recycling boxes does not describe the pet.'],
        ],
        answer: 0,
        explain: 'Explaining how Squeaky stuffs his cheek pouches develops the feeding description with an engaging detail.',
      }), 4),
    ],
  },
  {
    code: 'rla:2.11C',
    goal: 'You will learn to revise drafts by adding, deleting, and combining words and sentences.',
    words: [
      { term: 'revision', meaning: 'Changing words and sentences to make writing clearer and smoother.' },
      { term: 'combine sentences', meaning: 'Joining two short thoughts into one smooth sentence.' },
    ],
    ideas: [
      { title: 'Join choppy sentences', text: 'Use joining words like and, but, or because to connect related thoughts.' },
      { title: 'Delete repeated words', text: 'Remove extra words that say the same thing twice.' },
    ],
  },

  // Generated editing standards
  {
    code: 'rla:2.11D.i',
    goal: 'You will learn to edit drafts for complete sentences and subject-verb agreement.',
    words: [
      { term: 'subject-verb agreement', meaning: 'Matching singular subjects with singular verbs and plural with plural.' },
      { term: 'complete sentence', meaning: 'A sentence that has both a subject and a predicate and expresses a complete thought.' },
    ],
    ideas: [
      { title: 'Singular subjects take -s', text: 'One dog barks; two dogs bark.' },
      { title: 'Check the subject', text: 'Ask who or what is doing the action to choose the correct verb form.' },
    ],
  },
  {
    code: 'rla:2.11D.ii',
    goal: 'You will learn to edit drafts for past, present, and future verb tenses.',
    words: [
      { term: 'past tense', meaning: 'Action that already happened (walked, ran).' },
      { term: 'present tense', meaning: 'Action happening right now (walks, runs).' },
      { term: 'future tense', meaning: 'Action that will happen later (will walk, will run).' },
    ],
    ideas: [
      { title: 'Check time words', text: 'Yesterday signals past; today signals present; tomorrow signals future.' },
      { title: 'Use will for future', text: 'Put will before the verb for future actions: will play, will visit.' },
    ],
  },
  {
    code: 'rla:2.11D.iii',
    goal: 'You will learn to edit drafts for singular, plural, common, and proper nouns.',
    words: [
      { term: 'proper noun', meaning: 'The specific name of a person, place, or holiday that begins with a capital letter.' },
      { term: 'irregular plural', meaning: 'A plural noun that changes spelling rather than adding -s (children, mice, teeth).' },
    ],
    ideas: [
      { title: 'Capitalize proper nouns', text: 'Capitalize names like Austin, Dr. Lee, and Thanksgiving.' },
      { title: 'Remember irregular plurals', text: 'One child becomes two children; one mouse becomes two mice.' },
    ],
  },
  {
    code: 'rla:2.11D.iv',
    goal: 'You will learn to use adjectives, including articles (a, an, the), correctly.',
    words: [
      { term: 'article', meaning: 'Special adjectives: a, an, and the.' },
      { term: 'comparative adjective', meaning: 'Comparing two things using -er (faster, smaller).' },
      { term: 'superlative adjective', meaning: 'Comparing three or more things using -est (fastest, smallest).' },
    ],
    ideas: [
      { title: 'A versus an', text: 'Use a before consonant sounds (a dog, a ball); use an before vowel sounds (an apple, an elephant).' },
      { title: 'Two or more than two?', text: 'Use -er when comparing two items; use -est when comparing three or more.' },
    ],
  },
  {
    code: 'rla:2.11D.v',
    goal: 'You will learn to use adverbs that convey time and place correctly.',
    words: [
      { term: 'adverb of time', meaning: 'A word telling when an action happens (today, soon, now, yesterday).' },
      { term: 'adverb of place', meaning: 'A word telling where an action happens (outside, inside, here, there).' },
    ],
    ideas: [
      { title: 'Answer when', text: 'Words like soon and today tell the reader when the event takes place.' },
      { title: 'Answer where', text: 'Words like outside and here tell the reader where the action occurs.' },
    ],
  },
  {
    code: 'rla:2.11D.vi',
    goal: 'You will learn to use prepositions and prepositional phrases in sentences.',
    words: [
      { term: 'preposition', meaning: 'A word showing location or direction, like in, on, under, into, or through.' },
      { term: 'prepositional phrase', meaning: 'A group of words starting with a preposition, like under the oak tree.' },
    ],
    ideas: [
      { title: 'Show position', text: 'Prepositions tell where things sit: on the rug, under the porch, beside the tree.' },
      { title: 'Show movement', text: 'Prepositions show direction: into the pool, through the doorway.' },
    ],
  },
  {
    code: 'rla:2.11D.vii',
    goal: 'You will learn to use subjective, objective, and possessive pronouns correctly.',
    words: [
      { term: 'subject pronoun', meaning: 'A pronoun used as the subject of a sentence (I, you, he, she, we, they).' },
      { term: 'object pronoun', meaning: 'A pronoun used after a verb or preposition (me, him, her, us, them).' },
    ],
    ideas: [
      { title: 'Test by dropping the other person', text: 'To choose between "Mia and I" or "Mia and me," remove "Mia and" to hear what sounds right.' },
      { title: 'Subject before verb', text: 'Use I, he, she, and they before the action verb.' },
    ],
  },
  {
    code: 'rla:2.11D.viii',
    goal: 'You will learn to use coordinating conjunctions (and, but, or, so) to form compound subjects and predicates.',
    words: [
      { term: 'conjunction', meaning: 'A connecting word like and, but, or, or so.' },
    ],
    ideas: [
      { title: 'Match the meaning', text: '"And" adds ideas; "but" contrasts; "or" gives choices; "so" shows results.' },
      { title: 'Connect smoothly', text: 'Join two related actions: "Sam built a kite and flew it at the park."' },
    ],
  },
  {
    code: 'rla:2.11D.ix',
    goal: 'You will learn to capitalize days of the week, months, and letter greetings and closings.',
    words: [
      { term: 'capitalization', meaning: 'Using an uppercase capital letter at the start of specific proper words.' },
    ],
    ideas: [
      { title: 'Days and months', text: 'Always capitalize days (Monday, Friday) and months (April, August).' },
      { title: 'Letter greetings', text: 'Capitalize words in a greeting (Dear Grandma) and the first word of a closing (Your friend).' },
    ],
  },
  {
    code: 'rla:2.11D.x',
    goal: 'You will learn to edit drafts for end marks, apostrophes in contractions, and commas in series and dates.',
    words: [
      { term: 'end punctuation', meaning: 'Marks at the end of sentences: period (.), question mark (?), exclamation point (!).' },
      { term: 'comma in a series', meaning: 'Commas separating three or more items in a list (apples, bananas, and grapes).' },
    ],
    ideas: [
      { title: 'Check the sentence type', text: 'Statements take periods; asking questions take question marks; strong feelings take exclamation points.' },
      { title: 'Commas in dates', text: 'Put a comma between the day and year: July 4, 2024.' },
    ],
  },
  {
    code: 'rla:2.11D.xi',
    goal: 'You will learn to spell grade-appropriate and high-frequency words correctly in editing drafts.',
    words: [
      { term: 'high-frequency words', meaning: 'Common words like because, friend, people, and answer.' },
    ],
    ideas: [
      { title: 'Remember tricky spelling tricks', text: 'Big Elephants Can Always Understand Small Elephants spells BECAUSE.' },
      { title: 'Remember silent letters', text: 'Watch for the silent w in answer and i before e in friend.' },
    ],
  },
];
