// Grade 5 reading walkthroughs, part 2: the rest of the 52 standards. Generated skills have words and big
// ideas only; passage skills add two samples from the short passages in g5-rla-passages.ts.

import { mcq, sample } from '../rla/author.ts';
import type { Lesson, LessonIdea } from '../types.ts';
import {
  BIKES, CAMP, DRAFT_PETS, DRAFT_TRIP, FABLE, FROGS, GRANDPA, LEMONADE, LIBRARY, OAK_POEM, PRAIRIE_DOGS, RECYCLING, SCENE,
  SEED, SNOW, STORM_POEM, SUNSCREEN, TALL_TALE,
} from './g5-rla-passages.ts';

type Words = Lesson['words'];
const lesson = (code: string, goal: string, words: Words, ideas: LessonIdea[], samples?: Lesson['samples']): Lesson =>
  ({ code: `rla:${code}`, goal, words, ideas, ...(samples ? { samples } : {}) });

// A sample question: four choices, the right one at `answer`
const q = (code: string, stem: string, choices: [string, string, string, string], answer: number, explain: string) =>
  mcq({ standard: `rla:${code}`, stem, choices, answer, explain });

export const G5_RLA_LESSONS_MORE: Lesson[] = [
  // ---------- Generated skills ----------
  lesson('5.2B.i', 'You\'ll learn to spell longer words by spelling them one syllable at a time.', [
    { term: 'syllable', meaning: 'A word part with one vowel sound, like gar-den.' },
    { term: 'closed syllable', meaning: 'Ends in a consonant, so the vowel is short: bas-ket.' },
    { term: 'open syllable', meaning: 'Ends in a vowel, so the vowel is long: ro-bot.' },
  ], [
    { title: 'Clap it out', text: 'Say the word slowly and clap each syllable. Spell one syllable at a time.', example: 'thun · der · storm' },
    { title: 'Know the six syllable types', text: 'Closed (bas-), open (ro-), VCe (-cape), vowel team (rain), r-controlled (gar-, -der) and final stable (-ble, -tion).' },
    { title: 'Check each part', text: 'Look at each syllable. Does its vowel sound match the way it\'s spelled?' },
  ]),
  lesson('5.2B.ii', 'You\'ll learn to spell words where a sound changes when an ending is added, like select and selection.', [
    { term: 'base word', meaning: 'The word you start with, like music.' },
    { term: 'suffix', meaning: 'An ending like -ion or -ian.' },
  ], [
    { title: 'The sound changes, the spelling doesn\'t', text: 'When you add -ion to select, the t sounds like /sh/, but you still spell it with a t.', example: 'select → selection · protect → protection' },
    { title: 'Same for c', text: 'When you add -ian to music, the c sounds like /sh/, but you still spell it with a c.', example: 'music → musician · magic → magician' },
    { title: 'Find the base word', text: 'Ask: what word is hiding inside? Spell that part the same way.' },
  ]),
  lesson('5.2B.iii', 'You\'ll learn to spell long words that mix several spelling patterns.', [
    { term: 'multisyllabic', meaning: 'Having more than one syllable, like celebration.' },
  ], [
    { title: 'Break it into chunks', text: 'Long words are easier in parts.', example: 'cel · e · bra · tion · neigh · bor · hood' },
    { title: 'Say every syllable', text: 'People often skip syllables when they speak. Say each one slowly so you don\'t leave letters out.', example: 'tem-per-a-ture, not temp-ra-ture' },
    { title: 'Look for word parts you know', text: 'Many long words are built from smaller ones.', example: 'grand + father · comfort + able' },
  ]),
  lesson('5.2B.iv', 'You\'ll learn how dividing a word into syllables tells you how to spell it.', [
    { term: 'VC/CV', meaning: 'Two consonants in the middle: divide between them (rab-bit, nap-kin).' },
    { term: 'V/CV', meaning: 'One consonant after a long vowel: divide before it (ti-ger, pi-lot).' },
  ], [
    { title: 'Two consonants in the middle', text: 'Divide between them. The first syllable is closed, so its vowel is short.', example: 'rab · bit · pump · kin · con · test' },
    { title: 'One consonant in the middle', text: 'If the first vowel is long, divide before the consonant (ti-ger). If it\'s short, divide after it (cab-in).' },
    { title: 'Short vowel? Look for a double', text: 'A short vowel often needs two consonants after it to stay short.', example: 'rabbit has two b\'s; robot has one' },
  ]),
  lesson('5.2B.v', 'You\'ll learn to spell words with prefixes by keeping the prefix and the base word whole.', [
    { term: 'prefix', meaning: 'A word part added to the beginning, like un-, dis- or mis-.' },
  ], [
    { title: 'Prefix + base word', text: 'Write the whole prefix, then the whole base word. Don\'t drop or double letters.', example: 'mis + spell = misspell · dis + appear = disappear' },
    { title: 'Double letters can be right', text: 'When the prefix ends with the same letter the base word starts with, you get a double.', example: 'un + necessary = unnecessary · il + legal = illegal' },
  ]),
  lesson('5.11D.xi', 'You\'ll learn to catch the spelling mistakes that show up most often in drafts.', [
    { term: 'high-frequency word', meaning: 'A word that appears very often in writing, like because or friend.' },
  ], [
    { title: 'Know the tricky ones', text: 'Some words trick almost everyone.', example: 'believe · because · friend · different · separate · tomorrow' },
    { title: 'Use memory tricks', text: '"There\'s a rat in separate." "A friend to the end." "I before e except after c" (believe, receive).' },
    { title: 'Check words copied from a text', text: 'When a word appears in the passage, make sure your spelling matches.' },
  ]),
  lesson('5.3D', 'You\'ll learn what adages and puns mean and why writers use them.', [
    { term: 'adage', meaning: 'An old saying that gives advice, like "Look before you leap."' },
    { term: 'pun', meaning: 'A joke that uses a word with two meanings, or two words that sound alike.' },
  ], [
    { title: 'Adages are advice', text: 'Ask: what advice is this saying giving? Then connect it to what is happening.', example: '"The early bird catches the worm" = starting early pays off' },
    { title: 'Puns play with words', text: 'Find the word that means two things at once.', example: '"I couldn\'t make enough dough" = bread dough and money' },
  ]),
  lesson('5.11D', 'You\'ll learn to use apostrophes in possessives and contractions.', [
    { term: 'possessive', meaning: 'A word that shows ownership, like the dog\'s bowl.' },
    { term: 'contraction', meaning: 'Two words joined with an apostrophe in place of missing letters, like can\'t.' },
  ], [
    { title: 'One owner: add \'s', text: 'If one person or thing owns something, add \'s.', example: 'the dog\'s collar · my brother\'s bike' },
    { title: 'Plural owners ending in s: add \'', text: 'If more than one owns it and the plural ends in s, add only an apostrophe.', example: 'the girls\' backpacks · the players\' uniforms' },
    { title: 'Contractions', text: 'The apostrophe takes the place of missing letters.', example: 'can not → can\'t · we are → we\'re' },
  ]),
  lesson('5.11D.v', 'You\'ll learn to connect ideas with conjunctive adverbs like however and therefore.', [
    { term: 'conjunctive adverb', meaning: 'A word like however, therefore or also that shows how two ideas are connected.' },
  ], [
    { title: 'Pick the right connection', text: '**however** = a contrast · **therefore** = a result · **also** or **in addition** = more information · **instead** = a replacement.' },
    { title: 'Punctuate it', text: 'Use a semicolon before the adverb and a comma after it.', example: 'It rained all day; therefore, the game was canceled.' },
  ]),
  lesson('5.11D.vi', 'You\'ll learn to match the verb with the subject when a prepositional phrase gets in the way.', [
    { term: 'prepositional phrase', meaning: 'A group of words starting with a word like of, in, on or with: "of crayons," "in the hive."' },
  ], [
    { title: 'Find the real subject', text: 'Cover the prepositional phrase. What is the sentence really about?', example: 'The box (of crayons) **is** on the shelf.' },
    { title: 'Then match the verb', text: 'A singular subject takes a singular verb (is, was). A plural subject takes a plural verb (are, were).', example: 'The leaves on the tree **are** turning orange.' },
  ]),
  lesson('5.11D.vii', 'You\'ll learn to choose the right pronoun and to match verbs with indefinite pronouns.', [
    { term: 'pronoun', meaning: 'A word that takes the place of a noun, like I, me, they or them.' },
    { term: 'indefinite pronoun', meaning: 'A pronoun that doesn\'t name a specific person, like everyone, each or both.' },
  ], [
    { title: 'I or me?', text: 'Take away the other person and say it alone.', example: '"Marcus and I built it" (I built it) · "The coach gave Eli and me jerseys" (gave me)' },
    { title: 'Singular indefinite pronouns', text: 'Everyone, everybody, each, nobody and somebody are singular.', example: 'Everyone **gets** a turn. · Each of the puppies **has** a tag.' },
    { title: 'Plural indefinite pronouns', text: 'Both, few, many and several are plural.', example: 'Both of the twins **like** chess.' },
  ]),
  lesson('5.11D.viii', 'You\'ll learn to join ideas into complex sentences with words like because, although and after.', [
    { term: 'subordinating conjunction', meaning: 'A word like because, although, when or after that joins two ideas into one sentence.' },
    { term: 'complex sentence', meaning: 'A sentence with a main idea and a second idea that depends on it.' },
  ], [
    { title: 'Choose the relationship', text: '**because** = reason · **although** = in spite of · **after**, **before**, **when**, **until** = time · **unless** = only if not.' },
    { title: 'Comma when it comes first', text: 'If the sentence starts with the conjunction, put a comma after that part.', example: 'Because it rained, we stayed inside. · We stayed inside because it rained.' },
  ]),
  lesson('5.11D.x', 'You\'ll learn to use commas in compound sentences and quotation marks in dialogue.', [
    { term: 'compound sentence', meaning: 'Two complete sentences joined by and, but, or or so.' },
    { term: 'dialogue', meaning: 'The exact words characters say.' },
  ], [
    { title: 'Comma before the joining word', text: 'In a compound sentence, put a comma before and, but, or or so.', example: 'I wanted to swim, but the pool was closed.' },
    { title: 'Quotation marks around the exact words', text: 'Only the spoken words go inside. The comma or end mark goes inside too.', example: '"Wait for me," said Ana.' },
  ]),
  lesson('5.11B.i', 'You\'ll learn to organize writing with a strong introduction, clear transitions and a conclusion.', [
    { term: 'introduction', meaning: 'The beginning, which tells what the writing is about.' },
    { term: 'transition', meaning: 'A word or phrase that connects ideas, like first, however or as a result.' },
    { term: 'conclusion', meaning: 'The ending, which wraps up the main idea.' },
  ], [
    { title: 'Start strong', text: 'A good introduction tells the topic and makes the reader want to keep reading.' },
    { title: 'Connect with transitions', text: 'Use transitions that match the connection.', example: 'order: first, next, finally · contrast: however · result: as a result · more: in addition' },
    { title: 'End with purpose', text: 'A conclusion connects back to the main idea. It doesn\'t add a brand-new topic.' },
  ]),

  // ---------- Passage skills ----------
  lesson('5.3A', 'You\'ll learn to use a dictionary entry to find the right meaning, syllables and pronunciation of a word.', [
    { term: 'entry', meaning: 'The part of a dictionary about one word.' },
    { term: 'part of speech', meaning: 'Whether a word is a noun, verb, adjective and so on.' },
  ], [
    { title: 'Many words have many meanings', text: 'A dictionary entry lists them by number. Read the sentence, then test each meaning in it.' },
    { title: 'Check the part of speech', text: 'If the word is an action in the sentence, look for a verb meaning.' },
    { title: 'Syllables and sounds', text: 'Entries show syllables with dots (lem·on·ade) and how to say the word.' },
  ], [
    sample(LEMONADE, q('5.3A', 'Read this entry: **stand** verb. 1. to be on your feet 2. to put up with. noun. 3. a small table or booth for selling things. Which meaning of stand is used in the title "The Lemonade Stand"?',
      ['meaning 1', 'meaning 2', 'meaning 3', 'none of them'], 2,
      'Kira sells lemonade, so a "lemonade stand" is a small booth for selling things: meaning 3. It is a noun in the title.'), 5),
    sample(SEED, q('5.3A', 'Read this entry: **coat** noun. 1. a piece of clothing worn outdoors 2. a thin layer covering something 3. an animal\'s fur. Which meaning of coat is used in "its coat splits open"?',
      ['meaning 1', 'meaning 2', 'meaning 3', 'none of them'], 1,
      'A seed doesn\'t wear clothing or have fur. Its coat is the thin layer covering it: meaning 2.'), 5),
  ]),
  lesson('5.3B', 'You\'ll learn to use context clues to figure out unfamiliar words and words with more than one meaning.', [
    { term: 'context clues', meaning: 'Words and sentences around a word that hint at its meaning.' },
  ], [
    { title: 'Look around the word', text: 'Read the sentence before, the sentence with the word, and the sentence after.' },
    { title: 'Look for kinds of clues', text: 'A definition, an example, a synonym, or an opposite nearby can explain the word.' },
    { title: 'Test it', text: 'Put your meaning in place of the word. If the sentence still makes sense, you\'re probably right.' },
  ], [
    sample(PRAIRIE_DOGS, q('5.3B', 'In paragraph 1, what does the word **burrow** mean?',
      ['a large group of animals', 'a tunnel dug in the ground for a home', 'a kind of grass', 'a guard that barks'], 1,
      'The sentence explains it: a burrow is "a long tunnel with rooms for sleeping and raising pups."'), 5),
    sample(SNOW, q('5.3B', 'In paragraph 1, the roads were "glazed with ice." What does **glazed** mean?',
      ['covered with a smooth, shiny layer', 'cracked into pieces', 'cleared by trucks', 'flooded with water'], 0,
      'After an ice storm, roads get a thin, slick coat of ice. Glazed means covered with a smooth, shiny layer.'), 5),
  ]),
  lesson('5.6C', 'You\'ll learn to make predictions using clues from the text, its genre and its structure, and to check them as you read.', [
    { term: 'prediction', meaning: 'A smart guess about what will happen next, based on clues.' },
    { term: 'genre', meaning: 'A kind of writing, like a folktale, a play or an article.' },
  ], [
    { title: 'Use clues', text: 'Characters\' choices, the title, headings and pictures all hint at what\'s coming.' },
    { title: 'Use the genre', text: 'Genres follow patterns. In folktales the underdog often wins; in articles a heading tells what the next section covers.' },
    { title: 'Check and change', text: 'As you read, confirm or fix your prediction based on new clues.' },
  ], [
    sample(LEMONADE, q('5.6C', 'After reading paragraph 1, which prediction makes the most sense?',
      ['Sam will help Kira in some way after all.', 'Kira will buy a basketball instead.', 'The lemonade stand will close forever.', 'Sam will move away.'], 0,
      'The story mentions Sam wanting to help right away. Stories often bring back a detail like that, and Sam does help.'), 5),
    sample(SCENE, q('5.6C', 'Based on the scene, what will most likely happen when the curtain rises?',
      ['Ella will refuse to go on stage.', 'Ella will perform her lines from memory.', 'Marcus will cancel the play.', 'Ella will find the script in the costumes.'], 1,
      'Marcus reminds Ella she knows every line, and she agrees. The curtain rising suggests she will perform without the script.'), 5),
  ]),
  lesson('5.6E', 'You\'ll learn to connect what you read to your own life, to other texts and to the world.', [
    { term: 'connection', meaning: 'A link between a text and something else you know.' },
  ], [
    { title: 'Text to self', text: 'Ask: has something like this happened to me or someone I know?' },
    { title: 'Text to text', text: 'Ask: how is this like another story or article I\'ve read?' },
    { title: 'Text to world', text: 'Ask: how does this connect to something happening in my community or the world?' },
  ], [
    sample(RECYCLING, q('5.6E', 'How does Text 2 connect to the problem in Text 1?',
      ['It shows students reducing the plastic that Text 1 says harms the environment.', 'It explains how landfills are built.', 'It argues that plastic is good for oceans.', 'It tells how fish find food.'], 0,
      'Text 1 describes the problem of plastic waste. Text 2 shows a real class cutting down on plastic bottles.'), 5),
    sample(GRANDPA, q('5.6E', 'Which real-world situation best connects to Grandpa\'s story?',
      ['A student who skips practice when it rains', 'A nurse who still goes to work during a snowstorm to care for patients', 'A family that moves to a new town', 'A store that closes early on holidays'], 1,
      'Grandpa delivered papers in a blizzard because people counted on him. A nurse working in a storm shows the same kind of dedication.'), 5),
  ]),
  lesson('5.6G', 'You\'ll learn to sort details to find the key ideas of a text.', [
    { term: 'key idea', meaning: 'An important idea the text is mostly about.' },
    { term: 'detail', meaning: 'A fact, example or description that supports an idea.' },
  ], [
    { title: 'Not all details are equal', text: 'Some details are interesting extras. Key details support the main point.' },
    { title: 'Ask "So what?"', text: 'For each detail, ask what it shows. Details that point to the same idea reveal a key idea.' },
  ], [
    sample(PRAIRIE_DOGS, q('5.6G', 'Which detail best supports the idea that prairie dogs work together to stay safe?',
      ['Prairie dogs eat mostly grasses and seeds.', 'Some towns stretch for miles.', 'Prairie dogs take turns standing guard and bark to warn the others.', 'Prairie dogs are a kind of ground squirrel.'], 2,
      'Taking turns as guards and warning everyone is teamwork for safety. The other details are about food, size or what kind of animal they are.'), 5),
    sample(FROGS, q('5.6G', 'Which detail shows a key difference between frogs and toads?',
      ['Both hatch from eggs.', 'Both begin life as tadpoles.', 'Both are amphibians.', 'Frogs have smooth, wet skin, and toads have dry, bumpy skin.'], 3,
      'The question asks for a difference. The first three choices are ways they are alike.'), 5),
  ]),
  lesson('5.6H', 'You\'ll learn to combine information from two texts to understand something new.', [
    { term: 'synthesize', meaning: 'To put ideas from different places together to form a new understanding.' },
  ], [
    { title: 'Read each text for its point', text: 'First understand what each text says on its own.' },
    { title: 'Look for how they fit', text: 'Does one explain a problem and the other show a solution? Does one give facts and the other an example?' },
    { title: 'State the new idea', text: 'Say something that neither text says alone, but both together support.' },
  ], [
    sample(RECYCLING, q('5.6H', 'What new understanding do both texts together support?',
      ['Plastic breaks down quickly.', 'Small changes at school can reduce the plastic that ends up in landfills and oceans.', 'Animals like eating plastic.', 'Cafeterias should close.'], 1,
      'Text 1 says plastic waste lasts a long time and harms animals. Text 2 shows one week of refillable bottles removing 300 from the trash. Together: small changes help.'), 5),
    sample(BIKES, q('5.6H', 'Why was Helmet Day at Lakeview important? Use both texts.',
      ['Helmets protect riders only when they fit, and many students\' helmets were too small.', 'Students wanted new bike colors.', 'Doctors asked for a parade.', 'Helmets make bikes go faster.'], 0,
      'Text 1 says helmets work only if they fit. Text 2 says many students\' helmets were too small. Together they explain why fitting new helmets mattered.'), 5),
  ]),
  lesson('5.7C', 'You\'ll learn to support your answers with evidence from the text.', [
    { term: 'text evidence', meaning: 'Exact words or details from the text that prove an answer.' },
  ], [
    { title: 'Answer first', text: 'Decide what you think the answer is.' },
    { title: 'Then prove it', text: 'Find the sentence that best proves it. The best evidence matches the answer directly, not just the topic.' },
    { title: 'Watch out for close calls', text: 'Wrong evidence choices are often true sentences from the text that prove something else.' },
  ], [
    sample(LEMONADE, q('5.7C', 'Which sentence best shows that Sam helped the lemonade stand succeed?',
      ['"Kira wanted to earn enough money to buy a new soccer ball."', '"For an hour, no one stopped."', '"Soon a line of neighbors formed."', '"On Saturday, Kira set up her lemonade stand."'], 2,
      'Right after Sam starts shouting, "a line of neighbors formed." That sentence shows his help worked.'), 5),
    sample(SEED, q('5.7C', 'Which sentence best supports the idea that a seed is alive even though it looks lifeless?',
      ['"Inside it is a tiny plant waiting to grow."', '"Then a shoot pushes up toward the light."', '"Next, a root pushes down into the soil."', '"In about a week, a dry seed has become a growing plant."'], 0,
      'The first paragraph says a seed "may look lifeless, but inside it is a tiny plant waiting to grow." That directly supports the idea.'), 5),
  ]),
  lesson('5.7D', 'You\'ll learn to summarize: to retell the most important parts briefly and in order.', [
    { term: 'summary', meaning: 'A short retelling of only the most important ideas or events.' },
    { term: 'paraphrase', meaning: 'To say something in your own words without changing its meaning.' },
  ], [
    { title: 'Stories: who, wants, but, so, then', text: 'Who is the main character? What do they want? What gets in the way? What do they do? How does it end?' },
    { title: 'Articles: main idea + key points', text: 'State the central idea, then the most important supporting points.' },
    { title: 'Leave out extras', text: 'Small details, opinions and examples don\'t belong in a summary.' },
  ], [
    sample(LEMONADE, q('5.7D', 'Which is the best summary of the story?',
      ['Kira wants a soccer ball. She sells lemonade.', 'Kira tells Sam he is too young to help, but when no one buys lemonade, his shouting brings customers. Kira shares the money and thanks him.', 'Sam rings his bike bell.', 'Neighbors drink lemonade on Saturday.'], 1,
      'A summary tells the problem, the key events and the ending in order. The second choice does that.'), 5),
    sample(SEED, q('5.7D', 'Which is the best summary of the passage?',
      ['A bean seed soaks up water, grows a root and then a shoot, and opens its first leaves, becoming a plant in about a week.', 'Seeds look lifeless.', 'Roots collect water.', 'Leaves make food from sunlight.'], 0,
      'The best summary covers every main step in order. The other choices are single details.'), 5),
  ]),
  lesson('5.8A', 'You\'ll learn to find the themes, or life lessons, in a story and support them with evidence.', [
    { term: 'theme', meaning: 'A message about life that a story shows, like "teamwork makes hard jobs easier."' },
  ], [
    { title: 'Topic vs. theme', text: 'A topic is one word (friendship). A theme is a full idea about it (true friends help each other).' },
    { title: 'Look at what changes', text: 'What does the main character learn? That lesson is often a theme.' },
    { title: 'Stories can have more than one', text: 'Look for more than one message, and find evidence for each.' },
  ], [
    sample(FABLE, q('5.8A', 'What is the theme of the fable?',
      ['Crows are smarter than other birds.', 'Water is hard to find.', 'Patience and small steps can solve a big problem.', 'Pitchers should be shorter.'], 2,
      'The crow drops pebbles one at a time until she can drink. The moral says it: "Little by little does the trick."'), 5),
    sample(LEMONADE, q('5.8A', 'Which theme does the story develop?',
      ['Everyone can help, even people others underestimate.', 'Lemonade is the best summer drink.', 'Soccer balls cost too much.', 'Saturday is the best day.'], 0,
      'Kira thinks Sam is too young, but he turns out to be "the best part of the stand."'), 5),
  ]),
  lesson('5.8B', 'You\'ll learn to analyze how characters relate to each other and how conflicts change them.', [
    { term: 'conflict', meaning: 'A problem or struggle between characters, or within a character.' },
    { term: 'relationship', meaning: 'How characters feel about and treat each other.' },
  ], [
    { title: 'Notice how they treat each other', text: 'What do characters say and do to each other at the start? At the end?' },
    { title: 'Find the change', text: 'A conflict often changes how characters see each other.' },
  ], [
    sample(LEMONADE, q('5.8B', 'How does Kira\'s view of her brother change?',
      ['She thinks he is too young at first, but then she values his help.', 'She likes him at first, but then gets angry.', 'She never changes her mind.', 'She thinks he should get a job.'], 0,
      'At first Kira says Sam is too young. At the end she gives him half the money and calls him "the best part of the stand."'), 5),
    sample(CAMP, q('5.8B', 'How does Tasha affect the narrator?',
      ['Tasha makes her want to go home.', 'Tasha helps her start to enjoy camp.', 'Tasha teases her about the bugs.', 'Tasha takes her sunscreen.'], 1,
      'After Tasha shows her how to catch fireflies, the narrator gains "a best friend" and admits she may like camp.'), 5),
  ]),
  lesson('5.8D', 'You\'ll learn how the setting, including time and place, shapes what happens in a story.', [
    { term: 'setting', meaning: 'Where and when a story takes place.' },
  ], [
    { title: 'Setting is more than a backdrop', text: 'Weather, place and time can cause problems or shape choices.' },
    { title: 'Ask "What if?"', text: 'If the story happened somewhere else, would the plot still work? If not, the setting matters.' },
  ], [
    sample(SNOW, q('5.8D', 'How does the setting affect the plot?',
      ['The ice storm cancels the game, so Mateo and his sisters make their own game at home.', 'The warm weather lets them play outside.', 'The city is too noisy.', 'The house has no couch.'], 0,
      'The rare ice storm in Dallas cancels every school event. That setting causes the problem and leads to the living-room game.'), 5),
    sample(SCENE, q('5.8D', 'Why does it matter that the scene takes place ten minutes before the play?',
      ['It shows the play was canceled.', 'It adds pressure, because Ella has almost no time to find her script.', 'It explains why Marcus is late.', 'It tells what time the show ends.'], 1,
      'With only ten minutes left, losing the script is a much bigger problem. The time creates the tension.'), 5),
  ]),
  lesson('5.9A', 'You\'ll learn the features of folktales, fables, legends, myths and tall tales.', [
    { term: 'fable', meaning: 'A short story, often with animals, that teaches a moral.' },
    { term: 'tall tale', meaning: 'A story with a larger-than-life hero and wild exaggerations.' },
    { term: 'pourquoi tale', meaning: 'A folktale that explains why something in nature is the way it is.' },
  ], [
    { title: 'Fables teach a lesson', text: 'Look for animal characters and a moral, often stated at the end.' },
    { title: 'Tall tales exaggerate', text: 'The hero does impossible things, like lassoing a tornado, often to explain features of the land.' },
    { title: 'Myths and legends', text: 'Myths explain nature with gods or magic. Legends tell of heroes who may have been real.' },
  ], [
    sample(FABLE, q('5.9A', 'Which detail shows that "The Thirsty Crow" is a fable?',
      ['It takes place long ago.', 'It ends with a stated moral.', 'It has a pitcher in it.', 'It is short.'], 1,
      'Fables teach a lesson and often state it at the end: "Moral: Little by little does the trick."'), 5),
    sample(TALL_TALE, q('5.9A', 'Which detail shows that "Big Sal of the Brazos" is a tall tale?',
      ['It takes place in Texas.', 'It mentions a river.', 'Sal does impossible things, like lassoing a tornado.', 'Sal wears boots.'], 2,
      'Tall tales have heroes with impossible, exaggerated abilities. Lassoing a tornado and wringing out a cloud are wild exaggerations.'), 5),
  ]),
  lesson('5.9B', 'You\'ll learn how poets use sound and figurative language, and how the speaker differs from the poet.', [
    { term: 'speaker', meaning: 'The voice in a poem, who may not be the poet.' },
    { term: 'rhyme', meaning: 'Words with the same ending sound, like low and slow.' },
    { term: 'onomatopoeia', meaning: 'A word that imitates a sound, like rat-a-tat.' },
  ], [
    { title: 'Listen to the sound', text: 'Read aloud. Notice rhyme, rhythm, repetition and sound words.' },
    { title: 'Who is talking?', text: 'The speaker might be a child, an animal or even a tree. Use clues in the poem.' },
  ], [
    sample(OAK_POEM, q('5.9B', 'Who is the speaker of "The Old Oak"?',
      ['A child who climbs the tree', 'The oak tree itself', 'A deer in the rain', 'A park ranger'], 1,
      'The speaker says "I have stood on this hill for a hundred years" and "my bark is rough." The tree is speaking.'), 5),
    sample(STORM_POEM, q('5.9B', 'Which sound device is used in line 4, "Rat-a-tat, steady and slow"?',
      ['onomatopoeia', 'a question', 'a list', 'a simile'], 0,
      '"Rat-a-tat" imitates the sound of rain drumming on a tin roof. Words that imitate sounds are onomatopoeia.'), 5),
  ]),
  lesson('5.9C', 'You\'ll learn how plays are built: character tags, stage directions, acts and scenes.', [
    { term: 'character tag', meaning: 'The name before a line that tells who is speaking.' },
    { term: 'stage directions', meaning: 'Notes, often in italics or parentheses, that tell actors what to do. They aren\'t spoken.' },
    { term: 'scene', meaning: 'A part of a play that happens in one place and time.' },
  ], [
    { title: 'Read the tags', text: 'The name in capitals before each line tells who says it.' },
    { title: 'Read the directions', text: 'Stage directions describe the setting and how characters move or feel.' },
  ], [
    sample(SCENE, q('5.9C', 'What does the stage direction "(panicking)" tell the actor playing Ella?',
      ['to speak calmly', 'to say her line in a scared, rushed way', 'to leave the stage', 'to sing the line'], 1,
      'Stage directions tell actors how to act. "Panicking" means Ella should sound scared and rushed.'), 5),
    sample(SCENE, q('5.9C', 'What is the purpose of the first stage direction, before anyone speaks?',
      ['It tells the setting and what is happening when the scene begins.', 'It is the first line Ella says.', 'It tells how the play ends.', 'It lists the actors\' real names.'], 0,
      'The opening direction sets the scene: the school stage, ten minutes before the play, with Ella searching.'), 5),
  ]),
  lesson('5.9D.ii', 'You\'ll learn how text features like headings, sidebars and timelines help you understand informational text.', [
    { term: 'heading', meaning: 'A title for a section that tells what it is about.' },
    { term: 'sidebar', meaning: 'A box beside the main text with extra information.' },
  ], [
    { title: 'Headings are signposts', text: 'They tell you what each section covers so you can find information fast.' },
    { title: 'Sidebars add extras', text: 'Ask: what does this box add that the main text doesn\'t?' },
  ], [
    sample(PRAIRIE_DOGS, q('5.9D.ii', 'What does the sidebar "Fast Facts" add?',
      ['Quick extra facts, like what prairie dogs eat', 'The story of one prairie dog family', 'Steps for building a burrow', 'Reasons to protect hawks'], 0,
      'The sidebar adds facts not in the main text: what kind of animal they are, what they eat, and how big a town can be.'), 5),
    sample(FROGS, q('5.9D.ii', 'How do the headings "Alike" and "Different" help the reader?',
      ['They show which animal is better.', 'They sort the facts into similarities and differences.', 'They tell the order things happen.', 'They name the scientists.'], 1,
      'The headings tell readers which section compares how frogs and toads are alike and which shows how they differ.'), 5),
  ]),
  lesson('5.9D.iii', 'You\'ll learn how informational text is organized, such as in order, by cause and effect, or by comparison.', [
    { term: 'sequence', meaning: 'Information in time order or step by step.' },
    { term: 'compare and contrast', meaning: 'Showing how things are alike and different.' },
    { term: 'cause and effect', meaning: 'Showing why something happens and what happens as a result.' },
  ], [
    { title: 'Look for signal words', text: 'Sequence: first, next, finally. Compare: both, but, however. Cause and effect: because, so, as a result.' },
    { title: 'Ask how the ideas connect', text: 'The organization matches the author\'s goal: explaining a process, comparing, or showing causes.' },
  ], [
    sample(SEED, q('5.9D.iii', 'How is the passage organized?',
      ['by comparing two plants', 'in time order, step by step', 'by problem and solution', 'by listing opinions'], 1,
      'Signal words like first, next, then and finally show the steps of a seed becoming a plant in order.'), 5),
    sample(FROGS, q('5.9D.iii', 'How is the passage organized?',
      ['in time order', 'by cause and effect', 'by comparing and contrasting', 'as a story'], 2,
      'It shows how frogs and toads are alike and how they are different.'), 5),
  ]),
  lesson('5.9E.i', 'You\'ll learn to find the claim, the main point an author argues.', [
    { term: 'claim', meaning: 'The main point an author wants readers to agree with.' },
    { term: 'argumentative text', meaning: 'Writing that tries to convince readers using reasons and evidence.' },
  ], [
    { title: 'Look at the beginning and end', text: 'Authors usually state the claim early and repeat it in the conclusion.' },
    { title: 'Claims can be argued', text: 'A claim is something people could disagree with, not just a fact.' },
  ], [
    sample(LIBRARY, q('5.9E.i', 'What is the author\'s claim?',
      ['Libraries have many books.', 'The public library should be open on Sundays.', 'Students have tests on Mondays.', 'Volunteers like libraries.'], 1,
      'The author states it at the start and asks for it at the end: the library should be open on Sundays.'), 5),
    sample(SUNSCREEN, q('5.9E.i', 'What does the ad want readers to believe?',
      ['Oranges are healthy.', 'Kids should use Sunny Day Sunscreen.', 'Pools are dangerous.', 'Summer is too hot.'], 1,
      'Everything in the ad pushes one point: kids should use Sunny Day Sunscreen.'), 5),
  ]),
  lesson('5.9E.ii', 'You\'ll learn how authors use facts to support an argument, and to answer arguments against it.', [
    { term: 'evidence', meaning: 'Facts, numbers, examples or expert opinions that support a claim.' },
    { term: 'counterargument', meaning: 'A reason someone might disagree, which the author answers.' },
  ], [
    { title: 'Facts make arguments stronger', text: 'Numbers, survey results and what experts say are harder to argue with than opinions.' },
    { title: 'Answering the other side', text: 'Good arguments name an objection and explain why it doesn\'t change the claim.' },
  ], [
    sample(LIBRARY, q('5.9E.ii', 'Which fact does the author use to support the claim?',
      ['In a survey, 8 out of 10 students said they would use the library on Sundays.', 'The library has a quiet room.', 'Libraries are old buildings.', 'The council meets on Tuesdays.'], 0,
      'A survey result is a fact that shows many students want Sunday hours.'), 5),
    sample(LIBRARY, q('5.9E.ii', 'How does the author answer people who say Sunday hours cost too much?',
      ['By agreeing to give up', 'By explaining that volunteers would help keep costs low', 'By saying money doesn\'t matter', 'By changing the claim'], 1,
      'The author admits the cost concern, then answers it: volunteers have offered to help.'), 5),
  ]),
  lesson('5.9E.iii', 'You\'ll learn to identify the audience, the people an argument is written for.', [
    { term: 'audience', meaning: 'The readers an author is trying to reach.' },
  ], [
    { title: 'Look for who is addressed', text: 'Greetings like "To the city council" or words like "Kids" name the audience.' },
    { title: 'Ask who can act', text: 'Arguments are often aimed at people who can make the change the author wants.' },
  ], [
    sample(LIBRARY, q('5.9E.iii', 'Who is the audience for this argument?',
      ['students at the school', 'the members of the city council', 'library volunteers', 'parents who work weekends'], 1,
      'It begins "To the members of the city council" and asks them to vote. They are the audience.'), 5),
    sample(SUNSCREEN, q('5.9E.iii', 'Who is the ad mainly written for?',
      ['doctors', 'kids', 'pool owners', 'teachers'], 1,
      'The ad begins "Kids, are you tired of sunburns" and tells them to ask their parents.'), 5),
  ]),
  lesson('5.10A', 'You\'ll learn to explain an author\'s purpose and message.', [
    { term: 'author\'s purpose', meaning: 'Why the author wrote: to inform, to persuade, or to entertain.' },
    { term: 'message', meaning: 'The big idea the author wants readers to take away.' },
  ], [
    { title: 'Inform, persuade, entertain', text: 'Facts and explanations inform. Reasons and requests persuade. Stories and poems entertain.' },
    { title: 'Look for the message', text: 'Ask: what does the author want me to think, feel or do after reading?' },
  ], [
    sample(SEED, q('5.10A', 'What is the author\'s main purpose?',
      ['to persuade readers to plant beans', 'to explain how a seed grows into a plant', 'to tell a funny story', 'to compare beans and corn'], 1,
      'The passage explains each step of a seed\'s growth. Its purpose is to inform.'), 5),
    sample(SUNSCREEN, q('5.10A', 'What is the main purpose of the ad?',
      ['to teach how sunscreen is made', 'to persuade kids to use Sunny Day Sunscreen', 'to tell a story about summer', 'to warn about oranges'], 1,
      'The ad gives reasons and ends with "Ask your parents to grab a bottle today." Its purpose is to persuade.'), 5),
  ]),
  lesson('5.10B', 'You\'ll learn how the way a text is structured helps the author\'s purpose.', [
    { term: 'text structure', meaning: 'How a text is organized: in order, compare and contrast, problem and solution, and so on.' },
  ], [
    { title: 'Structure fits the goal', text: 'To explain steps, authors use order. To show differences, they compare. To persuade, they give a claim, reasons and a response to the other side.' },
    { title: 'Ask why this way', text: 'How does organizing it this way help readers understand the author\'s point?' },
  ], [
    sample(FROGS, q('5.10B', 'Why does the author describe how frogs and toads are alike before telling how they differ?',
      ['to show they are the same animal', 'to help readers see that two related animals still have clear differences', 'to tell a story about a frog', 'to list steps for catching a toad'], 1,
      'Starting with how they are alike shows they are related. Then the differences stand out clearly.'), 5),
    sample(LIBRARY, q('5.10B', 'How does the structure of the letter help the author persuade?',
      ['It tells a story from long ago.', 'It states a claim, gives reasons, answers an objection, and asks for a vote.', 'It compares two libraries.', 'It lists library rules.'], 1,
      'Claim, reasons, a response to the other side, and a call to action is a strong structure for an argument.'), 5),
  ]),
  lesson('5.10C', 'You\'ll learn why authors use print and graphic features like headings, bold words and boxes.', [
    { term: 'print features', meaning: 'Headings, bold or italic words, captions and labels.' },
    { term: 'graphic features', meaning: 'Pictures, diagrams, charts, maps and sidebars.' },
  ], [
    { title: 'Features have jobs', text: 'Headings organize. Bold words show important terms. Diagrams show what\'s hard to describe. Sidebars add extras.' },
    { title: 'Ask what it adds', text: 'Why did the author include it? What would be harder to understand without it?' },
  ], [
    sample(PRAIRIE_DOGS, q('5.10C', 'Why does the author include the heading "Underground Cities"?',
      ['to tell readers the section is about prairie dog towns and burrows', 'to show that prairie dogs live in real cities', 'to list prairie dog foods', 'to name the author'], 0,
      'The heading previews the topic of the section: the large underground towns prairie dogs build.'), 5),
    sample(FROGS, q('5.10C', 'What is the purpose of the headings in "Frogs and Toads"?',
      ['to separate the ways the animals are alike from the ways they are different', 'to show which animal is louder', 'to give the scientific names', 'to tell a story'], 0,
      'The headings "Alike" and "Different" divide the passage so readers can compare easily.'), 5),
  ]),
  lesson('5.10D', 'You\'ll learn how imagery, similes, metaphors and sound devices help authors create pictures and feelings.', [
    { term: 'imagery', meaning: 'Words that help you see, hear, feel, smell or taste something.' },
    { term: 'simile', meaning: 'A comparison using like or as: "dark as a bruise."' },
    { term: 'personification', meaning: 'Giving human traits to something that isn\'t human.' },
  ], [
    { title: 'Find the comparison', text: 'Ask: what two things are being compared, and what do they have in common?' },
    { title: 'Ask why', text: 'What does the comparison help you picture or feel?' },
  ], [
    sample(STORM_POEM, q('5.10D', 'In line 5, the puddles "fill like silver cups." What does this simile help the reader picture?',
      ['puddles that are made of metal', 'shiny puddles filling with rain', 'cups left outside', 'a dry garden'], 1,
      'Comparing the puddles to silver cups helps you picture them shining as they fill with rain.'), 5),
    sample(OAK_POEM, q('5.10D', 'In line 7, the oak says, "I stretch out my arms." What does this personification show?',
      ['the tree is a person', 'the branches spread out as new leaves grow in spring', 'someone is climbing the tree', 'the tree is falling down'], 1,
      'Trees don\'t have arms, but "stretch out my arms" helps you picture the branches spreading as the tree grows new leaves.'), 5),
  ]),
  lesson('5.10E', 'You\'ll learn to identify first- and third-person point of view and how it affects a story.', [
    { term: 'first person', meaning: 'The narrator is a character who uses I and me.' },
    { term: 'third person', meaning: 'The narrator is outside the story and uses he, she and they.' },
  ], [
    { title: 'Look at the pronouns', text: 'I and me outside of dialogue = first person. He, she and they = third person.' },
    { title: 'What can the narrator know?', text: 'A first-person narrator only knows their own thoughts. A third-person narrator can share more.' },
  ], [
    sample(CAMP, q('5.10E', 'From what point of view is "First Day at Camp" told?',
      ['first person, by a camper', 'third person, by an outside narrator', 'first person, by Tasha', 'third person, by Mom'], 0,
      'The narrator uses "I" and is a camper. Tasha is described by the narrator, so she isn\'t telling the story.'), 5),
    sample(LEMONADE, q('5.10E', 'How is "The Lemonade Stand" told?',
      ['in first person by Kira', 'in first person by Sam', 'in third person by a narrator outside the story', 'in the second person'], 2,
      'The narrator uses "Kira," "her" and "he," and isn\'t a character, so it\'s third person.'), 5),
  ]),
  lesson('5.10F', 'You\'ll learn how an author\'s word choice creates a voice, the personality you hear in the writing.', [
    { term: 'voice', meaning: 'The personality of the writing, like funny, serious or excited.' },
    { term: 'word choice', meaning: 'The specific words a writer picks.' },
  ], [
    { title: 'Listen to it', text: 'Read a few sentences in your head. Does it sound chatty, formal, funny or grumpy?' },
    { title: 'Find the clues', text: 'Short sentences, jokes, exaggerations and casual words all shape voice.' },
  ], [
    sample(CAMP, q('5.10F', 'Which words best describe the narrator\'s voice?',
      ['serious and formal', 'humorous and honest', 'angry and mean', 'scared and quiet'], 1,
      'Lines like "bugs that stay outside where they belong" and "Fine. Maybe I am a little bit of a camp person" are funny and honest.'), 5),
    sample(GRANDPA, q('5.10F', 'How does the author\'s word choice show Grandpa\'s voice in the last sentence?',
      ['It shows he is proud of his hard work, and a little playful.', 'It shows he is sad.', 'It shows he is bored.', 'It shows he is confused.'], 0,
      'Grandpa says no one missed their news "grinning," and adds "I never missed a morning again." He sounds proud and a bit playful.'), 5),
  ]),
  lesson('5.10G', 'You\'ll learn why authors use hyperbole, stereotypes and anecdotes.', [
    { term: 'hyperbole', meaning: 'Extreme exaggeration, like "best in the whole universe."' },
    { term: 'stereotype', meaning: 'An unfair idea that everyone in a group is the same.' },
    { term: 'anecdote', meaning: 'A short, real story used to make a point.' },
  ], [
    { title: 'Hyperbole grabs attention', text: 'It isn\'t meant literally. It makes a feeling stronger or makes readers laugh.' },
    { title: 'Anecdotes make ideas real', text: 'A quick true story helps readers remember the point.' },
    { title: 'Watch for stereotypes', text: 'Authors may mention one to show it is wrong.' },
  ], [
    sample(SUNSCREEN, q('5.10G', 'Why does the ad call Sunny Day "the best sunscreen in the whole universe"?',
      ['to give an exact scientific fact', 'to exaggerate so readers get excited about the product', 'to compare it with space travel', 'to warn about the sun'], 1,
      'No one has tested every sunscreen in the universe. This hyperbole is meant to grab attention and excite readers.'), 5),
    sample(GRANDPA, q('5.10G', 'Why does the author include the anecdote about the blizzard?',
      ['to describe winter weather', 'to show Grandpa\'s idea that hard work is a habit you build', 'to explain how newspapers are printed', 'to show the town was small'], 1,
      'The blizzard story is a real example of Grandpa\'s hard work, and it supports his saying about building habits.'), 5),
  ]),
  lesson('5.11B.ii', 'You\'ll learn to develop ideas in a draft with specific facts and details.', [
    { term: 'specific detail', meaning: 'An exact fact, example or description, not a general statement.' },
  ], [
    { title: 'Vague vs. specific', text: '"It was big" is vague. "It was as long as a school bus" is specific.' },
    { title: 'The best addition supports the idea', text: 'Choose a detail that explains or proves the sentence it follows, not one that changes the topic.' },
  ], [
    sample(DRAFT_PETS, q('5.11B.ii', 'Which sentence would best support sentence 2, "A pet would teach us responsibility"?',
      ['Guinea pigs come in many colors.', 'We could take turns feeding the pet and cleaning its cage each week.', 'My cousin has a dog.', 'Pets are cute.'], 1,
      'Taking turns with feeding and cleaning is a specific example of the responsibility a pet would teach.'), 5),
    sample(DRAFT_TRIP, q('5.11B.ii', 'Which sentence should replace sentence 3, "It was big," to add a specific detail?',
      ['It was really, really big.', 'The skeleton was longer than our whole classroom.', 'Dinosaurs lived a long time ago.', 'I like dinosaurs.'], 1,
      '"Longer than our whole classroom" helps the reader picture exactly how big the skeleton was.'), 5),
  ]),
  lesson('5.11C', 'You\'ll learn to revise sentences by combining, adding, deleting or rearranging ideas.', [
    { term: 'revise', meaning: 'To improve how a piece of writing is organized and worded.' },
    { term: 'combine', meaning: 'To join two short sentences into one smoother sentence.' },
  ], [
    { title: 'Combine choppy sentences', text: 'Two short sentences about the same thing can often become one.', example: 'Guinea pigs are friendly. They are easy to care for. → Guinea pigs are friendly and easy to care for.' },
    { title: 'Delete what doesn\'t belong', text: 'A sentence that doesn\'t fit the topic or repeats an idea should go.' },
  ], [
    sample(DRAFT_PETS, q('5.11C', 'What is the best way to combine sentences 4 and 5?',
      ['Guinea pigs are friendly, they are easy to care for.', 'Guinea pigs are friendly and easy to care for.', 'Guinea pigs are friendly and they are and easy to care for.', 'Friendly, guinea pigs, easy to care for.'], 1,
      'Both sentences describe guinea pigs, so join the two describing words with "and" and avoid repeating "they are."'), 5),
    sample(DRAFT_TRIP, q('5.11C', 'Sentence 3, "It was big," doesn\'t add anything new. What is the best revision?',
      ['Delete sentence 3, because sentence 2 already says the skeleton was huge.', 'Delete sentence 1.', 'Move sentence 5 to the beginning.', 'Delete sentence 4.'], 0,
      'Sentence 2 already calls the skeleton "huge," so sentence 3 only repeats the idea. Deleting it makes the writing tighter.'), 5),
  ]),
];
