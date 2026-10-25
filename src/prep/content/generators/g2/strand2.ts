// Grade 2 Strand 2: Computations and Algebraic Relationships
// Standards: 2.4A, 2.4B, 2.4C, 2.4D, 2.6A, 2.6B, 2.7A, 2.7B, 2.7C

import { pick, randInt } from '../../rng.ts';
import { mc, one, txt, type Gen } from '../build.ts';

const NAMES = ['Oliver', 'Emma', 'Lucas', 'Sophia', 'Liam', 'Mia', 'Noah', 'Ava'];

// ---------- 2.4A Recall basic facts within 20 with automaticity ----------
export const basicFactsWithin20: Gen = (rng, _d) => {
  const isAdd = rng() < 0.5;
  if (isAdd) {
    const a = randInt(rng, 5, 9);
    const b = randInt(rng, 5, 9);
    const sum = a + b;
    return one('mc', [txt(`What is the sum?`), txt(`${a} + ${b} = [ ? ]`)],
      mc(rng, `${sum}`, [
        `${sum - 1}`,
        `${sum + 1}`,
        `${sum - 2}`,
      ]),
      `${a} + ${b} = ${sum}.`);
  }

  const a = randInt(rng, 5, 9);
  const b = randInt(rng, 5, 9);
  const total = a + b;
  return one('mc', [txt(`What is the difference?`), txt(`${total} − ${b} = [ ? ]`)],
    mc(rng, `${a}`, [
      `${a + 1}`,
      `${a - 1}`,
      `${a + 2}`,
    ]),
    `${total} − ${b} = ${a}.`);
};

// ---------- 2.4B Add up to four 2-digit numbers and subtract 2-digit numbers ----------
export const addSubtract2Digit: Gen = (rng, d) => {
  if (d === 1) {
    // 2-digit subtraction
    const a = randInt(rng, 45, 95);
    const b = randInt(rng, 18, a - 10);
    const diff = a - b;
    return one('mc', [txt(`Subtract:`), txt(`${a} − ${b} = [ ? ]`)],
      mc(rng, `${diff}`, [
        `${diff + 10}`,
        `${diff - 10}`,
        `${a + b}`,
      ]),
      `${a} − ${b} = ${diff}.`);
  }

  // 3 or 4 two-digit addends
  const n1 = randInt(rng, 12, 28);
  const n2 = randInt(rng, 15, 30);
  const n3 = randInt(rng, 11, 25);
  const sum = n1 + n2 + n3;
  return one('mc', [txt(`Find the sum:`), txt(`${n1} + ${n2} + ${n3} = [ ? ]`)],
    mc(rng, `${sum}`, [
      `${sum + 10}`,
      `${sum - 10}`,
      `${sum + 2}`,
    ]),
    `Add the tens: ${Math.floor(n1/10) + Math.floor(n2/10) + Math.floor(n3/10)} tens. Add the ones: ${(n1%10) + (n2%10) + (n3%10)}. Total = ${sum}.`);
};

// ---------- 2.4C Word problems involving addition/subtraction within 1,000 ----------
export const wordProblemsWithin1000: Gen = (rng, d) => {
  const name1 = pick(rng, NAMES);
  const name2 = pick(rng, NAMES.filter((n) => n !== name1));

  if (d === 1) {
    const a = randInt(rng, 120, 450);
    const b = randInt(rng, 110, 420);
    const sum = a + b;
    return one('mc', [txt(`${name1} read ${a} pages. ${name2} read ${b} pages. How many pages did they read altogether?`)],
      mc(rng, `${sum} pages`, [
        `${sum + 10} pages`,
        `${sum - 10} pages`,
        `${Math.abs(a - b)} pages`,
      ]),
      `Add the pages: ${a} + ${b} = ${sum}.`);
  }

  // 2-step problem
  const start = randInt(rng, 300, 600);
  const bought = randInt(rng, 100, 250);
  const sold = randInt(rng, 80, 200);
  const final = start + bought - sold;

  return one('mc', [txt(`A store had ${start} cans of soup. It received ${bought} more cans, then sold ${sold} cans. How many cans are left?`)],
    mc(rng, `${final} cans`, [
      `${start + bought} cans`,
      `${final + 20} cans`,
      `${start - sold} cans`,
    ]),
    `Step 1: ${start} + ${bought} = ${start + bought}. Step 2: ${start + bought} − ${sold} = ${final} cans.`);
};

