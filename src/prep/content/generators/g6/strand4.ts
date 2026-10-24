// Grade 6 math, strand 4: data analysis and personal financial literacy.
// TEKS 6.12A, 6.12B, 6.12C, 6.12D, 6.13A, 6.13B, 6.14A, 6.14B, 6.14C, 6.14E, 6.14F, 6.14G, 6.14H

import { pick } from '../../rng.ts';
import { fig, mc, num, one, txt, type Gen } from '../build.ts';

// ---------- 6.12A represent numeric data graphically ----------
export const representNumericData: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`Which type of graph displays data using five key numbers: minimum, lower quartile, median, upper quartile, and maximum?`),
    ],
      mc(rng, 'Box plot', [
        { text: 'Dot plot', why: 'A dot plot shows individual data values as dots along a number line.' },
        'Histogram',
        'Stem-and-leaf plot',
      ]),
      `A box plot summarizes a dataset using the 5-number summary: minimum, Q1, median, Q3, and maximum.`);
  }

  if (d === 2) {
    const counts = [4, 7, 5, 2];
    const intervals = ['1–10', '11–20', '21–30', '31–40'];
    const targetInterval = intervals[1];
    const targetCount = counts[1];
    return one('mc', [
      txt(`The frequency table shows the test scores of students in Mr. Clark's class:\n• 1–10: 4 students\n• 11–20: 7 students\n• 21–30: 5 students\n• 31–40: 2 students\n\nIf this data is displayed in a histogram, what should be the height of the bar for the interval ${targetInterval}?`),
      fig({
        kind: 'histogram',
        intervals,
        frequencies: counts,
      }, `Histogram showing test scores with bars of heights 4, 7, 5, and 2`),
    ],
      mc(rng, `${targetCount}`, [
        { text: `${counts[0]}`, why: 'This is the height for the 1–10 interval.' },
        `${counts[2]}`,
        `${counts.reduce((a, b) => a + b, 0)}`,
      ]),
      `In a histogram, the height of each bar represents the frequency of that interval. For the interval ${targetInterval}, the frequency is ${targetCount}.`);
  }

  // d === 3: Five-number summary box plot
  const median = 20;
  return one('mc', [
    txt(`A student collected the following data values to make a box plot: 12, 14, 15, 18, 20, 22, 25, 28, 30. What value marks the line inside the box?`),
    fig({
      kind: 'boxPlot',
      min: 12,
      q1: 14.5,
      median: 20,
      q3: 26.5,
      max: 30,
    }, 'Box plot with minimum 12, Q1 14.5, median 20, Q3 26.5, and maximum 30'),
  ],
    mc(rng, `${median}`, [
      { text: `14.5`, why: 'This is the first quartile (Q1), the left edge of the box.' },
      `26.5`,
      `12`,
    ]),
    `The line inside the box of a box plot represents the median. In the ordered dataset, the middle value is ${median}.`);
};

