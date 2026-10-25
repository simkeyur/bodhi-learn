// Grade 1 Strand 1: Numerical Representations and Relationships
// Standards: 1.2A, 1.2B, 1.2C, 1.2D, 1.2E, 1.2F, 1.2G

import { pick, randInt } from '../../rng.ts';
import { fig, mc, one, txt, type Gen } from '../build.ts';

// ---------- 1.2A Instant recognition of structured arrangements ----------
export const instantQuantities: Gen = (rng, d) => {
  // Ten frame with counters: d=1 (up to 10), d=2,3 (up to 20 across 2 frames)
  const max = d === 1 ? 10 : 20;
  const count = randInt(rng, 1, max);
  const alt = `Ten frame showing ${count} dots`;

  return one('mc', [
    fig({ kind: 'tenFrame', count, frames: count > 10 ? 2 : 1 }, alt),
    txt('How many dots are in the frame?'),
  ],
  mc(rng, `${count}`, [
    `${count + 1}`,
    `${count > 1 ? count - 1 : count + 2}`,
    `${count > 2 ? count - 2 : count + 3}`,
  ]),
  `Count the dots in the frame. There are ${count} dots in all.`);
};

// ---------- 1.2B Compose and decompose numbers up to 120 ----------
export const composeDecompose120: Gen = (rng, d) => {
  if (d === 1) {
    const tens = randInt(rng, 1, 9);
    const ones = randInt(rng, 1, 9);
    const total = tens * 10 + ones;
    return one('mc', [
      fig({ kind: 'baseTenBlocks', tens, ones }, `${tens} tens rods and ${ones} ones units`),
      txt('What number do the base-ten blocks show?'),
    ],
    mc(rng, `${total}`, [
      `${ones * 10 + tens}`,
      `${total + 10}`,
      `${total - 1}`,
    ]),
    `${tens} tens is ${tens * 10}, and ${ones} ones is ${ones}. ${tens * 10} + ${ones} = ${total}.`);
  }

  // d >= 2: numbers with hundreds, tens, and ones up to 120
  const hundreds = 1;
  const tens = randInt(rng, 0, 2);
  const ones = randInt(rng, 1, 9);
  const total = 100 + tens * 10 + ones;
  return one('mc', [
    fig({ kind: 'baseTenBlocks', hundreds, tens, ones }, `1 hundred flat, ${tens} tens rods, and ${ones} ones units`),
    txt('What number is shown by the blocks?'),
  ],
  mc(rng, `${total}`, [
    `${total - 10}`,
    `${total + 10}`,
    `${tens * 10 + ones}`,
  ]),
  `1 hundred is 100, ${tens} tens is ${tens * 10}, and ${ones} ones is ${ones}. Total: ${total}.`);
};

// ---------- 1.2C Expanded and standard form to 120 ----------
export const expandedForm120: Gen = (rng, d) => {
  const isHundreds = d === 3;
  if (isHundreds) {
    const tens = randInt(rng, 0, 2);
    const ones = randInt(rng, 1, 9);
    const num = 100 + tens * 10 + ones;
    const right = tens > 0 ? `100 + ${tens * 10} + ${ones}` : `100 + ${ones}`;
    return one('mc', [txt(`What is the expanded form of ${num}?`)],
      mc(rng, right, [
        `10 + ${tens * 10} + ${ones}`,
        `${num}`,
        `100 + ${ones * 10} + ${tens}`,
      ]),
      `${num} is made of 1 hundred, ${tens} tens, and ${ones} ones. Expanded form: ${right}.`);
  }

  const tens = randInt(rng, 2, 9);
  const ones = randInt(rng, 1, 9);
  const num = tens * 10 + ones;
  return one('mc', [txt(`What is the expanded form of ${num}?`)],
    mc(rng, `${tens * 10} + ${ones}`, [
      `${tens} + ${ones}`,
      `${ones * 10} + ${tens}`,
      `${tens * 10 + ones}`,
    ]),
    `${num} has ${tens} tens (${tens * 10}) and ${ones} ones (${ones}). The expanded form is ${tens * 10} + ${ones}.`);
};

