// Grade 7 math, strand 3: geometry and measurement.
// TEKS 7.4E, 7.5A, 7.5B, 7.5C, 7.9A, 7.9B, 7.9C, 7.9D, 7.11C

import { pick } from '../../rng.ts';
import { fig, mc, one, txt, type Gen } from '../build.ts';

// ---------- 7.4E convert between measurement systems ----------
export const convertMeasurementSystems: Gen = (rng, d) => {
  if (d === 1) {
    // 1 inch ≈ 2.54 cm
    const inches = pick(rng, [4, 5, 6, 8, 10]);
    const cm = Math.round(inches * 2.54 * 100) / 100;
    return one('mc', [
      txt(`A pencil is ${inches} inches long. Given that 1 inch ≈ 2.54 centimeters, what is the length of the pencil in centimeters?`),
    ],
      mc(rng, `${cm} cm`, [
        `${Math.round((inches / 2.54) * 100) / 100} cm`,
        `${Math.round((cm + 2.54) * 100) / 100} cm`,
        `${inches * 2} cm`,
      ]),
      `Multiply inches by 2.54: ${inches} × 2.54 = ${cm} cm.`);
  }

  if (d === 2) {
    // 1 kilogram ≈ 2.2 pounds
    const kg = pick(rng, [5, 10, 15, 20]);
    const lbs = Math.round(kg * 2.2 * 10) / 10;
    return one('mc', [
      txt(`A luggage bag weighs ${kg} kilograms. If 1 kilogram is approximately 2.2 pounds, about how many pounds does the bag weigh?`),
    ],
      mc(rng, `${lbs} pounds`, [
        `${Math.round((kg / 2.2) * 10) / 10} pounds`,
        `${kg + 22} pounds`,
        `${lbs + 4} pounds`,
      ]),
      `Multiply kilograms by 2.2: ${kg} × 2.2 = ${lbs} pounds.`);
  }

  // d === 3: Miles to kilometers (1 mile ≈ 1.6 km)
  const miles = pick(rng, [25, 50, 75]);
  const km = Math.round(miles * 1.6);
  return one('mc', [
    txt(`A cyclist rode ${miles} miles. Given that 1 mile is approximately 1.6 kilometers, how many kilometers did the cyclist ride?`),
  ],
    mc(rng, `${km} km`, [
      `${Math.round(miles / 1.6)} km`,
      `${miles + 16} km`,
      `${km + 10} km`,
    ]),
    `Set up a proportion: {1 mile / 1.6 km} = {${miles} miles / x km}. Cross-multiply: x = ${miles} × 1.6 = ${km} km.`);
};

// ---------- 7.5A critical attributes of similarity ----------
export const similarityAttributes: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`If two figures are mathematically similar, which statement must be true?`),
    ],
      mc(rng, 'Corresponding angles are equal in measure, and corresponding side lengths are proportional', [
        { text: 'Corresponding side lengths must be equal in length', why: 'Equal side lengths define congruent figures, not just similar figures.' },
        'Corresponding angles are proportional and side lengths are congruent',
        'Both figures must have identical perimeters and areas',
      ]),
      `Similar figures have the exact same shape but different sizes: corresponding angles are congruent (equal) and corresponding sides are in proportion.`);
  }

  if (d === 2) {
    return one('mc', [
      txt(`Triangle ABC is similar to triangle DEF. Which ratio is equivalent to the ratio {AB/DE}?`),
    ],
      mc(rng, '{BC/EF}', [
        '{BC/DF}',
        '{AC/EF}',
        '{EF/BC}',
      ]),
      `Corresponding sides of similar triangles are proportional: {AB/DE} = {BC/EF} = {AC/DF}.`);
  }

  // d === 3: Scale factor and similarity reasoning
  return one('mc', [
    txt(`Rectangle M has dimensions 6 cm by 8 cm. Rectangle N is similar to Rectangle M and has a width of 15 cm corresponding to the 6 cm side. What is the length of Rectangle N?`),
  ],
    mc(rng, '20 cm', [
      { text: '17 cm', why: 'Added 9 to 8 instead of multiplying by the scale factor of 2.5.' },
      '18 cm',
      '24 cm',
    ]),
    `Find the scale factor: 15 ÷ 6 = 2.5. Multiply the corresponding length by 2.5: 8 × 2.5 = 20 cm.`);
};

