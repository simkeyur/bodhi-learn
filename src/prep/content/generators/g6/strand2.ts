// Grade 6 math, strand 2: computations and algebraic relationships.

import { pick, randInt } from '../../rng.ts';
import { dec, mc, one, table, txt, type Gen } from '../build.ts';

// ---------- 6.3A divide by multiplying by reciprocal ----------
export const divideByReciprocal: Gen = (rng, d) => {
  const n = randInt(rng, 2, 5);
  const dNum = randInt(rng, 6, 9);
  if (d === 1) {
    return one('mc', [
      txt(`Which multiplication expression is equivalent to 12 ÷ {${n}/${dNum}}?`),
    ],
      mc(rng, `12 × {${dNum}/${n}}`, [
        `12 × {${n}/${dNum}}`,
        `{1/12} × {${n}/${dNum}}`,
        `12 ÷ {${dNum}/${n}}`,
      ]),
      `Dividing by a fraction is equivalent to multiplying by its reciprocal. The reciprocal of {${n}/${dNum}} is {${dNum}/${n}}. 12 ÷ {${n}/${dNum}} = 12 × {${dNum}/${n}}.`);
  }

  if (d === 2) {
    const whole = randInt(rng, 3, 8);
    const ans = whole * 4; // e.g. whole ÷ 1/4 = whole * 4
    return one('mc', [
      txt(`What is the value of ${whole} ÷ {1/4}?`),
    ],
      mc(rng, String(ans), [
        String(whole / 4),
        String(ans + 2),
        String(whole + 4),
      ]),
      `Multiply by the reciprocal of {1/4}, which is 4: ${whole} × 4 = ${ans}.`);
  }

  // d === 3: Fraction divided by fraction
  return one('mc', [
    txt(`Evaluate the division problem:`),
    txt(`{3/5} ÷ {2/3}`),
  ],
    mc(rng, '{9/10}', [
      { text: '{2/5}', why: 'Multiply by the reciprocal {3/2}, do not cross-cancel or multiply straight across without flipping.' },
      '{6/15}',
      '{10/9}',
    ]),
    `Multiply by the reciprocal of the second fraction: {3/5} × {3/2} = {9/10}.`);
};

// ---------- 6.3B multiplying by a fraction ----------
export const multiplyingByFraction: Gen = (rng, d) => {
  if (d === 1) {
    // Fraction less than 1 decreases the quantity
    const whole = randInt(rng, 20, 50);
    return one('mc', [
      txt(`When ${whole} is multiplied by {3/4}, how will the product compare to ${whole}?`),
    ],
      mc(rng, `The product will be less than ${whole} because {3/4} is less than 1.`, [
        `The product will be greater than ${whole} because multiplication always increases value.`,
        `The product will be equal to ${whole}.`,
        `The product will be negative.`,
      ]),
      `Multiplying any positive number by a fraction less than 1 produces a product that is less than the original number.`);
  }

  if (d === 2) {
    // Fraction greater than 1 increases the quantity
    const whole = randInt(rng, 15, 40);
    return one('mc', [
      txt(`When ${whole} is multiplied by {5/3}, how will the product compare to ${whole}?`),
    ],
      mc(rng, `The product will be greater than ${whole} because {5/3} is greater than 1.`, [
        `The product will be less than ${whole} because it is a fraction.`,
        `The product will be equal to ${whole}.`,
        `The product will be less than 1.`,
      ]),
      `Since {5/3} is greater than 1, multiplying ${whole} by {5/3} results in a value greater than ${whole}.`);
  }

  // d === 3: True statements regarding multiplication by scaling
  return one('mc', [
    txt(`Which statement is true about the product of 18 and a positive fraction f?`),
  ],
    mc(rng, 'If f > 1, the product is greater than 18; if f < 1, the product is less than 18.', [
      'The product is always greater than 18 regardless of f.',
      'The product is always less than 18 because fractions are smaller than whole numbers.',
      'If f < 1, the product is negative.',
    ]),
    `Multiplying by a factor greater than 1 increases a quantity, while multiplying by a factor between 0 and 1 decreases it.`);
};

