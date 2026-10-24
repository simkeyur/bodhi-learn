// Math questions are generated rather than stored: there are endless sums and the answer is
// always computed, never typed in. Pure and seedable, unit tested with `npm run test:logic`.

import { mulberry32, shuffle, type Rng } from '../data/logicData.ts';
import type { Question } from './types';

export { mulberry32 };

const randInt = (rng: Rng, lo: number, hi: number) => lo + Math.floor(rng() * (hi - lo + 1));
const pick = <T,>(rng: Rng, list: readonly T[]): T => list[Math.floor(rng() * list.length)];
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

type Value = number | string;

// Two fractions that are equal in value (2/18 and 1/9) must not both appear as choices
const valueKey = (s: string): string => {
  const m = /^(\d+)\/(\d+)$/.exec(s);
  if (!m) return s;
  const g = gcd(Number(m[1]), Number(m[2]));
  return `${Number(m[1]) / g}/${Number(m[2]) / g}`;
};

// Build a multiple-choice question from the right answer and some plausible wrong ones.
// Always returns 4 distinct choices with the right one among them.
function finish(rng: Rng, level: number, topic: string, prompt: string, correct: Value, wrong: Value[], explain: string): Question {
  const wanted = String(correct);
  const seen = new Set<string>([valueKey(wanted)]);
  const options: string[] = [];
  for (const w of wrong) {
    const s = String(w);
    if (!seen.has(valueKey(s))) { seen.add(valueKey(s)); options.push(s); }
  }
  // Pad with nearby values when the hand-made wrong answers weren't enough (or collided)
  const pad = (make: (d: number) => string | null) => {
    for (const d of [1, -1, 2, -2, 10, -10, 3, -3, 5, 20, 100]) {
      if (options.length >= 3) break;
      const s = make(d);
      if (s !== null && !seen.has(valueKey(s))) { seen.add(valueKey(s)); options.push(s); }
    }
  };
  if (typeof correct === 'number') {
    pad((d) => String(correct + d));
  } else {
    const fraction = /^(\d+)\/(\d+)$/.exec(wanted);
    const affixed = /^(\$?)(\d+(?:\.\d+)?)(.*)$/.exec(wanted);
    if (fraction) pad((d) => (Number(fraction[1]) + d > 0 ? `${Number(fraction[1]) + d}/${fraction[2]}` : null));
    else if (affixed) pad((d) => (Number(affixed[2]) + d >= 0 ? `${affixed[1]}${Math.round((Number(affixed[2]) + d) * 10) / 10}${affixed[3]}` : null));
  }
  const choices = shuffle(rng, [wanted, ...options.slice(0, 3)]);
  return { id: `gen-${topic}-${level}`, topic, level, prompt, choices, answer: choices.indexOf(wanted), explain };
}

const frac = (n: number, d: number) => `${n}/${d}`;

type Gen = (rng: Rng, level: number) => Question;

// ---------- Level 1-3: first numbers ----------

const addSmall = (max: number): Gen => (rng, level) => {
  const a = randInt(rng, 1, max - 1);
  const b = randInt(rng, 1, max - a);
  return finish(rng, level, 'addition', `What is ${a} + ${b}?`, a + b, [a + b + 1, a + b - 1, a, b],
    `${a} + ${b} = ${a + b}. Count on from ${a}.`);
};

const subSmall = (max: number): Gen => (rng, level) => {
  const a = randInt(rng, 2, max);
  const b = randInt(rng, 1, a - 1);
  return finish(rng, level, 'subtraction', `What is ${a} − ${b}?`, a - b, [a - b + 1, a - b - 1, a + b],
    `${a} − ${b} = ${a - b}. Take ${b} away from ${a}.`);
};

const missingAddend: Gen = (rng, level) => {
  const total = randInt(rng, 8, 20);
  const a = randInt(rng, 2, total - 2);
  return finish(rng, level, 'addition', `${a} + ? = ${total}`, total - a, [total + a, total - a + 1, total - a - 1],
    `${total} − ${a} = ${total - a}, so the missing number is ${total - a}.`);
};

const wordAdd: Gen = (rng, level) => {
  const a = randInt(rng, 3, 9);
  const b = randInt(rng, 2, 9);
  const thing = pick(rng, ['apples', 'stickers', 'marbles', 'cookies']);
  return finish(rng, level, 'word problems', `Mia has ${a} ${thing}. A friend gives her ${b} more. How many ${thing} now?`, a + b,
    [a - b > 0 ? a - b : a + b + 2, a + b + 1, a + b - 1], `${a} + ${b} = ${a + b}.`);
};

// ---------- Level 4-6: bigger numbers, times tables ----------

const addBig: Gen = (rng, level) => {
  const a = randInt(rng, 12, 79);
  const b = randInt(rng, 11, 99 - a);
  return finish(rng, level, 'addition', `What is ${a} + ${b}?`, a + b, [a + b + 10, a + b - 10, a + b + 1, a + b - 1],
    `Add the tens, then the ones: ${a} + ${b} = ${a + b}.`);
};

