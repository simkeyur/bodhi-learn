// Grade 8 vocabulary and reading generators: reference materials (8.2A), context clues (8.2B),
// Greek and Latin roots (8.2C: ast, qui, path, mand/mend, duc), and editing skills (8.10D.i-vii).

import { pick, sample } from '../../rng.ts';
import { mc, one, txt, type Gen } from '../../generators/build.ts';
import { G8_EDITING_GENERATORS } from './generators-editing.ts';

export { G8_EDITING_GENERATORS };

// ---------- 8.2C Greek and Latin Roots ----------
// Specified in Grade 8 TEKS: ast, qui, path, mand/mend, duc
interface RootItem {
  root: string;
  origin: 'Greek' | 'Latin';
  meaning: string;
  word: string;
  wordMeaning: string;
  wrongMeanings: [string, string, string];
  sentence: string;
}

const ROOT_ITEMS: RootItem[] = [
  { root: 'ast', origin: 'Greek', meaning: 'star', word: 'astronomy', wordMeaning: 'the scientific study of stars, planets, and the universe', wrongMeanings: ['the chemical study of rock minerals', 'the mathematical analysis of ocean currents', 'the engineering of underwater tunnels'], sentence: 'Maya enrolled in an advanced course in **astronomy** to study stellar evolution and planetary nebulae.' },
  { root: 'ast', origin: 'Greek', meaning: 'star', word: 'asterisk', wordMeaning: 'a star-shaped symbol used in printed text as a reference mark', wrongMeanings: ['a circular punctuation mark showing end of sentence', 'a horizontal dividing line on a printed page', 'a triangular symbol indicating direction'], sentence: 'The author placed an **asterisk** beside the statistic to direct readers to the explanatory footnote.' },
  { root: 'ast', origin: 'Greek', meaning: 'star', word: 'disaster', wordMeaning: 'a sudden catastrophic event causing great damage or loss (literally ill-starred)', wrongMeanings: ['a planned municipal festival', 'a minor mathematical miscalculation', 'a routine weather fluctuation'], sentence: 'The category four hurricane proved to be a natural **disaster** that tested coastal emergency response systems.' },
  { root: 'qui', origin: 'Latin', meaning: 'rest or quiet', word: 'tranquility', wordMeaning: 'a state of calm, peacefulness, and quiet serenity', wrongMeanings: ['a state of violent confusion and panic', 'a period of rapid financial inflation', 'a condition of extreme physical exhaustion'], sentence: 'The astronauts marveled at the serene **tranquility** of the lunar landscape.' },
  { root: 'qui', origin: 'Latin', meaning: 'rest or quiet', word: 'acquiesce', wordMeaning: 'to accept or consent to something quietly without protest', wrongMeanings: ['to argue passionately against a proposal', 'to celebrate a victory with loud music', 'to investigate a crime scene thoroughly'], sentence: 'Recognizing that the storm was imminent, the harbor master had to **acquiesce** to the emergency port closure.' },
  { root: 'qui', origin: 'Latin', meaning: 'rest or quiet', word: 'disquiet', wordMeaning: 'a feeling of anxiety, worry, or unease', wrongMeanings: ['a sensation of profound physical comfort', 'an overwhelming sense of amusement', 'a complete absence of curiosity'], sentence: 'A sense of growing **disquiet** spread through the flight control room as communication dropped.' },
  { root: 'path', origin: 'Greek', meaning: 'feeling or suffering', word: 'empathy', wordMeaning: 'the ability to understand and share the feelings of another', wrongMeanings: ['a total lack of concern for others', 'a competitive desire to defeat a rival', 'the study of biological cell structures'], sentence: 'Through her volunteer work at the community center, Elena developed profound **empathy** for displaced families.' },
  { root: 'path', origin: 'Greek', meaning: 'feeling or suffering', word: 'apathy', wordMeaning: 'a complete lack of interest, enthusiasm, or emotional concern', wrongMeanings: ['an energetic passion for learning', 'a state of intense anger and resentment', 'a deep intellectual fascination with history'], sentence: 'The student council campaigned vigorously to overcome voter **apathy** before the campus election.' },
  { root: 'path', origin: 'Greek', meaning: 'feeling or suffering', word: 'sympathy', wordMeaning: 'feelings of pity, compassion, and sorrow for someone else\'s misfortune', wrongMeanings: ['a feeling of jealousy toward someone\'s success', 'an emotional detachment from all surroundings', 'a scientific curiosity about natural forces'], sentence: 'Paul Laurence Dunbar expressed deep **sympathy** for the suffering of the caged bird yearning for freedom.' },
  { root: 'path', origin: 'Greek', meaning: 'feeling or suffering', word: 'antipathy', wordMeaning: 'a deep-seated feeling of dislike or opposition', wrongMeanings: ['an overwhelming sense of affection', 'a temporary feeling of mild fatigue', 'a sudden urge to create artwork'], sentence: 'The historic rivals set aside their lingering **antipathy** to collaborate on the disaster relief committee.' },
  { root: 'mand', origin: 'Latin', meaning: 'order or command', word: 'mandatory', wordMeaning: 'required by law, rule, or authoritative command', wrongMeanings: ['optional and left to personal choice', 'forbidden under severe penalty', 'scheduled to occur in the distant future'], sentence: 'Wearing safety goggles is **mandatory** during all high-temperature chemistry experiments.' },
  { root: 'mand', origin: 'Latin', meaning: 'order or command', word: 'mandate', wordMeaning: 'an official order or authoritative commission to carry out a policy', wrongMeanings: ['an informal suggestion between friends', 'a temporary compromise between debaters', 'a private financial investment'], sentence: 'The newly elected municipal council received a clear public **mandate** to protect urban parklands.' },
  { root: 'mend', origin: 'Latin', meaning: 'order or entrust', word: 'commend', wordMeaning: 'to praise someone formally or entrust to someone\'s care', wrongMeanings: ['to criticize publicly for an error', 'to dismiss from employment without notice', 'to assign extra homework tasks'], sentence: 'The principal gathered the student body to **commend** the robotics team for their state championship.' },
  { root: 'duc', origin: 'Latin', meaning: 'lead', word: 'deduce', wordMeaning: 'to arrive at a logical conclusion by reasoning from known facts', wrongMeanings: ['to guess blindly without any evidence', 'to confuse someone with deceptive clues', 'to reject all scientific data completely'], sentence: 'By examining the distinctive stratum of iridium clay, geologists were able to **deduce** that a massive asteroid struck Earth.' },
  { root: 'duc', origin: 'Latin', meaning: 'lead', word: 'conduct', wordMeaning: 'to lead, direct, manage, or transmit energy', wrongMeanings: ['to prevent something from moving forward', 'to destroy electrical circuits completely', 'to conceal evidence from investigators'], sentence: 'Copper wire is widely utilized in aerospace electronics because it can efficiently **conduct** electrical currents.' },
  { root: 'duc', origin: 'Latin', meaning: 'lead', word: 'induct', wordMeaning: 'to formally admit or introduce someone into an organization or position', wrongMeanings: ['to banish someone from a society', 'to challenge someone to an athletic duel', 'to forget someone\'s historical accomplishments'], sentence: 'The aviation society voted to **induct** Katherine Johnson into the National Women\'s Hall of Fame.' },
];

