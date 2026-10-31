// Grade 7 sentence-level editing skills: conventions, complex sentences, verb tenses,
// conjunctive adverbs, prepositional agreement, pronouns, conjunctions, capitalization, commas, spelling.
// All banks have at least 10 entries so random generation passes variety tests.

import { pick, shuffle, type Rng } from '../../rng.ts';
import { inline, one, txt, type Gen } from '../../generators/build.ts';
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

// ---------- 7.10D.ix Spelling & Confused Words ----------
const CONFUSED_WORDS: Entry[] = [
  ['effect', ['affect', 'efect', 'effict'], 'The new laboratory safety rules had an immediate ___ on student experiment accuracy.', 'Use the noun "effect" to mean a result or consequence.'],
  ['affect', ['effect', 'afflict', 'affecte'], 'Sudden drops in atmospheric pressure can ___ the migration routes of songbirds.', 'Use the verb "affect" to mean to influence or alter.'],
  ['its', ["it's", 'its\'', 'ites'], 'The robotic lunar rover recharged ___ solar batteries during the midday heat.', 'Use the possessive pronoun "its" without an apostrophe.'],
  ["it's", ["its", "its'", "it is not"], "___ fascinating to examine mineral specimens beneath a high-magnification microscope.", "Use \"it's\" as a contraction for \"it is.\""],
  ['their', ['there', "they're", 'thier'], 'The seventh-grade paleontologists presented ___ fossil findings at the symposium.', 'Use the possessive pronoun "their" to show belonging to them.'],
  ['there', ['their', "they're", 'thare'], 'Over ___, beyond the limestone ridge, sits the entrance to the ancient cave.', 'Use "there" to indicate a location or place.'],
  ["they're", ['their', 'there', 'theyr'], 'The track team members announced that ___ competing in the regional finals.', "Use \"they're\" as the contraction for \"they are.\""],
  ['principal', ['principle', 'prinscipal', 'principall'], 'Dr. Martinez, our middle school ___, addressed the assembly this morning.', 'Use "principal" for the school leader or chief executive.'],
  ['principles', ['principals', 'principels', 'princaples'], 'The scientific method rests on core ___ of observation and repeatability.', 'Use "principles" for fundamental truths or foundational rules.'],
  ['stationary', ['stationery', 'stationairy', 'stationarry'], 'The weather balloon remained ___ in the calm morning air above the desert.', 'Use "stationary" with an "a" to mean motionless or not moving.'],
  ['stationery', ['stationary', 'stationry', 'stationerye'], 'Sophia selected elegant recycled ___ to write thank-you notes to the guest speakers.', 'Use "stationery" with an "e" for writing paper and envelopes.'],
  ['complement', ['compliment', 'complamente', 'complemint'], 'The crisp lemon zest served to ___ the rich flavors of the grilled seafood.', 'Use "complement" to mean to enhance or complete nicely.'],
  ['compliment', ['complement', 'complamente', 'complamint'], 'Mr. Henderson paid Elena a sincere ___ on her persuasive debate delivery.', 'Use "compliment" for praise or an expression of admiration.'],
];

