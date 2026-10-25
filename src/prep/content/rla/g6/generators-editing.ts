// Grade 6 sentence-level editing skills: conventions, complex sentences, verb tenses,
// conjunctive adverbs, prepositional agreement, pronouns, conjunctions, capitalization, commas, spelling.
// All banks have at least 10 entries so random generation passes variety tests.

import { pick, shuffle, type Rng } from '../../rng.ts';
import { inline, mc, one, txt, type Gen } from '../../generators/build.ts';
import type { InlinePart } from '../../types.ts';

function dropdown(rng: Rng, sentence: string, right: string, wrong: string[]): InlinePart {
  const options = shuffle(rng, [right, ...wrong]);
  const [before, after] = sentence.split('___');
  return inline([before, { blank: 0 }, after], [{ options, correct: options.indexOf(right) }]);
}

type Entry = [right: string, wrong: [string, string, string], sentence: string, why: string];

function spellingGen(bank: Entry[], lead = 'Choose the correct spelling to complete the sentence.'): Gen {
  return (rng: Rng) => {
    const [right, wrong, sentence, why] = pick(rng, bank);
    const options = shuffle(rng, [right, ...wrong]);
    const [before, after] = sentence.split('___');
    return one('inline', [txt(lead)], inline([before, { blank: 0 }, after], [{ options, correct: options.indexOf(right) }]), why);
  };
}

// ---------- 6.10D.ix Spelling and Commonly Confused Words ----------
const CONFUSED_WORDS: Entry[] = [
  ['its', ['it\'s', 'its\'', 'it is\'', ], 'The hawk tucked ___ wings and dove toward the field.', 'Use "its" as a possessive pronoun meaning belonging to it. "It\'s" is a contraction for "it is."'],
  ['it\'s', ['its', 'its\'', 'ites'], 'I think ___ going to rain before our soccer game starts.', '"It\'s" is short for "it is." Test it: "I think it is going to rain." That makes sense.'],
  ['affect', ['effect', 'affec', 'effact'], 'The dry weather will ___ how much corn the farmers harvest.', 'Affect is usually a verb meaning to influence or produce a change in something.'],
  ['effect', ['affect', 'effekt', 'affact'], 'The special sound ___ made the storm scene feel real.', 'Effect is usually a noun meaning a result or outcome.'],
  ['their', ['there', 'they\'re', 'theire'], 'The scientists published ___ findings in a nature journal.', 'Their indicates possession: belonging to them.'],
  ['there', ['their', 'they\'re', 'thare'], 'Look over ___, right beside the big oak tree.', 'There refers to a place or direction.'],
  ['they\'re', ['their', 'there', 'thier'], 'Ask Maya and Leo if ___ ready to leave for the museum.', 'They\'re is a contraction of "they are."'],
  ['too', ['to', 'two', 'toe'], 'The backpack was ___ heavy for the third grader to carry.', 'Too means also or excessively ("too heavy").'],
  ['to', ['too', 'two', 'tow'], 'We rode our bikes ___ the recreation center.', 'To is a preposition showing direction toward a place.'],
  ['two', ['to', 'too', 'tu'], 'Only ___ runners finished the race under twenty minutes.', 'Two is the number 2.'],
  ['principal', ['principle', 'prinsepal', 'principul'], 'Our school ___ spoke at the morning assembly.', 'Principal is the person leading a school (remember: the principal is your pal).'],
  ['principle', ['principal', 'principul', 'prinsiple'], 'Honesty is an important ___ that guided her actions.', 'A principle is a fundamental truth, rule, or belief.'],
  ['stationery', ['stationary', 'stationry', 'stationsry'], 'Elena wrote a thank-you note on fine blue ___.', 'Stationery with an "e" refers to writing paper (think e for envelope).'],
  ['stationary', ['stationery', 'stationairy', 'stationeri'], 'The exercise bicycle remained ___ while he pedaled.', 'Stationary with an "a" means staying in one place.'],
];

