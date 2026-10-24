// Grade 4 math, strand 2: computations and algebraic relationships.

import { pick, randInt } from '../../rng.ts';
import { dec, mc, num, one, table, txt, type Gen } from '../build.ts';

// ---------- 4.3E add and subtract like fractions ----------
export const addSubtractFractions: Gen = (rng, d) => {
  const denoms = [4, 5, 6, 8, 10, 12];
  const denom = pick(rng, denoms);
  const isAdd = rng() < 0.5;

  if (d === 1) {
    if (isAdd) {
      const a = randInt(rng, 1, Math.floor(denom / 2));
      const b = randInt(rng, 1, denom - a - 1);
      const sum = a + b;
      const right = `{${sum}/${denom}}`;
      const wrong1 = `{${sum}/${denom * 2}}`;
      const subVal = Math.abs(a - b);
      const wrong2 = subVal > 0 && subVal !== sum && subVal * 2 !== sum ? `{${subVal}/${denom}}` : `{${sum + 2 <= denom ? sum + 2 : 1}/${denom}}`;
      const wrong3 = sum + 1 <= denom && sum + 1 !== subVal ? `{${sum + 1}/${denom}}` : `{${sum - 1 > 0 ? sum - 1 : 2}/${denom}}`;
      return one('mc', [
        txt(`What is the sum?`),
        txt(`{${a}/${denom}} + {${b}/${denom}}`),
      ],
        mc(rng, right, [wrong1, wrong2, wrong3]),
        `Add the numerators: ${a} + ${b} = ${sum}. Keep the denominator ${denom}. The answer is {${sum}/${denom}}.`);
    }
    const a = randInt(rng, 3, denom - 1);
    const b = randInt(rng, 1, a - 1);
    const diff = a - b;
    const right = `{${diff}/${denom}}`;
    const wrong1 = `{${a + b}/${denom}}`;
    const wrong2 = `{${diff}/${denom * 2}}`;
    const wrong3 = diff + 1 <= denom && diff + 1 !== a + b ? `{${diff + 1}/${denom}}` : `{${Math.max(1, diff - 1)}/${denom}}`;
    return one('mc', [
      txt(`What is the difference?`),
      txt(`{${a}/${denom}} − {${b}/${denom}}`),
    ],
      mc(rng, right, [wrong1, wrong2, wrong3]),
      `Subtract the numerators: ${a} − ${b} = ${diff}. Keep the denominator ${denom}. The answer is {${diff}/${denom}}.`);
  }

  if (d === 2) {
    // Word problem with like fractions
    const person = pick(rng, ['Leila', 'Mateo', 'Kaitlyn', 'Noah']);
    const a = randInt(rng, 2, denom - 1);
    const b = randInt(rng, 1, denom - 1);
    const sum = a + b;
    const item = pick(rng, ['fabric', 'ribbon', 'dough', 'trail mix']);
    const right = `{${sum}/${denom}}`;
    const wrong1 = `{${sum}/${denom * 2}}`;
    const wrong2 = `{${Math.abs(a - b) || 1}/${denom}}`;
    const wrong3 = `{${sum + 2}/${denom}}`;
    return one('mc', [
      txt(`${person} used {${a}/${denom}} yard of ${item} for one project and {${b}/${denom}} yard for another project. How many total yards of ${item} did ${person} use?`),
    ],
      mc(rng, right, [wrong1, wrong2, wrong3]),
      `Add the two amounts: {${a}/${denom}} + {${b}/${denom}} = {${sum}/${denom}} yards.`);
  }

  // d === 3: Subtracting mixed numbers with regrouping
  const whole = randInt(rng, 2, 4);
  const n1 = 1;
  const n2 = randInt(rng, 2, denom - 1);
  // whole n1/denom - n2/denom = (whole - 1) + (denom + n1 - n2)/denom
  const remNum = denom + n1 - n2;
  const right = `${whole - 1}{${remNum}/${denom}}`;
  const wrong1 = `${whole}{${n2 - n1}/${denom}}`;
  const wrong2 = `${whole}{${remNum}/${denom}}`;
  const wrong3 = `${whole - 1}{${remNum + 1 < denom ? remNum + 1 : Math.max(1, remNum - 1)}/${denom}}`;
  return one('mc', [
    txt(`Solve the subtraction problem:`),
    txt(`${whole}{${n1}/${denom}} − {${n2}/${denom}}`),
  ],
    mc(rng, right, [
      { text: wrong1, why: 'You must regroup 1 whole into fractions before subtracting.' },
      wrong2,
      wrong3,
    ]),
    `Regroup 1 whole as {${denom}/${denom}}. ${whole}{${n1}/${denom}} becomes ${whole - 1}{${denom + n1}/${denom}}. Subtract {${n2}/${denom}}: ${whole - 1}{${remNum}/${denom}} = ${right}.`);
};

