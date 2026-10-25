// Grade 5 sentence-level skills: adages and puns (5.3D), and editing for conventions and transitions
// (5.11D and its parts, 5.11B.i). Each draws from a bank, so questions vary.

import { pick, sample, shuffle, type Rng } from '../../rng.ts';
import { inline, mc, one, txt, type Gen } from '../../generators/build.ts';
import type { InlinePart } from '../../types.ts';

function dropdown(rng: Rng, sentence: string, right: string, wrong: string[]): InlinePart {
  const options = shuffle(rng, [right, ...wrong]);
  const [before, after] = sentence.split('___');
  return inline([before, { blank: 0 }, after], [{ options, correct: options.indexOf(right) }]);
}

// ---------- 5.3D Adages and puns ----------
const ADAGES: [adage: string, meaning: string, story: string][] = [
  ['Don\'t count your chickens before they hatch.', 'Don\'t plan on something good until it really happens.', 'Leo started spending his prize money before the contest was even over.'],
  ['The early bird catches the worm.', 'People who start early often get what they want.', 'Rosa got to the book sale first and found the best books.'],
  ['Actions speak louder than words.', 'What you do shows more than what you say.', 'Sam kept promising to help, but he never showed up.'],
  ['Look before you leap.', 'Think carefully before you do something risky.', 'Ana wanted to jump into the creek without checking how deep it was.'],
  ['Practice makes perfect.', 'Doing something again and again makes you better at it.', 'Omar played the same song on the piano every day until he could play it without mistakes.'],
  ['Two heads are better than one.', 'Working together can solve problems better than working alone.', 'Mia and Eli solved the puzzle together after each one got stuck alone.'],
  ['Don\'t judge a book by its cover.', 'Don\'t decide what something is like just from how it looks.', 'The old diner looked plain, but its food was the best in town.'],
  ['Many hands make light work.', 'A job is easier when lots of people help.', 'The whole class helped, so cleaning the park took only an hour.'],
  ['Every cloud has a silver lining.', 'Something good can come out of a bad situation.', 'The game was rained out, so the team had time to practice a new play indoors.'],
  ['Better late than never.', 'It is better to do something late than not at all.', 'Grandpa learned to swim when he was seventy.'],
  ['Slow and steady wins the race.', 'Working carefully and steadily is better than rushing.', 'Jada read a little every night and finished the long book before her friends.'],
];

const PUNS: [pun: string, why: string][] = [
  ['I used to be a baker, but I couldn\'t make enough dough.', '"Dough" means both bread dough and money.'],
  ['The math book looked sad because it had too many problems.', '"Problems" means both math problems and troubles.'],
  ['The bicycle couldn\'t stand up by itself because it was two-tired.', '"Two-tired" sounds like "too tired," and a bike has two tires.'],
  ['I\'m reading a book about gravity, and I can\'t put it down.', '"Can\'t put it down" means the book is exciting, and gravity holds things down.'],
  ['The scarecrow won an award because he was outstanding in his field.', '"Outstanding in his field" means very good at his job and standing out in a field.'],
  ['Why did the student eat her homework? The teacher said it was a piece of cake.', '"A piece of cake" means easy, and cake is something you eat.'],
  ['The music teacher kept her keys in the piano.', 'A piano has keys, and so does a key ring.'],
  ['The calendar\'s days are numbered.', '"Days are numbered" means time is running out, and a calendar\'s days have numbers.'],
];
const PLAIN = [
  'The baker made twelve loaves of bread this morning.',
  'The math book had forty problems in the first chapter.',
  'My bicycle has a basket and a bell.',
  'We read a chapter about planets during science class.',
  'The scarecrow stood in the middle of the cornfield.',
  'The piano teacher gives lessons on Saturdays.',
];

