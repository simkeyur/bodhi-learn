// Grade 7 math, strand 4: data analysis and personal financial literacy.
// TEKS 7.6G, 7.12A, 7.12B, 7.12C, 7.13A, 7.13B, 7.13C, 7.13D, 7.13E, 7.13F

import { pick } from '../../rng.ts';
import { fig, mc, num, one, txt, type Gen } from '../build.ts';

// ---------- 7.6G solve problems using graphs and circle graphs ----------
export const circleGraphsAndData: Gen = (rng, d) => {
  if (d === 1) {
    // Circle graph with percentages
    const slices = [
      { label: 'Fiction', pct: 40 },
      { label: 'Nonfiction', pct: 25 },
      { label: 'Graphic Novels', pct: 20 },
      { label: 'Biography', pct: 15 },
    ];
    const totalBooks = 200;
    const targetSlice = slices[0]; // 40% of 200 = 80
    const count = (targetSlice.pct / 100) * totalBooks;
    return one('mc', [
      txt(`The circle graph shows the genres of ${totalBooks} books checked out from the school library:`),
      fig({
        kind: 'circleGraph',
        title: 'Library Checkouts',
        slices,
      }, 'Circle graph showing Fiction 40%, Nonfiction 25%, Graphic Novels 20%, Biography 15%'),
      txt(`How many of the books checked out were ${targetSlice.label}?`),
    ],
      mc(rng, `${count} books`, [
        `${targetSlice.pct} books`,
        `${count - 10} books`,
        `${count + 20} books`,
      ]),
      `Find ${targetSlice.pct}% of ${totalBooks}: 0.${targetSlice.pct} × ${totalBooks} = ${count} books.`);
  }

  if (d === 2) {
    // Part-to-part ratio from circle graph
    const slices = [
      { label: 'Soccer', pct: 35 },
      { label: 'Basketball', pct: 25 },
      { label: 'Baseball', pct: 20 },
      { label: 'Track', pct: 20 },
    ];
    return one('mc', [
      txt(`The circle graph shows the favorite sports of 100 students:`),
      fig({
        kind: 'circleGraph',
        title: 'Favorite Sports',
        slices,
      }, 'Circle graph showing Soccer 35%, Basketball 25%, Baseball 20%, Track 20%'),
      txt(`Which statement about the data in the circle graph is true?`),
    ],
      mc(rng, 'The ratio of students who chose Basketball to students who chose Soccer is 5 to 7', [
        { text: 'More students chose Track than Soccer', why: 'Soccer is 35% while Track is only 20%.' },
        'Exactly half of the students chose Basketball',
        'Baseball was chosen by 40 students',
      ]),
      `Basketball is 25% and Soccer is 35%. The ratio of Basketball to Soccer is 25 : 35 = 5 : 7.`);
  }

  // d === 3: Multi-step circle graph calculation
  const slices = [
    { label: 'Savings', pct: 30 },
    { label: 'Rent', pct: 40 },
    { label: 'Food', pct: 20 },
    { label: 'Utilities', pct: 10 },
  ];
  const monthlyIncome = 3500;
  const foodAndRentPct = 40 + 20; // 60%
  const amount = (foodAndRentPct / 100) * monthlyIncome; // 2100
  return one('mc', [
    txt(`The circle graph displays a family's monthly budget:`),
    fig({
      kind: 'circleGraph',
      title: 'Monthly Budget',
      slices,
    }, 'Circle graph showing Savings 30%, Rent 40%, Food 20%, Utilities 10%'),
    txt(`If the family's total monthly income is $${num(monthlyIncome)}, how much money is budgeted for Rent and Food combined?`),
  ],
    mc(rng, `$${num(amount)}`, [
      `$${num(amount - 350)}`,
      `$${num(monthlyIncome * 0.4)}`,
      `$${num(amount + 200)}`,
    ]),
    `Combine Rent (40%) and Food (20%): 40% + 20% = 60%. Calculate 60% of $${num(monthlyIncome)}: 0.60 × $${num(monthlyIncome)} = $${num(amount)}.`);
};

