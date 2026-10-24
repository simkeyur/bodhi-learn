// Grade 5 math, strand 1: numbers, place value and expressions.

import { pick, randInt, sample, type Rng } from '../../rng.ts';
import { blank, dec, fig, inline, mc, multi, near, one, txt, type Gen } from '../build.ts';

const PLACE = ['ones', 'tenths', 'hundredths', 'thousandths'];
const placeValue = (digit: number, place: number): string => (place === 0 ? String(digit) : `0.${'0'.repeat(place - 1)}${digit}`);

// A decimal from its digits: [ones, tenths, hundredths, thousandths]
const fromDigits = (d: number[]): string => dec(d.reduce((s, v, i) => s + v * 10 ** (3 - i), 0), 3);

// ---------- 5.2A expanded notation and the value of a digit ----------
export const expanded: Gen = (rng, d) => {
  const places = d === 1 ? 3 : 4;
  const digits = [randInt(rng, 1, 9), ...Array.from({ length: places - 1 }, () => randInt(rng, 1, 9))];
  if (d === 3) digits[randInt(rng, 1, places - 1)] = 0; // a zero in the middle is the classic trap
  while (digits.length < 4) digits.push(0);
  const n = fromDigits(digits);
  const terms = (shift: number) => digits
    .map((v, i) => (v ? placeValue(v, Math.max(0, Math.min(3, i + shift))) : null))
    .filter((t): t is string => t !== null);

  if (rng() < 0.5) {
    const right = terms(0).join(' + ');
    const wrong = [
      terms(1).join(' + '),
      digits.filter((v) => v).join(' + '),
      [...terms(0).slice(0, 1), ...terms(0).slice(1).map((t) => t.replace('0.', '0.0'))].join(' + '),
      terms(0).slice(1).join(' + ') || '0',
    ];
    return one('mc', [txt(`Which shows ${n} in expanded notation?`)], mc(rng, right, wrong),
      `Each digit is worth its place: ${digits.map((v, i) => (v ? `${v} ${PLACE[i]}` : null)).filter(Boolean).join(', ')}. So ${n} = ${right}.`);
  }
  // The value of one digit (pick a decimal place whose digit appears only once)
  const options = [1, 2, 3].filter((i) => i < places && digits[i] && digits.filter((v) => v === digits[i]).length === 1);
  const place = options.length ? pick(rng, options) : 1;
  const digit = digits[place] || 1;
  const right = placeValue(digit, place);
  const wrong = [0, 1, 2, 3].filter((p) => p !== place).map((p) => placeValue(digit, p));
  return one('mc', [txt(`What is the value of the digit ${digit} in ${n}?`)], mc(rng, right, wrong),
    `The ${digit} is in the ${PLACE[place]} place, so its value is ${right}.`);
};

// ---------- 5.2B compare decimals ----------
// Two decimals in thousandths, often with different numbers of digits (4.35 vs 4.305)
function decimalPair(rng: Rng, d: number): [string, string, string] {
  const whole = randInt(rng, 1, 30);
  const kind = d === 1 ? pick(rng, ['tenth', 'hundredth']) : pick(rng, ['trap', 'trap', 'hundredth', 'equal']);
  let a: number, b: number, pa = 3, pb = 3;
  if (kind === 'equal') {
    a = whole * 1000 + randInt(rng, 1, 9) * 100; b = a; pa = 1; pb = 2;
  } else if (kind === 'tenth') {
    a = whole * 1000 + randInt(rng, 1, 9) * 100 + randInt(rng, 0, 9) * 10;
    b = whole * 1000 + randInt(rng, 1, 9) * 100 + randInt(rng, 0, 9) * 10;
    pa = 2; pb = 2;
  } else if (kind === 'hundredth') {
    const t = randInt(rng, 1, 9) * 100;
    a = whole * 1000 + t + randInt(rng, 1, 9) * 10; pa = 2; b = whole * 1000 + t + randInt(rng, 1, 9) * 10 + randInt(rng, 1, 9);
  } else {
    // 4.35 vs 4.305: the shorter one is bigger
    const t = randInt(rng, 1, 8) * 100;
    a = whole * 1000 + t + randInt(rng, 2, 9) * 10; pa = 2;
    b = whole * 1000 + t + randInt(rng, 0, 1) * 10 + randInt(rng, 1, 9);
  }
  if (a === b && kind !== 'equal') b += 10;
  const fmt = (v: number, p: number) => dec(Math.round(v / 10 ** (3 - p)), p, true);
  const [x, y] = rng() < 0.5 ? [fmt(a, pa), fmt(b, pb)] : [fmt(b, pb), fmt(a, pa)];
  const vx = Number(x.replace(/,/g, '')), vy = Number(y.replace(/,/g, ''));
  return [x, y, vx > vy ? '>' : vx < vy ? '<' : '='];
}

