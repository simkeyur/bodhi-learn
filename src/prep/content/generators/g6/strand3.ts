// Grade 6 math, strand 3: geometry and measurement.
// TEKS 6.4H, 6.8A, 6.8B, 6.8C, 6.8D, 6.11A

import { pick } from '../../rng.ts';
import { dec, fig, mc, num, one, plain, txt, type Gen } from '../build.ts';

// ---------- 6.4H convert units within measurement systems ----------
export const convertUnits: Gen = (rng, d) => {
  if (d === 1) {
    // 1-step customary or metric conversion
    const type = pick(rng, ['inches_feet', 'feet_yards', 'cm_m', 'cups_pints']);
    if (type === 'inches_feet') {
      const feet = pick(rng, [3, 4, 5, 6, 7, 8, 9]);
      const inches = feet * 12;
      return one('mc', [
        txt(`A piece of ribbon is ${feet} feet long. How many inches long is the ribbon? (1 foot = 12 inches)`),
      ],
        mc(rng, `${inches} inches`, [
          { text: `${feet + 12} inches`, why: 'Added 12 instead of multiplying by 12.' },
          `${inches - 12} inches`,
          `${feet * 10} inches`,
        ]),
        `There are 12 inches in 1 foot. Multiply ${feet} by 12 to get ${inches} inches.`);
    } else if (type === 'feet_yards') {
      const yards = pick(rng, [4, 5, 6, 8, 9, 12]);
      const feet = yards * 3;
      return one('mc', [
        txt(`A path is ${feet} feet long. How many yards long is the path? (1 yard = 3 feet)`),
      ],
        mc(rng, `${yards} yards`, [
          { text: `${feet * 3} yards`, why: 'Multiplied by 3 instead of dividing by 3.' },
          `${feet - 3} yards`,
          `${yards + 2} yards`,
        ]),
        `There are 3 feet in 1 yard. Divide ${feet} by 3 to get ${yards} yards.`);
    } else if (type === 'cm_m') {
      const meters = pick(rng, [2, 3, 4, 5, 7]);
      const cm = meters * 100;
      return one('mc', [
        txt(`A table has a length of ${meters} meters. What is the length of the table in centimeters? (1 meter = 100 centimeters)`),
      ],
        mc(rng, `${num(cm)} cm`, [
          { text: `${meters * 10} cm`, why: 'Used 10 centimeters per meter instead of 100.' },
          `${num(meters * 1000)} cm`,
          `${meters + 100} cm`,
        ]),
        `There are 100 centimeters in 1 meter. Multiply ${meters} by 100 to get ${num(cm)} cm.`);
    } else {
      const pints = pick(rng, [3, 4, 5, 6, 8]);
      const cups = pints * 2;
      return one('mc', [
        txt(`Chef Marcus has ${pints} pints of cream. How many cups of cream does he have? (1 pint = 2 cups)`),
      ],
        mc(rng, `${cups} cups`, [
          { text: `${pints + 2} cups`, why: 'Added 2 instead of multiplying by 2.' },
          `${cups * 2} cups`,
          `${pints * 3} cups`,
        ]),
        `There are 2 cups in 1 pint. Multiply ${pints} by 2 to get ${cups} cups.`);
    }
  }

  if (d === 2) {
    // 2-step or decimal conversion
    const type = pick(rng, ['pounds_ounces', 'meters_km', 'quarts_gallons', 'yards_inches']);
    if (type === 'pounds_ounces') {
      const pounds = pick(rng, [2.5, 3.5, 4.5, 5.5]);
      const ounces = Math.round(pounds * 16);
      return one('mc', [
        txt(`A package weighs ${dec(pounds, 1)} pounds. How many ounces does the package weigh? (1 pound = 16 ounces)`),
      ],
        mc(rng, `${ounces} ounces`, [
          { text: `${ounces - 8} ounces`, why: 'Did not include the half pound.' },
          `${Math.round(pounds * 10)} ounces`,
          `${ounces + 16} ounces`,
        ]),
        `There are 16 ounces in 1 pound. Multiply ${dec(pounds, 1)} by 16 to get ${ounces} ounces.`);
    } else if (type === 'meters_km') {
      const km = pick(rng, [1.5, 2.4, 3.2, 4.5]);
      const meters = Math.round(km * 1000);
      return one('mc', [
        txt(`A cyclist rode ${dec(km, 1)} kilometers in a race. How many meters did the cyclist ride? (1 kilometer = 1,000 meters)`),
      ],
        mc(rng, `${num(meters)} meters`, [
          { text: `${num(Math.round(km * 100))} meters`, why: 'Multiplied by 100 instead of 1,000.' },
          `${num(Math.round(km * 10000))} meters`,
          `${dec(km + 1000, 1)} meters`,
        ]),
        `There are 1,000 meters in 1 kilometer. Multiply ${dec(km, 1)} by 1,000 to get ${num(meters)} meters.`);
    } else if (type === 'quarts_gallons') {
      const gallons = pick(rng, [3, 4, 5, 7]);
      const quarts = gallons * 4;
      const pints = quarts * 2;
      return one('mc', [
        txt(`A water cooler contains ${gallons} gallons of water. How many pints of water are in the cooler? (1 gallon = 4 quarts, 1 quart = 2 pints)`),
      ],
        mc(rng, `${pints} pints`, [
          { text: `${quarts} pints`, why: 'Converted to quarts only, forgetting to convert to pints.' },
          `${gallons * 2} pints`,
          `${pints + 4} pints`,
        ]),
        `First convert gallons to quarts: ${gallons} × 4 = ${quarts} quarts. Then convert quarts to pints: ${quarts} × 2 = ${pints} pints.`);
    } else {
      const yards = pick(rng, [2, 3, 4, 5]);
      const inches = yards * 36;
      return one('mc', [
        txt(`A rope has a length of ${yards} yards. What is the length of the rope in inches? (1 yard = 3 feet, 1 foot = 12 inches)`),
      ],
        mc(rng, `${inches} inches`, [
          { text: `${yards * 12} inches`, why: 'Multiplied by 12 instead of 36.' },
          `${yards * 3} inches`,
          `${inches - 12} inches`,
        ]),
        `First find feet: ${yards} × 3 = ${yards * 3} feet. Then convert feet to inches: ${yards * 3} × 12 = ${inches} inches.`);
    }
  }

  // d === 3: Word problem involving comparing rates or multi-step conversion with costs
  const item = pick(rng, ['fabric', 'juice', 'truck']);
  if (item === 'fabric') {
    const yards = pick(rng, [4, 6, 8]);
    const pricePerYard = pick(rng, [3, 5, 6]);
    const totalCost = yards * pricePerYard;
    const feet = yards * 3;
    return one('mc', [
      txt(`Ms. Flores buys ${feet} feet of fabric. The fabric costs $${pricePerYard} per yard. How much does Ms. Flores pay for the fabric? (1 yard = 3 feet)`),
    ],
      mc(rng, `$${totalCost}`, [
        { text: `$${feet * pricePerYard}`, why: 'Multiplied feet by the cost per yard without converting feet to yards.' },
        `$${Math.round(totalCost / 3)}`,
        `$${totalCost + pricePerYard}`,
      ]),
      `First convert feet to yards: ${feet} ÷ 3 = ${yards} yards. Then multiply by the cost per yard: ${yards} × $${pricePerYard} = $${totalCost}.`);
  } else if (item === 'juice') {
    const quarts = pick(rng, [6, 8, 10, 12]);
    const cups = quarts * 4;
    const servingSizeCups = 2;
    const servings = cups / servingSizeCups;
    return one('mc', [
      txt(`A cafeteria prepares ${quarts} quarts of orange juice. Each serving is ${servingSizeCups} cups. How many servings can the cafeteria provide? (1 quart = 4 cups)`),
    ],
      mc(rng, `${servings} servings`, [
        { text: `${cups} servings`, why: 'Found total cups but did not divide by the serving size.' },
        `${quarts * servingSizeCups} servings`,
        `${servings / 2} servings`,
      ]),
      `First find total cups: ${quarts} × 4 = ${cups} cups. Then divide by ${servingSizeCups} cups per serving: ${cups} ÷ ${servingSizeCups} = ${servings} servings.`);
  } else {
    const hours = pick(rng, [3, 4, 5]);
    const milesPerHour = pick(rng, [45, 50, 55, 60]);
    const totalMiles = hours * milesPerHour;
    return one('mc', [
      txt(`A delivery truck travels at an average speed of ${milesPerHour} miles per hour for ${hours} hours. How many miles does the truck travel?`),
    ],
      mc(rng, `${totalMiles} miles`, [
        { text: `${milesPerHour + hours} miles`, why: 'Added speed and time instead of multiplying.' },
        `${totalMiles - milesPerHour} miles`,
        `${totalMiles + milesPerHour} miles`,
      ]),
      `Multiply rate by time: ${milesPerHour} × ${hours} = ${totalMiles} miles.`);
  }
};