// ---------- 7.12A compare data using comparative plots ----------
export const comparePlots: Gen = (rng, d) => {
  if (d === 1) {
    // Comparing medians on two box plots
    const medA = 24;
    const medB = 18;
    const diff = medA - medB;
    return one('mc', [
      txt(`Two box plots compare test scores between Class A and Class B. The median score for Class A is ${medA}, and the median score for Class B is ${medB}. Which statement is true?`),
      fig({
        kind: 'boxPlot',
        title: 'Class A',
        min: 12,
        q1: 18,
        median: medA,
        q3: 30,
        max: 36,
      }, 'Box plot for Class A with median 24'),
    ],
      mc(rng, `The median score of Class A is ${diff} points greater than the median score of Class B`, [
        `The median score of Class B is greater than Class A`,
        `Both classes have identical median scores`,
        `The range of Class A is equal to the median of Class B`,
      ]),
      `Compare the two medians: Class A (${medA}) − Class B (${medB}) = ${diff} points greater.`);
  }

  if (d === 2) {
    // Comparing Interquartile Range (IQR)
    const iqrA = 12; // 30 - 18
    const iqrB = 8;  // 26 - 18
    return one('mc', [
      txt(`Box plot X has Q1 = 18 and Q3 = 30. Box plot Y has Q1 = 18 and Q3 = 26. Which statement accurately compares the variability of the middle 50% of the data?`),
    ],
      mc(rng, 'Box plot X has a greater interquartile range (IQR) than Box plot Y', [
        { text: 'Box plot Y has greater spread in the middle 50% of data', why: 'Box plot Y has an IQR of 8, which is less than Box plot X with 12.' },
        'Both box plots have identical IQR values',
        'Box plot X has zero variability',
      ]),
      `Calculate IQR: For X, 30 − 18 = ${iqrA}. For Y, 26 − 18 = ${iqrB}. Since ${iqrA} > ${iqrB}, Box plot X has greater variability in its middle 50%.`);
  }

  // d === 3: Comparing distribution shapes and centers
  return one('mc', [
    txt(`Distribution 1 is skewed right with a median of 15. Distribution 2 is symmetrical with a median of 25. Which statement correctly compares the two distributions?`),
  ],
    mc(rng, 'Distribution 2 has a greater center (median) than Distribution 1', [
      'Distribution 1 has a greater center than Distribution 2',
      'Both distributions are symmetrical',
      'Distribution 2 is skewed left',
    ]),
    `Distribution 2's median (25) is greater than Distribution 1's median (15).`);
};

// ---------- 7.12B inferences from random samples ----------
export const randomSampleInferences: Gen = (rng, d) => {
  if (d === 1) {
    const sampleSize = 50;
    const favorable = pick(rng, [15, 20, 25]);
    const popSize = 600;
    const expected = (favorable / sampleSize) * popSize;
    return one('mc', [
      txt(`In a random sample of ${sampleSize} students at a school with ${popSize} students, ${favorable} students stated that pizza is their favorite cafeteria lunch. Based on this sample, how many students in the entire school are expected to prefer pizza?`),
    ],
      mc(rng, `${expected} students`, [
        `${favorable * 10} students`,
        `${expected + 30} students`,
        `${sampleSize * 2} students`,
      ]),
      `Set up a proportion: {${favorable}/${sampleSize}} = {x/${popSize}}. Multiply: x = (${favorable} ÷ ${sampleSize}) × ${popSize} = ${expected} students.`);
  }

  if (d === 2) {
    // Defective product inference
    const sampleSize = 200;
    const defective = pick(rng, [6, 8, 10]);
    const totalProduction = 10000;
    const expectedDefective = (defective / sampleSize) * totalProduction;
    return one('mc', [
      txt(`A random sample of ${sampleSize} cell phone screens showed ${defective} screens with flaws. In a production run of ${num(totalProduction)} screens, what is the best prediction for the total number of flawed screens?`),
    ],
      mc(rng, `${expectedDefective} screens`, [
        `${defective * 10} screens`,
        `${expectedDefective + 100} screens`,
        `${sampleSize} screens`,
      ]),
      `The sample defect rate is ${defective} / ${sampleSize} = ${defective / sampleSize}. Multiply by ${num(totalProduction)}: ${defective / sampleSize} × ${totalProduction} = ${expectedDefective} screens.`);
  }

  // d === 3: Representativeness of sample
  return one('mc', [
    txt(`Principal Martinez wants to know the favorite elective of all 800 middle school students. Which sample method is most likely to produce a representative random sample?`),
  ],
    mc(rng, 'Surveying every 10th student from an alphabetical list of all enrolled students', [
      { text: 'Surveying all members of the school band', why: 'Band members are biased toward music electives.' },
      'Surveying students seated in the art classroom at lunch',
      'Surveying the first 50 students who arrive at school on Friday morning',
    ]),
    `Selecting every 10th student from a complete alphabetical roster gives every student an equal chance of being selected without subject bias.`);
};

