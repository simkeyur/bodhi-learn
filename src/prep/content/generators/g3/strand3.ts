// Grade 3 Strand 3: Geometry and Measurement
// Standards: 3.6A, 3.6B, 3.6C, 3.6D, 3.6E, 3.7B, 3.7C, 3.7D, 3.7E

import { pick, randInt } from '../../rng.ts';
import { fig, mc, one, txt, type Gen } from '../build.ts';

// ---------- 3.6A Classify 2-D and 3-D figures ----------
export const classify2D3D: Gen = (rng, d) => {
  if (d === 1) {
    // 3D figure attributes: faces, edges, vertices
    const figures = [
      { name: 'rectangular prism', faces: 6, edges: 12, vertices: 8 },
      { name: 'cube', faces: 6, edges: 12, vertices: 8 },
      { name: 'triangular prism', faces: 5, edges: 9, vertices: 6 },
      { name: 'cylinder', faces: 2, edges: 0, vertices: 0, special: '2 circular flat faces and 1 curved surface' },
      { name: 'cone', faces: 1, edges: 0, vertices: 1, special: '1 circular base and 1 vertex (apex)' },
      { name: 'sphere', faces: 0, edges: 0, vertices: 0, special: '0 faces, 0 edges, and 0 vertices' },
    ];
    const f = pick(rng, figures);
    return one('mc', [txt(`Which 3-dimensional figure has exactly ${f.faces} faces, ${f.edges} edges, and ${f.vertices} vertices?`)],
      mc(rng, `${f.name}`, [
        f.name === 'cube' ? 'sphere' : 'cube',
        f.name === 'cylinder' ? 'triangular prism' : 'cylinder',
        f.name === 'cone' ? 'rectangular prism' : 'cone',
      ]),
      `A ${f.name} has ${f.faces} faces, ${f.edges} edges, and ${f.vertices} vertices.`);
  }

  // 2D attributes: polygons, side counts
  const polygons = [
    { name: 'pentagon', sides: 5, vertices: 5 },
    { name: 'hexagon', sides: 6, vertices: 6 },
    { name: 'octagon', sides: 8, vertices: 8 },
    { name: 'quadrilateral', sides: 4, vertices: 4 },
    { name: 'triangle', sides: 3, vertices: 3 },
  ];
  const p = pick(rng, polygons);
  return one('mc', [txt(`A two-dimensional closed figure has exactly ${p.sides} sides and ${p.vertices} vertices. What is this figure called?`)],
    mc(rng, `${p.name}`, [
      p.name === 'pentagon' ? 'hexagon' : 'pentagon',
      p.name === 'octagon' ? 'quadrilateral' : 'octagon',
      p.name === 'triangle' ? 'trapezoid' : 'triangle',
    ]),
    `A polygon with ${p.sides} sides and ${p.vertices} vertices is a ${p.name}.`);
};

// ---------- 3.6B Quadrilaterals and subcategories ----------
export const quadrilaterals: Gen = (rng, d) => {
  const quads = [
    { name: 'rhombus', desc: 'a quadrilateral with 4 sides of equal length' },
    { name: 'rectangle', desc: 'a quadrilateral with 4 right angles' },
    { name: 'square', desc: 'a quadrilateral with 4 right angles and 4 equal sides' },
    { name: 'parallelogram', desc: 'a quadrilateral with 2 pairs of parallel sides' },
    { name: 'trapezoid', desc: 'a quadrilateral with exactly 1 pair of parallel sides' },
  ];
  const q = pick(rng, quads);

  if (d === 1) {
    return one('mc', [txt(`Which term best describes ${q.desc}?`)],
      mc(rng, `${q.name}`, [
        q.name === 'square' ? 'trapezoid' : 'square',
        q.name === 'rectangle' ? 'rhombus' : 'rectangle',
        q.name === 'parallelogram' ? 'pentagon' : 'parallelogram',
      ]),
      `${q.name.charAt(0).toUpperCase() + q.name.slice(1)} is defined as ${q.desc}.`);
  }

  // Subcategories relationship
  return one('mc', [txt(`Which statement about quadrilaterals is always true?`)],
    mc(rng, `Every square is a rectangle because it has 4 right angles.`, [
      { text: `Every rectangle is a square.`, why: 'A rectangle does not have to have 4 equal sides.' },
      `Every trapezoid has 2 pairs of parallel sides.`,
      `A rhombus can never have right angles.`,
    ]),
    `A rectangle is defined as any quadrilateral with 4 right angles. Since every square has 4 right angles, every square is a rectangle.`);
};

