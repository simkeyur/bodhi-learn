// Grade 7 math, strand 2: computations and algebraic relationships.
// TEKS 7.3A, 7.3B, 7.4A, 7.4B, 7.4C, 7.4D, 7.7A, 7.10A, 7.10B, 7.10C, 7.11A, 7.11B

import { pick } from '../../rng.ts';
import { dec, frac, mc, one, table, txt, type Gen } from '../build.ts';

// ---------- 7.3A add, subtract, multiply, and divide rational numbers fluently ----------
export const rationalOperations: Gen = (rng, d) => {
  if (d === 1) {
    // Operations with decimals containing negatives
    const a = pick(rng, [-12.5, -8.4, -6.5, -4.2]);
    const b = pick(rng, [3.2, 5.5, 7.4, 2.1]);
    const sum = Math.round((a + b) * 10) / 10;
    return one('mc', [
      txt(`What is the value of the expression?`),
      txt(`${dec(a, 1)} + ${dec(b, 1)}`),
    ],
      mc(rng, `${dec(sum, 1)}`, [
        `${dec(sum - 2, 1)}`,
        `${dec(Math.abs(sum), 1)}`,
        `${dec(a - b, 1)}`,
      ]),
      `Add the negative decimal and positive decimal: ${dec(a, 1)} + ${dec(b, 1)} = ${dec(sum, 1)}.`);
  }

  if (d === 2) {
    // Operations with negative fractions
    const n1 = pick(rng, [1, 2, 3]);
    const n2 = pick(rng, [1, 3]);
    // -n1/4 * n2/5 = -(n1*n2)/20
    const prodNum = n1 * n2;
    const prodStr = `−${frac(prodNum, 20)}`;
    return one('mc', [
      txt(`What is the value of the expression?`),
      txt(`(−{${n1}/4}) × {${n2}/5}`),
    ],
      mc(rng, prodStr, [
        frac(prodNum, 20),
        `−{${prodNum + 1}/20}`,
        `−{${n1 + n2}/9}`,
      ]),
      `The product of a negative number and a positive number is negative. Multiply numerators across and denominators across: −(${n1} × ${n2}) / (4 × 5) = ${prodStr}.`);
  }

  // d === 3: Multi-step rational expression
  // (-3/4) / (1/2) + (-2.5) = -1.5 - 2.5 = -4.0
  return one('mc', [
    txt(`Evaluate the expression:`),
    txt(`(−{3/4} ÷ {1/2}) + (−2.5)`),
  ],
    mc(rng, '−4', [
      { text: '−1', why: 'Divided incorrectly before adding.' },
      '4',
      '−3.5',
    ]),
    `First compute division: −{3/4} ÷ {1/2} = −{3/4} × 2 = −1.5. Then add: −1.5 + (−2.5) = −4.`);
};

// ---------- 7.3B solve problems using rational numbers ----------
export const solveRationalProblems: Gen = (rng, d) => {
  if (d === 1) {
    // Temperature change problem
    const morning = pick(rng, [-14, -10, -8, -6]);
    const rise = pick(rng, [18, 22, 25]);
    const afternoon = morning + rise;
    return one('mc', [
      txt(`At 6:00 AM, the temperature in Dalhart was ${morning}°F. By 2:00 PM, the temperature had increased by ${rise}°F. What was the temperature at 2:00 PM?`),
    ],
      mc(rng, `${afternoon}°F`, [
        `${morning - rise}°F`,
        `${Math.abs(morning) + rise}°F`,
        `${afternoon - 4}°F`,
      ]),
      `Add the increase to the starting temperature: ${morning} + ${rise} = ${afternoon}°F.`);
  }

  if (d === 2) {
    // Elevation change problem
    const diverStart = pick(rng, [-35, -45, -50]);
    const ascent = pick(rng, [18, 20, 24]);
    const newDepth = diverStart + ascent;
    return one('mc', [
      txt(`A scuba diver is at an elevation of ${diverStart} feet relative to sea level. The diver ascends ${ascent} feet toward the surface. What is the diver's new elevation?`),
    ],
      mc(rng, `${newDepth} feet`, [
        `${diverStart - ascent} feet`,
        `${Math.abs(diverStart) + ascent} feet`,
        `${newDepth - 10} feet`,
      ]),
      `Ascending means moving in the positive direction: ${diverStart} + ${ascent} = ${newDepth} feet.`);
  }

  // d === 3: Recipe fractions or bank balance problem
  const startBal = pick(rng, [150, 180, 210]);
  const check = 65;
  const dep = 120;
  const endBal = startBal - check + dep;
  return one('mc', [
    txt(`Austin has a bank balance of $${startBal}. He writes a check for $${check} and then deposits a paycheck of $${dep}. What is Austin's account balance after these transactions?`),
  ],
    mc(rng, `$${endBal}`, [
      `$${startBal + check - dep}`,
      `$${startBal + check + dep}`,
      `$${endBal + 20}`,
    ]),
    `Start with $${startBal}. Subtract the check: $${startBal} − $${check} = $${startBal - check}. Add the deposit: $${startBal - check} + $${dep} = $${endBal}.`);
};

