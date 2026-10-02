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

// ---------- More generators: word problems, shapes, fractions and mental math ----------

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

const rateProblem: Gen = (rng, level) => {
  const speed = randInt(rng, 12, 60);
  const t1 = randInt(rng, 2, 4);
  const t2 = t1 + randInt(rng, 2, 5);
  return finish(rng, level, 'word problems', `A cyclist rides ${speed * t1} km in ${t1} hours at a steady speed. How far will she ride in ${t2} hours?`, `${speed * t2} km`,
    [`${speed * t1 + t2} km`, `${speed * t1 * t2} km`, `${speed * (t2 - 1)} km`, `${speed * t2 + speed} km`],
    `${speed * t1} ÷ ${t1} = ${speed} km each hour. ${speed} × ${t2} = ${speed * t2} km.`);
};

const unitPrice: Gen = (rng, level) => {
  const n = randInt(rng, 3, 6);
  const price = randInt(rng, 2, 9);
  const m = n + randInt(rng, 2, 5);
  return finish(rng, level, 'word problems', `${n} notebooks cost $${n * price}. How much do ${m} notebooks cost?`, `$${m * price}`,
    [`$${n * price + m}`, `$${m * price + price}`, `$${(m - n) * price}`, `$${m * price - price}`], `One notebook costs $${price}. ${m} × ${price} = ${m * price}.`);
};

const sumDiff: Gen = (rng, level) => {
  const small = randInt(rng, 6, 20);
  const diff = randInt(rng, 2, 12);
  const big = small + diff;
  return finish(rng, level, 'word problems', `Two numbers add up to ${small + big}. Their difference is ${diff}. What is the larger number?`, big,
    [small, big + 1, big - 1, big + diff], `Larger = (sum + difference) ÷ 2 = (${small + big} + ${diff}) ÷ 2 = ${big}.`);
};

