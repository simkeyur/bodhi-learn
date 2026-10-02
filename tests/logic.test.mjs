// Run with: npm run test:logic  (needs Node 22.18+, which can import .ts directly)
import assert from 'assert/strict';
import { test } from 'node:test';
import {
  BOT_LEVELS, MACHINE_RULES, MAX_NUMBER, MAX_REPEAT, MIN_REPEAT, PATTERN_WORD,
  appendDir, blockCount, cleanProgram, cycleRepeat, expandProgram, makeMachineQuestion,
  makePatternQuestion, mulberry32, openRepeat, removeLast, ruleOutput, simulate,
} from '../src/data/logicData.ts';

const BRACKETS = ['pre-k', 'kindergarten', 'grade1'];
const DIRS = ['up', 'down', 'left', 'right'];

// ---------- Code the Bot ----------

const level = (overrides = {}) => ({
  id: 't', cols: 3, rows: 3, start: { x: 0, y: 1 }, goal: { x: 2, y: 1 }, rocks: [], maxBlocks: 6, loops: false,
  ...overrides,
});

test('simulate: reaching the star ends the run', () => {
  const r = simulate(level(), ['right', 'right', 'up']);
  assert.equal(r.outcome, 'goal');
  assert.equal(r.path.length, 3); // start + 2 steps; the extra step is never taken
});

test('simulate: rocks and walls make the bot bump', () => {
  const rock = simulate(level({ rocks: [{ x: 1, y: 1 }] }), ['right']);
  assert.equal(rock.outcome, 'bump');
  assert.deepEqual(rock.blocked, { x: 1, y: 1 });
  assert.deepEqual(rock.path, [{ x: 0, y: 1 }]);

  const wall = simulate(level(), ['left']);
  assert.equal(wall.outcome, 'bump');
  assert.deepEqual(wall.blocked, { x: -1, y: 1 });
});

test('simulate: stopping early is "short"', () => {
  assert.equal(simulate(level(), ['right']).outcome, 'short');
  assert.equal(simulate(level(), []).outcome, 'short');
});

test('expandProgram and blockCount handle repeat blocks', () => {
  const program = ['up', { repeat: 3, body: ['right', 'down'] }, 'left'];
  assert.equal(blockCount(program), 1 + (1 + 2) + 1);
  const steps = expandProgram(program);
  assert.deepEqual(steps.map((s) => s.dir), ['up', 'right', 'down', 'right', 'down', 'right', 'down', 'left']);
  assert.deepEqual(steps[1], { dir: 'right', block: 1, inner: 0 });
  assert.deepEqual(steps[7], { dir: 'left', block: 2, inner: null });
});

test('editing helpers', () => {
  let p = appendDir([], 'up', false);
  p = openRepeat(p);
  p = appendDir(p, 'right', true);
  p = appendDir(p, 'right', true);
  assert.deepEqual(p, ['up', { repeat: MIN_REPEAT, body: ['right', 'right'] }]);

  // arrows added after the repeat is closed go outside it
  assert.deepEqual(appendDir(p, 'down', false).at(-1), 'down');

  let undone = removeLast(p, true);
  assert.deepEqual(undone.program.at(-1).body, ['right']);
  assert.equal(undone.editing, true);
  undone = removeLast(removeLast(undone.program, true).program, true); // empties the body, then drops the repeat
  assert.deepEqual(undone.program, ['up']);
  assert.equal(undone.editing, false);

  assert.deepEqual(cleanProgram(['up', { repeat: 2, body: [] }]), ['up']);

  const cycled = cycleRepeat(['up', { repeat: MAX_REPEAT, body: ['left'] }], 1);
  assert.equal(cycled[1].repeat, MIN_REPEAT);
  assert.equal(cycleRepeat(cycled, 1)[1].repeat, MIN_REPEAT + 1);
});

// Every program of at most `max` blocks (and with Repeat if allowed), checked against the level
function solvable(lvl, allowLoops) {
  const run = (program) => simulate(lvl, expandProgram(program).map((s) => s.dir)).outcome === 'goal';

  function search(program, used) {
    if (used > 0 && run(program)) return true;
    if (used >= lvl.maxBlocks) return false;
    for (const dir of DIRS) {
      if (search([...program, dir], used + 1)) return true;
    }
    if (allowLoops) {
      const room = lvl.maxBlocks - used - 1; // blocks left for the repeat's body
      const bodies = [];
      const grow = (body) => {
        if (body.length) bodies.push(body);
        if (body.length < Math.min(3, room)) DIRS.forEach((d) => grow([...body, d]));
      };
      grow([]);
      for (const body of bodies) {
        for (let n = MIN_REPEAT; n <= MAX_REPEAT; n++) {
          if (search([...program, { repeat: n, body }], used + 1 + body.length)) return true;
        }
      }
    }
    return false;
  }
  return search([], 0);
}