// ---------- 7.4A constant rates of change (including d = rt) ----------
export const constantRatesOfChange: Gen = (rng, d) => {
  if (d === 1) {
    // Distance formula d = rt
    const speed = pick(rng, [55, 60, 65, 70]);
    const time = pick(rng, [3, 4, 5]);
    const distance = speed * time;
    return one('mc', [
      txt(`A car travels on highway I-35 at a constant rate of ${speed} miles per hour for ${time} hours. What distance does the car travel?`),
    ],
      mc(rng, `${distance} miles`, [
        `${speed + time} miles`,
        `${distance - speed} miles`,
        `${distance + speed} miles`,
      ]),
      `Use d = rt: multiply speed by time: ${speed} × ${time} = ${distance} miles.`);
  }

  if (d === 2) {
    // Constant rate of change from a table
    const rate = pick(rng, [12, 15, 18, 20]);
    const rows = [
      [1, rate],
      [2, rate * 2],
      [3, rate * 3],
      [4, rate * 4],
    ];
    return one('mc', [
      txt(`The table shows the earnings of a tutor for tutoring different numbers of hours:`),
      table(['Hours (x)', 'Earnings in Dollars (y)'], rows),
      txt(`What is the constant rate of change in dollars per hour?`),
    ],
      mc(rng, `$${rate} per hour`, [
        `$${rate * 2} per hour`,
        `$${rate - 3} per hour`,
        `$${rate + 5} per hour`,
      ]),
      `Find the change in y divided by the change in x: ($${rate * 2} − $${rate}) ÷ (2 − 1) = $${rate} per hour.`);
  }

  // d === 3: Rate of change from equation or graph verbal description
  const m = pick(rng, [4, 6, 8, 9]);
  const b = pick(rng, [10, 15, 20]);
  return one('mc', [
    txt(`A repair service charges an initial fee plus an hourly labor rate. The total cost is modeled by the equation y = ${m}x + ${b}, where x is the number of hours worked. What is the constant rate of change in this relationship?`),
  ],
    mc(rng, `$${m} per hour`, [
      { text: `$${b} per hour`, why: 'This is the initial fixed fee (y-intercept), not the hourly rate.' },
      `$${m + b} per hour`,
      `$${m * 2} per hour`,
    ]),
    `In the linear equation y = mx + b, the slope m represents the constant rate of change. Here, m = ${m}, so the rate of change is $${m} per hour.`);
};

// ---------- 7.4B calculate unit rates ----------
export const calculateUnitRates: Gen = (rng, d) => {
  if (d === 1) {
    const miles = pick(rng, [240, 300, 360]);
    const gallons = pick(rng, [8, 10, 12]);
    const mpg = miles / gallons;
    return one('mc', [
      txt(`A pickup truck travels ${miles} miles using ${gallons} gallons of gasoline. What is the truck's fuel efficiency in miles per gallon?`),
    ],
      mc(rng, `${mpg} miles per gallon`, [
        `${mpg + 5} miles per gallon`,
        `${mpg - 4} miles per gallon`,
        `${gallons * 2} miles per gallon`,
      ]),
      `Divide total miles by total gallons: ${miles} ÷ ${gallons} = ${mpg} miles per gallon.`);
  }

  if (d === 2) {
    // Unit price per ounce
    const oz = pick(rng, [16, 24, 32]);
    const pricePerOz = 0.25;
    const totalCost = (oz * pricePerOz).toFixed(2);
    return one('mc', [
      txt(`A ${oz}-ounce box of cereal costs $${totalCost}. What is the unit cost per ounce?`),
    ],
      mc(rng, `$0.25 per ounce`, [
        `$0.50 per ounce`,
        `$0.20 per ounce`,
        `$0.30 per ounce`,
      ]),
      `Divide cost by ounces: $${totalCost} ÷ ${oz} = $0.25 per ounce.`);
  }

  // d === 3: Unit rate with complex fractions
  // A runner runs 3/4 mile in 1/10 of an hour
  return one('mc', [
    txt(`Jordan walks {3/4} of a mile in {1/10} of an hour. What is Jordan's walking speed in miles per hour?`),
  ],
    mc(rng, '7.5 miles per hour', [
      { text: '0.075 miles per hour', why: 'Multiplied the fractions instead of dividing miles by hours.' },
      '6 miles per hour',
      '8 miles per hour',
    ]),
    `Divide miles by hours: {3/4} ÷ {1/10} = {3/4} × 10 = {30/4} = 7.5 miles per hour.`);
};

