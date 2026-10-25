// Grade 3 Strand 2: Computations and Algebraic Relationships
// Standards: 3.4A, 3.4B, 3.4D, 3.4E, 3.4F, 3.4G, 3.4H, 3.4J, 3.4K, 3.5A, 3.5B, 3.5C, 3.5D, 3.5E

import { pick, randInt } from '../../rng.ts';
import { mc, one, table, txt, type Gen } from '../build.ts';

const NAMES = ['Maya', 'Caleb', 'Zoe', 'Aiden', 'Elena', 'Julian', 'Chloe', 'Jayden', 'Valeria', 'Leo'];

// ---------- 3.4A Add and subtract within 1,000 ----------
export const addSubtract1000: Gen = (rng, d) => {
  const name1 = pick(rng, NAMES);
  const name2 = pick(rng, NAMES.filter((n) => n !== name1));

  if (d === 1) {
    // 1-step addition or subtraction within 1,000
    const isAdd = rng() < 0.5;
    const a = randInt(rng, 150, 480);
    const b = randInt(rng, 120, 450);
    if (isAdd) {
      const sum = a + b;
      return one('mc', [txt(`${name1} collected ${a} stickers. ${name2} collected ${b} stickers. How many stickers did they collect in all?`)],
        mc(rng, `${sum} stickers`, [
          `${sum + 10} stickers`,
          `${sum - 10} stickers`,
          `${Math.abs(a - b)} stickers`,
        ]),
        `Add the two amounts: ${a} + ${b} = ${sum}. Together they collected ${sum} stickers.`);
    }
    const total = a + b;
    return one('mc', [txt(`A school library had ${total} books. Students checked out ${a} books. How many books remain in the library?`)],
      mc(rng, `${b} books`, [
        `${b + 10} books`,
        `${b - 10} books`,
        `${total + a} books`,
      ]),
      `Subtract the checked-out books from the total: ${total} − ${a} = ${b}. There are ${b} books left.`);
  }

  if (d === 2) {
    // 2-step addition and subtraction problem
    const start = randInt(rng, 250, 600);
    const add = randInt(rng, 100, 250);
    const sub = randInt(rng, 80, 200);
    const result = start + add - sub;
    return one('mc', [txt(`A bakery made ${start} muffins on Monday. On Tuesday, they baked ${add} more muffins. By Wednesday afternoon, they had sold ${sub} muffins. How many muffins did the bakery have left?`)],
      mc(rng, `${result} muffins`, [
        `${start + add} muffins`,
        `${result + 20} muffins`,
        `${start - sub} muffins`,
      ]),
      `Step 1: Find total baked: ${start} + ${add} = ${start + add}. Step 2: Subtract the sold muffins: ${start + add} − ${sub} = ${result} muffins left.`);
  }

  // d === 3: Multi-step with comparison
  const earned1 = randInt(rng, 320, 480);
  const earned2 = randInt(rng, 240, 390);
  const goal = 900;
  const combined = earned1 + earned2;
  const needed = goal - combined;
  return one('mc', [txt(`Two 3rd-grade classes are raising money for a field trip with a goal of $${goal}. Class A raised $${earned1} and Class B raised $${earned2}. How much more money do the classes need to raise to reach their goal?`)],
    mc(rng, `$${needed}`, [
      `$${needed + 50}`,
      `$${combined}`,
      `$${goal - earned1}`,
    ]),
    `Combine the funds raised: $${earned1} + $${earned2} = $${combined}. Subtract from the goal: $${goal} − $${combined} = $${needed} more needed.`);
};

