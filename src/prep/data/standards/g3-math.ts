// Grade 3 math standards eligible for the state test, from TEA's "SST Grade 3 Mathematics Assessment:
// Eligible TEKS" (revised August 2026; the same standards as STAAR). 13 readiness + 31 supporting = 44,
// matching the SST grade 3 math blueprint. `title` is our short name; `text` is the TEKS wording.

import type { Standard, Strand } from '../../content/types.ts';

export const G3_MATH_STRANDS: Strand[] = [
  { id: 1, title: 'Numbers and place value', full: 'Numerical Representations and Relationships' },
  { id: 2, title: 'Computation and algebra', full: 'Computations and Algebraic Relationships' },
  { id: 3, title: 'Geometry and measurement', full: 'Geometry and Measurement' },
  { id: 4, title: 'Data and money', full: 'Data Analysis and Personal Financial Literacy' },
];

const R = 'readiness' as const;
const S = 'supporting' as const;

export const G3_MATH: Standard[] = [
  // ----- Strand 1 -----
  { code: '3.2A', strand: 1, kind: R, title: 'Compose and decompose whole numbers to 100,000', text: 'Compose and decompose numbers up to 100,000 as a sum of so many ten thousands, so many thousands, so many hundreds, so many tens, and so many ones using objects, pictorial models, and numbers, including expanded notation as appropriate.' },
  { code: '3.2B', strand: 1, kind: S, title: 'Base-10 place value relationships', text: 'Describe the mathematical relationships found in the base-10 place value system through the hundred thousands place.' },
  { code: '3.2C', strand: 1, kind: S, title: 'Round numbers using a number line', text: 'Represent a number on a number line as being between two consecutive multiples of 10; 100; 1,000; or 10,000 and use words to describe relative size of numbers in order to round whole numbers.' },
  { code: '3.2D', strand: 1, kind: R, title: 'Compare and order whole numbers to 100,000', text: 'Compare and order whole numbers up to 100,000 and represent comparisons using the symbols >, <, or =.' },
  { code: '3.3A', strand: 1, kind: S, title: 'Represent fractions with models', text: 'Represent fractions greater than zero and less than or equal to one with denominators of 2, 3, 4, 6, and 8 using concrete objects and pictorial models, including strip diagrams and number lines.' },
  { code: '3.3B', strand: 1, kind: S, title: 'Fractions on a number line', text: 'Determine the corresponding fraction greater than zero and less than or equal to one with denominators of 2, 3, 4, 6, and 8 given a specified point on a number line.' },
  { code: '3.3C', strand: 1, kind: S, title: 'Unit fractions as one part of a whole', text: 'Explain that the unit fraction 1/b represents the quantity formed by one part of a whole that has been partitioned into b equal parts where b is a non-zero whole number.' },
  { code: '3.3D', strand: 1, kind: S, title: 'Compose and decompose fractions', text: 'Compose and decompose a fraction a/b with a numerator greater than zero and less than or equal to b as a sum of parts 1/b.' },
  { code: '3.3E', strand: 1, kind: S, title: 'Partition sets and objects among recipients', text: 'Solve problems involving partitioning an object or a set of objects among two or more recipients using pictorial representations of fractions with denominators of 2, 3, 4, 6, and 8.' },
  { code: '3.3F', strand: 1, kind: R, title: 'Equivalent fractions with models and number lines', text: 'Represent equivalent fractions with denominators of 2, 3, 4, 6, and 8 using a variety of objects and pictorial models, including number lines.' },
  { code: '3.3G', strand: 1, kind: S, title: 'Explain fraction equivalence', text: 'Explain that two fractions are equivalent if and only if they are both represented by the same point on the number line or represent the same portion of a same size whole for an area model.' },
  { code: '3.3H', strand: 1, kind: R, title: 'Compare fractions with like numerators or denominators', text: 'Compare two fractions having the same numerator or denominator in problems by reasoning about their sizes and justifying the conclusion using symbols, words, objects, and pictorial models.' },
  // Note: TEA places 3.4I in Strand 1 of assessed curriculum
  { code: '3.4I', strand: 1, kind: S, title: 'Determine even and odd numbers', text: 'Determine if a number is even or odd using divisibility rules.' },
  // Note: TEA places 3.7A in Strand 1 of assessed curriculum
  { code: '3.7A', strand: 1, kind: S, title: 'Halves, fourths, and eighths on a number line', text: 'Represent fractions of halves, fourths, and eighths as distances from zero on a number line.' },

  // ----- Strand 2 -----
  { code: '3.4A', strand: 2, kind: R, title: 'Add and subtract whole numbers within 1,000', text: 'Solve with fluency one-step and two-step problems involving addition and subtraction within 1,000 using strategies based on place value, properties of operations, and the relationship between addition and subtraction.' },
  { code: '3.4B', strand: 2, kind: S, title: 'Estimate sums and differences by rounding', text: 'Round to the nearest 10 or 100 or use compatible numbers to estimate solutions to addition and subtraction problems.' },
  { code: '3.4D', strand: 2, kind: S, title: 'Arrays and equal groups up to 10 by 10', text: 'Determine the total number of objects when equally sized groups of objects are combined or arranged in arrays up to 10 by 10.' },
  { code: '3.4E', strand: 2, kind: S, title: 'Represent multiplication facts', text: 'Represent multiplication facts by using a variety of approaches such as repeated addition, equal-sized groups, arrays, area models, equal jumps on a number line, and skip counting.' },
  { code: '3.4F', strand: 2, kind: S, title: 'Recall multiplication and division facts', text: 'Recall facts to multiply up to 10 by 10 with automaticity and recall the corresponding division facts.' },
  { code: '3.4G', strand: 2, kind: S, title: 'Multiply a two-digit number by a one-digit number', text: 'Use strategies and algorithms, including the standard algorithm, to multiply a two-digit number by a one-digit number. Strategies may include mental math, partial products, and the commutative, associative, and distributive properties.' },
  { code: '3.4H', strand: 2, kind: S, title: 'Equal sharing and partitioning sets', text: 'Determine the number of objects in each group when a set of objects is partitioned into equal shares or a set of objects is shared equally.' },
  { code: '3.4J', strand: 2, kind: S, title: 'Relate multiplication and division', text: 'Determine a quotient using the relationship between multiplication and division.' },
  { code: '3.4K', strand: 2, kind: R, title: 'Solve multiplication and division within 100', text: 'Solve one-step and two-step problems involving multiplication and division within 100 using strategies based on objects; pictorial models, including arrays, area models, and equal groups; properties of operations; or recall of facts.' },
  { code: '3.5A', strand: 2, kind: R, title: 'Represent addition and subtraction problems', text: 'Represent one- and two-step problems involving addition and subtraction of whole numbers to 1,000 using pictorial models, number lines, and equations.' },
  { code: '3.5B', strand: 2, kind: R, title: 'Represent multiplication and division with diagrams', text: 'Represent and solve one- and two-step multiplication and division problems within 100 using arrays, strip diagrams, and equations.' },
  { code: '3.5C', strand: 2, kind: S, title: 'Multiplication as a comparison', text: 'Describe a multiplication expression as a comparison such as 3 x 24 represents 3 times as much as 24.' },
  { code: '3.5D', strand: 2, kind: S, title: 'Find unknown numbers in multiplication and division', text: 'Determine the unknown whole number in a multiplication or division equation relating three whole numbers when the unknown is either a missing factor or product.' },
  { code: '3.5E', strand: 2, kind: R, title: 'Number pairs and relationships in a table', text: 'Represent real-world relationships using number pairs in a table and verbal descriptions.' },

  // ----- Strand 3 -----
  { code: '3.6A', strand: 3, kind: R, title: 'Classify 2-D and 3-D figures', text: 'Classify and sort two- and three-dimensional figures, including cones, cylinders, spheres, triangular and rectangular prisms, and cubes, based on attributes using formal geometric language.' },
  { code: '3.6B', strand: 3, kind: S, title: 'Quadrilaterals and subcategories', text: 'Use attributes to recognize rhombuses, parallelograms, trapezoids, rectangles, and squares as examples of quadrilaterals and draw examples of quadrilaterals that do not belong to any of these subcategories.' },
  { code: '3.6C', strand: 3, kind: R, title: 'Area of rectangles with unit squares', text: 'Determine the area of rectangles with whole number side lengths in problems using multiplication related to the number of rows times the number of unit squares in each row.' },
  { code: '3.6D', strand: 3, kind: S, title: 'Area of composite figures', text: 'Decompose composite figures formed by rectangles into non-overlapping rectangles to determine the area of the original figure using the additive property of area.' },
  { code: '3.6E', strand: 3, kind: S, title: 'Decompose figures into equal areas', text: 'Decompose two congruent two-dimensional figures into parts with equal areas and express the area of each part as a unit fraction of the whole and recognize that equal shares of identical wholes need not have the same shape.' },
  { code: '3.7B', strand: 3, kind: R, title: 'Perimeter of polygons', text: 'Determine the perimeter of a polygon or a missing length when given perimeter and remaining side lengths in problems.' },
  { code: '3.7C', strand: 3, kind: S, title: 'Time intervals and elapsed time', text: 'Determine the solutions to problems involving addition and subtraction of time intervals in minutes using pictorial models or tools such as a 15-minute event plus a 30-minute event equals 45 minutes.' },
  { code: '3.7D', strand: 3, kind: S, title: 'Appropriate units of liquid volume and weight', text: 'Determine when it is appropriate to use measurements of liquid volume (capacity) or weight.' },
  { code: '3.7E', strand: 3, kind: S, title: 'Measure liquid volume and weight', text: 'Determine liquid volume (capacity) or weight using appropriate units and tools.' },

  // ----- Strand 4 -----
  // Note: TEA places 3.4C in Strand 4 (Personal Financial Literacy) of assessed curriculum
  { code: '3.4C', strand: 4, kind: S, title: 'Value of coins and bills', text: 'Determine the value of a collection of coins and bills.' },
  { code: '3.8A', strand: 4, kind: R, title: 'Summarize data with tables, dot plots, and graphs', text: 'Summarize a data set with multiple categories using a frequency table, dot plot, pictograph, or bar graph with scaled intervals.' },
  { code: '3.8B', strand: 4, kind: S, title: 'Solve problems with graphs and tables', text: 'Solve one- and two-step problems using categorical data represented with a frequency table, dot plot, pictograph, or bar graph with scaled intervals.' },
  { code: '3.9A', strand: 4, kind: S, title: 'Human capital, labor, and income', text: 'Explain the connection between human capital/labor and income.' },
  { code: '3.9B', strand: 4, kind: S, title: 'Resource availability, scarcity, and cost', text: 'Describe the relationship between the availability or scarcity of resources and how that impacts cost.' },
  // Note: 3.9C is not in TEA assessed curriculum
  { code: '3.9D', strand: 4, kind: S, title: 'Credit, borrowing, and interest', text: 'Explain that credit is used when wants or needs exceed the ability to pay and that it is the borrower’s responsibility to pay it back to the lender, usually with interest.' },
  { code: '3.9E', strand: 4, kind: S, title: 'Reasons to save and savings plans', text: 'List reasons to save and explain the benefit of a savings plan, including for college.' },
];
