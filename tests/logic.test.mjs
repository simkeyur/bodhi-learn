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
import { MATH_REGISTRY, makeMathQuestion } from '../src/content/mathGen.ts';
import { QUIZ_GAMES, gameById, quizGamesFor } from '../src/data/quizGames.ts';
import { BUDDY_MAX_AGE, STICKER_MAX_AGE, hasBuddy, hasStickers, isSelfManaged } from '../src/data/subjects.ts';
import { GATE_CHALLENGES, applyOp, combinations, evaluate, goalTable, isSolved, layout, outputId, truthTable } from '../src/data/gates.ts';
import { ALPHABET, atbash, checkCipher, lettersOnly, makeCipherPuzzle, makeCipherRound, shiftText } from '../src/data/cipher.ts';
import { canMove, isSolved as hanoiSolved, move, newGame, optimalMoves, solveFrom } from '../src/data/hanoi.ts';
import { isOrderPuzzle, pickNear, readOrderPack } from '../src/content/select.ts';
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

  const withSolved = fromDocData(toDocData({ ...DEFAULT_STATE, solved: ['gates-1', 'hanoi-3', 'gates-1'] }));
  assert.deepEqual(withSolved.solved, ['gates-1', 'hanoi-3']);
  assert.deepEqual(fromDocData({}).solved, []);

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

// ---------- Quiz games ----------

test('every math generator is tagged with the topic it really produces', () => {
  const rng = mulberry32(21);
  for (const entry of MATH_REGISTRY) {
    for (let i = 0; i < 25; i++) {
      const q = entry.gen(rng, entry.level);
      assert.equal(q.topic, entry.topic, `${q.prompt} is tagged ${entry.topic} but asks about ${q.topic}`);
      assert.ok(isQuestion(q), q.prompt);
      assert.equal(new Set(q.choices.map(value)).size, q.choices.length, `duplicate values: ${q.prompt} ${q.choices}`);
      assert.ok(!q.choices.some((c) => /NaN|undefined|Infinity|\.\d{4,}/.test(c)), `ugly number in ${q.prompt}: ${q.choices}`);
    }
  }
});

test('quiz games: unique ids, sensible ages, and every topic has questions', () => {
  const ids = new Set();
  const mathTopics = new Set(MATH_REGISTRY.map((e) => e.topic));
  for (const g of QUIZ_GAMES) {
    assert.ok(!ids.has(g.id), `duplicate game id ${g.id}`);
    ids.add(g.id);
    assert.ok(g.minAge >= 4 && g.maxAge <= 14 && g.minAge <= g.maxAge, g.id);
    assert.ok(['round', 'sprint', 'lives'].includes(g.mode), g.id);
    assert.equal(gameById(g.id), g);
    for (const topic of g.topics) {
      const known = g.subject === 'math' ? mathTopics.has(topic) : packs[g.subject].questions.some((q) => q.topic === topic);
      assert.ok(known, `${g.id}: no questions for topic "${topic}"`);
    }
  }
});

test('every question topic in the packs belongs to a game, so nothing is unreachable', () => {
  for (const [subject, pack] of Object.entries(packs)) {
    const covered = new Set(QUIZ_GAMES.filter((g) => g.subject === subject).flatMap((g) => g.topics));
    for (const q of pack.questions) assert.ok(covered.has(q.topic), `${q.id} (${subject}/${q.topic}) is in no game`);
  }
});

test('every game can serve questions at every level of its age range, drawn from its own topics', () => {
  const rng = mulberry32(5);
  for (const g of QUIZ_GAMES) {
    for (let age = g.minAge; age <= g.maxAge; age++) {
      const level = levelForAge(age);
      if (g.subject === 'math') {
        for (let i = 0; i < 20; i++) {
          const q = makeMathQuestion(level, rng, g.topics);
          assert.ok(g.topics.includes(q.topic), `${g.id} age ${age}: got topic ${q.topic}`);
        }
      } else {
        const inGroup = packs[g.subject].questions.filter((q) => g.topics.includes(q.topic));
        const near = inGroup.filter((q) => Math.abs(q.level - level) <= 1);
        assert.ok(near.length >= 4, `${g.id} at level ${level} (age ${age}) has only ${near.length} questions within one level`);
        const q = nextQuestion(g.subject, level, packs, new Set(), rng, g.topics);
        assert.ok(g.topics.includes(q.topic), `${g.id}: got topic ${q.topic}`);
      }
    }
  }
});

