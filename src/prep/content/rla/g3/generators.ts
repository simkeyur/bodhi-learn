// Grade 3 reading and writing skills that work one sentence at a time, generated like math:
// affixes (3.3C), complete sentences and subject-verb agreement (3.11D.i),
// verb tenses: past, present, future (3.11D.ii), and capitalization (3.11D.ix).

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

// ---------- 3.3C Affixes: im- (into), non-, dis-, in- (not), pre-, -ness, -y, -ful ----------
interface AffixEntry {
  affix: string;
  kind: 'prefix' | 'suffix';
  meaning: string;
  words: [word: string, meaning: string][];
}

const AFFIXES: AffixEntry[] = [
  { affix: 'non-', kind: 'prefix', meaning: 'not or without', words: [['nonfiction', 'writing that is not made-up, based on true facts'], ['nonstop', 'traveling without any pauses or stops'], ['nonliving', 'not alive or never having lived']] },
  { affix: 'dis-', kind: 'prefix', meaning: 'opposite of or not', words: [['disagree', 'to have an opposite or different opinion'], ['disappear', 'to pass out of sight, to not be seen'], ['dislike', 'to not enjoy or care for something']] },
  { affix: 'in-', kind: 'prefix', meaning: 'not', words: [['incorrect', 'not right or accurate'], ['incomplete', 'not finished or whole'], ['invisible', 'not able to be seen by the eye']] },
  { affix: 'pre-', kind: 'prefix', meaning: 'before', words: [['preview', 'to view or inspect before others'], ['preheat', 'to heat an oven before baking'], ['prepay', 'to pay for something before using it']] },
  { affix: '-ness', kind: 'suffix', meaning: 'state, condition, or quality of being', words: [['darkness', 'the state of being completely dark'], ['kindness', 'the quality of being caring and helpful'], ['gladness', 'the feeling or state of being glad']] },
  { affix: '-y', kind: 'suffix', meaning: 'full of, having, or like', words: [['rainy', 'full of or having lots of rain'], ['bumpy', 'having lots of raised bumps or rough spots'], ['sunny', 'full of bright sunshine']] },
  { affix: '-ful', kind: 'suffix', meaning: 'full of', words: [['helpful', 'full of help, useful and willing to assist'], ['playful', 'full of play, lively and cheerful'], ['careful', 'full of care and caution']] },
];

const affixGen: Gen = (rng, d) => {
  const aff = pick(rng, AFFIXES);
  const [word, meaning] = pick(rng, aff.words);
  const others = AFFIXES.filter((a) => a !== aff);
  if (d === 1) {
    const wrong = sample(rng, [...others.map((a) => a.meaning), 'again', 'under', 'between'], 3);
    return one('mc', [txt(`In the word **${word}**, what does the ${aff.kind} **${aff.affix}** mean?`)],
      mc(rng, aff.meaning, wrong),
      `The ${aff.kind} ${aff.affix} means "${aff.meaning}."`);
  }
  if (d === 2) {
    const wrong = sample(rng, others.flatMap((a) => a.words.map((w) => w[1])), 3);
    return one('mc', [txt(`The ${aff.kind} **${aff.affix}** means "${aff.meaning}." What does **${word}** most likely mean?`)],
      mc(rng, meaning, wrong),
      `${aff.affix} means "${aff.meaning}," so ${word} means "${meaning}."`);
  }
  const wrong = sample(rng, others.flatMap((a) => a.words.map((w) => w[0])), 3);
  return one('mc', [txt(`Which word means "${meaning}"?`)],
    mc(rng, word, wrong),
    `${word} contains the ${aff.kind} ${aff.affix}, meaning "${aff.meaning}."`);
};

// ---------- 3.11D.i Complete simple and compound sentences with subject-verb agreement ----------
const SENTENCE_AGREEMENT: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['The two playful kittens ___ across the living room carpet.', 'chase', ['chases', 'chasing', 'is chasing'], 'The subject "kittens" is plural, so it takes the plural base verb "chase."'],
  ['Maya ___ her bicycle to school every sunny morning.', 'rides', ['ride', 'riding', 'are riding'], 'The subject "Maya" is singular, so the present-tense verb ends in -s: "rides."'],
  ['The students ___ patiently in the cafeteria line.', 'wait', ['waits', 'waiting', 'is waiting'], 'The plural subject "students" takes the plural verb form "wait."'],
  ['Carlos ___ a book about astronauts before bedtime.', 'reads', ['readed', 'reading', 'are reading'], 'Singular subject "Carlos" takes the singular verb "reads."'],
  ['The birds ___ sweet songs from the oak tree branches.', 'sing', ['sings', 'singing', 'is singing'], 'Plural subject "birds" requires the plural verb "sing."'],
  ['Our teacher ___ interesting science experiments every Friday.', 'demonstrates', ['demonstrate', 'demonstrating', 'are demonstrating'], 'Singular subject "teacher" takes the singular verb ending in -s: "demonstrates."'],
  ['The puppy ___ its tail when it sees someone at the door.', 'wags', ['wag', 'wagging', 'are wagging'], 'Singular subject "puppy" takes the verb "wags."'],
  ['The players ___ the soccer ball across the grass.', 'kick', ['kicks', 'kicking', 'is kicking'], 'Plural subject "players" takes the plural verb "kick."'],
];

const compoundSentences: [a: string, b: string, conj: string, frag: string][] = [
  ['The bell rang', 'the children walked outside for recess', 'and', 'While the bell rang loudly'],
  ['The rain poured', 'we stayed dry under the porch', 'but', 'Although the cold rain poured'],
  ['We visited the zoo', 'we saw three baby pandas', 'and', 'When we visited the zoo yesterday'],
  ['Carlos forgot his jacket', 'he felt cold in the brisk wind', 'so', 'Because Carlos forgot his warm jacket'],
  ['You may eat an apple', 'you may choose an orange', 'or', 'Since you can choose fresh fruit'],
  ['The sun set behind the hills', 'stars appeared in the night sky', 'and', 'As the sun set behind hills'],
];