// ---------- 4.3F benchmark fractions to estimate ----------
export const benchmarkFractions: Gen = (rng, d) => {
  if (d === 1) {
    // Estimate a single fraction to nearest benchmark: 0, 1/4, 1/2, 3/4, 1
    const cases = [
      { f: '{1/8}', near: '0', why: '1/8 is very close to 0.' },
      { f: '{3/10}', near: '{1/4}', why: '3/10 (0.30) is closest to 1/4 (0.25).' },
      { f: '{5/8}', near: '{1/2}', why: '5/8 is just above 4/8, which is 1/2.' },
      { f: '{7/10}', near: '{3/4}', why: '7/10 (0.70) is close to 3/4 (0.75).' },
      { f: '{11/12}', near: '1', why: '11/12 is almost a full whole.' },
    ];
    const c = pick(rng, cases);
    return one('mc', [txt(`Which benchmark fraction (0, {1/4}, {1/2}, {3/4}, 1) is closest to ${c.f}?`)],
      mc(rng, c.near, ['0', '{1/4}', '{1/2}', '{3/4}', '1'].filter((x) => x !== c.near)),
      c.why);
  }

  if (d === 2) {
    // Sum estimate: e.g. 5/8 + 1/12 is about 1/2 + 0 = 1/2
    const problems = [
      { f1: '{5/8}', f2: '{1/10}', est: '{1/2}', explain: '{5/8} is about {1/2} and {1/10} is about 0. {1/2} + 0 = {1/2}.' },
      { f1: '{7/8}', f2: '{9/10}', est: '2', explain: 'Both {7/8} and {9/10} are close to 1. 1 + 1 = 2.' },
      { f1: '{3/8}', f2: '{1/4}', est: '{1/2}', explain: '{3/8} is between {1/4} and {1/2}. {3/8} + {1/4} is about {1/2}.' },
      { f1: '{7/12}', f2: '{4/5}', est: '1{1/2}', explain: '{7/12} is about {1/2} and {4/5} is about 1. {1/2} + 1 = 1{1/2}.' },
    ];
    const p = pick(rng, problems);
    return one('mc', [txt(`Use benchmark fractions to estimate the sum of ${p.f1} and ${p.f2}.`)],
      mc(rng, p.est, ['{1/4}', '{1/2}', '1', '1{1/2}', '2'].filter((x) => x !== p.est)),
      p.explain);
  }

  // d === 3: Reasonableness of a student's answer
  return one('mc', [
    txt(`Kendall added {7/8} and {5/6} and got an answer of {12/14}. Without calculating the exact sum, which statement explains why Kendall's answer is not reasonable?`),
  ],
    mc(rng, 'Both fractions are close to 1, so the sum must be greater than 1.', [
      { text: 'The sum of two fractions can never be an even number.', why: 'Fraction values are numbers, not even or odd properties.' },
      'Kendall should have subtracted the denominators.',
      'The sum must be less than {1/2}.',
    ]),
    `{7/8} is close to 1 and {5/6} is close to 1. The sum should be close to 1 + 1 = 2. {12/14} is less than 1, so Kendall's answer is not reasonable.`);
};