const taxiFare: Gen = (rng, level) => {
  const base = randInt(rng, 2, 6);
  const per = randInt(rng, 2, 4);
  const km = randInt(rng, 5, 15);
  const total = base + per * km;
  return finish(rng, level, 'word problems', `A taxi charges $${base} plus $${per} for each km. A trip cost $${total}. How many km was it?`, `${km} km`,
    [`${km + 1} km`, `${km - 1} km`, `${Math.round(total / per)} km`, `${km + base} km`], `Take off the $${base} start fee: ${total - base}. Then ${total - base} ÷ ${per} = ${km} km.`);
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

const triangleArea: Gen = (rng, level) => {
  const b = 2 * randInt(rng, 3, 10);
  const h = randInt(rng, 3, 12);
  return finish(rng, level, 'geometry', `A triangle has a base of ${b} cm and a height of ${h} cm. What is its area?`, `${(b * h) / 2} cm²`,
    [`${b * h} cm²`, `${b + h} cm²`, `${(b * h) / 2 + b} cm²`, `${2 * (b + h)} cm²`], `Area = ½ × base × height = ½ × ${b} × ${h} = ${(b * h) / 2} cm².`);
};

const boxVolume: Gen = (rng, level) => {
  const l = randInt(rng, 2, 9);
  const w = randInt(rng, 2, 8);
  const h = randInt(rng, 2, 7);
  return finish(rng, level, 'geometry', `A box is ${l} cm long, ${w} cm wide and ${h} cm tall. What is its volume?`, `${l * w * h} cm³`,
    [`${l * w + h} cm³`, `${l + w + h} cm³`, `${2 * (l * w + w * h + l * h)} cm³`, `${l * w * h + l} cm³`], `Volume = length × width × height = ${l} × ${w} × ${h} = ${l * w * h} cm³.`);
};

const circleArea: Gen = (rng, level) => {
  const r = pick(rng, [2, 3, 4, 5, 10]);
  const area = Math.round(3.14 * r * r * 100) / 100;
  return finish(rng, level, 'geometry', `A circle has a radius of ${r} cm. What is its area? (Use π ≈ 3.14)`, `${area} cm²`,
    [`${Math.round(3.14 * 2 * r * 100) / 100} cm²`, `${Math.round(3.14 * r * 100) / 100} cm²`, `${Math.round(3.14 * r * r * 2 * 100) / 100} cm²`, `${r * r} cm²`],
    `Area = π × r² = 3.14 × ${r} × ${r} = ${area} cm².`);
};

const missingFactor: Gen = (rng, level) => {
  const f = randInt(rng, 3, 12);
  const x = randInt(rng, 3, 12);
  return finish(rng, level, 'algebra', `? × ${f} = ${f * x}`, x, [f * x - f, x + 1, x - 1, f], `${f * x} ÷ ${f} = ${x}.`);
};

const oneStepAdd: Gen = (rng, level) => {
  const x = randInt(rng, 5, 40);
  const c = randInt(rng, 6, 30);
  const minus = rng() < 0.5;
  return minus
    ? finish(rng, level, 'algebra', `Solve for x:  x − ${c} = ${x}`, x + c, [x - c, x, x + c + 1, x + c - 1], `Add ${c} to both sides: x = ${x} + ${c} = ${x + c}.`)
    : finish(rng, level, 'algebra', `Solve for x:  x + ${c} = ${x + c}`, x, [x + c, x + 1, x - 1, x + 2 * c], `Take ${c} from both sides: x = ${x}.`);
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

const fracToDecimal: Gen = (rng, level) => {
  const [n, d, dec] = pick(rng, [[1, 2, 0.5], [1, 4, 0.25], [3, 4, 0.75], [1, 5, 0.2], [3, 5, 0.6], [1, 8, 0.125], [2, 5, 0.4], [4, 5, 0.8]] as [number, number, number][]);
  const r3 = (v: number) => Math.round(v * 1000) / 1000;
  return finish(rng, level, 'decimals', `What is ${frac(n, d)} as a decimal?`, dec, [r3(dec + 0.1), r3(dec * 2), r3(n / 10 + d / 10), r3(1 - dec)],
    `${n} ÷ ${d} = ${dec}.`);
};

const addThree: Gen = (rng, level) => {
  const a = randInt(rng, 120, 640);
  const b = randInt(rng, 130, 330);
  return finish(rng, level, 'addition', `What is ${a} + ${b}?`, a + b, [a + b + 10, a + b - 10, a + b + 100, a + b - 100],
    `${a} + ${b} = ${a + b}. Add the hundreds, tens, then ones.`);
};

const subThree: Gen = (rng, level) => {
  const a = randInt(rng, 450, 990);
  const b = randInt(rng, 120, 440);
  return finish(rng, level, 'subtraction', `What is ${a} − ${b}?`, a - b, [a - b + 10, a - b - 10, a - b + 100, a - b - 100], `${a} − ${b} = ${a - b}.`);
};

const twoByTwo: Gen = (rng, level) => {
  const a = randInt(rng, 11, 25);
  const b = randInt(rng, 11, 19);
  return finish(rng, level, 'multiplication', `What is ${a} × ${b}?`, a * b, [a * b + 10, a * b - 10, a * b + a, a * b - b, (a + 1) * b],
    `${a} × ${b} = ${a} × 10 + ${a} × ${b - 10} = ${a * 10} + ${a * (b - 10)} = ${a * b}.`);
};

const divThree: Gen = (rng, level) => {
  const d = randInt(rng, 3, 9);
  const q = randInt(rng, 12, 60);
  return finish(rng, level, 'division', `What is ${q * d} ÷ ${d}?`, q, [q + 1, q - 1, q + 10, q - 10], `${d} × ${q} = ${q * d}, so ${q * d} ÷ ${d} = ${q}.`);
};

// Every generator, tagged with the level(s) it suits and the topic it asks about.
// The topic is what the game modes filter on (see data/quizGames.ts); a test checks the tag
// matches the topic of the question the generator really produces.
interface Entry { level: number; topic: string; gen: Gen }
const REGISTRY: Entry[] = [];
const at = (levels: number[], topic: string, gen: Gen) => levels.forEach((level) => REGISTRY.push({ level, topic, gen }));

at([1], 'addition', addSmall(5)); at([1], 'addition', addSmall(6)); at([1], 'subtraction', subSmall(5));
at([2], 'addition', addSmall(10)); at([2], 'subtraction', subSmall(10)); at([2, 3], 'word problems', wordAdd);
at([3], 'addition', addSmall(20)); at([3], 'subtraction', subSmall(20)); at([3], 'addition', missingAddend);
at([2, 3], 'geometry', shapeSides);
at([4], 'addition', addBig); at([4, 5], 'subtraction', subBig); at([4, 5], 'multiplication', timesEasy);
at([4], 'word problems', wordSub); at([4, 5], 'geometry', perimeter);
at([5], 'multiplication', timesTable); at([5, 6], 'word problems', wordTimes);
at([6, 7], 'division', divFacts); at([6], 'multiplication', twoByOne); at([6], 'fractions', fractionOfNumber);
at([6, 7], 'word problems', twoStepWord); at([6, 7], 'geometry', triangleAngle); at([6, 7], 'algebra', missingFactor);
at([6, 7], 'fractions', compareFractions);
at([7], 'fractions', addLikeFractions); at([7], 'decimals', decimalAdd); at([7], 'percentages', easyPercent);
at([7, 8], 'geometry', area); at([7, 8], 'addition', addThree); at([7, 8], 'subtraction', subThree);
at([7], 'word problems', rateProblem); at([7, 8], 'algebra', oneStepAdd);
at([8], 'order of operations', orderOfOps); at([8], 'negative numbers', negatives); at([8, 9], 'percentages', percentOf);
at([8], 'fractions', simplify); at([8], 'word problems', unitPrice); at([8], 'geometry', triangleArea); at([8], 'geometry', boxVolume);
at([8, 9], 'multiplication', twoByTwo); at([8, 9], 'decimals', fracToDecimal);
at([9], 'algebra', oneStepEq); at([9], 'exponents', exponents); at([9, 10], 'fractions', unlikeFractions);
at([9], 'ratios', ratio); at([9], 'word problems', sumDiff); at([9], 'geometry', circleArea); at([9, 10], 'division', divThree);
at([10], 'algebra', twoStepEq); at([10], 'geometry', pythagoras); at([10], 'percentages', percentChange);
at([10], 'statistics', mean); at([10], 'negative numbers', negMult); at([10], 'word problems', taxiFare);
at([10], 'exponents', exponents); at([10], 'order of operations', orderOfOps);

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