const rootGen: Gen = (rng, d) => {
  const item = pick(rng, ROOT_ITEMS);
  if (d === 1) {
    // Basic root meaning
    const others = ROOT_ITEMS.filter((i) => i.root !== item.root);
    const wrongRoots = sample(rng, Array.from(new Set(others.map((i) => i.meaning))), 3);
    return one(
      'mc',
      [
        txt(`The word **${item.word}** contains the ${item.origin} root **${item.root}**.`),
        txt(`What is the meaning of the root **${item.root}**?`),
      ],
      mc(rng, item.meaning, wrongRoots),
      `The ${item.origin} root "${item.root}" means "${item.meaning}." In the word "${item.word}," it relates to ${item.wordMeaning}.`
    );
  }
  // Application in context
  return one(
    'mc',
    [
      txt(`Read the sentence: "${item.sentence}"`),
      txt(`Based on the meaning of the ${item.origin} root **${item.root}** ("${item.meaning}"), what does the word **${item.word}** mean as used in the sentence?`),
    ],
    mc(rng, item.wordMeaning, item.wrongMeanings),
    `Because the root "${item.root}" means "${item.meaning}," the word "${item.word}" means "${item.wordMeaning}."`
  );
};

// ---------- 8.2B Context Clues ----------
interface ContextWord {
  word: string;
  sentence: string;
  correct: string;
  wrong: [string, string, string];
  clueType: 'definition' | 'analogy' | 'example';
  explain: string;
}

