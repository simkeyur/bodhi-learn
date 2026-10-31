// Grade 6 reading and language arts generators: dictionary resources (6.2A),
// Greek and Latin roots (6.2C), and editing skills (6.10D.i-ix).

import { pick, sample } from '../../rng.ts';
import { mc, one, txt, type Gen } from '../../generators/build.ts';
import { EDITING_GENERATORS } from './generators-editing.ts';

// ---------- 6.2C Greek and Latin Roots ----------
// TEKS: mis/mit, bene, man, vac, scrib/script, jur/jus
interface RootPart {
  root: string;
  origin: 'Latin' | 'Greek';
  meaning: string;
  words: [word: string, def: string][];
}

const ROOTS: RootPart[] = [
  {
    root: 'mis/mit',
    origin: 'Latin',
    meaning: 'to send',
    words: [
      ['transmit', 'to send a signal or message across a distance'],
      ['emit', 'to send out light, sound, or gas'],
      ['mission', 'a special task or assignment someone is sent to do'],
      ['submit', 'to send or turn in work for consideration'],
      ['dismiss', 'to send away or allow to leave'],
    ],
  },
  {
    root: 'bene',
    origin: 'Latin',
    meaning: 'good or well',
    words: [
      ['benefit', 'an advantage or good result gained from something'],
      ['benefactor', 'a generous person who gives help or money for a good cause'],
      ['benevolent', 'kind, generous, and wishing well to others'],
      ['beneficial', 'producing good or helpful results'],
      ['benediction', 'a blessing or expression of good wishes'],
    ],
  },
  {
    root: 'man',
    origin: 'Latin',
    meaning: 'hand',
    words: [
      ['manual', 'done by hand rather than by a machine'],
      ['manufacture', 'to make goods by hand or machinery'],
      ['manuscript', 'a book or document written by hand or typed before printing'],
      ['manipulate', 'to handle or control skillfully with the hands'],
      ['manacle', 'a metal band or handcuff fastening the hands'],
    ],
  },
  {
    root: 'vac',
    origin: 'Latin',
    meaning: 'empty',
    words: [
      ['vacate', 'to leave a place and make it empty'],
      ['vacant', 'not filled, lived in, or occupied; empty'],
      ['evacuate', 'to empty people out of a dangerous area'],
      ['vacuum', 'a completely empty space containing no air or matter'],
      ['vacancy', 'an empty room or unoccupied position'],
    ],
  },
  {
    root: 'scrib/script',
    origin: 'Latin',
    meaning: 'to write',
    words: [
      ['describe', 'to write or tell about in detail with words'],
      ['inscribe', 'to carve or write words into a hard surface'],
      ['prescription', 'a written order from a doctor for medicine'],
      ['transcript', 'an official written record of a student\'s grades'],
      ['postscript', 'a short note written at the end of a letter (P.S.)'],
    ],
  },
  {
    root: 'jur/jus',
    origin: 'Latin',
    meaning: 'law or justice',
    words: [
      ['jury', 'a group of citizens sworn to give a verdict according to law'],
      ['justice', 'fairness and the administration of the law'],
      ['justify', 'to prove or show to be just, right, or reasonable'],
      ['jurisdiction', 'the official authority or power to make legal decisions'],
      ['perjury', 'the crime of lying under oath in a court of law'],
    ],
  },
];

const EXTRA_ROOT_MEANINGS = ['water', 'life', 'earth', 'see', 'hear', 'time', 'carry'];

