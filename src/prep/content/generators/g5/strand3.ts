// Grade 5 math, strand 3: geometry and measurement.

import { pick, randInt, sample, shuffle, type Rng } from '../../rng.ts';
import { fig, mc, multi, num, one, txt, type Gen } from '../build.ts';

// ---------- 5.4H perimeter, area and volume problems ----------
export const perimeterAreaVolume: Gen = (rng, d) => {
  const unit = pick(rng, ['feet', 'meters', 'inches', 'centimeters']);
  if (d === 1) {
    const l = randInt(rng, 5, 20), w = randInt(rng, 3, l - 1);
    const area = rng() < 0.5;
    const thing = pick(rng, ['garden', 'rug', 'poster', 'patio']);
    const right = area ? l * w : 2 * (l + w);
    return one('mc', [txt(`A rectangular ${thing} is ${l} ${unit} long and ${w} ${unit} wide. What is the ${area ? 'area' : 'perimeter'} of the ${thing}?`)],
      mc(rng, `${right} ${area ? `square ${unit}` : unit}`, [
        { text: `${area ? 2 * (l + w) : l * w} ${area ? `square ${unit}` : unit}`, why: area ? 'That is the perimeter: the distance around.' : 'That is the area: the space inside.' },
        `${l + w} ${area ? `square ${unit}` : unit}`, `${right + 2} ${area ? `square ${unit}` : unit}`, `${area ? l * w * 2 : l * 2 + w} ${area ? `square ${unit}` : unit}`,
      ]),
      area ? `Area = length × width = ${l} × ${w} = ${l * w} square ${unit}.` : `Perimeter = 2 × (length + width) = 2 × (${l} + ${w}) = ${2 * (l + w)} ${unit}.`);
  }
  if (d === 2) {
    const l = randInt(rng, 3, 12), w = randInt(rng, 2, 9), h = randInt(rng, 2, 8);
    const v = l * w * h;
    return one('mc', [txt(`A box shaped like a rectangular prism is ${l} ${unit} long, ${w} ${unit} wide and ${h} ${unit} tall. What is the volume of the box?`)],
      mc(rng, `${num(v)} cubic ${unit}`, [`${l * w + h} cubic ${unit}`, `${l + w + h} cubic ${unit}`, `${num(2 * (l * w + w * h + l * h))} cubic ${unit}`, `${num(v + l)} cubic ${unit}`]),
      `Volume = length × width × height = ${l} × ${w} × ${h} = ${num(v)} cubic ${unit}.`);
  }
  // Two steps: use the area to find a side, then the perimeter
  const w = randInt(rng, 3, 9), l = w + randInt(rng, 2, 8);
  return one('mc', [txt(`A rectangle has an area of ${l * w} square ${unit}. Its width is ${w} ${unit}. What is the perimeter of the rectangle?`)],
    mc(rng, `${2 * (l + w)} ${unit}`, [`${l} ${unit}`, `${l + w} ${unit}`, `${l * w * 2} ${unit}`, `${2 * (l + w) + 2} ${unit}`]),
    `Length = area ÷ width = ${l * w} ÷ ${w} = ${l}. Perimeter = 2 × (${l} + ${w}) = ${2 * (l + w)} ${unit}.`);
};

// ---------- 5.5A classify two-dimensional figures ----------
const TRUE_FACTS = [
  'All squares are rectangles.', 'All squares are rhombuses.', 'All rectangles are parallelograms.',
  'All rhombuses are parallelograms.', 'Every square is a parallelogram.', 'Some rectangles are squares.',
  'Some parallelograms are rhombuses.', 'All rectangles have four right angles.', 'A rhombus has four sides of equal length.',
  'All parallelograms have two pairs of parallel sides.',
];
const FALSE_FACTS: [string, string][] = [
  ['All rectangles are squares.', 'A rectangle only needs four right angles; its sides do not have to be equal.'],
  ['All parallelograms are rectangles.', 'A parallelogram does not need right angles.'],
  ['All rhombuses are squares.', 'A rhombus does not need right angles.'],
  ['No squares are rhombuses.', 'A square has four equal sides, so it is a rhombus.'],
  ['Every quadrilateral is a parallelogram.', 'Some quadrilaterals have no parallel sides.'],
  ['All parallelograms have four right angles.', 'Only some parallelograms, the rectangles, have right angles.'],
  ['A rectangle cannot be a rhombus.', 'A square is both a rectangle and a rhombus.'],
  ['Some squares are not rectangles.', 'Every square has four right angles, so every square is a rectangle.'],
];