const CONTEXT_WORDS: ContextWord[] = [
  {
    word: 'resilient',
    sentence: 'Despite enduring severe hurricane gale winds and saltwater flooding, the **resilient** cordgrass marshes quickly recovered and anchored the fragile shoreline.',
    correct: 'able to withstand or recover quickly from difficult conditions',
    wrong: ['easily destroyed by mild environmental disturbances', 'unable to survive in salty coastal soil', 'growing only in arid desert regions'],
    clueType: 'example',
    explain: 'Recovering quickly and anchoring the shoreline after enduring severe hurricane winds illustrates that "resilient" means able to bounce back from hardship.',
  },
  {
    word: 'meticulous',
    sentence: 'Dr. Johnson was extraordinarily **meticulous**; she checked every orbital equation four times by hand to ensure not a single decimal was misplaced.',
    correct: 'showing great attention to detail; very careful and precise',
    wrong: ['careless and rushed in calculations', 'indifferent about mathematical accuracy', 'relying entirely on automated guesses'],
    clueType: 'definition',
    explain: 'Checking every equation four times by hand to prevent misplaced decimals demonstrates that "meticulous" means exceptionally careful and precise.',
  },
  {
    word: 'tenacious',
    sentence: 'Just as a desert mesquite tree drives taproots sixty feet into subterranean rock to survive drought, Carlos was **tenacious** in mastering the difficult stonework.',
    correct: 'persistent, determined, and holding firmly to a purpose',
    wrong: ['fragile and easily discouraged by obstacles', 'impatient and unwilling to practice', 'distracted by trivial entertainment'],
    clueType: 'analogy',
    explain: 'The analogy comparing Carlos to a deep-rooted mesquite tree surviving harsh drought highlights his persistent, "tenacious" determination.',
  },
  {
    word: 'formidable',
    sentence: 'With its undefeated district record, impenetrable defensive line, and disciplined coaching, the rival squad proved to be a **formidable** opponent.',
    correct: 'inspiring respect or fear through being impressively large or capable',
    wrong: ['weak and disorganized in athletic competition', 'easily defeated by inexperienced players', 'reluctant to participate in championship games'],
    clueType: 'example',
    explain: 'The list of traits—undefeated record, impenetrable defense, disciplined coaching—shows that "formidable" means powerful, intimidating, and capable.',
  },
  {
    word: 'scrutinize',
    sentence: 'Before accepting the ancient parchment for the museum archive, the conservators had to **scrutinize** the document under ultraviolet light to verify the authenticity of the ink.',
    correct: 'examine or inspect closely and thoroughly',
    wrong: ['casually glance at from across the room', 'file away without opening the portfolio', 'alter quickly using modern ink pens'],
    clueType: 'definition',
    explain: 'Inspecting the document closely under ultraviolet light to verify authenticity demonstrates that "scrutinize" means to examine thoroughly.',
  },
  {
    word: 'impervious',
    sentence: 'Unlike wooden pilings that rot from seawater exposure, concrete bulkheads reinforced with epoxy resin are **impervious** to marine borehole worms.',
    correct: 'unable to be affected or penetrated by something',
    wrong: ['vulnerable to immediate biological damage', 'porous and easily soaked with seawater', 'decaying rapidly in ocean environments'],
    clueType: 'definition',
    explain: 'Contrasting the concrete with rotting wood shows that "impervious" means immune, impenetrable, and unaffected.',
  },
  {
    word: 'catalyst',
    sentence: 'The discovery of the 1948 acetate recording served as a **catalyst**, sparking widespread student enthusiasm for preserving local East Austin Tejano music history.',
    correct: 'a person or event that precipitates or accelerates an action',
    wrong: ['an obstacle that completely halts all progress', 'a confusing distraction that bores listeners', 'a financial penalty imposed on an organization'],
    clueType: 'definition',
    explain: 'Sparking widespread enthusiasm that accelerated preservation efforts shows that "catalyst" means an agent that ignites rapid change.',
  },
  {
    word: 'concur',
    sentence: 'After examining the seismic sensor logs and satellite GPS data, both independent vulcanology teams did **concur** that the magma reservoir remained dormant.',
    correct: 'agree or share the same opinion',
    wrong: ['disagree vehemently about the evidence', 'refuse to communicate scientific findings', 'retract previous experimental hypotheses'],
    clueType: 'definition',
    explain: 'Both teams reaching the identical conclusion based on shared data illustrates that "concur" means to agree.',
  },
  {
    word: 'pristine',
    sentence: 'The remote alpine meadow remained completely **pristine**, untouched by human footprints, roads, or industrial logging.',
    correct: 'in its original condition; unspoiled and clean',
    wrong: ['heavily contaminated with industrial waste', 'overcrowded with suburban developments', 'exhausted by intensive agriculture'],
    clueType: 'example',
    explain: 'Remaining untouched by human footprints or roads illustrates that "pristine" means pure, unspoiled, and in its original state.',
  },
  {
    word: 'adversity',
    sentence: 'Just as tempered steel gains strength through repeated exposure to hammer blows, the pioneer family developed resilience through confronting winter **adversity**.',
    correct: 'difficulties, hardship, or misfortune',
    wrong: ['luxurious comfort and financial wealth', 'prolonged periods of restful vacation', 'accidental good fortune and windfalls'],
    clueType: 'analogy',
    explain: 'The analogy of hammer blows strengthening steel highlights that "adversity" represents hardship and severe difficulties.',
  },
];