const rootGen: Gen = (rng, d) => {
  const rp = pick(rng, ROOTS);
  const [word, def] = pick(rng, rp.words);
  const otherRoots = ROOTS.filter((r) => r !== rp);

  if (d === 1) {
    const wrong = sample(rng, [...otherRoots.map((r) => r.meaning), ...EXTRA_ROOT_MEANINGS], 3);
    return one(
      'mc',
      [txt(`In the word **${word}**, what does the root **${rp.root}** mean?`)],
      mc(rng, rp.meaning, wrong),
      `The root "${rp.root}" means "${rp.meaning}." In ${word}, it relates to ${def}.`
    );
  }
  if (d === 2) {
    const wrong = sample(rng, otherRoots.flatMap((r) => r.words.map((w) => w[1])), 3);
    return one(
      'mc',
      [
        txt(`The Latin root **${rp.root}** means "${rp.meaning}."`),
        txt(`Based on this root, what is the meaning of the word **${word}**?`),
      ],
      mc(rng, def, wrong),
      `Because "${rp.root}" means "${rp.meaning}," the word ${word} means "${def}."`
    );
  }
  const wrongWords = sample(rng, otherRoots.flatMap((r) => r.words.map((w) => w[0])), 3);
  return one(
    'mc',
    [txt(`Which word contains a root that means "${rp.meaning}"?`)],
    mc(rng, word, wrongWords),
    `"${word}" contains the root "${rp.root}," which means "${rp.meaning}."`
  );
};

// ---------- 6.2A Dictionary, Glossary, Thesaurus ----------
interface DictItem {
  entry: string;
  pos: string;
  origin: string;
  defs: string[];
  sampleSentence: string;
  correctDefIdx: number;
  guideWords: [string, string];
}

