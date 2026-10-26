// Grade 8 editing sentence generators: 8.10D.i-vii and 8.10D conventions.
import { pick, shuffle, type Rng } from '../../rng.ts';
import { inline, one, txt, type Gen } from '../../generators/build.ts';
import type { InlinePart } from '../../types.ts';

function dropdown(rng: Rng, sentence: string, right: string, wrong: string[]): InlinePart {
  const options = shuffle(rng, [right, ...wrong]);
  // Handle sentences that may or may not have ___
  if (sentence.includes('___')) {
    const [before, after] = sentence.split('___');
    return inline([before, { blank: 0 }, after], [{ options, correct: options.indexOf(right) }]);
  }
  return inline([sentence + ' ', { blank: 0 }], [{ options, correct: options.indexOf(right) }]);
}

// 8.10D.i: Complex sentences, subject-verb agreement, splices, run-ons, fragments
const COMPLEX_SENTENCES = [
  {
    prompt: 'Which sentence correctly combines the clauses without creating a run-on or comma splice?',
    right: 'Although the team faced severe budget cuts, the engineers successfully launched the experimental weather balloon.',
    wrong: [
      'The team faced severe budget cuts, the engineers successfully launched the experimental weather balloon.',
      'Although the team faced severe budget cuts, but the engineers launched the experimental weather balloon.',
      'The team faced severe budget cuts the engineers successfully launched the experimental weather balloon.',
    ],
    explain: 'Using the subordinating conjunction "Although" creates a dependent clause followed by a comma and independent clause.',
  },
  {
    prompt: 'Which sentence is grammatically complete and avoids a comma splice?',
    right: 'The solar panels generate surplus electricity during summer; consequently, the campus utility bill dropped drastically.',
    wrong: [
      'The solar panels generate surplus electricity during summer, consequently, the campus utility bill dropped drastically.',
      'The solar panels generate surplus electricity during summer consequently the campus utility bill dropped drastically.',
      'Because the solar panels generate surplus electricity during summer, therefore the campus utility bill dropped drastically.',
    ],
    explain: 'Joining two independent clauses with a conjunctive adverb requires a semicolon before and a comma after.',
  },
  {
    prompt: 'Which sentence correctly repairs the sentence fragment?',
    right: 'Since the volcanic ash lingered in the stratosphere for months, global temperatures cooled noticeably.',
    wrong: [
      'Since the volcanic ash lingered in the stratosphere for months. Global temperatures cooled noticeably.',
      'The volcanic ash lingering in the stratosphere for months, which cooled global temperatures noticeably.',
      'Because the volcanic ash lingering in the stratosphere for months without clearing.',
    ],
    explain: 'Connecting the dependent clause starting with "Since" to the independent clause resolves the fragment.',
  },
  {
    prompt: 'Which revision fixes the comma splice correctly?',
    right: 'Marine biologists tagged twelve tiger sharks, and they tracked their migration across the Gulf of Mexico.',
    wrong: [
      'Marine biologists tagged twelve tiger sharks, they tracked their migration across the Gulf of Mexico.',
      'Marine biologists tagged twelve tiger sharks they tracked their migration across the Gulf of Mexico.',
      'Marine biologists tagged twelve tiger sharks, however they tracked their migration across the Gulf of Mexico.',
    ],
    explain: 'A coordinating conjunction ("and") preceded by a comma correctly joins two independent clauses.',
  },
  {
    prompt: 'Which sentence demonstrates correct subject-verb agreement in a complex sentence?',
    right: 'Whenever the cluster of seismic sensors detects underground tremors, the automated alarm sounds in the laboratory.',
    wrong: [
      'Whenever the cluster of seismic sensors detect underground tremors, the automated alarm sounds in the laboratory.',
      'Whenever the cluster of seismic sensors detects underground tremors, the automated alarm sound in the laboratory.',
      'Whenever the cluster of seismic sensors detect underground tremors, the automated alarm sound in the laboratory.',
    ],
    explain: 'The singular subject "cluster" agrees with "detects," and the singular subject "alarm" agrees with "sounds."',
  },
  {
    prompt: 'Which sentence combines the thoughts smoothly without a run-on error?',
    right: 'Before the excavation commenced, archaeologists surveyed the riverbank to map potential historic campsites.',
    wrong: [
      'Before the excavation commenced archaeologists surveyed the riverbank they mapped potential historic campsites.',
      'Archaeologists surveyed the riverbank, they mapped potential historic campsites before the excavation commenced.',
      'The excavation commenced, archaeologists surveyed the riverbank to map campsites.',
    ],
    explain: 'An introductory dependent clause followed by an independent clause creates a clear, coherent sentence.',
  },
  {
    prompt: 'Which sentence avoids a fragment and comma splice?',
    right: 'While inspecting the ancient masonry, Carlos discovered a hidden cavity that contained a colonial journal.',
    wrong: [
      'While inspecting the ancient masonry. Carlos discovered a hidden cavity that contained a colonial journal.',
      'Carlos inspected the ancient masonry, he discovered a hidden cavity that contained a colonial journal.',
      'Carlos inspecting the ancient masonry and discovering a hidden cavity that contained a colonial journal.',
    ],
    explain: 'The dependent clause "While inspecting..." modifies the complete independent clause cleanly.',
  },
  {
    prompt: 'Which sentence is correctly punctuated to avoid a run-on?',
    right: 'The robotic rover traversed the sandy ridge; however, the loose gravel caused its left tread to slip temporarily.',
    wrong: [
      'The robotic rover traversed the sandy ridge, however, the loose gravel caused its left tread to slip temporarily.',
      'The robotic rover traversed the sandy ridge however the loose gravel caused its left tread to slip temporarily.',
      'Because the robotic rover traversed the sandy ridge, however loose gravel caused its left tread to slip.',
    ],
    explain: 'A semicolon must precede "however" when connecting two complete sentences.',
  },
  {
    prompt: 'Which choice correctly repairs the fused run-on sentence?',
    right: 'Astronomers calibrated the radio telescope array, for they anticipated detecting fast radio bursts from deep space.',
    wrong: [
      'Astronomers calibrated the radio telescope array they anticipated detecting fast radio bursts from deep space.',
      'Astronomers calibrated the radio telescope array, they anticipated detecting fast radio bursts from deep space.',
      'Calibrating the radio telescope array astronomers anticipated detecting fast radio bursts.',
    ],
    explain: 'The coordinating conjunction "for" preceded by a comma correctly joins the clauses.',
  },
  {
    prompt: 'Which sentence shows proper complex sentence structure with subject-verb agreement?',
    right: 'Although neither of the hypotheses was confirmed by the experiment, the researchers gained valuable baseline data.',
    wrong: [
      'Although neither of the hypotheses were confirmed by the experiment, the researchers gained valuable baseline data.',
      'Although neither of the hypotheses was confirmed by the experiment, the researchers gains valuable baseline data.',
      'Neither of the hypotheses were confirmed, the researchers gained valuable baseline data.',
    ],
    explain: 'The indefinite pronoun "neither" takes the singular verb "was."',
  },
];