const completeSentencesGen: Gen = (rng, d) => {
  if (d === 1) {
    const [sentence, right, wrong, why] = pick(rng, SENTENCE_AGREEMENT);
    return one('inline', [txt('Choose the verb that agrees in number with the subject.')],
      dropdown(rng, sentence, right, wrong), why);
  }
  const [a, b, conj, frag] = pick(rng, compoundSentences);
  const right = `${a}, ${conj} ${b}.`;
  const runOn = `${a} ${b}.`;
  const fragment = `${frag}.`;
  const commaSplice = `${a}, ${b}.`;
  return one('mc', [txt('Which sentence is a complete and correctly punctuated compound sentence?')],
    mc(rng, right, [runOn, fragment, commaSplice]),
    `"${right}" correctly combines two complete sentences with a comma and the coordinating conjunction "${conj}."`);
};

// ---------- 3.11D.ii Past, present, and future verb tense ----------
const VERB_TENSES: [sentence: string, tense: 'past' | 'present' | 'future', right: string, wrong: [string, string, string], why: string][] = [
  ['Yesterday, our class ___ the natural history museum.', 'past', 'visited', ['visits', 'will visit', 'visiting'], 'The time word "Yesterday" signals the past tense: visited.'],
  ['Tomorrow morning, dad ___ pancakes for breakfast.', 'future', 'will make', ['made', 'makes', 'making'], 'The time clue "Tomorrow morning" signals future tense: will make.'],
  ['Right now, the baby ___ peacefully in the wooden crib.', 'present', 'sleeps', ['slept', 'will sleep', 'sleeped'], '"Right now" signals present tense: sleeps.'],
  ['Last night, Elena ___ her favorite storybook to her brother.', 'past', 'read', ['reads', 'will read', 'reading'], '"Last night" indicates past tense.'],
  ['Next week, our soccer team ___ in the championship game.', 'future', 'will play', ['played', 'plays', 'playing'], '"Next week" points to the future: will play.'],
  ['Every day, Carlos ___ his teeth after breakfast.', 'present', 'brushes', ['brushed', 'will brush', 'brushing'], '"Every day" shows a present habitual action: brushes.'],
  ['Last summer, we ___ in the cool river at state park.', 'past', 'swam', ['swim', 'will swim', 'swammed'], '"Last summer" tells about a past event: irregular past tense swam.'],
  ['In an hour, the movie ___ at the theater.', 'future', 'will begin', ['began', 'begins', 'beginning'], '"In an hour" indicates future tense: will begin.'],
];

const verbTensesGen: Gen = (rng) => {
  const [sentence, tense, right, wrong, why] = pick(rng, VERB_TENSES);
  return one('inline', [txt(`Choose the correct **${tense} tense** verb to complete the sentence.`)],
    dropdown(rng, sentence, right, wrong), why);
};

// ---------- 3.11D.ix Capitalization of official titles of people, holidays, and geographical names and places ----------
const CAPITAL_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Our dentist is ___ on Elm Street.', 'Dr. Patel', ['dr. patel', 'Dr. patel', 'dr. Patel'], 'Capitalize the title and last name: Dr. Patel.'],
  ['We celebrate ___ by watching colorful fireworks.', 'Independence Day', ['independence day', 'Independence day', 'independence Day'], 'Capitalize the official name of a holiday: Independence Day.'],
  ['Our state capital city is ___.', 'Austin', ['austin', 'Austen', 'austen'], 'Capitalize the name of a city or place: Austin.'],
  ['We visited our grandparents in ___ during winter break.', 'San Antonio', ['san antonio', 'San antonio', 'san Antonio'], 'Capitalize both words in the city name: San Antonio.'],
  ['On ___, children give candy and paper hearts to friends.', 'Valentine\'s Day', ['valentine\'s day', 'Valentine\'s day', 'valentine\'s Day'], 'Capitalize holiday names: Valentine\'s Day.'],
  ['The fourth-grade principal is ___.', 'Principal Ramos', ['principal ramos', 'Principal ramos', 'principal Ramos'], 'Capitalize an official title when it comes directly before a person\'s name: Principal Ramos.'],
  ['Kayakers paddled along the scenic ___.', 'Brazos River', ['brazos river', 'Brazos river', 'brazos River'], 'Capitalize geographical names of rivers: Brazos River.'],
  ['Families gather for a turkey feast on ___.', 'Thanksgiving', ['thanksgiving', 'ThanksGiving', 'thanks giving'], 'Capitalize the name of the holiday: Thanksgiving.'],
  ['Our family crossed the border into ___ on our trip.', 'New Mexico', ['new mexico', 'New mexico', 'new Mexico'], 'Capitalize both words in state names: New Mexico.'],
  ['The governor gave a speech in ___.', 'Houston', ['houston', 'Huston', 'huston'], 'Capitalize the geographical name of a city: Houston.'],
];

const capitalsGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, CAPITAL_ITEMS);
  return one('inline', [txt('Choose the correctly capitalized title, holiday, or place name.')],
    dropdown(rng, sentence, right, wrong), why);
};

export const G3_RLA_GENERATORS: Record<string, Gen[]> = {
  'rla:3.3C': [affixGen],
  'rla:3.11D.i': [completeSentencesGen],
  'rla:3.11D.ii': [verbTensesGen],
  'rla:3.11D.ix': [capitalsGen],
  ...SPELLING_GENERATORS,
  ...EDITING_GENERATORS,
};