export const classifyFigures: Gen = (rng, d) => {
  if (d === 1) {
    const [right] = sample(rng, TRUE_FACTS, 1);
    const wrong = sample(rng, FALSE_FACTS, 3).map(([text, why]) => ({ text, why }));
    return one('mc', [txt('Which statement is true?')], mc(rng, right, wrong),
      'A square is a special rectangle and a special rhombus, and all three are parallelograms.');
  }
  const rights = sample(rng, TRUE_FACTS, 2);
  const wrong = sample(rng, FALSE_FACTS, 3).map(([text, why]) => ({ text, why }));
  return one('multiselect', [txt('Which statements are true? Select **TWO** correct answers.')], multi(rng, rights, wrong),
    'Think of a hierarchy: quadrilaterals → parallelograms → rectangles and rhombuses → squares. Each set is inside the one before it.');
};

// ---------- 5.6A unit cubes ----------
export const unitCubes: Gen = (rng, d) => {
  const l = randInt(rng, 2, d === 1 ? 4 : 5), w = randInt(rng, 2, 3), h = randInt(rng, 2, d === 1 ? 3 : 4);
  const v = l * w * h;
  const unit = d === 3 ? pick(rng, ['inch', 'centimeter']) : 'unit';
  const cubic = d === 3 ? (unit === 'inch' ? 'cubic inches' : 'cubic centimeters') : 'cubic units';
  const stem = d === 3
    ? `The rectangular prism is filled with cubes that each have a side length of 1 ${unit}. What is the volume of the prism?`
    : 'The rectangular prism is made of unit cubes with no gaps or overlaps. What is the volume of the prism?';
  return one('mc', [txt(stem), fig({ kind: 'prism', l, w, h }, `A rectangular prism ${l} cubes long, ${w} cubes wide and ${h} cubes tall.`)],
    mc(rng, `${v} ${cubic}`, [
      { text: `${l * w} ${cubic}`, why: 'That counts only one layer.' },
      `${l + w + h} ${cubic}`, `${2 * (l * w + w * h + l * h)} ${cubic}`, `${v + l * w} ${cubic}`,
    ]),
    `Each unit cube is 1 cubic ${unit === 'unit' ? 'unit' : unit}. There are ${l} × ${w} = ${l * w} cubes in a layer and ${h} layers: ${v} cubes.`);
};

// ---------- 5.6B volume by layers ----------
export const volumeByLayers: Gen = (rng, d) => {
  const l = randInt(rng, 2, 6), w = randInt(rng, 2, 5), h = randInt(rng, 2, 6);
  const base = l * w, v = base * h;
  if (d === 2) {
    return one('mc', [txt(`A rectangular prism has a volume of ${v} cubic units. Its base is ${l} units by ${w} units. How many layers of unit cubes does it have?`)],
      mc(rng, h, [base, v - base, h + 1, Math.max(1, h - 1)]),
      `Each layer has ${l} × ${w} = ${base} cubes. ${v} ÷ ${base} = ${h} layers.`);
  }
  const stem = d === 1
    ? [txt(`The base layer of the prism has ${base} unit cubes. There are ${h} layers. What is the volume of the prism?`), fig({ kind: 'prism', l, w, h }, `A prism ${l} by ${w} by ${h} unit cubes.`)]
    : [txt(`A shoebox has a base that is ${l} inches by ${w} inches. It is ${h} inches tall. Which expression can be used to find the volume of the shoebox in cubic inches?`)];
  if (d === 1) {
    return one('mc', stem, mc(rng, `${v} cubic units`, [`${base + h} cubic units`, `${base} cubic units`, `${v + base} cubic units`]),
      `Volume = number of cubes in a layer × number of layers = ${base} × ${h} = ${v} cubic units.`);
  }
  return one('mc', stem, mc(rng, `(${l} × ${w}) × ${h}`, [`(${l} + ${w}) × ${h}`, `${l} × ${w} + ${h}`, `2 × (${l} + ${w} + ${h})`]),
    `V = B × h: the base area is ${l} × ${w} = ${base} square inches, times the height ${h}: ${v} cubic inches.`);
};

// ---------- 5.7A convert measurements ----------
// [big unit, small unit, how many small in one big]
const CONVERSIONS: [string, string, number][] = [
  ['foot', 'inches', 12], ['yard', 'feet', 3], ['pound', 'ounces', 16], ['gallon', 'quarts', 4], ['quart', 'pints', 2],
  ['pint', 'cups', 2], ['meter', 'centimeters', 100], ['kilometer', 'meters', 1000], ['kilogram', 'grams', 1000],
  ['liter', 'milliliters', 1000], ['centimeter', 'millimeters', 10],
];
const plural = (big: string) => (big === 'foot' ? 'feet' : `${big}s`);

