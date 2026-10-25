// Grade 4 sentence-level editing skills: homophones (4.3D), nouns (4.11D.iii), adverbs (4.11D.v),
// prepositions (4.11D.vi), reflexive pronouns (4.11D.vii), coordinating conjunctions (4.11D.viii),
// punctuation (4.11D.x), conventions (4.11D), and transitions (4.11B.i).

import { pick, sample, shuffle, type Rng } from '../../rng.ts';
import { inline, mc, one, txt, type Gen } from '../../generators/build.ts';
import type { InlinePart } from '../../types.ts';

function dropdown(rng: Rng, sentence: string, right: string, wrong: string[]): InlinePart {
  const options = shuffle(rng, [right, ...wrong]);
  const [before, after] = sentence.split('___');
  return inline([before, { blank: 0 }, after], [{ options, correct: options.indexOf(right) }]);
}

// ---------- 4.3D Homophones: meaning and usage ----------
const HOMOPHONE_MEANS: [word: string, pair: string, sentence: string, meaning: string, wrongMeans: [string, string, string]][] = [
  ['reign', 'rain', 'The wise monarch had a peaceful ___.', 'the period of time a king or queen rules', ['water falling from clouds in drops', 'leather straps used to steer a horse', 'to run very fast across a field']],
  ['plain', 'plane', 'Bison grazed on the wide, open ___.', 'a large area of flat land with few trees', ['a powered flying vehicle with wings', 'a carpenter tool for smoothing wood', 'a sweet syrup made from sugar cane']],
  ['bare', 'bear', 'The oak tree branches were completely ___.', 'uncovered or without leaves', ['a large heavy animal with thick fur', 'to carry a heavy burden', 'born into a royal family']],
  ['stare', 'stair', 'It is impolite to ___ at people in the store.', 'to look directly and steadily for a long time', ['a step in a flight of steps', 'a star that shines in the night sky', 'to steer a vehicle around a corner']],
  ['flour', 'flower', 'Measure two cups of white ___ into the bowl.', 'a powder made by grinding grain used in baking', ['the colorful blossoming part of a plant', 'water flowing down a shallow creek', 'a floor made of smooth wooden planks']],
  ['brake', 'break', 'Squeeze the bicycle ___ to stop before the crosswalk.', 'a device used for slowing or stopping a moving vehicle', ['to separate into pieces by a blow', 'a brief pause in work or school', 'a thick group of wild bushes']],
  ['peace', 'piece', 'The quiet lakeside cabin brought a sense of ___.', 'freedom from disturbance or conflict; quiet calm', ['a portion or part of a larger whole', 'a bronze or silver coin', 'a game played on a checkered board']],
  ['right', 'write', 'Make a ___ turn at the library intersection.', 'the opposite direction of left, or correct', ['to form letters or words with a pen or pencil', 'a religious ceremony or ritual', 'a person who builds wooden ships']],
  ['hole', 'whole', 'The prairie dog ducked into its underground ___.', 'an opening or hollow place in a solid body', ['entire, complete, with no parts missing', 'healthy and healed from illness', 'a deep pond filled with clear water']],
  ['rode', 'road', 'Elena ___ her pony along the river bank.', 'sat on and controlled the movement of an animal or vehicle', ['a wide path or street for vehicles', 'moved a boat through water with oars', 'tied a knot in a sturdy rope']],
  ['knight', 'night', 'The brave ___ defended the castle gate.', 'a warrior in armor granted an honorary title', ['the period of darkness between sunset and sunrise', 'a neat folding of paper', 'a tiny insect that bites animals']],
  ['sail', 'sale', 'The gust of wind filled the white canvas ___.', 'a piece of fabric used to catch wind and move a boat', ['an event where goods are sold at reduced prices', 'a clear plastic seal on a jar', 'a wooden paddle used to row']],
];

