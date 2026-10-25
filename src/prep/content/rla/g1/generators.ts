// Grade 1 reading and vocabulary generators: 1.3A, 1.3C, 1.3D, combined with spelling and editing.

import { pick, shuffle } from '../../rng.ts';
import { inline, one, txt, type Gen } from '../../generators/build.ts';
import { G1_SPELLING_GENERATORS } from './generators-spelling.ts';
import { G1_EDITING_GENERATORS } from './generators-editing.ts';

// 1.3A Picture dictionary / simple reference
const DICT_ITEMS: [word: string, entry: string, right: string, wrong: [string, string, string], why: string][] = [
  ['acorn', 'ac·orn: a small nut that drops from an oak tree', 'a small nut from an oak tree', ['a round red apple', 'a yellow river rock', 'a blue ocean fish'], 'The entry tells us an acorn is a nut from an oak tree.'],
  ['puddle', 'pud·dle: a small pool of water on the ground after rain', 'a small pool of water after rain', ['a high wooden fence', 'a big fluffy cloud', 'a hot bowl of soup'], 'The entry defines puddle as a small pool of rainwater.'],
  ['nest', 'nest: a cozy home built by birds to hold their eggs', 'a bird\'s home for eggs', ['a large ocean ship', 'a soft wool blanket', 'a sweet red fruit'], 'The entry explains that a nest is a bird\'s home for eggs.'],
  ['kitten', 'kit·ten: a young baby cat', 'a baby cat', ['a baby horse', 'a baby duck', 'a small green frog'], 'The entry defines kitten as a young baby cat.'],
  ['sprout', 'sprout: a tiny new shoot starting to grow from a seed', 'a tiny new shoot from a seed', ['a big wooden barn', 'a winter snowdrift', 'a dry brown leaf'], 'The entry states that a sprout is a young shoot growing from a seed.'],
  ['fawn', 'fawn: a young baby deer', 'a baby deer', ['a baby bear', 'a baby owl', 'a little rabbit'], 'A fawn is a young baby deer according to the dictionary.'],
  ['twig', 'twig: a small thin branch of a tree or bush', 'a small thin tree branch', ['a wide garden path', 'a cold glass of milk', 'a shiny yellow ball'], 'A twig is a small thin branch.'],
  ['tadpole', 'tad·pole: a tiny creature with a tail that grows into a frog', 'a young creature that grows into a frog', ['a baby butterfly', 'a yellow songbird', 'a tiny honeybee'], 'A tadpole grows up into a frog.']
];
const dictGen: Gen = (rng) => {
  const [word, entry, right, wrong, why] = pick(rng, DICT_ITEMS);
  const options = shuffle(rng, [right, ...wrong]);
  const prompt = `Read this picture dictionary entry:\n\n**${entry}**\n\nWhat is a **${word}**?`;
  return one('inline', [txt(prompt)], inline(['', { blank: 0 }, ''], [{ options, correct: options.indexOf(right) }]), why);
};

// 1.3C Meaning of words with affixes -s, -ed, -ing
const AFFIX_ITEMS: [word: string, base: string, suffix: string, right: string, wrong: [string, string, string], why: string][] = [
  ['jumping', 'jump', '-ing', 'leaping right now', ['jumped yesterday', 'more than one jump', 'someone who jumps'], '-ing shows the action is happening right now.'],
  ['walked', 'walk', '-ed', 'walked in the past', ['walking right now', 'will walk tomorrow', 'does not walk'], '-ed shows an action that happened in the past.'],
  ['dogs', 'dog', '-s', 'more than one dog', ['one baby dog', 'a dog barked', 'walking a dog'], '-s means plural, or more than one dog.'],
  ['singing', 'sing', '-ing', 'singing songs right now', ['sang yesterday', 'one singer', 'will sing tomorrow'], '-ing means singing right now.'],
  ['played', 'play', '-ed', 'played in the past', ['playing right now', 'play again', 'more than one play'], '-ed shows an action that already happened.'],
  ['apples', 'apple', '-s', 'more than one apple', ['one small apple', 'apple tree', 'peeled an apple'], '-s means plural, or more than one apple.'],
  ['helping', 'help', '-ing', 'giving help right now', ['helped yesterday', 'no help', 'someone who helps'], '-ing indicates action happening right now.'],
  ['planted', 'plant', '-ed', 'put seeds in soil in the past', ['planting seeds now', 'seed sprout', 'will plant seeds'], '-ed shows an action completed in the past.']
];
const affixGen: Gen = (rng) => {
  const [word, , suffix, right, wrong, why] = pick(rng, AFFIX_ITEMS);
  const options = shuffle(rng, [right, ...wrong]);
  const prompt = `What does the word **${word}** mean with the ending **${suffix}**?`;
  return one('inline', [txt(prompt)], inline(['', { blank: 0 }, ''], [{ options, correct: options.indexOf(right) }]), why);
};

// 1.3D Words naming actions, directions, positions
const ACTION_POS_ITEMS: [category: string, right: string, wrong: [string, string, string], why: string][] = [
  ['action', 'run', ['blue', 'pencil', 'happy'], 'Run is an action word (verb).'],
  ['position', 'under', ['jump', 'yellow', 'puppy'], 'Under describes a position.'],
  ['direction', 'left', ['sleep', 'green', 'cookie'], 'Left describes a direction.'],
  ['action', 'jump', ['table', 'soft', 'sunny'], 'Jump describes an action.'],
  ['position', 'inside', ['sing', 'apple', 'fast'], 'Inside describes a position or location.'],
  ['direction', 'up', ['swim', 'brown', 'friend'], 'Up describes a direction.'],
  ['action', 'read', ['chair', 'quiet', 'tree'], 'Read is an action word.'],
  ['position', 'behind', ['climb', 'flower', 'cheerful'], 'Behind describes a position.']
];
const actionPosGen: Gen = (rng) => {
  const [category, right, wrong, why] = pick(rng, ACTION_POS_ITEMS);
  const options = shuffle(rng, [right, ...wrong]);
  const prompt = `Which word names a **${category}**?`;
  return one('inline', [txt(prompt)], inline(['', { blank: 0 }, ''], [{ options, correct: options.indexOf(right) }]), why);
};

export const G1_RLA_GENERATORS: Record<string, Gen[]> = {
  ...G1_SPELLING_GENERATORS,
  ...G1_EDITING_GENERATORS,
  'rla:1.3A': [dictGen],
  'rla:1.3C': [affixGen],
  'rla:1.3D': [actionPosGen],
};
