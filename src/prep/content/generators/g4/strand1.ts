import { pick, randInt } from '../../rng.ts';
import { dec, fig, mc, multi, num, one, plain, txt, type Gen } from '../build.ts';

// ---------- 4.2A 10 times and 1/10 place value ----------
export const placeValueRelation: Gen = (rng, d) => {
  const digit = randInt(rng, 2, 9);
  if (d === 1) {
    // Adjacent places: thousands and hundreds, or ten thousands and thousands
    const places = [
      { larger: 'thousands', smaller: 'hundreds', valLarger: 1000, valSmaller: 100 },
      { larger: 'ten thousands', smaller: 'thousands', valLarger: 10000, valSmaller: 1000 },
      { larger: 'hundreds', smaller: 'tens', valLarger: 100, valSmaller: 10 },
      { larger: 'hundred thousands', smaller: 'ten thousands', valLarger: 100000, valSmaller: 10000 },
    ];
    const p = pick(rng, places);
    const askTenTimes = rng() < 0.5;
    if (askTenTimes) {
      return one('mc', [txt(`In a whole number, how does the value of the digit ${digit} in the ${p.larger} place compare to the value of the digit ${digit} in the ${p.smaller} place?`)],
        mc(rng, 'It is 10 times the value.', [
          { text: 'It is one-tenth of the value.', why: 'Moving one place to the left multiplies the value by 10.' },
          'It is 100 times the value.',
          'It is 1,000 times the value.',
        ]),
        `The ${p.larger} place is one place to the left of the ${p.smaller} place. Moving one place left multiplies the value by 10. The value is 10 times the value.`);
    }
    return one('mc', [txt(`In a whole number, how does the value of the digit ${digit} in the ${p.smaller} place compare to the value of the digit ${digit} in the ${p.larger} place?`)],
      mc(rng, 'It is one-tenth of the value.', [
        { text: 'It is 10 times the value.', why: 'Moving one place to the right divides the value by 10.' },
        'It is one-hundredth of the value.',
        'It is equal in value.',
      ]),
      `The ${p.smaller} place is one place to the right of the ${p.larger} place. Moving one place right divides the value by 10. The value is one-tenth of the value.`);
  }

  if (d === 2) {
    // In a specific number like 442,510
    const places = [
      { name1: 'hundred thousands', name2: 'ten thousands', exp: '445,120' },
      { name1: 'ten thousands', name2: 'thousands', exp: '77,320' },
      { name1: 'thousands', name2: 'hundreds', exp: '8,850' },
    ];
    const p = pick(rng, places);
    const other1 = randInt(rng, 1, 9);
    const other2 = randInt(rng, 1, 9);
    const nStr = p.name1 === 'hundred thousands'
      ? `${digit}${digit}${other1},${other2}50`
      : p.name1 === 'ten thousands'
        ? `${digit}${digit},${other1}50`
        : `${digit},${digit}${other1}0`;
    return one('mc', [txt(`In the number ${nStr}, the digit ${digit} in the ${p.name1} place has a value that is —`)],
      mc(rng, `10 times the value of the ${digit} in the ${p.name2} place`, [
        { text: `one-tenth the value of the ${digit} in the ${p.name2} place`, why: 'The place to the left is 10 times greater, not one-tenth.' },
        `100 times the value of the ${digit} in the ${p.name2} place`,
        `equal to the value of the ${digit} in the ${p.name2} place`,
      ]),
      `The ${p.name1} place is one place to the left of the ${p.name2} place. Each place to the left is 10 times as large. The digit ${digit} in the ${p.name1} place has a value that is 10 times the value of the ${digit} in the ${p.name2} place.`);
  }

  // d === 3: Decimals or 100 times difference
  const isDec = rng() < 0.5;
  if (isDec) {
    return one('mc', [txt(`In the decimal ${digit}.${digit}5, which statement about the digit ${digit} is true?`)],
      mc(rng, `The digit ${digit} in the ones place is 10 times the value of the ${digit} in the tenths place.`, [
        { text: `The digit ${digit} in the tenths place is 10 times the value of the ${digit} in the ones place.`, why: 'Tenths are smaller than ones.' },
        `The digit ${digit} in the ones place is one-tenth the value of the ${digit} in the tenths place.`,
        `The two digits have the exact same value.`,
      ]),
      `The ones place is one place to the left of the tenths place. ${digit} ones = ${digit}, and ${digit} tenths = 0.${digit}. The digit in the ones place is 10 times the value of the digit in the tenths place.`);
  }
  return one('mc', [txt(`The value of the digit ${digit} in 70${digit},000 is 10 times the value of the digit ${digit} in which number?`)],
    mc(rng, `3,${digit}45`, [
      { text: `3${digit},450`, why: 'In this number the digit is in the thousands place, which has the same value.' },
      `${digit}4,100`,
      `12,3${digit}5`,
    ]),
    `In 70${digit},000, the digit ${digit} is in the thousands place with a value of ${digit},000. One-tenth of ${digit},000 is ${digit}00, so the digit ${digit} must be in the hundreds place. In 3,${digit}45, the digit ${digit} is in the hundreds place.`);
};

