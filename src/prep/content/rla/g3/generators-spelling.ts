// Grade 3 spelling (3.2B.i–vii) and spelling in drafts (3.11D.xi).
// Pick the correct spelling to complete a sentence.
// Each bank entry is [right, three tempting misspellings, sentence with ___, why].

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

// 3.2B.i Syllables: closed, open, VCe, vowel teams, r-controlled, final stable
const SYLLABLES: Entry[] = [
  ['picnic', ['piknik', 'picnick', 'picnik'], 'Our family packed sandwiches for a sunny park ___.', 'Pic-nic: two closed syllables, both ending in c.'],
  ['pilot', ['pillot', 'pylet', 'pylot'], 'The ___ landed the airplane smoothly on the runway.', 'Pi-lot: the first syllable is open with long i.'],
  ['invite', ['invight', 'invit', 'invyte'], 'Carlos sent a birthday party ___ to all his friends.', 'In-vite: the second syllable is VCe with silent e.'],
  ['stream', ['streem', 'streme', 'strem'], 'Minnows darted through the cool mountain ___.', 'Stream: the vowel team ea makes the long e sound.'],
  ['market', ['markit', 'markett', 'marcket'], 'Mom bought fresh peaches at the farmers ___.', 'Mar-ket: ar is an r-controlled syllable, followed by -ket.'],
  ['candle', ['candel', 'candil', 'candell'], 'We blew out the birthday ___ on the chocolate cake.', 'Can-dle: -dle is a final stable syllable with a consonant + le.'],
  ['cradle', ['cradel', 'kradle', 'cradil'], 'Grandma rocked the baby asleep in the wooden ___.', 'Cra-dle: open first syllable cra-, then final stable syllable -dle.'],
  ['spoil', ['spoyl', 'spoyle', 'spoyil'], 'Put the milk in the fridge so it does not ___.', 'Spoil: the diphthong oi is used in the middle of words.'],
  ['highway', ['hiway', 'highwey', 'hyway'], 'Cars traveled fast down the paved Texas ___.', 'High-way: high uses -igh for long i, plus compound way.'],
  ['thimble', ['thimbel', 'thymble', 'thimbil'], 'A metal ___ protected her finger while sewing.', 'Thim-ble: closed syllable thim-, then final stable -ble.'],
  ['circus', ['sercus', 'cirkus', 'surcus'], 'Acrobats performed thrilling tricks at the town ___.', 'Cir-cus: soft c followed by ir (r-controlled).'],
  ['floating', ['floting', 'flowting', 'floteing'], 'A bright yellow duck was ___ on the pond.', 'Float-ing: float uses the vowel team oa.'],
];

// 3.2B.ii Homophones
const HOMOPHONES: Entry[] = [
  ['their', ['there', 'they\'re', 'thare'], 'The students hung ___ backpacks on the classroom hooks.', 'Their shows ownership: belonging to them.'],
  ['there', ['their', 'they\'re', 'thare'], 'Set the heavy box over ___ by the window.', 'There refers to a place or location.'],
  ['they\'re', ['their', 'there', 'theyr'], 'The twins said ___ going to the library after school.', 'They\'re is the contraction for they are.'],
  ['two', ['to', 'too', 'tew'], 'I rescued ___ stray kittens from the porch.', 'Two is the number 2.'],
  ['too', ['to', 'two', 'tu'], 'Can Maya come with us to the playground ___?', 'Too means also or as well.'],
  ['to', ['too', 'two', 'tow'], 'We walked ___ the neighborhood ice cream shop.', 'To is a preposition showing direction.'],
  ['piece', ['peace', 'peice', 'peece'], 'Would you like a ___ of sweet watermelon?', 'A piece of pie: remember there is a pie in piece.'],
  ['peace', ['piece', 'peece', 'peacee'], 'The quiet forest was filled with calm and ___.', 'Peace means calm, quiet, and absence of war.'],
  ['hear', ['here', 'heer', 'heare'], 'Can you ___ the crickets chirping in the bushes?', 'You hear with your ear: hear contains the word ear.'],
  ['here', ['hear', 'heere', 'herre'], 'Please come over ___ and sit next to me.', 'Here refers to this place.'],
  ['our', ['hour', 'are', 'ower'], 'We invited neighbors to visit ___ community garden.', 'Our shows ownership: belonging to us.'],
  ['hour', ['our', 'owr', 'houre'], 'The movie was sixty minutes, or exactly one ___.', 'An hour is a unit of time with a silent h.'],
];

