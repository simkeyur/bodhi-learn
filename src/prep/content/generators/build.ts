// Helpers the generators share: building parts and items, and formatting numbers and fractions.
// Pure and seedable.

import { shuffle, type Rng } from '../rng.ts';
import type { Block, Choice, ChoicePart, Figure, InlinePart, Item, Part } from '../types.ts';

export type Draft = Omit<Item, 'id' | 'grade' | 'subject' | 'standard' | 'difficulty'>;
export type Gen = (rng: Rng, difficulty: 1 | 2 | 3) => Draft;

export const txt = (text: string): Block => ({ kind: 'text', text });
export const fig = (figure: Figure, alt: string): Block => ({ kind: 'figure', figure, alt });
export const table = (head: string[], rows: (string | number)[][], caption?: string): Block =>
  ({ kind: 'table', head, rows: rows.map((r) => r.map(String)), caption });

const keyOf = (c: Choice) => `${c.text ?? ''}|${c.figure ? JSON.stringify(c.figure) : ''}`;

// Keep the first distinct wrong choices that differ from the right ones
function distinct(right: Choice[], wrong: Choice[], want: number): Choice[] {
  const seen = new Set(right.map(keyOf));
  const out: Choice[] = [];
  for (const w of wrong) {
    if (out.length >= want) break;
    const k = keyOf(w);
    if (!seen.has(k)) { seen.add(k); out.push(w); }
  }
  return out;
}

const asChoice = (c: Choice | string | number): Choice => (typeof c === 'object' ? c : { text: String(c) });

// Multiple choice with 4 options. If the generator's wrong answers run out (they collide), nearby values of the
// same kind fill the gap, so every question has four choices like the real test.
export function mc(rng: Rng, right: Choice | string | number, wrong: (Choice | string | number)[], prompt?: Block[]): ChoicePart {
  const r = asChoice(right);
  let picked = distinct([r], wrong.map(asChoice), 3);
  if (picked.length < 3 && r.text) picked = [...picked, ...nearbyChoices(r.text, [r, ...picked], 3 - picked.length)];
  const choices = shuffle(rng, [r, ...picked]);
  return { type: 'mc', prompt, choices, correct: [choices.indexOf(r)] };
}

// ---------- Filling in wrong answers ----------

const FRACTION = /^(\d+)?\{(\d+)\/(\d+)\}$/;
const NUMBER = /^(\$?)(\d[\d,]*(?:\.\d+)?)(.*)$/;
const PAIR = /^\((\d+), (\d+)\)$/;

// What a choice is worth, so "1.0" and "1", or {1/2} and {2/4}, count as the same answer
function valueOf(text: string): string {
  const f = FRACTION.exec(text);
  if (f) return String(Number(f[1] ?? 0) + Number(f[2]) / Number(f[3]));
  const n = NUMBER.exec(text);
  if (n) return `${n[1]}${Number(n[2].replace(/,/g, ''))}${n[3].replace(/^ units?$/, ' units')}`;
  return text;
}

function nearbyTexts(text: string): string[] {
  const f = FRACTION.exec(text);
  if (f) {
    const d = Number(f[3]), top = Number(f[1] ?? 0) * d + Number(f[2]);
    return [1, -1, 2, d, -2, 3].map((k) => top + k).filter((t) => t > 0).map((t) => frac(t, d));
  }
  const p = PAIR.exec(text);
  if (p) {
    const [x, y] = [Number(p[1]), Number(p[2])];
    return [[x + 1, y], [x, y + 1], [y + 1, x], [x + 2, y], [x, y + 2]].map(([a, b]) => `(${a}, ${b})`);
  }
  const n = NUMBER.exec(text);
  if (n) {
    const [, prefix, digits, suffix] = n;
    const places = digits.includes('.') ? digits.split('.')[1].length : 0;
    const v = Number(digits.replace(/,/g, ''));
    const step = prefix === '$' ? (v >= 100 ? 10 : 1) : 10 ** -places * (v >= 1000 && !places ? 100 : 1);
    const unit = (x: number) => (/^ units?$/.test(suffix) ? (x === 1 ? ' unit' : ' units') : suffix);
    return [1, -1, 2, -2, 5, 10].map((k) => Math.round((v + k * step) * 10 ** places) / 10 ** places).filter((x) => x >= 0)
      .map((x) => `${prefix}${x.toLocaleString('en-US', { minimumFractionDigits: places, maximumFractionDigits: places })}${unit(x)}`);
  }
  return [];
}