// 8.10D.ii: Verb tense consistency and active/passive voice
const VERB_TENSES = [
  { before: 'As the pressure inside the volcanic chamber rose, superheated steam ', right: 'escaped', wrong: ['escapes', 'will escape', 'is escaping'], after: ' through fissures in the rock.', explain: 'The past-tense verb "escaped" matches the past tense established by "rose."' },
  { before: 'When the bell rang, the students ', right: 'gathered', wrong: ['gather', 'will gather', 'are gathering'], after: ' their textbooks and hurried to the laboratory.', explain: 'The past tense "gathered" matches "rang" and "hurried."' },
  { before: 'Every morning, the environmental scientist ', right: 'analyzes', wrong: ['analyzed', 'will analyze', 'was analyzing'], after: ' water samples to detect chemical runoff.', explain: 'The habitual present phrase "Every morning" requires the present-tense verb "analyzes."' },
  { before: 'Before the storm struck the coast, the port authority ', right: 'had secured', wrong: ['has secured', 'will secure', 'secures'], after: ' all commercial cargo vessels.', explain: 'The past perfect "had secured" indicates an action completed before another past event ("struck").' },
  { before: 'While the telescope tracked the distant supernova, automated sensors ', right: 'recorded', wrong: ['record', 'will record', 'are recording'], after: ' spectral emission lines.', explain: '"Recorded" maintains past-tense consistency with "tracked."' },
  { before: 'The historic treaty ', right: 'was signed', wrong: ['is signed', 'will sign', 'signs'], after: ' by diplomatic representatives in 1845.', explain: 'The passive voice past-tense verb "was signed" correctly conveys an action performed in the historical past.' },
  { before: 'Whenever the turbine detects high wind velocity, its computerized brake ', right: 'engages', wrong: ['engaged', 'will engage', 'was engaging'], after: ' automatically.', explain: 'The present conditional construction requires "engages" to match "detects."' },
  { before: 'Last week, the robotics squad ', right: 'assembled', wrong: ['assembles', 'will assemble', 'is assembling'], after: ' a lightweight aluminum chassis.', explain: 'The time indicator "Last week" requires the past tense "assembled."' },
  { before: 'By the time the rescue team arrived, the hikers ', right: 'had built', wrong: ['have built', 'build', 'will build'], after: ' an insulated snow shelter.', explain: 'Past perfect "had built" shows completion before the past arrival.' },
  { before: 'Biologists predict that global monarch populations ', right: 'will rebound', wrong: ['rebounded', 'rebound', 'were rebounding'], after: ' if native milkweed corridors are preserved.', explain: 'Future prediction in an "if" conditional requires "will rebound."' },
];

