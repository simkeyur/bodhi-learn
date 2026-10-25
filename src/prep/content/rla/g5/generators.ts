// Grade 5 reading and writing skills that work one sentence at a time, generated like math: word parts,
// spelling with suffixes, and editing for conventions. Each draws from a bank, so questions vary.

import { pick, sample, shuffle, type Rng } from '../../rng.ts';
import { inline, mc, one, txt, type Gen } from '../../generators/build.ts';
import type { InlinePart } from '../../types.ts';

// A drop-down inside a sentence: `sentence` has one ___ where the drop-down goes
function dropdown(rng: Rng, sentence: string, right: string, wrong: string[]): InlinePart {
  const options = shuffle(rng, [right, ...wrong]);
  const [before, after] = sentence.split('___');
  return inline([before, { blank: 0 }, after], [{ options, correct: options.indexOf(right) }]);
}

// ---------- 5.3C Prefixes, suffixes and roots ----------
interface WordPart { part: string; kind: 'prefix' | 'suffix' | 'root'; meaning: string; words: [word: string, meaning: string][] }
const PARTS: WordPart[] = [
  { part: 'trans-', kind: 'prefix', meaning: 'across', words: [['transport', 'to carry from one place to another'], ['transatlantic', 'across the Atlantic Ocean'], ['transplant', 'to move a plant to a new place']] },
  { part: 'super-', kind: 'prefix', meaning: 'above or beyond', words: [['supersonic', 'faster than the speed of sound'], ['superhuman', 'beyond what a normal person can do'], ['supervise', 'to watch over others while they work']] },
  { part: '-ive', kind: 'suffix', meaning: 'tending to or likely to', words: [['protective', 'tending to keep something safe'], ['creative', 'likely to make new things'], ['talkative', 'tending to talk a lot']] },
  { part: '-logy', kind: 'suffix', meaning: 'the study of', words: [['biology', 'the study of living things'], ['zoology', 'the study of animals'], ['ecology', 'the study of how living things affect each other']] },
  { part: 'geo', kind: 'root', meaning: 'earth', words: [['geology', 'the study of rocks and the earth'], ['geography', 'the study of the earth and its places'], ['geothermal', 'heat that comes from inside the earth']] },
  { part: 'photo', kind: 'root', meaning: 'light', words: [['photograph', 'a picture made by capturing light'], ['photosynthesis', 'how plants use light to make food'], ['photosensitive', 'changed by light']] },
];
const EXTRA_MEANINGS = ['not', 'again', 'before', 'water', 'small'];

const wordParts: Gen = (rng, d) => {
  const wp = pick(rng, PARTS);
  const [word, meaning] = pick(rng, wp.words);
  const others = PARTS.filter((p) => p !== wp);
  if (d === 1) {
    const wrong = sample(rng, [...others.map((p) => p.meaning), ...EXTRA_MEANINGS], 3);
    return one('mc', [txt(`In the word **${word}**, what does the ${wp.kind} **${wp.part}** mean?`)], mc(rng, wp.meaning, wrong),
      `The ${wp.kind} ${wp.part} means "${wp.meaning}." So ${word} means ${meaning}.`);
  }
  if (d === 2) {
    const wrong = sample(rng, others.flatMap((p) => p.words.map((w) => w[1])), 3);
    return one('mc', [txt(`The ${wp.kind} **${wp.part}** means "${wp.meaning}." What does **${word}** most likely mean?`)], mc(rng, meaning, wrong),
      `Use the word part: ${wp.part} means "${wp.meaning}," so ${word} means ${meaning}.`);
  }
  const wrong = sample(rng, others.flatMap((p) => p.words.map((w) => w[0])), 3);
  return one('mc', [txt(`Which word means "${meaning}"?`)], mc(rng, word, wrong),
    `${word} has the ${wp.kind} ${wp.part}, which means "${wp.meaning}." That fits "${meaning}."`);
};

