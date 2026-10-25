// Grade 3 sentence-level editing skills: homophones/synonyms (3.3D), nouns (3.11D.iii),
// comparative/superlative adjectives (3.11D.iv), adverbs of time and manner (3.11D.v),
// prepositions (3.11D.vi), pronouns (3.11D.vii), coordinating conjunctions (3.11D.viii),
// apostrophes and commas (3.11D.x), conventions (3.11D), and transitions/structure (3.11B.i).

import { pick, sample, shuffle, type Rng } from '../../rng.ts';
import { inline, mc, one, txt, type Gen } from '../../generators/build.ts';
import type { InlinePart } from '../../types.ts';

function dropdown(rng: Rng, sentence: string, right: string, wrong: string[]): InlinePart {
  const options = shuffle(rng, [right, ...wrong]);
  const [before, after] = sentence.split('___');
  return inline([before, { blank: 0 }, after], [{ options, correct: options.indexOf(right) }]);
}

// ---------- 3.3D Homophones & Multiple-Meaning Words ----------
const HOMOPHONES: [word: string, pair: string, sentence: string, meaning: string, wrongMeans: [string, string, string]][] = [
  ['plain', 'plane', 'Bison grazed on the wide, open ___.', 'a large flat area of grassy land', ['an aircraft with fixed wings', 'a tool for shaving wood', 'a sweet syrup made from sugar']],
  ['bare', 'bear', 'The winter oak tree branches were completely ___.', 'uncovered or without leaves', ['a large furry mammal', 'to carry a heavy pack', 'born into a royal family']],
  ['stare', 'stair', 'It is impolite to ___ at strangers.', 'to gaze steadily with wide open eyes', ['a single step in a flight of steps', 'a star that twinkles in the sky', 'to steer a wagon down a road']],
  ['flour', 'flower', 'Add two cups of white ___ into the mixing bowl.', 'a fine powder made from ground wheat used for baking', ['a colorful blossom on a plant', 'water flowing down a shallow creek', 'a smooth wooden floor']],
  ['brake', 'break', 'Step on the bicycle ___ to stop before the crosswalk.', 'a device used for stopping a moving vehicle', ['to separate into pieces or smash', 'a brief rest from schoolwork', 'a thick patch of bushes']],
  ['peace', 'piece', 'The quiet forest at dawn was full of calm and ___.', 'freedom from disturbance or quiet calm', ['a part or slice of a larger whole', 'a shiny silver coin', 'a game board token']],
  ['right', 'write', 'Make a ___ turn at the corner of Elm Street.', 'the opposite direction of left, or correct', ['to form letters with a pencil', 'a religious ritual', 'a person who builds boats']],
  ['hole', 'whole', 'The prairie dog scampered into its deep underground ___.', 'an opening or hollow spot in the ground', ['entire, complete, with nothing missing', 'cured of sickness or healed', 'a shallow garden pool']],
  ['rode', 'road', 'Lucas ___ his horse across the open pasture.', 'sat on and traveled on an animal or vehicle', ['a paved street or highway for cars', 'rowed a boat with wooden oars', 'tied a thick knot in a rope']],
  ['knight', 'night', 'The brave ___ wore a suit of shining steel armor.', 'a historic warrior granted an honorable rank', ['the dark hours between sunset and sunrise', 'a neat paper fold', 'a small biting insect']],
  ['sail', 'sale', 'A gust of wind filled the canvas ___ on the boat.', 'a piece of fabric that catches wind to move a boat', ['an event where items are sold at lower prices', 'a rubber seal on a jar', 'a wooden paddle for rowing']],
  ['tail', 'tale', 'The excited puppy wagged its fluffy ___ back and forth.', 'the rear part of an animal\'s body', ['a fictional story or adventure', 'to speak quietly in a whisper', 'a tall mountain peak']],
];