// ---------- 7.12C compare two populations using samples ----------
export const compareTwoPopulations: Gen = (rng, d) => {
  if (d === 1) {
    const meanA = 12;
    const meanB = 8;
    return one('mc', [
      txt(`Random samples of 30 students each were taken from School X and School Y. The mean number of books read per year was ${meanA} books at School X and ${meanB} books at School Y. What inference can be made about the two school populations?`),
    ],
      mc(rng, 'On average, students at School X read more books per year than students at School Y', [
        'On average, students at School Y read more books per year than students at School X',
        'Every single student at School X read more books than every student at School Y',
        'The two schools have identical reading habits',
      ]),
      `Because School X has a higher sample mean (${meanA} vs ${meanB}), we can infer that students at School X read more books on average.`);
  }

  if (d === 2) {
    return one('mc', [
      txt(`Random samples of shoe sizes were collected from the 7th-grade and 8th-grade basketball teams. The median shoe size for 7th graders was 8.5, and the median for 8th graders was 10.5. Which comparative inference is best supported?`),
    ],
      mc(rng, 'The 8th-grade basketball team tends to have larger shoe sizes than the 7th-grade team', [
        'The 7th-grade team has larger shoe sizes on average',
        'No 7th grader has a shoe size larger than 8.5',
        'All 8th graders wear size 10.5 shoes',
      ]),
      `Comparing the medians (10.5 vs 8.5) shows that the center of the 8th-grade shoe size distribution is higher.`);
  }

  // d === 3: Comparing overlap and spread
  return one('mc', [
    txt(`Two random samples of daily exercise times (in minutes) have equal medians of 45 minutes, but Sample 1 has an IQR of 10 minutes while Sample 2 has an IQR of 25 minutes. Which statement is supported by the data?`),
  ],
    mc(rng, 'The exercise times in Sample 2 show greater variability than the exercise times in Sample 1', [
      'The exercise times in Sample 1 show greater variability than in Sample 2',
      'Sample 2 has a higher median exercise time than Sample 1',
      'Both samples have identical spreads',
    ]),
    `Since IQR measures variability, an IQR of 25 minutes indicates greater spread in the middle 50% of exercise times compared to an IQR of 10 minutes.`);
};

// ---------- 7.13A calculate sales tax and income tax ----------
export const salesAndIncomeTax: Gen = (rng, d) => {
  if (d === 1) {
    // Sales tax on a purchase
    const price = pick(rng, [40, 50, 60, 80]);
    const taxRate = 8.25; // Texas state + local tax
    const tax = Math.round((price * taxRate) / 100 * 100) / 100;
    const total = Math.round((price + tax) * 100) / 100;
    return one('mc', [
      txt(`Marcus buys a video game for $${price}. The sales tax rate is 8.25%. How much total money does Marcus pay including tax?`),
    ],
      mc(rng, `$${total.toFixed(2)}`, [
        `$${(price + 8.25).toFixed(2)}`,
        `$${tax.toFixed(2)}`,
        `$${(total + 5).toFixed(2)}`,
      ]),
      `Find the sales tax: $${price} × 0.0825 = $${tax.toFixed(2)}. Add tax to price: $${price} + $${tax.toFixed(2)} = $${total.toFixed(2)}.`);
  }

  if (d === 2) {
    // Income tax deduction
    const gross = pick(rng, [3000, 4000, 5000]);
    const taxPct = 15;
    const taxOwed = (gross * taxPct) / 100;
    const netPay = gross - taxOwed;
    return one('mc', [
      txt(`A graphic designer earns a monthly gross income of $${num(gross)}. If federal income tax is 15%, how much income tax is deducted from the designer's paycheck?`),
    ],
      mc(rng, `$${num(taxOwed)}`, [
        `$${num(netPay)}`,
        `$${num(gross * 0.1)}`,
        `$${num(taxOwed + 150)}`,
      ]),
      `Calculate 15% of gross earnings: 0.15 × $${num(gross)} = $${num(taxOwed)}.`);
  }

  // d === 3: Comparing gross pay vs net pay after multiple deductions
  const wages = 4000;
  const fedTax = 600; // 15%
  const fica = 300;   // 7.5%
  const net = wages - fedTax - fica; // 3100
  return one('mc', [
    txt(`Camila earns $${num(wages)} per month in gross wages. Deductions include $${num(fedTax)} in income tax and $${num(fica)} in Social Security and Medicare taxes. What is Camila's net monthly income?`),
  ],
    mc(rng, `$${num(net)}`, [
      `$${num(wages - fedTax)}`,
      `$${num(net - 200)}`,
      `$${num(wages + fedTax)}`,
    ]),
    `Total deductions = $${num(fedTax)} + $${num(fica)} = $${num(fedTax + fica)}. Net income = Gross wages − Total deductions = $${num(wages)} − $${num(fedTax + fica)} = $${num(net)}.`);
};