// ---------- 6.12B describe center, spread, and shape ----------
export const describeShapeSpread: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`In a dot plot showing books read by students, the numbers of dots are:\n• 4 books: 2 dots\n• 5 books: 3 dots\n• 6 books: 8 dots\n• 7 books: 4 dots\n• 8 books: 1 dot\n\nWhat is the peak of the data?`),
    ],
      mc(rng, '6 books', [
        { text: '8 books', why: '8 is the maximum value, not the value with the most dots.' },
        '4 books',
        '5 books',
      ]),
      `The peak of a dot plot is the value that has the greatest number of dots (highest frequency). 6 books has 8 dots, so the peak is 6 books.`);
  }

  if (d === 2) {
    const shapeType = pick(rng, ['skewed_right', 'skewed_left', 'symmetrical']);
    if (shapeType === 'skewed_right') {
      return one('mc', [
        txt(`A data distribution has a cluster of values on the left side (lower numbers) and a long tail extending toward the higher numbers on the right. How is this distribution described?`),
      ],
        mc(rng, 'Skewed right', [
          { text: 'Skewed left', why: 'Skewed left has the long tail extending to the left.' },
          'Symmetrical',
          'Uniform',
        ]),
        `A distribution is described by the direction of its tail. Because the tail extends toward the right, the distribution is skewed right.`);
    } else if (shapeType === 'skewed_left') {
      return one('mc', [
        txt(`A data distribution has a cluster of values on the right side (higher numbers) and a long tail extending toward the lower numbers on the left. How is this distribution described?`),
      ],
        mc(rng, 'Skewed left', [
          { text: 'Skewed right', why: 'Skewed right has the long tail extending to the right.' },
          'Symmetrical',
          'Uniform',
        ]),
        `A distribution is described by the direction of its tail. Because the tail extends toward the left, the distribution is skewed left.`);
    } else {
      return one('mc', [
        txt(`A dot plot has a peak in the middle at 10, and the data values spread out evenly on both sides like a mirror image. How is the shape of this distribution described?`),
      ],
        mc(rng, 'Symmetrical', [
          { text: 'Skewed right', why: 'The data is evenly spread, not pulled to the right.' },
          'Skewed left',
          'Bimodal',
        ]),
        `When a data distribution is evenly balanced on both sides of the center, it is described as symmetrical.`);
    }
  }

  // d === 3: Gaps and clusters
  return one('mc', [
    txt(`A student records quiz scores: 60, 62, 63, 65, 88, 90, 92, 95. Which statement accurately describes the shape and features of this data?`),
  ],
    mc(rng, 'There is a cluster from 60 to 65, a cluster from 88 to 95, and a gap between 65 and 88', [
      { text: 'The data is symmetrical with a peak at 75', why: 'There are no data values near 75.' },
      'There is a single cluster from 60 to 95 with no gaps',
      'The data has a peak at 60 and no other features',
    ]),
    `A cluster is a group of values close together, and a gap is an empty interval between groups. Here, scores group at 60–65 and 88–95, with an empty gap between 65 and 88.`);
};

// ---------- 6.12C summarize numeric data: mean, median, range, IQR ----------
export const summarizeNumericData: Gen = (rng, d) => {
  if (d === 1) {
    const scores = [80, 85, 90, 85, 90];
    const sum = scores.reduce((a, b) => a + b, 0);
    const mean = sum / scores.length;
    return one('mc', [
      txt(`Javier earned the following scores on five math quizzes: 80, 85, 90, 85, 90. What is the mean score?`),
    ],
      mc(rng, `${mean}`, [
        { text: `${scores[2] - scores[0]}`, why: 'Calculated the range (90 − 80 = 10) instead of the mean.' },
        `${sum}`,
        `${mean - 2}`,
      ]),
      `Add the scores: ${scores.join(' + ')} = ${sum}. Divide by 5: ${sum} ÷ 5 = ${mean}.`);
  }

  if (d === 2) {
    const sorted = [12, 15, 18, 22, 26, 30];
    const unsorted = [18, 12, 26, 15, 30, 22];
    const median = (sorted[2] + sorted[3]) / 2;
    return one('mc', [
      txt(`The number of hours worked by six volunteers last week were: ${unsorted.join(', ')}. What is the median number of hours worked?`),
    ],
      mc(rng, `${median} hours`, [
        { text: `${sorted[2]} hours`, why: 'Selected the lower middle value without averaging the two middle numbers.' },
        `${sorted[3]} hours`,
        `${sorted[5] - sorted[0]} hours`,
      ]),
      `First order the data: ${sorted.join(', ')}. The middle two numbers are ${sorted[2]} and ${sorted[3]}. Find their average: (${sorted[2]} + ${sorted[3]}) ÷ 2 = ${median} hours.`);
  }

  // d === 3: Interquartile range (IQR) from box plot
  const q1 = pick(rng, [14, 16, 18]);
  const iqr = pick(rng, [10, 12, 14]);
  const q3 = q1 + iqr;
  const minVal = q1 - 6;
  const maxVal = q3 + 8;
  const median = q1 + Math.round(iqr / 2);
  return one('mc', [
    txt(`The box plot summarizes the weights of packages in pounds. What is the interquartile range (IQR) of the weights?`),
    fig({
      kind: 'boxPlot',
      min: minVal,
      q1,
      median,
      q3,
      max: maxVal,
    }, `Box plot with min ${minVal}, Q1 ${q1}, median ${median}, Q3 ${q3}, and max ${maxVal}`),
  ],
    mc(rng, `${iqr} pounds`, [
      { text: `${maxVal - minVal} pounds`, why: 'Calculated the full range instead of the interquartile range.' },
      `${q3} pounds`,
      `${median - q1} pounds`,
    ]),
    `The interquartile range (IQR) is Q3 − Q1. From the box plot, Q3 = ${q3} and Q1 = ${q1}. IQR = ${q3} − ${q1} = ${iqr} pounds.`);
};

