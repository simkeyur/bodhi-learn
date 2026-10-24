// Grade 4 math, strand 3: geometry and measurement.

import { pick, randInt } from '../../rng.ts';
import { fig, mc, multi, num, one, table, txt, type Gen } from '../build.ts';

// ---------- 4.5D perimeter and area of rectangles ----------
export const perimeterAreaRectangles: Gen = (rng, d) => {
  const units = ['inches', 'feet', 'centimeters', 'meters'];
  const unit = pick(rng, units);
  if (d === 1) {
    const l = randInt(rng, 5, 18);
    const w = randInt(rng, 3, l - 1);
    const askArea = rng() < 0.5;
    const ans = askArea ? l * w : 2 * (l + w);
    const rightStr = `${ans} ${askArea ? `square ${unit}` : unit}`;
    const wrongUnit = `${askArea ? 2 * (l + w) : l * w} ${askArea ? `square ${unit}` : unit}`;
    return one('mc', [
      txt(`A rectangular garden has a length of ${l} ${unit} and a width of ${w} ${unit}. What is the ${askArea ? 'area' : 'perimeter'} of the garden?`),
    ],
      mc(rng, rightStr, [
        { text: wrongUnit, why: askArea ? 'That is the perimeter (distance around), not the area.' : 'That is the area (space inside), not the perimeter.' },
        `${l + w} ${askArea ? `square ${unit}` : unit}`,
        `${ans + 4} ${askArea ? `square ${unit}` : unit}`,
      ]),
      askArea
        ? `Area = length × width = ${l} × ${w} = ${ans} square ${unit}.`
        : `Perimeter = 2 × (length + width) = 2 × (${l} + ${w}) = ${ans} ${unit}.`);
  }

  if (d === 2) {
    // Given perimeter and one side, find area
    const l = randInt(rng, 6, 15);
    const w = randInt(rng, 3, l - 2);
    const perim = 2 * (l + w);
    const area = l * w;
    return one('mc', [
      txt(`A rectangle has a perimeter of ${perim} ${unit}. The length of the rectangle is ${l} ${unit}. What is the area of the rectangle in square ${unit}?`),
    ],
      mc(rng, `${area} square ${unit}`, [
        `${w} square ${unit}`,
        `${perim * l} square ${unit}`,
        `${area + 6} square ${unit}`,
      ]),
      `The perimeter is 2 × (length + width). Half the perimeter is ${l} + width = ${perim / 2}. Width = ${perim / 2} − ${l} = ${w} ${unit}. Area = length × width = ${l} × ${w} = ${area} square ${unit}.`);
  }

  // d === 3: Given area and width, find perimeter
  const w = randInt(rng, 4, 9);
  const l = w + randInt(rng, 3, 7);
  const area = l * w;
  const perim = 2 * (l + w);
  return one('mc', [
    txt(`A rectangular hallway has an area of ${area} square ${unit}. Its width is ${w} ${unit}. What is the perimeter of the hallway?`),
  ],
    mc(rng, `${perim} ${unit}`, [
      `${l} ${unit}`,
      `${area * 2} ${unit}`,
      `${perim + 4} ${unit}`,
    ]),
    `Length = area ÷ width = ${area} ÷ ${w} = ${l} ${unit}. Perimeter = 2 × (${l} + ${w}) = 2 × ${l + w} = ${perim} ${unit}.`);
};