const contextGen: Gen = (rng) => {
  const item = pick(rng, CONTEXT_WORDS);
  return one(
    'mc',
    [
      txt(`Read the sentence: "${item.sentence}"`),
      txt(`What is the meaning of the word **${item.word}** as used in the sentence?`),
    ],
    mc(rng, item.correct, item.wrong),
    item.explain
  );
};

// ---------- 8.2A Dictionary Guide Words & Entries ----------
interface DictEntry {
  entry: string;
  pos: string;
  origin: string;
  guideWords: [string, string];
  definitions: [string, string, string];
  sentence: string;
  correctDefIndex: number;
}

const DICTIONARY_ENTRIES: DictEntry[] = [
  {
    entry: 'harness',
    pos: 'verb',
    origin: 'Old French *harnais*',
    guideWords: ['hardship', 'harvest'],
    definitions: [
      'to attach a draft animal to a plow or wagon with straps',
      'to control and direct the power of something for productive use',
      'to equip a soldier with battle armor or protective gear',
    ],
    sentence: 'Engineers designed innovative geothermal turbines to **harness** the subterranean thermal energy of the volcanic rift.',
    correctDefIndex: 1,
  },
  {
    entry: 'channel',
    pos: 'verb',
    origin: 'Latin *canalis*',
    guideWords: ['champion', 'charter'],
    definitions: [
      'to direct or guide something along a specific route or purpose',
      'to carve deep physical grooves into stone through hydraulic erosion',
      'to serve as a medium for communicating spiritual messages',
    ],
    sentence: 'The student council sought to **channel** school spirit into organizing a community food bank drive.',
    correctDefIndex: 0,
  },
  {
    entry: 'temper',
    pos: 'verb',
    origin: 'Latin *temperare*',
    guideWords: ['telescope', 'temporal'],
    definitions: [
      'to moderate, soften, or balance something with a counteracting force',
      'to strengthen metal or glass through reheating and controlled cooling',
      'to tune an acoustic musical instrument to an exact pitch scale',
    ],
    sentence: 'The experienced debate coach advised the team to **temper** passionate arguments with objective statistical facts.',
    correctDefIndex: 0,
  },
  {
    entry: 'forge',
    pos: 'verb',
    origin: 'Old French *forgier*',
    guideWords: ['forest', 'formative'],
    definitions: [
      'to shape metal by heating in a fire and hammering',
      'to produce a fraudulent copy of a document or signature',
      'to create or develop something new through concentrated effort',
    ],
    sentence: 'Through weeks of rigorous testing, the robotics partners managed to **forge** a bond of mutual trust.',
    correctDefIndex: 2,
  },
  {
    entry: 'navigate',
    pos: 'verb',
    origin: 'Latin *navigare*',
    guideWords: ['native', 'nebula'],
    definitions: [
      'to plan and direct the route of a ship, aircraft, or vehicle',
      'to travel through or successfully manage a complicated situation',
      'to move through a website or digital software interface',
    ],
    sentence: 'Middle school students must learn to **navigate** increasingly complex academic schedules and group deadlines.',
    correctDefIndex: 1,
  },
  {
    entry: 'scale',
    pos: 'verb',
    origin: 'Latin *scala*',
    guideWords: ['satellite', 'scavenger'],
    definitions: [
      'to climb up to the top of something steep and tall',
      'to remove outer flakes or mineral deposits from a surface',
      'to adjust the size or proportion of an image according to a ratio',
    ],
    sentence: 'Determined mountain climbers prepared to **scale** the sheer limestone cliffs of the canyon rim.',
    correctDefIndex: 0,
  },
  {
    entry: 'gauge',
    pos: 'verb',
    origin: 'Old French *jauger*',
    guideWords: ['gargoyle', 'general'],
    definitions: [
      'to estimate or judge the magnitude, amount, or likelihood of something',
      'to measure the precise physical dimensions of an object with an instrument',
      'to evaluate the thickness or diameter of wire or sheet metal',
    ],
    sentence: 'The meteorologist inspected barometric sensors to **gauge** the impending strength of the hurricane.',
    correctDefIndex: 0,
  },
  {
    entry: 'anchor',
    pos: 'verb',
    origin: 'Greek *ankyra*',
    guideWords: ['anatomy', 'ancient'],
    definitions: [
      'to drop a heavy hook into the seabed to hold a vessel steady',
      'to provide a firm basis, foundation, or sense of security for something',
      'to host or coordinate a live news broadcast or sports segment',
    ],
    sentence: 'Shared cultural heritage and community traditions help **anchor** families during times of economic transition.',
    correctDefIndex: 1,
  },
  {
    entry: 'weather',
    pos: 'verb',
    origin: 'Old English *weder*',
    guideWords: ['weakness', 'weight'],
    definitions: [
      'to withstand or successfully survive a storm or difficult ordeal',
      'to wear away or alter the appearance of something through exposure to elements',
      'to sail a ship to the windward side of an obstacle',
    ],
    sentence: 'The historic seawall managed to **weather** the catastrophic tidal surge without structural failure.',
    correctDefIndex: 0,
  },
  {
    entry: 'trace',
    pos: 'verb',
    origin: 'Old French *tracier*',
    guideWords: ['toxic', 'traditional'],
    definitions: [
      'to find, follow, or discover the origin or development of something',
      'to copy a drawing or blueprint by drawing over lines on transparent paper',
      'to draw an outline or faint line with a writing instrument',
    ],
    sentence: 'Historians can **trace** modern agricultural irrigation techniques back to ancient Mesopotamian canals.',
    correctDefIndex: 0,
  },
];