// ---------- 6.12D summarize categorical data: mode, relative frequency, percent bar graph ----------
export const summarizeCategoricalData: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`Students were asked to choose their favorite school lunch: pizza, taco, burger, pizza, salad, pizza, taco, burger, pizza, taco. What is the mode of this categorical data?`),
    ],
      mc(rng, 'Pizza', [
        { text: 'Taco', why: 'Taco was chosen 3 times, which is fewer than Pizza.' },
        'Burger',
        'Salad',
      ]),
      `The mode is the category that occurs most frequently. Pizza was chosen 4 times, taco 3 times, burger 2 times, and salad 1 time. The mode is Pizza.`);
  }

  if (d === 2) {
    const countA = 12;
    const countB = 16;
    const countC = 8;
    const countD = 4;
    const total = countA + countB + countC + countD;
    const pctB = Math.round((countB / total) * 100);
    return one('mc', [
      txt(`A survey asked ${total} middle school students to pick their favorite elective:\n• Art: ${countA}\n• Band: ${countB}\n• Choir: ${countC}\n• Theater: ${countD}\n\nWhat percentage of the students chose Band?`),
    ],
      mc(rng, `${pctB}%`, [
        { text: `${countB}%`, why: 'Used the raw count as the percentage without dividing by total students.' },
        `30%`,
        `20%`,
      ]),
      `Divide the count for Band by the total number of students: ${countB} ÷ ${total} = 0.40 = ${pctB}%.`);
  }

  // d === 3: Percent bar graph interpretation
  return one('mc', [
    txt(`In a percent bar graph representing the pets owned by 200 families:\n• Dogs: 0% to 45%\n• Cats: 45% to 75%\n• Fish: 75% to 90%\n• Birds: 90% to 100%\n\nHow many of the families own cats?`),
  ],
    mc(rng, '60 families', [
      { text: '75 families', why: 'Used the right endpoint of the bar (75%) instead of the section width (30%).' },
      '30 families',
      '90 families',
    ]),
    `The section for Cats spans from 45% to 75%, which is 75% − 45% = 30%. Multiply 30% by 200 families: 0.30 × 200 = 60 families.`);
};

