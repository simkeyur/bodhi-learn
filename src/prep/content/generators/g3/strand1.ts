// Grade 3 Strand 1: Numerical Representations and Relationships
// Standards: 3.2A, 3.2B, 3.2C, 3.2D, 3.3A, 3.3B, 3.3C, 3.3D, 3.3E, 3.3F, 3.3G, 3.3H, 3.4I, 3.7A

import { pick, randInt } from '../../rng.ts';
import { fig, mc, num, one, ordinal, txt, type Gen } from '../build.ts';

// Names for Texas 3rd-grade context
const NAMES = ['Liam', 'Emma', 'Noah', 'Olivia', 'Mateo', 'Sofia', 'Lucas', 'Mia', 'Ethan', 'Camila', 'Santiago', 'Ava'];

// ---------- 3.2A Compose and decompose numbers to 100,000 ----------
export const composeDecompose: Gen = (rng, d) => {
  if (d === 1) {
    // 4-digit number in standard or expanded form
    const thousands = randInt(rng, 2, 8);
    const hundreds = randInt(rng, 1, 9);
    const tens = randInt(rng, 1, 9);
    const ones = randInt(rng, 1, 9);
    const val = thousands * 1000 + hundreds * 100 + tens * 10 + ones;
    const askExpanded = rng() < 0.5;

    if (askExpanded) {
      const correct = `(${thousands} × 1,000) + (${hundreds} × 100) + (${tens} × 10) + (${ones} × 1)`;
      const wrong = [
        `(${thousands} × 100) + (${hundreds} × 10) + (${tens} × 1) + ${ones}`,
        `(${thousands} × 1,000) + (${hundreds} × 10) + (${tens} × 100) + (${ones} × 1)`,
        `(${thousands} × 10,000) + (${hundreds} × 1,000) + (${tens} × 100) + (${ones} × 10)`,
      ];
      return one('mc', [txt(`Which expression represents the number ${num(val)} in expanded notation?`)],
        mc(rng, correct, wrong),
        `In ${num(val)}, the digit ${thousands} is in the thousands place (${thousands} × 1,000), ${hundreds} is in the hundreds place (${hundreds} × 100), ${tens} is in the tens place (${tens} × 10), and ${ones} is in the ones place (${ones} × 1). The correct expression is ${correct}.`);
    }

    const correct = `${num(val)}`;
    const wrong = [
      `${num(thousands * 1000 + tens * 100 + hundreds * 10 + ones)}`,
      `${num(thousands * 10000 + hundreds * 100 + tens * 10 + ones)}`,
      `${num(thousands * 100 + hundreds * 10 + tens + ones)}`,
    ];
    return one('mc', [txt(`What number is equal to ${thousands} thousands, ${hundreds} hundreds, ${tens} tens, and ${ones} ones?`)],
      mc(rng, correct, wrong),
      `${thousands} thousands = ${num(thousands * 1000)}, ${hundreds} hundreds = ${hundreds * 100}, ${tens} tens = ${tens * 10}, and ${ones} ones = ${ones}. Adding them gives ${num(val)}.`);
  }

  if (d === 2) {
    // 5-digit number with a zero digit
    const tenThousands = randInt(rng, 2, 9);
    const thousands = randInt(rng, 1, 9);
    const zeroPlace = pick(rng, ['hundreds', 'tens']);
    const hundreds = zeroPlace === 'hundreds' ? 0 : randInt(rng, 1, 9);
    const tens = zeroPlace === 'tens' ? 0 : randInt(rng, 1, 9);
    const ones = randInt(rng, 1, 9);
    const val = tenThousands * 10000 + thousands * 1000 + hundreds * 100 + tens * 10 + ones;

    const parts = [
      `(${tenThousands} × 10,000)`,
      `(${thousands} × 1,000)`,
    ];
    if (hundreds > 0) parts.push(`(${hundreds} × 100)`);
    if (tens > 0) parts.push(`(${tens} × 10)`);
    parts.push(`(${ones} × 1)`);
    const correct = parts.join(' + ');

    const wrong = [
      `(${tenThousands} × 1,000) + (${thousands} × 100) + (${hundreds || 5} × 10) + (${ones} × 1)`,
      `(${tenThousands} × 10,000) + (${thousands} × 100) + (${tens || 4} × 10) + (${ones} × 1)`,
      `(${tenThousands} × 100,000) + (${thousands} × 10,000) + (${ones} × 1)`,
    ];
    return one('mc', [txt(`A store sold ${num(val)} items. Which expression shows ${num(val)} in expanded notation?`)],
      mc(rng, correct, wrong),
      `Break ${num(val)} into place values: ${tenThousands} ten thousands (${tenThousands} × 10,000), ${thousands} thousands (${thousands} × 1,000), ${hundreds > 0 ? `${hundreds} hundreds (${hundreds} × 100), ` : ''}${tens > 0 ? `${tens} tens (${tens} × 10), ` : ''}and ${ones} ones (${ones} × 1). The correct expression is ${correct}.`);
  }

  // d === 3: Decomposing in non-standard ways (e.g. 4 ten thousands + 15 hundreds + 6 tens + 2 ones)
  const tt = randInt(rng, 2, 7);
  const extraHundreds = randInt(rng, 11, 18);
  const tens = randInt(rng, 2, 8);
  const ones = randInt(rng, 1, 9);
  const total = tt * 10000 + extraHundreds * 100 + tens * 10 + ones;
  const correct = `${num(total)}`;
  const wrong = [
    `${num(tt * 10000 + (extraHundreds % 10) * 100 + tens * 10 + ones)}`,
    `${num((tt + Math.floor(extraHundreds / 10)) * 10000 + tens * 100 + ones * 10)}`,
    `${num(tt * 1000 + extraHundreds * 100 + tens * 10 + ones)}`,
  ];
  return one('mc', [txt(`Which number is represented by ${tt} ten thousands, ${extraHundreds} hundreds, ${tens} tens, and ${ones} ones?`)],
    mc(rng, correct, wrong),
    `${tt} ten thousands = ${num(tt * 10000)}. ${extraHundreds} hundreds = ${num(extraHundreds * 100)}. ${tens} tens = ${tens * 10}. ${ones} ones = ${ones}. Adding them: ${num(tt * 10000)} + ${num(extraHundreds * 100)} + ${tens * 10} + ${ones} = ${num(total)}.`);
};

