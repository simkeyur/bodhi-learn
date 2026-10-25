// Grade 2 Strand 1: Numerical Representations and Relationships
// Standards: 2.2A, 2.2B, 2.2C, 2.2D, 2.2E, 2.2F, 2.3A, 2.3B, 2.3C, 2.3D

import { pick, randInt } from '../../rng.ts';
import { fig, mc, one, txt, type Gen } from '../build.ts';

// ---------- 2.2A Compose and decompose up to 1,200 ----------
export const composeDecompose1200: Gen = (rng, d) => {
  if (d === 1) {
    const hundreds = randInt(rng, 2, 8);
    const tens = randInt(rng, 1, 9);
    const ones = randInt(rng, 1, 9);
    const total = hundreds * 100 + tens * 10 + ones;

    return one('mc', [
      fig({ kind: 'baseTenBlocks', hundreds, tens, ones }, `${hundreds} hundreds, ${tens} tens, and ${ones} ones`),
      txt('What number is shown by the base-ten blocks?'),
    ],
    mc(rng, `${total}`, [
      `${hundreds * 100 + ones * 10 + tens}`,
      `${total + 10}`,
      `${total - 100}`,
    ]),
    `${hundreds} hundreds (${hundreds * 100}) + ${tens} tens (${tens * 10}) + ${ones} ones (${ones}) = ${total}.`);
  }

  // d >= 2: numbers with 1 thousand or decomposed tens
  const thousands = 1;
  const hundreds = randInt(rng, 0, 1);
  const tens = randInt(rng, 1, 8);
  const ones = randInt(rng, 1, 9);
  const total = thousands * 1000 + hundreds * 100 + tens * 10 + ones;

  return one('mc', [
    txt(`A number has ${thousands} thousand, ${hundreds} hundreds, ${tens} tens, and ${ones} ones. What is the number?`),
  ],
  mc(rng, `${total}`, [
    `${thousands * 1000 + tens * 10 + ones}`,
    `${total + 10}`,
    `${total - 100}`,
  ]),
  `${thousands * 1000} + ${hundreds * 100} + ${tens * 10} + ${ones} = ${total}.`);
};

// ---------- 2.2B Standard, word, and expanded forms to 1,200 ----------
export const expandedWordForms1200: Gen = (rng, d) => {
  if (d === 1) {
    const hundreds = randInt(rng, 2, 9);
    const tens = randInt(rng, 1, 9);
    const ones = randInt(rng, 1, 9);
    const val = hundreds * 100 + tens * 10 + ones;
    const expanded = `${hundreds * 100} + ${tens * 10} + ${ones}`;

    return one('mc', [txt(`What is the expanded form of ${val}?`)],
      mc(rng, expanded, [
        `${hundreds} + ${tens} + ${ones}`,
        `${hundreds * 100} + ${ones * 10} + ${tens}`,
        `${val}`,
      ]),
      `${val} has ${hundreds} hundreds (${hundreds * 100}), ${tens} tens (${tens * 10}), and ${ones} ones (${ones}). Expanded form: ${expanded}.`);
  }

  // d >= 2: over 1,000
  const hundreds = randInt(rng, 0, 1);
  const tens = randInt(rng, 2, 8);
  const ones = randInt(rng, 1, 9);
  const val = 1000 + hundreds * 100 + tens * 10 + ones;
  const expanded = hundreds > 0 ? `1,000 + ${hundreds * 100} + ${tens * 10} + ${ones}` : `1,000 + ${tens * 10} + ${ones}`;

  return one('mc', [txt(`Which expression shows ${val} in expanded form?`)],
    mc(rng, expanded, [
      `100 + ${tens * 10} + ${ones}`,
      `1,000 + ${tens} + ${ones}`,
      `1,000 + ${ones * 10} + ${tens}`,
    ]),
    `${val} = ${expanded}.`);
};

// ---------- 2.2C Generate numbers greater or less up to 1,200 ----------
export const generateGreaterLess1200: Gen = (rng, _d) => {
  const isMore = rng() < 0.5;
  const base = randInt(rng, 250, 1150);

  if (isMore) {
    const diff = randInt(rng, 5, 25);
    const right = base + diff;
    return one('mc', [txt(`Which number is greater than ${base}?`)],
      mc(rng, `${right}`, [
        `${base - 10}`,
        `${base - diff}`,
        `${base - 1}`,
      ]),
      `${right} is greater than ${base} because ${right} > ${base}.`);
  }

  const diff = randInt(rng, 5, 25);
  const right = base - diff;
  return one('mc', [txt(`Which number is less than ${base}?`)],
    mc(rng, `${right}`, [
      `${base + 10}`,
      `${base + diff}`,
      `${base + 1}`,
    ]),
    `${right} is less than ${base} because ${right} < ${base}.`);
};

// ---------- 2.2D Compare and order numbers up to 1,200 ----------
export const compareOrder1200: Gen = (rng, d) => {
  if (d === 1) {
    // Symbol comparison
    const kind = pick(rng, ['greater', 'less']);
    const a = randInt(rng, 300, 1100);
    const diff = randInt(rng, 10, 80);
    const [num1, num2] = kind === 'greater' ? [a + diff, a] : [a, a + diff];
    const sym = kind === 'greater' ? '>' : '<';
    const allSymbols = ['>', '<', '=', '+'];
    const wrongSymbols = allSymbols.filter((s) => s !== sym);

    return one('mc', [txt(`Which symbol makes the comparison true?`), txt(`${num1}  [ ? ]  ${num2}`)],
      mc(rng, sym, wrongSymbols),
      `${num1} is ${kind === 'greater' ? 'greater than' : 'less than'} ${num2}, so ${num1} ${sym} ${num2}.`);
  }

  // Ordering 3 numbers up to 1,200
  const n1 = randInt(rng, 200, 500);
  const n2 = randInt(rng, 550, 850);
  const n3 = randInt(rng, 900, 1180);
  const right = `${n1}, ${n2}, ${n3}`;

  return one('mc', [txt(`Which list shows ${n3}, ${n1}, and ${n2} ordered from least to greatest?`)],
    mc(rng, right, [
      `${n3}, ${n2}, ${n1}`,
      `${n2}, ${n1}, ${n3}`,
      `${n1}, ${n3}, ${n2}`,
    ]),
    `Compare the hundreds and thousands: ${n1} is smallest, then ${n2}, and ${n3} is greatest.`);
};