// ---------- 6.3C model integer operations ----------
export const modelIntegerOperations: Gen = (rng, d) => {
  if (d === 1) {
    // Counters model: positive and negative counters
    const pos = randInt(rng, 4, 8);
    const neg = randInt(rng, 2, pos - 1);
    const net = pos - neg;
    return one('mc', [
      txt(`A collection of counters has ${pos} positive (+) counters and ${neg} negative (−) counters. When zero pairs are removed, what integer is represented?`),
    ],
      mc(rng, `${net}`, [`−${net}`, `${pos + neg}`, `0`]),
      `Each positive counter and negative counter form a zero pair (+1 and −1 = 0). Removing ${neg} zero pairs leaves ${pos} − ${neg} = ${net} positive counters.`);
  }

  if (d === 2) {
    // Number line jumps
    return one('mc', [
      txt(`On a number line, a point starts at −3 and moves 4 units to the left. What is the ending position?`),
    ],
      mc(rng, `−7`, [`1`, `−1`, `7`]),
      `Moving left on a number line represents subtraction (or adding a negative). −3 + (−4) = −7.`);
  }

  // d === 3: Representing integer subtraction with zero pairs
  return one('mc', [
    txt(`To model −4 − (−6) using integer counters, a student starts with 4 negative counters. What is the next correct step?`),
  ],
    mc(rng, 'Add 2 zero pairs so that 6 negative counters can be removed, leaving 2 positive counters.', [
      'Remove all 4 negative counters and add 6 positive counters.',
      'Add 6 negative counters to get a total of 10 negative counters.',
      'Multiply the 4 negative counters by 6.',
    ]),
    `To subtract −6 when you only have 4 negatives, add zero pairs until you have 6 negatives to take away. Removing −6 leaves +2.`);
};

// ---------- 6.3D add, subtract, multiply, and divide integers ----------
export const integerOperations: Gen = (rng, d) => {
  if (d === 1) {
    // Addition and subtraction of integers
    const a = randInt(rng, 8, 18);
    const b = randInt(rng, 5, 15);
    const isSub = rng() < 0.5;
    if (isSub) {
      // -a - b = -(a + b)
      return one('mc', [
        txt(`What is the value of the expression?`),
        txt(`−${a} − ${b}`),
      ],
        mc(rng, `−${a + b}`, [`−${Math.abs(a - b)}`, `${a - b}`, `${a + b}`]),
        `Subtracting a positive is the same as adding a negative: −${a} + (−${b}) = −${a + b}.`);
    }
    // -a + b
    const ans = -a + b;
    const ansStr = ans < 0 ? `−${Math.abs(ans)}` : `${ans}`;
    return one('mc', [
      txt(`What is the value of the expression?`),
      txt(`−${a} + ${b}`),
    ],
      mc(rng, ansStr, [ans < 0 ? `${Math.abs(ans)}` : `−${ans}`, `−${a + b}`, `${a + b}`]),
      `When adding numbers with different signs, subtract their absolute values: ${a} − ${b} = ${Math.abs(ans)}. Keep the sign of the larger absolute value: ${ansStr}.`);
  }

  if (d === 2) {
    // Multiplication and division of integers
    const a = randInt(rng, 4, 9);
    const b = randInt(rng, 3, 8);
    const isDiv = rng() < 0.5;
    if (isDiv) {
      const prod = a * b;
      return one('mc', [
        txt(`What is the quotient?`),
        txt(`−${prod} ÷ ${b}`),
      ],
        mc(rng, `−${a}`, [`${a}`, `−${prod - b}`, `${prod + b}`]),
        `A negative divided by a positive yields a negative quotient: −${prod} ÷ ${b} = −${a}.`);
    }
    return one('mc', [
      txt(`What is the product?`),
      txt(`(−${a}) × (−${b})`),
    ],
      mc(rng, `${a * b}`, [`−${a * b}`, `${a + b}`, `−${a + b}`]),
      `The product of two negative integers is positive: (−${a}) × (−${b}) = ${a * b}.`);
  }

  // d === 3: Multi-step integer operations
  // -15 + 6 * (-2) = -15 + (-12) = -27
  return one('mc', [
    txt(`Evaluate the expression:`),
    txt(`−15 + 6 × (−2)`),
  ],
    mc(rng, `−27`, [
      { text: `18`, why: 'Perform multiplication before addition: 6 × (−2) = −12, then −15 + (−12) = −27.' },
      `−3`,
      `27`,
    ]),
    `Multiply first according to the order of operations: 6 × (−2) = −12. Then add: −15 + (−12) = −27.`);
};