export const convertMeasurements: Gen = (rng, d) => {
  const [big, small, k] = pick(rng, CONVERSIONS);
  const n = randInt(rng, 2, d === 1 ? 9 : 15);
  if (d === 1) {
    return one('mc', [txt(`How many ${small} are in ${n} ${plural(big)}? (1 ${big} = ${num(k)} ${small})`)],
      mc(rng, num(n * k), [{ text: num(n + k), why: 'Each one is worth many of the smaller unit, so multiply.' }, num(n * k * 10), num(n * (k + 1)), num(Math.max(1, Math.round(n / k))) ]),
      `${n} × ${num(k)} = ${num(n * k)} ${small}.`);
  }
  if (d === 2) {
    return one('mc', [txt(`${num(n * k)} ${small} is equal to how many ${plural(big)}?`)],
      mc(rng, n, [n * k * k, n + k, n * 10, Math.max(1, n - 1)].map(num)),
      `There are ${num(k)} ${small} in 1 ${big}, so divide: ${num(n * k)} ÷ ${num(k)} = ${n} ${plural(big)}.`);
  }
  // Two-step: gallons to pints, or a word problem comparing units
  const g = randInt(rng, 2, 6);
  if (rng() < 0.5) {
    return one('mc', [txt(`A cooler holds ${g} gallons of water. How many pints is that? (1 gallon = 4 quarts, 1 quart = 2 pints)`)],
      mc(rng, g * 8, [g * 4, g * 2, g * 6, g * 16]),
      `${g} gallons = ${g * 4} quarts, and ${g * 4} quarts = ${g * 8} pints.`);
  }
  const m = randInt(rng, 2, 9), cm = randInt(rng, 10, 90);
  return one('mc', [txt(`A ribbon is ${m} meters long. ${pick(rng, ['Ana', 'Luis', 'Mei'])} cuts off ${cm} centimeters. How many centimeters of ribbon are left?`)],
    mc(rng, num(m * 100 - cm), [num(m * 100 - cm + 100), num(m * 100 + cm), num(m * 1000 - cm), num(m * 10 - cm > 0 ? m * 10 - cm : m * 100 - cm + 10)]),
    `${m} meters = ${m * 100} centimeters. ${m * 100} − ${cm} = ${m * 100 - cm} centimeters.`);
};

// ---------- 5.8A the coordinate plane ----------
const PLANE_TRUE = [
  'The x-axis and the y-axis are perpendicular number lines.',
  'The origin is where the x-axis and the y-axis meet, at the point (0, 0).',
  'The first number in an ordered pair tells how far to move along the x-axis from the origin.',
  'The second number in an ordered pair tells how far to move parallel to the y-axis.',
];
const PLANE_FALSE: [string, string][] = [
  ['The origin is the point (1, 1).', 'The origin is (0, 0), where both number lines start.'],
  ['The x-axis and the y-axis are parallel.', 'The axes cross at a right angle: they are perpendicular.'],
  ['The first number in an ordered pair tells how far to move up.', 'The first number is the x-coordinate: it tells how far to move across.'],
  ['The y-coordinate is the first number in an ordered pair.', 'The x-coordinate comes first: (x, y).'],
  ['The axes meet at the point (0, 1).', 'They meet at the origin, (0, 0).'],
];

export const coordinatePlane: Gen = (rng, d) => {
  if (d === 3) {
    const x = randInt(rng, 1, 9), y = randInt(rng, 1, 9);
    const askX = rng() < 0.5 || x === y;
    const units = (n: number) => `${n} unit${n === 1 ? '' : 's'}`;
    const far = askX ? x : y;
    return one('mc', [txt(`Point P is at (${x}, ${y}). How far is point P from the ${askX ? 'y-axis' : 'x-axis'}?`)],
      mc(rng, units(far), [units(askX ? (x === y ? x + 1 : y) : x), units(x + y), units(Math.abs(x - y) || far + 2)]),
      `The x-coordinate (${x}) is the distance across from the y-axis; the y-coordinate (${y}) is the distance up from the x-axis.`);
  }
  const [right] = sample(rng, PLANE_TRUE, 1);
  return one('mc', [txt('Which statement about the coordinate plane is true?')],
    mc(rng, right, sample(rng, PLANE_FALSE, 3).map(([text, why]) => ({ text, why }))),
    'The coordinate plane has two perpendicular number lines that meet at the origin, (0, 0). An ordered pair is written (x, y).');
};

