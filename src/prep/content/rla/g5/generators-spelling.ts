// Grade 5 spelling (5.2B.i–v) and spelling in drafts (5.11D.xi): pick the correct spelling to complete a
// sentence. Each bank entry is [right, three tempting misspellings, sentence with ___, why].

import { pick, shuffle, type Rng } from '../../rng.ts';
import { inline, one, txt, type Gen } from '../../generators/build.ts';

type Entry = [right: string, wrong: [string, string, string], sentence: string, why: string];

function spelling(bank: Entry[], lead = 'Choose the correct spelling to complete the sentence.'): Gen {
  return (rng: Rng) => {
    const [right, wrong, sentence, why] = pick(rng, bank);
    const options = shuffle(rng, [right, ...wrong]);
    const [before, after] = sentence.split('___');
    return one('inline', [txt(lead)], inline([before, { blank: 0 }, after], [{ options, correct: options.indexOf(right) }]), why);
  };
}

// 5.2B.i Syllable types: closed, open, VCe, vowel teams, r-controlled, final stable
const SYLLABLES: Entry[] = [
  ['basket', ['baskit', 'bascet', 'baskket'], 'She carried the apples in a ___.', 'Bas-ket: two closed syllables, each with a short vowel closed in by a consonant.'],
  ['robot', ['robbot', 'roebot', 'robut'], 'Our team built a ___ that can climb stairs.', 'Ro-bot: the first syllable is open (it ends in a long o), so there is only one b.'],
  ['escape', ['escap', 'escaip', 'eskape'], 'The kitten tried to ___ through the open door.', 'Es-cape: the last syllable is VCe, so the silent e makes the a long.'],
  ['explain', ['explane', 'explayn', 'explian'], 'Can you ___ how you solved the puzzle?', 'Ex-plain: the long a sound is spelled with the vowel team ai.'],
  ['garden', ['gardin', 'gerden', 'gardan'], 'We planted beans in the ___.', 'Gar-den: ar is an r-controlled syllable, and the second syllable is spelled den.'],
  ['bubble', ['bubbel', 'bubbal', 'buble'], 'A soap ___ floated across the room.', 'Bub-ble: -ble is a final stable syllable, and the short u is closed in by a double b.'],
  ['turtle', ['turtel', 'tertle', 'turtal'], 'A ___ was sunning itself on a log.', 'Tur-tle: ur is r-controlled, and -tle is a final stable syllable.'],
  ['freedom', ['fredom', 'freedum', 'freadom'], 'The settlers dreamed of ___.', 'Free-dom: the long e is spelled with the vowel team ee.'],
  ['thunder', ['thundar', 'thonder', 'thundur'], 'The ___ was so loud it shook the windows.', 'Thun-der: a closed syllable, then the r-controlled syllable er.'],
  ['raincoat', ['raincote', 'rainkoat', 'rancoat'], 'Wear your ___ because it might storm.', 'Rain-coat: two vowel teams, ai and oa.'],
  ['station', ['stasion', 'staytion', 'stashun'], 'The train pulled into the ___.', 'Sta-tion: an open syllable, then the final stable syllable -tion.'],
];

// 5.2B.ii Consonant changes: /t/ to /sh/ (select, selection) and /k/ to /sh/ (music, musician)
const CHANGES: Entry[] = [
  ['selection', ['selecshun', 'selextion', 'selecsion'], 'The library has a large ___ of comic books.', 'Select + -ion = selection. The t now sounds like /sh/, but it is still spelled with a t.'],
  ['musician', ['musicion', 'musishan', 'musitian'], 'The ___ played the violin at the concert.', 'Music + -ian = musician. The c now sounds like /sh/, but it is still spelled with a c.'],
  ['magician', ['magition', 'magishan', 'magicion'], 'The ___ pulled a scarf out of his sleeve.', 'Magic + -ian = magician. The c keeps its spelling even though it sounds like /sh/.'],
  ['protection', ['protecshun', 'protecsion', 'protektion'], 'Sunscreen gives your skin ___ from the sun.', 'Protect + -ion = protection. The t sounds like /sh/ but stays a t.'],
  ['electrician', ['electrition', 'electrishan', 'electricion'], 'An ___ fixed the wires in our kitchen.', 'Electric + -ian = electrician. The c keeps its spelling.'],
  ['connection', ['conection', 'connecshun', 'connecsion'], 'The ___ between the two cities is a long bridge.', 'Connect + -ion = connection. Keep both n\'s and the t from connect.'],
  ['invention', ['invension', 'inventshun', 'invencion'], 'The light bulb was an important ___.', 'Invent + -ion = invention. The t sounds like /sh/ but stays a t.'],
  ['politician', ['politition', 'politishan', 'politicion'], 'The ___ gave a speech at the town hall.', 'Politic + -ian = politician. The c keeps its spelling.'],
  ['direction', ['direcshun', 'diretion', 'direksion'], 'Which ___ is the museum from here?', 'Direct + -ion = direction. The t sounds like /sh/ but stays a t.'],
  ['optician', ['optition', 'optishan', 'opticion'], 'The ___ helped me choose new glasses.', 'Optic + -ian = optician. The c keeps its spelling.'],
];