// ---------- 4.6A lines, rays, and angles ----------
export const linesRaysAngles: Gen = (rng, d) => {
  if (d === 1) {
    // Basic definitions: point, line, ray, line segment
    const terms = [
      { term: 'line segment', isPlural: false, def: 'a part of a line with two definite endpoints', wrong: ['line', 'ray', 'angle'] },
      { term: 'ray', isPlural: false, def: 'a part of a line that has one endpoint and extends endlessly in one direction', wrong: ['line segment', 'line', 'point'] },
      { term: 'line', isPlural: false, def: 'a straight path that continues in both directions without ending', wrong: ['line segment', 'ray', 'point'] },
      { term: 'perpendicular lines', isPlural: true, def: 'lines that intersect to form right angles (90 degrees)', wrong: ['parallel lines', 'rays', 'acute angles'] },
      { term: 'parallel lines', isPlural: true, def: 'lines that stay the same distance apart and never intersect', wrong: ['perpendicular lines', 'intersecting lines', 'line segments'] },
    ];
    const t = pick(rng, terms);
    const capTerm = t.term.charAt(0).toUpperCase() + t.term.slice(1);
    const capWrong = t.wrong.map((w) => w.charAt(0).toUpperCase() + w.slice(1));
    return one('mc', [txt(`Which geometric term describes ${t.def}?`)],
      mc(rng, capTerm, capWrong),
      t.isPlural ? `By definition, ${t.term} are ${t.def}.` : `By definition, a ${t.term} is ${t.def}.`);
  }

  if (d === 2) {
    // Parallel vs perpendicular in context
    const items = [
      { name: 'railroad tracks', prop: 'parallel lines' },
      { name: 'the corner of a picture frame where two sides meet at a 90° angle', prop: 'perpendicular lines' },
      { name: 'opposite edges of a rectangular book cover', prop: 'parallel lines' },
      { name: 'the plus sign (+)', prop: 'perpendicular lines' },
    ];
    const it = pick(rng, items);
    const capName = it.name.charAt(0).toUpperCase() + it.name.slice(1);
    return one('mc', [txt(`Which geometric relationship is best modeled by ${it.name}?`)],
      mc(rng, it.prop, [
        it.prop === 'parallel lines' ? 'perpendicular lines' : 'parallel lines',
        'acute angles',
        'rays with common endpoints',
      ]),
      `${capName} models ${it.prop}.`);
  }

  // d === 3: Select TWO statements that are true about lines and angles
  const rights = [
    'Perpendicular lines intersect to form four 90-degree angles.',
    'Parallel lines in a plane will never meet no matter how far they extend.',
  ];
  const wrongs = [
    'A ray has two endpoints.',
    'A line segment extends infinitely in both directions.',
    'Parallel lines always intersect at acute angles.',
  ];
  return one('multiselect', [txt(`Which statements are true? Select **TWO** correct answers.`)],
    multi(rng, rights, wrongs),
    `Lines that intersect at right angles are perpendicular. Lines that never intersect are parallel. A ray has only 1 endpoint and a segment has 2 endpoints.`);
};

// ---------- 4.6B lines of symmetry ----------
export const linesOfSymmetry: Gen = (rng, d) => {
  if (d === 1) {
    // Figure with a line of symmetry: is it a line of symmetry?
    const symmetricCases = [
      { shape: 'rectangle' as const, line: 'v' as const, desc: 'a rectangle with a vertical dashed line down the center', isSym: true },
      { shape: 'rectangle' as const, line: 'h' as const, desc: 'a rectangle with a horizontal dashed line across the center', isSym: true },
      { shape: 'rectangle' as const, line: 'd1' as const, desc: 'a non-square rectangle with a diagonal dashed line', isSym: false },
      { shape: 'equilateralTriangle' as const, line: 'v' as const, desc: 'an equilateral triangle with a vertical line from top vertex to base', isSym: true },
      { shape: 'scaleneTriangle' as const, line: 'v' as const, desc: 'a scalene triangle with a vertical line', isSym: false },
    ];
    const c = pick(rng, symmetricCases);
    return one('mc', [
      txt(`Does the dashed line appear to be a line of symmetry for the figure?`),
      fig({ kind: 'symmetry', shape: c.shape, line: c.line }, c.desc),
    ],
      mc(rng, c.isSym ? 'Yes, the two halves match exactly when folded along the line.' : 'No, the two halves do not match when folded along the line.', [
        c.isSym ? 'No, the two halves do not match when folded along the line.' : 'Yes, the two halves match exactly when folded along the line.',
        'Yes, because all lines through a shape are lines of symmetry.',
        'No, because 2-dimensional figures cannot have lines of symmetry.',
      ]),
      c.isSym
        ? 'A line of symmetry divides a shape into two congruent mirror-image halves.'
        : 'Folding the shape along this line would not produce matching halves. Therefore it is not a line of symmetry.');
  }

  if (d === 2) {
    // How many lines of symmetry does a shape have?
    const shapes = [
      { name: 'rectangle that is not a square', count: 2, explain: 'A non-square rectangle has 2 lines of symmetry (horizontal and vertical).' },
      { name: 'square', count: 4, explain: 'A square has 4 lines of symmetry (vertical, horizontal, and 2 diagonals).' },
      { name: 'equilateral triangle', count: 3, explain: 'An equilateral triangle has 3 lines of symmetry, one through each vertex.' },
      { name: 'regular hexagon', count: 6, explain: 'A regular hexagon has 6 lines of symmetry.' },
    ];
    const sh = pick(rng, shapes);
    return one('mc', [txt(`How many lines of symmetry does a ${sh.name} have?`)],
      mc(rng, String(sh.count), [String(sh.count + 1), String(Math.max(1, sh.count - 1)), String(sh.count * 2)]),
      sh.explain);
  }

  // d === 3: Which figure has exactly ONE line of symmetry?
  return one('mc', [
    txt(`Which figure has exactly ONE line of symmetry?`),
  ],
    mc(rng, 'An isosceles triangle that is not equilateral', [
      { text: 'A square', why: 'A square has 4 lines of symmetry.' },
      'A rectangle that is not a square',
      'A scalene triangle',
    ]),
    `An isosceles triangle has two equal sides and exactly 1 line of symmetry down the middle. A rectangle has 2, a square has 4, and a scalene triangle has 0.`);
};

