// Grade 3 Strand 4: Data Analysis and Personal Financial Literacy
// Standards: 3.4C, 3.8A, 3.8B, 3.9A, 3.9B, 3.9D, 3.9E

import { pick, randInt } from '../../rng.ts';
import { dec, fig, mc, money, one, txt, type Gen } from '../build.ts';

const NAMES = ['Harper', 'Owen', 'Luna', 'Daniel', 'Victoria', 'Henry', 'Bella', 'Sebastian'];

// ---------- 3.4C Value of coins and bills ----------
export const coinsAndBills: Gen = (rng, d) => {
  const name = pick(rng, NAMES);
  const quarters = randInt(rng, 1, 5);
  const dimes = randInt(rng, 1, 6);
  const nickels = randInt(rng, 1, 5);
  const pennies = randInt(rng, 1, 9);
  const dollars = d === 1 ? randInt(rng, 1, 5) : randInt(rng, 5, 20);

  const coinTotalCents = quarters * 25 + dimes * 10 + nickels * 5 + pennies * 1;
  const totalCents = dollars * 100 + coinTotalCents;

  const desc = `${dollars} one-dollar bill${dollars > 1 ? 's' : ''}, ${quarters} quarter${quarters > 1 ? 's' : ''}, ${dimes} dime${dimes > 1 ? 's' : ''}, ${nickels} nickel${nickels > 1 ? 's' : ''}, and ${pennies} penn${pennies > 1 ? 'ies' : 'y'}`;

  return one('mc', [txt(`${name} has ${desc} in a piggy bank. What is the total value of this collection of money?`)],
    mc(rng, `${money(totalCents)}`, [
      `${money(totalCents + 25)}`,
      `${money(totalCents - 10)}`,
      `${money(dollars * 100 + quarters * 10 + dimes * 25 + nickels * 5 + pennies)}`,
    ]),
    `Calculate the value of each coin and bill:\n• ${dollars} dollar bill(s) = $${dollars}.00\n• ${quarters} quarter(s) = $${dec(quarters * 25, 2)}\n• ${dimes} dime(s) = $${dec(dimes * 10, 2)}\n• ${nickels} nickel(s) = $${dec(nickels * 5, 2)}\n• ${pennies} penny/pennies = $${dec(pennies, 2)}\nTotal = ${money(totalCents)}.`);
};

// ---------- 3.8A Summarize data with tables, dot plots, and graphs ----------
export const summarizeData: Gen = (rng, d) => {
  const categories = ['Red', 'Blue', 'Green', 'Yellow'];
  const step = pick(rng, [2, 5, 10]);
  const multipliers = [randInt(rng, 2, 6), randInt(rng, 3, 7), randInt(rng, 1, 5), randInt(rng, 2, 6)];
  const values = multipliers.map((m) => m * step);
  const targetIdx = randInt(rng, 0, 3);
  const targetCategory = categories[targetIdx];
  const targetVal = values[targetIdx];

  if (d === 1) {
    // Bar graph with scaled intervals
    return one('mc', [
      fig({
        kind: 'barGraph',
        title: 'Favorite Colors of 3rd Graders',
        categories,
        values,
        step,
        axis: 'Number of Students',
      }, `Bar graph showing favorite colors with a scale counting by ${step}s`),
      txt(`The bar graph shows the favorite colors of students in grade 3. How many students chose ${targetCategory} as their favorite color?`),
    ],
      mc(rng, `${targetVal} students`, [
        `${targetVal + step} students`,
        `${targetVal - step} students`,
        `${values[(targetIdx + 1) % 4]} students`,
      ]),
      `Find ${targetCategory} on the horizontal axis and follow the bar up to the vertical scale: the bar reaches ${targetVal}. So, ${targetVal} students chose ${targetCategory}.`);
  }

  // Dot plot
  const dotLabels = ['0', '1', '2', '3', '4'];
  const counts = [randInt(rng, 1, 4), randInt(rng, 2, 6), randInt(rng, 3, 7), randInt(rng, 1, 5), randInt(rng, 1, 3)];
  const totalStudents = counts.reduce((a, b) => a + b, 0);
  return one('mc', [
    fig({
      kind: 'dotPlot',
      title: 'Books Read This Month',
      labels: dotLabels,
      counts,
      axis: 'Number of Books',
    }, `Dot plot showing books read this month`),
    txt(`The dot plot shows the number of books read by students in a reading club. How many students read exactly 2 books?`),
  ],
    mc(rng, `${counts[2]} students`, [
      `${counts[1]} students`,
      `${counts[3]} students`,
      `${totalStudents} students`,
    ]),
    `Each dot represents 1 student. Count the dots above the label '2': there are ${counts[2]} dots, which means ${counts[2]} students read 2 books.`);
};