// 8.10D.iii: Prepositions and prepositional phrases and their influence on subject-verb agreement
const PREP_AGREEMENT = [
  { before: 'The collection of rare botanical specimens ', right: 'occupies', wrong: ['occupy', 'are occupying', 'were occupying'], after: ' three temperature-controlled display cases.', explain: 'The subject is the singular noun "collection," not the plural object of preposition "specimens."' },
  { before: 'Several crates of delicate optical lenses ', right: 'were damaged', wrong: ['was damaged', 'is damaged', 'has been damaged'], after: ' during transit across the mountains.', explain: 'The subject is the plural noun "crates," requiring the plural verb "were damaged."' },
  { before: 'A bouquet of fragrant spring bluebonnets ', right: 'brightens', wrong: ['brighten', 'are brightening', 'were brightening'], after: ' the library circulation desk.', explain: 'The subject is the singular noun "bouquet," which takes "brightens."' },
  { before: 'The discovery of fossilized dinosaur footprints along the river ', right: 'attracts', wrong: ['attract', 'are attracting', 'were attracting'], after: ' thousands of tourists every summer.', explain: 'The singular subject "discovery" takes the singular verb "attracts."' },
  { before: 'Three boxes of archival photography equipment ', right: 'remain', wrong: ['remains', 'is remaining', 'was remaining'], after: ' stored in the museum basement.', explain: 'The plural subject "boxes" takes the plural verb "remain."' },
  { before: 'The leader of the environmental protest groups ', right: 'speaks', wrong: ['speak', 'are speaking', 'were speaking'], after: ' at tonight\'s city council hearing.', explain: 'The singular subject "leader" takes the singular verb "speaks."' },
  { before: 'All members of the student advisory committee ', right: 'support', wrong: ['supports', 'is supporting', 'was supporting'], after: ' the proposal for extended library hours.', explain: 'The plural subject "members" takes the plural verb "support."' },
  { before: 'The resonance of acoustic instruments in the sound booth ', right: 'depends', wrong: ['depend', 'are depending', 'were depending'], after: ' upon wall padding density.', explain: 'The singular subject "resonance" requires the singular verb "depends."' },
  { before: 'A swarm of migrating locusts ', right: 'sweeps', wrong: ['sweep', 'are sweeping', 'were sweeping'], after: ' across the prairie farmland.', explain: 'Collective noun "swarm" takes the singular verb "sweeps."' },
  { before: 'The architects of the municipal water treatment facility ', right: 'deserve', wrong: ['deserves', 'is deserving', 'was deserving'], after: ' recognition for conservation innovation.', explain: 'The plural subject "architects" takes "deserve."' },
];

