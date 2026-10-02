// Tower of Hanoi: pure game logic. A state is three pegs; each peg lists its discs bottom to top
// and a disc is its size (1 is the smallest). Unit tested with `npm run test:logic`.

export type Pegs = [number[], number[], number[]];

export const MIN_DISCS = 3;
export const MAX_DISCS = 7;

export const newGame = (discs: number): Pegs => [Array.from({ length: discs }, (_, i) => discs - i), [], []];

export const optimalMoves = (discs: number) => 2 ** discs - 1;

export function canMove(pegs: Pegs, from: number, to: number): boolean {
  if (from === to || !pegs[from].length) return false;
  const disc = pegs[from][pegs[from].length - 1];
  const target = pegs[to][pegs[to].length - 1];
  return target === undefined || disc < target;
}

export function move(pegs: Pegs, from: number, to: number): Pegs {
  if (!canMove(pegs, from, to)) throw new Error('illegal move');
  const next = pegs.map((p) => [...p]) as Pegs;
  next[to].push(next[from].pop() as number);
  return next;
}

// Solved when every disc is on the last peg
export const isSolved = (pegs: Pegs, discs: number) => pegs[2].length === discs;

// The shortest list of moves from ANY legal position to everything on `target`.
// Move the biggest disc that is out of place, after clearing the smaller ones onto the spare peg.
export function solveFrom(pegs: Pegs, target = 2): [number, number][] {
  const discs = pegs[0].length + pegs[1].length + pegs[2].length;
  const where = new Array<number>(discs + 1).fill(0); // where[size] = peg
  pegs.forEach((p, i) => p.forEach((d) => { where[d] = i; }));
  const moves: [number, number][] = [];
  const tower = (size: number, to: number) => {
    if (size === 0) return;
    if (where[size] === to) { tower(size - 1, to); return; }
    const spare = 3 - where[size] - to;
    tower(size - 1, spare);
    moves.push([where[size], to]);
    where[size] = to;
    tower(size - 1, to);
  };
  tower(discs, target);
  return moves;
}