// ---------- 3.8B Solve problems with graphs and tables ----------
export const solveProblemsData: Gen = (rng, d) => {
  const categories = ['Soccer', 'Basketball', 'Baseball', 'Tennis'];
  const step = pick(rng, [2, 5]);
  const values = [randInt(rng, 3, 7) * step, randInt(rng, 4, 8) * step, randInt(rng, 2, 6) * step, randInt(rng, 1, 4) * step];

  if (d === 1) {
    // Difference between two categories
    const diff = Math.abs(values[0] - values[1]);
    const more = values[0] > values[1] ? categories[0] : categories[1];
    const less = values[0] > values[1] ? categories[1] : categories[0];
    return one('mc', [
      fig({
        kind: 'barGraph',
        title: 'Favorite Sports',
        categories,
        values,
        step,
        axis: 'Students',
      }, `Bar graph of favorite sports with scale of ${step}`),
      txt(`Based on the bar graph, how many more students chose ${more} than ${less}?`),
    ],
      mc(rng, `${diff} students`, [
        `${diff + step} students`,
        `${values[0] + values[1]} students`,
        `${Math.max(step, diff - step)} students`,
      ]),
      `Find the values from the graph: ${more} has ${Math.max(values[0], values[1])} students and ${less} has ${Math.min(values[0], values[1])} students. Subtract to find the difference: ${Math.max(values[0], values[1])} − ${Math.min(values[0], values[1])} = ${diff} students.`);
  }

  // 2-step: Combined total compared to another category
  const combined = values[0] + values[2];
  return one('mc', [
    fig({
      kind: 'barGraph',
      title: 'Favorite Sports',
      categories,
      values,
      step,
      axis: 'Students',
    }, `Bar graph of favorite sports with scale of ${step}`),
    txt(`How many total students chose ${categories[0]} or ${categories[2]}?`),
  ],
    mc(rng, `${combined} students`, [
      `${combined + step} students`,
      `${combined - step} students`,
      `${values[1] + values[3]} students`,
    ]),
    `Add the students from both categories: ${values[0]} (${categories[0]}) + ${values[2]} (${categories[2]}) = ${combined} students.`);
};

// ---------- 3.9A Human capital, labor, and income ----------
export const humanCapitalIncome: Gen = (rng, _d) => {
  const professions = [
    { job: 'nurse', skill: 'learning medical procedures and patient care', reward: 'higher income' },
    { job: 'electrician', skill: 'training to work safely with wiring and electrical tools', reward: 'more job opportunities and better pay' },
    { job: 'chef', skill: 'attending culinary school to learn advanced cooking techniques', reward: 'higher wages at a restaurant' },
    { job: 'computer programmer', skill: 'practicing coding languages and problem-solving', reward: 'higher earnings for specialized skills' },
  ];
  const p = pick(rng, professions);
  const article = /^[aeiou]/i.test(p.job) ? 'an' : 'a';
  return one('mc', [txt(`A person wants to become ${article} ${p.job} and spends time ${p.skill}. How does improving this human capital benefit the worker?`)],
    mc(rng, `It increases their skills, leading to ${p.reward}.`, [
      { text: `It guarantees they will never have to pay income tax.`, why: 'Income taxes apply to all earned wages.' },
      `It decreases the amount of income they can earn.`,
      `It eliminates the need to work in the future.`,
    ]),
    `Human capital refers to the knowledge, skills, and experience a worker gains. Improving human capital increases productivity and allows workers to earn higher income and better pay.`);
};