// 8.10D.iv: Pronoun-antecedent agreement
const PRONOUN_AGREEMENT = [
  { before: 'Each of the student researchers presented ', right: 'his or her', wrong: ['their', 'its', 'theirs'], after: ' findings before the panel of judges.', explain: '"Each" is a singular indefinite pronoun requiring the singular pronoun "his or her."' },
  { before: 'Both of the robotics engineers calibrated ', right: 'their', wrong: ['his or her', 'its', 'hers'], after: ' rover sensors before the trial round.', explain: '"Both" is a plural indefinite pronoun requiring the plural possessive pronoun "their."' },
  { before: 'The committee submitted ', right: 'its', wrong: ['their', 'his', 'they\'re'], after: ' recommendations for campus sustainability.', explain: 'The collective noun "committee" acts as a single entity and takes the neuter singular pronoun "its."' },
  { before: 'Neither of the female astronauts forgot ', right: 'her', wrong: ['their', 'its', 'them'], after: ' checklist during the simulated airlock test.', explain: '"Neither" is singular, taking the singular feminine pronoun "her."' },
  { before: 'All of the students completed ', right: 'their', wrong: ['his or her', 'its', 'him'], after: ' essays on renewable energy.', explain: '"All" modifying plural count noun "students" takes "their."' },
  { before: 'A person should always double-check ', right: 'his or her', wrong: ['their', 'its', 'them'], after: ' calculations before submitting a research paper.', explain: '"Person" is singular, requiring "his or her."' },
  { before: 'The swarm of honeybees defended ', right: 'its', wrong: ['their', 'they\'re', 'his'], after: ' hive against the hungry predator.', explain: '"Swarm" is a singular collective noun taking "its."' },
  { before: 'Many of the volunteers contributed ', right: 'their', wrong: ['his or her', 'its', 'hers'], after: ' time to plant native wildflowers.', explain: '"Many" is plural, requiring "their."' },
  { before: 'One of the boys forgot to bring ', right: 'his', wrong: ['their', 'its', 'her'], after: ' field notebook to the archaeological site.', explain: '"One" refers to "boys," requiring the singular masculine pronoun "his."' },
  { before: 'Either of the proposed plans has ', right: 'its', wrong: ['their', 'his', 'them'], after: ' unique environmental advantages.', explain: '"Either" is singular, requiring the neuter singular pronoun "its."' },
];

// 8.10D.v: Correct capitalization
const CAPITALIZATION = [
  { sentence: 'During our summer trip across the American Southwest, we visited Carlsbad Caverns National Park.', right: 'Carlsbad Caverns National Park', wrong: ['carlsbad caverns national park', 'Carlsbad caverns National park', 'carlsbad Caverns National Park'], explain: 'Proper names of specific national parks must have all major words capitalized.' },
  { sentence: 'Our science teacher invited Dr. Alvarez, a renowned astrophysicist from NASA, to speak.', right: 'Dr. Alvarez', wrong: ['dr. alvarez', 'dr. Alvarez', 'Dr. alvarez'], explain: 'Formal titles and surnames must be capitalized.' },
  { sentence: 'Last November, the Austin Middle School debate club traveled to Dallas for the tournament.', right: 'Austin Middle School', wrong: ['austin middle school', 'Austin middle school', 'Austin Middle school'], explain: 'The official name of a school is a proper noun requiring capitalization of each word.' },
  { sentence: 'We studied the migration of the Canadian geese across the northern hemisphere.', right: 'Canadian', wrong: ['canadian', 'Canadien', 'Canadienn'], explain: 'Proper adjectives derived from nation names must be capitalized.' },
  { sentence: 'My aunt teaches English and Spanish literature at Texas State University.', right: 'English and Spanish', wrong: ['english and spanish', 'English and spanish', 'english and Spanish'], explain: 'Names of specific languages are always capitalized.' },
  { sentence: 'The Apollo 11 lunar module touched down safely in the Sea of Tranquility on the Moon.', right: 'Sea of Tranquility', wrong: ['sea of tranquility', 'Sea of tranquility', 'sea of Tranquility'], explain: 'Proper geographic features on celestial bodies are capitalized.' },
  { sentence: 'Senator Brooks delivered an inspiring speech during the Veterans Day ceremony.', right: 'Veterans Day', wrong: ['veterans day', 'Veterans day', 'veterans Day'], explain: 'Names of recognized holidays are proper nouns requiring capitalization.' },
  { sentence: 'The Gulf Coast wetlands buffer coastal communities from violent hurricanes.', right: 'Gulf Coast', wrong: ['gulf coast', 'Gulf coast', 'gulf Coast'], explain: 'Recognized geographic regions are capitalized as proper nouns.' },
  { sentence: 'Next semester, Jordan plans to enroll in Advanced Placement European History.', right: 'European History', wrong: ['european history', 'European history', 'european History'], explain: 'Specific academic course titles are proper nouns.' },
  { sentence: 'The Rio Grande river forms a natural international border between Texas and Mexico.', right: 'Rio Grande', wrong: ['rio grande', 'Rio grande', 'rio Grande'], explain: 'Proper names of rivers are capitalized.' },
];