// ---------- 5.2B.vi Spelling with suffixes ----------
interface Suffixed { base: string; suffix: string; right: string; wrong: [string, string, string]; rule: string; sentence: string }
const SUFFIXED: Suffixed[] = [
  { base: 'hope', suffix: '-ing', right: 'hoping', wrong: ['hopeing', 'hopping', 'hopeeing'], rule: 'Drop the final e before adding -ing.', sentence: 'Maya is ___ to win the science fair this year.' },
  { base: 'make', suffix: '-ing', right: 'making', wrong: ['makeing', 'makking', 'makeeng'], rule: 'Drop the final e before adding -ing.', sentence: 'We are ___ a map of our neighborhood.' },
  { base: 'smile', suffix: '-ed', right: 'smiled', wrong: ['smileed', 'smilled', 'smilde'], rule: 'When a word ends in e, just add -d.', sentence: 'The coach ___ when the team scored.' },
  { base: 'stop', suffix: '-ed', right: 'stopped', wrong: ['stoped', 'stopd', 'stopedd'], rule: 'Double the final consonant when a short word ends in one vowel and one consonant.', sentence: 'The bus ___ in front of the library.' },
  { base: 'plan', suffix: '-ed', right: 'planned', wrong: ['planed', 'planeed', 'plannd'], rule: 'Double the final consonant when a short word ends in one vowel and one consonant.', sentence: 'Our class ___ a trip to the museum.' },
  { base: 'swim', suffix: '-ing', right: 'swimming', wrong: ['swiming', 'swimeing', 'swimmming'], rule: 'Double the final consonant when a short word ends in one vowel and one consonant.', sentence: 'The ducks were ___ across the pond.' },
  { base: 'big', suffix: '-est', right: 'biggest', wrong: ['bigest', 'biggist', 'bigiest'], rule: 'Double the final consonant when a short word ends in one vowel and one consonant.', sentence: 'That is the ___ pumpkin at the fair.' },
  { base: 'carry', suffix: '-ed', right: 'carried', wrong: ['carryed', 'caried', 'carrid'], rule: 'When a word ends in a consonant and y, change the y to i before adding -ed.', sentence: 'Dad ___ the groceries inside.' },
  { base: 'happy', suffix: '-ness', right: 'happiness', wrong: ['happyness', 'happines', 'hapiness'], rule: 'When a word ends in a consonant and y, change the y to i before adding -ness.', sentence: 'The puppy filled our home with ___.' },
  { base: 'funny', suffix: '-er', right: 'funnier', wrong: ['funnyer', 'funier', 'funnyier'], rule: 'When a word ends in a consonant and y, change the y to i before adding -er.', sentence: 'This joke is ___ than the last one.' },
  { base: 'easy', suffix: '-ly', right: 'easily', wrong: ['easyly', 'easly', 'easilly'], rule: 'When a word ends in a consonant and y, change the y to i before adding -ly.', sentence: 'Sam solved the puzzle ___.' },
  { base: 'bake', suffix: '-er', right: 'baker', wrong: ['bakeer', 'bakker', 'bakr'], rule: 'When a word ends in e, drop it before adding -er.', sentence: 'The ___ sold fresh bread every morning.' },
];

const suffixSpelling: Gen = (rng) => {
  const s = pick(rng, SUFFIXED);
  return one('inline', [txt(`Choose the correct spelling of **${s.base}** + **${s.suffix}** to complete the sentence.`)],
    dropdown(rng, s.sentence, s.right, s.wrong), `${s.rule} ${s.base} + ${s.suffix} = ${s.right}.`);
};

// ---------- 5.11D.ii Irregular past tense ----------
const IRREGULAR: [base: string, past: string, wrongs: [string, string, string], sentence: string][] = [
  ['go', 'went', ['goed', 'gone', 'go'], 'Yesterday, our class ___ to the zoo.'],
  ['grow', 'grew', ['growed', 'grown', 'grows'], 'The puppy ___ two inches last month.'],
  ['catch', 'caught', ['catched', 'catch', 'caughted'], 'Ava ___ the ball with one hand.'],
  ['bring', 'brought', ['bringed', 'brung', 'brang'], 'Last week, Jamal ___ cookies for everyone.'],
  ['teach', 'taught', ['teached', 'teach', 'taughted'], 'My grandmother ___ me how to knit.'],
  ['write', 'wrote', ['writed', 'written', 'writ'], 'Mia ___ a letter to the mayor.'],
  ['swim', 'swam', ['swimmed', 'swum', 'swims'], 'We ___ in the lake every day of the trip.'],
  ['freeze', 'froze', ['freezed', 'frozen', 'frozed'], 'The pond ___ during the cold snap.'],
  ['throw', 'threw', ['throwed', 'thrown', 'throwded'], 'The pitcher ___ a perfect strike.'],
  ['buy', 'bought', ['buyed', 'boughten', 'buys'], 'Dad ___ new shoes for the race.'],
  ['fly', 'flew', ['flyed', 'flown', 'flied'], 'The kite ___ higher than the trees.'],
  ['choose', 'chose', ['choosed', 'chosen', 'choosen'], 'Last night, Leo ___ a book about volcanoes.'],
  ['ride', 'rode', ['rided', 'ridden', 'rodded'], 'Nina ___ her bike to school this morning.'],
];

