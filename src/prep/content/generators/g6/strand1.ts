// Grade 6 math, strand 1: numerical representations and relationships.

import { pick, randInt } from '../../rng.ts';
import { dec, fig, mc, multi, one, txt, type Gen } from '../build.ts';

// ---------- 6.2A classify rational numbers ----------
export const classifyRationalNumbers: Gen = (rng, d) => {
  if (d === 1) {
    // Basic set identification
    const items = [
      { n: '-12', right: 'Integers and rational numbers only', wrong: ['Whole numbers only', 'Rational numbers only', 'Whole numbers and integers only'], explain: '−12 is a negative whole number, so it is an integer. All integers are also rational numbers. It is not a whole number because whole numbers are 0, 1, 2, 3, ...' },
      { n: '18', right: 'Whole numbers, integers, and rational numbers', wrong: ['Integers only', 'Rational numbers only', 'Whole numbers only'], explain: '18 is a positive counting number, so it is a whole number, an integer, and a rational number.' },
      { n: '3/4', right: 'Rational numbers only', wrong: ['Integers only', 'Whole numbers and rational numbers', 'Integers and rational numbers only'], explain: '3/4 cannot be written as a whole number or an integer, so it belongs only to the set of rational numbers.' },
      { n: '-0.75', right: 'Rational numbers only', wrong: ['Integers only', 'Whole numbers only', 'Integers and rational numbers only'], explain: '−0.75 is a terminating decimal that cannot be simplified to an integer, so it is only a rational number.' },
      { n: '0', right: 'Whole numbers, integers, and rational numbers', wrong: ['Natural numbers only', 'Integers only', 'Rational numbers only'], explain: 'Zero is the smallest whole number, and every whole number is also an integer and a rational number.' },
    ];
    const it = pick(rng, items);
    return one('mc', [txt(`To which set or sets of numbers does ${it.n} belong?`)],
      mc(rng, it.right, it.wrong),
      it.explain);
  }

  if (d === 2) {
    // Nested Venn diagram subsets
    const cases = [
      {
        subset: 'whole numbers',
        cand: '14',
        wrongs: ['−5', '0.25', '−2/3'],
        explain: 'Whole numbers include 0 and all positive counting numbers (0, 1, 2, 3, ...). 14 is the only whole number in the list.',
      },
      {
        subset: 'integers that are NOT whole numbers',
        cand: '−9',
        wrongs: ['7', '0.5', '12'],
        explain: 'Integers include positive and negative whole numbers and zero. Negative whole numbers like −9 are integers but not whole numbers.',
      },
      {
        subset: 'rational numbers that are NOT integers',
        cand: '−3/5',
        wrongs: ['−8', '0', '15'],
        explain: '−3/5 cannot be simplified to a whole number or an integer, so it is a rational number that is not an integer.',
      },
    ];
    const c = pick(rng, cases);
    return one('mc', [txt(`Which number belongs to the set of ${c.subset}?`)],
      mc(rng, c.cand, c.wrongs),
      c.explain);
  }

  // d === 3: True statements about number classifications
  const rights = [
    'Every whole number is also an integer and a rational number.',
    'All integers are rational numbers because they can be written as a fraction with a denominator of 1.',
  ];
  const wrongs = [
    'All rational numbers are integers.',
    'Negative fractions are integers.',
    'Zero is an integer but not a rational number.',
  ];
  return one('multiselect', [txt(`Which statements about number classifications are true? Select **TWO** correct answers.`)],
    multi(rng, rights, wrongs),
    `Whole numbers are a subset of integers, and integers are a subset of rational numbers. Every integer a can be written as a/1, making it a rational number.`);
};