const subBig: Gen = (rng, level) => {
  const a = randInt(rng, 30, 99);
  const b = randInt(rng, 11, a - 5);
  return finish(rng, level, 'subtraction', `What is ${a} − ${b}?`, a - b, [a - b + 10, a - b - 10, a - b + 1, a - b - 1],
    `${a} − ${b} = ${a - b}.`);
};

const timesEasy: Gen = (rng, level) => {
  const a = pick(rng, [2, 5, 10]);
  const b = randInt(rng, 2, 10);
  return finish(rng, level, 'multiplication', `What is ${a} × ${b}?`, a * b, [a * b + a, a * b - a, a + b],
    `${a} × ${b} means ${b} groups of ${a}, which is ${a * b}.`);
};

const timesTable: Gen = (rng, level) => {
  const a = randInt(rng, 3, 12);
  const b = randInt(rng, 3, 12);
  return finish(rng, level, 'multiplication', `What is ${a} × ${b}?`, a * b, [a * b + a, a * b - b, (a + 1) * b, a * (b - 1)],
    `${a} × ${b} = ${a * b}.`);
};

const wordTimes: Gen = (rng, level) => {
  const bags = randInt(rng, 3, 9);
  const each = randInt(rng, 3, 9);
  return finish(rng, level, 'word problems', `There are ${bags} bags with ${each} oranges in each bag. How many oranges in all?`, bags * each,
    [bags + each, bags * each + each, bags * each - bags], `${bags} × ${each} = ${bags * each}.`);
};

const divFacts: Gen = (rng, level) => {
  const q = randInt(rng, 2, 12);
  const d = randInt(rng, 2, 10);
  return finish(rng, level, 'division', `What is ${q * d} ÷ ${d}?`, q, [q + 1, q - 1, d, q + d],
    `${d} × ${q} = ${q * d}, so ${q * d} ÷ ${d} = ${q}.`);
};

const twoByOne: Gen = (rng, level) => {
  const a = randInt(rng, 12, 49);
  const b = randInt(rng, 3, 9);
  return finish(rng, level, 'multiplication', `What is ${a} × ${b}?`, a * b, [a * b + 10, a * b - 10, a * b + b, (a + 1) * b - 2],
    `Split it up: ${Math.floor(a / 10) * 10} × ${b} + ${a % 10} × ${b} = ${a * b}.`);
};

const fractionOfNumber: Gen = (rng, level) => {
  const d = pick(rng, [2, 3, 4, 5]);
  const whole = d * randInt(rng, 2, 8);
  return finish(rng, level, 'fractions', `What is 1/${d} of ${whole}?`, whole / d, [whole - d, whole / d + 1, whole * d, whole / d - 1],
    `Split ${whole} into ${d} equal parts. Each part is ${whole / d}.`);
};

// ---------- More generators: word problems, shapes and fractions ----------

const wordSub: Gen = (rng, level) => {
  const a = randInt(rng, 30, 80);
  const b = randInt(rng, 11, a - 10);
  const thing = pick(rng, ['stickers', 'marbles', 'cards', 'coins']);
  return finish(rng, level, 'word problems', `Tom had ${a} ${thing} and gave ${b} to his friend. How many does he have left?`, a - b,
    [a + b, a - b + 10, a - b - 10, b], `${a} − ${b} = ${a - b}.`);
};

const twoStepWord: Gen = (rng, level) => {
  const packs = randInt(rng, 3, 6);
  const each = randInt(rng, 4, 8);
  const lost = randInt(rng, 2, 6);
  return finish(rng, level, 'word problems', `A pack has ${each} pens. Mia buys ${packs} packs, then loses ${lost} pens. How many pens does she have?`, packs * each - lost,
    [packs * each + lost, packs * each, packs + each - lost, packs * each - lost + each], `${packs} × ${each} = ${packs * each}, then ${packs * each} − ${lost} = ${packs * each - lost}.`);
};

const SHAPES: [string, number][] = [['triangle', 3], ['square', 4], ['rectangle', 4], ['pentagon', 5], ['hexagon', 6], ['octagon', 8]];
const shapeSides: Gen = (rng, level) => {
  const [name, sides] = pick(rng, level <= 2 ? SHAPES.slice(0, 3) : SHAPES);
  return finish(rng, level, 'geometry', `How many sides does a ${name} have?`, sides, [sides + 1, sides - 1, sides + 2], `A ${name} has ${sides} sides.`);
};

const perimeter: Gen = (rng, level) => {
  const l = randInt(rng, 4, 15);
  const w = randInt(rng, 2, l - 1);
  return finish(rng, level, 'geometry', `A rectangle is ${l} cm long and ${w} cm wide. What is its perimeter?`, `${2 * (l + w)} cm`,
    [`${l * w} cm`, `${l + w} cm`, `${2 * l + w} cm`, `${2 * (l + w) + 2} cm`], `Perimeter = 2 × (${l} + ${w}) = ${2 * (l + w)} cm. (${l * w} would be the area.)`);
};

