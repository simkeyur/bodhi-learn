// Walkthroughs for the 44 grade 3 math skills, written to the TEKS wording in data/standards/g3-math.ts.
// Kept short: a goal, the key words, and two to four big ideas. A test checks every skill has one.

import type { Lesson } from '../types.ts';

export const G3_MATH_LESSONS: Lesson[] = [
  // ==================== Strand 1: Numbers and place value ====================
  {
    code: '3.2A',
    goal: 'Compose and decompose whole numbers up to 100,000 using place value and expanded notation.',
    words: [
      { term: 'expanded notation', meaning: 'showing a number as the sum of each digit multiplied by its place value' },
      { term: 'ten thousands', meaning: 'the place value that is 10 times thousands (10,000)' },
    ],
    ideas: [
      { title: 'Place value positions', text: 'Numbers up to 100,000 have ten thousands, thousands, hundreds, tens, and ones places.', example: '45,283 = 4 ten thousands + 5 thousands + 2 hundreds + 8 tens + 3 ones' },
      { title: 'Expanded notation form', text: 'Multiply each non-zero digit by its place value and add them together.', example: '45,283 = (4 × 10,000) + (5 × 1,000) + (2 × 100) + (8 × 10) + (3 × 1)' },
    ],
  },
  {
    code: '3.2B',
    goal: 'Understand that each place value is 10 times the value of the place to its right.',
    words: [
      { term: 'base-10 system', meaning: 'our number system where each place value is 10 times larger than the one to its right' },
      { term: '10 times', meaning: 'multiplied by 10' },
    ],
    ideas: [
      { title: 'Move left: multiply by 10', text: 'Each step to the left increases a digit\'s value by 10 times. Hundreds is 10 times tens, and thousands is 10 times hundreds.', example: '1,000 = 10 × 100' },
      { title: 'Grouping by tens', text: '10 ones make 1 ten, 10 tens make 1 hundred, and 10 hundreds make 1 thousand.', example: '10 hundreds = 1,000' },
    ],
  },
  {
    code: '3.2C',
    goal: 'Round whole numbers to the nearest 10, 100, 1,000, or 10,000 using a number line.',
    words: [
      { term: 'round', meaning: 'adjust a number to a nearby benchmark number that is easier to calculate with' },
      { term: 'halfway mark', meaning: 'the point exactly midway between two benchmark numbers' },
    ],
    ideas: [
      { title: 'Find the two multiples', text: 'Identify the two benchmark numbers your number lies between on the number line.', example: '347 is between 300 and 400' },
      { title: 'Use the halfway mark', text: 'If the number is at or past the halfway mark, round up. If it is below halfway, round down.', example: '347 is less than 350, so it rounds down to 300' },
    ],
  },
  {
    code: '3.2D',
    goal: 'Compare and order whole numbers up to 100,000 using >, <, or = symbols.',
    words: [
      { term: '>', meaning: 'greater than' },
      { term: '<', meaning: 'less than' },
      { term: '=', meaning: 'equal to' },
    ],
    ideas: [
      { title: 'Compare from the greatest place value', text: 'Line up numbers by place value and compare starting from the left. The first place that differs tells you which is greater.', example: '54,200 > 51,900 because 4 thousands > 1 thousand' },
      { title: 'Ordering a list of numbers', text: 'When ordering from least to greatest, find the smallest number first by checking highest place values.', example: '12,500 < 14,200 < 18,900' },
    ],
  },
  {
    code: '3.3A',
    goal: 'Represent fractions with denominators of 2, 3, 4, 6, and 8 using models and strip diagrams.',
    words: [
      { term: 'numerator', meaning: 'the top number in a fraction that tells how many equal parts are shaded or chosen' },
      { term: 'denominator', meaning: 'the bottom number that tells how many equal parts the whole is divided into' },
    ],
    ideas: [
      { title: 'Equal parts make the denominator', text: 'Count the total number of equal parts the whole is partitioned into. This is the denominator.', example: 'A rectangle cut into 6 equal parts has denominator 6' },
      { title: 'Shaded parts make the numerator', text: 'Count how many of those equal parts are shaded. This is the numerator.', example: '3 parts shaded out of 4 is {3/4}' },
    ],
  },
  {
    code: '3.3B',
    goal: 'Identify a fraction on a number line from 0 to 1 with denominators of 2, 3, 4, 6, and 8.',
    words: [
      { term: 'number line interval', meaning: 'the distance between consecutive marks on a number line' },
    ],
    ideas: [
      { title: 'Count the intervals between 0 and 1', text: 'Count the number of equal spaces between 0 and 1 to find the denominator.', example: '8 equal intervals between 0 and 1 means each step is {1/8}' },
      { title: 'Count steps from 0', text: 'Start at 0 and count the steps to the point to find the numerator.', example: '3 steps along eighths brings you to {3/8}' },
    ],
  },
  {
    code: '3.3C',
    goal: 'Explain that the unit fraction 1/b represents one part of a whole partitioned into b equal parts.',
    words: [
      { term: 'unit fraction', meaning: 'a fraction with a numerator of 1, representing one single equal part of a whole' },
    ],
    ideas: [
      { title: 'One part of the whole', text: 'A unit fraction always has a numerator of 1. It names the size of a single piece when a whole is divided equally.', example: '{1/4} means 1 out of 4 equal parts' },
      { title: 'More pieces means smaller pieces', text: 'As the denominator grows, the whole is split into more pieces, so each unit fraction becomes smaller.', example: '{1/8} is smaller than {1/4}' },
    ],
  },
  {
    code: '3.3D',
    goal: 'Compose and decompose fractions as a sum of unit fractions.',
    words: [
      { term: 'compose', meaning: 'combine smaller parts to make a fraction' },
      { term: 'decompose', meaning: 'break a fraction down into smaller fractional parts' },
    ],
    ideas: [
      { title: 'Sum of unit fractions', text: 'Any fraction a/b is formed by adding the unit fraction 1/b a total of a times.', example: '{3/4} = {1/4} + {1/4} + {1/4}' },
      { title: 'Decomposing in multiple ways', text: 'You can also break fractions into sums of fractions with the same denominator.', example: '{5/8} = {2/8} + {3/8}' },
    ],
  },
  {
    code: '3.3E',
    goal: 'Solve problems involving partitioning an object or set of objects equally among recipients.',
    words: [
      { term: 'partition', meaning: 'divide or split into equal shares' },
    ],
    ideas: [
      { title: 'Sharing a single whole', text: 'When 1 whole item is shared equally among n people, each person gets 1/n of the item.', example: '1 pizza shared by 4 friends gives each person {1/4}' },
      { title: 'Sharing a set of items', text: 'When a group of items is partitioned into equal groups, each recipient gets an equal fraction of the set.', example: '12 cookies shared among 3 kids gives each kid {1/3} of the cookies (4 cookies)' },
    ],
  },
  {
    code: '3.3F',
    goal: 'Identify and represent equivalent fractions with denominators 2, 3, 4, 6, and 8.',
    words: [
      { term: 'equivalent fractions', meaning: 'fractions that name the same amount or the same point on a number line' },
    ],
    ideas: [
      { title: 'Same shaded length', text: 'Two fractions are equivalent if their models cover the exact same amount of the same-sized whole.', example: '{1/2} covers the same area as {2/4} and {4/8}' },
      { title: 'Multiply top and bottom', text: 'Multiplying both numerator and denominator by the same number produces an equivalent fraction.', example: '{1/3} × 2/2 = {2/6}' },
    ],
  },
  {
    code: '3.3G',
    goal: 'Explain that equivalent fractions name the same point on a number line or same portion of a whole.',
    words: [
      { term: 'same portion', meaning: 'the identical amount or area of a whole' },
    ],
    ideas: [
      { title: 'Same location on a number line', text: 'Equivalent fractions land on the exact same location when plotted on number lines of equal length.', example: '{2/4} and {1/2} are at the exact same point' },
      { title: 'Same size wholes required', text: 'Fractions can only be compared or shown equivalent when they refer to the same size whole.', example: 'Half a giant pizza is not equal to half a small pizza' },
    ],
  },
  {
    code: '3.3H',
    goal: 'Compare two fractions with the same numerator or same denominator.',
    words: [
      { term: 'like denominators', meaning: 'fractions with the same bottom number' },
      { term: 'like numerators', meaning: 'fractions with the same top number' },
    ],
    ideas: [
      { title: 'Same denominator: compare numerators', text: 'When denominators match, parts are the same size. The fraction with more parts is greater.', example: '{5/8} > {3/8} because 5 parts > 3 parts' },
      { title: 'Same numerator: compare denominators', text: 'When numerators match, you have the same number of parts. The fraction with the smaller denominator has larger pieces.', example: '{2/3} > {2/6} because thirds are larger than sixths' },
    ],
  },
  {
    code: '3.4I',
    goal: 'Determine if a whole number is even or odd using divisibility rules.',
    words: [
      { term: 'even number', meaning: 'a number that can be divided into 2 equal groups with zero remainder' },
      { term: 'odd number', meaning: 'a number that leaves a remainder of 1 when divided by 2' },
    ],
    ideas: [
      { title: 'Look at the ones digit', text: 'Even numbers always end in 0, 2, 4, 6, or 8. Odd numbers always end in 1, 3, 5, 7, or 9.', example: '246 is even because it ends in 6; 581 is odd because it ends in 1' },
      { title: 'Pairing up objects', text: 'If objects can all be paired up with none left over, the total count is even.', example: '8 socks make 4 pairs (even)' },
    ],
  },
  {
    code: '3.7A',
    goal: 'Represent halves, fourths, and eighths as distances from zero on a number line.',
    words: [
      { term: 'distance from zero', meaning: 'how far along a number line a point is from the starting mark 0' },
    ],
    ideas: [
      { title: 'Fraction as a measurement', text: 'Fractions on a number line represent the distance measured from 0 to a given point.', example: 'A point at {3/4} is 3 fourth-units away from 0' },
      { title: 'Benchmark halves and fourths', text: '{2/4} and {4/8} are both at the halfway mark from 0 to 1.', example: '{4/8} = {1/2} distance from zero' },
    ],
  },

  // ==================== Strand 2: Computation and algebra ====================
  {
    code: '3.4A',
    goal: 'Solve addition and subtraction problems within 1,000 using place value and properties.',
    words: [
      { term: 'sum', meaning: 'the result of adding numbers' },
      { term: 'difference', meaning: 'the result of subtracting numbers' },
      { term: 'regrouping', meaning: 'trading 10 in one place value for 1 in the next place value' },
    ],
    ideas: [
      { title: 'Line up place values', text: 'Always add or subtract ones first, then tens, then hundreds, regrouping when needed.', example: '358 + 274: 8+4=12 ones (regroup 1 ten), 1+5+7=13 tens (regroup 1 hundred), 1+3+2=6 hundreds → 632' },
      { title: 'Two-step problems', text: 'Break word problems into steps: perform the first operation, then use the result for the next step.', example: 'Start with 250, add 100, then subtract 50: 250 + 100 = 350; 350 − 50 = 300' },
    ],
  },
  {
    code: '3.4B',
    goal: 'Estimate sums and differences by rounding to the nearest 10 or 100.',
    words: [
      { term: 'estimate', meaning: 'an answer close to the exact amount, found using rounded numbers' },
      { term: 'compatible numbers', meaning: 'friendly numbers that are easy to compute mentally' },
    ],
    ideas: [
      { title: 'Round before calculating', text: 'Round each number to the requested place value first, then add or subtract.', example: '38 + 53 rounded to nearest ten: 40 + 50 = 90' },
      { title: 'Reasonableness check', text: 'Estimating helps verify whether your exact computed answer makes sense.', example: '492 − 210 rounds to 500 − 200 = 300' },
    ],
  },
  {
    code: '3.4D',
    goal: 'Determine the total number of objects in arrays and equal groups up to 10 by 10.',
    words: [
      { term: 'array', meaning: 'an arrangement of objects in equal rows and columns' },
      { term: 'equal groups', meaning: 'groups that each contain the exact same number of items' },
    ],
    ideas: [
      { title: 'Rows times columns', text: 'To find the total in an array, multiply the number of rows by the number of columns.', example: '4 rows of 6 counters = 4 × 6 = 24' },
      { title: 'Equal groups as multiplication', text: 'Number of groups times items in each group equals the total.', example: '5 boxes of 8 crayons = 5 × 8 = 40' },
    ],
  },
  {
    code: '3.4E',
    goal: 'Represent multiplication using repeated addition, equal groups, arrays, and skip counting.',
    words: [
      { term: 'repeated addition', meaning: 'adding the same number multiple times' },
      { term: 'skip counting', meaning: 'counting forward by numbers other than 1' },
    ],
    ideas: [
      { title: 'Repeated addition connects to multiplication', text: 'Adding a number repeatedly is the same as multiplying.', example: '3 × 7 = 7 + 7 + 7 = 21' },
      { title: 'Equal jumps on a number line', text: 'Multiplication can be modeled as equal-sized jumps forward from zero.', example: '4 jumps of 5 on a number line lands on 20' },
    ],
  },
  {
    code: '3.4F',
    goal: 'Recall multiplication facts up to 10 by 10 and related division facts.',
    words: [
      { term: 'product', meaning: 'the result of multiplying two factors' },
      { term: 'quotient', meaning: 'the result of dividing a dividend by a divisor' },
    ],
    ideas: [
      { title: 'Multiplication facts practice', text: 'Knowing facts through 10 × 10 automatically helps with multi-digit operations and fractions.', example: '7 × 8 = 56' },
      { title: 'Fact families connect operations', text: 'Every multiplication fact has a partner division fact.', example: 'If 6 × 9 = 54, then 54 ÷ 6 = 9 and 54 ÷ 9 = 6' },
    ],
  },
  {
    code: '3.4G',
    goal: 'Multiply a two-digit number by a one-digit number using strategies and properties.',
    words: [
      { term: 'partial products', meaning: 'multiplying tens and ones separately, then adding the results' },
    ],
    ideas: [
      { title: 'Break into tens and ones', text: 'Split the 2-digit number into tens and ones, multiply each by the 1-digit number, and add.', example: '24 × 3 = (20 × 3) + (4 × 3) = 60 + 12 = 72' },
      { title: 'Standard algorithm', text: 'Multiply ones first, regroup any tens, then multiply tens and add the regrouped tens.', example: '35 × 4: 5×4=20 (regroup 2 tens), 3×4=12 tens + 2 tens = 14 tens → 140' },
    ],
  },
  {
    code: '3.4H',
    goal: 'Partition sets into equal shares and determine the number in each group.',
    words: [
      { term: 'equal shares', meaning: 'fair shares where each group gets an equal amount' },
    ],
    ideas: [
      { title: 'Fair sharing division', text: 'Divide the total number of items by the number of recipients to find how many each gets.', example: '24 stickers shared among 4 kids: 24 ÷ 4 = 6 each' },
      { title: 'Grouping division', text: 'Divide total items by group size to find how many groups can be made.', example: '30 students in groups of 5: 30 ÷ 5 = 6 groups' },
    ],
  },
  {
    code: '3.4J',
    goal: 'Determine quotients using the inverse relationship between multiplication and division.',
    words: [
      { term: 'inverse operations', meaning: 'operations that undo each other, like multiplication and division' },
    ],
    ideas: [
      { title: 'Think multiplication for division', text: 'To solve a division problem like 36 ÷ 4, ask: "What number times 4 equals 36?"', example: 'Since 4 × 9 = 36, 36 ÷ 4 = 9' },
      { title: 'Three numbers in harmony', text: 'A factor, factor, and product always form a related multiplication and division equation.', example: '8 × 7 = 56 means 56 ÷ 8 = 7' },
    ],
  },
  {
    code: '3.4K',
    goal: 'Solve one- and two-step multiplication and division word problems within 100.',
    words: [
      { term: 'two-step problem', meaning: 'a word problem that requires two separate mathematical operations to solve' },
    ],
    ideas: [
      { title: 'Identify each step', text: 'Read carefully to see what information is given and what must be found first.', example: '3 bags with 5 apples each plus 4 extra apples: 3 × 5 = 15; 15 + 4 = 19' },
      { title: 'Check your operations', text: 'Use multiplication when combining equal groups; use division when sharing or separating into equal groups.', example: '30 books shared across 5 shelves = 30 ÷ 5 = 6 books per shelf' },
    ],
  },
  {
    code: '3.5A',
    goal: 'Represent addition and subtraction word problems to 1,000 using strip diagrams and equations.',
    words: [
      { term: 'strip diagram', meaning: 'a rectangular visual model that shows parts and a total' },
      { term: 'unknown variable', meaning: 'a letter standing for the number you need to find' },
    ],
    ideas: [
      { title: 'Part-part-whole models', text: 'In a strip diagram, the long bar on top is the total, and the smaller boxes below are the parts.', example: 'Parts 150 and 80 combine to make total 230' },
      { title: 'Writing an equation with a letter', text: 'Translate the relationship into an equation with a letter for the missing quantity.', example: '140 + m = 200' },
    ],
  },
  {
    code: '3.5B',
    goal: 'Represent and solve multiplication and division problems using strip diagrams and equations.',
    words: [
      { term: 'equal parts diagram', meaning: 'a strip diagram split into equal-sized boxes representing equal groups' },
    ],
    ideas: [
      { title: 'Equal parts show multiplication', text: 'When all sections of a strip diagram are equal, multiply sections by the value in each section.', example: '4 sections of 6: 4 × 6 = 24' },
      { title: 'Splitting a total shows division', text: 'A known total split into equal sections represents division.', example: 'A total of 35 divided into 5 equal parts: 35 ÷ 5 = 7' },
    ],
  },
  {
    code: '3.5C',
    goal: 'Describe multiplication expressions as comparisons (e.g., 3 × 24 is 3 times as much as 24).',
    words: [
      { term: 'multiplicative comparison', meaning: 'comparing two amounts by asking how many times greater one is than the other' },
    ],
    ideas: [
      { title: '"Times as many" wording', text: 'Multiplication describes a scaling relationship rather than just adding more.', example: '4 × 12 means 4 times as many as 12' },
      { title: 'Comparing quantities', text: 'If Sam has $15 and Leo has 3 times as much, Leo has 3 × $15 = $45.', example: '3 × 15 = 45' },
    ],
  },
  {
    code: '3.5D',
    goal: 'Determine the unknown whole number in a multiplication or division equation relating three numbers.',
    words: [
      { term: 'missing factor', meaning: 'the unknown number being multiplied in an equation' },
    ],
    ideas: [
      { title: 'Finding a missing factor', text: 'To find the unknown factor in a × ? = c, divide the product by the known factor.', example: '6 × n = 48 → n = 48 ÷ 6 = 8' },
      { title: 'Finding a missing dividend or divisor', text: 'In division, dividend ÷ divisor = quotient. Multiply quotient by divisor to find the dividend.', example: 'm ÷ 4 = 7 → m = 4 × 7 = 28' },
    ],
  },
  {
    code: '3.5E',
    goal: 'Represent real-world relationships using number pairs in an input-output table.',
    words: [
      { term: 'input-output table', meaning: 'a table showing pairs of numbers that follow a specific mathematical rule' },
      { term: 'rule', meaning: 'the operation that transforms each input into its matching output' },
    ],
    ideas: [
      { title: 'Look across each row', text: 'Compare the input to the output for every row to discover the consistent rule.', example: 'If inputs 2, 3, 4 match outputs 8, 12, 16, the rule is × 4' },
      { title: 'Apply the rule to find missing outputs', text: 'Once you know the rule, apply it to any new input value.', example: 'Input 6 with rule × 4 gives output 24' },
    ],
  },

  // ==================== Strand 3: Geometry and measurement ====================
  {
    code: '3.6A',
    goal: 'Classify and sort two- and three-dimensional figures using formal geometric terms.',
    words: [
      { term: 'face', meaning: 'a flat surface of a 3D figure' },
      { term: 'edge', meaning: 'the line segment where two faces meet' },
      { term: 'vertex', meaning: 'a corner point where edges or sides meet' },
    ],
    ideas: [
      { title: 'Attributes of prisms and cubes', text: 'A rectangular prism and a cube both have 6 faces, 12 edges, and 8 vertices. A cube has 6 congruent square faces.', example: 'Prisms have flat polygonal faces' },
      { title: 'Curved figures', text: 'Cylinders have 2 circular flat faces and 1 curved surface. Cones have 1 circular base and 1 apex. Spheres have 0 flat faces.', example: 'Cylinder: 2 circular bases' },
    ],
  },
  {
    code: '3.6B',
    goal: 'Identify and describe attributes of quadrilaterals including rhombuses, rectangles, and trapezoids.',
    words: [
      { term: 'quadrilateral', meaning: 'any four-sided polygon' },
      { term: 'parallel lines', meaning: 'lines in a plane that never intersect and stay the same distance apart' },
    ],
    ideas: [
      { title: 'Special quadrilaterals', text: 'A parallelogram has 2 pairs of parallel sides. A trapezoid has exactly 1 pair of parallel sides. A rhombus has 4 equal sides.', example: 'A rectangle has 4 right angles' },
      { title: 'Squares belong to multiple groups', text: 'A square is a quadrilateral, a parallelogram, a rectangle (4 right angles), and a rhombus (4 equal sides).', example: 'All squares are rectangles' },
    ],
  },
  {
    code: '3.6C',
    goal: 'Determine the area of rectangles with whole number side lengths using unit squares and multiplication.',
    words: [
      { term: 'area', meaning: 'the amount of two-dimensional surface space inside a shape, measured in square units' },
      { term: 'unit square', meaning: 'a square with sides of length 1 unit used to measure area' },
    ],
    ideas: [
      { title: 'Tiling with squares', text: 'You can find area by counting the total number of square units needed to cover the rectangle without gaps or overlaps.', example: '3 rows of 5 squares = 15 square units' },
      { title: 'Area formula: length × width', text: 'Multiply the number of rows by the number of square units in each row: Area = length × width.', example: '6 cm × 4 cm = 24 square cm' },
    ],
  },
  {
    code: '3.6D',
    goal: 'Decompose composite figures formed by rectangles to determine total area.',
    words: [
      { term: 'composite figure', meaning: 'a shape made up of two or more simpler shapes joined together' },
      { term: 'additive property of area', meaning: 'the total area is the sum of the areas of its non-overlapping parts' },
    ],
    ideas: [
      { title: 'Split into simpler rectangles', text: 'Draw a dividing line to break an irregular shape (like an L-shape) into two separate rectangles.', example: 'Divide into Rectangle 1 and Rectangle 2' },
      { title: 'Find both areas and add', text: 'Calculate the area of each smaller rectangle using length × width, then add the areas together.', example: '12 sq ft + 8 sq ft = 20 sq ft' },
    ],
  },
  {
    code: '3.6E',
    goal: 'Decompose figures into parts with equal areas and express each part as a unit fraction.',
    words: [
      { term: 'equal area', meaning: 'having the exact same amount of surface space, even if the shapes differ' },
    ],
    ideas: [
      { title: 'Equal shares make unit fractions', text: 'When a shape is cut into n parts of equal area, each part has area equal to 1/n of the whole.', example: '4 equal-area sections each have area {1/4}' },
      { title: 'Shapes do not need to look identical', text: 'Two sections can have the exact same area even if they have different geometric shapes.', example: 'A rectangle and a triangle can both have an area of 6 square units' },
    ],
  },
  {
    code: '3.7B',
    goal: 'Determine the perimeter of a polygon or find a missing side length given the perimeter.',
    words: [
      { term: 'perimeter', meaning: 'the total distance around the outside edge of a polygon' },
    ],
    ideas: [
      { title: 'Add all side lengths', text: 'To find perimeter, add the lengths of every side around the polygon.', example: 'Rectangle with sides 5, 3, 5, 3: Perimeter = 5 + 3 + 5 + 3 = 16' },
      { title: 'Finding a missing side', text: 'Add the known side lengths, then subtract that sum from the total perimeter.', example: 'Perimeter 20 with known sides 6, 4, 6: missing side = 20 − 16 = 4' },
    ],
  },
  {
    code: '3.7C',
    goal: 'Solve problems involving addition and subtraction of time intervals in minutes.',
    words: [
      { term: 'elapsed time', meaning: 'the amount of time that passes from the start of an event to the end' },
      { term: 'interval', meaning: 'a period of time measured in minutes or hours' },
    ],
    ideas: [
      { title: 'Adding minutes to a start time', text: 'Add the duration in minutes to the start time, remembering that 60 minutes equals 1 full hour.', example: '2:15 p.m. + 45 minutes = 3:00 p.m.' },
      { title: 'Counting forward in chunks', text: 'Break the elapsed time into friendly chunks: jump 30 minutes, then 15 minutes.', example: 'Starting at 1:20: jump 40 min to 2:00, then 10 min to 2:10' },
    ],
  },
  {
    code: '3.7D',
    goal: 'Determine when it is appropriate to use measurements of liquid volume or weight.',
    words: [
      { term: 'liquid volume (capacity)', meaning: 'the amount of liquid a container can hold (measured in liters, milliliters, gallons)' },
      { term: 'weight / mass', meaning: 'how heavy an object is (measured in grams, kilograms, ounces, pounds)' },
    ],
    ideas: [
      { title: 'Capacity is for liquids', text: 'Use volume units (milliliters, liters, cups, gallons) when measuring liquids or container capacity.', example: 'A carton of milk holds liters' },
      { title: 'Weight is for heaviness', text: 'Use weight units (grams, kilograms, ounces, pounds) when finding how heavy an object is.', example: 'A watermelon is measured in pounds or kilograms' },
    ],
  },
  {
    code: '3.7E',
    goal: 'Measure and calculate liquid volume and weight using appropriate units and tools.',
    words: [
      { term: 'scale / balance', meaning: 'a tool used to measure weight or mass' },
      { term: 'beaker / graduated cylinder', meaning: 'a tool with marked lines used to measure liquid volume' },
    ],
    ideas: [
      { title: 'Reading measurement scales', text: 'Check the tick marks on a container or scale to see what interval each mark represents.', example: 'Marks counting by 50 mL' },
      { title: 'Combining or comparing amounts', text: 'Add to find total volume or weight; subtract to find the difference between two amounts.', example: '450 mL + 200 mL = 650 mL' },
    ],
  },

  // ==================== Strand 4: Data and money ====================
  {
    code: '3.4C',
    goal: 'Determine the total value of a collection of coins and bills.',
    words: [
      { term: 'quarter', meaning: '25 cents ($0.25)' },
      { term: 'dime', meaning: '10 cents ($0.10)' },
      { term: 'nickel', meaning: '5 cents ($0.05)' },
      { term: 'penny', meaning: '1 cent ($0.01)' },
    ],
    ideas: [
      { title: 'Count from greatest to least value', text: 'Count dollar bills first, then quarters, dimes, nickels, and pennies.', example: '1 dollar ($1.00) + 2 quarters ($0.50) + 1 dime ($0.10) = $1.60' },
      { title: 'Skip counting coin values', text: 'Quarters count by 25s (25¢, 50¢, 75¢, $1.00); dimes count by 10s; nickels count by 5s.', example: '3 quarters = 75¢' },
    ],
  },
  {
    code: '3.8A',
    goal: 'Summarize data using frequency tables, dot plots, and bar graphs with scaled intervals.',
    words: [
      { term: 'scaled interval', meaning: 'a scale where each grid line or mark counts by a number greater than 1, such as 2, 5, or 10' },
      { term: 'frequency table', meaning: 'a table that shows how often each category occurs' },
    ],
    ideas: [
      { title: 'Check the scale on the axis', text: 'Always examine the axis labels and numbers to see what each grid interval represents.', example: 'A scale counting by 5s means each line is 5 units' },
      { title: 'Dot plots count individual data points', text: 'Each dot above a label on a dot plot represents one person or object.', example: '4 dots above "3" means 4 people had that score' },
    ],
  },
  {
    code: '3.8B',
    goal: 'Solve one- and two-step problems using data from graphs and frequency tables.',
    words: [
      { term: 'compare data', meaning: 'subtract to find how many more or fewer items one category has than another' },
    ],
    ideas: [
      { title: 'Find "how many more"', text: 'Subtract the smaller category value from the larger category value.', example: '25 soccer fans − 15 baseball fans = 10 more soccer fans' },
      { title: 'Combining multiple categories', text: 'Add the values of two or more bars together to find a combined group total.', example: '12 red + 8 blue = 20 total' },
    ],
  },
  {
    code: '3.9A',
    goal: 'Explain the connection between human capital, labor, and earned income.',
    words: [
      { term: 'human capital', meaning: 'the skills, knowledge, and education a person develops through training and experience' },
      { term: 'income', meaning: 'money earned from working or providing labor' },
    ],
    ideas: [
      { title: 'Skills increase earning power', text: 'Gaining education, specialized training, and experience increases a worker\'s human capital, allowing them to earn higher wages.', example: 'A trained electrician earns higher income than an untrained worker' },
      { title: 'Labor is traded for income', text: 'Workers provide labor (work) to employers in exchange for income (wages or salary).', example: 'Working hours for pay' },
    ],
  },
  {
    code: '3.9B',
    goal: 'Describe the relationship between scarcity of resources and cost.',
    words: [
      { term: 'scarcity', meaning: 'when there is not enough of a resource or product to satisfy everyone\'s wants' },
      { term: 'abundance', meaning: 'having plenty or an extra supply of a resource or good' },
    ],
    ideas: [
      { title: 'Scarcity raises prices', text: 'When an item is rare or hard to find (scarce) while many people want it, its price usually increases.', example: 'Fresh fruit damaged by frost becomes scarce and costs more' },
      { title: 'Abundance lowers prices', text: 'When there is a surplus or large supply of an item, sellers often lower prices to encourage sales.', example: 'End-of-season sales on winter coats' },
    ],
  },
  {
    code: '3.9D',
    goal: 'Explain that credit is borrowed money that must be repaid, usually with interest.',
    words: [
      { term: 'credit', meaning: 'buying goods or services now with borrowed money and paying for them later' },
      { term: 'interest', meaning: 'an extra fee paid to a lender for the privilege of borrowing money' },
    ],
    ideas: [
      { title: 'Credit is not free money', text: 'Using credit cards or taking a loan means you are borrowing money from a bank or lender.', example: 'Borrowing $100 requires paying back $100 plus interest' },
      { title: 'Borrower responsibility', text: 'Borrowers have a legal responsibility to pay back all money borrowed, plus interest charges.', example: 'Monthly credit card bills' },
    ],
  },
  {
    code: '3.9E',
    goal: 'List reasons to save and explain the benefits of a savings plan.',
    words: [
      { term: 'savings plan', meaning: 'a deliberate budget plan to set aside a portion of income regularly for the future' },
      { term: 'emergency fund', meaning: 'money saved to cover unexpected expenses like doctor bills or car repairs' },
    ],
    ideas: [
      { title: 'Preparing for future goals', text: 'A savings plan helps individuals and families afford large future expenses like college tuition or buying a house.', example: 'Saving money every month for college' },
      { title: 'Protection against emergencies', text: 'Having savings prevents having to borrow money or go into debt when unexpected costs occur.', example: 'Having emergency savings for urgent repairs' },
    ],
  },
];
