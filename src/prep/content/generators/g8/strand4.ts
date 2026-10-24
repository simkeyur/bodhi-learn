// Strand 4: Data Analysis and Personal Financial Literacy (Grade 8)
// Standards: 8.5C, 8.5D, 8.11A, 8.11B, 8.12A, 8.12C, 8.12D, 8.12G
// Pure: no React or browser APIs.

import type { Gen } from '../build.ts';
import { mc, one, txt, fig, num } from '../build.ts';
import { randInt, pick } from '../../rng.ts';

export const G8_STRAND4: Record<string, Gen[]> = {
  // 8.5C: Contrast linear vs. non-linear bivariate data
  '8.5C': [
    (rng, diff) => {
      if (diff === 1) {
        return one(
          'mc',
          [
            txt('Which description best characterizes a scatterplot that suggests a **linear relationship** between two variables?'),
          ],
          mc(
            rng,
            'The data points cluster closely along a straight line path.',
            [
              'The data points form a U-shaped curve.',
              'The data points are scattered completely at random with no pattern.',
              'The data points form a circle.',
            ],
          ),
          'A bivariate relationship is linear when the points approximately follow a straight line pattern.',
        );
      }

      if (diff === 2) {
        return one(
          'mc',
          [
            txt('Which table of bivariate data suggests a **non-linear relationship**?'),
          ],
          mc(
            rng,
            'x: [1, 2, 3, 4], y: [1, 4, 9, 16]',
            [
              'x: [1, 2, 3, 4], y: [3, 6, 9, 12]',
              'x: [1, 2, 3, 4], y: [5, 8, 11, 14]',
              'x: [1, 2, 3, 4], y: [10, 8, 6, 4]',
            ],
          ),
          'In y = [1, 4, 9, 16], the rate of change is not constant (+3, +5, +7); it represents a quadratic (non-linear) relationship (y = x²).',
        );
      }

      // diff 3
      return one(
        'mc',
        [
          txt('A scientist graphs the temperature of water cooling over time. The temperature drops rapidly at first and then levels off gradually.'),
          txt('Does this graphical representation suggest a linear or non-linear relationship?'),
        ],
        mc(
          rng,
          'Non-linear, because the rate of change varies over time rather than remaining constant.',
          [
            'Linear, because the temperature is consistently decreasing.',
            'Proportional, because it passes through (0, 0).',
            'Neither, because time cannot be an independent variable.',
          ],
        ),
        'A relationship is only linear if the rate of change is constant throughout. A curve that levels off has a changing rate of change and is non-linear.',
      );
    },
  ],

  // 8.5D: Use trend line to make predictions
  '8.5D': [
    (rng, diff) => {
      // Trend line: y = m*x + b
      const m = randInt(rng, 3, 6);
      const b = randInt(rng, 10, 25);
      const targetX = randInt(rng, 6, 10);
      const predY = m * targetX + b;

      if (diff === 1) {
        return one(
          'mc',
          [
            fig({
              kind: 'scatterPlot',
              title: 'Study Hours vs. Test Score',
              points: [
                { x: 1, y: b + m + randInt(rng, -2, 2) },
                { x: 2, y: b + 2 * m + randInt(rng, -2, 2) },
                { x: 3, y: b + 3 * m + randInt(rng, -2, 2) },
                { x: 4, y: b + 4 * m + randInt(rng, -2, 2) },
                { x: 5, y: b + 5 * m + randInt(rng, -2, 2) },
              ],
              trendLine: { m, b },
              xLabel: 'Hours Studied',
              yLabel: 'Score',
              xMax: 12,
              yMax: 100,
            }, 'Scatterplot with trend line showing study hours vs test score'),
            txt(`The trend line for the scatterplot has the equation **y = ${m}x + ${b}**, where x is hours studied and y is test score.`),
            txt(`Based on this trend line, what is the predicted test score for a student who studies **${targetX} hours**?`),
          ],
          mc(rng, `${predY}`, [`${predY - 10}`, `${predY + 8}`, `${m * targetX}`]),
          `Substitute x = ${targetX} into the trend line equation: y = ${m}(${targetX}) + ${b} = ${m * targetX} + ${b} = ${predY}.`,
        );
      }

      if (diff === 2) {
        const rate = 15;
        const base = 50;
        const hrs = 8;
        const est = base + rate * hrs;
        return one(
          'mc',
          [
            txt(`A scatterplot shows the relationship between hours of practice and typing speed. A line of best fit passes through (2, 80) and (6, 140).`),
            txt(`Based on this line of best fit, what is the best prediction for the typing speed after ${hrs} hours of practice?`),
          ],
          mc(rng, `${est} words per minute`, [`${est - 25} words per minute`, `${est + 30} words per minute`, `140 words per minute`]),
          `Slope = (140 − 80) / (6 − 2) = 60 / 4 = 15 words/min per hour. At 8 hours (2 more hours than 6): 140 + 2(15) = ${est} words per minute.`,
        );
      }

      // diff 3: negative correlation trend prediction
      const startTemp = 95;
      const dropRate = 4;
      const min = 12;
      const temp = startTemp - dropRate * min; // e.g. 95 - 48 = 47
      return one(
        'mc',
        [
          txt(`The temperature of an iced beverage over time is modeled by a trend line with equation **y = −${dropRate}x + ${startTemp}**, where x is time in minutes.`),
          txt(`What is the predicted temperature after **${min} minutes**?`),
        ],
        mc(rng, `${temp}°F`, [`${temp + 12}°F`, `${temp - 10}°F`, `${startTemp}°F`]),
        `y = −${dropRate}(${min}) + ${startTemp} = −${dropRate * min} + ${startTemp} = ${temp}°F.`,
      );
    },
  ],

  // 8.11A: Construct scatterplot and describe association
  '8.11A': [
    (rng, diff) => {
      const associations = [
        { type: 'positive linear association', desc: 'As the value of x increases, the value of y tends to increase in a straight-line pattern.' },
        { type: 'negative linear association', desc: 'As the value of x increases, the value of y tends to decrease in a straight-line pattern.' },
        { type: 'no association', desc: 'There is no apparent relationship between the x-values and y-values.' },
        { type: 'non-linear association', desc: 'As x increases, y follows a curved or U-shaped pattern.' },
      ];
      const a = pick(rng, associations);
      const wrong = associations.filter((x) => x.type !== a.type).map((x) => x.type);

      if (diff === 1) {
        return one(
          'mc',
          [
            txt(`A scatterplot shows data points where: "${a.desc}".`),
            txt('How should the association between the two variables be described?'),
          ],
          mc(rng, a.type, wrong),
          `Based on the description, the data demonstrates a ${a.type}.`,
        );
      }

      if (diff === 2) {
        const scenarios = [
          { q: 'The outside temperature and the heating bill for a home', ans: 'Negative linear association', wrong: ['Positive linear association', 'No association', 'Constant association'] },
          { q: 'The number of miles driven and the amount of gasoline consumed', ans: 'Positive linear association', wrong: ['Negative linear association', 'No association', 'Quadratic association'] },
          { q: 'A person’s shoe size and their score on a history quiz', ans: 'No association', wrong: ['Positive linear association', 'Negative linear association', 'Direct variation'] },
        ];
        const s = pick(rng, scenarios);
        return one(
          'mc',
          [txt(`What type of association would you expect to see between: **${s.q}**?`)],
          mc(rng, s.ans, s.wrong),
          `${s.ans}: ${s.q.includes('heating') ? 'as temperature rises, heating cost drops.' : s.q.includes('gasoline') ? 'more miles driven requires more gas.' : 'shoe size does not affect quiz score.'}`,
        );
      }

      // diff 3
      return one(
        'mc',
        [
          txt('Which scatterplot characteristic indicates an **outlier** in bivariate data?'),
        ],
        mc(
          rng,
          'A data point that falls far outside the overall pattern of the rest of the data',
          [
            'A data point located exactly on the trend line',
            'A data point located at the origin (0, 0)',
            'The highest point on the y-axis',
          ],
        ),
        'An outlier in a scatterplot is an observation that deviates substantially from the overall pattern established by the data points.',
      );
    },
  ],

  // 8.11B: Mean absolute deviation (MAD)
  '8.11B': [
    (rng, diff) => {
      // Pick numbers with clean mean and MAD
      // e.g. [4, 6, 8, 10, 12] -> sum = 40, mean = 8, diffs = [4, 2, 0, 2, 4], sum diffs = 12, MAD = 12/5 = 2.4
      // e.g. [10, 12, 14, 16, 18] -> mean = 14, diffs = [4, 2, 0, 2, 4], MAD = 2.4
      // e.g. [2, 4, 6, 8] -> mean = 5, diffs = [3, 1, 1, 3], MAD = 8/4 = 2
      const dataSets = [
        { pts: [2, 4, 6, 8], mean: 5, mad: 2 },
        { pts: [5, 7, 9, 11, 13], mean: 9, mad: 2.4 },
        { pts: [10, 20, 30, 40], mean: 25, mad: 10 },
        { pts: [3, 5, 7, 9], mean: 6, mad: 2 },
        { pts: [12, 14, 16, 18], mean: 15, mad: 2 },
      ];
      const d = pick(rng, dataSets);

      if (diff === 1) {
        return one(
          'mc',
          [
            txt('What does the **mean absolute deviation (MAD)** of a numerical data set measure?'),
          ],
          mc(
            rng,
            'The average distance that each data value is from the mean of the data set',
            [
              'The middle number when data values are listed in order',
              'The difference between the maximum and minimum values',
              'The most frequently occurring number in the data set',
            ],
          ),
          'The mean absolute deviation (MAD) measures variability by finding the average distance between each data point and the mean.',
        );
      }

      if (diff === 2) {
        return one(
          'mc',
          [
            txt(`Find the **mean absolute deviation (MAD)** of the data set: **${d.pts.join(', ')}** (The mean is ${d.mean}).`),
          ],
          mc(rng, `${d.mad}`, [`${d.mean}`, `${d.mad * 2}`, `${(d.mad + 1.2).toFixed(1)}`]),
          `1. Distances from mean ${d.mean}: ${d.pts.map((p) => Math.abs(p - d.mean)).join(', ')}. 2. Average distance: sum = ${d.pts.map((p) => Math.abs(p - d.mean)).reduce((a, b) => a + b, 0)} / ${d.pts.length} = ${d.mad}.`,
        );
      }

      // diff 3
      const madA = 1.8;
      const madB = 4.5;
      return one(
        'mc',
        [
          txt(`Class A has a mean test score of 82 with a MAD of ${madA}. Class B has a mean test score of 82 with a MAD of ${madB}.`),
          txt('Which statement correctly compares the test scores of the two classes?'),
        ],
        mc(
          rng,
          `Class A's test scores are more consistent (closer to the mean) than Class B's scores.`,
          [
            `Class B's test scores are more consistent than Class A's scores.`,
            `Students in Class B scored higher overall than students in Class A.`,
            `Class A has a higher median score than Class B.`,
          ],
        ),
        `A smaller MAD indicates less variability and greater consistency around the mean. Since ${madA} < ${madB}, Class A is more consistent.`,
      );
    },
  ],

  // 8.12A: Cost of credit and loans
  '8.12A': [
    (rng, diff) => {
      const loan = pick(rng, [5000, 10000, 12000]);

      if (diff === 1) {
        return one(
          'mc',
          [
            txt('Which factor will result in paying the **least total amount of interest** on a car loan?'),
          ],
          mc(
            rng,
            'A shorter loan repayment term with a lower interest rate',
            [
              'A longer loan repayment term with a lower monthly payment',
              'A higher interest rate with a longer repayment term',
              'A higher interest rate with lower down payment',
            ],
          ),
          'Paying off a loan in a shorter time period at a lower interest rate minimizes the total interest accrued.',
        );
      }

      if (diff === 2) {
        // Compare two loan lengths
        // Loan 1: 3 years at $310/mo = $11,160. Loan 2: 5 years at $200/mo = $12,000.
        const p1Mo = 310;
        const p1Months = 36;
        const total1 = p1Mo * p1Months; // 11,160

        const p2Mo = 200;
        const p2Months = 60;
        const total2 = p2Mo * p2Months; // 12,000
        const diffCost = total2 - total1; // 840

        return one(
          'mc',
          [
            txt(`A consumer borrows $${num(loan)} to purchase a vehicle and is offered two loan options:`),
            txt(`· Option 1: 36 monthly payments of $${p1Mo} (Total: $${num(total1)})\n· Option 2: 60 monthly payments of $${p2Mo} (Total: $${num(total2)})`),
            txt('How much more does the consumer pay in total by choosing Option 2 instead of Option 1?'),
          ],
          mc(rng, `$${num(diffCost)}`, [`$${num(diffCost + 200)}`, `$${num(diffCost - 150)}`, `$${num(p1Mo - p2Mo)}`]),
          `Total cost Option 2 ($${num(total2)}) − Total cost Option 1 ($${num(total1)}) = $${num(diffCost)} more in interest over the longer term.`,
        );
      }

      // diff 3
      return one(
        'mc',
        [
          txt('Why does extending the length of a loan from 3 years to 5 years increase the total cost of credit, even if the monthly payment is lower?'),
        ],
        mc(
          rng,
          'Because interest accumulates over a longer period of time across 60 months instead of 36 months.',
          [
            'Because the principal borrowed increases each year.',
            'Because the annual percentage rate (APR) automatically triples.',
            'Because banks add a surcharge for long loans.',
          ],
        ),
        'Although monthly payments decrease with a longer term, interest is charged for 24 additional months, significantly increasing the total interest paid.',
      );
    },
  ],

  // 8.12C: Compound growth over time
  '8.12C': [
    (rng, diff) => {
      if (diff === 1) {
        return one(
          'mc',
          [
            txt('How does investing a small amount of money regularly in an account with compound interest grow over a long period (such as 30 years)?'),
          ],
          mc(
            rng,
            'It grows exponentially because interest is earned on both the original deposits and the accumulated interest.',
            [
              'It grows at a constant flat rate with no increase in earnings.',
              'It loses value because of interest deductions.',
              'It grows only by the exact cash amount deposited each month.',
            ],
          ),
          'Compound interest produces exponential growth because every interest payment is added to the balance, generating even more interest in future periods.',
        );
      }

      if (diff === 2) {
        return one(
          'mc',
          [
            txt('Person A begins investing $100 per month at age 22. Person B begins investing $100 per month at age 35, both in accounts earning 7% annual compound interest. At age 65, which person will have significantly more money, and why?'),
          ],
          mc(
            rng,
            'Person A, because compounding has 13 more years to multiply the investment.',
            [
              'Person B, because they invested closer to retirement.',
              'Both will have the same amount because their monthly contributions were identical.',
              'Person B, because interest rates are higher for older investors.',
            ],
          ),
          'Time is the most powerful factor in compound growth. Starting 13 years earlier allows exponential growth to generate vastly larger returns.',
        );
      }

      // diff 3
      return one(
        'mc',
        [
          txt('Which investment strategy takes best advantage of compound interest for long-term goals like college or retirement?'),
        ],
        mc(
          rng,
          'Starting to save early and making regular, consistent contributions over many years.',
          [
            'Waiting until 5 years before retirement to invest a single large sum.',
            'Withdrawing earned interest at the end of each year.',
            'Keeping all savings in cash in a home safe.',
          ],
        ),
        'Regular contributions combined with a long time horizon allow compound interest to maximize growth.',
      );
    },
  ],

  // 8.12D: Calculate and compare simple interest and compound interest
  '8.12D': [
    (rng, diff) => {
      const P = pick(rng, [1000, 2000, 3000, 5000]);
      const r = pick(rng, [0.04, 0.05, 0.06]);
      const rPct = Math.round(r * 100);
      const t = randInt(rng, 2, 4);

      // Simple interest: I = P * r * t
      const simpleI = P * r * t;
      // Compound interest: A = P(1 + r)^t, interest = A - P
      const compoundA = Math.round(P * (1 + r) ** t * 100) / 100;
      const compoundI = Math.round((compoundA - P) * 100) / 100;

      if (diff === 1) {
        return one(
          'mc',
          [
            txt(`A savings account earns simple interest. An initial principal of **$${num(P)}** is invested at **${rPct}% annual interest** for **${t} years**.`),
            txt('How much **simple interest** will be earned? (Use I = Prt)'),
          ],
          mc(rng, `$${num(simpleI)}`, [`$${num(simpleI + P)}`, `$${num(simpleI / 2)}`, `$${num(simpleI + 50)}`]),
          `I = Prt = $${num(P)} × ${r} × ${t} = $${num(simpleI)}.`,
        );
      }

      if (diff === 2) {
        const diffInt = Math.round((compoundI - simpleI) * 100) / 100;
        return one(
          'mc',
          [
            txt(`A student deposits $${num(P)} into Account A earning ${rPct}% annual **simple interest** and $${num(P)} into Account B earning ${rPct}% annual **compound interest**.`),
            txt(`After ${t} years, how much more interest does Account B earn than Account A?`),
          ],
          mc(rng, `$${diffInt.toFixed(2)}`, [`$${(diffInt + 25).toFixed(2)}`, `$${(diffInt * 2).toFixed(2)}`, `$${num(simpleI)}`]),
          `Simple interest = $${num(simpleI)}. Compound interest = $${num(P)}(1 + ${r})^${t} − $${num(P)} = $${compoundI.toFixed(2)}. Difference = $${compoundI.toFixed(2)} − $${num(simpleI)} = $${diffInt.toFixed(2)}.`,
        );
      }

      // diff 3: total balance calculation
      return one(
        'mc',
        [
          txt(`An investment of $${num(P)} earns ${rPct}% interest compounded annually. What is the **total account balance** after ${t} years?`),
        ],
        mc(rng, `$${num(Math.round(compoundA))}`, [`$${num(P + simpleI)}`, `$${num(Math.round(compoundI))}`, `$${num(Math.round(compoundA + 200))}`]),
        `Total balance A = P(1 + r)^t = ${P}(1 + ${r})^${t} = $${num(Math.round(compoundA))}.`,
      );
    },
  ],

  // 8.12G: Estimate college costs and periodic savings plan
  '8.12G': [
    (rng, diff) => {
      const tuition = pick(rng, [6000, 8000, 10000, 12000]);
      const roomBoard = randInt(rng, 5000, 8000);
      const books = 1200;
      const totalFirstYear = tuition + roomBoard + books;

      if (diff === 1) {
        return one(
          'mc',
          [
            txt(`The estimated costs for attending a university for one year are:`),
            txt(`· Tuition and fees: $${num(tuition)}\n· Room and board: $${num(roomBoard)}\n· Books and supplies: $${num(books)}`),
            txt('What is the estimated **total cost of attendance** for the first year?'),
          ],
          mc(rng, `$${num(totalFirstYear)}`, [`$${num(totalFirstYear - books)}`, `$${num(totalFirstYear + 2000)}`, `$${num(tuition + roomBoard)}`]),
          `Sum all attendance costs: $${num(tuition)} + $${num(roomBoard)} + $${num(books)} = $${num(totalFirstYear)}.`,
        );
      }

      if (diff === 2) {
        const grant = pick(rng, [2000, 3000, 4000]);
        const family = totalFirstYear - grant;
        const months = 24; // 2 years of saving
        const monthlySave = Math.ceil(family / months);

        return one(
          'mc',
          [
            txt(`The total cost of attendance for a student's first year of college is $${num(totalFirstYear)}. The student received a scholarship/grant of $${num(grant)}.`),
            txt(`If the family has 24 months to save the remaining balance, approximately how much must they save each month?`),
          ],
          mc(rng, `$${num(monthlySave)} per month`, [`$${num(monthlySave - 80)} per month`, `$${num(monthlySave + 100)} per month`, `$${num(Math.ceil(totalFirstYear / months))} per month`]),
          `Remaining balance needed = $${num(totalFirstYear)} − $${num(grant)} = $${num(family)}. Monthly savings over 24 months = $${num(family)} / 24 ≈ $${num(monthlySave)} per month.`,
        );
      }

      // diff 3: comparing 2-year vs 4-year college
      const cost2Year = 4500 * 2; // $9,000
      const cost4Year = 14000 * 4; // $56,000
      const diffCollege = cost4Year - cost2Year;
      return one(
        'mc',
        [
          txt(`A 2-year community college costs $4,500 per year, while a 4-year university costs $14,000 per year.`),
          txt('How much money can a student save by attending the 2-year community college first before transferring to the 4-year university for the final 2 years, compared to attending all 4 years at the university?'),
        ],
        mc(
          rng,
          `$${num(14000 * 2 - 4500 * 2)}`,
          [`$${num(diffCollege)}`, `$${num(14000 - 4500)}`, `$${num(14000 * 2)}`],
        ),
        `Savings for the first 2 years: University cost for 2 years ($28,000) − Community college cost for 2 years ($9,000) = $${num(28000 - 9000)}.`,
      );
    },
  ],
};