// 3.2B.iii Compound words, contractions, abbreviations
const COMPOUND_CONTRACTIONS: Entry[] = [
  ['sunlight', ['sunlite', 'sunlyte', 'sunnlight'], 'Warm ___ poured through the bedroom window blinds.', 'Sun + light = sunlight: a compound word keeping the spelling of both words.'],
  ['backpack', ['backpac', 'bakpack', 'backpask'], 'Pack your notebook and pencil box inside your ___.', 'Back + pack = backpack: two closed syllables ending in ck.'],
  ['playground', ['playgrownd', 'playgroun', 'plaiground'], 'Children raced across the swings on the school ___.', 'Play + ground = playground: play ends in ay, ground uses ou.'],
  ['didn\'t', ['didnt', 'did\'nt', 'dident'], 'Elena ___ forget to feed her pet hamsters.', 'Did + not = didn\'t: the apostrophe replaces the missing o.'],
  ['wasn\'t', ['wasnt', 'was\'nt', 'wasent'], 'The cold river water ___ as deep as it looked.', 'Was + not = wasn\'t: the apostrophe replaces the missing o in not.'],
  ['couldn\'t', ['couldnt', 'could\'nt', 'couldent'], 'The puppy ___ jump over the tall wooden fence.', 'Could + not = couldn\'t: the apostrophe replaces the o.'],
  ['you\'ll', ['youll', 'you\'l', 'yule'], 'I promise ___ enjoy the exciting planetarium show.', 'You + will = you\'ll: the apostrophe replaces wi-.'],
  ['Dr.', ['Dr', 'Dtr.', 'Doc.'], '___ Patel checked my temperature with a thermometer.', 'Dr. is the standard abbreviation for Doctor.'],
  ['Mr.', ['Mr', 'Mstr.', 'Mister.'], '___ Ramos is our favorite physical education teacher.', 'Mr. is the standard abbreviation for Mister.'],
  ['St.', ['St', 'Str.', 'Ste.'], 'The bakery is located on Elm ___ near the library.', 'St. is the standard abbreviation for Street.'],
  ['campfire', ['campfyer', 'campfyre', 'campfior'], 'We toasted sweet marshmallows over the glowing ___.', 'Camp + fire = campfire: camp + VCe fire.'],
  ['wildflower', ['wildflour', 'wyldflower', 'wildflowr'], 'A bluebonnet is a famous Texas prairie ___.', 'Wild + flower = wildflower: two base words combined.'],
];