// ---------- 4.2B expanded notation and numerals ----------
export const expandedNotation: Gen = (rng, d) => {
  if (d === 1) {
    // 5-digit number into expanded notation
    const d4 = randInt(rng, 2, 9), d3 = randInt(rng, 1, 9), d2 = randInt(rng, 1, 9), d1 = randInt(rng, 1, 9), d0 = randInt(rng, 1, 9);
    const n = d4 * 10000 + d3 * 1000 + d2 * 100 + d1 * 10 + d0;
    const right = `(${d4} × 10,000) + (${d3} × 1,000) + (${d2} × 100) + (${d1} × 10) + (${d0} × 1)`;
    const wrong = [
      `(${d4} × 1,000) + (${d3} × 100) + (${d2} × 10) + (${d1} × 1) + ${d0}`,
      `(${d4} × 100,000) + (${d3} × 10,000) + (${d2} × 1,000) + (${d1} × 100) + (${d0} × 10)`,
      `(${d4} × 10,000) + (${d3} × 1,000) + (${d2} × 10) + (${d1} × 10) + (${d0} × 1)`,
    ];
    return one('mc', [txt(`Which expression represents the number ${num(n)} in expanded notation?`)],
      mc(rng, right, wrong),
      `Multiply each digit by its place value. ${d4} is ten thousands, ${d3} is thousands, ${d2} is hundreds, ${d1} is tens, and ${d0} is ones. The correct expression is ${right}.`);
  }

  if (d === 2) {
    // Whole number with decimal to hundredths
    const d5 = randInt(rng, 1, 9), d4 = randInt(rng, 1, 9), d2 = randInt(rng, 1, 9), d1 = randInt(rng, 1, 9), dt = randInt(rng, 1, 9), dh = randInt(rng, 1, 9);
    const whole = d5 * 100000 + d4 * 10000 + d2 * 100 + d1 * 10;
    const nStr = `${num(whole)}.${dt}${dh}`;
    const right = `(${d5} × 100,000) + (${d4} × 10,000) + (${d2} × 100) + (${d1} × 10) + (${dt} × 0.1) + (${dh} × 0.01)`;
    const wrong = [
      `(${d5} × 100,000) + (${d4} × 10,000) + (${d2} × 100) + (${d1} × 10) + (${dt} × 0.01) + (${dh} × 0.001)`,
      `(${d5} × 10,000) + (${d4} × 1,000) + (${d2} × 100) + (${d1} × 10) + (${dt} × 0.1) + (${dh} × 0.01)`,
      `(${d5} × 100,000) + (${d4} × 10,000) + (${d2} × 100) + (${d1} × 1) + (${dt} × 0.1) + (${dh} × 0.01)`,
    ];
    return one('mc', [txt(`The weight of an elephant in a research study is recorded as ${nStr} kilograms. How is this number written in expanded notation?`)],
      mc(rng, right, wrong),
      `Each digit is multiplied by its place value. Notice the 0 in the thousands place is skipped. The tenths digit ${dt} is multiplied by 0.1 and the hundredths digit ${dh} is multiplied by 0.01. The answer is ${right}.`);
  }

  // d === 3: Up to billions
  const b = randInt(rng, 1, 9);
  const m1 = randInt(rng, 1, 9), m0 = randInt(rng, 1, 9);
  const th = randInt(rng, 1, 9);
  const ones = randInt(rng, 1, 9);
  const nStr = `${b},0${m1}${m0},00${th},00${ones}`;
  const right = `(${b} × 1,000,000,000) + (${m1} × 10,000,000) + (${m0} × 1,000,000) + (${th} × 1,000) + (${ones} × 1)`;
  const wrong = [
    `(${b} × 100,000,000) + (${m1} × 10,000,000) + (${m0} × 1,000,000) + (${th} × 1,000) + (${ones} × 1)`,
    `(${b} × 1,000,000,000) + (${m1} × 100,000,000) + (${m0} × 10,000,000) + (${th} × 10,000) + (${ones} × 1)`,
    `(${b} × 1,000,000,000) + (${m1} × 1,000,000) + (${m0} × 100,000) + (${th} × 1,000) + (${ones} × 1)`,
  ];
  return one('mc', [txt(`A population report lists the number ${nStr}. What is this number written in expanded notation?`)],
    mc(rng, right, wrong),
    `${b} is in the billions place (1,000,000,000). ${m1} is in the ten millions place (10,000,000). ${m0} is in the millions place (1,000,000). The answer is ${right}.`);
};

