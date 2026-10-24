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

// Multiple choice with 4 options (fewer only if there aren't enough distinct wrong ones)
export function mc(rng: Rng, right: Choice | string | number, wrong: (Choice | string | number)[], prompt?: Block[]): ChoicePart {
  const r = asChoice(right);
  const choices = shuffle(rng, [r, ...distinct([r], wrong.map(asChoice), 3)]);
  return { type: 'mc', prompt, choices, correct: [choices.indexOf(r)] };
}

// "Select TWO": two right answers among 5 options
export function multi(rng: Rng, rights: (Choice | string)[], wrong: (Choice | string)[], total = 5, prompt?: Block[]): ChoicePart {
  const rs = rights.map(asChoice);
  const choices = shuffle(rng, [...rs, ...distinct(rs, wrong.map(asChoice), total - rs.length)]);
  return { type: 'multiselect', prompt, choices, correct: rs.map((r) => choices.indexOf(r)).sort((a, b) => a - b) };
}

// A drop-down: the options are shown in the given order (sorted, like a real menu), not shuffled
export const blank = (options: string[], right: string) => ({ options, correct: options.indexOf(right) });
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
export const plain = (s: string): string => s.replace(/(\d)\{/g, '$1 {').replace(/\{(\d+)\/(\d+)\}/g, '$1/$2');
