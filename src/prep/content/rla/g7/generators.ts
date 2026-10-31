// Grade 7 reading generators: dictionary/guide words (7.2A), context clues (7.2B),
// and Greek/Latin roots (7.2C).
// Each generator bank has at least 10 entries so variety and distinctness tests pass.

import { pick, sample } from '../../rng.ts';
import { mc, one, txt, type Gen } from '../../generators/build.ts';
import { EDITING_GENERATORS } from './generators-editing.ts';

// ---------- 7.2C Greek and Latin Roots ----------
// Roots for Grade 7: omni, log/logue, gen, vid/vis, phil, luc/lum
interface RootItem {
  root: string;
  origin: 'Greek' | 'Latin';
  meaning: string;
  word: string;
  wordMeaning: string;
  wrongMeanings: [string, string, string];
  sentence: string;
}

const ROOTS: RootItem[] = [
  { root: 'omni', origin: 'Latin', meaning: 'all or every', word: 'omnipotent', wordMeaning: 'having unlimited power or all-powerful', wrongMeanings: ['moving in every direction', 'living underground', 'active only during the night'], sentence: 'In ancient myths, the supreme ruler of the gods was depicted as an **omnipotent** deity.' },
  { root: 'omni', origin: 'Latin', meaning: 'all or every', word: 'omniscient', wordMeaning: 'possessing complete or universal knowledge', wrongMeanings: ['able to fly across continents', 'sleeping through all four seasons', 'visible from great distances'], sentence: 'The novel features an **omniscient** third-person narrator who understands the secret motives of every character.' },
  { root: 'omni', origin: 'Latin', meaning: 'all or every', word: 'omnivore', wordMeaning: 'an animal that consumes both plants and animals', wrongMeanings: ['an animal that eats only fish', 'a predator that hunts alone', 'an herbivore with sharp antlers'], sentence: 'Because black bears consume berries, roots, fish, and insects, biologists classify them as **omnivores**.' },
  { root: 'log / logue', origin: 'Greek', meaning: 'word, speech, reason, or study', word: 'monologue', wordMeaning: 'a long, uninterrupted speech delivered by a single character', wrongMeanings: ['a private conversation between two leaders', 'a musical chorus performed outdoors', 'a written message delivered by messenger'], sentence: 'The actor commanded the stage with a powerful dramatic **monologue** about courage.' },
  { root: 'log / logue', origin: 'Greek', meaning: 'word, speech, reason, or study', word: 'prologue', wordMeaning: 'an introductory section that provides background context', wrongMeanings: ['a dramatic final resolution', 'a list of cast members and credits', 'an index of technical terms'], sentence: 'The **prologue** of the historical novel established the tense political climate of 1900 Galveston.' },
  { root: 'log / logue', origin: 'Greek', meaning: 'word, speech, reason, or study', word: 'dialogue', wordMeaning: 'conversation spoken between two or more characters', wrongMeanings: ['an individual silent thought', 'a stage direction indicating an exit', 'a background narrator voiceover'], sentence: 'The playwright used realistic **dialogue** to reveal the growing conflict between the two lab interns.' },
  { root: 'gen', origin: 'Greek', meaning: 'birth, origin, race, or kind', word: 'genesis', wordMeaning: 'the origin, creation, or coming into existence of something', wrongMeanings: ['the sudden conclusion of a process', 'a physical measurement of height', 'the gradual decay of material'], sentence: 'Scientists studying hydrothermal vents hope to uncover clues about the **genesis** of life on Earth.' },
  { root: 'gen', origin: 'Greek', meaning: 'birth, origin, race, or kind', word: 'indigenous', wordMeaning: 'originating or occurring naturally in a particular land', wrongMeanings: ['introduced from a foreign ecosystem', 'migrating across oceans annually', 'thriving only in botanical gardens'], sentence: 'The bluebonnet is an **indigenous** wildflower species native to the prairies of Texas.' },
  { root: 'gen', origin: 'Greek', meaning: 'birth, origin, race, or kind', word: 'genealogy', wordMeaning: 'the study of family lineages and ancestral descent', wrongMeanings: ['the excavation of ancient stone tools', 'the classification of mineral rocks', 'the calculation of lunar eclipses'], sentence: 'Maya researched her family **genealogy** to discover which ancestors first settled in San Antonio.' },
  { root: 'vid / vis', origin: 'Latin', meaning: 'to see or look', word: 'visionary', wordMeaning: 'a person with clear, imaginative foresight about the future', wrongMeanings: ['an official inspector of public bridges', 'a mechanic who fixes optical lenses', 'a surveyor who maps country boundaries'], sentence: 'Mary Ann Goodnight was a conservation **visionary** who saw the urgency of saving the southern bison.' },
  { root: 'vid / vis', origin: 'Latin', meaning: 'to see or look', word: 'invisible', wordMeaning: 'impossible to be perceived by the human eye', wrongMeanings: ['lacking weight or mass', 'producing no detectable echo', 'moving faster than the speed of sound'], sentence: 'Ultraviolet radiation is **invisible** to human eyes without specialized fluorescent lighting.' },
  { root: 'vid / vis', origin: 'Latin', meaning: 'to see or look', word: 'evident', wordMeaning: 'clearly perceived or obvious to understand', wrongMeanings: ['completely hidden beneath silt', 'doubtful or uncertain in origin', 'measured with electronic tools'], sentence: 'The eagle\'s keen eyesight became **evident** when it spotted a field mouse from a mile away.' },
  { root: 'phil', origin: 'Greek', meaning: 'love or affection for', word: 'philanthropist', wordMeaning: 'a generous person who promotes the welfare of others through donations', wrongMeanings: ['a skilled coin collector', 'a government financial accountant', 'a doctor who treats tropical ailments'], sentence: 'The wealthy **philanthropist** donated five million dollars to build the coastal bird sanctuary.' },
  { root: 'phil', origin: 'Greek', meaning: 'love or affection for', word: 'bibliophile', wordMeaning: 'a person who possesses a deep love and admiration for books', wrongMeanings: ['an author who writes mystery plays', 'a librarian who organizes card catalogs', 'a publisher of daily newspapers'], sentence: 'As a passionate **bibliophile**, Mateo spent his weekend browsing second-hand bookstores in Austin.' },
  { root: 'luc / lum', origin: 'Latin', meaning: 'light or brightness', word: 'lucid', wordMeaning: 'expressed clearly and easy to comprehend', wrongMeanings: ['cloudy and opaque in texture', 'spoken in a very soft whisper', 'composed in poetic rhyming verse'], sentence: 'Dr. Arroyo provided a **lucid** explanation of how tectonic faults form underwater chimneys.' },
  { root: 'luc / lum', origin: 'Latin', meaning: 'light or brightness', word: 'illuminate', wordMeaning: 'to light up or brighten with radiance', wrongMeanings: ['to conceal beneath dark shrouds', 'to measure with electronic scales', 'to cool down with fresh ventilation'], sentence: 'The high-powered submarine headlights helped **illuminate** the abyssal volcanic chimneys.' },
  { root: 'luc / lum', origin: 'Latin', meaning: 'light or brightness', word: 'luminous', wordMeaning: 'radiating or emitting glowing light', wrongMeanings: ['completely frozen solid', 'generating heavy smoke', 'absorbing all sound frequencies'], sentence: 'The deep-sea anglerfish used a **luminous** dorsal lure to attract prey in total darkness.' },
];

