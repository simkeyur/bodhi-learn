// Strand 2: Computations and Algebraic Relationships (Grade 8)
// Standards: 8.4A, 8.4B, 8.4C, 8.5A, 8.5B, 8.5E, 8.5F, 8.5G, 8.5H, 8.5I, 8.8A, 8.8B, 8.8C, 8.9A
// Pure: no React or browser APIs.

import type { Gen } from '../build.ts';
import { mc, one, txt, table, money } from '../build.ts';
import { randInt, pick } from '../../rng.ts';

export const G8_STRAND2: Record<string, Gen[]> = {
  // 8.4A: Similar right triangles to show slope
  '8.4A': [
    (rng, diff) => {
      const m = pick(rng, [2, 3, 4, 1.5, 0.5]);
      const dx1 = randInt(rng, 2, 4);
      const dy1 = dx1 * m;
      const dx2 = dx1 * 2;
      const dy2 = dx2 * m;

      if (diff === 1) {
        return one(
          'mc',
          [
            txt('Triangle A has a vertical leg of length 6 and a horizontal leg of length 3 on a line on a coordinate plane. Triangle B is also on the same line and has a vertical leg of length 12 and a horizontal leg of length 6.'),
            txt('Which statement is true about the slopes calculated using Triangle A and Triangle B?'),
          ],
          mc(
            rng,
            'The slopes are equal because 6/3 = 12/6 = 2.',
            [
              'Triangle B has a slope that is twice the slope of Triangle A.',
              'Triangle A has a slope that is half the slope of Triangle B.',
              'The slopes cannot be compared without knowing the coordinates of the vertices.',
            ],
          ),
          'Because the triangles are similar right triangles along the same line, the ratio of the vertical change to horizontal change (rise over run) is constant. Both yield a slope of 2.',
        );
      }

      if (diff === 2) {
        return one(
          'mc',
          [
            txt(`Two right triangles are drawn along the same line. Triangle 1 has vertices with a vertical change of ${dy1} units and a horizontal change of ${dx1} units. Triangle 2 has a horizontal change of ${dx2} units.`),
            txt('What must be the vertical change of Triangle 2?'),
          ],
          mc(rng, `${dy2} units`, [`${dy1 * 3} units`, `${dy2 + 2} units`, `${dx2} units`]),
          `Since both triangles lie on the same line, their slopes are equal: ${dy1}/${dx1} = y/${dx2}. Therefore, y = (${dy1}/${dx1}) × ${dx2} = ${dy2} units.`,
        );
      }

      // diff 3
      return one(
        'mc',
        [
          txt('Which proportion can be used to show that the slope between points (x₁, y₁) and (x₂, y₂) is the same as the slope between points (x₃, y₃) and (x₄, y₄) on the same line?'),
        ],
        mc(
          rng,
          '(y₂ − y₁) / (x₂ − x₁) = (y₄ − y₃) / (x₄ − x₃)',
          [
            '(x₂ − x₁) / (y₂ − y₁) = (y₄ − y₃) / (x₄ − x₃)',
            '(y₂ − y₁) / (y₄ − y₃) = (x₄ − x₃) / (x₂ − x₁)',
            '(y₂ + y₁) / (x₂ + x₁) = (y₄ + y₃) / (x₄ + x₃)',
          ],
        ),
        'Slope m is defined as change in y over change in x: (y₂ − y₁) / (x₂ − x₁). For any two segments on the line, these ratios are equal.',
      );
    },
  ],

  // 8.4B: Graph proportional relationships, interpreting unit rate as slope
  '8.4B': [
    (rng, diff) => {
      const unitRate = pick(rng, [15, 20, 25, 30, 40, 50]);
      const x = randInt(rng, 2, 5);
      const y = x * unitRate;

      if (diff === 1) {
        return one(
          'mc',
          [
            txt(`A machine bottles juice at a constant rate. The graph of this proportional relationship passes through the origin (0, 0) and the point (${x}, ${y}), where x represents the time in minutes and y represents the total bottles filled.`),
            txt('What is the unit rate in bottles per minute, and what does it represent?'),
          ],
          mc(
            rng,
            `${unitRate} bottles per minute, representing the slope of the line`,
            [
              `${y} bottles per minute, representing the y-intercept`,
              `${x} bottles per minute, representing the x-intercept`,
              `${unitRate * 2} bottles per minute, representing the slope of the line`,
            ],
          ),
          `The unit rate is ${y} / ${x} = ${unitRate} bottles per minute. In a proportional graph, the unit rate equals the slope of the line.`,
        );
      }

      if (diff === 2) {
        const rate = pick(rng, [4.5, 6.25, 7.5, 8.5]);
        const pts = [
          { x: 0, y: 0 },
          { x: 2, y: rate * 2 },
          { x: 4, y: rate * 4 },
        ];
        return one(
          'mc',
          [
            txt(`The table shows a proportional relationship between hours worked (x) and earnings in dollars (y).`),
            table(['Hours (x)', 'Earnings (y)'], pts.map((p) => [p.x, money(p.y)])),
            txt('What is the slope of the line that models this relationship?'),
          ],
          mc(rng, `${rate}`, [`${rate * 2}`, `${(rate / 2).toFixed(2)}`, `${rate + 1}`]),
          `Slope is rate of change: (${pts[1].y} − 0) / (${pts[1].x} − 0) = ${rate}.`,
        );
      }

      // diff 3
      const speed = pick(rng, [45, 55, 60, 65]);
      return one(
        'mc',
        [
          txt(`Car A travels at a rate modeled by y = ${speed}x, where x is hours and y is miles. Car B travels ${speed + 10} miles per hour.`),
          txt('Which statement correctly compares the graphs of the two relationships?'),
        ],
        mc(
          rng,
          `The graph for Car B has a steeper slope than Car A because ${speed + 10} > ${speed}.`,
          [
            `The graph for Car A has a steeper slope than Car B because ${speed} < ${speed + 10}.`,
            `Both graphs have the same slope because both represent constant speeds.`,
            `The graph for Car B has a larger y-intercept than Car A.`,
          ],
        ),
        `The slope represents the speed. Car B's slope is ${speed + 10} and Car A's slope is ${speed}. Greater slope means a steeper line.`,
      );
    },
  ],

  // 8.4C: Slope and y-intercept from table or graph
  '8.4C': [
    (rng, diff) => {
      const m = pick(rng, [2, 3, 4, 5, -2, -3]);
      const b = randInt(rng, 1, 10);
      const xVals = [1, 2, 3, 4];
      const yVals = xVals.map((x) => m * x + b);

      if (diff === 1) {
        return one(
          'mc',
          [
            txt('A linear relationship is shown in the table:'),
            table(['x', 'y'], xVals.map((x, i) => [x, yVals[i]])),
            txt('What are the **slope** and **y-intercept** of the relationship?'),
          ],
          mc(
            rng,
            `Slope = ${m}, y-intercept = ${b}`,
            [
              `Slope = ${m + 2}, y-intercept = ${b + 1}`,
              `Slope = ${m}, y-intercept = ${b + 3}`,
              `Slope = ${m - 2}, y-intercept = ${b}`,
            ],
          ),
          `Slope m = (${yVals[1]} − ${yVals[0]}) / (${xVals[1]} − ${xVals[0]}) = ${m}. When x = 0, y = ${b}, so the y-intercept is ${b}.`,
        );
      }

      if (diff === 2) {
        const rate = randInt(rng, 12, 25);
        const fee = randInt(rng, 15, 40);
        return one(
          'mc',
          [
            txt(`A gym membership charges a registration fee of $${fee} plus $${rate} per month.`),
            txt('In the equation representing the total cost y for x months, what do the slope and y-intercept represent?'),
          ],
          mc(
            rng,
            `The slope is $${rate} (monthly cost) and the y-intercept is $${fee} (registration fee).`,
            [
              `The slope is $${fee} (registration fee) and the y-intercept is $${rate} (monthly cost).`,
              `The slope is $${rate + fee} and the y-intercept is $${fee}.`,
              `The slope is $${rate} and there is no y-intercept.`,
            ],
          ),
          `In y = mx + b, m is the rate of change ($${rate}/month) and b is the initial value ($${fee}).`,
        );
      }

      // diff 3: negative slope from points
      const p1 = { x: 2, y: 14 };
      const p2 = { x: 5, y: 5 };
      const slope = (p2.y - p1.y) / (p2.x - p1.x); // -3
      return one(
        'mc',
        [
          txt(`A line passes through the points (${p1.x}, ${p1.y}) and (${p2.x}, ${p2.y}).`),
          txt('What is the rate of change (slope) of this line?'),
        ],
        mc(rng, `${slope}`, [`${-slope}`, `${(1 / slope).toFixed(2)}`, `${slope * 2}`]),
        `Slope m = (${p2.y} − ${p1.y}) / (${p2.x} − ${p1.x}) = (${p2.y - p1.y}) / (${p2.x - p1.x}) = ${slope}.`,
      );
    },
  ],

  // 8.5A: Linear proportional situations (y = kx)
  '8.5A': [
    (rng, diff) => {
      const k = pick(rng, [4, 6, 8, 12, 15]);
      if (diff === 1) {
        return one(
          'mc',
          [
            txt(`A student buys packages of markers. Each package contains ${k} markers.`),
            txt('Which equation represents the relationship between the number of packages, x, and the total markers, y?'),
          ],
          mc(rng, `y = ${k}x`, [`y = x + ${k}`, `y = x / ${k}`, `y = ${k}x + 1`]),
          `Since this is a proportional situation with unit rate ${k}, the equation is y = ${k}x.`,
        );
      }

      if (diff === 2) {
        const xList = [2, 4, 6, 8];
        const yList = xList.map((x) => x * k);
        return one(
          'mc',
          [
            txt('Which equation represents the proportional relationship shown in the table?'),
            table(['x', 'y'], xList.map((x, i) => [x, yList[i]])),
          ],
          mc(rng, `y = ${k}x`, [`y = ${k + 2}x`, `y = x + ${k}`, `y = ${k}x + ${xList[0]}`]),
          `Constant of proportionality k = y / x = ${yList[0]} / ${xList[0]} = ${k}. Thus y = ${k}x.`,
        );
      }

      // diff 3
      return one(
        'mc',
        [
          txt('Which scenario describes a proportional relationship that can be represented by y = kx?'),
        ],
        mc(
          rng,
          'A car travels at a constant speed of 65 miles per hour.',
          [
            'A taxi charges a $3 pickup fee plus $2 per mile.',
            'A candle starts at 10 inches and burns down 0.5 inches per hour.',
            'A bank account starts with $50 and increases by $15 per week.',
          ],
        ),
        'A proportional relationship has a constant ratio y/x and passes through (0, 0) with no initial flat fee.',
      );
    },
  ],

  // 8.5B: Linear non-proportional situations (y = mx + b, b ≠ 0)
  '8.5B': [
    (rng, diff) => {
      const m = randInt(rng, 3, 9);
      const b = randInt(rng, 10, 35);
      if (diff === 1) {
        return one(
          'mc',
          [
            txt(`An electrician charges an initial service call fee of $${b} plus $${m} per hour of labor.`),
            txt('Which equation represents the total charge, y, for x hours of labor?'),
          ],
          mc(rng, `y = ${m}x + ${b}`, [`y = ${b}x + ${m}`, `y = ${m}x`, `y = ${m + b}x`]),
          `The rate of change is $${m}/hour and the starting fee is $${b}. The linear equation is y = ${m}x + ${b}.`,
        );
      }

      if (diff === 2) {
        const xVals = [1, 2, 3, 4];
        const yVals = xVals.map((x) => m * x + b);
        return one(
          'mc',
          [
            txt('Which equation models the relationship shown in the table?'),
            table(['x', 'y'], xVals.map((x, i) => [x, yVals[i]])),
          ],
          mc(rng, `y = ${m}x + ${b}`, [`y = ${m}x`, `y = ${b}x + ${m}`, `y = ${m}x − ${b}`]),
          `Slope = (${yVals[1]} − ${yVals[0]}) / 1 = ${m}. When x = 0, y = ${b}. The equation is y = ${m}x + ${b}.`,
        );
      }

      // diff 3
      return one(
        'mc',
        [
          txt('Why is the relationship y = 4x + 12 classified as **non-proportional**?'),
        ],
        mc(
          rng,
          'Because the graph does not pass through the origin (0, 0) since b ≠ 0.',
          [
            'Because the slope is positive.',
            'Because the rate of change is not constant.',
            'Because x and y increase at the same time.',
          ],
        ),
        'For a linear relationship to be proportional, it must pass through (0, 0) with equation y = kx. Here b = 12 ≠ 0, so when x = 0, y = 12.',
      );
    },
  ],

  // 8.5E: Direct variation
  '8.5E': [
    (rng, diff) => {
      const k = pick(rng, [2.5, 3, 4, 5, 6, 8]);
      const x1 = randInt(rng, 3, 6);
      const y1 = x1 * k;
      const x2 = randInt(rng, 7, 12);
      const y2 = x2 * k;

      if (diff === 1) {
        return one(
          'mc',
          [
            txt(`In a direct variation relationship, y = ${y1} when x = ${x1}.`),
            txt(`What is the value of y when x = ${x2}?`),
          ],
          mc(rng, `${y2}`, [`${y2 + k}`, `${y2 - k}`, `${y1 * 2}`]),
          `In direct variation y = kx, find k = ${y1} / ${x1} = ${k}. Then when x = ${x2}, y = ${k} × ${x2} = ${y2}.`,
        );
      }

      if (diff === 2) {
        const rate = pick(rng, [12, 15, 18, 20]);
        const h1 = randInt(rng, 3, 5);
        const d1 = h1 * rate;
        const h2 = randInt(rng, 6, 9);
        const d2 = h2 * rate;
        return one(
          'mc',
          [
            txt(`The distance a cyclist travels varies directly with time. The cyclist travels ${d1} miles in ${h1} hours.`),
            txt(`At this rate, how many miles will the cyclist travel in ${h2} hours?`),
          ],
          mc(rng, `${d2} miles`, [`${d2 + 10} miles`, `${d2 - 15} miles`, `${d1 + h2} miles`]),
          `Constant speed = ${d1} / ${h1} = ${rate} mph. Distance in ${h2} hours = ${rate} × ${h2} = ${d2} miles.`,
        );
      }

      // diff 3
      const weight1 = 4;
      const stretch1 = 14;
      const weight2 = 10;
      const stretch2 = (stretch1 / weight1) * weight2; // 35
      return one(
        'mc',
        [
          txt(`The distance a spring stretches varies directly with the mass attached. A ${weight1}-kg mass stretches the spring ${stretch1} cm.`),
          txt(`How many centimeters will the spring stretch with a ${weight2}-kg mass?`),
        ],
        mc(rng, `${stretch2} cm`, [`${stretch2 - 5} cm`, `${stretch2 + 7} cm`, `${stretch1 * 2} cm`]),
        `Constant k = ${stretch1} / ${weight1} = ${stretch1 / weight1} cm/kg. For ${weight2} kg: ${stretch1 / weight1} × ${weight2} = ${stretch2} cm.`,
      );
    },
  ],

  // 8.5F: Distinguish proportional vs. non-proportional
  '8.5F': [
    (rng, diff) => {
      if (diff === 1) {
        return one(
          'mc',
          [txt('Which equation represents a **proportional** linear relationship?')],
          mc(rng, 'y = 7x', ['y = 7x + 2', 'y = 7x − 4', 'y = 7/x']),
          'A proportional linear relationship is in the form y = kx with a y-intercept of 0. Thus y = 7x is proportional.',
        );
      }

      if (diff === 2) {
        return one(
          'mc',
          [txt('Which table represents a **proportional** relationship between x and y?')],
          mc(
            rng,
            'x: [2, 4, 6], y: [6, 12, 18]',
            [
              'x: [2, 4, 6], y: [7, 13, 19]',
              'x: [2, 4, 6], y: [5, 9, 13]',
              'x: [2, 4, 6], y: [10, 15, 20]',
            ],
          ),
          'In a proportional relationship, the ratio y/x is constant: 6/2 = 12/4 = 18/6 = 3.',
        );
      }

      // diff 3
      return one(
        'mc',
        [
          txt('Which of the following situations is **non-proportional**?'),
        ],
        mc(
          rng,
          'A cell phone plan costs $30 per month plus $0.05 per text message.',
          [
            'Apples cost $1.50 per pound with no additional fee.',
            'A car travels 60 miles for every hour driven.',
            'A worker earns $18 per hour for painting fences.',
          ],
        ),
        'The cell phone plan has a starting fee of $30 (b = 30 ≠ 0), making it non-proportional (y = 0.05x + 30).',
      );
    },
  ],

  // 8.5G: Identify functions using sets of ordered pairs, tables, mappings, and graphs
  '8.5G': [
    (rng, diff) => {
      if (diff === 1) {
        return one(
          'mc',
          [txt('Which set of ordered pairs represents y as a **function** of x?')],
          mc(
            rng,
            '{(1, 4), (2, 7), (3, 10), (4, 13)}',
            [
              '{(2, 5), (2, 8), (3, 11), (4, 14)}',
              '{(1, 3), (3, 6), (3, 9), (5, 12)}',
              '{(4, 2), (4, 6), (4, 8), (5, 10)}',
            ],
          ),
          'A relation is a function if every input x corresponds to exactly one output y. In {(1, 4), (2, 7), (3, 10), (4, 13)}, all x-values are distinct.',
        );
      }

      if (diff === 2) {
        return one(
          'mc',
          [
            txt('Which mapping or rule does NOT represent a function?'),
          ],
          mc(
            rng,
            'An input of 3 maps to outputs of both 8 and 12',
            [
              'Inputs of 2 and 4 both map to an output of 6',
              'Every input maps to the output 0',
              'Each input maps to its square',
            ],
          ),
          'A function cannot assign more than one output to a single input. If the input 3 maps to two different values, it is not a function.',
        );
      }

      // diff 3
      return one(
        'mc',
        [
          txt('Which test on a coordinate plane graph determines whether the graph represents y as a function of x?'),
        ],
        mc(
          rng,
          'Vertical line test: if any vertical line intersects the graph at more than one point, it is not a function.',
          [
            'Horizontal line test: if any horizontal line intersects the graph at more than one point, it is not a function.',
            'Diagonal line test: the graph must have a positive slope.',
            'Origin test: the graph must pass through (0, 0).',
          ],
        ),
        'The vertical line test verifies that for each x-value there is at most one y-value.',
      );
    },
  ],

  // 8.5H: Identify examples of proportional and non-proportional functions
  '8.5H': [
    (rng, diff) => {
      const items = [
        { desc: 'The circumference of a circle as a function of its diameter (C = πd)', prop: true },
        { desc: 'The area of a square as a function of its side length (A = s²)', prop: false },
        { desc: 'The total cost of downloading songs at $1.29 each', prop: true },
        { desc: 'The cost of bowling if shoe rental is $4 plus $3.50 per game', prop: false },
      ];
      const c = pick(rng, items);

      if (diff === 1) {
        return one(
          'mc',
          [txt(`Consider the real-world situation: "${c.desc}".`), txt('Is this function proportional or non-proportional?')],
          mc(
            rng,
            c.prop ? 'Proportional, because it can be written as y = kx and passes through (0, 0)' : 'Non-proportional, because it does not have a constant ratio y/x of the form y = kx',
            [
              c.prop ? 'Non-proportional, because it has an initial flat fee' : 'Proportional, because both quantities increase',
              'Neither, because it is not a function',
              'Non-linear, because slope is negative',
            ],
          ),
          c.prop ? 'Proportional relationships have constant unit rate and no initial offset.' : 'Non-proportional functions either have a non-zero y-intercept or are non-linear.',
        );
      }

      if (diff === 2) {
        return one(
          'mc',
          [txt('Which real-world problem represents a **proportional linear function**?')],
          mc(
            rng,
            'A car uses gasoline at a constant rate of 28 miles per gallon.',
            [
              'A plumber charges $45 to visit a home plus $50 per hour.',
              'The height of a tree that is already 6 feet tall and grows 1 foot per year.',
              'The temperature of water that starts at 70°F and is heated 5°F per minute.',
            ],
          ),
          'The car mileage has no starting constant: y = 28x. The others all have a starting value b ≠ 0.',
        );
      }

      // diff 3
      return one(
        'mc',
        [txt('Which equation represents a **linear non-proportional function**?')],
        mc(rng, 'y = −3x + 8', ['y = 5x', 'y = x²', 'y = 4/x']),
        'y = −3x + 8 is linear (degree 1) and non-proportional because b = 8 ≠ 0.',
      );
    },
  ],

  // 8.5I: Write equation y = mx + b
  '8.5I': [
    (rng, diff) => {
      if (diff === 1) {
        const rate = pick(rng, [3, 5, 7, 9]);
        const fee = randInt(rng, 12, 30);
        return one(
          'mc',
          [
            txt(`A phone plan charges an initial activation fee of $${fee} and $${rate} per gigabyte of data.`),
            txt('Which equation represents the total cost, C, for g gigabytes of data?'),
          ],
          mc(rng, `C = ${rate}g + ${fee}`, [`C = ${fee}g + ${rate}`, `C = ${rate}g`, `C = ${rate + 2}g + ${fee}`]),
          `In y = mx + b, m is the rate per gigabyte ($${rate}) and b is the flat activation fee ($${fee}).`,
        );
      }

      if (diff === 2) {
        const slope = pick(rng, [2, 3, 4, 5]);
        const yInt = randInt(rng, 6, 20);
        const xVals = [2, 4, 6, 8];
        const yVals = xVals.map((x) => slope * x + yInt);
        return one(
          'mc',
          [
            txt('Which linear equation models the data in the table?'),
            table(['x', 'y'], xVals.map((x, i) => [x, yVals[i]])),
          ],
          mc(rng, `y = ${slope}x + ${yInt}`, [`y = ${slope}x − ${yInt}`, `y = ${slope + 1}x + ${yInt}`, `y = ${slope}x`]),
          `Slope = (${yVals[1]} − ${yVals[0]}) / (${xVals[1]} − ${xVals[0]}) = ${slope}. Using (2, ${yVals[0]}): ${yVals[0]} = ${slope}(2) + b => b = ${yInt}. Equation is y = ${slope}x + ${yInt}.`,
        );
      }

      // diff 3: fractional slope or negative y-intercept
      const mDec = 1.5;
      const bDec = randInt(rng, 5, 15);
      return one(
        'mc',
        [
          txt(`A water tank starts with ${bDec} gallons. Water is pumped in at a rate of ${mDec} gallons per minute.`),
          txt('Which equation models the total gallons, y, after x minutes?'),
        ],
        mc(rng, `y = ${mDec}x + ${bDec}`, [`y = ${bDec}x + ${mDec}`, `y = ${mDec}x`, `y = ${mDec + 1}x + ${bDec}`]),
        `The initial amount is ${bDec} gallons (y-intercept) and increases by ${mDec} gallons per minute (slope). Thus y = ${mDec}x + ${bDec}.`,
      );
    },
  ],

  // 8.8A: Write one-variable equations/inequalities with variables on both sides
  '8.8A': [
    (rng, diff) => {
      const a = randInt(rng, 3, 6);
      const b = randInt(rng, 10, 30);
      const c = randInt(rng, 7, 10);
      const d = randInt(rng, 2, 8);

      if (diff === 1) {
        return one(
          'mc',
          [
            txt(`Company A charges $${a} per ticket plus a $${b} service fee. Company B charges $${c} per ticket with no service fee.`),
            txt('Which equation can be used to find x, the number of tickets for which both companies charge the same total amount?'),
          ],
          mc(rng, `${a}x + ${b} = ${c}x`, [`${a}x = ${c}x + ${b}`, `${a + b}x = ${c}x`, `${a}x + ${c}x = ${b}`]),
          `Total cost for Company A is ${a}x + ${b}. Total cost for Company B is ${c}x. Setting them equal gives ${a}x + ${b} = ${c}x.`,
        );
      }

      if (diff === 2) {
        return one(
          'mc',
          [
            txt(`Container A contains ${b} gallons of water and is filling at ${a} gallons per minute. Container B contains ${d + 40} gallons and is draining at ${c} gallons per minute.`),
            txt('Which equation can be used to determine m, the number of minutes until both containers hold the same amount of water?'),
          ],
          mc(
            rng,
            `${b} + ${a}m = ${d + 40} − ${c}m`,
            [
              `${b} + ${a}m = ${d + 40} + ${c}m`,
              `${a}m − ${b} = ${c}m − ${d + 40}`,
              `${b}m + ${a} = ${d + 40}m − ${c}`,
            ],
          ),
          `Container A fills: ${b} + ${a}m. Container B drains: ${d + 40} − ${c}m. They are equal when ${b} + ${a}m = ${d + 40} − ${c}m.`,
        );
      }

      // diff 3: inequality
      return one(
        'mc',
        [
          txt(`Gym A charges a $${b} signup fee plus $${a} per month. Gym B charges $${c} per month with no signup fee.`),
          txt('Which inequality represents when Gym A is cheaper than Gym B for m months?'),
        ],
        mc(rng, `${a}m + ${b} < ${c}m`, [`${a}m + ${b} > ${c}m`, `${a}m + ${b} ≤ ${c}m`, `${c}m < ${a}m + ${b}`]),
        `"Cheaper than" means less than (<). Cost of Gym A (${a}m + ${b}) < Cost of Gym B (${c}m).`,
      );
    },
  ],

  // 8.8B: Match real-world problem to equation
  '8.8B': [
    (rng, diff) => {
      const a = randInt(rng, 4, 8);
      const b = randInt(rng, 12, 25);
      const c = a + randInt(rng, 2, 5);

      if (diff === 1) {
        return one(
          'mc',
          [
            txt(`Which situation can be represented by the equation **${a}x + ${b} = ${c}x**?`),
          ],
          mc(
            rng,
            `Movie Club A charges a $${b} membership fee plus $${a} per movie. Movie Club B charges $${c} per movie with no fee. For how many movies, x, is the cost equal?`,
            [
              `Movie Club A charges $${a} per movie. Movie Club B charges $${c} per movie and gives a $${b} coupon.`,
              `Movie Club A charges $${b} per movie plus $${a} membership. Movie Club B charges $${c} per movie.`,
              `A student has $${b} and spends $${a} per day, while another student earns $${c} per day.`,
            ],
          ),
          `In ${a}x + ${b} = ${c}x, one side has rate ${a} and initial fee ${b}, while the other side has rate ${c} with no initial fee.`,
        );
      }

      if (diff === 2) {
        const d = randInt(rng, 30, 60);
        return one(
          'mc',
          [
            txt(`Which problem situation corresponds to the equation **${d} − ${a}x = ${b} + ${c}x**?`),
          ],
          mc(
            rng,
            `Tank 1 starts with ${d} gallons and empties at ${a} gal/min. Tank 2 starts with ${b} gallons and fills at ${c} gal/min. After how many minutes x do they have the same amount?`,
            [
              `Tank 1 fills at ${d} gal/min and empties at ${a} gal/min. Tank 2 has ${b} gallons.`,
              `Tank 1 starts with ${a} gallons and Tank 2 starts with ${c} gallons.`,
              `Both tanks start with ${d} gallons and fill at ${b} gal/min.`,
            ],
          ),
          `The left side shows a decrease from ${d} at rate ${a} (${d} − ${a}x), and the right side shows an increase from ${b} at rate ${c} (${b} + ${c}x).`,
        );
      }

      // diff 3: inequality
      return one(
        'mc',
        [
          txt(`Which situation is best represented by the inequality **${a}x + ${b} > ${c}x**?`),
        ],
        mc(
          rng,
          `Option A costs $${b} plus $${a} per ticket. Option B costs $${c} per ticket. For which values of x is Option A more expensive than Option B?`,
          [
            `Option A costs $${b} plus $${a} per ticket. Option B costs $${c} per ticket. For which values of x is Option A cheaper than Option B?`,
            `Option A costs $${a} per ticket. Option B costs $${c} per ticket with a $${b} coupon.`,
            `Both options cost $${b} per ticket.`,
          ],
        ),
        `"${a}x + ${b} > ${c}x" represents the total cost of Option A being greater than (more expensive than) Option B.`,
      );
    },
  ],

  // 8.8C: Solve one-variable equations with variables on both sides
  '8.8C': [
    (rng, diff) => {
      // ax + b = cx + d
      // Choose x integer first
      const xSol = randInt(rng, 2, 8);
      const a = randInt(rng, 5, 9);
      const c = randInt(rng, 2, 4);
      // a*xSol + b = c*xSol + d => (a - c)*xSol = d - b
      const diffCoeff = a - c;
      const b = randInt(rng, 1, 15);
      const d = b + diffCoeff * xSol;

      if (diff === 1) {
        return one(
          'mc',
          [txt(`Solve for x: **${a}x + ${b} = ${c}x + ${d}**`)],
          mc(rng, `${xSol}`, [`${xSol + 2}`, `${xSol - 1}`, `${xSol + 4}`]),
          `Subtract ${c}x from both sides: ${a - c}x + ${b} = ${d}. Subtract ${b}: ${a - c}x = ${d - b}. Divide by ${a - c}: x = ${xSol}.`,
        );
      }

      if (diff === 2) {
        // with parentheses: 2(x + 3) = 4x - 6
        const xVal = randInt(rng, 3, 7);
        const p1 = 2;
        const inside1 = randInt(rng, 2, 5);
        // p1 * (x + inside1) = p1*x + p1*inside1
        // RHS: p2*x - inside2
        const p2 = p1 + 2;
        // p1*xVal + p1*inside1 = p2*xVal - inside2 => inside2 = p2*xVal - p1*xVal - p1*inside1 = (p2 - p1)*xVal - p1*inside1
        const inside2 = (p2 - p1) * xVal - p1 * inside1;
        const rhs = inside2 >= 0 ? `${p2}x − ${inside2}` : `${p2}x + ${Math.abs(inside2)}`;

        return one(
          'mc',
          [txt(`What value of x makes the equation true? **${p1}(x + ${inside1}) = ${rhs}**`)],
          mc(rng, `${xVal}`, [`${xVal + 1}`, `${xVal - 2}`, `${xVal + 3}`]),
          `Distribute: ${p1}x + ${p1 * inside1} = ${rhs}. Collect terms on both sides to get x = ${xVal}.`,
        );
      }

      // diff 3: decimal coefficients
      const xAns = randInt(rng, 3, 8);
      const aDec = 1.5;
      const cDec = 0.5;
      const bDec = randInt(rng, 2, 6);
      const dDec = bDec + (aDec - cDec) * xAns;

      return one(
        'mc',
        [txt(`Solve the equation: **${aDec}x + ${bDec} = ${cDec}x + ${dDec}**`)],
        mc(rng, `${xAns}`, [`${xAns + 1}`, `${xAns - 2}`, `${xAns * 2}`]),
        `Subtract ${cDec}x: 1.0x + ${bDec} = ${dDec}. Subtract ${bDec}: x = ${dDec - bDec} = ${xAns}.`,
      );
    },
  ],

  // 8.9A: Intersection of linear systems
  '8.9A': [
    (rng, diff) => {
      // Line 1: y = m1*x + b1, Line 2: y = m2*x + b2
      const xInt = randInt(rng, 1, 5);
      const m1 = randInt(rng, 2, 4);
      const m2 = -randInt(rng, 1, 3);
      const b1 = randInt(rng, 1, 6);
      const yInt = m1 * xInt + b1;
      const b2 = yInt - m2 * xInt;

      if (diff === 1) {
        return one(
          'mc',
          [
            txt(`The graph of two linear equations intersects at the point **(${xInt}, ${yInt})**.`),
            txt('What does this point of intersection represent?'),
          ],
          mc(
            rng,
            `The single ordered pair (x, y) that simultaneously satisfies both equations`,
            [
              `The y-intercept of both linear equations`,
              `The slope of the two linear equations`,
              `The only point where neither equation is defined`,
            ],
          ),
          `The intersection point (${xInt}, ${yInt}) is the unique solution to the system because it lies on both lines simultaneously.`,
        );
      }

      if (diff === 2) {
        return one(
          'mc',
          [
            txt(`Two linear equations are graphed on a coordinate plane: Line 1 has equation y = ${m1}x + ${b1} and Line 2 has equation y = ${m2}x + ${b2}.`),
            txt('At which coordinates do the two lines intersect?'),
          ],
          mc(
            rng,
            `(${xInt}, ${yInt})`,
            [
              `(${xInt + 2}, ${yInt})`,
              `(${xInt + 1}, ${yInt - 1})`,
              `(${xInt - 1}, ${yInt + 2})`,
            ],
          ),
          `Set equations equal: ${m1}x + ${b1} = ${m2}x + ${b2} => ${m1 - m2}x = ${b2 - b1} => x = ${xInt}. Then y = ${m1}(${xInt}) + ${b1} = ${yInt}. Intersection is (${xInt}, ${yInt}).`,
        );
      }

      // diff 3: verify solution
      return one(
        'mc',
        [
          txt(`Which ordered pair is a solution to the system of equations y = 2x + 1 and y = −x + 7?`),
        ],
        mc(
          rng,
          '(2, 5)',
          ['(1, 3)', '(3, 7)', '(4, 3)'],
        ),
        'Substitute (2, 5): 5 = 2(2) + 1 (True) and 5 = −2 + 7 (True). Thus (2, 5) satisfies both equations.',
      );
    },
  ],
};