const DICTIONARY_ENTRIES: DictItem[] = [
  {
    entry: 'navigate',
    pos: 'verb',
    origin: 'Latin navigare, from navis (ship) + agere (to drive)',
    defs: [
      'to steer or direct a ship or aircraft',
      'to plan and follow a route on a map or course',
      'to find one\'s way through a complicated situation',
    ],
    sampleSentence: 'The explorer had to navigate carefully through the dense jungle without a path.',
    correctDefIdx: 2,
    guideWords: ['nautical', 'nebula'],
  },
  {
    entry: 'quarry',
    pos: 'noun',
    origin: 'Old French quarriere, from Latin quadrum (square)',
    defs: [
      'an open pit from which building stone or slate is excavated',
      'an animal or bird that is hunted as prey',
      'an abundant source or supply of information',
    ],
    sampleSentence: 'The workers hauled giant blocks of limestone out of the quarry.',
    correctDefIdx: 0,
    guideWords: ['quantity', 'quarter'],
  },
  {
    entry: 'scale',
    pos: 'noun or verb',
    origin: 'Old Norse skali (bowl) / Latin scala (ladder)',
    defs: [
      'one of the thin, flat plates covering fish or reptiles',
      'an instrument used for weighing objects',
      'to climb up or over a steep surface',
      'a series of musical notes ordered by pitch',
    ],
    sampleSentence: 'The mountain climbers planned to scale the sheer granite cliff at dawn.',
    correctDefIdx: 2,
    guideWords: ['scaffold', 'scarcity'],
  },
  {
    entry: 'hatch',
    pos: 'noun or verb',
    origin: 'Middle English hacche',
    defs: [
      'to emerge from an egg',
      'an opening in the deck of a ship or roof of a vehicle',
      'to devise or concoct a secret plan',
    ],
    sampleSentence: 'The captain secured the cargo hatch before the storm struck.',
    correctDefIdx: 1,
    guideWords: ['harvest', 'haven'],
  },
  {
    entry: 'harbor',
    pos: 'noun or verb',
    origin: 'Old English herebeorg (shelter)',
    defs: [
      'a sheltered port where ships can moor safely',
      'to give shelter or refuge to someone',
      'to keep a thought or feeling secretly in mind',
    ],
    sampleSentence: 'Although he smiled, he continued to harbor doubts about the experiment.',
    correctDefIdx: 2,
    guideWords: ['handicraft', 'harmonize'],
  },
  {
    entry: 'forge',
    pos: 'noun or verb',
    origin: 'Old French forge, from Latin fabrica',
    defs: [
      'a furnace or workshop where metal is heated and hammered into shape',
      'to shape metal by heating and hammering',
      'to make or produce a fraudulent copy of a document',
      'to move forward slowly and steadily',
    ],
    sampleSentence: 'The two rival schools decided to forge a new partnership for the science fair.',
    correctDefIdx: 1, // figuratively shaping / creating
    guideWords: ['forbid', 'formula'],
  },
  {
    entry: 'current',
    pos: 'noun or adjective',
    origin: 'Latin currere (to run)',
    defs: [
      'belonging to the present time; happening now',
      'a continuous flow of water or air in a definite direction',
      'a flow of electricity through a wire',
    ],
    sampleSentence: 'The strong river current pushed the canoe toward the gravel sandbar.',
    correctDefIdx: 1,
    guideWords: ['curator', 'custody'],
  },
  {
    entry: 'temper',
    pos: 'noun or verb',
    origin: 'Latin temperare (to mix or moderate)',
    defs: [
      'a person\'s state of mind or tendency to become angry',
      'to improve the hardness and elasticity of steel by reheating and cooling',
      'to soften or moderate the effect of something harsh',
    ],
    sampleSentence: 'The judge decided to temper justice with mercy for the first-time offender.',
    correctDefIdx: 2,
    guideWords: ['telescope', 'temptation'],
  },
  {
    entry: 'draft',
    pos: 'noun or verb',
    origin: 'Old English dragan (to draw)',
    defs: [
      'a preliminary version of a piece of writing',
      'a current of cool air in an enclosed space',
      'to select a person or player for a special purpose or team',
    ],
    sampleSentence: 'A chilly draft blew under the bedroom door when the north wind picked up.',
    correctDefIdx: 1,
    guideWords: ['dorsal', 'drainage'],
  },
  {
    entry: 'rebound',
    pos: 'verb or noun',
    origin: 'Old French rebondir',
    defs: [
      'to bounce back after hitting a hard surface',
      'to recover from a setback or disappointment',
      'the ball or puck that bounces back after a missed shot',
    ],
    sampleSentence: 'The town\'s economy began to rebound after the new solar plant opened.',
    correctDefIdx: 1,
    guideWords: ['realm', 'recede'],
  },
  {
    entry: 'compound',
    pos: 'noun, adjective, or verb',
    origin: 'Latin componere (to put together)',
    defs: [
      'a thing composed of two or more separate elements',
      'an enclosed area containing a group of buildings',
      'to make a problem worse by adding to it',
    ],
    sampleSentence: 'Failing to study will only compound your difficulties on test day.',
    correctDefIdx: 2,
    guideWords: ['complex', 'compress'],
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
        txt(`Look at the dictionary guide words on page 142: **${w1} • ${w2}**`),
        txt(`Which of the following words would be found on this page?`),
      ],
      mc(rng, item.entry, sample(rng, DICTIONARY_ENTRIES.filter((e) => e !== item).map((e) => e.entry), 3)),
      `Alphabetically, "${item.entry}" falls between "${w1}" and "${w2}."`
    );
  }
  // Definition in context
  const defLines = item.defs.map((d, i) => `${i + 1}. ${d}`).join('\n');
  const rightDef = item.defs[item.correctDefIdx];
  const wrongDefs = item.defs.filter((_, i) => i !== item.correctDefIdx);
  // Pad wrong choices if fewer than 3
  while (wrongDefs.length < 3) {
    wrongDefs.push(pick(rng, DICTIONARY_ENTRIES.filter((e) => e !== item)).defs[0]);
  }
  return one(
    'mc',
    [
      txt(`Read this dictionary entry for **${item.entry}**:`),
      txt(defLines),
      txt(`Read this sentence: "${item.sampleSentence}"`),
      txt(`Which definition best matches the meaning of **${item.entry}** as used in the sentence?`),
    ],
    mc(rng, `Definition ${item.correctDefIdx + 1}: ${rightDef}`, wrongDefs.slice(0, 3).map((w) => `Definition: ${w}`)),
    `In this sentence, "${item.entry}" means "${rightDef}."`
  );
};

export const G6_RLA_GENERATORS: Record<string, Gen[]> = {
  'rla:6.2A': [dictGen],
  'rla:6.2C': [rootGen],
  ...EDITING_GENERATORS,
};