// ---------- 6.3E multiply and divide positive rational numbers ----------
export const rationalOperations: Gen = (rng, d) => {
  if (d === 1) {
    // Multiplying decimal by whole number or decimal
    const a = randInt(rng, 12, 45) / 10; // e.g. 2.4
    const b = pick(rng, [3, 4, 5]);
    const prod = dec(Math.round(a * b * 10), 1);
    return one('mc', [
      txt(`What is the product?`),
      txt(`${a} × ${b}`),
    ],
      mc(rng, prod, [dec(Math.round((a * b + 1) * 10), 1), dec(Math.round((a * b - 1) * 10), 1), String(a + b)]),
      `Multiply ${a} by ${b}: ${a} × ${b} = ${prod}.`);
  }

  if (d === 2) {
    // Dividing decimals in a real-world context
    const cost = pick(rng, [14.40, 18.60, 21.60, 25.20]);
    const friends = pick(rng, [3, 4, 6]);
    const share = dec(Math.round((cost / friends) * 100), 2);
    return one('mc', [
      txt(`A group of ${friends} friends equally split a restaurant bill of $${dec(Math.round(cost * 100), 2)}. How much does each friend pay?`),
    ],
      mc(rng, `$${share}`, [
        `$${dec(Math.round((cost / friends + 1) * 100), 2)}`,
        `$${dec(Math.round((cost / friends - 0.5) * 100), 2)}`,
        `$${dec(Math.round(cost * friends * 100), 2)}`,
      ]),
      `Divide the total bill by ${friends}: $${dec(Math.round(cost * 100), 2)} ÷ ${friends} = $${share}.`);
  }

  // d === 3: Multiplying mixed numbers
  // 1 1/2 * 2 2/3 = 3/2 * 8/3 = 24/6 = 4
  return one('mc', [
    txt(`Evaluate the product of the mixed numbers:`),
    txt(`1{1/2} × 2{2/3}`),
  ],
    mc(rng, '4', [
      { text: '2{2/6}', why: 'Convert each mixed number to an improper fraction before multiplying.' },
      '3{1/3}',
      '5',
    ]),
    `Convert mixed numbers to improper fractions: 1{1/2} = {3/2} and 2{2/3} = {8/3}. Multiply: {3/2} × {8/3} = {24/6} = 4.`);
};

// ---------- 6.4A additive vs multiplicative relationships ----------
export const additiveVsMultiplicative: Gen = (rng, d) => {
  if (d === 1) {
    // Distinguish additive (y = x + a) from multiplicative (y = ax)
    const a = randInt(rng, 3, 7);
    return one('mc', [
      txt(`Which equation represents a **multiplicative** relationship between x and y?`),
    ],
      mc(rng, `y = ${a}x`, [
        `y = x + ${a}`,
        `y = x − ${a}`,
        `y = x + 1`,
      ]),
      `A multiplicative relationship has the form y = ax, where y is found by multiplying x by a constant. y = ${a}x is multiplicative.`);
  }

  if (d === 2) {
    // Given a table, determine whether it is additive or multiplicative
    const isMult = rng() < 0.5;
    const k = randInt(rng, 3, 6);
    const xs = [1, 2, 3, 4];
    const ys = isMult ? xs.map((x) => x * k) : xs.map((x) => x + k);
    const rows = xs.map((x, i) => [x, ys[i]]);
    const right = isMult ? `Multiplicative, represented by y = ${k}x` : `Additive, represented by y = x + ${k}`;
    const wrong1 = isMult ? `Additive, represented by y = x + ${k}` : `Multiplicative, represented by y = ${k}x`;
    const wrong2 = `Additive, represented by y = x + 1`;
    const wrong3 = `Neither additive nor multiplicative`;
    return one('mc', [
      txt(`The table shows values of x and y:`),
      table(['x', 'y'], rows),
      txt(`Which rule describes the relationship?`),
    ],
      mc(rng, right, [wrong1, wrong2, wrong3]),
      isMult
        ? `Each y-value is found by multiplying x by ${k} (${xs[0]} × ${k} = ${ys[0]}). The relationship is multiplicative: y = ${k}x.`
        : `Each y-value is found by adding ${k} to x (${xs[0]} + ${k} = ${ys[0]}). The relationship is additive: y = x + ${k}.`);
  }

  // d === 3: Graphical distinction
  return one('mc', [
    txt(`Which statement is true about the graph of a multiplicative relationship in the form y = ax compared to an additive relationship in the form y = x + a (where a > 0)?`),
  ],
    mc(rng, 'A multiplicative relationship passes through the origin (0, 0), whereas an additive relationship passes through (0, a).', [
      'Both relationships always pass through the origin (0, 0).',
      'An additive relationship passes through (0, 0), while a multiplicative relationship does not.',
      'A multiplicative relationship has a horizontal line graph.',
    ]),
    `When x = 0 in y = ax, y = 0, so its graph always passes through the origin (0, 0). In y = x + a, when x = 0, y = a.`);
};