// ---------- 4.6C acute, right, and obtuse triangles ----------
export const classifyTriangles: Gen = (rng, d) => {
  if (d === 1) {
    // Direct angle classification: acute, right, obtuse
    const types = [
      { name: 'Right triangle', article: 'a', prop: 'has exactly one 90-degree right angle', wrong: ['Acute triangle', 'Obtuse triangle', 'Equilateral triangle'] },
      { name: 'Acute triangle', article: 'an', prop: 'has all three angles measuring less than 90 degrees', wrong: ['Right triangle', 'Obtuse triangle', 'Equilateral triangle'] },
      { name: 'Obtuse triangle', article: 'an', prop: 'has one angle measuring greater than 90 degrees', wrong: ['Right triangle', 'Acute triangle', 'Equilateral triangle'] },
    ];
    const t = pick(rng, types);
    return one('mc', [txt(`Which type of triangle ${t.prop}?`)],
      mc(rng, t.name, t.wrong),
      `By definition, a triangle that ${t.prop} is ${t.article} ${t.name.toLowerCase()}.`);
  }

  if (d === 2) {
    // Given three angle measures, classify the triangle
    const triCases = [
      { a1: 90, a2: 45, a3: 45, type: 'Right triangle', article: 'a', why: 'It has one right angle of 90°.' },
      { a1: 90, a2: 30, a3: 60, type: 'Right triangle', article: 'a', why: 'It has one right angle of 90°.' },
      { a1: 110, a2: 35, a3: 35, type: 'Obtuse triangle', article: 'an', why: 'One angle (110°) is greater than 90°.' },
      { a1: 125, a2: 25, a3: 30, type: 'Obtuse triangle', article: 'an', why: 'One angle (125°) is greater than 90°.' },
      { a1: 60, a2: 60, a3: 60, type: 'Acute triangle', article: 'an', why: 'All three angles are less than 90°.' },
      { a1: 70, a2: 50, a3: 60, type: 'Acute triangle', article: 'an', why: 'All three angles are less than 90°.' },
    ];
    const tc = pick(rng, triCases);
    return one('mc', [
      txt(`A triangle has angle measures of ${tc.a1}°, ${tc.a2}°, and ${tc.a3}°. What kind of triangle is it?`),
    ],
      mc(rng, tc.type, ['Acute triangle', 'Right triangle', 'Obtuse triangle', 'Equilateral triangle'].filter((x) => x !== tc.type)),
      `${tc.why} Therefore, it is ${tc.article} ${tc.type.toLowerCase()}.`);
  }

  // d === 3: Identifying property
  return one('mc', [
    txt(`Why can a triangle NOT have more than one right angle?`),
  ],
    mc(rng, 'The sum of all three angles in a triangle is 180 degrees, so two 90-degree angles would leave 0 degrees for the third angle.', [
      'Right angles can only exist in four-sided quadrilaterals.',
      'A triangle must have at least two obtuse angles.',
      'All triangles must have three equal angles.',
    ]),
    `Since the three angles of a triangle always add to 180°, two 90° angles would equal 180°, making a third angle impossible.`);
};