const rootGen: Gen = (rng, d) => {
  const item = pick(rng, ROOTS);
  if (d === 1) {
    // Identify meaning of the root itself
    const wrongRoots = sample(rng, ['sound or voice', 'time or duration', 'heat or warmth', 'hand or craft', 'water or moisture', 'earth or ground', 'life or living'], 3);
    return one(
      'mc',
      [
        txt(`The word **${item.word}** contains the ${item.origin} root **${item.root}**.`),
        txt(`What does the root **${item.root}** mean?`),
      ],
      mc(rng, item.meaning, wrongRoots),
      `The ${item.origin} root "${item.root}" means "${item.meaning}." In "${item.word}," it contributes to the meaning: ${item.wordMeaning}.`
    );
  }
  // Word meaning in context using root knowledge
  return one(
    'mc',
    [
      txt(`Read the sentence: "${item.sentence}"`),
      txt(`Based on the ${item.origin} root **${item.root}** (meaning *${item.meaning}*), what is the meaning of **${item.word}** as used in the sentence?`),
    ],
    mc(rng, item.wordMeaning, item.wrongMeanings),
    `Knowing that the root "${item.root}" means "${item.meaning}" helps determine that "${item.word}" means ${item.wordMeaning}.`
  );
};

// ---------- 7.2B Words in Context ----------
interface ContextItem {
  word: string;
  sentence: string;
  correct: string;
  wrong: [string, string, string];
  clueType: 'definition' | 'analogy' | 'example';
  explain: string;
}