// ---------- 1.2D Greater than or less than up to 120 ----------
export const greaterLess120: Gen = (rng, d) => {
  const base = randInt(rng, 15, 115);
  const isMore = rng() < 0.5;

  if (isMore) {
    const diff = d === 1 ? 1 : randInt(rng, 2, 5);
    const right = base + diff;
    return one('mc', [txt(`Which number is greater than ${base}?`)],
      mc(rng, `${right}`, [
        `${base - 1}`,
        `${base - 3}`,
        `${base - 5}`,
      ]),
      `${right} is greater than ${base} because it comes after ${base}.`);
  }

  const diff = d === 1 ? 1 : randInt(rng, 2, 5);
  const right = base - diff;
  return one('mc', [txt(`Which number is less than ${base}?`)],
    mc(rng, `${right}`, [
      `${base + 1}`,
      `${base + 3}`,
      `${base + 5}`,
    ]),
    `${right} is less than ${base} because it comes before ${base}.`);
};

// ---------- 1.2E Compare numbers using place value words ----------
export const comparePlaceValueWords: Gen = (rng, _d) => {
  const tens1 = randInt(rng, 2, 9);
  let tens2 = randInt(rng, 2, 9);
  while (tens2 === tens1) tens2 = randInt(rng, 2, 9);
  const ones1 = randInt(rng, 1, 9);
  const ones2 = randInt(rng, 1, 9);
  const num1 = tens1 * 10 + ones1;
  const num2 = tens2 * 10 + ones2;

  const isGreater = num1 > num2;
  const right = isGreater ? `${num1} is greater than ${num2}` : `${num1} is less than ${num2}`;
  const wrong1 = isGreater ? `${num1} is less than ${num2}` : `${num1} is greater than ${num2}`;
  const wrong2 = `${num1} is equal to ${num2}`;
  const wrong3 = isGreater ? `${num2} is greater than ${num1}` : `${num2} is less than ${num1}`;

  return one('mc', [txt(`Compare ${num1} and ${num2}. Which sentence is true?`)],
    mc(rng, right, [wrong1, wrong2, wrong3]),
    `${num1} has ${tens1} tens and ${num2} has ${tens2} tens. So ${right}.`);
};

// ---------- 1.2F Order whole numbers up to 120 ----------
export const orderNumbers120: Gen = (rng, _d) => {
  const nums = [randInt(rng, 20, 50), randInt(rng, 55, 80), randInt(rng, 85, 115)];
  const [a, b, c] = nums;
  const right = `${a}, ${b}, ${c}`;

  return one('mc', [
    txt(`Which list shows the numbers ${c}, ${a}, and ${b} ordered from least to greatest?`),
  ],
  mc(rng, right, [
    `${c}, ${b}, ${a}`,
    `${b}, ${a}, ${c}`,
    `${a}, ${c}, ${b}`,
  ]),
  `Compare the tens: ${a} is smallest, then ${b}, and ${c} is greatest. Order: ${right}.`);
};

// ---------- 1.2G Compare two numbers using symbols ----------
export const compareSymbols100: Gen = (rng, _d) => {
  const kind = pick(rng, ['greater', 'less', 'equal']);
  let a: number, b: number, sym: string;
  if (kind === 'greater') {
    b = randInt(rng, 10, 80);
    a = b + randInt(rng, 2, 18);
    sym = '>';
  } else if (kind === 'less') {
    a = randInt(rng, 10, 80);
    b = a + randInt(rng, 2, 18);
    sym = '<';
  } else {
    a = randInt(rng, 10, 95);
    b = a;
    sym = '=';
  }

  const allSymbols = ['>', '<', '=', '+'];
  const wrongSymbols = allSymbols.filter((s) => s !== sym);

  return one('mc', [txt(`Which symbol makes this comparison true?`), txt(`${a}  [ ? ]  ${b}`)],
    mc(rng, sym, wrongSymbols),
    `${a} is ${kind === 'greater' ? 'greater than' : kind === 'less' ? 'less than' : 'equal to'} ${b}, so the correct symbol is ${sym}.`);
};

export const STRAND1: Record<string, Gen[]> = {
  '1.2A': [instantQuantities],
  '1.2B': [composeDecompose120],
  '1.2C': [expandedForm120],
  '1.2D': [greaterLess120],
  '1.2E': [comparePlaceValueWords],
  '1.2F': [orderNumbers120],
  '1.2G': [compareSymbols100],
};