// ---------- 3.2B Base-10 place value relationships ----------
export const baseTenRelations: Gen = (rng, d) => {
  const digit = randInt(rng, 3, 8);
  if (d === 1) {
    // Basic 10-times relationship between adjacent places
    const pairs = [
      { big: 'hundreds', small: 'tens', multiplier: 10 },
      { big: 'thousands', small: 'hundreds', multiplier: 10 },
      { big: 'ten thousands', small: 'thousands', multiplier: 10 },
    ];
    const p = pick(rng, pairs);
    return one('mc', [txt(`In our base-10 number system, how does the value of the ${p.big} place compare to the value of the ${p.small} place?`)],
      mc(rng, `The ${p.big} place is 10 times the value of the ${p.small} place.`, [
        { text: `The ${p.big} place is equal to the value of the ${p.small} place.`, why: 'Each place value to the left is 10 times larger.' },
        `The ${p.big} place is 100 times the value of the ${p.small} place.`,
        `The ${p.big} place is 2 times the value of the ${p.small} place.`,
      ]),
      `Each step to the left in place value multiplies the value by 10. Therefore, the ${p.big} place is 10 times the value of the ${p.small} place.`);
  }

  if (d === 2) {
    // In a specific number like 44,510
    const tens = randInt(rng, 1, 9);
    const ones = randInt(rng, 1, 9);
    const numStr = `${digit}${digit},${randInt(rng, 1, 9)}${tens}${ones}`;
    return one('mc', [txt(`In the number ${numStr}, the digit ${digit} in the ten thousands place has a value that is —`)],
      mc(rng, `10 times the value of the digit ${digit} in the thousands place`, [
        { text: `equal to the value of the digit ${digit} in the thousands place`, why: 'The position determines value; ten thousands is 10 times thousands.' },
        `100 times the value of the digit ${digit} in the thousands place`,
        `one-tenth the value of the digit ${digit} in the thousands place`,
      ]),
      `The digit ${digit} in the ten thousands place represents ${num(digit * 10000)}. The digit ${digit} in the thousands place represents ${num(digit * 1000)}. Since ${num(digit * 10000)} = 10 × ${num(digit * 1000)}, it is 10 times the value.`);
  }

  // d === 3: How many hundreds in a thousand, or tens in a hundred
  const targets = [
    { count: 10, unit: 'tens', makes: '1 hundred', val: 100 },
    { count: 10, unit: 'hundreds', makes: '1 thousand', val: 1000 },
    { count: 10, unit: 'thousands', makes: '1 ten thousand', val: 10000 },
    { count: 100, unit: 'tens', makes: '1 thousand', val: 1000 },
  ];
  const t = pick(rng, targets);
  return one('mc', [txt(`How many ${t.unit} equal ${t.makes}?`)],
    mc(rng, `${t.count}`, [
      `${t.count === 10 ? 100 : 10}`,
      `${t.count === 10 ? 1 : 1000}`,
      `${t.count === 10 ? 20 : 50}`,
    ]),
    `There are ${t.count} ${t.unit} in ${t.makes} because ${t.count} × ${t.unit === 'tens' ? 10 : 100} = ${num(t.val)}.`);
};