// ---------- 4.4A add and subtract whole numbers and decimals ----------
export const addSubtractAlgorithm: Gen = (rng, d) => {
  if (d === 1) {
    // Large whole numbers addition or subtraction
    const isAdd = rng() < 0.5;
    const a = randInt(rng, 15000, 75000);
    const b = randInt(rng, 8000, 35000);
    if (isAdd) {
      const sum = a + b;
      return one('mc', [txt(`What is the sum?`), txt(`${num(a)} + ${num(b)}`)],
        mc(rng, num(sum), [num(sum + 100), num(sum - 10), num(sum + 1000)]),
        `Line up digits by place value and add, regrouping when needed. ${num(a)} + ${num(b)} = ${num(sum)}.`);
    }
    const diff = a - b;
    return one('mc', [txt(`What is the difference?`), txt(`${num(a)} − ${num(b)}`)],
      mc(rng, num(diff), [num(diff + 100), num(diff - 100), num(diff + 10)]),
      `Line up digits by place value and subtract, regrouping across zeros when needed. ${num(a)} − ${num(b)} = ${num(diff)}.`);
  }

  if (d === 2) {
    // Decimals addition to hundredths
    const centsA = randInt(rng, 1200, 6800);
    const centsB = randInt(rng, 800, 4200);
    const sumCents = centsA + centsB;
    const aStr = dec(centsA, 2);
    const bStr = dec(centsB, 2);
    const sumStr = dec(sumCents, 2);
    return one('mc', [txt(`Calculate the sum of the decimals:`), txt(`${aStr} + ${bStr}`)],
      mc(rng, sumStr, [
        dec(sumCents + 10, 2),
        dec(sumCents - 100, 2),
        dec(centsA + centsB * 10, 2),
      ]),
      `Line up the decimal points. Add hundredths, tenths, and whole numbers with regrouping. ${aStr} + ${bStr} = ${sumStr}.`);
  }

  // d === 3: Decimals subtraction with zeros (regrouping across zero)
  const wholeVal = randInt(rng, 30, 80);
  const centsSub = randInt(rng, 1210, 2895);
  const diffCents = wholeVal * 100 - centsSub;
  const aStr = `${wholeVal}.00`;
  const bStr = dec(centsSub, 2);
  const diffStr = dec(diffCents, 2);
  return one('mc', [
    txt(`Mia had $${wholeVal}.00 in her savings account. She bought school supplies for $${bStr}. How much money did Mia have left in her account?`),
  ],
    mc(rng, `$${diffStr}`, [
      `$${dec(diffCents + 10, 2)}`,
      `$${dec(wholeVal * 100 - centsSub + 90, 2)}`,
      `$${dec(diffCents - 100, 2)}`,
    ]),
    `Subtract $${bStr} from $${aStr}. Regroup across the zeros in the tenths and hundredths places: $${aStr} − $${bStr} = $${diffStr}.`);
};

// ---------- 4.4B multiply by 10 or 100 ----------
export const multiplyBy10Or100: Gen = (rng, d) => {
  const mult = pick(rng, [10, 100]);
  if (d === 1) {
    const n = randInt(rng, 12, 85);
    const prod = n * mult;
    return one('mc', [txt(`What is the product of ${n} and ${mult}?`)],
      mc(rng, num(prod), [num(prod + 10), num(n + mult), num(prod * 10)]),
      `Multiplying by ${mult} shifts each digit ${mult === 10 ? 'one place' : 'two places'} to the left, adding ${mult === 10 ? 'one zero' : 'two zeros'}. ${n} × ${mult} = ${num(prod)}.`);
  }

  if (d === 2) {
    // Multiples of 10 or 100: e.g. 40 × 50 or 70 × 100
    const tens = randInt(rng, 3, 9) * 10;
    const prod = tens * mult;
    return one('mc', [txt(`A shipment contains ${tens} boxes with ${mult} items in each box. What is the total number of items?`)],
      mc(rng, num(prod), [num(prod / 10), num(tens + mult), num(prod + 100)]),
      `Multiply ${tens} by ${mult}: ${tens} × ${mult} = ${num(prod)} items.`);
  }

  // d === 3: Place value representation: 38 × 100 as 38 hundreds
  const n = randInt(rng, 23, 79);
  const prod = n * 100;
  return one('mc', [txt(`Which expression is equivalent to ${num(prod)}?`)],
    mc(rng, `${n} hundreds`, [
      { text: `${n} tens`, why: `${n} tens is ${n * 10}, not ${num(prod)}.` },
      `${n} thousands`,
      `${n * 10} hundreds`,
    ]),
    `${num(prod)} is ${n} × 100, which means ${n} groups of 100, or ${n} hundreds.`);
};