const homophoneMeaning: Gen = (rng, d) => {
  const [word, pair, sentence, meaning] = pick(rng, HOMOPHONE_MEANS);
  if (d === 1) {
    return one('inline', [txt(`In this sentence, which homophone correctly fits: **${word}** or **${pair}**?`)],
      dropdown(rng, sentence, word, [pair, `${word}ing`, `${pair}s`]),
      `In this context, "${word}" fits because it means ${meaning}.`);
  }
  const others = sample(rng, HOMOPHONE_MEANS.filter(h => h[0] !== word).map(h => h[3]), 3);
  return one('mc', [txt(`Read the sentence: **${sentence.replace('___', word)}**`), txt(`What is the meaning of the homophone **${word}** as used here?`)],
    mc(rng, meaning, others),
    `In this sentence, "${word}" means "${meaning}." Its homophone "${pair}" sounds the same but has a completely different spelling and meaning.`);
};

// ---------- 4.11D.iii Nouns: singular, plural, common, proper ----------
const NOUN_TYPES: [noun: string, kind: string, sentence: string, wrongKinds: [string, string, string], explain: string][] = [
  ['San Antonio', 'proper noun', 'Our family took a weekend trip to ___.', ['common noun', 'plural noun', 'collective noun'], 'San Antonio is the specific name of a city, so it is a proper noun and capitalized.'],
  ['library', 'singular common noun', 'We returned our books to the ___ on Elm Street.', ['proper noun', 'plural noun', 'verb'], 'Library is a general name for a place, singular because it refers to one library.'],
  ['children', 'irregular plural noun', 'The ___ played tag on the grassy playground.', ['singular proper noun', 'singular common noun', 'possessive noun'], 'Children is an irregular plural noun naming more than one child.'],
  ['Austin', 'proper noun', 'The state capitol is located in ___.', ['common noun', 'plural noun', 'adjective'], 'Austin is a specific name of a city, so it is a proper noun.'],
  ['geese', 'irregular plural noun', 'A flock of wild ___ flew south for the winter.', ['singular common noun', 'proper noun', 'possessive noun'], 'Geese is the irregular plural form of goose.'],
  ['volcanoes', 'regular plural noun', 'The scientists studied active ___ in the Pacific.', ['singular noun', 'proper noun', 'collective noun'], 'Volcanoes names more than one volcano, making it a plural noun.'],
  ['Dr. Alvarez', 'proper noun', 'The clinic was opened by ___.', ['common noun', 'plural noun', 'adjective'], 'Dr. Alvarez is the specific name of a person, so it is a proper noun.'],
  ['telescope', 'singular common noun', 'Marcus peered through the ___ at the moon craters.', ['proper noun', 'plural noun', 'verb'], 'Telescope is a singular common noun naming one general object.'],
  ['wolves', 'irregular plural noun', 'The pack of ___ howled in the distant canyon.', ['singular noun', 'proper noun', 'possessive noun'], 'Wolves is the irregular plural noun formed by changing f to v and adding -es to wolf.'],
  ['Brazos River', 'proper noun', 'Kayakers paddled down the scenic ___.', ['common noun', 'plural noun', 'adverb'], 'Brazos River is the specific name of a body of water, making it a proper noun.'],
  ['butterflies', 'plural common noun', 'Monarch ___ rested on the bright orange blossoms.', ['singular noun', 'proper noun', 'verb'], 'Butterflies is a plural common noun naming multiple insects.'],
  ['neighborhood', 'singular common noun', 'Our friendly ___ organized a block party.', ['proper noun', 'plural noun', 'verb'], 'Neighborhood is a singular common noun naming a general area.'],
];

const nounsGen: Gen = (rng, d) => {
  const [noun, kind, sentence, wrongKinds, explain] = pick(rng, NOUN_TYPES);
  if (d === 1) {
    const isProper = kind.includes('proper');
    const question = `In the sentence, is **${noun}** a common noun or a proper noun?`;
    return one('mc', [txt(`Read the sentence: **${sentence.replace('___', noun)}**`), txt(question)],
      mc(rng, isProper ? 'Proper noun' : 'Common noun', [isProper ? 'Common noun' : 'Proper noun', 'Pronoun', 'Adverb']),
      explain);
  }
  return one('mc', [txt(`Read the sentence: **${sentence.replace('___', noun)}**`), txt(`Which term best describes the word **${noun}**?`)],
    mc(rng, kind, wrongKinds), explain);
};