// 5.2B.iii Multisyllabic words with several sound-spelling patterns
const MULTI: Entry[] = [
  ['celebration', ['celabration', 'selebration', 'celebrasion'], 'The town held a ___ for its hundredth birthday.', 'Cel-e-bra-tion: soft c at the start, then -tion at the end.'],
  ['neighborhood', ['nieghborhood', 'naborhood', 'neighbourhod'], 'Our ___ has a new park.', 'Neigh-bor-hood: the long a in neigh is spelled eigh.'],
  ['dinosaur', ['dinasaur', 'dinosore', 'dinosoar'], 'We saw a ___ skeleton at the museum.', 'Di-no-saur: the last syllable is spelled saur.'],
  ['comfortable', ['comfterble', 'comfortible', 'cumfortable'], 'This chair is very ___.', 'Com-fort-a-ble: comfort + -able.'],
  ['especially', ['espeshally', 'especialy', 'expecially'], 'I like all fruit, ___ mangoes.', 'Es-pe-cial-ly: especial + -ly, so the word has two l\'s.'],
  ['vegetable', ['vegtable', 'vegetible', 'vejetable'], 'Carrots are my favorite ___.', 'Veg-e-ta-ble: four syllables, ending in -table.'],
  ['important', ['importent', 'impotant', 'emportant'], 'It is ___ to wear a helmet.', 'Im-por-tant: the last syllable is spelled -tant.'],
  ['beautiful', ['beutiful', 'beautifull', 'butiful'], 'The sunset was ___.', 'Beau-ti-ful: beauty changes y to i before -ful, and -ful has one l.'],
  ['temperature', ['temprature', 'tempreture', 'temperture'], 'The ___ dropped below freezing last night.', 'Tem-per-a-ture: say every syllable so you don\'t skip the a.'],
  ['grandfather', ['granfather', 'grandfarther', 'grandfathur'], 'My ___ taught me to fish.', 'Grand-fa-ther: grand + father. Keep the d.'],
];

// 5.2B.iv Syllable division (VC/CV, V/CV, VC/V)
const DIVISION: Entry[] = [
  ['rabbit', ['rabit', 'rabbet', 'rabbitt'], 'A ___ hopped across the yard.', 'Rab-bit: divide between the two b\'s (VC/CV), so both syllables are closed.'],
  ['napkin', ['nappkin', 'napken', 'nabkin'], 'Put a ___ on your lap.', 'Nap-kin: divide between p and k (VC/CV).'],
  ['pilot', ['pillot', 'pylot', 'pilut'], 'The ___ landed the plane safely.', 'Pi-lot: divide after the long i (V/CV), so there is one l.'],
  ['tiger', ['tigger', 'tyger', 'tigar'], 'The ___ slept in the shade.', 'Ti-ger: divide after the long i (V/CV), so there is one g.'],
  ['pumpkin', ['pumkin', 'punkin', 'pumpken'], 'We carved a ___ for the fall festival.', 'Pump-kin: divide between p and k, and keep the m and p.'],
  ['umbrella', ['umbrela', 'umbrellla', 'unbrella'], 'Take an ___ in case it rains.', 'Um-brel-la: three syllables, with a double l.'],
  ['contest', ['contist', 'cuntest', 'conntest'], 'Ana won the spelling ___.', 'Con-test: divide between n and t (VC/CV).'],
  ['cabin', ['cabbin', 'caben', 'cabon'], 'We stayed in a ___ by the lake.', 'Cab-in: divide after the b (VC/V), so the a is short and there is one b.'],
  ['lemon', ['lemmon', 'lemun', 'leman'], 'Squeeze a ___ into the water.', 'Lem-on: divide after the m (VC/V), so the e is short and there is one m.'],
  ['hundred', ['hunderd', 'hundered', 'hundrid'], 'There are a ___ cents in a dollar.', 'Hun-dred: divide between n and d. The second syllable is dred.'],
];

