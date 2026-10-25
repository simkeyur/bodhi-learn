// Grade 4 reading and writing skills that work one sentence at a time, generated like math: word parts,
// spelling with suffixes, irregular past tense, comparing adjectives, complete sentences, and capitalization.

import { pick, sample, shuffle, type Rng } from '../../rng.ts';
import { inline, mc, one, txt, type Gen } from '../../generators/build.ts';
import type { InlinePart } from '../../types.ts';
import { SPELLING_GENERATORS } from './generators-spelling.ts';
import { EDITING_GENERATORS } from './generators-editing.ts';

function dropdown(rng: Rng, sentence: string, right: string, wrong: string[]): InlinePart {
  const options = shuffle(rng, [right, ...wrong]);
  const [before, after] = sentence.split('___');
  return inline([before, { blank: 0 }, after], [{ options, correct: options.indexOf(right) }]);
}

// ---------- 4.3C Prefixes, suffixes and roots ----------
interface WordPart { part: string; kind: 'prefix' | 'suffix' | 'root'; meaning: string; words: [word: string, meaning: string][] }
const PARTS: WordPart[] = [
  { part: 'mis-', kind: 'prefix', meaning: 'bad, wrong, or incorrectly', words: [['misbehave', 'to act in a bad or improper way'], ['misjudge', 'to form an incorrect opinion about someone'], ['misfortune', 'bad luck or an unlucky event']] },
  { part: 'sub-', kind: 'prefix', meaning: 'under, below, or beneath', words: [['submarine', 'a ship that operates underwater'], ['subterranean', 'existing beneath the surface of the earth'], ['subway', 'an underground electric railroad']] },
  { part: '-ment', kind: 'suffix', meaning: 'action, process, or result of', words: [['enjoyment', 'the state or feeling of enjoying something'], ['movement', 'the act or process of moving'], ['settlement', 'a small community built by settlers']] },
  { part: '-ity', kind: 'suffix', meaning: 'state, quality, or condition of', words: [['curiosity', 'the state or desire of wanting to know more'], ['activity', 'the condition of being active and moving'], ['equality', 'the state of being equal in rights and value']] },
  { part: 'auto', kind: 'root', meaning: 'self or same', words: [['autograph', 'a person\'s own signature written by hand'], ['automobile', 'a self-moving passenger vehicle'], ['automatic', 'working by itself with little human control']] },
  { part: 'graph', kind: 'root', meaning: 'to write or draw', words: [['photograph', 'a picture drawn or captured with light'], ['biography', 'a written account of another person\'s life'], ['paragraph', 'a distinct section of writing dealing with one theme']] },
  { part: 'meter', kind: 'root', meaning: 'to measure', words: [['thermometer', 'an instrument for measuring temperature'], ['speedometer', 'an instrument for measuring how fast a vehicle travels'], ['barometer', 'an instrument measuring atmospheric pressure']] },
];
const EXTRA_MEANINGS = ['not', 'again', 'before', 'water', 'heat'];

const wordParts: Gen = (rng, d) => {
  const wp = pick(rng, PARTS);
  const [word, meaning] = pick(rng, wp.words);
  const others = PARTS.filter((p) => p !== wp);
  if (d === 1) {
    const wrong = sample(rng, [...others.map((p) => p.meaning), ...EXTRA_MEANINGS], 3);
    return one('mc', [txt(`In the word **${word}**, what does the ${wp.kind} **${wp.part}** mean?`)], mc(rng, wp.meaning, wrong),
      `The ${wp.kind} ${wp.part} means "${wp.meaning}." So ${word} means "${meaning}."`);
  }
  if (d === 2) {
    const wrong = sample(rng, others.flatMap((p) => p.words.map((w) => w[1])), 3);
    return one('mc', [txt(`The ${wp.kind} **${wp.part}** means "${wp.meaning}." What does **${word}** most likely mean?`)], mc(rng, meaning, wrong),
      `Use the word part: ${wp.part} means "${wp.meaning}," so ${word} means "${meaning}."`);
  }
  const wrong = sample(rng, others.flatMap((p) => p.words.map((w) => w[0])), 3);
  return one('mc', [txt(`Which word means "${meaning}"?`)], mc(rng, word, wrong),
    `${word} contains the ${wp.kind} ${wp.part}, which means "${wp.meaning}." That fits "${meaning}."`);
};