// ---------- 6.2B opposites and absolute value ----------
export const oppositesAndAbsoluteValue: Gen = (rng, d) => {
  const val = randInt(rng, 6, 25);
  const isNeg = rng() < 0.5;
  const n = isNeg ? -val : val;

  if (d === 1) {
    // Opposite and absolute value
    const askOpp = rng() < 0.5;
    if (askOpp) {
      const opp = -n;
      const oppStr = opp < 0 ? `−${Math.abs(opp)}` : `${opp}`;
      const nStr = n < 0 ? `−${Math.abs(n)}` : `${n}`;
      return one('mc', [txt(`What is the opposite of ${nStr}?`)],
        mc(rng, oppStr, [nStr, String(Math.abs(n) + 1), `−${Math.abs(n) + 2}`]),
        `The opposite of a number has the opposite sign on the number line. The opposite of ${nStr} is ${oppStr}.`);
    }
    const nStr = n < 0 ? `−${Math.abs(n)}` : `${n}`;
    return one('mc', [txt(`What is the value of |${nStr}|?`)],
      mc(rng, `${val}`, [`−${val}`, `${val + 2}`, `0`]),
      `Absolute value represents the distance from 0 on the number line. Distance is always non-negative. |${nStr}| = ${val}.`);
  }

  if (d === 2) {
    // Real-world context (elevation, temperature, debt)
    const contexts = [
      { phrase: `A submarine is at an elevation of ${val} feet below sea level, represented by −${val} feet.`, question: `What is the distance between the submarine and sea level?`, ans: `${val} feet`, explain: `Distance is measured as absolute value: |−${val}| = ${val} feet.` },
      { phrase: `A bank account balance has a debt of $${val}, represented by −$${val}.`, question: `What is the amount of money owed?`, ans: `$${val}`, explain: `The amount owed is the absolute value of the debt: |−$${val}| = $${val}.` },
      { phrase: `The temperature in a freezer dropped to ${val} degrees below zero, represented by −${val}°F.`, question: `How many degrees below zero is the temperature?`, ans: `${val}°F`, explain: `The number of degrees below zero is the magnitude |−${val}| = ${val}°F.` },
    ];
    const c = pick(rng, contexts);
    return one('mc', [txt(c.phrase), txt(c.question)],
      mc(rng, c.ans, [`−${val} ${c.ans.split(' ')[1] ?? ''}`.trim(), `${val + 5} ${c.ans.split(' ')[1] ?? ''}`.trim(), `${val - 3} ${c.ans.split(' ')[1] ?? ''}`.trim()]),
      c.explain);
  }

  // d === 3: Multi-step comparison with absolute values
  const a = randInt(rng, 10, 24);
  const b = randInt(rng, 5, 9);
  const right = `|−${a}| > |${b}|`;
  const wrong1 = `|−${a}| < |${b}|`;
  const wrong2 = `−${a} > ${b}`;
  const wrong3 = `|−${a}| = −${a}`;
  return one('mc', [txt(`Which statement is true?`)],
    mc(rng, right, [wrong1, wrong2, wrong3]),
    `Calculate the absolute values: |−${a}| = ${a} and |${b}| = ${b}. Since ${a} > ${b}, the statement |−${a}| > |${b}| is true.`);
};

// ---------- 6.2C compare rational numbers on a number line ----------
export const compareOnNumberLine: Gen = (rng, d) => {
  if (d === 1) {
    // Identify point on number line with negative numbers
    const pt = pick(rng, [-4, -3, -2, -1, 1, 2, 3, 4]);
    const ptStr = pt < 0 ? `−${Math.abs(pt)}` : `${pt}`;
    return one('mc', [
      txt(`Which integer is plotted at point P on the number line?`),
      fig({ kind: 'numberLine', from: -5, to: 5, step: 1, decimals: 0, point: pt, pointLabel: 'P' }, `Number line from -5 to 5 with point P at ${ptStr}`),
    ],
      mc(rng, ptStr, [pt < 0 ? `${Math.abs(pt)}` : `−${pt}`, pt < 0 ? `−${Math.abs(pt) + 1}` : `${pt + 1}`, pt < 0 ? `−${Math.abs(pt) - 1}` : `${pt - 1}`]),
      `Count units from 0 along the number line. Point P is located at ${ptStr}.`);
  }

  if (d === 2) {
    // Compare two negative rational numbers
    const base = randInt(rng, 2, 7);
    const d1Val = randInt(rng, 2, 5);
    const d2Val = randInt(rng, 6, 9);
    // a is greater than b because it is closer to 0
    return one('mc', [
      txt(`Which comparison symbol makes the statement true?`),
      txt(`−${base}.${d1Val} ___ −${base}.${d2Val}`),
    ],
      mc(rng, '>', ['<', '=', '+']),
      `On a number line, numbers farther to the right are greater. −${base}.${d1Val} is closer to 0 than −${base}.${d2Val}, so −${base}.${d1Val} > −${base}.${d2Val}.`);
  }

  // d === 3: Order four negative and positive rational numbers
  const rightStr = `−4.5, −2.25, 0.5, 3.75`;
  const wrong1 = `3.75, 0.5, −2.25, −4.5`;
  const wrong2 = `−2.25, −4.5, 0.5, 3.75`;
  const wrong3 = `−4.5, 0.5, −2.25, 3.75`;
  return one('mc', [txt(`Which list shows the numbers in order from **least to greatest**?`)],
    mc(rng, rightStr, [
      { text: wrong1, why: 'This list is ordered from greatest to least.' },
      wrong2,
      wrong3,
    ]),
    `Compare positions from left to right on the number line. The correct order from least to greatest is ${rightStr}.`);
};