// ---------- 4.6D classify 2-D figures by lines and angles ----------
export const classify2DFigures: Gen = (rng, d) => {
  if (d === 1) {
    // Identifying shapes by parallel and perpendicular lines
    const cases = [
      { shape: 'rectangle', prop: 'two pairs of parallel sides and four right angles (perpendicular adjacent sides)' },
      { shape: 'trapezoid', prop: 'exactly one pair of parallel sides' },
      { shape: 'rhombus', prop: 'two pairs of parallel sides and four equal side lengths' },
      { shape: 'square', prop: 'four equal sides, two pairs of parallel sides, and four right angles' },
      { shape: 'parallelogram', prop: 'two pairs of parallel sides' },
    ];
    const c = pick(rng, cases);
    return one('mc', [txt(`Which two-dimensional figure always has ${c.prop}?`)],
      mc(rng, c.shape, cases.filter((x) => x.shape !== c.shape).map((x) => x.shape)),
      `A ${c.shape} has ${c.prop}.`);
  }

  if (d === 2) {
    // Select TWO shapes that have perpendicular sides
    return one('multiselect', [
      txt(`Which figures always contain perpendicular lines? Select **TWO** correct answers.`),
    ],
      multi(rng, ['Square', 'Rectangle'], ['Trapezoid', 'Rhombus that is not a square', 'Scalene triangle']),
      `Perpendicular lines meet at 90-degree right angles. Both squares and rectangles always have four 90-degree angles.`);
  }

  // d === 3: Classification hierarchy or property check
  return one('mc', [
    txt(`Which group of shapes always has at least one pair of parallel sides?`),
  ],
    mc(rng, 'Parallelograms, rectangles, squares, and trapezoids', [
      'Triangles, circles, and pentagons',
      'Scalene triangles and non-isosceles trapezoids',
      'All quadrilaterals',
    ]),
    `Parallelograms, rectangles, and squares have two pairs of parallel sides, while trapezoids have at least one pair of parallel sides.`);
};

// ---------- 4.7C measure angles with a protractor ----------
export const measureAnglesProtractor: Gen = (rng, d) => {
  if (d === 1) {
    // Ray 1 at 0° on the right, Ray 2 at acute or obtuse degree
    const angles = [30, 45, 60, 75, 90, 110, 120, 135, 150];
    const m = pick(rng, angles);
    return one('mc', [
      txt(`An angle is shown on a protractor.`),
      fig({ kind: 'protractor', ray1: 0, ray2: m }, `A protractor with one ray at 0 degrees and the other ray at ${m} degrees.`),
      txt(`What is the measure of the angle?`),
    ],
      mc(rng, `${m}°`, [
        { text: `${180 - m}°`, why: 'Read from the 0° mark where the bottom ray aligns.' },
        `${m + 10}°`,
        `${Math.max(15, m - 10)}°`,
      ]),
      `One ray points to 0° on the scale. The other ray points to ${m}°. The measure of the angle is ${m}°.`);
  }

  if (d === 2) {
    // Ray 1 at non-zero (e.g. 20° to 80°, measure = 60°)
    const start = pick(rng, [15, 20, 30, 40]);
    const diff = pick(rng, [40, 50, 60, 70, 85]);
    const end = start + diff;
    return one('mc', [
      txt(`An angle is placed on a protractor so that neither ray points to 0°.`),
      fig({ kind: 'protractor', ray1: start, ray2: end }, `A protractor with one ray at ${start} degrees and the second ray at ${end} degrees.`),
      txt(`What is the measure of the angle?`),
    ],
      mc(rng, `${diff}°`, [
        { text: `${end}°`, why: 'Subtract the starting ray position from the ending ray position.' },
        `${start + end}°`,
        `${180 - diff}°`,
      ]),
      `Subtract the smaller degree measure from the larger degree measure: ${end}° − ${start}° = ${diff}°. The measure of the angle is ${diff}°.`);
  }

  // d === 3: Non-zero ray that spans obtuse angle
  const start = pick(rng, [25, 30, 45]);
  const diff = pick(rng, [95, 105, 115, 125]);
  const end = start + diff;
  return one('mc', [
    txt(`What is the measure of the angle shown on the protractor?`),
    fig({ kind: 'protractor', ray1: start, ray2: end }, `A protractor showing an angle from ${start} degrees to ${end} degrees.`),
  ],
    mc(rng, `${diff}°`, [`${end}°`, `${start + end}°`, `${180 - diff}°`]),
    `The rays align at ${start}° and ${end}°. Subtract: ${end}° − ${start}° = ${diff}°. The angle measures ${diff}°.`);
};