export const compareDecimals: Gen = (rng, d) => {
  const SYMBOLS = ['<', '=', '>'];
  if (d === 3) {
    const [a, b, s1] = decimalPair(rng, 2);
    const [c, e, s2] = decimalPair(rng, 2);
    return one('inline', [txt('Choose the symbol that makes each comparison true.')],
      inline([`${a} `, { blank: 0 }, ` ${b}      and      ${c} `, { blank: 1 }, ` ${e}`], [blank(SYMBOLS, s1), blank(SYMBOLS, s2)]),
      `Line up the decimal points and compare place by place from the left: ${a} ${s1} ${b}, and ${c} ${s2} ${e}.`);
  }
  if (d === 2 && rng() < 0.5) {
    const whole = randInt(rng, 2, 9);
    const vals = sample(rng, [whole * 1000 + 350, whole * 1000 + 305, whole * 1000 + 53, whole * 1000 + 503, whole * 1000 + 35], 4);
    const fmt = (v: number) => dec(v, 3);
    const sorted = [...vals].sort((x, y) => x - y);
    const right = sorted.map(fmt).join(', ');
    const wrong = [
      [...sorted].reverse().map(fmt).join(', '),
      [...vals].sort((x, y) => fmt(x).length - fmt(y).length || x - y).map(fmt).join(', '),
      [...vals].map(fmt).sort().reverse().join(', '),
      vals.map(fmt).join(', '),
      [sorted[1], sorted[0], ...sorted.slice(2)].map(fmt).join(', '),
      [...sorted.slice(0, 2), sorted[3], sorted[2]].map(fmt).join(', '),
    ];
    return one('mc', [txt('Which list shows the numbers in order from **least to greatest**?')], mc(rng, right, wrong),
      `Write them all to thousandths and compare: ${sorted.map((v) => dec(v, 3, true)).join(' < ')}.`);
  }
  const [a, b, s] = decimalPair(rng, d);
  return one('inline', [txt('Choose the symbol that makes the comparison true.')],
    inline([`${a} `, { blank: 0 }, ` ${b}`], [blank(SYMBOLS, s)]),
    `Line up the decimal points and compare from the left. Writing both to the same number of places helps: ${a} ${s} ${b}.`);
};