const homophoneMeaning: Gen = (rng, d) => {
  const [word, pair, sentence, meaning] = pick(rng, HOMOPHONES);
  if (d === 1) {
    return one('inline', [txt(`In this sentence, which word correctly fits: **${word}** or **${pair}**?`)],
      dropdown(rng, sentence, word, [pair, `${word}ing`, `${pair}s`]),
      `In this sentence, "${word}" fits because it means ${meaning}.`);
  }
  const others = sample(rng, HOMOPHONES.filter(h => h[0] !== word).map(h => h[3]), 3);
  return one('mc', [txt(`Read the sentence: **${sentence.replace('___', word)}**`), txt(`What is the meaning of the word **${word}** as used here?`)],
    mc(rng, meaning, others),
    `In this sentence, "${word}" means "${meaning}." Its homophone "${pair}" sounds identical but has a different spelling and meaning.`);
};

// ---------- 3.11D.iii Nouns: singular, plural, common, proper ----------
const NOUN_TYPES: [noun: string, kind: string, sentence: string, wrongKinds: [string, string, string], explain: string][] = [
  ['Dallas', 'proper noun', 'Our family drove to ___ for a baseball game.', ['common noun', 'plural noun', 'verb'], 'Dallas is the specific name of a city, so it is a proper noun and capitalized.'],
  ['library', 'singular common noun', 'We checked out three books from the ___.', ['proper noun', 'plural noun', 'adjective'], 'Library is a general name for a place, singular because it refers to one library.'],
  ['children', 'irregular plural noun', 'The ___ laughed while playing freeze tag.', ['singular proper noun', 'singular common noun', 'adverb'], 'Children is an irregular plural noun naming more than one child.'],
  ['Austin', 'proper noun', 'The state capitol building is in ___.', ['common noun', 'plural noun', 'adjective'], 'Austin is a specific city name, making it a proper noun.'],
  ['mice', 'irregular plural noun', 'Two field ___ ran across the barn floor.', ['singular common noun', 'proper noun', 'possessive noun'], 'Mice is the irregular plural form of mouse.'],
  ['pencils', 'regular plural noun', 'Maya sharpened three yellow ___ before the quiz.', ['singular noun', 'proper noun', 'adverb'], 'Pencils names more than one pencil, making it a regular plural noun.'],
  ['Mrs. Garcia', 'proper noun', 'Our third-grade teacher is ___.', ['common noun', 'plural noun', 'adjective'], 'Mrs. Garcia is a specific person\'s name, so it is a proper noun.'],
  ['backpack', 'singular common noun', 'Carlos zipped his blue ___ after school.', ['proper noun', 'plural noun', 'verb'], 'Backpack is a singular common noun naming one everyday object.'],
  ['wolves', 'irregular plural noun', 'A pack of wild ___ called to each other across the hill.', ['singular noun', 'proper noun', 'verb'], 'Wolves is the irregular plural noun formed by changing f to v and adding -es.'],
  ['San Antonio', 'proper noun', 'Tourists visit the historic missions in ___.', ['common noun', 'plural noun', 'pronoun'], 'San Antonio is the specific name of a city, so it is a proper noun.'],
  ['puppies', 'plural common noun', 'Four energetic ___ tumbled playfully in the grass.', ['singular noun', 'proper noun', 'verb'], 'Puppies is a plural common noun naming more than one young dog.'],
  ['cafeteria', 'singular common noun', 'Students ate lunch in the school ___.', ['proper noun', 'plural noun', 'adverb'], 'Cafeteria is a singular common noun naming a general room.'],
];

const nounsGen: Gen = (rng, d) => {
  const [noun, kind, sentence, wrongKinds, explain] = pick(rng, NOUN_TYPES);
  if (d === 1) {
    const isProper = kind.includes('proper');
    return one('mc', [txt(`Read the sentence: **${sentence.replace('___', noun)}**`), txt(`Is **${noun}** a common noun or a proper noun?`)],
      mc(rng, isProper ? 'Proper noun' : 'Common noun', [isProper ? 'Common noun' : 'Proper noun', 'Pronoun', 'Verb']),
      explain);
  }
  return one('mc', [txt(`Read the sentence: **${sentence.replace('___', noun)}**`), txt(`Which term best describes the word **${noun}**?`)],
    mc(rng, kind, wrongKinds), explain);
};