// ---------- 6.10D.viii Commas and Introductory Elements ----------
interface CommaItem { sentence: string; right: string; wrong: [string, string, string]; rule: string }
const COMMAS: CommaItem[] = [
  { sentence: '___ the band played the school song.', right: 'After the final touchdown,', wrong: ['After the final touchdown', 'After, the final touchdown', 'After the final, touchdown'], rule: 'Use a comma after an introductory prepositional phrase or dependent clause.' },
  { sentence: '___ we packed our bags and headed for the airport.', right: 'Early Tuesday morning,', wrong: ['Early Tuesday morning', 'Early, Tuesday morning', 'Early Tuesday, morning'], rule: 'Use a comma after an introductory time phrase.' },
  { sentence: '___ the hikers decided to turn back before sunset.', right: 'Because the trail was muddy,', wrong: ['Because the trail was muddy', 'Because, the trail was muddy', 'Because the trail, was muddy'], rule: 'Use a comma after an introductory dependent clause beginning with because.' },
  { sentence: '___ please remember to turn in your permission slips.', right: 'Before leaving today,', wrong: ['Before leaving today', 'Before, leaving today', 'Before leaving, today'], rule: 'Use a comma after an introductory participial or prepositional phrase.' },
  { sentence: '___ the robotics team celebrated their victory.', right: 'Finally,', wrong: ['Finally', 'Finally;', 'Finally:'], rule: 'Use a comma after an introductory transition word like Finally or However.' },
  { sentence: '___ Carlos placed the slide under the microscope.', right: 'Carefully adjusting the lens,', wrong: ['Carefully adjusting the lens', 'Carefully, adjusting the lens', 'Carefully adjusting, the lens'], rule: 'Use a comma after an introductory participial phrase.' },
  { sentence: '___ the young artist sketched the canyon walls.', right: 'Sitting near the rim,', wrong: ['Sitting near the rim', 'Sitting, near the rim', 'Sitting near, the rim'], rule: 'Use a comma after an introductory phrase.' },
  { sentence: '___ the museum will remain open late on Friday.', right: 'According to the curator,', wrong: ['According to the curator', 'According, to the curator', 'According to, the curator'], rule: 'Use a comma after an introductory transitional phrase.' },
  { sentence: '___ the kittens opened their eyes for the first time.', right: 'At two weeks of age,', wrong: ['At two weeks of age', 'At, two weeks of age', 'At two weeks, of age'], rule: 'Use a comma after an introductory prepositional phrase.' },
  { sentence: '___ we spotted three deer grazing by the creek.', right: 'While walking through the woods,', wrong: ['While walking through the woods', 'While, walking through the woods', 'While walking, through the woods'], rule: 'Use a comma after an introductory dependent clause.' },
  { sentence: '___ the recipe calls for two cups of flour.', right: 'First,', wrong: ['First', 'First;', 'First.'], rule: 'Use a comma after a sequence transition word like First, Next, or Then.' },
  { sentence: '___ the astronauts prepared for the spacewalk.', right: 'With the hatch unlocked,', wrong: ['With the hatch unlocked', 'With, the hatch unlocked', 'With the hatch, unlocked'], rule: 'Use a comma after an introductory prepositional phrase.' },
];