// ---------- 3.4B Estimate sums and differences by rounding ----------
export const estimateRounding: Gen = (rng, d) => {
  const isAdd = rng() < 0.5;
  const toNearest = d === 1 ? 10 : 100;
  let a: number;
  let b: number;
  if (isAdd) {
    a = randInt(rng, 12, 45) * 10 + randInt(rng, 1, 9);
    b = randInt(rng, 10, 38) * 10 + randInt(rng, 1, 9);
  } else {
    b = randInt(rng, 10, 30) * 10 + randInt(rng, 1, 9);
    a = b + randInt(rng, 12, 30) * 10 + randInt(rng, 1, 9);
  }
  const roundA = Math.round(a / toNearest) * toNearest;
  const roundB = Math.round(b / toNearest) * toNearest;
  const est = isAdd ? roundA + roundB : roundA - roundB;

  return one('mc', [txt(`What is the best estimate of ${a} ${isAdd ? '+' : '−'} ${b} by rounding each number to the nearest ${toNearest}?`)],
    mc(rng, `${est}`, [
      `${est + toNearest}`,
      `${est - toNearest}`,
      `${isAdd ? a + b : a - b}`,
    ]),
    `Round each number to the nearest ${toNearest}: ${a} rounds to ${roundA}, and ${b} rounds to ${roundB}. Then calculate: ${roundA} ${isAdd ? '+' : '−'} ${roundB} = ${est}.`);
};

// ---------- 3.4D Arrays and equal groups up to 10 by 10 ----------
export const arraysAndGroups: Gen = (rng, d) => {
  const rows = randInt(rng, 3, 9);
  const cols = randInt(rng, 3, 9);
  const total = rows * cols;

  if (d === 1) {
    return one('mc', [txt(`An arrangement of desks has ${rows} rows with ${cols} desks in each row. What is the total number of desks?`)],
      mc(rng, `${total} desks`, [
        `${rows + cols} desks`,
        `${total + rows} desks`,
        `${total - cols} desks`,
      ]),
      `Multiply rows by columns: ${rows} × ${cols} = ${total}. There are ${total} desks in total.`);
  }

  // Grouping objects
  const item = pick(rng, ['apples in each basket', 'crayons in each box', 'stickers on each page']);
  return one('mc', [txt(`${pick(rng, NAMES)} has ${rows} packages with ${cols} ${item}. Which equation can be used to find the total number of items?`)],
    mc(rng, `${rows} × ${cols} = ${total}`, [
      `${rows} + ${cols} = ${rows + cols}`,
      `${total} ÷ ${cols} = ${rows + 1}`,
      `${rows} × ${rows} = ${rows * rows}`,
    ]),
    `When there are ${rows} equal groups of ${cols}, multiply: ${rows} × ${cols} = ${total}.`);
};

// ---------- 3.4E Represent multiplication facts ----------
export const representMultiplication: Gen = (rng, d) => {
  const a = randInt(rng, 3, 8);
  const b = randInt(rng, 3, 8);
  const prod = a * b;

  if (d === 1) {
    // Repeated addition
    const repAdd = Array.from({ length: a }, () => `${b}`).join(' + ');
    return one('mc', [txt(`Which expression represents ${a} × ${b}?`)],
      mc(rng, repAdd, [
        Array.from({ length: a - 1 }, () => `${b}`).join(' + '),
        `${a} + ${b}`,
        `${a} × ${a}`,
      ]),
      `${a} × ${b} means ${a} groups of ${b}, which is the repeated addition of ${b} added ${a} times: ${repAdd} = ${prod}.`);
  }

  // Skip counting or equal jumps
  const jumps = Array.from({ length: a }, (_, i) => (i + 1) * b).join(', ');
  return one('mc', [txt(`Which sequence shows skip counting to find the product of ${a} and ${b}?`)],
    mc(rng, jumps, [
      Array.from({ length: a }, (_, i) => (i + 1) * (b + 1)).join(', '),
      Array.from({ length: a }, (_, i) => (i + 1) * a).join(', '),
      `${b}, ${b * 2}, ${b * 3}`,
    ]),
    `Skip counting by ${b} a total of ${a} times produces: ${jumps}. The final number is the product ${prod}.`);
};