// ---------- 7.5B pi as ratio of circumference to diameter ----------
export const piRatioDefinition: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`Which expression represents the mathematical constant π (pi)?`),
    ],
      mc(rng, 'The ratio of the circumference of a circle to its diameter: C ÷ d', [
        { text: 'The ratio of the diameter to the circumference: d ÷ C', why: 'Pi is circumference divided by diameter, not the reverse.' },
        'The ratio of the area of a circle to its radius: A ÷ r',
        'The ratio of the radius to the diameter: r ÷ d',
      ]),
      `By definition, π is the constant ratio of a circle's circumference to its diameter: π = C / d.`);
  }

  if (d === 2) {
    const dVal = pick(rng, [10, 14, 20]);
    const cVal = Math.round(dVal * 3.14 * 10) / 10;
    return one('mc', [
      txt(`A student measured a circular lid and recorded a circumference of ${cVal} cm and a diameter of ${dVal} cm. Which calculation provides an approximation for π?`),
    ],
      mc(rng, `${cVal} ÷ ${dVal}`, [
        `${dVal} ÷ ${cVal}`,
        `${cVal} × ${dVal}`,
        `${cVal} − ${dVal}`,
      ]),
      `Because π = C / d, dividing circumference (${cVal}) by diameter (${dVal}) approximates π.`);
  }

  // d === 3: Circumference formula rearranged
  return one('mc', [
    txt(`If the circumference of any circle is divided by its radius, what constant value is produced?`),
  ],
    mc(rng, '2π', [
      { text: 'π', why: 'Dividing circumference by diameter gives π. Dividing by radius gives 2π because d = 2r.' },
      'π²',
      '{1/2}π',
    ]),
    `Since C = 2πr, dividing both sides by r gives C / r = 2π ≈ 6.28.`);
};

// ---------- 7.5C similar shapes and scale drawings ----------
export const scaleDrawings: Gen = (rng, d) => {
  if (d === 1) {
    // Map scale: 1 cm = 20 miles
    const cm = pick(rng, [3, 4, 5, 6]);
    const scale = 20;
    const actualMiles = cm * scale;
    return one('mc', [
      txt(`On a road map of Texas, 1 centimeter represents ${scale} miles. The distance between two towns on the map is ${cm} centimeters. What is the actual distance between the two towns?`),
    ],
      mc(rng, `${actualMiles} miles`, [
        `${cm + scale} miles`,
        `${actualMiles - scale} miles`,
        `${Math.round(actualMiles / 2)} miles`,
      ]),
      `Multiply the map distance by the scale factor: ${cm} × ${scale} = ${actualMiles} miles.`);
  }

  if (d === 2) {
    // Blueprint scale: 1/2 inch = 5 feet (1 inch = 10 feet)
    const inches = pick(rng, [3, 4, 5]);
    const actualFt = inches * 10;
    return one('mc', [
      txt(`On an architectural blueprint, {1/2} inch represents 5 feet. A hallway is ${inches} inches long on the blueprint. What is the actual length of the hallway in feet?`),
    ],
      mc(rng, `${actualFt} feet`, [
        `${inches * 5} feet`,
        `${actualFt + 5} feet`,
        `${inches * 2} feet`,
      ]),
      `If {1/2} inch = 5 feet, then 1 inch = 10 feet. For ${inches} inches: ${inches} × 10 = ${actualFt} feet.`);
  }

  // d === 3: Missing side length in similar polygons
  const s1 = 8;
  const s2 = 12; // scale factor 1.5
  const other1 = 14;
  const other2 = (other1 * s2) / s1; // 21
  return one('mc', [
    txt(`Two similar trapezoids have corresponding bases measuring ${s1} cm and ${s2} cm. If another side on the smaller trapezoid measures ${other1} cm, what is the length of the corresponding side on the larger trapezoid?`),
  ],
    mc(rng, `${other2} cm`, [
      `${other1 + (s2 - s1)} cm`,
      `${other2 - 3} cm`,
      `${other1 * 2} cm`,
    ]),
    `Set up a proportion: {${s1}/${s2}} = {${other1}/x}. Cross-multiply: ${s1}x = ${s2} × ${other1} = ${s2 * other1}. Divide by ${s1}: x = ${other2} cm.`);
};

