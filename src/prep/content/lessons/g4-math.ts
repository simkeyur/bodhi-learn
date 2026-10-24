// Walkthroughs for the 41 grade 4 math skills, written to the TEKS wording in data/standards/g4-math.ts.
// Kept short: a goal, the key words, and two to four big ideas. A test checks every skill has one.

import type { Lesson } from '../types.ts';

export const G4_MATH_LESSONS: Lesson[] = [
  // ==================== Strand 1: Numbers and place value ====================
  {
    code: '4.2A',
    goal: 'Understand that each place value is 10 times the place to its right and one-tenth of the place to its left.',
    words: [
      { term: 'place value', meaning: 'the value of a digit based on its position in a number' },
      { term: '10 times', meaning: 'multiplied by 10 (one place to the left)' },
      { term: 'one-tenth', meaning: 'divided by 10 (one place to the right)' },
    ],
    ideas: [
      { title: 'Move left: multiply by 10', text: 'Each step to the left increases a digit\'s value by 10 times. Thousands is 10 times hundreds, and ten thousands is 10 times thousands.', example: '5,000 = 10 × 500' },
      { title: 'Move right: one-tenth the value', text: 'Each step to the right decreases a digit\'s value by 10 times, or makes it one-tenth as large.', example: '50 is one-tenth of 500' },
    ],
  },
  {
    code: '4.2B',
    goal: 'Read and write whole numbers through 1,000,000,000 and decimals to hundredths using expanded notation and numerals.',
    words: [
      { term: 'expanded notation', meaning: 'writing a number as the sum of each digit multiplied by its place value' },
      { term: 'billions', meaning: 'the place value that is 1,000 millions: 1,000,000,000' },
      { term: 'hundredths', meaning: 'two places after the decimal point: 0.01' },
    ],
    ideas: [
      { title: 'Multiply each digit by its place value', text: 'Write parentheses around each non-zero digit multiplied by its place value, joined by plus signs.', example: '45,206 = (4 × 10,000) + (5 × 1,000) + (2 × 100) + (6 × 1)' },
      { title: 'Decimals in expanded notation', text: 'Tenths are multiplied by 0.1 and hundredths by 0.01.', example: '3.48 = (3 × 1) + (4 × 0.1) + (8 × 0.01)' },
    ],
  },
  {
    code: '4.2C',
    goal: 'Compare and order whole numbers up to 1,000,000,000 using >, <, and = symbols.',
    words: [
      { term: '>', meaning: 'is greater than' },
      { term: '<', meaning: 'is less than' },
      { term: '=', meaning: 'is equal to' },
    ],
    ideas: [
      { title: 'Line up place values from the left', text: 'Start with the greatest place value. The first place where the digits differ tells you which number is greater.', example: '45,210 > 45,190 because 2 hundreds > 1 hundred' },
      { title: 'Ordering lists of numbers', text: 'When ordering from least to greatest, find the smallest number first by comparing place values.', example: '12,400 < 12,850 < 14,100' },
    ],
  },
  {
    code: '4.2D',
    goal: 'Round whole numbers through the hundred thousands place.',
    words: [
      { term: 'round', meaning: 'adjust a number to a nearby benchmark number that is easier to use' },
      { term: 'place to round', meaning: 'the target digit you are rounding to' },
    ],
    ideas: [
      { title: 'Look at the digit to the right', text: 'Find your target place value. Look one digit to the right: if it is 5 or more, round up. If it is 4 or less, keep the digit the same.', example: '347,200 to the nearest ten thousand → 350,000' },
      { title: 'Change following digits to zero', text: 'All digits to the right of the rounded place become zeros.', example: '624,800 to nearest hundred thousand → 600,000' },
    ],
  },
  {
    code: '4.2E',
    goal: 'Represent decimals to tenths and hundredths using visual models and money.',
    words: [
      { term: 'tenths', meaning: 'one out of 10 equal parts of a whole: 0.1 (like a dime)' },
      { term: 'hundredths', meaning: 'one out of 100 equal parts of a whole: 0.01 (like a penny)' },
    ],
    ideas: [
      { title: 'Hundred grid models', text: 'A hundred grid represents 1 whole. Each column of 10 squares is 1 tenth (0.1), and each tiny square is 1 hundredth (0.01).', figure: { kind: 'decimalGrids', hundredths: 45 }, alt: 'A hundred grid with 45 small squares shaded.' },
      { title: 'Money as decimals', text: 'Dollars are wholes, dimes are tenths, and pennies are hundredths.', example: '$3.47 = 3 dollars, 4 dimes, and 7 pennies' },
    ],
  },
  {
    code: '4.2F',
    goal: 'Compare and order decimals to hundredths using models and symbols.',
    words: [
      { term: 'compare', meaning: 'determine which number is greater or smaller' },
      { term: 'place value with decimals', meaning: 'ones, then tenths, then hundredths' },
    ],
    ideas: [
      { title: 'Tenths have more value than hundredths', text: '0.4 is greater than 0.38 because 4 tenths is greater than 3 tenths. Add a zero to make lengths equal: 0.40 > 0.38.', example: '0.40 > 0.38' },
      { title: 'Order using place values', text: 'Compare from left to right: check ones first, then tenths, then hundredths.', example: '0.12 < 0.25 < 0.30' },
    ],
  },
  {
    code: '4.2G',
    goal: 'Relate decimals to fractions that name tenths and hundredths.',
    words: [
      { term: 'tenths fraction', meaning: 'a fraction with 10 in the denominator, like {7/10}' },
      { term: 'hundredths fraction', meaning: 'a fraction with 100 in the denominator, like {45/100}' },
    ],
    ideas: [
      { title: 'Tenths: one decimal place', text: '0.6 means 6 tenths, which is written as the fraction {6/10}.', example: '0.7 = {7/10}' },
      { title: 'Hundredths: two decimal places', text: '0.35 means 35 hundredths, which is written as the fraction {35/100}.', example: '0.08 = {8/100}' },
    ],
  },
  {
    code: '4.2H',
    goal: 'Determine the decimal to tenths or hundredths for a point on a number line.',
    words: [
      { term: 'number line', meaning: 'a straight line with tick marks showing numbers in order' },
      { term: 'interval', meaning: 'the distance between two consecutive tick marks' },
    ],
    ideas: [
      { title: 'Count the divisions between wholes', text: 'If the distance from 0 to 1 has 10 equal spaces, each mark represents one tenth (0.1).', figure: { kind: 'numberLine', from: 0, to: 1, step: 0.1, decimals: 1, point: 0.7, pointLabel: 'P' }, alt: 'Number line from 0 to 1 with point P at 0.7.' },
      { title: 'Hundredths intervals', text: 'If the distance between 0.40 and 0.50 has 10 spaces, each mark is 0.01.', example: 'Point between 0.40 and 0.50 at mark 3 is 0.43' },
    ],
  },
  {
    code: '4.3A',
    goal: 'Represent a fraction as a sum of unit fractions with numerator 1.',
    words: [
      { term: 'unit fraction', meaning: 'a fraction with a numerator of 1, such as {1/4} or {1/8}' },
      { term: 'sum', meaning: 'the result of adding numbers together' },
    ],
    ideas: [
      { title: 'Unit fractions are the building blocks', text: 'Every fraction {a/b} is made of a unit fractions of size {1/b}.', example: '{3/5} = {1/5} + {1/5} + {1/5}' },
      { title: 'Fractions greater than 1', text: 'Improper fractions work the same way: {5/4} is 5 unit fractions of {1/4} added together.', example: '{5/4} = {1/4} + {1/4} + {1/4} + {1/4} + {1/4}' },
    ],
  },
  {
    code: '4.3B',
    goal: 'Decompose a fraction in more than one way into a sum of fractions with the same denominator.',
    words: [
      { term: 'decompose', meaning: 'break a number or fraction into smaller parts' },
      { term: 'same denominator', meaning: 'fractions that refer to the same size parts' },
    ],
    ideas: [
      { title: 'Break the numerator into sums', text: 'Keep the denominator the same and split the numerator into any combination that adds to the original total.', example: '{5/8} = {2/8} + {3/8} = {1/8} + {4/8}' },
      { title: 'More than two parts', text: 'You can decompose a fraction into three or more parts.', example: '{7/10} = {2/10} + {2/10} + {3/10}' },
    ],
  },
  {
    code: '4.3C',
    goal: 'Determine if two fractions are equivalent using models and multiplication.',
    words: [
      { term: 'equivalent fractions', meaning: 'fractions that name the exact same amount or distance' },
      { term: 'common multiplier', meaning: 'multiplying the numerator and denominator by the same number' },
    ],
    ideas: [
      { title: 'Multiply top and bottom by the same number', text: 'When you multiply the numerator and denominator by the same number, the fraction\'s value does not change.', example: '{2/3} × 2/2 = {4/6}' },
      { title: 'See it with fraction bars', text: 'Equivalent fractions cover the exact same length on equal whole bars.', figure: { kind: 'fractionBars', bars: [{ parts: 2, shaded: 1, label: '1/2' }, { parts: 4, shaded: 2, label: '2/4' }] }, alt: 'Fraction bars showing 1/2 and 2/4 have equal length.' },
    ],
  },
  {
    code: '4.3D',
    goal: 'Compare two fractions with different numerators and denominators using >, =, and <.',
    words: [
      { term: 'benchmark fraction', meaning: 'a familiar fraction like {1/2} used as a comparison point' },
      { term: 'common denominator', meaning: 'a shared denominator that lets you compare numerators directly' },
    ],
    ideas: [
      { title: 'Compare to half', text: 'Check if one fraction is greater than {1/2} and the other is less than {1/2}.', example: '{5/8} > {1/2} and {2/5} < {1/2}, so {5/8} > {2/5}' },
      { title: 'Find common denominators', text: 'Rename the fractions with a common denominator, then compare the numerators.', example: '{3/4} = {9/12} and {2/3} = {8/12}, so {3/4} > {2/3}' },
    ],
  },
  {
    code: '4.3G',
    goal: 'Represent fractions and decimals to tenths or hundredths as distances from zero on a number line.',
    words: [
      { term: 'distance from zero', meaning: 'the length along a number line starting at 0' },
      { term: 'equivalent representations', meaning: 'naming the same point with a fraction and a decimal' },
    ],
    ideas: [
      { title: 'Fractions as distance', text: 'The point for {3/4} is 3 fourth-length steps away from 0.', example: 'Distance of {3/4} from 0' },
      { title: 'Fractions and decimals name the same distance', text: 'A distance of 7 tenths from 0 can be written as {7/10} or 0.7.', example: '{7/10} = 0.7' },
    ],
  },

  // ==================== Strand 2: Computation and algebra ====================
  {
    code: '4.3E',
    goal: 'Add and subtract fractions and mixed numbers with equal denominators.',
    words: [
      { term: 'like denominators', meaning: 'fractions with the same bottom number' },
      { term: 'regrouping fractions', meaning: 'converting 1 whole into {d/d} when subtracting' },
    ],
    ideas: [
      { title: 'Add or subtract only the numerators', text: 'When denominators match, add or subtract the numerators and keep the denominator the same.', example: '{3/8} + {2/8} = {5/8}' },
      { title: 'Regrouping when subtracting mixed numbers', text: 'If the fraction you are subtracting is larger, borrow 1 whole and rewrite it as {d/d}.', example: '2{1/5} − {3/5} = 1{6/5} − {3/5} = 1{3/5}' },
    ],
  },
  {
    code: '4.3F',
    goal: 'Evaluate if sums and differences of fractions are reasonable using benchmark fractions.',
    words: [
      { term: 'benchmark fractions', meaning: '0, {1/4}, {1/2}, {3/4}, and 1' },
      { term: 'reasonable', meaning: 'makes sense based on estimation' },
    ],
    ideas: [
      { title: 'Round each fraction to a benchmark', text: 'Replace fractions with the nearest benchmark to estimate the sum or difference quickly.', example: '{7/8} is about 1, and {1/10} is about 0; 1 + 0 = 1' },
      { title: 'Spot impossible answers', text: 'If you add two fractions that are each nearly 1, an answer less than 1 is not reasonable.', example: '{7/8} + {5/6} must be greater than 1' },
    ],
  },
  {
    code: '4.4A',
    goal: 'Add and subtract multi-digit whole numbers and decimals to hundredths using standard algorithms.',
    words: [
      { term: 'standard algorithm', meaning: 'the traditional step-by-step method for calculating with pencil and paper' },
      { term: 'regrouping', meaning: 'carrying 10 to the next place value when adding or borrowing when subtracting' },
    ],
    ideas: [
      { title: 'Line up place values and decimal points', text: 'Always keep decimal points directly above each other so ones add to ones and tenths add to tenths.', example: '14.25 + 8.90 = 23.15' },
      { title: 'Regroup carefully across zeros', text: 'When subtracting from a number with zeros like 50.00, regroup step by step from the left.', example: '$50.00 − $18.45 = $31.55' },
    ],
  },
  {
    code: '4.4B',
    goal: 'Multiply a whole number by 10 or 100 using place value understandings.',
    words: [
      { term: 'multiply by 10', meaning: 'shift each digit one place value to the left' },
      { term: 'multiply by 100', meaning: 'shift each digit two place values to the left' },
    ],
    ideas: [
      { title: 'Shift digits to the left', text: 'Multiplying by 10 shifts digits one place to the left, annexing one zero. Multiplying by 100 shifts two places, annexing two zeros.', example: '47 × 10 = 470, and 47 × 100 = 4,700' },
      { title: 'Place value meaning', text: '35 × 100 means 35 groups of 100, which is 35 hundreds, or 3,500.', example: '35 hundreds = 3,500' },
    ],
  },
  {
    code: '4.4C',
    goal: 'Represent products of two-digit numbers using arrays, area models, and equations.',
    words: [
      { term: 'area model', meaning: 'a rectangle divided into smaller rectangles showing partial products' },
      { term: 'partial products', meaning: 'the products of parts of each factor added together' },
      { term: 'perfect square', meaning: 'the product of a whole number multiplied by itself, like 12 × 12 = 144' },
    ],
    ideas: [
      { title: 'Split both numbers into tens and ones', text: 'To multiply 24 × 15, break into (20 + 4) × (10 + 5). This creates four smaller boxes.', example: '(20 × 10) + (20 × 5) + (4 × 10) + (4 × 5) = 200 + 100 + 40 + 20 = 360' },
      { title: 'Perfect squares through 15 × 15', text: 'A square array has equal rows and columns. Memorize squares like 12 × 12 = 144 and 15 × 15 = 225.', example: '14 × 14 = 196' },
    ],
  },
  {
    code: '4.4D',
    goal: 'Multiply up to 4 digits by 1 digit and 2 digits by 2 digits using strategies and algorithms.',
    words: [
      { term: 'multiplicand', meaning: 'the number being multiplied' },
      { term: 'partial products method', meaning: 'multiplying each place value separately and summing the results' },
    ],
    ideas: [
      { title: 'Multiply 4 digits by 1 digit', text: 'Multiply each place from right to left, regrouping to the next place as needed.', example: '1,425 × 6 = 8,550' },
      { title: 'Multiply 2 digits by 2 digits', text: 'First multiply by the ones digit. Then place a zero in the ones place and multiply by the tens digit. Add the two lines.', example: '34 × 27 = 238 + 680 = 918' },
    ],
  },
  {
    code: '4.4E',
    goal: 'Represent quotients of up to 4-digit numbers divided by 1-digit numbers with area models and equations.',
    words: [
      { term: 'dividend', meaning: 'the total number being divided' },
      { term: 'divisor', meaning: 'the number of equal groups you are dividing into' },
      { term: 'quotient', meaning: 'the result of division' },
    ],
    ideas: [
      { title: 'Area models for division', text: 'The total area is the dividend and the width is the divisor. The length of the rectangle is the quotient.', example: 'Area 156 ÷ 4 = length 39' },
      { title: 'Partial quotients in equations', text: 'Break the dividend into friendly chunks that are divisible by the divisor.', example: '432 ÷ 4 = (400 ÷ 4) + (32 ÷ 4) = 100 + 8 = 108' },
    ],
  },
  {
    code: '4.4F',
    goal: 'Divide up to 4-digit dividends by 1-digit divisors using the standard algorithm.',
    words: [
      { term: 'long division', meaning: 'the step-by-step process of divide, multiply, subtract, and bring down' },
      { term: 'remainder', meaning: 'the amount left over that cannot make another whole group' },
    ],
    ideas: [
      { title: 'Follow the four steps', text: 'Divide, Multiply, Subtract, Bring Down (D-M-S-B). Repeat for every digit in the dividend.', example: '852 ÷ 6 = 142' },
      { title: 'Check your answer with multiplication', text: 'Multiply your quotient by the divisor and add any remainder. It should equal the dividend.', example: '(142 × 6) + 0 = 852' },
    ],
  },
  {
    code: '4.4G',
    goal: 'Estimate solutions to whole number problems using rounding and compatible numbers.',
    words: [
      { term: 'estimate', meaning: 'find a value close enough to the right answer to be useful' },
      { term: 'compatible numbers', meaning: 'numbers that are easy to compute with mentally' },
    ],
    ideas: [
      { title: 'Rounding to estimate', text: 'Round numbers to the nearest 10, 100, or 1,000 before computing.', example: '489 + 312 rounds to 500 + 300 = 800' },
      { title: 'Compatible numbers for division', text: 'Choose numbers close to the dividend that divide evenly by the divisor.', example: '348 ÷ 5 is close to 350 ÷ 5 = 70' },
    ],
  },
  {
    code: '4.4H',
    goal: 'Solve multi-step word problems involving multiplication and division, interpreting remainders.',
    words: [
      { term: 'interpret remainder', meaning: 'decide what to do with the leftover amount based on the story' },
      { term: 'round up remainder', meaning: 'adding 1 to the quotient so everyone or everything is included' },
    ],
    ideas: [
      { title: 'Round up when everyone needs a place', text: 'For buses, tables, or boxes where no one can be left out, round up to the next whole number.', example: '95 kids on 40-seat buses: 95 ÷ 40 = 2 R 15 → 3 buses needed' },
      { title: 'Remainder is the answer for leftovers', text: 'When asked how many items remain unassigned or leftover, the remainder itself is the answer.', example: '50 cookies in boxes of 6: 50 ÷ 6 = 8 R 2 → 2 cookies leftover' },
    ],
  },
  {
    code: '4.5A',
    goal: 'Represent multi-step word problems using strip diagrams and equations with a letter for the unknown.',
    words: [
      { term: 'strip diagram', meaning: 'a bar model showing the relationship between parts and a whole' },
      { term: 'variable / letter', meaning: 'a letter like m or x standing for the unknown quantity' },
    ],
    ideas: [
      { title: 'Write an equation for all the steps', text: 'Combine the operations into a single equation using parentheses to show which step happens first.', example: '(4 × 12) + 7 = c' },
      { title: 'Parts equal the whole in strip diagrams', text: 'The top bar shows the total whole, and the bottom bars show the individual parts added together.', example: 'Total 55 = 20 + 20 + x' },
    ],
  },
  {
    code: '4.5B',
    goal: 'Represent patterns using input-output tables and numerical expressions.',
    words: [
      { term: 'input-output table', meaning: 'a table showing how position or input values turn into output values' },
      { term: 'rule', meaning: 'the mathematical relationship that works for every row in the table' },
    ],
    ideas: [
      { title: 'Look across each row', text: 'Find the rule that turns each input into its output. The same rule must work for every single row.', example: 'Input 2 → Output 8, Input 3 → Output 12: Rule is Input × 4' },
      { title: 'Use the rule to find any position', text: 'Apply the rule to find missing entries or distant positions.', example: 'For position 10: 10 × 4 = 40' },
    ],
  },

  // ==================== Strand 3: Geometry and measurement ====================
  {
    code: '4.5D',
    goal: 'Solve problems finding the perimeter and area of rectangles with whole-number sides.',
    words: [
      { term: 'perimeter', meaning: 'the distance around the outside edge of a shape (units)' },
      { term: 'area', meaning: 'the amount of surface space inside a shape (square units)' },
    ],
    ideas: [
      { title: 'Formulas for perimeter and area', text: 'Perimeter = 2 × (length + width). Area = length × width.', example: 'Length 8, width 5: P = 2 × (8 + 5) = 26 units; A = 8 × 5 = 40 sq units' },
      { title: 'Finding a missing side', text: 'If you know the area and width, divide to find length: length = area ÷ width.', example: 'Area 36, width 4 → length = 36 ÷ 4 = 9' },
    ],
  },
  {
    code: '4.6A',
    goal: 'Identify points, lines, line segments, rays, angles, and perpendicular and parallel lines.',
    words: [
      { term: 'parallel lines', meaning: 'lines in a plane that never intersect and remain the same distance apart' },
      { term: 'perpendicular lines', meaning: 'lines that intersect to form 90-degree right angles' },
      { term: 'ray', meaning: 'a part of a line with one endpoint that extends endlessly in one direction' },
    ],
    ideas: [
      { title: 'Endpoints matter', text: 'A line segment has 2 endpoints. A ray has 1 endpoint. A line has 0 endpoints and goes on forever in both directions.', example: 'Segment: ends at both sides; Ray: one arrow; Line: two arrows' },
      { title: 'Perpendicular vs parallel', text: 'Perpendicular lines meet like the corner of a square (+). Parallel lines run side by side like train tracks (=).', example: 'Right angle = perpendicular; Never touch = parallel' },
    ],
  },
  {
    code: '4.6B',
    goal: 'Identify and draw lines of symmetry for two-dimensional figures.',
    words: [
      { term: 'line of symmetry', meaning: 'an imaginary line where you can fold a shape so both halves match exactly' },
      { term: 'congruent halves', meaning: 'two halves that are identical in size and shape' },
    ],
    ideas: [
      { title: 'The fold test', text: 'If you fold a shape along a line of symmetry, the two halves overlap perfectly with no overhang.', figure: { kind: 'symmetry', shape: 'rectangle', line: 'v' }, alt: 'A rectangle folded vertically down the center.' },
      { title: 'Some shapes have multiple lines of symmetry', text: 'A non-square rectangle has 2 lines of symmetry. A square has 4. An equilateral triangle has 3.', example: 'Square = 4 lines of symmetry' },
    ],
  },
  {
    code: '4.6C',
    goal: 'Classify triangles as acute, right, or obtuse based on their angle measures.',
    words: [
      { term: 'right triangle', meaning: 'a triangle with exactly one 90-degree right angle' },
      { term: 'acute triangle', meaning: 'a triangle with all three angles measuring less than 90 degrees' },
      { term: 'obtuse triangle', meaning: 'a triangle with one angle measuring greater than 90 degrees' },
    ],
    ideas: [
      { title: 'Look for the largest angle', text: 'Check the largest angle in the triangle. If it is 90°, it is a right triangle. If greater than 90°, it is obtuse. If all are less than 90°, it is acute.', example: 'Angles 90°, 45°, 45° → Right triangle' },
      { title: 'Only one obtuse or right angle is possible', text: 'Because all three angles of a triangle sum to 180°, a triangle can never have two right angles or two obtuse angles.', example: '100° + 50° + 30° = 180° → Obtuse triangle' },
    ],
  },
  {
    code: '4.6D',
    goal: 'Classify two-dimensional figures based on parallel and perpendicular lines and angle sizes.',
    words: [
      { term: 'quadrilateral', meaning: 'any four-sided polygon' },
      { term: 'parallelogram', meaning: 'a quadrilateral with two pairs of parallel sides' },
      { term: 'trapezoid', meaning: 'a quadrilateral with at least one pair of parallel sides' },
    ],
    ideas: [
      { title: 'Classify by parallel sides', text: 'Trapezoids have 1 pair of parallel sides. Parallelograms, rectangles, rhombuses, and squares have 2 pairs of parallel sides.', example: 'Rectangle has 2 pairs of parallel sides' },
      { title: 'Classify by angles', text: 'Rectangles and squares must have four 90-degree right angles (perpendicular sides).', example: 'Square has 4 right angles and 4 equal sides' },
    ],
  },
  {
    code: '4.7C',
    goal: 'Determine the measure of angles in degrees using a protractor.',
    words: [
      { term: 'protractor', meaning: 'a tool shaped like a semicircle used to measure angles in degrees' },
      { term: 'degrees (°)', meaning: 'the unit used to measure angle openings from 0 to 180' },
    ],
    ideas: [
      { title: 'Align vertex at the center point', text: 'Place the center hole of the protractor over the vertex of the angle and align one ray with 0°.', figure: { kind: 'protractor', ray1: 0, ray2: 60 }, alt: 'Protractor measuring an angle of 60 degrees.' },
      { title: 'Read the correct scale', text: 'If your base ray points right, use the scale that starts at 0° on the right. If neither ray is at 0°, subtract the two degree readings.', example: 'Ray at 20° and ray at 80°: 80° − 20° = 60°' },
    ],
  },
  {
    code: '4.7D',
    goal: 'Draw and identify angles with specified measures.',
    words: [
      { term: 'straight angle', meaning: 'an angle measuring exactly 180 degrees that forms a straight line' },
      { term: 'turn of a circle', meaning: 'an angle representing a fraction of a 360-degree circle' },
    ],
    ideas: [
      { title: 'Benchmark angle openings', text: 'Remember that 90° is an L-shape (right angle), 45° is half of a right angle, and 180° is a straight line.', example: 'Acute: 1° to 89°; Right: 90°; Obtuse: 91° to 179°' },
      { title: 'Circle fraction turns', text: 'A {1/4} turn is 90°, a {1/2} turn is 180°, and a full turn is 360°.', example: '{1/4} of 360° = 90°' },
    ],
  },
  {
    code: '4.7E',
    goal: 'Find unknown angle measures formed by adjacent non-overlapping angles.',
    words: [
      { term: 'adjacent angles', meaning: 'angles that share a common vertex and a common ray with no overlap' },
      { term: 'angle addition', meaning: 'the measure of the large angle equals the sum of the adjacent angles' },
    ],
    ideas: [
      { title: 'Parts add up to the total angle', text: 'When two adjacent angles sit side-by-side inside a larger angle, their measures add up to the total angle.', figure: { kind: 'anglePair', a1: 35, a2: 55, label1: '35°', label2: '55°' }, alt: 'Two adjacent angles of 35 and 55 degrees totaling 90 degrees.' },
      { title: 'Subtract to find a missing part', text: 'If you know the total angle and one part, subtract the known part from the total to find the missing angle.', example: 'Total 90° − 35° = 55°' },
    ],
  },
  {
    code: '4.8A',
    goal: 'Identify relative sizes of measurement units in customary and metric systems.',
    words: [
      { term: 'customary units', meaning: 'inches, feet, yards, miles, ounces, pounds, cups, quarts, gallons' },
      { term: 'metric units', meaning: 'millimeters, centimeters, meters, kilometers, grams, kilograms, liters' },
    ],
    ideas: [
      { title: 'Common customary benchmarks', text: '1 foot = 12 inches; 1 yard = 3 feet; 1 pound = 16 ounces; 1 gallon = 4 quarts.', example: '1 yd = 3 ft = 36 in' },
      { title: 'Metric powers of 10', text: '1 meter = 100 centimeters = 1,000 millimeters; 1 kilometer = 1,000 meters; 1 kilogram = 1,000 grams.', example: '1 km = 1,000 m' },
    ],
  },
  {
    code: '4.8B',
    goal: 'Convert measurements from larger to smaller units and smaller to larger using tables.',
    words: [
      { term: 'conversion', meaning: 'changing a measurement from one unit to another equivalent unit' },
      { term: 'conversion factor', meaning: 'the multiplier used to change between units' },
    ],
    ideas: [
      { title: 'Multiply when going to smaller units', text: 'Larger units contain many smaller units. Multiply by the conversion factor (e.g. feet to inches: multiply by 12).', example: '4 feet × 12 = 48 inches' },
      { title: 'Divide when going to larger units', text: 'Smaller units group into larger units. Divide by the conversion factor (e.g. quarts to gallons: divide by 4).', example: '12 quarts ÷ 4 = 3 gallons' },
    ],
  },
  {
    code: '4.8C',
    goal: 'Solve problems involving length, time intervals, liquid volume, mass, and money.',
    words: [
      { term: 'elapsed time', meaning: 'the amount of time that passes from the start to the end of an event' },
      { term: 'capacity', meaning: 'the volume of liquid a container can hold' },
    ],
    ideas: [
      { title: 'Calculate elapsed time in chunks', text: 'Break elapsed time into hours first, then add the remaining minutes.', example: 'Start at 2:15 PM + 1 hr = 3:15 PM + 30 min = 3:45 PM' },
      { title: 'Convert before adding or subtracting', text: 'Make sure all measurements are in the same unit before performing operations.', example: '2 liters = 2,000 mL; 2,000 mL − 750 mL = 1,250 mL' },
    ],
  },

  // ==================== Strand 4: Data and money ====================
  {
    code: '4.9A',
    goal: 'Represent data using frequency tables, dot plots, and stem-and-leaf plots.',
    words: [
      { term: 'dot plot', meaning: 'a display that uses dots above a number line to show data frequencies' },
      { term: 'stem-and-leaf plot', meaning: 'a display where data is split into stems (tens) and leaves (ones)' },
      { term: 'frequency table', meaning: 'a table that lists items and how many times each item occurs' },
    ],
    ideas: [
      { title: 'Read the key on a stem-and-leaf plot', text: 'The stem represents tens and the leaf represents ones. Always check the key.', example: 'Stem 3 | Leaf 4 = 34' },
      { title: 'Dot plot shows shape and spread', text: 'Each dot represents 1 response or item. Stacks of dots show which value is most common.', figure: { kind: 'dotPlot', title: 'Pets Owned', labels: ['0', '1', '2', '3'], counts: [2, 5, 4, 1], axis: 'Number of Pets' }, alt: 'Dot plot of pets owned.' },
    ],
  },
  {
    code: '4.9B',
    goal: 'Solve one- and two-step problems using data in whole numbers, decimals, and fractions from graphs.',
    words: [
      { term: 'data problem', meaning: 'using information in a table or plot to answer questions' },
      { term: 'two-step data problem', meaning: 'finding multiple values first before adding or subtracting' },
    ],
    ideas: [
      { title: 'Compare categories by subtracting', text: 'To find how many more items are in one category than another, subtract the smaller frequency from the larger.', example: '12 votes − 5 votes = 7 more votes' },
      { title: 'Combine categories for totals', text: 'When a problem asks for "at least" or "either/or", add the frequencies of the qualifying categories together.', example: 'Members walking 1 or 2 miles: 4 + 6 = 10 members' },
    ],
  },
  {
    code: '4.10A',
    goal: 'Distinguish between fixed and variable expenses in a personal budget.',
    words: [
      { term: 'fixed expense', meaning: 'an expense that stays the same amount every month (like rent)' },
      { term: 'variable expense', meaning: 'an expense that changes depending on choices or usage (like groceries)' },
    ],
    ideas: [
      { title: 'Fixed expenses do not change', text: 'Fixed expenses are set amounts you pay every period, such as apartment rent, car payments, or flat insurance premiums.', example: 'Rent of $750 each month is a fixed expense' },
      { title: 'Variable expenses fluctuate', text: 'Variable expenses go up or down based on how much you consume or spend, such as food, electricity, and entertainment.', example: 'A grocery bill is a variable expense' },
    ],
  },
  {
    code: '4.10B',
    goal: 'Calculate profit in a business or personal situation.',
    words: [
      { term: 'income / revenue', meaning: 'the total amount of money earned or collected from sales' },
      { term: 'expenses / costs', meaning: 'the money spent to make or sell a product' },
      { term: 'profit', meaning: 'the money remaining after all expenses are subtracted from income' },
    ],
    ideas: [
      { title: 'Profit formula', text: 'Profit = Total Income − Total Expenses.', example: '$80 in sales − $35 in supplies = $45 profit' },
      { title: 'Add all expenses first', text: 'If there are multiple expenses (supplies, advertising, packaging), add them together before subtracting from total income.', example: 'Expenses ($15 + $10) = $25; Income $60 − $25 = $35 profit' },
    ],
  },
  {
    code: '4.10E',
    goal: 'Describe the basic purpose of financial institutions like banks and credit unions.',
    words: [
      { term: 'financial institution', meaning: 'a bank or credit union that provides financial services to customers' },
      { term: 'deposit', meaning: 'placing money into an account for safekeeping' },
      { term: 'loan / borrowing', meaning: 'receiving money from a bank that must be repaid over time, usually with interest' },
    ],
    ideas: [
      { title: 'Keeping money safe', text: 'Banks keep your money secure in checking and savings accounts so it is not lost or stolen.', example: 'Depositing savings into an insured bank account' },
      { title: 'Lending and borrowing', text: 'Financial institutions lend money to individuals and businesses to buy homes, cars, or attend college, which borrowers repay with interest.', example: 'Taking out an auto loan to purchase a car' },
    ],
  },
];
