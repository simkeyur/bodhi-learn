// Grade 1 math standards from 19 TAC §111.3 (Texas Essential Knowledge and Skills for Mathematics, Grade 1).
// 13 readiness + 26 supporting = 39 standards across 4 strands.
// Skipped standards: 1.1A–1.1G (process standards), 1.3E (spoken words / oral explanation),
// 1.5A (oral recitation of numbers), 1.6C (physical construction / drawing), 1.7A (hands-on classroom measuring tools).

import type { Standard, Strand } from '../../content/types.ts';

export const G1_MATH_STRANDS: Strand[] = [
  { id: 1, title: 'Numbers and place value', full: 'Numerical Representations and Relationships' },
  { id: 2, title: 'Addition and subtraction', full: 'Computations and Algebraic Relationships' },
  { id: 3, title: 'Shapes and measurement', full: 'Geometry and Measurement' },
  { id: 4, title: 'Coins, graphs, and money', full: 'Data Analysis and Personal Financial Literacy' },
];

const R = 'readiness' as const;
const S = 'supporting' as const;

export const G1_MATH: Standard[] = [
  // ----- Strand 1: Numerical Representations and Relationships (3 R, 4 S = 7) -----
  { code: '1.2A', strand: 1, kind: R, title: 'Instant recognition of quantities', text: 'Recognize instantly the quantity of structured arrangements.' },
  { code: '1.2B', strand: 1, kind: R, title: 'Compose and decompose numbers up to 120', text: 'Use concrete and pictorial models to compose and decompose numbers up to 120 in more than one way as so many hundreds, so many tens, and so many ones.' },
  { code: '1.2C', strand: 1, kind: S, title: 'Represent numbers up to 120', text: 'Use objects, pictures, and expanded and standard forms to represent numbers up to 120.' },
  { code: '1.2D', strand: 1, kind: S, title: 'Generate numbers greater or less', text: 'Generate a number that is greater than or less than a given whole number up to 120.' },
  { code: '1.2E', strand: 1, kind: S, title: 'Compare numbers using place value', text: 'Use place value to compare whole numbers up to 120 using comparative language.' },
  { code: '1.2F', strand: 1, kind: S, title: 'Order whole numbers up to 120', text: 'Order whole numbers up to 120 using place value and open number lines.' },
  { code: '1.2G', strand: 1, kind: R, title: 'Compare two numbers using symbols', text: 'Represent the comparison of two numbers to 100 using the symbols >, <, or =.' },

  // ----- Strand 2: Computations and Algebraic Relationships (4 R, 7 S = 11) -----
  { code: '1.3A', strand: 2, kind: S, title: 'Sum of a tens multiple and a 1-digit number', text: 'Use concrete and pictorial models to determine the sum of a multiple of 10 and a one-digit number in problems up to 99.' },
  { code: '1.3B', strand: 2, kind: R, title: 'Word problems with unknowns within 20', text: 'Use objects and pictorial models to solve word problems involving joining, separating, and comparing sets within 20 and unknowns as any one of the terms in the problem such as 2 + 4 = [ ]; 3 + [ ] = 7; and 5 = [ ] - 3.' },
  { code: '1.3C', strand: 2, kind: S, title: 'Compose 10 with two or more addends', text: 'Compose 10 with two or more addends with and without concrete objects.' },
  { code: '1.3D', strand: 2, kind: R, title: 'Basic fact strategies within 20', text: 'Apply basic fact strategies to add and subtract within 20, including making 10 and decomposing a number leading to a 10.' },
  { code: '1.3F', strand: 2, kind: S, title: 'Problem situations for number sentences', text: 'Generate and solve problem situations when given a number sentence involving addition or subtraction of numbers within 20.' },
  { code: '1.5B', strand: 2, kind: S, title: 'Skip count by 2s, 5s, and 10s', text: 'Skip count by twos, fives, and tens to determine the total number of objects up to 120 in a set.' },
  { code: '1.5C', strand: 2, kind: R, title: 'Determine 10 more and 10 less', text: 'Use relationships to determine the number that is 10 more and 10 less than a given number up to 120.' },
  { code: '1.5D', strand: 2, kind: S, title: 'Represent addition and subtraction word problems', text: 'Represent word problems involving addition and subtraction of whole numbers up to 20 using concrete and pictorial models and number sentences.' },
  { code: '1.5E', strand: 2, kind: S, title: 'Understand the equal sign', text: 'Understand that the equal sign represents a relationship where expressions on each side of the equal sign represent the same value(s).' },
  { code: '1.5F', strand: 2, kind: R, title: 'Determine the unknown whole number in an equation', text: 'Determine the unknown whole number in an addition or subtraction equation when the unknown may be any one of the three or four terms in the equation.' },
  { code: '1.5G', strand: 2, kind: S, title: 'Properties of operations to add and subtract', text: 'Apply properties of operations to add and subtract two or three numbers.' },

  // ----- Strand 3: Geometry and Measurement (3 R, 8 S = 11) -----
  { code: '1.6A', strand: 3, kind: S, title: 'Classify 2D shapes with informal language', text: 'Classify and sort regular and irregular two-dimensional shapes based on attributes using informal geometric language.' },
  { code: '1.6B', strand: 3, kind: S, title: 'Distinguish defining attributes of shapes', text: 'Distinguish between attributes that define a two-dimensional or three-dimensional figure and attributes that do not define the shape.' },
  { code: '1.6D', strand: 3, kind: R, title: 'Identify 2D shapes and formal attributes', text: 'Identify two-dimensional shapes, including circles, triangles, rectangles, and squares, as special rectangles, rhombuses, and hexagons and describe their attributes using formal geometric language.' },
  { code: '1.6E', strand: 3, kind: S, title: 'Identify 3D solids and formal attributes', text: 'Identify three-dimensional solids, including spheres, cones, cylinders, rectangular prisms (including cubes), and triangular prisms, and describe their attributes using formal geometric language.' },
  { code: '1.6F', strand: 3, kind: S, title: 'Compose 2D shapes to create target shapes', text: 'Compose two-dimensional shapes by joining two, three, or four figures to produce a target shape in more than one way if possible.' },
  { code: '1.6G', strand: 3, kind: R, title: 'Partition 2D shapes into halves and fourths', text: 'Partition two-dimensional figures into two and four fair shares or equal parts and describe the parts using words.' },
  { code: '1.6H', strand: 3, kind: S, title: 'Identify examples of halves and fourths', text: 'Identify examples and non-examples of halves and fourths.' },
  { code: '1.7B', strand: 3, kind: S, title: 'Measure length with same-size units', text: 'Illustrate that the length of an object is the number of same-size units of length that, when laid end-to-end with no gaps or overlaps, reach from one end of the object to the other.' },
  { code: '1.7C', strand: 3, kind: S, title: 'Compare measurements using two unit lengths', text: 'Measure the same object/distance with units of two different lengths and describe how and why the measurements differ.' },
  { code: '1.7D', strand: 3, kind: S, title: 'Describe length with a number and unit', text: 'Describe a length to the nearest whole unit using a number and a unit.' },
  { code: '1.7E', strand: 3, kind: R, title: 'Tell time to the hour and half hour', text: 'Tell time to the hour and half hour using analog and digital clocks.' },

  // ----- Strand 4: Data Analysis and Personal Financial Literacy (3 R, 7 S = 10) -----
  { code: '1.4A', strand: 4, kind: R, title: 'Identify coins by value and relationships', text: 'Identify U.S. coins, including pennies, nickels, dimes, and quarters, by value and describe the relationships among them.' },
  { code: '1.4B', strand: 4, kind: S, title: 'Write values with the cent symbol', text: 'Write a number with the cent symbol to describe the value of a coin.' },
  { code: '1.4C', strand: 4, kind: R, title: 'Value of a collection of coins', text: 'Use relationships to count by twos, fives, and tens to determine the value of a collection of pennies, nickels, and/or dimes.' },
  { code: '1.8A', strand: 4, kind: S, title: 'Collect and organize data with tallies and charts', text: 'Collect, sort, and organize data in up to three categories using models/representations such as tally marks or T-charts.' },
  { code: '1.8B', strand: 4, kind: S, title: 'Create picture and bar-type graphs', text: 'Use data to create picture and bar-type graphs.' },
  { code: '1.8C', strand: 4, kind: R, title: 'Draw conclusions from picture and bar graphs', text: 'Draw conclusions and generate and answer questions using information from picture and bar-type graphs.' },
  { code: '1.9A', strand: 4, kind: S, title: 'Define money earned as income', text: 'Define money earned as income.' },
  { code: '1.9B', strand: 4, kind: S, title: 'Income, goods, and wants vs. needs', text: 'Identify income as a means of obtaining goods and services, oftentimes making choices between wants and needs.' },
  { code: '1.9C', strand: 4, kind: S, title: 'Distinguish between spending and saving', text: 'Distinguish between spending and saving.' },
  { code: '1.9D', strand: 4, kind: S, title: 'Consider charitable giving', text: 'Consider charitable giving.' },
];
