// Grade 1 Strand 2: Computations and Algebraic Relationships
// Standards: 1.3A, 1.3B, 1.3C, 1.3D, 1.3F, 1.5B, 1.5C, 1.5D, 1.5E, 1.5F, 1.5G

import { pick, randInt } from '../../rng.ts';
import { mc, one, txt, type Gen } from '../build.ts';

const NAMES = ['Leo', 'Maya', 'Eli', 'Zoe', 'Sam', 'Mia', 'Ben', 'Ava'];

// ---------- 1.3A Sum of multiple of 10 and 1-digit number up to 99 ----------
export const tensAndOnesSum: Gen = (rng, _d) => {
  const tens = randInt(rng, 1, 8) * 10;
  const ones = randInt(rng, 1, 9);
  const sum = tens + ones;

  return one('mc', [txt(`What is the sum?`), txt(`${tens} + ${ones} = [ ? ]`)],
    mc(rng, `${sum}`, [
      `${tens + ones * 10}`,
      `${sum - 10}`,
      `${sum + 1}`,
    ]),
    `Add ${tens} and ${ones}: ${tens} + ${ones} = ${sum}.`);
};

// ---------- 1.3B Word problems with unknowns within 20 ----------
export const wordProblemsWithin20: Gen = (rng, d) => {
  const name = pick(rng, NAMES);
  const kind = d === 1 ? 'result' : pick(rng, ['change', 'start']);

  if (kind === 'result') {
    const isAdd = rng() < 0.5;
    const a = randInt(rng, 3, 9);
    const b = randInt(rng, 2, 8);
    if (isAdd) {
      const sum = a + b;
      return one('mc', [txt(`${name} has ${a} apples. ${name} gets ${b} more apples. How many apples are there now?`)],
        mc(rng, `${sum} apples`, [
          `${sum - 1} apples`,
          `${sum + 2} apples`,
          `${Math.abs(a - b)} apples`,
        ]),
        `Add the apples: ${a} + ${b} = ${sum}.`);
    }
    const total = a + b;
    return one('mc', [txt(`${name} has ${total} balloons. ${b} balloons pop. How many balloons are left?`)],
      mc(rng, `${a} balloons`, [
        `${a + 1} balloons`,
        `${a - 1} balloons`,
        `${total + b} balloons`,
      ]),
      `Subtract the popped balloons: ${total} − ${b} = ${a}.`);
  }

  // Missing addend: a + [ ] = total
  const a = randInt(rng, 4, 11);
  const diff = randInt(rng, 3, 8);
  const total = a + diff;
  return one('mc', [txt(`${name} has ${a} stickers. ${name} wants ${total} stickers in all. How many more stickers does ${name} need?`)],
    mc(rng, `${diff} stickers`, [
      `${diff + 1} stickers`,
      `${diff - 1} stickers`,
      `${total + a} stickers`,
    ]),
    `Find how many more to make ${total}: ${total} − ${a} = ${diff}.`);
};

// ---------- 1.3C Compose 10 with two or more addends ----------
export const composeTen: Gen = (rng, _d) => {
  const a = randInt(rng, 1, 9);
  const b = 10 - a;

  return one('mc', [txt(`Which number makes 10?`), txt(`${a} + [ ? ] = 10`)],
    mc(rng, `${b}`, [
      `${b > 1 ? b - 1 : b + 2}`,
      `${b + 1}`,
      `${10 + a}`,
    ]),
    `${a} + ${b} = 10.`);
};

// ---------- 1.3D Basic fact strategies within 20 ----------
export const factStrategiesWithin20: Gen = (rng, d) => {
  if (d === 1) {
    // Doubles: e.g. 6 + 6 = 12
    const n = randInt(rng, 2, 9);
    return one('mc', [txt(`What is the double?`), txt(`${n} + ${n} = [ ? ]`)],
      mc(rng, `${n * 2}`, [
        `${n * 2 + 1}`,
        `${n * 2 - 1}`,
        `${n + 2}`,
      ]),
      `${n} + ${n} = ${n * 2}.`);
  }

  // Making 10: e.g. 8 + 5 = (8 + 2) + 3 = 10 + 3 = 13
  const a = randInt(rng, 7, 9);
  const b = randInt(rng, 4, 8);
  const sum = a + b;
  const toTen = 10 - a;
  const rest = b - toTen;

  return one('mc', [txt(`Use make-ten to add:`), txt(`${a} + ${b} = [ ? ]`)],
    mc(rng, `${sum}`, [
      `${sum - 1}`,
      `${sum + 1}`,
      `${sum - 2}`,
    ]),
    `Make 10 first: ${a} + ${toTen} = 10. Then add the remaining ${rest}: 10 + ${rest} = ${sum}.`);
};