// ---------- 7.10D.viii Punctuation (Commas & Semicolons) ----------
interface PunctItem { sentence: string; right: string; wrong: [string, string, string]; rule: string }
const PUNCTUATION: PunctItem[] = [
  { sentence: '___ the archaeologist dusted the fragile ceramic sherd.', right: 'Carefully adjusting her magnifying lens,', wrong: ['Carefully adjusting her magnifying lens', 'Carefully, adjusting her magnifying lens', 'Carefully adjusting her magnifying lens;'], rule: 'Use a comma after an introductory participial phrase.' },
  { sentence: '___ the campers retreated to their rainproof tents.', right: 'When the thunder echoed across the canyon,', wrong: ['When the thunder echoed across the canyon', 'When the thunder, echoed across the canyon', 'When the thunder echoed, across the canyon'], rule: 'Use a comma after an introductory adverb clause.' },
  { sentence: 'Austin, Texas, ___ is home to the historic Texas State Capitol building.', right: 'the state capital,', wrong: ['the state capital', '; the state capital,', 'the state capital;'], rule: 'Use commas to set off a nonessential appositive phrase.' },
  { sentence: 'The observatory telescope recorded high-resolution images; ___, the data stream was sent to astronomers worldwide.', right: 'furthermore,', wrong: ['furthermore', '; furthermore,', 'furthermore;'], rule: 'Follow a conjunctive adverb preceded by a semicolon with a comma.' },
  { sentence: '___ Marcus finally discovered the missing variable in his algorithm.', right: 'After searching through lines of complex code,', wrong: ['After searching through lines of complex code', 'After searching, through lines of complex code', 'After searching through lines of complex code;'], rule: 'Use a comma after an introductory prepositional phrase.' },
  { sentence: 'Dr. Katherine Johnson, ___ calculated critical trajectories for NASA missions.', right: 'a brilliant mathematician,', wrong: ['a brilliant mathematician', '; a brilliant mathematician', 'a brilliant mathematician;'], rule: 'Enclose a nonrestrictive appositive with paired commas.' },
  { sentence: 'The storm knocked out electricity across town; ___, the backup generators kept the hospital running.', right: 'however,', wrong: ['however', '; however', 'however;'], rule: 'Use a comma immediately after "however" when it links two independent clauses separated by a semicolon.' },
  { sentence: '___ the runners surged forward with determined strides.', right: 'As soon as the starting whistle blew,', wrong: ['As soon as the starting whistle blew', 'As soon as, the starting whistle blew', 'As soon as the starting whistle blew;'], rule: 'Use a comma after an introductory dependent clause.' },
  { sentence: 'The ancient limestone cavern, ___ contains rare helictite crystal formations.', right: 'which was discovered in 1955,', wrong: ['which was discovered in 1955', '; which was discovered in 1955,', 'which was discovered in 1955;'], rule: 'Set off a nonrestrictive relative clause with commas.' },
  { sentence: '___ please make sure to secure your safety goggles.', right: 'Before heating the chemical solution,', wrong: ['Before heating the chemical solution', 'Before heating, the chemical solution', 'Before heating the chemical solution;'], rule: 'Use a comma after an introductory dependent clause before the main imperative clause.' },
];

// ---------- 7.10D.vii Capitalization ----------
interface CapItem { before: string; right: string; wrong: [string, string, string]; after: string; reason: string }
const CAPS: CapItem[] = [
  { before: 'During our spring field trip, we toured the ', right: 'San Antonio Missions National Historical Park', wrong: ['San Antonio missions national historical park', 'San antonio Missions National Historical Park', 'San Antonio Missions National historical park'], after: ' along the river.', reason: 'Capitalize all proper nouns in the official name of a national historical park.' },
  { before: 'Many historians consider the ', right: 'Declaration of Independence', wrong: ['declaration of Independence', 'Declaration Of Independence', 'declaration of independence'], after: ' a foundational document of American democracy.', reason: 'Capitalize the specific title of a historic political document.' },
  { before: 'My family drove north along the ', right: 'Rio Grande Valley', wrong: ['rio grande valley', 'Rio Grande valley', 'Rio grande Valley'], after: ' to visit citrus orchards near McAllen.', reason: 'Capitalize recognized geographic regions and proper place names.' },
  { before: 'Students who excel in ', right: 'Spanish and French', wrong: ['spanish and french', 'Spanish and french', 'spanish and French'], after: ' may apply for the bilingual seal of biliteracy.', reason: 'Languages and nationalities are always capitalized as proper adjectives and nouns.' },
  { before: 'We attended a lecture given by ', right: 'Professor Higgins', wrong: ['professor Higgins', 'professor higgins', 'Professor higgins'], after: ' at the regional science fair.', reason: 'Capitalize a professional title when it immediately precedes a proper name.' },
  { before: 'The expedition explored the rugged terrain of the ', right: 'Rocky Mountains', wrong: ['rocky mountains', 'Rocky mountains', 'rocky Mountains'], after: ' during late summer.', reason: 'Capitalize proper names of specific mountain ranges.' },
  { before: 'Last semester, our social studies class studied the ', right: 'Civil War', wrong: ['civil war', 'Civil war', 'civil War'], after: ' and its lasting impact on Texas ranching.', reason: 'Capitalize the formal names of historic wars and eras.' },
  { before: 'Our school orchestra performed a symphony composed during the ', right: 'Renaissance', wrong: ['renaissance', 'Renaisance', 'renaisance'], after: ' by an Italian master.', reason: 'Capitalize the names of distinct historical and artistic periods.' },
  { before: 'The flight from Houston will land at ', right: 'Dallas/Fort Worth International Airport', wrong: ['dallas/fort worth international airport', 'Dallas/Fort worth International airport', 'Dallas/Fort Worth international airport'], after: ' this evening.', reason: 'Capitalize all principal words in the proper name of an airport or transportation hub.' },
  { before: 'Each winter, migratory sandhill cranes congregate along the ', right: 'Gulf of Mexico', wrong: ['gulf of Mexico', 'Gulf Of Mexico', 'gulf of mexico'], after: ' before flying north.', reason: 'Capitalize major bodies of water and geographic names.' },
];