// ---------- 6.2D order rational numbers ----------
export const orderRationalNumbers: Gen = (rng, d) => {
  if (d === 1) {
    // Mixed fractions and decimals
    const list = [
      { val: -1.5, str: '−1.5' },
      { val: -0.75, str: '{−3/4}' },
      { val: 0.25, str: '{1/4}' },
      { val: 1.2, str: '1.2' },
    ];
    const right = list.map((x) => x.str).join(', ');
    const wrong1 = [...list].reverse().map((x) => x.str).join(', ');
    const wrong2 = '{−3/4}, −1.5, {1/4}, 1.2';
    const wrong3 = '−1.5, {1/4}, {−3/4}, 1.2';
    return one('mc', [txt(`Which list shows the rational numbers in order from **least to greatest**?`)],
      mc(rng, right, [
        { text: wrong1, why: 'That list is ordered from greatest to least.' },
        wrong2,
        wrong3,
      ]),
      `Convert all numbers to decimals: {−3/4} = −0.75, and {1/4} = 0.25. Compare: −1.5 < −0.75 < 0.25 < 1.2. The correct order is ${right}.`);
  }

  if (d === 2) {
    // Real-world context: temperatures in winter
    const right = `Amarillo (−8°F), Lubbock (−4°F), El Paso (2°F), Dallas (7°F)`;
    const wrong1 = `Dallas (7°F), El Paso (2°F), Lubbock (−4°F), Amarillo (−8°F)`;
    const wrong2 = `Lubbock (−4°F), Amarillo (−8°F), El Paso (2°F), Dallas (7°F)`;
    const wrong3 = `Amarillo (−8°F), El Paso (2°F), Lubbock (−4°F), Dallas (7°F)`;
    return one('mc', [
      txt(`The table shows the low temperatures recorded in four Texas cities:`),
      txt(`Which list shows the cities in order from **coldest to warmest**?`),
    ],
      mc(rng, right, [
        { text: wrong1, why: 'That is warmest to coldest.' },
        wrong2,
        wrong3,
      ]),
      `Coldest temperature corresponds to the lowest value on the number line. −8 < −4 < 2 < 7. The correct order is ${right}.`);
  }

  // d === 3: Ordering rational numbers in diverse forms (percentages, decimals, fractions)
  const nums = [
    { decVal: -0.6, str: '−0.6' },
    { decVal: -0.25, str: '−25%' },
    { decVal: 0.5, str: '{1/2}' },
    { decVal: 0.8, str: '80%' },
  ];
  const right = nums.map((x) => x.str).join(', ');
  const wrong1 = nums.map((x) => x.str).reverse().join(', ');
  const wrong2 = '−25%, −0.6, {1/2}, 80%';
  const wrong3 = '−0.6, {1/2}, −25%, 80%';
  return one('mc', [txt(`Which list orders the values from **least to greatest**?`)],
    mc(rng, right, [
      { text: wrong1, why: 'That is ordered from greatest to least.' },
      wrong2,
      wrong3,
    ]),
    `Convert all values to decimals: −0.6, −25% = −0.25, {1/2} = 0.5, and 80% = 0.8. In order from least to greatest: ${right}.`);
};

// ---------- 6.2E division as fractions ----------
export const divisionAsFractions: Gen = (rng, d) => {
  if (d === 1) {
    const a = randInt(rng, 3, 11);
    const b = randInt(rng, 4, 12);
    return one('mc', [txt(`Which fraction represents the division expression ${a} ÷ ${b}?`)],
      mc(rng, `{${a}/${b}}`, [`{${b}/${a}}`, `{${a + 1}/${b}}`, `{${a}/${b + 1}}`]),
      `A fraction a/b represents the division a ÷ b. Therefore, ${a} ÷ ${b} = {${a}/${b}}.`);
  }

  if (d === 2) {
    // Sharing pizzas or sandwiches among friends
    const items = randInt(rng, 3, 5);
    const people = randInt(rng, 6, 9);
    return one('mc', [
      txt(`A group of ${people} students equally share ${items} large sub sandwiches. How much sub sandwich does each student receive?`),
    ],
      mc(rng, `{${items}/${people}} sandwich`, [
        { text: `{${people}/${items}} sandwich`, why: 'Divide the number of sandwiches by the number of students, not students by sandwiches.' },
        `{${items}/${people + 1}} sandwich`,
        `{${items - 1}/${people}} sandwich`,
        `{${items + 1}/${people}} sandwich`,
      ]),
      `Divide the ${items} sandwiches among the ${people} students: ${items} ÷ ${people} = {${items}/${people}} sandwich.`);
  }

  // d === 3: Word problem with meters/yards of rope
  const length = randInt(rng, 7, 15);
  const pieces = randInt(rng, 8, 16);
  return one('mc', [
    txt(`A craft instructor cuts a ribbon that is ${length} feet long into ${pieces} pieces of equal length. Which expression and fraction represent the length of each piece in feet?`),
  ],
    mc(rng, `${length} ÷ ${pieces} = {${length}/${pieces}} feet`, [
      `${pieces} ÷ ${length} = {${pieces}/${length}} feet`,
      `${length} × ${pieces} = ${length * pieces} feet`,
      `${pieces} − ${length} = ${pieces - length} feet`,
    ]),
    `Each piece is the total length divided by the number of pieces: ${length} ÷ ${pieces} = {${length}/${pieces}} feet.`);
};

