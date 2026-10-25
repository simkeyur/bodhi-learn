// Grade 2 editing generators: 2.11C, 2.11D.i-xi.

import { pick, shuffle, type Rng } from '../../rng.ts';
import { inline, one, txt, type Gen } from '../../generators/build.ts';
import type { InlinePart } from '../../types.ts';

function dropdown(rng: Rng, sentence: string, right: string, wrong: string[]): InlinePart {
  const options = shuffle(rng, [right, ...wrong]);
  const [before, after] = sentence.split('___');
  return inline([before, { blank: 0 }, after], [{ options, correct: options.indexOf(right) }]);
}

// 2.11D.i Complete sentences and subject-verb agreement
const SVA_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['The two puppies ___ across the green yard.', 'run', ['runs', 'running', 'is running'], 'Plural subject (puppies) takes plural verb run.'],
  ['My sister ___ sweet red apples at the farm.', 'picks', ['pick', 'picking', 'are pick'], 'Singular subject (sister) takes singular verb picks.'],
  ['The birds ___ high in the blue sky.', 'fly', ['flies', 'flying', 'is flying'], 'Plural subject (birds) takes plural verb fly.'],
  ['Carlos ___ his bicycle to school every morning.', 'rides', ['ride', 'riding', 'are ride'], 'Singular subject (Carlos) takes singular verb rides.'],
  ['The students ___ quietly during reading time.', 'read', ['reads', 'reading', 'is reading'], 'Plural subject (students) takes plural verb read.'],
  ['Our teacher ___ a cheerful morning song.', 'sings', ['sing', 'singing', 'are sing'], 'Singular subject (teacher) takes singular verb sings.'],
  ['The little duck ___ across the pond.', 'swims', ['swim', 'swimming', 'are swim'], 'Singular subject (duck) takes singular verb swims.'],
  ['The horses ___ in the large grassy pasture.', 'graze', ['grazes', 'grazing', 'is grazing'], 'Plural subject (horses) takes plural verb graze.'],
];
const svaGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, SVA_ITEMS);
  return one('inline', [txt('Choose the verb that agrees with the subject.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.11D.ii Verb tenses: past, present, future
const TENSE_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Yesterday, Mia ___ her grandparents in Dallas.', 'visited', ['visits', 'will visit', 'visiting'], 'Yesterday signals past tense: visited.'],
  ['Tomorrow, our class ___ to the zoo on a yellow bus.', 'will go', ['went', 'goes', 'going'], 'Tomorrow signals future tense: will go.'],
  ['Every afternoon, Leo ___ his playful dog.', 'feeds', ['fed', 'will feed', 'feeding'], 'Every afternoon shows present habitual action: feeds.'],
  ['Last night, the stars ___ brightly in the clear sky.', 'shone', ['shine', 'will shine', 'shining'], 'Last night shows past tense: shone.'],
  ['Next week, Sam ___ his seventh birthday.', 'will celebrate', ['celebrated', 'celebrates', 'celebrating'], 'Next week points to the future: will celebrate.'],
  ['Right now, the baker ___ fresh bread in the oven.', 'bakes', ['baked', 'will bake', 'baking'], 'Right now shows present tense: bakes.'],
  ['Yesterday, we ___ a big brown toad near the garden.', 'found', ['find', 'will find', 'finded'], 'Yesterday requires past tense found.'],
  ['Soon, the baby birds ___ how to fly.', 'will learn', ['learned', 'learns', 'learning'], 'Soon signals future tense: will learn.'],
];
const tenseGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, TENSE_ITEMS);
  return one('inline', [txt('Choose the verb with the correct tense.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.11D.iii Singular, plural, common, and proper nouns
const NOUN_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['We visited our cousins in ___ last summer.', 'Austin', ['austin', 'Austen', 'austen'], 'Capitalize proper city names: Austin.'],
  ['Three small ___ played tag on the grass.', 'children', ['childs', 'childes', 'childrens'], 'The irregular plural of child is children.'],
  ['The farmer milked five brown ___ in the barn.', 'cows', ['cowes', 'cow\'s', 'cowe'], 'Add -s to make cow plural: cows.'],
  ['Our dentist is ___ on Main Street.', 'Dr. Lee', ['dr. lee', 'Dr. lee', 'dr. Lee'], 'Capitalize title and proper name: Dr. Lee.'],
  ['Two fluffy white ___ hopped into the garden.', 'bunnies', ['bunnys', 'bunny\'s', 'bunnyes'], 'Change y to i and add -es: bunnies.'],
  ['We celebrate ___ with family every November.', 'Thanksgiving', ['thanksgiving', 'ThanksGiving', 'thanks giving'], 'Capitalize the name of a holiday: Thanksgiving.'],
  ['The dog chased three gray ___ across the barn floor.', 'mice', ['mouses', 'mices', 'mouse'], 'The irregular plural of mouse is mice.'],
  ['The baby brushed her tiny baby ___.', 'teeth', ['tooths', 'toothes', 'tooth'], 'The irregular plural of tooth is teeth.'],
];
const nounGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, NOUN_ITEMS);
  return one('inline', [txt('Choose the correctly written noun.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.11D.iv Adjectives and articles (a, an, the)
const ADJ_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Mom peeled ___ sweet orange for snack.', 'a', ['an', 'thee', 'and'], 'Use a before words starting with a consonant sound.'],
  ['We saw ___ enormous elephant at the zoo.', 'an', ['a', 'thee', 'and'], 'Use an before words starting with a vowel sound: an enormous.'],
  ['This puppy is the ___ one in the whole litter.', 'smallest', ['smaller', 'small', 'most small'], 'Use -est when comparing three or more: smallest.'],
  ['Leo is ___ than his older brother.', 'taller', ['tallest', 'more tall', 'tall'], 'Use -er when comparing two people: taller.'],
  ['She wore ___ warm red scarf around her neck.', 'a', ['an', 'thee', 'one'], 'Use a before the consonant sound in warm: a warm red scarf.'],
  ['He ate ___ apple slice from the plate.', 'an', ['a', 'thee', 'and'], 'Use an before vowel sound: an apple.'],
  ['The sun is the ___ star in our solar system.', 'brightest', ['brighter', 'bright', 'more bright'], 'Use superlative -est for comparing all stars: brightest.'],
  ['A cheetah runs ___ than a lion.', 'faster', ['fastest', 'more fast', 'fast'], 'Use comparative -er for two animals: faster.'],
];
const adjGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, ADJ_ITEMS);
  return one('inline', [txt('Choose the correct adjective or article.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.11D.v Adverbs of time and place
const ADV_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['The children played tag ___ in the sunny backyard.', 'outside', ['slow', 'bright', 'quick'], 'Outside is an adverb of place telling where they played.'],
  ['Please put your books ___ on the wooden shelf.', 'here', ['careful', 'loud', 'soft'], 'Here is an adverb of place telling where to put the books.'],
  ['The school bus will arrive at the corner ___.', 'soon', ['quiet', 'happy', 'loud'], 'Soon is an adverb of time telling when the bus will arrive.'],
  ['We are going to the public library ___.', 'today', ['slow', 'careful', 'glad'], 'Today is an adverb of time telling when.'],
  ['The brown rabbit hid ___ inside the hollow log.', 'inside', ['noisy', 'gentle', 'slow'], 'Inside is an adverb of place telling where the rabbit hid.'],
  ['Finish your breakfast before we leave ___.', 'now', ['quick', 'loud', 'soft'], 'Now is an adverb of time telling when.'],
  ['Look ___ to see the colorful rainbow in the sky.', 'upward', ['happy', 'slow', 'quiet'], 'Upward is an adverb of place telling which direction to look.'],
  ['The parade will begin ___ at noon.', 'promptly', ['outside', 'there', 'here'], 'Promptly tells time manner at noon.'],
];
const advGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, ADV_ITEMS);
  return one('inline', [txt('Choose the adverb of time or place that best completes the sentence.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.11D.vi Prepositions and prepositional phrases
const PREP_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['The cat slept comfortably ___ the soft kitchen rug.', 'on', ['with', 'of', 'for'], 'On shows the position atop the rug.'],
  ['A red bird perched ___ the tall oak branch.', 'in', ['at', 'of', 'to'], 'In shows the location inside the branches.'],
  ['The soccer ball rolled ___ the wooden garden bench.', 'under', ['with', 'at', 'of'], 'Under shows the location beneath the bench.'],
  ['The children walked ___ the classroom door quietly.', 'through', ['about', 'of', 'with'], 'Through shows movement into and out of the doorway.'],
  ['The gray squirrel scampered ___ the wooden fence.', 'along', ['of', 'in', 'to'], 'Along describes movement beside or on top of the fence.'],
  ['We ate lunch ___ the shady pecan tree.', 'beside', ['of', 'for', 'with'], 'Beside means next to the tree.'],
  ['She dove smoothly ___ the cool swimming pool.', 'into', ['on', 'of', 'at'], 'Into shows movement entering the water.'],
  ['He hid the secret treasure box ___ the floorboards.', 'beneath', ['with', 'of', 'at'], 'Beneath means under the floorboards.'],
];
const prepGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, PREP_ITEMS);
  return one('inline', [txt('Choose the correct preposition to complete the sentence.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.11D.vii Pronouns
const PRONOUN_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Mia and ___ built a tall block tower together.', 'I', ['me', 'him', 'her'], 'Use subject pronoun I: Mia and I built.'],
  ['The teacher gave the blue ribbon to Carlos and ___.', 'me', ['I', 'he', 'she'], 'Use object pronoun me: gave to me.'],
  ['The boys packed ___ backpacks before leaving.', 'their', ['there', 'they\'re', 'them'], 'Their shows ownership of backpacks.'],
  ['___ is reading an exciting book about dinosaurs.', 'She', ['Her', 'Them', 'Him'], 'Use subject pronoun She at the start of the sentence.'],
  ['Dad took ___ to the ice cream shop after the game.', 'us', ['we', 'they', 'he'], 'Use object pronoun us after the verb took.'],
  ['The bird flapped ___ wings and soared into the sky.', 'its', ['it\'s', 'its\'', 'their'], 'Its shows possession without an apostrophe.'],
  ['___ went to the playground together at recess.', 'They', ['Them', 'Their', 'Him'], 'Use subject pronoun They before went.'],
  ['Grandma made delicious cookies for my sister and ___.', 'me', ['I', 'he', 'she'], 'Use object pronoun me: for me.'],
];
const pronounGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, PRONOUN_ITEMS);
  return one('inline', [txt('Choose the correct pronoun.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.11D.viii Coordinating conjunctions
const CONJ_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Leo loves soccer, ___ he plays every Saturday.', 'and', ['but', 'or', 'so'], 'And connects two related positive thoughts.'],
  ['Sam wanted to play outside, ___ it started to rain.', 'but', ['and', 'so', 'or'], 'But shows a contrast between wanting to play and rain.'],
  ['Would you like apple juice ___ cold water?', 'or', ['but', 'so', 'and'], 'Or offers a choice between two drinks.'],
  ['It was cold outside, ___ Emma put on her heavy jacket.', 'so', ['or', 'but', 'and'], 'So shows the result of being cold.'],
  ['The sun was bright, ___ a cool breeze was blowing.', 'and', ['or', 'so', 'for'], 'And adds another detail about the weather.'],
  ['He looked for his pencil, ___ he could not find it.', 'but', ['so', 'or', 'and'], 'But contrasts looking with not finding.'],
  ['You may pick a green apple ___ a red apple.', 'or', ['so', 'but', 'and'], 'Or presents an option.'],
  ['The puppy was hungry, ___ he ate all his food quickly.', 'so', ['but', 'or', 'and'], 'So indicates the consequence of being hungry.'],
];
const conjGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, CONJ_ITEMS);
  return one('inline', [txt('Choose the correct conjunction (and, but, or, so).')], dropdown(rng, sentence, right, wrong), why);
};

// 2.11D.ix Capitalization: days, months, letter greetings
const CAP_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Our soccer game is on ___ afternoon.', 'Saturday', ['saturday', 'Saterday', 'saterday'], 'Capitalize days of the week: Saturday.'],
  ['School begins in ___ after summer vacation.', 'August', ['august', 'Auguest', 'auguest'], 'Capitalize months of the year: August.'],
  ['Every ___, we have a spelling test in class.', 'Friday', ['friday', 'Fryday', 'fryday'], 'Capitalize days of the week: Friday.'],
  ['In ___, colorful flowers bloom across Texas.', 'April', ['april', 'Aprile', 'aprile'], 'Capitalize the name of the month: April.'],
  ['The letter started with: ___,', 'Dear Grandma', ['dear grandma', 'Dear grandma', 'dear Grandma'], 'Capitalize both words in a letter greeting: Dear Grandma.'],
  ['She ended her thank-you note with: ___,', 'Your friend', ['your friend', 'Your Friend', 'your Friend'], 'Capitalize the first word in a letter closing: Your friend.'],
  ['We celebrate the new year on the first day of ___.', 'January', ['january', 'Janury', 'janury'], 'Capitalize the name of the month: January.'],
  ['He wrote a nice letter that began: ___,', 'Dear Uncle Ben', ['dear uncle ben', 'Dear uncle ben', 'dear Uncle ben'], 'Capitalize titles and names in a greeting: Dear Uncle Ben.'],
];
const capGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, CAP_ITEMS);
  return one('inline', [txt('Choose the correctly capitalized word or letter greeting.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.11D.x Punctuation: end marks, apostrophes, commas
const PUNC_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['We bought apples, bananas___ and grapes at the store.', ',', ['.', '!', '?'], 'Use commas to separate items in a series.'],
  ['Our family moved to Austin on July 4___ 2024.', ',', ['.', '!', '?'], 'Put a comma between the day and year in dates.'],
  ['Where did you put my red storybook___', '?', ['.', '!', ','], 'A question sentence ends with a question mark.'],
  ['Watch out for the falling branch___', '!', ['.', '?', ','], 'An urgent warning ends with an exclamation point.'],
  ['The dog ate his crunchy food___', '.', ['?', '!', ','], 'A simple telling sentence ends with a period.'],
  ['Carlos said that he ___ come to the party.', 'can\'t', ['cant', 'ca\'nt', 'cann\'t'], 'Use an apostrophe in contractions: can\'t.'],
  ['Mia packed pencils, markers___ and scissors in her box.', ',', ['.', '!', '?'], 'Use a comma before the conjunction in a list.'],
  ['Today is Monday, October 14___ 2024.', ',', ['.', '!', '?'], 'A comma separates the date and year.'],
];
const puncGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, PUNC_ITEMS);
  return one('inline', [txt('Choose the correct punctuation mark.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.11D.xi Spelling high-frequency words in editing
const EDIT_SPELL_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['We stayed inside ___ it was storming outside.', 'because', ['becuase', 'becaus', 'becoz'], 'Spell because: b-e-c-a-u-s-e.'],
  ['Emma played with her best ___ at recess.', 'friend', ['freind', 'frend', 'frind'], 'Remember i before e in friend.'],
  ['Many ___ came to the school music concert.', 'people', ['peaple', 'poeple', 'peple'], 'Spell people: p-e-o-p-l-e.'],
  ['He ___ solve the math problem on the board.', 'could', ['cud', 'coulld', 'coold'], 'Spell could: c-o-u-l-d.'],
  ['She ___ like to read another story before bed.', 'would', ['wud', 'woulld', 'woold'], 'Spell would: w-o-u-l-d.'],
  ['Students ___ always walk quietly in the hallway.', 'should', ['shud', 'shoulld', 'shoold'], 'Spell should: s-h-o-u-l-d.'],
  ['Please write the correct ___ on the blank line.', 'answer', ['anser', 'answre', 'answear'], 'Spell answer: a-n-s-w-e-r.'],
  ['The garden had many ___ yellow flowers.', 'pretty', ['pritty', 'prety', 'preddy'], 'Spell pretty: p-r-e-t-t-y.'],
];
const editSpellGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, EDIT_SPELL_ITEMS);
  return one('inline', [txt('Choose the correctly spelled word.')], dropdown(rng, sentence, right, wrong), why);
};

// 2.11C Revising sentences (combining/clarity)
const REVISE_ITEMS: [s1: string, s2: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Leo found a lost puppy.', 'The puppy had a blue collar.', 'Leo found a lost puppy with a blue collar.', ['Leo found a puppy, it had a blue collar.', 'Leo found a puppy and the puppy had a blue collar and was lost.', 'A lost puppy was found by Leo having blue collar.'], 'Combines the two short sentences into one smooth thought.'],
  ['Mia watered the flower seeds.', 'The seeds grew into tall sunflowers.', 'Mia watered the seeds until they grew into tall sunflowers.', ['Mia watered the seeds, they grew tall.', 'Mia watered and seeds grew and flowers were tall.', 'Watering the seeds was what Mia did and flowers grew.'], 'Uses until to connect the action smoothly to the result.'],
  ['Sam built a kite.', 'He flew it at the park.', 'Sam built a kite and flew it at the park.', ['Sam built a kite, he flew it.', 'Sam built a kite and he flew it and at the park he was.', 'A kite was built by Sam and flown at the park.'], 'Combines shared subject Sam smoothly with and.'],
  ['The turtle walked slowly.', 'The turtle won the race.', 'Although the turtle walked slowly, he won the race.', ['The turtle walked slow, he won the race.', 'The turtle walked and won and was slow.', 'Slowly walking, the race was won.'], 'Uses Although to show contrast clearly.'],
  ['The butterfly rested on a leaf.', 'The leaf was green.', 'The butterfly rested on a green leaf.', ['The butterfly rested, the leaf was green.', 'The butterfly rested on a leaf and it was green.', 'On a leaf that was green the butterfly rested on it.'], 'Places the descriptive adjective green right before leaf.'],
  ['We packed sandwiches.', 'We packed fresh apples.', 'We packed sandwiches and fresh apples.', ['We packed sandwiches, we packed apples.', 'Sandwiches were packed and also apples were packed too.', 'We packed sandwiches and apples was what we packed.'], 'Combines the two items into a simple list.'],
  ['The rain stopped.', 'The children ran outside to play.', 'When the rain stopped, the children ran outside to play.', ['The rain stopped, they ran outside.', 'The rain stopped and children ran outside and played outside.', 'Stopping the rain, the children ran outside.'], 'Uses When to establish the time relationship clearly.'],
  ['Carlos found a shiny coin.', 'He put it in his pocket.', 'Carlos found a shiny coin and put it in his pocket.', ['Carlos found a coin, he put it in his pocket.', 'Carlos found a coin and Carlos put the coin in his pocket.', 'A shiny coin was found by Carlos and put in his pocket.'], 'Combines the two actions with a compound predicate.'],
];
const reviseGen: Gen = (rng) => {
  const [s1, s2, right, wrong, why] = pick(rng, REVISE_ITEMS);
  const options = shuffle(rng, [right, ...wrong]);
  return one('inline', [txt(`What is the best way to combine these two sentences?\n\n"${s1}" and "${s2}"`)],
    inline(['', { blank: 0 }, ''], [{ options, correct: options.indexOf(right) }]), why);
};

export const G2_EDITING_GENERATORS: Record<string, Gen[]> = {
  'rla:2.11C': [reviseGen],
  'rla:2.11D.i': [svaGen],
  'rla:2.11D.ii': [tenseGen],
  'rla:2.11D.iii': [nounGen],
  'rla:2.11D.iv': [adjGen],
  'rla:2.11D.v': [advGen],
  'rla:2.11D.vi': [prepGen],
  'rla:2.11D.vii': [pronounGen],
  'rla:2.11D.viii': [conjGen],
  'rla:2.11D.ix': [capGen],
  'rla:2.11D.x': [puncGen],
  'rla:2.11D.xi': [editSpellGen],
};