// ---------- 4.2B.vi Spelling with suffixes ----------
interface Suffixed { base: string; suffix: string; right: string; wrong: [string, string, string]; rule: string; sentence: string }
const SUFFIXED: Suffixed[] = [
  { base: 'dance', suffix: '-ing', right: 'dancing', wrong: ['danceing', 'danncing', 'danceeng'], rule: 'Drop the final silent e before adding a vowel suffix like -ing.', sentence: 'The children were ___ around the Maypole.' },
  { base: 'shine', suffix: '-ing', right: 'shining', wrong: ['shineing', 'shinning', 'shyneing'], rule: 'Drop the final silent e before adding -ing.', sentence: 'The Texas sun was ___ brightly over the field.' },
  { base: 'skate', suffix: '-ed', right: 'skated', wrong: ['skateed', 'skatted', 'skayt'], rule: 'When a word ends in e, simply add -d.', sentence: 'Lucas ___ across the smooth ice rink.' },
  { base: 'clap', suffix: '-ed', right: 'clapped', wrong: ['claped', 'clapde', 'clappeid'], rule: 'Double the final consonant in a short one-vowel, one-consonant word before -ed.', sentence: 'The audience ___ enthusiastically for the actors.' },
  { base: 'jog', suffix: '-ing', right: 'jogging', wrong: ['joging', 'jogeing', 'joggeng'], rule: 'Double the final consonant before adding -ing.', sentence: 'Coach Martinez was ___ around the track.' },
  { base: 'run', suffix: '-er', right: 'runner', wrong: ['runer', 'runnr', 'runeer'], rule: 'Double the final consonant before adding -er.', sentence: 'Elena is the fastest ___ in fourth grade.' },
  { base: 'tidy', suffix: '-ed', right: 'tidied', wrong: ['tidyed', 'tiddied', 'tideid'], rule: 'Change the y to i before adding -ed when preceded by a consonant.', sentence: 'We ___ our art supplies before recess.' },
  { base: 'pretty', suffix: '-est', right: 'prettiest', wrong: ['prettyest', 'prettyst', 'prettiestt'], rule: 'Change the y to i before adding -est.', sentence: 'Those bluebonnets are the ___ wildflowers on the hill.' },
  { base: 'heavy', suffix: '-er', right: 'heavier', wrong: ['heavyer', 'heavver', 'heaveir'], rule: 'Change the y to i before adding -er.', sentence: 'The metal trunk is ___ than the cardboard box.' },
  { base: 'busy', suffix: '-ness', right: 'business', wrong: ['busyness', 'buisness', 'busines'], rule: 'Change the y to i before adding -ness.', sentence: 'The bustling grocery store did lots of ___.' },
  { base: 'bake', suffix: '-er', right: 'baker', wrong: ['bakeer', 'bakker', 'bakr'], rule: 'Drop the final e before adding -er.', sentence: 'The local ___ baked fresh cinnamon rolls.' },
  { base: 'slip', suffix: '-ed', right: 'slipped', wrong: ['sliped', 'slipd', 'slippd'], rule: 'Double the final consonant before adding -ed.', sentence: 'The wet glass ___ out of my soapy hands.' },
];

const suffixSpelling: Gen = (rng) => {
  const s = pick(rng, SUFFIXED);
  return one('inline', [txt(`Choose the correct spelling of **${s.base}** + **${s.suffix}** to complete the sentence.`)],
    dropdown(rng, s.sentence, s.right, s.wrong), `${s.rule} ${s.base} + ${s.suffix} = ${s.right}.`);
};

