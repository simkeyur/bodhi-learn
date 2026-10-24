// Grade 4 math standards eligible for the state test, from TEA's "SST Grade 4 Mathematics Assessment:
// Eligible TEKS" (revised August 2026; the same standards as STAAR). 13 readiness + 28 supporting = 41,
// matching the SST grade 4 math blueprint. `title` is our short name; `text` is the TEKS wording.

import type { Standard, Strand } from '../../content/types.ts';

export const G4_MATH_STRANDS: Strand[] = [
  { id: 1, title: 'Numbers and place value', full: 'Numerical Representations and Relationships' },
  { id: 2, title: 'Computation and algebra', full: 'Computations and Algebraic Relationships' },
  { id: 3, title: 'Geometry and measurement', full: 'Geometry and Measurement' },
  { id: 4, title: 'Data and money', full: 'Data Analysis and Personal Financial Literacy' },
];

const R = 'readiness' as const;
const S = 'supporting' as const;

export const G4_MATH: Standard[] = [
  // ----- Strand 1 -----
  { code: '4.2A', strand: 1, kind: S, title: '10 times and 1/10 place value', text: 'Interpret the value of each place-value position as 10 times the position to the right and as one-tenth of the value of the place to its left.' },
  { code: '4.2B', strand: 1, kind: R, title: 'Expanded notation and numerals', text: 'Represent the value of the digit in whole numbers through 1,000,000,000 and decimals to the hundredths using expanded notation and numerals.' },
  { code: '4.2C', strand: 1, kind: S, title: 'Compare and order whole numbers', text: 'Compare and order whole numbers to 1,000,000,000 and represent comparisons using the symbols >, <, or =.' },
  { code: '4.2D', strand: 1, kind: S, title: 'Round whole numbers', text: 'Round whole numbers to a given place value through the hundred thousands place.' },
  { code: '4.2E', strand: 1, kind: S, title: 'Represent decimals with models', text: 'Represent decimals, including tenths and hundredths, using concrete and visual models and money.' },
  { code: '4.2F', strand: 1, kind: S, title: 'Compare and order decimals', text: 'Compare and order decimals using concrete and visual models to the hundredths.' },
  { code: '4.2G', strand: 1, kind: R, title: 'Relate decimals and fractions', text: 'Relate decimals to fractions that name tenths and hundredths.' },
  { code: '4.2H', strand: 1, kind: S, title: 'Decimals on a number line', text: 'Determine the corresponding decimal to the tenths or hundredths place of a specified point on a number line.' },
  { code: '4.3A', strand: 1, kind: S, title: 'Fractions as sums of unit fractions', text: 'Represent a fraction a/b as a sum of fractions 1/b, where a and b are whole numbers and b > 0, including when a > b.' },
  { code: '4.3B', strand: 1, kind: S, title: 'Decompose fractions', text: 'Decompose a fraction in more than one way into a sum of fractions with the same denominator using concrete and pictorial models and recording results with symbolic representations.' },
  { code: '4.3C', strand: 1, kind: S, title: 'Equivalent fractions', text: 'Determine if two given fractions are equivalent using a variety of methods.' },
  { code: '4.3D', strand: 1, kind: R, title: 'Compare fractions', text: 'Compare two fractions with different numerators and different denominators and represent the comparison using the symbols >, =, or <.' },
  { code: '4.3G', strand: 1, kind: S, title: 'Fractions and decimals on a number line', text: 'Represent fractions and decimals to the tenths or hundredths as distances from zero on a number line.' },

  // ----- Strand 2 -----
  { code: '4.3E', strand: 2, kind: R, title: 'Add and subtract like fractions', text: 'Represent and solve addition and subtraction of fractions with equal denominators using objects and pictorial models that build to the number line and properties of operations.' },
  { code: '4.3F', strand: 2, kind: S, title: 'Benchmark fractions to estimate', text: 'Evaluate the reasonableness of sums and differences of fractions using benchmark fractions 0, 1/4, 1/2, 3/4, and 1, referring to the same whole.' },
  { code: '4.4A', strand: 2, kind: R, title: 'Add and subtract whole numbers and decimals', text: 'Add and subtract whole numbers and decimals to the hundredths place using the standard algorithm.' },
  { code: '4.4B', strand: 2, kind: S, title: 'Multiply by 10 or 100', text: 'Determine products of a number and 10 or 100 using properties of operations and place value understandings.' },
  { code: '4.4C', strand: 2, kind: S, title: 'Represent products with arrays and area models', text: 'Represent the product of 2 two-digit numbers using arrays, area models, or equations, including perfect squares through 15 by 15.' },
  { code: '4.4D', strand: 2, kind: S, title: 'Multiply up to 4 digits by 1 digit and 2 by 2 digits', text: 'Use strategies and algorithms, including the standard algorithm, to multiply up to a four-digit number by a one-digit number and to multiply a two-digit number by a two-digit number.' },
  { code: '4.4E', strand: 2, kind: S, title: 'Represent division with models', text: 'Represent the quotient of up to a four-digit whole number divided by a one-digit whole number using arrays, area models, or equations.' },
  { code: '4.4F', strand: 2, kind: S, title: 'Divide by a 1-digit divisor', text: 'Use strategies and algorithms, including the standard algorithm, to divide up to a four-digit dividend by a one-digit divisor.' },
  { code: '4.4G', strand: 2, kind: S, title: 'Estimate solutions with rounding', text: 'Round to the nearest 10, 100, or 1,000 or use compatible numbers to estimate solutions involving whole numbers.' },
  { code: '4.4H', strand: 2, kind: R, title: 'Multiply and divide multi-step problems', text: 'Solve with fluency one- and two-step problems involving multiplication and division, including interpreting remainders.' },
  { code: '4.5A', strand: 2, kind: R, title: 'Multi-step equations and strip diagrams', text: 'Represent multi-step problems involving the four operations with whole numbers using strip diagrams and equations with a letter standing for the unknown quantity.' },
  { code: '4.5B', strand: 2, kind: R, title: 'Input-output tables and number patterns', text: 'Represent problems using an input-output table and numerical expressions to generate a number pattern that follows a given rule representing the relationship of the values in the resulting sequence and their position in the sequence.' },

  // ----- Strand 3 -----
  { code: '4.5D', strand: 3, kind: R, title: 'Perimeter and area of rectangles', text: 'Solve problems related to perimeter and area of rectangles where dimensions are whole numbers.' },
  { code: '4.6A', strand: 3, kind: S, title: 'Lines, rays, and angles', text: 'Identify points, lines, line segments, rays, angles, and perpendicular and parallel lines.' },
  { code: '4.6B', strand: 3, kind: S, title: 'Lines of symmetry', text: 'Identify and draw one or more lines of symmetry, if they exist, for a two-dimensional figure.' },
  { code: '4.6C', strand: 3, kind: S, title: 'Acute, right, and obtuse triangles', text: 'Apply knowledge of right angles to identify acute, right, and obtuse triangles.' },
  { code: '4.6D', strand: 3, kind: R, title: 'Classify 2-D figures by lines and angles', text: 'Classify two-dimensional figures based on the presence or absence of parallel or perpendicular lines or the presence or absence of angles of a specified size.' },
  { code: '4.7C', strand: 3, kind: R, title: 'Measure angles with a protractor', text: 'Determine the approximate measures of angles in degrees to the nearest whole number using a protractor.' },
  { code: '4.7D', strand: 3, kind: S, title: 'Draw and identify angles', text: 'Draw an angle with a given measure.' },
  { code: '4.7E', strand: 3, kind: S, title: 'Adjacent angles and unknown measures', text: 'Determine the measure of an unknown angle formed by two non-overlapping adjacent angles given one or both angle measures.' },
  { code: '4.8A', strand: 3, kind: S, title: 'Relative sizes of measurement units', text: 'Identify relative sizes of measurement units within the customary and metric systems.' },
  { code: '4.8B', strand: 3, kind: S, title: 'Convert units with tables', text: 'Convert measurements within the same measurement system, customary or metric, from a smaller unit into a larger unit or a larger unit into a smaller unit when given other equivalent measures represented in a table.' },
  { code: '4.8C', strand: 3, kind: R, title: 'Solve measurement problems', text: 'Solve problems that deal with measurements of length, intervals of time, liquid volumes, mass, and money using addition, subtraction, multiplication, or division as appropriate.' },

  // ----- Strand 4 -----
  { code: '4.9A', strand: 4, kind: R, title: 'Frequency tables, dot plots, and stem-and-leaf plots', text: 'Represent data on a frequency table, dot plot, or stem-and-leaf plot marked with whole numbers and fractions.' },
  { code: '4.9B', strand: 4, kind: S, title: 'Solve problems with data representations', text: 'Solve one- and two-step problems using data in whole number, decimal, and fraction form in a frequency table, dot plot, or stem-and-leaf plot.' },
  { code: '4.10A', strand: 4, kind: S, title: 'Fixed and variable expenses', text: 'Distinguish between fixed and variable expenses.' },
  { code: '4.10B', strand: 4, kind: S, title: 'Calculate profit', text: 'Calculate profit in a given situation.' },
  { code: '4.10E', strand: 4, kind: S, title: 'Purpose of financial institutions', text: 'Describe the basic purpose of financial institutions, including keeping money safe, borrowing money, and lending.' },
];