// ---------- 2.2E Locate numbers on open number line ----------
export const locateOnNumberLine: Gen = (rng, _d) => {
  const from = randInt(rng, 1, 5) * 100;
  const to = from + 100;
  const point = from + pick(rng, [20, 40, 50, 60, 80]);

  return one('mc', [
    fig({ kind: 'numberLine', from, to, step: 20, decimals: 0, point, pointLabel: 'P' }, `Number line from ${from} to ${to} with point P at ${point}`),
    txt('What number is located at point P on the number line?'),
  ],
  mc(rng, `${point}`, [
    `${point - 20}`,
    `${point + 20}`,
    `${point > from + 50 ? point - 40 : point + 40}`,
  ]),
  `The number line counts by 20s from ${from} to ${to}. Point P is at ${point}.`);
};

// ---------- 2.2F Name point on a number line ----------
export const namePointOnNumberLine: Gen = (rng, _d) => {
  const from = randInt(rng, 2, 8) * 100;
  const step = pick(rng, [10, 25, 50]);
  const to = from + step * 4;
  const k = randInt(rng, 1, 3);
  const point = from + step * k;

  return one('mc', [
    fig({ kind: 'numberLine', from, to, step, decimals: 0, point, pointLabel: 'A' }, `Number line from ${from} to ${to} with point A`),
    txt('What number corresponds to point A?'),
  ],
  mc(rng, `${point}`, [
    `${point - step}`,
    `${point + step}`,
    `${point + step * 2}`,
  ]),
  `Each interval on the number line represents ${step}. Point A is at ${point}.`);
};

// ---------- 2.3A Partition objects into halves, fourths, eighths ----------
export const partitionEqualPartsWords: Gen = (rng, _d) => {
  const parts = pick(rng, [2, 4, 8]);
  const name = parts === 2 ? 'halves' : parts === 4 ? 'fourths' : 'eighths';

  return one('mc', [
    fig({ kind: 'fractionBars', bars: [{ parts, shaded: 1 }] }, `Rectangle divided into ${parts} equal parts`),
    txt(`A rectangle is divided into ${parts} equal parts. What is each equal part called?`),
  ],
  mc(rng, `one ${name.slice(0, -1)}`, [
    parts === 2 ? 'one fourth' : 'one half',
    parts === 8 ? 'one third' : 'one eighth',
    'one whole',
  ]),
  `When an object is partitioned into ${parts} equal parts, each part is one ${name.slice(0, -1)}.`);
};

// ---------- 2.3B Part size vs number of parts ----------
export const fractionPartSize: Gen = (rng, _d) => {
  return one('mc', [txt('Two identical pies are shared. Pie A is cut into 4 equal slices. Pie B is cut into 8 equal slices. Which slice is larger?')],
    mc(rng, 'A slice from Pie A, because fewer parts make larger parts', [
      'A slice from Pie B, because 8 is greater than 4',
      'Both slices are the exact same size',
      'A slice from Pie B, because more parts make bigger parts',
    ]),
    'When a whole is divided into more parts, each part gets smaller. 4 equal parts are larger than 8 equal parts.');
};

// ---------- 2.3C Count fractional parts beyond one whole ----------
export const countPartsBeyondWhole: Gen = (rng, _d) => {
  const fourths = randInt(rng, 5, 7);
  const extra = fourths - 4;

  return one('mc', [txt(`A baker cuts pies into fourths. A customer buys ${fourths} fourths of a pie. How many wholes and fourths is that?`)],
    mc(rng, `1 whole and ${extra} fourth${extra > 1 ? 's' : ''}`, [
      `2 wholes and ${extra} fourths`,
      `1 whole and ${extra + 2} fourths`,
      `${fourths} wholes`,
    ]),
    `4 fourths make 1 whole. ${fourths} fourths is 1 whole and ${extra} fourth${extra > 1 ? 's' : ''}.`);
};

// ---------- 2.3D Examples and non-examples of halves, fourths, eighths ----------
export const examplesNonExamplesFractions: Gen = (rng, _d) => {
  return one('mc', [txt('Which statement describes equal fourths of a square?')],
    mc(rng, 'Four parts that are all the exact same size', [
      'Four parts where two parts are large and two parts are small',
      'Three equal parts and one tiny corner',
      'Any shape cut into four pieces of different sizes',
    ]),
    'For a shape to be partitioned into fourths, all 4 parts must be fair shares of equal size.');
};

export const STRAND1: Record<string, Gen[]> = {
  '2.2A': [composeDecompose1200],
  '2.2B': [expandedWordForms1200],
  '2.2C': [generateGreaterLess1200],
  '2.2D': [compareOrder1200],
  '2.2E': [locateOnNumberLine],
  '2.2F': [namePointOnNumberLine],
  '2.3A': [partitionEqualPartsWords],
  '2.3B': [fractionPartSize],
  '2.3C': [countPartsBeyondWhole],
  '2.3D': [examplesNonExamplesFractions],
};