// ---------- 6.13A interpret data in dot plots, stems, histograms, box plots ----------
export const interpretDataDisplays: Gen = (rng, d) => {
  if (d === 1) {
    const q1 = 15;
    const median = 22;
    const q3 = 30;
    return one('mc', [
      txt(`A box plot shows the test scores of a grade 6 class with a minimum of 10, Q1 of ${q1}, median of ${median}, Q3 of ${q3}, and maximum of 40. What percent of the students scored ${median} or higher?`),
      fig({
        kind: 'boxPlot',
        min: 10,
        q1,
        median,
        q3,
        max: 40,
      }, `Box plot with min 10, Q1 ${q1}, median ${median}, Q3 ${q3}, and max 40`),
    ],
      mc(rng, '50%', [
        { text: '25%', why: '25% is the proportion above Q3, not above the median.' },
        '75%',
        `${median}%`,
      ]),
      `The median splits the dataset into two equal halves. Exactly 50% of the data values lie at or above the median.`);
  }

  if (d === 2) {
    const intervals = ['0–9', '10–19', '20–29', '30–39'];
    const counts = [3, 8, 12, 7];
    const targetCount = counts[2] + counts[3];
    return one('mc', [
      txt(`The histogram shows the number of minutes students spent reading:\n• 0–9 minutes: 3 students\n• 10–19 minutes: 8 students\n• 20–29 minutes: 12 students\n• 30–39 minutes: 7 students\n\nHow many students read for at least 20 minutes?`),
      fig({
        kind: 'histogram',
        intervals,
        frequencies: counts,
      }, 'Histogram showing reading times with frequencies 3, 8, 12, and 7'),
    ],
      mc(rng, `${targetCount} students`, [
        { text: `${counts[2]} students`, why: 'Included only the 20–29 interval and missed the 30–39 interval.' },
        `${counts[1] + counts[2]} students`,
        `${counts.reduce((a, b) => a + b, 0)} students`,
      ]),
      `'At least 20 minutes' includes intervals 20–29 and 30–39: ${counts[2]} + ${counts[3]} = ${targetCount} students.`);
  }

  // d === 3: Stem-and-leaf plot interpretation
  return one('mc', [
    txt(`A stem-and-leaf plot shows the heights of seedlings in centimeters:\n\n1 | 2 4 5\n2 | 0 1 3 8\n3 | 2 5\n\nKey: 2 | 1 means 21 cm\n\nWhat is the range of the seedling heights?`),
  ],
    mc(rng, '23 cm', [
      { text: '35 cm', why: 'Selected the maximum value instead of finding the range.' },
      '12 cm',
      '21 cm',
    ]),
    `The maximum value is 35 cm (stem 3, leaf 5) and the minimum value is 12 cm (stem 1, leaf 2). The range is 35 − 12 = 23 cm.`);
};

// ---------- 6.13B distinguish situations with and without variability ----------
export const distinguishVariability: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`Which question is a statistical question because it anticipates variability in the answers?`),
    ],
      mc(rng, 'How many minutes do sixth graders spend doing homework each night?', [
        { text: 'How many days are in the month of July?', why: 'July always has 31 days; there is only one fixed answer with no variability.' },
        'What is the capital of Texas?',
        'How tall is the teacher, Mr. Alvarez?',
      ]),
      `A statistical question expects a variety of different answers. Sixth graders spend different amounts of time on homework, so that question has variability.`);
  }

  if (d === 2) {
    return one('mc', [
      txt(`Which question does NOT have variability and is NOT a statistical question?`),
    ],
      mc(rng, 'How many centimeters are in one meter?', [
        { text: 'How many pets do students in the class have?', why: 'Students have different numbers of pets, so this has variability.' },
        'What are the shoe sizes of the players on the basketball team?',
        'How many books did each teacher read this summer?',
      ]),
      `There are always exactly 100 centimeters in 1 meter. Because there is only one single true answer with no variation, it is not a statistical question.`);
  }

  // d === 3: Scenario reasoning
  return one('mc', [
    txt(`Maya wants to collect data that exhibits variability. Which scenario will provide data with variability?`),
  ],
    mc(rng, 'Asking 30 students how many miles they live from the school', [
      { text: 'Asking 30 sixth graders what year they are in school today', why: 'All sixth graders are in grade 6; every answer is identical.' },
      'Measuring the length of 30 brand-new 12-inch rulers from the same box',
      'Recording the number of hours in each day for one month',
    ]),
    `Students live at various distances from the school (e.g. 0.5 miles, 2 miles, 7 miles), so this scenario generates data with variability.`);
};

