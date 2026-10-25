// Grade 2 spelling and decoding generators: 2.2B.i-vii, 2.2D, and 2.2C.i-vi.

import { pick, shuffle, type Rng } from '../../rng.ts';
import { inline, one, txt, type Gen } from '../../generators/build.ts';
import type { InlinePart } from '../../types.ts';

function dropdown(rng: Rng, sentence: string, right: string, wrong: string[]): InlinePart {
  const options = shuffle(rng, [right, ...wrong]);
  const [before, after] = sentence.split('___');
  return inline([before, { blank: 0 }, after], [{ options, correct: options.indexOf(right) }]);
}

// 2.2B.i Decoding vowels and blends
const VOWEL_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['The frog jumped into the green ___.', 'pond', ['pund', 'ponnd', 'pode'], 'Pond has short o and the blend nd.'],
  ['She ate a sweet red ___ for snack.', 'plum', ['plome', 'plumm', 'plume'], 'Plum has short u and blend pl.'],
  ['The bird built a cozy ___ in the tree.', 'nest', ['nesst', 'nast', 'nist'], 'Nest has short e and blend st.'],
  ['We saw a big gray ___ swim in the sea.', 'shark', ['shork', 'sherk', 'sharc'], 'Shark has the sh digraph and ar vowel team.'],
  ['He wore a warm wool ___ in the cold wind.', 'coat', ['cote', 'coot', 'coate'], 'Coat uses the oa vowel team for long o.'],
  ['The ship sailed across the blue ___.', 'ocean', ['oshun', 'ocen', 'oshon'], 'Ocean is spelled o-c-e-a-n.'],
  ['A shiny ___ rested on the green leaf.', 'snail', ['snale', 'snayl', 'snel'], 'Snail uses the ai vowel team for long a.'],
  ['We heard a tiny cricket ___ in the grass.', 'chirp', ['cherp', 'churp', 'chrp'], 'Chirp has the ch digraph and ir vowel sound.'],
];
const vowelGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, VOWEL_ITEMS);
  return one('inline', [txt('Choose the correctly spelled word to complete the sentence.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.2B.ii Silent letters: kn, wr, gn, mb
const SILENT_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Use a sharp butter ___ to spread jelly.', 'knife', ['nife', 'kknife', 'knif'], 'Knife begins with the silent letter k.'],
  ['Carlos scraped his ___ on the playground soccer turf.', 'knee', ['nee', 'knea', 'nne'], 'Knee starts with the silent letter k: k-n-e-e.'],
  ['Please ___ your first and last name at the top.', 'write', ['rite', 'wite', 'writte'], 'Write begins with silent w: w-r-i-t-e.'],
  ['She tied a small rope ___ in her shoe lace.', 'knot', ['not', 'knott', 'nott'], 'Knot begins with silent k: k-n-o-t.'],
  ['He hurt his right ___ while pitching the baseball.', 'wrist', ['rist', 'wrisst', 'wist'], 'Wrist begins with silent w: w-r-i-s-t.'],
  ['The baby used her tiny ___ to hold the rattle.', 'thumb', ['thum', 'thumm', 'fumb'], 'Thumb ends with a silent b: t-h-u-m-b.'],
  ['A tiny ___ buzzed around the garden tomato plants.', 'gnat', ['nat', 'gnatt', 'natt'], 'Gnat begins with the silent g: g-n-a-t.'],
  ['The mountain climber began to ___ up the steep trail.', 'climb', ['clim', 'climm', 'clym'], 'Climb ends with a silent b: c-l-i-m-b.'],
];
const silentGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, SILENT_ITEMS);
  return one('inline', [txt('Choose the word with the correct **silent letter** spelling.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.2B.iii Multisyllabic decoding (syllable types)
const MULTI_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['We packed a delicious picnic lunch inside the woven ___.', 'basket', ['baskit', 'baskett', 'bascut'], 'Bas-ket has two closed syllables: bas-ket.'],
  ['The playful gray ___ chased a ball of yarn.', 'kitten', ['kitin', 'kittin', 'kiten'], 'Kit-ten divides between double consonants: kit-ten.'],
  ['She played a cheerful song on the classroom ___.', 'music', ['musick', 'muzik', 'musec'], 'Mu-sic has an open first syllable mu- and closed -sic.'],
  ['The gardener picked fresh red ___ from the vine.', 'tomatoes', ['tomatose', 'tomatowes', 'tomaties'], 'Tomatoes adds -es to form plural.'],
  ['We heard loud rolling ___ during the afternoon storm.', 'thunder', ['thundur', 'thundar', 'thundir'], 'Thun-der has two syllables with r-controlled -er.'],
  ['Dad placed the fluffy yellow ___ on the couch.', 'blanket', ['blankit', 'blankett', 'blankut'], 'Blan-ket has two syllables: blan-ket.'],
  ['The teacher read a funny story from the school ___.', 'library', ['libary', 'liberry', 'lybrary'], 'Li-brar-y has three syllables: li-brar-y.'],
  ['The bright silver ___ orbited high around the Earth.', 'satellite', ['satelite', 'sattelite', 'satelitte'], 'Sat-el-lite has double l: satellite.'],
];
const multiGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, MULTI_ITEMS);
  return one('inline', [txt('Choose the correctly spelled multisyllabic word.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.2B.iv Compound words and contractions
const COMPOUND_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['She zipped her heavy books into her new ___.', 'backpack', ['back pack', 'bakpack', 'backpak'], 'Backpack is a compound word formed from back + pack.'],
  ['A bright yellow ___ bloomed beside the wooden fence.', 'sunflower', ['sun flower', 'sunflowr', 'sunflour'], 'Sunflower is one compound word: sun + flower.'],
  ['We built a tall white ___ in the snowy front yard.', 'snowman', ['snow man', 'snowmann', 'snoman'], 'Snowman is a compound word: snow + man.'],
  ['Mom said we ___ play outside until it stops raining.', 'cannot', ['can not', 'cannott', 'cantnot'], 'Cannot is written as one word: c-a-n-n-o-t.'],
  ['The children ___ wait to see the baby farm animals.', 'couldn\'t', ['couldnt', 'could\'nt', 'coudn\'t'], 'Couldn\'t uses an apostrophe to replace the letter o.'],
  ['I ___ find my missing red baseball cap anywhere.', 'can\'t', ['cant', 'ca\'nt', 'cann\'t'], 'Can\'t uses an apostrophe for missing letters.'],
  ['They ___ finished their math worksheet before recess.', 'haven\'t', ['havent', 'have\'nt', 'havn\'t'], 'Haven\'t contracts have not with an apostrophe.'],
  ['Please step inside before the heavy ___ begins.', 'rainstorm', ['rain storm', 'ranestorm', 'rainstarm'], 'Rainstorm combines rain + storm into a compound word.'],
];
const compoundGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, COMPOUND_ITEMS);
  return one('inline', [txt('Choose the correctly spelled compound word or contraction.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.2B.v Syllable division
const DIVISION_ITEMS: [word: string, right: string, wrong: [string, string, string], why: string][] = [
  ['rabbit', 'rab-bit', ['ra-bbit', 'rabb-it', 'ra-bb-it'], 'Divide between twin consonants: rab-bit (VCCV).'],
  ['napkin', 'nap-kin', ['na-pkin', 'napk-in', 'nap-k-in'], 'Divide between the two consonants: nap-kin (VCCV).'],
  ['muffin', 'muf-fin', ['mu-ffin', 'muff-in', 'mu-ff-in'], 'Divide between double consonants: muf-fin.'],
  ['traffic', 'traf-fic', ['tra-ffic', 'traff-ic', 'tr-affic'], 'Divide between double consonants: traf-fic.'],
  ['tiger', 'ti-ger', ['tig-er', 't-iger', 'tige-r'], 'Divide after the open long vowel: ti-ger (VCV).'],
  ['robot', 'ro-bot', ['rob-ot', 'r-obot', 'robo-t'], 'Divide after the long open syllable: ro-bot.'],
  ['pilot', 'pi-lot', ['pil-ot', 'p-ilot', 'pilo-t'], 'Divide after the open vowel sound: pi-lot.'],
  ['winter', 'win-ter', ['wi-nter', 'wint-er', 'win-t-er'], 'Divide between the two consonants: win-ter.'],
];
const divisionGen: Gen = (rng) => {
  const [word, right, wrong, why] = pick(rng, DIVISION_ITEMS);
  const options = shuffle(rng, [right, ...wrong]);
  const sentence = `Which choice shows the correct syllable division for the word **${word}**?`;
  return one('inline', [txt(sentence)], inline(['', { blank: 0 }, ''], [{ options, correct: options.indexOf(right) }]), why);
};

// 2.2B.vi Prefixes and inflectional endings
const AFFIX_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Leo was ___ to reach the top shelf without a stool.', 'unable', ['inable', 'disable', 'nonable'], 'Un- means not: unable means not able.'],
  ['Please ___ your sloppy story with neat handwriting.', 'rewrite', ['unwrite', 'diswrite', 'prewrite'], 'Re- means again: rewrite means write again.'],
  ['She felt ___ when her best friend moved to Dallas.', 'unhappy', ['dishappy', 'inhappy', 'rehappy'], 'Un- means not: unhappy means not happy.'],
  ['Yesterday, the happy puppy ___ across the yard.', 'jumped', ['jumpd', 'jumpt', 'jumpid'], 'Add -ed to show past tense action: jumped.'],
  ['The blue race car is the ___ one on the track.', 'fastest', ['faster', 'fastist', 'fasttest'], 'Add -est when comparing three or more: fastest.'],
  ['Emma walked ___ down the quiet library hallway.', 'slowly', ['slowley', 'slowli', 'slowe'], 'Add -ly to show manner: slowly.'],
  ['The two children are ___ a castle in the sandbox.', 'building', ['buildding', 'buildin', 'bilding'], 'Add -ing to show ongoing action: building.'],
  ['A rabbit is ___ than a slow desert turtle.', 'quicker', ['quickest', 'quickker', 'quickr'], 'Add -er when comparing two animals: quicker.'],
];
const affixGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, AFFIX_ITEMS);
  return one('inline', [txt('Choose the word with the correct prefix or suffix.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.2B.vii High frequency words
const HFW_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['We stayed inside ___ heavy rain poured down.', 'because', ['becuase', 'becaus', 'becoz'], 'Because is spelled b-e-c-a-u-s-e.'],
  ['Mia walked to the park with her best ___.', 'friend', ['freind', 'frend', 'frind'], 'Remember i before e in friend: f-r-i-e-n-d.'],
  ['Many ___ gathered downtown to watch the holiday parade.', 'people', ['peaple', 'poeple', 'peple'], 'People is spelled p-e-o-p-l-e.'],
  ['He ___ finish the puzzle if he had more time.', 'could', ['cud', 'coulld', 'coold'], 'Could is spelled c-o-u-l-d.'],
  ['She ___ always remember her first trip to the zoo.', 'would', ['wud', 'woulld', 'woold'], 'Would is spelled w-o-u-l-d.'],
  ['Children ___ wash their hands before eating lunch.', 'should', ['shud', 'shoulld', 'shoold'], 'Should is spelled s-h-o-u-l-d.'],
  ['The teacher asked a question and waited for an ___.', 'answer', ['anser', 'answre', 'answear'], 'Answer has a silent w: a-n-s-w-e-r.'],
  ['We saw a ___ bird sitting on our wooden porch.', 'pretty', ['pritty', 'prety', 'preddy'], 'Pretty is spelled p-r-e-t-t-y.'],
];
const hfwGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, HFW_ITEMS);
  return one('inline', [txt('Choose the correctly spelled high-frequency word.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.2D Alphabetizing to second letter
const ALPHABET_ITEMS: [words: string, right: string, wrong: [string, string, string], why: string][] = [
  ['bear, bird, boat', 'bear, bird, boat', ['boat, bear, bird', 'bird, bear, boat', 'bear, boat, bird'], 'Look at second letters: e (bear), i (bird), o (boat).'],
  ['cake, cloud, corn', 'cake, cloud, corn', ['corn, cake, cloud', 'cloud, corn, cake', 'cake, corn, cloud'], 'Alphabetical order: a (cake), l (cloud), o (corn).'],
  ['flag, frog, funny', 'flag, frog, funny', ['frog, flag, funny', 'funny, frog, flag', 'flag, funny, frog'], 'Alphabetical order: l (flag), r (frog), u (funny).'],
  ['game, goat, gum', 'game, goat, gum', ['goat, game, gum', 'gum, goat, game', 'game, gum, goat'], 'Alphabetical order: a (game), o (goat), u (gum).'],
  ['lamp, leaf, lock', 'lamp, leaf, lock', ['leaf, lamp, lock', 'lock, lamp, leaf', 'lamp, lock, leaf'], 'Alphabetical order: a (lamp), e (leaf), o (lock).'],
  ['nest, night, nut', 'nest, night, nut', ['nut, nest, night', 'night, nest, nut', 'nest, nut, night'], 'Alphabetical order: e (nest), i (night), u (nut).'],
  ['park, plant, prize', 'park, plant, prize', ['prize, park, plant', 'plant, park, prize', 'park, prize, plant'], 'Alphabetical order: a (park), l (plant), r (prize).'],
  ['sand, ship, sun', 'sand, ship, sun', ['sun, sand, ship', 'ship, sand, sun', 'sand, sun, ship'], 'Alphabetical order: a (sand), h (ship), u (sun).'],
];
const alphabetGen: Gen = (rng) => {
  const [, right, wrong, why] = pick(rng, ALPHABET_ITEMS);
  const options = shuffle(rng, [right, ...wrong]);
  return one('inline', [txt('Which list of words is in alphabetical order by the second letter?')],
    inline(['', { blank: 0 }, ''], [{ options, correct: options.indexOf(right) }]), why);
};

export const G2_SPELLING_GENERATORS: Record<string, Gen[]> = {
  'rla:2.2B.i': [vowelGen],
  'rla:2.2B.ii': [silentGen],
  'rla:2.2B.iii': [multiGen],
  'rla:2.2B.iv': [compoundGen],
  'rla:2.2B.v': [divisionGen],
  'rla:2.2B.vi': [affixGen],
  'rla:2.2B.vii': [hfwGen],
  'rla:2.2D': [alphabetGen],
  'rla:2.2C.i': [vowelGen],
  'rla:2.2C.ii': [silentGen],
  'rla:2.2C.iii': [compoundGen],
  'rla:2.2C.iv': [multiGen],
  'rla:2.2C.v': [divisionGen],
  'rla:2.2C.vi': [affixGen],
};