// ---------- 7.9A volume of prisms and pyramids ----------
export const volumePrismsPyramids: Gen = (rng, d) => {
  if (d === 1) {
    // Volume of rectangular prism V = lwh
    const l = pick(rng, [5, 6, 8]);
    const w = pick(rng, [3, 4, 5]);
    const h = pick(rng, [4, 7, 10]);
    const vol = l * w * h;
    return one('mc', [
      txt(`A rectangular jewelry box has a length of ${l} inches, a width of ${w} inches, and a height of ${h} inches. What is the volume of the box in cubic inches?`),
    ],
      mc(rng, `${vol} cu in`, [
        `${vol * 2} cu in`,
        `${l + w + h} cu in`,
        `${vol - 20} cu in`,
      ]),
      `Use V = lwh: V = ${l} × ${w} × ${h} = ${vol} cubic inches.`);
  }

  if (d === 2) {
    // Volume of a pyramid V = (1/3)Bh
    const B = pick(rng, [36, 45, 60, 72]);
    const h = pick(rng, [6, 8, 10]);
    const vol = (B * h) / 3;
    return one('mc', [
      txt(`A rectangular pyramid has a base area of ${B} square centimeters and a height of ${h} centimeters. What is the volume of the pyramid in cubic centimeters?`),
    ],
      mc(rng, `${vol} cm³`, [
        { text: `${B * h} cm³`, why: 'Forgot to multiply by {1/3} for the volume of a pyramid.' },
        `${vol * 2} cm³`,
        `${B + h} cm³`,
      ]),
      `The volume of a pyramid is V = {1/3}Bh: V = {1/3} × ${B} × ${h} = {${B * h}/3} = ${vol} cm³.`);
  }

  // d === 3: Triangular prism volume
  const bTri = 6;
  const hTri = 4;
  const length = pick(rng, [8, 10, 12]);
  const baseArea = (bTri * hTri) / 2; // 12
  const vol = baseArea * length;
  return one('mc', [
    txt(`A camping tent is in the shape of a triangular prism. The triangular base has a base of ${bTri} feet and a height of ${hTri} feet. The length of the tent is ${length} feet. What is the volume of the tent in cubic feet?`),
  ],
    mc(rng, `${vol} cu ft`, [
      `${vol * 2} cu ft`,
      `${bTri * hTri * length} cu ft`,
      `${vol - 12} cu ft`,
    ]),
    `First find the area of the triangular base: B = {1/2} × ${bTri} × ${hTri} = ${baseArea} sq ft. Then multiply by height of prism: V = Bh = ${baseArea} × ${length} = ${vol} cu ft.`);
};

// ---------- 7.9B circumference and area of circles ----------
export const circleCircumferenceArea: Gen = (rng, d) => {
  if (d === 1) {
    // Circumference given diameter C = pi * d
    const dVal = pick(rng, [10, 14, 20, 28]);
    const cVal = Math.round(3.14 * dVal * 10) / 10;
    return one('mc', [
      txt(`A circular clock has a diameter of ${dVal} inches. What is the circumference of the clock? (Use 3.14 for π)`),
      fig({ kind: 'circle', diameter: dVal }, `Circle with diameter ${dVal} inches`),
    ],
      mc(rng, `${cVal} inches`, [
        `${Math.round(cVal / 2 * 10) / 10} inches`,
        `${Math.round(cVal * 2 * 10) / 10} inches`,
        `${dVal + 3} inches`,
      ]),
      `Use C = πd: C = 3.14 × ${dVal} = ${cVal} inches.`);
  }

  if (d === 2) {
    // Area of a circle given radius A = pi * r^2
    const rVal = pick(rng, [4, 5, 6, 7]);
    const area = Math.round(3.14 * rVal * rVal * 100) / 100;
    return one('mc', [
      txt(`A circular rug has a radius of ${rVal} feet. What is the area of the rug in square feet? (Use 3.14 for π)`),
      fig({ kind: 'circle', radius: rVal }, `Circle with radius ${rVal} feet`),
    ],
      mc(rng, `${area} sq ft`, [
        { text: `${Math.round(3.14 * 2 * rVal * 100) / 100} sq ft`, why: 'Calculated circumference (2πr) instead of area (πr²).' },
        `${Math.round(rVal * rVal * 100) / 100} sq ft`,
        `${area + 10} sq ft`,
      ]),
      `Use A = πr²: A = 3.14 × ${rVal}² = 3.14 × ${rVal * rVal} = ${area} sq ft.`);
  }

  // d === 3: Area of a circle given diameter
  const dVal = 10;
  const rVal = dVal / 2; // 5
  const area = 3.14 * rVal * rVal; // 78.5
  return one('mc', [
    txt(`A circular fountain has a diameter of ${dVal} meters. What is the area of the fountain in square meters? (Use 3.14 for π)`),
    fig({ kind: 'circle', diameter: dVal }, `Circle with diameter ${dVal} meters`),
  ],
    mc(rng, `${area} m²`, [
      { text: `${3.14 * dVal * dVal} m²`, why: 'Used diameter squared instead of radius squared.' },
      `${3.14 * dVal} m²`,
      `${area * 2} m²`,
    ]),
    `First find the radius: r = ${dVal} ÷ 2 = ${rVal} meters. Then calculate area: A = πr² = 3.14 × ${rVal}² = 3.14 × ${rVal * rVal} = ${area} m².`);
};