// ---------- 4.2C compare and order whole numbers ----------
export const compareWholeNumbers: Gen = (rng, d) => {
  if (d === 1) {
    // Compare two 6-digit numbers
    const base = randInt(rng, 200, 800) * 1000;
    const diff = randInt(rng, 10, 90) * 10;
    const a = base + diff;
    const b = base + (diff + randInt(rng, 1, 9) * 10);
    const sym = a < b ? '<' : '>';
    return one('mc', [txt(`Which comparison symbol makes the statement true?`), txt(`${num(a)} ___ ${num(b)}`)],
      mc(rng, sym, [sym === '<' ? '>' : '<', '=', '+']),
      `Compare the numbers starting with the highest place value. In the tens place, ${num(a)} is ${a < b ? 'less than' : 'greater than'} ${num(b)}. The symbol is ${sym}.`);
  }

  if (d === 2) {
    // Order four 7-8 digit numbers from least to greatest
    const root = randInt(rng, 12, 45) * 1000000;
    const n1 = root + randInt(rng, 100, 200) * 1000 + randInt(rng, 10, 99);
    const n2 = root + randInt(rng, 250, 350) * 1000 + randInt(rng, 10, 99);
    const n3 = root + randInt(rng, 400, 500) * 1000 + randInt(rng, 10, 99);
    const n4 = root + randInt(rng, 600, 750) * 1000 + randInt(rng, 10, 99);
    const sorted = [n1, n2, n3, n4];
    const rightStr = sorted.map(num).join('; ');
    const wrong1 = [n4, n3, n2, n1].map(num).join('; ');
    const wrong2 = [n2, n1, n3, n4].map(num).join('; ');
    const wrong3 = [n1, n3, n2, n4].map(num).join('; ');
    return one('mc', [txt(`Which list shows the numbers in order from **least to greatest**?`)],
      mc(rng, rightStr, [
        { text: wrong1, why: 'That list is ordered from greatest to least.' },
        wrong2,
        wrong3,
      ]),
      `Line up the digits by place value. Compare from left to right. The correct order from least to greatest is ${rightStr}.`);
  }

  // d === 3: Comparison with large numbers (astronomical distances in miles)
  const m1 = randInt(rng, 100, 900) * 1000000;
  const m2 = m1 + randInt(rng, 1, 9) * 100000;
  const m3 = m2 + randInt(rng, 1, 9) * 10000;
  const right = `${num(m1)} < ${num(m2)} < ${num(m3)}`;
  const wrong = [
    `${num(m3)} < ${num(m2)} < ${num(m1)}`,
    `${num(m1)} > ${num(m2)} > ${num(m3)}`,
    `${num(m2)} < ${num(m1)} < ${num(m3)}`,
  ];
  return one('mc', [
    txt(`Three asteroids have distances of ${num(m1)} miles, ${num(m2)} miles, and ${num(m3)} miles from the Sun. Which statement correctly compares the three distances?`),
  ],
    mc(rng, right, wrong),
    `${num(m1)} is less than ${num(m2)}, and ${num(m2)} is less than ${num(m3)}. The correct comparison is ${right}.`);
};

// ---------- 4.2D round whole numbers ----------
export const roundWholeNumbers: Gen = (rng, d) => {
  if (d === 1) {
    // Round 4-5 digit number to nearest thousand or ten thousand
    const roundTo = pick(rng, [1000, 10000]);
    const placeName = roundTo === 1000 ? 'thousands' : 'ten thousands';
    const raw = randInt(rng, 15, 85) * 1000 + randInt(rng, 100, 999);
    const right = Math.round(raw / roundTo) * roundTo;
    const down = Math.floor(raw / roundTo) * roundTo;
    const up = Math.ceil(raw / roundTo) * roundTo;
    const wrongDir = right === up ? down : up;
    const otherPlace = roundTo === 10000 ? 1000 : 100;
    const wrongPlace = Math.round(raw / otherPlace) * otherPlace;
    const wrongTrunc = Math.floor(raw / otherPlace) * otherPlace;
    const wrong3 = wrongTrunc !== wrongPlace && wrongTrunc !== right && wrongTrunc !== wrongDir
      ? wrongTrunc
      : Math.round(raw / (roundTo * 10)) * (roundTo * 10);
    return one('mc', [txt(`What is ${num(raw)} rounded to the nearest ${placeName}?`)],
      mc(rng, num(right), [num(wrongDir), num(wrongPlace), num(wrong3)]),
      `Find the ${placeName} place. Look at the digit to its right. If it is 5 or more, round up. ${num(raw)} rounded to the nearest ${placeName} is ${num(right)}.`);
  }

  if (d === 2) {
    // Round 6-digit number to hundred thousands
    const ht = randInt(rng, 1, 8);
    const nextDigit = randInt(rng, 0, 9);
    const raw = ht * 100000 + nextDigit * 10000 + randInt(rng, 1000, 9999);
    const right = Math.round(raw / 100000) * 100000;
    const down = ht * 100000;
    const up = (ht + 1) * 100000;
    const wrongDir = right === up ? down : up;
    const wrongTenThousand = Math.round(raw / 10000) * 10000;
    const wrongTenThousandDown = Math.floor(raw / 10000) * 10000;
    const wrong3 = wrongTenThousandDown !== wrongTenThousand && wrongTenThousandDown !== right && wrongTenThousandDown !== wrongDir
      ? wrongTenThousandDown
      : Math.round(raw / 1000) * 1000;
    return one('mc', [txt(`A national park welcomed ${num(raw)} visitors in a year. What is this number rounded to the nearest hundred thousands place?`)],
      mc(rng, num(right), [num(wrongDir), num(wrongTenThousand), num(wrong3)]),
      `The hundred thousands digit is ${ht}. The ten thousands digit is ${nextDigit}. Since ${nextDigit} is ${nextDigit >= 5 ? '5 or greater, round up' : 'less than 5, round down'}. The answer is ${num(right)}.`);
  }

  // d === 3: Reverse rounding problem
  const target = randInt(rng, 2, 7) * 10000;
  const isUp = rng() < 0.5;
  const rightVal = isUp
    ? target - randInt(rng, 10, 499)
    : target + randInt(rng, 10, 499);
  const wrong1 = target + 500 + randInt(rng, 10, 300);
  const wrong2 = target - 501 - randInt(rng, 10, 300);
  const wrong3 = target + 10000 + randInt(rng, 10, 100);
  return one('mc', [txt(`When rounded to the nearest ten thousand, a city's population is ${num(target)}. Which number could be the exact population of the city?`)],
    mc(rng, num(rightVal), [num(wrong1), num(wrong2), num(wrong3)]),
    `Numbers from ${num(target - 5000)} to ${num(target + 4999)} round to ${num(target)}. The only number in this range is ${num(rightVal)}.`);
};

