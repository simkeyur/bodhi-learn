// Cipher Desk: secret-message puzzles (Caesar shifts and the mirror cipher). Pure and seedable,
// unit tested with `npm run test:logic`.

import { shuffle, type Rng } from './logicData.ts';

export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const mod26 = (n: number) => ((n % 26) + 26) % 26;

// Move every letter `k` places forward (negative goes back); anything that isn't a letter is kept
export function shiftText(text: string, k: number): string {
  return text.toUpperCase().replace(/[A-Z]/g, (c) => ALPHABET[mod26(c.charCodeAt(0) - 65 + k)]);
}

// A↔Z, B↔Y, C↔X …
export function atbash(text: string): string {
  return text.toUpperCase().replace(/[A-Z]/g, (c) => ALPHABET[25 - (c.charCodeAt(0) - 65)]);
}

export const lettersOnly = (s: string) => s.toUpperCase().replace(/[^A-Z]/g, '');

export type CipherKind = 'decode' | 'encode' | 'crack' | 'mirror';

export interface CipherPuzzle {
  id: string;
  kind: CipherKind;
  level: number;
  prompt: string;
  show: string; // the text on the desk: a secret message to read, or the plain word to write in code
  answer: string; // what the child types
  shift: number | null; // the shift in use (null for the mirror cipher); only told to the child when they should know it
  startShift: number; // where the wheel starts
  hint?: string;
}

const SHORT = ['STAR', 'MOON', 'BIRD', 'FISH', 'TREE', 'RAIN', 'SNOW', 'CAKE', 'BOOK', 'FROG', 'KITE', 'SHIP', 'DUCK', 'LION', 'BEAR', 'CORN', 'GOLD', 'WIND'];
const MEDIUM = ['PLANET', 'ROCKET', 'TIGER', 'OCEAN', 'PIZZA', 'ROBOT', 'CLOUD', 'HORSE', 'LEMON', 'MUSIC', 'WINTER', 'JUNGLE', 'PIRATE', 'DRAGON', 'CASTLE', 'SPIDER', 'MIRROR', 'THUNDER'];
const LONG = ['ELEPHANT', 'DOLPHIN', 'VOLCANO', 'PYRAMID', 'GALAXY', 'MYSTERY', 'TREASURE', 'LIGHTNING', 'ADVENTURE', 'DETECTIVE', 'SUBMARINE', 'ASTRONAUT'];
const PHRASES = ['SECRET AGENT', 'SPACE STATION', 'BRAIN POWER', 'CODE BREAKER', 'TOP SECRET', 'MAGIC WAND', 'TREASURE MAP', 'DARK FOREST', 'SILENT NIGHT', 'HIDDEN DOOR', 'ROBOT ARMY', 'ICE CASTLE'];

const randInt = (rng: Rng, lo: number, hi: number) => lo + Math.floor(rng() * (hi - lo + 1));
const pick = <T,>(rng: Rng, list: readonly T[]): T => list[Math.floor(rng() * list.length)];

export function makeCipherPuzzle(level: number, rng: Rng = Math.random): CipherPuzzle {
  const lv = Math.min(10, Math.max(1, Math.round(level)));
  const id = `cipher-${lv}-${Math.floor(rng() * 1e9).toString(36)}`;

  if (lv <= 6) {
    const word = pick(rng, SHORT);
    const shift = randInt(rng, 1, 3);
    return { id, kind: 'decode', level: lv, prompt: `Decode the secret word. Each letter was moved ${shift} place${shift > 1 ? 's' : ''} forward in the alphabet.`,
      show: shiftText(word, shift), answer: word, shift, startShift: shift };
  }
  if (lv === 7) {
    const word = pick(rng, MEDIUM);
    const shift = randInt(rng, 4, 13);
    return { id, kind: 'decode', level: lv, prompt: `Decode the message. The shift is ${shift}. Turn the wheel to ${shift} to help.`,
      show: shiftText(word, shift), answer: word, shift, startShift: 0 };
  }
  if (lv === 8) {
    const word = pick(rng, MEDIUM);
    const shift = randInt(rng, 2, 12);
    return { id, kind: 'encode', level: lv, prompt: `Write ${word} in secret code using a shift of ${shift}.`,
      show: word, answer: shiftText(word, shift), shift, startShift: shift };
  }
  if (lv === 9) {
    const word = pick(rng, LONG);
    const shift = randInt(rng, 3, 23);
    return { id, kind: 'crack', level: lv, prompt: 'Crack the code! The shift is a secret. Turn the wheel until the message makes sense.',
      show: shiftText(word, shift), answer: word, shift, startShift: 0, hint: `The first letter of the real word is ${word[0]}.` };
  }
  // level 10: a secret phrase with no hint, or the mirror cipher
  if (rng() < 0.5) {
    const phrase = pick(rng, PHRASES);
    return { id, kind: 'mirror', level: lv, prompt: 'This message uses the mirror cipher: A becomes Z, B becomes Y, C becomes X, and so on. Decode it.',
      show: atbash(phrase), answer: phrase, shift: null, startShift: 0 };
  }
  const phrase = pick(rng, PHRASES);
  const shift = randInt(rng, 3, 23);
  return { id, kind: 'crack', level: lv, prompt: 'Crack the code! Two secret words, and the shift is unknown.',
    show: shiftText(phrase, shift), answer: phrase, shift, startShift: 0, hint: `The message starts with the letter ${phrase[0]}.` };
}

export const checkCipher = (p: CipherPuzzle, typed: string) => lettersOnly(typed) === lettersOnly(p.answer);

// Pick a handful of distinct puzzles for a round
export function makeCipherRound(level: number, count: number, rng: Rng = Math.random): CipherPuzzle[] {
  const out: CipherPuzzle[] = [];
  const seen = new Set<string>();
  for (let tries = 0; out.length < count && tries < count * 20; tries++) {
    const p = makeCipherPuzzle(level, rng);
    if (seen.has(p.answer)) continue;
    seen.add(p.answer);
    out.push(p);
  }
  return shuffle(rng, out);
}