// ---------- 6.10D.vii Capitalization of Proper Nouns & Abbreviations ----------
interface CapItem { before: string; right: string; wrong: [string, string, string]; after: string; reason: string }
const CAPS: CapItem[] = [
  { before: 'Last summer, we visited the headquarters of the ', right: 'National Park Service', wrong: ['national park service', 'National park service', 'National Park service'], after: ' in Colorado.', reason: 'Capitalize each important word in the name of a government agency or organization.' },
  { before: 'My sister volunteered for the ', right: 'American Red Cross', wrong: ['american red cross', 'American red cross', 'American Red cross'], after: ' during the flood relief effort.', reason: 'Capitalize proper names of organizations.' },
  { before: 'Engineers from ', right: 'NASA', wrong: ['Nasa', 'nasa', 'N.A.S.A'], after: ' tested the heat shield for the new spacecraft.', reason: 'Capitalize all letters in an acronym like NASA.' },
  { before: 'The guest speaker was ', right: 'Dr. Marcus Vance Jr.', wrong: ['dr. marcus vance jr.', 'Dr. marcus vance Jr.', 'dr. Marcus Vance jr.'], after: ', a marine biologist.', reason: 'Capitalize titles, initials, and suffixes in personal names.' },
  { before: 'Our field trip took us across the ', right: 'Rio Grande River', wrong: ['rio grande river', 'Rio grande river', 'Rio Grande river'], after: ' near El Paso.', reason: 'Capitalize each word in the specific name of a geographic landmark.' },
  { before: 'The debate was held at ', right: 'Austin Community College', wrong: ['austin community college', 'Austin community college', 'Austin Community college'], after: ' on Saturday morning.', reason: 'Capitalize all principal words in the name of a school or college.' },
  { before: 'We attended a concert by the ', right: 'San Antonio Symphony', wrong: ['san antonio symphony', 'San Antonio symphony', 'san Antonio Symphony'], after: ' last weekend.', reason: 'Capitalize the formal name of a musical or cultural organization.' },
  { before: 'Officer ', right: 'R. T. Simmons', wrong: ['r. t. simmons', 'r. T. Simmons', 'R. t. Simmons'], after: ' talked to our class about bicycle safety.', reason: 'Capitalize personal initials and proper surnames.' },
  { before: 'Representatives from the ', right: 'World Wildlife Fund', wrong: ['world wildlife fund', 'World wildlife fund', 'World Wildlife fund'], after: ' visited the nature center.', reason: 'Capitalize proper nouns forming the name of an international organization.' },
  { before: 'The package was shipped via ', right: 'UPS', wrong: ['ups', 'Ups', 'u.p.s.'], after: ' early yesterday morning.', reason: 'Capitalize acronyms and corporate abbreviations.' },
  { before: 'Our library received a grant from the ', right: 'Texas Historical Commission', wrong: ['texas historical commission', 'Texas historical commission', 'Texas Historical commission'], after: ' for building repairs.', reason: 'Capitalize the formal name of a state agency.' },
];

// ---------- 6.10D.vi Conjunctions (Subordinating & Correlative) ----------
interface ConjItem { sentence: string; right: string; wrong: [string, string, string]; explain: string }
const CONJUNCTIONS: ConjItem[] = [
  { sentence: 'You may either choose the guitar ___ the violin for music class.', right: 'or', wrong: ['nor', 'and', 'but'], explain: 'The correlative conjunction "either" pairs with "or" to present alternatives.' },
  { sentence: 'The team had neither the speed ___ the stamina to win the championship.', right: 'nor', wrong: ['or', 'and', 'but'], explain: 'The correlative conjunction "neither" pairs with "nor" to connect two negative alternatives.' },
  { sentence: '___ the sun was setting rapidly, the campers hurried to pitch their tents.', right: 'Because', wrong: ['Unless', 'Although', 'Whereas'], explain: '"Because" shows a cause-and-effect relationship explaining why they hurried.' },
  { sentence: 'We will go stargazing tonight ___ the clouds clear from the sky.', right: 'if', wrong: ['although', 'because', 'unless'], explain: '"If" introduces the conditional requirement needed to stargaze.' },
  { sentence: 'The engine started smoothly ___ it had been sitting in the shed all winter.', right: 'although', wrong: ['because', 'since', 'so that'], explain: '"Although" introduces a contrast between the long storage and the smooth start.' },
  { sentence: 'She practiced her flute solo daily ___ she could perform flawlessly.', right: 'so that', wrong: ['although', 'unless', 'whereas'], explain: '"So that" introduces the purpose behind daily practice.' },
  { sentence: 'He had neither time ___ patience for careless mistakes on the blueprint.', right: 'nor', wrong: ['or', 'and', 'but'], explain: 'The correlative conjunction "neither" pairs with "nor" to connect two negative alternatives.' },
  { sentence: '___ the whistle blew, every runner bounded off the starting line.', right: 'As soon as', wrong: ['Although', 'Unless', 'Even though'], explain: '"As soon as" establishes the immediate time relationship between the whistle and the start.' },
  { sentence: '___ the weather warms up in April, the bluebonnets will blanket the highway.', right: 'Once', wrong: ['Unless', 'Although', 'Despite'], explain: '"Once" signals a time condition that triggers the event.' },
  { sentence: 'You cannot enter the science lab ___ you are wearing safety goggles.', right: 'unless', wrong: ['because', 'although', 'since'], explain: '"Unless" means except if: you cannot enter except if wearing goggles.' },
  { sentence: '___ the hikers were exhausted, they reached the summit before midday.', right: 'Although', wrong: ['Because', 'Since', 'So that'], explain: '"Although" introduces a concession/contrast.' },
];