// ---------- 4.2E represent decimals with models ----------
export const decimalModels: Gen = (rng, d) => {
  if (d === 1) {
    // Visual model with hundredths
    const hundredths = randInt(rng, 12, 88);
    const decVal = dec(hundredths, 2);
    return one('mc', [
      txt(`A hundred grid has ${hundredths} small squares shaded out of 100.`),
      fig({ kind: 'decimalGrids', hundredths }, `A hundred grid with ${hundredths} of 100 squares shaded.`),
      txt(`Which decimal represents the shaded part of the model?`),
    ],
      mc(rng, decVal, [
        { text: dec(hundredths * 10, 2), why: 'That would be tenths, not hundredths.' },
        dec(hundredths, 1),
        dec(100 - hundredths, 2),
      ]),
      `Each small square is 1 hundredth, or 0.01. ${hundredths} squares shaded is ${hundredths} hundredths. The decimal is ${decVal}.`);
  }

  if (d === 2) {
    // Decimals and money
    const dollars = randInt(rng, 1, 8);
    const dimes = randInt(rng, 1, 9);
    const pennies = randInt(rng, 1, 9);
    const decStr = `${dollars}.${dimes}${pennies}`;
    const pennyText = pennies === 1 ? '1 penny' : `${pennies} pennies`;
    return one('mc', [txt(`Javier has ${dollars} one-dollar bills, ${dimes} dimes, and ${pennyText}. Which decimal number of dollars represents this amount?`)],
      mc(rng, decStr, [`${dollars}.${pennies}${dimes}`, `${dollars + dimes}.${pennies}`, `${dollars}.0${dimes + pennies}`]),
      `One dollar is 1 whole. Each dime is 0.1 of a dollar. Each penny is 0.01 of a dollar. Javier has ${decStr} dollars.`);
  }

  // d === 3: More than 1 whole decimal model
  const wholes = randInt(rng, 1, 2);
  const extraHundredths = randInt(rng, 15, 65);
  const totalHundredths = wholes * 100 + extraHundredths;
  const decVal = dec(totalHundredths, 2);
  const gridCountText = wholes === 1 ? '1 fully shaded grid' : `${wholes} fully shaded grids`;
  const gridExplainText = wholes === 1 ? '1 full grid is 1 whole' : `${wholes} full grids are ${wholes} wholes`;
  return one('mc', [
    txt(`The model shows ${wholes} fully shaded hundred grid${wholes > 1 ? 's' : ''} and ${extraHundredths} shaded squares in the next grid.`),
    fig({ kind: 'decimalGrids', hundredths: totalHundredths }, `${gridCountText} and ${extraHundredths} squares of another.`),
    txt(`Which number represents the total shaded area?`),
  ],
    mc(rng, decVal, [dec(totalHundredths, 1), dec(wholes * 10 + extraHundredths, 2), dec(extraHundredths, 2)]),
    `${gridExplainText}. ${extraHundredths} squares of the second grid is 0.${extraHundredths}. Together they represent ${decVal}.`);
};

// ---------- 4.2F compare and order decimals ----------
export const compareDecimals: Gen = (rng, d) => {
  if (d === 1) {
    const tens = randInt(rng, 2, 8);
    const aH = randInt(rng, 1, 4), bH = randInt(rng, 5, 9);
    const a = `0.${tens}${aH}`, b = `0.${tens}${bH}`;
    return one('mc', [txt(`Which comparison symbol makes the statement true?`), txt(`${a} ___ ${b}`)],
      mc(rng, '<', ['>', '=', '+']),
      `Both decimals have 0 ones and ${tens} tenths. Compare the hundredths: ${aH} < ${bH}. Therefore ${a} < ${b}.`);
  }

  if (d === 2) {
    // Compare decimals with unequal digits: e.g. 0.4 and 0.38
    const tenths = randInt(rng, 3, 7);
    const a = `0.${tenths}`;
    const b = `0.${tenths - 1}${randInt(rng, 8, 9)}`;
    const right = `${a} > ${b}`;
    const wrong = [`${a} < ${b}`, `${b} > ${a}`, `${a} = ${b}`];
    return one('mc', [txt(`Which comparison is true?`)],
      mc(rng, right, [
        { text: `${a} < ${b}`, why: 'Look at the tenths place: ${tenths} tenths is greater than ${tenths - 1} tenths.' },
        wrong[1],
        wrong[2],
      ]),
      `Write 0.${tenths} as 0.${tenths}0 to give both numbers two decimal places. Comparing 0.${tenths}0 and ${b}: ${tenths}0 hundredths is greater than ${b.slice(2)} hundredths. The answer is ${right}.`);
  }

  // d === 3: Order four decimals
  const vals = [randInt(rng, 10, 25), randInt(rng, 30, 45), randInt(rng, 50, 65), randInt(rng, 70, 95)].map((v) => v / 100);
  const rightStr = vals.map((v) => v.toFixed(2)).join(', ');
  const revStr = [...vals].reverse().map((v) => v.toFixed(2)).join(', ');
  const mixedStr = [vals[1], vals[0], vals[3], vals[2]].map((v) => v.toFixed(2)).join(', ');
  return one('mc', [txt(`Which list shows the decimals in order from **least to greatest**?`)],
    mc(rng, rightStr, [
      { text: revStr, why: 'That list is in order from greatest to least.' },
      mixedStr,
      [vals[0], vals[2], vals[1], vals[3]].map((v) => v.toFixed(2)).join(', '),
    ]),
    `Compare tenths first, then hundredths. The order from least to greatest is ${rightStr}.`);
};