// ---------- 7.13B personal budget components ----------
export const personalBudgetComponents: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`Which expense in a household budget is typically considered a **fixed expense** because it remains the same amount each month?`),
    ],
      mc(rng, 'Monthly apartment rent', [
        { text: 'Grocery bill', why: 'Grocery spending changes each month based on purchases (variable expense).' },
        'Electricity bill in the summer',
        'Entertainment and dining out',
      ]),
      `A fixed expense does not change from month to month. Rent is fixed by a lease agreement.`);
  }

  if (d === 2) {
    // Percentage of total budget
    const rent = 1200;
    const food = 600;
    const savings = 600;
    const other = 600;
    const total = rent + food + savings + other; // 3000
    const rentPct = Math.round((rent / total) * 100); // 40%
    return one('mc', [
      txt(`A personal budget allocates $${num(rent)} for rent, $${num(food)} for food, $${num(savings)} for savings, and $${num(other)} for other expenses (Total = $${num(total)}). What percentage of the total budget is allocated for rent?`),
    ],
      mc(rng, `${rentPct}%`, [
        `${rentPct - 10}%`,
        `30%`,
        `25%`,
      ]),
      `Divide rent by total budget: $${num(rent)} ÷ $${num(total)} = 0.40 = ${rentPct}%.`);
  }

  // d === 3: Calculating needed emergency savings
  const monthlyExpenses = 2800;
  const months = 6;
  const targetFund = monthlyExpenses * months;
  return one('mc', [
    txt(`Financial advisors recommend maintaining an emergency savings fund equal to ${months} months of basic living expenses. If a family's basic expenses are $${num(monthlyExpenses)} per month, how much should be in their emergency fund?`),
  ],
    mc(rng, `$${num(targetFund)}`, [
      `$${num(monthlyExpenses * 3)}`,
      `$${num(targetFund + 1200)}`,
      `$${num(monthlyExpenses * 12)}`,
    ]),
    `Multiply monthly expenses by ${months} months: $${num(monthlyExpenses)} × ${months} = $${num(targetFund)}.`);
};

// ---------- 7.13C net worth statement ----------
export const netWorthStatement: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`What is the formula used to calculate a person's net worth?`),
    ],
      mc(rng, 'Net Worth = Total Assets − Total Liabilities', [
        { text: 'Net Worth = Total Assets + Total Liabilities', why: 'Liabilities are debts and must be subtracted, not added.' },
        'Net Worth = Monthly Income × 12',
        'Net Worth = Cash Savings − Credit Card Debt',
      ]),
      `Net worth is the difference between everything you own of monetary value (assets) and everything you owe to creditors (liabilities).`);
  }

  if (d === 2) {
    const carValue = 15000;
    const savings = 8000;
    const carLoan = 6000;
    const creditDebt = 2000;
    const assets = carValue + savings; // 23000
    const liabilities = carLoan + creditDebt; // 8000
    const netWorth = assets - liabilities; // 15000
    return one('mc', [
      txt(`The table shows Elijah's financial records:\n• Car value: $${num(carValue)} (Asset)\n• Bank savings: $${num(savings)} (Asset)\n• Auto loan balance: $${num(carLoan)} (Liability)\n• Credit card balance: $${num(creditDebt)} (Liability)\n\nWhat is Elijah's net worth?`),
    ],
      mc(rng, `$${num(netWorth)}`, [
        `$${num(assets + liabilities)}`,
        `$${num(assets)}`,
        `$${num(netWorth - 3000)}`,
      ]),
      `Total assets = $${num(carValue)} + $${num(savings)} = $${num(assets)}. Total liabilities = $${num(carLoan)} + $${num(creditDebt)} = $${num(liabilities)}. Net worth = $${num(assets)} − $${num(liabilities)} = $${num(netWorth)}.`);
  }

  // d === 3: Asset vs liability classification
  return one('mc', [
    txt(`Which item is classified as an **asset** on a personal balance sheet?`),
  ],
    mc(rng, 'The current market value of a home', [
      { text: 'A student loan balance', why: 'A student loan is money owed (liability).' },
      'The unpaid balance on a credit card',
      'An auto loan owed to a bank',
    ]),
    `An asset is something of positive financial value that is owned, such as real estate, cash, or investments. Loans and unpaid debt are liabilities.`);
};