const adagesAndPuns: Gen = (rng, d) => {
  if (d === 3) {
    const [pun, why] = pick(rng, PUNS);
    return one('mc', [txt('A pun is a joke that plays with a word that has two meanings, or two words that sound alike. Which sentence is a pun?')],
      mc(rng, pun, sample(rng, PLAIN, 3)), `"${pun}" is a pun: ${why}`);
  }
  const [adage, meaning, story] = pick(rng, ADAGES);
  const wrong = sample(rng, ADAGES.filter((a) => a[0] !== adage).map((a) => a[1]), 3);
  if (d === 2) {
    const others = sample(rng, ADAGES.filter((a) => a[0] !== adage).map((a) => a[0]), 3);
    return one('mc', [txt(`Read the sentence. **${story}**`), txt('Which adage fits this situation best?')], mc(rng, adage, others),
      `"${adage}" means: ${meaning.charAt(0).toLowerCase() + meaning.slice(1)} That matches what happens in the sentence.`);
  }
  return one('mc', [txt(`What does the adage **"${adage}"** mean?`)], mc(rng, meaning, wrong),
    `An adage is an old saying that gives advice. "${adage}" means: ${meaning.charAt(0).toLowerCase() + meaning.slice(1)}`);
};

// ---------- 5.11D Edit for conventions: possessives and contractions ----------
const APOSTROPHES: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['We found the ___ collar under the couch.', 'dog\'s', ['dogs', 'dogs\'', 'dog\'s\''], 'One dog owns the collar, so add \'s: dog\'s.'],
  ['The three ___ backpacks were by the door.', 'girls\'', ['girl\'s', 'girls', 'girls\'s'], 'More than one girl owns the backpacks. For a plural ending in s, add only an apostrophe: girls\'.'],
  ['___ going to the park after lunch.', 'We\'re', ['Were', 'Wer\'e', 'We\'are'], 'We\'re is short for "we are." The apostrophe takes the place of the a.'],
  ['The ___ lunches were packed in a big cooler.', 'children\'s', ['childrens\'', 'childrens', 'children'], 'Children is already plural and doesn\'t end in s, so add \'s: children\'s.'],
  ['I ___ find my shoes anywhere.', 'can\'t', ['cant', 'can\'nt', 'ca\'nt'], 'Can\'t is short for "cannot." The apostrophe takes the place of the missing letters.'],
  ['The ___ owner fed it every morning.', 'cat\'s', ['cats', 'cats\'', 'cat\'s\''], 'The owner belongs to one cat, so add \'s: cat\'s.'],
  ['The ___ uniforms were washed after the game.', 'players\'', ['player\'s', 'players', 'players\'s'], 'The uniforms belong to many players. Add only an apostrophe after the s: players\'.'],
  ['___ the tallest building in the city?', 'What\'s', ['Whats', 'What\'is', 'Wha\'ts'], 'What\'s is short for "what is."'],
  ['My ___ new bike is bright red.', 'brother\'s', ['brothers', 'brothers\'', 'brother\'es'], 'One brother owns the bike, so add \'s: brother\'s.'],
  ['They ___ seen the movie yet.', 'haven\'t', ['havent', 'have\'nt', 'havn\'t'], 'Haven\'t is short for "have not." The apostrophe replaces the o.'],
];
const apostrophes: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, APOSTROPHES);
  return one('inline', [txt('Choose the word that correctly completes the sentence.')], dropdown(rng, sentence, right, wrong), why);
};