// ---------- 4.2G relate decimals and fractions ----------
export const relateDecimalsFractions: Gen = (rng, d) => {
  if (d === 1) {
    // Tenths: e.g. 0.7 = 7/10
    const n = randInt(rng, 1, 9);
    const decVal = `0.${n}`;
    const fracVal = `{${n}/10}`;
    return one('mc', [txt(`Which fraction is equivalent to the decimal ${decVal}?`)],
      mc(rng, fracVal, [`{${n}/100}`, `{${n}/1}`, `{1/${n}}`]),
      `The digit ${n} is in the tenths place, which represents ${n} tenths. As a fraction, ${n} tenths is written as ${fracVal}.`);
  }

  if (d === 2) {
    // Hundredths: e.g. 0.43 = 43/100
    const h = randInt(rng, 11, 99);
    const decVal = `0.${h}`;
    const fracVal = `{${h}/100}`;
    return one('mc', [txt(`A track coach recorded an athlete's time difference as ${decVal} seconds. Which fraction names this number?`)],
      mc(rng, fracVal, [`{${h}/10}`, `{${h}/1000}`, `{${Math.floor(h / 10)}/${h % 10 || 10}}`]),
      `The decimal ${decVal} has two places, meaning it represents ${h} hundredths. As a fraction, this is written as ${fracVal}.`);
  }

  // d === 3: Mixed number to decimal or reverse
  const whole = randInt(rng, 1, 5);
  const fracNum = randInt(rng, 1, 9);
  const isTenth = rng() < 0.5;
  if (isTenth) {
    const decStr = `${whole}.${fracNum}`;
    const fracStr = `${whole}{${fracNum}/10}`;
    return one('mc', [txt(`Which decimal represents the mixed number ${fracStr}?`)],
      mc(rng, decStr, [`${whole}.0${fracNum}`, `0.${whole}${fracNum}`, `${whole}.${fracNum * 10}`]),
      `${whole} whole is ${whole}. ${fracNum} tenths is 0.${fracNum}. Together, ${fracStr} is ${decStr}.`);
  }
  const hVal = randInt(rng, 11, 89);
  const decStr = `${whole}.${hVal}`;
  const fracStr = `${whole}{${hVal}/100}`;
  return one('mc', [txt(`Which mixed number represents the decimal ${decStr}?`)],
    mc(rng, fracStr, [`${whole}{${hVal}/10}`, `{${whole * 100 + hVal}/10}`, `${whole}{${Math.floor(hVal / 10)}/10}`]),
    `The whole number part is ${whole}. The decimal part .${hVal} is ${hVal} hundredths, or {${hVal}/100}. The mixed number is ${fracStr}.`);
};

// ---------- 4.2H decimals on a number line ----------
export const decimalNumberLine: Gen = (rng, d) => {
  if (d === 1) {
    // Tenths on a number line from 0 to 1
    const t = randInt(rng, 1, 9);
    const point = t / 10;
    const decStr = `0.${t}`;
    return one('mc', [
      txt(`Point P is shown on the number line.`),
      fig({ kind: 'numberLine', from: 0, to: 1, step: 0.1, decimals: 1, point, pointLabel: 'P' }, `A number line from 0 to 1 divided into tenths with point P at ${decStr}.`),
      txt(`What decimal does point P represent?`),
    ],
      mc(rng, decStr, [
        { text: `0.0${t}`, why: 'Each tick mark represents one tenth (0.1), not one hundredth.' },
        dec(Math.min(0.9, point + 0.2), 1),
        dec(Math.max(0.1, point - 0.2), 1),
      ]),
      `The distance from 0 to 1 is divided into 10 equal parts, so each tick mark is 0.1. Point P is at tick mark ${t}. Point P represents ${decStr}.`);
  }

  if (d === 2) {
    // Number line between whole numbers (e.g. 3.0 to 4.0)
    const start = randInt(rng, 2, 7);
    const t = randInt(rng, 1, 9);
    const point = start + t / 10;
    const decStr = `${start}.${t}`;
    return one('mc', [
      txt(`Point K is shown on the number line.`),
      fig({ kind: 'numberLine', from: start, to: start + 1, step: 0.1, decimals: 1, point, pointLabel: 'K' }, `A number line from ${start} to ${start + 1} with point K.`),
      txt(`What number does point K represent?`),
    ],
      mc(rng, decStr, [
        `${start}.0${t}`,
        `${start + 1}.${t}`,
        dec(start + (t > 5 ? t / 10 - 0.2 : t / 10 + 0.2), 1),
      ]),
      `The number line begins at ${start} and ends at ${start + 1}. Each mark represents 0.1. Point K is at ${start} plus ${t} tenths: ${decStr}.`);
  }

  // d === 3: Hundredths intervals (e.g. 0.40 to 0.50)
  const baseT = randInt(rng, 2, 7);
  const start = baseT / 10;
  const end = (baseT + 1) / 10;
  const h = randInt(rng, 1, 9);
  const point = start + h / 100;
  const decStr = `0.${baseT}${h}`;
  return one('mc', [
    txt(`Point M is located on the number line between 0.${baseT}0 and 0.${baseT + 1}0.`),
    fig({ kind: 'numberLine', from: start, to: end, step: 0.01, decimals: 2, point, pointLabel: 'M' }, `A number line from 0.${baseT}0 to 0.${baseT + 1}0 with point M.`),
    txt(`What decimal does point M represent?`),
  ],
    mc(rng, decStr, [`0.${baseT}0${h}`, `0.${baseT + 1}${h}`, dec(point + 0.02, 2)]),
    `The distance between 0.${baseT}0 and 0.${baseT + 1}0 is divided into 10 equal parts of 0.01 each. Counting ${h} marks from 0.${baseT}0 gives ${decStr}.`);
};