// ---------- 3.2C Round numbers using a number line ----------
export const roundOnNumberLine: Gen = (rng, d) => {
  if (d === 1) {
    // Round 2-digit or 3-digit number to nearest 10
    const tens = randInt(rng, 3, 8) * 10;
    const ones = randInt(rng, 1, 9);
    const n = tens + ones;
    const rounded = ones >= 5 ? tens + 10 : tens;
    return one('mc', [
      fig({ kind: 'numberLine', from: tens, to: tens + 10, step: 1, decimals: 0, point: n }, `Number line from ${tens} to ${tens + 10} with a point at ${n}`),
      txt(`The number line shows the number ${n}. To the nearest ten, what does ${n} round to?`),
    ],
      mc(rng, `${rounded}`, [
        `${rounded === tens ? tens + 10 : tens}`,
        `${tens - 10}`,
        `${tens + 20}`,
      ]),
      `${n} is located between ${tens} and ${tens + 10}. Because its ones digit is ${ones} (${ones >= 5 ? '5 or greater' : 'less than 5'}), it is closer to ${rounded}. To the nearest ten, ${n} rounds to ${rounded}.`);
  }

  if (d === 2) {
    // Round to nearest 100
    const hundreds = randInt(rng, 2, 7) * 100;
    const offset = pick(rng, [23, 47, 52, 68, 85]);
    const n = hundreds + offset;
    const rounded = offset >= 50 ? hundreds + 100 : hundreds;
    return one('mc', [
      fig({ kind: 'numberLine', from: hundreds, to: hundreds + 100, step: 10, decimals: 0, point: n }, `Number line from ${hundreds} to ${hundreds + 100} with a point at ${n}`),
      txt(`The point on the number line represents ${n}. What is ${n} rounded to the nearest hundred?`),
    ],
      mc(rng, `${rounded}`, [
        `${rounded === hundreds ? hundreds + 100 : hundreds}`,
        `${hundreds - 100}`,
        `${hundreds + 200}`,
      ]),
      `${n} is between ${hundreds} and ${hundreds + 100}. The halfway mark is ${hundreds + 50}. Since ${n} is ${offset >= 50 ? 'at or above' : 'below'} the halfway mark, it rounds to ${rounded}.`);
  }

  // d === 3: Round 4-digit number to nearest 1,000
  const th = randInt(rng, 3, 8) * 1000;
  const offset = pick(rng, [280, 410, 520, 670, 890]);
  const n = th + offset;
  const rounded = offset >= 500 ? th + 1000 : th;
  return one('mc', [
    txt(`A stadium had ${num(n)} fans attending a football game. What is ${num(n)} rounded to the nearest thousand?`),
  ],
    mc(rng, `${num(rounded)}`, [
      `${num(rounded === th ? th + 1000 : th)}`,
      `${num(th - 1000)}`,
      `${num(n - (n % 100))}`,
    ]),
    `To round ${num(n)} to the nearest thousand, look at the hundreds digit (${Math.floor(offset / 100)}). Since it is ${offset >= 500 ? '5 or greater' : 'less than 5'}, round ${offset >= 500 ? 'up' : 'down'} to ${num(rounded)}.`);
};