// 3.2B.iv Multisyllabic words with multiple sound-spelling patterns
const MULTI: Entry[] = [
  ['important', ['importent', 'importint', 'inportant'], 'Drinking clean water is ___ for good health.', 'Im-por-tant: prefix im-, r-controlled or, closed tant.'],
  ['understand', ['understan', 'understend', 'onderstand'], 'Careful listening helps you ___ the science lesson.', 'Un-der-stand: three closed syllables.'],
  ['yesterday', ['yesturday', 'yestarday', 'yesterdaie'], 'We visited the natural history museum ___.', 'Yes-ter-day: three syllables, ending with the vowel team ay.'],
  ['together', ['togather', 'togethur', 'toogether'], 'The class worked ___ to solve the math puzzle.', 'To-geth-er: three distinct syllables.'],
  ['remember', ['rember', 'remembur', 'remembar'], 'Please ___ to write your name on top of the paper.', 'Re-mem-ber: re- prefix, closed mem, r-controlled ber.'],
  ['different', ['diffrent', 'diferent', 'diffirent'], 'Every snowflake forms a unique and ___ pattern.', 'Dif-fer-ent: double f and three syllables.'],
  ['wonderful', ['wonderfull', 'wondurful', 'wunderful'], 'Our family had a ___ time camping under the stars.', 'Won-der-ful: base word wonder plus suffix -ful with one l.'],
  ['afternoon', ['afturnoon', 'afternune', 'afternon'], 'The warm sun shone brightly throughout the late ___.', 'Af-ter-noon: af- + -ter + vowel team noon.'],
  ['beautiful', ['beautifull', 'beutiful', 'beatifull'], 'The sun cast a ___ orange glow over the canyon.', 'Beau-ti-ful: beau- contains eau, then ti, then -ful.'],
  ['curious', ['cuiros', 'curios', 'cureous'], 'The ___ kitten investigated the mysterious cardboard box.', 'Cu-ri-ous: open cu, ri, and suffix -ous.'],
  ['discover', ['discovur', 'diskuver', 'dizcover'], 'Scientists hope to ___ new species of cave insects.', 'Dis-cov-er: prefix dis- + cover.'],
  ['exercise', ['exersize', 'exercize', 'exersise'], 'Running around the track is great daily ___.', 'Ex-er-cise: ex- + -er + -cise with soft c.'],
];

// 3.2B.v Syllable division patterns (VCCV, VCV, VCCCV)
const DIVISION: Entry[] = [
  ['cactus', ['cactas', 'kactus', 'cactuss'], 'A blooming prickly pear ___ grew near the desert path.', 'Cac-tus: divide between c and t (VCCV).'],
  ['napkin', ['napken', 'napckin', 'nabkin'], 'Fold the cloth ___ beside your dinner plate.', 'Nap-kin: divide between p and k (VCCV).'],
  ['robin', ['robbin', 'roban', 'rawbin'], 'A red-breasted ___ built a nest in our oak tree.', 'Rob-in: divide after the b (VCV) with short o.'],
  ['tulip', ['tullip', 'tulep', 'tulipp'], 'A purple ___ sprouted in the front flower garden.', 'Tu-lip: divide after open syllable tu- (VCV) with long u.'],
  ['monster', ['monstur', 'monstor', 'monsterr'], 'The friendly cartoon ___ loved eating blue cookies.', 'Mon-ster: divide between n and st (VCCCV).'],
  ['hundred', ['hundrid', 'hunderd', 'hundread'], 'A dollar bill is worth one ___ shiny copper pennies.', 'Hun-dred: divide between n and dr (VCCCV).'],
  ['pumpkin', ['punkin', 'pumpken', 'pumpckin'], 'We carved a funny smiling face onto an orange ___.', 'Pump-kin: divide between mp and k (VCCCV).'],
  ['picnic', ['picnik', 'piknik', 'pickenic'], 'Pack cold lemonade and fruit for the family ___.', 'Pic-nic: divide between c and n (VCCV).'],
  ['fever', ['feever', 'fevver', 'fevor'], 'Drink hot tea when you have a high body ___.', 'Fe-ver: divide after open syllable fe- (VCV) with long e.'],
  ['silent', ['sillent', 'silant', 'silint'], 'The library was completely quiet and ___ during reading.', 'Si-lent: divide after open syllable si- (VCV).'],
  ['dentist', ['dentyst', 'dintist', 'dentest'], 'The friendly ___ checked our teeth for cavities.', 'Den-tist: divide between n and t (VCCV).'],
  ['plastic', ['plastik', 'plastick', 'plasstic'], 'Recycle every clean ___ jug into the blue bin.', 'Plas-tic: divide between s and t (VCCV).'],
];