// ---------- 6.4B predict and compare ratios and rates ----------
export const predictCompareRatios: Gen = (rng, d) => {
  if (d === 1) {
    // Proportional prediction
    const rate = pick(rng, [4, 5, 6]);
    const hours = randInt(rng, 3, 6);
    const total = hours * rate;
    const futureHours = hours + 3;
    const futureTotal = futureHours * rate;
    return one('mc', [
      txt(`A machine produces ${total} parts in ${hours} hours. At this constant rate, how many parts will the machine produce in ${futureHours} hours?`),
    ],
      mc(rng, `${futureTotal} parts`, [
        `${total + 3} parts`,
        `${futureTotal + 5} parts`,
        `${futureTotal - 6} parts`,
      ]),
      `Find the unit rate: ${total} ÷ ${hours} = ${rate} parts per hour. In ${futureHours} hours: ${futureHours} × ${rate} = ${futureTotal} parts.`);
  }

  if (d === 2) {
    // Recipe scaling
    const originalFlour = 3;
    const originalCookies = 24;
    const targetCookies = 72;
    const mult = targetCookies / originalCookies;
    const flourNeeded = originalFlour * mult;
    return one('mc', [
      txt(`A recipe calls for ${originalFlour} cups of flour to make ${originalCookies} cookies. How many cups of flour are needed to make ${targetCookies} cookies?`),
    ],
      mc(rng, `${flourNeeded} cups`, [
        `${flourNeeded + 2} cups`,
        `${originalFlour * 2} cups`,
        `${flourNeeded - 1} cups`,
      ]),
      `Find the scale factor: ${targetCookies} ÷ ${originalCookies} = ${mult}. Multiply the cups of flour by ${mult}: ${originalFlour} × ${mult} = ${flourNeeded} cups.`);
  }

  // d === 3: Qualitative reasoning with ratios
  return one('mc', [
    txt(`Mix A contains 3 scoops of lemonade powder for every 4 cups of water. Mix B contains 4 scoops of lemonade powder for every 5 cups of water. Which statement correctly compares the mixtures?`),
  ],
    mc(rng, 'Mix B is stronger because 4/5 (80%) is greater than 3/4 (75%).', [
      'Mix A is stronger because 4 cups of water is less than 5 cups.',
      'Both mixtures taste exactly the same because each has 1 more cup of water than powder.',
      'Mix A is stronger because it has fewer scoops of powder.',
    ]),
    `Compare the concentration of powder per cup of water: Mix A is 3/4 = 0.75, Mix B is 4/5 = 0.80. Mix B has more powder per cup of water.`);
};

// ---------- 6.5A represent proportions with tables and graphs ----------
export const representProportions: Gen = (rng, d) => {
  const k = randInt(rng, 3, 7);
  if (d === 1) {
    // Missing table entry in a proportional table
    const inputs = [2, 4, 6, 8];
    const outputs = inputs.map((x) => x * k);
    const rows: (string | number)[][] = [
      [inputs[0], outputs[0]],
      [inputs[1], outputs[1]],
      [inputs[2], '?'],
      [inputs[3], outputs[3]],
    ];
    return one('mc', [
      txt(`The table represents a proportional relationship:`),
      table(['x', 'y'], rows),
      txt(`What value of y completes the table?`),
    ],
      mc(rng, String(outputs[2]), [
        String(outputs[2] + k),
        String(outputs[2] - k),
        String(inputs[2] + k),
      ]),
      `Find the constant unit rate: ${outputs[0]} ÷ ${inputs[0]} = ${k}. Multiply x by ${k}: ${inputs[2]} × ${k} = ${outputs[2]}.`);
  }

  if (d === 2) {
    // Scale factor problem
    const originalL = 6;
    const newL = 18;
    const scaleFactor = 3;
    const originalW = 4;
    const newW = originalW * scaleFactor;
    return one('mc', [
      txt(`A photograph with a length of ${originalL} inches and width of ${originalW} inches is enlarged proportionally. If the new length is ${newL} inches, what is the new width?`),
    ],
      mc(rng, `${newW} inches`, [
        `${originalW + (newL - originalL)} inches`,
        `${newW + 2} inches`,
        `${newW - 3} inches`,
      ]),
      `Find the scale factor: ${newL} ÷ ${originalL} = ${scaleFactor}. Multiply the width by the scale factor: ${originalW} × ${scaleFactor} = ${newW} inches.`);
  }

  // d === 3: Coordinate pairs from a proportion
  return one('mc', [
    txt(`A car travels at a constant speed of 50 miles per hour. Which set of ordered pairs (hours, miles) represents this relationship?`),
  ],
    mc(rng, '(1, 50), (2, 100), (3, 150)', [
      '(1, 50), (2, 52), (3, 54)',
      '(50, 1), (100, 2), (150, 3)',
      '(1, 50), (2, 75), (3, 100)',
    ]),
    `Multiply the hours by the unit rate 50: 1 × 50 = 50, 2 × 50 = 100, and 3 × 50 = 150.`);
};