// ---------- 1.3F Problem situations for number sentences ----------
export const matchSituationToSentence: Gen = (rng, _d) => {
  const a = randInt(rng, 4, 10);
  const b = randInt(rng, 2, Math.min(6, a - 1)); // grade 1 has no negative numbers
  const isAdd = rng() < 0.5;

  if (isAdd) {
    const sum = a + b;
    return one('mc', [txt(`Which story matches this number sentence?`), txt(`${a} + ${b} = ${sum}`)],
      mc(rng, `Mia had ${a} crayons and found ${b} more. Now she has ${sum} crayons.`, [
        `Mia had ${sum} crayons and lost ${b} of them.`,
        `Mia had ${a} crayons and gave ${b} away.`,
        `Mia had ${sum} crayons and bought ${a} more.`,
      ]),
      `Adding means joining amounts together: ${a} crayons plus ${b} more equals ${sum}.`);
  }

  const diff = a - b;
  return one('mc', [txt(`Which story matches this number sentence?`), txt(`${a} − ${b} = ${diff}`)],
    mc(rng, `Leo had ${a} pencils and gave ${b} away. Now he has ${diff} pencils.`, [
      `Leo had ${a} pencils and got ${b} more.`,
      `Leo had ${diff} pencils and bought ${a} more.`,
      `Leo had ${b} pencils and found ${a} more.`,
    ]),
    `Subtracting means taking away: ${a} pencils minus ${b} given away leaves ${diff}.`);
};

// ---------- 1.5B Skip count by 2s, 5s, and 10s up to 120 ----------
export const skipCountObjects: Gen = (rng, d) => {
  const step = d === 1 ? 10 : d === 2 ? 5 : 2;
  const start = randInt(rng, 1, 8) * step;
  const s1 = start + step;
  const s2 = s1 + step;
  const s3 = s2 + step;

  return one('mc', [txt(`What number comes next in the pattern?`), txt(`${start}, ${s1}, ${s2}, [ ? ]`)],
    mc(rng, `${s3}`, [
      `${s3 - 1}`,
      `${s3 + 1}`,
      `${s2 + 1}`,
    ]),
    `The pattern counts by ${step}s. ${s2} + ${step} = ${s3}.`);
};

// ---------- 1.5C Determine 10 more and 10 less up to 120 ----------
export const tenMoreTenLess: Gen = (rng, _d) => {
  const isMore = rng() < 0.5;
  const base = isMore ? randInt(rng, 12, 105) : randInt(rng, 22, 115);

  if (isMore) {
    const right = base + 10;
    return one('mc', [txt(`What is 10 more than ${base}?`)],
      mc(rng, `${right}`, [
        `${base + 1}`,
        `${base - 10}`,
        `${base + 20}`,
      ]),
      `Add 1 ten to ${base}: ${base} + 10 = ${right}.`);
  }

  const right = base - 10;
  return one('mc', [txt(`What is 10 less than ${base}?`)],
    mc(rng, `${right}`, [
      `${base - 1}`,
      `${base + 10}`,
      `${base - 20}`,
    ]),
    `Subtract 1 ten from ${base}: ${base} − 10 = ${right}.`);
};

