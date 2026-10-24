import { pick, randInt, sample } from '../../rng.ts';
import { fig, mc, multi, one, table, txt, type Gen } from '../build.ts';

// ---------- 4.9A represent data on frequency table, dot plot, stem-and-leaf ----------
export const representData: Gen = (rng, d) => {
  if (d === 1) {
    // Dot plot with whole numbers
    const labels = ['0', '1', '2', '3', '4'];
    const counts = [randInt(rng, 1, 3), randInt(rng, 2, 5), randInt(rng, 3, 6), randInt(rng, 2, 4), randInt(rng, 1, 3)];
    const targetIdx = randInt(rng, 1, 3);
    const targetVal = labels[targetIdx];
    const targetCount = counts[targetIdx];
    return one('mc', [
      txt(`The dot plot shows the number of books read by students during a reading challenge.`),
      fig({ kind: 'dotPlot', title: 'Books Read', labels, counts, axis: 'Number of Books' }, `Dot plot of books read.`),
      txt(`How many students read exactly ${targetVal} ${targetVal === '1' ? 'book' : 'books'}?`),
    ],
      mc(rng, `${targetCount} students`, [
        `${targetCount + 1} students`,
        `${Math.max(1, targetCount - 1)} students`,
        `${targetVal} students`,
      ]),
      `Count the dots above ${targetVal} on the dot plot. There are ${targetCount} dots, which means ${targetCount} students read ${targetVal} books.`);
  }

  if (d === 2) {
    // Frequency table with fractions (e.g. ribbon lengths in yards: 1/4, 1/2, 3/4, 1)
    const lengths = ['{1/4}', '{1/2}', '{3/4}', '1'];
    const freqs = [randInt(rng, 3, 7), randInt(rng, 4, 8), randInt(rng, 2, 6), randInt(rng, 1, 5)];
    const rows = lengths.map((l, i) => [l, freqs[i]]);
    const total = freqs.reduce((a, b) => a + b, 0);
    return one('mc', [
      txt(`A craft club recorded the lengths of ribbon scraps in yards in a frequency table.`),
      table(['Length (yards)', 'Frequency'], rows),
      txt(`What is the total number of ribbon scraps recorded in the table?`),
    ],
      mc(rng, `${total} scraps`, [
        `${total - 2} scraps`,
        `${total + 3} scraps`,
        `${lengths.length} scraps`,
      ]),
      `Add all the frequencies: ${freqs.join(' + ')} = ${total} ribbon scraps.`);
  }

  // d === 3: Stem-and-leaf plot interpretation
  // Stems 2, 3, 4 with leaf values
  const l1 = [randInt(rng, 0, 3), randInt(rng, 4, 8)];
  const l2 = [randInt(rng, 1, 3), randInt(rng, 4, 6), randInt(rng, 7, 9)];
  const l3 = [randInt(rng, 0, 2), randInt(rng, 5, 8)];
  const rows = [
    ['2', l1.join(' ')],
    ['3', l2.join(' ')],
    ['4', l3.join(' ')],
  ];
  const greaterThan35 = l2.filter((x) => 30 + x > 35).length + l3.length;
  return one('mc', [
    txt(`The stem-and-leaf plot shows the scores of participants in a trivia game.`),
    table(['Stem', 'Leaf'], rows, 'Key: 3 | 2 means 32 points'),
    txt(`How many participants scored more than 35 points?`),
  ],
    mc(rng, `${greaterThan35} participants`, [
      `${greaterThan35 + 1} participants`,
      `${Math.max(1, greaterThan35 - 1)} participants`,
      `${l3.length} participants`,
    ]),
    `Count all values greater than 35: check stem 3 for leaves greater than 5, and all values on stem 4. There are ${greaterThan35} scores greater than 35.`);
};

