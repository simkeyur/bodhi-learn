// Grade 1 Strand 4: Data Analysis and Personal Financial Literacy
// Standards: 1.4A, 1.4B, 1.4C, 1.8A, 1.8B, 1.8C, 1.9A, 1.9B, 1.9C, 1.9D

import { pick, randInt } from '../../rng.ts';
import { fig, mc, one, txt, type Gen } from '../build.ts';

// ---------- 1.4A Identify U.S. coins by value and relationships ----------
export const identifyCoins: Gen = (rng, _d) => {
  const coins: { kind: 'penny' | 'nickel' | 'dime' | 'quarter'; name: string; val: number }[] = [
    { kind: 'penny', name: 'penny', val: 1 },
    { kind: 'nickel', name: 'nickel', val: 5 },
    { kind: 'dime', name: 'dime', val: 10 },
    { kind: 'quarter', name: 'quarter', val: 25 },
  ];
  const c = pick(rng, coins);

  return one('mc', [
    fig({ kind: 'coins', coins: [c.kind] }, `A U.S. ${c.name}`),
    txt(`What is the name and value of this coin?`),
  ],
  mc(rng, `${c.name} (worth ${c.val}¢)`, [
    ...coins.filter((x) => x.name !== c.name).map((x) => `${x.name} (worth ${x.val}¢)`),
  ]),
  `A ${c.name} is worth ${c.val}¢.`);
};

// ---------- 1.4B Write value with cent symbol ----------
export const writeCentSymbol: Gen = (rng, _d) => {
  const coins: { name: string; val: number }[] = [
    { name: 'penny', val: 1 },
    { name: 'nickel', val: 5 },
    { name: 'dime', val: 10 },
    { name: 'quarter', val: 25 },
  ];
  const c = pick(rng, coins);

  return one('mc', [txt(`Which shows the correct way to write the value of a ${c.name} with the cent symbol?`)],
    mc(rng, `${c.val}¢`, [
      `$${c.val}`,
      `${c.val + 5}¢`,
      `${c.val}c`,
    ]),
    `The cent symbol is ¢. A ${c.name} is worth ${c.val}¢.`);
};

// ---------- 1.4C Value of collection of coins ----------
export const collectionOfCoins: Gen = (rng, d) => {
  // Collection of like coins or simple mix:
  if (d === 1) {
    // Pennies only or nickels only or dimes only
    const kind = pick(rng, ['dime', 'nickel', 'penny'] as const);
    const count = randInt(rng, 2, 6);
    const valEach = kind === 'dime' ? 10 : kind === 'nickel' ? 5 : 1;
    const total = count * valEach;
    const coinsList = new Array(count).fill(kind);

    return one('mc', [
      fig({ kind: 'coins', coins: coinsList }, `${count} ${kind}s`),
      txt(`Count by ${valEach}s. What is the total value of these coins?`),
    ],
    mc(rng, `${total}¢`, [
      `${total + valEach}¢`,
      `${total - valEach > 0 ? total - valEach : total + valEach * 2}¢`,
      `${count}¢`,
    ]),
    `Count by ${valEach}s for each ${kind}: ${count} ${kind}s equals ${total}¢.`);
  }

  // Mixed dimes, nickels, pennies
  const dimes = randInt(rng, 1, 3);
  const nickels = randInt(rng, 1, 2);
  const pennies = randInt(rng, 1, 4);
  const total = dimes * 10 + nickels * 5 + pennies * 1;
  const coinsList: ('dime' | 'nickel' | 'penny')[] = [
    ...new Array(dimes).fill('dime' as const),
    ...new Array(nickels).fill('nickel' as const),
    ...new Array(pennies).fill('penny' as const),
  ];

  return one('mc', [
    fig({ kind: 'coins', coins: coinsList }, `Collection of coins`),
    txt(`What is the total value of these coins?`),
  ],
  mc(rng, `${total}¢`, [
    `${total + 5}¢`,
    `${total - 5}¢`,
    `${total + 1}¢`,
  ]),
  `${dimes} dime${dimes > 1 ? 's' : ''} = ${dimes * 10}¢, ${nickels} nickel${nickels > 1 ? 's' : ''} = ${nickels * 5}¢, and ${pennies} penn${pennies > 1 ? 'ies' : 'y'} = ${pennies}¢. Total = ${total}¢.`);
};