// ---------- 6.4C ratios as comparisons ----------
export const ratiosAsComparisons: Gen = (rng, d) => {
  const r1 = randInt(rng, 2, 5);
  const r2 = randInt(rng, 6, 9);
  if (d === 1) {
    return one('mc', [
      txt(`In an art club, there are ${r1} teachers and ${r2} students. What is the ratio of teachers to students?`),
    ],
      mc(rng, `${r1} to ${r2}`, [
        { text: `${r2} to ${r1}`, why: 'That is students to teachers, but the question asks for teachers to students.' },
        `${r1} to ${r1 + r2}`,
        `${r2} to ${r1 + r2}`,
      ]),
      `The ratio of teachers to students compares teachers (${r1}) to students (${r2}): ${r1} to ${r2}.`);
  }

  if (d === 2) {
    // Part-to-whole ratio
    const total = r1 + r2;
    return one('mc', [
      txt(`A fruit basket contains ${r1} apples and ${r2} oranges. What is the ratio of apples to the total number of fruits in the basket?`),
    ],
      mc(rng, `${r1} to ${total}`, [
        { text: `${r1} to ${r2}`, why: 'That is the ratio of apples to oranges (part-to-part), not apples to total.' },
        `${r2} to ${total}`,
        `${total} to ${r1}`,
      ]),
      `First find the total number of fruits: ${r1} + ${r2} = ${total}. The ratio of apples to total fruit is ${r1} to ${total}.`);
  }

  // d === 3: Multiplicative comparison explanation
  return one('mc', [
    txt(`A recipe uses 3 cups of flour for every 2 cups of sugar. Which statement accurately describes this relationship?`),
  ],
    mc(rng, 'The amount of flour is 1.5 times the amount of sugar.', [
      'The amount of sugar is 1.5 times the amount of flour.',
      'There is always 1 more cup of flour than sugar.',
      'The ratio of sugar to flour is 3 to 2.',
    ]),
    `Divide the parts: 3 ÷ 2 = 1.5. The amount of flour is 1.5 times the amount of sugar.`);
};

// ---------- 6.4D rates and unit rates ----------
export const ratesAndUnitRates: Gen = (rng, d) => {
  if (d === 1) {
    // Unit price or speed
    const hours = pick(rng, [3, 4, 5]);
    const speed = pick(rng, [45, 55, 65]);
    const miles = hours * speed;
    return one('mc', [
      txt(`A bus traveled ${miles} miles in ${hours} hours at a constant speed. What was the speed of the bus in miles per hour?`),
    ],
      mc(rng, `${speed} miles per hour`, [
        `${speed + 10} miles per hour`,
        `${speed - 5} miles per hour`,
        `${miles * hours} miles per hour`,
      ]),
      `To find the unit rate, divide miles by hours: ${miles} ÷ ${hours} = ${speed} miles per hour.`);
  }

  if (d === 2) {
    // Grocery unit price
    const ounces = pick(rng, [8, 12, 16]);
    const pricePerOz = 0.25;
    const totalCost = dec(ounces * pricePerOz * 100, 2);
    return one('mc', [
      txt(`A ${ounces}-ounce bottle of juice costs $${totalCost}. What is the unit cost per ounce?`),
    ],
      mc(rng, `$0.25 per ounce`, [`$0.50 per ounce`, `$0.20 per ounce`, `$0.15 per ounce`]),
      `Divide the total cost by the number of ounces: $${totalCost} ÷ ${ounces} = $0.25 per ounce.`);
  }

  // d === 3: Compare two rates to find the better buy
  const costA = '3.20'; // 0.20 per oz
  const costB = '4.32'; // 0.18 per oz
  return one('mc', [
    txt(`Brand A sells a 16-ounce jar of peanut butter for $${costA}. Brand B sells a 24-ounce jar for $${costB}. Which statement is true?`),
  ],
    mc(rng, 'Brand B is the better buy because it costs $0.18 per ounce while Brand A costs $0.20 per ounce.', [
      'Brand A is the better buy because its total price is lower.',
      'Brand A is the better buy because it costs $0.15 per ounce.',
      'Both brands have the exact same price per ounce.',
    ]),
    `Brand A: $3.20 ÷ 16 = $0.20 per ounce. Brand B: $4.32 ÷ 24 = $0.18 per ounce. Brand B has the lower unit cost.`);
};