// ---------- 7.4C constant of proportionality k = y/x ----------
export const constantOfProportionality: Gen = (rng, d) => {
  if (d === 1) {
    const k = pick(rng, [3, 4, 5, 7]);
    const rows = [
      [2, 2 * k],
      [4, 4 * k],
      [6, 6 * k],
      [8, 8 * k],
    ];
    return one('mc', [
      txt(`The table represents a proportional relationship between x and y:`),
      table(['x', 'y'], rows),
      txt(`What is the constant of proportionality, k, where k = y/x?`),
    ],
      mc(rng, `${k}`, [
        `${k * 2}`,
        `${k + 2}`,
        `${Math.round(k / 2)}`,
      ]),
      `Calculate k = y/x for any pair: ${2 * k} ÷ 2 = ${k}.`);
  }

  if (d === 2) {
    // Constant of proportionality from verbal description
    const hours = 5;
    const items = pick(rng, [35, 40, 45]);
    const k = items / hours;
    return one('mc', [
      txt(`A bakery decorator finishes ${items} cupcakes in ${hours} hours at a constant rate. What is the constant of proportionality in cupcakes per hour?`),
    ],
      mc(rng, `${k}`, [
        `${k * 2}`,
        `${k - 2}`,
        `${items}`,
      ]),
      `The constant of proportionality is k = y/x = ${items} ÷ ${hours} = ${k} cupcakes per hour.`);
  }

  // d === 3: Proportional relationship with decimals
  return one('mc', [
    txt(`In a proportional relationship, y = 14 when x = 4. What is the constant of proportionality?`),
  ],
    mc(rng, '3.5', [
      '2.5',
      '4.5',
      '10',
    ]),
    `Compute k = y/x: 14 ÷ 4 = 3.5.`);
};

// ---------- 7.4D ratios, rates, and percent increase/decrease ----------
export const percentProblemsChange: Gen = (rng, d) => {
  if (d === 1) {
    // Percent increase
    const orig = pick(rng, [40, 50, 60, 80]);
    const pct = pick(rng, [10, 20, 25]);
    const change = (orig * pct) / 100;
    const finalVal = orig + change;
    return one('mc', [
      txt(`The price of a jacket was $${orig}. During winter, the price increased by ${pct}%. What is the new price of the jacket?`),
    ],
      mc(rng, `$${finalVal}`, [
        `$${orig + pct}`,
        `$${orig - change}`,
        `$${finalVal + 10}`,
      ]),
      `Find the increase amount: ${pct}% of $${orig} = 0.${pct} × ${orig} = $${change}. Add to original price: $${orig} + $${change} = $${finalVal}.`);
  }

  if (d === 2) {
    // Percent decrease / discount
    const orig = pick(rng, [50, 75, 100, 120]);
    const pct = 20;
    const discount = (orig * pct) / 100;
    const salePrice = orig - discount;
    return one('mc', [
      txt(`A pair of athletic shoes normally costs $${orig}. They are on sale for ${pct}% off the regular price. What is the sale price of the shoes?`),
    ],
      mc(rng, `$${salePrice}`, [
        `$${discount}`,
        `$${orig - pct}`,
        `$${orig + discount}`,
      ]),
      `Calculate the discount: 20% of $${orig} = 0.20 × $${orig} = $${discount}. Subtract from the regular price: $${orig} − $${discount} = $${salePrice}.`);
  }

  // d === 3: Multi-step tax and tip
  const mealCost = 40;
  const tipPct = 15;
  const tip = (mealCost * tipPct) / 100; // 6
  const total = mealCost + tip;
  return one('mc', [
    txt(`A family's restaurant bill is $${mealCost}. They leave a ${tipPct}% tip for the server. What is the total amount paid including the tip?`),
  ],
    mc(rng, `$${total}`, [
      { text: `$${tip}`, why: 'This is the tip amount alone, not the total paid.' },
      `$${mealCost + tipPct}`,
      `$${total + 4}`,
    ]),
    `Calculate the tip: 15% of $${mealCost} = 0.15 × $${mealCost} = $${tip}. Add the tip to the bill: $${mealCost} + $${tip} = $${total}.`);
};

