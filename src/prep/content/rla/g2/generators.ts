// Grade 2 reading and vocabulary generators: 2.3A, 2.3C, 2.3D, combined with spelling and editing.

import { pick, shuffle } from '../../rng.ts';
import { inline, one, txt, type Gen } from '../../generators/build.ts';
import { G2_SPELLING_GENERATORS } from './generators-spelling.ts';
import { G2_EDITING_GENERATORS } from './generators-editing.ts';

// 2.3A Digital and print resources (dictionary / glossary entries)
const GLOSSARY_ITEMS: [term: string, entry: string, right: string, wrong: [string, string, string], why: string][] = [
  ['burrow', 'bur·row: a hole or tunnel dug by a small animal for shelter', 'a hole or tunnel dug by an animal for shelter', ['a tall tree branch', 'a fast river current', 'a cloud in the sky'], 'The glossary defines burrow as a hole or tunnel.'],
  ['canopy', 'can·o·py: the high, leafy roof formed by the tops of trees', 'the leafy top layer of a forest', ['the roots under the soil', 'a stone path through woods', 'a small campfire'], 'Canopy means the high overhead layer of treetops.'],
  ['nectar', 'nec·tar: sweet liquid produced by flowers that attracts bees and butterflies', 'sweet liquid made by flowers', ['dry sand in the desert', 'salty water in the ocean', 'a bitter tree bark'], 'Nectar is the sweet liquid produced by flowering plants.'],
  ['prowl', 'prowl: to move around quietly and secretly in search of food', 'to move around quietly in search of food', ['to sleep loudly in a cave', 'to fly high in the clouds', 'to splash in the water'], 'Prowl means moving stealthily in search of food.'],
  ['migrate', 'mi·grate: to travel from one region to another when seasons change', 'to travel to another region when seasons change', ['to hibernate all winter', 'to build a nest in spring', 'to swim deep underwater'], 'Migrate means traveling from one place to another seasonally.'],
  ['pupil', 'pu·pil: a student who is learning in school', 'a student learning in school', ['a teacher in a classroom', 'a school bus driver', 'a wooden desk'], 'Pupil means a student.'],
  ['prairie', 'prai·rie: a large, flat area of grassland with few trees', 'a large, flat grassland with few trees', ['a snowy mountain peak', 'a deep ocean canyon', 'a thick rainforest'], 'Prairie means a wide, open grassy plain.'],
  ['sprout', 'sprout: to begin to grow and put out shoots', 'to begin to grow shoots', ['to fall off a branch', 'to dry up in the heat', 'to freeze in winter'], 'Sprout means to begin growing shoots.'],
];
const glossaryGen: Gen = (rng) => {
  const [term, entry, right, wrong, why] = pick(rng, GLOSSARY_ITEMS);
  const options = shuffle(rng, [right, ...wrong]);
  const prompt = `Read this glossary entry:\n\n**${entry}**\n\nWhat is the meaning of **${term}**?`;
  return one('inline', [txt(prompt)], inline(['', { blank: 0 }, ''], [{ options, correct: options.indexOf(right) }]), why);
};

// 2.3C Affixes un-, re-, -ly, -er, -est
const AFFIX_MEANING_ITEMS: [word: string, affix: string, meaning: string, right: string, wrong: [string, string, string], why: string][] = [
  ['unlock', 'un-', 'not or reverse', 'to open what was locked', ['to lock twice', 'to break a key', 'to hide a door'], 'Un- means reverse or opposite: unlock means open.'],
  ['refill', 're-', 'again', 'to fill again', ['to empty completely', 'to spill on the floor', 'to freeze solid'], 'Re- means again: refill means fill up again.'],
  ['safely', '-ly', 'in a certain way', 'in a safe way', ['very dangerous', 'without safety', 'before safe'], '-ly means in that way: safely means in a safe manner.'],
  ['reheat', 're-', 'again', 'to heat again', ['to cool down', 'to put in ice', 'to eat raw'], 'Re- means again: reheat means heat again.'],
  ['untie', 'un-', 'reverse', 'to loosen what was tied', ['to tie in a double knot', 'to cut with scissors', 'to wear on feet'], 'Un- means undo: untie means loosen a knot.'],
  ['loudly', '-ly', 'in a certain way', 'in a loud way', ['very quietly', 'without sound', 'in a whisper'], '-ly means in that manner: loudly means with a loud sound.'],
  ['replay', 're-', 'again', 'to play again', ['to stop the game', 'to win the trophy', 'to lose points'], 'Re- means again: replay means play again.'],
  ['sweetest', '-est', 'most', 'the most sweet', ['not sweet at all', 'sour and bitter', 'less sweet'], '-est means the most: sweetest means having the most sweetness.'],
];
const affixMeaningGen: Gen = (rng) => {
  const [word, affix, meaning, right, wrong, why] = pick(rng, AFFIX_MEANING_ITEMS);
  const options = shuffle(rng, [right, ...wrong]);
  const prompt = `The prefix or suffix **${affix}** means *${meaning}*. What does the word **${word}** mean?`;
  return one('inline', [txt(prompt)], inline(['', { blank: 0 }, ''], [{ options, correct: options.indexOf(right) }]), why);
};

// 2.3D Antonyms and synonyms
const SYN_ANT_ITEMS: [word: string, kind: 'synonym' | 'antonym', right: string, wrong: [string, string, string], why: string][] = [
  ['glad', 'synonym', 'happy', ['angry', 'tired', 'sad'], 'Glad and happy mean the same thing (synonyms).'],
  ['cold', 'antonym', 'hot', ['chilly', 'freezing', 'cool'], 'Hot is the opposite (antonym) of cold.'],
  ['huge', 'synonym', 'enormous', ['tiny', 'small', 'short'], 'Huge and enormous are synonyms.'],
  ['fast', 'antonym', 'slow', ['quick', 'rapid', 'speedy'], 'Slow is the opposite of fast.'],
  ['quiet', 'synonym', 'silent', ['loud', 'noisy', 'wild'], 'Quiet and silent mean the same thing.'],
  ['dark', 'antonym', 'bright', ['dim', 'shadowy', 'black'], 'Bright is the opposite of dark.'],
  ['begin', 'synonym', 'start', ['finish', 'end', 'stop'], 'Begin and start are synonyms.'],
  ['easy', 'antonym', 'hard', ['simple', 'clear', 'plain'], 'Hard is the opposite of easy.'],
];
const synAntGen: Gen = (rng) => {
  const [word, kind, right, wrong, why] = pick(rng, SYN_ANT_ITEMS);
  const options = shuffle(rng, [right, ...wrong]);
  const prompt = `Which word is a **${kind}** of **${word}**?`;
  return one('inline', [txt(prompt)], inline(['', { blank: 0 }, ''], [{ options, correct: options.indexOf(right) }]), why);
};

export const G2_RLA_GENERATORS: Record<string, Gen[]> = {
  'rla:2.3A': [glossaryGen],
  'rla:2.3C': [affixMeaningGen],
  'rla:2.3D': [synAntGen],
  ...G2_SPELLING_GENERATORS,
  ...G2_EDITING_GENERATORS,
};