// ---------- 6.4E represent ratios and percents ----------
export const representRatiosPercents: Gen = (rng, d) => {
  if (d === 1) {
    // Percent model
    const shaded = randInt(rng, 25, 75);
    return one('mc', [
      txt(`A 10-by-10 grid has ${shaded} small squares shaded out of 100.`),
      txt(`Which percent and fraction represent the shaded portion of the grid?`),
    ],
      mc(rng, `${shaded}% and {${shaded}/100}`, [
        `${shaded * 10}% and {${shaded}/10}`,
        `${shaded}% and {${100 - shaded}/100}`,
        `${100 - shaded}% and {${shaded}/100}`,
      ]),
      `The grid has 100 equal squares. ${shaded} shaded squares represents ${shaded} out of 100, which is {${shaded}/100} and ${shaded}%.`);
  }

  if (d === 2) {
    // Model with 20 or 25 parts
    const parts = pick(rng, [20, 25, 50]);
    const numShaded = randInt(rng, 5, parts - 2);
    const pct = Math.round((numShaded / parts) * 100);
    return one('mc', [
      txt(`A model is divided into ${parts} equal parts, and ${numShaded} parts are shaded. What percent of the model is shaded?`),
    ],
      mc(rng, `${pct}%`, [`${numShaded}%`, `${pct + 5}%`, `${100 - pct}%`]),
      `Write as a fraction: {${numShaded}/${parts}}. Convert to an equivalent fraction with a denominator of 100: (${numShaded} × ${100 / parts}) / 100 = ${pct}%.`);
  }

  // d === 3: Match ratio and percent to a situation
  const totalStudents = 50;
  const busRiders = 32;
  return one('mc', [
    txt(`In a survey of ${totalStudents} students, ${busRiders} take the bus to school. What decimal and percent represent the proportion of students who ride the bus?`),
  ],
    mc(rng, `0.64 and 64%`, [`0.32 and 32%`, `0.64 and 6.4%`, `0.16 and 16%`]),
    `Write the ratio as a fraction: {${busRiders}/${totalStudents}}. Multiply numerator and denominator by 2 to get {64/100} = 0.64 = 64%.`);
};

// ---------- 6.4F benchmark fractions and percents ----------
export const benchmarkFractionsPercents: Gen = (rng, d) => {
  if (d === 1) {
    const benchmarks = [
      { f: '{1/4}', pct: '25%', explain: '{1/4} = 25/100 = 25%.' },
      { f: '{1/2}', pct: '50%', explain: '{1/2} = 50/100 = 50%.' },
      { f: '{3/4}', pct: '75%', explain: '{3/4} = 75/100 = 75%.' },
      { f: '{1/10}', pct: '10%', explain: '{1/10} = 10/100 = 10%.' },
      { f: '{1/5}', pct: '20%', explain: '{1/5} = 20/100 = 20%.' },
    ];
    const b = pick(rng, benchmarks);
    return one('mc', [txt(`What percent is equivalent to the benchmark fraction ${b.f}?`)],
      mc(rng, b.pct, ['15%', '30%', '40%', '60%'].filter((x) => x !== b.pct)),
      b.explain);
  }

  if (d === 2) {
    // 33 1/3% or 66 2/3%
    const cases = [
      { f: '{1/3}', pct: '33 1/3%', explain: '1 divided by 3 is 0.333..., which is 33 1/3%.' },
      { f: '{2/3}', pct: '66 2/3%', explain: '2 divided by 3 is 0.666..., which is 66 2/3%.' },
    ];
    const c = pick(rng, cases);
    return one('mc', [txt(`Which percent is equivalent to ${c.f}?`)],
      mc(rng, c.pct, ['30%', '33%', '66%', '35%'].filter((x) => x !== c.pct)),
      c.explain);
  }

  // d === 3: Multiples of benchmarks
  const n = pick(rng, [2, 3, 4]);
  const fStr = `{${n}/5}`;
  const pctStr = `${n * 20}%`;
  return one('mc', [txt(`What percent is equivalent to ${fStr}?`)],
    mc(rng, pctStr, [`${n * 10}%`, `${n * 25}%`, `${(n + 1) * 20}%`]),
    `Since {1/5} = 20%, multiply by ${n}: ${n} × 20% = ${pctStr}.`);
};