// ---------- 3.6C Area of rectangles with unit squares ----------
export const areaUnitSquares: Gen = (rng, d) => {
  const rows = randInt(rng, 3, 8);
  const cols = randInt(rng, 4, 9);
  const area = rows * cols;

  if (d === 1) {
    return one('mc', [
      fig({ kind: 'area', rows, cols }, `Grid showing ${rows} rows and ${cols} columns of unit squares`),
      txt(`A rectangle is tiled with square units. What is the area of the rectangle in square units?`),
    ],
      mc(rng, `${area} square units`, [
        `${(rows + cols) * 2} square units`,
        `${rows + cols} square units`,
        `${area + 4} square units`,
      ]),
      `Multiply rows by columns: ${rows} rows × ${cols} squares in each row = ${area} square units.`);
  }

  // Word problem with dimensions
  return one('mc', [txt(`A rectangular rug has a length of ${cols} feet and a width of ${rows} feet. What is the area of the rug?`)],
    mc(rng, `${area} square feet`, [
      `${(rows + cols) * 2} square feet`,
      `${rows + cols} square feet`,
      `${area - cols} square feet`,
    ]),
    `Area = length × width = ${cols} × ${rows} = ${area} square feet.`);
};

// ---------- 3.6D Area of composite figures ----------
export const areaCompositeFigures: Gen = (rng, _d) => {
  // L-shaped composite figure formed by 2 non-overlapping rectangles
  // Rectangle 1: w1 x h1, Rectangle 2: w2 x h2
  const w1 = randInt(rng, 3, 6);
  const h1 = randInt(rng, 4, 7);
  const w2 = randInt(rng, 2, 5);
  const h2 = randInt(rng, 2, 4);
  const a1 = w1 * h1;
  const a2 = w2 * h2;
  const totalArea = a1 + a2;

  return one('mc', [
    txt(`A floor is made of two non-overlapping rectangular sections:\n• Section 1: ${w1} meters by ${h1} meters\n• Section 2: ${w2} meters by ${h2} meters\n\nWhat is the total area of the floor?`),
  ],
    mc(rng, `${totalArea} square meters`, [
      `${(w1 + h1 + w2 + h2) * 2} square meters`,
      `${totalArea - w2} square meters`,
      `${a1} square meters`,
    ]),
    `Calculate the area of each rectangle and add them together: Section 1 area = ${w1} × ${h1} = ${a1} sq m. Section 2 area = ${w2} × ${h2} = ${a2} sq m. Total area = ${a1} + ${a2} = ${totalArea} square meters.`);
};

// ---------- 3.6E Decompose figures into equal areas ----------
export const equalAreaParts: Gen = (rng, _d) => {
  const parts = pick(rng, [2, 3, 4, 6, 8]);
  return one('mc', [txt(`A square is divided into ${parts} parts of equal area. What fraction of the total area of the square does each part represent?`)],
    mc(rng, `{1/${parts}}`, [
      `{${parts}/1}`,
      `{1/${parts + 1}}`,
      `{${parts - 1}/${parts}}`,
    ]),
    `When any shape is decomposed into ${parts} parts with equal areas, each part represents the unit fraction {1/${parts}} of the whole area.`);
};

// ---------- 3.7B Perimeter of polygons ----------
export const perimeterPolygons: Gen = (rng, d) => {
  if (d === 1) {
    // Perimeter of rectangle
    const l = randInt(rng, 5, 15);
    const w = randInt(rng, 3, 10);
    const perim = 2 * (l + w);
    return one('mc', [txt(`A rectangular garden has a length of ${l} feet and a width of ${w} feet. What is the perimeter of the garden?`)],
      mc(rng, `${perim} feet`, [
        `${l * w} feet`,
        `${l + w} feet`,
        `${perim + 4} feet`,
      ]),
      `Perimeter is the distance around the outside: ${l} + ${w} + ${l} + ${w} = ${perim} feet.`);
  }

  if (d === 2) {
    // Missing side length given perimeter
    const side1 = randInt(rng, 6, 12);
    const side2 = randInt(rng, 5, 10);
    const side3 = randInt(rng, 4, 9);
    const missing = randInt(rng, 4, 11);
    const totalP = side1 + side2 + side3 + missing;
    return one('mc', [txt(`A four-sided polygon has a perimeter of ${totalP} centimeters. Three of its side lengths are ${side1} cm, ${side2} cm, and ${side3} cm. What is the length of the fourth side?`)],
      mc(rng, `${missing} cm`, [
        `${missing + 2} cm`,
        `${missing - 1} cm`,
        `${totalP - side1} cm`,
      ]),
      `Add the known sides: ${side1} + ${side2} + ${side3} = ${side1 + side2 + side3}. Subtract from the total perimeter: ${totalP} − ${side1 + side2 + side3} = ${missing} cm.`);
  }

  // Regular polygon (e.g. square, pentagon, hexagon)
  const sides = pick(rng, [4, 5, 6]);
  const sLen = randInt(rng, 4, 9);
  const p = sides * sLen;
  const shapeName = sides === 4 ? 'square' : sides === 5 ? 'regular pentagon' : 'regular hexagon';
  return one('mc', [txt(`A ${shapeName} has sides that are each ${sLen} inches long. What is the perimeter?`)],
    mc(rng, `${p} inches`, [
      `${p - sLen} inches`,
      `${sLen * sLen} inches`,
      `${p + sides} inches`,
    ]),
    `A ${shapeName} has ${sides} equal sides. Perimeter = ${sides} × ${sLen} = ${p} inches.`);
};

