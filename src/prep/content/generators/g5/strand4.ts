// Grade 5 math, strand 4: data analysis and personal financial literacy.

import { pick, randInt, sample, shuffle, type Rng } from '../../rng.ts';
import { blank, fig, inline, mc, money, multi, numberOptions, one, table, txt, type Gen } from '../build.ts';
import type { Figure } from '../../types.ts';

const SURVEYS: { title: string; axis: string; categories: string[] }[] = [
  { title: 'Favorite Sport', axis: 'Number of Students', categories: ['Soccer', 'Football', 'Basketball', 'Baseball'] },
  { title: 'Favorite Fruit', axis: 'Number of Students', categories: ['Apple', 'Banana', 'Grapes', 'Mango'] },
  { title: 'Books Read', axis: 'Number of Books', categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
  { title: 'Pets at Home', axis: 'Number of Students', categories: ['Dog', 'Cat', 'Fish', 'Bird'] },
];

function survey(rng: Rng, step: number) {
  const s = pick(rng, SURVEYS);
  // Distinct values so "most" and "least" have one answer
  const values = sample(rng, Array.from({ length: 10 }, (_, i) => (i + 1) * step), s.categories.length);
  return { ...s, values };
}

const bar = (s: { title: string; axis: string; categories: string[] }, values: number[], step: number): Figure =>
  ({ kind: 'barGraph', title: s.title, categories: s.categories, values, step, axis: s.axis });
const barAlt = (cats: string[], values: number[]) => `Bar graph: ${cats.map((c, i) => `${c} ${values[i]}`).join(', ')}.`;

// ---------- 5.9A show data in graphs ----------
export const representData: Gen = (rng, d) => {
  if (d === 3) {
    // Measurements in fractions on a dot plot
    const labels = ['1/4', '1/2', '3/4', '1'];
    const counts = labels.map(() => randInt(rng, 0, 4));
    if (counts.every((c) => c === counts[0])) counts[0] += 1;
    const data = shuffle(rng, labels.flatMap((l, i) => Array(counts[i]).fill(l.includes('/') ? `{${l}}` : l)));
    const plot = (c: number[]): Figure => ({ kind: 'dotPlot', title: 'Lengths of Pencils (inches)', labels, counts: c, axis: 'Length beyond 5 inches' });
    const alt = (c: number[]) => `Dot plot: ${labels.map((l, i) => `${l}: ${c[i]} dot${c[i] === 1 ? '' : 's'}`).join(', ')}.`;
    const rev = [...counts].reverse();
    const plus = counts.map((c, i) => (i === 0 ? c + 1 : c));
    const shifted = [counts[3], counts[0], counts[1], counts[2]];
    const lastPlus = counts.map((c, i) => (i === 3 ? c + 1 : c));
    const big = counts.indexOf(Math.max(...counts));
    const moved = counts.map((c, i) => (i === big ? c - 1 : i === (big + 1) % 4 ? c + 1 : c));
    const variants = [rev, plus, shifted, lastPlus, moved].map((c) => ({ figure: plot(c), alt: alt(c) }));
    return one('mc', [txt(`A class measured how far past 5 inches their pencils were, in inches: ${data.join(', ')}. Which dot plot shows the data?`)],
      mc(rng, { figure: plot(counts), alt: alt(counts) }, variants),
      `Count each length: ${labels.map((l, i) => `${counts[i]} at ${l}`).join(', ')}. Put one dot above the number for each.`);
  }
  const step = d === 1 ? 1 : 2;
  const s = survey(rng, step);
  const swap = [...s.values]; [swap[0], swap[1]] = [swap[1], swap[0]];
  const off = s.values.map((v, i) => (i === s.values.length - 1 ? v + step : v));
  const sorted = [...s.values].sort((a, b) => b - a);
  const firstUp = s.values.map((v, i) => (i === 0 ? v + step : v));
  const lastTwo = [...s.values]; [lastTwo[lastTwo.length - 1], lastTwo[lastTwo.length - 2]] = [lastTwo[lastTwo.length - 2], lastTwo[lastTwo.length - 1]];
  return one('mc', [txt(`The frequency table shows the results of a survey. Which bar graph represents the data?`),
    table([s.title, 'Frequency'], s.categories.map((c, i) => [c, s.values[i]]))],
  mc(rng, { figure: bar(s, s.values, step), alt: barAlt(s.categories, s.values) }, [
    { figure: bar(s, swap, step), alt: barAlt(s.categories, swap), why: `Check ${s.categories[0]} and ${s.categories[1]}: their bars are swapped.` },
    { figure: bar(s, off, step), alt: barAlt(s.categories, off) },
    { figure: bar(s, sorted, step), alt: barAlt(s.categories, sorted) },
    { figure: bar(s, firstUp, step), alt: barAlt(s.categories, firstUp) },
    { figure: bar(s, lastTwo, step), alt: barAlt(s.categories, lastTwo) },
  ]),
  `Each bar's height must match its frequency: ${s.categories.map((c, i) => `${c} ${s.values[i]}`).join(', ')}.`);
};

// ---------- 5.9B scatterplots ----------
export const scatterplot: Gen = (rng) => {
  const xs = sample(rng, [1, 2, 3, 4, 5, 6, 7, 8], 4).sort((a, b) => a - b);
  const pts = xs.map((x) => ({ x, y: randInt(rng, 1, 9) }));
  const grid = (ps: { x: number; y: number }[]): Figure => ({ kind: 'coordGrid', max: 10, points: ps });
  const alt = (ps: { x: number; y: number }[]) => `Scatterplot with points ${ps.map((p) => `(${p.x}, ${p.y})`).join(', ')}.`;
  const swapped = pts.map((p) => ({ x: p.y, y: p.x }));
  const oneOff = pts.map((p, i) => (i === 1 ? { x: p.x, y: p.y === 9 ? 8 : p.y + 1 } : p));
  const shiftX = pts.map((p) => ({ x: Math.min(10, p.x + 1), y: p.y }));
  return one('mc', [txt('The table shows hours practiced and goals scored for four players. Which scatterplot shows the data?'),
    table(['Hours practiced', ...xs.map(String)], [['Goals scored', ...pts.map((p) => String(p.y))]])],
  mc(rng, { figure: grid(pts), alt: alt(pts) }, [
    { figure: grid(swapped), alt: alt(swapped), why: 'Hours practiced go on the x-axis (across) and goals on the y-axis (up).' },
    { figure: grid(oneOff), alt: alt(oneOff) }, { figure: grid(shiftX), alt: alt(shiftX) },
  ]),
  `Each player is one point (hours, goals): ${pts.map((p) => `(${p.x}, ${p.y})`).join(', ')}.`);
};

// ---------- 5.9C solve problems with data ----------
export const solveWithData: Gen = (rng, d) => {
  const step = d === 1 ? 1 : 2;
  const s = survey(rng, step);
  const graph = fig(bar(s, s.values, step), barAlt(s.categories, s.values));
  const [i, j] = sample(rng, s.categories.map((_, k) => k), 2);
  const [hi, lo] = s.values[i] > s.values[j] ? [i, j] : [j, i];
  const diff = s.values[hi] - s.values[lo];
  if (d === 1) {
    return one('mc', [txt(`The bar graph shows ${s.title.toLowerCase()} data. How many more for ${s.categories[hi]} than for ${s.categories[lo]}?`), graph],
      mc(rng, diff, [s.values[hi] + s.values[lo], s.values[hi], diff + step, Math.abs(diff - step) || diff + 2 * step]),
      `${s.categories[hi]} has ${s.values[hi]} and ${s.categories[lo]} has ${s.values[lo]}. ${s.values[hi]} − ${s.values[lo]} = ${diff}.`);
  }
  const total = s.values.reduce((a, b) => a + b, 0);
  if (d === 2) {
    const k = randInt(rng, 0, s.categories.length - 1);
    return one('mc', [txt(`The bar graph shows ${s.title.toLowerCase()} data. How many in all are **not** ${s.categories[k]}?`), graph],
      mc(rng, total - s.values[k], [total, s.values[k], total - s.values[k] + step, total + s.values[k]]),
      `Total: ${s.values.join(' + ')} = ${total}. Take away ${s.categories[k]}: ${total} − ${s.values[k]} = ${total - s.values[k]}.`);
  }
  // Two steps in one sentence with two drop-downs (SST math has no two-part questions)
  return one('inline', [txt(`The bar graph shows ${s.title.toLowerCase()} data. Complete the sentence.`), graph],
    inline(['The total for all the categories is ', { blank: 0 }, ', and ', s.categories[hi], ' has ', { blank: 1 }, ' more than ', s.categories[lo], '.'], [
      blank(numberOptions(total, [total - s.values[0], total + step, total - step, Math.max(...s.values)]), String(total)),
      blank(numberOptions(diff, [s.values[hi] + s.values[lo], diff + step, diff - step, s.values[lo]]), String(diff)),
    ]),
    `Add every bar: ${s.values.join(' + ')} = ${total}. Then ${s.values[hi]} − ${s.values[lo]} = ${diff}.`);
};

// ---------- 5.10A kinds of taxes ----------
const TAXES: { name: string; def: string; example: string }[] = [
  { name: 'income tax', def: 'A tax on the money a person earns from working', example: 'Part of the money Lena earns at her job each year goes to the government.' },
  { name: 'payroll tax', def: 'A tax taken out of a paycheck that helps pay for Social Security and Medicare', example: 'Money is taken out of every paycheck Omar gets to help pay for Social Security and Medicare.' },
  { name: 'sales tax', def: 'A tax added to the price of things people buy', example: 'A shirt has a price tag of $20.00, but Rosa pays $21.65 at the register.' },
  { name: 'property tax', def: 'A tax paid by people who own land or buildings, often used to pay for schools', example: 'The Garcia family pays a tax each year because they own their house and land.' },
];

export const kindsOfTaxes: Gen = (rng, d) => {
  const t = pick(rng, TAXES);
  const others = TAXES.filter((o) => o !== t);
  if (d === 1) {
    return one('mc', [txt(`What is ${t.name}?`)], mc(rng, t.def, others.map((o) => o.def)), `${t.name[0].toUpperCase()}${t.name.slice(1)}: ${t.def.toLowerCase()}.`);
  }
  return one('mc', [txt(`${t.example} What kind of tax is this?`)],
    mc(rng, t.name[0].toUpperCase() + t.name.slice(1), others.map((o) => o.name[0].toUpperCase() + o.name.slice(1))),
    `This is ${t.name}: ${t.def.toLowerCase()}.`);
};

// ---------- 5.10B gross and net income ----------
export const grossNet: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [txt('What is the difference between gross income and net income?')],
      mc(rng, 'Gross income is the total pay before taxes and deductions. Net income is what is left after them.', [
        'Net income is the total pay before taxes. Gross income is what is left after taxes.',
        'Gross income and net income are always the same amount.',
        'Gross income is only the money spent on taxes.',
      ]),
      'Gross income is everything earned. Net income ("take-home pay") is gross income minus taxes and other deductions.');
  }
  const gross = randInt(rng, 120, 480) * 10;
  const taxes = randInt(rng, 15, Math.min(90, Math.floor(gross / 30))) * 10; // at most a third, so net − taxes stays positive
  const net = gross - taxes;
  if (d === 2) {
    return one('mc', [txt(`Carlos earns a gross income of ${money(gross * 100)} this month. ${money(taxes * 100)} is taken out for taxes. What is his net income?`)],
      mc(rng, money(net * 100), [money((gross + taxes) * 100), money(taxes * 100), money(gross * 100)]),
      `Net income = gross income − taxes = ${money(gross * 100)} − ${money(taxes * 100)} = ${money(net * 100)}.`);
  }
  return one('mc', [txt(`After ${money(taxes * 100)} in taxes and deductions, Mia's net income is ${money(net * 100)}. What is her gross income?`)],
    mc(rng, money(gross * 100), [money((net - taxes) * 100), money(net * 100), money(taxes * 100)]),
    `Gross income = net income + taxes = ${money(net * 100)} + ${money(taxes * 100)} = ${money(gross * 100)}.`);
};