// ---------- 5.2C round decimals ----------
export const roundDecimals: Gen = (rng, d) => {
  const toTenths = d === 1 || rng() < 0.4;
  const whole = randInt(rng, 1, 20);
  // thousandths; at difficulty 3 force a carry (3.96 -> 4.0)
  let v = whole * 1000 + randInt(rng, 0, 999);
  if (d === 1) v = whole * 1000 + randInt(rng, 0, 99) * 10;
  if (d === 3) v = toTenths ? whole * 1000 + 950 + randInt(rng, 0, 4) * 10 : whole * 1000 + randInt(rng, 1, 8) * 100 + 95 + randInt(rng, 0, 4);
  if (toTenths && v % 100 === 0) v += 40;
  if (!toTenths && v % 10 === 0) v += 7;
  const places = v % 10 === 0 ? 2 : 3;
  const shown = dec(Math.round(v / 10 ** (3 - places)), places, true);
  const [unit, p] = toTenths ? [100, 1] : [10, 2];
  const right = dec(Math.round(v / unit), p, true);
  const down = dec(Math.floor(v / unit), p, true);
  const up = dec(Math.ceil(v / unit), p, true);
  const other = toTenths ? dec(Math.round(v / 10), 2, true) : dec(Math.round(v / 100), 1, true);
  // Wrong answers must differ in value, not just in how they are written (1.0 and 1 are the same answer)
  const value = (t: string) => Number(t.replace(/,/g, ''));
  const wrong = [right === down ? up : down, other, dec(Math.round(v / 1000), 0, true), dec(Math.round(v / unit) + 1, p, true), dec(Math.max(0, Math.round(v / unit) - 1), p, true)]
    .filter((w, i, all) => value(w) !== value(right) && all.findIndex((o) => value(o) === value(w)) === i);
  const stem = [txt(`Round ${shown} to the nearest **${toTenths ? 'tenth' : 'hundredth'}**.`)];
  if (d === 1) {
    const lo = Math.floor(v / 100) * 100;
    stem.push(fig({ kind: 'numberLine', from: lo / 1000, to: (lo + 100) / 1000, step: 0.01, decimals: 2, point: v / 1000 },
      `A number line from ${dec(lo, 3, false)} to ${dec(lo + 100, 3, false)} marked in hundredths, with a point at ${shown}.`));
  }
  return one('mc', stem, mc(rng, right, wrong),
    `Look at the digit to the right of the ${toTenths ? 'tenths' : 'hundredths'} place: 5 or more rounds up, less than 5 rounds down. ${shown} rounds to ${right}.`);
};

// ---------- 5.4A prime and composite ----------
const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const isPrime = (n: number) => PRIMES.includes(n);
const factorPair = (n: number): string => {
  for (let f = 2; f * f <= n; f++) if (n % f === 0) return `${n} = ${f} × ${n / f}`;
  return '';
};

export const primeComposite: Gen = (rng, d) => {
  const max = d === 1 ? 30 : d === 2 ? 60 : 100;
  const primes = PRIMES.filter((p) => p <= max && p > 2);
  // Odd composites look prime; they are the useful wrong answers
  const tricky = [9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 55, 57, 63, 65, 69, 77, 81, 85, 87, 91, 93, 95].filter((n) => n <= max);
  const plain = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30].filter((n) => n <= max);
  const askPrime = rng() < 0.6;
  const composites = d === 1 ? [...sample(rng, plain, 2), ...sample(rng, tricky, 2)] : sample(rng, tricky, 4);
  const [rights, wrongs] = askPrime ? [sample(rng, primes, 2), composites] : [sample(rng, tricky, 2), sample(rng, primes, 4)];
  const why = (n: number) => (isPrime(n) ? `${n} has only two factors, 1 and ${n}, so it is prime.` : `${factorPair(n)}, so it is composite.`);
  const part = multi(rng, rights.map((n) => ({ text: String(n), why: why(n) })), wrongs.map((n) => ({ text: String(n), why: why(n) })));
  return one('multiselect', [txt(`Which numbers are **${askPrime ? 'prime' : 'composite'}**? Select **TWO** correct answers.`)], part,
    `A prime number has exactly two factors, 1 and itself. A composite number has more. ${rights.map(why).join(' ')}`);
};