// ---------- 6.14A checking account features and debit cards ----------
export const checkingFeatures: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`Which is a primary feature of a checking account?`),
    ],
      mc(rng, 'It provides quick and frequent access to your money through checks, debit cards, and online transfers', [
        { text: 'It requires you to lock your money away for at least 10 years without touching it', why: 'Checking accounts are designed for everyday spending.' },
        'It pays the highest interest rate of any bank account',
        'It guarantees that the bank will double your deposits every year',
      ]),
      `A checking account is designed for everyday transactions: writing checks, paying with a debit card, and withdrawing cash from ATMs.`);
  }

  if (d === 2) {
    return one('mc', [
      txt(`What happens when a person uses a debit card to spend more money than the balance available in their checking account?`),
    ],
      mc(rng, 'The transaction may be declined or the bank may charge an overdraft fee', [
        { text: 'The bank gifts the person free money to cover the difference', why: 'Banks do not give free gifts to cover shortages.' },
        'The purchase is automatically converted into a 30-year student loan',
        'The card balance is reset to zero with no consequences',
      ]),
      `Spending more money than available in a checking account leads to an overdraft, which typically incurs an overdraft fee from the financial institution.`);
  }

  // d === 3: Comparing account options
  return one('mc', [
    txt(`Elena is comparing two checking accounts:\n• Bank A: $0 monthly fee if balance stays above $100; otherwise $10 fee\n• Bank B: $5 flat monthly fee with no minimum balance required\n\nIf Elena expects her balance to always stay between $250 and $500, which bank account is more cost-effective for her?`),
  ],
    mc(rng, 'Bank A, because her balance is above $100 so she pays $0 in fees', [
      { text: 'Bank B, because a $5 fee is always cheaper than $0', why: '$0 fee at Bank A is cheaper than $5 at Bank B.' },
      'Both accounts cost the exact same amount each month',
      'Bank A, because Bank A charges an overdraft fee every month',
    ]),
    `Since Elena maintains a balance above $100, Bank A charges no monthly fee ($0), saving her $5 each month compared to Bank B.`);
};

// ---------- 6.14B debit cards vs credit cards ----------
export const debitVsCredit: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`What is the key difference between making a purchase with a debit card and making a purchase with a credit card?`),
    ],
      mc(rng, 'A debit card deducts money directly from a checking account, while a credit card borrows money that must be repaid', [
        { text: 'A credit card deducts cash directly from your checking account immediately', why: 'That describes a debit card, not a credit card.' },
        'A debit card allows you to borrow money from the bank and pay it back over time',
        'Debit cards charge monthly interest on every purchase',
      ]),
      `A debit card uses your own money directly from your checking account. A credit card is a short-term loan that must be paid back, potentially with interest if not paid in full.`);
  }

  if (d === 2) {
    return one('mc', [
      txt(`Marcus buys a bicycle for $300 using a credit card. If he does not pay the entire $300 balance by the monthly due date, what will happen?`),
    ],
      mc(rng, 'He will be charged interest on the unpaid balance, increasing the total cost of the bicycle', [
        { text: 'The store will immediately take the bicycle back', why: 'The store was paid by the credit card company; Marcus owes the credit card company.' },
        'The remaining balance will be automatically forgiven',
        'The bank will take money directly out of his friend’s bank account',
      ]),
      `Carrying a balance on a credit card incurs interest charges, which increases the total amount paid for the purchased item.`);
  }

  // d === 3: Major advantage of debit card
  return one('mc', [
    txt(`Which statement describes a major advantage of using a debit card instead of a credit card?`),
  ],
    mc(rng, 'It prevents accumulating debt because purchases are limited to the money available in the checking account', [
      { text: 'It allows the user to borrow large amounts of money for several years without paying it back', why: 'Debit cards do not allow borrowing money.' },
      'It never requires a PIN or password for protection',
      'It automatically pays for your college tuition',
    ]),
    `Because debit card purchases withdraw money directly from the checking account, the cardholder cannot spend money they do not have, avoiding interest and debt.`);
};