const irregularPast: Gen = (rng) => {
  const [base, past, wrong, sentence] = pick(rng, IRREGULAR);
  return one('inline', [txt('Choose the verb that correctly completes the sentence.')], dropdown(rng, sentence, past, wrong),
    `The sentence tells about the past. ${base[0].toUpperCase() + base.slice(1)} is irregular: its past tense is ${past}, not ${base}ed.`);
};

// ---------- 5.11D.iv Comparing with adjectives ----------
// [base, comparative, superlative]; long adjectives use more / most
const ADJECTIVES: [string, string, string][] = [
  ['tall', 'taller', 'tallest'], ['fast', 'faster', 'fastest'], ['cold', 'colder', 'coldest'], ['bright', 'brighter', 'brightest'],
  ['heavy', 'heavier', 'heaviest'], ['good', 'better', 'best'], ['bad', 'worse', 'worst'],
  ['careful', 'more careful', 'most careful'], ['beautiful', 'more beautiful', 'most beautiful'], ['exciting', 'more exciting', 'most exciting'],
];
const TWO = ['Of the two trails, the river trail is ___.', 'My backpack is ___ than my sister\'s backpack.', 'Today\'s game was ___ than yesterday\'s game.'];
const MANY = ['Of all the trails in the park, the river trail is the ___.', 'This is the ___ day of the whole year.', 'She is the ___ player on the team.'];

const comparing: Gen = (rng) => {
  const [base, more, most] = pick(rng, ADJECTIVES);
  const two = rng() < 0.5;
  const sentence = pick(rng, two ? TWO : MANY);
  const right = two ? more : most;
  const long = more.startsWith('more');
  const wrong = long
    ? [two ? most : more, `${base}er`, `${base}est`]
    : [two ? most : more, `more ${more}`, `most ${most}`];
  return one('inline', [txt(`Choose the correct form of **${base}** to complete the sentence.`)], dropdown(rng, sentence, right, wrong),
    two
      ? `The sentence compares two things, so use the comparative form: ${more}. Never use "more" with an -er word.`
      : `The sentence compares more than two things, so use the superlative form: ${most}.`);
};

// ---------- 5.11D.i Complete sentences ----------
// Two complete thoughts that belong together, the word that joins them, and a word that would make the first
// one a fragment
const PAIRS: [a: string, b: string, join: string, sub: string][] = [
  ['The bus was late', 'we missed the first song', 'so', 'Because'],
  ['Kai finished his homework', 'he went outside to play', 'and', 'After'],
  ['The storm knocked out the power', 'we used flashlights', 'so', 'When'],
  ['Rosa likes soccer', 'her brother likes baseball', 'but', 'Although'],
  ['The library was closed', 'we read at home', 'so', 'Since'],
  ['The puppy barked at the door', 'nobody heard it', 'but', 'Although'],
  ['Mom planted tomatoes', 'Dad built a fence around them', 'and', 'While'],
  ['The river rose quickly', 'the park rangers closed the trail', 'so', 'Because'],
  ['Eli practiced every day', 'he still felt nervous', 'but', 'Although'],
  ['The sun came out', 'the snow began to melt', 'and', 'When'],
];

const completeSentences: Gen = (rng, d) => {
  const [a, b, join, sub] = pick(rng, PAIRS);
  const right = `${a}, ${join} ${b}.`;
  const runOn = `${a} ${b}.`;
  const splice = `${a}, ${b}.`;
  const fragment = `${sub} ${a[0].toLowerCase() + a.slice(1)}.`;
  if (d === 3) {
    return one('mc', [txt('Read the sentence.'), txt(`**${runOn}**`), txt('What is the best way to correct this sentence?')],
      mc(rng, right, [splice, fragment, `${a}. ${join} ${b}.`]),
      `The sentence is a run-on: two complete thoughts with nothing joining them. Add a comma and a joining word: "${right}"`);
  }
  return one('mc', [txt('Which of these is a complete and correctly written sentence?')], mc(rng, right, [runOn, splice, fragment]),
    `"${right}" joins two complete thoughts with a comma and "${join}." The others are a run-on (nothing joins the thoughts), a comma splice (only a comma joins them) and a fragment (not a complete thought).`);
};