// ---------- 3.2D Compare and order whole numbers to 100,000 ----------
export const compareOrderWhole: Gen = (rng, d) => {
  if (d === 1) {
    // Compare two 4- or 5-digit numbers using >, <, =
    const base = randInt(rng, 20, 80) * 1000;
    const d1 = randInt(rng, 100, 800);
    const d2 = randInt(rng, 100, 800);
    const n1 = base + d1;
    const n2 = base + (d1 === d2 ? d2 + 50 : d2);
    const symbol = n1 > n2 ? '>' : '<';
    const correct = `${num(n1)} ${symbol} ${num(n2)}`;
    const opp = n1 > n2 ? '<' : '>';
    const wrong = [
      `${num(n1)} ${opp} ${num(n2)}`,
      `${num(n1)} = ${num(n2)}`,
      `${num(n2)} > ${num(n1)}`,
    ].filter((w) => w !== correct).slice(0, 3);
    return one('mc', [txt(`Which comparison statement is true?`)],
      mc(rng, correct, wrong),
      `Compare place values from left to right. Both numbers have ${Math.floor(base / 1000)} thousands. Comparing the hundreds, ${d1} is ${symbol === '>' ? 'greater than' : 'less than'} ${d2}, so ${num(n1)} ${symbol} ${num(n2)}.`);
  }

  if (d === 2) {
    // Order three numbers from least to greatest or greatest to least
    const a = randInt(rng, 30, 90) * 1000 + randInt(rng, 100, 400);
    const b = a + randInt(rng, 200, 600);
    const c = b + randInt(rng, 300, 700);
    const l2g = rng() < 0.5;
    const ordered = l2g ? [a, b, c] : [c, b, a];
    const correct = ordered.map(num).join(' , ');
    const wrong = [
      [b, a, c].map(num).join(' , '),
      [c, a, b].map(num).join(' , '),
      (l2g ? [c, b, a] : [a, b, c]).map(num).join(' , '),
    ];
    return one('mc', [txt(`Which list shows the numbers in order from **${l2g ? 'least to greatest' : 'greatest to least'}**?`)],
      mc(rng, correct, wrong),
      `Comparing the numbers: ${num(a)} < ${num(b)} < ${num(c)}. From ${l2g ? 'least to greatest' : 'greatest to least'}, the order is ${correct}.`);
  }

  // d === 3: Real-world table comparison
  const name1 = pick(rng, NAMES);
  const name2 = pick(rng, NAMES.filter((n) => n !== name1));
  const name3 = pick(rng, NAMES.filter((n) => n !== name1 && n !== name2));
  const s1 = randInt(rng, 15000, 45000);
  const s2 = s1 + randInt(rng, 500, 2500);
  const s3 = s2 + randInt(rng, 800, 3000);
  return one('mc', [
    txt(`Three students collected points in a game:\n• ${name1}: ${num(s2)} points\n• ${name2}: ${num(s1)} points\n• ${name3}: ${num(s3)} points\n\nWhich comparison correctly compares their points?`),
  ],
    mc(rng, `${num(s3)} > ${num(s2)}`, [
      `${num(s1)} > ${num(s3)}`,
      `${num(s2)} < ${num(s1)}`,
      `${num(s3)} < ${num(s1)}`,
    ]),
    `Compare the scores: ${name3} has ${num(s3)} points, which is greater than ${name1}'s ${num(s2)} points. So ${num(s3)} > ${num(s2)} is true.`);
};

// ---------- 3.3A Represent fractions with models ----------
export const representFractions: Gen = (rng, d) => {
  const den = pick(rng, d === 1 ? [2, 3, 4] : [4, 6, 8]);
  const numVal = randInt(rng, 1, den - 1);
  return one('mc', [
    fig({ kind: 'fractionBars', bars: [{ parts: den, shaded: numVal }] }, `Fraction bar divided into ${den} equal parts with ${numVal} parts shaded`),
    txt(`What fraction of the model is shaded?`),
  ],
    mc(rng, `{${numVal}/${den}}`, [
      `{${den - numVal}/${den}}`,
      `{${numVal}/${den + 1}}`,
      `{${den}/${numVal}}`,
    ]),
    `The model is divided into ${den} equal parts (the denominator), and ${numVal} parts are shaded (the numerator). The fraction shaded is {${numVal}/${den}}.`);
};