// ---------- 6.10D.v Pronouns (Relative & Agreement) ----------
interface PronounItem { before: string; right: string; wrong: [string, string, string]; after: string; explain: string }
const PRONOUNS: PronounItem[] = [
  { before: 'The astronomer ', right: 'who', wrong: ['which', 'whom', 'whose'], after: ' discovered the comet gave an interview today.', explain: 'Use "who" as the subject relative pronoun referring to a person.' },
  { before: 'The telescope ', right: 'that', wrong: ['who', 'whom', 'whose'], after: ' sits on the observation deck was built in 1930.', explain: 'Use "that" (or "which") to refer to things or objects.' },
  { before: 'The student ', right: 'whose', wrong: ['who', 'which', 'whom'], after: ' science project won first prize received a medal.', explain: 'Use "whose" to show possession in a relative clause.' },
  { before: 'The doctor to ', right: 'whom', wrong: ['who', 'which', 'whose'], after: ' we sent the report replied promptly.', explain: 'Use "whom" as the object of the preposition "to."' },
  { before: 'The historical documents ', right: 'which', wrong: ['who', 'whom', 'whose'], after: ' were stored in the vault survived the fire.', explain: 'Use "which" or "that" when referring to non-human things.' },
  { before: 'The volunteer ', right: 'who', wrong: ['which', 'whom', 'whose'], after: ' organized the book drive thanked the community.', explain: 'Use "who" as the subject referring to a human volunteer.' },
  { before: 'Each of the girls packed ', right: 'her', wrong: ['their', 'theirs', 'her\'s'], after: ' own sleeping bag for the campout.', explain: '"Each" is singular and takes a singular pronoun: "her."' },
  { before: 'Neither of the boys forgot ', right: 'his', wrong: ['their', 'theirs', 'his\'s'], after: ' compass on the trail.', explain: '"Neither" is singular, so it takes the singular pronoun "his."' },
  { before: 'The author ', right: 'whom', wrong: ['who', 'which', 'whose'], after: ' the class invited to visit accepted the invitation.', explain: 'Use "whom" as the direct object of "invited" referring to a person.' },
  { before: 'The solar panels ', right: 'that', wrong: ['who', 'whom', 'whose'], after: ' power the school roof were installed last year.', explain: 'Use "that" for objects/things.' },
  { before: 'The artist ', right: 'whose', wrong: ['who', 'whom', 'which'], after: ' mural covers the town library attended the dedication.', explain: 'Use "whose" as a possessive pronoun modifying "mural."' },
];