// ---------- 5.11D.ix Capital letters ----------
// People go in "a visit from ___"; groups go in "a letter to the ___"
const NAMES: [right: string, wrong: [string, string, string], why: string, group: boolean][] = [
  ['Dr. Maria Ortiz', ['dr. Maria Ortiz', 'Dr. maria ortiz', 'DR. Maria ortiz'], 'Dr. is the abbreviation for Doctor, so it starts with a capital, and so do first and last names.', false],
  ['Texas Parks and Wildlife Department', ['texas parks and wildlife department', 'Texas parks and wildlife department', 'Texas Parks And wildlife Department'], 'Capitalize each important word in the name of an organization. Short words like and stay lowercase.', true],
  ['YMCA', ['Ymca', 'ymca', 'YmCA'], 'YMCA is an acronym: each letter stands for a word (Young Men\'s Christian Association), so every letter is a capital.', true],
  ['J. T. Robinson', ['j. t. Robinson', 'J. t. robinson', 'j. T. Robinson'], 'Initials stand for names, so they are capital letters followed by periods.', false],
  ['American Red Cross', ['american red cross', 'American red cross', 'american Red Cross'], 'Capitalize each important word in the name of an organization.', true],
  ['Mr. Daniel Kim', ['mr. Daniel Kim', 'Mr. daniel kim', 'MR. daniel Kim'], 'The abbreviation Mr. starts with a capital, and so do first and last names.', false],
  ['Austin Public Library', ['austin public library', 'Austin public library', 'Austin Public library'], 'The full name of a place or organization is a proper noun, so each important word is capitalized.', true],
  ['FBI', ['Fbi', 'fbi', 'fBI'], 'FBI is an acronym: each letter stands for a word (Federal Bureau of Investigation), so every letter is a capital.', true],
  ['Gen. Sam Houston', ['gen. Sam Houston', 'Gen. sam houston', 'GEN. Sam houston'], 'The abbreviation for General starts with a capital, and so do first and last names.', false],
  ['Boys and Girls Club of America', ['boys and girls club of america', 'Boys And Girls Club Of America', 'Boys and girls club of America'], 'Capitalize the important words in an organization\'s name. Short words like and and of stay lowercase.', true],
];
const PEOPLE_FRAMES = ['Last week, our class got a visit from ___.', 'The award was given to ___.', 'The speech was given by ___.'];
const GROUP_FRAMES = ['Our class wrote a thank-you letter to the ___.', 'The poster was made by the ___.', 'We read an article about the ___.'];

const capitals: Gen = (rng) => {
  const [right, wrong, why, group] = pick(rng, NAMES);
  return one('inline', [txt('Choose the correctly capitalized name to complete the sentence.')],
    dropdown(rng, pick(rng, group ? GROUP_FRAMES : PEOPLE_FRAMES), right, wrong), why);
};

// ---------- 5.11D.iii Collective nouns ----------
// A collective noun names a group as one thing, so it takes a singular verb
const GROUPS: [noun: string, rest: string][] = [
  ['The team', 'practicing in the gym'], ['The flock of geese', 'flying south'], ['Our class', 'going on a field trip'],
  ['The band', 'playing at the parade'], ['The audience', 'clapping for the actors'], ['The family', 'eating dinner together'],
  ['The herd of cattle', 'crossing the road'], ['The committee', 'meeting after school'], ['The crowd', 'cheering loudly'],
  ['A swarm of bees', 'buzzing near the hive'],
];

const collective: Gen = (rng) => {
  const [noun, rest] = pick(rng, GROUPS);
  return one('inline', [txt('Choose the verb that correctly completes the sentence.')], dropdown(rng, `${noun} ___ ${rest}.`, 'is', ['are', 'be', 'were']),
    `"${noun.replace(/^The |^Our |^A /, '')}" is a collective noun: it names a group as one unit, so it takes a singular verb: is.`);
};

export const G5_RLA_GENERATORS: Record<string, Gen[]> = {
  'rla:5.3C': [wordParts],
  'rla:5.2B.vi': [suffixSpelling],
  'rla:5.11D.ii': [irregularPast],
  'rla:5.11D.iv': [comparing],
  'rla:5.11D.i': [completeSentences],
  'rla:5.11D.ix': [capitals],
  'rla:5.11D.iii': [collective],
};