// ---------- 7.13D family budget estimator ----------
export const familyBudgetEstimator: Gen = (rng, d) => {
  if (d === 1) {
    // Hourly wage to meet monthly budget (assuming 160 work hours per month)
    const monthlyNeeded = 3200;
    const hoursPerMonth = 160;
    const hourlyRate = monthlyNeeded / hoursPerMonth; // 20
    return one('mc', [
      txt(`A family budget estimator indicates that a family in San Antonio needs $${num(monthlyNeeded)} per month to meet its basic living needs. If one parent works full-time (${hoursPerMonth} hours per month), what minimum hourly wage is needed to cover this budget?`),
    ],
      mc(rng, `$${hourlyRate} per hour`, [
        `$${hourlyRate - 4} per hour`,
        `$${hourlyRate + 5} per hour`,
        `$${hourlyRate * 2} per hour`,
      ]),
      `Divide the monthly budget by the number of work hours: $${num(monthlyNeeded)} ÷ ${hoursPerMonth} = $${hourlyRate} per hour.`);
  }

  if (d === 2) {
    // Total annual budget from monthly estimates
    const monthly = 4500;
    const annual = monthly * 12;
    return one('mc', [
      txt(`According to a family budget estimator, a family of four requires $${num(monthly)} per month for housing, food, transportation, healthcare, and taxes. What is the minimum annual income needed for this family?`),
    ],
      mc(rng, `$${num(annual)}`, [
        `$${num(monthly * 10)}`,
        `$${num(annual + 6000)}`,
        `$${num(monthly * 52)}`,
      ]),
      `Multiply monthly expenses by 12 months: $${num(monthly)} × 12 = $${num(annual)} per year.`);
  }

  // d === 3: Comparing budgets between two cities
  const cityA = 3600;
  const cityB = 4400;
  const diff = cityB - cityA;
  return one('mc', [
    txt(`A family budget estimator shows that basic living costs for a family are $${num(cityA)} per month in El Paso and $${num(cityB)} per month in Austin. How much more money does the family need annually to live in Austin compared to El Paso?`),
  ],
    mc(rng, `$${num(diff * 12)} per year`, [
      `$${num(diff)} per year`,
      `$${num(diff * 10)} per year`,
      `$${num((diff * 12) + 2400)} per year`,
    ]),
    `Monthly difference = $${num(cityB)} − $${num(cityA)} = $${num(diff)}. Annual difference = $${num(diff)} × 12 = $${num(diff * 12)}.`);
};

// ---------- 7.13E simple and compound interest ----------
export const simpleCompoundInterest: Gen = (rng, d) => {
  if (d === 1) {
    // Simple interest I = Prt
    const p = pick(rng, [500, 1000, 1500, 2000]);
    const rPct = 5;
    const t = pick(rng, [2, 3, 4]);
    const interest = (p * rPct * t) / 100;
    return one('mc', [
      txt(`Leo deposits $${num(p)} into a savings account that earns ${rPct}% annual simple interest. How much interest will Leo earn in ${t} years?`),
    ],
      mc(rng, `$${interest}`, [
        `$${p + interest}`,
        `$${interest * 2}`,
        `$${interest - 15}`,
      ]),
      `Use the simple interest formula I = Prt: I = ${p} × 0.05 × ${t} = $${interest}.`);
  }

  if (d === 2) {
    // Comparing simple interest vs compound interest over 2 years
    // Principal = 1000, rate = 10%
    // Simple: 1000 * 0.10 * 2 = 200
    // Compound: Year 1 = 100 interest (balance 1100), Year 2 = 110 interest => total interest = 210
    return one('mc', [
      txt(`Elena invests $1,000 at a 10% annual interest rate for 2 years:\n• Account A earns simple interest\n• Account B earns interest compounded annually\n\nHow much more interest does Account B earn than Account A over the 2-year period?`),
    ],
      mc(rng, '$10', [
        { text: '$100', why: 'Account B earns $210 in interest, while Account A earns $200.' },
        '$20',
        '$0 (both earn identical interest)',
      ]),
      `Account A earns simple interest: I = 1000 × 0.10 × 2 = $200. Account B earns compound interest: Year 1 = $100, Year 2 = 10% of $1,100 = $110 (Total = $210). Difference: $210 − $200 = $10.`);
  }

  // d === 3: Total account balance with simple interest
  const p = 800;
  const rPct = 6;
  const t = 3;
  const interest = (p * rPct * t) / 100; // 144
  const total = p + interest; // 944
  return one('mc', [
    txt(`Harper deposits $${p} into a college savings account earning ${rPct}% annual simple interest. If she makes no additional deposits or withdrawals, what will be the total balance in the account after ${t} years?`),
  ],
    mc(rng, `$${total}`, [
      { text: `$${interest}`, why: 'This is the interest earned alone, not the total account balance.' },
      `$${p + rPct * t}`,
      `$${total + 50}`,
    ]),
    `Interest earned: I = Prt = 800 × 0.06 × 3 = $${interest}. Total balance = Principal + Interest = $${p} + $${interest} = $${total}.`);
};

