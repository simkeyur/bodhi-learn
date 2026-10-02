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