// ---------- 4.7D draw and identify angles ----------
export const drawIdentifyAngles: Gen = (rng, d) => {
  if (d === 1) {
    const angle = randInt(rng, 35, 75);
    return one('mc', [txt(`An angle has a measure of ${angle}°. How is this angle classified?`)],
      mc(rng, 'Acute angle', [
        { text: 'Obtuse angle', why: 'Obtuse angles measure greater than 90°.' },
        'Right angle',
        'Straight angle',
      ]),
      `An acute angle measures less than 90°. ${angle}° is less than 90°, so it is an acute angle.`);
  }

  if (d === 2) {
    const angle = randInt(rng, 105, 165);
    return one('mc', [txt(`An angle has a measure of ${angle}°. How is this angle classified?`)],
      mc(rng, 'Obtuse angle', [
        { text: 'Acute angle', why: 'Acute angles measure less than 90°.' },
        'Right angle',
        'Straight angle',
      ]),
      `An obtuse angle measures greater than 90° and less than 180°. ${angle}° is greater than 90°, so it is an obtuse angle.`);
  }

  // d === 3: Fractional turn or angle comparison
  const turns = [
    { fracStr: '{1/4}', deg: 90, name: 'a right angle' },
    { fracStr: '{1/2}', deg: 180, name: 'a straight angle' },
    { fracStr: '{3/4}', deg: 270, name: 'a 270-degree angle' },
  ];
  const t = pick(rng, turns);
  return one('mc', [
    txt(`A ray turns through ${t.fracStr} of a full circle (360°). How many degrees did the ray turn?`),
  ],
    mc(rng, `${t.deg}°`, [`${t.deg / 2}°`, `${t.deg + 45}°`, `${360 - t.deg}°`]),
    `A full circle has 360°. ${t.fracStr} of 360° is 360° × ${t.fracStr} = ${t.deg}°.`);
};

// ---------- 4.7E adjacent angles and unknown measures ----------
export const adjacentAngles: Gen = (rng, d) => {
  if (d === 1) {
    // Two adjacent angles inside a right angle (90°)
    const a1 = randInt(rng, 25, 65);
    const a2 = 90 - a1;
    return one('mc', [
      txt(`Two non-overlapping adjacent angles form a right angle (90°). One angle measures ${a1}°.`),
      fig({ kind: 'anglePair', a1, a2, label1: `${a1}°`, label2: 'x' }, `Two adjacent angles forming 90 degrees with one angle labeled ${a1} degrees.`),
      txt(`What is the measure of angle x?`),
    ],
      mc(rng, `${a2}°`, [`${a2 + 10}°`, `${90 + a1}°`, `${180 - a1}°`]),
      `A right angle is 90°. Subtract the known angle: 90° − ${a1}° = ${a2}°. The measure of angle x is ${a2}°.`);
  }

  if (d === 2) {
    // Two adjacent angles inside a straight angle (180°)
    const a1 = randInt(rng, 45, 135);
    const a2 = 180 - a1;
    return one('mc', [
      txt(`Angle ABC is a straight angle measuring 180°. Ray BD divides ∠ABC into two adjacent angles: ∠ABD = ${a1}° and ∠DBC = k. What is the value of k?`),
    ],
      mc(rng, `${a2}°`, [`${90 - a1 > 0 ? 90 - a1 : a1 - 90}°`, `${a2 + 10}°`, `${a1}°`]),
      `The angles lie on a straight line, so their sum is 180°. k = 180° − ${a1}° = ${a2}°.`);
  }

  // d === 3: Total angle given two parts or total is known
  const a1 = randInt(rng, 25, 55);
  const a2 = randInt(rng, 30, 60);
  const total = a1 + a2;
  return one('mc', [
    txt(`An angle measuring ${total}° is split into two non-overlapping adjacent angles. One of the angles measures ${a1}°. What is the measure of the second angle?`),
    fig({ kind: 'anglePair', a1, a2, label1: `${a1}°`, label2: '?' }, `Adjacent angles totaling ${total} degrees.`),
  ],
    mc(rng, `${a2}°`, [`${total + a1}°`, `${90 - a1}°`, `${a2 + 5}°`]),
    `Subtract the measure of the first angle from the total: ${total}° − ${a1}° = ${a2}°. The second angle measures ${a2}°.`);
};