const CONTEXT_WORDS: ContextItem[] = [
  {
    word: 'resilient',
    sentence: 'Like desert cactuses that endure months of drought yet burst into vibrant bloom after spring rains, the pioneer settlers proved remarkably **resilient** in the face of frontier hardship.',
    correct: 'able to recover quickly from difficult conditions or adversity',
    wrong: ['fragile and easily discouraged by weather', 'stubbornly unwilling to adapt to changes', 'relying entirely on government assistance'],
    clueType: 'analogy',
    explain: 'The analogy comparing the settlers to desert cactuses that endure drought and bounce back shows that "resilient" means able to recover quickly from hardship.',
  },
  {
    word: 'precipitous',
    sentence: 'The hikers halted at the edge of the canyon, peering down the **precipitous** cliff—a sheer drop of eight hundred feet with almost no handholds.',
    correct: 'dangerously steep or sheer',
    wrong: ['gently sloping toward the valley', 'covered in dense pine forest', 'wide and accessible to motor vehicles'],
    clueType: 'definition',
    explain: 'The descriptive phrase "a sheer drop of eight hundred feet" defines "precipitous" as dangerously steep.',
  },
  {
    word: 'meticulous',
    sentence: 'Maya was a **meticulous** archivist; for example, she labeled every catalog entry with precise stratigraphic coordinates, photographed each sherd from three angles, and recorded microscopic measurements.',
    correct: 'showing great attention to detail and thorough precision',
    wrong: ['hurried and careless with lab records', 'reluctant to collaborate with teammates', 'uninterested in scientific discoveries'],
    clueType: 'example',
    explain: 'The examples of labeling coordinates, photographing from three angles, and taking microscopic measurements illustrate that "meticulous" means showing great care and thorough precision.',
  },
  {
    word: 'voracious',
    sentence: 'During their rapid larval stage, monarch caterpillars exhibit **voracious** appetites, consuming entire milkweed leaves within minutes and doubling their body mass in hours.',
    correct: 'eager to consume vast quantities of food; exceedingly ravenous',
    wrong: ['picky and refusing to eat mature plants', 'sluggish and dormant throughout daylight', 'producing bitter chemical toxins'],
    clueType: 'example',
    explain: 'The examples of consuming entire leaves in minutes and doubling body mass indicate a "voracious" or exceedingly ravenous appetite.',
  },
  {
    word: 'tenacious',
    sentence: 'Just as mountain cedar roots cling stubbornly to barren limestone crevices despite fierce winds, the young conservationist was **tenacious** in defending the river basin.',
    correct: 'holding firmly and refusing to surrender or quit',
    wrong: ['timid and easily persuaded to back down', 'interested only in personal profit', 'careless with natural resources'],
    clueType: 'analogy',
    explain: 'The analogy of tree roots clinging stubbornly to rock crevices demonstrates that "tenacious" means holding firmly and refusing to quit.',
  },
  {
    word: 'ephemeral',
    sentence: 'Desert blooms are famously **ephemeral**; they emerge overnight following a rare flash thunderstorm and wither away completely under the scorching midday sun.',
    correct: 'lasting for only a very brief period of time',
    wrong: ['enduring through many decades', 'growing taller than surrounding trees', 'poisonous to grazing wildlife'],
    clueType: 'definition',
    explain: 'The definition clue "emerge overnight... and wither away completely" shows that "ephemeral" means fleeting or short-lived.',
  },
  {
    word: 'austere',
    sentence: 'The monks chose an **austere** sanctuary in the canyonlands, where rooms contained only bare pine benches, unpainted limestone walls, and no modern luxuries.',
    correct: 'simple, plain, and devoid of comforts or adornment',
    wrong: ['luxurious and filled with fine gold art', 'crowded and noisy with festival music', 'polluted by nearby industrial factories'],
    clueType: 'example',
    explain: 'Examples such as "bare pine benches," "unpainted limestone walls," and "no modern luxuries" characterize an "austere" or severely simple setting.',
  },
  {
    word: 'benevolent',
    sentence: 'Unlike tyrannical rulers who taxed their subjects into poverty, King Leon was a **benevolent** monarch who established free public granaries and funded village schools.',
    correct: 'kind, generous, and motivated by goodwill toward others',
    wrong: ['cruel and harsh toward common laborers', 'indifferent to the suffering of villagers', 'secretive and hiding vast royal treasure'],
    clueType: 'definition',
    explain: 'The contrast with tyrannical rulers and the actions of building free granaries and schools demonstrate that "benevolent" means generous and kindly.',
  },
  {
    word: 'formidable',
    sentence: 'The defending basketball team presented a **formidable** challenge; they were undefeated, boasted an average height of six feet three inches, and allowed fewer than thirty points per game.',
    correct: 'inspiring respect or fear through impressive power or capability',
    wrong: ['weak and disorganized on defense', 'easily defeated by fast break offenses', 'lacking experienced bench players'],
    clueType: 'example',
    explain: 'The list of traits—undefeated record, tall lineup, and stingy defense—illustrates that the team is "formidable" or powerfully intimidating.',
  },
  {
    word: 'scrutinize',
    sentence: 'Before accepting the ancient parchment for the museum archive, the conservators had to **scrutinize** the document under infrared light to verify the authenticity of the ink.',
    correct: 'examine or inspect closely and thoroughly',
    wrong: ['casually glance at from across the room', 'store away without opening the wrapper', 'repair quickly using modern scotch tape'],
    clueType: 'definition',
    explain: 'Examining the document under infrared light to verify authenticity demonstrates that "scrutinize" means to inspect closely and thoroughly.',
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

// ---------- 7.2A Dictionary Guide Words & Entries ----------
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
    sentence: 'Engineers designed innovative turbines to **harness** the mechanical energy of rushing river currents.',
    correctDefIndex: 1,
  },
  {
    entry: 'channel',
    pos: 'verb',
    origin: 'Latin *canalis*',
    guideWords: ['champion', 'charter'],
    definitions: [
      'to direct or guide something along a specific route or purpose',
      'to carve deep physical grooves into stone through erosion',
      'to serve as a medium for communicating spiritual messages',
    ],
    sentence: 'The student council president sought to **channel** school enthusiasm into community volunteer projects.',
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
    sentence: 'The experienced judge advised the prosecutor to **temper** righteous anger with mercy and understanding.',
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
    sentence: 'Through weeks of intense collaboration, the science partners managed to **forge** a lasting bond of trust.',
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
    sentence: 'New middle school students must learn to **navigate** a bustling schedule with multiple class transitions.',
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
    sentence: 'Determined rock climbers prepared to **scale** the sheer red sandstone cliffs of Palo Duro Canyon.',
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
    sentence: 'The meteorologist watched barometric sensors to **gauge** the impending strength of the incoming cold front.',
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
    sentence: 'Shared cultural traditions help **anchor** immigrant families as they adjust to new communities.',
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
    sentence: 'The century-old courthouse managed to **weather** the fierce winds of the hurricane without structural damage.',
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
    sentence: 'Historians can **trace** the origins of modern cowboy saddlery back to sixteenth-century Spanish vaqueros.',
    correctDefIndex: 0,
  },
];

const dictGen: Gen = (rng, d) => {
  const item = pick(rng, DICTIONARY_ENTRIES);
  if (d === 1) {
    // Guide words
    const [w1, w2] = item.guideWords;
    return one(
      'mc',
      [
        txt(`Look at the dictionary guide words on page 214: **${w1} • ${w2}**`),
        txt('Which of the following words would be found on this page?'),
      ],
      mc(rng, item.entry, sample(rng, DICTIONARY_ENTRIES.filter((e) => e !== item).map((e) => e.entry), 3)),
      `Alphabetically, "${item.entry}" falls between guide words "${w1}" and "${w2}."`
    );
  }
  // Definition in context
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

export const G7_RLA_GENERATORS: Record<string, Gen[]> = {
  ...EDITING_GENERATORS,
  'rla:7.2A': [dictGen],
  'rla:7.2B': [contextGen],
  'rla:7.2C': [rootGen],
};