test('games shown to a child are limited to their age, and each age sees every subject', () => {
  for (let age = 4; age <= 14; age++) {
    for (const subject of ['math', 'reading', 'logic', 'science']) {
      assert.ok(quizGamesFor(subject, age).length >= 1, `age ${age} has no ${subject} game`);
    }
  }
  assert.ok(!quizGamesFor('math', 5).some((g) => g.id === 'equation-lab'));
  assert.ok(quizGamesFor('math', 12).some((g) => g.id === 'equation-lab'));
  assert.ok(!quizGamesFor('reading', 12).some((g) => g.id === 'rhyme-time'));
});

test('a game never runs out of fresh questions for a full round', () => {
  const rng = mulberry32(9);
  for (const g of QUIZ_GAMES.filter((x) => x.subject !== 'math')) {
    const seen = new Set();
    for (let i = 0; i < 8; i++) {
      const q = nextQuestion(g.subject, levelForAge(g.minAge + 1), packs, seen, rng, g.topics);
      assert.ok(q);
      assert.ok(!seen.has(q.id), `${g.id} repeated ${q.id} within one round`);
      seen.add(q.id);
    }
  }
});

test('math generator: shapes, word problems and decimals have the right answer', () => {
  const rng = mulberry32(33);
  const num = (s) => Number(String(s).replace('−', '-').replace(/[^\d.-]/g, ''));
  const seen = new Set();
  const rules = [
    [/^A rectangle is (\d+) cm long and (\d+) cm wide\. What is its perimeter/, (m) => 2 * (+m[1] + +m[2])],
    [/^Two angles of a triangle are (\d+)° and (\d+)°/, (m) => 180 - +m[1] - +m[2]],
    [/^A triangle has a base of (\d+) cm and a height of (\d+) cm/, (m) => (+m[1] * +m[2]) / 2],
    [/^A box is (\d+) cm long, (\d+) cm wide and (\d+) cm tall/, (m) => +m[1] * +m[2] * +m[3]],
    [/^A circle has a radius of (\d+) cm/, (m) => Math.round(3.14 * m[1] * m[1] * 100) / 100],
    [/^A cyclist rides (\d+) km in (\d+) hours.*in (\d+) hours\?$/, (m) => (+m[1] / +m[2]) * +m[3]],
    [/^(\d+) notebooks cost \$(\d+)\. How much do (\d+) notebooks cost/, (m) => (+m[2] / +m[1]) * +m[3]],
    [/^Two numbers add up to (\d+)\. Their difference is (\d+)/, (m) => (+m[1] + +m[2]) / 2],
    [/^A taxi charges \$(\d+) plus \$(\d+) for each km\. A trip cost \$(\d+)/, (m) => (+m[3] - +m[1]) / +m[2]],
    [/^Tom had (\d+) \w+ and gave (\d+) to his friend/, (m) => +m[1] - +m[2]],
    [/^A pack has (\d+) pens\. Mia buys (\d+) packs, then loses (\d+)/, (m) => +m[1] * +m[2] - +m[3]],
    [/^Solve for x:\s+x − (\d+) = (\d+)$/, (m) => +m[1] + +m[2]],
    [/^Solve for x:\s+x \+ (\d+) = (\d+)$/, (m) => +m[2] - +m[1]],
    [/^\? × (\d+) = (\d+)$/, (m) => +m[2] / +m[1]],
    [/^What is (\d+) × (\d+)\?$/, (m) => +m[1] * +m[2]],
    [/^What is (\d+) ÷ (\d+)\?$/, (m) => +m[1] / +m[2]],
    [/^What is (\d+) [+] (\d+)\?$/, (m) => +m[1] + +m[2]],
    [/^What is (\d+) − (\d+)\?$/, (m) => +m[1] - +m[2]],
  ];
  for (const entry of MATH_REGISTRY) {
    for (let i = 0; i < 60; i++) {
      const q = entry.gen(rng, entry.level);
      for (const [re, answer] of rules) {
        const m = re.exec(q.prompt);
        if (!m) continue;
        seen.add(String(re));
        assert.equal(num(q.choices[q.answer]), answer(m), `${q.prompt} -> ${q.choices[q.answer]}`);
      }
    }
  }
  assert.equal(seen.size, rules.length, `some rules never matched: ${rules.filter(([re]) => !seen.has(String(re))).map(([re]) => re)}`);
});