// ---------- 5.10E fix a budget ----------
const HELPS = ['Spend less on eating out', 'Find a way to earn more income', 'Cancel a subscription that is not used', 'Buy fewer new clothes this month', 'Pick a cheaper phone plan'];
const HURTS: [string, string][] = [
  ['Buy a new video game', 'That adds an expense.'],
  ['Spend more on entertainment', 'That makes expenses even bigger.'],
  ['Ignore the budget until next month', 'The gap between income and expenses would not change.'],
  ['Take on a new monthly payment', 'That adds another expense.'],
];

export const fixBudget: Gen = (rng) => {
  const income = randInt(rng, 25, 40) * 100, over = randInt(rng, 2, 6) * 50;
  return one('multiselect', [txt(`A family's monthly income is ${money(income * 100)}, but their expenses are ${money((income + over) * 100)}. Which actions could help balance the budget? Select **TWO** correct answers.`)],
    multi(rng, sample(rng, HELPS, 2), sample(rng, HURTS, 3).map(([text, why]) => ({ text, why }))),
    'To balance a budget when expenses are more than income, spend less, earn more, or both.');
};

// ---------- 5.10F balance a budget ----------
export const balanceBudget: Gen = (rng, d) => {
  const income = randInt(rng, 30, 60) * 5;
  const rent = randInt(rng, 6, 12) * 5, food = randInt(rng, 3, 8) * 5, fun = randInt(rng, 1, 4) * 5;
  const spent = rent + food + fun;
  const left = income - spent;
  const rows = [['Allowance and chores', money(income * 100), ''], ['Phone plan', '', money(rent * 100)], ['Lunches', '', money(food * 100)], ['Movies', '', money(fun * 100)]];
  const budget = table(['Item', 'Income', 'Expense'], rows, 'Monthly budget');
  if (d === 3) {
    const cut = randInt(rng, 1, fun / 5) * 5;
    const target = left + cut;
    return one('mc', [txt(`Jada's monthly budget is shown. She wants to save ${money(target * 100)} each month by spending less on movies. How much less must she spend on movies?`), budget],
      mc(rng, money(cut * 100), [money(target * 100), money(left * 100), money((cut + 5) * 100), money(fun * 100 + 500)]),
      `Right now she has ${money(income * 100)} − ${money(spent * 100)} = ${money(left * 100)} left. To save ${money(target * 100)} she needs ${money(cut * 100)} more, so she must spend ${money(cut * 100)} less on movies.`);
  }
  return one('mc', [txt(`Jada's monthly budget is shown. If she sticks to her budget, how much money will she have left at the end of the month?`), budget],
    mc(rng, money(left * 100), [money(spent * 100), money((income + spent) * 100), money((left + fun) * 100)]),
    `Add the expenses: ${money(rent * 100)} + ${money(food * 100)} + ${money(fun * 100)} = ${money(spent * 100)}. Then ${money(income * 100)} − ${money(spent * 100)} = ${money(left * 100)}.`);
};

export const STRAND4 = {
  '5.9A': [representData], '5.9B': [scatterplot], '5.9C': [solveWithData], '5.10A': [kindsOfTaxes], '5.10B': [grossNet],
  '5.10E': [fixBudget], '5.10F': [balanceBudget],
};