// ---------- 1.5D Represent addition/subtraction word problems ----------
export const representWordProblem: Gen = (rng, _d) => {
  const name = pick(rng, NAMES);
  const a = randInt(rng, 5, 12);
  const b = randInt(rng, 2, Math.min(7, a - 1)); // grade 1 has no negative numbers
  const isAdd = rng() < 0.5;

  if (isAdd) {
    const sum = a + b;
    return one('mc', [txt(`${name} has ${a} toy cars. ${name} gets ${b} more toy cars. Which number sentence shows how many toy cars ${name} has in all?`)],
      mc(rng, `${a} + ${b} = ${sum}`, [
        `${a} − ${b} = ${a - b}`,
        `${sum} + ${b} = ${sum + b}`,
        `${a} + ${sum} = ${a + sum}`,
      ]),
      `Getting more means addition: ${a} + ${b} = ${sum}.`);
  }

  const diff = a - b;
  return one('mc', [txt(`${name} has ${a} cookies. ${name} eats ${b} cookies. Which number sentence shows how many cookies are left?`)],
    mc(rng, `${a} − ${b} = ${diff}`, [
      `${a} + ${b} = ${a + b}`,
      `${a + 1} − ${b} = ${diff + 1}`,
      `${a} − ${b - 1} = ${diff + 1}`,
    ]),
    `Eating cookies means subtraction: ${a} − ${b} = ${diff}.`);
};

// ---------- 1.5E Understand the equal sign ----------
export const equalSignMeaning: Gen = (rng, _d) => {
  const a = randInt(rng, 3, 9);
  const b = randInt(rng, 2, 7);
  const sum = a + b;
  let c = randInt(rng, 2, sum - 1);
  let dVal = sum - c;
  if (c === a) { c += 1; dVal -= 1; }

  return one('mc', [txt(`Which equation is true? Both sides must have the same value.`)],
    mc(rng, `${a} + ${b} = ${c} + ${dVal}`, [
      `${a} + ${b} = ${sum + 1}`,
      `${a} + ${b} = ${a} − ${b}`,
      `${a} + ${b} = ${c} + ${dVal + 2}`,
    ]),
    `${a} + ${b} = ${sum} and ${c} + ${dVal} = ${sum}. Both sides equal ${sum}, so the equation is true.`);
};

// ---------- 1.5F Determine unknown in addition/subtraction equation ----------
export const unknownInEquation: Gen = (rng, _d) => {
  const pos = pick(rng, ['first', 'second', 'result']);
  const a = randInt(rng, 4, 11);
  const b = randInt(rng, 3, 8);
  const sum = a + b;

  if (pos === 'first') {
    return one('mc', [txt(`What number makes the equation true?`), txt(`[ ? ] + ${b} = ${sum}`)],
      mc(rng, `${a}`, [
        `${a + 1}`,
        `${a - 1}`,
        `${sum + b}`,
      ]),
      `${a} + ${b} = ${sum}. The missing number is ${a}.`);
  }

  if (pos === 'second') {
    return one('mc', [txt(`What number makes the equation true?`), txt(`${sum} − [ ? ] = ${a}`)],
      mc(rng, `${b}`, [
        `${b + 1}`,
        `${b - 1}`,
        `${sum + a}`,
      ]),
      `${sum} − ${b} = ${a}. The missing number is ${b}.`);
  }

  return one('mc', [txt(`What number makes the equation true?`), txt(`${a} + ${b} = [ ? ]`)],
    mc(rng, `${sum}`, [
      `${sum + 1}`,
      `${sum - 1}`,
      `${sum + 2}`,
    ]),
    `${a} + ${b} = ${sum}.`);
};

// ---------- 1.5G Properties of operations (add 3 numbers) ----------
export const addThreeNumbers: Gen = (rng, _d) => {
  // Create 3 numbers where two make 10: e.g. 3, 7, 5
  const pair1 = randInt(rng, 1, 9);
  const pair2 = 10 - pair1;
  const third = randInt(rng, 2, 8);
  const sum = 10 + third;

  return one('mc', [txt(`Add the three numbers:`), txt(`${pair1} + ${third} + ${pair2} = [ ? ]`)],
    mc(rng, `${sum}`, [
      `${sum - 1}`,
      `${sum + 1}`,
      `${sum - 2}`,
    ]),
    `Add ${pair1} + ${pair2} first to make 10. Then 10 + ${third} = ${sum}.`);
};

export const STRAND2: Record<string, Gen[]> = {
  '1.3A': [tensAndOnesSum],
  '1.3B': [wordProblemsWithin20],
  '1.3C': [composeTen],
  '1.3D': [factStrategiesWithin20],
  '1.3F': [matchSituationToSentence],
  '1.5B': [skipCountObjects],
  '1.5C': [tenMoreTenLess],
  '1.5D': [representWordProblem],
  '1.5E': [equalSignMeaning],
  '1.5F': [unknownInEquation],
  '1.5G': [addThreeNumbers],
};
