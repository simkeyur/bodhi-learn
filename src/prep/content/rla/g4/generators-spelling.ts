// Grade 4 spelling (4.2B.i–v) and spelling in drafts (4.11D.xi): pick the correct spelling to complete a
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

// 4.2B.i Syllable types: closed, open, VCe, vowel teams, r-controlled, final stable
const SYLLABLES: Entry[] = [
  ['blanket', ['blankit', 'blancet', 'blankket'], 'Wrap the warm ___ around your shoulders.', 'Blan-ket: two closed syllables, each ending in a consonant that keeps the vowel short.'],
  ['music', ['musick', 'muzic', 'musec'], 'The band played lively ___ for the parade.', 'Mu-sic: the first syllable is open (ends in a long u), and the word ends in c, not ck.'],
  ['invite', ['invight', 'invyt', 'invitt'], 'We sent an ___ to all our classmates.', 'In-vite: the second syllable is VCe with a silent e making the i long.'],
  ['sailboat', ['sailbote', 'saylboat', 'salboat'], 'The white ___ skimmed across the blue lake.', 'Sail-boat: contains two vowel teams, ai and oa.'],
  ['market', ['markit', 'marcet', 'markket'], 'We bought sweet peaches at the farmers ___.', 'Mar-ket: mar- has an r-controlled vowel, and -ket is a closed syllable.'],
  ['candle', ['candel', 'candil', 'candol'], 'Mom lit a ___ during the storm.', 'Can-dle: can- is closed, and -dle is a consonant-l-e final stable syllable.'],
  ['silver', ['silvir', 'sylver', 'silvur'], 'The shiny ___ coin caught the sunlight.', 'Sil-ver: sil- is a closed syllable, followed by the r-controlled syllable ver.'],
  ['teaspoon', ['teespoon', 'teaspune', 'teaspun'], 'Add one ___ of vanilla to the cookie batter.', 'Tea-spoon: two vowel teams, ea and oo.'],
  ['cradle', ['cradel', 'cradil', 'kradle'], 'The wooden ___ rocked gently back and forth.', 'Cra-dle: cra- is an open syllable with long a, followed by the final stable syllable -dle.'],
  ['feather', ['fether', 'feathor', 'feethur'], 'A blue ___ fell from the bird in the tree.', 'Feath-er: the vowel team ea makes the short e sound in feather.'],
  ['cricket', ['crickit', 'criket', 'kriket'], 'A tiny ___ chirped behind the porch steps.', 'Crick-et: closed syllable crick with -ck after short i, followed by -et.'],
  ['maple', ['mapel', 'mayple', 'mapil'], 'The leaves on the ___ tree turned bright orange.', 'Ma-ple: ma- is an open syllable with long a, followed by the final stable syllable -ple.'],
];

// 4.2B.ii Spelling homophones
const HOMOPHONES: Entry[] = [
  ['reign', ['rain', 'rein', 'rayn'], 'The queen enjoyed a long and peaceful ___.', 'Reign means royal rule. Rain is weather, and a rein steers a horse.'],
  ['peace', ['piece', 'peece', 'peice'], 'The quiet forest gave everyone a feeling of ___.', 'Peace means calm and quiet. A piece is a part of something.'],
  ['flour', ['flower', 'flowr', 'floure'], 'We need two cups of wheat ___ to bake the loaf.', 'Flour is grain powder for baking. A flower is a plant bloom.'],
  ['plain', ['plane', 'playn', 'plaine'], 'The buffalo grazed across the grassy ___.', 'A plain is flat open land or simple. A plane is an aircraft or flat surface.'],
  ['bare', ['bear', 'bair', 'bayr'], 'In winter, the oak tree stood with ___ branches.', 'Bare means uncovered. A bear is a large furry animal.'],
  ['stare', ['stair', 'stairr', 'staye'], 'It is not polite to ___ at strangers.', 'Stare means to look fixedly. A stair is a step in a staircase.'],
  ['right', ['write', 'rite', 'wright'], 'Turn ___ at the corner to find the library.', 'Right means correct or a direction. Write means to make words with a pen.'],
  ['hole', ['whole', 'hoel', 'holl'], 'The gopher dug a deep ___ beneath the garden.', 'A hole is an opening in the ground. Whole means entire or complete.'],
  ['brake', ['break', 'braik', 'brayk'], 'Step on the bicycle ___ before reaching the road.', 'A brake stops a vehicle. Break means to damage or shatter.'],
  ['rode', ['road', 'rowed', 'roade'], 'Marcus ___ his horse along the dusty trail.', 'Rode is the past tense of ride. A road is a street, and rowed means moved with oars.'],
  ['sail', ['sale', 'sayl', 'saile'], 'The wind caught the white ___ of the ship.', 'A sail catches wind on a boat. A sale is selling goods at lower prices.'],
  ['knight', ['night', 'nite', 'knyte'], 'The brave ___ wore a suit of shining armor.', 'A knight is an armored warrior. Night is the time of darkness.'],
];