// ---------- 7.7A linear relationships y = mx + b ----------
export const linearRelationships: Gen = (rng, d) => {
  if (d === 1) {
    const m = pick(rng, [3, 4, 5]);
    const b = pick(rng, [2, 6, 8]);
    const xVal = 2;
    const yVal = m * xVal + b;
    return one('mc', [
      txt(`A line is represented by the equation y = ${m}x + ${b}. What is the value of y when x = ${xVal}?`),
    ],
      mc(rng, `${yVal}`, [
        `${m * xVal}`,
        `${xVal + b}`,
        `${yVal + 3}`,
      ]),
      `Substitute x = ${xVal} into the equation: y = ${m}(${xVal}) + ${b} = ${m * xVal} + ${b} = ${yVal}.`);
  }

  if (d === 2) {
    // Identify linear equation from table with y-intercept
    const m = pick(rng, [2, 3, 4]);
    const b = pick(rng, [5, 7, 9]);
    const rows = [
      [0, b],
      [1, m + b],
      [2, 2 * m + b],
      [3, 3 * m + b],
    ];
    return one('mc', [
      txt(`Which equation best represents the relationship between x and y in the table?`),
      table(['x', 'y'], rows),
    ],
      mc(rng, `y = ${m}x + ${b}`, [
        `y = ${b}x + ${m}`,
        `y = ${m}x`,
        `y = x + ${b}`,
      ]),
      `When x = 0, y = ${b}, so the y-intercept is ${b}. The rate of change m is (${m + b} − ${b}) ÷ 1 = ${m}. The equation is y = ${m}x + ${b}.`);
  }

  // d === 3: Real-world linear situation
  const flatFee = 15;
  const hourly = 25;
  return one('mc', [
    txt(`A plumber charges a flat service fee of $${flatFee} plus $${hourly} for each hour of work. Which equation represents the total cost, c, for h hours of work?`),
  ],
    mc(rng, `c = ${hourly}h + ${flatFee}`, [
      `c = ${flatFee}h + ${hourly}`,
      `c = (${hourly} + ${flatFee})h`,
      `c = ${hourly}h`,
    ]),
    `The flat fee is the constant y-intercept ($${flatFee}) and the hourly rate is the slope ($${hourly} per hour). Thus c = ${hourly}h + ${flatFee}.`);
};

// ---------- 7.10A write two-step equations and inequalities ----------
export const writeTwoStep: Gen = (rng, d) => {
  if (d === 1) {
    const m = pick(rng, [3, 4, 5]);
    const b = pick(rng, [7, 10, 12]);
    const total = 40;
    return one('mc', [
      txt(`Mia bought ${m} notebooks and a backpack that cost $${b}. The total cost was $${total}. Which equation can be used to find the cost of one notebook, n?`),
    ],
      mc(rng, `${m}n + ${b} = ${total}`, [
        `${b}n + ${m} = ${total}`,
        `${m}n − ${b} = ${total}`,
        `${m}n + ${total} = ${b}`,
      ]),
      `The cost of ${m} notebooks is ${m}n. Adding the $${b} backpack gives total cost: ${m}n + ${b} = ${total}.`);
  }

  if (d === 2) {
    // Two-step inequality
    const fixed = 15;
    const perItem = 4;
    const maxBudget = 50;
    return one('mc', [
      txt(`Liam has $${maxBudget} to spend at a festival. Admission is $${fixed}, and each game ticket costs $${perItem}. Which inequality can be used to determine the maximum number of game tickets, t, Liam can buy?`),
    ],
      mc(rng, `${perItem}t + ${fixed} ≤ ${maxBudget}`, [
        `${perItem}t + ${fixed} ≥ ${maxBudget}`,
        `${fixed}t + ${perItem} ≤ ${maxBudget}`,
        `${perItem}t − ${fixed} ≤ ${maxBudget}`,
      ]),
      `The total spending (${perItem}t + ${fixed}) must not exceed Liam's budget ($${maxBudget}): ${perItem}t + ${fixed} ≤ ${maxBudget}.`);
  }

  // d === 3: Inequality with subtracting from budget
  const initial = 80;
  const costPerDay = 6;
  const targetMin = 20;
  return one('mc', [
    txt(`Sofia starts with $${initial} on her transit card. Each bus ride costs $${costPerDay}. Sofia wants to keep at least $${targetMin} on the card. Which inequality models the number of rides, r, Sofia can take?`),
  ],
    mc(rng, `${initial} − ${costPerDay}r ≥ ${targetMin}`, [
      `${initial} − ${costPerDay}r ≤ ${targetMin}`,
      `${costPerDay}r − ${initial} ≥ ${targetMin}`,
      `${initial} + ${costPerDay}r ≥ ${targetMin}`,
    ]),
    `The remaining balance after r rides is ${initial} − ${costPerDay}r. This balance must be at least $${targetMin}: ${initial} − ${costPerDay}r ≥ ${targetMin}.`);
};