// ---------- 5.11D.v Conjunctive adverbs ----------
// [first sentence, second sentence, right adverb, wrong adverbs that clearly don't fit, why]
const ADVERBS: [string, string, string, [string, string, string], string][] = [
  ['It rained all morning', 'the game was canceled', 'therefore', ['however', 'also', 'for example'], 'The second idea is a result of the first, so use therefore.'],
  ['Maya practiced every day', 'she still felt nervous before the recital', 'however', ['therefore', 'also', 'for example'], 'The second idea is a surprise compared with the first, so use however.'],
  ['The bakery sells fresh bread', 'it sells muffins and cookies', 'also', ['however', 'therefore', 'instead'], 'The second idea adds more information, so use also.'],
  ['The trail was closed for repairs', 'we hiked along the river', 'instead', ['also', 'for example', 'however'], 'They did something else in place of the trail, so use instead.'],
  ['The puppy is very small', 'it eats more than our big dog', 'however', ['therefore', 'also', 'for example'], 'The second idea is the opposite of what you would expect, so use however.'],
  ['Cactuses store water in their stems', 'they can survive long dry spells', 'therefore', ['however', 'instead', 'for example'], 'Surviving dry spells is a result of storing water, so use therefore.'],
  ['The museum was crowded', 'we saw every exhibit', 'nevertheless', ['therefore', 'for example', 'also'], 'The second idea happens in spite of the first, so use nevertheless.'],
  ['Ana loves soccer', 'she plays on two teams', 'in fact', ['however', 'instead', 'nevertheless'], 'The second idea gives stronger proof of the first, so use in fact.'],
  ['Our class planted a garden', 'we built a compost bin', 'also', ['however', 'instead', 'nevertheless'], 'The second idea adds another thing the class did, so use also.'],
  ['Many animals sleep through the winter', 'bears hibernate for months', 'for example', ['however', 'instead', 'nevertheless'], 'Bears are an example of animals that sleep through winter, so use for example.'],
];
const conjunctiveAdverbs: Gen = (rng) => {
  const [a, b, right, wrong, why] = pick(rng, ADVERBS);
  return one('inline', [txt('Choose the word that best connects the two ideas.')], dropdown(rng, `${a}; ___, ${b}.`, right, wrong),
    `${why} A conjunctive adverb after a semicolon is followed by a comma.`);
};

// ---------- 5.11D.vi Prepositional phrases and subject-verb agreement ----------
const PHRASES: [subject: string, phrase: string, singular: boolean, rest: string, present: boolean][] = [
  ['The box', 'of crayons', true, 'on the top shelf', true],
  ['The leaves', 'on the old oak tree', false, 'turning orange', true],
  ['The girl', 'with the red sneakers', true, 'the fastest runner in our class', true],
  ['The books', 'in my backpack', false, 'very heavy', true],
  ['A bowl', 'of cherries', true, 'sitting on the counter', true],
  ['The students', 'in Mr. Cruz\'s class', false, 'excited about the field trip', false],
  ['The sound', 'of the drums', true, 'loud enough to hear down the street', false],
  ['The players', 'on the winning team', false, 'cheering in the dugout', false],
  ['The bag', 'of oranges', true, 'too heavy for me to lift', false],
  ['The flowers', 'along the fence', false, 'blooming early this year', false],
];
const prepositionalPhrases: Gen = (rng) => {
  const [subject, phrase, singular, rest, present] = pick(rng, PHRASES);
  const [one_, many] = present ? ['is', 'are'] : ['was', 'were'];
  const right = singular ? one_ : many;
  const wrong = present ? [singular ? many : one_, 'be', 'been'] : [singular ? many : one_, 'be', 'been'];
  return one('inline', [txt('Choose the verb that correctly completes the sentence.')], dropdown(rng, `${subject} ${phrase} ___ ${rest}.`, right, wrong),
    `The subject is "${subject.replace(/^(The|A) /, '')}," not the word in the phrase "${phrase}." ${singular ? 'It is singular' : 'It is plural'}, so the verb is ${right}.`);
};