// ---------- 6.5B percent problems: part, whole, and percent ----------
export const percentProblems: Gen = (rng, d) => {
  if (d === 1) {
    // Find the part given whole and percent
    const whole = pick(rng, [40, 60, 80, 120]);
    const pct = pick(rng, [15, 25, 30, 40]);
    const part = Math.round((whole * pct) / 100);
    return one('mc', [
      txt(`What is ${pct}% of ${whole}?`),
    ],
      mc(rng, String(part), [
        String(part + 4),
        String(part - 2),
        String(pct),
      ]),
      `Convert ${pct}% to a decimal: ${pct / 100}. Multiply by the whole: ${pct / 100} × ${whole} = ${part}.`);
  }

  if (d === 2) {
    // Find the whole given part and percent
    const part = pick(rng, [12, 18, 24, 30]);
    const pct = pick(rng, [20, 25, 40, 50]);
    const whole = Math.round((part * 100) / pct);
    return one('mc', [
      txt(`In a school club, ${part} students are sixth graders. If sixth graders make up ${pct}% of the club, how many total students are in the club?`),
    ],
      mc(rng, `${whole} students`, [
        `${whole + 10} students`,
        `${Math.round(part * (pct / 100))} students`,
        `${whole - 8} students`,
      ]),
      `Set up a proportion: {${part}/W} = {${pct}/100}. Cross-multiply and solve: W = (${part} × 100) ÷ ${pct} = ${whole} students.`);
  }

  // d === 3: Find the percent given part and whole
  const totalItems = pick(rng, [25, 40, 50, 80]);
  const subset = Math.round(totalItems * 0.35); // e.g. 35%
  const pct = Math.round((subset / totalItems) * 100);
  return one('mc', [
    txt(`Out of ${totalItems} books in a classroom library, ${subset} are mystery novels. What percent of the books are mystery novels?`),
  ],
    mc(rng, `${pct}%`, [
      `${pct + 10}%`,
      `${subset}%`,
      `${pct - 5}%`,
    ]),
    `Divide the part by the whole: ${subset} ÷ ${totalItems} = ${subset / totalItems}. Convert to a percent: ${subset / totalItems} × 100 = ${pct}%.`);
};

// ---------- 6.6A independent and dependent quantities ----------
export const independentDependent: Gen = (rng, d) => {
  if (d === 1) {
    // Basic definition
    return one('mc', [
      txt(`A plumber charges $45 per hour for labor. The total charge, c, depends on the number of hours worked, h. Which is the independent quantity?`),
    ],
      mc(rng, 'The number of hours worked, h', [
        { text: 'The total charge, c', why: 'The total charge is the dependent quantity because it changes depending on the hours worked.' },
        'The hourly rate of $45',
        'Both c and h are independent',
      ]),
      `The number of hours worked determines the total charge. Therefore, hours worked (h) is the independent quantity.`);
  }

  if (d === 2) {
    // From a table
    return one('mc', [
      txt(`In the equation y = 5x + 2, which statement correctly identifies the variables?`),
    ],
      mc(rng, 'x is the independent variable and y is the dependent variable.', [
        'y is the independent variable and x is the dependent variable.',
        'Both x and y are independent variables.',
        'Both x and y are constants.',
      ]),
      `In equations of the form y = f(x), the input x is the independent variable and the output y is the dependent variable.`);
  }

  // d === 3: Graph representation
  return one('mc', [
    txt(`On a coordinate grid showing the relationship between time spent studying (x) and test score (y), which statement is true?`),
  ],
    mc(rng, 'Time spent studying is graphed on the x-axis because it is the independent quantity.', [
      'Test score is graphed on the x-axis because it is the independent quantity.',
      'The dependent quantity is always graphed on the horizontal axis.',
      'Neither variable can be identified as independent.',
    ]),
    `Independent quantities are always placed on the horizontal x-axis, and dependent quantities are placed on the vertical y-axis.`);
};

