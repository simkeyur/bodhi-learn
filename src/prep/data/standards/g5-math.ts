// Grade 5 math standards eligible for the state test, from TEA's "SST Grade 5 Mathematics Assessment:
// Eligible TEKS" (revised August 2026; the same standards as STAAR). 12 readiness + 24 supporting = 36,
// matching the SST grade 5 math blueprint. `title` is our short name; `text` is the TEKS wording.

import type { Standard, Strand } from '../../content/types.ts';

export const G5_MATH_STRANDS: Strand[] = [
  { id: 1, title: 'Numbers and place value', full: 'Numerical Representations and Relationships' },
  { id: 2, title: 'Computation and algebra', full: 'Computations and Algebraic Relationships' },
  { id: 3, title: 'Geometry and measurement', full: 'Geometry and Measurement' },
  { id: 4, title: 'Data and money', full: 'Data Analysis and Personal Financial Literacy' },
];

const R = 'readiness' as const;
const S = 'supporting' as const;

export const G5_MATH: Standard[] = [
  // ----- Strand 1 -----
  { code: '5.2A', strand: 1, kind: S, title: 'Decimals in expanded form', text: 'Represent the value of the digit in decimals through the thousandths using expanded notation and numerals.' },
  { code: '5.2B', strand: 1, kind: R, title: 'Compare and order decimals', text: 'Compare and order two decimals to thousandths and represent comparisons using the symbols >, <, or =.' },
  { code: '5.2C', strand: 1, kind: S, title: 'Round decimals', text: 'Round decimals to tenths or hundredths.' },
  { code: '5.4A', strand: 1, kind: S, title: 'Prime and composite numbers', text: 'Identify prime and composite numbers.' },
  { code: '5.4E', strand: 1, kind: S, title: 'Parentheses and brackets', text: 'Describe the meaning of parentheses and brackets in a numeric expression.' },
  { code: '5.4F', strand: 1, kind: R, title: 'Simplify expressions', text: 'Simplify numerical expressions that do not involve exponents, including up to two levels of grouping.' },

  // ----- Strand 2 -----
  { code: '5.3A', strand: 2, kind: S, title: 'Estimate', text: 'Estimate to determine solutions to mathematical and real-world problems involving addition, subtraction, multiplication, or division.' },
  { code: '5.3B', strand: 2, kind: S, title: 'Multiply 3-digit by 2-digit', text: 'Multiply with fluency a three-digit number by a two-digit number using the standard algorithm.' },
  { code: '5.3C', strand: 2, kind: S, title: 'Divide by a 2-digit number', text: 'Solve with proficiency for quotients of up to a four-digit dividend by a two-digit divisor using strategies and the standard algorithm.' },
  { code: '5.3D', strand: 2, kind: S, title: 'Model decimal multiplication', text: 'Represent multiplication of decimals with products to the hundredths using objects and pictorial models, including area models.' },
  { code: '5.3E', strand: 2, kind: R, title: 'Multiply decimals', text: 'Solve for products of decimals to the hundredths, including situations involving money, using strategies based on place-value understandings, properties of operations, and the relationship to the multiplication of whole numbers.' },
  { code: '5.3F', strand: 2, kind: S, title: 'Model decimal division', text: 'Represent quotients of decimals to the hundredths, up to four-digit dividends and two-digit whole number divisors, using objects and pictorial models, including area models.' },
  { code: '5.3G', strand: 2, kind: R, title: 'Divide decimals', text: 'Solve for quotients of decimals to the hundredths, up to four-digit dividends and two-digit whole number divisors, using strategies and algorithms, including the standard algorithm.' },
  { code: '5.3H', strand: 2, kind: S, title: 'Model adding unlike fractions', text: 'Represent and solve addition and subtraction of fractions with unequal denominators referring to the same whole using objects and pictorial models and properties of operations.' },
  { code: '5.3I', strand: 2, kind: S, title: 'Whole number times a fraction', text: 'Represent and solve multiplication of a whole number and a fraction that refers to the same whole using objects and pictorial models, including area models.' },
  { code: '5.3J', strand: 2, kind: S, title: 'Model dividing with unit fractions', text: 'Represent division of a unit fraction by a whole number and the division of a whole number by a unit fraction such as 1/3 ÷ 7 and 7 ÷ 1/3 using objects and pictorial models, including area models.' },
  { code: '5.3K', strand: 2, kind: R, title: 'Add and subtract fractions and decimals', text: 'Add and subtract positive rational numbers fluently.' },
  { code: '5.3L', strand: 2, kind: R, title: 'Divide with unit fractions', text: 'Divide whole numbers by unit fractions and unit fractions by whole numbers.' },
  { code: '5.4B', strand: 2, kind: R, title: 'Multi-step problems with equations', text: 'Represent and solve multi-step problems involving the four operations with whole numbers using equations with a letter standing for the unknown quantity.' },
  { code: '5.4C', strand: 2, kind: R, title: 'Patterns from a rule', text: 'Generate a numerical pattern when given a rule in the form y = ax or y = x + a and graph.' },
  { code: '5.4D', strand: 2, kind: S, title: 'Additive or multiplicative patterns', text: 'Recognize the difference between additive and multiplicative numerical patterns given in a table or graph.' },

  // ----- Strand 3 (TEA's document prints 5.4H as "5.4 (A)" under this strand; it is 5.4H) -----
  { code: '5.4H', strand: 3, kind: R, title: 'Perimeter, area and volume problems', text: 'Represent and solve problems related to perimeter and/or area and related to volume.' },
  { code: '5.5A', strand: 3, kind: R, title: 'Classify 2-D figures', text: 'Classify two-dimensional figures in a hierarchy of sets and subsets using graphic organizers based on their attributes and properties.' },
  { code: '5.6A', strand: 3, kind: S, title: 'Unit cubes and volume', text: 'Recognize a cube with side length of one unit as a unit cube having one cubic unit of volume and the volume of a three-dimensional figure as the number of unit cubes (n cubic units) needed to fill it with no gaps or overlaps if possible.' },
  { code: '5.6B', strand: 3, kind: S, title: 'Volume by layers', text: 'Determine the volume of a rectangular prism with whole number side lengths in problems related to the number of layers times the number of unit cubes in the area of the base.' },
  { code: '5.7A', strand: 3, kind: S, title: 'Convert measurements', text: 'Solve problems by calculating conversions within a measurement system, customary or metric.' },
  { code: '5.8A', strand: 3, kind: S, title: 'The coordinate plane', text: 'Describe the key attributes of the coordinate plane: the axes, the origin (0, 0), and what the x- and y-coordinates of an ordered pair mean.' },
  { code: '5.8B', strand: 3, kind: S, title: 'How to graph a point', text: 'Describe the process for graphing ordered pairs of numbers in the first quadrant of the coordinate plane.' },
  { code: '5.8C', strand: 3, kind: R, title: 'Graph ordered pairs', text: 'Graph in the first quadrant of the coordinate plane ordered pairs of numbers arising from mathematical and real-world problems, including those generated by number patterns or found in an input-output table.' },

  // ----- Strand 4 -----
  { code: '5.9A', strand: 4, kind: S, title: 'Show data in graphs', text: 'Represent categorical data with bar graphs or frequency tables and numerical data, including data sets of measurements in fractions or decimals, with dot plots or stem-and-leaf plots.' },
  { code: '5.9B', strand: 4, kind: S, title: 'Scatterplots', text: 'Represent discrete paired data on a scatterplot.' },
  { code: '5.9C', strand: 4, kind: R, title: 'Solve problems with data', text: 'Solve one- and two-step problems using data from a frequency table, dot plot, bar graph, stem-and-leaf plot, or scatterplot.' },
  { code: '5.10A', strand: 4, kind: S, title: 'Kinds of taxes', text: 'Define income tax, payroll tax, sales tax, and property tax.' },
  { code: '5.10B', strand: 4, kind: S, title: 'Gross and net income', text: 'Explain the difference between gross income and net income.' },
  { code: '5.10E', strand: 4, kind: S, title: 'Fix a budget', text: 'Describe actions that might be taken to balance a budget when expenses exceed income.' },
  { code: '5.10F', strand: 4, kind: S, title: 'Balance a budget', text: 'Balance a simple budget.' },
];

