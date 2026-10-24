// Grade 6 math standards eligible for the state test, from TEA's "SST Grade 6 Mathematics Assessment:
// Eligible TEKS" (revised August 2026; the same standards as STAAR). 16 readiness + 35 supporting = 51,
// matching the SST grade 6 math blueprint. `title` is our short name; `text` is the TEKS wording.

import type { Standard, Strand } from '../../content/types.ts';

export const G6_MATH_STRANDS: Strand[] = [
  { id: 1, title: 'Rational numbers and ratios', full: 'Numerical Representations and Relationships' },
  { id: 2, title: 'Operations and equations', full: 'Computations and Algebraic Relationships' },
  { id: 3, title: 'Geometry and measurement', full: 'Geometry and Measurement' },
  { id: 4, title: 'Data and personal finance', full: 'Data Analysis and Personal Financial Literacy' },
];

const R = 'readiness' as const;
const S = 'supporting' as const;

export const G6_MATH: Standard[] = [
  // ----- Strand 1 -----
  { code: '6.2A', strand: 1, kind: S, title: 'Classify rational numbers', text: 'Classify whole numbers, integers, and rational numbers using a visual representation such as a Venn diagram to describe relationships between sets of numbers.' },
  { code: '6.2B', strand: 1, kind: S, title: 'Opposites and absolute value', text: 'Identify a number, its opposite, and its absolute value.' },
  { code: '6.2C', strand: 1, kind: S, title: 'Compare rational numbers on a number line', text: 'Locate, compare, and order integers and rational numbers using a number line.' },
  { code: '6.2D', strand: 1, kind: R, title: 'Order rational numbers', text: 'Order a set of rational numbers arising from mathematical and real- world contexts.' },
  { code: '6.2E', strand: 1, kind: S, title: 'Division as fractions', text: 'Extend representations for division to include fraction notation such as a/b represents the same number as a ÷ b where b ≠ 0.' },
  { code: '6.4C', strand: 1, kind: S, title: 'Ratios as comparisons', text: 'Give examples of ratios as multiplicative comparisons of two quantities describing the same attribute.' },
  { code: '6.4D', strand: 1, kind: S, title: 'Rates and unit rates', text: 'Give examples of rates as the comparison by division of two quantities having different attributes, including rates as quotients.' },
  { code: '6.4E', strand: 1, kind: S, title: 'Represent ratios and percents', text: 'Represent ratios and percents with concrete models, fractions, and decimals.' },
  { code: '6.4F', strand: 1, kind: S, title: 'Benchmark fractions and percents', text: 'Represent benchmark fractions and percents such as 1%, 10%, 25%, 33 1/3%, and multiples of these values using 10 by 10 grids, strip diagrams, number lines, and numbers.' },
  { code: '6.4G', strand: 1, kind: R, title: 'Equivalent fractions, decimals, and percents', text: 'Generate equivalent forms of fractions, decimals, and percents using real-world problems, including problems that involve money.' },
  { code: '6.5C', strand: 1, kind: S, title: 'Equivalent parts of a whole', text: 'Use equivalent fractions, decimals, and percents to show equal parts of the same whole.' },
  { code: '6.7A', strand: 1, kind: R, title: 'Order of operations and prime factorization', text: 'Generate equivalent numerical expressions using order of operations, including whole number exponents, and prime factorization.' },
  { code: '6.7B', strand: 1, kind: S, title: 'Expressions vs equations', text: 'Distinguish between expressions and equations verbally, numerically, and algebraically.' },
  { code: '6.7C', strand: 1, kind: S, title: 'Equivalent expressions with models', text: 'Determine if two expressions are equivalent using concrete models, pictorial models, and algebraic representations.' },
  { code: '6.7D', strand: 1, kind: R, title: 'Properties of operations', text: 'Generate equivalent expressions using the properties of operations: inverse, identity, commutative, associative, and distributive properties.' },

  // ----- Strand 2 -----
  { code: '6.3A', strand: 2, kind: S, title: 'Divide by multiplying by reciprocal', text: 'Recognize that dividing by a rational number and multiplying by its reciprocal result in equivalent values.' },
  { code: '6.3B', strand: 2, kind: S, title: 'Multiplying by a fraction', text: 'Determine, with and without computation, whether a quantity is increased or decreased when multiplied by a fraction, including values greater than or less than one.' },
  { code: '6.3C', strand: 2, kind: S, title: 'Model integer operations', text: 'Represent integer operations with concrete models and connect the actions with the models to standardized algorithms.' },
  { code: '6.3D', strand: 2, kind: R, title: 'Add, subtract, multiply, and divide integers', text: 'Add, subtract, multiply, and divide integers fluently.' },
  { code: '6.3E', strand: 2, kind: R, title: 'Multiply and divide positive rational numbers', text: 'Multiply and divide positive rational numbers fluently.' },
  { code: '6.4A', strand: 2, kind: S, title: 'Additive vs multiplicative relationships', text: 'Compare two rules verbally, numerically, graphically, and symbolically in the form of y = ax or y = x + a in order to differentiate between additive and multiplicative relationships.' },
  { code: '6.4B', strand: 2, kind: R, title: 'Predict and compare ratios and rates', text: 'Apply qualitative and quantitative reasoning to solve prediction and comparison of real-world problems involving ratios and rates.' },
  { code: '6.5A', strand: 2, kind: S, title: 'Represent proportions with tables and graphs', text: 'Represent mathematical and real-world problems involving ratios and rates using scale factors, tables, graphs, and proportions.' },
  { code: '6.5B', strand: 2, kind: R, title: 'Percent problems: part, whole, and percent', text: 'Solve real-world problems to find the whole given a part and the percent, to find the part given the whole and the percent, and to find the percent given the part and the whole, including the use of concrete and pictorial models.' },
  { code: '6.6A', strand: 2, kind: S, title: 'Independent and dependent quantities', text: 'Identify independent and dependent quantities from tables and graphs.' },
  { code: '6.6B', strand: 2, kind: S, title: 'Equations from tables', text: 'Write an equation that represents the relationship between independent and dependent quantities from a table.' },
  { code: '6.6C', strand: 2, kind: R, title: 'Multiple representations of relationships', text: 'Represent a given situation using verbal descriptions, tables, graphs, and equations in the form y = kx or y = x + b.' },
  { code: '6.9A', strand: 2, kind: S, title: 'Write equations and inequalities', text: 'Write one-variable, one-step equations and inequalities to represent constraints or conditions within problems.' },
  { code: '6.9B', strand: 2, kind: S, title: 'Solutions on a number line', text: 'Represent solutions for one-variable, one-step equations and inequalities on number lines.' },
  { code: '6.9C', strand: 2, kind: S, title: 'Real-world equation and inequality situations', text: 'Write corresponding real-world problems given one-variable, one- step equations or inequalities.' },
  { code: '6.10A', strand: 2, kind: R, title: 'Solve one-step equations and inequalities', text: 'Model and solve one-variable, one-step equations and inequalities that represent problems, including geometric concepts.' },
  { code: '6.10B', strand: 2, kind: S, title: 'Check solutions to equations and inequalities', text: 'Determine if the given value(s) make(s) one-variable, one-step equations or inequalities true.' },

  // ----- Strand 3 -----
  { code: '6.4H', strand: 3, kind: R, title: 'Convert measurement units with proportions', text: 'Convert units within a measurement system, including the use of proportions and unit rates.' },
  { code: '6.8A', strand: 3, kind: S, title: 'Triangle properties and angle sums', text: 'Extend previous knowledge of triangles and their properties to include the sum of angles of a triangle, the relationship between the lengths of sides and measures of angles in a triangle, and determining when three lengths form a triangle.' },
  { code: '6.8B', strand: 3, kind: S, title: 'Model area formulas', text: 'Model area formulas for parallelograms, trapezoids, and triangles by decomposing and rearranging parts of these shapes.' },
  { code: '6.8C', strand: 3, kind: S, title: 'Write area and volume equations', text: 'Write equations that represent problems related to the area of rectangles, parallelograms, trapezoids, and triangles and volume of right rectangular prisms where dimensions are positive rational numbers.' },
  { code: '6.8D', strand: 3, kind: R, title: 'Area and volume problem solving', text: 'Determine solutions for problems involving the area of rectangles, parallelograms, trapezoids, and triangles and volume of right rectangular prisms where dimensions are positive rational numbers.' },
  { code: '6.11A', strand: 3, kind: R, title: 'Graph in all four quadrants', text: 'Graph points in all four quadrants using ordered pairs of rational numbers.' },

  // ----- Strand 4 -----
  { code: '6.12A', strand: 4, kind: S, title: 'Represent numeric data graphically', text: 'Represent numeric data graphically, including dot plots, stem-and- leaf plots, histograms, and box plots.' },
  { code: '6.12B', strand: 4, kind: S, title: 'Describe center, spread, and shape', text: 'Use the graphical representation of numeric data to describe the center, spread, and shape of the data distribution.' },
  { code: '6.12C', strand: 4, kind: R, title: 'Mean, median, range, and IQR', text: 'Summarize numeric data with numerical summaries, including the mean and median (measures of center) and the range and interquartile range (IQR) (measures of spread), and use these summaries to describe the center, spread, and shape of the data distribution.' },
  { code: '6.12D', strand: 4, kind: R, title: 'Categorical data: mode and percent bar graphs', text: 'Summarize categorical data with numerical and graphical summaries, including the mode, the percent of values in each category (relative frequency table), and the percent bar graph, and use these summaries to describe the data distribution.' },
  { code: '6.13A', strand: 4, kind: R, title: 'Interpret plots and histograms', text: 'Interpret numeric data summarized in dot plots, stem-and-leaf plots, histograms, and box plots.' },
  { code: '6.13B', strand: 4, kind: S, title: 'Variability in data', text: 'Distinguish between situations that yield data with and without variability.' },
  { code: '6.14A', strand: 4, kind: S, title: 'Checking accounts and debit cards', text: 'Compare the features and costs of a checking account and a debit card offered by different local financial institutions.' },
  { code: '6.14B', strand: 4, kind: S, title: 'Debit cards vs credit cards', text: 'Distinguish between debit cards and credit cards.' },
  { code: '6.14C', strand: 4, kind: S, title: 'Balance a check register', text: 'Balance a check register that includes deposits, withdrawals, and transfers.' },
  { code: '6.14E', strand: 4, kind: S, title: 'Credit report information', text: 'Describe the information in a credit report and how long it is retained.' },
  { code: '6.14F', strand: 4, kind: S, title: 'Value of credit reports', text: 'Describe the value of credit reports to borrowers and to lenders.' },
  { code: '6.14G', strand: 4, kind: S, title: 'Methods to pay for college', text: 'Explain various methods to pay for college, including through savings, grants, scholarships, student loans, and work-study.' },
  { code: '6.14H', strand: 4, kind: S, title: 'Salaries and lifetime income', text: 'Compare the annual salary of several occupations requiring various levels of post-secondary education or vocational training and calculate the effects of the different annual salaries on lifetime income.' },

];