// ---------- 6.6B equations from tables ----------
export const equationsFromTables: Gen = (rng, d) => {
  const m = randInt(rng, 3, 7);
  if (d === 1) {
    // Multiplicative table: y = mx
    const rows = [
      [1, m],
      [2, m * 2],
      [3, m * 3],
      [4, m * 4],
    ];
    return one('mc', [
      txt(`The table shows the relationship between x and y:`),
      table(['x', 'y'], rows),
      txt(`Which equation represents the relationship?`),
    ],
      mc(rng, `y = ${m}x`, [
        `y = x + ${m}`,
        `y = ${m + 1}x`,
        `x = ${m}y`,
      ]),
      `Divide each y-value by its corresponding x-value: ${m} ÷ 1 = ${m}, ${m * 2} ÷ 2 = ${m}. The rule is y = ${m}x.`);
  }

  if (d === 2) {
    // Additive table: y = x + b
    const b = randInt(rng, 4, 9);
    const rows = [
      [2, 2 + b],
      [4, 4 + b],
      [6, 6 + b],
      [8, 8 + b],
    ];
    return one('mc', [
      txt(`The table shows the values of x and y:`),
      table(['x', 'y'], rows),
      txt(`Which equation represents the relationship?`),
    ],
      mc(rng, `y = x + ${b}`, [
        `y = ${b}x`,
        `y = x − ${b}`,
        `y = x + ${b + 2}`,
      ]),
      `Subtract x from y for each pair: ${2 + b} − 2 = ${b}. The rule is y = x + ${b}.`);
  }

  // d === 3: Real-world table with context
  const rows = [
    [1, 8],
    [3, 24],
    [5, 40],
    [7, 56],
  ];
  return one('mc', [
    txt(`The table shows the cost, c, to rent a bicycle for h hours:`),
    table(['Hours (h)', 'Cost in Dollars (c)'], rows),
    txt(`Which equation represents the relationship between h and c?`),
  ],
    mc(rng, `c = 8h`, [
      `c = h + 8`,
      `h = 8c`,
      `c = 8h + 1`,
    ]),
    `Each hour costs $8: 1 × 8 = 8, 3 × 8 = 24. The equation is c = 8h.`);
};

// ---------- 6.6C multiple representations of relationships ----------
export const multipleRepresentations: Gen = (rng, d) => {
  if (d === 1) {
    // Verbal to equation
    const cost = pick(rng, [12, 15, 20]);
    return one('mc', [
      txt(`Movie tickets cost $${cost} each. Which equation shows the total cost, t, for n tickets?`),
    ],
      mc(rng, `t = ${cost}n`, [
        `t = n + ${cost}`,
        `n = ${cost}t`,
        `t = ${cost} ÷ n`,
      ]),
      `The total cost equals the ticket price multiplied by the number of tickets: t = ${cost}n.`);
  }

  if (d === 2) {
    // Additive situation
    const fee = pick(rng, [5, 10, 15]);
    return one('mc', [
      txt(`A bowling alley charges a flat shoe rental fee of $${fee} plus the cost of games. If x represents the cost of games, which equation represents the total cost, y?`),
    ],
      mc(rng, `y = x + ${fee}`, [
        `y = ${fee}x`,
        `y = x − ${fee}`,
        `y = ${fee}x + ${fee}`,
      ]),
      `Add the flat shoe fee of $${fee} to the game cost: y = x + ${fee}.`);
  }

  // d === 3: Match a verbal description to a table and graph properties
  return one('mc', [
    txt(`Maya runs at a constant pace of 6 miles per hour. Which table of values (hours, miles) matches Maya's run?`),
  ],
    mc(rng, '1 hour: 6 miles, 2 hours: 12 miles, 3 hours: 18 miles', [
      '1 hour: 6 miles, 2 hours: 7 miles, 3 hours: 8 miles',
      '1 hour: 6 miles, 2 hours: 8 miles, 3 hours: 10 miles',
      '6 hours: 1 mile, 12 hours: 2 miles, 18 hours: 3 miles',
    ]),
    `Multiply hours by 6: 1 × 6 = 6 miles, 2 × 6 = 12 miles, 3 × 6 = 18 miles.`);
};