// ---------- 4.3A fractions as sums of unit fractions ----------
export const unitFractionSum: Gen = (rng, d) => {
  const denoms = [3, 4, 5, 6, 8, 10, 12];
  const denom = pick(rng, denoms);
  if (d === 1) {
    // Proper fraction
    const numVal = randInt(rng, 2, denom - 1);
    const unit = `{1/${denom}}`;
    const right = Array(numVal).fill(unit).join(' + ');
    const wrong1 = Array(numVal - 1).fill(unit).join(' + ');
    const wrong2 = Array(numVal + 1).fill(unit).join(' + ');
    const wrong3 = `{${numVal}/${denom * numVal}}`;
    return one('mc', [txt(`Which expression represents the fraction {${numVal}/${denom}} as a sum of unit fractions?`)],
      mc(rng, right, [wrong1, wrong2, wrong3]),
      `A unit fraction has a numerator of 1. The fraction {${numVal}/${denom}} is made of ${numVal} parts of size {1/${denom}}. The correct sum is ${right}.`);
  }

  if (d === 2) {
    // Fraction greater than 1 (a > b)
    const numVal = randInt(rng, denom + 1, denom + 4);
    const unit = `{1/${denom}}`;
    const right = Array(numVal).fill(unit).join(' + ');
    const wrong1 = Array(denom).fill(unit).join(' + ');
    const wrong2 = Array(numVal + 1).fill(unit).join(' + ');
    const wrong3 = `{1/${numVal}} + {1/${denom}}`;
    const wrong4 = Array(numVal + 2).fill(unit).join(' + ');
    return one('mc', [txt(`How can the improper fraction {${numVal}/${denom}} be represented as a sum of unit fractions?`)],
      mc(rng, right, [
        { text: wrong1, why: 'That only sums to 1 whole, not the full improper fraction.' },
        wrong2,
        wrong3,
        wrong4,
      ]),
      `The unit fraction is {1/${denom}}. Since the numerator is ${numVal}, you need ${numVal} unit fractions of {1/${denom}} added together. The answer is ${right}.`);
  }

  // d === 3: Word problem context
  const numVal = randInt(rng, 3, denom - 1);
  const person = pick(rng, ['Carlos', 'Alana', 'Marcus', 'Sofia']);
  const unit = `{1/${denom}}`;
  const right = Array(numVal).fill(unit).join(' + ');
  return one('mc', [txt(`${person} used a {1/${denom}}-cup measuring scoop ${numVal} times to measure flour for a recipe. Which expression represents the total amount of flour ${person} used?`)],
    mc(rng, right, [
      `{${numVal}/${denom * numVal}}`,
      Array(numVal).fill(`{${numVal}/${denom}}`).join(' + '),
      `{1/${denom}} + {${numVal - 1}/${denom}}`,
    ]),
    `Each scoop is {1/${denom}} cup. Using it ${numVal} times means adding {1/${denom}} a total of ${numVal} times. The answer is ${right}.`);
};

// ---------- 4.3B decompose fractions ----------
export const decomposeFraction: Gen = (rng, d) => {
  const denoms = [4, 6, 8, 10, 12];
  const denom = pick(rng, denoms);
  if (d === 1) {
    // Decompose into 2 parts
    const n = randInt(rng, 3, denom - 1);
    const p1 = randInt(rng, 1, n - 1);
    const p2 = n - p1;
    const right = `{${p1}/${denom}} + {${p2}/${denom}}`;
    const wrong1 = `{${p1}/${denom}} + {${p2 + 1}/${denom}}`;
    const wrong2 = `{${p1}/${denom * 2}} + {${p2}/${denom * 2}}`;
    const wrong3 = `{${p1 + 1}/${denom}} + {${p2 + 1}/${denom}}`;
    const wrong4 = `{${p1}/${denom}} + {${p2 + 2}/${denom}}`;
    return one('mc', [txt(`Which equation shows one way to decompose {${n}/${denom}}?`)],
      mc(rng, right, [wrong1, wrong2, wrong3, wrong4]),
      `To decompose a fraction, the numerators must add up to ${n} while the denominator remains ${denom}. ${p1} + ${p2} = ${n}. The correct equation is ${right}.`);
  }

  if (d === 2) {
    // Decompose into 3 parts
    const n = randInt(rng, 5, denom);
    const p1 = 1;
    const p2 = randInt(rng, 1, n - 2);
    const p3 = n - p1 - p2;
    const right = `{${p1}/${denom}} + {${p2}/${denom}} + {${p3}/${denom}}`;
    const wrong1 = `{${p1}/${denom}} + {${p2}/${denom}} + {${p3 + 1}/${denom}}`;
    const wrong2 = `{${p1}/${denom}} + {${p2}/${denom}}`;
    const wrong3 = `{${p1 + 1}/${denom}} + {${p2 + 1}/${denom}} + {${p3}/${denom}}`;
    return one('mc', [txt(`Which expression shows another way to decompose {${n}/${denom}} into three parts?`)],
      mc(rng, right, [wrong1, wrong2, wrong3]),
      `The numerators ${p1} + ${p2} + ${p3} equal ${n}. Since all parts have denominator ${denom}, the answer is ${right}.`);
  }

  // d === 3: Select TWO correct decompositions
  const n = randInt(rng, 5, denom);
  const p1 = 1, p2 = n - 1;
  const q1 = 2, q2 = n - 2;
  const right1 = `{${p1}/${denom}} + {${p2}/${denom}}`;
  const right2 = `{${q1}/${denom}} + {${q2}/${denom}}`;
  const wrong1 = `{${p1}/${denom}} + {${p2 + 1}/${denom}}`;
  const wrong2 = `{${p1}/${denom * 2}} + {${p2}/${denom * 2}}`;
  const wrong3 = `{${p1 + 1}/${denom}} + {${p2 + 1}/${denom}}`;
  return one('multiselect', [txt(`Which expressions correctly decompose {${n}/${denom}}? Select **TWO** correct answers.`)],
    multi(rng, [right1, right2], [wrong1, wrong2, wrong3]),
    `Check that the sum of the numerators is ${n} and the denominator is ${denom}. Both ${p1} + ${p2} = ${n} and ${q1} + ${q2} = ${n}.`);
};