// ---------- 7.9C area of composite figures ----------
export const compositeFiguresArea: Gen = (rng, d) => {
  if (d === 1) {
    // Rectangle + triangle on top
    const rectW = 8;
    const rectH = 5;
    const triH = 4;
    const rectArea = rectW * rectH; // 40
    const triArea = (rectW * triH) / 2; // 16
    const totalArea = rectArea + triArea; // 56
    return one('mc', [
      txt(`A sign is composed of a rectangle measuring ${rectW} inches by ${rectH} inches with a triangle on top that has a base of ${rectW} inches and a height of ${triH} inches. What is the total area of the sign?`),
    ],
      mc(rng, `${totalArea} sq in`, [
        `${rectArea + rectW * triH} sq in`,
        `${rectArea} sq in`,
        `${totalArea + 10} sq in`,
      ]),
      `Area of rectangle = ${rectW} × ${rectH} = ${rectArea} sq in. Area of triangle = {1/2} × ${rectW} × ${triH} = ${triArea} sq in. Total area = ${rectArea} + ${triArea} = ${totalArea} sq in.`);
  }

  if (d === 2) {
    // Rectangle with a semicircle on one end
    const w = 10;
    const h = 6;
    const rectArea = w * h; // 60
    // semicircle on width 6 -> radius 3: A = 0.5 * 3.14 * 9 = 14.13
    const semiArea = 14.13;
    const totalArea = Math.round((rectArea + semiArea) * 100) / 100;
    return one('mc', [
      txt(`A garden is designed as a rectangle of 10 feet by 6 feet with a semicircle attached to the 6-foot side (diameter = 6 feet, radius = 3 feet). What is the total area of the garden? (Use 3.14 for π)`),
    ],
      mc(rng, `${totalArea} sq ft`, [
        `${Math.round((rectArea + semiArea * 2) * 100) / 100} sq ft`,
        `${rectArea} sq ft`,
        `${totalArea + 12} sq ft`,
      ]),
      `Rectangle area: 10 × 6 = ${rectArea} sq ft. Semicircle area: {1/2} × 3.14 × 3² = 14.13 sq ft. Total area = ${rectArea} + 14.13 = ${totalArea} sq ft.`);
  }

  // d === 3: Subtracting a cutout (rectangle with square cutout)
  const outerL = 12;
  const outerW = 9;
  const cutout = 4;
  const total = outerL * outerW - cutout * cutout; // 108 - 16 = 92
  return one('mc', [
    txt(`A sheet of metal measures ${outerL} inches by ${outerW} inches. A square with side lengths of ${cutout} inches is cut out from the center. What is the remaining area of the metal sheet?`),
  ],
    mc(rng, `${total} sq in`, [
      `${outerL * outerW} sq in`,
      `${total - 10} sq in`,
      `${total + 16} sq in`,
    ]),
    `Area of whole sheet: ${outerL} × ${outerW} = ${outerL * outerW} sq in. Area of cutout: ${cutout} × ${cutout} = ${cutout * cutout} sq in. Remaining area: ${outerL * outerW} − ${cutout * cutout} = ${total} sq in.`);
};

