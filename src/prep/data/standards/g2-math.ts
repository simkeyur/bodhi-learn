// Grade 2 math standards from 19 TAC §111.4 (Texas Essential Knowledge and Skills for Mathematics, Grade 2).
// 16 readiness + 27 supporting = 43 standards across 4 strands.
// Skipped standards: 2.1A–2.1G (process standards).

import type { Standard, Strand } from '../../content/types.ts';

export const G2_MATH_STRANDS: Strand[] = [
  { id: 1, title: 'Numbers and place value', full: 'Numerical Representations and Relationships' },
  { id: 2, title: 'Addition and subtraction', full: 'Computations and Algebraic Relationships' },
  { id: 3, title: 'Geometry and measurement', full: 'Geometry and Measurement' },
  { id: 4, title: 'Data, money, and financial literacy', full: 'Data Analysis and Personal Financial Literacy' },
];

const R = 'readiness' as const;
const S = 'supporting' as const;

export const G2_MATH: Standard[] = [
  // ----- Strand 1: Numerical Representations and Relationships (4 R, 6 S = 10) -----
  { code: '2.2A', strand: 1, kind: R, title: 'Compose and decompose numbers up to 1,200', text: 'Use concrete and pictorial models to compose and decompose numbers up to 1,200 in more than one way as a sum of so many thousands, hundreds, tens, and ones.' },
  { code: '2.2B', strand: 1, kind: R, title: 'Standard, word, and expanded forms to 1,200', text: 'Use standard, word, and expanded forms to represent numbers up to 1,200.' },
  { code: '2.2C', strand: 1, kind: S, title: 'Generate numbers greater or less up to 1,200', text: 'Generate a number that is greater than or less than a given whole number up to 1,200.' },
  { code: '2.2D', strand: 1, kind: R, title: 'Compare and order numbers up to 1,200', text: 'Use place value to compare and order whole numbers up to 1,200 using comparative language, numbers, and symbols (>, <, or =).' },
  { code: '2.2E', strand: 1, kind: S, title: 'Locate numbers on an open number line', text: 'Locate the position of a given whole number on an open number line.' },
  { code: '2.2F', strand: 1, kind: S, title: 'Name point on a number line', text: 'Name the whole number that corresponds to a specific point on a number line.' },
  { code: '2.3A', strand: 1, kind: R, title: 'Partition objects into equal parts (halves, fourths, eighths)', text: 'Partition objects into equal parts and name the parts, including halves, fourths, and eighths, using words.' },
  { code: '2.3B', strand: 1, kind: S, title: 'Explain fraction part size and number of parts', text: 'Explain that the more fractional parts used to make a whole, the smaller the part; and the fewer the fractional parts, the larger the part.' },
  { code: '2.3C', strand: 1, kind: S, title: 'Count fractional parts beyond one whole', text: 'Use concrete models to count fractional parts beyond one whole using words and recognize how many parts it takes to equal one whole.' },
  { code: '2.3D', strand: 1, kind: S, title: 'Examples and non-examples of halves, fourths, eighths', text: 'Identify examples and non-examples of halves, fourths, and eighths.' },

  // ----- Strand 2: Computations and Algebraic Relationships (5 R, 4 S = 9) -----
  { code: '2.4A', strand: 2, kind: R, title: 'Recall basic facts within 20 with automaticity', text: 'Recall basic facts to add and subtract within 20 with automaticity.' },
  { code: '2.4B', strand: 2, kind: R, title: 'Add up to four 2-digit numbers and subtract 2-digit numbers', text: 'Add up to four two-digit numbers and subtract two-digit numbers using mental strategies and algorithms based on knowledge of place value and properties of operations.' },
  { code: '2.4C', strand: 2, kind: R, title: 'Solve addition and subtraction word problems to 1,000', text: 'Solve one-step and multi-step word problems involving addition and subtraction within 1,000 using a variety of strategies based on place value, including algorithms.' },
  { code: '2.4D', strand: 2, kind: S, title: 'Generate situations for addition and subtraction', text: 'Generate and solve problem situations for a given mathematical number sentence involving addition and subtraction of whole numbers within 1,000.' },
  { code: '2.6A', strand: 2, kind: R, title: 'Contextual multiplication with equivalent sets', text: 'Model, create, and describe contextual multiplication situations in which equivalent sets of concrete objects are joined.' },
  { code: '2.6B', strand: 2, kind: S, title: 'Contextual division with equal shares', text: 'Model, create, and describe contextual division situations in which a set of concrete objects is separated into equivalent sets.' },
  { code: '2.7A', strand: 2, kind: S, title: 'Even or odd numbers up to 40', text: 'Determine whether a number up to 40 is even or odd using pairings of objects to represent the number.' },
  { code: '2.7B', strand: 2, kind: S, title: '10 or 100 more or less up to 1,200', text: 'Use an understanding of place value to determine the number that is 10 or 100 more or less than a given number up to 1,200.' },
  { code: '2.7C', strand: 2, kind: R, title: 'Word problems with unknowns in any position', text: 'Represent and solve addition and subtraction word problems where unknowns may be any one of the terms in the problem.' },

  // ----- Strand 3: Geometry and Measurement (4 R, 8 S = 12) -----
  { code: '2.8A', strand: 3, kind: S, title: 'Create 2D shapes based on attributes', text: 'Create two-dimensional shapes based on given attributes, including number of sides and vertices.' },
  { code: '2.8B', strand: 3, kind: S, title: 'Classify and sort 3D solids', text: 'Classify and sort three-dimensional solids, including spheres, cones, cylinders, rectangular prisms (including cubes as special rectangular prisms), and triangular prisms, based on attributes using formal geometric language.' },
  { code: '2.8C', strand: 3, kind: R, title: 'Classify polygons up to 12 sides', text: 'Classify and sort polygons with 12 or fewer sides according to attributes, including identifying the number of sides and number of vertices.' },
  { code: '2.8D', strand: 3, kind: S, title: 'Compose 2D shapes and 3D solids', text: 'Compose two-dimensional shapes and three-dimensional solids with given properties or attributes.' },
  { code: '2.8E', strand: 3, kind: S, title: 'Decompose 2D shapes into geometric parts', text: 'Decompose two-dimensional shapes such as cutting out a square from a rectangle, dividing a shape in half, or partitioning a rectangle into identical triangles and identify the resulting geometric parts.' },
  { code: '2.9A', strand: 3, kind: S, title: 'Measure length using concrete models', text: 'Find the length of objects using concrete models for standard units of length.' },
  { code: '2.9B', strand: 3, kind: S, title: 'Inverse relationship between unit size and count', text: 'Describe the inverse relationship between the size of the unit and the number of units needed to equal the length of an object.' },
  { code: '2.9C', strand: 3, kind: S, title: 'Represent numbers as distances on a number line', text: 'Represent whole numbers as distances from any given location on a number line.' },
  { code: '2.9D', strand: 3, kind: R, title: 'Measure length to nearest marked unit', text: 'Determine the length of an object to the nearest marked unit using rulers, yardsticks, meter sticks, or measuring tapes.' },
  { code: '2.9E', strand: 3, kind: S, title: 'Estimate and solve problems involving length', text: 'Determine a solution to a problem involving length, including estimating lengths.' },
  { code: '2.9F', strand: 3, kind: R, title: 'Area of rectangle using square units', text: 'Use concrete models of square units to find the area of a rectangle by covering it with no gaps or overlaps, counting to find the total number of square units, and describing the measurement using a number and the unit.' },
  { code: '2.9G', strand: 3, kind: R, title: 'Tell time to the nearest minute, a.m. and p.m.', text: 'Read and write time to the nearest one-minute increment using analog and digital clocks and distinguish between a.m. and p.m.' },

  // ----- Strand 4: Data Analysis and Personal Financial Literacy (3 R, 9 S = 12) -----
  { code: '2.5A', strand: 4, kind: R, title: 'Value of a collection of coins up to $1.00', text: 'Determine the value of a collection of coins up to one dollar.' },
  { code: '2.5B', strand: 4, kind: S, title: 'Use cent, dollar sign, and decimal point', text: 'Use the cent symbol, dollar sign, and the decimal point to name the value of a collection of coins.' },
  { code: '2.10A', strand: 4, kind: S, title: 'Bar length and picture count represent data', text: 'Explain that the length of a bar in a bar graph or the number of pictures in a pictograph represents the number of data points for a given category.' },
  { code: '2.10B', strand: 4, kind: R, title: 'Organize data using pictographs and bar graphs', text: 'Organize a collection of data with up to four categories using pictographs and bar graphs with intervals of one or more.' },
  { code: '2.10C', strand: 4, kind: R, title: 'Solve 1-step word problems from graphs', text: 'Write and solve one-step word problems involving addition or subtraction using data represented within pictographs and bar graphs with intervals of one.' },
  { code: '2.10D', strand: 4, kind: S, title: 'Draw conclusions and predictions from graphs', text: 'Draw conclusions and make predictions from information in a graph.' },
  { code: '2.11A', strand: 4, kind: S, title: 'How savings accumulate over time', text: 'Calculate how money saved can accumulate into a larger amount over time.' },
  { code: '2.11B', strand: 4, kind: S, title: 'Saving as an alternative to spending', text: 'Explain that saving is an alternative to spending.' },
  { code: '2.11C', strand: 4, kind: S, title: 'Distinguish between deposit and withdrawal', text: 'Distinguish between a deposit and a withdrawal.' },
  { code: '2.11D', strand: 4, kind: S, title: 'Responsible vs. irresponsible borrowing', text: 'Identify examples of borrowing and distinguish between responsible and irresponsible borrowing.' },
  { code: '2.11E', strand: 4, kind: S, title: 'Evaluate lending decisions', text: 'Identify examples of lending and use concepts of benefits and costs to evaluate lending decisions.' },
  { code: '2.11F', strand: 4, kind: S, title: 'Producers, consumers, and cost to produce', text: 'Differentiate between producers and consumers and calculate the cost to produce a simple item.' },
];