// ---------- 3.9B Resource availability, scarcity, and cost ----------
export const scarcityAndCost: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [txt(`A drought in Texas reduces the harvest of peaches, making fresh peaches scarce at local grocery stores. What is the most likely effect on the price of peaches?`)],
      mc(rng, `The price of peaches will increase because they are scarce.`, [
        { text: `The price of peaches will decrease to zero.`, why: 'Scarcity makes items more valuable, not cheaper.' },
        `The price of peaches will stay exactly the same.`,
        `The price of peaches will drop because fewer people want them.`,
      ]),
      `When a resource or good becomes scarce (limited in supply) while demand remains strong, the cost or price typically increases.`);
  }

  return one('mc', [txt(`A factory produces an abundant supply of winter coats during a warm spring season, so there are many coats left on store shelves. How does this abundance affect the price of the coats?`)],
    mc(rng, `Stores will likely lower the price to encourage shoppers to buy them.`, [
      { text: `Stores will double the price because there are so many coats.`, why: 'High supply leads to sales and discounts, not price increases.' },
      `The coats cannot be sold legally.`,
      `The cost of making the coats will increase immediately.`,
    ]),
    `When there is an abundance or surplus of a product, sellers often lower prices or offer sales to sell the extra inventory.`);
};

// ---------- 3.9D Credit, borrowing, and interest ----------
export const creditAndInterest: Gen = (rng, _d) => {
  const name = pick(rng, NAMES);
  const cost = randInt(rng, 150, 450);
  return one('mc', [txt(`${name} uses a credit card to purchase a bicycle that costs $${cost}. What must ${name} do after making this purchase?`)],
    mc(rng, `Repay the credit card company the money borrowed, usually with added interest.`, [
      { text: `Keep the bicycle without paying anything back because it was a gift.`, why: 'Credit is borrowed money that must be repaid.' },
      `Pay only half of the bicycle's cost.`,
      `Trade the bicycle for cash at the bank.`,
    ]),
    `Using credit means borrowing money from a lender to pay for goods now. The borrower has the legal responsibility to repay the entire borrowed amount, usually with extra fee called interest.`);
};

// ---------- 3.9E Reasons to save and savings plans ----------
export const reasonsToSave: Gen = (rng, _d) => {
  const reasons = [
    { goal: 'saving for college tuition', benefit: 'paying for future education expenses' },
    { goal: 'building an emergency fund', benefit: 'paying for unexpected car repairs or medical bills' },
    { goal: 'saving for a computer', benefit: 'buying a desired item without going into debt or paying interest' },
  ];
  const r = pick(rng, reasons);
  return one('mc', [txt(`Why is ${r.goal} considered a good financial habit?`)],
    mc(rng, `It helps a person prepare for future expenses, such as ${r.benefit}.`, [
      { text: `It guarantees that prices of goods will decrease in stores.`, why: 'Saving money prepares for personal costs, but does not change store prices.' },
      `It prevents banks from lending money to others.`,
      `It means the person never needs to budget their income.`,
    ]),
    `A savings plan helps individuals set aside a portion of income to achieve long-term goals and handle unforeseen emergencies.`);
};

export const STRAND4: Record<string, Gen[]> = {
  '3.4C': [coinsAndBills],
  '3.8A': [summarizeData],
  '3.8B': [solveProblemsData],
  '3.9A': [humanCapitalIncome],
  '3.9B': [scarcityAndCost],
  '3.9D': [creditAndInterest],
  '3.9E': [reasonsToSave],
};