// ---------- 4.4C represent products with arrays and area models ----------
export const productArraysModels: Gen = (rng, d) => {
  if (d === 1) {
    // Perfect squares through 15 by 15
    const sq = randInt(rng, 6, 15);
    const prod = sq * sq;
    return one('mc', [txt(`What is the area of a square with a side length of ${sq} units?`)],
      mc(rng, `${prod} square units`, [
        { text: `${sq * 4} square units`, why: 'That is the perimeter (4 × side), not the area.' },
        `${prod + sq} square units`,
        `${prod - sq} square units`,
      ]),
      `The area of a square is side × side. ${sq} × ${sq} = ${prod} square units.`);
  }

  if (d === 2) {
    // Partial products in an area model
    const t1 = randInt(rng, 2, 5) * 10, o1 = randInt(rng, 2, 8);
    const t2 = randInt(rng, 1, 3) * 10, o2 = randInt(rng, 2, 7);
    const n1 = t1 + o1, n2 = t2 + o2;
    const right = `(${t1} × ${t2}) + (${t1} × ${o2}) + (${o1} × ${t2}) + (${o1} × ${o2})`;
    const wrong1 = `(${t1} × ${t2}) + (${o1} × ${o2})`;
    const wrong2 = `(${t1} + ${t2}) × (${o1} + ${o2})`;
    const wrong3 = `(${n1} × ${t2}) + (${o1} × ${o2})`;
    return one('mc', [
      txt(`An area model is used to multiply ${n1} × ${n2}. Which expression shows the sum of the four partial products in the area model?`),
    ],
      mc(rng, right, [
        { text: wrong1, why: 'An area model for 2-digit by 2-digit multiplication has four partial products, not two.' },
        wrong2,
        wrong3,
      ]),
      `Break each number into tens and ones: ${n1} = ${t1} + ${o1} and ${n2} = ${t2} + ${o2}. The four partial products are (${t1} × ${t2}) + (${t1} × ${o2}) + (${o1} × ${t2}) + (${o1} × ${o2}).`);
  }

  // d === 3: Calculate product from an area model breakdown
  const t = 20, o = 4;
  const m = 15;
  const prod = (t + o) * m;
  return one('mc', [
    txt(`To find 24 × 15, a student computed partial products: (20 × 15) + (4 × 15). What is the total product?`),
  ],
    mc(rng, num(prod), [num(prod + 20), num(prod - 15), num(prod + 100)]),
    `20 × 15 = 300, and 4 × 15 = 60. Add the partial products: 300 + 60 = ${prod}.`);
};

// ---------- 4.4D multiply up to 4 digits by 1 digit and 2 by 2 digits ----------
export const multiplyAlgorithm: Gen = (rng, d) => {
  if (d === 1) {
    // 3 or 4 digits by 1 digit
    const n = randInt(rng, 250, 1850);
    const m = randInt(rng, 3, 8);
    const prod = n * m;
    return one('mc', [txt(`What is the product?`), txt(`${num(n)} × ${m}`)],
      mc(rng, num(prod), [num(prod + m), num(prod - 10), num(prod + 100)]),
      `Multiply each digit by ${m} using the standard algorithm: ${num(n)} × ${m} = ${num(prod)}.`);
  }

  if (d === 2) {
    // 2-digit by 2-digit
    const a = randInt(rng, 18, 65);
    const b = randInt(rng, 14, 45);
    const prod = a * b;
    return one('mc', [txt(`Calculate the product:`), txt(`${a} × ${b}`)],
      mc(rng, num(prod), [num(prod + a), num(prod - b), num(prod + 100)]),
      `Multiply ${a} by the ones digit of ${b}, then by the tens digit, and add: ${a} × ${b} = ${num(prod)}.`);
  }

  // d === 3: Word problem with 4-digit by 1-digit
  const miles = randInt(rng, 1200, 3400);
  const trips = randInt(rng, 3, 6);
  const total = miles * trips;
  const person = pick(rng, ['An airline pilot', 'A delivery driver', 'A tour bus']);
  return one('mc', [
    txt(`${person} traveled ${num(miles)} miles on each of ${trips} trips. What was the total number of miles traveled?`),
  ],
    mc(rng, `${num(total)} miles`, [
      `${num(total + miles)} miles`,
      `${num(total - 100)} miles`,
      `${num(miles + trips)} miles`,
    ]),
    `Multiply the miles per trip by the number of trips: ${num(miles)} × ${trips} = ${num(total)} miles.`);
};