// ---------- 3.4F Recall multiplication and division facts ----------
export const recallFacts: Gen = (rng, d) => {
  const factor1 = randInt(rng, 3, 9);
  const factor2 = randInt(rng, 3, 9);
  const prod = factor1 * factor2;
  const isMult = d === 1 || rng() < 0.5;

  if (isMult) {
    return one('mc', [txt(`What is the product of ${factor1} and ${factor2}?`)],
      mc(rng, `${prod}`, [
        `${factor1 + factor2}`,
        `${prod + factor1}`,
        `${prod - factor2}`,
      ]),
      `Multiply: ${factor1} × ${factor2} = ${prod}.`);
  }

  return one('mc', [txt(`What is the quotient of ${prod} ÷ ${factor1}?`)],
    mc(rng, `${factor2}`, [
      `${factor2 + 1}`,
      `${factor2 - 1}`,
      `${factor1}`,
    ]),
    `Divide: ${prod} ÷ ${factor1} = ${factor2} because ${factor1} × ${factor2} = ${prod}.`);
};

// ---------- 3.4G Multiply a two-digit number by a one-digit number ----------
export const multiply2by1: Gen = (rng, d) => {
  const tens = randInt(rng, 1, d === 1 ? 4 : 8);
  const ones = randInt(rng, 2, 7);
  const twoDigit = tens * 10 + ones;
  const oneDigit = randInt(rng, 3, 6);
  const prod = twoDigit * oneDigit;

  return one('mc', [txt(`What is the product of ${twoDigit} and ${oneDigit}?`)],
    mc(rng, `${prod}`, [
      `${twoDigit + oneDigit}`,
      `${prod + 10}`,
      `${tens * 10 * oneDigit + ones}`,
    ]),
    `Multiply using partial products: (${tens * 10} × ${oneDigit}) + (${ones} × ${oneDigit}) = ${tens * 10 * oneDigit} + ${ones * oneDigit} = ${prod}.`);
};

// ---------- 3.4H Equal sharing and partitioning sets ----------
export const equalSharing: Gen = (rng, d) => {
  const groups = randInt(rng, 3, 8);
  const perGroup = randInt(rng, 3, 9);
  const total = groups * perGroup;
  const item = pick(rng, ['marbles', 'crayons', 'pencils', 'stickers']);

  if (d === 1) {
    return one('mc', [txt(`${pick(rng, NAMES)} has ${total} ${item} and shares them equally among ${groups} gift bags. How many ${item} are in each bag?`)],
      mc(rng, `${perGroup} ${item}`, [
        `${perGroup + 1} ${item}`,
        `${groups} ${item}`,
        `${total - groups} ${item}`,
      ]),
      `Divide the total ${item} by the number of bags: ${total} ÷ ${groups} = ${perGroup} ${item} per bag.`);
  }

  return one('mc', [txt(`A coach divided ${total} players into equal teams with ${perGroup} players on each team. How many teams were formed?`)],
    mc(rng, `${groups} teams`, [
      `${groups + 1} teams`,
      `${groups - 1} teams`,
      `${perGroup} teams`,
    ]),
    `Divide the total number of players by players per team: ${total} ÷ ${perGroup} = ${groups} teams.`);
};

// ---------- 3.4J Relate multiplication and division ----------
export const relateMultDiv: Gen = (rng, _d) => {
  const a = randInt(rng, 3, 9);
  const b = randInt(rng, 3, 9);
  const prod = a * b;
  return one('mc', [txt(`Which multiplication fact can be used to find the quotient for ${prod} ÷ ${a}?`)],
    mc(rng, `${a} × ${b} = ${prod}`, [
      `${a} + ${b} = ${a + b}`,
      `${prod} + ${a} = ${prod + a}`,
      `${a} × ${a} = ${a * a}`,
    ]),
    `Division is the inverse of multiplication. Since ${a} × ${b} = ${prod}, ${prod} ÷ ${a} = ${b}.`);
};