// ---------- 5.8B how to graph a point ----------
export const graphProcess: Gen = (rng) => {
  let x = randInt(rng, 1, 9), y = randInt(rng, 1, 9);
  if (x === y) y = x === 9 ? 8 : x + 1;
  const u = (n: number) => `${n} unit${n === 1 ? '' : 's'}`;
  const right = `Start at the origin. Move ${u(x)} right, then ${u(y)} up.`;
  return one('mc', [txt(`Which describes how to graph the point (${x}, ${y})?`)],
    mc(rng, right, [
      { text: `Start at the origin. Move ${u(y)} right, then ${u(x)} up.`, why: 'That swaps the coordinates: x comes first.' },
      `Start at the origin. Move ${u(x)} up, then ${u(y)} right.`,
      `Start at (1, 1). Move ${u(x)} right, then ${u(y)} up.`,
    ]),
    `Always start at the origin (0, 0). The x-coordinate, ${x}, tells how far right; the y-coordinate, ${y}, tells how far up.`);
};

// ---------- 5.8C graph ordered pairs ----------
function distinctPoints(rng: Rng, n: number, max: number): { x: number; y: number }[] {
  const out: { x: number; y: number }[] = [];
  while (out.length < n) {
    const p = { x: randInt(rng, 1, max - 1), y: randInt(rng, 1, max - 1) };
    if (!out.some((q) => (q.x === p.x && q.y === p.y))) out.push(p);
  }
  return out;
}

export const graphOrderedPairs: Gen = (rng, d) => {
  const max = 10;
  if (d === 3) {
    const per = randInt(rng, 2, 5), who = pick(rng, ['A school club', 'A team', 'A class']);
    const n = randInt(rng, 2, 4);
    return one('mc', [txt(`${who} sells bracelets for $${per} each. The ordered pairs (bracelets sold, dollars earned) make a pattern. Which ordered pair belongs on the graph?`)],
      mc(rng, `(${n}, ${n * per})`, [{ text: `(${n * per}, ${n})`, why: 'The first number is bracelets sold, the second is dollars.' }, `(${n}, ${n + per})`, `(${n + 1}, ${n * per})`]),
      `Each bracelet earns $${per}, so ${n} bracelets earn ${n} × ${per} = $${n * per}: the point (${n}, ${n * per}).`);
  }
  // Make sure the decoy at (y, x) exists so the classic swap mistake is possible
  let [p, ...others] = distinctPoints(rng, 5, max);
  if (p.x === p.y) p = { x: p.x, y: p.y === 9 ? 8 : p.y + 1 };
  const swapped = { x: p.y, y: p.x };
  const pts = shuffle(rng, [p, swapped, ...others.filter((o) => !(o.x === p.x && o.y === p.y) && !(o.x === swapped.x && o.y === swapped.y))].slice(0, 4));
  const labels = ['A', 'B', 'C', 'D'];
  const labelled = pts.map((q, i) => ({ ...q, label: labels[i] }));
  const target = labelled.find((q) => q.x === p.x && q.y === p.y)!;
  const decoy = labelled.find((q) => q.x === swapped.x && q.y === swapped.y)!;
  const grid = fig({ kind: 'coordGrid', max, points: labelled }, `A coordinate grid from 0 to ${max} with points ${labelled.map((q) => `${q.label} at (${q.x}, ${q.y})`).join(', ')}.`);
  if (d === 1) {
    // Choices stay in label order (Point A, Point B, ...) so the letters don't fight the point names
    const choices = labelled.map((q) => ({ text: `Point ${q.label}`, why: q === decoy ? 'That point is at the swapped pair: move right first, then up.' : undefined }));
    return one('mc', [txt(`Which point is located at (${p.x}, ${p.y})?`), grid],
      { type: 'mc', choices, correct: [labelled.indexOf(target)] },
      `Start at the origin, move ${p.x} right and ${p.y} up: that is point ${target.label}.`);
  }
  return one('mc', [txt(`What ordered pair names point ${target.label}?`), grid],
    mc(rng, `(${p.x}, ${p.y})`, [{ text: `(${p.y}, ${p.x})`, why: 'The x-coordinate (across) comes first.' }, `(${p.x}, ${p.x})`, `(${p.x + 1}, ${p.y})`, `(${p.y}, ${p.y})`]),
    `Point ${target.label} is ${p.x} unit${p.x === 1 ? '' : 's'} right of the origin and ${p.y} unit${p.y === 1 ? '' : 's'} up: (${p.x}, ${p.y}).`);
};

export const STRAND3 = {
  '5.4H': [perimeterAreaVolume], '5.5A': [classifyFigures], '5.6A': [unitCubes], '5.6B': [volumeByLayers], '5.7A': [convertMeasurements],
  '5.8A': [coordinatePlane], '5.8B': [graphProcess], '5.8C': [graphOrderedPairs],
};