// ---------- 6.10D.iv Prepositional Phrases & Subject-Verb Agreement ----------
interface PrepAgrItem { before: string; right: string; wrong: [string, string, string]; after: string; explain: string }
const PREP_AGREEMENT: PrepAgrItem[] = [
  { before: 'The crate of fresh oranges from Florida ', right: 'was', wrong: ['were', 'are', 'be'], after: ' delivered to the market.', explain: 'The subject is "crate" (singular), not "oranges." Prepositional phrases do not change the subject\'s number.' },
  { before: 'The books on the top shelf of the bookcase ', right: 'belong', wrong: ['belongs', 'belonging', 'was belong'], after: ' to the history teacher.', explain: 'The subject is "books" (plural), so it requires the plural verb "belong."' },
  { before: 'A bouquet of yellow sunflowers and white daisies ', right: 'stands', wrong: ['stand', 'standing', 'are stand'], after: ' on the kitchen table.', explain: 'The subject is "bouquet" (singular), not the flowers in the vase.' },
  { before: 'The members of the student council ', right: 'meet', wrong: ['meets', 'meeting', 'was meet'], after: ' every Wednesday afternoon.', explain: 'The subject is "members" (plural), requiring the plural verb "meet."' },
  { before: 'The aroma of roasted coffee beans and warm cinnamon ', right: 'fills', wrong: ['fill', 'filling', 'are fill'], after: ' the entire bakery.', explain: 'The subject is "aroma" (singular), so use the singular verb "fills."' },
  { before: 'Several species of rare desert plants ', right: 'grow', wrong: ['grows', 'growing', 'is grow'], after: ' near the canyon springs.', explain: 'The subject is "species" (plural here, modified by "several"), taking "grow."' },
  { before: 'The captain of both varsity soccer teams ', right: 'was', wrong: ['were', 'are', 'be'], after: ' honored at the banquet.', explain: 'The subject is "captain" (singular), not "teams."' },
  { before: 'The sound of crashing waves along the rocky coast ', right: 'echoes', wrong: ['echo', 'echoing', 'are echo'], after: ' through the evening air.', explain: 'The subject is "sound" (singular), requiring "echoes."' },
  { before: 'Two bags of potting soil for the vegetable garden ', right: 'were', wrong: ['was', 'is', 'be'], after: ' placed by the greenhouse door.', explain: 'The subject is "bags" (plural), so the verb must be plural: "were."' },
  { before: 'The bright colors of the monarch butterfly\'s wings ', right: 'warn', wrong: ['warns', 'warning', 'is warn'], after: ' predators of its bitter taste.', explain: 'The subject is "colors" (plural), so the verb is "warn."' },
  { before: 'A cluster of small wooden cabins ', right: 'sits', wrong: ['sit', 'sitting', 'are sit'], after: ' at the base of the pine-covered ridge.', explain: 'The subject is "cluster" (singular), taking "sits."' },
];

// ---------- 6.10D.iii Conjunctive Adverbs ----------
interface ConjAdvItem { sentence: string; right: string; wrong: [string, string, string]; explain: string }
const CONJ_ADVERBS: ConjAdvItem[] = [
  { sentence: 'The team practiced every afternoon; ___, they won the state tournament.', right: 'consequently', wrong: ['meanwhile', 'instead', 'otherwise'], explain: '"Consequently" shows that winning was a direct result of their practice.' },
  { sentence: 'The museum exhibits were fascinating; ___, admission was completely free.', right: 'furthermore', wrong: ['however', 'otherwise', 'instead'], explain: '"Furthermore" adds an additional supporting point to the first positive fact.' },
  { sentence: 'We wanted to hike along the canyon rim; ___, heavy thunderstorms forced us indoors.', right: 'however', wrong: ['therefore', 'furthermore', 'likewise'], explain: '"However" introduces a contrast between their plan and the weather.' },
  { sentence: 'Students must finish their research projects by Friday; ___, their grades will drop.', right: 'otherwise', wrong: ['furthermore', 'likewise', 'meanwhile'], explain: '"Otherwise" introduces the negative consequence if the condition is not met.' },
  { sentence: 'The main library was closed for renovations; ___, students used the online database.', right: 'therefore', wrong: ['otherwise', 'meanwhile', 'however'], explain: '"Therefore" indicates a logical outcome or action resulting from the closure.' },
  { sentence: 'The orchestra warmed up on stage; ___, the audience took their seats.', right: 'meanwhile', wrong: ['therefore', 'however', 'consequently'], explain: '"Meanwhile" shows two events happening at the same time.' },
  { sentence: 'The test was exceptionally challenging; ___, every student earned a passing score.', right: 'nevertheless', wrong: ['therefore', 'consequently', 'likewise'], explain: '"Nevertheless" expresses an unexpected contrast (in spite of that).' },
  { sentence: 'Maya loves playing chess; ___, her brother prefers fast-paced video games.', right: 'in contrast', wrong: ['furthermore', 'therefore', 'likewise'], explain: '"In contrast" sets up an opposing comparison between the two siblings.' },
  { sentence: 'The solar panels generated excess electricity; ___, the school sold energy back to the grid.', right: 'as a result', wrong: ['however', 'nevertheless', 'otherwise'], explain: '"As a result" shows the direct cause and effect.' },
  { sentence: 'Elena watered the garden every morning; ___, she pulled every weed she saw.', right: 'moreover', wrong: ['instead', 'however', 'otherwise'], explain: '"Moreover" introduces an added action supporting her careful gardening.' },
  { sentence: 'He did not buy the expensive camera; ___, he saved his money for college tuition.', right: 'instead', wrong: ['furthermore', 'meanwhile', 'likewise'], explain: '"Instead" shows an alternative chosen over the previous action.' },
];