// ---------- 4.9B solve problems with data representations ----------
export const solveProblemsWithData: Gen = (rng, d) => {
  if (d === 1) {
    // Difference between highest and lowest frequency
    const categories = ['Dogs', 'Cats', 'Birds', 'Fish'];
    const counts = [randInt(rng, 12, 24), randInt(rng, 8, 16), randInt(rng, 3, 8), randInt(rng, 5, 12)];
    const max = Math.max(...counts);
    const min = Math.min(...counts);
    const diff = max - min;
    const rows = categories.map((c, i) => [c, counts[i]]);
    return one('mc', [
      txt(`The frequency table shows the favorite pets chosen by 4th grade students.`),
      table(['Pet', 'Number of Students'], rows),
      txt(`How many more students chose the most popular pet than the least popular pet?`),
    ],
      mc(rng, `${diff} students`, [
        `${diff + 2} students`,
        `${max} students`,
        `${diff - 2 > 0 ? diff - 2 : diff + 4} students`,
      ]),
      `The most popular pet has ${max} votes. The least popular pet has ${min} votes. Subtract: ${max} − ${min} = ${diff} students.`);
  }

  if (d === 2) {
    // Two-step problem from dot plot
    const labels = ['1', '2', '3', '4', '5'];
    const counts = [randInt(rng, 2, 4), randInt(rng, 3, 6), randInt(rng, 4, 8), randInt(rng, 2, 5), randInt(rng, 1, 3)];
    const sum12 = counts[0] + counts[1];
    return one('mc', [
      txt(`The dot plot shows the number of miles walked by members of a walking club.`),
      fig({ kind: 'dotPlot', title: 'Miles Walked', labels, counts, axis: 'Miles' }, 'Dot plot of miles walked.'),
      txt(`How many members walked either 1 or 2 miles?`),
    ],
      mc(rng, `${sum12} members`, [
        `${sum12 + 2} members`,
        `${counts[0]} members`,
        `${sum12 - 1} members`,
      ]),
      `Count the dots for 1 mile (${counts[0]}) and 2 miles (${counts[1]}): ${counts[0]} + ${counts[1]} = ${sum12} members.`);
  }

  // d === 3: Fractional data sum
  const vals = ['{1/4}', '{1/2}', '{3/4}'];
  const counts = [randInt(rng, 2, 5), randInt(rng, 3, 6), randInt(rng, 2, 4)];
  const totalStudents = counts.reduce((a, b) => a + b, 0);
  const atLeastHalf = counts[1] + counts[2];
  const rows = vals.map((v, i) => [v, counts[i]]);
  return one('mc', [
    txt(`The table shows hours students spent practicing an instrument on Saturday.`),
    table(['Practice Time (hours)', 'Number of Students'], rows),
    txt(`How many students practiced for at least {1/2} hour?`),
  ],
    mc(rng, `${atLeastHalf} students`, [
      `${counts[1]} students`,
      `${totalStudents} students`,
      `${counts[0]} students`,
    ]),
    `"At least {1/2} hour" means {1/2} hour or more. Add the students who practiced {1/2} hour (${counts[1]}) and {3/4} hour (${counts[2]}): ${counts[1]} + ${counts[2]} = ${atLeastHalf} students.`);
};

// ---------- 4.10A fixed and variable expenses ----------
export const fixedVariableExpenses: Gen = (rng, d) => {
  if (d === 1) {
    // Identify fixed expense
    const fixed = [
      { name: 'Monthly apartment rent of $850', why: 'Rent stays the exact same amount every month.' },
      { name: 'Monthly car payment of $320', why: 'A car loan payment is set and does not change month to month.' },
      { name: 'Monthly health insurance premium of $175', why: 'A set premium cost is a fixed expense.' },
      { name: 'Annual gym membership billed as $30 each month', why: 'A flat subscription fee is a fixed expense.' },
    ];
    const variable = [
      'Cost of groceries purchased each week',
      'Cost of gasoline for the car',
      'Electricity bill based on energy used',
      'Cost of clothing and entertainment',
    ];
    const fx = pick(rng, fixed);
    return one('mc', [txt(`Which of the following is an example of a **fixed expense**?`)],
      mc(rng, fx.name, sample(rng, variable, 3).map((v) => ({ text: v, why: 'Variable expenses change from month to month based on usage or choices.' }))),
      `A fixed expense is an expense that stays the same every month. ${fx.why}`);
  }

  if (d === 2) {
    // Identify variable expense
    const variable = [
      { name: 'Cost of dining out at restaurants', why: 'Dining out varies depending on how many times you go.' },
      { name: 'Water bill based on gallons of water used', why: 'Utility bills that depend on usage are variable expenses.' },
      { name: 'Cost of gasoline for driving to work', why: 'Gasoline spending varies depending on how much you drive.' },
      { name: 'Cost of birthday gifts and celebrations', why: 'Gift expenses happen occasionally and vary in cost.' },
    ];
    const fixed = [
      'Monthly rent payment',
      'Monthly home internet service fee with a flat rate',
      'Monthly car loan payment',
      'Flat monthly insurance premium',
    ];
    const vx = pick(rng, variable);
    return one('mc', [txt(`Which of the following is an example of a **variable expense**?`)],
      mc(rng, vx.name, sample(rng, fixed, 3).map((f) => ({ text: f, why: 'Fixed expenses remain the same amount every payment period.' }))),
      `A variable expense changes depending on your choices or usage. ${vx.why}`);
  }

  // d === 3: Multi-select: Select TWO variable expenses
  const rights = [
    'Grocery bill each month',
    'Electricity bill based on air conditioning usage',
  ];
  const wrongs = [
    'Monthly apartment rent payment',
    'Monthly car insurance with a flat rate',
    'Fixed monthly school loan payment',
  ];
  return one('multiselect', [
    txt(`Which of the following are examples of **variable expenses**? Select **TWO** correct answers.`),
  ],
    multi(rng, rights, wrongs),
    `Variable expenses change based on usage or choices (like groceries and power bills). Fixed expenses remain constant (like rent and set insurance payments).`);
};