// ---------- 7.10D.vi Conjunctions (Subordinating & Correlative) ----------
interface ConjItem { sentence: string; right: string; wrong: [string, string, string]; explain: string }
const CONJUNCTIONS: ConjItem[] = [
  { sentence: 'You may either choose the astronomy track ___ the robotics lab for your elective.', right: 'or', wrong: ['nor', 'and', 'but'], explain: 'The correlative conjunction "either" pairs with "or" to present two alternatives.' },
  { sentence: 'The solar vehicle had neither mechanical breakdowns ___ sensor failures during the race.', right: 'nor', wrong: ['or', 'and', 'but'], explain: 'The correlative conjunction "neither" pairs with "nor" to link two negative alternatives.' },
  { sentence: 'Not only did Maya complete the archaeological survey, ___ she also indexed every ceramic sherd.', right: 'but', wrong: ['and', 'so', 'yet'], explain: 'The correlative pair "not only ... but also" links two parallel achievements.' },
  { sentence: '___ the storm clouds darkened the horizon, the hikers hurried toward the shelter cabin.', right: 'Because', wrong: ['Unless', 'Although', 'Whereas'], explain: '"Because" establishes a cause-and-effect relationship explaining why they moved quickly.' },
  { sentence: 'We will witness the Perseid meteor shower tonight ___ the coastal fog clears from the sky.', right: 'if', wrong: ['although', 'because', 'whereas'], explain: '"If" introduces the conditional requirement necessary for clear viewing.' },
  { sentence: 'The team successfully launched the weather balloon ___ high winds threatened to cancel the flight.', right: 'although', wrong: ['because', 'since', 'so that'], explain: '"Although" introduces an obstacle overcome by the launch crew.' },
  { sentence: 'Scientists monitor seismic vibrations continuously ___ they can detect early tremor signals.', right: 'so that', wrong: ['although', 'unless', 'whereas'], explain: '"So that" signals the intentional goal or purpose behind seismic monitoring.' },
  { sentence: 'Visitors are not permitted to enter the bat maternity cave ___ they are accompanied by a park ranger.', right: 'unless', wrong: ['because', 'although', 'since'], explain: '"Unless" expresses the condition of exception (except if accompanied).' },
  { sentence: '___ the submersible reached the hydrothermal vent field, the exterior temperature sensors spiked.', right: 'As soon as', wrong: ['Although', 'Unless', 'Even though'], explain: '"As soon as" establishes the immediate temporal link between arrival and sensor spike.' },
  { sentence: '___ the desert heat was punishing, the botanists cataloged twenty new succulent species.', right: 'Even though', wrong: ['Because', 'Since', 'So that'], explain: '"Even though" introduces a concession showing success despite hardship.' },
  { sentence: 'The conservation team worked through the night ___ every stranded sea turtle was returned to the surf.', right: 'until', wrong: ['because', 'although', 'unless'], explain: '"Until" marks the end point in time when the rescue effort concluded.' },
];