// ---------- 5.4E meaning of parentheses and brackets ----------
export const groupingMeaning: Gen = (rng, d) => {
  const a = randInt(rng, 2, 9), b = randInt(rng, 2, 9), c = randInt(rng, 2, 9);
  const big = b + randInt(rng, 3, 9);
  if (d === 3) {
    const e = randInt(rng, 2, 6);
    const right = `[(${big} − ${b}) × ${c}] + ${e}`;
    return one('mc', [txt(`Which expression means: subtract ${b} from ${big}, multiply the difference by ${c}, then add ${e}?`)],
      mc(rng, right, [`${big} − ${b} × ${c} + ${e}`, `(${big} − ${b}) × (${c} + ${e})`, `${big} − [${b} × (${c} + ${e})]`]),
      `Parentheses and brackets show what to do first: the subtraction is inside the parentheses, the multiplication inside the brackets, then add ${e}.`);
  }
  const plus = rng() < 0.5;
  const [opWord, op, x, y] = plus ? ['add', '+', a, b] : ['subtract', '−', big, b];
  const phrase = plus ? `add ${x} and ${y}` : `subtract ${y} from ${x}`;
  if (d === 2 && rng() < 0.5) {
    const expr = `${c} × (${x} ${op} ${y})`;
    return one('mc', [txt(`What do the parentheses in ${expr} tell you to do?`)],
      mc(rng, `${opWord === 'add' ? 'Add' : 'Subtract'} first, then multiply by ${c}`, [`Multiply ${c} × ${x} first`, `Work from left to right`, `Multiply all three numbers`]),
      `Whatever is inside the parentheses is done first: ${phrase}, then multiply by ${c}.`);
  }
  const right = `${c} × (${x} ${op} ${y})`;
  return one('mc', [txt(`Which expression means: ${phrase}, then multiply by ${c}?`)],
    mc(rng, right, [`${c} × ${x} ${op} ${y}`, `(${c} × ${x}) ${op} ${y}`, `${x} ${op} ${y} × ${c}`]),
    `To do the ${plus ? 'addition' : 'subtraction'} first, it goes inside parentheses: ${right}.`);
};

// ---------- 5.4F simplify expressions ----------
export const simplifyExpression: Gen = (rng, d) => {
  if (d === 1) {
    const a = randInt(rng, 2, 9), b = randInt(rng, 2, 9), c = randInt(rng, 2, 9);
    const v = a * (b + c);
    return one('mc', [txt(`What is the value of ${a} × (${b} + ${c})?`)], mc(rng, v, [a * b + c, a + b + c, ...near(v, [a, -a, 10])]),
      `Parentheses first: ${b} + ${c} = ${b + c}. Then ${a} × ${b + c} = ${v}.`);
  }
  if (d === 2) {
    const a = randInt(rng, 2, 6), c = randInt(rng, 2, 9), b = c + randInt(rng, 2, 9), e = randInt(rng, 10, 40);
    const v = e + a * (b - c);
    return one('mc', [txt(`Simplify: ${e} + ${a} × (${b} − ${c})`)], mc(rng, v, [(e + a) * (b - c), e + a * b - c, ...near(v, [a, -a, 2])]),
      `Parentheses: ${b} − ${c} = ${b - c}. Multiply: ${a} × ${b - c} = ${a * (b - c)}. Add: ${e} + ${a * (b - c)} = ${v}.`);
  }
  // Two levels: [a + b × (c − e)] ÷ f, with a whole-number answer
  const b = randInt(rng, 2, 5), e = randInt(rng, 1, 4), c = e + randInt(rng, 2, 6), f = randInt(rng, 2, 6);
  const inner = b * (c - e);
  const k = Math.ceil((inner + 1) / f) + randInt(rng, 0, 4);
  const a = f * k - inner;
  const v = (a + inner) / f;
  const noBracket = a + inner / f;
  return one('mc', [txt(`Simplify: [${a} + ${b} × (${c} − ${e})] ÷ ${f}`)],
    mc(rng, v, [a + inner, Number.isInteger(noBracket) ? noBracket : v + f, ...near(v, [1, -1, 2])]),
    `Innermost first: ${c} − ${e} = ${c - e}. Then ${b} × ${c - e} = ${inner}. Then ${a} + ${inner} = ${a + inner}. Last, ${a + inner} ÷ ${f} = ${v}.`);
};

export const STRAND1 = { '5.2A': [expanded], '5.2B': [compareDecimals], '5.2C': [roundDecimals], '5.4A': [primeComposite], '5.4E': [groupingMeaning], '5.4F': [simplifyExpression] };