// ---------- 4.10B calculate profit ----------
export const calculateProfit: Gen = (rng, d) => {
  if (d === 1) {
    // Profit = Income - Expenses
    const income = randInt(rng, 45, 95);
    const expenses = randInt(rng, 15, income - 10);
    const profit = income - expenses;
    return one('mc', [
      txt(`Maya made crafts and sold them at a school market.`),
      txt(`• Total income from sales: $${income}`),
      txt(`• Total cost of craft supplies: $${expenses}`),
      txt(`What was Maya's profit?`),
    ],
      mc(rng, `$${profit}`, [
        { text: `$${income + expenses}`, why: 'Profit is income minus expenses, not income plus expenses.' },
        `$${income}`,
        `$${profit + 5}`,
      ]),
      `Profit = Income − Expenses = $${income} − $${expenses} = $${profit}.`);
  }

  if (d === 2) {
    // Itemized expenses
    const item1 = randInt(rng, 12, 25);
    const item2 = randInt(rng, 8, 18);
    const item3 = randInt(rng, 10, 20);
    const totalExpenses = item1 + item2 + item3;
    const income = totalExpenses + randInt(rng, 35, 75);
    const profit = income - totalExpenses;
    return one('mc', [
      txt(`A student operated a lemonade stand. Her expenses were:`),
      txt(`• Lemons and sugar: $${item1}`),
      txt(`• Cups and napkins: $${item2}`),
      txt(`• Ice and banner: $${item3}`),
      txt(`She collected $${income} in sales. What was her profit?`),
    ],
      mc(rng, `$${profit}`, [
        `$${income - item1}`,
        `$${totalExpenses}`,
        `$${profit + 10}`,
      ]),
      `First calculate total expenses: $${item1} + $${item2} + $${item3} = $${totalExpenses}. Then subtract from income: $${income} − $${totalExpenses} = $${profit}.`);
  }

  // d === 3: Unit sales and expenses
  const cupsSold = randInt(rng, 30, 60);
  const pricePerCup = 2;
  const income = cupsSold * pricePerCup;
  const supplyCost = randInt(rng, 20, 35);
  const profit = income - supplyCost;
  return one('mc', [
    txt(`Liam baked cookies to raise money. He spent $${supplyCost} on ingredients. He sold ${cupsSold} cookies for $${pricePerCup} each. What was Liam's profit?`),
  ],
    mc(rng, `$${profit}`, [
      `$${income}`,
      `$${income + supplyCost}`,
      `$${profit - 10}`,
    ]),
    `Total sales income = ${cupsSold} × $${pricePerCup} = $${income}. Profit = Income − Expenses = $${income} − $${supplyCost} = $${profit}.`);
};

// ---------- 4.10E purpose of financial institutions ----------
export const financialInstitutions: Gen = (rng, d) => {
  if (d === 1) {
    // Basic purpose: keeping money safe
    const purposes = [
      { role: 'keep money safe in checking or savings accounts', term: 'protecting depositors\' money from theft or loss' },
      { role: 'lend money to customers for buying a car or home', term: 'providing loans to borrowers' },
      { role: 'allow people to borrow money and pay it back over time with interest', term: 'lending money' },
    ];
    const p = pick(rng, purposes);
    return one('mc', [txt(`Which statement describes a primary purpose of a bank or credit union?`)],
      mc(rng, `To ${p.role}`, [
        'To print and design paper dollar bills for the city',
        'To decide the prices of goods sold in retail stores',
        'To provide free merchandise to citizens',
      ]),
      `Financial institutions exist to keep money safe, accept deposits, and lend money to borrowers.`);
  }

  if (d === 2) {
    // Borrowing, lending, and interest
    return one('mc', [
      txt(`When a person takes out a loan from a bank to purchase a car, what is the person doing?`),
    ],
      mc(rng, 'Borrowing money that must be repaid over time, usually with interest', [
        { text: 'Receiving a cash gift that does not need to be repaid', why: 'A loan must always be repaid to the financial institution.' },
        'Investing money in the car dealership',
        'Paying a fine to the government',
      ]),
      `A loan is borrowed money that the borrower agrees to repay over time, typically with interest fees added.`);
  }

  // d === 3: Select TWO purposes of financial institutions
  const rights = [
    'Providing a safe place for customers to deposit and save money',
    'Lending money to individuals and businesses through loans',
  ];
  const wrongs = [
    'Setting the prices of food and clothing in grocery stores',
    'Printing government currency and coins',
    'Determining property tax rates for local schools',
  ];
  return one('multiselect', [
    txt(`Which of the following are basic purposes of a financial institution? Select **TWO** correct answers.`),
  ],
    multi(rng, rights, wrongs),
    `Financial institutions keep money safe, offer savings and checking accounts, and provide loans to individuals and businesses.`);
};

export const STRAND4: Record<string, Gen[]> = {
  '4.9A': [representData],
  '4.9B': [solveProblemsWithData],
  '4.10A': [fixedVariableExpenses],
  '4.10B': [calculateProfit],
  '4.10E': [financialInstitutions],
};