// ---------- 4.3C equivalent fractions ----------
export const equivalentFractions: Gen = (rng, d) => {
  if (d === 1) {
    // Given fraction and visual/numerical equivalent
    const basePairs = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [3, 5]];
    const [numVal, denVal] = pick(rng, basePairs);
    const mult = randInt(rng, 2, 4);
    const rightNum = numVal * mult, rightDen = denVal * mult;
    const right = `{${rightNum}/${rightDen}}`;
    const wrong1 = `{${rightNum}/${denVal}}`;
    const wrong2 = `{${numVal}/${rightDen}}`;
    const wrong3 = `{${numVal + mult}/${denVal + mult}}`;
    return one('mc', [
      txt(`Which fraction is equivalent to {${numVal}/${denVal}}?`),
      fig({ kind: 'fractionBars', bars: [{ parts: denVal, shaded: numVal, label: plain(`{${numVal}/${denVal}}`) }, { parts: rightDen, shaded: rightNum, label: 'Equivalent' }] }, `Fraction bar of {${numVal}/${denVal}} aligned with equivalent fraction bar.`),
    ],
      mc(rng, right, [
        { text: wrong3, why: 'Adding the same number to top and bottom does not make an equivalent fraction; you must multiply.' },
        wrong1,
        wrong2,
      ]),
      `Multiply both the numerator and the denominator by ${mult}: (${numVal} × ${mult}) / (${denVal} × ${mult}) = ${right}.`);
  }

  if (d === 2) {
    // Missing number in equivalent fraction: 3/4 = ?/12
    const basePairs = [[1, 2], [2, 3], [3, 4], [2, 5], [4, 5], [5, 6]];
    const [numVal, denVal] = pick(rng, basePairs);
    const mult = randInt(rng, 2, 4);
    const rightNum = numVal * mult;
    const targetDen = denVal * mult;
    return one('mc', [txt(`What number makes the fraction equation true?`), txt(`{${numVal}/${denVal}} = {? / ${targetDen}}`)],
      mc(rng, String(rightNum), [String(rightNum + 1), String(rightNum - 1), String(numVal + mult)]),
      `To get from denominator ${denVal} to ${targetDen}, multiply by ${mult}. Multiply the numerator by ${mult} as well: ${numVal} × ${mult} = ${rightNum}.`);
  }

  // d === 3: Word problem or non-equivalent identification
  const numVal = randInt(rng, 2, 4);
  const denVal = numVal + randInt(rng, 1, 3);
  const mult = randInt(rng, 2, 3);
  const eq = `{${numVal * mult}/${denVal * mult}}`;
  const person = pick(rng, ['Mia', 'Derrick', 'Camila', 'Tyler']);
  return one('mc', [txt(`${person} painted {${numVal}/${denVal}} of a mural. Which fraction of the mural has an equivalent value?`)],
    mc(rng, eq, [
      `{${numVal * mult}/${denVal * mult + 1}}`,
      `{${numVal + mult}/${denVal + mult}}`,
      `{${numVal * mult - 1}/${denVal * mult}}`,
    ]),
    `Multiply both the numerator and denominator by ${mult} to find an equivalent fraction: ${numVal} × ${mult} = ${numVal * mult} and ${denVal} × ${mult} = ${denVal * mult}. The answer is ${eq}.`);
};