// ---------- 6.8A triangle angle sums and inequalities ----------
export const triangleProperties: Gen = (rng, d) => {
  if (d === 1) {
    const a = pick(rng, [40, 50, 60, 70, 45, 55]);
    const b = pick(rng, [30, 40, 50, 65, 75]);
    const c = 180 - a - b;
    return one('mc', [
      txt(`Two angles of a triangle measure ${a}° and ${b}°. What is the measure of the third angle?`),
    ],
      mc(rng, `${c}°`, [
        { text: `${180 - a}°`, why: 'Subtracted only the first angle from 180°.' },
        `${a + b}°`,
        `${90 - b}°`,
      ]),
      `The sum of angles in a triangle is 180°. Add the two known angles: ${a} + ${b} = ${a + b}°. Then subtract from 180°: 180 − ${a + b} = ${c}°.`);
  }

  if (d === 2) {
    const validSets = [
      [5, 7, 10],
      [6, 8, 12],
      [7, 9, 14],
      [4, 8, 11],
    ];
    const invalidSets = [
      [3, 4, 8],
      [2, 5, 9],
      [5, 5, 11],
    ];
    const valid = pick(rng, validSets);
    return one('mc', [
      txt(`Which set of side lengths could form a triangle?`),
    ],
      mc(rng, `${valid[0]} cm, ${valid[1]} cm, ${valid[2]} cm`, [
        { text: `${invalidSets[0][0]} cm, ${invalidSets[0][1]} cm, ${invalidSets[0][2]} cm`, why: 'The sum of the two shorter sides is not greater than the third side.' },
        `${invalidSets[1][0]} cm, ${invalidSets[1][1]} cm, ${invalidSets[1][2]} cm`,
        `${invalidSets[2][0]} cm, ${invalidSets[2][1]} cm, ${invalidSets[2][2]} cm`,
      ]),
      `In any triangle, the sum of any two sides must be strictly greater than the third side. Here, ${valid[0]} + ${valid[1]} = ${valid[0] + valid[1]}, which is greater than ${valid[2]}.`);
  }

  // d === 3: Angle-side relationships
  return one('mc', [
    txt(`In triangle ABC, angle A measures 45°, angle B measures 65°, and angle C measures 70°. Which side of the triangle is the longest?`),
  ],
    mc(rng, 'Side AB (opposite angle C)', [
      { text: 'Side BC (opposite angle A)', why: 'This side is opposite the smallest angle, so it is the shortest side.' },
      'Side AC (opposite angle B)',
      'All sides have equal length',
    ]),
    `The longest side of a triangle is always opposite the angle with the greatest measure. Angle C has the greatest measure (70°), so the side opposite angle C (side AB) is the longest.`);
};