// ---------- 6.10D.ii Verb Tense Consistency ----------
interface TenseItem { before: string; right: string; wrong: [string, string, string]; after: string; explain: string }
const VERB_TENSES: TenseItem[] = [
  { before: 'Yesterday, the students examined the fossils and ', right: 'wrote', wrong: ['write', 'writes', 'will write'], after: ' their observations in their notebooks.', explain: 'The sentence is set in the past ("Yesterday ... examined"), so the coordinating verb must also be in the past tense: "wrote."' },
  { before: 'Last night, the owl perched on the barn beam and ', right: 'watched', wrong: ['watches', 'watch', 'will watch'], after: ' the field below for field mice.', explain: 'Maintain past tense consistency with "perched": use "watched."' },
  { before: 'Every morning, the baker kneads the dough and ', right: 'heats', wrong: ['heated', 'heating', 'will heat'], after: ' the large stone oven.', explain: 'The routine action ("Every morning ... kneads") requires the present tense: "heats."' },
  { before: 'When the lightning flashed, the thunder ', right: 'rumbled', wrong: ['rumbles', 'rumble', 'will rumble'], after: ' across the open valley.', explain: 'Both actions occurred in the past: "flashed ... rumbled."' },
  { before: 'The botanist collected seeds from the meadow and ', right: 'stored', wrong: ['stores', 'storing', 'will store'], after: ' them in glass jars.', explain: 'Match the past tense "collected" with "stored."' },
  { before: 'Tomorrow, the astronauts will inspect the spacecraft and ', right: 'run', wrong: ['ran', 'running', 'have run'], after: ' computer simulations.', explain: 'The future modal "will inspect" pairs with the base verb "run" (will run).' },
  { before: 'During the pioneer era, travelers packed covered wagons and ', right: 'journeyed', wrong: ['journey', 'journeys', 'will journey'], after: ' westward.', explain: 'Historical context and "packed" require the past tense: "journeyed."' },
  { before: 'Whenever the coach blows the whistle, the players ', right: 'stop', wrong: ['stopped', 'stopping', 'had stopped'], after: ' running immediately.', explain: 'General present conditional ("blows") requires present tense: "stop."' },
  { before: 'Maria chopped the vegetables and ', right: 'simmered', wrong: ['simmers', 'simmering', 'will simmer'], after: ' the soup for forty minutes.', explain: 'Past tense "chopped" pairs with past tense "simmered."' },
  { before: 'The geologist cracked open the geode and ', right: 'discovered', wrong: ['discovers', 'discovering', 'will discover'], after: ' sparkling purple amethyst inside.', explain: 'Past tense "cracked" pairs with past tense "discovered."' },
  { before: 'As the curtain rose, the lead actor ', right: 'stepped', wrong: ['steps', 'stepping', 'will step'], after: ' toward the center of the stage.', explain: 'Past tense "rose" pairs with past tense "stepped."' },
];

