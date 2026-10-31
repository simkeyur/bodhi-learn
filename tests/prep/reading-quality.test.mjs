// Run with: npm run test:prep. Quality rules the structural tests can't see. A question must not give itself away,
// and a passage must be readable at its grade.
import assert from 'assert/strict';
import { describe, test } from 'node:test';
import { BUILT_READING, READING } from '../../src/prep/content/registry.ts';
import { readingLevel } from '../../src/prep/content/rla/passage.ts';

// Reading level bands, using the formula in passage.ts: the grade's prose should average no more than about two
// grades above it, and no single passage more than four and a half. Poems and plays aren't measured.
const maxAverage = (grade) => Math.max(5, grade + 2);
const maxSingle = (grade) => maxAverage(grade) + 2.5;

const choiceParts = (set) => set.items.flatMap((it) => it.parts.filter((p) => p.type === 'mc'));
const prose = (set) => (set.kind === 'reading' ? set.passages.filter((p) => !['poetry', 'drama'].includes(p.genre)) : []);

for (const grade of BUILT_READING) {
  const { sets } = READING[grade];
  describe(`grade ${grade} reading quality`, () => {
    test('the right answer is not usually the longest choice', () => {
      const parts = sets.flatMap(choiceParts);
      const longest = parts.filter((p) => {
        const sizes = p.choices.map((c) => (c.text ?? '').length);
        return sizes[p.correct[0]] === Math.max(...sizes);
      }).length;
      const share = longest / parts.length;
      assert.ok(share <= 0.45, `the right answer is the longest choice in ${Math.round(share * 100)}% of questions (at most 45%)`);
    });

    test('right answers are spread across the letters', () => {
      const parts = sets.flatMap(choiceParts);
      for (const letter of [0, 1, 2, 3]) {
        const share = parts.filter((p) => p.correct[0] === letter).length / parts.length;
        assert.ok(share >= 0.14 && share <= 0.36, `letter ${'ABCD'[letter]} is right ${Math.round(share * 100)}% of the time`);
      }
    });

    test('passages are readable at this grade', () => {
      const levels = sets.flatMap(prose).map((p) => ({ id: p.id, level: readingLevel(p) }));
      const average = levels.reduce((n, p) => n + p.level, 0) / levels.length;
      assert.ok(average <= maxAverage(grade), `average reading level ${average.toFixed(1)}, want at most ${maxAverage(grade)}`);
      const hard = levels.filter((p) => p.level > maxSingle(grade)).map((p) => `${p.id} ${p.level.toFixed(1)}`);
      assert.deepEqual(hard, [], `above ${maxSingle(grade)}: ${hard.join(', ')}`);
    });
  });
}

test('no poem and no set title is used in two grades', () => {
  const seen = new Map();
  for (const grade of BUILT_READING) {
    for (const set of READING[grade].sets) {
      for (const p of set.passages) {
        const keys = [`title:${set.title.toLowerCase()}`];
        const firstLine = p.blocks.find((b) => b.kind === 'line')?.text;
        if (firstLine) keys.push(`poem:${firstLine.toLowerCase().replace(/[^a-z ]/g, '')}`);
        for (const k of keys) {
          assert.ok(!seen.has(k) || seen.get(k) === grade, `${k} is in grades ${seen.get(k)} and ${grade}`);
          seen.set(k, grade);
        }
      }
    }
  }
});