// 5.2B.v Prefixes: keep the prefix and the base word whole
const PREFIXES: Entry[] = [
  ['unnecessary', ['unecessary', 'unnecesary', 'unneccessary'], 'Bringing three jackets was ___.', 'Un- + necessary = unnecessary. Keep the n from un- and the n from necessary.'],
  ['misspell', ['mispell', 'misspel', 'missspell'], 'Try not to ___ your own name.', 'Mis- + spell = misspell. Keep the s from mis- and the s from spell.'],
  ['dissatisfied', ['disatisfied', 'dissatisfyed', 'dissatissfied'], 'The customer was ___ with the cold food.', 'Dis- + satisfied = dissatisfied, with two s\'s.'],
  ['irregular', ['iregular', 'irreguler', 'irregullar'], 'Go and went are ___ verbs.', 'Ir- + regular = irregular, with two r\'s.'],
  ['illegal', ['ilegal', 'illegle', 'iliegal'], 'It is ___ to litter in the park.', 'Il- + legal = illegal, with two l\'s.'],
  ['preview', ['preveiw', 'previw', 'prevue'], 'We watched a ___ of the new movie.', 'Pre- + view = preview. View keeps its spelling.'],
  ['rewrite', ['rewright', 'reright', 'rewrit'], 'Please ___ the sentence neatly.', 'Re- + write = rewrite. Write keeps its silent w.'],
  ['disappear', ['dissappear', 'disapear', 'dissapear'], 'The rabbit seemed to ___ into the hat.', 'Dis- + appear = disappear: one s from dis-, two p\'s from appear.'],
  ['immature', ['imature', 'immatur', 'immachure'], 'The ___ bird could not fly yet.', 'Im- + mature = immature, with two m\'s.'],
  ['nonstop', ['nonestop', 'nunstop', 'nonstopp'], 'We took a ___ flight to Chicago.', 'Non- + stop = nonstop.'],
];

// 5.11D.xi Correct spelling in drafts: grade-level and high-frequency words people often miss
const OFTEN_MISSED: Entry[] = [
  ['believe', ['beleive', 'belive', 'beleave'], 'I ___ we can finish the project today.', 'Use "i before e except after c": believe.'],
  ['because', ['becuase', 'becaus', 'becose'], 'We stayed inside ___ it was raining.', 'Because: be + cause.'],
  ['friend', ['freind', 'frend', 'freand'], 'My best ___ lives next door.', 'Friend: the i comes before the e. Think "fri-end, a friend to the end."'],
  ['different', ['diffrent', 'diferent', 'differant'], 'Every snowflake is ___.', 'Dif-fer-ent: three syllables with a double f.'],
  ['through', ['threw', 'thru', 'throught'], 'We walked ___ the tunnel.', 'Through means in one side and out the other. Threw is the past tense of throw.'],
  ['separate', ['seperate', 'separete', 'seprate'], 'Keep the eggs ___ from the flour.', 'Sep-a-rate: remember there is "a rat" in separate.'],
  ['receive', ['recieve', 'receeve', 'resieve'], 'Did you ___ my letter?', 'After c, the e comes before the i: receive.'],
  ['tomorrow', ['tommorow', 'tomorow', 'tommorrow'], 'The field trip is ___.', 'To-mor-row: one m and two r\'s.'],
  ['favorite', ['favrite', 'faverite', 'favorit'], 'Pizza is my ___ food.', 'Fa-vor-ite: favor + ite.'],
  ['library', ['libary', 'liberry', 'librery'], 'We borrowed books from the ___.', 'Li-brar-y: don\'t forget the first r.'],
  ['caught', ['cought', 'caugt', 'cawt'], 'The goalie ___ the ball.', 'Caught is spelled with augh.'],
];

export const SPELLING_GENERATORS: Record<string, Gen[]> = {
  'rla:5.2B.i': [spelling(SYLLABLES)],
  'rla:5.2B.ii': [spelling(CHANGES)],
  'rla:5.2B.iii': [spelling(MULTI)],
  'rla:5.2B.iv': [spelling(DIVISION)],
  'rla:5.2B.v': [spelling(PREFIXES)],
  'rla:5.11D.xi': [spelling(OFTEN_MISSED, 'Choose the correct spelling to complete the sentence from a student\'s draft.')],
};