// ---------- 4.4E represent division with models ----------
export const divisionModels: Gen = (rng, d) => {
  if (d === 1) {
    // Quotient represented by area model decomposition
    const div = randInt(rng, 3, 6);
    const q1 = randInt(rng, 2, 5) * 10;
    const q2 = randInt(rng, 1, 8);
    const total = (q1 + q2) * div;
    const right = `(${q1 * div} ÷ ${div}) + (${q2 * div} ÷ ${div})`;
    const wrong1 = `(${q1 * div} ÷ ${div}) + (${q2 * div})`;
    const wrong2 = `(${total} − ${div}) ÷ ${div}`;
    const wrong3 = `(${q1} ÷ ${div}) + (${q2} ÷ ${div})`;
    return one('mc', [
      txt(`Which expression represents dividing ${total} by ${div} using partial quotients?`),
    ],
      mc(rng, right, [wrong1, wrong2, wrong3]),
      `Break ${total} into friendly numbers divisible by ${div}: ${q1 * div} and ${q2 * div}. ${right} = ${q1} + ${q2} = ${q1 + q2}.`);
  }

  if (d === 2) {
    const divisor = pick(rng, [4, 5, 6]);
    const q = randInt(rng, 25, 65);
    const dividend = q * divisor;
    return one('mc', [
      txt(`An array model for division shows a rectangle with an area of ${dividend} square units and a width of ${divisor} units. What is the length of the rectangle?`),
    ],
      mc(rng, `${q} units`, [`${q + 2} units`, `${q - 3} units`, `${dividend - divisor} units`]),
      `Length = area ÷ width = ${dividend} ÷ ${divisor} = ${q} units.`);
  }

  // d === 3: Word problem with equations representing division
  const items = randInt(rng, 150, 480);
  const groups = pick(rng, [3, 4, 5]);
  const perGroup = Math.floor(items / groups);
  const rem = items % groups;
  const eq = rem === 0 ? `${items} ÷ ${groups} = ${perGroup}` : `${items} = (${groups} × ${perGroup}) + ${rem}`;
  return one('mc', [
    txt(`A school has ${items} students dividing equally among ${groups} buses. Which equation accurately represents the situation?`),
  ],
    mc(rng, eq, [
      `${items} × ${groups} = ${num(items * groups)}`,
      `${items} + ${groups} = ${items + groups}`,
      `${items} = (${groups} × ${perGroup + 1}) − 5`,
    ]),
    `Divide the total number of students by the number of buses: ${eq}.`);
};

// ---------- 4.4F divide by a 1-digit divisor ----------
export const divideAlgorithm: Gen = (rng, d) => {
  const divisor = randInt(rng, 3, 9);
  if (d === 1) {
    // 3-digit divided by 1-digit with no remainder
    const q = randInt(rng, 25, 95);
    const dividend = q * divisor;
    return one('mc', [txt(`What is the quotient?`), txt(`${dividend} ÷ ${divisor}`)],
      mc(rng, String(q), [String(q + 1), String(q - 2), String(q + 10)]),
      `Divide using long division: ${dividend} ÷ ${divisor} = ${q}.`);
  }

  if (d === 2) {
    // 4-digit dividend with remainder
    const q = randInt(rng, 120, 450);
    const rem = randInt(rng, 1, divisor - 1);
    const dividend = q * divisor + rem;
    return one('mc', [txt(`What is the quotient and remainder?`), txt(`${num(dividend)} ÷ ${divisor}`)],
      mc(rng, `${q} R ${rem}`, [
        `${q} R ${divisor - rem}`,
        `${q + 1} R ${rem}`,
        `${q - 1} R ${rem}`,
      ]),
      `${divisor} goes into ${num(dividend)} a total of ${q} times with a remainder of ${rem}. The answer is ${q} R ${rem}.`);
  }

  // d === 3: 4-digit division in context
  const q = randInt(rng, 250, 750);
  const dividend = q * divisor;
  const item = pick(rng, ['books', 'seedlings', 'bottles of water', 'pencils']);
  return one('mc', [
    txt(`A warehouse has ${num(dividend)} ${item} packed evenly into ${divisor} large containers. How many ${item} are in each container?`),
  ],
    mc(rng, `${num(q)} ${item}`, [
      `${num(q + 10)} ${item}`,
      `${num(q - 5)} ${item}`,
      `${num(dividend - divisor)} ${item}`,
    ]),
    `Divide the total items by the number of containers: ${num(dividend)} ÷ ${divisor} = ${num(q)} ${item}.`);
};