// ---------- 4.8A relative sizes of measurement units ----------
export const measurementUnits: Gen = (rng, d) => {
  if (d === 1) {
    // Customary relative sizes
    const facts = [
      { unit: '1 yard', equals: '3 feet', wrong: ['12 inches', '10 feet', '2 feet'] },
      { unit: '1 foot', equals: '12 inches', wrong: ['3 inches', '10 inches', '36 inches'] },
      { unit: '1 pound', equals: '16 ounces', wrong: ['10 ounces', '12 ounces', '100 ounces'] },
      { unit: '1 gallon', equals: '4 quarts', wrong: ['2 quarts', '8 quarts', '16 quarts'] },
      { unit: '1 kilometer', equals: '1,000 meters', wrong: ['100 meters', '10 meters', '1,000 centimeters'] },
      { unit: '1 meter', equals: '100 centimeters', wrong: ['10 centimeters', '1,000 centimeters', '12 inches'] },
    ];
    const f = pick(rng, facts);
    return one('mc', [txt(`Which measurement is equivalent to ${f.unit}?`)],
      mc(rng, f.equals, f.wrong),
      `By definition, ${f.unit} equals ${f.equals}.`);
  }

  if (d === 2) {
    // Relative unit comparison: which unit is best
    const items = [
      { obj: 'the mass of a standard paperclip', unit: '1 gram' },
      { obj: 'the mass of a textbook', unit: '1 kilogram' },
      { obj: 'the amount of water in a bathtub', unit: '40 gallons' },
      { obj: 'the length of a standard pencil', unit: '7 inches' },
    ];
    const it = pick(rng, items);
    return one('mc', [txt(`Which is the most reasonable estimate for ${it.obj}?`)],
      mc(rng, it.unit, ['100 kilograms', '500 yards', '20 ounces'].filter((x) => x !== it.unit)),
      `${it.unit} is the standard benchmark for ${it.obj}.`);
  }

  // d === 3: Relative size relationships: "Unit A is how many times as long/heavy/large as Unit B?"
  const relQuestions = [
    {
      stem: 'A meter is how many times as long as a centimeter?',
      right: '100 times',
      wrong: ['10 times', '1,000 times', '12 times'],
      explain: 'Since 1 meter = 100 centimeters, a meter is 100 times as long as a centimeter.',
    },
    {
      stem: 'A kilometer is how many times as long as a meter?',
      right: '1,000 times',
      wrong: ['100 times', '10 times', '10,000 times'],
      explain: 'Since 1 kilometer = 1,000 meters, a kilometer is 1,000 times as long as a meter.',
    },
    {
      stem: 'A yard is how many times as long as a foot?',
      right: '3 times',
      wrong: ['12 times', '4 times', '36 times'],
      explain: 'Since 1 yard = 3 feet, a yard is 3 times as long as a foot.',
    },
    {
      stem: 'A pound is how many times as heavy as an ounce?',
      right: '16 times',
      wrong: ['10 times', '12 times', '100 times'],
      explain: 'Since 1 pound = 16 ounces, a pound is 16 times as heavy as an ounce.',
    },
    {
      stem: 'A gallon is how many times the volume of a quart?',
      right: '4 times',
      wrong: ['2 times', '8 times', '16 times'],
      explain: 'Since 1 gallon = 4 quarts, a gallon is 4 times the volume of a quart.',
    },
    {
      stem: 'A kilogram is how many times as heavy as a gram?',
      right: '1,000 times',
      wrong: ['100 times', '10 times', '10,000 times'],
      explain: 'Since 1 kilogram = 1,000 grams, a kilogram is 1,000 times as heavy as a gram.',
    },
  ];
  const q = pick(rng, relQuestions);
  return one('mc', [txt(q.stem)], mc(rng, q.right, q.wrong), q.explain);
};