// ---------- 1.8A Organize data in up to 3 categories ----------
export const organizeDataCategories: Gen = (rng, _d) => {
  const cats = ['Dogs', 'Cats', 'Birds'];
  const tallies = [randInt(rng, 3, 7), randInt(rng, 2, 6), randInt(rng, 1, 5)];
  const pickCat = randInt(rng, 0, 2);

  return one('mc', [
    txt(`A class asked students about their pets:`),
    txt(`Dogs: ${tallies[0]} tallies | Cats: ${tallies[1]} tallies | Birds: ${tallies[2]} tallies`),
    txt(`How many students chose ${cats[pickCat]}?`),
  ],
  mc(rng, `${tallies[pickCat]}`, [
    `${tallies[pickCat] + 1}`,
    `${tallies[pickCat] - 1 > 0 ? tallies[pickCat] - 1 : tallies[pickCat] + 2}`,
    `${tallies[(pickCat + 1) % 3]}`,
  ]),
  `Count the tally marks for ${cats[pickCat]}: there are ${tallies[pickCat]}.`);
};

// ---------- 1.8B Create picture and bar-type graphs ----------
export const createPictureBarGraphs: Gen = (rng, _d) => {
  return one('mc', [txt('In a picture graph, each picture of an apple represents 1 apple. If 4 apples are shown for Ava, how many apples does Ava have?')],
    mc(rng, '4 apples', [
      '1 apple',
      '5 apples',
      '8 apples',
    ]),
    'Each picture stands for 1 apple. 4 pictures means 4 apples.');
};

// ---------- 1.8C Draw conclusions from picture and bar graphs ----------
export const conclusionsFromGraphs: Gen = (rng, _d) => {
  const cats = ['Red', 'Blue', 'Yellow'];
  const v1 = randInt(rng, 4, 8);
  const v2 = randInt(rng, 2, v1 - 1);
  const v3 = randInt(rng, 1, 5);

  return one('mc', [
    fig({ kind: 'barGraph', title: 'Favorite Colors', categories: cats, values: [v1, v2, v3], step: 1, axis: 'Students' }, 'Bar graph of favorite colors'),
    txt(`How many more students chose Red than Blue?`),
  ],
  mc(rng, `${v1 - v2}`, [
    `${v1}`,
    `${v2}`,
    `${v1 + v2}`,
  ]),
  `${v1} students chose Red and ${v2} students chose Blue. Subtract to compare: ${v1} − ${v2} = ${v1 - v2}.`);
};

// ---------- 1.9A Define money earned as income ----------
export const defineIncome: Gen = (rng, _d) => {
  return one('mc', [txt('What is the word for money that people earn by working at a job?')],
    mc(rng, 'Income', [
      'Gift',
      'Trophy',
      'Discount',
    ]),
    'Income is money earned from doing work or providing a service.');
};

// ---------- 1.9B Choices between wants and needs ----------
export const wantsAndNeeds: Gen = (rng, _d) => {
  const needs = ['warm winter coat', 'healthy food', 'clean drinking water', 'safe home'];
  const wants = ['video game', 'toy robot', 'stickers', 'skateboard'];
  const need = pick(rng, needs);
  const wrongWants = [wants[0], wants[1], wants[2]];

  return one('mc', [txt('Which item is a basic need for a person to live and be healthy?')],
    mc(rng, need, wrongWants),
    `A ${need} is a basic need required for survival and health. Toys and games are wants.`);
};

// ---------- 1.9C Distinguish between spending and saving ----------
export const spendingAndSaving: Gen = (rng, _d) => {
  return one('mc', [txt('Sam gets $5 for doing chores and puts the money into a piggy bank for later. What is Sam doing?')],
    mc(rng, 'Saving money', [
      'Spending money',
      'Borrowing money',
      'Losing money',
    ]),
    'Saving money means setting it aside to keep for the future instead of using it right away.');
};

// ---------- 1.9D Consider charitable giving ----------
export const charitableGiving: Gen = (rng, _d) => {
  return one('mc', [txt('Which action is an example of charitable giving?')],
    mc(rng, 'Donating canned food to a food pantry to help families in need', [
      'Buying a new video game at the store',
      'Keeping all allowance in a piggy bank',
      'Trading toys with a friend',
    ]),
    'Charitable giving means donating money, goods, or time to help others in need.');
};

export const STRAND4: Record<string, Gen[]> = {
  '1.4A': [identifyCoins],
  '1.4B': [writeCentSymbol],
  '1.4C': [collectionOfCoins],
  '1.8A': [organizeDataCategories],
  '1.8B': [createPictureBarGraphs],
  '1.8C': [conclusionsFromGraphs],
  '1.9A': [defineIncome],
  '1.9B': [wantsAndNeeds],
  '1.9C': [spendingAndSaving],
  '1.9D': [charitableGiving],
};
