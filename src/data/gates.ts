// Logic Gates Lab: circuits made of switches, gates and a bulb. Some gates are blank: the child picks
// what goes in each one so the bulb behaves as the goal says. Pure logic, unit tested with `npm run test:logic`.

export type Op = 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR' | 'WIRE';

export interface GateNode {
  id: string;
  inputs: string[]; // ids of switches or other gates; the same id twice is allowed
  options: Op[]; // what the child can choose for this gate
}

export interface GateChallenge {
  id: string;
  level: number; // 6..10 on the app's difficulty scale
  title: string;
  goal: string;
  switches: string[];
  gates: GateNode[]; // in evaluation order; the last one drives the bulb
  solution: Record<string, Op>;
}

export type Choice = Record<string, Op | null | undefined>;

export function applyOp(op: Op, inputs: boolean[]): boolean {
  switch (op) {
    case 'AND': return inputs.every(Boolean);
    case 'OR': return inputs.some(Boolean);
    case 'NAND': return !inputs.every(Boolean);
    case 'NOR': return !inputs.some(Boolean);
    case 'XOR': return inputs.filter(Boolean).length % 2 === 1;
    case 'NOT': return !inputs[0];
    case 'WIRE': return inputs[0];
  }
}

// Value of every node, or null where it can't be known yet (a gate with nothing chosen)
export function evaluate(ch: GateChallenge, switches: Record<string, boolean>, choice: Choice): Record<string, boolean | null> {
  const values: Record<string, boolean | null> = { ...switches };
  for (const gate of ch.gates) {
    const op = choice[gate.id];
    const ins = gate.inputs.map((id) => values[id]);
    values[gate.id] = op && ins.every((v) => v !== null && v !== undefined) ? applyOp(op, ins as boolean[]) : null;
  }
  return values;
}

export const outputId = (ch: GateChallenge) => ch.gates[ch.gates.length - 1].id;

// Every combination of switches, first switch changing slowest (like a truth table is usually written)
export function combinations(names: string[]): Record<string, boolean>[] {
  const rows: Record<string, boolean>[] = [];
  for (let n = 0; n < 2 ** names.length; n++) {
    rows.push(Object.fromEntries(names.map((name, i) => [name, Boolean((n >> (names.length - 1 - i)) & 1)])));
  }
  return rows;
}

export function truthTable(ch: GateChallenge, choice: Choice): (boolean | null)[] {
  return combinations(ch.switches).map((row) => evaluate(ch, row, choice)[outputId(ch)]);
}

export const goalTable = (ch: GateChallenge): boolean[] => truthTable(ch, ch.solution) as boolean[];

// Any choice that makes the bulb behave as the goal counts, not only the stored solution
export function isSolved(ch: GateChallenge, choice: Choice): boolean {
  const goal = goalTable(ch);
  return truthTable(ch, choice).every((v, i) => v === goal[i]);
}

// ---------- Layout: switches on the left, gates in columns by depth, bulb on the right ----------

export interface Placed { id: string; kind: 'switch' | 'gate' | 'bulb'; col: number; row: number }

export function layout(ch: GateChallenge): { nodes: Placed[]; cols: number } {
  const col: Record<string, number> = {};
  ch.switches.forEach((s) => { col[s] = 0; });
  for (const g of ch.gates) col[g.id] = 1 + Math.max(...g.inputs.map((i) => col[i]));
  const out = outputId(ch);
  const bulbCol = col[out] + 1;
  const rowCount: Record<number, number> = {};
  const place = (id: string, kind: Placed['kind'], c: number): Placed => {
    const row = rowCount[c] ?? 0;
    rowCount[c] = row + 1;
    return { id, kind, col: c, row };
  };
  const nodes = [
    ...ch.switches.map((s) => place(s, 'switch', 0)),
    ...ch.gates.map((g) => place(g.id, 'gate', col[g.id])),
    place('bulb', 'bulb', bulbCol),
  ];
  return { nodes, cols: bulbCol + 1 };
}

const TWO: Op[] = ['AND', 'OR'];
const ALL2: Op[] = ['AND', 'OR', 'NAND', 'NOR', 'XOR'];
const ONE: Op[] = ['WIRE', 'NOT'];

