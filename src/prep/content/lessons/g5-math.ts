// Walkthroughs for the 36 grade 5 math skills, written to the TEKS wording in data/standards/g5-math.ts.
// Kept short: a goal, the key words, and two to four big ideas. A test checks every skill has one.

import type { Lesson } from '../types.ts';

export const G5_MATH_LESSONS: Lesson[] = [
  // ----- Strand 1: numbers and place value -----
  {
    code: '5.2A',
    goal: 'See what each digit in a decimal is worth, and write decimals in expanded form.',
    words: [
      { term: 'tenths', meaning: '1 of 10 equal parts of a whole: 0.1' },
      { term: 'hundredths', meaning: '1 of 100 equal parts: 0.01' },
      { term: 'thousandths', meaning: '1 of 1,000 equal parts: 0.001' },
      { term: 'expanded form', meaning: 'a number written as the sum of what each digit is worth' },
    ],
    ideas: [
      { title: 'Each place is worth 10 times less as you move right', text: 'Ones, then tenths, hundredths and thousandths. In 3.472, the 4 means 4 tenths, the 7 means 7 hundredths and the 2 means 2 thousandths.', example: '3.472 = 3 + 0.4 + 0.07 + 0.002' },
      { title: 'A zero holds a place', text: 'In 6.205 the 0 says there are no hundredths. Leave it out of the expanded form, but keep the other digits in their places.', example: '6.205 = 6 + 0.2 + 0.005' },
      { title: 'See it on hundred grids', text: 'A full grid is 1. One column is a tenth, and one small square is a hundredth.', figure: { kind: 'decimalGrids', hundredths: 134 }, alt: 'One full hundred grid and 34 squares of a second grid, showing 1.34.' },
    ],
  },
  {
    code: '5.2B',
    goal: 'Decide which of two decimals is greater, and put decimals in order.',
    words: [
      { term: '>', meaning: 'is greater than' },
      { term: '<', meaning: 'is less than' },
      { term: '=', meaning: 'is equal to' },
    ],
    ideas: [
      { title: 'Line up the decimal points', text: 'Write the numbers so the points line up, then compare digit by digit from the left. The first place that is different decides.', example: '7.48 vs 7.52 → 4 tenths < 5 tenths, so 7.48 < 7.52' },
      { title: 'More digits does not mean bigger', text: '4.305 has more digits than 4.35, but it is smaller. Add zeros so both have the same number of places.', example: '4.350 > 4.305' },
      { title: 'Use a number line', text: 'Numbers further right on a number line are greater.', figure: { kind: 'numberLine', from: 4.3, to: 4.4, step: 0.01, decimals: 2, point: 4.35 }, alt: 'A number line from 4.3 to 4.4 in hundredths with a point at 4.35.' },
    ],
  },
  {
    code: '5.2C',
    goal: 'Round a decimal to the nearest tenth or hundredth.',
    words: [
      { term: 'round', meaning: 'change a number to a nearby, simpler one' },
      { term: 'nearest tenth', meaning: 'one digit after the decimal point' },
      { term: 'nearest hundredth', meaning: 'two digits after the decimal point' },
    ],
    ideas: [
      { title: 'Find the place you are rounding to', text: 'Rounding to the nearest tenth? Look at the tenths digit. That digit either stays or goes up by one.' },
      { title: 'Look one place to the right', text: '5 or more rounds up. 4 or less keeps the digit the same.', example: '3.47 → 3.5      3.43 → 3.4', figure: { kind: 'numberLine', from: 3.4, to: 3.5, step: 0.01, decimals: 2, point: 3.47 }, alt: 'A number line from 3.4 to 3.5 with a point at 3.47, closer to 3.5.' },
      { title: 'Watch for nines', text: 'When a 9 rounds up, it rolls over into the next place.', example: '3.96 to the nearest tenth → 4.0' },
    ],
  },
  {
    code: '5.4A',
    goal: 'Tell prime numbers from composite numbers.',
    words: [
      { term: 'factor', meaning: 'a number that divides another with no remainder' },
      { term: 'prime', meaning: 'has exactly two factors: 1 and itself' },
      { term: 'composite', meaning: 'has more than two factors' },
    ],
    ideas: [
      { title: 'Prime: exactly two factors', text: '7 can only be made as 1 × 7, so 7 is prime. 2 is the only even prime.' },
      { title: 'Composite: more than two factors', text: '12 can be made several ways, so it is composite.', example: '12 = 1 × 12 = 2 × 6 = 3 × 4' },
      { title: 'Odd numbers can be composite', text: 'Try dividing by 3, 5 and 7 before you decide. (1 is neither prime nor composite.)', example: '21 = 3 × 7      51 = 3 × 17' },
    ],
  },
  {
    code: '5.4E',
    goal: 'Read what parentheses ( ) and brackets [ ] tell you to do first.',
    words: [
      { term: 'expression', meaning: 'numbers and operations, like 3 × (8 + 2)' },
      { term: 'parentheses', meaning: '( ) show what to do first' },
      { term: 'brackets', meaning: '[ ] group a part that already has parentheses' },
    ],
    ideas: [
      { title: 'Grouping symbols go first', text: 'In 3 × (8 + 2), add 8 and 2 first, then multiply by 3.' },
      { title: 'Brackets hold parentheses', text: 'Work from the inside out: parentheses, then brackets, then the rest.', example: '[(12 − 4) × 2] + 5' },
      { title: 'Words become expressions', text: 'The step you do first goes inside the parentheses.', example: '"Add 4 and 6, then multiply by 2" → (4 + 6) × 2' },
    ],
  },
  {
    code: '5.4F',
    goal: 'Find the value of an expression with up to two levels of grouping.',
    words: [
      { term: 'simplify', meaning: 'find the single number an expression is equal to' },
      { term: 'order of operations', meaning: 'grouping first, then × and ÷, then + and −' },
    ],
    ideas: [
      { title: 'Inside out', text: 'Start with the innermost parentheses, then the brackets.' },
      { title: 'Then × and ÷, then + and −', text: 'Inside each group, and after the groups are done, multiply and divide before you add and subtract, working left to right.' },
      { title: 'One step at a time', text: 'Rewrite the expression after every step so nothing gets lost.', example: '[2 + 3 × (6 − 2)] ÷ 2 → [2 + 3 × 4] ÷ 2 → [2 + 12] ÷ 2 → 14 ÷ 2 = 7' },
    ],
  },

  // ----- Strand 2: computation and algebra -----
  {
    code: '5.3A',
    goal: 'Use rounding and friendly numbers to find an answer that is close enough.',
    words: [
      { term: 'estimate', meaning: 'an answer that is close, not exact' },
      { term: 'compatible numbers', meaning: 'numbers that are easy to work with together' },
    ],
    ideas: [
      { title: 'Round to friendly numbers', text: 'Round each number so the math is easy to do in your head.', example: '487 × 21 ≈ 500 × 20 = 10,000' },
      { title: 'Pick numbers that divide nicely', text: 'For division, change the numbers to ones that go together.', example: '1,792 ÷ 29 ≈ 1,800 ÷ 30 = 60' },
      { title: 'Estimates catch mistakes', text: 'If an exact answer is far from your estimate, check your work.' },
    ],
  },
  {
    code: '5.3B',
    goal: 'Multiply a three-digit number by a two-digit number.',
    words: [
      { term: 'partial product', meaning: 'the answer for one digit of the multiplier' },
      { term: 'regroup', meaning: 'carry tens into the next place' },
    ],
    ideas: [
      { title: 'Multiply by the ones digit', text: 'For 243 × 36, start with the 6.', example: '243 × 6 = 1,458' },
      { title: 'Then by the tens digit, with a zero', text: 'The 3 in 36 is really 30, so the second partial product ends in 0.', example: '243 × 30 = 7,290' },
      { title: 'Add the partial products', text: 'The sum is the answer.', example: '1,458 + 7,290 = 8,748' },
    ],
  },
  {
    code: '5.3C',
    goal: 'Divide numbers up to four digits by a two-digit number.',
    words: [
      { term: 'dividend', meaning: 'the number being divided' },
      { term: 'divisor', meaning: 'the number you divide by' },
      { term: 'quotient', meaning: 'the answer' },
      { term: 'remainder', meaning: 'what is left over' },
    ],
    ideas: [
      { title: 'Estimate each step', text: 'For 864 ÷ 24, ask how many 24s fit in 86. About 3, because 3 × 24 = 72.' },
      { title: 'Divide, multiply, subtract, bring down', text: 'Repeat until every digit is used.', example: '86 − 72 = 14 → bring down 4 → 144 ÷ 24 = 6 → answer 36' },
      { title: 'Remainders in stories', text: 'Think about what the remainder means.', example: '100 kids, vans hold 12: 100 ÷ 12 = 8 R4, so 9 vans are needed' },
    ],
  },
  {
    code: '5.3D',
    goal: 'Use an area model to multiply tenths by tenths.',
    words: [
      { term: 'area model', meaning: 'a grid that shows multiplication as a rectangle' },
      { term: 'hundredth', meaning: 'one small square of a 10 by 10 grid' },
    ],
    ideas: [
      { title: 'The whole grid is 1', text: 'Each row is a tenth and each column is a tenth.' },
      { title: 'The overlap is the product', text: 'Shade 3 tenths one way and 4 tenths the other. They overlap in 12 small squares.', example: '0.3 × 0.4 = 0.12', figure: { kind: 'area', rows: 3, cols: 4 }, alt: 'A 10 by 10 grid with 3 rows and 4 columns shaded; 12 squares overlap.' },
      { title: 'Tenths × tenths = hundredths', text: 'That is why the answer has two decimal places.' },
    ],
  },
  {
    code: '5.3E',
    goal: 'Multiply decimals, including money.',
    words: [{ term: 'decimal places', meaning: 'digits after the decimal point' }],
    ideas: [
      { title: 'Multiply like whole numbers', text: 'Ignore the decimal points at first.', example: '2.4 × 1.5 → 24 × 15 = 360' },
      { title: 'Count the decimal places', text: 'Each factor has one decimal place, so the product has two.', example: '3.60 = 3.6' },
      { title: 'Money works the same way', text: 'Estimate first so you know if the answer makes sense.', example: '6 pens at $1.25 → 6 × 1.25 = $7.50 (about 6 × $1 = $6)' },
    ],
  },
  {
    code: '5.3F',
    goal: 'Use a model to share a decimal into equal groups.',
    words: [{ term: 'quotient', meaning: 'the amount in each group' }],
    ideas: [
      { title: 'Show the decimal', text: '2.4 is 2 wholes and 4 tenths: 240 hundredths.', figure: { kind: 'decimalGrids', hundredths: 240 }, alt: 'Two full hundred grids and 40 squares of a third, showing 2.4.' },
      { title: 'Share it equally', text: 'Split the squares into equal groups.', example: '2.4 ÷ 4 → 240 hundredths ÷ 4 = 60 hundredths = 0.6' },
      { title: 'Check by multiplying', text: 'The groups put back together make the whole.', example: '4 × 0.6 = 2.4' },
    ],
  },
  {
    code: '5.3G',
    goal: 'Divide decimals by whole numbers, including two-digit divisors.',
    words: [{ term: 'quotient', meaning: 'the answer to a division' }],
    ideas: [
      { title: 'Divide as if there were no point', text: 'Treat the decimal as a whole number.', example: '45.6 ÷ 12 → 456 ÷ 12 = 38' },
      { title: 'Put the point straight above', text: 'The decimal point in the answer lines up with the one in the dividend.', example: '45.6 ÷ 12 = 3.8' },
      { title: 'Estimate to check', text: 'Does the size make sense?', example: '45.6 ÷ 12 ≈ 48 ÷ 12 = 4' },
    ],
  },
  {
    code: '5.3H',
    goal: 'Add and subtract fractions with different denominators, using models.',
    words: [
      { term: 'denominator', meaning: 'the bottom number: how many equal parts' },
      { term: 'common denominator', meaning: 'a denominator both fractions can share' },
    ],
    ideas: [
      { title: 'Different sizes cannot be added directly', text: 'Halves and thirds are different-sized pieces.', figure: { kind: 'fractionBars', bars: [{ parts: 2, shaded: 1, label: '1/2' }, { parts: 3, shaded: 1, label: '1/3' }] }, alt: 'A bar with 1 of 2 parts shaded and a bar with 1 of 3 parts shaded.' },
      { title: 'Cut them into the same size', text: 'Sixths fit both: {1/2} = {3/6} and {1/3} = {2/6}.', figure: { kind: 'fractionBars', bars: [{ parts: 6, shaded: 3, label: '3/6' }, { parts: 6, shaded: 2, label: '2/6' }] }, alt: 'Two bars cut into sixths, with 3 and 2 parts shaded.' },
      { title: 'Now add the pieces', text: 'Add the numerators. The denominator stays the same.', example: '{3/6} + {2/6} = {5/6}' },
    ],
  },
  {
    code: '5.3I',
    goal: 'Multiply a whole number by a fraction.',
    words: [{ term: 'numerator', meaning: 'the top number: how many parts you have' }],
    ideas: [
      { title: 'Groups of a fraction', text: '3 × {2/5} means 3 groups of {2/5}.', figure: { kind: 'fractionBars', bars: [{ parts: 5, shaded: 2 }, { parts: 5, shaded: 2 }, { parts: 5, shaded: 2 }] }, alt: 'Three bars cut into fifths, each with 2 parts shaded.' },
      { title: 'Multiply the numerator', text: 'Count the shaded pieces: 3 × 2 = 6 fifths.', example: '3 × {2/5} = {6/5} = 1{1/5}' },
      { title: 'The denominator stays', text: 'The pieces are still fifths. Only how many changes.' },
    ],
  },
  {
    code: '5.3J',
    goal: 'Use models to divide with unit fractions.',
    words: [{ term: 'unit fraction', meaning: 'a fraction with 1 on top, like {1/4}' }],
    ideas: [
      { title: 'Whole ÷ unit fraction: how many pieces fit?', text: 'Each whole has 4 fourths, so 3 wholes have 12.', example: '3 ÷ {1/4} = 12', figure: { kind: 'fractionBars', bars: [{ parts: 4, shaded: 4 }, { parts: 4, shaded: 4 }, { parts: 4, shaded: 4 }] }, alt: 'Three bars each cut into 4 equal parts.' },
      { title: 'Unit fraction ÷ whole: split the piece', text: 'Split one third into 2 equal parts. Each part is a sixth of the whole.', example: '{1/3} ÷ 2 = {1/6}', figure: { kind: 'fractionBars', bars: [{ parts: 3, shaded: 1, label: '1/3' }, { parts: 6, shaded: 1, label: '1/6' }] }, alt: 'A bar with one third shaded, and a bar cut into sixths with one shaded.' },
      { title: 'Check the size', text: 'Dividing a whole by a unit fraction gives more. Dividing a unit fraction gives a smaller piece.' },
    ],
  },
  {
    code: '5.3K',
    goal: 'Add and subtract decimals and fractions quickly and correctly.',
    words: [{ term: 'mixed number', meaning: 'a whole number and a fraction, like 2{1/4}' }],
    ideas: [
      { title: 'Decimals: line up the points', text: 'Fill empty places with zeros so the columns match.', example: '12.5 − 3.75 → 12.50 − 3.75 = 8.75' },
      { title: 'Fractions: find a common denominator', text: 'Rename both fractions, then add the numerators.', example: '{2/3} + {1/4} = {8/12} + {3/12} = {11/12}' },
      { title: 'Mixed numbers', text: 'Add the wholes and the fractions, then simplify.', example: '1{1/2} + 2{3/4} = 3{5/4} = 4{1/4}' },
    ],
  },
  {
    code: '5.3L',
    goal: 'Divide whole numbers by unit fractions, and unit fractions by whole numbers.',
    words: [{ term: 'unit fraction', meaning: 'a fraction with 1 on top' }],
    ideas: [
      { title: 'Whole ÷ unit fraction', text: 'Count how many pieces fit: multiply by the denominator.', example: '5 ÷ {1/3} = 5 × 3 = 15' },
      { title: 'Unit fraction ÷ whole', text: 'The piece gets smaller: multiply the denominators.', example: '{1/4} ÷ 2 = {1/8}' },
      { title: 'In a story', text: 'Decide what is being split and into what size.', example: 'How many {1/2}-cup servings in 4 cups? 4 ÷ {1/2} = 8' },
    ],
  },
  {
    code: '5.4B',
    goal: 'Write an equation with a letter for the unknown, then solve a multi-step problem.',
    words: [
      { term: 'equation', meaning: 'a math sentence with an equal sign' },
      { term: 'unknown', meaning: 'the number you need to find, written as a letter like n' },
    ],
    ideas: [
      { title: 'Name the unknown', text: 'Let n stand for the number the question asks for.' },
      { title: 'Write the steps in order', text: 'Use parentheses for the step that happens first.', example: '5 packs of 12 cards, gives away 8 → n = (5 × 12) − 8' },
      { title: 'Solve step by step', text: 'Do the grouped part first.', example: '5 × 12 = 60 → 60 − 8 = 52 → n = 52' },
    ],
  },
  {
    code: '5.4C',
    goal: 'Use a rule like y = 3x or y = x + 3 to make a pattern, then graph it.',
    words: [
      { term: 'rule', meaning: 'tells how to get y from x' },
      { term: 'ordered pair', meaning: '(x, y): a point on a graph' },
    ],
    ideas: [
      { title: 'Use the rule on each x', text: 'For y = 3x, multiply each x by 3.', example: 'x = 1, 2, 3 → y = 3, 6, 9' },
      { title: 'Each pair is a point', text: 'x goes across, y goes up.', example: '(1, 3), (2, 6), (3, 9)', figure: { kind: 'coordGrid', max: 10, points: [{ x: 1, y: 3 }, { x: 2, y: 6 }, { x: 3, y: 9 }] }, alt: 'A coordinate grid with points at (1, 3), (2, 6) and (3, 9).' },
      { title: 'Check every column', text: 'A rule has to work for every pair in the table, not just the first.' },
    ],
  },
  {
    code: '5.4D',
    goal: 'Tell whether a pattern adds the same amount or multiplies by the same amount.',
    words: [
      { term: 'additive', meaning: 'y = x + a number' },
      { term: 'multiplicative', meaning: 'y = a number × x' },
    ],
    ideas: [
      { title: 'Additive: add the same amount', text: 'Each y is 4 more than x.', example: 'x: 1, 2, 3 → y: 5, 6, 7' },
      { title: 'Multiplicative: multiply by the same amount', text: 'Each y is 4 times x.', example: 'x: 1, 2, 3 → y: 4, 8, 12' },
      { title: 'Test more than one column', text: 'At x = 2, both y = x + 2 and y = 2x give 4. Check x = 3: is y 5 or 6?' },
    ],
  },

  // ----- Strand 3: geometry and measurement -----
  {
    code: '5.4H',
    goal: 'Decide whether a problem needs perimeter, area or volume, and solve it.',
    words: [
      { term: 'perimeter', meaning: 'the distance around a shape' },
      { term: 'area', meaning: 'the space inside a flat shape, in square units' },
      { term: 'volume', meaning: 'the space inside a solid, in cubic units' },
    ],
    ideas: [
      { title: 'Perimeter goes around', text: 'Add all the sides.', example: 'Rectangle 8 by 3: 2 × (8 + 3) = 22 units' },
      { title: 'Area covers', text: 'Multiply length by width.', example: '8 × 3 = 24 square units' },
      { title: 'Volume fills', text: 'Multiply length × width × height.', example: '4 × 3 × 2 = 24 cubic units', figure: { kind: 'prism', l: 4, w: 3, h: 2 }, alt: 'A box 4 cubes long, 3 wide and 2 tall.' },
    ],
  },
  {
    code: '5.5A',
    goal: 'Sort two-dimensional shapes into groups by their sides and angles.',
    words: [
      { term: 'parallelogram', meaning: 'two pairs of parallel sides' },
      { term: 'rectangle', meaning: 'a parallelogram with four right angles' },
      { term: 'rhombus', meaning: 'a parallelogram with four equal sides' },
      { term: 'square', meaning: 'four right angles and four equal sides' },
    ],
    ideas: [
      { title: 'Groups inside groups', text: 'Quadrilaterals → parallelograms → rectangles and rhombuses → squares. Each group fits inside the one before it.' },
      { title: 'A square is both', text: 'It has four right angles and four equal sides, so every square is a rectangle and a rhombus.' },
      { title: '"All" or "some"?', text: 'All squares are rectangles, but only some rectangles are squares.' },
    ],
  },
  {
    code: '5.6A',
    goal: 'Find volume by counting unit cubes.',
    words: [
      { term: 'unit cube', meaning: 'a cube with sides 1 unit long' },
      { term: 'cubic unit', meaning: 'the volume of one unit cube' },
    ],
    ideas: [
      { title: 'One cube, one cubic unit', text: 'Volume is how many unit cubes fill a shape with no gaps or overlaps.' },
      { title: 'Count every cube', text: 'Include the cubes you cannot see in the back and middle.', example: '3 × 2 × 2 = 12 cubic units', figure: { kind: 'prism', l: 3, w: 2, h: 2 }, alt: 'A box 3 cubes long, 2 wide and 2 tall.' },
    ],
  },
  {
    code: '5.6B',
    goal: 'Find volume by multiplying the cubes in one layer by the number of layers.',
    words: [{ term: 'base', meaning: 'the bottom layer of a box' }],
    ideas: [
      { title: 'Count one layer', text: 'A base 4 by 3 has 12 cubes.', figure: { kind: 'prism', l: 4, w: 3, h: 3 }, alt: 'A box 4 cubes long, 3 wide and 3 tall.' },
      { title: 'Multiply by the layers', text: 'There are 3 layers.', example: '12 × 3 = 36 cubic units' },
      { title: 'V = B × h', text: 'B is the area of the base, h is how many layers tall.' },
    ],
  },
  {
    code: '5.7A',
    goal: 'Change measurements between units in the same system.',
    words: [
      { term: 'customary', meaning: 'inches, feet, cups, pounds…' },
      { term: 'metric', meaning: 'centimeters, meters, grams, liters…' },
    ],
    ideas: [
      { title: 'Big unit to small unit: multiply', text: 'You need more of the small unit.', example: '3 feet = 3 × 12 = 36 inches' },
      { title: 'Small unit to big unit: divide', text: 'You need fewer of the big unit.', example: '2,000 grams = 2,000 ÷ 1,000 = 2 kilograms' },
      { title: 'Know the facts', text: '12 in = 1 ft · 3 ft = 1 yd · 16 oz = 1 lb · 2 cups = 1 pt · 2 pt = 1 qt · 4 qt = 1 gal · 100 cm = 1 m · 1,000 m = 1 km · 1,000 g = 1 kg · 1,000 mL = 1 L' },
    ],
  },
  {
    code: '5.8A',
    goal: 'Know the parts of the coordinate plane.',
    words: [
      { term: 'x-axis', meaning: 'the number line going across' },
      { term: 'y-axis', meaning: 'the number line going up' },
      { term: 'origin', meaning: 'where the axes meet: (0, 0)' },
    ],
    ideas: [
      { title: 'Two number lines', text: 'The x-axis and y-axis are perpendicular and meet at the origin, (0, 0).' },
      { title: 'x first, then y', text: '(4, 2) means 4 across and 2 up.', figure: { kind: 'coordGrid', max: 6, points: [{ x: 4, y: 2, label: '(4, 2)' }] }, alt: 'A coordinate grid with a point at (4, 2).' },
      { title: 'Distance from the axes', text: '(4, 2) is 4 units from the y-axis and 2 units from the x-axis.' },
    ],
  },
  {
    code: '5.8B',
    goal: 'Describe how to graph an ordered pair.',
    words: [{ term: 'ordered pair', meaning: '(x, y): the order matters' }],
    ideas: [
      { title: 'Start at the origin', text: 'Every point starts from (0, 0).' },
      { title: 'Right x, then up y', text: 'For (3, 5): move 3 right, then 5 up.', figure: { kind: 'coordGrid', max: 6, points: [{ x: 3, y: 5, label: 'P' }] }, alt: 'A coordinate grid with point P at (3, 5).' },
      { title: 'Do not swap', text: '(3, 5) and (5, 3) are different points.' },
    ],
  },
  {
    code: '5.8C',
    goal: 'Graph points that come from tables and real-world problems.',
    words: [{ term: 'input-output table', meaning: 'a table of x and y values' }],
    ideas: [
      { title: 'Make pairs from the table', text: 'Tickets cost $4 each. 1, 2 and 3 tickets cost $4, $8 and $12.', example: '(1, 4), (2, 8), (3, 12)' },
      { title: 'Plot each pair', text: 'x = tickets across, y = dollars up.', figure: { kind: 'coordGrid', max: 12, points: [{ x: 1, y: 4 }, { x: 2, y: 8 }, { x: 3, y: 12 }] }, alt: 'A coordinate grid from 0 to 12 with points at (1, 4), (2, 8) and (3, 12).' },
      { title: 'Read a point back', text: 'The point (2, 8) means 2 tickets cost $8.' },
    ],
  },

  // ----- Strand 4: data and money -----
  {
    code: '5.9A',
    goal: 'Show data in frequency tables, bar graphs, dot plots and stem-and-leaf plots.',
    words: [
      { term: 'frequency', meaning: 'how many times something happens' },
      { term: 'dot plot', meaning: 'one dot above a number line for each value' },
    ],
    ideas: [
      { title: 'Bar graphs compare groups', text: 'Each bar is as tall as its frequency. Check the scale on the side.', figure: { kind: 'barGraph', title: 'Favorite Fruit', categories: ['Apple', 'Banana', 'Grapes'], values: [5, 3, 4], step: 1, axis: 'Students' }, alt: 'Bar graph: Apple 5, Banana 3, Grapes 4.' },
      { title: 'Dot plots show every value', text: 'One dot for each measurement, even fractions.', figure: { kind: 'dotPlot', title: 'Pencil Lengths (in.)', labels: ['1/4', '1/2', '3/4', '1'], counts: [2, 3, 1, 2], axis: 'Inches past 5' }, alt: 'Dot plot: 1/4 has 2 dots, 1/2 has 3, 3/4 has 1, 1 has 2.' },
    ],
  },
  {
    code: '5.9B',
    goal: 'Show paired data on a scatterplot.',
    words: [{ term: 'scatterplot', meaning: 'a graph of points made from pairs of data' }],
    ideas: [
      { title: 'Each pair is one point', text: 'The first value goes across, the second goes up.', example: '(hours, goals): (1, 2), (2, 3), (3, 5), (4, 6)', figure: { kind: 'coordGrid', max: 8, points: [{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 5 }, { x: 4, y: 6 }] }, alt: 'A scatterplot with points at (1, 2), (2, 3), (3, 5) and (4, 6).' },
      { title: 'Look for a trend', text: 'As one value grows, does the other grow too?' },
    ],
  },
  {
    code: '5.9C',
    goal: 'Answer one- and two-step questions using graphs and tables.',
    words: [{ term: 'scale', meaning: 'the numbers along a graph\'s side' }],
    ideas: [
      { title: 'Read carefully', text: 'Check the title, the labels and the scale before reading any value.', figure: { kind: 'barGraph', title: 'Favorite Sport', categories: ['Soccer', 'Football', 'Baseball'], values: [9, 3, 4], step: 1, axis: 'Students' }, alt: 'Bar graph: Soccer 9, Football 3, Baseball 4.' },
      { title: '"How many more" means subtract', text: 'Soccer 9 − Baseball 4.', example: '9 − 4 = 5 more' },
      { title: 'Two steps', text: 'Combine two groups, then compare.', example: '(Football + Baseball) = 7, Soccer − 7 = 2' },
    ],
  },
  {
    code: '5.10A',
    goal: 'Know four kinds of taxes.',
    words: [{ term: 'tax', meaning: 'money people pay to the government for public services' }],
    ideas: [
      { title: 'Income tax', text: 'A tax on the money people earn from working.' },
      { title: 'Payroll tax', text: 'Taken out of a paycheck to help pay for Social Security and Medicare.' },
      { title: 'Sales tax', text: 'Added to the price when you buy things.', example: '$20.00 shirt + sales tax = $21.65' },
      { title: 'Property tax', text: 'Paid by people who own land or buildings, often used to pay for schools.' },
    ],
  },
  {
    code: '5.10B',
    goal: 'Tell gross income from net income.',
    words: [
      { term: 'gross income', meaning: 'all the money earned' },
      { term: 'net income', meaning: 'what is left after taxes and deductions: take-home pay' },
    ],
    ideas: [
      { title: 'Gross comes first', text: 'Gross income is everything you earn before anything is taken out.' },
      { title: 'Net is what you take home', text: 'Subtract taxes and other deductions.', example: '$3,000 − $450 = $2,550 net' },
      { title: 'Work backwards', text: 'Net + deductions = gross.' },
    ],
  },
  {
    code: '5.10E',
    goal: 'Find ways to balance a budget when expenses are more than income.',
    words: [
      { term: 'income', meaning: 'money coming in' },
      { term: 'expense', meaning: 'money going out' },
    ],
    ideas: [
      { title: 'Spend less', text: 'Cut or lower an expense: eat out less, drop a subscription you don\'t use.' },
      { title: 'Earn more', text: 'Find extra income, like doing more chores or a part-time job.' },
      { title: 'Not a fix', text: 'Adding new expenses, or ignoring the budget, makes the gap the same or bigger.' },
    ],
  },
  {
    code: '5.10F',
    goal: 'Work out what is left in a budget, and balance it.',
    words: [{ term: 'balanced budget', meaning: 'income covers all expenses and savings' }],
    ideas: [
      { title: 'Add up the expenses', text: 'List everything going out and add it.' },
      { title: 'Income − expenses = what is left', text: 'That amount can be saved.', example: '$200 − ($45 + $30 + $20) = $105' },
      { title: 'Need more left over?', text: 'Lower an expense by the difference.', example: 'Want to save $120? Spend $15 less.' },
    ],
  },
];

export const g5Lesson = (code: string) => G5_MATH_LESSONS.find((l) => l.code === code);