// ---------- 4.11D.ii Irregular past tense ----------
const IRREGULAR: [base: string, past: string, wrongs: [string, string, string], sentence: string][] = [
  ['run', 'ran', ['runned', 'run', 'rans'], 'Yesterday, the puppy ___ all through the sprinklers.'],
  ['fly', 'flew', ['flyed', 'flown', 'flied'], 'The monarch butterfly ___ gracefully toward Mexico.'],
  ['build', 'built', ['builded', 'build', 'builted'], 'The fourth-graders ___ a model solar system.'],
  ['choose', 'chose', ['choosed', 'chosen', 'choosd'], 'Last night, Liam ___ a book about Texas wildlife.'],
  ['sing', 'sang', ['singed', 'sung', 'sing'], 'The school choir ___ a patriotic song at the assembly.'],
  ['give', 'gave', ['gived', 'given', 'gaves'], 'Grandma ___ me a silver pocket compass.'],
  ['take', 'took', ['taked', 'taken', 'tooked'], 'Our teacher ___ us on a nature walk behind the school.'],
  ['drive', 'drove', ['drived', 'driven', 'droved'], 'Uncle Mateo ___ the cattle truck into town.'],
  ['eat', 'ate', ['eated', 'eaten', 'ates'], 'The hungry campers ___ warm roasted corn by the fire.'],
  ['speak', 'spoke', ['speaked', 'spoken', 'spoket'], 'The guest astronaut ___ to our class about zero gravity.'],
  ['freeze', 'froze', ['freezed', 'frozen', 'frozed'], 'The puddles on the sidewalk ___ overnight.'],
  ['throw', 'threw', ['throwed', 'thrown', 'throwd'], 'The shortstop ___ the baseball right to home plate.'],
];

const irregularPast: Gen = (rng) => {
  const [base, past, wrong, sentence] = pick(rng, IRREGULAR);
  return one('inline', [txt('Choose the verb that correctly completes the past-tense sentence.')],
    dropdown(rng, sentence, past, wrong),
    `The sentence tells about an action that happened in the past. ${base[0].toUpperCase() + base.slice(1)} is irregular: its past tense is ${past}, never "${base}ed."`);
};

// ---------- 4.11D.iv Comparing with adjectives ----------
const ADJECTIVES: [string, string, string][] = [
  ['warm', 'warmer', 'warmest'], ['fast', 'faster', 'fastest'], ['bright', 'brighter', 'brightest'],
  ['clean', 'cleaner', 'cleanest'], ['sharp', 'sharper', 'sharpest'], ['deep', 'deeper', 'deepest'],
  ['heavy', 'heavier', 'heaviest'], ['friendly', 'friendlier', 'friendliest'],
  ['good', 'better', 'best'], ['bad', 'worse', 'worst'],
  ['colorful', 'more colorful', 'most colorful'], ['patient', 'more patient', 'most patient'],
  ['exciting', 'more exciting', 'most exciting'], ['dangerous', 'more dangerous', 'most dangerous'],
];
const TWO = ['Between the two trails, the creek path is ___.', 'My backpack is ___ than your backpack.', 'Today\'s lesson was ___ than yesterday\'s lesson.'];
const MANY = ['Of all the trails in the state park, the ridge trail is the ___.', 'This is the ___ day of the entire summer.', 'She proved to be the ___ player on the whole court.'];

const comparing: Gen = (rng) => {
  const [base, more, most] = pick(rng, ADJECTIVES);
  const two = rng() < 0.5;
  const sentence = pick(rng, two ? TWO : MANY);
  const right = two ? more : most;
  const isLong = more.startsWith('more');
  const wrong = isLong
    ? [two ? most : more, `${base}er`, `${base}est`]
    : [two ? most : more, `more ${more}`, `most ${most}`];
  return one('inline', [txt(`Choose the correct form of **${base}** to complete the sentence.`)],
    dropdown(rng, sentence, right, wrong),
    two
      ? `The sentence compares two items, so use the comparative form: ${more}. Do not combine "more" with an -er word.`
      : `The sentence compares three or more items, so use the superlative form: ${most}.`);
};

// ---------- 4.11D.i Complete simple and compound sentences ----------
const SENTENCE_PAIRS: [a: string, b: string, conj: string, frag: string][] = [
  ['The school bell rang', 'the students lined up for recess', 'and', 'While the school bell rang'],
  ['The storm rattled the windows', 'the lights stayed on', 'but', 'Although the storm rattled the windows'],
  ['We visited the botanical garden', 'we learned about native cacti', 'and', 'When we visited the garden'],
  ['Carlos forgot his umbrella', 'he got soaked in the sudden shower', 'so', 'Because Carlos forgot his umbrella'],
  ['You can finish your drawing', 'you may read a library book', 'or', 'Since you can finish your drawing'],
  ['The desert sun set behind the hills', 'cool night air drifted in', 'and', 'After the desert sun set'],
  ['Elena practiced her violin solo daily', 'she performed flawlessly', 'so', 'Because Elena practiced daily'],
  ['The river water was chilly', 'the young swimmers splashed happily', 'yet', 'Even though the water was chilly'],
  ['The red-tailed hawk soared high', 'it spotted a field mouse below', 'and', 'As the hawk soared high'],
  ['The hike was steep and rocky', 'the view from the summit was breathtaking', 'but', 'Although the hike was steep'],
];

