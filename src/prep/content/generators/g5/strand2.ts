// Grade 5 math, strand 2: computation with whole numbers, decimals and fractions, and algebraic reasoning.

import { pick, randInt, shuffle, type Rng } from '../../rng.ts';
import { blank, dec, fig, frac, inline, lcm, mc, money, near, num, one, table, twoPart, txt, type Gen } from '../build.ts';
import type { Figure } from '../../types.ts';

const NAMES = ['Maya', 'Diego', 'Aisha', 'Ethan', 'Sofia', 'Jayden', 'Camila', 'Noah', 'Lucia', 'Mateo', 'Priya', 'Owen'];
const name = (rng: Rng) => pick(rng, NAMES);

// ---------- 5.3A estimate ----------
const roundTo = (n: number, place: number) => Math.round(n / place) * place;
const leading = (n: number) => 10 ** (String(n).length - 1);

export const estimate: Gen = (rng, d) => {
  if (d === 1) {
    const a = randInt(rng, 1200, 8800), b = randInt(rng, 1200, 8800);
    const ra = roundTo(a, 100), rb = roundTo(b, 100);
    const v = ra + rb;
    return one('mc', [txt(`Which is the best estimate of ${num(a)} + ${num(b)}? Round each number to the nearest hundred.`)],
      mc(rng, num(v), [num(roundTo(a, 1000) + roundTo(b, 1000) === v ? v + 1000 : roundTo(a, 1000) + roundTo(b, 1000)), num(v + 100), num(v - 100), num(Math.floor(a / 100) * 100 + Math.floor(b / 100) * 100 === v ? v + 200 : Math.floor(a / 100) * 100 + Math.floor(b / 100) * 100)]),
      `${num(a)} rounds to ${num(ra)} and ${num(b)} rounds to ${num(rb)}. ${num(ra)} + ${num(rb)} = ${num(v)}.`);
  }
  if (d === 2) {
    const a = randInt(rng, 120, 980), b = randInt(rng, 12, 98);
    const ra = roundTo(a, leading(a)), rb = roundTo(b, 10);
    const v = ra * rb;
    return one('mc', [txt(`Which is the best estimate of ${num(a)} × ${b}?`)],
      mc(rng, num(v), [num(ra * rb / 10), num(ra * (rb + 10)), num(ra + rb), num(v * 10)]),
      `Round to numbers that are easy to multiply: ${num(a)} ≈ ${num(ra)} and ${b} ≈ ${rb}. ${num(ra)} × ${rb} = ${num(v)}.`);
  }
  // Division with compatible numbers: 1,792 ÷ 29 ≈ 1,800 ÷ 30
  const div = randInt(rng, 2, 9) * 10;
  const q = randInt(rng, 2, 9) * 10;
  const a = div * q + randInt(rng, -30, 30), b = div + pick(rng, [-2, -1, 1, 2]);
  const who = name(rng);
  return one('mc', [txt(`${who} has ${num(a)} stickers to share equally among ${b} classmates. About how many stickers will each classmate get?`)],
    mc(rng, q, [q * 10, Math.round(q / 10) || q + 20, q + 10, q - 10]),
    `Use compatible numbers: ${num(a)} is close to ${num(div * q)} and ${b} is close to ${div}. ${num(div * q)} ÷ ${div} = ${q}.`);
};

// ---------- 5.3B multiply 3-digit by 2-digit ----------
export const multiplyWhole: Gen = (rng, d) => {
  const a = randInt(rng, 104, 989), b = randInt(rng, d === 1 ? 11 : 21, d === 1 ? 19 : 98);
  const v = a * b;
  const ones = b % 10, tens = Math.floor(b / 10);
  const noZero = a * ones + a * tens; // forgot the placeholder zero
  const stem = d === 3
    ? txt(`A theater has ${b} rows with ${a} seats in each row. How many seats are in the theater?`)
    : txt(`What is ${a} × ${b}?`);
  return one('mc', [stem], mc(rng, num(v), [{ text: num(noZero), why: 'The second partial product needs a zero: you are multiplying by tens.' }, num(v + 1000), num(v - 100), num(a * (b + 1))]),
    `${a} × ${ones} = ${num(a * ones)}, and ${a} × ${tens * 10} = ${num(a * tens * 10)}. ${num(a * ones)} + ${num(a * tens * 10)} = ${num(v)}.`);
};

