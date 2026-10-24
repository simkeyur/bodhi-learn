// Strand 1: Numerical Representations and Relationships (Grade 8)
// Standards: 8.2A, 8.2B, 8.2C, 8.2D
// Pure: no React or browser APIs.

import type { Gen } from '../build.ts';
import { mc, one, txt, fig, num } from '../build.ts';
import { randInt, pick } from '../../rng.ts';

export const G8_STRAND1: Record<string, Gen[]> = {
  // 8.2A: Sets and subsets of real numbers
  '8.2A': [
    (rng, diff) => {
      if (diff === 1) {
        const item = pick(rng, [
          { val: '−14', set: 'Integers', wrong: ['Whole numbers', 'Natural numbers', 'Irrational numbers'] },
          { val: '0', set: 'Whole numbers', wrong: ['Natural numbers', 'Irrational numbers', 'Non-real numbers'] },
          { val: '{3/5}', set: 'Rational numbers', wrong: ['Integers', 'Whole numbers', 'Natural numbers'] },
          { val: '√5', set: 'Irrational numbers', wrong: ['Rational numbers', 'Integers', 'Whole numbers'] },
        ]);
        return one(
          'mc',
          [txt(`Which set of numbers contains the number **${item.val}** but does NOT include natural numbers?`)],
          mc(rng, item.set, item.wrong),
          `The number ${item.val} belongs to the set of ${item.set.toLowerCase()}.`,
        );
      }

      if (diff === 2) {
        const statements = [
          { correct: 'All whole numbers are integers and rational numbers.', wrong: ['All rational numbers are integers.', 'All real numbers are rational.', 'Integers cannot be negative.'] },
          { correct: 'Irrational numbers and rational numbers do not overlap.', wrong: ['All square roots are irrational numbers.', 'Natural numbers include negative numbers.', 'The number 0 is a natural number.'] },
          { correct: 'Every integer can be written in the form a/b where b = 1.', wrong: ['Every rational number is an integer.', 'Irrational numbers can be written as fractions.', 'All decimals are irrational.'] },
        ];
        const s = pick(rng, statements);
        return one(
          'mc',
          [txt('Which statement correctly describes the relationship between sets of real numbers?')],
          mc(rng, s.correct, s.wrong),
          `${s.correct} Real numbers are partitioned into rational and irrational numbers. Integers are a subset of rational numbers.`,
        );
      }

      // diff 3: classification
      const options = ['a rational number only', 'an integer and a rational number', 'an irrational number', 'a whole number, integer, and rational number'];
      const pickVal = pick(rng, [
        { val: '√49', ans: 'a whole number, integer, and rational number', exp: '√49 = 7, which is a natural, whole, integer, and rational number.' },
        { val: '−36/4', ans: 'an integer and a rational number', exp: '−36/4 = −9, which is an integer and a rational number, but not a whole number.' },
        { val: '√18', ans: 'an irrational number', exp: '18 is not a perfect square, so √18 is non-terminating and non-repeating, making it irrational.' },
        { val: '2.45', ans: 'a rational number only', exp: '2.45 is a terminating decimal (245/100), so it is rational, but not an integer.' },
      ]);
      const wrong = options.filter((o) => o !== pickVal.ans);
      return one(
        'mc',
        [txt(`How should the number **${pickVal.val}** be classified within the real number system?`)],
        mc(rng, pickVal.ans, wrong),
        pickVal.exp,
      );
    },
  ],

  // 8.2B: Approximate the value of an irrational number
  '8.2B': [
    (rng, diff) => {
      if (diff === 1) {
        const nonSquares = [5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 19, 20, 24];
        const n = pick(rng, nonSquares);
        const lower = Math.floor(Math.sqrt(n));
        const upper = lower + 1;
        const correct = `Between ${lower} and ${upper}`;
        const wrong = [
          `Between ${lower - 1} and ${lower}`,
          `Between ${upper} and ${upper + 1}`,
          `Between ${upper + 1} and ${upper + 2}`,
        ];
        return one(
          'mc',
          [txt(`Between which two consecutive whole numbers does **√${n}** lie?`)],
          mc(rng, correct, wrong),
          `Since ${lower}² = ${lower * lower} and ${upper}² = ${upper * upper}, and ${lower * lower} < ${n} < ${upper * upper}, √${n} lies between ${lower} and ${upper}.`,
        );
      }

      if (diff === 2) {
        const target = pick(rng, [
          { n: 10, approx: '3.2', distractors: ['2.8', '3.6', '4.1'] },
          { n: 20, approx: '4.5', distractors: ['3.9', '5.1', '5.5'] },
          { n: 32, approx: '5.7', distractors: ['4.8', '6.2', '6.6'] },
          { n: 50, approx: '7.1', distractors: ['6.5', '7.7', '8.2'] },
          { n: 80, approx: '8.9', distractors: ['7.9', '9.4', '8.1'] },
        ]);
        return one(
          'mc',
          [txt(`Which value is the closest approximation to **√${target.n}**?`)],
          mc(rng, target.approx, target.distractors),
          `Estimate √${target.n}: compare with nearby perfect squares. √${target.n} ≈ ${target.approx}.`,
        );
      }

      // diff 3: number line location
      const n = pick(rng, [11, 14, 18, 22, 27, 35, 42]);
      const val = Math.round(Math.sqrt(n) * 10) / 10;
      const lo = Math.floor(Math.sqrt(n)) - 1;
      const hi = lo + 4;
      return one(
        'mc',
        [
          txt(`Point P represents **√${n}** on a number line.`),
          fig({ kind: 'numberLine', from: lo, to: hi, step: 1, decimals: 1, point: val, pointLabel: 'P' }, `Number line with point P at approximately ${val}`),
          txt('Which number is closest to the value of point P?'),
        ],
        mc(rng, `${val}`, [`${(val - 0.7).toFixed(1)}`, `${(val + 0.6).toFixed(1)}`, `${(val + 1.2).toFixed(1)}`]),
        `√${n} is approximately ${val}. Point P on the number line is at ${val}.`,
      );
    },
  ],

  // 8.2C: Convert between standard decimal notation and scientific notation
  '8.2C': [
    (rng, diff) => {
      if (diff === 1) {
        const a = randInt(rng, 2, 8);
        const b = randInt(rng, 1, 9);
        const exp = randInt(rng, 4, 7);
        const coeff = `${a}.${b}`;
        const standardNum = (a + b / 10) * 10 ** exp;
        const correct = `${coeff} × 10${exp === 4 ? '⁴' : exp === 5 ? '⁵' : exp === 6 ? '⁶' : '⁷'}`;
        const wrong = [
          `${a}${b} × 10${exp === 4 ? '³' : exp === 5 ? '⁴' : exp === 6 ? '⁵' : '⁶'}`,
          `${coeff} × 10${exp === 4 ? '⁵' : exp === 5 ? '⁶' : exp === 6 ? '⁷' : '⁸'}`,
          `${coeff} × 10⁻${exp}`,
        ];
        return one(
          'mc',
          [txt(`Write **${num(standardNum)}** in scientific notation.`)],
          mc(rng, correct, wrong),
          `In scientific notation, the coefficient must be between 1 and 10. Moving the decimal ${exp} places left gives ${coeff} × 10^${exp}.`,
        );
      }

      if (diff === 2) {
        const a = randInt(rng, 1, 7);
        const b = randInt(rng, 2, 8);
        const exp = randInt(rng, 3, 5);
        const coeff = `${a}.${b}`;
        const decVal = (a + b / 10) / 10 ** exp;
        const decStr = decVal.toFixed(exp + 1);
        const correct = `${coeff} × 10⁻${exp}`;
        const wrong = [
          `${coeff} × 10⁻${exp + 1}`,
          `${coeff} × 10⁻${exp - 1}`,
          `${a}${b} × 10⁻${exp}`,
        ];
        return one(
          'mc',
          [txt(`Write the decimal **${decStr}** in scientific notation.`)],
          mc(rng, correct, wrong),
          `Move the decimal point ${exp} places to the right to get ${coeff}. Since the original number is less than 1, the exponent is negative: ${coeff} × 10⁻${exp}.`,
        );
      }

      // diff 3: scientific to standard
      const a = randInt(rng, 3, 9);
      const b = randInt(rng, 1, 8);
      const exp = randInt(rng, 5, 6);
      const coeff = `${a}.${b}`;
      const val = (a + b / 10) * 10 ** exp;
      const correct = num(val);
      const wrong = [
        num(val * 10),
        num(Math.round(val / 10)),
        num(val + 100000),
      ];
      return one(
        'mc',
        [txt(`What is **${coeff} × 10${exp === 5 ? '⁵' : '⁶'}** written in standard decimal form?`)],
        mc(rng, correct, wrong),
        `Multiply ${coeff} by 10^${exp} by moving the decimal point ${exp} places to the right: ${correct}.`,
      );
    },
  ],

  // 8.2D: Order a set of real numbers
  '8.2D': [
    (rng, diff) => {
      if (diff === 1) {
        const items = [
          { text: '3.4', val: 3.4 },
          { text: '√10', val: Math.sqrt(10) },
          { text: '3{1/2}', val: 3.5 },
          { text: 'π', val: Math.PI },
        ];
        const sorted = [...items].sort((a, b) => a.val - b.val);
        const correct = sorted.map((s) => s.text).join(', ');
        const wrong = [
          [sorted[1], sorted[0], sorted[2], sorted[3]].map((s) => s.text).join(', '),
          [sorted[3], sorted[2], sorted[1], sorted[0]].map((s) => s.text).join(', '),
          [sorted[0], sorted[2], sorted[1], sorted[3]].map((s) => s.text).join(', '),
        ];
        return one(
          'mc',
          [txt('Which list shows these real numbers in order from **least to greatest**?'), txt(items.map((i) => i.text).join('   ·   '))],
          mc(rng, correct, wrong),
          `Convert each number to a decimal: π ≈ 3.14, √10 ≈ 3.16, 3.4 = 3.40, 3{1/2} = 3.50. From least to greatest: ${correct}.`,
        );
      }

      if (diff === 2) {
        const items = [
          { text: '−√17', val: -Math.sqrt(17) },
          { text: '−4.2', val: -4.2 },
          { text: '√9', val: 3 },
          { text: '320%', val: 3.2 },
        ];
        const sorted = [...items].sort((a, b) => a.val - b.val);
        const correct = sorted.map((s) => s.text).join(', ');
        const wrong = [
          [sorted[1], sorted[0], sorted[2], sorted[3]].map((s) => s.text).join(', '),
          [sorted[0], sorted[1], sorted[3], sorted[2]].map((s) => s.text).join(', '),
          [sorted[3], sorted[2], sorted[1], sorted[0]].map((s) => s.text).join(', '),
        ];
        return one(
          'mc',
          [txt('Which list shows these numbers ordered from **least to greatest**?'), txt(items.map((i) => i.text).join('   ·   '))],
          mc(rng, correct, wrong),
          `Convert each to a decimal: −4.2, −√17 ≈ −4.12, √9 = 3.0, 320% = 3.2. Order: ${correct}.`,
        );
      }

      // diff 3: greatest to least
      const items = [
        { text: '2π', val: 2 * Math.PI },
        { text: '√38', val: Math.sqrt(38) },
        { text: '6.3', val: 6.3 },
        { text: '6{1/4}', val: 6.25 },
      ];
      const sorted = [...items].sort((a, b) => b.val - a.val);
      const correct = sorted.map((s) => s.text).join(', ');
      const wrong = [
        [sorted[1], sorted[0], sorted[2], sorted[3]].map((s) => s.text).join(', '),
        [sorted[3], sorted[2], sorted[1], sorted[0]].map((s) => s.text).join(', '),
        [sorted[0], sorted[2], sorted[1], sorted[3]].map((s) => s.text).join(', '),
      ];
      return one(
        'mc',
        [txt('Which list shows the numbers in order from **greatest to least**?'), txt(items.map((i) => i.text).join('   ·   '))],
        mc(rng, correct, wrong),
        `Convert to decimals: 6.30, 2π ≈ 6.28, 6{1/4} = 6.25, √38 ≈ 6.16. From greatest to least: ${correct}.`,
      );
    },
  ],
};