// ---------- 7.10D.v Pronoun-Antecedent Agreement ----------
interface PronounItem { before: string; right: string; wrong: [string, string, string]; after: string; explain: string }
const PRONOUNS: PronounItem[] = [
  { before: 'Each of the student researchers submitted ', right: 'his or her', wrong: ['their', 'theirs', 'they'], after: ' laboratory report before Friday.', explain: 'Singular indefinite pronoun "each" requires a singular possessive pronoun.' },
  { before: 'Neither of the female mountain lions abandoned ', right: 'her', wrong: ['their', 'they', 'hers'], after: ' cubs during the harsh winter storm.', explain: '"Neither" is singular, so it agrees with the singular feminine possessive pronoun "her."' },
  { before: 'Both of the robotic engineers calibrated ', right: 'their', wrong: ['his or her', 'its', 'her'], after: ' sensors before the timed obstacle course.', explain: 'The indefinite pronoun "both" is plural and requires the plural pronoun "their."' },
  { before: 'Every member of the robotics club wore ', right: 'his or her', wrong: ['their', 'theirs', 'they'], after: ' team jersey to the state championship.', explain: '"Every member" represents a singular subject requiring a singular pronoun.' },
  { before: 'The school debate team celebrated ', right: 'its', wrong: ['their', "it's", 'theirs'], after: ' sweeping victory at the state tournament.', explain: 'A collective noun acting as a single unit takes the singular neuter pronoun "its."' },
  { before: 'Several of the park visitors forgot ', right: 'their', wrong: ['his or her', 'its', 'her'], after: ' refillable water canteens at the trail pavilion.', explain: '"Several" is plural and correctly pairs with the plural possessive pronoun "their."' },
  { before: 'If anyone in the auditorium has a question, ', right: 'he or she', wrong: ['they', 'them', 'theirs'], after: ' should step up to the aisle microphone.', explain: '"Anyone" is an indefinite singular pronoun requiring a singular subject pronoun.' },
  { before: 'Neither the lead scientist nor her assistants could believe ', right: 'their', wrong: ['her', 'its', 'his or her'], after: ' eyes when the satellite photos arrived.', explain: 'When subjects are joined by "nor," the pronoun agrees with the nearer antecedent ("assistants," which is plural).' },
  { before: 'One of the female peregrine falcons returned to ', right: 'her', wrong: ['their', 'its', 'our'], after: ' cliffside nesting ledge at sunset.', explain: '"One" is singular and feminine here, agreeing with the singular pronoun "her."' },
  { before: 'All of the students completed ', right: 'their', wrong: ['his or her', 'its', 'hers'], after: ' digital history portfolios ahead of deadline.', explain: '"All" referring to count noun "students" is plural and takes "their."' },
];

// ---------- 7.10D.iv Prepositional Phrases & Subject-Verb Agreement ----------
interface PrepItem { before: string; right: string; wrong: [string, string, string]; after: string; explain: string }
const PREP_AGREEMENT: PrepItem[] = [
  { before: 'The collection of rare volcanic rocks ', right: 'is', wrong: ['are', 'were', 'being'], after: ' on display in the university geology museum.', explain: 'The subject "collection" is singular; the intervening prepositional phrase does not alter verb agreement.' },
  { before: 'The water levels in the subterranean aquifer ', right: 'fluctuate', wrong: ['fluctuates', 'is fluctuating', 'was fluctuating'], after: ' depending on seasonal winter rainfall.', explain: 'The subject "levels" is plural, requiring the plural verb "fluctuate."' },
  { before: 'A bouquet of native Texas wildflowers ', right: 'sits', wrong: ['sit', 'are sitting', 'were sitting'], after: ' on the welcoming table in the visitor center.', explain: 'The singular subject is "bouquet," so the verb must be singular ("sits").' },
  { before: 'The ancient stone arches along the desert trail ', right: 'loom', wrong: ['looms', 'is looming', 'was looming'], after: ' dramatically against the twilight sky.', explain: 'The plural subject "arches" requires the plural verb "loom."' },
  { before: 'One of the juvenile sea turtles ', right: 'was', wrong: ['were', 'are', 'been'], after: ' released back into the Gulf of Mexico yesterday.', explain: 'The subject "One" is singular, requiring the singular past verb "was."' },
  { before: 'The cluster of stars near the center of the galaxy ', right: 'shines', wrong: ['shine', 'are shining', 'were shining'], after: ' with extraordinary celestial brightness.', explain: 'The singular subject "cluster" agrees with the singular verb "shines."' },
  { before: 'The sound of crashing ocean waves ', right: 'echoes', wrong: ['echo', 'are echoing', 'were echoing'], after: ' through the hollow chambers of the sea cave.', explain: 'The singular subject "sound" takes the singular verb "echoes."' },
  { before: 'The rows of solar panels across the prairie ', right: 'generate', wrong: ['generates', 'is generating', 'was generating'], after: ' clean electricity for thousands of local homes.', explain: 'The plural subject "rows" takes the plural verb "generate."' },
  { before: 'A swarm of native carpenter bees ', right: 'buzzes', wrong: ['buzz', 'are buzzing', 'were buzzing'], after: ' around the fragrant blossoming mesquite trees.', explain: 'The singular subject "swarm" agrees with the singular verb "buzzes."' },
  { before: 'The historical records of the pioneer settlement ', right: 'provide', wrong: ['provides', 'is providing', 'was providing'], after: ' invaluable eyewitness accounts of frontier life.', explain: 'The plural subject "records" takes the plural verb "provide."' },
];