// ---------- 3.3B Fractions on a number line ----------
export const fractionsOnNumberLine: Gen = (rng, d) => {
  const den = pick(rng, d === 1 ? [2, 3, 4] : [6, 8]);
  const numVal = randInt(rng, 1, den - 1);
  return one('mc', [
    fig({ kind: 'numberLine', from: 0, to: 1, step: 1 / den, decimals: 2, point: numVal / den, pointLabel: 'P' }, `Number line from 0 to 1 partitioned into ${den} equal intervals with point P at ${numVal}/${den}`),
    txt(`The number line from 0 to 1 is divided into equal intervals. What fraction represents the location of point P?`),
  ],
    mc(rng, `{${numVal}/${den}}`, [
      `{${den - numVal}/${den}}`,
      `{${numVal}/${den === 8 ? 6 : 8}}`,
      `{1/${den}}`,
    ]),
    `Count the equal intervals from 0 to 1: there are ${den} equal parts. Point P is located at the ${ordinal(numVal)} mark, representing {${numVal}/${den}}.`);
};

// ---------- 3.3C Unit fractions as one part of a whole ----------
export const unitFractions: Gen = (rng, d) => {
  const den = pick(rng, [3, 4, 6, 8]);
  if (d === 1) {
    return one('mc', [txt(`A whole rectangle is divided into ${den} equal parts. What fraction represents each part?`)],
      mc(rng, `{1/${den}}`, [
        `{${den}/1}`,
        `{1/${den - 1}}`,
        `{${den}/${den}}`,
      ]),
      `When a whole is divided into ${den} equal parts, each single part is represented by the unit fraction {1/${den}}.`);
  }

  if (d === 2) {
    const item = pick(rng, ['pizza', 'pie', 'pan of cornbread', 'waffle']);
    return one('mc', [txt(`A ${item} is cut into ${den} equal slices. ${pick(rng, NAMES)} eats 1 slice. What fraction of the ${item} did they eat?`)],
      mc(rng, `{1/${den}}`, [
        `{1/${den + 1}}`,
        `{${den - 1}/${den}}`,
        `{${den}/1}`,
      ]),
      `One slice out of ${den} equal slices represents the unit fraction {1/${den}}.`);
  }

  // d === 3: Comparing unit fractions
  const den2 = den === 8 ? 4 : den === 6 ? 3 : 8;
  const larger = den < den2 ? den : den2;
  const smaller = den < den2 ? den2 : den;
  return one('mc', [txt(`Which statement correctly compares the unit fractions {1/${larger}} and {1/${smaller}}?`)],
    mc(rng, `{1/${larger}} > {1/${smaller}} because dividing a whole into fewer parts makes each part larger`, [
      { text: `{1/${larger}} < {1/${smaller}} because ${smaller} is greater than ${larger}`, why: 'More parts means each part is smaller, not larger.' },
      `{1/${larger}} = {1/${smaller}} because both numerators are 1`,
      `{1/${larger}} < {1/${smaller}} because ${larger} is smaller than ${smaller}`,
    ]),
    `When a whole is partitioned into ${larger} parts, each piece is bigger than when partitioned into ${smaller} parts. Therefore, {1/${larger}} > {1/${smaller}}.`);
};