// ---------- 7.10B graph two-step inequalities on number lines ----------
export const graphTwoStepInequalities: Gen = (rng, d) => {
  if (d === 1) {
    // 2x + 4 < 10 => 2x < 6 => x < 3
    return one('mc', [
      txt(`Which number line description represents the solution to the inequality 2x + 4 < 10?`),
    ],
      mc(rng, 'An open circle at 3 with an arrow pointing to the left', [
        { text: 'A solid closed circle at 3 with an arrow pointing to the left', why: 'Strict inequality < uses an open circle.' },
        'An open circle at 3 with an arrow pointing to the right',
        'An open circle at 7 with an arrow pointing to the left',
      ]),
      `Subtract 4 from both sides: 2x < 6. Divide by 2: x < 3. Strict inequality < requires an open circle at 3 pointing left.`);
  }

  if (d === 2) {
    // 3x - 5 >= 16 => 3x >= 21 => x >= 7
    return one('mc', [
      txt(`What is the solution to the inequality 3x − 5 ≥ 16?`),
    ],
      mc(rng, 'x ≥ 7', [
        'x ≤ 7',
        'x ≥ 11',
        'x > 7',
      ]),
      `Add 5 to both sides: 3x ≥ 21. Divide both sides by 3: x ≥ 7.`);
  }

  // d === 3: Negative coefficient inequality (flip inequality sign)
  // -2x + 6 <= 14 => -2x <= 8 => x >= -4
  return one('mc', [
    txt(`What is the solution to the inequality −2x + 6 ≤ 14?`),
  ],
    mc(rng, 'x ≥ −4', [
      { text: 'x ≤ −4', why: 'Remember to flip the inequality sign when dividing by a negative number.' },
      'x ≥ 4',
      'x ≤ 4',
    ]),
    `Subtract 6 from both sides: −2x ≤ 8. Divide by −2 and reverse the inequality symbol: x ≥ −4.`);
};

// ---------- 7.10C real-world situations for two-step equations ----------
export const realWorldTwoStep: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`Which situation is best represented by the equation 4x + 15 = 55?`),
    ],
      mc(rng, 'A club buys 4 identical t-shirts plus a $15 banner, spending a total of $55', [
        'A club buys 15 t-shirts for $4 each and has $55 leftover',
        'A club has 4 members who divide $55 equally after paying a $15 fee',
        'A student has $55 and buys 4 t-shirts that each cost $15',
      ]),
      `4 t-shirts at cost x each is 4x. Adding the $15 fee equals the $55 total: 4x + 15 = 55.`);
  }

  if (d === 2) {
    return one('mc', [
      txt(`Which problem situation can be modeled by 25 − 3x ≥ 10?`),
    ],
      mc(rng, 'Diego has 25 pounds of flour. He uses 3 pounds each day for x days and wants to have at least 10 pounds of flour remaining.', [
        'Diego has 25 pounds of flour and buys 3 more pounds each day.',
        'Diego divides 25 pounds of flour equally among 3 friends.',
        'Diego needs at most 10 pounds of flour and currently has 3 pounds.',
      ]),
      `Starting with 25 and subtracting 3 each day yields 25 − 3x. Having at least 10 left means 25 − 3x ≥ 10.`);
  }

  // d === 3: Fractional coefficient situation
  return one('mc', [
    txt(`Which real-world problem is modeled by {1/2}x + 8 = 20?`),
  ],
    mc(rng, 'Half of a number plus 8 equals 20', [
      'Twice a number plus 8 equals 20',
      'Half of the sum of a number and 8 equals 20',
      'A number plus 8 equals 10',
    ]),
    `The term {1/2}x represents half of the unknown quantity x, and adding 8 equals 20.`);
};