// ---------- 4.4G estimate solutions with rounding ----------
export const estimateSolutions: Gen = (rng, d) => {
  if (d === 1) {
    // Estimate sum by rounding to nearest hundred
    const a = randInt(rng, 25, 75) * 10 + randInt(rng, 1, 9);
    const b = randInt(rng, 15, 45) * 10 + randInt(rng, 1, 9);
    const rA = Math.round(a / 100) * 100;
    const rB = Math.round(b / 100) * 100;
    const est = rA + rB;
    return one('mc', [
      txt(`Estimate the sum by rounding each number to the nearest hundred:`),
      txt(`${a} + ${b}`),
    ],
      mc(rng, num(est), [num(est + 100), num(est - 100), num(a + b)]),
      `${a} rounds to ${num(rA)}. ${b} rounds to ${num(rB)}. ${num(rA)} + ${num(rB)} = ${num(est)}.`);
  }

  if (d === 2) {
    // Compatible numbers for division
    const divisor = pick(rng, [4, 6, 7, 8]);
    const mult = randInt(rng, 4, 9) * 10;
    const target = mult * divisor;
    const actual = target + randInt(rng, -12, 12);
    return one('mc', [
      txt(`Which compatible numbers are best to estimate the quotient of ${actual} ÷ ${divisor}?`),
    ],
      mc(rng, `${target} ÷ ${divisor} = ${mult}`, [
        `${target + 50} ÷ ${divisor} = ${mult + 10}`,
        `${actual} ÷ 10 = ${Math.round(actual / 10)}`,
        `${target - 40} ÷ ${divisor} = ${mult - 5}`,
      ]),
      `${target} is close to ${actual} and easily divisible by ${divisor}: ${target} ÷ ${divisor} = ${mult}.`);
  }

  // d === 3: Multi-step estimation word problem
  const cost1 = randInt(rng, 280, 320);
  const cost2 = randInt(rng, 490, 520);
  const estTotal = 300 + 500;
  return one('mc', [
    txt(`A community center purchased equipment for $${cost1} and furniture for $${cost2}. Which is the best estimate of the total amount spent, rounded to the nearest hundred?`),
  ],
    mc(rng, `$${estTotal}`, [`$700`, `$900`, `$1,000`]),
    `$${cost1} rounds to $300. $${cost2} rounds to $500. $300 + $500 = $${estTotal}.`);
};

