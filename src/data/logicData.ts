// Pure logic for the Logic Lab worlds: Code the Bot, Pattern Parade and Magic Machine.
// No React or browser APIs in here, so it is unit tested with `npm run test:logic`.

import type { AgeBracket } from '../firebase/schema';

// ---------- Random helpers (seedable so tests are repeatable) ----------

export type Rng = () => number;

export function mulberry32(seed: number): Rng {
  let a = seed | 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const randInt = (rng: Rng, lo: number, hi: number) => lo + Math.floor(rng() * (hi - lo + 1));
const pick = <T,>(rng: Rng, list: readonly T[]): T => list[Math.floor(rng() * list.length)];

export function shuffle<T>(rng: Rng, list: readonly T[]): T[] {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// Narration only has clips for the numbers 0-20, so every number in the Logic Lab stays in that range
export const MAX_NUMBER = 20;

// ================= Code the Bot =================

export type Dir = 'up' | 'down' | 'left' | 'right';
export type Block = Dir | { repeat: number; body: Dir[] };
export interface Cell { x: number; y: number }

export interface BotLevel {
  id: string;
  cols: number;
  rows: number;
  start: Cell;
  goal: Cell;
  rocks: Cell[];
  maxBlocks: number; // a Repeat block costs 1 plus one per block inside it
  loops: boolean; // is the Repeat block available?
}

export const DELTA: Record<Dir, Cell> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

export const MIN_REPEAT = 2;
export const MAX_REPEAT = 5;

// One executed step, remembering which block it came from (to highlight it while running)
export interface StepSource { dir: Dir; block: number; inner: number | null }

export function expandProgram(program: Block[]): StepSource[] {
  const steps: StepSource[] = [];
  program.forEach((block, i) => {
    if (typeof block === 'string') {
      steps.push({ dir: block, block: i, inner: null });
    } else {
      for (let n = 0; n < block.repeat; n++) {
        block.body.forEach((dir, j) => steps.push({ dir, block: i, inner: j }));
      }
    }
  });
  return steps;
}

export const blockCount = (program: Block[]) =>
  program.reduce((total, block) => total + (typeof block === 'string' ? 1 : 1 + block.body.length), 0);

export interface SimResult {
  path: Cell[]; // where the bot has been, starting with the start cell
  outcome: 'goal' | 'bump' | 'short';
  blocked?: Cell; // the rock or wall the bot bumped into
}

// Runs the steps. The run ends the moment the bot reaches the star or bumps.
export function simulate(level: BotLevel, dirs: Dir[]): SimResult {
  const path: Cell[] = [{ ...level.start }];
  let at = level.start;
  for (const dir of dirs) {
    const next = { x: at.x + DELTA[dir].x, y: at.y + DELTA[dir].y };
    const outside = next.x < 0 || next.y < 0 || next.x >= level.cols || next.y >= level.rows;
    if (outside || level.rocks.some((r) => r.x === next.x && r.y === next.y)) {
      return { path, outcome: 'bump', blocked: next };
    }
    path.push(next);
    at = next;
    if (next.x === level.goal.x && next.y === level.goal.y) return { path, outcome: 'goal' };
  }
  return { path, outcome: 'short' };
}

// --- Editing the program (a Repeat is "open" while the child is filling it) ---

export function appendDir(program: Block[], dir: Dir, intoOpenRepeat: boolean): Block[] {
  const last = program[program.length - 1];
  if (intoOpenRepeat && last && typeof last !== 'string') {
    return [...program.slice(0, -1), { ...last, body: [...last.body, dir] }];
  }
  return [...program, dir];
}

export const openRepeat = (program: Block[]): Block[] => [...program, { repeat: MIN_REPEAT, body: [] }];

export function removeLast(program: Block[], intoOpenRepeat: boolean): { program: Block[]; editing: boolean } {
  const last = program[program.length - 1];
  if (last === undefined) return { program, editing: false };
  if (intoOpenRepeat && typeof last !== 'string' && last.body.length > 0) {
    return { program: [...program.slice(0, -1), { ...last, body: last.body.slice(0, -1) }], editing: true };
  }
  return { program: program.slice(0, -1), editing: false };
}

export const cleanProgram = (program: Block[]): Block[] =>
  program.filter((block) => typeof block === 'string' || block.body.length > 0);

export const cycleRepeat = (program: Block[], index: number): Block[] =>
  program.map((block, i) =>
    i === index && typeof block !== 'string'
      ? { ...block, repeat: block.repeat >= MAX_REPEAT ? MIN_REPEAT : block.repeat + 1 }
      : block);

// --- Levels. Every level is checked solvable (and loop levels checked to need a loop) by the tests ---

const cell = (x: number, y: number): Cell => ({ x, y });

export const BOT_LEVELS: Record<AgeBracket, BotLevel[]> = {
  'pre-k': [
    { id: 'pk-1', cols: 3, rows: 3, start: cell(0, 1), goal: cell(2, 1), rocks: [], maxBlocks: 5, loops: false },
    { id: 'pk-2', cols: 3, rows: 3, start: cell(0, 0), goal: cell(2, 2), rocks: [], maxBlocks: 6, loops: false },
    { id: 'pk-3', cols: 3, rows: 3, start: cell(0, 2), goal: cell(2, 0), rocks: [cell(1, 1)], maxBlocks: 6, loops: false },
    { id: 'pk-4', cols: 3, rows: 3, start: cell(0, 1), goal: cell(2, 1), rocks: [cell(1, 1)], maxBlocks: 6, loops: false },
    { id: 'pk-5', cols: 3, rows: 3, start: cell(0, 0), goal: cell(2, 0), rocks: [cell(1, 0)], maxBlocks: 6, loops: false },
  ],
  kindergarten: [
    { id: 'k-1', cols: 4, rows: 4, start: cell(0, 3), goal: cell(3, 0), rocks: [], maxBlocks: 8, loops: false },
    { id: 'k-2', cols: 4, rows: 4, start: cell(0, 0), goal: cell(3, 3), rocks: [cell(1, 1), cell(2, 2)], maxBlocks: 8, loops: false },
    { id: 'k-3', cols: 4, rows: 4, start: cell(0, 3), goal: cell(3, 3), rocks: [cell(1, 3), cell(2, 3)], maxBlocks: 8, loops: false },
    { id: 'k-4', cols: 4, rows: 4, start: cell(0, 1), goal: cell(3, 1), rocks: [cell(1, 1), cell(2, 1)], maxBlocks: 8, loops: false },
    { id: 'k-5', cols: 4, rows: 4, start: cell(0, 0), goal: cell(3, 3), rocks: [cell(1, 0), cell(1, 1), cell(2, 2)], maxBlocks: 8, loops: false },
  ],
  grade1: [
    { id: 'g-1', cols: 5, rows: 5, start: cell(0, 2), goal: cell(4, 2), rocks: [], maxBlocks: 3, loops: true },
    { id: 'g-2', cols: 5, rows: 5, start: cell(0, 0), goal: cell(4, 4), rocks: [], maxBlocks: 4, loops: true },
    { id: 'g-3', cols: 5, rows: 5, start: cell(0, 4), goal: cell(4, 0), rocks: [cell(3, 3)], maxBlocks: 4, loops: true },
    { id: 'g-4', cols: 5, rows: 5, start: cell(0, 0), goal: cell(4, 4), rocks: [cell(2, 2)], maxBlocks: 4, loops: true },
    { id: 'g-5', cols: 5, rows: 5, start: cell(0, 2), goal: cell(4, 2), rocks: [cell(2, 2)], maxBlocks: 4, loops: true },
  ],
};

// ================= Pattern Parade =================

export const PATTERN_ITEMS = [
  { emoji: '🍎', word: 'apple' },
  { emoji: '⭐', word: 'star' },
  { emoji: '☀️', word: 'sun' },
  { emoji: '🌙', word: 'moon' },
  { emoji: '🐱', word: 'cat' },
  { emoji: '🐶', word: 'dog' },
  { emoji: '🐟', word: 'fish' },
  { emoji: '🐦', word: 'bird' },
  { emoji: '🌳', word: 'tree' },
  { emoji: '🎂', word: 'cake' },
  { emoji: '⚽', word: 'ball' },
] as const;

export const PATTERN_WORD: Record<string, string> = Object.fromEntries(PATTERN_ITEMS.map((i) => [i.emoji, i.word]));

export type PatternItem = string | number;

export interface PatternQuestion {
  kind: 'items' | 'numbers';
  ask: 'next' | 'missing';
  shown: (PatternItem | null)[]; // exactly one null: the gap to fill
  full: PatternItem[]; // the same sequence with the gap filled
  hole: number;
  answer: PatternItem;
  options: PatternItem[];
}

const ITEM_TEMPLATES: Record<AgeBracket, { unit: string; len: number }[]> = {
  'pre-k': [{ unit: 'AB', len: 5 }],
  kindergarten: [
    { unit: 'AB', len: 6 },
    { unit: 'AAB', len: 7 },
    { unit: 'ABB', len: 7 },
    { unit: 'ABC', len: 7 },
  ],
  grade1: [
    { unit: 'ABC', len: 8 },
    { unit: 'AABB', len: 8 },
    { unit: 'ABCD', len: 8 },
    { unit: 'AAB', len: 8 },
  ],
};

const NUMBER_STEPS: Record<AgeBracket, number[]> = {
  'pre-k': [],
  kindergarten: [1, 2],
  grade1: [2, 3, 5, -1, -2, -5],
};

const NUMBER_CHANCE: Record<AgeBracket, number> = { 'pre-k': 0, kindergarten: 0.3, grade1: 0.5 };
const MISSING_CHANCE: Record<AgeBracket, number> = { 'pre-k': 0, kindergarten: 0.35, grade1: 0.5 };
const OPTION_COUNT: Record<AgeBracket, number> = { 'pre-k': 3, kindergarten: 3, grade1: 4 };

// `next` asks for the last item; `missing` hides one in the middle (never in the first cycle)
function chooseHole(rng: Rng, bracket: AgeBracket, len: number, firstCycle: number) {
  const missing = rng() < MISSING_CHANCE[bracket] && len - 2 >= firstCycle;
  return missing
    ? { ask: 'missing' as const, hole: randInt(rng, firstCycle, len - 2) }
    : { ask: 'next' as const, hole: len - 1 };
}

function makeItemQuestion(bracket: AgeBracket, rng: Rng): PatternQuestion {
  const { unit, len } = pick(rng, ITEM_TEMPLATES[bracket]);
  const letters = [...new Set(unit)];
  const emoji: string[] = shuffle(rng, PATTERN_ITEMS).slice(0, letters.length).map((i) => i.emoji);
  const byLetter = Object.fromEntries(letters.map((l, i) => [l, emoji[i]])) as Record<string, string>;

  const full = Array.from({ length: len }, (_, i) => byLetter[unit[i % unit.length]]);
  const { ask, hole } = chooseHole(rng, bracket, len, unit.length);
  const answer = full[hole];

  // Wrong choices: the other items in this pattern first (they look tempting), then anything else
  const inPattern = emoji.filter((e) => e !== answer);
  const elsewhere = PATTERN_ITEMS.map((i): string => i.emoji).filter((e) => !emoji.includes(e));
  const distractors = [...shuffle(rng, inPattern), ...shuffle(rng, elsewhere)].slice(0, OPTION_COUNT[bracket] - 1);

  return {
    kind: 'items',
    ask,
    shown: full.map((item, i) => (i === hole ? null : item)),
    full,
    hole,
    answer,
    options: shuffle(rng, [answer, ...distractors]),
  };
}

function makeNumberQuestion(bracket: AgeBracket, rng: Rng): PatternQuestion {
  const len = 5;
  const step = pick(rng, NUMBER_STEPS[bracket]);
  const span = Math.abs(step) * (len - 1);
  // Start somewhere that keeps every number inside 0-20 (counting by 5 only fits as 0, 5, 10, 15, 20)
  const lo = step > 0 ? (span === MAX_NUMBER ? 0 : 1) : span;
  const hi = step > 0 ? MAX_NUMBER - span : MAX_NUMBER;
  const start = randInt(rng, lo, hi);
  const full = Array.from({ length: len }, (_, i) => start + i * step);

  const ask = rng() < MISSING_CHANCE[bracket] ? 'missing' : 'next';
  const hole = ask === 'missing' ? randInt(rng, 2, len - 2) : len - 1;
  const answer = full[hole];

  const near = [answer - 1, answer + 1, answer - Math.abs(step), answer + Math.abs(step), answer + 2, answer - 2]
    .filter((n, i, all) => n >= 0 && n <= MAX_NUMBER && n !== answer && all.indexOf(n) === i);
  const distractors = shuffle(rng, near).slice(0, OPTION_COUNT[bracket] - 1);

  return {
    kind: 'numbers',
    ask,
    shown: full.map((n, i) => (i === hole ? null : n)),
    full,
    hole,
    answer,
    options: shuffle(rng, [answer, ...distractors]),
  };
}

export function makePatternQuestion(bracket: AgeBracket, rng: Rng = Math.random): PatternQuestion {
  return rng() < NUMBER_CHANCE[bracket] ? makeNumberQuestion(bracket, rng) : makeItemQuestion(bracket, rng);
}

// ================= Magic Machine =================

export type RuleKind = 'add' | 'sub' | 'double' | 'triple';
export interface Rule { kind: RuleKind; n: number }

const rule = (kind: RuleKind, n = 0): Rule => ({ kind, n });

export const MACHINE_RULES: Record<AgeBracket, Rule[]> = {
  'pre-k': [rule('add', 1), rule('add', 2)],
  kindergarten: [rule('add', 1), rule('add', 2), rule('add', 3), rule('sub', 1), rule('sub', 2), rule('double')],
  grade1: [
    rule('add', 2), rule('add', 3), rule('add', 4), rule('add', 5), rule('add', 10),
    rule('sub', 1), rule('sub', 2), rule('sub', 3), rule('double'), rule('triple'),
  ],
};

const INPUT_RANGE: Record<AgeBracket, [number, number]> = { 'pre-k': [1, 5], kindergarten: [1, 8], grade1: [1, 10] };
const EXAMPLE_COUNT: Record<AgeBracket, number> = { 'pre-k': 2, kindergarten: 3, grade1: 3 };

// What the machine gives back, or null if the result would leave 0..20 (so it isn't a fair question)
export function ruleOutput(r: Rule, x: number): number | null {
  const y = r.kind === 'add' ? x + r.n : r.kind === 'sub' ? x - r.n : r.kind === 'double' ? x * 2 : x * 3;
  return y >= 0 && y <= MAX_NUMBER ? y : null;
}

export const ruleLabel = (r: Rule) =>
  r.kind === 'add' ? `+${r.n}` : r.kind === 'sub' ? `−${r.n}` : r.kind === 'double' ? '×2' : '×3';

export interface MachineQuestion {
  rule: Rule;
  examples: { input: number; output: number }[];
  input: number;
  answer: number;
  options: number[];
}

// The examples must pin the rule down: every rule in this level's set that fits them
// has to give the same answer for the new number.
export function makeMachineQuestion(bracket: AgeBracket, rng: Rng = Math.random): MachineQuestion {
  const rules = MACHINE_RULES[bracket];
  const [lo, hi] = INPUT_RANGE[bracket];
  const exampleCount = EXAMPLE_COUNT[bracket];

  for (let attempt = 0; attempt < 500; attempt++) {
    const chosen = pick(rng, rules);
    const usable = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i).filter((x) => ruleOutput(chosen, x) !== null);
    if (usable.length < exampleCount + 1) continue;

    const picked = shuffle(rng, usable).slice(0, exampleCount + 1);
    const input = picked[picked.length - 1];
    const examples = picked
      .slice(0, exampleCount)
      .sort((a, b) => a - b)
      .map((x) => ({ input: x, output: ruleOutput(chosen, x) as number }));
    const answer = ruleOutput(chosen, input) as number;

    const fits = rules.filter((r) => examples.every((e) => ruleOutput(r, e.input) === e.output));
    if (!fits.every((r) => ruleOutput(r, input) === answer)) continue;

    // Tempting wrong answers: what the other rules would give, then neighbours
    const fromOtherRules = rules.map((r) => ruleOutput(r, input)).filter((y): y is number => y !== null && y !== answer);
    const neighbours = [answer - 1, answer + 1].filter((y) => y >= 0 && y <= MAX_NUMBER && y !== answer);
    const pool = [...new Set([...shuffle(rng, fromOtherRules), ...shuffle(rng, neighbours)])];
    if (pool.length < 2) continue;

    return { rule: chosen, examples, input, answer, options: shuffle(rng, [answer, ...pool.slice(0, 2)]) };
  }
  throw new Error(`Could not build a machine question for ${bracket}`);
}