// ---------- 5.11D.vii Pronouns, including indefinite ----------
const PRONOUNS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Marcus and ___ built the robot together.', 'I', ['me', 'myself', 'mine'], 'Take away "Marcus and": you would say "I built the robot," so use I.'],
  ['The coach gave Eli and ___ new jerseys.', 'me', ['I', 'myself', 'mine'], 'Take away "Eli and": you would say "gave me new jerseys," so use me.'],
  ['Mom drove ___ to the library after school.', 'us', ['we', 'our', 'ourselves'], 'The pronoun receives the action (drove), so use us.'],
  ['Every evening, ___ walk their dog in the park.', 'they', ['them', 'theirs', 'themself'], 'The pronoun is the subject: they do the walking, so use they.'],
  ['Each of the puppies ___ a name tag.', 'has', ['have', 'having', 'are having'], 'Each is an indefinite pronoun that means "each one," so it takes a singular verb: has.'],
  ['Everyone in the class ___ a turn to speak.', 'gets', ['get', 'are getting', 'have gotten'], 'Everyone is singular, so it takes a singular verb: gets.'],
  ['Both of the twins ___ to play chess.', 'like', ['likes', 'is liking', 'has liked'], 'Both is an indefinite pronoun that is always plural, so use like.'],
  ['Nobody ___ where the treasure map went.', 'knows', ['know', 'are knowing', 'have known'], 'Nobody is singular, so it takes a singular verb: knows.'],
  ['Several of the students ___ library books.', 'have', ['has', 'is having', 'was having'], 'Several is always plural, so use have.'],
  ['The teacher asked Ana and ___ to hand out the papers.', 'him', ['he', 'himself', 'his'], 'Take away "Ana and": the teacher asked him, so use him.'],
];
const pronouns: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, PRONOUNS);
  return one('inline', [txt('Choose the word that correctly completes the sentence.')], dropdown(rng, sentence, right, wrong), why);
};

// ---------- 5.11D.viii Subordinating conjunctions and complex sentences ----------
// [first idea, second idea, right conjunction, conjunctions that clearly don't fit, why]
const COMPLEX: [string, string, string, [string, string, string], string][] = [
  ['we stayed inside', 'it was pouring rain', 'because', ['although', 'unless', 'before'], 'The rain is the reason they stayed inside, so use because.'],
  ['Rosa read a book', 'she waited for the bus', 'while', ['because', 'unless', 'although'], 'Both things happen at the same time, so use while.'],
  ['the team kept playing', 'it started to drizzle', 'although', ['because', 'unless', 'before'], 'They kept playing in spite of the drizzle, so use although.'],
  ['we can go swimming', 'we finish our chores', 'after', ['although', 'because', 'unless'], 'Swimming happens once the chores are done, so use after.'],
  ['you may cross the street', 'you have looked both ways', 'after', ['although', 'because', 'unless'], 'Crossing should come once you have looked both ways, so use after.'],
  ['Eli could not see the stage', 'he sat in the back row', 'because', ['although', 'unless', 'before'], 'Sitting in the back is the reason he couldn\'t see, so use because.'],
  ['the cookies burned', 'nobody set a timer', 'because', ['although', 'unless', 'while'], 'No timer is the reason they burned, so use because.'],
  ['we finished the long hike', 'our legs were tired', 'although', ['because', 'unless', 'until'], 'They finished in spite of tired legs, so use although.'],
  ['the soup will burn', 'you stir it', 'unless', ['because', 'although', 'after'], 'The soup burns only if no one stirs it, so use unless.'],
  ['we waited on the porch', 'the rain stopped', 'until', ['because', 'although', 'unless'], 'They waited up to the moment the rain stopped, so use until.'],
];
const complexSentences: Gen = (rng) => {
  const [a, b, right, wrong, why] = pick(rng, COMPLEX);
  const first = a.charAt(0).toUpperCase() + a.slice(1);
  return one('inline', [txt('Choose the word that best joins the two ideas into one sentence.')], dropdown(rng, `${first} ___ ${b}.`, right, wrong),
    `${why} A subordinating conjunction joins two ideas into one complex sentence.`);
};