// ---------- 7.11A model and solve two-step equations ----------
export const solveTwoStep: Gen = (rng, d) => {
  if (d === 1) {
    const a = pick(rng, [2, 3, 4, 5]);
    const b = pick(rng, [4, 6, 8, 10]);
    const x = pick(rng, [3, 4, 5, 6]);
    const c = a * x + b;
    return one('mc', [
      txt(`Solve for x:`),
      txt(`${a}x + ${b} = ${c}`),
    ],
      mc(rng, `${x}`, [
        `${x + 2}`,
        `${x - 1}`,
        `${Math.round(c / a)}`,
      ]),
      `Subtract ${b} from both sides: ${a}x = ${c - b}. Divide both sides by ${a}: x = ${c - b} ÷ ${a} = ${x}.`);
  }

  if (d === 2) {
    // Equation with subtraction: ax - b = c
    const a = pick(rng, [3, 4, 6]);
    const b = pick(rng, [5, 7, 9]);
    const x = pick(rng, [4, 5, 7]);
    const c = a * x - b;
    return one('mc', [
      txt(`What is the solution to the equation?`),
      txt(`${a}x − ${b} = ${c}`),
    ],
      mc(rng, `${x}`, [
        `${x + 3}`,
        `${x - 2}`,
        `${Math.round((c - b) / a)}`,
      ]),
      `Add ${b} to both sides: ${a}x = ${c + b}. Divide both sides by ${a}: x = ${c + b} ÷ ${a} = ${x}.`);
  }

  // d === 3: Two-step equation with rational numbers/fractions
  // (x / 3) + 4 = 11 => x / 3 = 7 => x = 21
  const denom = pick(rng, [2, 3, 4]);
  const k = pick(rng, [5, 6, 7]);
  const b = pick(rng, [3, 4, 5]);
  const c = k + b;
  const x = denom * k;
  return one('mc', [
    txt(`What is the value of x that makes this equation true?`),
    txt(`{x/${denom}} + ${b} = ${c}`),
  ],
    mc(rng, `${x}`, [
      `${x - denom}`,
      `${x + denom}`,
      `${k}`,
    ]),
    `Subtract ${b} from both sides: {x/${denom}} = ${k}. Multiply both sides by ${denom}: x = ${k} × ${denom} = ${x}.`);
};

// ---------- 7.11B verify solutions to two-step equations ----------
export const verifySolutions: Gen = (rng, d) => {
  if (d === 1) {
    const sol = 4; // 3(4) + 5 = 17
    return one('mc', [
      txt(`Which value of x makes the equation 3x + 5 = 17 true?`),
    ],
      mc(rng, `${sol}`, ['2', '3', '5']),
      `Substitute x = 4: 3(4) + 5 = 12 + 5 = 17. Thus x = 4 is the true solution.`);
  }

  if (d === 2) {
    // Testing inequality with a set of candidate numbers
    // 4x - 6 > 18 => 4x > 24 => x > 6
    return one('mc', [
      txt(`Which value from the set {4, 5, 6, 7} makes the inequality 4x − 6 > 18 true?`),
    ],
      mc(rng, '7', ['4', '5', '6']),
      `Add 6 to both sides: 4x > 24. Divide by 4: x > 6. From the given set, only 7 is strictly greater than 6.`);
  }

  // d === 3: Which value does NOT make the inequality true
  // 5x + 3 <= 28 => 5x <= 25 => x <= 5
  return one('mc', [
    txt(`Which value of x does NOT satisfy the inequality 5x + 3 ≤ 28?`),
  ],
    mc(rng, '6', ['3', '4', '5']),
    `Subtract 3 from both sides: 5x ≤ 25. Divide by 5: x ≤ 5. The value 6 is greater than 5, so it does NOT satisfy the inequality.`);
};

export const STRAND2 = {
  '7.3A': [rationalOperations],
  '7.3B': [solveRationalProblems],
  '7.4A': [constantRatesOfChange],
  '7.4B': [calculateUnitRates],
  '7.4C': [constantOfProportionality],
  '7.4D': [percentProblemsChange],
  '7.7A': [linearRelationships],
  '7.10A': [writeTwoStep],
  '7.10B': [graphTwoStepInequalities],
  '7.10C': [realWorldTwoStep],
  '7.11A': [solveTwoStep],
  '7.11B': [verifySolutions],
};
