// Grade 2 Strand 4: Data Analysis and Personal Financial Literacy
// Standards: 2.5A, 2.5B, 2.10A, 2.10B, 2.10C, 2.10D, 2.11A, 2.11B, 2.11C, 2.11D, 2.11E, 2.11F

import { randInt } from '../../rng.ts';
import { fig, mc, one, txt, type Gen } from '../build.ts';

// ---------- 2.5A Value of collection of coins up to $1.00 ----------
export const coinsUpToOneDollar: Gen = (rng, d) => {
  const quarters = d === 1 ? randInt(rng, 1, 2) : randInt(rng, 1, 3);
  const dimes = randInt(rng, 1, 3);
  const nickels = randInt(rng, 1, 3);
  const pennies = randInt(rng, 1, 4);
  const total = quarters * 25 + dimes * 10 + nickels * 5 + pennies * 1;

  const coinsList: ('quarter' | 'dime' | 'nickel' | 'penny')[] = [
    ...new Array(quarters).fill('quarter' as const),
    ...new Array(dimes).fill('dime' as const),
    ...new Array(nickels).fill('nickel' as const),
    ...new Array(pennies).fill('penny' as const),
  ];

  return one('mc', [
    fig({ kind: 'coins', coins: coinsList }, `Collection of coins`),
    txt(`What is the total value of this collection of coins?`),
  ],
  mc(rng, `${total}¢`, [
    `${total + 10}¢`,
    `${total - 5}¢`,
    `${total + 1}¢`,
  ]),
  `${quarters} quarter${quarters > 1 ? 's' : ''} (${quarters * 25}¢) + ${dimes} dime${dimes > 1 ? 's' : ''} (${dimes * 10}¢) + ${nickels} nickel${nickels > 1 ? 's' : ''} (${nickels * 5}¢) + ${pennies} penn${pennies > 1 ? 'ies' : 'y'} (${pennies}¢) = ${total}¢.`);
};

// ---------- 2.5B Cent symbol, dollar sign, and decimal point ----------
export const coinValueSymbols: Gen = (rng, _d) => {
  const cents = randInt(rng, 15, 95);
  const dollarStr = `$0.${cents < 10 ? `0${cents}` : cents}`;

  return one('mc', [txt(`Which shows ${cents}¢ written using a dollar sign and decimal point?`)],
    mc(rng, dollarStr, [
      `$${cents}.00`,
      `$0.0${cents}`,
      `$${cents}`,
    ]),
    `${cents} cents is less than 1 dollar, so it is written as ${dollarStr}.`);
};

// ---------- 2.10A Bar length and picture count represent data ----------
export const barLengthPictureCount: Gen = (rng, _d) => {
  return one('mc', [txt('In a bar graph showing favorite sports, the bar for Soccer is twice as long as the bar for Tennis. What does this mean?')],
    mc(rng, 'Twice as many students chose Soccer as chose Tennis', [
      'Twice as many students chose Tennis as chose Soccer',
      'Soccer is played twice as long as Tennis',
      'Tennis has more votes than Soccer',
    ]),
    'The length of a bar corresponds directly to the number of data points for that category.');
};

// ---------- 2.10B Organize data using pictographs and bar graphs ----------
export const organizePictographsBar: Gen = (rng, _d) => {
  const cats = ['Apples', 'Bananas', 'Oranges', 'Grapes'];
  const values = [randInt(rng, 4, 10), randInt(rng, 3, 9), randInt(rng, 2, 8), randInt(rng, 1, 7)];
  const pickIdx = randInt(rng, 0, 3);

  return one('mc', [
    fig({ kind: 'barGraph', title: 'Fruit in the Kitchen', categories: cats, values, step: 2, axis: 'Count' }, 'Bar graph of fruit'),
    txt(`Based on the bar graph, how many ${cats[pickIdx]} are in the kitchen?`),
  ],
  mc(rng, `${values[pickIdx]}`, [
    `${values[pickIdx] + 2}`,
    `${values[pickIdx] - 2 > 0 ? values[pickIdx] - 2 : values[pickIdx] + 4}`,
    `${values[(pickIdx + 1) % 4]}`,
  ]),
  `Look at the height of the bar for ${cats[pickIdx]}: it reaches ${values[pickIdx]}.`);
};

// ---------- 2.10C Solve 1-step word problems from graphs ----------
export const wordProblemsFromGraphs: Gen = (rng, _d) => {
  const cats = ['Dogs', 'Cats', 'Birds', 'Fish'];
  const v1 = randInt(rng, 8, 14);
  const v2 = randInt(rng, 3, v1 - 2);
  const v3 = randInt(rng, 2, 6);
  const v4 = randInt(rng, 1, 5);

  return one('mc', [
    fig({ kind: 'barGraph', title: 'Pets at School', categories: cats, values: [v1, v2, v3, v4], step: 1, axis: 'Students' }, 'Bar graph of pets'),
    txt(`How many more students have Dogs than Cats?`),
  ],
  mc(rng, `${v1 - v2}`, [
    `${v1}`,
    `${v2}`,
    `${v1 + v2}`,
  ]),
  `${v1} students have Dogs and ${v2} have Cats. ${v1} − ${v2} = ${v1 - v2} more students.`);
};

