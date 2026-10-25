// Grade 1 spelling and decoding generators: 1.2B.i-vi, 1.2D, 1.2E, 1.2C.i-iv.

import { pick, shuffle, type Rng } from '../../rng.ts';
import { inline, one, txt, type Gen } from '../../generators/build.ts';
import type { InlinePart } from '../../types.ts';

function dropdown(rng: Rng, sentence: string, right: string, wrong: string[]): InlinePart {
  const options = shuffle(rng, [right, ...wrong]);
  const [before, after] = sentence.split('___');
  return inline([before, { blank: 0 }, after], [{ options, correct: options.indexOf(right) }]);
}

// 1.2B.i Decode short vowel CVC words
const CVC_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['The little black ___ sat on the mat.', 'cat', ['cot', 'cut', 'cet'], 'Cat has the short a vowel sound: c-a-t.'],
  ['The big brown ___ wagged its tail.', 'dog', ['dug', 'dag', 'dig'], 'Dog has the short o sound: d-o-g.'],
  ['The red ___ rolled across the grass.', 'ball', ['boll', 'bal', 'bell'], 'Ball is spelled b-a-l-l.'],
  ['I see a pink ___ in the mud pen.', 'pig', ['pog', 'pag', 'pug'], 'Pig has the short i sound: p-i-g.'],
  ['The hot yellow ___ shines in the sky.', 'sun', ['san', 'sin', 'son'], 'Sun has the short u sound: s-u-n.'],
  ['She put on her blue winter ___.', 'hat', ['het', 'hut', 'hot'], 'Hat has short a: h-a-t.'],
  ['He ate a sweet red ___ slice.', 'fig', ['fog', 'feg', 'fug'], 'Fig has short i: f-i-g.'],
  ['The green ___ hopped into the pond.', 'frog', ['frug', 'freg', 'frag'], 'Frog has short o: f-r-o-g.'],
];
const cvcGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, CVC_ITEMS);
  return one('inline', [txt('Choose the word that correctly completes the sentence.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.2B.ii Consonant blends and digraphs (sh, ch, th, st, bl)
const BLEND_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['We saw a big gray ___ swim in the sea.', 'fish', ['fiss', 'fich', 'fith'], 'Fish ends with the sh digraph: f-i-s-h.'],
  ['The tiny baby ___ chirped for its mother.', 'chick', ['shick', 'thick', 'jick'], 'Chick begins with the ch digraph: c-h-i-c-k.'],
  ['Hold my hand when we cross the ___.', 'path', ['pash', 'pach', 'pat'], 'Path ends with the th digraph: p-a-t-h.'],
  ['A bright yellow ___ bloomed in the pot.', 'plant', ['pant', 'plat', 'prant'], 'Plant has the pl blend and nt blend: p-l-a-n-t.'],
  ['The red race car can go very ___.', 'fast', ['fasp', 'fask', 'fat'], 'Fast ends with the st blend: f-a-s-t.'],
  ['The shiny blue ___ sailed on the water.', 'ship', ['chip', 'thip', 'sip'], 'Ship begins with the sh digraph: s-h-i-p.'],
  ['She sat on the wooden ___ at the table.', 'bench', ['bensh', 'benth', 'benk'], 'Bench ends with the ch digraph: b-e-n-c-h.'],
  ['The frog jumped over the wet ___.', 'stick', ['sick', 'spick', 'snick'], 'Stick begins with the st blend: s-t-i-c-k.'],
];
const blendGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, BLEND_ITEMS);
  return one('inline', [txt('Choose the word with the correct blend or digraph.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.2B.iii VCe and vowel teams (silent e, ee, oa, ai)
const VCE_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['We rode our bikes all the way ___.', 'home', ['hom', 'hoam', 'hum'], 'Silent e makes the o say its long sound: home.'],
  ['He ate a sweet red ___ after lunch.', 'apple', ['aple', 'appel', 'appul'], 'Apple is spelled a-p-p-l-e.'],
  ['The bird perched high in the green ___.', 'tree', ['tre', 'trea', 'try'], 'Tree uses the ee vowel team for long e.'],
  ['She wore a warm winter ___ outside.', 'coat', ['cot', 'cote', 'coot'], 'Coat uses the oa vowel team for long o.'],
  ['The snail left a shiny silver ___.', 'trail', ['tral', 'trale', 'trayl'], 'Trail uses the ai vowel team: t-r-a-i-l.'],
  ['He baked a delicious chocolate ___.', 'cake', ['cak', 'caik', 'ceke'], 'Silent e makes the a long in cake: c-a-k-e.'],
  ['We saw five small fish in the clean ___.', 'lake', ['lak', 'laik', 'leke'], 'Silent e makes the a long in lake: l-a-k-e.'],
  ['The happy children played a fun ___.', 'game', ['gam', 'gaim', 'gamm'], 'Silent e makes the a long in game: g-a-m-e.'],
];
const vceGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, VCE_ITEMS);
  return one('inline', [txt('Choose the correctly spelled long vowel word.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.2B.iv Compound words and contractions
const COMPOUND_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['The yellow ___ buzzed from flower to flower.', 'bumblebee', ['bumble bee', 'bumbelbee', 'bumblebe'], 'Bumblebee is a compound word written as one word.'],
  ['We packed our lunch inside a blue ___.', 'backpack', ['back pack', 'bakpack', 'backpak'], 'Backpack is formed from back + pack.'],
  ['I ___ find my yellow pencil.', 'can\'t', ['cant', 'ca\'nt', 'cann\'t'], 'Can\'t uses an apostrophe for missing letters.'],
  ['They ___ see the tiny ant on the leaf.', 'didn\'t', ['didnt', 'did\'nt', 'dident'], 'Didn\'t contracts did not with an apostrophe.'],
  ['The children made a cold white ___ in winter.', 'snowman', ['snow man', 'snoman', 'snowmenn'], 'Snowman is a compound word: snow + man.'],
  ['A bright ___ appeared after the afternoon rain.', 'rainbow', ['rain bow', 'raynbow', 'ranbow'], 'Rainbow is formed from rain + bow.'],
  ['She ___ want to go inside yet.', 'doesn\'t', ['doesnt', 'does\'nt', 'dosent'], 'Doesn\'t contracts does not.'],
  ['We played together on the school ___.', 'playground', ['play ground', 'plaground', 'playgrownd'], 'Playground is a compound word: play + ground.'],
];
const compoundGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, COMPOUND_ITEMS);
  return one('inline', [txt('Choose the correctly written compound word or contraction.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.2B.v Inflectional endings (-s, -ed, -es)
const INFLECTION_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Yesterday, the dog ___ over the wooden fence.', 'jumped', ['jump', 'jumpd', 'jumpt'], 'Add -ed to show an action that already happened.'],
  ['Three small ___ played in the green grass.', 'cats', ['cat', 'cat\'s', 'cates'], 'Add -s to make cat plural: cats.'],
  ['She packed two lunch ___ for our school trip.', 'boxes', ['boxs', 'box\'s', 'box'], 'Add -es to words ending in x: boxes.'],
  ['Yesterday, Mom ___ a basket of fresh berries.', 'picked', ['pick', 'pickd', 'pickt'], 'Add -ed for past tense: picked.'],
  ['The little duck ___ in the cool river.', 'swims', ['swim', 'swimms', 'swim\'s'], 'Singular subject duck takes swims.'],
  ['Dad ___ the clean dishes in the kitchen.', 'washes', ['washs', 'wash', 'wash\'s'], 'Add -es to words ending in sh: washes.'],
  ['He ___ his hands before eating lunch.', 'washed', ['washd', 'washt', 'wash'], 'Add -ed for past action: washed.'],
  ['Two yellow ___ sat on the tree branch.', 'birds', ['bird', 'bird\'s', 'birdes'], 'Add -s for plural birds: birds.'],
];
const inflectionGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, INFLECTION_ITEMS);
  return one('inline', [txt('Choose the word with the correct ending.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.2B.vi High frequency words (the, was, you, they, said, see, look, have)
const HFW_ITEMS: [sentence: string, right: string, wrong: [string, string, string], why: string][] = [
  ['The teacher ___ that it was time for recess.', 'said', ['sed', 'sayed', 'siad'], 'Said is spelled s-a-i-d.'],
  ['___ were playing together in the park.', 'They', ['Thay', 'Thei', 'Thee'], 'They is spelled t-h-e-y.'],
  ['Yesterday ___ a bright and sunny day.', 'was', ['waz', 'wus', 'woz'], 'Was is spelled w-a-s.'],
  ['Do ___ want to play with the red ball?', 'you', ['yu', 'yoo', 'yew'], 'You is spelled y-o-u.'],
  ['I ___ two red apples in my lunch bag.', 'have', ['hav', 'hafe', 'haev'], 'Have is spelled h-a-v-e.'],
  ['Can you ___ the bird in the tall tree?', 'see', ['se', 'sea', 'si'], 'See means looking with eyes: s-e-e.'],
  ['Please ___ at the whiteboard.', 'look', ['lok', 'luke', 'looke'], 'Look is spelled l-o-o-k.'],
  ['She read ___ exciting story about animals.', 'the', ['th', 'tha', 'teh'], 'The is spelled t-h-e.'],
];
const hfwGen: Gen = (rng) => {
  const [sentence, right, wrong, why] = pick(rng, HFW_ITEMS);
  return one('inline', [txt('Choose the correctly spelled sight word.')], dropdown(rng, sentence, right, wrong), why);
};

// 1.2D Book parts (cover, title, author, illustrator)
const BOOK_PARTS: [question: string, right: string, wrong: [string, string, string], why: string][] = [
  ['Who writes the words in a storybook?', 'The author', ['The illustrator', 'The reader', 'The library'], 'The author is the person who writes the text.'],
  ['Who draws or paints the pictures in a storybook?', 'The illustrator', ['The author', 'The teacher', 'The publisher'], 'The illustrator draws the artwork.'],
  ['What is the name of a book called?', 'The title', ['The cover', 'The page', 'The spine'], 'The title is the name given to the book.'],
  ['What protects the pages on the outside of a book?', 'The cover', ['The index', 'The title', 'The page number'], 'The front and back covers protect the pages.'],
  ['Where do you look to find the title and author before opening a book?', 'On the front cover', ['On page 50', 'On the blank back page', 'In the middle'], 'The front cover displays the book title and author name.'],
  ['What tells you what number page you are reading?', 'The page number', ['The author', 'The title', 'The cover'], 'The page number shows which page you are on.'],
];
const bookPartsGen: Gen = (rng) => {
  const [q, right, wrong, why] = pick(rng, BOOK_PARTS);
  const options = shuffle(rng, [right, ...wrong]);
  return one('inline', [txt(q)], inline(['', { blank: 0 }, ''], [{ options, correct: options.indexOf(right) }]), why);
};

// 1.2E Alphabetizing to first letter
const ABC_ITEMS: [right: string, wrong: [string, string, string], why: string][] = [
  ['apple, ball, cat', ['cat, ball, apple', 'ball, cat, apple', 'apple, cat, ball'], 'Alphabetical order: A, B, C.'],
  ['dog, egg, fish', ['fish, dog, egg', 'egg, dog, fish', 'dog, fish, egg'], 'Alphabetical order: D, E, F.'],
  ['hat, igloo, jump', ['jump, hat, igloo', 'igloo, jump, hat', 'hat, jump, igloo'], 'Alphabetical order: H, I, J.'],
  ['kite, leaf, moon', ['moon, kite, leaf', 'leaf, moon, kite', 'kite, moon, leaf'], 'Alphabetical order: K, L, M.'],
  ['nest, owl, pig', ['pig, owl, nest', 'owl, nest, pig', 'nest, pig, owl'], 'Alphabetical order: N, O, P.'],
  ['quilt, rain, sun', ['sun, rain, quilt', 'rain, quilt, sun', 'quilt, sun, rain'], 'Alphabetical order: Q, R, S.'],
  ['tree, umbrella, van', ['van, tree, umbrella', 'umbrella, van, tree', 'tree, van, umbrella'], 'Alphabetical order: T, U, V.'],
  ['water, fox, yarn', ['yarn, fox, water', 'water, yarn, fox', 'fox, water, yarn'], 'W, X (fox end), Y are in ABC order.']
];
const abcGen: Gen = (rng) => {
  const [right, wrong, why] = pick(rng, ABC_ITEMS);
  const options = shuffle(rng, [right, ...wrong]);
  return one('inline', [txt('Which group of words is in alphabetical (ABC) order by the first letter?')],
    inline(['', { blank: 0 }, ''], [{ options, correct: options.indexOf(right) }]), why);
};

export const G1_SPELLING_GENERATORS: Record<string, Gen[]> = {
  'rla:1.2B.i': [cvcGen],
  'rla:1.2B.ii': [blendGen],
  'rla:1.2B.iii': [vceGen],
  'rla:1.2B.iv': [compoundGen],
  'rla:1.2B.v': [inflectionGen],
  'rla:1.2B.vi': [hfwGen],
  'rla:1.2D': [bookPartsGen],
  'rla:1.2E': [abcGen],
  'rla:1.2C.i': [vceGen],
  'rla:1.2C.ii': [blendGen],
  'rla:1.2C.iii': [cvcGen],
  'rla:1.2C.iv': [hfwGen],
};
