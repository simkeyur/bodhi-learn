// Walkthroughs for the 51 grade 6 math standards, written to the TEKS wording in data/standards/g6-math.ts.
// Kept concise: a goal sentence, key vocabulary, and 2 to 4 big ideas. Tested to ensure every standard has one.

import type { Lesson } from '../types.ts';

export const G6_MATH_LESSONS: Lesson[] = [
  // ===========================================================================
  // Strand 1: Numerical Representations & Relationships (15 standards)
  // ===========================================================================
  {
    code: '6.2A',
    goal: 'Classify whole numbers, integers, and rational numbers using visual representations such as Venn diagrams.',
    words: [
      { term: 'whole number', meaning: 'counting numbers and zero: 0, 1, 2, 3, ...' },
      { term: 'integer', meaning: 'whole numbers and their opposites: ..., −2, −1, 0, 1, 2, ...' },
      { term: 'rational number', meaning: 'any number that can be written as a fraction a/b where b ≠ 0' },
    ],
    ideas: [
      { title: 'Numbers form nested sets', text: 'Whole numbers are inside integers, and integers are inside rational numbers. Every whole number is an integer, and every integer is rational.', example: '5 is whole, integer, and rational. −7 is an integer and rational, but not whole.' },
      { title: 'Fractions and decimals that do not simplify to whole amounts', text: 'Numbers like 3/4 and −0.6 are rational numbers only because they are not whole numbers or integers.', example: '3/4 = 0.75 (rational only)' },
    ],
  },
  {
    code: '6.2B',
    goal: 'Identify a number and its opposite, and understand absolute value as distance from zero on a number line.',
    words: [
      { term: 'opposite', meaning: 'the number on the other side of 0 at the same distance; the opposite of a is −a' },
      { term: 'absolute value', meaning: 'the distance of a number from 0 on a number line, written as |a|; always non-negative' },
    ],
    ideas: [
      { title: 'Opposites are reflections across zero', text: 'Opposites are the same distance from 0 in opposite directions. The sum of opposites is always zero.', example: 'The opposite of 8 is −8; the opposite of −4.5 is 4.5.' },
      { title: 'Absolute value is distance', text: 'Because distance is never negative, absolute value is always zero or positive.', example: '|−12| = 12 and |12| = 12' },
    ],
  },
  {
    code: '6.2C',
    goal: 'Locate, compare, and order integers and rational numbers using a number line.',
    words: [
      { term: 'number line', meaning: 'a line where points correspond to real numbers; values increase from left to right' },
      { term: 'inequality', meaning: 'a mathematical sentence using < or > to compare values' },
    ],
    ideas: [
      { title: 'Greater means further right', text: 'Any number to the right of another number on a number line is greater.', example: '−2 is to the right of −5, so −2 > −5.' },
      { title: 'Watch the signs with negatives', text: 'With negative numbers, a larger absolute value means it is further left and therefore smaller.', example: '−10 < −3' },
    ],
  },
  {
    code: '6.2D',
    goal: 'Order a set of rational numbers arising from mathematical and real-world contexts.',
    words: [
      { term: 'ascending', meaning: 'arranged from least to greatest' },
      { term: 'descending', meaning: 'arranged from greatest to least' },
    ],
    ideas: [
      { title: 'Convert to a common form', text: 'When ordering a mix of fractions, decimals, and percents, convert all values to decimals first to easily compare place values.', example: '3/5 = 0.60, 65% = 0.65, 0.58 → 0.58 < 0.60 < 0.65' },
      { title: 'Separate negatives and positives', text: 'All negative numbers are less than any positive number. Order negative values first when going least to greatest.', example: '−1.2 < −0.4 < 0.1 < 0.8' },
    ],
  },
  {
    code: '6.2E',
    goal: 'Extend representations for division to include fraction notation a/b as a divided by b.',
    words: [
      { term: 'numerator', meaning: 'the top number in a fraction representing the dividend' },
      { term: 'denominator', meaning: 'the bottom number representing the divisor' },
    ],
    ideas: [
      { title: 'The fraction bar means division', text: 'A fraction a/b represents the quotient of a divided by b. Any division problem can be written as a fraction.', example: '3 ÷ 4 = {3/4} and 15 ÷ 3 = {15/3} = 5' },
      { title: 'Sharing equally', text: 'When sharing 5 pizzas among 8 students, each student receives 5 ÷ 8 = {5/8} of a pizza.', example: '5 ÷ 8 = {5/8}' },
    ],
  },
  {
    code: '6.4C',
    goal: 'Give examples of ratios as multiplicative comparisons of two quantities.',
    words: [
      { term: 'ratio', meaning: 'a comparison of two quantities by division' },
      { term: 'part-to-part', meaning: 'comparing one group to another separate group' },
      { term: 'part-to-whole', meaning: 'comparing one subgroup to the entire total group' },
    ],
    ideas: [
      { title: 'Writing ratios in three forms', text: 'A ratio comparing a to b can be written with the word to (a to b), with a colon (a : b), or as a fraction ({a/b}).', example: '3 cats and 5 dogs: 3 to 5, 3:5, or {3/5}' },
      { title: 'Distinguish part from whole', text: 'If there are 4 red pens and 6 blue pens, the part-to-part ratio is 4:6, but the ratio of red pens to total pens is 4:10.', example: '4 / (4 + 6) = 4/10 = 2/5' },
    ],
  },
  {
    code: '6.4D',
    goal: 'Give examples of rates as the comparison of two quantities with different units, including unit rates.',
    words: [
      { term: 'rate', meaning: 'a ratio comparing two quantities measured in different units' },
      { term: 'unit rate', meaning: 'a rate where the second quantity is 1 unit' },
    ],
    ideas: [
      { title: 'Rates compare different units', text: 'Miles per hour, dollars per pound, and words per minute are all rates because they compare two different units of measure.', example: '180 miles in 3 hours' },
      { title: 'Divide to find the unit rate', text: 'To find the unit rate, divide the first quantity by the second quantity so the denominator becomes 1.', example: '180 miles ÷ 3 hours = 60 miles per hour' },
    ],
  },
  {
    code: '6.4E',
    goal: 'Represent ratios and percents with concrete models, fractions, and decimals.',
    words: [
      { term: 'percent', meaning: 'parts per hundred; a ratio comparing a number to 100' },
      { term: 'hundred grid', meaning: 'a 10-by-10 grid where each square represents 1% or 0.01' },
    ],
    ideas: [
      { title: 'Percents mean out of 100', text: 'Any percent can be represented on a 100-square grid. Shading 35 squares represents 35%, 0.35, or {35/100}.', example: '35% = 0.35 = {7/20}' },
      { title: 'Tape diagrams and strip models', text: 'A strip divided into equal parts can show ratios and percents. Dividing a bar into 4 equal parts gives 25% per section.', example: '3 of 4 parts = 75%' },
    ],
  },
  {
    code: '6.4F',
    goal: 'Represent benchmark fractions and percents such as 1%, 10%, 25%, 33 1/3%, and their multiples.',
    words: [
      { term: 'benchmark fraction', meaning: 'a common fraction used for quick estimation and mental math' },
    ],
    ideas: [
      { title: 'Halves, fourths, and eighths', text: '{1/2} = 50%, {1/4} = 25%, {3/4} = 75%, {1/8} = 12.5%. Memorizing these benchmarks speeds up calculations.', example: '{3/4} = 75% = 0.75' },
      { title: 'Fifths and tenths', text: '{1/5} = 20%, {2/5} = 40%, {3/5} = 60%, {4/5} = 80%, {1/10} = 10%.', example: '{2/5} = 40% = 0.4' },
      { title: 'Thirds', text: '{1/3} = 33{1/3}% ≈ 0.333... and {2/3} = 66{2/3}% ≈ 0.667.', example: '{1/3} ≈ 33.3%' },
    ],
  },
  {
    code: '6.4G',
    goal: 'Generate equivalent forms of fractions, decimals, and percents using real-world problems including money.',
    words: [
      { term: 'equivalent', meaning: 'having the exact same value or representing the same amount' },
    ],
    ideas: [
      { title: 'From fraction to decimal to percent', text: 'Divide the numerator by the denominator to find the decimal, then multiply by 100 to find the percent.', example: '{3/8} = 3 ÷ 8 = 0.375 = 37.5%' },
      { title: 'Connect decimals to money', text: 'A quarter is $0.25 (25% of a dollar); a dime is $0.10 (10% of a dollar); a nickel is $0.05 (5% of a dollar).', example: '$0.75 = {3/4} of a dollar = 75%' },
    ],
  },
  {
    code: '6.5C',
    goal: 'Use equivalent fractions, decimals, and percents to show equal parts of the same whole.',
    words: [
      { term: 'whole', meaning: 'the complete amount, represented by 1.0 or 100%' },
    ],
    ideas: [
      { title: 'Different names for the same portion', text: '{1/2}, 0.5, and 50% all represent the exact same portion of a whole pizza or strip.', example: '{1/2} = 0.5 = 50%' },
      { title: 'Complementary parts add to 100%', text: 'If 40% of a class are boys, then 60% are girls because the sum of all parts of a whole is 100% or 1.', example: '100% − 40% = 60%' },
    ],
  },
  {
    code: '6.7A',
    goal: 'Generate equivalent numerical expressions using order of operations, including whole number exponents and prime factorization.',
    words: [
      { term: 'exponent', meaning: 'the number that indicates how many times the base is used as a factor' },
      { term: 'prime factorization', meaning: 'writing a composite number as the product of prime numbers' },
      { term: 'order of operations', meaning: 'Parentheses, Exponents, Multiplication & Division (left to right), Addition & Subtraction (left to right)' },
    ],
    ideas: [
      { title: 'PEMDAS hierarchy', text: 'Calculate inside parentheses first, then evaluate powers, then multiply and divide from left to right, and finally add and subtract from left to right.', example: '4 + 3 · 2² = 4 + 3 · 4 = 4 + 12 = 16' },
      { title: 'Factor trees for prime factorization', text: 'Break down composite numbers until all factors are prime numbers, then write using exponents.', example: '36 = 4 × 9 = 2² × 3²' },
    ],
  },
  {
    code: '6.7B',
    goal: 'Distinguish between expressions and equations verbally, numerically, and algebraically.',
    words: [
      { term: 'expression', meaning: 'a mathematical phrase containing numbers, variables, and operations, without an equal sign' },
      { term: 'equation', meaning: 'a statement that two mathematical expressions are equal, containing an equal sign (=)' },
    ],
    ideas: [
      { title: 'Look for the equal sign', text: 'An equation always has an equal sign showing that two sides balance. An expression has no equal sign and can only be evaluated or simplified.', example: '3x + 5 is an expression; 3x + 5 = 20 is an equation.' },
      { title: 'Sentences vs phrases', text: 'An expression is like a phrase (5 more than a number). An equation is a complete sentence (5 more than a number is 17).', example: 'x + 5 vs x + 5 = 17' },
    ],
  },
  {
    code: '6.7C',
    goal: 'Determine if two expressions are equivalent using concrete models, pictorial models, and algebraic representations.',
    words: [
      { term: 'algebra tiles', meaning: 'geometric tiles used to model variables and units' },
      { term: 'like terms', meaning: 'terms with the exact same variable raised to the same power' },
    ],
    ideas: [
      { title: 'Combine like terms', text: 'Add or subtract coefficients of terms with the same variable. Constant numbers can only combine with other constants.', example: '3x + 2x + 4 = 5x + 4' },
      { title: 'Substitute a test number', text: 'If two expressions are equivalent, substituting any number for the variable gives the same value on both sides.', example: 'Let x = 2: 2(x + 3) = 2(5) = 10; 2x + 6 = 4 + 6 = 10' },
    ],
  },
  {
    code: '6.7D',
    goal: 'Generate equivalent expressions using the properties of operations.',
    words: [
      { term: 'distributive property', meaning: 'a(b + c) = ab + ac' },
      { term: 'commutative property', meaning: 'changing the order does not change the result: a + b = b + a and ab = ba' },
      { term: 'associative property', meaning: 'changing the grouping does not change the result: (a + b) + c = a + (b + c)' },
      { term: 'inverse property', meaning: 'a + (−a) = 0 and a · (1/a) = 1' },
    ],
    ideas: [
      { title: 'The distributive property multiplies through', text: 'Multiply the factor outside parentheses by every term inside parentheses.', example: '4(3x + 2) = 12x + 8' },
      { title: 'Identity properties', text: 'Adding 0 keeps a number identical (a + 0 = a). Multiplying by 1 keeps a number identical (a · 1 = a).', example: '7 + 0 = 7 and 9 · 1 = 9' },
    ],
  },

  // ===========================================================================
  // Strand 2: Computations & Algebraic Relationships (17 standards)
  // ===========================================================================
  {
    code: '6.3A',
    goal: 'Recognize that dividing by a rational number and multiplying by its reciprocal result in equivalent values.',
    words: [
      { term: 'reciprocal', meaning: 'the multiplicative inverse of a fraction; flipping numerator and denominator so their product is 1' },
    ],
    ideas: [
      { title: 'Keep, change, flip', text: 'Dividing by a fraction is the exact same as multiplying by its reciprocal.', example: '6 ÷ {2/3} = 6 × {3/2} = 9' },
      { title: 'Why it works', text: 'Dividing by {1/4} asks how many fourths fit into a quantity. Since each whole has 4 fourths, you multiply by 4.', example: '3 ÷ {1/4} = 3 × 4 = 12' },
    ],
  },
  {
    code: '6.3B',
    goal: 'Determine, with and without computation, whether a quantity is increased or decreased when multiplied by a fraction.',
    words: [
      { term: 'scaling', meaning: 'resizing a quantity by multiplying by a factor' },
    ],
    ideas: [
      { title: 'Multiplying by a fraction less than 1 decreases the value', text: 'When multiplying a positive number by a proper fraction ({2/3}, {3/4}), the product is smaller than the original number.', example: '12 × {1/2} = 6 (decreased)' },
      { title: 'Multiplying by a fraction greater than 1 increases the value', text: 'When multiplying by an improper fraction ({5/4}, {3/2}), the product is greater than the original number.', example: '12 × {3/2} = 18 (increased)' },
      { title: 'Multiplying by 1 leaves the value unchanged', text: 'Multiplying by {4/4} or 1 keeps the quantity exactly the same.', example: '12 × {4/4} = 12' },
    ],
  },
  {
    code: '6.3C',
    goal: 'Represent integer operations with concrete models and connect them to algebraic algorithms.',
    words: [
      { term: 'zero pair', meaning: 'a positive counter (+1) and a negative counter (−1) that cancel out to equal 0' },
    ],
    ideas: [
      { title: 'Counters for addition and subtraction', text: 'Pair positive and negative chips. Each pair equals 0. The remaining chips show the sum.', example: '4 positive chips + 6 negative chips = 2 negative chips left (−2)' },
      { title: 'Subtracting means adding the opposite', text: 'To subtract an integer, add its opposite. Keep the first number, change subtraction to addition, and flip the sign of the second number.', example: '5 − (−3) = 5 + 3 = 8' },
    ],
  },
  {
    code: '6.3D',
    goal: 'Add, subtract, multiply, and divide integers fluently.',
    words: [
      { term: 'sign rules', meaning: 'rules governing positive and negative signs during arithmetic' },
    ],
    ideas: [
      { title: 'Addition and subtraction rules', text: 'Same signs: add absolute values and keep the common sign. Different signs: subtract the smaller absolute value from the larger, and take the sign of the larger absolute value.', example: '−7 + (−3) = −10; −8 + 5 = −3' },
      { title: 'Multiplication and division rules', text: 'Same signs give a positive product or quotient. Different signs give a negative product or quotient.', example: '(−4)(−6) = 24 and (−20) ÷ 4 = −5' },
    ],
  },
  {
    code: '6.3E',
    goal: 'Multiply and divide positive rational numbers fluently.',
    words: [
      { term: 'rational multiplication', meaning: 'multiplying numerators straight across and denominators straight across' },
    ],
    ideas: [
      { title: 'Multiplying fractions and mixed numbers', text: 'Convert mixed numbers to improper fractions first. Multiply numerators across and denominators across, then simplify.', example: '{2/3} × {9/10} = {18/30} = {3/5}' },
      { title: 'Multiplying and dividing decimals', text: 'Count total decimal places in factors to place the point in the product. For division, move the divisor decimal point to make it a whole number.', example: '0.4 × 0.15 = 0.060 = 0.06' },
    ],
  },
  {
    code: '6.4A',
    goal: 'Compare two rules verbally, numerically, graphically, and symbolically in the form of y = ax and y = x + a.',
    words: [
      { term: 'multiplicative relationship', meaning: 'y = ax; the ratio y/x is constant; passes through (0, 0)' },
      { term: 'additive relationship', meaning: 'y = x + a; the difference y − x is constant; passes through (0, a)' },
    ],
    ideas: [
      { title: 'Look at the origin (0, 0)', text: 'A multiplicative relationship y = ax always goes through the origin (0, 0). If x = 0 then y = 0.', example: 'y = 4x: (0, 0), (1, 4), (2, 8)' },
      { title: 'Additive shifts by a constant', text: 'In y = x + a, when x = 0, y = a. Every y-value is found by adding a to x.', example: 'y = x + 4: (0, 4), (1, 5), (2, 6)' },
    ],
  },
  {
    code: '6.4B',
    goal: 'Apply qualitative and quantitative reasoning to solve prediction and comparison problems involving ratios and rates.',
    words: [
      { term: 'proportion', meaning: 'an equation stating that two ratios are equivalent' },
      { term: 'scale factor', meaning: 'the multiplier used to scale both quantities in a ratio' },
    ],
    ideas: [
      { title: 'Use a ratio table', text: 'Multiply or divide both quantities by the same scale factor to find equivalent ratios and make predictions.', example: '3 tickets cost $15 → 1 ticket costs $5 → 7 tickets cost $35' },
      { title: 'Cross-multiplication check', text: 'In a/b = c/d, the cross products are equal: a · d = b · c.', example: '{3/5} = {x/20} → 5x = 60 → x = 12' },
    ],
  },
  {
    code: '6.5A',
    goal: 'Represent mathematical and real-world problems involving ratios and rates using scale factors, tables, graphs, and proportions.',
    words: [
      { term: 'constant of proportionality', meaning: 'the constant unit rate k = y/x relating two proportional quantities' },
    ],
    ideas: [
      { title: 'Finding the multiplier across columns', text: 'Look for the relationship between the two quantities in a table: y = kx.', example: 'If 2 books weigh 6 lbs, k = 6/2 = 3 lbs per book' },
      { title: 'Graphing proportional rates', text: 'A proportional relationship graphs as a straight line starting at (0, 0).', example: '(1, 3), (2, 6), (3, 9) all lie on a straight line through the origin.' },
    ],
  },
  {
    code: '6.5B',
    goal: 'Solve real-world problems to find the whole given a part and the percent, to find the part given the whole and the percent, and to find the percent given the part and the whole.',
    words: [
      { term: 'part', meaning: 'the portion of the total amount' },
      { term: 'whole', meaning: 'the entire base quantity (100%)' },
      { term: 'percent', meaning: 'the rate per hundred: % / 100' },
    ],
    ideas: [
      { title: 'The proportion formula', text: 'Use part/whole = percent/100 to solve any percent problem.', example: 'What is 20% of 80? part/80 = 20/100 → part = 16' },
      { title: 'Finding the whole', text: 'If 15 is 25% of a number, divide the part by the percent as a decimal: 15 ÷ 0.25 = 60.', example: '15 ÷ 0.25 = 60' },
    ],
  },
  {
    code: '6.6A',
    goal: 'Identify independent and dependent quantities from tables and graphs.',
    words: [
      { term: 'independent variable', meaning: 'the input variable x; determines the value of the dependent variable' },
      { term: 'dependent variable', meaning: 'the output variable y; depends on the independent variable' },
    ],
    ideas: [
      { title: 'Causes and effects', text: 'The independent variable changes on its own (like hours worked). The dependent variable changes in response (like total pay).', example: 'Total cost depends on the number of shirts bought.' },
      { title: 'Graph axes', text: 'The independent quantity is always on the horizontal x-axis. The dependent quantity is always on the vertical y-axis.', example: 'Time on x-axis, distance on y-axis.' },
    ],
  },
  {
    code: '6.6B',
    goal: 'Write an equation that represents the relationship between independent and dependent quantities from a table.',
    words: [
      { term: 'function rule', meaning: 'an algebraic rule showing how input x produces output y' },
    ],
    ideas: [
      { title: 'Test the operation from x to y', text: 'Ask: what do I do to x to get y? If you always multiply by the same number, it is y = ax. If you always add, it is y = x + a.', example: 'x = 1, 2, 3 → y = 5, 10, 15 → y = 5x' },
      { title: 'Check all rows', text: 'A rule must work for every single row in the table, not just the first one.', example: 'Check row 1, row 2, and row 3 with your candidate equation.' },
    ],
  },
  {
    code: '6.6C',
    goal: 'Represent a given situation in verbal descriptions, tables, graphs, and equations in the form y = kx or y = x + b.',
    words: [
      { term: 'multiple representations', meaning: 'connecting words, tables, graphs, and equations for the same relationship' },
    ],
    ideas: [
      { title: 'Connecting verbal to algebraic', text: 'Convert words like "each ticket costs $8" into y = 8x, then make a table and graph the points.', example: '(1, 8), (2, 16), (3, 24)' },
      { title: 'Matching across forms', text: 'Use points from the graph to check whether they satisfy the equation or match the table entries.', example: 'Substitute x = 2 into y = x + 3 to verify y = 5.' },
    ],
  },
  {
    code: '6.9A',
    goal: 'Write one-variable, one-step equations and inequalities to represent constraints or conditions within problems.',
    words: [
      { term: 'at least', meaning: 'greater than or equal to (≥)' },
      { term: 'at most', meaning: 'less than or equal to (≤)' },
    ],
    ideas: [
      { title: 'Translate keywords carefully', text: '"At least 50" means ≥ 50. "No more than 20" means ≤ 20. "Is equal to" means =.', example: 'A person must be at least 48 inches tall: h ≥ 48' },
      { title: 'Define the variable', text: 'Let a variable represent the unknown quantity, and write the arithmetic constraint around it.', example: 'x + 15 ≤ 50' },
    ],
  },
  {
    code: '6.9B',
    goal: 'Represent solutions for one-variable, one-step equations and inequalities on number lines.',
    words: [
      { term: 'open circle', meaning: 'used for strict inequalities (< or >) showing the endpoint is NOT included' },
      { term: 'closed circle', meaning: 'used for inequalities with equal signs (≤ or ≥) showing the endpoint IS included' },
    ],
    ideas: [
      { title: 'Endpoint circles', text: 'x > 5 gets an open circle at 5. x ≥ 5 gets a closed circle at 5.', example: 'x < 3: open circle at 3, arrow pointing left' },
      { title: 'Arrow direction', text: 'Greater than points to the right (higher numbers). Less than points to the left (lower numbers).', example: 'x ≥ −2: closed circle at −2, arrow pointing right' },
    ],
  },
  {
    code: '6.9C',
    goal: 'Write corresponding real-world problems given one-variable, one-step equations or inequalities.',
    words: [
      { term: 'context', meaning: 'the real-world story matching a mathematical sentence' },
    ],
    ideas: [
      { title: 'Match the operation to the story', text: 'x − 5 = 12 means a quantity was decreased by 5 to equal 12. 4x = 24 means 4 equal groups equal 24.', example: '4x = 24: Four packs of markers cost $24. What is the cost x of one pack?' },
      { title: 'Watch inequality directions', text: 'An inequality with ≤ represents a spending limit, maximum capacity, or budget ceiling.', example: 'x + 12 ≤ 30: You have $30 to spend and already spent $12.' },
    ],
  },
  {
    code: '6.10A',
    goal: 'Model and solve one-variable, one-step equations and inequalities that represent problems.',
    words: [
      { term: 'inverse operations', meaning: 'operations that undo each other: addition and subtraction; multiplication and division' },
      { term: 'isolate the variable', meaning: 'using inverse operations so the variable stands alone on one side' },
    ],
    ideas: [
      { title: 'Keep the balance', text: 'Whatever operation you perform on one side of the equation, you must perform on the other side.', example: 'x + 7 = 19 → subtract 7 from both sides: x = 12' },
      { title: 'Multiplication and division inverses', text: 'If a variable is multiplied by 4, divide both sides by 4. If divided by 3, multiply both sides by 3.', example: '4x = 28 → x = 7' },
    ],
  },
  {
    code: '6.10B',
    goal: 'Determine if a given value makes a one-variable, one-step equation or inequality true.',
    words: [
      { term: 'solution', meaning: 'a value for a variable that makes an equation or inequality true' },
      { term: 'substitution', meaning: 'replacing the variable with a given number to test truth' },
    ],
    ideas: [
      { title: 'Substitute and simplify', text: 'Replace the variable with the test number and calculate. If both sides are equal, the number is a solution.', example: 'Is x = 4 a solution to 3x + 2 = 14? 3(4) + 2 = 12 + 2 = 14 (Yes!)' },
      { title: 'Testing inequalities', text: 'Substitute into the inequality to see if the resulting comparison is mathematically true.', example: 'Is x = 5 a solution to x + 4 < 9? 5 + 4 = 9, and 9 < 9 is false (No).' },
    ],
  },

  // ===========================================================================
  // Strand 3: Geometry & Measurement (6 standards)
  // ===========================================================================
  {
    code: '6.4H',
    goal: 'Convert units within a measurement system, including the use of proportions and unit rates.',
    words: [
      { term: 'customary units', meaning: 'US measurement system: inches, feet, yards, miles, pounds, gallons' },
      { term: 'metric units', meaning: 'base-10 system: millimeters, centimeters, meters, kilometers, grams, liters' },
    ],
    ideas: [
      { title: 'Use conversion factors', text: '1 foot = 12 inches; 1 yard = 3 feet; 1 meter = 100 cm; 1 kilometer = 1,000 m; 1 pound = 16 ounces.', example: '4 yards × 3 = 12 feet' },
      { title: 'Set up a proportion', text: 'Write a proportion with units aligned to convert any quantity.', example: '{1 yard / 3 feet} = {5 yards / x feet} → x = 15 feet' },
    ],
  },
  {
    code: '6.8A',
    goal: 'Extend previous knowledge of triangles and their properties to include angle sum, side length inequalities, and angle-side relationships.',
    words: [
      { term: 'triangle inequality theorem', meaning: 'the sum of the lengths of any two sides of a triangle must be strictly greater than the third side' },
      { term: 'angle sum', meaning: 'the interior angles of any triangle always add up to exactly 180°' },
    ],
    ideas: [
      { title: 'All triangle angles sum to 180°', text: 'If you know two angles, add them and subtract from 180° to find the missing third angle.', example: '50° + 70° = 120° → 180° − 120° = 60°' },
      { title: 'Side inequality test', text: 'Add the two shorter side lengths. If their sum is greater than the longest side, a triangle can be formed.', example: '3 + 4 = 7 > 6 (Can form a triangle). 2 + 3 = 5 not > 6 (Cannot).' },
      { title: 'Longest side is opposite the largest angle', text: 'The largest angle of a triangle is always opposite the longest side, and the smallest angle is opposite the shortest side.', example: 'In a triangle with angles 40°, 60°, 80°, the side opposite 80° is the longest.' },
    ],
  },
  {
    code: '6.8B',
    goal: 'Model area formulas for parallelograms, trapezoids, and triangles by decomposing and rearranging parts.',
    words: [
      { term: 'decompose', meaning: 'to break a geometric shape into smaller, simpler shapes' },
    ],
    ideas: [
      { title: 'Parallelograms become rectangles', text: 'Cut off the right triangle from one side of a parallelogram and attach it to the other side to make a rectangle with base b and height h: A = bh.', example: 'Area of parallelogram = bh' },
      { title: 'Triangles are half a parallelogram', text: 'Two congruent triangles fit together to make a parallelogram with base b and height h. One triangle has area A = {1/2}bh.', example: 'A = {1/2}bh' },
      { title: 'Trapezoids decompose into two triangles', text: 'A diagonal splits a trapezoid into two triangles with bases b₁ and b₂ and the same height h: A = {1/2}(b₁ + b₂)h.', example: 'A = {1/2}(b₁ + b₂)h' },
    ],
  },
  {
    code: '6.8C',
    goal: 'Write equations that represent problems related to the area of rectangles, parallelograms, trapezoids, and triangles and volume of right rectangular prisms.',
    words: [
      { term: 'base area (B)', meaning: 'the area of the base face of a prism; for a rectangle, B = lw' },
      { term: 'volume formula', meaning: 'V = Bh, where B is base area and h is height' },
    ],
    ideas: [
      { title: 'Area equations', text: 'Triangle: A = {1/2}bh. Parallelogram: A = bh. Trapezoid: A = {1/2}(b₁ + b₂)h.', example: 'A trapezoid with bases 6 and 10 and height 4: A = {1/2}(6 + 10)(4)' },
      { title: 'Volume equation V = Bh', text: 'Volume equals base area multiplied by height: V = Bh = lwh.', example: 'Base area 24 sq in and height 5 in: V = (24)(5) = 120 cu in' },
    ],
  },
  {
    code: '6.8D',
    goal: 'Determine solutions for problems involving the area of rectangles, parallelograms, trapezoids, and triangles and volume of right rectangular prisms.',
    words: [
      { term: 'square units', meaning: 'units of area (in², cm², m²)' },
      { term: 'cubic units', meaning: 'units of volume (in³, cm³, m³)' },
    ],
    ideas: [
      { title: 'Perpendicular height is key', text: 'Always use the perpendicular height (at right angles to the base), never the slanted side length.', example: 'In a triangle with base 8 and slant 6 and height 5, use h = 5: A = {1/2}(8)(5) = 20.' },
      { title: 'Volume with decimals and fractions', text: 'Multiply length × width × height carefully, ensuring all dimensions are in the same unit.', example: '4 ft × 2.5 ft × 3 ft = 30 cu ft' },
    ],
  },
  {
    code: '6.11A',
    goal: 'Graph points in all four quadrants using ordered pairs of rational numbers.',
    words: [
      { term: 'origin', meaning: 'the point (0, 0) where the x-axis and y-axis intersect' },
      { term: 'quadrants', meaning: 'the four regions of the coordinate plane, numbered I to IV counterclockwise' },
    ],
    ideas: [
      { title: 'The four quadrant signs', text: 'Quadrant I: (+, +). Quadrant II: (−, +). Quadrant III: (−, −). Quadrant IV: (+, −).', example: '(−3, 4) is in Quadrant II; (−2, −5) is in Quadrant III.' },
      { title: 'Reflections across axes', text: 'Reflecting across the x-axis changes the sign of y: (x, y) → (x, −y). Reflecting across the y-axis changes the sign of x: (x, y) → (−x, y).', example: '(3, 5) reflected across x-axis is (3, −5).' },
    ],
  },

  // ===========================================================================
  // Strand 4: Data Analysis & Personal Financial Literacy (13 standards)
  // ===========================================================================
  {
    code: '6.12A',
    goal: 'Represent numeric data graphically, including dot plots, stem-and-leaf plots, histograms, and box plots.',
    words: [
      { term: 'histogram', meaning: 'a bar graph showing frequencies for intervals of continuous numerical data with no gaps between bars' },
      { term: 'box plot', meaning: 'a visual summary showing min, Q1, median, Q3, and max along a number line' },
    ],
    ideas: [
      { title: 'Histograms group data into intervals', text: 'Equal-width intervals are along the x-axis. Bar height represents the frequency of data points in that range.', example: 'Interval 10–19 with height 8 means 8 data points fall in that range.' },
      { title: 'Box plots show five-number summaries', text: 'Whiskers extend to min and max. The box spans from Q1 to Q3, with a line at the median.', example: 'Min = 10, Q1 = 15, Median = 22, Q3 = 28, Max = 35' },
    ],
  },
  {
    code: '6.12B',
    goal: 'Use the graphical representation of numeric data to describe the center, spread, and shape of the data distribution.',
    words: [
      { term: 'symmetrical', meaning: 'a distribution that looks roughly identical on both sides of the center' },
      { term: 'skewed', meaning: 'a distribution where data is clustered on one side with a long tail on the other' },
      { term: 'cluster', meaning: 'several data points grouped closely together' },
      { term: 'gap', meaning: 'an empty interval with no data points' },
    ],
    ideas: [
      { title: 'Tail points to the skew', text: 'Skewed right has a tail extending toward higher numbers. Skewed left has a tail extending toward lower numbers.', example: 'A long tail on the right side indicates skewed right.' },
      { title: 'Peaks, clusters, and gaps', text: 'Identify the highest column (peak), where dots bundle (clusters), and where spaces are empty (gaps).', example: 'A peak at 12 with a gap between 15 and 20.' },
    ],
  },
  {
    code: '6.12C',
    goal: 'Summarize numeric data with numerical summaries, including the mean and median, and the range and interquartile range (IQR).',
    words: [
      { term: 'mean', meaning: 'the average: sum of all data values divided by the total number of values' },
      { term: 'median', meaning: 'the middle number when values are arranged in order from least to greatest' },
      { term: 'range', meaning: 'the difference between the maximum and minimum values: max − min' },
      { term: 'IQR', meaning: 'interquartile range: Q3 − Q1, measuring the spread of the middle 50% of data' },
    ],
    ideas: [
      { title: 'Finding the median of an even set', text: 'When there is an even number of data values, find the average of the two middle values.', example: 'Middle numbers 18 and 22 → (18 + 22) ÷ 2 = 20' },
      { title: 'IQR measures the middle half', text: 'Subtract the first quartile from the third quartile: IQR = Q3 − Q1.', example: 'Q3 = 28 and Q1 = 16 → IQR = 28 − 16 = 12' },
    ],
  },
  {
    code: '6.12D',
    goal: 'Summarize categorical data with numerical and graphical summaries, including the mode, the percent of values in each category (relative frequency table), and the percent bar graph.',
    words: [
      { term: 'mode', meaning: 'the category or value that occurs most frequently' },
      { term: 'relative frequency', meaning: 'the fraction or percent of the total data falling into a category' },
      { term: 'percent bar graph', meaning: 'a single bar divided into sections representing percentages of categories, totaling 100%' },
    ],
    ideas: [
      { title: 'Calculating category percentages', text: 'Divide the frequency of the category by the total count, then multiply by 100.', example: '12 out of 40 students = 12/40 = 0.30 = 30%' },
      { title: 'Reading percent bar graphs', text: 'Find the width of each colored segment by subtracting the start percent from the end percent.', example: 'A segment from 40% to 75% represents 75 − 40 = 35% of the total.' },
    ],
  },
  {
    code: '6.13A',
    goal: 'Interpret numeric data summarized in dot plots, stem-and-leaf plots, histograms, and box plots.',
    words: [
      { term: 'interpretation', meaning: 'drawing conclusions, finding counts, or computing percentages from graphs' },
    ],
    ideas: [
      { title: 'Quartiles split data into 25% chunks', text: 'Each section of a box plot (whisker, left box half, right box half, right whisker) contains approximately 25% of the data values.', example: '50% of data lies below the median; 75% lies below Q3.' },
      { title: 'Reading cumulative counts on histograms', text: 'Add the frequencies of multiple interval bars to answer questions like "how many read at least 20 minutes?".', example: '12 (20–29) + 7 (30–39) = 19 students' },
    ],
  },
  {
    code: '6.13B',
    goal: 'Distinguish between situations that yield data with and without variability.',
    words: [
      { term: 'variability', meaning: 'how spread out or diverse different answers or measurements can be' },
      { term: 'statistical question', meaning: 'a question that anticipates and accounts for variability in the responses' },
    ],
    ideas: [
      { title: 'Statistical questions have multiple different answers', text: '"How tall are sixth graders?" is statistical because different students have different heights.', example: 'Different students give different answers → variability.' },
      { title: 'Questions without variability have one fixed answer', text: '"How many inches are in a foot?" has only one correct answer (12). There is zero variability.', example: 'Single fixed fact → no variability.' },
    ],
  },
  {
    code: '6.14A',
    goal: 'Compare the features and costs of a checking account and a debit card offered by different local financial institutions.',
    words: [
      { term: 'checking account', meaning: 'a deposit account held at a bank that allows withdrawals and deposits' },
      { term: 'overdraft fee', meaning: 'a fee charged by a bank when spending exceeds the available account balance' },
      { term: 'minimum balance', meaning: 'the lowest balance required to avoid monthly maintenance fees' },
    ],
    ideas: [
      { title: 'Everyday transaction account', text: 'Checking accounts allow quick access to money using debit cards, ATM withdrawals, paper checks, and online bill payments.', example: 'Use a debit card for groceries or gas.' },
      { title: 'Watch out for bank fees', text: 'Compare monthly maintenance fees, minimum balance requirements, ATM fees, and overdraft protection costs.', example: 'A bank may waive a $10 fee if you keep at least $100 in the account.' },
    ],
  },
  {
    code: '6.14B',
    goal: 'Distinguish between debit cards and credit cards.',
    words: [
      { term: 'debit card', meaning: 'a payment card that deducts money directly from the user’s checking account' },
      { term: 'credit card', meaning: 'a payment card that borrows money from a lender up to a limit, which must be repaid' },
      { term: 'interest', meaning: 'the cost of borrowing money, charged when a credit card balance is not paid in full' },
    ],
    ideas: [
      { title: 'Your money vs borrowed money', text: 'Debit card = your money withdrawn immediately from your bank. Credit card = borrowed money billed to you monthly.', example: 'Debit spends cash on hand; credit is a short-term loan.' },
      { title: 'Avoiding debt', text: 'Debit cards protect you from accumulating debt and interest charges because you cannot spend more than you have.', example: 'Paying with debit avoids monthly finance charges.' },
    ],
  },
  {
    code: '6.14C',
    goal: 'Balance a check register that includes deposits, withdrawals, and transfers.',
    words: [
      { term: 'check register', meaning: 'a log used to record all financial transactions and keep track of running balance' },
      { term: 'deposit', meaning: 'adding money into an account (+)' },
      { term: 'withdrawal', meaning: 'taking money out of an account (−)' },
    ],
    ideas: [
      { title: 'Deposits increase balance', text: 'Add deposits, paychecks, and incoming transfers to the current balance.', example: 'Balance $300 + Deposit $50 = New Balance $350' },
      { title: 'Withdrawals decrease balance', text: 'Subtract checks, debit card purchases, ATM withdrawals, and bank fees.', example: 'Balance $350 − Debit $40 = New Balance $310' },
    ],
  },
  {
    code: '6.14E',
    goal: 'Describe the information in a credit report and how long it is retained.',
    words: [
      { term: 'credit report', meaning: 'a detailed record of an individual’s borrowing and repayment history' },
      { term: 'credit bureau', meaning: 'an agency (Equifax, Experian, TransUnion) that collects and tracks credit history' },
    ],
    ideas: [
      { title: 'What is inside a credit report', text: 'Contains personal information, open credit accounts, loan balances, payment timeliness, and public records like bankruptcies.', example: 'Payment history on car loans, mortgages, and credit cards.' },
      { title: 'Retention time is typically 7 to 10 years', text: 'Negative financial information (missed payments, collection accounts) stays on a credit report for up to 7 years. Bankruptcy can stay for 10 years.', example: 'Late payments remain on record for 7 years.' },
    ],
  },
  {
    code: '6.14F',
    goal: 'Explain the value of credit reports to borrowers and to lenders.',
    words: [
      { term: 'creditworthiness', meaning: 'a lender’s assessment of how likely a borrower is to pay back loans on time' },
      { term: 'credit score', meaning: 'a three-digit number summarizing the credit report (typically 300 to 850)' },
    ],
    ideas: [
      { title: 'Lenders evaluate loan risk', text: 'Lenders review credit reports to decide whether to approve loans and what interest rate to charge based on risk.', example: 'A borrower with reliable history is offered a loan.' },
      { title: 'Borrowers save money with good credit', text: 'A high credit score qualifies borrowers for lower interest rates on mortgages, auto loans, and credit cards, saving thousands of dollars.', example: 'A 4% interest rate on a car loan costs much less than a 12% rate.' },
    ],
  },
  {
    code: '6.14G',
    goal: 'Explain various methods to pay for college, including through savings, grants, scholarships, student loans, and work-study.',
    words: [
      { term: 'scholarship', meaning: 'financial aid awarded based on academic, athletic, or other merit; does not need repayment' },
      { term: 'grant', meaning: 'financial aid awarded based on financial need; does not need repayment' },
      { term: 'student loan', meaning: 'borrowed money that must be repaid with interest after leaving school' },
      { term: 'work-study', meaning: 'a federally funded program providing part-time campus jobs for students' },
    ],
    ideas: [
      { title: 'Gift aid vs borrowed money', text: 'Scholarships and grants are free money that does not need to be repaid. Student loans must be paid back with interest.', example: 'Apply for scholarships and grants first before taking loans.' },
      { title: 'Combining multiple funding sources', text: 'Most college students pay tuition through a mix of personal savings, grants, work-study earnings, and loans.', example: 'Tuition $10,000 − $4,000 scholarship − $2,000 savings = $4,000 loan needed.' },
    ],
  },
  {
    code: '6.14H',
    goal: 'Compare the annual salaries of several occupations that require various levels of postsecondary education or training and calculate the effects of the different annual salaries over useful work lifetimes.',
    words: [
      { term: 'postsecondary education', meaning: 'education beyond high school, such as vocational certificates, associate, bachelor, or graduate degrees' },
      { term: 'lifetime earnings', meaning: 'the total money earned over an entire career (often calculated over 30 or 40 years)' },
    ],
    ideas: [
      { title: 'Higher training leads to higher average earnings', text: 'Occupations requiring specialized skills or college degrees generally offer higher median annual salaries.', example: 'Associate degree average: $55,000/yr vs High school: $35,000/yr.' },
      { title: 'Compounding impact over a career', text: 'An annual difference of $20,000 over a 30-year career amounts to $600,000 in additional lifetime earnings.', example: '$20,000 × 30 years = $600,000 lifetime difference.' },
    ],
  },
];
