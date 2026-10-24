import assert from 'assert/strict';
import { test } from 'node:test';
import { masteryOf, newRecord, planStandards, recordResult, streakDays } from '../../src/prep/learner/mastery.ts';
import { GRADES } from '../../src/prep/content/registry.ts';

const run = (results, r = newRecord()) => results.reduce((rec, f) => recordResult(rec, f, '2026-10-24'), r);

test('difficulty goes up after 3 right in a row and down after 2 misses in a row', () => {
  assert.equal(run([1, 1]).difficulty, 1);
  assert.equal(run([1, 1, 1]).difficulty, 2);
  assert.equal(run([1, 1, 1, 1, 1, 1]).difficulty, 3);
  assert.equal(run([1, 1, 1, 1, 1, 1, 1, 1, 1]).difficulty, 3);
  assert.equal(run([1, 1, 1, 0, 0]).difficulty, 1);
  assert.equal(run([1, 1, 1, 0, 1, 0]).difficulty, 2, 'misses must be in a row');
  assert.equal(run([0, 0, 0]).difficulty, 1, 'never below 1');
});

test('partial credit counts towards mastery but not towards the streak', () => {
  const r = run([0.5, 0.5, 0.5]);
  assert.equal(r.correct, 0);
  assert.equal(r.difficulty, 1);
  assert.deepEqual(r.recent, [0.5, 0.5, 0.5]);
});

test('mastery states', () => {
  assert.equal(masteryOf(undefined), 'new');
  assert.equal(masteryOf(run([0])), 'learning');
  assert.equal(masteryOf(run([1, 1, 1, 1])), 'close');
  assert.equal(masteryOf(run([1, 1, 1, 1, 1, 1, 1, 1])), 'mastered');
  assert.equal(masteryOf(run([1, 1, 1, 1, 1, 1, 0, 0, 0, 0])), 'learning');
  assert.equal(recordResult(newRecord(), 1, '2026-10-24').recent.length, 1);
  assert.equal(run(Array(25).fill(1)).recent.length, 10, 'only the last 10 count');
});

test('today\'s plan puts weak readiness standards first and leaves out mastered ones', () => {
  const skills = {
    '5.3K': run([0, 0, 1, 0]), // readiness, struggling
    '5.2A': run([0, 0, 1, 0]), // supporting, struggling
    '5.4F': run(Array(10).fill(1)), // readiness, mastered
  };
  const plan = planStandards(GRADES[5].standards, skills, '2026-10-24', 5);
  assert.equal(plan[0], '5.3K');
  assert.ok(!plan.includes('5.4F'));
  assert.equal(new Set(plan).size, 5);
});

test('streaks count consecutive days, and today not practised yet keeps yesterday\'s streak', () => {
  const days = { '2026-10-22': 3, '2026-10-23': 5 };
  assert.equal(streakDays(days, new Date(2026, 9, 24)), 2);
  assert.equal(streakDays({ ...days, '2026-10-24': 1 }, new Date(2026, 9, 24)), 3);
  assert.equal(streakDays({ '2026-10-20': 1 }, new Date(2026, 9, 24)), 0);
});