// ---------- 4.8B convert units with tables ----------
export const convertUnitsTable: Gen = (rng, d) => {
  const convs = [
    { from: 'Feet', to: 'Inches', mult: 12 },
    { from: 'Yards', to: 'Feet', mult: 3 },
    { from: 'Gallons', to: 'Quarts', mult: 4 },
    { from: 'Pounds', to: 'Ounces', mult: 16 },
    { from: 'Kilograms', to: 'Grams', mult: 1000 },
    { from: 'Hours', to: 'Minutes', mult: 60 },
  ];
  const c = pick(rng, convs);
  const inputs = [1, 2, 3, 4];
  const outputs = inputs.map((v) => v * c.mult);

  if (d === 1) {
    // Missing entry in row 4
    const rows: (string | number)[][] = [
      [1, num(outputs[0])],
      [2, num(outputs[1])],
      [3, num(outputs[2])],
      [4, '?'],
    ];
    return one('mc', [
      txt(`The table shows the relationship between ${c.from.toLowerCase()} and ${c.to.toLowerCase()}.`),
      table([c.from, c.to], rows),
      txt(`What number belongs in the table for 4 ${c.from.toLowerCase()}?`),
    ],
      mc(rng, num(outputs[3]), [
        num(outputs[3] + c.mult),
        num(outputs[3] - c.mult),
        num(4 + c.mult),
      ]),
      `Each 1 ${c.from.toLowerCase().slice(0, -1)} equals ${num(c.mult)} ${c.to.toLowerCase()}. Multiply by ${num(c.mult)}: 4 × ${num(c.mult)} = ${num(outputs[3])}.`);
  }

  if (d === 2) {
    // Given 7 units, find conversion
    const count = randInt(rng, 5, 9);
    const ans = count * c.mult;
    const rows: (string | number)[][] = [
      [1, num(outputs[0])],
      [2, num(outputs[1])],
      [3, num(outputs[2])],
    ];
    return one('mc', [
      txt(`Based on the conversion table, how many ${c.to.toLowerCase()} are equal to ${count} ${c.from.toLowerCase()}?`),
      table([c.from, c.to], rows),
    ],
      mc(rng, `${num(ans)} ${c.to.toLowerCase()}`, [
        `${num(ans + c.mult)} ${c.to.toLowerCase()}`,
        `${num(count + c.mult)} ${c.to.toLowerCase()}`,
        `${num(ans - c.mult)} ${c.to.toLowerCase()}`,
      ]),
      `The rule is multiply by ${num(c.mult)}. ${count} × ${num(c.mult)} = ${num(ans)} ${c.to.toLowerCase()}.`);
  }

  // d === 3: Reverse conversion: smaller to larger
  const targetLarger = randInt(rng, 3, 8);
  const smallerVal = targetLarger * c.mult;
  const rows: (string | number)[][] = [
    [1, num(outputs[0])],
    [2, num(outputs[1])],
    [3, num(outputs[2])],
  ];
  return one('mc', [
    txt(`A scientist has ${num(smallerVal)} ${c.to.toLowerCase()}. Using the table, how many ${c.from.toLowerCase()} is this equivalent to?`),
    table([c.from, c.to], rows),
  ],
    mc(rng, `${targetLarger} ${c.from.toLowerCase()}`, [
      `${targetLarger + 1} ${c.from.toLowerCase()}`,
      `${targetLarger - 1} ${c.from.toLowerCase()}`,
      `${num(smallerVal - c.mult)} ${c.from.toLowerCase()}`,
    ]),
    `Divide the number of ${c.to.toLowerCase()} by ${num(c.mult)}: ${num(smallerVal)} ÷ ${num(c.mult)} = ${targetLarger} ${c.from.toLowerCase()}.`);
};