// ---------- 2.4D Generate situations for addition and subtraction ----------
export const generateSituations1000: Gen = (rng, _d) => {
  const a = randInt(rng, 150, 400);
  const b = randInt(rng, 80, 220);
  const sum = a + b;

  return one('mc', [txt(`Which situation is best represented by the equation?`), txt(`${a} + ${b} = ${sum}`)],
    mc(rng, `A school collected ${a} cans on Monday and ${b} cans on Tuesday, collecting ${sum} cans in all.`, [
      `A school had ${sum} cans and recycled ${b} cans.`,
      `A school had ${a} cans and gave away ${b} cans.`,
      `A school wanted ${sum} cans and lost ${a} cans.`,
    ]),
    `Joining two amounts (${a} and ${b}) to find a total represents addition.`);
};

// ---------- 2.6A Contextual multiplication with equivalent sets ----------
export const contextualMultiplication: Gen = (rng, _d) => {
  const groups = randInt(rng, 2, 6);
  const perGroup = randInt(rng, 2, 5);
  const total = groups * perGroup;

  return one('mc', [txt(`There are ${groups} bags with ${perGroup} apples in each bag. How many apples are there in all?`)],
    mc(rng, `${total} apples`, [
      `${groups + perGroup} apples`,
      `${total + perGroup} apples`,
      `${total - groups} apples`,
    ]),
    `${groups} groups of ${perGroup} is ${groups} × ${perGroup} = ${total} apples.`);
};

// ---------- 2.6B Contextual division with equal shares ----------
export const contextualDivision: Gen = (rng, _d) => {
  const groups = randInt(rng, 2, 5);
  const perGroup = randInt(rng, 2, 6);
  const total = groups * perGroup;

  return one('mc', [txt(`${total} cookies are shared equally among ${groups} children. How many cookies does each child get?`)],
    mc(rng, `${perGroup} cookies`, [
      `${perGroup + 1} cookies`,
      `${perGroup - 1 > 0 ? perGroup - 1 : perGroup + 2} cookies`,
      `${groups} cookies`,
    ]),
    `Divide ${total} into ${groups} equal groups: ${total} ÷ ${groups} = ${perGroup} cookies each.`);
};

// ---------- 2.7A Even or odd numbers up to 40 ----------
export const evenOrOdd40: Gen = (rng, _d) => {
  const num = randInt(rng, 6, 38);
  const isEven = num % 2 === 0;

  return one('mc', [txt(`Is ${num} an even number or an odd number?`)],
    mc(rng, isEven ? 'Even, because it can be divided into pairs with none left over' : 'Odd, because pairing leaves 1 left over', [
      isEven ? 'Odd, because pairing leaves 1 left over' : 'Even, because it can be divided into pairs with none left over',
      'Neither even nor odd',
      'Both even and odd',
    ]),
    `${num} ends in ${num % 10}. Numbers ending in 0, 2, 4, 6, 8 are even. Numbers ending in 1, 3, 5, 7, 9 are odd.`);
};

// ---------- 2.7B 10 or 100 more or less up to 1,200 ----------
export const tenHundredMoreLess: Gen = (rng, d) => {
  const step = d === 1 ? 10 : 100;
  const isMore = rng() < 0.5;
  const base = isMore ? randInt(rng, 120, 1050) : randInt(rng, 220, 1150);

  if (isMore) {
    const right = base + step;
    return one('mc', [txt(`What is ${step} more than ${base}?`)],
      mc(rng, `${right}`, [
        `${base + 1}`,
        `${base - step}`,
        `${base + step * 2}`,
      ]),
      `Add ${step} to ${base}: ${base} + ${step} = ${right}.`);
  }

  const right = base - step;
  return one('mc', [txt(`What is ${step} less than ${base}?`)],
    mc(rng, `${right}`, [
      `${base - 1}`,
      `${base + step}`,
      `${base - step * 2}`,
    ]),
    `Subtract ${step} from ${base}: ${base} − ${step} = ${right}.`);
};

// ---------- 2.7C Word problems with unknowns in any position ----------
export const unknownsAnyPosition: Gen = (rng, _d) => {
  const name = pick(rng, NAMES);
  const start = randInt(rng, 25, 75);
  const added = randInt(rng, 15, 45);
  const total = start + added;

  return one('mc', [txt(`${name} had some stickers. After getting ${added} more stickers, ${name} has ${total} stickers. How many stickers did ${name} start with?`)],
    mc(rng, `${start} stickers`, [
      `${total + added} stickers`,
      `${start + 10} stickers`,
      `${start - 5} stickers`,
    ]),
    `Subtract the added stickers from the total: ${total} − ${added} = ${start}.`);
};

export const STRAND2: Record<string, Gen[]> = {
  '2.4A': [basicFactsWithin20],
  '2.4B': [addSubtract2Digit],
  '2.4C': [wordProblemsWithin1000],
  '2.4D': [generateSituations1000],
  '2.6A': [contextualMultiplication],
  '2.6B': [contextualDivision],
  '2.7A': [evenOrOdd40],
  '2.7B': [tenHundredMoreLess],
  '2.7C': [unknownsAnyPosition],
};
