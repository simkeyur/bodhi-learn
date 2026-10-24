// Run with: npm test  (Node 22.18+ imports .ts directly)
import assert from 'assert/strict';
import { test } from 'node:test';
import { G5_MATH, G5_MATH_STRANDS } from '../../src/prep/data/standards/g5-math.ts';
import { G5_GENERATORS, makeG5MathItem } from '../../src/prep/content/generators/g5/index.ts';
import { answerComplete, emptyAnswer, itemProblems, partRight, score } from '../../src/prep/content/scoring.ts';
import { dec, frac, money, plain } from '../../src/prep/content/generators/build.ts';
import { mulberry32 } from '../../src/prep/content/rng.ts';

const SEEDS = 150;

// The answer key as an Answer, so we can score it
const keyOf = (item) => item.parts.map((p) => (p.type === 'inline' ? p.blanks.map((b) => b.correct) : [...p.correct]));

test('grade 5 math standards match the SST blueprint: 12 readiness, 24 supporting, per strand', () => {
  assert.equal(G5_MATH.length, 36);
  assert.equal(new Set(G5_MATH.map((s) => s.code)).size, 36);
  const count = (strand, kind) => G5_MATH.filter((s) => s.strand === strand && s.kind === kind).length;
  assert.deepEqual([1, 2, 3, 4].map((n) => [count(n, 'readiness'), count(n, 'supporting')]), [[2, 4], [6, 9], [3, 5], [1, 6]]);
  assert.deepEqual(G5_MATH_STRANDS.map((s) => s.id), [1, 2, 3, 4]);
});

test('every standard has a generator, and every generator belongs to a standard', () => {
  for (const s of G5_MATH) assert.ok(G5_GENERATORS[s.code]?.length, `no generator for ${s.code}`);
  for (const code of Object.keys(G5_GENERATORS)) assert.ok(G5_MATH.some((s) => s.code === code), `generator for unknown standard ${code}`);
});

test('generated items are valid at every difficulty, and the answer key scores full marks', () => {
  for (const s of G5_MATH) {
    for (const d of [1, 2, 3]) {
      for (let seed = 1; seed <= SEEDS; seed++) {
        const item = makeG5MathItem(s.code, d, mulberry32(seed * 7919 + d));
        const problems = itemProblems(item);
        assert.deepEqual(problems, [], `${s.code} d${d} seed ${seed}: ${problems.join('; ')}\n${JSON.stringify(item, null, 1).slice(0, 1500)}`);
        const key = keyOf(item);
        assert.ok(answerComplete(item, key));
        assert.equal(score(item, key), item.points, `${s.code} d${d} seed ${seed}: key does not score full marks`);
        assert.equal(score(item, emptyAnswer(item)), 0);
      }
    }
  }
});

test('each standard offers some variety', () => {
  for (const s of G5_MATH) {
    const seen = new Set();
    for (let seed = 1; seed <= 40; seed++) {
      const { stem, parts } = makeG5MathItem(s.code, 2, mulberry32(seed));
      seen.add(JSON.stringify({ stem, parts }));
    }
    assert.ok(seen.size >= 8, `${s.code} only made ${seen.size} different questions in 40 tries`);
  }
});

test('scoring gives partial credit like TEA: per drop-down, per pick, per part', () => {
  const inline2 = { type: 'inline', points: 2, parts: [{ type: 'inline', segments: [{ blank: 0 }, { blank: 1 }], blanks: [{ options: ['a', 'b'], correct: 0 }, { options: ['a', 'b'], correct: 1 }] }] };
  assert.equal(score(inline2, [[0, 1]]), 2);
  assert.equal(score(inline2, [[0, 0]]), 1);
  assert.equal(score(inline2, [[1, 0]]), 0);

  const multi2 = { type: 'multiselect', points: 2, parts: [{ type: 'multiselect', choices: [{}, {}, {}, {}, {}], correct: [1, 3] }] };
  assert.equal(score(multi2, [[1, 3]]), 2);
  assert.equal(score(multi2, [[1, 2]]), 1);
  assert.equal(score(multi2, [[0, 2]]), 0);

  const mcPart = (c) => ({ type: 'mc', choices: [{}, {}, {}, {}], correct: [c] });
  const multipart = { type: 'multipart', points: 2, parts: [mcPart(0), mcPart(2)] };
  assert.equal(score(multipart, [[0], [2]]), 2);
  assert.equal(score(multipart, [[0], [1]]), 1);
  assert.equal(score(multipart, [[3], [1]]), 0);

  const mc1 = { type: 'mc', points: 1, parts: [mcPart(2)] };
  assert.equal(score(mc1, [[2]]), 1);
  assert.equal(score(mc1, [[1]]), 0);
  assert.ok(partRight(mcPart(2), [2]));
});

test('number and fraction formatting', () => {
  assert.equal(dec(4305, 3), '4.305');
  assert.equal(dec(4350, 3), '4.35');
  assert.equal(dec(4350, 3, true), '4.350');
  assert.equal(dec(12, 2), '0.12');
  assert.equal(dec(123456, 2), '1,234.56');
  assert.equal(dec(500, 2), '5');
  assert.equal(money(1250), '$12.50');
  assert.equal(frac(2, 4), '{1/2}');
  assert.equal(frac(7, 3), '2{1/3}');
  assert.equal(frac(6, 3), '2');
  assert.equal(plain('2{1/3} + {1/4}'), '2 1/3 + 1/4');
});