// ---------- 3.3D Compose and decompose fractions ----------
export const composeDecomposeFraction: Gen = (rng, d) => {
  const den = pick(rng, [4, 6, 8]);
  const numVal = randInt(rng, 2, den - 1);
  const units = Array.from({ length: numVal }, () => `{1/${den}}`).join(' + ');

  if (d === 1) {
    return one('mc', [txt(`Which expression represents the fraction {${numVal}/${den}} as a sum of unit fractions?`)],
      mc(rng, units, [
        Array.from({ length: numVal - 1 }, () => `{1/${den}}`).join(' + '),
        Array.from({ length: numVal + 1 }, () => `{1/${den}}`).join(' + '),
        `{${numVal}/1} + {1/${den}}`,
      ]),
      `The fraction {${numVal}/${den}} is composed of ${numVal} parts of {1/${den}}, so it equals ${units}.`);
  }

  // Decomposing into two parts
  const p1 = randInt(rng, 1, numVal - 1);
  const p2 = numVal - p1;
  const correct = `{${p1}/${den}} + {${p2}/${den}}`;
  const wrong = [
    `{${p1}/${den}} + {${p2 + 1}/${den}}`,
    `{${p1}/${den * 2}} + {${p2}/${den * 2}}`,
    `{${p1 + 1}/${den}} + {${p2}/${den}}`,
  ];
  return one('mc', [txt(`Which sum is equal to {${numVal}/${den}}?`)],
    mc(rng, correct, wrong),
    `Adding fractions with the same denominator: {${p1}/${den}} + {${p2}/${den}} = {${p1 + p2}/${den}} = {${numVal}/${den}}.`);
};

// ---------- 3.3E Partition sets and objects among recipients ----------
export const partitionObjects: Gen = (rng, d) => {
  const name1 = pick(rng, NAMES);
  const name2 = pick(rng, NAMES.filter((n) => n !== name1));

  if (d === 1) {
    // 2 or 4 friends share 1 item equally
    const recipients = pick(rng, [2, 4]);
    return one('mc', [txt(`${name1} and ${name2}${recipients === 4 ? ' and 2 other friends' : ''} share 1 pizza equally. What fraction of the pizza does each person get?`)],
      mc(rng, `{1/${recipients}}`, [
        `{${recipients}/1}`,
        `{1/${recipients + 2}}`,
        `{${recipients - 1}/${recipients}}`,
      ]),
      `One pizza shared equally among ${recipients} people gives each person 1 out of ${recipients} equal parts, which is {1/${recipients}}.`);
  }

  if (d === 2) {
    // Sharing a set of objects
    const recipients = pick(rng, [3, 4, 6]);
    const itemsPerPerson = randInt(rng, 2, 5);
    const totalItems = recipients * itemsPerPerson;
    return one('mc', [txt(`A teacher shares ${totalItems} stickers equally among ${recipients} students. What fraction of the total stickers does each student receive?`)],
      mc(rng, `{1/${recipients}}`, [
        `{1/${itemsPerPerson}}`,
        `{${itemsPerPerson}/${totalItems}}`,
        `{${recipients}/${totalItems}}`,
      ]),
      `Because the ${totalItems} stickers are divided into ${recipients} equal groups, each student receives 1 group out of ${recipients}, which is {1/${recipients}} of the total.`);
  }

  // d === 3: Sharing multiple objects
  const objects = pick(rng, [2, 3]);
  const people = pick(rng, [4, 6]);
  return one('mc', [txt(`${people} students share ${objects} large cookies equally. What fraction of a cookie does each student receive?`)],
    mc(rng, `{${objects}/${people}}`, [
      `{${people}/${objects}}`,
      `{1/${people}}`,
      `{${objects}/${people + 2}}`,
    ]),
    `Dividing ${objects} cookies among ${people} students gives ${objects} ÷ ${people} = {${objects}/${people}} of a cookie per student.`);
};