// 3.2B.vi Prefixes: im-, non-, dis-, in-, pre-
const PREFIXES: Entry[] = [
  ['impossible', ['inpossible', 'imposible', 'impossable'], 'Lifting that gigantic boulder by hand is ___.', 'Im- + possible = impossible: im- means not.'],
  ['nonfiction', ['nonficshun', 'nonficsion', 'nonfiktion'], 'Biographies and field guides are examples of ___ books.', 'Non- + fiction = nonfiction: non- means not.'],
  ['disagree', ['dissagree', 'disagreee', 'disaggree'], 'Friends can ___ politely without getting angry.', 'Dis- + agree = disagree: dis- means opposite of.'],
  ['incorrect', ['incorect', 'inncorrect', 'incorrekt'], 'Double-check your answers to fix any ___ math facts.', 'In- + correct = incorrect: in- means not.'],
  ['preview', ['preeview', 'prevue', 'prevuee'], 'We watched an exciting movie ___ before the main feature.', 'Pre- + view = preview: pre- means before.'],
  ['dislike', ['disslike', 'dislyke', 'dislyk'], 'Many young kids ___ bitter green vegetables.', 'Dis- + like = dislike: dis- means opposite of.'],
  ['impatient', ['inpatient', 'impashunt', 'impacient'], 'Do not be ___ while waiting in the checkout line.', 'Im- + patient = impatient: im- before p means not.'],
  ['nonstop', ['nonnstop', 'nonstopp', 'nonstoop'], 'The airplane made a ___ flight across the state.', 'Non- + stop = nonstop: non- means without or not.'],
  ['preheat', ['preeheat', 'preheate', 'preheet'], 'Ask an adult to ___ the oven to 350 degrees.', 'Pre- + heat = preheat: pre- means before.'],
  ['disappear', ['dissappear', 'disapear', 'disapere'], 'Magicians make coins ___ into thin air.', 'Dis- + appear = disappear: one s in dis-, two p\'s in appear.'],
  ['incomplete', ['incompleat', 'incompleet', 'inncomplete'], 'Turn in your project on Friday, not an ___ draft.', 'In- + complete = incomplete: in- means not.'],
  ['prehistoric', ['prehistorick', 'preehistoric', 'prehistorik'], 'Dinosaurs roamed our planet during ___ times.', 'Pre- + historic = prehistoric: pre- means before.'],
];

// 3.2B.vii Suffixes and base word changes (dropping e, changing y to i, doubling final consonants)
const SUFFIXES: Entry[] = [
  ['running', ['runing', 'runnin', 'runneng'], 'Liam is ___ as fast as he can in the race.', 'Run + -ing = running: double the final consonant n after a short vowel.'],
  ['stopped', ['stoped', 'stopt', 'stoppd'], 'The yellow school bus ___ at the red street light.', 'Stop + -ed = stopped: double the p before adding -ed.'],
  ['swimming', ['swiming', 'swimmin', 'swimmeng'], 'The cool pool is perfect for ___ on hot summer days.', 'Swim + -ing = swimming: double the m before adding -ing.'],
  ['happily', ['happyly', 'happely', 'hapily'], 'The puppy wagged its tail ___ when seeing its owner.', 'Happy + -ly = happily: change y to i before adding -ly.'],
  ['cried', ['cryed', 'crid', 'cryied'], 'The baby ___ loudly until mom sang a sweet lullaby.', 'Cry + -ed = cried: change y to i before adding -ed.'],
  ['stories', ['storys', 'storeys', 'storis'], 'Grandpa told funny bedtime ___ about his childhood.', 'Story + -es = stories: change y to i before adding -es.'],
  ['baking', ['bakeing', 'bakking', 'baiking'], 'Aunt Maria is ___ sweet cinnamon muffins in the kitchen.', 'Bake + -ing = baking: drop the silent e before adding -ing.'],
  ['smiling', ['smileing', 'smilling', 'smyleing'], 'Everyone was ___ in the school picture.', 'Smile + -ing = smiling: drop the silent e before adding -ing.'],
  ['hopeful', ['hopful', 'hoppeful', 'hopefull'], 'We are ___ that tomorrow\'s outdoor game will not be rained out.', 'Hope + -ful = hopeful: keep the e because -ful starts with a consonant; one l in -ful.'],
  ['carried', ['carryed', 'carrid', 'caryed'], 'The worker ___ three heavy boxes into the store.', 'Carry + -ed = carried: change y to i before adding -ed.'],
  ['biggest', ['bigest', 'biggist', 'bigist'], 'Texas has some of the ___ cattle ranches in America.', 'Big + -est = biggest: double the g before adding -est.'],
  ['taking', ['takeing', 'takking', 'taiking'], 'We are ___ the bus downtown to visit the library.', 'Take + -ing = taking: drop the silent e before adding -ing.'],
];