function nearbyChoices(rightText: string, taken: Choice[], want: number): Choice[] {
  const seen = new Set(taken.map((c) => valueOf(c.text ?? '')));
  const out: Choice[] = [];
  for (const t of nearbyTexts(rightText)) {
    if (out.length >= want) break;
    if (!seen.has(valueOf(t))) { seen.add(valueOf(t)); out.push({ text: t }); }
  }
  return out;
}

// "Select TWO": two right answers among 5 options
export function multi(rng: Rng, rights: (Choice | string)[], wrong: (Choice | string)[], total = 5, prompt?: Block[]): ChoicePart {
  const rs = rights.map(asChoice);
  const choices = shuffle(rng, [...rs, ...distinct(rs, wrong.map(asChoice), total - rs.length)]);
  return { type: 'multiselect', prompt, choices, correct: rs.map((r) => choices.indexOf(r)).sort((a, b) => a - b) };
}

// A drop-down: the options are shown in the given order (sorted, like a real menu), not shuffled
export const blank = (options: string[], right: string) => ({ options, correct: options.indexOf(right) });
// Numbers for a drop-down: the right one plus distinct non-negative neighbours, smallest first
export function numberOptions(right: number, others: number[], count = 4): string[] {
  const set = [right];
  for (const o of others) if (set.length < count && o >= 0 && !set.includes(o)) set.push(o);
  return set.sort((a, b) => a - b).map(String);
}

export const inline = (segments: InlinePart['segments'], blanks: InlinePart['blanks'], prompt?: Block[]): InlinePart =>
  ({ type: 'inline', segments, blanks, prompt });

export function one(type: Draft['type'], stem: Block[], part: Part, explain: string): Draft {
  const units = part.type === 'inline' ? part.blanks.length : part.correct.length;
  return { type, points: units === 2 ? 2 : 1, stem, parts: [part], explain };
}

export const twoPart = (stem: Block[], a: Part, b: Part, explain: string): Draft =>
  ({ type: 'multipart', points: 2, stem, parts: [a, b], explain });

// ---------- Numbers ----------

export const num = (n: number): string => n.toLocaleString('en-US');

// A decimal held as an integer count of 10^-places, e.g. dec(4305, 3) = "4.305". `keep` keeps trailing zeros.
export function dec(units: number, places: number, keep = false): string {
  const neg = units < 0;
  const s = String(Math.abs(Math.round(units))).padStart(places + 1, '0');
  const whole = s.slice(0, s.length - places);
  let frac = places ? s.slice(-places) : '';
  if (!keep) frac = frac.replace(/0+$/, '');
  return `${neg ? '−' : ''}${num(Number(whole))}${frac ? `.${frac}` : ''}`;
}

export const money = (cents: number): string => `$${dec(cents, 2, true)}`;

// Numbers near `n` for padding wrong answers
export const near = (n: number, steps: number[] = [1, -1, 2, -2, 10, -10]): number[] => steps.map((s) => n + s).filter((v) => v >= 0);

// ---------- Fractions ----------

export const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));
export const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);

// Simplest form, as markup: 7/3 -> "2{1/3}", 4/2 -> "2", 2/4 -> "{1/2}"
export function frac(n: number, d: number, mixed = true): string {
  const g = gcd(n, d);
  const [a, b] = [n / g, d / g];
  if (b === 1) return String(a);
  if (!mixed || a < b) return `{${a}/${b}}`;
  return `${Math.floor(a / b)}{${a % b}/${b}}`;
}

// Plain text for figure labels and alt text, where markup isn't rendered: "2 1/3"
// 1st, 2nd, 3rd, 4th ... 11th, 12th, 13th, 21st
export const ordinal = (n: number): string => {
  const t = n % 100;
  if (t >= 11 && t <= 13) return `${n}th`;
  return `${n}${['th', 'st', 'nd', 'rd'][n % 10] ?? 'th'}`;
};

export const plain = (s: string): string => s.replace(/(\d)\{/g, '$1 {').replace(/\{(\d+)\/(\d+)\}/g, '$1/$2');