// ---------- 7.10D.iii Conjunctive Adverbs ----------
const CONJ_ADVERBS: ConjItem[] = [
  { sentence: 'The team practiced their robot routines daily; ___, they earned the highest score in the regional tournament.', right: 'consequently', wrong: ['meanwhile', 'instead', 'otherwise'], explain: '"Consequently" expresses a direct logical result of dedicated daily practice.' },
  { sentence: 'The science museum exhibits were interactive; ___, admission was completely free for school groups.', right: 'furthermore', wrong: ['however', 'otherwise', 'instead'], explain: '"Furthermore" adds an additional supporting positive detail.' },
  { sentence: 'The explorers planned to hike the deep canyon; ___, severe flash floods forced them to alter their route.', right: 'however', wrong: ['therefore', 'furthermore', 'likewise'], explain: '"However" signals a contrast between their plan and the unexpected weather.' },
  { sentence: 'The spacecraft must adjust its thrusters precisely; ___, it will drift off its designated orbit.', right: 'otherwise', wrong: ['furthermore', 'likewise', 'meanwhile'], explain: '"Otherwise" introduces the adverse consequence if the condition is not satisfied.' },
  { sentence: 'The city library was closed for extensive renovations; ___, students utilized the regional digital database.', right: 'therefore', wrong: ['otherwise', 'meanwhile', 'however'], explain: '"Therefore" introduces a logical action taken in response to the closure.' },
  { sentence: 'The lead researcher analyzed the water samples; ___, her assistants cataloged the surrounding plant species.', right: 'meanwhile', wrong: ['therefore', 'however', 'consequently'], explain: '"Meanwhile" shows two actions taking place at the same time.' },
  { sentence: 'The mountain trail was rocky and steep; ___, every student in our class reached the scenic summit safely.', right: 'nevertheless', wrong: ['therefore', 'consequently', 'likewise'], explain: '"Nevertheless" expresses an outcome achieved in spite of obstacles.' },
  { sentence: 'Elena prefers observational field biology; ___, her brother enjoys laboratory computer modeling.', right: 'in contrast', wrong: ['furthermore', 'therefore', 'likewise'], explain: '"In contrast" establishes a direct comparison between opposing preferences.' },
  { sentence: 'The solar panels produced an abundance of clean energy; ___, the school district lowered its utility expenses.', right: 'as a result', wrong: ['however', 'nevertheless', 'otherwise'], explain: '"As a result" denotes a direct cause-and-effect relationship.' },
  { sentence: 'The botanist watered the rare desert seedlings daily; ___, she carefully regulated the greenhouse temperature.', right: 'moreover', wrong: ['instead', 'however', 'otherwise'], explain: '"Moreover" introduces an additional supportive action in her care routine.' },
  { sentence: 'The conservationist did not purchase commercial chemical fertilizers; ___, he enriched the soil with organic compost.', right: 'instead', wrong: ['furthermore', 'meanwhile', 'likewise'], explain: '"Instead" shows an alternative method chosen in place of the first.' },
];