// ---------- 6.8B model area formulas ----------
export const modelAreaFormulas: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`Why is the formula for the area of a triangle A = {1/2}bh?`),
    ],
      mc(rng, 'A triangle has half the area of a rectangle or parallelogram with the same base and height', [
        { text: 'A triangle always has 3 sides of equal length', why: 'The area formula applies to all triangles.' },
        'The perimeter of a triangle is half its area',
        'Triangles can only be formed inside a square',
      ]),
      `Two identical triangles can always be joined to form a parallelogram with base b and height h. Therefore, the area of one triangle is half the area of the parallelogram: A = {1/2}bh.`);
  }

  if (d === 2) {
    return one('mc', [
      txt(`A student decomposes a trapezoid with height h and parallel bases b₁ and b₂ into two triangles by drawing a diagonal. Which expression represents the total area of the trapezoid?`),
    ],
      mc(rng, '{1/2}b₁h + {1/2}b₂h', [
        { text: 'b₁h + b₂h', why: 'Forgot to take half the area of each triangle.' },
        '{1/2}(b₁ + b₂ + h)',
        'b₁ · b₂ · h',
      ]),
      `The diagonal splits the trapezoid into two triangles: one with base b₁ and height h (area {1/2}b₁h), and one with base b₂ and height h (area {1/2}b₂h). Factoring gives A = {1/2}(b₁ + b₂)h.`);
  }

  // d === 3: Parallelogram rearrangement to rectangle
  return one('mc', [
    txt(`A parallelogram can be decomposed into a trapezoid and a right triangle. If the triangle is cut off from one side and moved to the opposite side, what shape is formed?`),
  ],
    mc(rng, 'A rectangle with the same base and height', [
      { text: 'A square with double the perimeter', why: 'The rearranged shape is a rectangle whose perimeter depends on the dimensions.' },
      'A larger triangle with double the base',
      'A trapezoid with twice the height',
    ]),
    `Cutting the triangle from one side and translating it to the other fills the slanted gap to create a rectangle with the same base and height. That is why the area formula for a parallelogram is A = bh.`);
};

