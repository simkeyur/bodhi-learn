// Grade 7 math standards eligible for the state test, from TEA's "SST Grade 7 Mathematics Assessment:
// Eligible TEKS" (revised August 2026; the same standards as STAAR). 13 readiness + 25 supporting = 38,
// matching the SST grade 7 math blueprint. `title` is our short name; `text` is the TEKS wording.

import type { Standard, Strand } from '../../content/types.ts';

export const G7_MATH_STRANDS: Strand[] = [
  { id: 1, title: 'Probability and rational numbers', full: 'Probability and Numerical Representations' },
  { id: 2, title: 'Computations and equations', full: 'Computations and Algebraic Relationships' },
  { id: 3, title: 'Geometry and measurement', full: 'Geometry and Measurement' },
  { id: 4, title: 'Data and personal finance', full: 'Data Analysis and Personal Financial Literacy' },
];

const R = 'readiness' as const;
const S = 'supporting' as const;

export const G7_MATH: Standard[] = [
  // ===========================================================================
  // Strand 1: Probability and Numerical Representations (7 standards: 2 R, 5 S)
  // ===========================================================================
  { code: '7.2A', strand: 1, kind: S, title: 'Sets of rational numbers', text: 'Extend previous knowledge of sets and subsets using a visual representation to describe relationships between sets of rational numbers.' },
  { code: '7.6A', strand: 1, kind: S, title: 'Sample spaces with lists and trees', text: 'Represent sample spaces for simple and compound events using lists and tree diagrams.' },
  { code: '7.6C', strand: 1, kind: S, title: 'Experimental probability predictions', text: 'Make predictions and determine solutions using experimental data for simple and compound events.' },
  { code: '7.6D', strand: 1, kind: S, title: 'Theoretical probability predictions', text: 'Make predictions and determine solutions using theoretical probability for simple and compound events.' },
  { code: '7.6E', strand: 1, kind: S, title: 'Complement of an event', text: 'Find the probabilities of a simple event and its complement and describe the relationship between the two.' },
  { code: '7.6H', strand: 1, kind: R, title: 'Predictions and comparisons from experiments', text: 'Solve problems using qualitative and quantitative predictions and comparisons from simple experiments.' },
  { code: '7.6I', strand: 1, kind: R, title: 'Experimental and theoretical probability', text: 'Determine experimental and theoretical probabilities related to simple and compound events using data and sample spaces.' },

  // ===========================================================================
  // Strand 2: Computations and Algebraic Relationships (12 standards: 5 R, 7 S)
  // ===========================================================================
  { code: '7.3A', strand: 2, kind: S, title: 'Rational number operations', text: 'Add, subtract, multiply, and divide rational numbers fluently.' },
  { code: '7.3B', strand: 2, kind: R, title: 'Solve problems with rational numbers', text: 'Apply and extend previous understandings of operations to solve problems using addition, subtraction, multiplication, and division of rational numbers.' },
  { code: '7.4A', strand: 2, kind: R, title: 'Constant rates of change', text: 'Represent constant rates of change in mathematical and real-world problems given pictorial, tabular, verbal, numeric, graphical, and algebraic representations, including d = rt.' },
  { code: '7.4B', strand: 2, kind: S, title: 'Calculate unit rates', text: 'Calculate unit rates from rates in mathematical and real-world problems.' },
  { code: '7.4C', strand: 2, kind: S, title: 'Constant of proportionality', text: 'Determine the constant of proportionality (k = y/x) within mathematical and real-world problems.' },
  { code: '7.4D', strand: 2, kind: R, title: 'Ratios, rates, and percent change', text: 'Solve problems involving ratios, rates, and percents, including multi-step problems involving percent increase and percent decrease, and financial literacy problems.' },
  { code: '7.7A', strand: 2, kind: R, title: 'Linear relationships y = mx + b', text: 'Represent linear relationships using verbal descriptions, tables, graphs, and equations that simplify to the form y = mx + b.' },
  { code: '7.10A', strand: 2, kind: S, title: 'Write two-step equations and inequalities', text: 'Write one-variable, two-step equations and inequalities to represent constraints or conditions within problems.' },
  { code: '7.10B', strand: 2, kind: S, title: 'Graph two-step inequalities on number lines', text: 'Represent solutions for one-variable, two-step equations and inequalities on number lines.' },
  { code: '7.10C', strand: 2, kind: S, title: 'Real-world situations for two-step equations', text: 'Write a corresponding real-world problem given a one-variable, two-step equation or inequality.' },
  { code: '7.11A', strand: 2, kind: R, title: 'Model and solve two-step equations', text: 'Model and solve one-variable, two-step equations and inequalities.' },
  { code: '7.11B', strand: 2, kind: S, title: 'Verify solutions to two-step equations', text: 'Determine if the given value(s) make(s) one-variable, two-step equations and inequalities true.' },

  // ===========================================================================
  // Strand 3: Geometry and Measurement (9 standards: 4 R, 5 S)
  // ===========================================================================
  { code: '7.4E', strand: 3, kind: S, title: 'Convert between measurement systems', text: 'Convert between measurement systems, including the use of proportions and the use of unit rates.' },
  { code: '7.5A', strand: 3, kind: S, title: 'Attributes of similarity', text: 'Generalize the critical attributes of similarity, including ratios within and between similar shapes.' },
  { code: '7.5B', strand: 3, kind: S, title: 'Pi as ratio of circumference to diameter', text: 'Describe π as the ratio of the circumference of a circle to its diameter.' },
  { code: '7.5C', strand: 3, kind: R, title: 'Similar shapes and scale drawings', text: 'Solve mathematical and real-world problems involving similar shape and scale drawings.' },
  { code: '7.9A', strand: 3, kind: R, title: 'Volume of prisms and pyramids', text: 'Solve problems involving the volume of rectangular prisms, triangular prisms, rectangular pyramids, and triangular pyramids.' },
  { code: '7.9B', strand: 3, kind: R, title: 'Circumference and area of circles', text: 'Determine the circumference and area of circles.' },
  { code: '7.9C', strand: 3, kind: R, title: 'Area of composite figures', text: 'Determine the area of composite figures containing combinations of rectangles, squares, parallelograms, trapezoids, triangles, semicircles, and quarter circles.' },
  { code: '7.9D', strand: 3, kind: S, title: 'Lateral and total surface area from nets', text: 'Solve problems involving the lateral and total surface area of a rectangular prism, rectangular pyramid, triangular prism, and triangular pyramid by determining the area of the shape’s net.' },
  { code: '7.11C', strand: 3, kind: S, title: 'Equations using angle relationships', text: 'Write and solve equations using geometry concepts, including the sum of the angles in a triangle, and angle relationships.' },

  // ===========================================================================
  // Strand 4: Data Analysis and Personal Financial Literacy (10 standards: 2 R, 8 S)
  // ===========================================================================
  { code: '7.6G', strand: 4, kind: R, title: 'Solve problems using graphs and circle graphs', text: 'Solve problems using data represented in bar graphs, dot plots, and circle graphs, including part-to-whole and part-to-part comparisons and equivalents.' },
  { code: '7.12A', strand: 4, kind: R, title: 'Compare data using dot plots and box plots', text: 'Compare two groups of numeric data using comparative dot plots or box plots by comparing their shapes, centers, and spreads.' },
  { code: '7.12B', strand: 4, kind: S, title: 'Inferences from random samples', text: 'Use data from a random sample to make inferences about a population.' },
  { code: '7.12C', strand: 4, kind: S, title: 'Compare populations using samples', text: 'Compare two populations based on data in random samples from these populations, including informal comparative inferences about differences between the two populations.' },
  { code: '7.13A', strand: 4, kind: S, title: 'Calculate sales and income tax', text: 'Calculate the sales tax for a given purchase and calculate income tax for earned wages.' },
  { code: '7.13B', strand: 4, kind: S, title: 'Personal budget components', text: 'Identify the components of a personal budget, including income; planned savings for college, retirement, and emergencies; taxes; and fixed and variable expenses, and calculate what percentage each category comprises of the total budget.' },
  { code: '7.13C', strand: 4, kind: S, title: 'Net worth statement', text: 'Create and organize a financial assets and liabilities record and construct a net worth statement.' },
  { code: '7.13D', strand: 4, kind: S, title: 'Family budget estimator', text: 'Use a family budget estimator to determine the minimum household budget and average hourly wage needed for a family to meet its basic needs in the student’s city or another large city nearby.' },
  { code: '7.13E', strand: 4, kind: S, title: 'Simple and compound interest', text: 'Calculate and compare simple interest and compound interest earnings.' },
  { code: '7.13F', strand: 4, kind: S, title: 'Monetary incentives: sales, rebates, coupons', text: 'Analyze and compare monetary incentives, including sales, rebates, and coupons.' },
];