for (const bracket of BRACKETS) {
  BOT_LEVELS[bracket].forEach((lvl) => {
    test(`bot level ${lvl.id} is well formed and solvable`, () => {
      const inside = (c) => c.x >= 0 && c.y >= 0 && c.x < lvl.cols && c.y < lvl.rows;
      const same = (a, b) => a.x === b.x && a.y === b.y;
      assert.ok(inside(lvl.start) && inside(lvl.goal) && lvl.rocks.every(inside), 'everything is on the board');
      assert.ok(!same(lvl.start, lvl.goal), 'start and goal differ');
      assert.ok(![lvl.start, lvl.goal].some((c) => lvl.rocks.some((r) => same(r, c))), 'no rock on start or goal');

      assert.ok(solvable(lvl, lvl.loops), 'has a solution within the block limit');
      if (lvl.loops) {
        assert.ok(!solvable(lvl, false), 'needs a Repeat: no solution with plain arrows alone');
      }
    });
  });

  test(`${bracket}: only the oldest children's levels offer Repeat`, () => {
    const offersLoops = BOT_LEVELS[bracket].every((l) => l.loops);
    assert.equal(offersLoops, bracket === 'grade1');
    if (bracket !== 'grade1') assert.ok(BOT_LEVELS[bracket].every((l) => !l.loops));
  });
}

// ---------- Pattern Parade ----------

const isPeriodic = (full, unitLen) => full.every((x, i) => x === full[i % unitLen]);

for (const bracket of BRACKETS) {
  test(`pattern questions are valid (${bracket})`, () => {
    const rng = mulberry32(2026);
    const seen = { items: 0, numbers: 0, next: 0, missing: 0 };

    for (let n = 0; n < 600; n++) {
      const q = makePatternQuestion(bracket, rng);
      seen[q.kind]++;
      seen[q.ask]++;

      assert.equal(q.shown.filter((x) => x === null).length, 1, 'exactly one gap');
      assert.equal(q.shown[q.hole], null);
      assert.equal(q.full[q.hole], q.answer);
      q.shown.forEach((x, i) => { if (i !== q.hole) assert.equal(x, q.full[i]); });

      assert.ok(q.options.includes(q.answer), 'the answer is an option');
      assert.equal(new Set(q.options).size, q.options.length, 'options are unique');
      assert.ok(q.options.length >= 3, 'at least three options');
      assert.ok(q.hole >= 2, 'the gap is never in the first cycle');
      if (q.ask === 'next') assert.equal(q.hole, q.full.length - 1);
      else assert.ok(q.hole < q.full.length - 1);

      if (q.kind === 'items') {
        assert.ok(q.full.every((x) => PATTERN_WORD[x]), 'every item has a narration word');
        assert.ok(q.options.every((x) => PATTERN_WORD[x]));
        const unit = [2, 3, 4].find((u) => isPeriodic(q.full, u));
        assert.ok(unit, 'the filled-in sequence repeats a unit');
      } else {
        assert.ok(q.full.every((x) => Number.isInteger(x) && x >= 0 && x <= MAX_NUMBER), 'numbers are 0-20');
        assert.ok(q.options.every((x) => Number.isInteger(x) && x >= 0 && x <= MAX_NUMBER));
        const step = q.full[1] - q.full[0];
        assert.ok(step !== 0);
        q.full.forEach((x, i) => assert.equal(x, q.full[0] + i * step), 'constant step');
      }
    }

    if (bracket === 'pre-k') assert.equal(seen.numbers + seen.missing, 0, 'pre-k: simple patterns only');
    if (bracket !== 'pre-k') {
      assert.ok(seen.numbers > 0 && seen.items > 0, 'a mix of pictures and numbers');
      assert.ok(seen.next > 0 && seen.missing > 0, 'a mix of "next" and "missing"');
    }
  });
}

// ---------- Magic Machine ----------

for (const bracket of BRACKETS) {
  test(`machine questions have one right answer (${bracket})`, () => {
    const rng = mulberry32(7);
    const rules = MACHINE_RULES[bracket];
    const used = new Set();

    for (let n = 0; n < 600; n++) {
      const q = makeMachineQuestion(bracket, rng);
      used.add(`${q.rule.kind}${q.rule.n}`);

      assert.equal(q.answer, ruleOutput(q.rule, q.input));
      for (const e of q.examples) assert.equal(e.output, ruleOutput(q.rule, e.input));

      const inputs = [...q.examples.map((e) => e.input), q.input];
      assert.equal(new Set(inputs).size, inputs.length, 'all inputs differ');
      assert.ok(q.examples.length >= 2);

      // No other rule in this level fits the examples and disagrees about the answer
      const fits = rules.filter((r) => q.examples.every((e) => ruleOutput(r, e.input) === e.output));
      assert.ok(fits.includes(q.rule));
      assert.ok(fits.every((r) => ruleOutput(r, q.input) === q.answer), 'the answer is unambiguous');

      assert.ok(q.options.includes(q.answer));
      assert.equal(q.options.length, 3);
      assert.equal(new Set(q.options).size, 3);
      assert.ok([...inputs, ...q.examples.map((e) => e.output), ...q.options].every((x) => x >= 0 && x <= MAX_NUMBER));
    }
    assert.equal(used.size, rules.length, 'every rule in the level appears');
  });
}