// ---------- 6.14C balance a check register ----------
export const balanceCheckRegister: Gen = (rng, d) => {
  if (d === 1) {
    const start = pick(rng, [250, 300, 420, 500]);
    const deposit = pick(rng, [50, 75, 100, 120]);
    const newBal = start + deposit;
    return one('mc', [
      txt(`Liam had a beginning balance of $${start} in his check register. He deposited a birthday check of $${deposit}. What is his new balance?`),
    ],
      mc(rng, `$${newBal}`, [
        { text: `$${start - deposit}`, why: 'Subtracted the deposit instead of adding it.' },
        `$${start}`,
        `$${newBal + 20}`,
      ]),
      `A deposit adds money to an account. Add the deposit: $${start} + $${deposit} = $${newBal}.`);
  }

  if (d === 2) {
    const start = pick(rng, [400, 450, 500, 600]);
    const withdrawal = pick(rng, [45, 60, 75, 80]);
    const deposit = pick(rng, [120, 150, 175, 200]);
    const newBal = start - withdrawal + deposit;
    return one('mc', [
      txt(`Sofia has a balance of $${start} in her check register. She writes a check for groceries for $${withdrawal} and deposits a paycheck of $${deposit}. What is Sofia's new balance?`),
    ],
      mc(rng, `$${newBal}`, [
        { text: `$${start + withdrawal + deposit}`, why: 'Added the grocery check instead of subtracting it.' },
        `$${start - withdrawal - deposit}`,
        `$${start + deposit}`,
      ]),
      `Start with $${start}. Subtract the withdrawal: $${start} − $${withdrawal} = $${start - withdrawal}. Add the deposit: $${start - withdrawal} + $${deposit} = $${newBal}.`);
  }

  // d === 3: Multi-step register
  const start = pick(rng, [550, 620, 700]);
  const check1 = 85;
  const deposit1 = 150;
  const debit1 = 45;
  const finalBal = start - check1 + deposit1 - debit1;
  return one('mc', [
    txt(`Mr. Patel's check register shows:\n• Beginning balance: $${start}\n• Check #101 (utilities): $${check1}\n• Paycheck deposit: $${deposit1}\n• Debit card (groceries): $${debit1}\n\nWhat is Mr. Patel's balance after these three transactions?`),
  ],
    mc(rng, `$${finalBal}`, [
      { text: `$${start - check1 - deposit1 - debit1}`, why: 'Subtracted the paycheck deposit instead of adding it.' },
      `$${start + check1 + deposit1 - debit1}`,
      `$${finalBal + 50}`,
    ]),
    `Compute step by step: $${start} − $${check1} = $${start - check1}. Add deposit: $${start - check1} + $${deposit1} = $${start - check1 + deposit1}. Subtract groceries: $${start - check1 + deposit1} − $${debit1} = $${finalBal}.`);
};

// ---------- 6.14E credit report information and retention ----------
export const creditReportInfo: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`Which information is typically included in a person's credit report?`),
    ],
      mc(rng, 'A history of loan payments and credit card accounts', [
        { text: 'A list of high school and college grades', why: 'Academic grades are never included in a credit report.' },
        'Medical diagnosis records',
        'A list of items purchased at the grocery store',
      ]),
      `A credit report contains financial records including credit card accounts, loans, payment history (on time or late), and balances owed.`);
  }

  if (d === 2) {
    return one('mc', [
      txt(`For how long does negative financial information, such as late payments or collection accounts, generally remain on a person's credit report?`),
    ],
      mc(rng, '7 years', [
        { text: '1 month', why: 'Negative marks stay much longer than one month.' },
        '1 year',
        'Forever (the person’s entire lifetime)',
      ]),
      `Most negative marks, including late payments and accounts sent to collections, remain on a credit report for up to 7 years before being removed.`);
  }

  // d === 3: Items not on a credit report
  return one('mc', [
    txt(`Which factor is NOT found in a credit report?`),
  ],
    mc(rng, 'Checking account balance and cash savings', [
      { text: 'Payment history on an auto loan', why: 'Auto loan payments are tracked on credit reports.' },
      'Outstanding balance on credit cards',
      'Records of bankruptcy',
    ]),
    `Credit reports track debt and borrowing history. They do not report everyday checking balances, savings balances, or debit card purchases.`);
};