// 8.10D.vi: Punctuation: nonrestrictive clauses, semicolons, colons, parentheses
const PUNCTUATION = [
  {
    prompt: 'Which sentence correctly punctuates the nonrestrictive clause with commas?',
    right: 'Dr. Johnson, who calculated trajectories for early spaceflight, received the Presidential Medal of Freedom.',
    wrong: [
      'Dr. Johnson who calculated trajectories for early spaceflight, received the Presidential Medal of Freedom.',
      'Dr. Johnson, who calculated trajectories for early spaceflight received the Presidential Medal of Freedom.',
      'Dr. Johnson who calculated trajectories for early spaceflight received the Presidential Medal of Freedom.',
    ],
    explain: 'Nonrestrictive clauses provide nonessential information and must be enclosed by commas on both sides.',
  },
  {
    prompt: 'Which sentence correctly uses a semicolon to connect two related independent clauses?',
    right: 'The ancient stone wall stood for three centuries; its mortar was reinforced with prickly pear juice.',
    wrong: [
      'The ancient stone wall stood for three centuries, its mortar was reinforced with prickly pear juice.',
      'The ancient stone wall stood for three centuries: its mortar was reinforced with prickly pear juice.',
      'The ancient stone wall stood for three centuries, and its mortar was reinforced with prickly pear juice;',
    ],
    explain: 'A semicolon correctly links two independent clauses without a coordinating conjunction.',
  },
  {
    prompt: 'Which sentence correctly uses a colon to introduce an explanatory list?',
    right: 'The robotics rover required three essential upgrades: knobby rubber tracks, a high-torque motor, and ultrasonic rangefinders.',
    wrong: [
      'The robotics rover required: three essential upgrades, knobby rubber tracks, a high-torque motor, and ultrasonic rangefinders.',
      'The robotics rover required three essential upgrades; knobby rubber tracks, a high-torque motor, and ultrasonic rangefinders.',
      'The robotics rover required, three essential upgrades: knobby rubber tracks, a high-torque motor, and ultrasonic rangefinders.',
    ],
    explain: 'A colon is placed after a complete independent clause to introduce a series or list.',
  },
  {
    prompt: 'Which sentence uses parentheses correctly to enclose supplemental information?',
    right: 'The supervolcano eruption (classified as a VEI-8 event) expelled over one thousand cubic kilometers of ash.',
    wrong: [
      'The supervolcano eruption, (classified as a VEI-8 event), expelled over one thousand cubic kilometers of ash.',
      'The supervolcano eruption (classified as a VEI-8 event expelled) over one thousand cubic kilometers of ash.',
      'The supervolcano eruption classified as a (VEI-8 event) expelled over one thousand cubic kilometers of ash.',
    ],
    explain: 'Parentheses cleanly enclose supplemental parenthetical information without unnecessary commas.',
  },
  {
    prompt: 'Which sentence correctly sets off the appositive phrase with commas?',
    right: 'Mary Ann Goodnight, a compassionate Texas pioneer, rescued orphaned bison calves in Palo Duro Canyon.',
    wrong: [
      'Mary Ann Goodnight a compassionate Texas pioneer rescued orphaned bison calves in Palo Duro Canyon.',
      'Mary Ann Goodnight, a compassionate Texas pioneer rescued orphaned bison calves in Palo Duro Canyon.',
      'Mary Ann Goodnight a compassionate Texas pioneer, rescued orphaned bison calves in Palo Duro Canyon.',
    ],
    explain: 'Appositives that rename a preceding noun are set off with commas on both sides.',
  },
  {
    prompt: 'Which sentence correctly uses a semicolon and comma with a conjunctive adverb?',
    right: 'The island telegraph cables snapped during the gale; nevertheless, the messenger carried the dispatch by boat.',
    wrong: [
      'The island telegraph cables snapped during the gale, nevertheless, the messenger carried the dispatch by boat.',
      'The island telegraph cables snapped during the gale; nevertheless the messenger carried the dispatch by boat.',
      'The island telegraph cables snapped during the gale nevertheless; the messenger carried the dispatch by boat.',
    ],
    explain: 'When joining clauses with a conjunctive adverb, a semicolon precedes and a comma follows the adverb.',
  },
  {
    prompt: 'Which sentence correctly punctuates the nonrestrictive relative clause?',
    right: 'The James Webb Space Telescope, which orbits at L2, detects infrared light from primordial galaxies.',
    wrong: [
      'The James Webb Space Telescope which orbits at L2 detects infrared light from primordial galaxies.',
      'The James Webb Space Telescope, which orbits at L2 detects infrared light from primordial galaxies.',
      'The James Webb Space Telescope which orbits at L2, detects infrared light from primordial galaxies.',
    ],
    explain: 'The nonrestrictive clause "which orbits at L2" requires commas before and after.',
  },
  {
    prompt: 'Which sentence correctly uses a colon to introduce a formal quotation?',
    right: 'Astronaut John Glenn famously issued this directive to engineers: "Get the girl to check the numbers."',
    wrong: [
      'Astronaut John Glenn famously issued this directive to engineers; "Get the girl to check the numbers."',
      'Astronaut John Glenn famously issued, this directive to engineers: "Get the girl to check the numbers."',
      'Astronaut John Glenn famously: issued this directive to engineers "Get the girl to check the numbers."',
    ],
    explain: 'A colon is used after an independent clause to introduce a formal quoted statement.',
  },
  {
    prompt: 'Which sentence correctly encloses dates within parentheses?',
    right: 'Katherine Johnson (1918–2020) calculated flight paths for the Mercury and Apollo space programs.',
    wrong: [
      'Katherine Johnson, (1918–2020), calculated flight paths for the Mercury and Apollo space programs.',
      'Katherine Johnson (1918–2020 calculated) flight paths for the Mercury and Apollo space programs.',
      'Katherine Johnson 1918–2020 (calculated) flight paths for the Mercury and Apollo space programs.',
    ],
    explain: 'Parentheses accurately enclose biographical birth and death years directly following the person\'s name.',
  },
  {
    prompt: 'Which sentence correctly uses semicolons in a complex list containing internal commas?',
    right: 'The delegation included Elena Martinez, student council president; Dr. Aris, lead geologist; and Marcus Vance, audio technician.',
    wrong: [
      'The delegation included Elena Martinez, student council president, Dr. Aris, lead geologist, and Marcus Vance, audio technician.',
      'The delegation included Elena Martinez: student council president; Dr. Aris: lead geologist; and Marcus Vance: audio technician.',
      'The delegation included Elena Martinez; student council president, Dr. Aris; lead geologist, and Marcus Vance; audio technician.',
    ],
    explain: 'Semicolons separate items in a series when individual items contain internal commas.',
  },
];