test('the sticker book is only for ages 6 and under', () => {
  assert.equal(STICKER_MAX_AGE, 6);
  assert.deepEqual([4, 5, 6, 7, 10, 14].map(hasStickers), [true, true, true, false, false, false]);
});

test("Buddy's voice button is only for ages 5 and under", () => {
  assert.equal(BUDDY_MAX_AGE, 5);
  assert.deepEqual([4, 5, 6, 7, 10, 14].map(hasBuddy), [true, true, false, false, false, false]);
});

// ---------- Logic Gates Lab ----------

test('gate operations', () => {
  assert.equal(applyOp('AND', [true, true]), true);
  assert.equal(applyOp('AND', [true, false]), false);
  assert.equal(applyOp('OR', [false, false]), false);
  assert.equal(applyOp('NAND', [true, true]), false);
  assert.equal(applyOp('NOR', [false, false]), true);
  assert.equal(applyOp('XOR', [true, true]), false);
  assert.equal(applyOp('XOR', [true, false]), true);
  assert.equal(applyOp('NOT', [false]), true);
  assert.equal(applyOp('WIRE', [true]), true);
  assert.equal(combinations(['A', 'B']).length, 4);
  assert.deepEqual(combinations(['A', 'B'])[1], { A: false, B: true });
});

test('every logic gate challenge is solvable, non-trivial and laid out sensibly', () => {
  const ids = new Set();
  for (const ch of GATE_CHALLENGES) {
    assert.ok(!ids.has(ch.id), `duplicate ${ch.id}`);
    ids.add(ch.id);
    assert.ok(ch.level >= 6 && ch.level <= 10, ch.id);
    assert.ok(isSolved(ch, ch.solution), `${ch.id}: the stored solution does not solve it`);
    for (const g of ch.gates) {
      assert.ok(g.options.includes(ch.solution[g.id]), `${ch.id}: ${g.id} solution is not among the options`);
      for (const input of g.inputs) assert.ok(ch.switches.includes(input) || ch.gates.some((x) => x.id === input), `${ch.id}: unknown input ${input}`);
      if (g.inputs.length === 1) assert.ok(g.options.every((o) => o === 'NOT' || o === 'WIRE'), `${ch.id}: one-input gate with a two-input option`);
      if (g.inputs.length === 2) assert.ok(g.options.every((o) => o !== 'NOT' && o !== 'WIRE'), `${ch.id}: two-input gate with a one-input option`);
    }
    const goal = goalTable(ch);
    assert.ok(goal.some(Boolean) && goal.some((v) => !v), `${ch.id}: the bulb never changes`);
    // Nothing chosen yet: not solved, and the bulb is unknown rather than off
    assert.equal(isSolved(ch, {}), false);
    assert.ok(truthTable(ch, {}).every((v) => v === null));
    // Layout: a gate sits to the right of everything feeding it, and the bulb is last
    const { nodes, cols } = layout(ch);
    const colOf = Object.fromEntries(nodes.map((n) => [n.id, n.col]));
    for (const g of ch.gates) for (const input of g.inputs) assert.ok(colOf[input] < colOf[g.id], `${ch.id}: ${input} is not left of ${g.id}`);
    assert.equal(colOf.bulb, cols - 1);
    assert.equal(colOf[outputId(ch)] + 1, colOf.bulb);
  }
  assert.ok(GATE_CHALLENGES.length >= 12);
});