// ---------- 6.4G equivalent fractions, decimals, and percents ----------
export const equivalentForms: Gen = (rng, d) => {
  if (d === 1) {
    // Fraction to percent in test context
    const made = 17;
    const total = 20;
    const pct = 85;
    return one('mc', [
      txt(`Diego made ${made} out of ${total} free throws during basketball practice. What percent of his free throws did Diego make?`),
    ],
      mc(rng, `${pct}%`, [`${made}%`, `${pct - 10}%`, `${pct + 5}%`]),
      `Write as a fraction: {${made}/${total}}. Multiply numerator and denominator by 5: {85/100} = ${pct}%.`);
  }

  if (d === 2) {
    // Money context: price discount or sales tax
    const cents = pick(rng, [35, 45, 65, 85]);
    const decVal = dec(cents, 2);
    const fracStr = `{${cents / 5}/20}`;
    return one('mc', [
      txt(`A notebook is on sale for $${decVal} off the original price. What fraction in simplest form represents $${decVal}?`),
    ],
      mc(rng, fracStr, [`{${cents}/10}`, `{${cents - 5}/20}`, `{${cents}/50}`]),
      `$${decVal} is ${cents} hundredths, or {${cents}/100}. Simplify by dividing numerator and denominator by 5: ${fracStr}.`);
  }

  // d === 3: Equivalence matching across three representations
  const triples = [
    { f: '{3/8}', d: '0.375', p: '37.5%', wrong1: '{3/8}, 0.375, 3.75%', wrong2: '{5/8}, 0.375, 37.5%', wrong3: '{3/8}, 0.35, 37.5%' },
    { f: '{5/8}', d: '0.625', p: '62.5%', wrong1: '{5/8}, 0.625, 6.25%', wrong2: '{3/8}, 0.625, 62.5%', wrong3: '{5/8}, 0.65, 62.5%' },
    { f: '{7/20}', d: '0.35', p: '35%', wrong1: '{7/20}, 0.35, 3.5%', wrong2: '{9/20}, 0.35, 35%', wrong3: '{7/20}, 0.53, 35%' },
    { f: '{9/25}', d: '0.36', p: '36%', wrong1: '{9/25}, 0.36, 3.6%', wrong2: '{11/25}, 0.36, 36%', wrong3: '{9/25}, 0.63, 36%' },
  ];
  const t = pick(rng, triples);
  return one('mc', [
    txt(`Which group shows three equivalent representations of the same value?`),
  ],
    mc(rng, `${t.f}, ${t.d}, ${t.p}`, [
      t.wrong1,
      t.wrong2,
      t.wrong3,
    ]),
    `Convert ${t.f} to a decimal by dividing: ${t.d}. Multiply by 100 to find the percent: ${t.p}.`);
};

// ---------- 6.5C equivalent representations of a whole ----------
export const equivalentPartsOfWhole: Gen = (rng, d) => {
  if (d === 1) {
    const p = pick(rng, [40, 60, 75, 80]);
    const fStr = p === 40 ? '{2/5}' : p === 60 ? '{3/5}' : p === 75 ? '{3/4}' : '{4/5}';
    const decStr = dec(p, 2);
    return one('mc', [txt(`Which decimal and percent are equivalent to ${fStr}?`)],
      mc(rng, `${decStr} and ${p}%`, [
        `${dec(p, 1)} and ${p}%`,
        `${decStr} and ${p / 10}%`,
        `0.0${p} and ${p}%`,
      ]),
      `${fStr} = {${p}/100} = ${decStr} = ${p}%.`);
  }

  if (d === 2) {
    // Finding the value NOT equivalent
    const options = [
      { right: '{4/5}', wrong: '0.8, 80%, {8/10}' },
      { right: '{1/8}', wrong: '0.125, 12.5%, {125/1000}' },
      { right: '{3/4}', wrong: '0.75, 75%, {75/100}' },
    ];
    const op = pick(rng, options);
    return one('mc', [
      txt(`Which value is NOT equivalent to ${op.right}?`),
    ],
      mc(rng, '0.08', ['0.8', '80%', '{8/10}']),
      `${op.right} equals 0.8 and 80%. 0.08 is equivalent to 8%, not 80%.`);
  }

  // d === 3: Word problem with fractional parts of the same whole
  return one('mc', [
    txt(`A survey asked students to name their favorite season. If 35% chose summer, 0.25 chose fall, and {2/5} chose winter or spring, which statement is true?`),
  ],
    mc(rng, 'Together, summer, fall, winter, and spring account for 100% of the students.', [
      'Summer and fall together account for more than 75% of the students.',
      'Winter and spring account for less than fall.',
      'Summer accounts for the largest fraction of the students.',
    ]),
    `Convert all parts to percents: 35% + 25% + 40% = 100%. The sum of all parts equals the whole (100%).`);
};

