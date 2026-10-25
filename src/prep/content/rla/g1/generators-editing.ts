// Grade 1 editing generators: 1.11C, 1.11D.i-x.

import { pick, shuffle, type Rng } from '../../rng.ts';
import { inline, one, txt, type Gen } from '../../generators/build.ts';
import type { InlinePart } from '../../types.ts';

function dropdown(rng: Rng, sentence: string, right: string, wrong: string[]): InlinePart {
  const options = shuffle(rng, [right, ...wrong]);
  const [before, after] = sentence.split('___');
  return inline([before, { blank: 0 }, after], [{ options, correct: options.indexOf(right) }]);
}

// 1.11C Revising: adding details
const REVISE_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['The ___ kitten drank sweet milk.', 'fluffy yellow', ['fast run', 'ran milk', 'play yard'], 'Fluffy yellow adds descriptive detail about the kitten.'],
  ['We picked five ___ apples from the tree.', 'sweet red', ['eat tree', 'apple run', 'pie jump'], 'Sweet red adds color and taste details.'],
  ['The ___ frog jumped into the pond.', 'little green', ['water jump', 'pond hop', 'big leap swim'], 'Little green tells the size and color of the frog.'],
  ['Mia wore a ___ hat in the winter snow.', 'warm wool', ['cold hat', 'wear snow', 'hat head'], 'Warm wool describes what the hat feels like and is made of.'],
  ['A ___ bird sang in the tall oak tree.', 'cheerful blue', ['tree fly', 'sing morning', 'wing hop'], 'Cheerful blue tells what kind of bird it is.'],
  ['He read a ___ book before bed.', 'funny animal', ['book bed', 'read page', 'sleep story'], 'Funny animal describes the topic and tone of the book.'],
  ['They built a ___ castle in the sandbox.', 'tall sand', ['play sand', 'dig hole', 'bucket toy'], 'Tall sand tells what kind of castle was built.'],
  ['We ate ___ soup on a cold rainy day.', 'hot noodle', ['soup bowl', 'eat hot', 'spoon meal'], 'Hot noodle describes what kind of soup they ate.'],
];
const reviseGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, REVISE_ITEMS);
  return one('inline', [txt('Choose the best descriptive words to add detail to the sentence.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.11D.i Complete sentences and subject-verb agreement
const SVA_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['The puppy ___ with the blue ball.', 'plays', ['play', 'playing', 'are play'], 'Singular subject (puppy) takes plays.'],
  ['Two ducks ___ across the pond.', 'swim', ['swims', 'swimming', 'is swim'], 'Plural subject (ducks) takes swim.'],
  ['My sister ___ her bike on the sidewalk.', 'rides', ['ride', 'riding', 'are ride'], 'Singular subject (sister) takes rides.'],
  ['The children ___ books in the library.', 'read', ['reads', 'reading', 'is read'], 'Plural subject (children) takes read.'],
  ['The sun ___ brightly in the morning sky.', 'shines', ['shine', 'shining', 'are shine'], 'Singular subject (sun) takes shines.'],
  ['The bees ___ around the sweet garden flowers.', 'buzz', ['buzzes', 'buzzing', 'is buzz'], 'Plural subject (bees) takes buzz.'],
  ['Carlos ___ a green apple for snack.', 'eats', ['eat', 'eating', 'are eat'], 'Singular subject (Carlos) takes eats.'],
  ['The horses ___ across the grassy field.', 'run', ['runs', 'running', 'is run'], 'Plural subject (horses) takes run.'],
];
const svaGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, SVA_ITEMS);
  return one('inline', [txt('Choose the verb that agrees with the subject.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.11D.ii Past and present verb tense
const TENSE_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Yesterday, Sam ___ his grandmother.', 'helped', ['helps', 'helping', 'will help'], 'Yesterday tells us the action happened in the past: helped.'],
  ['Today, the cat ___ in the warm sunshine.', 'naps', ['napped', 'nap', 'will nap'], 'Today tells us the action happens in the present: naps.'],
  ['Last night, the stars ___ brightly.', 'shone', ['shine', 'shining', 'shines'], 'Last night shows past action: shone.'],
  ['Right now, Emma ___ a picture with crayons.', 'draws', ['drew', 'drawn', 'drawing'], 'Right now shows present action: draws.'],
  ['Yesterday, we ___ a big brown toad.', 'saw', ['see', 'seeing', 'seen'], 'Yesterday shows past action: saw.'],
  ['Every morning, Dad ___ sweet pancakes.', 'makes', ['made', 'making', 'make'], 'Every morning shows regular present action: makes.'],
  ['Yesterday, the dog ___ over the wooden fence.', 'jumped', ['jumps', 'jumping', 'jump'], 'Yesterday shows past action: jumped.'],
  ['Now, the baby ___ with a soft toy.', 'smiles', ['smiled', 'smiling', 'smile'], 'Now indicates present action: smiles.'],
];
const tenseGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, TENSE_ITEMS);
  return one('inline', [txt('Choose the verb with the correct tense.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.11D.iii Singular, plural, common, proper nouns
const NOUN_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['We visited our friend ___ on Saturday.', 'Leo', ['leo', 'le-o', 'LEO'], 'Capitalize the proper name: Leo.'],
  ['I saw three little ___ in the nest.', 'birds', ['bird', 'birdes', 'bird\'s'], 'Plural for more than one bird is birds.'],
  ['Our family lives in ___ near the park.', 'Texas', ['texas', 'tex-as', 'Tex-as'], 'Proper noun for our state is Texas.'],
  ['The dog chased two playful ___ in the grass.', 'cats', ['cat', 'cates', 'cat\'s'], 'Add -s to form the plural: cats.'],
  ['My teacher is ___ at our school.', 'Mrs. Davis', ['mrs. davis', 'mrs Davis', 'Mrs davis'], 'Proper names and titles are capitalized: Mrs. Davis.'],
  ['Four red ___ sat on the kitchen counter.', 'apples', ['apple', 'applese', 'apple\'s'], 'Plural of apple is apples.'],
  ['We celebrate the Fourth of ___ with fireworks.', 'July', ['july', 'Ju-ly', 'JULY'], 'Months are proper nouns: July.'],
  ['Two brown ___ hopped near the tall bush.', 'rabbits', ['rabbit', 'rabbites', 'rabbit\'s'], 'Plural of rabbit is rabbits.'],
];
const nounGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, NOUN_ITEMS);
  return one('inline', [txt('Choose the correctly written noun.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.11D.iv Adjectives and articles (a, an, the)
const ADJ_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['She ate ___ orange after her lunch.', 'an', ['a', 'the a', 'one the'], 'Use an before a word starting with a vowel sound: an orange.'],
  ['Carlos rode ___ new red scooter.', 'a', ['an', 'and', 'at'], 'Use a before consonant sounds: a new red scooter.'],
  ['We looked at ___ bright moon in the night sky.', 'the', ['a an', 'an', 'of'], 'The points to the specific moon in the sky.'],
  ['He saw ___ big owl sitting in the tree.', 'a', ['an', 'and', 'on'], 'Use a before the consonant sound in big.'],
  ['Mia peeled ___ egg for breakfast.', 'an', ['a', 'at', 'and'], 'Egg starts with a vowel sound, so use an.'],
  ['The puppy ran on its ___ little paws.', 'tiny', ['running', 'paws', 'under'], 'Tiny is an adjective that describes size.'],
  ['We wore our ___ coats in the chilly wind.', 'warm', ['warmly', 'warming', 'warmth'], 'Warm describes the coats.'],
  ['The garden was filled with ___ red roses.', 'pretty', ['prettily', 'running', 'slowly'], 'Pretty is an adjective describing the roses.'],
];
const adjArticleGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, ADJ_ITEMS);
  return one('inline', [txt('Choose the correct article or adjective.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.11D.v Adverbs that convey time (now, today, soon, yesterday)
const ADVERB_TIME_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['___ we are going to the zoo on a yellow bus.', 'Today', ['Quickly', 'Loudly', 'Blue'], 'Today tells when the trip happens.'],
  ['Clean up your toys ___, please.', 'now', ['slow', 'happy', 'loud'], 'Now tells when to clean up: right at this moment.'],
  ['The school bell will ring very ___.', 'soon', ['green', 'quiet', 'happy'], 'Soon tells when the bell will ring.'],
  ['___ it rained, so we played inside the house.', 'Yesterday', ['Softly', 'Yellow', 'Under'], 'Yesterday tells that it happened the day before.'],
  ['We will eat lunch ___ after recess.', 'soon', ['careful', 'loud', 'soft'], 'Soon shows time in the near future.'],
  ['I am ready to read my book ___.', 'now', ['blue', 'table', 'sweet'], 'Now tells the time of the action.'],
  ['___ my grandmother baked sweet cookies.', 'Yesterday', ['Fast', 'Gentle', 'Red'], 'Yesterday tells when the baking happened.'],
  ['The sun is shining bright and warm ___.', 'today', ['slowly', 'green', 'upstairs'], 'Today tells what day the sun is shining.']
];
const adverbTimeGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, ADVERB_TIME_ITEMS);
  return one('inline', [txt('Choose the word that tells when something happens.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.11D.vi Prepositions (in, on, under, with)
const PREP_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['The brown toad hid ___ the flat stone.', 'under', ['into with', 'above to', 'on at'], 'Under shows the toad is below the stone.'],
  ['Put the clean cups ___ the kitchen table.', 'on', ['at into', 'with of', 'to on'], 'On tells the cups are resting on top of the table.'],
  ['The fish swim happily ___ the clear pond.', 'in', ['on to', 'with up', 'at under'], 'In tells the fish are inside the water.'],
  ['Mia walked to the playground ___ her brother.', 'with', ['under', 'in of', 'on at'], 'With means accompanying her brother.'],
  ['The sleeping cat curled up ___ the soft blanket.', 'under', ['off', 'by in', 'with to'], 'Under means underneath the blanket.'],
  ['He put his pencils ___ his yellow backpack.', 'in', ['on off', 'to with', 'under on'], 'In means inside the backpack.'],
  ['A shiny bird perched ___ the high branch.', 'on', ['in under', 'with of', 'down to'], 'On means resting upon the branch.'],
  ['Leo played catch ___ his loyal dog.', 'with', ['in on', 'under', 'at in'], 'With shows who he played with.'],
];
const prepGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, PREP_ITEMS);
  return one('inline', [txt('Choose the correct preposition to complete the sentence.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.11D.vii Pronouns (I, me, he, she, they, we)
const PRONOUN_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Carlos was tired, so ___ took a quiet nap.', 'he', ['him', 'his', 'her'], 'Use subject pronoun he for Carlos.'],
  ['Mia loves books, and ___ reads every day.', 'she', ['her', 'hers', 'him'], 'Use subject pronoun she for Mia.'],
  ['The children smiled because ___ loved the puppy.', 'they', ['them', 'their', 'him'], 'Use plural subject pronoun they for the children.'],
  ['Dad gave the toy truck to ___.', 'me', ['I', 'he', 'she'], 'Use object pronoun me after the preposition to.'],
  ['Sam and ___ walked together to school.', 'I', ['me', 'us', 'him'], 'Use subject pronoun I in a compound subject.'],
  ['Mom helped ___ tie my shoes.', 'me', ['I', 'he', 'we'], 'Use object pronoun me as the object of helped.'],
  ['___ are going to the park this afternoon.', 'We', ['Us', 'Me', 'Him'], 'Use subject pronoun We at the start of the sentence.'],
  ['The puppy wagged ___ tail happily.', 'its', ['it', 'it\'s', 'they'], 'Possessive pronoun for an animal is its.'],
];
const pronounGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, PRONOUN_ITEMS);
  return one('inline', [txt('Choose the correct pronoun.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.11D.viii Capitalize sentence beginning and pronoun "I"
const CAP_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['___ love to paint colorful pictures.', 'I', ['i', 'eye', 'I\'m'], 'The pronoun I is always capitalized.'],
  ['___ is my favorite dog.', 'This', ['this', 'THIS', 'th-is'], 'Always capitalize the first word of a sentence: This.'],
  ['My sister and ___ rode bikes.', 'I', ['i', 'me', 'my'], 'Always capitalize the pronoun I.'],
  ['___ little kitten drank cold milk.', 'The', ['the', 'tHe', 'THE'], 'Always capitalize the first word of a sentence: The.'],
  ['___ like to read stories before bed.', 'I', ['i', 'me', 'eye'], 'The pronoun I must be capitalized.'],
  ['___ can run fast in the yard.', 'We', ['we', 'wE', 'WE'], 'Capitalize the first word of a sentence: We.'],
  ['Sam said that ___ could play outside.', 'I', ['i', 'me', 'my'], 'The pronoun I is capitalized even in the middle of a sentence.'],
  ['___ sunny morning was warm and bright.', 'A', ['a', 'an', 'An a'], 'Capitalize the first letter of the sentence: A.'],
];
const capGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, CAP_ITEMS);
  return one('inline', [txt('Choose the correctly capitalized word.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.11D.ix End punctuation (. ! ?)
const PUNC_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Where is my red backpack___', '?', ['.', '!', ','], 'A question ends with a question mark.'],
  ['The dog chased the ball across the grass___', '.', ['?', ',', ':'], 'A telling sentence (statement) ends with a period.'],
  ['Watch out for the falling branch___', '!', ['?', '.', ','], 'An urgent or excited sentence ends with an exclamation point.'],
  ['Do you want to play a game with me___', '?', ['.', '!', ';'], 'An asking sentence ends with a question mark.'],
  ['We planted green beans in the garden___', '.', ['?', '!', ','], 'A statement ends with a period.'],
  ['What a wonderful surprise___', '!', ['?', '.', ','], 'An excited exclamation ends with an exclamation mark.'],
  ['How old is your puppy___', '?', ['.', '!', ','], 'A question asking how old ends with a question mark.'],
  ['The yellow sun is warm today___', '.', ['?', '!', ','], 'A simple statement ends with a period.'],
];
const puncGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, PUNC_ITEMS);
  return one('inline', [txt('Choose the correct end punctuation mark.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.11D.x Spelling grade 1 words in editing context
const SPELL_EDIT_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['We ___ to the park after school.', 'went', ['wint', 'wente', 'wnt'], 'Went is spelled w-e-n-t.'],
  ['I ___ playing games with my friends.', 'like', ['lik', 'liyk', 'lyke'], 'Like is spelled l-i-k-e with silent e.'],
  ['The children ___ outside in the sunshine.', 'play', ['pla', 'plai', 'pley'], 'Play is spelled p-l-a-y.'],
  ['Can you ___ the tiny yellow bird?', 'see', ['se', 'sea', 'si'], 'See is spelled s-e-e.'],
  ['She has a ___ new bicycle.', 'good', ['gud', 'goode', 'gode'], 'Good is spelled g-o-o-d.'],
  ['He put ___ books on the wooden desk.', 'his', ['hiz', 'hes', 'hiss'], 'His is spelled h-i-s.'],
  ['The puppy ___ into the mud puddle.', 'jumped', ['jumpt', 'jumed', 'jumpid'], 'Add -ed to jump to make jumped.'],
  ['They sat by ___ front door.', 'the', ['th', 'teh', 'tha'], 'The is spelled t-h-e.'],
];
const spellEditGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, SPELL_EDIT_ITEMS);
  return one('inline', [txt('Choose the correctly spelled word to complete the sentence.')], dropdown(rng, sentence, right, wrong), why);
};

export const G1_EDITING_GENERATORS: Record<string, Gen[]> = {
  'rla:1.11C': [reviseGen],
  'rla:1.11D.i': [svaGen],
  'rla:1.11D.ii': [tenseGen],
  'rla:1.11D.iii': [nounGen],
  'rla:1.11D.iv': [adjArticleGen],
  'rla:1.11D.v': [adverbTimeGen],
  'rla:1.11D.vi': [prepGen],
  'rla:1.11D.vii': [pronounGen],
  'rla:1.11D.viii': [capGen],
  'rla:1.11D.ix': [puncGen],
  'rla:1.11D.x': [spellEditGen],
};