// ---------- 6.14F value of credit reports to borrowers and lenders ----------
export const creditReportValue: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`Why do banks and lenders check an applicant's credit report before approving a loan?`),
    ],
      mc(rng, 'To assess the risk of whether the borrower will pay back the borrowed money on time', [
        { text: 'To find out what movies the applicant likes to watch', why: 'Credit reports contain no entertainment preferences.' },
        'To determine how many friends the applicant has',
        'To automatically cancel all of the applicant’s existing debts',
      ]),
      `Lenders use credit reports to evaluate creditworthiness—the likelihood that an applicant will repay loan obligations on time.`);
  }

  if (d === 2) {
    return one('mc', [
      txt(`What is a primary financial benefit to a borrower who has a high credit score and a strong credit report?`),
    ],
      mc(rng, 'Qualifying for loans with lower interest rates, saving money over time', [
        { text: 'Being exempt from paying state sales taxes on all purchases', why: 'Credit scores have no effect on sales tax laws.' },
        'Never having to pay back any money borrowed in the future',
        'Receiving free gasoline for life',
      ]),
      `Borrowers with strong credit reports represent lower risk to lenders, earning lower interest rates that can save thousands of dollars on loans.`);
  }

  // d === 3: Comparison of loan offers
  return one('mc', [
    txt(`Two borrowers apply for a $20,000 car loan:\n• Borrower X has an excellent credit report and qualifies for a 4% interest rate\n• Borrower Y has a poor credit report and qualifies for a 12% interest rate\n\nWhich statement best explains why Borrower X pays less total money for the loan?`),
  ],
    mc(rng, 'Borrower X is charged a lower interest rate because the lender views them as a lower risk', [
      { text: 'Borrower X only has to pay back $10,000 of the original loan', why: 'Both borrowers borrowed $20,000 and must repay the principal.' },
      'Borrower Y receives free bonus cash from the lender',
      'Borrower X is charged a penalty fee for having good credit',
    ]),
    `Because Borrower X demonstrated responsible credit behavior, the lender charges a lower interest rate, resulting in significantly lower total interest payments.`);
};

// ---------- 6.14G methods to pay for college ----------
export const payingForCollege: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`Which method of paying for college does NOT need to be repaid?`),
    ],
      mc(rng, 'Scholarship', [
        { text: 'Student loan', why: 'A student loan is borrowed money that must be repaid with interest.' },
        'Credit card advance',
        'Bank personal loan',
      ]),
      `Scholarships and grants are forms of gift aid awarded for merit or financial need that do not need to be repaid.`);
  }

  if (d === 2) {
    return one('mc', [
      txt(`What is a work-study program for college students?`),
    ],
      mc(rng, 'A program where a student works a part-time job on or near campus to earn money for educational expenses', [
        { text: 'A program where students are banned from studying while working', why: 'Work-study helps students earn money while studying.' },
        'A bank loan that charges double interest if grades drop',
        'A program that requires students to leave college and work full-time in an office',
      ]),
      `Federal work-study provides part-time jobs for undergraduate and graduate students with financial need, allowing them to earn money to help pay education expenses.`);
  }

  // d === 3: College budgeting calculation
  const tuition = 12000;
  const scholarship = 4000;
  const grant = 3000;
  const savings = 2000;
  const loanNeeded = tuition - scholarship - grant - savings;
  return one('mc', [
    txt(`David's college tuition for one year is $${num(tuition)}. He receives a $${num(scholarship)} academic scholarship and a $${num(grant)} state grant. His family can contribute $${num(savings)} from savings. How much will David need to borrow in student loans to cover the remaining tuition?`),
  ],
    mc(rng, `$${num(loanNeeded)}`, [
      { text: `$${num(tuition - scholarship)}`, why: 'Subtracted only the scholarship and forgot the grant and savings.' },
      `$${num(tuition - grant)}`,
      `$${num(loanNeeded + 1000)}`,
    ]),
    `Total aid and savings: $${num(scholarship)} + $${num(grant)} + $${num(savings)} = $${num(scholarship + grant + savings)}. Subtract from tuition: $${num(tuition)} − $${num(scholarship + grant + savings)} = $${num(loanNeeded)}.`);
};