// ---------- 6.8C write area and volume equations ----------
export const writeAreaVolumeEquations: Gen = (rng, d) => {
  if (d === 1) {
    const b = pick(rng, [6, 8, 10, 12]);
    const h = pick(rng, [4, 5, 7, 9]);
    return one('mc', [
      txt(`A triangle has a base of ${b} cm and a height of ${h} cm. Which equation can be used to find A, the area of the triangle in square centimeters?`),
    ],
      mc(rng, `A = {1/2}(${b})(${h})`, [
        { text: `A = (${b})(${h})`, why: 'Used the parallelogram area formula instead of the triangle area formula.' },
        `A = 2(${b} + ${h})`,
        `A = {1/2}(${b} + ${h})`,
      ]),
      `The formula for the area of a triangle is A = {1/2}bh. Substituting base ${b} and height ${h} gives A = {1/2}(${b})(${h}).`);
  }

  if (d === 2) {
    const b1 = pick(rng, [6, 8, 10]);
    const b2 = pick(rng, [12, 14, 16]);
    const h = pick(rng, [5, 7, 9]);
    return one('mc', [
      txt(`A trapezoid has parallel bases measuring ${b1} inches and ${b2} inches, and a height of ${h} inches. Which equation can be used to determine A, the area of the trapezoid in square inches?`),
    ],
      mc(rng, `A = {1/2}(${b1} + ${b2})(${h})`, [
        { text: `A = (${b1} + ${b2})(${h})`, why: 'Forgot the factor of {1/2}.' },
        `A = {1/2}(${b1})(${b2})(${h})`,
        `A = (${b1})(${h}) + (${b2})(${h})`,
      ]),
      `The formula for the area of a trapezoid is A = {1/2}(b₁ + b₂)h. Substituting the values gives A = {1/2}(${b1} + ${b2})(${h}).`);
  }

  // d === 3: Rectangular prism volume equation V = Bh
  const B = pick(rng, [24, 30, 48, 60]);
  const h = pick(rng, [6, 7, 8, 9]);
  return one('mc', [
    txt(`The base of a rectangular prism has an area of ${B} square inches. The height of the prism is ${h} inches. Which equation can be used to find V, the volume of the prism in cubic inches?`),
  ],
    mc(rng, `V = (${B})(${h})`, [
      { text: `V = {1/3}(${B})(${h})`, why: 'Used the pyramid volume formula instead of a prism.' },
      `V = (${B}) + (${h})`,
      `V = 2(${B}) + (${h})`,
    ]),
    `The volume of a prism is given by V = Bh, where B is the area of the base and h is the height. Substituting gives V = (${B})(${h}).`);
};