// ---------- 3.3F Represent equivalent fractions ----------
export const equivalentFractions: Gen = (rng, d) => {
  const pairs = [
    { n1: 1, d1: 2, n2: 2, d2: 4 },
    { n1: 1, d1: 2, n2: 3, d2: 6 },
    { n1: 1, d1: 2, n2: 4, d2: 8 },
    { n1: 2, d1: 3, n2: 4, d2: 6 },
    { n1: 3, d1: 4, n2: 6, d2: 8 },
    { n1: 1, d1: 3, n2: 2, d2: 6 },
    { n1: 1, d1: 4, n2: 2, d2: 8 },
  ];
  const p = pick(rng, pairs);

  if (d === 1) {
    return one('mc', [
      fig({ kind: 'fractionBars', bars: [{ parts: p.d1, shaded: p.n1, label: `{${p.n1}/${p.d1}}` }, { parts: p.d2, shaded: p.n2, label: '?' }] }, `Two fraction bars of the same length showing equivalent fractions`),
      txt(`The two fraction bars show equivalent fractions. Which fraction is equivalent to {${p.n1}/${p.d1}}?`),
    ],
      mc(rng, `{${p.n2}/${p.d2}}`, [
        `{${p.n2 + 1}/${p.d2}}`,
        `{${p.n2}/${p.d2 + 2}}`,
        `{1/${p.d2}}`,
      ]),
      `Both bars represent the same shaded length. {${p.n1}/${p.d1}} is equivalent to {${p.n2}/${p.d2}}.`);
  }

  // d === 2 or 3: Symbolic equivalence
  return one('mc', [txt(`Which fraction is equivalent to {${p.n1}/${p.d1}}?`)],
    mc(rng, `{${p.n2}/${p.d2}}`, [
      `{${p.n2 + 1}/${p.d2}}`,
      `{${p.n1}/${p.d2}}`,
      `{${p.n2}/${p.d1}}`,
    ]),
    `Multiplying numerator and denominator of {${p.n1}/${p.d1}} by ${p.d2 / p.d1} gives {${p.n2}/${p.d2}}.`);
};

// ---------- 3.3G Explain fraction equivalence ----------
export const explainEquivalence: Gen = (rng, _d) => {
  const pairs = [
    { f1: '{1/2}', f2: '{2/4}' },
    { f1: '{2/3}', f2: '{4/6}' },
    { f1: '{3/4}', f2: '{6/8}' },
  ];
  const p = pick(rng, pairs);
  return one('mc', [txt(`Why are ${p.f1} and ${p.f2} equivalent fractions?`)],
    mc(rng, `They represent the same point on a number line and the same portion of an equal-sized whole.`, [
      { text: `They have the same numerator.`, why: 'Equivalent fractions can have different numerators and denominators.' },
      `They both have even denominators.`,
      `Their denominators differ by 2.`,
    ]),
    `Fractions are equivalent if and only if they represent the same amount of an equal-sized whole or the same position on a number line. Therefore, ${p.f1} and ${p.f2} are equivalent because they represent the same point on a number line.`);
};

// ---------- 3.3H Compare fractions with like numerators or denominators ----------
export const compareFractions: Gen = (rng, d) => {
  const compareNumerators = d === 1 || rng() < 0.5;

  if (compareNumerators) {
    // Same denominator, different numerators
    const den = pick(rng, [4, 6, 8]);
    const n1 = randInt(rng, 1, den - 2);
    const n2 = n1 + randInt(rng, 1, den - n1);
    const correct = `{${n1}/${den}} < {${n2}/${den}}`;
    const wrong = [
      `{${n1}/${den}} > {${n2}/${den}}`,
      `{${n1}/${den}} = {${n2}/${den}}`,
      `{${n2}/${den}} < {${n1}/${den}}`,
    ];
    return one('mc', [txt(`Which comparison statement is true?`)],
      mc(rng, correct, wrong),
      `When fractions have the same denominator (${den}), compare the numerators: ${n1} parts is less than ${n2} parts. Thus, {${n1}/${den}} < {${n2}/${den}}.`);
  }

  // Same numerator, different denominators
  const numVal = pick(rng, [2, 3]);
  const den1 = pick(rng, [3, 4]);
  const den2 = pick(rng, [6, 8]);
  // den1 < den2, so {numVal/den1} > {numVal/den2}
  const correct = `{${numVal}/${den1}} > {${numVal}/${den2}}`;
  const wrong = [
    `{${numVal}/${den1}} < {${numVal}/${den2}}`,
    `{${numVal}/${den1}} = {${numVal}/${den2}}`,
    `{${numVal}/${den2}} > {${numVal}/${den1}}`,
  ];
  return one('mc', [txt(`Which statement correctly compares {${numVal}/${den1}} and {${numVal}/${den2}}?`)],
    mc(rng, correct, wrong),
    `When fractions have the same numerator (${numVal}), the fraction with the smaller denominator has larger pieces. Since ${den1} < ${den2}, {${numVal}/${den1}} > {${numVal}/${den2}}.`);
};