// ---------- 6.14H compare salaries by education level ----------
export const salariesAndLifetimeEarnings: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`In general, what is the relationship between the level of education or specialized training a person completes and their expected annual earnings?`),
    ],
      mc(rng, 'Higher levels of education and training generally lead to higher annual salaries', [
        { text: 'Higher education guarantees that a person will never earn any money', why: 'Higher education is correlated with higher earnings.' },
        'Education level has zero influence on career opportunities or salaries',
        'All careers pay the exact same annual salary regardless of training',
      ]),
      `On average, completing higher levels of education or specialized vocational training opens up opportunities for higher-paying careers.`);
  }

  if (d === 2) {
    const hsSalary = 38000;
    const bachelorSalary = 68000;
    const diff = bachelorSalary - hsSalary;
    return one('mc', [
      txt(`The average annual salary for a high school graduate is $${num(hsSalary)}. The average annual salary for a person with a bachelor's degree is $${num(bachelorSalary)}. How much more does the person with a bachelor's degree earn each year?`),
    ],
      mc(rng, `$${num(diff)}`, [
        { text: `$${num(diff - 5000)}`, why: 'Subtracted incorrectly.' },
        `$${num(hsSalary)}`,
        `$${num(bachelorSalary + hsSalary)}`,
      ]),
      `Subtract the two annual salaries: $${num(bachelorSalary)} − $${num(hsSalary)} = $${num(diff)} per year.`);
  }

  // d === 3: Lifetime earnings over 30 years
  const years = 30;
  const annualDiff = 25000;
  const lifetimeDiff = annualDiff * years;
  return one('mc', [
    txt(`A career requiring an associate degree pays $55,000 per year, while a career requiring a high school diploma pays $30,000 per year. Over a ${years}-year career, how much more money will the person with the associate degree earn in total?`),
  ],
    mc(rng, `$${num(lifetimeDiff)}`, [
      { text: `$${num(annualDiff)}`, why: 'Found the difference for one year only, not for 30 years.' },
      `$${num(55000 * years)}`,
      `$${num(lifetimeDiff - 50000)}`,
    ]),
    `Annual difference: $55,000 − $30,000 = $25,000. Multiply by ${years} years: $25,000 × ${years} = $${num(lifetimeDiff)}.`);
};

export const STRAND4 = {
  '6.12A': [representNumericData],
  '6.12B': [describeShapeSpread],
  '6.12C': [summarizeNumericData],
  '6.12D': [summarizeCategoricalData],
  '6.13A': [interpretDataDisplays],
  '6.13B': [distinguishVariability],
  '6.14A': [checkingFeatures],
  '6.14B': [debitVsCredit],
  '6.14C': [balanceCheckRegister],
  '6.14E': [creditReportInfo],
  '6.14F': [creditReportValue],
  '6.14G': [payingForCollege],
  '6.14H': [salariesAndLifetimeEarnings],
};