// 4.2B.iii Multisyllabic words with several sound-spelling patterns
const MULTI: Entry[] = [
  ['adventure', ['advencher', 'adventur', 'advenchur'], 'Hiking up the canyon was an exciting ___.', 'Ad-ven-ture: three syllables, ending in the pattern -ture.'],
  ['discovery', ['discovry', 'diskuvery', 'discovary'], 'The scientist made an important ___.', 'Dis-cov-er-y: four syllables, spelled with dis- + cover + -y.'],
  ['community', ['comunity', 'communitie', 'communiti'], 'Everyone in our ___ helped clean the park.', 'Com-mu-ni-ty: double m, short u, and ends with -ty.'],
  ['astronaut', ['astronot', 'astrenaut', 'astranaut'], 'The ___ floated outside the space station.', 'As-tro-naut: astro- means star, and naut means sailor (spelled naut).'],
  ['creativity', ['creativaty', 'creetivity', 'creativite'], 'Her painting showed wonderful imagination and ___.', 'Cre-a-tiv-i-ty: five syllables ending in -ity.'],
  ['passenger', ['pasenger', 'passanger', 'passinger'], 'Every ___ buckled their seat belt on the plane.', 'Pas-sen-ger: double s and ends in -ger.'],
  ['celebrate', ['selebrate', 'celibrate', 'celebrete'], 'We gathered together to ___ Grandma\'s birthday.', 'Cel-e-brate: soft c makes /s/, then e, then brate.'],
  ['invitation', ['invatashun', 'invitacion', 'invaytation'], 'Did you receive our ___ to the party?', 'In-vi-ta-tion: four syllables ending with the stable suffix -tion.'],
  ['championship', ['championshyp', 'champianship', 'champunship'], 'Our soccer team won the league ___.', 'Cham-pi-on-ship: champion + -ship.'],
  ['electricity', ['electrisity', 'electricty', 'elextricity'], 'Lightning is a powerful burst of natural ___.', 'E-lec-tric-i-ty: electric + -ity, where c sounds like /s/ before i.'],
  ['instrument', ['instrament', 'instremunt', 'instriment'], 'Liam plays a brass ___ in the school band.', 'In-stru-ment: three syllables ending in -ment.'],
  ['refrigerator', ['refridgerator', 'refrigorator', 'refrijerator'], 'Keep the fresh milk cold inside the ___.', 'Re-frig-er-a-tor: no d in refrigerator, unlike fridge.'],
];

/// 4.2B.iv Syllable division (VC/CV, V/CV, VC/V)
const DIVISION: Entry[] = [
  ['magnet', ['magnett', 'magnit', 'magnite'], 'The metal paper clip stuck to the ___.', 'Mag-net: divide between g and n (VC/CV), both syllables are closed.'],
  ['sunset', ['sunsett', 'suncet', 'sunzset'], 'We watched the colorful ___ over the Gulf.', 'Sun-set: divide between n and s (VC/CV).'],
  ['planet', ['plannet', 'planit', 'planeet'], 'Mars is known as the red ___.', 'Plan-et: divide after the n (VC/V) so the a stays short.'],
  ['cabin', ['cabbin', 'caben', 'kabbin'], 'The hikers stayed overnight in a mountain ___.', 'Cab-in: divide after the b (VC/V) with a single b.'],
  ['finish', ['finnish', 'fynish', 'finich'], 'Runners sprinted to ___ the final lap.', 'Fin-ish: divide after the n (VC/V) with a single n.'],
  ['locate', ['loccate', 'lokate', 'lowcate'], 'Use the trail map to ___ the campsite.', 'Lo-cate: divide after open syllable lo- (V/CV).'],
  ['secret', ['seccret', 'secreet', 'seacret'], 'The two friends shared a whispered ___.', 'Se-cret: divide after open syllable se- (V/CV) with long e.'],
  ['traffic', ['trafic', 'traffick', 'traffec'], 'The school bus moved slowly through heavy ___.', 'Traf-fic: divide between the two f\'s (VC/CV).'],
  ['plastic', ['plastick', 'plasstic', 'plastik'], 'Recycle every clean ___ water bottle.', 'Plas-tic: divide between s and t (VC/CV), ending in -ic.'],
  ['cactus', ['cactas', 'kactus', 'cactuss'], 'A prickly pear ___ grew along the canyon rim.', 'Cac-tus: divide between c and t (VC/CV).'],
  ['blanket', ['blankit', 'blankette', 'blancet'], 'Fold the wool ___ at the foot of the bed.', 'Blan-ket: divide between n and k (VC/CV).'],
  ['talent', ['tallent', 'talant', 'talint'], 'The singer showed extraordinary musical ___.', 'Tal-ent: divide after l (VC/V) with a single l.'],
];

