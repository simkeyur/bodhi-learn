// Grade 1 Strand 3: Geometry and Measurement
// Standards: 1.6A, 1.6B, 1.6D, 1.6E, 1.6F, 1.6G, 1.6H, 1.7B, 1.7C, 1.7D, 1.7E

import { pick, randInt } from '../../rng.ts';
import { fig, mc, one, ordinal, txt, type Gen } from '../build.ts';

// ---------- 1.6A Classify 2D shapes using informal geometric language ----------
export const classify2DShapes: Gen = (rng, _d) => {
  const shapes = [
    { name: 'circle', attr: 'a round curve with no straight sides or corners' },
    { name: 'triangle', attr: '3 straight sides and 3 corners' },
    { name: 'rectangle', attr: '4 straight sides and 4 square corners' },
    { name: 'hexagon', attr: '6 straight sides and 6 corners' },
  ];
  const s = pick(rng, shapes);
  const others = shapes.filter((x) => x.name !== s.name).map((x) => x.name);

  return one('mc', [txt(`Which shape has ${s.attr}?`)],
    mc(rng, s.name, [others[0], others[1], others[2]]),
    `A ${s.name} has ${s.attr}.`);
};

// ---------- 1.6B Defining vs non-defining attributes ----------
export const definingAttributes: Gen = (rng, _d) => {
  const q = pick(rng, [
    {
      shape: 'triangle',
      def: 'It has 3 sides and 3 vertices',
      nonDefs: ['It is colored blue', 'It is very large', 'It is turned upside down'],
    },
    {
      shape: 'rectangle',
      def: 'It has 4 straight sides and 4 square corners',
      nonDefs: ['It is made of wood', 'It is small', 'It is green'],
    },
  ]);

  return one('mc', [txt(`Which attribute defines a ${q.shape}?`)],
    mc(rng, q.def, [q.nonDefs[0], q.nonDefs[1], q.nonDefs[2]]),
    `The number of sides and vertices defines the shape. Color, size, and orientation do not define the shape.`);
};

// ---------- 1.6D Identify 2D shapes and describe attributes ----------
export const identify2DAttributes: Gen = (rng, _d) => {
  const shapes: { kind: 'triangle' | 'square' | 'rectangle' | 'rhombus' | 'hexagon'; sides: number; vertices: number; name: string }[] = [
    { kind: 'triangle', sides: 3, vertices: 3, name: 'triangle' },
    { kind: 'square', sides: 4, vertices: 4, name: 'square' },
    { kind: 'rectangle', sides: 4, vertices: 4, name: 'rectangle' },
    { kind: 'rhombus', sides: 4, vertices: 4, name: 'rhombus' },
    { kind: 'hexagon', sides: 6, vertices: 6, name: 'hexagon' },
  ];
  const s = pick(rng, shapes);

  return one('mc', [
    fig({ kind: 'shape2D', shape: s.kind }, `A ${s.name}`),
    txt(`How many sides and vertices does a ${s.name} have?`),
  ],
  mc(rng, `${s.sides} sides and ${s.vertices} vertices`, [
    `${s.sides + 1} sides and ${s.vertices} vertices`,
    `${s.sides} sides and ${s.vertices + 2} vertices`,
    `${s.sides - 1 > 0 ? s.sides - 1 : s.sides + 3} sides and ${s.vertices - 1 > 0 ? s.vertices - 1 : s.vertices + 3} vertices`,
  ]),
  `A ${s.name} has ${s.sides} straight sides and ${s.vertices} vertices (corners).`);
};

// ---------- 1.6E Identify 3D solids and describe attributes ----------
export const identify3DSolids: Gen = (rng, _d) => {
  const solids: { kind: 'cube' | 'sphere' | 'cylinder' | 'cone' | 'rectangularPrism' | 'triangularPrism'; name: string; clue: string }[] = [
    { kind: 'sphere', name: 'sphere', clue: 'has 0 flat faces and rolls like a ball' },
    { kind: 'cube', name: 'cube', clue: 'has 6 equal square faces and 8 vertices' },
    { kind: 'cylinder', name: 'cylinder', clue: 'has 2 flat circular bases and 1 curved surface' },
    { kind: 'cone', name: 'cone', clue: 'has 1 circular base and 1 vertex at the top' },
    { kind: 'rectangularPrism', name: 'rectangular prism', clue: 'has 6 rectangular faces' },
  ];
  const s = pick(rng, solids);
  const others = solids.filter((x) => x.name !== s.name).map((x) => x.name);

  return one('mc', [
    fig({ kind: 'shape3D', shape: s.kind }, `A 3D solid: ${s.name}`),
    txt(`Which 3D solid is shown in the picture? It ${s.clue}.`),
  ],
  mc(rng, s.name, [others[0], others[1], others[2]]),
  `The picture shows a ${s.name}. It ${s.clue}.`);
};