// ---------- 6.8D determine solutions for area and volume ----------
export const solveAreaVolume: Gen = (rng, d) => {
  if (d === 1) {
    const b = pick(rng, [6, 8, 10, 12, 14]);
    const h = pick(rng, [5, 7, 9, 11]);
    const area = (b * h) / 2;
    return one('mc', [
      txt(`A triangular banner has a base of ${b} feet and a height of ${h} feet. What is the area of the banner in square feet?`),
    ],
      mc(rng, `${area} sq ft`, [
        { text: `${b * h} sq ft`, why: 'Forgot to divide by 2.' },
        `${b + h} sq ft`,
        `${area + b} sq ft`,
      ]),
      `Use A = {1/2}bh: A = {1/2} × ${b} × ${h} = ${area} sq ft.`);
  }

  if (d === 2) {
    const b1 = pick(rng, [6, 8, 10]);
    const b2 = pick(rng, [10, 12, 14]);
    const h = pick(rng, [4, 6, 8]);
    const area = ((b1 + b2) * h) / 2;
    return one('mc', [
      txt(`A patio is shaped like a trapezoid with bases of ${b1} meters and ${b2} meters, and a height of ${h} meters. What is the area of the patio in square meters?`),
    ],
      mc(rng, `${area} m²`, [
        { text: `${(b1 + b2) * h} m²`, why: 'Forgot to multiply by {1/2}.' },
        `${Math.round((b1 * b2 * h) / 2)} m²`,
        `${Math.round(area / 2)} m²`,
      ]),
      `Use A = {1/2}(b₁ + b₂)h: A = {1/2}(${b1} + ${b2})(${h}) = {1/2}(${b1 + b2})(${h}) = ${area} m².`);
  }

  // d === 3: Volume of rectangular prism with decimals
  const l = pick(rng, [4, 5, 6, 8]);
  const w = pick(rng, [2.5, 3.5, 4.5]);
  const h = pick(rng, [3, 4, 6]);
  const volume = Math.round(l * w * h);
  return one('mc', [
    txt(`A shipping container has a length of ${l} feet, a width of ${dec(w, 1)} feet, and a height of ${h} feet. What is the volume of the container in cubic feet?`),
  ],
    mc(rng, `${volume} cu ft`, [
      { text: `${Math.round(l * h)} cu ft`, why: 'Multiplied only two of the three dimensions.' },
      `${Math.round(l + w + h)} cu ft`,
      `${Math.round(volume * 2)} cu ft`,
    ]),
    `Use V = lwh: V = ${l} × ${dec(w, 1)} × ${h} = ${volume} cu ft.`);
};