// ---------- 6.10D.i Complex Sentences, Run-ons & Fragments ----------
interface SentItem { prompt: string; right: string; wrong: [string, string, string]; explain: string }
const SENTENCES: SentItem[] = [
  {
    prompt: 'Which sentence is a complete complex sentence that is correctly punctuated?',
    right: 'Although the wind was howling through the trees, the campfire stayed lit.',
    wrong: [
      'Although the wind was howling through the trees the campfire stayed lit.',
      'Although the wind was howling through the trees.',
      'The wind was howling through the trees, the campfire stayed lit.',
    ],
    explain: 'An introductory dependent clause ("Although the wind was howling through the trees") must be followed by a comma and an independent clause.',
  },
  {
    prompt: 'Which sentence avoids a comma splice or run-on?',
    right: 'The storm knocked down the power lines; consequently, school was canceled.',
    wrong: [
      'The storm knocked down the power lines, school was canceled.',
      'The storm knocked down the power lines school was canceled.',
      'Because the storm knocked down the power lines.',
    ],
    explain: 'Two independent clauses can be joined by a semicolon and a conjunctive adverb, followed by a comma. A comma alone creates a comma splice.',
  },
  {
    prompt: 'Which sentence correctly fixes the fragment: "Because the river rose three feet overnight"?',
    right: 'Because the river rose three feet overnight, the ferry could not cross.',
    wrong: [
      'Because the river rose three feet overnight and was muddy.',
      'The river rose three feet overnight, because it was muddy.',
      'Because the river rose three feet overnight, therefore the ferry stopped.',
    ],
    explain: 'Adding an independent clause ("the ferry could not cross") completes the thought started by the subordinating conjunction "Because."',
  },
  {
    prompt: 'Which sentence is a correctly formed compound-complex sentence?',
    right: 'When the bell rang, the students packed their books, and they walked to the bus.',
    wrong: [
      'When the bell rang the students packed their books, and they walked to the bus.',
      'When the bell rang, packed their books and walked to the bus.',
      'When the bell rang, the students packed their books, they walked to the bus.',
    ],
    explain: 'A dependent clause followed by a comma, plus two independent clauses joined by a coordinating conjunction (and), forms a compound-complex sentence.',
  },
  {
    prompt: 'Which sentence is complete and avoids a fragment or splice?',
    right: 'Since the telescope lens was clean, we could see Jupiter\'s four largest moons.',
    wrong: [
      'Since the telescope lens was clean and polished.',
      'The telescope lens was clean, we could see Jupiter\'s four largest moons.',
      'Since the telescope lens was clean we could see Jupiter\'s four largest moons.',
    ],
    explain: 'The dependent clause "Since the telescope lens was clean" correctly connects to the independent clause with a comma.',
  },
  {
    prompt: 'Which choice is a complete sentence rather than a fragment?',
    right: 'After hiking up the steep ridge for two hours, the campers finally reached the lake.',
    wrong: [
      'After hiking up the steep ridge for two hours in the morning heat.',
      'Reaching the sparkling mountain lake at the top of the ridge.',
      'While the campers were resting under the tall pine trees.',
    ],
    explain: 'A complete sentence must contain both a subject ("the campers") and a predicate ("finally reached the lake"), expressing a complete thought.',
  },
  {
    prompt: 'Which choice correctly repairs the comma splice: "The bell rang, the class packed up"?',
    right: 'When the bell rang, the class packed up their backpacks.',
    wrong: [
      'The bell rang the class packed up their backpacks.',
      'The bell rang, and packed up their backpacks.',
      'Because the bell rang, so the class packed up.',
    ],
    explain: 'Turning the first clause into a dependent time clause ("When the bell rang,") correctly resolves the comma splice.',
  },
  {
    prompt: 'Which sentence correctly combines ideas into a complex sentence?',
    right: 'Before the concert began, the musicians tuned their instruments backstage.',
    wrong: [
      'Before the concert began.',
      'The concert began, the musicians tuned their instruments backstage.',
      'Before the concert began the musicians tuned their instruments backstage.',
    ],
    explain: 'An introductory dependent clause introduced by "Before" requires a comma before the main clause.',
  },
  {
    prompt: 'Which sentence has correct subject-verb agreement and is not a fragment?',
    right: 'Whenever the whistle blows, each of the players sprints toward the goal line.',
    wrong: [
      'Whenever the whistle blows, each of the players sprint toward the goal line.',
      'Whenever the whistle blows and the coach shouts.',
      'The whistle blows, each of the players sprint toward the goal line.',
    ],
    explain: '"Each" is a singular subject and takes the singular verb "sprints." The sentence is complex with an introductory dependent clause.',
  },
  {
    prompt: 'Which sentence avoids both fragments and run-on errors?',
    right: 'Although the trail was steep and rocky, we reached the scenic overlook by noon.',
    wrong: [
      'Although the trail was steep and rocky.',
      'The trail was steep and rocky, we reached the scenic overlook by noon.',
      'Although the trail was steep and rocky, but we reached the scenic overlook by noon.',
    ],
    explain: 'The sentence has a dependent clause followed by an independent clause without unnecessary coordinating conjunctions.',
  },
  {
    prompt: 'Which choice is a properly constructed complex sentence?',
    right: 'While the scientists gathered soil samples, an eagle circled overhead.',
    wrong: [
      'While the scientists gathered soil samples in the canyon.',
      'The scientists gathered soil samples, an eagle circled overhead.',
      'While the scientists gathered soil samples an eagle circled overhead.',
    ],
    explain: 'The introductory clause "While the scientists gathered soil samples" needs a comma before the independent clause.',
  },
];