// ---------- 2.10D Draw conclusions and make predictions from graphs ----------
export const conclusionsPredictionsGraph: Gen = (rng, _d) => {
  const cats = ['Art', 'Music', 'PE', 'Library'];
  const v1 = 12; // most
  const v2 = 7;
  const v3 = 9;
  const v4 = 4;

  return one('mc', [
    fig({ kind: 'barGraph', title: 'Favorite Special Class', categories: cats, values: [v1, v2, v3, v4], step: 2, axis: 'Votes' }, 'Bar graph of favorite special classes'),
    txt('Which class received the most votes from students?'),
  ],
  mc(rng, 'Art', [
    'Music',
    'PE',
    'Library',
  ]),
  'Art has the tallest bar with 12 votes, which is more than any other class.');
};

// ---------- 2.11A How savings accumulate over time ----------
export const savingsAccumulate: Gen = (rng, _d) => {
  const perWeek = randInt(rng, 2, 5);
  const weeks = randInt(rng, 3, 5);
  const total = perWeek * weeks;

  return one('mc', [txt(`Liam saves $${perWeek} in a jar each week. How much money will Liam have saved after ${weeks} weeks?`)],
    mc(rng, `$${total}`, [
      `$${total + perWeek}`,
      `$${total - perWeek}`,
      `$${perWeek + weeks}`,
    ]),
    `Add $${perWeek} each week for ${weeks} weeks: ${weeks} × $${perWeek} = $${total}.`);
};

// ---------- 2.11B Saving as an alternative to spending ----------
export const savingAlternativeToSpending: Gen = (rng, _d) => {
  return one('mc', [txt('When someone receives money from doing chores, they can spend it now or save it for later. What is a benefit of choosing to save?')],
    mc(rng, 'They will have money later to buy a larger item or handle an emergency', [
      'They will never have to buy anything ever again',
      'The money disappears immediately',
      'Stores will give them items for free',
    ]),
    'Saving preserves money so you can reach bigger goals in the future or handle unexpected needs.');
};

// ---------- 2.11C Distinguish between deposit and withdrawal ----------
export const depositWithdrawal: Gen = (rng, _d) => {
  const isDeposit = rng() < 0.5;

  return one('mc', [txt(isDeposit ? 'Mia puts $20 of birthday money into her bank savings account. What is this action called?' : 'Mia takes $10 out of her bank savings account to buy a book. What is this action called?')],
    mc(rng, isDeposit ? 'A deposit' : 'A withdrawal', [
      isDeposit ? 'A withdrawal' : 'A deposit',
      'A loan',
      'Interest',
    ]),
    isDeposit ? 'A deposit is adding money into a bank account.' : 'A withdrawal is taking money out of a bank account.');
};

// ---------- 2.11D Responsible vs irresponsible borrowing ----------
export const borrowingResponsible: Gen = (rng, _d) => {
  return one('mc', [txt('Which example shows responsible borrowing?')],
    mc(rng, 'Borrowing a book from a friend and returning it promptly in good condition', [
      'Borrowing money with no plan to pay it back',
      'Borrowing a toy and refusing to give it back',
      'Borrowing money and losing it',
    ]),
    'Responsible borrowing means having a clear plan to repay borrowed money or return borrowed items safely.');
};

// ---------- 2.11E Evaluate lending decisions ----------
export const evaluateLending: Gen = (rng, _d) => {
  return one('mc', [txt('Before lending a favorite game to a friend, what is an important question to ask?')],
    mc(rng, 'Will the friend take good care of the game and return it on time?', [
      'Can the friend throw the game away?',
      'Does the game cost zero dollars?',
      'Will the game magically duplicate?',
    ]),
    'When deciding whether to lend something, you should evaluate if the borrower is responsible and will return it safely.');
};

// ---------- 2.11F Producers, consumers, and cost to produce ----------
export const producersConsumersCost: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [txt('A baker bakes bread and sells it at a market. A shopper buys a loaf of bread to eat for lunch. Who is the consumer?')],
      mc(rng, 'The shopper, because they purchase and consume the bread', [
        'The baker, because they bake the bread',
        'The oven used to bake the bread',
        'Both are producers',
      ]),
      'Producers make goods or provide services. Consumers buy and use goods and services.');
  }

  // Cost to produce
  const c1 = randInt(rng, 1, 3);
  const c2 = randInt(rng, 2, 4);
  const c3 = randInt(rng, 1, 2);
  const total = c1 + c2 + c3;

  return one('mc', [txt(`A child makes lemonade to sell. The lemons cost $${c1}, the sugar costs $${c2}, and the cups cost $${c3}. What was the total cost to produce the lemonade?`)],
    mc(rng, `$${total}`, [
      `$${total + 2}`,
      `$${total - 1}`,
      `$${c1 + c2}`,
    ]),
    `Add the costs of all materials: $${c1} + $${c2} + $${c3} = $${total}.`);
};

export const STRAND4: Record<string, Gen[]> = {
  '2.5A': [coinsUpToOneDollar],
  '2.5B': [coinValueSymbols],
  '2.10A': [barLengthPictureCount],
  '2.10B': [organizePictographsBar],
  '2.10C': [wordProblemsFromGraphs],
  '2.10D': [conclusionsPredictionsGraph],
  '2.11A': [savingsAccumulate],
  '2.11B': [savingAlternativeToSpending],
  '2.11C': [depositWithdrawal],
  '2.11D': [borrowingResponsible],
  '2.11E': [evaluateLending],
  '2.11F': [producersConsumersCost],
};