// ---------- 3.4K Solve multiplication and division within 100 ----------
export const solveMultDiv100: Gen = (rng, d) => {
  const name = pick(rng, NAMES);
  const packs = randInt(rng, 4, 8);
  const perPack = randInt(rng, 4, 9);
  const total = packs * perPack;

  if (d === 1) {
    return one('mc', [txt(`${name} bought ${packs} packs of baseball cards. Each pack contains ${perPack} cards. How many cards did ${name} buy in all?`)],
      mc(rng, `${total} cards`, [
        `${packs + perPack} cards`,
        `${total - perPack} cards`,
        `${total + packs} cards`,
      ]),
      `Multiply packs by cards per pack: ${packs} × ${perPack} = ${total} cards.`);
  }

  // 2-step problem: packs plus extra or giving some away
  const extra = randInt(rng, 5, 15);
  const finalTotal = total + extra;
  return one('mc', [txt(`${name} has ${packs} boxes of colored pencils with ${perPack} pencils in each box. A friend gives ${name} ${extra} more pencils. How many pencils does ${name} have now?`)],
    mc(rng, `${finalTotal} pencils`, [
      `${total} pencils`,
      `${finalTotal - 5} pencils`,
      `${packs + perPack + extra} pencils`,
    ]),
    `Step 1: Multiply to find pencils in boxes: ${packs} × ${perPack} = ${total}. Step 2: Add extra pencils: ${total} + ${extra} = ${finalTotal} pencils.`);
};

// ---------- 3.5A Represent addition and subtraction problems ----------
export const representAddSub: Gen = (rng, d) => {
  const name = pick(rng, NAMES);
  const a = randInt(rng, 120, 350);
  const b = randInt(rng, 80, 200);
  const sum = a + b;

  if (d === 1) {
    return one('mc', [txt(`${name} had ${a} trading cards. After buying more cards, ${name} now has ${sum} cards. Which equation can be used to find c, the number of cards bought?`)],
      mc(rng, `${a} + c = ${sum}`, [
        `${sum} + ${a} = c`,
        `${a} − c = ${sum}`,
        `${a} × c = ${sum}`,
      ]),
      `The starting amount ${a} plus the new cards c equals the final total ${sum}: ${a} + c = ${sum}.`);
  }

  // 2-step representation
  const c = randInt(rng, 40, 90);
  const rem = sum - c;
  return one('mc', [txt(`${name} started with ${a} beads, bought ${b} more beads, and then used ${c} beads to make a necklace. Which equation shows how to find b, the number of beads left?`)],
    mc(rng, `${a} + ${b} − ${c} = ${rem}`, [
      `${a} − ${b} + ${c} = ${rem}`,
      `${a} + ${b} + ${c} = ${a + b + c}`,
      `${a} × ${b} − ${c} = ${rem}`,
    ]),
    `Add the beads acquired (${a} + ${b}) and subtract the beads used (${c}): ${a} + ${b} − ${c} = ${rem}.`);
};

// ---------- 3.5B Represent multiplication and division with diagrams ----------
export const representMultDiv: Gen = (rng, d) => {
  const groups = randInt(rng, 3, 7);
  const each = randInt(rng, 4, 8);
  const total = groups * each;

  if (d === 1) {
    return one('mc', [txt(`A strip diagram is divided into ${groups} equal sections with ${each} in each section. What total amount does the strip diagram represent?`)],
      mc(rng, `${total}`, [
        `${groups + each}`,
        `${total - each}`,
        `${total + groups}`,
      ]),
      `Each of the ${groups} sections holds ${each}. Multiply: ${groups} × ${each} = ${total}.`);
  }

  return one('mc', [txt(`Which equation can be represented by a strip diagram of length ${total} split into ${groups} equal parts?`)],
    mc(rng, `${total} ÷ ${groups} = ${each}`, [
      `${total} − ${groups} = ${total - groups}`,
      `${total} + ${groups} = ${total + groups}`,
      `${groups} × ${groups} = ${groups * groups}`,
    ]),
    `A total of ${total} divided into ${groups} equal parts is represented by the division equation ${total} ÷ ${groups} = ${each}.`);
};