// ---------- 6.9A write equations and inequalities ----------
export const writeEquationsInequalities: Gen = (rng, d) => {
  if (d === 1) {
    const limit = pick(rng, [48, 54, 60]);
    return one('mc', [
      txt(`To ride a roller coaster, a person's height, h, must be at least ${limit} inches. Which inequality represents this situation?`),
    ],
      mc(rng, `h ≥ ${limit}`, [
        { text: `h > ${limit}`, why: '"At least" includes the number itself, so it requires ≥.' },
        `h ≤ ${limit}`,
        `h < ${limit}`,
      ]),
      `The phrase "at least" means greater than or equal to: h ≥ ${limit}.`);
  }

  if (d === 2) {
    // Budget constraint: at most
    const budget = pick(rng, [25, 50, 75]);
    return one('mc', [
      txt(`Ethan can spend at most $${budget} at the bookstore. If c represents the amount he spends, which inequality represents this condition?`),
    ],
      mc(rng, `c ≤ ${budget}`, [
        `c ≥ ${budget}`,
        `c < ${budget}`,
        `c = ${budget}`,
      ]),
      `The phrase "at most" means less than or equal to: c ≤ ${budget}.`);
  }

  // d === 3: One-step equation constraint
  const totalSpent = 42;
  return one('mc', [
    txt(`A student purchased 3 identical shirts for a total of $${totalSpent}. Which equation can be used to find the cost of each shirt, s?`),
  ],
    mc(rng, `3s = ${totalSpent}`, [
      `s + 3 = ${totalSpent}`,
      `s ÷ 3 = ${totalSpent}`,
      `3 + s = ${totalSpent}`,
    ]),
    `Multiplying the number of shirts by the cost per shirt gives the total: 3s = ${totalSpent}.`);
};

// ---------- 6.9B solutions on a number line ----------
export const solutionsOnNumberLine: Gen = (rng, d) => {
  if (d === 1) {
    const val = randInt(rng, 2, 7);
    return one('mc', [
      txt(`Which inequality is graphed by an open circle at ${val} with an arrow pointing to the right?`),
    ],
      mc(rng, `x > ${val}`, [
        `x ≥ ${val}`,
        `x < ${val}`,
        `x ≤ ${val}`,
      ]),
      `An open circle indicates strict inequality (not including ${val}), and pointing right means greater than: x > ${val}.`);
  }

  if (d === 2) {
    const val = randInt(rng, 1, 6);
    return one('mc', [
      txt(`Which statement describes the graph of x ≤ ${val} on a number line?`),
    ],
      mc(rng, `A solid closed circle at ${val} with an arrow pointing to the left`, [
        `An open circle at ${val} with an arrow pointing to the left`,
        `A solid closed circle at ${val} with an arrow pointing to the right`,
        `An open circle at ${val} with an arrow pointing to the right`,
      ]),
      `The symbol ≤ includes the endpoint (solid closed circle) and values less than ${val} (arrow pointing left).`);
  }

  // d === 3: Negative number inequality
  return one('mc', [
    txt(`Which value is included in the solution set of x ≥ −3?`),
  ],
    mc(rng, `−2`, [`−4`, `−5`, `−10`]),
    `Values greater than or equal to −3 lie to the right of −3 on the number line. −2 is greater than −3.`);
};

// ---------- 6.9C real-world problems from equations ----------
export const realWorldEquations: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`Which situation can be represented by the equation x + 15 = 40?`),
    ],
      mc(rng, 'Liam had x baseball cards and received 15 more cards, giving him a total of 40 cards.', [
        'Liam had 40 cards and gave away 15 cards to have x cards.',
        'Liam has 15 packages of 40 cards each.',
        'Liam divided 40 cards into 15 equal stacks.',
      ]),
      `Adding 15 cards to x cards to reach a total of 40 corresponds to x + 15 = 40.`);
  }

  if (d === 2) {
    return one('mc', [
      txt(`Which real-world problem is best modeled by the inequality 5x ≤ 45?`),
    ],
      mc(rng, 'Notebooks cost $5 each. What is the maximum number of notebooks, x, that can be bought with $45?', [
        'A student has $45 and spends $5.',
        'A student needs at least $45 and saves $5 per week.',
        'Five friends split $45 equally.',
      ]),
      `The product 5x represents the total cost of x notebooks at $5 each. Having at most $45 means 5x ≤ 45.`);
  }

  // d === 3: Multiplicative equation situation
  return one('mc', [
    txt(`Which situation is modeled by the equation x ÷ 4 = 12?`),
  ],
    mc(rng, 'A quantity of stickers, x, was divided equally among 4 friends, and each friend received 12 stickers.', [
      'Four stickers were divided among 12 friends.',
      'A student had 12 stickers and bought 4 more.',
      'A student had 12 stickers and gave away 4 stickers.',
    ]),
    `Dividing a total x by 4 equal shares where each share is 12 matches x ÷ 4 = 12.`);
};