// ---------- 3.11D.iv Adjectives: comparative and superlative ----------
const ADJECTIVES: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['A cheetah runs ___ than a horse.', 'faster', ['fastest', 'more fast', 'fastly'], 'Use the comparative form "-er" when comparing two things.'],
  ['Mount Everest is the ___ mountain on planet Earth.', 'highest', ['higher', 'most high', 'highly'], 'Use the superlative form "-est" when comparing three or more things.'],
  ['My baby brother is ___ than I was at his age.', 'shorter', ['shortest', 'more short', 'shortly'], 'Comparing two people uses the comparative form "-er."'],
  ['Today was the ___ day of the entire winter.', 'coldest', ['colder', 'most cold', 'coldly'], 'Comparing all the days in winter requires the superlative form "-est."'],
  ['A jet plane is ___ than an automobile.', 'louder', ['loudest', 'more loud', 'loudly'], 'Comparing two vehicles uses the comparative "-er."'],
  ['That was the ___ watermelon at the fruit stand.', 'sweetest', ['sweeter', 'most sweet', 'sweetly'], 'Comparing all the watermelons requires the superlative "-est."'],
  ['The blue whale is the ___ animal in the world.', 'biggest', ['bigger', 'most big', 'bigly'], 'Comparing among all animals calls for the superlative "-est."'],
  ['An elephant is ___ than a giraffe.', 'heavier', ['heaviest', 'more heavy', 'heavily'], 'Comparing two animals uses the comparative "-er."'],
  ['Leo is the ___ runner on our track team.', 'quickest', ['quicker', 'most quick', 'quickly'], 'Comparing all runners on the team calls for the superlative form "-est."'],
  ['A rabbit is ___ than a box turtle.', 'faster', ['fastest', 'most fast', 'fastly'], 'Comparing two animals uses the comparative form "-er."'],
];

const adjectivesGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, ADJECTIVES);
  return one('inline', [txt('Choose the correct comparative or superlative adjective to complete the sentence.')],
    dropdown(rng, sentence, right, wrong), why);
};

// ---------- 3.11D.v Adverbs of time and manner ----------
const MANNER_ADVERBS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['The librarian spoke ___ so students could read quietly.', 'softly', ['soft', 'softer', 'softest'], '"Softly" is an adverb of manner describing how the librarian spoke.'],
  ['The kitten purred ___ when petted behind its ears.', 'contentedly', ['content', 'contented', 'more content'], '"Contentedly" is an adverb of manner describing how the kitten purred.'],
  ['Students walked ___ down the hallway in a single line.', 'quietly', ['quiet', 'quietness', 'more quiet'], '"Quietly" is an adverb of manner showing how the students walked.'],
  ['Diego solved the difficult puzzle ___.', 'cleverly', ['clever', 'cleverness', 'cleverest'], '"Cleverly" tells how Diego solved the puzzle.'],
  ['The firefighter acted ___ to rescue the trapped dog.', 'bravely', ['brave', 'bravery', 'bravest'], '"Bravely" is an adverb of manner showing how the firefighter acted.'],
  ['A turtle moved ___ across the warm sidewalk.', 'slowly', ['slow', 'slowness', 'slower'], '"Slowly" is an adverb of manner showing the manner of walking.'],
];

const TIME_ADVERBS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['We visited our grandparents in Fort Worth ___.', 'yesterday', ['quietly', 'bravely', 'sweetly'], '"Yesterday" is an adverb of time telling when the visit took place.'],
  ['The bright morning sun will rise ___ at six o\'clock.', 'soon', ['loudly', 'curiously', 'slowly'], '"Soon" is an adverb of time telling when an event will occur.'],
  ['Our soccer team will practice again ___.', 'tomorrow', ['brightly', 'wildly', 'softly'], '"Tomorrow" is an adverb of time showing when practice happens.'],
  ['Marcus finished his homework ___ so he could play outside.', 'early', ['politely', 'neatly', 'loudly'], '"Early" is an adverb of time indicating when homework was completed.'],
  ['Pack your backpack ___, before you go to sleep.', 'tonight', ['softly', 'slowly', 'sweetly'], '"Tonight" is an adverb of time telling when to pack.'],
  ['The school cafeteria is serving pizza ___.', 'today', ['quietly', 'gently', 'loudly'], '"Today" is an adverb of time stating when pizza is served.'],
];

const adverbsGen: Gen = (rng) => {
  const isManner = rng() < 0.5;
  const [sentence, right, wrong, why] = pick(rng, isManner ? MANNER_ADVERBS : TIME_ADVERBS);
  return one('inline', [txt(`Choose the adverb that best completes the sentence to show ${isManner ? 'how an action is done (manner)' : 'when an action happens (time)'}.`)],
    dropdown(rng, sentence, right, wrong), why);
};