// ---------- 5.11D.x Commas in compound sentences and quotation marks in dialogue ----------
const COMPOUND: [a: string, b: string, join: string][] = [
  ['I wanted to swim', 'the pool was closed', 'but'],
  ['Dad made pancakes', 'Mom made eggs', 'and'],
  ['We can walk to the park', 'we can ride our bikes', 'or'],
  ['The wind blew hard', 'the kite climbed higher', 'and'],
  ['Ava studied for the test', 'she got every answer right', 'so'],
  ['The store was out of milk', 'we bought juice instead', 'so'],
];
const DIALOGUE: [speaker: string, words: string][] = [
  ['Ana', 'Wait for me'], ['Coach Rivera', 'Keep your eyes on the ball'], ['Grandma', 'Dinner is ready'],
  ['Omar', 'I found the missing puzzle piece'], ['Ms. Lee', 'Please open your books'],
];
const commasAndQuotes: Gen = (rng) => {
  if (rng() < 0.5) {
    const [a, b, join] = pick(rng, COMPOUND);
    const right = `${a}, ${join} ${b}.`;
    return one('mc', [txt('Which sentence is punctuated correctly?')], mc(rng, right, [`${a} ${join} ${b}.`, `${a} ${join}, ${b}.`, `${a}, ${b}.`]),
      `In a compound sentence, put a comma before the joining word (${join}): "${right}"`);
  }
  const [speaker, words] = pick(rng, DIALOGUE);
  const right = `"${words}," said ${speaker}.`;
  return one('mc', [txt('Which sentence is punctuated correctly?')],
    mc(rng, right, [`"${words}", said ${speaker}.`, `${words}, said ${speaker}.`, `"${words}," said ${speaker}."`]),
    `Quotation marks go around the exact words someone says. The comma goes inside the closing quotation mark: ${right}`);
};

// ---------- 5.11B.i Transitions ----------
// [first sentence, second sentence, right transition, transitions that clearly don't fit, what the second tells]
const TRANSITIONS: [string, string, string, [string, string, string], string][] = [
  ['First, we gathered sticks for the campfire.', 'we stacked them in a small pile.', 'Next,', ['However,', 'For example,', 'In the end,'], 'the next step in an order'],
  ['Many people think sharks are dangerous.', 'most sharks never bother people at all.', 'However,', ['For example,', 'Next,', 'In addition,'], 'an idea that contrasts with the first'],
  ['The river flooded after a week of rain.', 'the bridge was closed for repairs.', 'As a result,', ['However,', 'For example,', 'First,'], 'a result of the first sentence'],
  ['Bats eat insects that harm crops.', 'they help pollinate some plants.', 'In addition,', ['However,', 'As a result,', 'First,'], 'another fact about how bats help'],
  ['Our town has many parks.', 'Pecan Park has a splash pad and trails.', 'For example,', ['However,', 'As a result,', 'In the end,'], 'an example of the first idea'],
  ['We tried every key on the ring.', 'the very last one opened the door.', 'Finally,', ['First,', 'For example,', 'In addition,'], 'the last event in a series'],
  ['Exercise helps your heart stay strong.', 'it can improve your mood.', 'In addition,', ['However,', 'As a result,', 'First,'], 'another benefit of exercise'],
  ['The class collected cans for a month.', 'we donated 500 cans to the food bank.', 'In the end,', ['However,', 'For example,', 'First,'], 'how things finally turned out'],
];
const transitions: Gen = (rng) => {
  const [a, b, right, wrong, kind] = pick(rng, TRANSITIONS);
  return one('inline', [txt('Choose the transition that best connects the two sentences.')], dropdown(rng, `${a} ___ ${b}`, right, wrong),
    `The second sentence tells ${kind}, so "${right.slice(0, -1)}" connects the ideas. Transitions show how ideas are related.`);
};

export const EDITING_GENERATORS: Record<string, Gen[]> = {
  'rla:5.3D': [adagesAndPuns],
  'rla:5.11D': [apostrophes],
  'rla:5.11D.v': [conjunctiveAdverbs],
  'rla:5.11D.vi': [prepositionalPhrases],
  'rla:5.11D.vii': [pronouns],
  'rla:5.11D.viii': [complexSentences],
  'rla:5.11D.x': [commasAndQuotes],
  'rla:5.11B.i': [transitions],
};