// ---------- 3.7C Time intervals and elapsed time ----------
export const timeIntervals: Gen = (rng, d) => {
  const startHour = randInt(rng, 1, 5);
  const startMin = pick(rng, [0, 15, 30, 45]);
  const elapsed = pick(rng, d === 1 ? [15, 30, 45] : [25, 35, 50, 75]);
  const totalMin = startMin + elapsed;
  const endHour = startHour + Math.floor(totalMin / 60);
  const endMin = totalMin % 60;
  const fmtMin = (m: number) => m.toString().padStart(2, '0');
  const startTimeStr = `${startHour}:${fmtMin(startMin)} p.m.`;
  const endTimeStr = `${endHour}:${fmtMin(endMin)} p.m.`;

  return one('mc', [txt(`Soccer practice started at ${startTimeStr} and lasted for ${elapsed} minutes. At what time did soccer practice end?`)],
    mc(rng, endTimeStr, [
      `${endHour}:${fmtMin((endMin + 15) % 60)} p.m.`,
      `${startHour}:${fmtMin((startMin + elapsed + 10) % 60)} p.m.`,
      `${endHour + 1}:${fmtMin(endMin)} p.m.`,
    ]),
    `Add ${elapsed} minutes to ${startTimeStr}: ${startMin} + ${elapsed} = ${totalMin} minutes. ${totalMin} minutes = ${Math.floor(totalMin / 60)} hour(s) and ${endMin} minute(s). Practice ended at ${endTimeStr}.`);
};

// ---------- 3.7D Appropriate units of liquid volume and weight ----------
export const appropriateUnits: Gen = (rng, _d) => {
  const situations = [
    { item: 'a pitcher of lemonade', unit: 'liters', wrong: 'grams', type: 'liquid volume' },
    { item: 'a small juice box', unit: 'milliliters', wrong: 'kilograms', type: 'liquid volume' },
    { item: 'a backpack full of heavy books', unit: 'kilograms', wrong: 'liters', type: 'weight' },
    { item: 'a paperclip', unit: 'grams', wrong: 'gallons', type: 'weight' },
    { item: 'a bathtub of water', unit: 'gallons', wrong: 'ounces', type: 'liquid volume' },
  ];
  const s = pick(rng, situations);
  return one('mc', [txt(`Which unit of measure is best to measure the ${s.type} of ${s.item}?`)],
    mc(rng, `${s.unit}`, [
      `${s.wrong}`,
      s.type === 'liquid volume' ? 'meters' : 'centimeters',
      s.type === 'liquid volume' ? 'degrees Fahrenheit' : 'milliliters',
    ]),
    `${s.unit.charAt(0).toUpperCase() + s.unit.slice(1)} is an appropriate unit for measuring the ${s.type} of ${s.item}.`);
};

// ---------- 3.7E Measure liquid volume and weight ----------
export const measureVolumeWeight: Gen = (rng, _d) => {
  const isVol = rng() < 0.5;
  if (isVol) {
    const scale = randInt(rng, 100, 500);
    const added = randInt(rng, 100, 300);
    const total = scale + added;
    return one('mc', [txt(`A science beaker contained ${scale} milliliters of water. A student poured in ${added} more milliliters of water. What is the total volume of water in the beaker?`)],
      mc(rng, `${total} mL`, [
        `${total + 50} mL`,
        `${total - 50} mL`,
        `${Math.abs(scale - added)} mL`,
      ]),
      `Add the two volumes: ${scale} mL + ${added} mL = ${total} mL.`);
  }

  const w1 = randInt(rng, 150, 450);
  const w2 = randInt(rng, 120, 350);
  const diff = Math.abs(w1 - w2);
  const heavy = Math.max(w1, w2);
  const light = Math.min(w1, w2);
  return one('mc', [txt(`Package A weighs ${heavy} grams and Package B weighs ${light} grams. How many more grams does Package A weigh than Package B?`)],
    mc(rng, `${diff} grams`, [
      `${heavy + light} grams`,
      `${diff + 20} grams`,
      `${diff - 10} grams`,
    ]),
    `Subtract to find the difference: ${heavy} − ${light} = ${diff} grams.`);
};

export const STRAND3: Record<string, Gen[]> = {
  '3.6A': [classify2D3D],
  '3.6B': [quadrilaterals],
  '3.6C': [areaUnitSquares],
  '3.6D': [areaCompositeFigures],
  '3.6E': [equalAreaParts],
  '3.7B': [perimeterPolygons],
  '3.7C': [timeIntervals],
  '3.7D': [appropriateUnits],
  '3.7E': [measureVolumeWeight],
};