// 4.2B.v Prefixes: mis-, sub-, un-, re-, dis-, pre-
const PREFIXES: Entry[] = [
  ['misunderstand', ['missunderstand', 'misunderstande', 'mizunderstand'], 'Speak clearly so nobody will ___ your instructions.', 'Mis- + understand = misunderstand. Mis- means wrong or badly.'],
  ['submarine', ['subbarine', 'submarin', 'submerine'], 'The research ___ dove deep under the ocean waves.', 'Sub- + marine = submarine. Sub- means under or below.'],
  ['misplace', ['missplace', 'misplaice', 'misplaise'], 'Try not to ___ your house key in the grass.', 'Mis- + place = misplace. Keep one s from mis- and place.'],
  ['subway', ['subbway', 'subwey', 'subwaie'], 'Commuters rode the underground ___ train to work.', 'Sub- + way = subway. Sub- means under.'],
  ['disobey', ['dissobey', 'disobay', 'disobaie'], 'Trained guide dogs are taught never to ___.', 'Dis- + obey = disobey. Dis- means opposite of.'],
  ['rebuild', ['rebild', 'rebyld', 'reebuild'], 'The town worked together to ___ the wooden bridge.', 'Re- + build = rebuild. Re- means again.'],
  ['unpredictable', ['unpredictible', 'unpredicktable', 'unpredicable'], 'Spring storms in Texas can be quite ___.', 'Un- + predictable = unpredictable. Un- means not.'],
  ['prehistoric', ['prehistorick', 'preehistoric', 'prehistorik'], 'We saw fossils of ___ creatures at the museum.', 'Pre- + historic = prehistoric. Pre- means before.'],
  ['subtotal', ['subbtotal', 'subtotle', 'subtotel'], 'Calculate the ___ before adding the sales tax.', 'Sub- + total = subtotal. Sub- means part of or under.'],
  ['misfortune', ['missfortune', 'misfourtune', 'misfurchun'], 'Losing the trail map was an unlucky ___.', 'Mis- + fortune = misfortune. Mis- means bad or wrong.'],
  ['disappear', ['dissappear', 'disapear', 'disapere'], 'The deer seemed to ___ into the thick woods.', 'Dis- + appear = disappear: one s in dis-, two p\'s in appear.'],
  ['rewrite', ['rerite', 'rewright', 'reewrite'], 'Please ___ your final paragraph neatly.', 'Re- + write = rewrite. Write keeps its silent w.'],
];

// 4.11D.xi Correct spelling in drafts: grade-level and high-frequency words
const OFTEN_MISSED: Entry[] = [
  ['favorite', ['favrite', 'faverite', 'favorit'], 'Bluebonnets are my ___ Texas wildflower.', 'Fa-vor-ite: favor + ite, with three distinct syllables.'],
  ['calendar', ['calender', 'calandar', 'calendur'], 'Circle the field trip date on your wall ___.', 'Cal-en-dar: the last syllable is spelled -dar.'],
  ['grammar', ['grammer', 'gramar', 'grammor'], 'Our class practiced punctuation in ___ today.', 'Gram-mar: spelled with two m\'s and ends in -ar.'],
  ['separate', ['seperate', 'separete', 'seprate'], 'Pack the cold drinks in a ___ cooler.', 'Sep-a-rate: remember there is a rat in separate.'],
  ['necessary', ['necesary', 'necessery', 'neccessary'], 'A sturdy compass is ___ for wilderness hiking.', 'Nec-es-sary: one c and two s\'s.'],
  ['definitely', ['definately', 'definetly', 'definitly'], 'Our team will ___ practice again on Thursday.', 'Def-i-nite-ly: contains the base word finite.'],
  ['accident', ['axident', 'acident', 'accidant'], 'Spilling the milk was a complete ___.', 'Ac-ci-dent: double c where the second c sounds like /s/.'],
  ['beginning', ['begining', 'beggining', 'beginnin'], 'The story was exciting from the very ___.', 'Be-gin-ning: double the n before adding -ing.'],
  ['tomorrow', ['tommorow', 'tomorow', 'tommorrow'], 'We leave for camp early ___ morning.', 'To-mor-row: one m and two r\'s.'],
  ['disappoint', ['dissappoint', 'disapoint', 'disapoynt'], 'Her hard work ensured she would not ___ her coach.', 'Dis- + appoint = disappoint: one s and two p\'s.'],
  ['library', ['libary', 'liberry', 'librery'], 'We checked out three books from the school ___.', 'Li-brar-y: don\'t forget the first r after b.'],
  ['special', ['speshul', 'specal', 'speshal'], 'Mom prepared a ___ dinner for graduation day.', 'Spe-cial: the /sh/ sound is spelled with ci.'],
];

export const SPELLING_GENERATORS: Record<string, Gen[]> = {
  'rla:4.2B.i': [spelling(SYLLABLES)],
  'rla:4.2B.ii': [spelling(HOMOPHONES, 'Choose the correct homophone to complete the sentence.')],
  'rla:4.2B.iii': [spelling(MULTI)],
  'rla:4.2B.iv': [spelling(DIVISION)],
  'rla:4.2B.v': [spelling(PREFIXES)],
  'rla:4.11D.xi': [spelling(OFTEN_MISSED)],
};