test('logic gates: wrong choices do not solve, and equivalent circuits do', () => {
  const byId = Object.fromEntries(GATE_CHALLENGES.map((c) => [c.id, c]));
  assert.equal(isSolved(byId['gates-1'], { g1: 'OR' }), false);
  assert.equal(isSolved(byId['gates-1'], { g1: 'AND' }), true);
  // "Make a NOT": NOR also works, because NOR(A, A) is NOT A
  assert.equal(isSolved(byId['gates-10'], { g1: 'NOR' }), true);
  assert.equal(isSolved(byId['gates-10'], { g1: 'AND' }), false);
  // "Build an AND": g2 only has the same value on both inputs, so NAND and NOR both act as NOT there
  const and = byId['gates-12'];
  const ops = and.gates[0].options;
  const solutions = ops.flatMap((a) => ops.map((b) => ({ g1: a, g2: b }))).filter((c) => isSolved(and, c));
  assert.deepEqual(solutions, [{ g1: 'NAND', g2: 'NAND' }, { g1: 'NAND', g2: 'NOR' }]);
  // Live values for the UI
  const v = evaluate(byId['gates-7'], { A: true, B: true, C: false }, { g1: 'AND', g2: 'OR' });
  assert.equal(v.g1, true);
  assert.equal(v.g2, true);
  assert.equal(evaluate(byId['gates-7'], { A: true, B: true, C: false }, { g1: 'AND' }).g2, null);
});

// ---------- Cipher Desk ----------

test('caesar shift and mirror cipher round-trip', () => {
  assert.equal(shiftText('HELLO', 3), 'KHOOR');
  assert.equal(shiftText('KHOOR', -3), 'HELLO');
  assert.equal(shiftText('XYZ', 3), 'ABC');
  assert.equal(shiftText('Hi there!', 1), 'IJ UIFSF!');
  for (let k = 0; k < 26; k++) assert.equal(shiftText(shiftText('SECRET AGENT', k), 26 - k), 'SECRET AGENT');
  assert.equal(atbash('ABC'), 'ZYX');
  assert.equal(atbash(atbash('TOP SECRET')), 'TOP SECRET');
  assert.equal(lettersOnly('a b-c!'), 'ABC');
  assert.equal(ALPHABET.length, 26);
});

test('every cipher puzzle is consistent with its answer, at every level', () => {
  const rng = mulberry32(17);
  for (let level = 1; level <= 10; level++) {
    for (let i = 0; i < 150; i++) {
      const p = makeCipherPuzzle(level, rng);
      assert.equal(p.level, level);
      if (p.kind === 'decode' || p.kind === 'crack') {
        assert.equal(shiftText(p.show, -p.shift), p.answer, `${p.show} / ${p.answer}`);
        assert.notEqual(p.show, p.answer, 'a shift must change the text');
      } else if (p.kind === 'encode') {
        assert.equal(shiftText(p.show, p.shift), p.answer);
        assert.ok(p.shift > 0 && p.shift < 26);
      } else {
        assert.equal(p.shift, null);
        assert.equal(atbash(p.show), p.answer);
      }
      assert.ok(checkCipher(p, p.answer.toLowerCase()), 'case and spacing should not matter');
      assert.ok(checkCipher(p, p.answer.replace(/ /g, '')));
      assert.ok(!checkCipher(p, p.answer + 'X'));
      if (p.kind === 'crack') assert.ok(p.hint.includes(p.answer[0]));
      // The shift is only given away when the child is meant to use it
      if (p.kind === 'crack') assert.ok(!p.prompt.includes(String(p.shift)) || p.shift < 10 && !/shift is \d/.test(p.prompt), p.prompt);
    }
  }
  const round = makeCipherRound(9, 5, rng);
  assert.equal(round.length, 5);
  assert.equal(new Set(round.map((p) => p.answer)).size, 5);
});