// ---------- 6.7A order of operations and prime factorization ----------
export const orderOfOperationsExponents: Gen = (rng, d) => {
  if (d === 1) {
    // Prime factorization
    const cases = [
      { n: 24, pf: '2³ × 3', wrongs: ['2² × 6', '2 × 12', '3 × 8'] },
      { n: 36, pf: '2² × 3²', wrongs: ['4 × 9', '2³ × 3', '2 × 18'] },
      { n: 72, pf: '2³ × 3²', wrongs: ['2² × 3³', '8 × 9', '2⁴ × 3'] },
      { n: 48, pf: '2⁴ × 3', wrongs: ['2³ × 6', '4² × 3', '2 × 24'] },
    ];
    const c = pick(rng, cases);
    return one('mc', [txt(`What is the prime factorization of ${c.n}?`)],
      mc(rng, c.pf, c.wrongs),
      `Break ${c.n} into prime factors: ${c.pf}. All factors are prime numbers.`);
  }

  if (d === 2) {
    // Order of operations with an exponent
    const base = pick(rng, [3, 4, 5]);
    const exp = 2;
    const add = randInt(rng, 4, 9);
    const mult = randInt(rng, 2, 4);
    const ans = Math.pow(base, exp) + add * mult;
    return one('mc', [
      txt(`Evaluate the numerical expression:`),
      txt(`${base}² + ${add} × ${mult}`),
    ],
      mc(rng, String(ans), [
        String((base * 2) + add * mult), // evaluated 3^2 as 6
        String((Math.pow(base, exp) + add) * mult), // added before multiplying
        String(ans + 4),
      ]),
      `Evaluate the exponent first: ${base}² = ${Math.pow(base, exp)}. Multiply next: ${add} × ${mult} = ${add * mult}. Add: ${Math.pow(base, exp)} + ${add * mult} = ${ans}.`);
  }

  // d === 3: Grouping symbols with exponents
  const b = 2;
  const inner = 5 + 3; // 8
  const ans = Math.pow(b, 3) + inner * 2 - 6; // 8 + 16 - 6 = 18
  return one('mc', [
    txt(`What is the value of the expression?`),
    txt(`2³ + (5 + 3) × 2 − 6`),
  ],
    mc(rng, String(ans), [
      String(ans + 8),
      String(ans - 4),
      String(12),
    ]),
    `Perform operations in parentheses: 5 + 3 = 8. Evaluate exponents: 2³ = 8. Multiply: 8 × 2 = 16. Then add and subtract from left to right: 8 + 16 − 6 = ${ans}.`);
};

// ---------- 6.7B expressions vs equations ----------
export const expressionsVsEquations: Gen = (rng, d) => {
  if (d === 1) {
    // Identify which is an equation
    const eq = '4x + 7 = 19';
    const wrongs = ['4x + 7', '3(x − 5)', '12y − 8'];
    return one('mc', [txt(`Which mathematical statement is an equation?`)],
      mc(rng, eq, wrongs),
      `An equation states that two expressions are equal and contains an equals sign (=). ${eq} is the only equation.`);
  }

  if (d === 2) {
    // Verbal description: expression vs equation
    const cases = [
      {
        verbal: 'seven less than twice a number',
        right: '2n − 7 (expression)',
        wrongs: ['2n − 7 = 15 (equation)', '7 − 2n (expression)', '2(n − 7) = 0 (equation)'],
        explain: 'The phrase describes a single mathematical quantity with no equals sign or statement of equality, so it is an expression: 2n − 7.',
      },
      {
        verbal: 'the product of a number and four is twenty-eight',
        right: '4n = 28 (equation)',
        wrongs: ['4n + 28 (expression)', 'n + 4 = 28 (equation)', '4/n (expression)'],
        explain: 'The word "is" indicates equality (=), making it an equation: 4n = 28.',
      },
    ];
    const c = pick(rng, cases);
    return one('mc', [txt(`Which representation matches the verbal statement "${c.verbal}"?`)],
      mc(rng, c.right, c.wrongs),
      c.explain);
  }

  // d === 3: Statements analyzing expressions and equations
  return one('mc', [
    txt(`Which statement correctly distinguishes between an expression and an equation?`),
  ],
    mc(rng, 'An equation contains an equals sign stating that two expressions have equal value, while an expression does not contain an equals sign.', [
      'An expression has an equals sign, but an equation does not.',
      'An equation can only contain numbers, while an expression must contain variables.',
      'An expression always has a single numerical solution.',
    ]),
    `By definition, an equation contains an equals sign asserting that two expressions are equal.`);
};