// 8.10D.vii: Correct spelling and commonly confused terms
const CONFUSED_WORDS = [
  { sentence: 'The heavy rainfall will severely affect the water level of the reservoir.', right: 'affect', wrong: ['effect', 'affective', 'effective'], explain: '"Affect" is a verb meaning to influence or produce a change in something.' },
  { sentence: 'The environmental club observed the positive effect of the pollinator garden.', right: 'effect', wrong: ['affect', 'effects', 'affective'], explain: '"Effect" is a noun meaning a result or outcome.' },
  { sentence: 'The robotic rover completed its assigned mission ahead of schedule.', right: 'its', wrong: ['it\'s', 'its\'', 'it'], explain: '"Its" is the possessive form, while "it\'s" is the contraction for "it is."' },
  { sentence: 'It\'s essential to wear solar eclipse glasses while observing the sun.', right: 'It\'s', wrong: ['Its', 'Its\'', 'Tis'], explain: '"It\'s" is the contraction for "It is."' },
  { sentence: 'The students parked their bicycles outside the science building.', right: 'their', wrong: ['there', 'they\'re', 'theirs'], explain: '"Their" is the third-person plural possessive pronoun.' },
  { sentence: 'Place the antique acetate recording over there on the acoustic table.', right: 'there', wrong: ['their', 'they\'re', 'thier'], explain: '"There" refers to a physical place or location.' },
  { sentence: 'They\'re enthusiastic about presenting their robotics design to the school board.', right: 'They\'re', wrong: ['Their', 'There', 'They'], explain: '"They\'re" is the contraction for "they are."' },
  { sentence: 'The hike to the canyon rim was too strenuous for the younger campers.', right: 'too', wrong: ['to', 'two', 'toe'], explain: '"Too" is an adverb meaning excessively or also.' },
  { sentence: 'The conservation team plans to visit two separate salt marsh estuaries tomorrow.', right: 'two', wrong: ['too', 'to', 'tow'], explain: '"Two" represents the numerical value 2.' },
  { sentence: 'The engineers traveled to the remote observatory in West Texas.', right: 'to', wrong: ['too', 'two', 'tow'], explain: '"To" is a preposition indicating destination.' },
  { sentence: 'The historic mission was built from porous limestone that absorbs moisture.', right: 'porous', wrong: ['poreous', 'porus', 'poris'], explain: '"Porous" is spelled p-o-r-o-u-s.' },
  { sentence: 'Maintaining rigorous laboratory hygiene prevents chemical contamination.', right: 'hygiene', wrong: ['hygene', 'higiene', 'hygeine'], explain: '"Hygiene" is spelled h-y-g-i-e-n-e.' },
];