// ---------- 4.11D.v Adverbs of frequency and degree ----------
const FREQUENCY_ADVERBS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Maya ___ brushes her teeth before going to sleep.', 'always', ['brightly', 'slowly', 'very'], '"Always" is an adverb of frequency that tells how often an action happens.'],
  ['It ___ snows in South Texas during November.', 'rarely', ['loudly', 'carefully', 'extremely'], '"Rarely" is an adverb of frequency telling that snow seldom happens.'],
  ['We ___ visit the public library on Saturday mornings.', 'usually', ['sweetly', 'wildly', 'too'], '"Usually" is an adverb of frequency describing regular habits.'],
  ['Lucas ___ forgets his lunchbox because he packs it at night.', 'seldom', ['heavily', 'bravely', 'quite'], '"Seldom" is an adverb of frequency meaning not often.'],
  ['The school bell rings ___ at eight o\'clock.', 'daily', ['sadly', 'softly', 'much'], '"Daily" is an adverb of frequency telling that it rings every day.'],
  ['I ___ check the weather before riding my bike.', 'often', ['sharply', 'gladly', 'somewhat'], '"Often" is an adverb of frequency indicating many times.'],
];

const DEGREE_ADVERBS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['The summer afternoon in Dallas was ___ hot.', 'extremely', ['always', 'seldom', 'never'], '"Extremely" is an adverb of degree that tells how intense or hot it was.'],
  ['The puppy was ___ tired after running at the park.', 'very', ['daily', 'weekly', 'often'], '"Very" is an adverb of degree describing how tired the puppy was.'],
  ['The instructions for the game were ___ simple.', 'quite', ['rarely', 'hourly', 'sometimes'], '"Quite" is an adverb of degree expressing the level or extent of simplicity.'],
  ['The puzzle was ___ solved before the timer ran out.', 'almost', ['daily', 'never', 'seldom'], '"Almost" is an adverb of degree showing the extent of completion.'],
  ['Dad was ___ pleased with our clean bedrooms.', 'thoroughly', ['often', 'rarely', 'sometimes'], '"Thoroughly" is an adverb of degree showing complete satisfaction.'],
  ['The mountain climb proved ___ difficult for beginners.', 'somewhat', ['always', 'usually', 'daily'], '"Somewhat" is an adverb of degree showing a moderate extent.'],
];

const adverbsGen: Gen = (rng) => {
  const isFreq = rng() < 0.5;
  const [sentence, right, wrong, why] = pick(rng, isFreq ? FREQUENCY_ADVERBS : DEGREE_ADVERBS);
  return one('inline', [txt(`Choose the adverb that best completes the sentence to show ${isFreq ? 'how often (frequency)' : 'how much or how intense (degree)'}.`)],
    dropdown(rng, sentence, right, wrong), why);
};