// ---------- Quiz content ----------

import fs from 'fs';
import { makeMathQuestion } from '../src/content/mathGen.ts';
import { adjustLevel, isQuestion, nextQuestion, pickFromPack, readPack } from '../src/content/select.ts';
import { bandForAge, bracketForAge, fromDocData, levelForAge, toDocData, DEFAULT_STATE } from '../src/firebase/schema.ts';

const packs = Object.fromEntries(['reading', 'science', 'logic'].map((s) => [s, JSON.parse(fs.readFileSync(`src/content/packs/${s}.json`, 'utf8'))]));

// Fraction strings like "3/8" are compared by value so two spellings of the same number can't both appear
const value = (s) => {
  const m = /^(\d+)\/(\d+)$/.exec(s);
  return m ? Number(m[1]) / Number(m[2]) : s;
};

test('math generator: every level gives 4 distinct choices that include the answer', () => {
  for (let level = 1; level <= 10; level++) {
    const rng = mulberry32(level * 101);
    for (let i = 0; i < 300; i++) {
      const q = makeMathQuestion(level, rng);
      assert.ok(isQuestion(q), `invalid question at level ${level}: ${JSON.stringify(q)}`);
      assert.equal(q.choices.length, 4, q.prompt);
      assert.equal(new Set(q.choices.map(value)).size, 4, `duplicate values in ${q.prompt}: ${q.choices}`);
      assert.ok(q.choices[q.answer] !== undefined, q.prompt);
      assert.ok(!q.choices.some((c) => /NaN|undefined|Infinity/.test(c)), `${q.prompt} ${q.choices}`);
    }
  }
});

test('math generator: spot-check that the marked answer is really right', () => {
  const rng = mulberry32(7);
  for (let i = 0; i < 400; i++) {
    const q = makeMathQuestion(1 + (i % 3), rng);
    const m = /^What is (\d+) ([+−]) (\d+)\?$/.exec(q.prompt);
    if (!m) continue;
    const want = m[2] === '+' ? Number(m[1]) + Number(m[3]) : Number(m[1]) - Number(m[3]);
    assert.equal(Number(q.choices[q.answer]), want, q.prompt);
    assert.ok(want >= 0, q.prompt);
  }
  for (let i = 0; i < 300; i++) {
    const q = makeMathQuestion(5, rng);
    const m = /^What is (\d+) × (\d+)\?$/.exec(q.prompt);
    if (m) assert.equal(Number(q.choices[q.answer]), Number(m[1]) * Number(m[2]), q.prompt);
  }
  for (let i = 0; i < 300; i++) {
    const q = makeMathQuestion(10, rng);
    const m = /^Solve for x:\s+(\d+)x \+ (\d+) = (\d+)$/.exec(q.prompt);
    if (m) assert.equal(Number(q.choices[q.answer]), (Number(m[3]) - Number(m[2])) / Number(m[1]), q.prompt);
  }
});

test('bundled packs are valid and cover every level of every subject', () => {
  for (const [subject, pack] of Object.entries(packs)) {
    assert.ok(readPack(pack), `${subject} pack should parse`);
    assert.equal(pack.subject, subject);
    const ids = new Set();
    for (const q of pack.questions) {
      assert.ok(isQuestion(q), `${q.id} is malformed`);
      assert.ok(!ids.has(q.id), `duplicate id ${q.id}`);
      ids.add(q.id);
    }
    for (let level = 1; level <= 10; level++) {
      assert.ok(pack.questions.filter((q) => q.level === level).length >= 5, `${subject} level ${level} needs at least 5 questions`);
    }
  }
});

test('readPack rejects broken data from the network', () => {
  assert.equal(readPack(null), null);
  assert.equal(readPack({ subject: 'cooking', version: 1, title: 'x', questions: [] }), null);
  assert.equal(readPack({ subject: 'logic', version: 1, title: 'x', questions: [{ id: 'a' }] }), null);
  const good = packs.logic.questions[0];
  const mixed = readPack({ subject: 'logic', version: 2, title: 'x', questions: [good, { ...good, answer: 9 }] });
  assert.equal(mixed.questions.length, 1);
});