// 3.11D.xi Correct spelling in drafts: grade-appropriate and high-frequency words
const OFTEN_MISSED: Entry[] = [
  ['friend', ['freind', 'frend', 'frind'], 'A true ___ always shares and plays fairly.', 'Fri-end: remember there is an end at the end of a friend.'],
  ['because', ['becuase', 'becaus', 'becouse'], 'We wore warm jackets ___ the autumn wind blew cold.', 'Be-cause: be + cause with -ause.'],
  ['people', ['peopel', 'poeple', 'peple'], 'Hundreds of ___ gathered to watch the holiday parade.', 'Peo-ple: peo- followed by final stable syllable -ple.'],
  ['school', ['skool', 'scholl', 'scool'], 'The yellow bus arrives at our elementary ___ at eight.', 'School: uses the ch pattern for the /k/ sound.'],
  ['thought', ['thout', 'thoght', 'thawght'], 'Maya ___ carefully before writing her final answer.', 'Thought: contains the -ought spelling pattern.'],
  ['through', ['threw', 'throug', 'thru'], 'Hikers walked ___ the cool, shady pine forest.', 'Through means moving from one side to the other.'],
  ['laugh', ['laf', 'laught', 'laff'], 'The funny clown made the entire audience ___.', 'Laugh: uses -augh for the short a sound and -gh for /f/.'],
  ['enough', ['enuff', 'enuf', 'enoug'], 'Do we have ___ juice boxes for everyone at the party?', 'E-nough: ends in the -ough pattern sounding like /uf/.'],
  ['favorite', ['favrite', 'faverite', 'favorit'], 'Bluebonnets are my ___ Texas springtime flowers.', 'Fa-vor-ite: favor + ite, three syllables.'],
  ['beautiful', ['beutiful', 'beautifull', 'beatiful'], 'The sunset over the hills was bright and ___.', 'Beau-ti-ful: beau + ti + ful.'],
  ['neighbor', ['nieghbor', 'nabor', 'neighber'], 'Our kind ___ helped rake autumn leaves off the sidewalk.', 'Neigh-bor: begins with the eigh spelling for long a.'],
  ['caught', ['cought', 'cawt', 'caugt'], 'The baseball player ___ the fly ball in right field.', 'Caught: uses the -aught pattern for the /aw/ sound.'],
];

export const SPELLING_GENERATORS: Record<string, Gen[]> = {
  'rla:3.2B.i': [spelling(SYLLABLES)],
  'rla:3.2B.ii': [spelling(HOMOPHONES, 'Choose the correct homophone to complete the sentence.')],
  'rla:3.2B.iii': [spelling(COMPOUND_CONTRACTIONS, 'Choose the correct compound word, contraction, or abbreviation.')],
  'rla:3.2B.iv': [spelling(MULTI)],
  'rla:3.2B.v': [spelling(DIVISION)],
  'rla:3.2B.vi': [spelling(PREFIXES)],
  'rla:3.2B.vii': [spelling(SUFFIXES)],
  'rla:3.11D.xi': [spelling(OFTEN_MISSED)],
};