// ---------- 4.4H multiply and divide multi-step problems ----------
export const multiStepMultiplyDivide: Gen = (rng, d) => {
  if (d === 1) {
    // Interpreting remainder: round up (buses needed), remainder >= 1
    const perBus = 40;
    const fullBuses = randInt(rng, 3, 5);
    const remKids = randInt(rng, 1, perBus - 1);
    const kids = fullBuses * perBus + remKids;
    const needed = fullBuses + 1;
    return one('mc', [
      txt(`A total of ${kids} students are going on a field trip. Each bus holds at most ${perBus} students. What is the minimum number of buses needed?`),
    ],
      mc(rng, `${needed} buses`, [
        { text: `${fullBuses} buses`, why: 'That would leave some students without a seat.' },
        `${needed + 1} buses`,
        `${remKids} buses`,
      ]),
      `${kids} ÷ ${perBus} = ${fullBuses} with a remainder of ${remKids}. Because all students need a seat, you must round up to ${needed} buses.`);
  }

  if (d === 2) {
    // Interpreting remainder: remainder is the answer (leftovers), remainder >= 1
    const perBox = 6;
    const boxes = randInt(rng, 8, 15);
    const leftover = randInt(rng, 1, perBox - 1);
    const muffins = boxes * perBox + leftover;
    const mUnit = (n: number) => `${n} muffin${n === 1 ? '' : 's'}`;
    return one('mc', [
      txt(`A bakery made ${muffins} muffins and packed them into boxes of ${perBox}. Any leftover muffins are sold individually. How many muffins were sold individually?`),
    ],
      mc(rng, mUnit(leftover), [
        { text: `${boxes} boxes`, why: 'That is the number of boxes, not the leftover muffins.' },
        mUnit(leftover + 1),
        mUnit(leftover + 2),
      ]),
      `Divide ${muffins} by ${perBox}: ${muffins} ÷ ${perBox} = ${boxes} R ${leftover}. The remainder represents the leftover muffins: ${mUnit(leftover)}.`);
  }

  // d === 3: Two-step multiplication and division
  const groups = randInt(rng, 4, 8);
  const itemsPerGroup = randInt(rng, 12, 24);
  const total = groups * itemsPerGroup;
  const shareAmong = pick(rng, [2, 3, 4]);
  const result = Math.floor(total / shareAmong);
  return one('mc', [
    txt(`A club has ${groups} boxes of juice pouches with ${itemsPerGroup} pouches in each box. The club distributes all the pouches equally among ${shareAmong} teams. How many pouches does each team receive?`),
  ],
    mc(rng, `${result} pouches`, [
      `${total} pouches`,
      `${result + 6} pouches`,
      `${result - 4} pouches`,
    ]),
    `First find the total pouches: ${groups} × ${itemsPerGroup} = ${total}. Then divide by ${shareAmong}: ${total} ÷ ${shareAmong} = ${result} pouches.`);
};

// ---------- 4.5A multi-step equations and strip diagrams ----------
export const multiStepEquations: Gen = (rng, d) => {
  if (d === 1) {
    // Equation with an unknown letter
    const packs = randInt(rng, 3, 6);
    const perPack = randInt(rng, 8, 12);
    const extra = randInt(rng, 5, 15);
    const letter = 'm';
    const right = `(${packs} × ${perPack}) + ${extra} = ${letter}`;
    const wrong1 = `(${packs} + ${perPack}) × ${extra} = ${letter}`;
    const wrong2 = `(${packs} × ${perPack}) − ${extra} = ${letter}`;
    const wrong3 = `${packs} × (${perPack} + ${extra}) = ${letter}`;
    return one('mc', [
      txt(`Leo bought ${packs} packs of cards with ${perPack} cards in each pack. His friend gave him ${extra} more cards. Which equation can be used to find ${letter}, the total number of cards Leo has?`),
    ],
      mc(rng, right, [wrong1, wrong2, wrong3]),
      `Multiply ${packs} packs by ${perPack} cards per pack, then add the ${extra} extra cards: ${right}.`);
  }

  if (d === 2) {
    // Two-step problem with subtraction and division
    const total = randInt(rng, 80, 150);
    const spent = randInt(rng, 20, 40);
    const friends = pick(rng, [2, 3, 4]);
    const letter = 'p';
    const right = `(${total} − ${spent}) ÷ ${friends} = ${letter}`;
    const wrong1 = `(${total} + ${spent}) ÷ ${friends} = ${letter}`;
    const wrong2 = `${total} − (${spent} ÷ ${friends}) = ${letter}`;
    const wrong3 = `(${total} ÷ ${friends}) − ${spent} = ${letter}`;
    return one('mc', [
      txt(`Elena had $${total}. She spent $${spent} on shoes and shared the remaining money equally among her ${friends} children. Which equation can be used to find ${letter}, the amount of money each child received?`),
    ],
      mc(rng, right, [wrong1, wrong2, wrong3]),
      `Subtract the spent amount from the total: (${total} − ${spent}). Then divide the remainder by ${friends}: ${right}.`);
  }

  // d === 3: Strip diagram word problem description
  const b1 = randInt(rng, 25, 45);
  const b2 = randInt(rng, 15, 30);
  const total = b1 * 2 + b2;
  return one('mc', [
    txt(`A strip diagram shows a top bar of total length ${total}. The bottom bar is divided into three sections: two sections of length ${b1} each, and one section labeled x. What is the value of x?`),
  ],
    mc(rng, String(b2), [String(b2 + 10), String(b1), String(total - b1)]),
    `The top bar equals the sum of the bottom sections: ${b1} + ${b1} + x = ${total}. 2 × ${b1} = ${b1 * 2}. x = ${total} − ${b1 * 2} = ${b2}.`);
};

