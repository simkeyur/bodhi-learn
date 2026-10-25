// Run with: npm run test:prep. Reading content tests, run once per grade in the reading registry, so a newly
// registered grade is checked automatically.
import assert from 'assert/strict';
import { describe, test } from 'node:test';
import { BUILT_READING, READING, findLesson, findSet, findStandard, hasPractice, makeItem, readingFor, setsFor, shortCode, subjectOf } from '../../src/prep/content/registry.ts';
import { answerComplete, answerKey, emptyAnswer, itemProblems, score } from '../../src/prep/content/scoring.ts';
import { numberedCount, numbering, setProblems, unitName, wordCount } from '../../src/prep/content/rla/passage.ts';
import { mulberry32 } from '../../src/prep/content/rng.ts';

const SEEDS = 120;
const sum = (xs) => xs.reduce((a, b) => a + b, 0);
const textOf = (item) => JSON.stringify({ stem: item.stem, parts: item.parts, explain: item.explain });

test('reading and math codes never clash, and lookups work by code', () => {
  assert.equal(subjectOf('rla:5.3A'), 'rla');
  assert.equal(subjectOf('5.3A'), 'math');
  assert.notEqual(findStandard('rla:5.3A')?.title, findStandard('5.3A')?.title);
  assert.equal(shortCode('rla:5.9D.i'), '5.9D.i');
  for (const g of [1, 3, 5, 8]) assert.ok(BUILT_READING.includes(readingFor(g).grade));
});

test('passage numbering follows the test: paragraphs, lines, speeches, sentences', () => {
  const p = { id: 'x', title: 'x', genre: 'fiction', blocks: [
    { kind: 'heading', text: 'h' }, { kind: 'p', text: 'a' }, { kind: 'sidebar', title: 's', text: 't' }, { kind: 'p', text: 'b' },
  ] };
  assert.deepEqual(numbering(p), [null, 1, null, 2]);
  const d = { id: 'd', title: 'd', genre: 'fiction', blocks: [{ kind: 'sentences', sentences: ['a', 'b'] }, { kind: 'sentences', sentences: ['c'] }] };
  assert.deepEqual(numbering(d), [1, 3]);
  assert.equal(numberedCount(d), 3);
  assert.equal(unitName(d), 'sentence');
});

for (const grade of BUILT_READING) {
  const r = READING[grade];
  const { standards, strands, sets, generators, lessons, essays, blueprint } = r;

  describe(`grade ${grade} reading`, () => {
    test('standards match TEA\'s blueprint, per strand', () => {
      const count = (strand, kind) => standards.filter((s) => s.strand === strand && s.kind === kind).length;
      assert.deepEqual(strands.map((s) => s.id), blueprint.readiness.map((_, i) => i + 1));
      assert.deepEqual(strands.map((s) => count(s.id, 'readiness')), blueprint.readiness);
      assert.deepEqual(strands.map((s) => count(s.id, 'supporting')), blueprint.supporting);
      assert.equal(standards.length, sum(blueprint.readiness) + sum(blueprint.supporting));
      assert.equal(new Set(standards.map((s) => s.code)).size, standards.length, 'duplicate codes');
      for (const s of standards) {
        assert.match(s.code, new RegExp(`^rla:${grade}\\.`), `${s.code} should be rla:${grade}.…`);
        assert.ok(s.title && s.text, s.code);
      }
    });

    test('every set is well formed: lengths, numbering, citations, choices', () => {
      assert.equal(new Set(sets.map((s) => s.id)).size, sets.length, 'duplicate set ids');
      for (const set of sets) {
        assert.equal(set.grade, grade, set.id);
        assert.equal(findSet(set.id), set);
        assert.deepEqual(setProblems(set), [], `${set.id}:\n  ${setProblems(set).join('\n  ')}`);
        for (const it of set.items) {
          assert.ok(findStandard(it.standard), `${it.id}: unknown standard ${it.standard}`);
          assert.equal(score(it, answerKey(it)), it.points, `${it.id}: key does not score full marks`);
          assert.equal(score(it, emptyAnswer(it)), 0, it.id);
          // Two-part questions are allowed in reading (TEA's RLA blueprint lists multipart)
        }
      }
    });

    test('no passage or question repeats across sets', () => {
      const passages = sets.flatMap((s) => s.passages.map((p) => p.id));
      assert.equal(new Set(passages).size, passages.length, 'duplicate passage ids');
      const stems = sets.flatMap((s) => s.items.map((i) => `${s.id}|${JSON.stringify(i.stem)}|${JSON.stringify(i.parts)}`));
      assert.equal(new Set(stems).size, stems.length, 'a question repeats');
    });

    test('generators make valid questions at every difficulty', () => {
      for (const code of Object.keys(generators)) {
        assert.ok(findStandard(code), `generator for unknown standard ${code}`);
        const seen = new Set();
        for (const d of [1, 2, 3]) {
          for (let seed = 1; seed <= SEEDS; seed++) {
            const item = makeItem(code, d, mulberry32(seed * 7919 + d));
            const where = `${code} d${d} seed ${seed}`;
            assert.equal(item.subject, 'rla', where);
            assert.deepEqual(itemProblems(item), [], `${where}: ${itemProblems(item).join('; ')}`);
            assert.ok(answerComplete(item, answerKey(item)), where);
            assert.equal(score(item, answerKey(item)), item.points, where);
            for (const p of item.parts) if (p.type === 'mc') assert.equal(p.choices.length, 4, `${where}: needs 4 choices`);
            assert.doesNotMatch(textOf(item), /___/, `${where}: an unfilled blank`);
            if (d === 2) seen.add(textOf(item));
          }
        }
        assert.ok(seen.size >= 8, `${code} only made ${seen.size} different questions`);
      }
    });

    test('walkthroughs: words, ideas, and samples for passage skills', () => {
      for (const l of lessons) {
        assert.ok(findStandard(l.code), `walkthrough for unknown standard ${l.code}`);
        assert.ok(l.goal.length > 10 && l.words.length >= 1 && l.ideas.length >= 2, l.code);
        // A walkthrough needs a way to show an example: a generator, or two samples
        if (!generators[l.code]) {
          assert.equal(l.samples?.length, 2, `${l.code} needs two samples (no generator)`);
          for (const s of l.samples) {
            assert.deepEqual(itemProblems(s.item), [], `${l.code} sample: ${itemProblems(s.item).join('; ')}`);
            assert.equal(s.item.standard, l.code);
            assert.ok(wordCount(s.passage) >= 25, `${l.code}: sample passage too short`);
          }
        }
        assert.equal(findLesson(l.code), l);
      }
    });

    test('essay prompts point at a set of this grade and have a checklist', () => {
      for (const e of essays) {
        assert.equal(findSet(e.setId)?.grade, grade, e.id);
        assert.ok(e.prompt.length > 40 && e.checklist.every((c) => c.items.length >= 2), e.id);
      }
    });

    test('coverage so far (grade 5 R0 is partial; the full build needs every standard)', () => {
      const covered = standards.filter((s) => hasPractice(s.code));
      // Every readiness standard with questions should have at least 2 to practise from
      for (const s of covered) {
        const n = setsFor(s.code).reduce((t, set) => t + set.items.filter((i) => i.standard === s.code).length, 0);
        assert.ok(n >= 1 || r.generators[s.code], s.code);
      }
      assert.ok(covered.length >= 10, `only ${covered.length} standards have practice`);
    });
  });
}
