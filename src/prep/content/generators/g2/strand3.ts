// Grade 2 Strand 3: Geometry and Measurement
// Standards: 2.8A, 2.8B, 2.8C, 2.8D, 2.8E, 2.9A, 2.9B, 2.9C, 2.9D, 2.9E, 2.9F, 2.9G

import { pick, randInt } from '../../rng.ts';
import { fig, mc, one, txt, type Gen } from '../build.ts';

// ---------- 2.8A Create 2D shapes based on given attributes ----------
export const create2DShapes: Gen = (rng, _d) => {
  const shapes: { name: string; sides: number; vertices: number; kind: 'triangle' | 'rectangle' | 'pentagon' | 'hexagon' | 'octagon' }[] = [
    { name: 'triangle', sides: 3, vertices: 3, kind: 'triangle' },
    { name: 'rectangle', sides: 4, vertices: 4, kind: 'rectangle' },
    { name: 'pentagon', sides: 5, vertices: 5, kind: 'pentagon' },
    { name: 'hexagon', sides: 6, vertices: 6, kind: 'hexagon' },
    { name: 'octagon', sides: 8, vertices: 8, kind: 'octagon' },
  ];
  const s = pick(rng, shapes);
  const others = shapes.filter((x) => x.name !== s.name).map((x) => x.name);

  return one('mc', [txt(`Which shape has exactly ${s.sides} straight sides and ${s.vertices} vertices?`)],
    mc(rng, s.name, [others[0], others[1], others[2]]),
    `A ${s.name} has ${s.sides} sides and ${s.vertices} vertices.`);
};

// ---------- 2.8B Classify and sort 3D solids ----------
export const classify3DSolids: Gen = (rng, _d) => {
  const solids: { kind: 'cube' | 'sphere' | 'cylinder' | 'cone' | 'rectangularPrism' | 'triangularPrism'; name: string; desc: string }[] = [
    { kind: 'cube', name: 'cube', desc: 'has 6 equal square faces, 12 edges, and 8 vertices' },
    { kind: 'cylinder', name: 'cylinder', desc: 'has 2 circular bases and 1 curved surface' },
    { kind: 'cone', name: 'cone', desc: 'has 1 circular base and 1 vertex' },
    { kind: 'sphere', name: 'sphere', desc: 'has 0 faces, 0 edges, and 0 vertices' },
    { kind: 'rectangularPrism', name: 'rectangular prism', desc: 'has 6 rectangular faces, 12 edges, and 8 vertices' },
    { kind: 'triangularPrism', name: 'triangular prism', desc: 'has 2 triangular bases and 3 rectangular faces' },
  ];
  const s = pick(rng, solids);
  const others = solids.filter((x) => x.name !== s.name).map((x) => x.name);

  return one('mc', [
    fig({ kind: 'shape3D', shape: s.kind }, `3D solid: ${s.name}`),
    txt(`Which solid is shown? It ${s.desc}.`),
  ],
  mc(rng, s.name, [others[0], others[1], others[2]]),
  `The solid shown is a ${s.name}. It ${s.desc}.`);
};

// ---------- 2.8C Classify polygons with 12 or fewer sides ----------
export const classifyPolygons12: Gen = (rng, _d) => {
  const polys = [
    { name: 'pentagon', sides: 5 },
    { name: 'hexagon', sides: 6 },
    { name: 'octagon', sides: 8 },
    { name: 'decagon', sides: 10 },
  ];
  const p = pick(rng, polys);
  const others = polys.filter((x) => x.name !== p.name).map((x) => x.name);

  return one('mc', [txt(`A polygon has exactly ${p.sides} sides and ${p.sides} vertices. What is the name of this polygon?`)],
    mc(rng, p.name, [others[0], others[1], others[2]]),
    `A ${p.name} has ${p.sides} sides and ${p.sides} vertices.`);
};

// ---------- 2.8D Compose 2D shapes and 3D solids ----------
export const composeShapesSolids: Gen = (rng, _d) => {
  const combos = [
    { parts: 'two right triangles', makes: 'a rectangle' },
    { parts: 'two equal cubes placed next to each other', makes: 'a rectangular prism' },
    { parts: 'two equal trapezoids', makes: 'a hexagon' },
  ];
  const c = pick(rng, combos);

  return one('mc', [txt(`Joining ${c.parts} produces which figure?`)],
    mc(rng, c.makes, [
      c.makes === 'a sphere' ? 'a cone' : 'a sphere',
      c.makes === 'a circle' ? 'a triangle' : 'a circle',
      c.makes === 'a cylinder' ? 'a pyramid' : 'a cylinder',
    ]),
    `Putting together ${c.parts} creates ${c.makes}.`);
};

// ---------- 2.8E Decompose 2D shapes into geometric parts ----------
export const decompose2DShapes: Gen = (rng, _d) => {
  return one('mc', [txt('If you cut a rectangle diagonally from one corner to the opposite corner, what two shapes do you get?')],
    mc(rng, 'Two triangles', [
      'Two squares',
      'Two smaller rectangles',
      'Two circles',
    ]),
    'Cutting a rectangle diagonally splits it into two right triangles.');
};

// ---------- 2.9A Measure length using concrete models ----------
export const measureLengthConcrete: Gen = (rng, _d) => {
  const len = randInt(rng, 4, 10);
  return one('mc', [txt(`A ribbon was measured with 1-inch color tiles. Exactly ${len} tiles lined up end-to-end with no gaps or overlaps. How long is the ribbon?`)],
    mc(rng, `${len} inches`, [
      `${len + 1} inches`,
      `${len - 1} inches`,
      `${len + 2} inches`,
    ]),
    `Since each tile is 1 inch, ${len} tiles equal ${len} inches.`);
};