const dictGen: Gen = (rng, d) => {
  const item = pick(rng, DICTIONARY_ENTRIES);
  if (d === 1) {
    const [w1, w2] = item.guideWords;
    return one(
      'mc',
      [
        txt(`Look at the dictionary guide words on page 248: **${w1} • ${w2}**`),
        txt('Which of the following words would be found on this page?'),
      ],
      mc(rng, item.entry, sample(rng, DICTIONARY_ENTRIES.filter((e) => e !== item).map((e) => e.entry), 3)),
      `Alphabetically, "${item.entry}" falls between guide words "${w1}" and "${w2}."`
    );
  }
  const rightDef = item.definitions[item.correctDefIndex];
  const wrongDefs = item.definitions.filter((_, idx) => idx !== item.correctDefIndex);
  const otherItem = pick(rng, DICTIONARY_ENTRIES.filter((e) => e !== item));
  wrongDefs.push(otherItem.definitions[0]);
  return one(
    'mc',
    [
      txt(`Read the sentence from the text: "${item.sentence}"`),
      txt(`Which definition of **${item.entry}** best matches the meaning as used in the sentence?`),
    ],
    mc(rng, rightDef, wrongDefs),
    `In this context, "${item.entry}" means "${rightDef}."`
  );
};

export const G8_RLA_GENERATORS: Record<string, Gen[]> = {
  ...G8_EDITING_GENERATORS,
  'rla:8.2A': [dictGen],
  'rla:8.2B': [contextGen],
  'rla:8.2C': [rootGen],
};