// ---------- Tower of Hanoi ----------

test('hanoi: rules and the optimal solver', () => {
  const g = newGame(3);
  assert.deepEqual(g, [[3, 2, 1], [], []]);
  assert.equal(canMove(g, 0, 1), true);
  assert.equal(canMove(g, 1, 0), false); // nothing on the peg
  const g2 = move(g, 0, 1);
  assert.equal(canMove(g2, 0, 1), false); // a 2 cannot go on a 1
  assert.throws(() => move(g2, 0, 1));
  assert.deepEqual(g, [[3, 2, 1], [], []]); // the original is not changed
  for (let n = 3; n <= 7; n++) {
    let state = newGame(n);
    const plan = solveFrom(state);
    assert.equal(plan.length, optimalMoves(n));
    for (const [a, b] of plan) state = move(state, a, b);
    assert.ok(hanoiSolved(state, n));
  }
});

test('hanoi: the solver works from any position the child can reach', () => {
  const rng = mulberry32(8);
  for (let round = 0; round < 200; round++) {
    const n = 3 + Math.floor(rng() * 5);
    let state = newGame(n);
    for (let i = 0; i < Math.floor(rng() * 60); i++) {
      const moves = [];
      for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) if (canMove(state, a, b)) moves.push([a, b]);
      const [a, b] = moves[Math.floor(rng() * moves.length)];
      state = move(state, a, b);
    }
    const plan = solveFrom(state);
    assert.ok(plan.length <= optimalMoves(n));
    for (const [a, b] of plan) state = move(state, a, b);
    assert.ok(hanoiSolved(state, n));
  }
});

// ---------- Order It ----------

const orderPack = JSON.parse(fs.readFileSync('src/content/packs/order.json', 'utf8'));

test('order puzzles are valid and cover every level', () => {
  assert.ok(readOrderPack(orderPack));
  const ids = new Set();
  for (const p of orderPack.puzzles) {
    assert.ok(isOrderPuzzle(p), p.id);
    assert.ok(!ids.has(p.id), `duplicate ${p.id}`);
    ids.add(p.id);
  }
  for (let level = 1; level <= 10; level++) {
    const near = orderPack.puzzles.filter((p) => Math.abs(p.level - level) <= 1);
    assert.ok(near.length >= 5, `level ${level} has only ${near.length} puzzles within one level`);
  }
  assert.equal(readOrderPack({ ...orderPack, id: 'nope' }), null);
  assert.equal(readOrderPack({ ...orderPack, puzzles: [{ id: 'x' }] }), null);
  assert.ok(pickNear(orderPack.puzzles, 5, new Set(), mulberry32(1)));
});

// ---------- Flags & Capitals, Predict It ----------

test('flags, capitals and predictions are in the science pack with the right ages', () => {
  const sci = packs.science.questions;
  const topic = (t) => sci.filter((q) => q.topic === t);
  assert.ok(topic('flags').length >= 100 && topic('capitals').length >= 100 && topic('countries').length >= 40);
  assert.ok(topic('predictions').length >= 30);
  for (const q of topic('flags')) assert.match(q.prompt, /[\u{1F1E6}-\u{1F1FF}]{2}/u, q.id);
  // Predict It is for ages 9+ (level 6 and up); Flags & Capitals starts around age 7
  assert.ok(topic('predictions').every((q) => q.level >= 6));
  const fc = gameById('flags-capitals');
  const pi = gameById('predict-it');
  assert.ok(fc.minAge >= 7 && pi.minAge >= 9);
  assert.ok(!quizGamesFor('science', 8).some((g) => g.id === 'predict-it'));
  assert.ok(quizGamesFor('science', 9).some((g) => g.id === 'predict-it'));
  assert.ok(!quizGamesFor('science', 6).some((g) => g.id === 'flags-capitals'));
});

test('children over 10 manage their own settings and account', () => {
  assert.deepEqual([4, 8, 10, 11, 12, 14].map(isSelfManaged), [false, false, false, true, true, true]);
});