export const GATE_CHALLENGES: GateChallenge[] = [
  { id: 'gates-1', level: 6, title: 'Both switches', goal: 'The bulb lights only when BOTH switches are on.',
    switches: ['A', 'B'], gates: [{ id: 'g1', inputs: ['A', 'B'], options: TWO }], solution: { g1: 'AND' } },
  { id: 'gates-2', level: 6, title: 'Either switch', goal: 'The bulb lights when at least ONE switch is on.',
    switches: ['A', 'B'], gates: [{ id: 'g1', inputs: ['A', 'B'], options: TWO }], solution: { g1: 'OR' } },
  { id: 'gates-3', level: 6, title: 'The opposite', goal: 'The bulb is on only when the switch is OFF.',
    switches: ['A'], gates: [{ id: 'g1', inputs: ['A'], options: ONE }], solution: { g1: 'NOT' } },
  { id: 'gates-4', level: 7, title: 'Not both', goal: 'The bulb lights unless both switches are on.',
    switches: ['A', 'B'], gates: [{ id: 'g1', inputs: ['A', 'B'], options: ALL2 }], solution: { g1: 'NAND' } },
  { id: 'gates-5', level: 7, title: 'Neither', goal: 'The bulb lights only when both switches are off.',
    switches: ['A', 'B'], gates: [{ id: 'g1', inputs: ['A', 'B'], options: ALL2 }], solution: { g1: 'NOR' } },
  { id: 'gates-6', level: 7, title: 'Exactly one', goal: 'The bulb lights when exactly one switch is on, not zero and not two.',
    switches: ['A', 'B'], gates: [{ id: 'g1', inputs: ['A', 'B'], options: ALL2 }], solution: { g1: 'XOR' } },
  { id: 'gates-7', level: 8, title: 'The alarm', goal: 'The bulb lights when C is on, or when A and B are both on.',
    switches: ['A', 'B', 'C'],
    gates: [{ id: 'g1', inputs: ['A', 'B'], options: TWO }, { id: 'g2', inputs: ['g1', 'C'], options: TWO }],
    solution: { g1: 'AND', g2: 'OR' } },
  { id: 'gates-8', level: 8, title: 'A but not B', goal: 'The bulb lights when A is on and B is off.',
    switches: ['A', 'B'],
    gates: [{ id: 'g1', inputs: ['B'], options: ONE }, { id: 'g2', inputs: ['A', 'g1'], options: ['AND', 'OR', 'XOR'] }],
    solution: { g1: 'NOT', g2: 'AND' } },
  { id: 'gates-9', level: 9, title: 'The two-key door', goal: 'The bulb lights when A and B are on and C is off.',
    switches: ['A', 'B', 'C'],
    gates: [{ id: 'g1', inputs: ['A', 'B'], options: TWO }, { id: 'g2', inputs: ['C'], options: ONE }, { id: 'g3', inputs: ['g1', 'g2'], options: TWO }],
    solution: { g1: 'AND', g2: 'NOT', g3: 'AND' } },
  { id: 'gates-10', level: 9, title: 'Make a NOT', goal: 'This gate has A on both inputs. Pick the gate that makes the bulb light only when A is off.',
    switches: ['A'], gates: [{ id: 'g1', inputs: ['A', 'A'], options: ALL2 }], solution: { g1: 'NAND' } },
  { id: 'gates-11', level: 9, title: 'Match', goal: 'The bulb lights when both switches are the same: both on or both off.',
    switches: ['A', 'B'],
    gates: [{ id: 'g1', inputs: ['A', 'B'], options: ['AND', 'OR', 'XOR'] }, { id: 'g2', inputs: ['g1'], options: ONE }],
    solution: { g1: 'XOR', g2: 'NOT' } },
  { id: 'gates-12', level: 10, title: 'Build an AND', goal: 'Make an AND gate (bulb on only when both are on) from these gates. There is no AND to pick!',
    switches: ['A', 'B'],
    gates: [{ id: 'g1', inputs: ['A', 'B'], options: ['OR', 'NAND', 'NOR', 'XOR'] }, { id: 'g2', inputs: ['g1', 'g1'], options: ['OR', 'NAND', 'NOR', 'XOR'] }],
    solution: { g1: 'NAND', g2: 'NAND' } },
  { id: 'gates-13', level: 10, title: 'Odd one on', goal: 'The bulb lights when an odd number of switches are on: one or three.',
    switches: ['A', 'B', 'C'],
    gates: [{ id: 'g1', inputs: ['A', 'B'], options: ['AND', 'OR', 'XOR'] }, { id: 'g2', inputs: ['g1', 'C'], options: ['AND', 'OR', 'XOR'] }],
    solution: { g1: 'XOR', g2: 'XOR' } },
  { id: 'gates-14', level: 10, title: 'Majority vote', goal: 'The bulb lights when at least TWO of the three switches are on.',
    switches: ['A', 'B', 'C'],
    gates: [
      { id: 'g1', inputs: ['A', 'B'], options: ['AND', 'OR', 'XOR'] },
      { id: 'g2', inputs: ['B', 'C'], options: ['AND', 'OR', 'XOR'] },
      { id: 'g3', inputs: ['A', 'C'], options: ['AND', 'OR', 'XOR'] },
      { id: 'g4', inputs: ['g1', 'g2'], options: ['AND', 'OR', 'XOR'] },
      { id: 'g5', inputs: ['g4', 'g3'], options: ['AND', 'OR', 'XOR'] },
    ],
    solution: { g1: 'AND', g2: 'AND', g3: 'AND', g4: 'OR', g5: 'OR' } },
];
