// Math questions are generated rather than stored: there are endless sums and the answer is
// always computed, never typed in. Pure and seedable, unit tested with `npm run test:logic`.

import { mulberry32, shuffle, type Rng } from '../data/logicData.ts';
import type { Question } from './types';

export { mulberry32 };

const randInt = (rng: Rng, lo: number, hi: number) => lo + Math.floor(rng() * (hi - lo + 1));
const pick = <T,>(rng: Rng, list: readonly T[]): T => list[Math.floor(rng() * list.length)];
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

type Value = number | string;

// Build a multiple-choice question from the right answer and some plausible wrong ones.
// Always returns 4 distinct choices with the right one among them.
function finish(rng: Rng, level: number, topic: string, prompt: string, correct: Value, wrong: Value[], explain: string): Question {
  const wanted = String(correct);
  const seen = new Set<string>([wanted]);
  const options: string[] = [];
  for (const w of wrong) {
    const s = String(w);
    if (!seen.has(s)) { seen.add(s); options.push(s); }
  }
  // Pad with nearby values when the hand-made wrong answers weren't enough (or collided)
  const pad = (make: (d: number) => string | null) => {
    for (const d of [1, -1, 2, -2, 10, -10, 3, -3, 5, 20, 100]) {
      if (options.length >= 3) break;
      const s = make(d);
      if (s !== null && !seen.has(s)) { seen.add(s); options.push(s); }
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

// ---------- Level 7-8: fractions, decimals, percentages ----------

const addLikeFractions: Gen = (rng, level) => {
  const d = randInt(rng, 5, 12);
  const a = randInt(rng, 1, d - 3);
  const b = randInt(rng, 1, d - a - 1);
  return finish(rng, level, 'fractions', `What is ${frac(a, d)} + ${frac(b, d)}?`, frac(a + b, d),
    [frac(a + b, d * 2), frac(a + b + 1, d), frac(a * b, d), frac(a + b, d + d)],
    `The bottoms match, so just add the tops: ${a} + ${b} = ${a + b}, giving ${frac(a + b, d)}.`);
};

const decimalAdd: Gen = (rng, level) => {
  const a = randInt(rng, 11, 89) / 10;
  const b = randInt(rng, 11, 89) / 10;
  const sum = Math.round((a + b) * 10) / 10;
  return finish(rng, level, 'decimals', `What is ${a} + ${b}?`, sum, [sum + 1, sum - 0.1, sum + 0.1, sum - 1].map((v) => Math.round(v * 10) / 10),
    `Line up the decimal points: ${a} + ${b} = ${sum}.`);
};

const easyPercent: Gen = (rng, level) => {
  const p = pick(rng, [10, 50, 25]);
  const base = pick(rng, p === 25 ? [40, 80, 120, 200] : [20, 40, 60, 80, 120, 200]);
  const ans = (base * p) / 100;
  return finish(rng, level, 'percentages', `What is ${p}% of ${base}?`, ans, [base - ans, ans * 2, ans + 10, ans / 2],
    `${p}% of ${base} = ${base} × ${p}/100 = ${ans}.`);
};

const area: Gen = (rng, level) => {
  const w = randInt(rng, 3, 14);
  const h = randInt(rng, 3, 14);
  return finish(rng, level, 'geometry', `A rectangle is ${w} cm wide and ${h} cm tall. What is its area?`, `${w * h} cm²`,
    [`${2 * (w + h)} cm²`, `${w * h + w} cm²`, `${w + h} cm²`, `${w * h - h} cm²`],
    `Area = width × height = ${w} × ${h} = ${w * h} cm². (${2 * (w + h)} would be the perimeter.)`);
};

const orderOfOps: Gen = (rng, level) => {
  const a = randInt(rng, 2, 9);
  const b = randInt(rng, 2, 9);
  const c = randInt(rng, 2, 9);
  return finish(rng, level, 'order of operations', `What is ${a} + ${b} × ${c}?`, a + b * c, [(a + b) * c, a + b + c, a * b + c, a + b * c + 1],
    `Multiply first: ${b} × ${c} = ${b * c}, then add ${a} to get ${a + b * c}.`);
};

const negatives: Gen = (rng, level) => {
  const a = randInt(rng, 2, 9);
  const b = randInt(rng, a + 1, 15);
  return finish(rng, level, 'negative numbers', `What is ${a} − ${b}?`, a - b, [b - a, -(a + b), a + b, a - b + 2],
    `${a} − ${b} goes below zero: the answer is ${a - b}.`);
};

const percentOf: Gen = (rng, level) => {
  const p = pick(rng, [15, 20, 30, 40, 75]);
  const base = pick(rng, [20, 40, 60, 80, 120, 200]);
  const ans = (base * p) / 100;
  return finish(rng, level, 'percentages', `A game costs $${base}. It is ${p}% off. How many dollars do you save?`, `$${ans}`,
    [`$${base - ans}`, `$${ans + 5}`, `$${p}`, `$${ans * 2}`], `${p}% of ${base} = ${ans}, so you save $${ans}.`);
};

const simplify: Gen = (rng, level) => {
  const g = randInt(rng, 2, 6);
  const [n, d] = pick(rng, [[1, 2], [2, 3], [3, 4], [3, 5], [5, 6], [2, 5], [4, 7]]);
  return finish(rng, level, 'fractions', `Which fraction is the same as ${frac(n * g, d * g)} in simplest form?`, frac(n, d),
    [frac(d, n), frac(n + 1, d), frac(n, d + 1), frac(n * g, d)], `Divide the top and bottom by ${g}: ${frac(n * g, d * g)} = ${frac(n, d)}.`);
};

// ---------- Level 9-10: pre-algebra ----------

const oneStepEq: Gen = (rng, level) => {
  const x = randInt(rng, 3, 15);
  const k = randInt(rng, 2, 9);
  return finish(rng, level, 'algebra', `Solve for x:  ${k}x = ${k * x}`, x, [k * x - k, x + k, k * x, x - 1], `Divide both sides by ${k}: x = ${x}.`);
};

const exponents: Gen = (rng, level) => {
  const base = randInt(rng, 2, 6);
  const exp = base > 4 ? 2 : randInt(rng, 2, 4);
  const val = base ** exp;
  return finish(rng, level, 'exponents', `What is ${base}${['⁰', '¹', '²', '³', '⁴'][exp]}?`, val, [base * exp, val + base, val - base, base ** (exp + 1)],
    `${base}${['⁰', '¹', '²', '³', '⁴'][exp]} means ${base} multiplied by itself ${exp} times = ${val}.`);
};

const unlikeFractions: Gen = (rng, level) => {
  const [d1, d2] = pick(rng, [[2, 3], [2, 5], [3, 4], [4, 6], [3, 5], [2, 4]]);
  const n1 = 1;
  const n2 = pick(rng, [1, 1, 2].filter((n) => n < d2));
  const den = (d1 * d2) / gcd(d1, d2);
  const top = (n1 * den) / d1 + (n2 * den) / d2;
  const g = gcd(top, den);
  return finish(rng, level, 'fractions', `What is ${frac(n1, d1)} + ${frac(n2, d2)}?`, frac(top / g, den / g),
    [frac(n1 + n2, d1 + d2), frac(top / g + 1, den / g), frac(n1 + n2, d1 * d2), frac(top / g, den / g + 1)],
    `Use a common bottom of ${den}: ${frac((n1 * den) / d1, den)} + ${frac((n2 * den) / d2, den)} = ${frac(top, den)}${g > 1 ? ` = ${frac(top / g, den / g)}` : ''}.`);
};

const ratio: Gen = (rng, level) => {
  const a = randInt(rng, 2, 5);
  const b = randInt(rng, 2, 7);
  const k = randInt(rng, 3, 9);
  return finish(rng, level, 'ratios', `Red and blue beads are in the ratio ${a}:${b}. There are ${a * k} red beads. How many blue beads?`, b * k,
    [a * b, b * k + k, a * k + b, b + k], `${a} parts is ${a * k}, so 1 part is ${k}. Blue is ${b} parts: ${b} × ${k} = ${b * k}.`);
};

const twoStepEq: Gen = (rng, level) => {
  const x = randInt(rng, 2, 12);
  const k = randInt(rng, 2, 8);
  const c = randInt(rng, 1, 15);
  return finish(rng, level, 'algebra', `Solve for x:  ${k}x + ${c} = ${k * x + c}`, x, [x + 1, x - 1, k * x, x + c],
    `Subtract ${c}: ${k}x = ${k * x}. Then divide by ${k}: x = ${x}.`);
};

const pythagoras: Gen = (rng, level) => {
  const [a, b, c] = pick(rng, [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25]]);
  return finish(rng, level, 'geometry', `A right triangle has short sides ${a} and ${b}. How long is the longest side?`, c,
    [a + b, c + 1, c - 1, Math.abs(b - a)], `a² + b² = ${a * a} + ${b * b} = ${c * c}, and the square root of ${c * c} is ${c}.`);
};

const percentChange: Gen = (rng, level) => {
  const base = pick(rng, [20, 40, 50, 80, 200]);
  const p = pick(rng, [10, 25, 50]);
  const up = base + (base * p) / 100;
  return finish(rng, level, 'percentages', `A price goes from $${base} up by ${p}%. What is the new price?`, `$${up}`,
    [`$${(base * p) / 100}`, `$${base - (base * p) / 100}`, `$${up + 5}`, `$${base + p}`],
    `${p}% of ${base} is ${(base * p) / 100}. Add it on: ${base} + ${(base * p) / 100} = ${up}.`);
};

const mean: Gen = (rng, level) => {
  const m = randInt(rng, 6, 20);
  const offs = [-4, -1, 2, 3].map((o) => o + 0); // sums to 0
  const nums = shuffle(rng, offs.map((o) => m + o)).concat(m);
  const total = nums.reduce((s, n) => s + n, 0);
  return finish(rng, level, 'statistics', `What is the mean (average) of ${nums.join(', ')}?`, total / nums.length,
    [total / nums.length + 1, total / nums.length - 1, total, Math.max(...nums)], `Add them up (${total}) and divide by ${nums.length}: ${total / nums.length}.`);
};

const negMult: Gen = (rng, level) => {
  const a = randInt(rng, 2, 9);
  const b = randInt(rng, 2, 9);
  const neg = rng() < 0.5;
  return finish(rng, level, 'negative numbers', neg ? `What is (−${a}) × (−${b})?` : `What is (−${a}) × ${b}?`, neg ? a * b : -a * b,
    [neg ? -a * b : a * b, a + b, -(a + b), neg ? a * b + a : -a * b - a],
    neg ? 'A negative times a negative is positive.' : 'A negative times a positive is negative.');
};

const GENERATORS: Record<number, Gen[]> = {
  1: [addSmall(5), addSmall(6), subSmall(5)],
  2: [addSmall(10), subSmall(10), wordAdd],
  3: [addSmall(20), subSmall(20), missingAddend, wordAdd],
  4: [addBig, subBig, timesEasy],
  5: [timesTable, wordTimes, subBig, timesEasy],
  6: [divFacts, twoByOne, fractionOfNumber, wordTimes],
  7: [addLikeFractions, decimalAdd, easyPercent, area, divFacts],
  8: [orderOfOps, negatives, percentOf, simplify, area],
  9: [oneStepEq, exponents, unlikeFractions, ratio, percentOf],
  10: [twoStepEq, pythagoras, percentChange, mean, negMult, unlikeFractions],
};

export function makeMathQuestion(level: number, rng: Rng = Math.random): Question {
  const lv = Math.min(10, Math.max(1, Math.round(level)));
  const q = pick(rng, GENERATORS[lv])(rng, lv);
  return { ...q, id: `${q.id}-${Math.floor(rng() * 1e9).toString(36)}` };
}

export const MATH_TOPICS_BY_LEVEL = GENERATORS;