// ---------- 4.5B input-output tables and number patterns ----------
export const inputOutputPatterns: Gen = (rng, d) => {
  const isMult = rng() < 0.5;
  const factorOrAdd = isMult ? randInt(rng, 3, 8) : randInt(rng, 6, 25);
  const ruleDesc = isMult ? `Position × ${factorOrAdd}` : `Position + ${factorOrAdd}`;
  const positions = [1, 2, 3, 4, 5];
  const values = positions.map((p) => (isMult ? p * factorOrAdd : p + factorOrAdd));

  if (d === 1) {
    // Find the missing value in row 5
    const rows: (string | number)[][] = positions.slice(0, 4).map((p, i) => [p, values[i]]);
    rows.push([5, '?']);
    return one('mc', [
      txt(`The table shows a relationship between the position of a number in a sequence and its value.`),
      table(['Position', 'Value'], rows),
      txt(`What is the missing value for position 5?`),
    ],
      mc(rng, String(values[4]), [
        String(values[4] + factorOrAdd),
        String(values[4] - 1),
        String(values[3] + 1),
      ]),
      `Look at the relationship between position and value. Each value is found by ${isMult ? `multiplying the position by ${factorOrAdd}` : `adding ${factorOrAdd} to the position`}. For position 5: ${isMult ? `5 × ${factorOrAdd}` : `5 + ${factorOrAdd}`} = ${values[4]}.`);
  }

  if (d === 2) {
    // Identify the rule
    const rows = positions.slice(0, 4).map((p, i) => [p, values[i]]);
    const wrongRule1 = isMult ? `Position + ${factorOrAdd}` : `Position × ${factorOrAdd}`;
    const wrongRule2 = `Position × 2`;
    const wrongRule3 = `Position + 1`;
    return one('mc', [
      txt(`Which rule represents the relationship between the position and the value in the table?`),
      table(['Position', 'Value'], rows),
    ],
      mc(rng, ruleDesc, [wrongRule1, wrongRule2, wrongRule3]),
      `Check each pair: ${positions[0]} gives ${values[0]} and ${positions[1]} gives ${values[1]}. The rule that works for every row is ${ruleDesc}.`);
  }

  // d === 3: Given position 12, find value
  const pos = randInt(rng, 10, 20);
  const targetVal = isMult ? pos * factorOrAdd : pos + factorOrAdd;
  const rows = positions.slice(0, 4).map((p, i) => [p, values[i]]);
  return one('mc', [
    txt(`The table follows a numerical pattern.`),
    table(['Position', 'Value'], rows),
    txt(`What is the value of the number at position ${pos}?`),
  ],
    mc(rng, String(targetVal), [
      String(targetVal + factorOrAdd),
      String(targetVal - factorOrAdd),
      String(pos + values[3]),
    ]),
    `The rule is ${ruleDesc}. For position ${pos}, the value is ${isMult ? `${pos} × ${factorOrAdd}` : `${pos} + ${factorOrAdd}`} = ${targetVal}.`);
};

export const STRAND2: Record<string, Gen[]> = {
  '4.3E': [addSubtractFractions],
  '4.3F': [benchmarkFractions],
  '4.4A': [addSubtractAlgorithm],
  '4.4B': [multiplyBy10Or100],
  '4.4C': [productArraysModels],
  '4.4D': [multiplyAlgorithm],
  '4.4E': [divisionModels],
  '4.4F': [divideAlgorithm],
  '4.4G': [estimateSolutions],
  '4.4H': [multiStepMultiplyDivide],
  '4.5A': [multiStepEquations],
  '4.5B': [inputOutputPatterns],
};