test('nextQuestion stays near the level and avoids recent questions', () => {
  const rng = mulberry32(3);
  const seen = new Set();
  for (let i = 0; i < 12; i++) {
    const q = nextQuestion('science', 6, packs, seen, rng);
    assert.ok(Math.abs(q.level - 6) <= 1, `${q.id} is level ${q.level}`);
    assert.ok(!seen.has(q.id));
    seen.add(q.id);
  }
  // Everything has been seen: still returns a question rather than nothing
  assert.ok(pickFromPack(packs.science.questions, 6, new Set(packs.science.questions.map((q) => q.id)), rng));
  assert.equal(pickFromPack([], 3, new Set(), rng), null);
  assert.ok(nextQuestion('math', 4, {}, new Set(), rng));
  assert.equal(nextQuestion('science', 4, {}, new Set(), rng), null);
});

test('level goes up after 4 right in a row and down after 2 wrong in a row', () => {
  let s = { level: 5, streak: 0, misses: 0 };
  for (let i = 0; i < 4; i++) s = adjustLevel(s, true);
  assert.equal(s.level, 6);
  s = adjustLevel(s, false);
  assert.equal(s.level, 6);
  s = adjustLevel(s, true); // a right answer resets the miss count
  s = adjustLevel(s, false);
  assert.equal(s.level, 6);
  s = adjustLevel(s, false);
  assert.equal(s.level, 5);
  assert.equal(adjustLevel({ level: 10, streak: 3, misses: 0 }, true).level, 10);
  assert.equal(adjustLevel({ level: 1, streak: 0, misses: 1 }, false).level, 1);
});

test('ages 4-14 map to bands, brackets and starting levels', () => {
  assert.deepEqual([4, 6, 7, 10, 11, 14].map(bandForAge), ['little', 'little', 'explorer', 'explorer', 'pro', 'pro']);
  assert.deepEqual([4, 5, 6, 7, 14].map(bracketForAge), ['pre-k', 'kindergarten', 'kindergarten', 'grade1', 'grade1']);
  assert.deepEqual([4, 8, 13, 14].map(levelForAge), [1, 5, 10, 10]);
});

test('saved data round-trips and old documents (bracket only) still load', () => {
  const state = { ...DEFAULT_STATE, age: 12, skills: { ...DEFAULT_STATE.skills, math: { level: 8, answered: 20, correct: 15 } } };
  const back = fromDocData(toDocData(state));
  assert.equal(back.age, 12);
  assert.deepEqual(back.skills.math, { level: 8, answered: 20, correct: 15 });

  const old = fromDocData({ profile: { kidName: 'Mia', ageBracket: 'grade1' }, settings: {}, progress: { stars: 3, unlockedStickers: ['st1'], placedStickers: [] } });
  assert.equal(old.age, 7);
  assert.equal(old.skills.reading.level, levelForAge(7));

  const junk = fromDocData({ profile: { age: 99 }, progress: { skills: { math: { level: 99, answered: 2, correct: 50 } } } });
  assert.equal(junk.age, 14);
  assert.deepEqual(junk.skills.math, { level: 10, answered: 2, correct: 2 });
});

test('math generator: fractions, percentages and Pythagoras answers are right', () => {
  const rng = mulberry32(11);
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  let checked = { frac: 0, pct: 0, pyth: 0, ratio: 0 };
  for (let i = 0; i < 2000; i++) {
    const q = makeMathQuestion(7 + (i % 4), rng);
    const answer = q.choices[q.answer];
    let m;
    if ((m = /^What is (\d+)\/(\d+) \+ (\d+)\/(\d+)\?$/.exec(q.prompt))) {
      const [a, b, c, d] = m.slice(1).map(Number);
      const top = a * d + c * b;
      const bottom = b * d;
      const g = gcd(top, bottom);
      const [n, den] = answer.split('/').map(Number);
      assert.equal(n * bottom, top * den, `${q.prompt} -> ${answer}`);
      if (b !== d) assert.equal(gcd(n, den), 1, `${answer} should be in simplest form`);
      void g;
      checked.frac++;
    } else if ((m = /^What is (\d+)% of (\d+)\?$/.exec(q.prompt))) {
      assert.equal(Number(answer), (Number(m[1]) * Number(m[2])) / 100);
      checked.pct++;
    } else if ((m = /^A right triangle has short sides (\d+) and (\d+)/.exec(q.prompt))) {
      assert.equal(Number(answer) ** 2, Number(m[1]) ** 2 + Number(m[2]) ** 2);
      checked.pyth++;
    } else if ((m = /^Red and blue beads are in the ratio (\d+):(\d+)\. There are (\d+) red/.exec(q.prompt))) {
      assert.equal(Number(answer), (Number(m[2]) * Number(m[3])) / Number(m[1]));
      checked.ratio++;
    }
  }
  assert.ok(checked.frac > 20 && checked.pct > 20 && checked.pyth > 20 && checked.ratio > 20, JSON.stringify(checked));
});