// ---------- 2.9B Inverse relationship between unit size and count ----------
export const inverseUnitSizeCount: Gen = (rng, _d) => {
  return one('mc', [txt('Maya measured a desk in inches and then measured the same desk in feet. Which measurement has a smaller number?')],
    mc(rng, 'Feet, because feet are longer units than inches', [
      'Inches, because inches are longer units than feet',
      'Both have the exact same number',
      'Feet, because inches cannot measure a desk',
    ]),
    'Because a foot (12 inches) is much longer than an inch, it takes fewer feet to measure the desk.');
};

// ---------- 2.9C Represent whole numbers as distances on number line ----------
export const numbersAsDistances: Gen = (rng, _d) => {
  const start = randInt(rng, 10, 40);
  const dist = randInt(rng, 5, 20);
  const end = start + dist;

  return one('mc', [
    fig({ kind: 'numberLine', from: start, to: start + 25, step: 5, decimals: 0, point: end, pointLabel: 'End' }, `Number line starting at ${start} with point at ${end}`),
    txt(`Starting at ${start}, a frog jumps ${dist} units to the right. At what number does the frog land?`),
  ],
  mc(rng, `${end}`, [
    `${end - 5}`,
    `${end + 5}`,
    `${start + 5}`,
  ]),
  `${start} + ${dist} = ${end}. The frog lands at ${end}.`);
};

// ---------- 2.9D Determine length to nearest marked unit using rulers ----------
export const measureRulerMarkedUnit: Gen = (rng, _d) => {
  const len = randInt(rng, 3, 11);
  return one('mc', [txt(`A pencil is placed on a ruler starting at the 0 mark. The tip of the pencil reaches the ${len} centimeter mark. What is the length of the pencil?`)],
    mc(rng, `${len} centimeters`, [
      `${len + 1} centimeters`,
      `${len - 1} centimeters`,
      `${len + 2} centimeters`,
    ]),
    `The distance from 0 to ${len} is ${len} centimeters.`);
};

// ---------- 2.9E Solution to problems involving length and estimating ----------
export const problemsInvolvingLength: Gen = (rng, _d) => {
  const p1 = randInt(rng, 15, 35);
  const p2 = randInt(rng, 12, 28);
  const total = p1 + p2;

  return one('mc', [txt(`A red piece of yarn is ${p1} inches long. A blue piece of yarn is ${p2} inches long. What is the total length of the two pieces of yarn?`)],
    mc(rng, `${total} inches`, [
      `${total + 10} inches`,
      `${total - 10} inches`,
      `${Math.abs(p1 - p2)} inches`,
    ]),
    `Add the two lengths: ${p1} + ${p2} = ${total} inches.`);
};

// ---------- 2.9F Area of rectangle using square units ----------
export const areaSquareUnits: Gen = (rng, _d) => {
  const rows = randInt(rng, 2, 5);
  const cols = randInt(rng, 3, 6);
  const area = rows * cols;

  return one('mc', [
    fig({ kind: 'area', rows, cols }, `Rectangle covered by ${rows} rows and ${cols} columns of square units`),
    txt(`A rectangle is completely covered by ${rows} rows of square tiles with ${cols} tiles in each row. What is the area of the rectangle?`),
  ],
  mc(rng, `${area} square units`, [
    `${(rows + cols) * 2} square units`,
    `${rows + cols} square units`,
    `${area + cols} square units`,
  ]),
  `Count the square units in the ${rows} rows of ${cols}: ${rows} × ${cols} = ${area} square units.`);
};

// ---------- 2.9G Tell time to the nearest minute, a.m. and p.m. ----------
export const tellTimeMinuteAmPm: Gen = (rng, d) => {
  const hour = randInt(rng, 1, 12);
  const minute = d === 1 ? randInt(rng, 0, 11) * 5 : randInt(rng, 1, 59);
  const minStr = minute < 10 ? `0${minute}` : `${minute}`;
  const timeStr = `${hour}:${minStr}`;
  const period = pick(rng, ['a.m.', 'p.m.']);
  const context = period === 'a.m.' ? 'in the morning before school' : 'in the afternoon after school';

  return one('mc', [
    fig({ kind: 'analogClock', hour, minute }, `Analog clock showing ${timeStr}`),
    txt(`The clock shows the time Maya eats a snack ${context}. What time does the clock show?`),
  ],
  mc(rng, `${timeStr} ${period}`, [
    `${timeStr} ${period === 'a.m.' ? 'p.m.' : 'a.m.'}`,
    `${hour === 12 ? 1 : hour + 1}:${minStr} ${period}`,
    `${hour}:${minute > 30 ? minute - 15 : minute + 15} ${period}`,
  ]),
  `The clock shows ${timeStr}. Because it is ${context}, the time is ${timeStr} ${period}.`);
};

export const STRAND3: Record<string, Gen[]> = {
  '2.8A': [create2DShapes],
  '2.8B': [classify3DSolids],
  '2.8C': [classifyPolygons12],
  '2.8D': [composeShapesSolids],
  '2.8E': [decompose2DShapes],
  '2.9A': [measureLengthConcrete],
  '2.9B': [inverseUnitSizeCount],
  '2.9C': [numbersAsDistances],
  '2.9D': [measureRulerMarkedUnit],
  '2.9E': [problemsInvolvingLength],
  '2.9F': [areaSquareUnits],
  '2.9G': [tellTimeMinuteAmPm],
};