// ---------- 7.13F monetary incentives: sales, rebates, coupons ----------
export const monetaryIncentives: Gen = (rng, d) => {
  if (d === 1) {
    // Coupon vs rebate definition
    return one('mc', [
      txt(`What is the primary difference between using a store coupon and a mail-in rebate?`),
    ],
      mc(rng, 'A coupon provides an immediate discount at checkout, while a rebate returns money by mail after purchase', [
        { text: 'A rebate gives an immediate discount at checkout', why: 'That describes an instant coupon or discount.' },
        'A coupon requires the customer to pay extra interest',
        'Both coupons and rebates are always charged to a credit card',
      ]),
      `Coupons reduce the purchase price instantly at the cash register. A rebate requires the buyer to submit proof of purchase and receive a refund later.`);
  }

  if (d === 2) {
    // Comparing two incentives on a $100 item
    const price = 100;
    const rebate = 25;
    const pctOff = 20;
    const priceA = price - rebate; // 75
    const priceB = price - (price * pctOff) / 100; // 80
    return one('mc', [
      txt(`A tablet has a regular price of $${price}. A store offers two promotional options:\n• Option A: A $${rebate} mail-in rebate\n• Option B: A ${pctOff}% instant coupon discount\n\nWhich option results in the lower final cost?`),
    ],
      mc(rng, `Option A, because the final cost is $${priceA} compared to $${priceB} with Option B`, [
        `Option B, because the final cost is $${priceB} compared to $${priceA}`,
        `Both options yield the exact same cost of $${priceA}`,
        `Option B, because 20% is greater than $25`,
      ]),
      `Option A final cost: $${price} − $${rebate} = $${priceA}. Option B final cost: $${price} − (0.20 × $${price}) = $${priceB}. Option A is $5 cheaper.`);
  }

  // d === 3: Multi-item discount comparison
  return one('mc', [
    txt(`Store X offers 'Buy 2 shirts at $30 each, get 1 free'. Store Y offers '30% off all shirts' where shirts cost $30 each. Which store offers the lower total price for 3 shirts?`),
  ],
    mc(rng, 'Store X, because 3 shirts cost $60 compared to $63 at Store Y', [
      { text: 'Store Y, because 30% off is always better than getting 1 free', why: 'Calculate the total costs: Store X is $60 and Store Y is $63.' },
      'Both stores offer the exact same total price of $60',
      'Store Y, because 3 shirts cost $55',
    ]),
    `At Store X: Pay for 2 shirts: 2 × $30 = $60 (the 3rd is free). At Store Y: 3 shirts normally cost $90; with 30% off (0.30 × 90 = $27 discount), the total is $90 − $27 = $63. Store X is cheaper.`);
};

export const STRAND4 = {
  '7.6G': [circleGraphsAndData],
  '7.12A': [comparePlots],
  '7.12B': [randomSampleInferences],
  '7.12C': [compareTwoPopulations],
  '7.13A': [salesAndIncomeTax],
  '7.13B': [personalBudgetComponents],
  '7.13C': [netWorthStatement],
  '7.13D': [familyBudgetEstimator],
  '7.13E': [simpleCompoundInterest],
  '7.13F': [monetaryIncentives],
};