// ---------- 3.4I Determine even and odd numbers ----------
export const evenOdd: Gen = (rng, d) => {
  if (d === 1) {
    // 2-digit number
    const n = randInt(rng, 12, 98);
    const isEven = n % 2 === 0;
    const lastDigit = n % 10;
    return one('mc', [txt(`Is the number ${n} even or odd?`)],
      mc(rng, isEven ? `${n} is even because its ones digit is ${lastDigit}.` : `${n} is odd because its ones digit is ${lastDigit}.`, [
        isEven ? `${n} is odd because it can be divided into two equal groups.` : `${n} is even because it can be divided into two equal groups.`,
        isEven ? `${n} is odd because its ones digit is ${lastDigit}.` : `${n} is even because its ones digit is ${lastDigit}.`,
        `${n} is neither even nor odd.`,
      ]),
      `A whole number is even if its ones digit is 0, 2, 4, 6, or 8. It is odd if its ones digit is 1, 3, 5, 7, or 9. Since ${n} ends in ${lastDigit}, it is ${isEven ? 'even' : 'odd'}.`);
  }

  if (d === 2) {
    // 3-digit number
    const n = randInt(rng, 101, 899);
    const isEven = n % 2 === 0;
    return one('mc', [txt(`Which statement about the number ${n} is true?`)],
      mc(rng, isEven ? `${n} is an even number.` : `${n} is an odd number.`, [
        isEven ? `${n} is an odd number.` : `${n} is an even number.`,
        `${n} is divisible by 2 with a remainder of 1.`,
        `${n} cannot be determined without a calculator.`,
      ]),
      `Look at the ones digit of ${n}, which is ${n % 10}. Because ${n % 10} is ${isEven ? 'an even digit (0, 2, 4, 6, 8)' : 'an odd digit (1, 3, 5, 7, 9)'}, ${n} is ${isEven ? 'even' : 'odd'}.`);
  }

  // d === 3: Word problem dividing into 2 equal teams
  const n = randInt(rng, 15, 35);
  const isEven = n % 2 === 0;
  return one('mc', [txt(`A gym teacher has ${n} students. Can the teacher divide all ${n} students into 2 equal teams with no students left over?`)],
    mc(rng, isEven ? `Yes, because ${n} is an even number.` : `No, because ${n} is an odd number.`, [
      isEven ? `No, because ${n} is an odd number.` : `Yes, because ${n} is an even number.`,
      `Yes, because any number can be divided into 2 equal groups.`,
      `No, because ${n} is greater than 20.`,
    ]),
    `Even numbers can be divided by 2 into equal groups with zero remainder. Since ${n} is ${isEven ? 'even' : 'odd'}, the answer is ${isEven ? 'yes' : 'no'}.`);
};

// ---------- 3.7A Halves, fourths, and eighths on a number line ----------
export const fractionsAsDistances: Gen = (rng, d) => {
  const den = pick(rng, d === 1 ? [2, 4] : [4, 8]);
  const numVal = randInt(rng, 1, den);
  return one('mc', [
    fig({ kind: 'numberLine', from: 0, to: 1, step: 1 / den, decimals: 2, point: numVal / den, pointLabel: 'D' }, `Number line from 0 to 1 with point D marked at distance ${numVal}/${den}`),
    txt(`The number line shows a distance marked from 0. What fraction represents the distance from 0 to point D?`),
  ],
    mc(rng, `{${numVal}/${den}}`, [
      `{${den - numVal}/${den}}`,
      `{${numVal}/${den === 8 ? 4 : 8}}`,
      `{1/${den}}`,
    ]),
    `The distance from 0 is partitioned into ${den} equal lengths. Point D is ${numVal} intervals away from 0, representing a distance of {${numVal}/${den}}.`);
};

export const STRAND1: Record<string, Gen[]> = {
  '3.2A': [composeDecompose],
  '3.2B': [baseTenRelations],
  '3.2C': [roundOnNumberLine],
  '3.2D': [compareOrderWhole],
  '3.3A': [representFractions],
  '3.3B': [fractionsOnNumberLine],
  '3.3C': [unitFractions],
  '3.3D': [composeDecomposeFraction],
  '3.3E': [partitionObjects],
  '3.3F': [equivalentFractions],
  '3.3G': [explainEquivalence],
  '3.3H': [compareFractions],
  '3.4I': [evenOdd],
  '3.7A': [fractionsAsDistances],
};