// ---------- 4.11D.vi Prepositional phrases ----------
const PREPOSITIONS: [sentence: string, prep: string, wrong: [string, string, string], phrase: string, why: string][] = [
  ['The timid deer hid ___ the dense cedar trees.', 'behind', ['cheerfully', 'because', 'quick'], 'behind the dense cedar trees', '"Behind" is a preposition showing location relative to the trees.'],
  ['A shiny lizard scrambled ___ the warm stone wall.', 'across', ['loudly', 'though', 'bright'], 'across the warm stone wall', '"Across" is a preposition showing movement from one side to another.'],
  ['We stored the sleeping bags ___ the camp tent.', 'inside', ['gently', 'unless', 'quiet'], 'inside the camp tent', '"Inside" is a preposition showing position.'],
  ['The red-tailed hawk soared ___ the desert canyon.', 'above', ['softly', 'since', 'heavy'], 'above the desert canyon', '"Above" is a preposition indicating higher altitude or location.'],
  ['The hikers rested ___ the shade of an old pecan tree.', 'under', ['slowly', 'until', 'cool'], 'under the shade of an old pecan tree', '"Under" is a preposition showing position beneath something.'],
  ['The school bus arrived ___ the museum parking lot.', 'at', ['happily', 'while', 'smooth'], 'at the museum parking lot', '"At" is a preposition indicating a specific location.'],
  ['The muddy dog dashed ___ the open screen door.', 'through', ['fast', 'whether', 'rough'], 'through the open screen door', '"Through" is a preposition showing motion in one side and out the other.'],
  ['Fresh wildflowers bloomed ___ the country highway.', 'along', ['brightly', 'although', 'tall'], 'along the country highway', '"Along" is a preposition meaning in a line beside something.'],
  ['Marcus placed his backpack ___ his classroom desk.', 'beside', ['calmly', 'because', 'neat'], 'beside his classroom desk', '"Beside" is a preposition meaning next to.'],
  ['The baby robins waited ___ their cozy nest.', 'in', ['chirping', 'so', 'green'], 'in their cozy nest', '"In" is a preposition showing location inside an enclosure.'],
];

const prepositionalGen: Gen = (rng, d) => {
  const [sentence, prep, wrong, phrase, why] = pick(rng, PREPOSITIONS);
  if (d === 3) {
    const full = sentence.replace('___', prep);
    const nonPhrases = [
      full.split(' ')[0] + ' ' + full.split(' ')[1],
      full.split(' ').slice(2, 5).join(' '),
      full.split(' ').slice(-2).join(' '),
    ];
    return one('mc', [txt(`Read the sentence: **${full}**`), txt('Which part of the sentence is the prepositional phrase?')],
      mc(rng, phrase, nonPhrases),
      `The prepositional phrase is "${phrase}." It begins with the preposition "${prep}" and ends with its noun object.`);
  }
  return one('inline', [txt('Choose the preposition that correctly completes the phrase.')],
    dropdown(rng, sentence, prep, wrong), why);
};

// ---------- 4.11D.vii Reflexive pronouns ----------
const REFLEXIVE: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['I made ___ a delicious turkey sandwich after school.', 'myself', ['me', 'himself', 'herself'], 'The subject is "I", so the matching reflexive pronoun is "myself."'],
  ['Diego taught ___ how to play chords on the guitar.', 'himself', ['hisself', 'him', 'myself'], 'Diego is singular masculine, so use "himself." "Hisself" is never correct in standard English.'],
  ['Maya was proud of ___ for finishing the 5K run.', 'herself', ['her', 'themselves', 'himself'], 'Maya is singular feminine, so use "herself."'],
  ['The cat cleaned ___ with its paws after breakfast.', 'itself', ['it', 'its', 'its\'self'], 'The cat is an animal/thing, so use the reflexive pronoun "itself."'],
  ['We painted the classroom mural all by ___.', 'ourselves', ['ourself', 'us', 'themselves'], '"We" is plural, so the matching reflexive pronoun is "ourselves." "Ourself" is not a standard word.'],
  ['The twins prepared ___ for the science fair presentation.', 'themselves', ['theirselves', 'themself', 'them'], 'The twins are plural third person, so use "themselves." "Theirselves" is not a standard English word.'],
  ['Did you build this wooden birdhouse all by ___, Liam?', 'yourself', ['yourselves', 'you', 'myself'], 'Liam is one person being spoken to, so use singular "yourself."'],
  ['Be careful not to burn ___ on the hot stove, kids.', 'yourselves', ['yourself', 'you', 'themselves'], 'More than one kid is being spoken to, so use the plural form "yourselves."'],
  ['The robot was programmed to turn ___ off at night.', 'itself', ['its', 'hisself', 'himself'], 'The robot is an object, so the correct reflexive pronoun is "itself."'],
  ['Carlos looked at ___ in the polished mirror.', 'himself', ['hisself', 'him', 'herself'], 'Carlos is singular masculine, so the matching reflexive pronoun is "himself."'],
];

const reflexiveGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, REFLEXIVE);
  return one('inline', [txt('Choose the correct reflexive pronoun to complete the sentence.')],
    dropdown(rng, sentence, right, wrong), why);
};

// ---------- 4.11D.viii Coordinating conjunctions (FANBOYS) ----------
const CONJUNCTIONS: [a: string, b: string, conj: string, wrong: [string, string, string], why: string][] = [
  ['The clouds were dark', 'it did not rain', 'but', ['and', 'so', 'or'], '"But" connects two contrasting thoughts.'],
  ['Kai finished his book report', 'he turned it in early', 'and', ['but', 'or', 'nor'], '"And" connects two related actions that go together.'],
  ['You may pick apple slices', 'you can choose carrot sticks', 'or', ['but', 'nor', 'for'], '"Or" presents a choice between two options.'],
  ['The creek water was freezing', 'we decided not to swim', 'so', ['or', 'nor', 'but'], '"So" shows that the second thought is a result of the first.'],
  ['Ana felt very nervous', 'she gave a wonderful speech', 'yet', ['so', 'or', 'for'], '"Yet" introduces a surprising contrast, similar to but.'],
  ['The puppy barked loudly', 'someone was knocking at the door', 'for', ['so', 'but', 'or'], '"For" explains the reason or cause of the first statement.'],
  ['Sam did not like spinach', 'did he want broccoli', 'nor', ['or', 'and', 'but'], '"Nor" continues a negative statement after "neither" or "not."'],
  ['The library had closed', 'we walked to the park instead', 'so', ['yet', 'or', 'nor'], '"So" links an event to its natural outcome.'],
  ['Mia loves painting', 'her brother prefers sculpting clay', 'but', ['so', 'for', 'nor'], '"But" contrasts Mia\'s preference with her brother\'s.'],
  ['We can take the highway', 'we can drive scenic country roads', 'or', ['nor', 'for', 'yet'], '"Or" indicates an alternative possibility.'],
];

const conjunctionsGen: Gen = (rng) => {
  const [a, b, conj, wrong, why] = pick(rng, CONJUNCTIONS);
  return one('inline', [txt('Choose the coordinating conjunction that best joins the two thoughts into a compound sentence.')],
    dropdown(rng, `${a}, ___ ${b}.`, conj, wrong),
    `${why} In a compound sentence, place a comma before the coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so).`);
};

// ---------- 4.11D.x Punctuation: possessive apostrophes, dialogue quotes, commas ----------
const PUNCTUATION_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['"Let\'s hurry," whispered Maya, "___ we will miss the bus."', 'or', ['Or', '"or', 'or"'], 'The quote continues in the middle of a sentence, so it starts lowercase without closing quotes first.'],
  ['Carlos shouted, "Look at that giant hawk___"', '!"', ['"!', '."', '",'], 'An exclamation point belongs inside the closing quotation marks: !"'],
  ['The three ___ bicycles were parked by the fence.', 'boys\'', ['boy\'s', 'boys', 'boys\'s'], 'More than one boy owns the bicycles. For plural nouns ending in s, add only an apostrophe: boys\'.'],
  ['The ___ soccer ball rolled into the street.', 'child\'s', ['childs\'', 'childs', 'child\'es'], 'One child owns the ball, so add \'s: child\'s.'],
  ['"The storm is passing," said Dad, "___ the sun is out."', 'and', ['And', '"and', 'and"'], 'The dialogue continues a single sentence across the speech tag, so the second part starts lowercase.'],
  ['Sofia asked, "Can you help me with this math problem___"', '?"', ['"?', '."', '",'], 'A question mark goes inside the closing quotation marks when the spoken words are a question: ?"'],
  ['The ___ den was hidden beneath the tree roots.', 'fox\'s', ['foxes\'', 'foxs', 'foxes'], 'One fox owns the den, so add \'s: fox\'s.'],
  ['The twin ___ bedroom was painted blue.', 'sisters\'', ['sister\'s', 'sisters', 'sisters\'s'], 'The bedroom belongs to plural sisters, so put the apostrophe after the s: sisters\'.'],
  ['The coach blew his whistle, ___ the players ran to the bench.', 'and', ['and,', ',and', 'so,'], 'In a compound sentence, the comma comes before the conjunction, not after it.'],
  ['"We found the lost puppy," exclaimed Jamal___', '!"', ['"!', '."', '",'], 'The spoken sentence is an exclamation, so the exclamation point goes inside the quotes.']];

const punctuationGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, PUNCTUATION_ITEMS);
  return one('inline', [txt('Choose the correct punctuation or word to complete the sentence.')],
    dropdown(rng, sentence, right, wrong), why);
};

// ---------- 4.11B.i Purposeful transitions ----------
const TRANSITIONS: [a: string, b: string, right: string, wrong: [string, string, string], why: string][] = [
  ['First, gather your seeds and a small flower pot.', 'fill the pot with rich, dark potting soil.', 'Next,', ['However,', 'Finally,', 'For example,'], 'In a series of steps, "Next" introduces the second step after "First."'],
  ['Elena studied flashcards every night for two weeks.', 'she earned a perfect score on her spelling test.', 'As a result,', ['Instead,', 'However,', 'Meanwhile,'], '"As a result" shows the positive effect caused by her dedicated studying.'],
  ['The weather forecast called for sunny skies.', 'heavy thunderclouds gathered over the field.', 'However,', ['Therefore,', 'Furthermore,', 'In addition,'], '"However" signals an unexpected contrast to the sunny forecast.'],
  ['The bluebonnet is the state flower of Texas.', 'the northern mockingbird is the state bird.', 'In addition,', ['Instead,', 'However,', 'Therefore,'], '"In addition" adds another related fact about Texas state symbols.'],
  ['We planted the garden, watered the seeds, and weeded the beds.', 'bright red tomatoes were ready to pick.', 'Finally,', ['First,', 'However,', 'Instead,'], '"Finally" marks the concluding outcome of a process.'],
  ['Marcus wanted to play soccer in the yard.', 'a sudden downpour forced him to read indoors.', 'Instead,', ['Also,', 'Furthermore,', 'For example,'], '"Instead" indicates an alternative action taken when the plan changed.'],
  ['Many animals migrate when the weather turns cold.', 'monarch butterflies travel thousands of miles south to Mexico.', 'For example,', ['However,', 'Therefore,', 'Instead,'], '"For example" introduces a specific instance of migration.'],
  ['The campers set up their tents before twilight.', 'they gathered dry branches to build a campfire.', 'Then,', ['However,', 'Instead,', 'Nevertheless,'], '"Then" indicates the next chronological action.'],
  ['Recycling aluminum cans saves valuable energy.', 'it keeps reusable metal out of local landfills.', 'Furthermore,', ['However,', 'Instead,', 'Meanwhile,'], '"Furthermore" provides additional supportive evidence for recycling.'],
  ['The library was undergoing quiet renovations.', 'students studied in the brightly lit community center.', 'Meanwhile,', ['Therefore,', 'Finally,', 'For example,'], '"Meanwhile" indicates something happening during the same period of time.'],
];

const transitionsGen: Gen = (rng) => {
  const [a, b, right, wrong, why] = pick(rng, TRANSITIONS);
  return one('inline', [txt('Choose the transition that best connects the two sentences.')],
    dropdown(rng, `${a} ___ ${b}`, right, wrong),
    `${why} Use a comma after an introductory transitional phrase.`);
};

export const EDITING_GENERATORS: Record<string, Gen[]> = {
  'rla:4.3D': [homophoneMeaning],
  'rla:4.11D': [punctuationGen],
  'rla:4.11D.iii': [nounsGen],
  'rla:4.11D.v': [adverbsGen],
  'rla:4.11D.vi': [prepositionalGen],
  'rla:4.11D.vii': [reflexiveGen],
  'rla:4.11D.viii': [conjunctionsGen],
  'rla:4.11D.x': [punctuationGen],
  'rla:4.11B.i': [transitionsGen],
};