const completeSentences: Gen = (rng, d) => {
  const [a, b, conj, frag] = pick(rng, SENTENCE_PAIRS);
  const right = `${a}, ${conj} ${b}.`;
  const runOn = `${a} ${b}.`;
  const splice = `${a}, ${b}.`;
  const fragment = `${frag}.`;
  if (d === 3) {
    return one('mc', [txt('Read the sentence.'), txt(`**${runOn}**`), txt('What is the best way to correct this sentence?')],
      mc(rng, right, [splice, fragment, `${a}. ${conj} ${b}.`]),
      `The original sentence is a run-on with two independent clauses joined by nothing. Fix it by placing a comma and coordinating conjunction "${conj}": "${right}"`);
  }
  return one('mc', [txt('Which of the following is a complete and correctly punctuated compound sentence?')],
    mc(rng, right, [runOn, splice, fragment]),
    `"${right}" connects two complete thoughts with a comma and the coordinating conjunction "${conj}." The others are run-ons, comma splices, or incomplete fragments.`);
};

// ---------- 4.11D.ix Capitalization ----------
const CAPITAL_ITEMS: [right: string, wrong: [string, string, string], why: string][] = [
  ['Declaration of Independence', ['declaration of Independence', 'Declaration of independence', 'declaration of independence'], 'Capitalize the title of a historic document: Declaration of Independence.'],
  ['American Revolution', ['american revolution', 'American revolution', 'american Revolution'], 'Capitalize historic periods and events: American Revolution.'],
  ['Spanish', ['spanish', 'Spanesh', 'spanishe'], 'Capitalize languages and nationalities: Spanish.'],
  ['Civil War', ['civil war', 'Civil war', 'civil War'], 'Capitalize the names of historic events: Civil War.'],
  ['Where the Mountain Meets the Moon', ['where the mountain meets the moon', 'Where The Mountain Meets The Moon', 'Where the mountain Meets the moon'], 'In book titles, capitalize the first word and all major words. Short prepositions and articles stay lowercase unless first.'],
  ['Native American', ['native american', 'Native american', 'native American'], 'Capitalize races, cultures, and nationalities: Native American.'],
  ['Constitution of the United States', ['constitution of the united states', 'Constitution of the united states', 'constitution of the United States'], 'Capitalize historic documents: Constitution of the United States.'],
  ['French', ['french', 'Frenche', 'frensh'], 'Capitalize languages and nationalities: French.'],
  ['Charlotte\'s Web', ['charlotte\'s web', 'Charlotte\'s web', 'charlottes Web'], 'Capitalize the title of a story or book: Charlotte\'s Web.'],
  ['Battle of the Alamo', ['battle of the alamo', 'Battle of the alamo', 'battle of the Alamo'], 'Capitalize historic battles and events: Battle of the Alamo.'],
];
const FRAMES = [
  'In our Texas history unit, we studied the ___.',
  'Our teacher read an excerpt from ___.',
  'We learned about the impact of the ___.',
  'Many students in our school speak fluent ___.',
];

const capitals: Gen = (rng) => {
  const [right, wrong, why] = pick(rng, CAPITAL_ITEMS);
  return one('inline', [txt('Choose the correctly capitalized title, event, or language to complete the sentence.')],
    dropdown(rng, pick(rng, FRAMES), right, wrong), why);
};

export const G4_RLA_GENERATORS: Record<string, Gen[]> = {
  'rla:4.3C': [wordParts],
  'rla:4.2B.vi': [suffixSpelling],
  'rla:4.11D.i': [completeSentences],
  'rla:4.11D.ii': [irregularPast],
  'rla:4.11D.iv': [comparing],
  'rla:4.11D.ix': [capitals],
  ...SPELLING_GENERATORS,
  ...EDITING_GENERATORS,
};