const spellingGen = (bank: typeof CONFUSED_WORDS, prompt: string): Gen => (rng) => {
  const it = pick(rng, bank);
  return one('inline', [txt(prompt)], dropdown(rng, it.sentence, it.right, it.wrong), it.explain);
};

export const G8_EDITING_GENERATORS: Record<string, Gen[]> = {
  'rla:8.10D.vii': [spellingGen(CONFUSED_WORDS, 'Choose the word that correctly completes the sentence.')],
  'rla:8.10D.vi': [
    (rng) => {
      const it = pick(rng, PUNCTUATION);
      const choices = shuffle(rng, [it.right, ...it.wrong]);
      return one('mc', [txt(it.prompt)], { type: 'mc', choices: choices.map((c) => ({ text: c })), correct: [choices.indexOf(it.right)] }, it.explain);
    },
  ],
  'rla:8.10D.v': [
    (rng) => {
      const it = pick(rng, CAPITALIZATION);
      return one('inline', [txt('Choose the correct capitalization for the underlined term in the sentence.')],
        dropdown(rng, it.sentence, it.right, it.wrong), it.explain);
    },
  ],
  'rla:8.10D.iv': [
    (rng) => {
      const it = pick(rng, PRONOUN_AGREEMENT);
      const options = shuffle(rng, [it.right, ...it.wrong]);
      return one('inline', [txt('Choose the pronoun that correctly agrees with its antecedent.')],
        inline([it.before, { blank: 0 }, it.after], [{ options, correct: options.indexOf(it.right) }]),
        it.explain);
    },
  ],
  'rla:8.10D.iii': [
    (rng) => {
      const it = pick(rng, PREP_AGREEMENT);
      const options = shuffle(rng, [it.right, ...it.wrong]);
      return one('inline', [txt('Choose the verb that correctly agrees with the subject of the sentence.')],
        inline([it.before, { blank: 0 }, it.after], [{ options, correct: options.indexOf(it.right) }]),
        it.explain);
    },
  ],
  'rla:8.10D.ii': [
    (rng) => {
      const it = pick(rng, VERB_TENSES);
      const options = shuffle(rng, [it.right, ...it.wrong]);
      return one('inline', [txt('Choose the verb form that maintains consistent tense in the sentence.')],
        inline([it.before, { blank: 0 }, it.after], [{ options, correct: options.indexOf(it.right) }]),
        it.explain);
    },
  ],
  'rla:8.10D.i': [
    (rng) => {
      const it = pick(rng, COMPLEX_SENTENCES);
      const choices = shuffle(rng, [it.right, ...it.wrong]);
      return one('mc', [txt(it.prompt)], { type: 'mc', choices: choices.map((c) => ({ text: c })), correct: [choices.indexOf(it.right)] }, it.explain);
    },
  ],
  'rla:8.10D': [
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