// ---------- 3.5C Multiplication as a comparison ----------
export const multComparison: Gen = (rng, _d) => {
  const times = randInt(rng, 3, 7);
  const base = randInt(rng, 12, 35);
  const prod = times * base;
  return one('mc', [txt(`Which statement best describes the expression ${times} × ${base}?`)],
    mc(rng, `${times} times as much as ${base}`, [
      `${times} more than ${base}`,
      `${base} times as small as ${times}`,
      `${times} divided by ${base}`,
    ]),
    `Multiplication represents a comparison of scale: ${times} × ${base} means ${times} times as much as ${base} (which equals ${prod}).`);
};

// ---------- 3.5D Find unknown numbers in multiplication and division ----------
export const unknownNumberMultDiv: Gen = (rng, d) => {
  const f1 = randInt(rng, 3, 9);
  const f2 = randInt(rng, 3, 9);
  const prod = f1 * f2;
  const missingFactor = d === 1 || rng() < 0.5;

  if (missingFactor) {
    return one('mc', [txt(`What value of n makes this equation true?\n\n${f1} × n = ${prod}`)],
      mc(rng, `${f2}`, [
        `${f2 + 1}`,
        `${f2 - 1}`,
        `${prod - f1}`,
      ]),
      `To find the missing factor n, divide: n = ${prod} ÷ ${f1} = ${f2}.`);
  }

  return one('mc', [txt(`What value of m makes this equation true?\n\n${prod} ÷ m = ${f1}`)],
    mc(rng, `${f2}`, [
      `${f2 + 2}`,
      `${prod - f1}`,
      `${f1 + 1}`,
    ]),
    `To find m, divide the dividend by the quotient: m = ${prod} ÷ ${f1} = ${f2}.`);
};

// ---------- 3.5E Number pairs and relationships in a table ----------
export const numberPairsTable: Gen = (rng, d) => {
  const ruleType = d === 1 ? 'add' : 'mult';
  const k = ruleType === 'add' ? randInt(rng, 3, 9) : randInt(rng, 3, 7);
  const inputs = [1, 2, 3, 4, 5];
  const outputs = inputs.map((x) => (ruleType === 'add' ? x + k : x * k));

  const rows = inputs.map((x, i) => [x, outputs[i]]);
  const targetX = pick(rng, [6, 7, 8]);
  const correctY = ruleType === 'add' ? targetX + k : targetX * k;

  return one('mc', [
    table(['Input', 'Output'], rows),
    txt(`The table shows a relationship between inputs and outputs. What is the output when the input is ${targetX}?`),
  ],
    mc(rng, `${correctY}`, [
      `${correctY + 1}`,
      `${ruleType === 'add' ? targetX * k : targetX + k}`,
      `${correctY - 2}`,
    ]),
    `Look for the rule: each output is ${ruleType === 'add' ? `input + ${k}` : `input × ${k}`}. For input ${targetX}: ${targetX} ${ruleType === 'add' ? `+ ${k}` : `× ${k}`} = ${correctY}.`);
};

export const STRAND2: Record<string, Gen[]> = {
  '3.4A': [addSubtract1000],
  '3.4B': [estimateRounding],
  '3.4D': [arraysAndGroups],
  '3.4E': [representMultiplication],
  '3.4F': [recallFacts],
  '3.4G': [multiply2by1],
  '3.4H': [equalSharing],
  '3.4J': [relateMultDiv],
  '3.4K': [solveMultDiv100],
  '3.5A': [representAddSub],
  '3.5B': [representMultDiv],
  '3.5C': [multComparison],
  '3.5D': [unknownNumberMultDiv],
  '3.5E': [numberPairsTable],
};
