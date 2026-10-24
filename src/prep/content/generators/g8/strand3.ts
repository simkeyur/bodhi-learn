// Strand 3: Geometry and Measurement (Grade 8)
// Standards: 8.3A, 8.3B, 8.3C, 8.6A, 8.6C, 8.7A, 8.7B, 8.7C, 8.7D, 8.8D, 8.10A, 8.10B, 8.10C, 8.10D
// Pure: no React or browser APIs.

import type { Gen } from '../build.ts';
import { mc, one, txt, fig } from '../build.ts';
import { randInt, pick } from '../../rng.ts';

export const G8_STRAND3: Record<string, Gen[]> = {
  // 8.3A: Proportions of similar shapes and dilations
  '8.3A': [
    (rng, diff) => {
      const k = pick(rng, [1.5, 2, 2.5, 3, 4]);
      const s1 = randInt(rng, 4, 8);
      const s2 = s1 * k;

      if (diff === 1) {
        return one(
          'mc',
          [
            txt(`Triangle ABC is similar to Triangle DEF. Side AB corresponds to side DE. If AB = ${s1} cm and DE = ${s2} cm, what is the scale factor from Triangle ABC to Triangle DEF?`),
          ],
          mc(rng, `${k}`, [`${k + 1}`, `${(s2 - s1)}`, `${(1 / k).toFixed(2)}`]),
          `The scale factor is the ratio of corresponding side lengths: DE / AB = ${s2} / ${s1} = ${k}.`,
        );
      }

      if (diff === 2) {
        const sideA = 6;
        const sideB = 10;
        const sideC = 15;
        // sideA / sideB = sideC / x => x = 10 * 15 / 6 = 25
        const ans = (sideB * sideC) / sideA;
        return one(
          'mc',
          [
            txt(`Rectangle JKLM is similar to Rectangle PQRS. Side JK = ${sideA} inches and side KL = ${sideB} inches. In Rectangle PQRS, side PQ = ${sideC} inches.`),
            txt('What is the length of side QR in inches?'),
          ],
          mc(rng, `${ans} inches`, [`${ans - 5} inches`, `${ans + 4} inches`, `${sideC + 4} inches`]),
          `Set up a proportion of corresponding sides: JK / KL = PQ / QR => ${sideA} / ${sideB} = ${sideC} / QR => QR = (${sideB} × ${sideC}) / ${sideA} = ${ans} inches.`,
        );
      }

      // diff 3
      return one(
        'mc',
        [
          txt('Which statement is always true about two similar figures?'),
        ],
        mc(
          rng,
          'Corresponding angle measures are equal, and corresponding side lengths are proportional.',
          [
            'Corresponding side lengths and corresponding angle measures are both equal.',
            'The perimeter of both figures is the same.',
            'Corresponding side lengths are equal, and angle measures are proportional.',
          ],
        ),
        'In similar figures, angles are preserved (congruent) and side lengths are in proportion (scaled by a constant ratio).',
      );
    },
  ],

  // 8.3B: Attributes of dilations on coordinate plane
  '8.3B': [
    (rng, diff) => {
      if (diff === 1) {
        return one(
          'mc',
          [
            txt('A triangle is dilated by a scale factor of 2.5 on a coordinate plane with the origin as the center of dilation.'),
            txt('Which statement describes the relationship between the original triangle and its dilation?'),
          ],
          mc(
            rng,
            'The new triangle is similar to the original triangle with proportional side lengths and congruent angles.',
            [
              'The new triangle is congruent to the original triangle with identical side lengths.',
              'The new triangle has angle measures that are 2.5 times larger than the original.',
              'The new triangle is in a different quadrant and has no geometric relationship.',
            ],
          ),
          'A dilation creates a similar figure: angle measures stay congruent, while side lengths are multiplied by the scale factor.',
        );
      }

      if (diff === 2) {
        return one(
          'mc',
          [
            txt('When a polygon is dilated with a scale factor between 0 and 1 (such as 1/2), what happens to the size of the image?'),
          ],
          mc(
            rng,
            'The image is a reduction and is smaller than the original figure.',
            [
              'The image is an enlargement and is larger than the original figure.',
              'The image remains the exact same size as the original figure.',
              'The image is reflected across the x-axis.',
            ],
          ),
          'A scale factor 0 < k < 1 produces a reduction (smaller image). A scale factor k > 1 produces an enlargement.',
        );
      }

      // diff 3
      return one(
        'mc',
        [
          txt('Triangle XYZ has angles measuring 35°, 65°, and 80°. Triangle XYZ is dilated with scale factor 3. What are the angle measures of the dilated triangle?'),
        ],
        mc(
          rng,
          '35°, 65°, and 80°',
          [
            '105°, 195°, and 240°',
            '11.7°, 21.7°, and 26.7°',
            '70°, 130°, and 160°',
          ],
        ),
        'Dilations preserve angle measures. Even though side lengths triple, the angles remain 35°, 65°, and 80° because the triangles are similar.',
      );
    },
  ],

  // 8.3C: Algebraic representation of dilations: (x, y) -> (kx, ky)
  '8.3C': [
    (rng, diff) => {
      const k = pick(rng, [2, 3, 4, 0.5, 0.25, 1.5]);
      const kStr = typeof k === 'number' && k < 1 ? (k === 0.5 ? '{1/2}' : '{1/4}') : `${k}`;

      if (diff === 1) {
        return one(
          'mc',
          [
            txt(`A figure on a coordinate plane is dilated with the origin as the center of dilation using a scale factor of ${kStr}.`),
            txt('Which algebraic representation describes this transformation?'),
          ],
          mc(
            rng,
            `(x, y) → (${kStr}x, ${kStr}y)`,
            [
              `(x, y) → (x + ${kStr}, y + ${kStr})`,
              `(x, y) → (${kStr}x, y)`,
              `(x, y) → (x, ${kStr}y)`,
            ],
          ),
          `A dilation centered at the origin multiplies both coordinates by the scale factor: (x, y) → (kx, ky).`,
        );
      }

      if (diff === 2) {
        const x = randInt(rng, 2, 6) * 2;
        const y = randInt(rng, 2, 6) * 2;
        const factor = 0.5;
        const newX = x * factor;
        const newY = y * factor;
        return one(
          'mc',
          [
            txt(`Point A is located at (${x}, ${y}). The point is dilated by the rule (x, y) → ({1/2}x, {1/2}y).`),
            txt("What are the coordinates of the image point A'?"),
          ],
          mc(rng, `(${newX}, ${newY})`, [`(${x + 0.5}, ${y + 0.5})`, `(${x * 2}, ${y * 2})`, `(${x}, ${newY})`]),
          `Multiply each coordinate by 1/2: (${x} × 0.5, ${y} × 0.5) = (${newX}, ${newY}).`,
        );
      }

      // diff 3
      const orig = { x: 3, y: 5 };
      const img = { x: 12, y: 20 };
      const foundK = img.x / orig.x; // 4
      return one(
        'mc',
        [
          txt(`A triangle vertex at (${orig.x}, ${orig.y}) is dilated to (${img.x}, ${img.y}) with the origin as the center.`),
          txt('Which rule represents this dilation?'),
        ],
        mc(rng, `(x, y) → (${foundK}x, ${foundK}y)`, [`(x, y) → (x + 9, y + 15)`, `(x, y) → (${foundK}x, y)`, `(x, y) → ({1/4}x, {1/4}y)`]),
        `Scale factor k = ${img.x} / ${orig.x} = ${img.y} / ${orig.y} = ${foundK}. The rule is (x, y) → (${foundK}x, ${foundK}y).`,
      );
    },
  ],

  // 8.6A: Describe volume formula V = Bh of cylinder
  '8.6A': [
    (rng, diff) => {
      const r = randInt(rng, 3, 8);
      const h = randInt(rng, 5, 14);
      const B = Math.round(Math.PI * r * r * 10) / 10;

      if (diff === 1) {
        return one(
          'mc',
          [
            txt('In the volume formula for a cylinder, **V = Bh**, what does **B** represent?'),
          ],
          mc(
            rng,
            'The area of the circular base (B = πr²)',
            [
              'The diameter of the base',
              'The circumference of the circular base',
              'The height of the cylinder',
            ],
          ),
          'In V = Bh, B stands for the area of the base. For a cylinder with a circular base, B = πr².',
        );
      }

      if (diff === 2) {
        return one(
          'mc',
          [
            txt(`A cylinder has a base with area B = ${B} cm² and a height of ${h} cm.`),
            txt('Which equation gives the volume of this cylinder?'),
          ],
          mc(
            rng,
            `V = ${B} × ${h} = ${Math.round(B * h * 10) / 10} cm³`,
            [
              `V = ${B} + ${h} = ${Math.round((B + h) * 10) / 10} cm³`,
              `V = ({1/3}) × ${B} × ${h} = ${Math.round(((B * h) / 3) * 10) / 10} cm³`,
              `V = 2 × ${B} × ${h} = ${Math.round(2 * B * h * 10) / 10} cm³`,
            ],
          ),
          `The volume of any cylinder is V = Bh = base area × height = ${B} × ${h}.`,
        );
      }

      // diff 3
      return one(
        'mc',
        [
          txt('Which formula is equivalent to V = Bh for finding the volume of a cylinder with radius r and height h?'),
        ],
        mc(rng, 'V = πr²h', ['V = 2πrh', 'V = {1/3}πr²h', 'V = {4/3}πr³']),
        'Since the base of a cylinder is a circle with area B = πr², substituting into V = Bh gives V = πr²h.',
      );
    },
  ],

  // 8.6C: Use models/diagrams to explain Pythagorean theorem
  '8.6C': [
    (rng, diff) => {
      const triple = pick(rng, [
        { a: 3, b: 4, c: 5 },
        { a: 6, b: 8, c: 10 },
        { a: 5, b: 12, c: 13 },
      ]);
      const sqA = triple.a ** 2;
      const sqB = triple.b ** 2;
      const sqC = triple.c ** 2;

      if (diff === 1) {
        return one(
          'mc',
          [
            txt(`Three squares are joined at their vertices to form a right triangle. The areas of the two smaller squares are **${sqA} cm²** and **${sqB} cm²**.`),
            txt('What is the area of the largest square attached to the hypotenuse?'),
          ],
          mc(rng, `${sqC} cm²`, [`${sqA + sqB + 10} cm²`, `${sqC * 2} cm²`, `${triple.a + triple.b} cm²`]),
          `By the Pythagorean theorem, the sum of the areas of the squares on the legs equals the area of the square on the hypotenuse: ${sqA} + ${sqB} = ${sqC} cm².`,
        );
      }

      if (diff === 2) {
        return one(
          'mc',
          [
            txt(`A right triangle has squares built on each of its three sides. The square on the hypotenuse has an area of ${sqC} in², and the square on one leg has an area of ${sqA} in².`),
            txt('What is the area of the square on the other leg?'),
          ],
          mc(rng, `${sqB} in²`, [`${sqC + sqA} in²`, `${Math.round(Math.sqrt(sqB))} in²`, `${sqB + 5} in²`]),
          `Area of second square = ${sqC} − ${sqA} = ${sqB} in².`,
        );
      }

      // diff 3
      return one(
        'mc',
        [
          txt('Which equation models the geometric relationship between the areas of squares drawn on each side of a right triangle with legs a, b and hypotenuse c?'),
        ],
        mc(rng, 'a² + b² = c²', ['a + b = c', 'a² + b² = 2c', '(a + b)² = c²']),
        'The Pythagorean theorem states that the area of the square on hypotenuse c (c²) equals the sum of the areas of the squares on legs a and b (a² + b²).',
      );
    },
  ],

  // 8.7A: Volume of cylinders, cones, and spheres
  '8.7A': [
    (rng, diff) => {
      if (diff === 1) {
        // Cylinder volume V = πr²h
        const r = randInt(rng, 3, 6);
        const h = randInt(rng, 5, 10);
        const vol = Math.round(3.14 * r * r * h * 10) / 10;
        return one(
          'mc',
          [
            txt(`A cylinder has a radius of ${r} cm and a height of ${h} cm. Using 3.14 for π, what is the volume of the cylinder?`),
          ],
          mc(rng, `${vol} cm³`, [`${Math.round(vol * 0.4 * 10) / 10} cm³`, `${Math.round(vol * 2.2 * 10) / 10} cm³`, `${Math.round((vol + 150) * 10) / 10} cm³`]),
          `V = πr²h ≈ 3.14 × ${r}² × ${h} = 3.14 × ${r * r} × ${h} = ${vol} cm³.`,
        );
      }

      if (diff === 2) {
        // Cone volume V = (1/3)πr²h
        const r = randInt(rng, 3, 6);
        const h = 3 * randInt(rng, 2, 5); // divisible by 3
        const vol = Math.round((1 / 3) * 3.14 * r * r * h * 10) / 10;
        return one(
          'mc',
          [
            txt(`A cone has a radius of ${r} inches and a height of ${h} inches. Using 3.14 for π, what is the volume of the cone to the nearest tenth?`),
          ],
          mc(rng, `${vol} in³`, [`${Math.round(vol * 3.1 * 10) / 10} in³`, `${Math.round(vol * 0.5 * 10) / 10} in³`, `${Math.round((vol + 80) * 10) / 10} in³`]),
          `V = {1/3}πr²h ≈ (1/3) × 3.14 × ${r * r} × ${h} = ${vol} in³.`,
        );
      }

      // diff 3: Sphere volume V = (4/3)πr³
      const r = 3 * randInt(rng, 1, 3);
      const vol = Math.round((4 / 3) * 3.14 * r ** 3 * 10) / 10;
      return one(
        'mc',
        [
          txt(`A spherical ball has a radius of ${r} cm. What is the approximate volume of the sphere? (Use π ≈ 3.14)`),
        ],
        mc(rng, `${vol} cm³`, [`${Math.round(vol * 0.6 * 10) / 10} cm³`, `${Math.round(vol * 1.5 * 10) / 10} cm³`, `${Math.round((vol + 120) * 10) / 10} cm³`]),
        `V = {4/3}πr³ ≈ (4/3) × 3.14 × ${r ** 3} = ${vol} cm³.`,
      );
    },
  ],

  // 8.7B: Lateral and total surface area of prisms and cylinders
  '8.7B': [
    (rng, diff) => {
      if (diff === 1) {
        // Rectangular prism total surface area
        const l = randInt(rng, 4, 8);
        const w = randInt(rng, 3, 5);
        const h = randInt(rng, 6, 10);
        const Ph = 2 * (l + w) * h; // lateral
        const total = Ph + 2 * (l * w);
        return one(
          'mc',
          [
            txt(`A rectangular box has length ${l} cm, width ${w} cm, and height ${h} cm.`),
            txt('What is the **total surface area** of the box in square centimeters?'),
          ],
          mc(rng, `${total} cm²`, [`${Ph} cm²`, `${l * w * h} cm²`, `${total + 24} cm²`]),
          `Total surface area = Ph + 2B. Perimeter P = 2(${l} + ${w}) = ${2 * (l + w)}. Base area B = ${l * w}. Total SA = ${2 * (l + w)} × ${h} + 2(${l * w}) = ${total} cm².`,
        );
      }

      if (diff === 2) {
        // Lateral surface area of cylinder: S_lat = 2πrh
        const r = randInt(rng, 3, 6);
        const h = randInt(rng, 8, 14);
        const latSA = Math.round(2 * 3.14 * r * h * 10) / 10;
        return one(
          'mc',
          [
            txt(`A cylindrical can has a radius of ${r} inches and a height of ${h} inches.`),
            txt('What is the **lateral surface area** (the label area around the side) to the nearest tenth? (Use π ≈ 3.14)'),
          ],
          mc(rng, `${latSA} in²`, [`${Math.round((latSA + 75) * 10) / 10} in²`, `${Math.round(latSA * 1.6 * 10) / 10} in²`, `${Math.round(latSA * 0.4 * 10) / 10} in²`]),
          `Lateral surface area of a cylinder = 2πrh ≈ 2 × 3.14 × ${r} × ${h} = ${latSA} in².`,
        );
      }

      // diff 3: Cylinder total surface area
      const r = randInt(rng, 2, 5);
      const h = randInt(rng, 5, 10);
      const lat = 2 * 3.14 * r * h;
      const base2 = 2 * 3.14 * r * r;
      const totalSA = Math.round((lat + base2) * 10) / 10;
      return one(
        'mc',
        [
          txt(`A cylinder has radius ${r} cm and height ${h} cm. What is the **total surface area** of the cylinder? (Use π ≈ 3.14)`),
        ],
        mc(rng, `${totalSA} cm²`, [`${Math.round(totalSA * 0.6 * 10) / 10} cm²`, `${Math.round((totalSA + 55) * 10) / 10} cm²`, `${Math.round(totalSA * 1.4 * 10) / 10} cm²`]),
        `Total SA = 2πrh + 2πr² ≈ 2(3.14)(${r})(${h}) + 2(3.14)(${r}²) = ${Math.round(lat * 10) / 10} + ${Math.round(base2 * 10) / 10} = ${totalSA} cm².`,
      );
    },
  ],

  // 8.7C: Pythagorean theorem and its converse
  '8.7C': [
    (rng, diff) => {
      const triple = pick(rng, [
        { a: 3, b: 4, c: 5 },
        { a: 6, b: 8, c: 10 },
        { a: 5, b: 12, c: 13 },
        { a: 8, b: 15, c: 17 },
        { a: 9, b: 12, c: 15 },
      ]);

      if (diff === 1) {
        return one(
          'mc',
          [
            fig({ kind: 'rightTriangle', a: triple.a, b: triple.b, showC: false }, `Right triangle with legs ${triple.a} and ${triple.b}`),
            txt(`In the right triangle shown, the legs have lengths of ${triple.a} cm and ${triple.b} cm. What is the length of the hypotenuse?`),
          ],
          mc(rng, `${triple.c} cm`, [`${triple.a + triple.b} cm`, `${triple.c + 3} cm`, `${triple.c * 2} cm`]),
          `c = √(a² + b²) = √(${triple.a}² + ${triple.b}²) = √(${triple.a ** 2} + ${triple.b ** 2}) = √${triple.c ** 2} = ${triple.c} cm.`,
        );
      }

      if (diff === 2) {
        // Find a missing leg
        return one(
          'mc',
          [
            txt(`A right triangle has a hypotenuse of ${triple.c} inches and one leg measuring ${triple.a} inches. What is the length of the other leg?`),
          ],
          mc(rng, `${triple.b} inches`, [`${triple.c - triple.a} inches`, `${triple.b + 4} inches`, `${triple.c + 2} inches`]),
          `b = √(c² − a²) = √(${triple.c}² − ${triple.a}²) = √(${triple.c ** 2} − ${triple.a ** 2}) = √${triple.b ** 2} = ${triple.b} inches.`,
        );
      }

      // diff 3: converse of Pythagorean theorem
      const setTrue = `${triple.a}, ${triple.b}, ${triple.c}`;
      return one(
        'mc',
        [
          txt('Which set of three side lengths forms a **right triangle**?'),
        ],
        mc(
          rng,
          `${setTrue}`,
          [
            `${triple.a}, ${triple.b}, ${triple.c + 1}`,
            `${triple.a + 1}, ${triple.b + 1}, ${triple.c + 3}`,
            `4, 7, 9`,
          ],
        ),
        `By the converse of the Pythagorean theorem, a triangle is a right triangle if a² + b² = c². For ${triple.a}, ${triple.b}, ${triple.c}: ${triple.a}² + ${triple.b}² = ${triple.a ** 2 + triple.b ** 2} = ${triple.c}².`,
      );
    },
  ],

  // 8.7D: Distance between two points on coordinate plane
  '8.7D': [
    (rng, diff) => {
      // Choose points with integer distance (Pythagorean triple)
      const triple = pick(rng, [
        { dx: 3, dy: 4, dist: 5 },
        { dx: 6, dy: 8, dist: 10 },
        { dx: 5, dy: 12, dist: 13 },
      ]);
      const x1 = randInt(rng, 1, 4);
      const y1 = randInt(rng, 1, 4);
      const x2 = x1 + triple.dx;
      const y2 = y1 + triple.dy;

      if (diff === 1) {
        return one(
          'mc',
          [
            txt(`What is the distance between point A(${x1}, ${y1}) and point B(${x2}, ${y2}) on a coordinate plane?`),
          ],
          mc(rng, `${triple.dist} units`, [`${triple.dx + triple.dy} units`, `${triple.dist + 3} units`, `${triple.dist * 2} units`]),
          `Use d = √((x₂ − x₁)² + (y₂ − y₁)²): d = √(${triple.dx}² + ${triple.dy}²) = √(${triple.dx ** 2 + triple.dy ** 2}) = ${triple.dist} units.`,
        );
      }

      if (diff === 2) {
        return one(
          'mc',
          [
            txt(`Points P(1, 2) and Q(4, 6) are graphed on a grid. What is the length of segment PQ?`),
          ],
          mc(rng, '5 units', ['7 units', '6 units', '25 units']),
          'dx = 4 − 1 = 3, dy = 6 − 2 = 4. Distance = √(3² + 4²) = √(9 + 16) = √25 = 5 units.',
        );
      }

      // diff 3: real-world context
      return one(
        'mc',
        [
          txt(`A map grid has a school at (${x1}, ${y1}) and a park at (${x2}, ${y2}), where each grid unit represents 1 mile.`),
          txt('What is the straight-line distance between the school and the park?'),
        ],
        mc(rng, `${triple.dist} miles`, [`${triple.dx + triple.dy} miles`, `${triple.dist + 3} miles`, `${triple.dist * 2} miles`]),
        `Straight-line distance is hypotenuse of right triangle with horizontal distance ${triple.dx} and vertical distance ${triple.dy}: d = √(${triple.dx}² + ${triple.dy}²) = ${triple.dist} miles.`,
      );
    },
  ],

  // 8.8D: Triangle angle sum, exterior angle, transversals, AA similarity
  '8.8D': [
    (rng, diff) => {
      if (diff === 1) {
        // Triangle angle sum: 180 degrees
        const a1 = randInt(rng, 40, 70);
        const a2 = randInt(rng, 40, 70);
        const a3 = 180 - a1 - a2;
        return one(
          'mc',
          [
            txt(`Two angles in a triangle measure **${a1}°** and **${a2}°**. What is the measure of the third angle?`),
          ],
          mc(rng, `${a3}°`, [`${a3 + 12}°`, `${a3 - 12}°`, `${180 - a1}°`]),
          `The sum of the angles in any triangle is 180°. Third angle = 180° − (${a1}° + ${a2}°) = ${a3}°.`,
        );
      }

      if (diff === 2) {
        // Exterior angle theorem: exterior = sum of remote interior
        const a1 = randInt(rng, 35, 65);
        const a2 = randInt(rng, 45, 75);
        const ext = a1 + a2;
        return one(
          'mc',
          [
            txt(`In a triangle, the two remote interior angles measure **${a1}°** and **${a2}°**.`),
            txt('What is the measure of the corresponding exterior angle?'),
          ],
          mc(rng, `${ext}°`, [`${180 - ext}°`, `${ext + 15}°`, `${180 - a1}°`]),
          `The exterior angle theorem states that the measure of an exterior angle of a triangle equals the sum of the two remote interior angles: ${a1}° + ${a2}° = ${ext}°.`,
        );
      }

      // diff 3: parallel lines cut by transversal
      const angle = randInt(rng, 50, 75);
      const supp = 180 - angle;
      return one(
        'mc',
        [
          txt(`Two parallel lines are cut by a transversal line. One of the interior angles measures **${angle}°**.`),
          txt('What is the measure of the consecutive (same-side) interior angle?'),
        ],
        mc(rng, `${supp}°`, [`${angle}°`, `${supp + 10}°`, `${90}°`]),
        `Consecutive (same-side) interior angles are supplementary (their sum is 180°). Thus, 180° − ${angle}° = ${supp}°.`,
      );
    },
  ],

  // 8.10A: Transformations: orientation & congruence
  '8.10A': [
    (rng, diff) => {
      if (diff === 1) {
        return one(
          'mc',
          [
            txt('Which transformation changes the **orientation** of the vertices of a two-dimensional figure on a coordinate plane?'),
          ],
          mc(
            rng,
            'Reflection',
            ['Translation', 'Rotation', 'Dilation'],
          ),
          'A reflection flips a figure over a line, reversing the clockwise/counterclockwise order (orientation) of its vertices.',
        );
      }

      if (diff === 2) {
        return one(
          'mc',
          [
            txt('Which transformations **preserve congruence** (size and shape remain identical)?'),
          ],
          mc(
            rng,
            'Translations, reflections, and rotations only',
            [
              'Dilations only',
              'Translations and dilations only',
              'All transformations including dilations',
            ],
          ),
          'Translations, reflections, and rotations are rigid motions (isometries) that preserve congruence. Dilations change size, creating similar figures.',
        );
      }

      // diff 3
      return one(
        'mc',
        [
          txt('A rectangle is rotated 90° clockwise about the origin. Which statement about the image is true?'),
        ],
        mc(
          rng,
          'The image is congruent to the original rectangle, and corresponding side lengths are equal.',
          [
            'The image has an area 4 times larger than the original.',
            'The image is similar but not congruent to the original.',
            'The perimeter of the image is halved.',
          ],
        ),
        'Rotations are rigid motions: they preserve angle measures, side lengths, perimeter, and area. The figure remains congruent.',
      );
    },
  ],

  // 8.10B: Congruence-preserving transformations
  '8.10B': [
    (rng, diff) => {
      const items = [
        { trans: 'Translated 5 units left and 3 units up', preserves: true },
        { trans: 'Dilated by a scale factor of 3', preserves: false },
        { trans: 'Reflected across the y-axis', preserves: true },
        { trans: 'Rotated 180° about the origin', preserves: true },
      ];
      const c = pick(rng, items);

      if (diff === 1) {
        return one(
          'mc',
          [
            txt(`Figure A is transformed to Figure B by the following rule: "${c.trans}".`),
            txt('Does this transformation produce a figure that is congruent to Figure A?'),
          ],
          mc(
            rng,
            c.preserves ? 'Yes, because rigid transformations preserve size and shape.' : 'No, because a dilation changes the size of the figure.',
            [
              c.preserves ? 'No, because the position has changed.' : 'Yes, because the angles remain the same.',
              'Only if the figure is a square.',
              'Cannot be determined without coordinates.',
            ],
          ),
          c.preserves ? 'Translations, reflections, and rotations preserve congruence.' : 'Dilations with scale factor k ≠ 1 change side lengths, so figures are similar but not congruent.',
        );
      }

      if (diff === 2) {
        return one(
          'mc',
          [
            txt('Which transformation will result in an image that is NOT congruent to the pre-image?'),
          ],
          mc(
            rng,
            '(x, y) → (2x, 2y)',
            ['(x, y) → (x + 4, y − 2)', '(x, y) → (−x, y)', '(x, y) → (−y, x)'],
          ),
          '(x, y) → (2x, 2y) is a dilation with scale factor 2, which doubles all side lengths and does not preserve congruence.',
        );
      }

      // diff 3
      return one(
        'mc',
        [
          txt('Which set of transformations preserves BOTH angle measures and side lengths?'),
        ],
        mc(
          rng,
          'Translation, reflection, rotation',
          [
            'Translation, reflection, dilation',
            'Dilation, rotation, stretch',
            'Dilation only',
          ],
        ),
        'The three rigid motions are translation, reflection, and rotation. They preserve both angle measures and side lengths.',
      );
    },
  ],

  // 8.10C: Algebraic representation of transformations
  '8.10C': [
    (rng, diff) => {
      if (diff === 1) {
        // Translation
        const dx = randInt(rng, 2, 5);
        const dy = randInt(rng, 2, 5);
        return one(
          'mc',
          [
            txt(`A trapezoid is translated **${dx} units to the right** and **${dy} units down**.`),
            txt('Which algebraic representation represents this translation?'),
          ],
          mc(
            rng,
            `(x, y) → (x + ${dx}, y − ${dy})`,
            [
              `(x, y) → (x − ${dx}, y + ${dy})`,
              `(x, y) → (${dx}x, −${dy}y)`,
              `(x, y) → (x + ${dx + 1}, y − ${dy})`,
            ],
          ),
          `Moving right adds to x: x + ${dx}. Moving down subtracts from y: y − ${dy}. The rule is (x, y) → (x + ${dx}, y − ${dy}).`,
        );
      }

      if (diff === 2) {
        // Reflection across axes
        const axis = pick(rng, ['x-axis', 'y-axis']);
        const rule = axis === 'x-axis' ? '(x, y) → (x, −y)' : '(x, y) → (−x, y)';
        const wrong = axis === 'x-axis' ? ['(x, y) → (−x, y)', '(x, y) → (−x, −y)', '(x, y) → (y, x)'] : ['(x, y) → (x, −y)', '(x, y) → (−x, −y)', '(x, y) → (y, x)'];
        return one(
          'mc',
          [
            txt(`A triangle is reflected across the **${axis}** on a coordinate plane.`),
            txt('Which algebraic representation describes this transformation?'),
          ],
          mc(rng, rule, wrong),
          `Reflecting across the ${axis}: ${axis === 'x-axis' ? 'the x-coordinate stays the same and the y-coordinate changes sign: (x, −y)' : 'the y-coordinate stays the same and the x-coordinate changes sign: (−x, y)'}.`,
        );
      }

      // diff 3: Rotation (90, 180, 270)
      const rot = pick(rng, [
        { deg: '180° rotation about the origin', rule: '(x, y) → (−x, −y)', wrong: ['(x, y) → (y, −x)', '(x, y) → (−y, x)', '(x, y) → (x, −y)'] },
        { deg: '90° clockwise rotation about the origin', rule: '(x, y) → (y, −x)', wrong: ['(x, y) → (−y, x)', '(x, y) → (−x, −y)', '(x, y) → (−x, y)'] },
        { deg: '90° counterclockwise rotation about the origin', rule: '(x, y) → (−y, x)', wrong: ['(x, y) → (y, −x)', '(x, y) → (−x, −y)', '(x, y) → (x, −y)'] },
      ]);
      return one(
        'mc',
        [
          txt(`Which rule algebraically describes a **${rot.deg}**?`),
        ],
        mc(rng, rot.rule, rot.wrong),
        `Standard rotation rule: for a ${rot.deg}, the mapping is ${rot.rule}.`,
      );
    },
  ],

  // 8.10D: Dilations: effect on perimeter and area
  '8.10D': [
    (rng, diff) => {
      const k = pick(rng, [2, 3, 4, 5]);
      const pOrig = randInt(rng, 10, 24);
      const aOrig = randInt(rng, 12, 30);

      if (diff === 1) {
        // Effect on perimeter: multiplied by k
        const pNew = pOrig * k;
        return one(
          'mc',
          [
            txt(`A polygon with a perimeter of ${pOrig} cm is dilated by a scale factor of ${k}.`),
            txt('What is the perimeter of the dilated polygon?'),
          ],
          mc(rng, `${pNew} cm`, [`${pOrig * k * k} cm`, `${pOrig + k} cm`, `${pOrig} cm`]),
          `When a figure is dilated by scale factor k, all linear measurements (including perimeter) are multiplied by k: ${pOrig} × ${k} = ${pNew} cm.`,
        );
      }

      if (diff === 2) {
        // Effect on area: multiplied by k²
        const aNew = aOrig * k * k;
        return one(
          'mc',
          [
            txt(`A rectangle has an area of ${aOrig} square inches. If the rectangle is dilated by a scale factor of ${k}, what is the area of the new rectangle?`),
          ],
          mc(rng, `${aNew} sq in`, [`${aOrig * k} sq in`, `${aOrig + k * k} sq in`, `${aOrig * 2} sq in`]),
          `When a 2D shape is dilated by scale factor k, its area is multiplied by k²: ${aOrig} × ${k}² = ${aOrig} × ${k * k} = ${aNew} sq in.`,
        );
      }

      // diff 3: reduction
      const redK = 0.5;
      const redArea = 48;
      const newArea = redArea * (redK * redK); // 12
      return one(
        'mc',
        [
          txt(`A triangle has an area of ${redArea} square feet. If it is dilated by a scale factor of {1/2}, what is the area of the resulting triangle?`),
        ],
        mc(rng, `${newArea} sq ft`, [`${redArea * redK} sq ft`, `${redArea / 8} sq ft`, `${redArea - 12} sq ft`]),
        `Area scales by k²: ({1/2})² = 1/4. New area = ${redArea} × {1/4} = ${newArea} sq ft.`,
      );
    },
  ],
};