// ---------- 7.10D.ii Verb Tenses (Consistency) ----------
interface VerbItem { before: string; right: string; wrong: [string, string, string]; after: string; explain: string }
const VERB_TENSES: VerbItem[] = [
  { before: 'As soon as the archaeologists uncovered the burial chamber, they ', right: 'photographed', wrong: ['photograph', 'will photograph', 'have photographed'], after: ' every artifact before touching it.', explain: 'Maintain past tense consistency ("uncovered" ... "photographed").' },
  { before: 'While the meteorologist was explaining the weather radar, the sirens ', right: 'sounded', wrong: ['sound', 'will sound', 'are sounding'], after: ' across the entire valley.', explain: 'Maintain past tense consistency with the past continuous clause.' },
  { before: 'Whenever the desert wind blows from the south, sand dunes ', right: 'shift', wrong: ['shifted', 'will have shifted', 'were shifting'], after: ' into new curved shapes across the basin.', explain: 'Use present tense ("shift") to describe a recurring natural condition ("blows").' },
  { before: 'Last week, the robotics club built a prototype and ', right: 'tested', wrong: ['tests', 'will test', 'testing'], after: ' its mobility on rocky terrain.', explain: 'Coordinate past tense verbs ("built" ... "tested") for events completed in the past.' },
  { before: 'If our community reduces plastic waste today, future generations ', right: 'will inherit', wrong: ['inherited', 'had inherited', 'were inheriting'], after: ' cleaner and healthier oceans.', explain: 'A present conditional clause pairs with future tense ("will inherit") in the main clause.' },
  { before: 'The astronomers had monitored the asteroid for months before it finally ', right: 'passed', wrong: ['passes', 'will pass', 'is passing'], after: ' harmlessly beyond the moon.', explain: 'Past perfect ("had monitored") coordinates with simple past ("passed").' },
  { before: 'Every morning at sunrise, the flock of cranes ', right: 'takes', wrong: ['took', 'will take', 'taken'], after: ' flight from the shallow marsh waters.', explain: 'Use simple present tense ("takes") for habitual daily occurrences.' },
  { before: 'Yesterday, Maya noticed the unusual footprint and immediately ', right: 'called', wrong: ['calls', 'will call', 'calling'], after: ' the park ranger to investigate.', explain: 'Maintain past tense consistency ("noticed" ... "called").' },
  { before: 'After the storm passed, warm sunlight ', right: 'streamed', wrong: ['streams', 'will stream', 'streaming'], after: ' through the breaks in the pine canopy.', explain: 'Maintain past tense consistency ("passed" ... "streamed").' },
  { before: 'Before the scientists publish their findings next month, they ', right: 'will verify', wrong: ['verified', 'had verified', 'were verifying'], after: ' every data table with independent trials.', explain: 'Use future tense ("will verify") for actions preceding a future publication ("publish next month").' },
];