// ---------- 4.8C solve measurement problems ----------
export const solveMeasurementProblems: Gen = (rng, d) => {
  if (d === 1) {
    // Elapsed time
    const startHour = randInt(rng, 1, 4);
    const startMin = pick(rng, [15, 30, 45]);
    const durationHours = randInt(rng, 1, 2);
    const durationMin = pick(rng, [15, 30, 45]);
    const endTotalMin = (startHour * 60 + startMin) + (durationHours * 60 + durationMin);
    const endHour = Math.floor(endTotalMin / 60);
    const endMin = endTotalMin % 60;
    const endMinStr = endMin < 10 ? `0${endMin}` : String(endMin);
    const startMinStr = startMin < 10 ? `0${startMin}` : String(startMin);
    return one('mc', [
      txt(`A youth soccer game started at ${startHour}:${startMinStr} PM and lasted ${durationHours} hour${durationHours > 1 ? 's' : ''} and ${durationMin} minutes. What time did the game end?`),
    ],
      mc(rng, `${endHour}:${endMinStr} PM`, [
        `${endHour + 1}:${endMinStr} PM`,
        `${endHour}:${startMinStr} PM`,
        `${startHour + durationHours}:${startMinStr} PM`,
      ]),
      `Add ${durationHours} hour${durationHours > 1 ? 's' : ''} to ${startHour}:${startMinStr} PM to get ${startHour + durationHours}:${startMinStr} PM. Then add ${durationMin} minutes: ${endHour}:${endMinStr} PM.`);
  }

  if (d === 2) {
    // Liquid volume / capacity problem
    const liters = randInt(rng, 3, 7);
    const perBottleML = 500;
    const totalML = liters * 1000;
    const bottles = totalML / perBottleML;
    return one('mc', [
      txt(`A cooler contains ${liters} liters of lemonade. How many ${perBottleML}-milliliter bottles can be filled completely with this lemonade?`),
    ],
      mc(rng, `${bottles} bottles`, [
        `${bottles / 2} bottles`,
        `${liters * 2 + 1} bottles`,
        `${liters * 10} bottles`,
      ]),
      `1 liter = 1,000 milliliters, so ${liters} liters = ${num(totalML)} milliliters. ${num(totalML)} ÷ ${perBottleML} = ${bottles} bottles.`);
  }

  // d === 3: Mass / weight problem with addition and subtraction
  const w1 = randInt(rng, 12, 28);
  const w2 = randInt(rng, 8, 22);
  const limit = 50;
  const rem = limit - (w1 + w2);
  return one('mc', [
    txt(`An airline has a baggage limit of ${limit} pounds per checked bag. Daniel packs two suitcases weighing ${w1} pounds and ${w2} pounds. If both suitcases are weighed together on a cargo scale, how many more pounds could Daniel add before reaching the ${limit}-pound limit?`),
  ],
    mc(rng, `${rem} pounds`, [
      `${rem + 5} pounds`,
      `${w1 + w2} pounds`,
      `${limit - w1} pounds`,
    ]),
    `Add the two suitcase weights: ${w1} + ${w2} = ${w1 + w2} pounds. Subtract from ${limit}: ${limit} − ${w1 + w2} = ${rem} pounds.`);
};

export const STRAND3: Record<string, Gen[]> = {
  '4.5D': [perimeterAreaRectangles],
  '4.6A': [linesRaysAngles],
  '4.6B': [linesOfSymmetry],
  '4.6C': [classifyTriangles],
  '4.6D': [classify2DFigures],
  '4.7C': [measureAnglesProtractor],
  '4.7D': [drawIdentifyAngles],
  '4.7E': [adjacentAngles],
  '4.8A': [measurementUnits],
  '4.8B': [convertUnitsTable],
  '4.8C': [solveMeasurementProblems],
};