// ---------- 3.11D.vi Prepositions and prepositional phrases ----------
const PREPOSITIONS: [sentence: string, prep: string, wrong: [string, string, string], phrase: string, why: string][] = [
  ['The gray squirrel scampered ___ the oak tree branches.', 'into', ['cheerfully', 'because', 'quick'], 'into the oak tree branches', '"Into" is a preposition showing movement inward.'],
  ['A speckled trout swam ___ the cool river water.', 'through', ['loudly', 'though', 'bright'], 'through the cool river water', '"Through" is a preposition showing motion within a medium.'],
  ['We pitched our green canvas tent ___ the tall pine trees.', 'under', ['gently', 'unless', 'quiet'], 'under the tall pine trees', '"Under" is a preposition showing position beneath something.'],
  ['The red-tailed hawk glided ___ the rocky canyon.', 'above', ['softly', 'since', 'heavy'], 'above the rocky canyon', '"Above" is a preposition indicating a higher position.'],
  ['The hikers rested ___ the shaded park bench.', 'on', ['slowly', 'until', 'cool'], 'on the shaded park bench', '"On" is a preposition indicating location atop a surface.'],
  ['The yellow school bus stopped ___ the corner of 5th Street.', 'at', ['happily', 'while', 'smooth'], 'at the corner of 5th Street', '"At" is a preposition indicating a precise location.'],
  ['Monarch butterflies fluttered ___ the flower garden.', 'around', ['fast', 'whether', 'rough'], 'around the flower garden', '"Around" is a preposition showing movement in a circle or area.'],
  ['Bright yellow dandelions grew ___ the garden fence.', 'along', ['brightly', 'although', 'tall'], 'along the garden fence', '"Along" is a preposition meaning in a line next to something.'],
  ['Elena set her backpack ___ her wooden classroom desk.', 'beside', ['calmly', 'because', 'neat'], 'beside her wooden classroom desk', '"Beside" is a preposition meaning next to.'],
  ['The bluebirds built their nest ___ a hollow fence post.', 'inside', ['chirping', 'so', 'green'], 'inside a hollow fence post', '"Inside" is a preposition showing interior location.'],
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
      `The prepositional phrase is "${phrase}." It begins with the preposition "${prep}" and ends with its object noun.`);
  }
  return one('inline', [txt('Choose the preposition that correctly completes the sentence.')],
    dropdown(rng, sentence, prep, wrong), why);
};

// ---------- 3.11D.vii Pronouns (subjective, objective, possessive) ----------
const PRONOUNS: [sentence: string, right: string, wrong: [string, string, string], kind: string, why: string][] = [
  ['___ made a wooden birdhouse with grandpa.', 'He', ['Him', 'His', 'Himself'], 'subjective pronoun', 'Use the subjective pronoun "He" as the subject of the sentence.'],
  ['Aunt Maria gave the birthday present to ___.', 'me', ['I', 'my', 'myself'], 'objective pronoun', 'Use the objective pronoun "me" as the object of the preposition "to."'],
  ['Carlos brought ___ pet turtle to school for show-and-tell.', 'his', ['him', 'he', 'he\'s'], 'possessive pronoun', '"His" is a possessive pronoun showing ownership of the turtle.'],
  ['The teacher asked ___ to read the next poem aloud.', 'us', ['we', 'our', 'ourselves'], 'objective pronoun', '"Us" is the objective pronoun functioning as the object of the verb "asked."'],
  ['___ visited the Alamo on our fourth-grade field trip.', 'We', ['Us', 'Our', 'Ourselves'], 'subjective pronoun', '"We" is the subjective pronoun needed as the subject doing the visiting.'],
  ['Maya forgot ___ jacket on the playground swing.', 'her', ['she', 'hers', 'she\'s'], 'possessive pronoun', '"Her" shows possession: the jacket belonging to Maya.'],
  ['The principal praised ___ for returning the lost keys.', 'them', ['they', 'their', 'theirs'], 'objective pronoun', '"Them" is the objective pronoun receiving the praise.'],
  ['___ are excited to perform in the winter concert.', 'They', ['Them', 'Their', 'Themselves'], 'subjective pronoun', '"They" is the subjective pronoun acting as the sentence subject.'],
  ['The dog buried ___ favorite bone in the backyard.', 'its', ['it\'s', 'it', 'its\''], 'possessive pronoun', '"Its" (no apostrophe) is the possessive pronoun for an animal.'],
  ['Liam invited Carlos and ___ to his birthday party.', 'me', ['I', 'my', 'myself'], 'objective pronoun', 'Use objective "me" because Liam invited me (object of invited).'],
];