// ---------- 6.7C equivalent expressions with models ----------
export const equivalentExpressionsModels: Gen = (rng, d) => {
  if (d === 1) {
    // Combining like terms
    const c1 = randInt(rng, 2, 6);
    const c2 = randInt(rng, 2, 5);
    const sumC = c1 + c2;
    return one('mc', [txt(`Which expression is equivalent to ${c1}x + ${c2}x?`)],
      mc(rng, `${sumC}x`, [`${sumC}x²`, `${c1 * c2}x`, `${sumC}`]),
      `Combine like terms by adding their coefficients: ${c1} + ${c2} = ${sumC}. The answer is ${sumC}x.`);
  }

  if (d === 2) {
    // Distributive property equivalence
    const m = randInt(rng, 3, 6);
    const c = randInt(rng, 2, 7);
    const prod = m * c;
    return one('mc', [txt(`Which expression is equivalent to ${m}(x + ${c})?`)],
      mc(rng, `${m}x + ${prod}`, [
        { text: `${m}x + ${c}`, why: 'You must multiply both terms inside parentheses by the outside factor.' },
        `x + ${prod}`,
        `${m + c}x`,
      ]),
      `Distribute ${m} to each term inside: ${m} × x + ${m} × ${c} = ${m}x + ${prod}.`);
  }

  // d === 3: Verifying equivalence by substitution
  return one('mc', [
    txt(`Which pair of expressions is equivalent for all values of x?`),
  ],
    mc(rng, '3(2x + 4) and 6x + 12', [
      '2(x + 5) and 2x + 5',
      '4x + 8 and 12x',
      '5(x − 2) and 5x − 2',
    ]),
    `Distribute 3 across (2x + 4): 3 × 2x + 3 × 4 = 6x + 12.`);
};

// ---------- 6.7D properties of operations ----------
export const propertiesOfOperations: Gen = (rng, d) => {
  if (d === 1) {
    // Identifying property name
    const props = [
      { eq: '5 + 8 = 8 + 5', name: 'Commutative property of addition' },
      { eq: '(3 × 4) × 5 = 3 × (4 × 5)', name: 'Associative property of multiplication' },
      { eq: '7 × 1 = 7', name: 'Identity property of multiplication' },
      { eq: '9 + 0 = 9', name: 'Identity property of addition' },
      { eq: '6(x + 2) = 6x + 12', name: 'Distributive property' },
    ];
    const p = pick(rng, props);
    return one('mc', [txt(`Which property of operations is shown by the equation below?`), txt(p.eq)],
      mc(rng, p.name, ['Commutative property of addition', 'Associative property of multiplication', 'Identity property of multiplication', 'Distributive property'].filter((x) => x !== p.name)),
      `The equation ${p.eq} illustrates the ${p.name}.`);
  }

  if (d === 2) {
    // Factor using the distributive property: e.g. 18x + 24 = 6(3x + 4)
    const factor = pick(rng, [4, 6, 8]);
    const a = randInt(rng, 2, 4);
    const b = randInt(rng, 3, 5);
    const t1 = factor * a;
    const t2 = factor * b;
    return one('mc', [
      txt(`Which expression is equivalent to ${t1}x + ${t2} using the greatest common factor?`),
    ],
      mc(rng, `${factor}(${a}x + ${b})`, [
        `${factor / 2}(${a * 2}x + ${b * 2})`,
        `${factor}(${a}x + ${t2})`,
        `${t1 + t2}x`,
      ]),
      `The greatest common factor of ${t1} and ${t2} is ${factor}. Factor it out: ${t1}x ÷ ${factor} = ${a}x, and ${t2} ÷ ${factor} = ${b}. The factored form is ${factor}(${a}x + ${b}).`);
  }

  // d === 3: Generating equivalent expressions using properties
  return one('mc', [
    txt(`A student rewrote 4(2x + 3) + 5x as 8x + 12 + 5x, and then as 13x + 12. Which two properties of operations were used?`),
  ],
    mc(rng, 'The distributive property followed by combining like terms using the commutative property', [
      'The associative property followed by the identity property',
      'The inverse property followed by the distributive property',
      'The identity property of addition only',
    ]),
    `First, the distributive property expanded 4(2x + 3) to 8x + 12. Then terms were reordered and combined: 8x + 5x + 12 = 13x + 12.`);
};

export const STRAND1 = {
  '6.2A': [classifyRationalNumbers],
  '6.2B': [oppositesAndAbsoluteValue],
  '6.2C': [compareOnNumberLine],
  '6.2D': [orderRationalNumbers],
  '6.2E': [divisionAsFractions],
  '6.4C': [ratiosAsComparisons],
  '6.4D': [ratesAndUnitRates],
  '6.4E': [representRatiosPercents],
  '6.4F': [benchmarkFractionsPercents],
  '6.4G': [equivalentForms],
  '6.5C': [equivalentPartsOfWhole],
  '6.7A': [orderOfOperationsExponents],
  '6.7B': [expressionsVsEquations],
  '6.7C': [equivalentExpressionsModels],
  '6.7D': [propertiesOfOperations],
};