const triangleAngle: Gen = (rng, level) => {
  const a = randInt(rng, 30, 80);
  const b = randInt(rng, 30, 80);
  return finish(rng, level, 'geometry', `Two angles of a triangle are ${a}° and ${b}°. What is the third angle?`, `${180 - a - b}°`,
    [`${360 - a - b}°`, `${90 - a}°`, `${a + b}°`, `${180 - a - b + 10}°`], `The angles of a triangle add up to 180°: 180 − ${a} − ${b} = ${180 - a - b}°.`);
};

const missingFactor: Gen = (rng, level) => {
  const f = randInt(rng, 3, 12);
  const x = randInt(rng, 3, 12);
  return finish(rng, level, 'algebra', `? × ${f} = ${f * x}`, x, [f * x - f, x + 1, x - 1, f], `${f * x} ÷ ${f} = ${x}.`);
};

const compareFractions: Gen = (rng, level) => {
  const pairs: [[number, number], [number, number]][] = [[[3, 4], [2, 3]], [[5, 8], [3, 5]], [[2, 5], [1, 3]], [[7, 10], [3, 4]], [[4, 9], [1, 2]], [[5, 6], [4, 5]]];
  const [x, y] = pick(rng, pairs);
  const bigger = x[0] / x[1] > y[0] / y[1] ? x : y;
  const smaller = bigger === x ? y : x;
  const [first, second] = rng() < 0.5 ? [x, y] : [y, x];
  return finish(rng, level, 'fractions', `Which fraction is bigger: ${frac(first[0], first[1])} or ${frac(second[0], second[1])}?`, frac(bigger[0], bigger[1]),
    [frac(smaller[0], smaller[1]), frac(1, 2), frac(bigger[0] + 1, bigger[1])],
    `Compare them over a common bottom: ${frac(bigger[0] * smaller[1], bigger[1] * smaller[1])} is more than ${frac(smaller[0] * bigger[1], smaller[1] * bigger[1])}.`);
};

// Every generator, tagged with the level(s) it suits and the topic it asks about.
// The topic is what the game modes filter on (see data/quizGames.ts); a test checks the tag
// matches the topic of the question the generator really produces.
interface Entry { level: number; topic: string; gen: Gen }
const REGISTRY: Entry[] = [];
const at = (levels: number[], topic: string, gen: Gen) => levels.forEach((level) => REGISTRY.push({ level, topic, gen }));

// Bodhi games are for Pre-K to grade 3 (levels 1-6); older children get test prep instead
at([1], 'addition', addSmall(5));
at([1], 'addition', addSmall(6));
at([1], 'subtraction', subSmall(5));
at([2], 'addition', addSmall(10));
at([2], 'subtraction', subSmall(10));
at([2, 3], 'word problems', wordAdd);
at([3], 'addition', addSmall(20));
at([3], 'subtraction', subSmall(20));
at([3], 'addition', missingAddend);
at([2, 3], 'geometry', shapeSides);
at([4], 'addition', addBig);
at([4, 5], 'subtraction', subBig);
at([4, 5], 'multiplication', timesEasy);
at([4], 'word problems', wordSub);
at([4, 5], 'geometry', perimeter);
at([5], 'multiplication', timesTable);
at([5, 6], 'word problems', wordTimes);
at([6], 'division', divFacts);
at([6], 'multiplication', twoByOne);
at([6], 'fractions', fractionOfNumber);
at([6], 'word problems', twoStepWord);
at([6], 'geometry', triangleAngle);
at([6], 'algebra', missingFactor);
at([6], 'fractions', compareFractions);

export const MATH_REGISTRY: readonly Entry[] = REGISTRY;

// A question for `level`, optionally limited to some topics (a game's topic group).
// Uses generators within one level of the target; if the topic has none that close (a "fractions"
// game for a child whose level is below where fractions start), it uses the nearest ones.
export function makeMathQuestion(level: number, rng: Rng = Math.random, topics?: readonly string[]): Question {
  const lv = Math.min(10, Math.max(1, Math.round(level)));
  const pool = topics ? REGISTRY.filter((e) => topics.includes(e.topic)) : REGISTRY;
  const candidates = pool.length ? pool : REGISTRY;
  const nearest = Math.min(...candidates.map((e) => Math.abs(e.level - lv)));
  const reach = Math.max(1, nearest);
  const close = candidates.filter((e) => Math.abs(e.level - lv) <= reach);
  const entry = pick(rng, close);
  const q = entry.gen(rng, entry.level);
  return { ...q, id: `${q.id}-${Math.floor(rng() * 1e9).toString(36)}` };
}