// ---------- 7.10D.i Complex Sentences & Avoiding Splices/Run-ons ----------
interface SentItem { prompt: string; right: string; wrong: [string, string, string]; explain: string }
const COMPLEX_SENTENCES: SentItem[] = [
  {
    prompt: 'Which sentence is a correctly constructed complex sentence that avoids comma splices and fragments?',
    right: 'Although the trail up Guadalupe Peak was steep, the hikers reached the summit before midday.',
    wrong: [
      'Although the trail up Guadalupe Peak was steep and rocky.',
      'The trail up Guadalupe Peak was steep, the hikers reached the summit before midday.',
      'Because the trail up Guadalupe Peak was steep, so the hikers reached the summit before midday.',
    ],
    explain: 'An introductory dependent clause ("Although the trail...") is followed by a comma and a complete independent clause.',
  },
  {
    prompt: 'Which choice correctly combines the two thoughts without creating a run-on or splice?',
    right: 'The robotic rover scanned the canyon floor; meanwhile, the drone mapped the cliffs above.',
    wrong: [
      'The robotic rover scanned the canyon floor, meanwhile the drone mapped the cliffs above.',
      'The robotic rover scanned the canyon floor meanwhile, the drone mapped the cliffs above.',
      'The robotic rover scanned the canyon floor, the drone mapped the cliffs above.',
    ],
    explain: 'Two independent clauses linked by a conjunctive adverb require a semicolon before and a comma after.',
  },
  {
    prompt: 'Which option represents a complete sentence rather than a sentence fragment?',
    right: 'While examining the ancient pottery sherds, Dr. Arroyo noticed a distinctive spiral motif.',
    wrong: [
      'While examining the ancient pottery sherds under the magnifying lens in the conservation lab.',
      'Dr. Arroyo examining the ancient pottery sherds with a distinctive spiral motif.',
      'Because Dr. Arroyo noticed a distinctive spiral motif on the rim of the ancient cooking vessel.',
    ],
    explain: 'A complete sentence must contain both a subject and an active finite verb in an independent clause.',
  },
  {
    prompt: 'Which choice correctly repairs the comma splice: "The tide retreated rapidly, colorful starfish clung to the exposed rocks"?',
    right: 'When the tide retreated rapidly, colorful starfish clung to the exposed rocks.',
    wrong: [
      'The tide retreated rapidly, and, colorful starfish clung to the exposed rocks.',
      'The tide retreated rapidly colorful starfish clung to the exposed rocks.',
      'The tide retreated rapidly, colorful starfish, clung to the exposed rocks.',
    ],
    explain: 'Turning the first clause into a dependent clause with "When" correctly connects the two thoughts.',
  },
  {
    prompt: 'Which revision eliminates the run-on sentence correctly?',
    right: 'The solar batteries charged all morning; therefore, the scientific instruments operated smoothly.',
    wrong: [
      'The solar batteries charged all morning therefore the scientific instruments operated smoothly.',
      'The solar batteries charged all morning, therefore the scientific instruments operated smoothly.',
      'The solar batteries charged all morning therefore, the scientific instruments operated smoothly.',
    ],
    explain: 'A semicolon must precede "therefore" when joining two independent clauses.',
  },
  {
    prompt: 'Which sentence maintains proper subject-verb agreement in a complex sentence?',
    right: 'Before the competition began, the collection of electronic parts was organized into labeled bins.',
    wrong: [
      'Before the competition began, the collection of electronic parts were organized into labeled bins.',
      'Before the competition began, the collection of electronic parts being organized into labeled bins.',
      'Before the competition began, the collection of electronic parts are organized into labeled bins.',
    ],
    explain: 'The singular subject "collection" requires the singular verb "was organized."',
  },
  {
    prompt: 'Which choice represents a correctly punctuated compound-complex sentence?',
    right: 'Because the desert night was clear, we set up the telescope, and Maya tracked the orbit of Jupiter.',
    wrong: [
      'Because the desert night was clear we set up the telescope, and Maya tracked the orbit of Jupiter.',
      'Because the desert night was clear, we set up the telescope and Maya tracked the orbit of Jupiter.',
      'Because the desert night was clear, we set up the telescope, Maya tracked the orbit of Jupiter.',
    ],
    explain: 'Use a comma after the introductory dependent clause and another comma before coordinating conjunction "and."',
  },
  {
    prompt: 'Which option correctly avoids a sentence fragment?',
    right: 'Since the native wetlands filter agricultural runoff, local coastal waters remain pristine.',
    wrong: [
      'Since the native wetlands filter agricultural runoff and trap dangerous sediment.',
      'Filtering agricultural runoff and trapping sediment across the coastal wetlands.',
      'The native wetlands filtering agricultural runoff and maintaining water clarity.',
    ],
    explain: 'The dependent clause "Since the native wetlands..." must attach to an independent clause ("local coastal waters remain pristine").',
  },
  {
    prompt: 'Which choice correctly repairs the fused run-on sentence?',
    right: 'The observatory opens at dusk, so visitors should arrive early to secure telescope time.',
    wrong: [
      'The observatory opens at dusk visitors should arrive early to secure telescope time.',
      'The observatory opens at dusk, visitors should arrive early to secure telescope time.',
      'The observatory opens at dusk so, visitors should arrive early to secure telescope time.',
    ],
    explain: 'Use a comma before coordinating conjunction "so" to connect two independent clauses.',
  },
  {
    prompt: 'Which choice is a properly constructed complex sentence with an introductory clause?',
    right: 'While the scientists gathered water samples, an osprey circled high above the reservoir.',
    wrong: [
      'While the scientists gathered water samples from the mountain reservoir.',
      'The scientists gathered water samples, an osprey circled high above the reservoir.',
      'While the scientists gathered water samples an osprey circled high above the reservoir.',
    ],
    explain: 'The introductory clause "While the scientists gathered water samples" must be separated from the independent clause by a comma.',
  },
];