// ---------- 4.3D compare fractions ----------
export const compareFractions: Gen = (rng, d) => {
  if (d === 1) {
    // Same numerator or same denominator
    const isSameDenom = rng() < 0.5;
    if (isSameDenom) {
      const denom = pick(rng, [5, 6, 8, 10, 12]);
      const n1 = randInt(rng, 1, denom - 2);
      const n2 = n1 + randInt(rng, 1, denom - n1);
      return one('mc', [txt(`Which comparison symbol makes the statement true?`), txt(`{${n1}/${denom}} ___ {${n2}/${denom}}`)],
        mc(rng, '<', ['>', '=', '+']),
        `When denominators are the same, compare the numerators: ${n1} < ${n2}. The correct symbol is <.`);
    }
    const numVal = pick(rng, [1, 2, 3]);
    const d1 = pick(rng, [4, 6]);
    const d2 = pick(rng, [8, 10, 12]);
    return one('mc', [txt(`Which comparison symbol makes the statement true?`), txt(`{${numVal}/${d1}} ___ {${numVal}/${d2}}`)],
      mc(rng, '>', ['<', '=', '−']),
      `When numerators are the same, the fraction with the smaller denominator has larger pieces. ${d1} < ${d2}, so {${numVal}/${d1}} > {${numVal}/${d2}}.`);
  }

  if (d === 2) {
    // Different numerator and different denominator
    const pairs = [
      { a: [3, 4], b: [5, 8] }, // 6/8 > 5/8
      { a: [2, 3], b: [5, 6] }, // 4/6 < 5/6
      { a: [1, 2], b: [3, 8] }, // 4/8 > 3/8
      { a: [3, 5], b: [7, 10] }, // 6/10 < 7/10
      { a: [2, 5], b: [1, 3] }, // 6/15 > 5/15
    ];
    const p = pick(rng, pairs);
    const [an, ad] = p.a, [bn, bd] = p.b;
    const crossA = an * bd, crossB = bn * ad;
    const sym = crossA > crossB ? '>' : '<';
    return one('mc', [txt(`Which comparison statement is true?`)],
      mc(rng, `{${an}/${ad}} ${sym} {${bn}/${bd}}`, [
        { text: `{${an}/${ad}} ${sym === '>' ? '<' : '>'} {${bn}/${bd}}`, why: 'Find a common denominator or cross multiply to compare accurately.' },
        `{${an}/${ad}} = {${bn}/${bd}}`,
        `{${an}/${ad}} + {${bn}/${bd}} = 1`,
      ]),
      `Find a common denominator: (${an} × ${bd}) = ${crossA} and (${bn} × ${ad}) = ${crossB}. Since ${crossA} ${sym} ${crossB}, {${an}/${ad}} ${sym} {${bn}/${bd}}.`);
  }

  // d === 3: Word problem
  const p1 = pick(rng, ['Aaliyah', 'Julian', 'Elena']);
  const p2 = pick(rng, ['Lucas', 'Harper', 'Mateo']);
  const f1Less = 3 * 6 < 5 * 4; // 18 < 20 -> true
  const farther = f1Less ? p2 : p1;
  return one('mc', [txt(`${p1} walked {3/4} of a mile. ${p2} walked {5/6} of a mile. Who walked farther and why?`)],
    mc(rng, `${farther} walked farther because {5/6} > {3/4}.`, [
      `${p1} walked farther because 4 < 6.`,
      `They walked the exact same distance because both fractions are close to 1.`,
      `${p1} walked farther because {3/4} > {5/6}.`,
    ]),
    `Convert both fractions to twelfths: {3/4} = {9/12} and {5/6} = {10/12}. Since {10/12} > {9/12}, ${farther} walked farther.`);
};

// ---------- 4.3G fractions and decimals on a number line ----------
export const fractionDecimalNumberLine: Gen = (rng, d) => {
  if (d === 1) {
    // Fraction as distance from 0
    const denoms = [4, 5, 8, 10];
    const denom = pick(rng, denoms);
    const n = randInt(rng, 1, denom - 1);
    const ptVal = n / denom;
    return one('mc', [
      txt(`A point is plotted on the number line.`),
      fig({ kind: 'numberLine', from: 0, to: 1, step: 1 / denom, decimals: 2, point: ptVal, pointLabel: 'P' }, `Number line from 0 to 1 divided into ${denom} equal parts with point P.`),
      txt(`What distance from 0 does point P represent?`),
    ],
      mc(rng, `{${n}/${denom}}`, [
        `{${Math.min(denom, n + 1)}/${denom}}`,
        `{${Math.max(1, n - 1)}/${denom}}`,
        `{${n}/${denom * 2}}`,
      ]),
      `The interval from 0 to 1 is divided into ${denom} equal segments. Point P is at the ${n}${n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th'} tick mark. The distance from 0 is {${n}/${denom}}.`);
  }

  if (d === 2) {
    // Both fraction and decimal for tenths
    const t = randInt(rng, 1, 9);
    const ptVal = t / 10;
    const decStr = `0.${t}`;
    const fracStr = `{${t}/10}`;
    return one('mc', [
      txt(`Point R represents a distance from 0 on the number line.`),
      fig({ kind: 'numberLine', from: 0, to: 1, step: 0.1, decimals: 1, point: ptVal, pointLabel: 'R' }, `Number line with point R at 0.${t}.`),
      txt(`Which pair of numbers represents the location of point R?`),
    ],
      mc(rng, `${fracStr} and ${decStr}`, [
        `{${t}/100} and 0.0${t}`,
        `{${t}/10} and 0.0${t}`,
        `{${t}/100} and ${decStr}`,
      ]),
      `Point R is ${t} tenths from 0. As a fraction this is ${fracStr}, and as a decimal it is ${decStr}.`);
  }

  // d === 3: Hundredths on number line
  const h = randInt(rng, 2, 8) * 10;
  const decStr = `0.${h / 10}`;
  return one('mc', [
    txt(`Point Q is plotted at a distance of {${h}/100} from 0 on a number line. Which decimal represents the same distance?`),
  ],
    mc(rng, decStr, [`0.0${h / 10}`, `${h / 10}.0`, `0.00${h}`]),
    `{${h}/100} is equivalent to {${h / 10}/10}, which is written as ${decStr}.`);
};

export const STRAND1: Record<string, Gen[]> = {
  '4.2A': [placeValueRelation],
  '4.2B': [expandedNotation],
  '4.2C': [compareWholeNumbers],
  '4.2D': [roundWholeNumbers],
  '4.2E': [decimalModels],
  '4.2F': [compareDecimals],
  '4.2G': [relateDecimalsFractions],
  '4.2H': [decimalNumberLine],
  '4.3A': [unitFractionSum],
  '4.3B': [decomposeFraction],
  '4.3C': [equivalentFractions],
  '4.3D': [compareFractions],
  '4.3G': [fractionDecimalNumberLine],
};
