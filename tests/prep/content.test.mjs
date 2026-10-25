// Run with: npm run test:prep  (Node 22.18+ imports .ts directly)
// The content tests run once per grade in the registry, so a newly registered grade is checked automatically.
import assert from 'assert/strict';
import { describe, test } from 'node:test';
import { BUILT_GRADES, GRADES, contentFor, findLesson, findStandard, makeItem } from '../../src/prep/content/registry.ts';
import { answerComplete, answerKey, emptyAnswer, itemProblems, partRight, score } from '../../src/prep/content/scoring.ts';
import { dec, frac, money, numberOptions, ordinal, plain } from '../../src/prep/content/generators/build.ts';
import { explainSteps } from '../../src/prep/content/lessons/steps.ts';
import { mulberry32 } from '../../src/prep/content/rng.ts';

const SEEDS = 150;
const sum = (xs) => xs.reduce((a, b) => a + b, 0);

test('the registry has at least one grade, and lookups work by standard code', () => {
  assert.ok(BUILT_GRADES.length >= 1);
  for (const g of BUILT_GRADES) {
    const first = GRADES[g].standards[0];
    assert.equal(findStandard(first.code), first);
    assert.equal(findLesson(first.code)?.code, first.code);
  }
  assert.equal(findStandard('99.1A'), undefined);
});

test('a grade without content gets the nearest built grade', () => {
  for (const g of BUILT_GRADES) assert.equal(contentFor(g).grade, g);
  for (const g of [3, 4, 5, 6, 7, 8]) {
    const shown = contentFor(g).grade;
    const best = Math.min(...BUILT_GRADES.map((b) => Math.abs(b - g)));
    assert.equal(Math.abs(shown - g), best, `grade ${g} got ${shown}`);
  }
  assert.ok(BUILT_GRADES.includes(contentFor(null).grade));
});

for (const grade of BUILT_GRADES) {
  const content = GRADES[grade];
  const { standards, strands, generators, lessons, blueprint } = content;

  describe(`grade ${grade} ${content.subject}`, () => {
    test('standards match TEA\'s blueprint, per strand', () => {
      const count = (strand, kind) => standards.filter((s) => s.strand === strand && s.kind === kind).length;
      assert.deepEqual(strands.map((s) => s.id), blueprint.readiness.map((_, i) => i + 1));
      assert.deepEqual(strands.map((s) => count(s.id, 'readiness')), blueprint.readiness);
      assert.deepEqual(strands.map((s) => count(s.id, 'supporting')), blueprint.supporting);
      assert.equal(standards.length, sum(blueprint.readiness) + sum(blueprint.supporting));
      assert.equal(new Set(standards.map((s) => s.code)).size, standards.length, 'duplicate codes');
      for (const s of standards) {
        assert.equal(Number.parseInt(s.code, 10), grade, `${s.code} should start with the grade`);
        assert.ok(s.title && s.text, s.code);
      }
    });

    test('every standard has a generator, and every generator belongs to a standard', () => {
      for (const s of standards) assert.ok(generators[s.code]?.length, `no generator for ${s.code}`);
      for (const code of Object.keys(generators)) assert.ok(standards.some((s) => s.code === code), `generator for unknown standard ${code}`);
    });

    test('generated questions are valid at every difficulty, and the answer key scores full marks', () => {
      for (const s of standards) {
        for (const d of [1, 2, 3]) {
          for (let seed = 1; seed <= SEEDS; seed++) {
            const item = makeItem(s.code, d, mulberry32(seed * 7919 + d));
            const where = `${s.code} d${d} seed ${seed}`;
            assert.equal(item.grade, grade, where);
            assert.equal(item.standard, s.code, where);
            const problems = itemProblems(item);
            assert.deepEqual(problems, [], `${where}: ${problems.join('; ')}\n${JSON.stringify(item, null, 1).slice(0, 1500)}`);
            const key = answerKey(item);
            assert.ok(answerComplete(item, key), where);
            assert.equal(score(item, key), item.points, `${where}: key does not score full marks`);
            assert.equal(score(item, emptyAnswer(item)), 0, where);
            for (const p of item.parts) if (p.type === 'mc') assert.equal(p.choices.length, 4, `${where}: multiple choice needs 4 choices`);
            // TEA's SST math blueprints list multiple choice, multiselect and inline choice only
            if (content.subject === 'math') assert.notEqual(item.type, 'multipart', `${where}: no two-part questions in math`);
            const words = JSON.stringify({ stem: item.stem, parts: item.parts, explain: item.explain });
            assert.doesNotMatch(words, /(?<!1)[123]th\b/, `${where}: wrong ordinal ("3th")`);
            // Negative numbers start in grade 6 (6.2A)
            if (grade < 6) assert.doesNotMatch(words, /(?<![\w.)])[-−]\d/, `${where}: negative number before grade 6`);
          }
        }
      }
    });

    test('each standard offers some variety', () => {
      for (const s of standards) {
        const seen = new Set();
        for (let seed = 1; seed <= 40; seed++) {
          const { stem, parts } = makeItem(s.code, 2, mulberry32(seed));
          seen.add(JSON.stringify({ stem, parts }));
        }
        assert.ok(seen.size >= 8, `${s.code} only made ${seen.size} different questions in 40 tries`);
      }
    });

    test('every standard has a walkthrough with words and big ideas', () => {
      assert.equal(lessons.length, standards.length);
      for (const s of standards) {
        const l = findLesson(s.code);
        assert.ok(l, `no walkthrough for ${s.code}`);
        assert.ok(l.goal.length > 10, s.code);
        assert.ok(l.words.length >= 1, `${s.code} needs key words`);
        assert.ok(l.ideas.length >= 2, `${s.code} needs at least two big ideas`);
        for (const idea of l.ideas) {
          assert.ok(idea.title && idea.text, s.code);
          if (idea.figure) {
            assert.ok(idea.alt, `${s.code}: figure without alt text`);
            if (idea.figure.kind === 'coordGrid') assert.ok(idea.figure.points.every((p) => p.x <= idea.figure.max && p.y <= idea.figure.max), `${s.code}: point off the grid`);
            if (idea.figure.kind === 'barGraph') assert.equal(idea.figure.categories.length, idea.figure.values.length, s.code);
            if (idea.figure.kind === 'dotPlot') assert.equal(idea.figure.labels.length, idea.figure.counts.length, s.code);
          }
        }
      }
    });

    test('worked explanations split into readable steps', () => {
      for (const s of standards) {
        for (let seed = 1; seed <= 20; seed++) {
          const steps = explainSteps(makeItem(s.code, 1, mulberry32(seed)).explain);
          assert.ok(steps.length >= 1 && steps.every((x) => x.length > 2), `${s.code}: ${steps}`);
        }
      }
    });
  });
}

// ---------- Shared pieces ----------

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
  assert.deepEqual([1, 2, 3, 4, 11, 12, 13, 21, 22, 101].map(ordinal), ['1st', '2nd', '3rd', '4th', '11th', '12th', '13th', '21st', '22nd', '101st']);
  assert.deepEqual(numberOptions(10, [12, 8, 10, -1, 30, 40]), ['8', '10', '12', '30']);
});

test('explanation steps never break inside a decimal', () => {
  assert.deepEqual(explainSteps('2.4 × 1.5 = 3.6. Count the places. 3 groups of 0.5 is 1.5.'), ['2.4 × 1.5 = 3.6.', 'Count the places.', '3 groups of 0.5 is 1.5.']);
  assert.deepEqual(explainSteps('One step only.'), ['One step only.']);
});