export const EDITING_GENERATORS: Record<string, Gen[]> = {
  'rla:7.10D.ix': [spellingGen(CONFUSED_WORDS, 'Choose the word that correctly completes the sentence.')],
  'rla:7.10D.viii': [
    (rng) => {
      const it = pick(rng, PUNCTUATION);
      return one('inline', [txt('Choose the correctly punctuated phrase to complete the sentence.')],
        dropdown(rng, it.sentence, it.right, it.wrong), it.rule);
    },
  ],
  'rla:7.10D.vii': [
    (rng) => {
      const it = pick(rng, CAPS);
      return one('inline', [txt('Choose the correctly capitalized proper noun or title to complete the sentence.')],
        inline([it.before, { blank: 0 }, it.after], [{ options: shuffle(rng, [it.right, ...it.wrong]), correct: 0 }]),
        it.reason);
    },
  ],
  'rla:7.10D.vi': [
    (rng) => {
      const it = pick(rng, CONJUNCTIONS);
      return one('inline', [txt('Choose the conjunction that best completes the sentence.')],
        dropdown(rng, it.sentence, it.right, it.wrong), it.explain);
    },
  ],
  'rla:7.10D.v': [
    (rng) => {
      const it = pick(rng, PRONOUNS);
      const options = shuffle(rng, [it.right, ...it.wrong]);
      return one('inline', [txt('Choose the pronoun that agrees with its antecedent in the sentence.')],
        inline([it.before, { blank: 0 }, it.after], [{ options, correct: options.indexOf(it.right) }]),
        it.explain);
    },
  ],
  'rla:7.10D.iv': [
    (rng) => {
      const it = pick(rng, PREP_AGREEMENT);
      const options = shuffle(rng, [it.right, ...it.wrong]);
      return one('inline', [txt('Choose the verb that correctly agrees with the subject of the sentence.')],
        inline([it.before, { blank: 0 }, it.after], [{ options, correct: options.indexOf(it.right) }]),
        it.explain);
    },
  ],
  'rla:7.10D.iii': [
    (rng) => {
      const it = pick(rng, CONJ_ADVERBS);
      return one('inline', [txt('Choose the conjunctive adverb or transitional phrase that best connects the two clauses.')],
        dropdown(rng, it.sentence, it.right, it.wrong), it.explain);
    },
  ],
  'rla:7.10D.ii': [
    (rng) => {
      const it = pick(rng, VERB_TENSES);
      const options = shuffle(rng, [it.right, ...it.wrong]);
      return one('inline', [txt('Choose the verb form that maintains consistent tense in the sentence.')],
        inline([it.before, { blank: 0 }, it.after], [{ options, correct: options.indexOf(it.right) }]),
        it.explain);
    },
  ],
  'rla:7.10D.i': [
    (rng) => {
      const it = pick(rng, COMPLEX_SENTENCES);
      const choices = shuffle(rng, [it.right, ...it.wrong]);
      return one('mc', [txt(it.prompt)], { type: 'mc', choices: choices.map((c) => ({ text: c })), correct: [choices.indexOf(it.right)] }, it.explain);
    },
  ],
  'rla:7.10D': [
    (rng, d) => {
      if (d === 1) {
        const it = pick(rng, VERB_TENSES);
        const options = shuffle(rng, [it.right, ...it.wrong]);
        return one('inline', [txt('Edit the sentence for standard English conventions by choosing the correct verb.')],
          inline([it.before, { blank: 0 }, it.after], [{ options, correct: options.indexOf(it.right) }]), it.explain);
      }
      const it = pick(rng, COMPLEX_SENTENCES);
      const choices = shuffle(rng, [it.right, ...it.wrong]);
      return one('mc', [txt(it.prompt)], { type: 'mc', choices: choices.map((c) => ({ text: c })), correct: [choices.indexOf(it.right)] }, it.explain);
    },
  ],
};