// ---------- 5.3C divide by a 2-digit number ----------
export const divideWhole: Gen = (rng, d) => {
  const div = randInt(rng, 12, 48);
  if (d === 3) {
    // Remainder problem: how many boxes are needed?
    const q = randInt(rng, 20, 160);
    const total = div * q + randInt(rng, 1, div - 1);
    if (total >= 10000) return divideWhole(rng, 2);
    const up = rng() < 0.5;
    const stem = up
      ? `A bakery has ${num(total)} cookies. Each box holds ${div} cookies. What is the least number of boxes needed to pack all the cookies?`
      : `A bakery has ${num(total)} cookies. Each box holds ${div} cookies. How many boxes can be completely filled?`;
    const right = up ? q + 1 : q;
    return one('mc', [txt(stem)], mc(rng, right, [up ? q : q + 1, q + 10, total % div, q - 1]),
      `${num(total)} ÷ ${div} = ${q} R${total % div}. ${up ? `The ${total % div} extra cookies need one more box, so ${q + 1} boxes.` : `${q} boxes are full; the ${total % div} left over don't fill another.`}`);
  }
  const q = randInt(rng, d === 1 ? 12 : 101, d === 1 ? 99 : 9999 / div | 0);
  const total = div * q;
  return one('mc', [txt(`What is ${num(total)} ÷ ${div}?`)], mc(rng, num(q), near(q, [1, -1, 10, -10, 100]).map(num)),
    `${div} × ${num(q)} = ${num(total)}, so ${num(total)} ÷ ${div} = ${num(q)}.`);
};

// ---------- 5.3D model decimal multiplication ----------
export const modelDecimalProduct: Gen = (rng, d) => {
  const a = randInt(rng, 2, 9), b = randInt(rng, 2, 9);
  const product = dec(a * b, 2);
  const model = fig({ kind: 'area', rows: a, cols: b }, `A 10 by 10 grid. ${a} rows are shaded one way and ${b} columns another; the ${a * b} squares where they overlap are shaded darkest.`);
  if (d === 3) {
    return one('mc', [txt('The model is a whole cut into 100 equal squares. Which expression does the darkest part of the model represent?'), model],
      mc(rng, `0.${a} × 0.${b}`, [`0.${a} + 0.${b}`, `${a} × ${b}`, `0.${a * b} × 10`]),
      `${a} tenths of the rows and ${b} tenths of the columns overlap in ${a * b} hundredths: 0.${a} × 0.${b} = ${product}.`);
  }
  return one('mc', [txt(`The model represents 0.${a} × 0.${b}. The whole grid is 1. What is the product?`), model],
    mc(rng, product, [{ text: dec(a + b, 1), why: 'That adds the decimals instead of multiplying them.' }, dec(a * b, 1), dec(a * b, 3), dec(a * b + 10, 2)]),
    `The darkest part is ${a * b} of the 100 squares, so 0.${a} × 0.${b} = ${product}.`);
};

// ---------- 5.3E multiply decimals ----------
export const multiplyDecimals: Gen = (rng, d) => {
  if (d === 1) {
    const cents = randInt(rng, 5, 39) * 25, qty = randInt(rng, 3, 9);
    const item = pick(rng, ['notebooks', 'pens', 'apples', 'stickers sheets', 'water bottles']);
    const who = name(rng);
    return one('mc', [txt(`${who} buys ${qty} ${item}. Each one costs ${money(cents)}. How much does ${who} spend?`)],
      mc(rng, money(cents * qty), [money(cents * qty + cents), money(cents + qty * 100), money(cents * qty * 10), money(cents * (qty - 1))]),
      `${money(cents)} × ${qty} = ${money(cents * qty)}.`);
  }
  if (d === 2) {
    const a = randInt(rng, 11, 89), b = randInt(rng, 11, 49); // tenths
    const v = a * b; // hundredths
    return one('mc', [txt(`What is ${dec(a, 1)} × ${dec(b, 1)}?`)],
      mc(rng, dec(v, 2), [{ text: dec(v, 1), why: 'Count the decimal places: tenths × tenths gives hundredths.' }, dec(v, 3), dec(a + b, 1), dec(v + 100, 2)]),
      `${a} × ${b} = ${num(v)}. There are two decimal places in the factors, so the product is ${dec(v, 2)}.`);
  }
  const p1 = randInt(rng, 6, 30) * 25, q1 = randInt(rng, 2, 6), p2 = randInt(rng, 4, 20) * 25, q2 = randInt(rng, 2, 5);
  const total = p1 * q1 + p2 * q2;
  const who = name(rng);
  return one('mc', [txt(`${who} buys ${q1} tickets that cost ${money(p1)} each and ${q2} snacks that cost ${money(p2)} each. What is the total cost?`)],
    mc(rng, money(total), [money(p1 + p2), money((p1 + p2) * (q1 + q2)), money(p1 * q1), money(total + 100)]),
    `Tickets: ${q1} × ${money(p1)} = ${money(p1 * q1)}. Snacks: ${q2} × ${money(p2)} = ${money(p2 * q2)}. Total: ${money(total)}.`);
};

// ---------- 5.3F model decimal division ----------
export const modelDecimalQuotient: Gen = (rng, d) => {
  const groups = randInt(rng, 2, d === 1 ? 4 : 6);
  const each = d === 1 ? randInt(rng, 1, 9) * 10 : randInt(rng, 11, 80); // hundredths
  const total = groups * each;
  if (total > 400) return modelDecimalQuotient(rng, 1);
  const model = fig({ kind: 'decimalGrids', hundredths: total }, `Hundred grids showing ${dec(total, 2)}: each full grid is 1.`);
  return one('mc', [txt(`The model shows ${dec(total, 2)}. It is divided into ${groups} equal groups. What is the value of each group?`), model],
    mc(rng, dec(each, 2), [dec(each * 10, 2), dec(total - groups, 2), dec(each + 10, 2), dec(each, 3)]),
    `${dec(total, 2)} is ${total} hundredths. ${total} ÷ ${groups} = ${each} hundredths, which is ${dec(each, 2)}.`);
};

// ---------- 5.3G divide decimals ----------
export const divideDecimals: Gen = (rng, d) => {
  const div = d === 1 ? randInt(rng, 2, 9) : randInt(rng, 11, 25);
  const q = d === 1 ? randInt(rng, 11, 99) : randInt(rng, 101, Math.floor(9999 / div)); // tenths (d1) or hundredths
  const places = d === 1 ? 1 : 2;
  const total = q * div;
  if (d === 3) {
    const who = name(rng);
    return one('mc', [txt(`${who} and ${div - 1} friends share a bill of ${money(total)} equally. How much does each person pay?`)],
      mc(rng, money(q), [money(q * 10), money(Math.round(q / 10)), money(q + 100), money(total - div * 100 > 0 ? total - div * 100 : q + 50)]),
      `${div} people share it (${who} plus ${div - 1} friends). ${money(total)} ÷ ${div} = ${money(q)}.`);
  }
  return one('mc', [txt(`What is ${dec(total, places)} ÷ ${div}?`)],
    mc(rng, dec(q, places), [{ text: dec(q, places - 1), why: 'Check where the decimal point goes: estimate first.' }, dec(q, places + 1), dec(q + 10 ** (places - 1) * 1, places), dec(q - 1, places)]),
    `${div} × ${dec(q, places)} = ${dec(total, places)}, so ${dec(total, places)} ÷ ${div} = ${dec(q, places)}.`);
};

// ---------- Fractions ----------
const DENS = [2, 3, 4, 5, 6, 8, 10, 12];
function unlikePair(rng: Rng): [number, number] {
  for (;;) {
    const [b, e] = [pick(rng, DENS), pick(rng, DENS)];
    if (b !== e && lcm(b, e) <= 24) return [b, e];
  }
}

// ---------- 5.3H model adding/subtracting unlike fractions ----------
export const modelFractionSum: Gen = (rng, d) => {
  const [b, e] = unlikePair(rng);
  let a = randInt(rng, 1, b - 1), c = randInt(rng, 1, e - 1);
  // Two equal fractions make a weak model question; nudge one (keeping it less than 1)
  if (a * e === c * b) {
    if (e > 2) c = c === 1 ? 2 : c - 1;
    else a = a === 1 ? 2 : a - 1;
  }
  const L = lcm(b, e);
  const subtract = d >= 2 && rng() < 0.5 && a / b !== c / e;
  const [x, xd, y, yd] = subtract && a / b < c / e ? [c, e, a, b] : [a, b, c, e];
  const top = subtract ? x * (L / xd) - y * (L / yd) : x * (L / xd) + y * (L / yd);
  const right = frac(top, L);
  const op = subtract ? '−' : '+';
  const stem = [txt(`What is {${x}/${xd}} ${op} {${y}/${yd}}?`)];
  if (d < 3) stem.push(fig({ kind: 'fractionBars', bars: [{ parts: xd, shaded: x, label: `${x}/${xd}` }, { parts: yd, shaded: y, label: `${y}/${yd}` }, { parts: L, shaded: 0, label: `${L} equal parts` }] },
    `Fraction bars: ${x}/${xd} shaded, ${y}/${yd} shaded, and an empty bar cut into ${L} equal parts.`));
  return one('mc', stem,
    mc(rng, right, [
      { text: frac(subtract ? Math.abs(x - y) || 1 : x + y, subtract ? Math.abs(xd - yd) || L : xd + yd), why: 'Denominators are not added or subtracted: first rename both fractions with a common denominator.' },
      frac(subtract ? top + 1 : top + 1, L), frac(Math.max(1, top - 1), L), frac(top, L * 2),
    ]),
    `Use ${L} as the common denominator: {${x}/${xd}} = {${x * (L / xd)}/${L}} and {${y}/${yd}} = {${y * (L / yd)}/${L}}. ${x * (L / xd)} ${op} ${y * (L / yd)} = ${top}, so the answer is ${frac(top, L)}.`);
};

// ---------- 5.3I whole number times a fraction ----------
export const wholeTimesFraction: Gen = (rng, d) => {
  const den = pick(rng, [3, 4, 5, 6, 8]), a = randInt(rng, 1, den - 1), n = randInt(rng, 2, d === 1 ? 4 : 6);
  const right = frac(n * a, den);
  const stem = [txt(d === 3
    ? `A recipe uses {${a}/${den}} cup of oats for one batch. How many cups of oats are needed for ${n} batches?`
    : `What is ${n} × {${a}/${den}}?`)];
  if (d === 1) stem.push(fig({ kind: 'fractionBars', bars: Array.from({ length: n }, () => ({ parts: den, shaded: a })) },
    `${n} bars, each cut into ${den} equal parts with ${a} shaded.`));
  return one('mc', stem,
    mc(rng, right, [{ text: frac(n * a, n * den) === frac(a, den) ? frac(a, n * den) : frac(n * a, n * den), why: 'Only the numerator is multiplied by the whole number.' }, frac(n + a, den), frac(a, n * den), frac(n * a + 1, den)]),
    `${n} groups of {${a}/${den}} is {${n * a}/${den}}${n * a >= den ? `, which is ${right}` : ''}.`);
};

// ---------- 5.3J model division with unit fractions ----------
export const modelUnitFractionDivision: Gen = (rng, d) => {
  const den = pick(rng, [2, 3, 4, 5, 6]), whole = randInt(rng, 2, 5);
  if (d === 1 || (d === 3 && rng() < 0.5)) {
    const bars: Figure = { kind: 'fractionBars', bars: Array.from({ length: whole }, () => ({ parts: den, shaded: den })) };
    const stem = [txt(`The model shows ${whole} wholes, each cut into ${den === 2 ? 'halves' : `${den === 3 ? 'thirds' : den === 4 ? 'fourths' : den === 5 ? 'fifths' : 'sixths'}`}.`), fig(bars, `${whole} bars, each cut into ${den} equal parts.`)];
    if (d === 3) {
      stem.push(txt('Which expression does the model represent?'));
      return one('mc', stem, mc(rng, `${whole} ÷ {1/${den}}`, [`{1/${den}} ÷ ${whole}`, `${whole} × {1/${den}}`, `${den} ÷ ${whole}`]),
        `The model asks how many {1/${den}}s fit in ${whole} wholes: ${whole} ÷ {1/${den}} = ${whole * den}.`);
    }
    stem.push(txt(`What is ${whole} ÷ {1/${den}}?`));
    return one('mc', stem, mc(rng, whole * den, [frac(1, whole * den), frac(whole, den), whole + den]),
      `There are ${den} pieces in each whole and ${whole} wholes: ${whole} × ${den} = ${whole * den} pieces of size {1/${den}}.`);
  }
  const bars: Figure = { kind: 'fractionBars', bars: [{ parts: den, shaded: 1, label: `1/${den}` }, { parts: den * whole, shaded: 1, label: `split into ${whole}` }] };
  return one('mc', [txt(`The model shows {1/${den}} of a whole divided into ${whole} equal parts. What is {1/${den}} ÷ ${whole}?`), fig(bars, `A bar with 1/${den} shaded, and a bar cut into ${den * whole} parts with one shaded.`)],
    mc(rng, frac(1, den * whole), [frac(whole, den), String(den * whole), frac(1, den + whole)]),
    `Splitting {1/${den}} into ${whole} equal parts makes pieces that are {1/${den * whole}} of the whole.`);
};

// ---------- 5.3K add and subtract fractions and decimals fluently ----------
export const addSubtractRational: Gen = (rng, d) => {
  if (d === 1) {
    const a = randInt(rng, 120, 950), b = randInt(rng, 15, 400); // hundredths, sometimes written in tenths
    const sub = rng() < 0.5 && a > b;
    const [x, y] = [dec(a, 2), b % 10 === 0 ? dec(b, 1) : dec(b, 2)];
    const v = sub ? a - b : a + b;
    return one('mc', [txt(`What is ${x} ${sub ? '−' : '+'} ${y}?`)],
      mc(rng, dec(v, 2), [dec(v + 10, 2), dec(Math.abs(v - 10), 2), dec(v + 100, 2), dec(sub ? a + b : Math.abs(a - b), 2)]),
      `Line up the decimal points and ${sub ? 'subtract' : 'add'}: ${x} ${sub ? '−' : '+'} ${y} = ${dec(v, 2)}.`);
  }
  if (d === 2) {
    const [b, e] = unlikePair(rng);
    const w1 = randInt(rng, 1, 4), w2 = randInt(rng, 0, 2);
    const a = randInt(rng, 1, b - 1), c = randInt(rng, 1, e - 1);
    const L = lcm(b, e);
    const top = (w1 * b + a) * (L / b) + (w2 * e + c) * (L / e);
    const fa = `${w1}{${a}/${b}}`, fc = w2 ? `${w2}{${c}/${e}}` : `{${c}/${e}}`;
    return one('mc', [txt(`What is ${fa} + ${fc}?`)],
      mc(rng, frac(top, L), [frac(top + L, L), frac(Math.max(1, top - 1), L), `${w1 + w2}{${a + c}/${b + e}}`, frac(top + 1, L)]),
      `Rename with denominator ${L}, add the whole numbers and the fractions, then simplify: ${frac(top, L)}.`);
  }
  const a = randInt(rng, 210, 990), b = randInt(rng, 110, a - 50);
  const [x, y] = [dec(a, 2), dec(b, 2)];
  const sum = a + b, diff = a - b;
  const opts = (v: number) => shuffle(rng, [v, v + 10, v - 10, v + 100].filter((o) => o > 0)).map((o) => dec(o, 2));
  const sumOpts = opts(sum).sort((p, q) => Number(p) - Number(q));
  const diffOpts = opts(diff).sort((p, q) => Number(p) - Number(q));
  return one('inline', [txt(`Two numbers are ${x} and ${y}. Complete the sentence.`)],
    inline(['Their sum is ', { blank: 0 }, ' and their difference is ', { blank: 1 }, '.'], [blank(sumOpts, dec(sum, 2)), blank(diffOpts, dec(diff, 2))]),
    `${x} + ${y} = ${dec(sum, 2)} and ${x} − ${y} = ${dec(diff, 2)}.`);
};

// ---------- 5.3L divide whole numbers and unit fractions ----------
export const divideUnitFractions: Gen = (rng, d) => {
  const den = randInt(rng, 2, 8), whole = randInt(rng, 2, 9);
  const wholeFirst = d === 1 || rng() < 0.5;
  if (d === 3) {
    if (wholeFirst) {
      return one('mc', [txt(`A pitcher holds ${whole} cups of juice. Each glass is filled with {1/${den}} cup. How many glasses can be filled?`)],
        mc(rng, whole * den, [frac(whole, den), frac(1, whole * den), whole + den]),
        `${whole} ÷ {1/${den}} = ${whole} × ${den} = ${whole * den} glasses.`);
    }
    return one('mc', [txt(`{1/${den}} of a pizza is shared equally by ${whole} friends. What fraction of the whole pizza does each friend get?`)],
      mc(rng, frac(1, den * whole), [frac(whole, den), String(den * whole), frac(1, den + whole)]),
      `{1/${den}} ÷ ${whole} = {1/${den * whole}}.`);
  }
  return wholeFirst
    ? one('mc', [txt(`What is ${whole} ÷ {1/${den}}?`)], mc(rng, whole * den, [{ text: frac(whole, den), why: 'Dividing by a unit fraction gives more, not less: count how many pieces fit.' }, frac(1, whole * den), whole + den]),
      `Each whole has ${den} pieces of size {1/${den}}, so ${whole} wholes have ${whole * den}.`)
    : one('mc', [txt(`What is {1/${den}} ÷ ${whole}?`)], mc(rng, frac(1, den * whole), [{ text: String(den * whole), why: 'Splitting a small piece into parts makes each part smaller.' }, frac(whole, den), frac(1, den + whole)]),
      `Splitting {1/${den}} into ${whole} equal parts gives {1/${den * whole}}.`);
};

// ---------- 5.4B multi-step problems with an equation ----------
export const multiStepEquation: Gen = (rng, d) => {
  const who = name(rng);
  const t = pick(rng, [0, 1, 2]);
  let story: string, right: string, wrong: string[], v: number, work: string;
  if (t === 0) {
    const p = randInt(rng, 3, 9), c = randInt(rng, 6, 15), g = randInt(rng, 5, p * c - 5);
    v = p * c - g;
    story = `${who} buys ${p} packs of trading cards with ${c} cards in each pack. ${who} gives ${g} cards to a friend.`;
    right = `n = (${p} × ${c}) − ${g}`; wrong = [`n = ${p} × (${c} − ${g})`, `n = (${p} + ${c}) − ${g}`, `n = (${p} × ${c}) + ${g}`];
    work = `${p} × ${c} = ${p * c}, then ${p * c} − ${g} = ${v}.`;
  } else if (t === 1) {
    const k = randInt(rng, 3, 8), each = randInt(rng, 4, 12), s = randInt(rng, 10, 60);
    const total = k * each + s;
    v = each;
    story = `There are ${total} students in a gym. ${s} students sit in the bleachers. The rest form ${k} teams with the same number of students on each team.`;
    right = `n = (${total} − ${s}) ÷ ${k}`; wrong = [`n = ${total} − ${s} ÷ ${k}`, `n = (${total} + ${s}) ÷ ${k}`, `n = (${total} − ${s}) × ${k}`];
    work = `${total} − ${s} = ${total - s}, then ${total - s} ÷ ${k} = ${v}.`;
  } else {
    const a = randInt(rng, 10, 60), b = randInt(rng, 2, 7), c = randInt(rng, 6, 12);
    v = a + b * c;
    story = `${who} has ${a} stickers and buys ${b} sheets with ${c} stickers on each sheet.`;
    right = `n = ${a} + (${b} × ${c})`; wrong = [`n = (${a} + ${b}) × ${c}`, `n = ${a} × ${b} + ${c}`, `n = ${a} − (${b} × ${c})`];
    work = `${b} × ${c} = ${b * c}, then ${a} + ${b * c} = ${v}.`;
  }
  const target = t === 1 ? 'n, the number of students on each team' : `n, the number of ${t === 0 ? 'cards' : 'stickers'} ${who} has now`;
  const eq = mc(rng, right, wrong, [txt(`Which equation can be used to find ${target}?`)]);
  if (d === 1) return one('mc', [txt(story)], eq, `${right}. ${work}`);
  const solve = mc(rng, v, near(v, [1, -1, 10, -10, 2]), [txt('What is the value of n?')]);
  return twoPart([txt(story)], eq, solve, `${right}. ${work}`);
};

// ---------- 5.4C patterns from a rule ----------
function ruleTable(rng: Rng) {
  const mult = rng() < 0.5;
  const a = randInt(rng, 2, mult ? 5 : 9);
  const start = randInt(rng, 1, 3);
  const xs = [start, start + 1, start + 2, start + 3];
  const f = (x: number) => (mult ? a * x : x + a);
  return { mult, a, xs, ys: xs.map(f), f, rule: mult ? `y = ${a}x` : `y = x + ${a}` };
}

export const patternFromRule: Gen = (rng, d) => {
  const t = ruleTable(rng);
  if (d === 1) {
    const ys = t.ys.map((y, i) => (i === 1 ? 'A' : i === 3 ? 'B' : String(y)));
    const opts = (y: number) => [...new Set([y, y + 1, y - 1, t.mult ? y + t.a : y * 2])].filter((v) => v > 0).sort((p, q) => p - q).map(String);
    return one('inline', [txt(`The table follows the rule ${t.rule}.`), table(['x', ...t.xs.map(String)], [['y', ...ys]])],
      inline(['The value of A is ', { blank: 0 }, ' and the value of B is ', { blank: 1 }, '.'], [blank(opts(t.ys[1]), String(t.ys[1])), blank(opts(t.ys[3]), String(t.ys[3]))]),
      `Use the rule ${t.rule}: when x = ${t.xs[1]}, y = ${t.ys[1]}; when x = ${t.xs[3]}, y = ${t.ys[3]}.`);
  }
  if (d === 2) {
    const other = t.mult ? `y = x + ${t.a}` : `y = ${t.a}x`;
    const diff = t.ys[1] - t.ys[0];
    return one('mc', [txt('Which rule was used to make the table?'), table(['x', ...t.xs.map(String)], [['y', ...t.ys.map(String)]])],
      mc(rng, t.rule, [other, `y = x + ${diff === t.a ? t.a + 1 : diff}`, `y = ${t.a + 1}x`, `y = x − ${t.a}`]),
      `Check every column: ${t.xs.map((x, i) => `${x} → ${t.ys[i]}`).join(', ')}. Each one fits ${t.rule}.`);
  }
  // Which graph shows the pattern?
  const max = Math.max(10, Math.ceil(Math.max(...t.ys) / 2) * 2);
  const grid = (pts: { x: number; y: number }[]) => ({ kind: 'coordGrid' as const, max, points: pts });
  const pts = t.xs.slice(0, 3).map((x, i) => ({ x, y: t.ys[i] }));
  const swapped = pts.map((p) => ({ x: Math.min(p.y, max), y: p.x }));
  const otherRule = pts.map((p) => ({ x: p.x, y: t.mult ? p.x + t.a : p.x + (t.a > 2 ? t.a - 2 : t.a + 2) })); // a near-miss rule that stays on the grid
  const shifted = pts.map((p) => ({ x: p.x, y: Math.min(max, p.y + 1) }));
  const label = (ps: { x: number; y: number }[]) => `Points ${ps.map((p) => `(${p.x}, ${p.y})`).join(', ')}`;
  return one('mc', [txt(`Points are made from the rule ${t.rule} for x = ${t.xs.slice(0, 3).join(', ')}. Which graph shows these points?`)],
    mc(rng, { figure: grid(pts), alt: label(pts) }, [
      { figure: grid(swapped), alt: label(swapped), why: 'These points swap x and y.' },
      { figure: grid(otherRule), alt: label(otherRule) },
      { figure: grid(shifted), alt: label(shifted) },
    ]),
    `Use the rule to make ordered pairs (x, y): ${label(pts).replace('Points ', '')}. The x-coordinate goes across, the y-coordinate goes up.`);
};

// ---------- 5.4D additive or multiplicative ----------
export const additiveOrMultiplicative: Gen = (rng, d) => {
  let t = ruleTable(rng);
  // At difficulty 3, pick rules that agree at one point (y = 2x and y = x + 2 both give 4 at x = 2)
  if (d === 3) t = { ...t, ...(rng() < 0.5 ? { mult: true, a: 2, rule: 'y = 2x' } : { mult: false, a: 2, rule: 'y = x + 2' }), xs: [2, 3, 4, 5] };
  const ys = t.xs.map((x) => (t.mult ? t.a * x : x + t.a));
  const kinds = ['additive', 'multiplicative'];
  const reasons = [`${t.a} more than x`, `${t.a} times x`, `${t.a} less than x`];
  return one('inline', [txt('Look at the pattern in the table.'), table(['x', ...t.xs.map(String)], [['y', ...ys.map(String)]])],
    inline(['The pattern is ', { blank: 0 }, ' because each y-value is ', { blank: 1 }, '.'],
      [blank(kinds, t.mult ? 'multiplicative' : 'additive'), blank(reasons, reasons[t.mult ? 1 : 0])]),
    `${t.xs.map((x, i) => `${x} → ${ys[i]}`).join(', ')}. Each y is ${t.mult ? `${t.a} times x, so the pattern is multiplicative` : `${t.a} more than x, so the pattern is additive`}.`);
};

export const STRAND2 = {
  '5.3A': [estimate], '5.3B': [multiplyWhole], '5.3C': [divideWhole], '5.3D': [modelDecimalProduct], '5.3E': [multiplyDecimals],
  '5.3F': [modelDecimalQuotient], '5.3G': [divideDecimals], '5.3H': [modelFractionSum], '5.3I': [wholeTimesFraction],
  '5.3J': [modelUnitFractionDivision], '5.3K': [addSubtractRational], '5.3L': [divideUnitFractions], '5.4B': [multiStepEquation],
  '5.4C': [patternFromRule], '5.4D': [additiveOrMultiplicative],
};