const pronounsGen: Gen = (rng, d) => {
  const [sentence, right, wrong, kind, why] = pick(rng, PRONOUNS);
  if (d === 3) {
    return one('mc', [txt(`In the sentence: **${sentence.replace('___', right)}**`), txt(`What type of pronoun is **${right}**?`)],
      mc(rng, kind, ['verb', 'proper noun', 'preposition']),
      `"${right}" is a ${kind}. ${why}`);
  }
  return one('inline', [txt('Choose the correct pronoun to complete the sentence.')],
    dropdown(rng, sentence, right, wrong), why);
};

// ---------- 3.11D.viii Coordinating conjunctions (and, but, or, so) ----------
const CONJUNCTIONS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Liam wanted to go to the park, ___ it began to rain.', 'but', ['and', 'or', 'so'], '"But" connects two contrasting ideas (wanting to go vs. rain starting).'],
  ['Maya studied hard for the test, ___ she earned an A.', 'so', ['but', 'or', 'and'], '"So" shows a cause-and-effect result of studying hard.'],
  ['Do you want apple juice, ___ would you prefer cold milk?', 'or', ['but', 'and', 'so'], '"Or" presents a choice between two beverage options.'],
  ['Carlos packed his lunch, ___ he tied his sneakers.', 'and', ['but', 'or', 'so'], '"And" connects two related actions in a sequence.'],
  ['The puppy was very small, ___ it barked loudly at the mail carrier.', 'but', ['and', 'or', 'so'], '"But" indicates contrast between small size and loud bark.'],
  ['It was hot outside, ___ we jumped into the swimming pool.', 'so', ['or', 'but', 'and'], '"So" shows the natural result of the hot weather.'],
  ['You may read a chapter book, ___ you may draw a picture.', 'or', ['but', 'and', 'so'], '"Or" introduces two alternative choices.'],
  ['We planted tomato seeds, ___ we watered them daily.', 'and', ['but', 'or', 'so'], '"And" joins two positive connected steps in gardening.'],
];

const conjunctionsGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, CONJUNCTIONS);
  return one('inline', [txt('Choose the coordinating conjunction that best connects the two clauses.')],
    dropdown(rng, sentence, right, wrong), why);
};

// ---------- 3.11D.x Punctuation: commas and apostrophes ----------
const PUNCTUATION_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['We bought apples___ oranges, and bananas at the grocery store.', ',', ['.', ';', '?'], 'Use commas to separate items in a series of three or more things.'],
  ['It was raining outside___ so we played board games indoors.', ',', ['.', '!', '?'], 'Use a comma before a coordinating conjunction (like so) in a compound sentence.'],
  ['The dog wagged its tail when it saw the cat___s toy.', '\'', [',', '.', ''], 'Use an apostrophe to show possession: the cat\'s toy.'],
  ['Maya didn___t forget to turn off her bedroom light.', '\'', [',', '.', ''], 'Use an apostrophe in contractions to replace missing letters: didn\'t.'],
  ['On our road trip, we visited Austin___ Houston, and Dallas.', ',', ['.', '!', '?'], 'Use commas to separate city names in a series.'],
  ['Carlos wanted to ride his scooter___ but the tire was flat.', ',', ['.', ';', '?'], 'Use a comma before "but" when connecting two independent sentences.'],
  ['The children___s backpacks hung neatly on classroom hooks.', '\'', [',', '.', ''], 'Use an apostrophe to show possession for the children: children\'s.'],
  ['They aren___t ready to leave for the museum yet.', '\'', [',', '.', ''], 'Use an apostrophe in the contraction aren\'t.'],
];

const punctuationGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, PUNCTUATION_ITEMS);
  return one('inline', [txt('Choose the correct punctuation mark to replace the blank.')],
    dropdown(rng, sentence, right, wrong), why);
};

// ---------- 3.11D Editing conventions (error detection) ----------
const EDIT_ERRORS: [wrongSentence: string, rightSentence: string, fixDesc: string, wrongFixes: [string, string, string], why: string][] = [
  [
    'Him and Carlos built a sturdy treehouse.',
    'He and Carlos built a sturdy treehouse.',
    'Change "Him" to "He"',
    ['Change "Carlos" to "carlos"', 'Change "built" to "builded"', 'Change "sturdy" to "sturdily"'],
    '"He" is the subject pronoun. You would say "He built," not "Him built."'
  ],
  [
    'The two puppy ran across the green lawn.',
    'The two puppies ran across the green lawn.',
    'Change "puppy" to "puppies"',
    ['Change "two" to "too"', 'Change "ran" to "runned"', 'Change "green" to "greenly"'],
    'The number "two" requires the plural noun "puppies."'
  ],
  [
    'We visited the alamo during spring break.',
    'We visited the Alamo during spring break.',
    'Capitalize "Alamo"',
    ['Change "visited" to "visiting"', 'Capitalize "spring"', 'Add a question mark at the end'],
    'The Alamo is a proper noun naming a specific historic landmark and must be capitalized.'
  ],
  [
    'She didn\'t had no lunch today.',
    'She didn\'t have any lunch today.',
    'Change "no" to "any"',
    ['Change "She" to "Her"', 'Change "didn\'t" to "did\'nt"', 'Capitalize "today"'],
    'Avoid double negatives in standard English: "didn\'t have any."'
  ],
  [
    'The bird sang sweet from the tree branch.',
    'The bird sang sweetly from the tree branch.',
    'Change "sweet" to "sweetly"',
    ['Change "bird" to "birds"', 'Change "sang" to "singed"', 'Capitalize "tree"'],
    'Use the adverb "sweetly" to describe the verb "sang," not the adjective "sweet."'
  ],
];

const conventionsGen: Gen = (rng) => {
  const [wrongSentence, , fixDesc, wrongFixes, why] = pick(rng, EDIT_ERRORS);
  return one('mc', [txt(`Read the sentence with an error: **${wrongSentence}**`), txt('What change should be made to correct the sentence?')],
    mc(rng, fixDesc, wrongFixes), why);
};

// ---------- 3.11B.i Drafting: Organization & Structure ----------
const TRANSITIONS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['___, gather all your ingredients before turning on the oven.', 'First', ['Finally', 'However', 'Therefore'], '"First" signals the beginning step in a sequence of directions.'],
  ['The storm raged outside. ___, our family stayed warm beside the fireplace.', 'Inside', ['Yesterday', 'First', 'Next'], '"Inside" contrasts the indoor location with the outdoor storm.'],
  ['Diego packed his sleeping bag. ___, he zipped up his backpack.', 'Next', ['Finally', 'For example', 'In conclusion'], '"Next" introduces the subsequent sequential action.'],
  ['We spent three hours hiking up the canyon. ___, we reached the summit.', 'Finally', ['First', 'Because', 'Instead'], '"Finally" signals the culminating final event after effort.'],
  ['Butterflies sip sweet nectar. ___, bees visit blossoms for pollen.', 'Similarly', ['Instead', 'First', 'Finally'], '"Similarly" compares two related natural behaviors.'],
];

const transitionsGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, TRANSITIONS);
  return one('inline', [txt('Choose the transition word that best introduces the sentence in the paragraph.')],
    dropdown(rng, sentence, right, wrong), why);
};

export const EDITING_GENERATORS: Record<string, Gen[]> = {
  'rla:3.3D': [homophoneMeaning],
  'rla:3.11B.i': [transitionsGen],
  'rla:3.11D': [conventionsGen],
  'rla:3.11D.iii': [nounsGen],
  'rla:3.11D.iv': [adjectivesGen],
  'rla:3.11D.v': [adverbsGen],
  'rla:3.11D.vi': [prepositionalGen],
  'rla:3.11D.vii': [pronounsGen],
  'rla:3.11D.viii': [conjunctionsGen],
  'rla:3.11D.x': [punctuationGen],
};