// ---------- 6.11A graph points in all four quadrants ----------
export const graphInFourQuadrants: Gen = (rng, d) => {
  if (d === 1) {
    const quad = pick(rng, [2, 3, 4]);
    let x = 0;
    let y = 0;
    let qName = '';
    if (quad === 2) {
      x = -pick(rng, [2, 3, 4, 5]);
      y = pick(rng, [2, 3, 4, 5]);
      qName = 'Quadrant II';
    } else if (quad === 3) {
      x = -pick(rng, [2, 3, 4, 5]);
      y = -pick(rng, [2, 3, 4, 5]);
      qName = 'Quadrant III';
    } else {
      x = pick(rng, [2, 3, 4, 5]);
      y = -pick(rng, [2, 3, 4, 5]);
      qName = 'Quadrant IV';
    }
    const allQuadrants = ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'];
    const otherQuadrants = allQuadrants.filter((q) => q !== qName);
    return one('mc', [
      txt(`In which quadrant of the coordinate plane is the ordered pair (${plain(String(x))}, ${plain(String(y))}) located?`),
    ],
      mc(rng, qName, otherQuadrants),
      `In the coordinate plane: Quadrant I is (+, +), Quadrant II is (−, +), Quadrant III is (−, −), and Quadrant IV is (+, −). Point (${plain(String(x))}, ${plain(String(y))}) is in ${qName}.`);
  }

  if (d === 2) {
    const x = pick(rng, [-4, -3, -2, 2, 3, 4]);
    const ys = [-5, -4, -3, -2, 2, 3, 4, 5].filter((v) => Math.abs(v) !== Math.abs(x));
    const y = pick(rng, ys);
    return one('mc', [
      txt(`Point P is shown on the coordinate plane. What are the coordinates of Point P?`),
      fig({
        kind: 'coordGrid',
        min: -5,
        max: 5,
        points: [{ x, y, label: 'P' }],
      }, `Coordinate plane from −5 to 5 showing point P at (${plain(String(x))}, ${plain(String(y))})`),
    ],
      mc(rng, `(${plain(String(x))}, ${plain(String(y))})`, [
        { text: `(${plain(String(y))}, ${plain(String(x))})`, why: 'Reversed the x-coordinate and y-coordinate.' },
        `(${plain(String(-x))}, ${plain(String(y))})`,
        `(${plain(String(x))}, ${plain(String(-y))})`,
        `(${plain(String(-x))}, ${plain(String(-y))})`,
      ]),
      `Start at the origin (0, 0). Move horizontally to x = ${plain(String(x))}, then vertically to y = ${plain(String(y))}. The ordered pair is (${plain(String(x))}, ${plain(String(y))}).`);
  }

  // d === 3: Reflections across axes
  const x = pick(rng, [-4, -3, 3, 4]);
  const y = pick(rng, [-5, -2, 2, 5]);
  const reflectAxis = pick(rng, ['x', 'y']);
  if (reflectAxis === 'x') {
    const refY = -y;
    return one('mc', [
      txt(`Point R is located at (${plain(String(x))}, ${plain(String(y))}). If Point R is reflected across the x-axis, what are the coordinates of the new point?`),
    ],
      mc(rng, `(${plain(String(x))}, ${plain(String(refY))})`, [
        { text: `(${plain(String(-x))}, ${plain(String(y))})`, why: 'Reflected across the y-axis instead of the x-axis.' },
        `(${plain(String(-x))}, ${plain(String(refY))})`,
        `(${plain(String(y))}, ${plain(String(x))})`,
      ]),
      `Reflecting across the x-axis keeps the x-coordinate identical and inverts the sign of the y-coordinate: (${plain(String(x))}, ${plain(String(refY))}).`);
  } else {
    const refX = -x;
    return one('mc', [
      txt(`Point M is located at (${plain(String(x))}, ${plain(String(y))}). If Point M is reflected across the y-axis, what are the coordinates of the new point?`),
    ],
      mc(rng, `(${plain(String(refX))}, ${plain(String(y))})`, [
        { text: `(${plain(String(x))}, ${plain(String(-y))})`, why: 'Reflected across the x-axis instead of the y-axis.' },
        `(${plain(String(refX))}, ${plain(String(-y))})`,
        `(${plain(String(y))}, ${plain(String(x))})`,
      ]),
      `Reflecting across the y-axis keeps the y-coordinate identical and inverts the sign of the x-coordinate: (${plain(String(refX))}, ${plain(String(y))}).`);
  }
};

export const STRAND3 = {
  '6.4H': [convertUnits],
  '6.8A': [triangleProperties],
  '6.8B': [modelAreaFormulas],
  '6.8C': [writeAreaVolumeEquations],
  '6.8D': [solveAreaVolume],
  '6.11A': [graphInFourQuadrants],
};