// ---------- 1.6F Compose 2D shapes to produce target shapes ----------
export const compose2DShapes: Gen = (rng, _d) => {
  const combos = [
    { parts: '2 equal triangles', target: 'a square' },
    { parts: '2 equal trapezoids joined together', target: 'a hexagon' },
    { parts: '2 equal squares joined side by side', target: 'a rectangle' },
    { parts: '6 small triangles', target: 'a hexagon' },
  ];
  const c = pick(rng, combos);

  return one('mc', [txt(`Which shape can be formed by joining ${c.parts}?`)],
    mc(rng, c.target, [
      c.target === 'a circle' ? 'a triangle' : 'a circle',
      c.target === 'an octagon' ? 'a cylinder' : 'an octagon',
      c.target === 'a sphere' ? 'a square' : 'a sphere',
    ]),
    `Putting together ${c.parts} produces ${c.target}.`);
};

// ---------- 1.6G Partition 2D figures into halves and fourths ----------
export const partitionHalvesFourths: Gen = (rng, _d) => {
  const isHalves = rng() < 0.5;
  const parts = isHalves ? 2 : 4;
  const name = isHalves ? 'halves' : 'fourths';

  return one('mc', [
    fig({ kind: 'fractionBars', bars: [{ parts, shaded: 1 }] }, `Shape divided into ${parts} equal parts with 1 part shaded`),
    txt(`The shape is cut into ${parts} equal pieces. What do we call these equal parts?`),
  ],
  mc(rng, name, [
    isHalves ? 'fourths' : 'halves',
    'thirds',
    'eighths',
  ]),
  `When a shape is split into ${parts} equal shares, each part is called one ${isHalves ? 'half (halves)' : 'fourth (fourths)'}.`);
};

// ---------- 1.6H Identify examples of halves and fourths ----------
export const examplesHalvesFourths: Gen = (rng, _d) => {
  return one('mc', [txt('When is a shape partitioned into halves?')],
    mc(rng, 'When it is cut into exactly 2 equal-sized parts', [
      'When it is cut into 2 unequal parts',
      'When it is cut into 4 equal-sized parts',
      'When it is cut into 3 parts of any size',
    ]),
    'Halves means 2 parts that are exactly the same size (fair shares).');
};

// ---------- 1.7B Measure length with same-size units end-to-end ----------
export const measureUnitsEndToEnd: Gen = (rng, _d) => {
  return one('mc', [txt('To correctly measure the length of a pencil with paperclips, how must the paperclips be placed?')],
    mc(rng, 'End-to-end in a straight line with no gaps and no overlaps', [
      'With big gaps between each paperclip',
      'Overlapping on top of each other',
      'Scattered randomly around the pencil',
    ]),
    'Measuring length correctly requires same-size units laid end-to-end with no gaps and no overlaps.');
};

// ---------- 1.7C Compare measurements with two different unit lengths ----------
export const compareTwoUnitLengths: Gen = (rng, _d) => {
  return one('mc', [txt('A table is measured with craft sticks and also with paperclips. Why does it take more paperclips than craft sticks to measure the table?')],
    mc(rng, 'Because paperclips are shorter than craft sticks', [
      'Because paperclips are longer than craft sticks',
      'Because the table changes size',
      'Because craft sticks are heavier',
    ]),
    'Shorter measuring units require a greater number of units to reach from one end to the other.');
};

// ---------- 1.7D Describe length to nearest whole unit ----------
export const describeLengthUnits: Gen = (rng, _d) => {
  const units = randInt(rng, 3, 9);
  return one('mc', [txt(`A marker is laid next to a row of paperclips. The marker reaches from the start of the first clip to the end of the ${ordinal(units)} clip. How long is the marker?`)],
    mc(rng, `${units} paperclips`, [
      `${units + 1} paperclips`,
      `${units - 1} paperclips`,
      `${units + 2} paperclips`,
    ]),
    `The marker is ${units} paperclips long.`);
};

// ---------- 1.7E Tell time to the hour and half hour ----------
export const tellTimeHourHalfHour: Gen = (rng, d) => {
  const isHalf = d > 1 ? rng() < 0.5 : false;
  const hour = randInt(rng, 1, 12);
  const minute = isHalf ? 30 : 0;
  const timeStr = `${hour}:${minute === 0 ? '00' : '30'}`;

  return one('mc', [
    fig({ kind: 'analogClock', hour, minute }, `Analog clock showing ${timeStr}`),
    txt('What time does the clock show?'),
  ],
  mc(rng, timeStr, [
    `${hour === 12 ? 1 : hour + 1}:${minute === 0 ? '00' : '30'}`,
    `${hour}:${minute === 0 ? '30' : '00'}`,
    `${hour === 1 ? 12 : hour - 1}:${minute === 0 ? '00' : '30'}`,
  ]),
  `The short hour hand points to ${isHalf ? `between ${hour} and ${hour === 12 ? 1 : hour + 1}` : hour}, and the minute hand points to ${isHalf ? '6 (30 minutes)' : '12 (00 minutes)'}. The time is ${timeStr}.`);
};

export const STRAND3: Record<string, Gen[]> = {
  '1.6A': [classify2DShapes],
  '1.6B': [definingAttributes],
  '1.6D': [identify2DAttributes],
  '1.6E': [identify3DSolids],
  '1.6F': [compose2DShapes],
  '1.6G': [partitionHalvesFourths],
  '1.6H': [examplesHalvesFourths],
  '1.7B': [measureUnitsEndToEnd],
  '1.7C': [compareTwoUnitLengths],
  '1.7D': [describeLengthUnits],
  '1.7E': [tellTimeHourHalfHour],
};