// ---------- 6.10A solve one-step equations and inequalities ----------
export const solveOneStep: Gen = (rng, d) => {
  if (d === 1) {
    // One-step addition or subtraction equation
    const b = randInt(rng, 14, 38);
    const a = randInt(rng, 6, 12);
    const x = b - a;
    return one('mc', [
      txt(`Solve for x:`),
      txt(`x + ${a} = ${b}`),
    ],
      mc(rng, String(x), [String(x + a), String(x - 2), String(b + a)]),
      `Subtract ${a} from both sides to isolate x: x = ${b} − ${a} = ${x}.`);
  }

  if (d === 2) {
    // One-step multiplication or division equation
    const m = randInt(rng, 4, 8);
    const x = randInt(rng, 7, 15);
    const prod = m * x;
    return one('mc', [
      txt(`What is the solution to the equation?`),
      txt(`${m}x = ${prod}`),
    ],
      mc(rng, String(x), [String(x + 2), String(x - 1), String(prod - m)]),
      `Divide both sides by ${m}: x = ${prod} ÷ ${m} = ${x}.`);
  }

  // d === 3: One-step inequality with geometric context
  const l = randInt(rng, 6, 12);
  const maxArea = l * randInt(rng, 5, 9);
  const maxW = maxArea / l;
  return one('mc', [
    txt(`The area of a rectangle with length ${l} inches must be no more than ${maxArea} square inches. Which inequality shows all possible values for width w?`),
  ],
    mc(rng, `w ≤ ${maxW}`, [
      `w ≥ ${maxW}`,
      `w < ${maxW}`,
      `w = ${maxW}`,
    ]),
    `Area = length × width: ${l}w ≤ ${maxArea}. Divide both sides by ${l}: w ≤ ${maxW}.`);
};

// ---------- 6.10B check solutions to equations and inequalities ----------
export const checkSolutions: Gen = (rng, d) => {
  if (d === 1) {
    // Test a value in an equation
    const x = randInt(rng, 5, 12);
    const add = randInt(rng, 7, 15);
    const sum = x + add;
    return one('mc', [
      txt(`Which value of x makes the equation true?`),
      txt(`x + ${add} = ${sum}`),
    ],
      mc(rng, String(x), [String(x + 2), String(x - 2), String(sum)]),
      `Substitute ${x}: ${x} + ${add} = ${sum}. Therefore, x = ${x} is the solution.`);
  }

  if (d === 2) {
    // Test a value in an inequality
    const threshold = randInt(rng, 18, 35);
    const cand = threshold + randInt(rng, 2, 6);
    return one('mc', [
      txt(`Which value is a solution to the inequality x − 5 > ${threshold - 5}?`),
    ],
      mc(rng, String(cand), [String(threshold - 3), String(threshold - 5), String(threshold - 8)]),
      `Add 5 to both sides: x > ${threshold}. Among the options, ${cand} is the only value greater than ${threshold}.`);
  }

  // d === 3: Which value does NOT satisfy the inequality
  const bound = 28; // 4x <= 28 => x <= 7
  return one('mc', [
    txt(`Which value of x does NOT make the inequality 4x ≤ ${bound} true?`),
  ],
    mc(rng, `8`, [`5`, `6`, `7`]),
    `Divide both sides by 4: x ≤ 7. 8 is greater than 7, so it does NOT satisfy the inequality.`);
};

export const STRAND2 = {
  '6.3A': [divideByReciprocal],
  '6.3B': [multiplyingByFraction],
  '6.3C': [modelIntegerOperations],
  '6.3D': [integerOperations],
  '6.3E': [rationalOperations],
  '6.4A': [additiveVsMultiplicative],
  '6.4B': [predictCompareRatios],
  '6.5A': [representProportions],
  '6.5B': [percentProblems],
  '6.6A': [independentDependent],
  '6.6B': [equationsFromTables],
  '6.6C': [multipleRepresentations],
  '6.9A': [writeEquationsInequalities],
  '6.9B': [solutionsOnNumberLine],
  '6.9C': [realWorldEquations],
  '6.10A': [solveOneStep],
  '6.10B': [checkSolutions],
};