// ---------- 7.9D lateral and total surface area from nets ----------
export const surfaceAreaNets: Gen = (rng, d) => {
  if (d === 1) {
    // Total surface area of a cube from net
    const s = pick(rng, [3, 4, 5]);
    const area = 6 * s * s;
    return one('mc', [
      txt(`The net of a cube consists of 6 congruent squares, each with a side length of ${s} cm. What is the total surface area of the cube?`),
    ],
      mc(rng, `${area} cm²`, [
        `${s * s * s} cm²`,
        `${4 * s * s} cm²`,
        `${area + 12} cm²`,
      ]),
      `Each square face has an area of ${s} × ${s} = ${s * s} cm². A cube has 6 faces: 6 × ${s * s} = ${area} cm².`);
  }

  if (d === 2) {
    // Lateral surface area vs total surface area
    const l = 5;
    const w = 4;
    const h = 6;
    const lateralArea = 2 * (l * h + w * h); // 2 * (30 + 24) = 108
    const baseArea = 2 * (l * w); // 40
    const totalArea = lateralArea + baseArea; // 148
    return one('mc', [
      txt(`A rectangular box has length 5 cm, width 4 cm, and height 6 cm. What is the lateral surface area of the box (the area of the 4 vertical sides, excluding the top and bottom bases)?`),
    ],
      mc(rng, `${lateralArea} cm²`, [
        { text: `${totalArea} cm²`, why: 'This is the total surface area including top and bottom bases.' },
        `${l * w * h} cm²`,
        `${lateralArea - 18} cm²`,
      ]),
      `Lateral area is the perimeter of the base times height: P = 2(5 + 4) = 18 cm. Lateral area = 18 × 6 = ${lateralArea} cm².`);
  }

  // d === 3: Surface area of a square pyramid net
  const baseSide = 8;
  const slantHeight = 10;
  const baseArea = baseSide * baseSide; // 64
  const triangleArea = 0.5 * baseSide * slantHeight; // 40
  const totalArea = baseArea + 4 * triangleArea; // 64 + 160 = 224
  return one('mc', [
    txt(`The net of a square pyramid has a square base with sides of ${baseSide} inches and 4 congruent triangular faces with base ${baseSide} inches and height ${slantHeight} inches. What is the total surface area of the pyramid?`),
  ],
    mc(rng, `${totalArea} sq in`, [
      { text: `${4 * triangleArea} sq in`, why: 'This is the lateral surface area, forgetting to add the base area.' },
      `${baseArea + triangleArea} sq in`,
      `${totalArea + 20} sq in`,
    ]),
    `Base area = ${baseSide}² = ${baseArea} sq in. Area of 4 triangular faces = 4 × ({1/2} × ${baseSide} × ${slantHeight}) = 4 × ${triangleArea} = ${4 * triangleArea} sq in. Total surface area = ${baseArea} + ${4 * triangleArea} = ${totalArea} sq in.`);
};

// ---------- 7.11C equations using angle relationships ----------
export const equationsAngleRelationships: Gen = (rng, d) => {
  if (d === 1) {
    // Complementary angles: x + a = 90
    const a = pick(rng, [25, 35, 45, 55, 65]);
    return one('mc', [
      txt(`Two angles are complementary. One angle measures ${a}°. Which equation can be used to find x, the measure of the other angle?`),
    ],
      mc(rng, `x + ${a} = 90`, [
        `x + ${a} = 180`,
        `x − ${a} = 90`,
        `x = 90 + ${a}`,
      ]),
      `Complementary angles have a sum of 90°. Therefore, x + ${a} = 90.`);
  }

  if (d === 2) {
    // Supplementary angles: 2x + b = 180
    const b = 60;
    const x = (180 - b) / 2; // 60
    return one('mc', [
      txt(`Two angles form a linear pair (supplementary). One angle measures ${b}° and the other angle measures 2x°. What is the value of x?`),
    ],
      mc(rng, `${x}`, [
        `${x + 15}`,
        `${180 - b}`,
        `${(90 - b) / 2}`,
      ]),
      `Supplementary angles sum to 180°: 2x + ${b} = 180. Subtract ${b}: 2x = 120. Divide by 2: x = ${x}.`);
  }

  // d === 3: Triangle angle sum with variable
  // x + 2x + 60 = 180 => 3x = 120 => x = 40
  return one('mc', [
    txt(`The angles of a triangle measure x°, 2x°, and 60°. What is the value of x?`),
  ],
    mc(rng, '40', [
      '30',
      '60',
      '50',
    ]),
    `The sum of angles in a triangle is 180°: x + 2x + 60 = 180. Combine like terms: 3x + 60 = 180. Subtract 60: 3x = 120. Divide by 3: x = 40.`);
};

export const STRAND3 = {
  '7.4E': [convertMeasurementSystems],
  '7.5A': [similarityAttributes],
  '7.5B': [piRatioDefinition],
  '7.5C': [scaleDrawings],
  '7.9A': [volumePrismsPyramids],
  '7.9B': [circleCircumferenceArea],
  '7.9C': [compositeFiguresArea],
  '7.9D': [surfaceAreaNets],
  '7.11C': [equationsAngleRelationships],
};