export const EDITING_GENERATORS: Record<string, Gen[]> = {
  'rla:6.10D.ix': [spellingGen(CONFUSED_WORDS, 'Choose the word that correctly completes the sentence.')],
  'rla:6.10D.viii': [
    (rng) => {
      const it = pick(rng, COMMAS);
      return one('inline', [txt('Choose the correctly punctuated phrase to start the sentence.')],
        dropdown(rng, `___ ${it.sentence.replace('___ ', '')}`, it.right, it.wrong), it.rule);
    },
  ],
  'rla:6.10D.vii': [
    (rng) => {
      const it = pick(rng, CAPS);
      return one('inline', [txt('Choose the correctly capitalized proper noun or abbreviation to complete the sentence.')],
        inline([it.before, { blank: 0 }, it.after], [{ options: shuffle(rng, [it.right, ...it.wrong]), correct: 0 }]),
        it.reason);
    },
  ],
  'rla:6.10D.vi': [
    (rng) => {
      const it = pick(rng, CONJUNCTIONS);
      return one('inline', [txt('Choose the conjunction that best completes the sentence.')],
        dropdown(rng, it.sentence, it.right, it.wrong), it.explain);
    },
  ],
  'rla:6.10D.v': [
    (rng) => {
      const it = pick(rng, PRONOUNS);
      const options = shuffle(rng, [it.right, ...it.wrong]);
      return one('inline', [txt('Choose the pronoun that correctly completes the sentence.')],
        inline([it.before, { blank: 0 }, it.after], [{ options, correct: options.indexOf(it.right) }]),
        it.explain);
    },
  ],
  'rla:6.10D.iv': [
    (rng) => {
      const it = pick(rng, PREP_AGREEMENT);
      const options = shuffle(rng, [it.right, ...it.wrong]);
      return one('inline', [txt('Choose the verb that correctly agrees with the subject of the sentence.')],
        inline([it.before, { blank: 0 }, it.after], [{ options, correct: options.indexOf(it.right) }]),
        it.explain);
    },
  ],
  'rla:6.10D.iii': [
    (rng) => {
      const it = pick(rng, CONJ_ADVERBS);
      return one('inline', [txt('Choose the conjunctive adverb or transitional phrase that best connects the two clauses.')],
        dropdown(rng, it.sentence, it.right, it.wrong), it.explain);
    },
  ],
  'rla:6.10D.ii': [
    (rng) => {
      const it = pick(rng, VERB_TENSES);
      const options = shuffle(rng, [it.right, ...it.wrong]);
      return one('inline', [txt('Choose the verb form that maintains consistent tense in the sentence.')],
        inline([it.before, { blank: 0 }, it.after], [{ options, correct: options.indexOf(it.right) }]),
        it.explain);
    },
  ],
  'rla:6.10D.i': [
    (rng) => {
      const it = pick(rng, SENTENCES);
      return one('mc', [txt(it.prompt)], mc(rng, it.right, it.wrong), it.explain);
    },
  ],
  'rla:6.10D': [
    (rng, d) => {
      // General conventions check: mixes sentence types, verb tenses, and agreement
      if (d === 1) {
        const it = pick(rng, VERB_TENSES);
        const options = shuffle(rng, [it.right, ...it.wrong]);
        return one('inline', [txt('Edit the sentence for standard English conventions by choosing the correct verb.')],
          inline([it.before, { blank: 0 }, it.after], [{ options, correct: options.indexOf(it.right) }]), it.explain);
      }
      const it = pick(rng, SENTENCES);
      return one('mc', [txt(it.prompt)], mc(rng, it.right, it.wrong), it.explain);
    },
  ],
};
