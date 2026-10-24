// Walkthroughs for the 38 grade 7 math standards, written to the TEKS wording in data/standards/g7-math.ts.
// Kept concise: a goal sentence, key vocabulary, and 2 to 4 big ideas. Tested to ensure every standard has one.

import type { Lesson } from '../types.ts';

export const G7_MATH_LESSONS: Lesson[] = [
  // ===========================================================================
  // Strand 1: Probability and Numerical Representations (7 standards)
  // ===========================================================================
  {
    code: '7.2A',
    goal: 'Extend previous knowledge of sets and subsets using visual representations to describe relationships between sets of rational numbers.',
    words: [
      { term: 'rational number', meaning: 'any number that can be expressed as a ratio of two integers a/b where b ≠ 0' },
      { term: 'subset', meaning: 'a set whose elements are all members of another larger set' },
    ],
    ideas: [
      { title: 'Nested number sets', text: 'Natural numbers ⊂ Whole numbers ⊂ Integers ⊂ Rational numbers. Every whole number is an integer, and every integer is a rational number.', example: '5 is natural, whole, integer, and rational. −12 is an integer and rational.' },
      { title: 'Fractions and terminating or repeating decimals', text: 'Numbers like {3/8} and −0.45 belong to the rational numbers set but are neither whole numbers nor integers.', example: '{3/8} = 0.375 (rational only)' },
    ],
  },
  {
    code: '7.6A',
    goal: 'Represent sample spaces for simple and compound events using lists and tree diagrams.',
    words: [
      { term: 'sample space', meaning: 'the set of all possible outcomes of a probability experiment' },
      { term: 'compound event', meaning: 'an event consisting of two or more simple events occurring together or in sequence' },
      { term: 'tree diagram', meaning: 'a branching diagram showing all possible sequences of outcomes' },
    ],
    ideas: [
      { title: 'Fundamental Counting Principle', text: 'If one event has m outcomes and a second event has n outcomes, there are m × n total compound outcomes.', example: 'Flipping a coin (2) and rolling a die (6): 2 × 6 = 12 outcomes.' },
      { title: 'Tree diagrams organize branches', text: 'Each stage of the experiment forms a new layer of branches. The endpoints of all branches list the complete sample space.', example: 'Tossing two coins produces branches HH, HT, TH, TT (4 outcomes).' },
    ],
  },
  {
    code: '7.6C',
    goal: 'Make predictions and determine solutions using experimental data for simple and compound events.',
    words: [
      { term: 'experimental probability', meaning: 'the ratio of the number of times an event occurs to the total number of trials conducted: favorable / total' },
      { term: 'prediction', meaning: 'estimating future occurrences by scaling experimental probability to a larger number of trials' },
    ],
    ideas: [
      { title: 'Calculate experimental rate', text: 'Divide the number of successful trials by the total trials conducted in the experiment.', example: '12 purple spins out of 50 total spins = 12/50 = 0.24' },
      { title: 'Multiply rate by future trials', text: 'To predict outcomes for a larger number of trials, multiply the experimental probability by the planned number of trials.', example: '0.24 × 200 future spins = 48 predicted purple spins.' },
    ],
  },
  {
    code: '7.6D',
    goal: 'Make predictions and determine solutions using theoretical probability for simple and compound events.',
    words: [
      { term: 'theoretical probability', meaning: 'the ratio of favorable outcomes to total equally likely outcomes: P(E) = favorable / total' },
      { term: 'expected value', meaning: 'the predicted number of times an event will occur: P(E) × number of trials' },
    ],
    ideas: [
      { title: 'Analyze theoretical outcomes', text: 'Identify all possible equally likely outcomes in the sample space without needing to run an experiment.', example: 'Rolling a 4 on a 6-sided die: 1 favorable outcome out of 6 total = 1/6.' },
      { title: 'Predict over many trials', text: 'Multiply theoretical probability by the number of trials to find the expected count.', example: '{1/6} × 120 rolls = 20 expected rolls of a 4.' },
    ],
  },
  {
    code: '7.6E',
    goal: 'Find the probabilities of a simple event and its complement and describe the relationship between the two.',
    words: [
      { term: 'complement', meaning: 'all outcomes in the sample space that are NOT the event, written as A’ or not A' },
    ],
    ideas: [
      { title: 'Probabilities sum to 1', text: 'An event either happens or it does not happen. Therefore, P(event) + P(not event) = 1.', example: 'P(rain) = 0.35 → P(not rain) = 1 − 0.35 = 0.65.' },
      { title: 'Solving for the complement', text: 'Subtract the probability of the event from 1 (or 100%) to find the probability of its complement.', example: 'P(win) = {2/7} → P(lose) = 1 − {2/7} = {5/7}.' },
    ],
  },
  {
    code: '7.6H',
    goal: 'Solve problems using qualitative and quantitative predictions and comparisons from simple experiments.',
    words: [
      { term: 'qualitative', meaning: 'describing probability using words like impossible, unlikely, equally likely, likely, or certain' },
      { term: 'quantitative', meaning: 'describing probability using numerical values such as fractions, decimals, or percentages' },
    ],
    ideas: [
      { title: 'Qualitative likelihood scale', text: '0 = impossible, 0 to 0.5 = unlikely, 0.5 = equally likely as not, 0.5 to 1 = likely, 1 = certain.', example: 'Drawing a marble with 75% probability is likely.' },
      { title: 'Comparing experiment to theory', text: 'Compare actual experimental results with expected theoretical counts to determine how much above or below expectation the experiment was.', example: '62 Heads in 100 flips is 12 more Heads than the expected 50.' },
    ],
  },
  {
    code: '7.6I',
    goal: 'Determine experimental and theoretical probabilities related to simple and compound events using data and sample spaces.',
    words: [
      { term: 'independent events', meaning: 'events where the outcome of the first event does not affect the outcome of the second event' },
    ],
    ideas: [
      { title: 'Simple event probability', text: 'Divide the number of favorable outcomes by the total outcomes.', example: 'P(even on 6-sided die) = 3/6 = 1/2.' },
      { title: 'Compound independent probability', text: 'Multiply the individual probabilities of independent events: P(A and B) = P(A) × P(B).', example: 'P(Tails and rolling > 4) = {1/2} × {2/6} = {1/2} × {1/3} = {1/6}.' },
    ],
  },

  // ===========================================================================
  // Strand 2: Computations and Algebraic Relationships (12 standards)
  // ===========================================================================
  {
    code: '7.3A',
    goal: 'Add, subtract, multiply, and divide rational numbers fluently.',
    words: [
      { term: 'rational operations', meaning: 'applying sign rules and fraction/decimal arithmetic to positive and negative numbers' },
    ],
    ideas: [
      { title: 'Adding and subtracting signed numbers', text: 'Adding numbers with opposite signs: subtract their absolute values and keep the sign of the number with the larger absolute value.', example: '−12.5 + 3.2 = −9.3' },
      { title: 'Multiplying and dividing signed numbers', text: 'A negative times a positive is negative. A negative times a negative is positive.', example: '(−{1/4}) × {3/5} = −{3/20}' },
    ],
  },
  {
    code: '7.3B',
    goal: 'Apply and extend previous understandings of operations to solve problems using addition, subtraction, multiplication, and division of rational numbers.',
    words: [
      { term: 'real-world rational numbers', meaning: 'temperatures, elevations, bank balances, and changes represented by positive and negative values' },
    ],
    ideas: [
      { title: 'Temperature and elevation shifts', text: 'Increases and ascents are positive (+); decreases, drops, and descents are negative (−).', example: 'Elevation −35 ft + 20 ft ascent = −15 ft.' },
      { title: 'Financial transactions', text: 'Deposits add money (+), while withdrawals, checks, and debit purchases subtract money (−).', example: 'Balance $150 − Check $65 + Deposit $120 = $205.' },
    ],
  },
  {
    code: '7.4A',
    goal: 'Represent constant rates of change in mathematical and real-world problems given pictorial, tabular, verbal, numeric, graphical, and algebraic representations, including d = rt.',
    words: [
      { term: 'constant rate of change', meaning: 'the steady ratio of the change in output to the change in input: Δy / Δx' },
      { term: 'distance formula', meaning: 'd = rt, where distance equals rate multiplied by time' },
    ],
    ideas: [
      { title: 'Using d = rt', text: 'Multiply rate (speed) by time to find distance traveled.', example: '60 mph for 3 hours: d = 60 × 3 = 180 miles.' },
      { title: 'Rate of change from tables and graphs', text: 'Divide the vertical change by the horizontal change between any two data points.', example: 'Earnings increase $30 for every 2 hours: rate = $30 ÷ 2 = $15/hr.' },
    ],
  },
  {
    code: '7.4B',
    goal: 'Calculate unit rates from rates in mathematical and real-world problems.',
    words: [
      { term: 'unit rate', meaning: 'a comparison of two quantities where the second quantity is reduced to 1 unit' },
    ],
    ideas: [
      { title: 'Miles per gallon and price per unit', text: 'Divide total miles by total gallons to find mpg. Divide total price by weight/volume to find unit price.', example: '300 miles on 10 gallons = 300 ÷ 10 = 30 mpg.' },
      { title: 'Unit rate with complex fractions', text: 'Divide numerator fraction by denominator fraction by multiplying by the reciprocal.', example: '{3/4} mile in {1/10} hour: {3/4} × 10 = 7.5 mph.' },
    ],
  },
  {
    code: '7.4C',
    goal: 'Determine the constant of proportionality (k = y/x) within mathematical and real-world problems.',
    words: [
      { term: 'constant of proportionality (k)', meaning: 'the constant ratio k = y/x relating two proportional quantities' },
    ],
    ideas: [
      { title: 'Divide y by x', text: 'In any proportional relationship, dividing output y by input x produces the exact same constant k for all data pairs.', example: 'y = 14 when x = 4: k = 14 ÷ 4 = 3.5.' },
      { title: 'Passes through (0, 0)', text: 'Proportional graphs always pass through the origin (0, 0) with slope equal to k.', example: 'Line passes through (0, 0) and (2, 8): k = 8/2 = 4.' },
    ],
  },
  {
    code: '7.4D',
    goal: 'Solve problems involving ratios, rates, and percents, including multi-step problems involving percent increase and percent decrease, and financial literacy problems.',
    words: [
      { term: 'percent increase', meaning: 'the percentage by which an original amount grows: (increase / original) × 100' },
      { term: 'percent decrease', meaning: 'the percentage by which an original amount shrinks: (decrease / original) × 100' },
      { term: 'sales tax and tip', meaning: 'percentages added to the purchase price' },
      { term: 'discount', meaning: 'a percentage subtracted from the original price' },
    ],
    ideas: [
      { title: 'Percent increase and markup', text: 'Calculate the percentage of the original amount and add it to the original price.', example: '$40 jacket with 25% increase: 0.25 × 40 = $10 increase → $50.' },
      { title: 'Discounts and sales', text: 'Calculate the percentage discount and subtract it from the regular price.', example: '$100 shoes at 20% off: 0.20 × 100 = $20 discount → $80 sale price.' },
    ],
  },
  {
    code: '7.7A',
    goal: 'Represent linear relationships using verbal descriptions, tables, graphs, and equations that simplify to the form y = mx + b.',
    words: [
      { term: 'slope (m)', meaning: 'the constant rate of change Δy / Δx' },
      { term: 'y-intercept (b)', meaning: 'the value of y when x = 0; where the line crosses the y-axis' },
    ],
    ideas: [
      { title: 'Linear form y = mx + b', text: 'm is the multiplier per unit of x, and b is the initial starting value or flat fee.', example: 'Flat fee $15 plus $25/hr: y = 25x + 15.' },
      { title: 'Evaluating linear equations', text: 'Substitute the given x value into the equation to find the corresponding y value.', example: 'y = 3x + 2: when x = 4, y = 3(4) + 2 = 14.' },
    ],
  },
  {
    code: '7.10A',
    goal: 'Write one-variable, two-step equations and inequalities to represent constraints or conditions within problems.',
    words: [
      { term: 'two-step equation', meaning: 'an equation requiring two inverse operations to isolate the variable, such as ax + b = c' },
    ],
    ideas: [
      { title: 'Translate words to two-step expressions', text: 'Identify the rate multiplied by the variable (ax), the constant amount added or subtracted (b), and the total (c).', example: '3 notebooks at n dollars each plus a $10 backpack costs $40: 3n + 10 = 40.' },
      { title: 'Inequality constraints', text: '"At most" or "budget limit" uses ≤. "At least" or "minimum required" uses ≥.', example: '4 tickets at t dollars plus $15 admission budget limit $50: 4t + 15 ≤ 50.' },
    ],
  },
  {
    code: '7.10B',
    goal: 'Represent solutions for one-variable, two-step equations and inequalities on number lines.',
    words: [
      { term: 'solution set', meaning: 'all values that make an inequality true' },
      { term: 'circle and arrow rules', meaning: 'open circle for < or >; closed circle for ≤ or ≥; arrow indicates direction of values' },
    ],
    ideas: [
      { title: 'Solve the two-step inequality first', text: 'Isolate the variable using inverse operations before graphing.', example: '2x + 4 < 10 → 2x < 6 → x < 3.' },
      { title: 'Reversing signs with negatives', text: 'Dividing or multiplying both sides of an inequality by a negative number reverses the direction of the inequality symbol.', example: '−2x ≤ 8 → divide by −2 → x ≥ −4.' },
    ],
  },
  {
    code: '7.10C',
    goal: 'Write a corresponding real-world problem given a one-variable, two-step equation or inequality.',
    words: [
      { term: 'mathematical model', meaning: 'representing a physical scenario using an algebraic equation or inequality' },
    ],
    ideas: [
      { title: 'Matching variables and constants to stories', text: 'In 4x + 15 = 55, 4 represents 4 identical items, x is the cost per item, 15 is a one-time fee, and 55 is total cost.', example: 'Buying 4 shirts and a $15 hat for $55 total.' },
      { title: 'Decreasing contexts', text: 'In 25 − 3x ≥ 10, a starting amount of 25 is drained by 3 per day for x days, leaving at least 10 remaining.', example: '25 lbs of flour used at 3 lbs/day.' },
    ],
  },
  {
    code: '7.11A',
    goal: 'Model and solve one-variable, two-step equations and inequalities.',
    words: [
      { term: 'inverse operations', meaning: 'undoing operations in reverse order: undo addition/subtraction first, then multiplication/division' },
    ],
    ideas: [
      { title: 'Two-step solving process', text: 'Step 1: Add or subtract to isolate the variable term. Step 2: Multiply or divide to isolate the variable.', example: '3x + 5 = 26 → 3x = 21 → x = 7.' },
      { title: 'Fractional equations', text: 'Subtract the constant, then multiply both sides by the denominator.', example: '{x/3} + 4 = 11 → {x/3} = 7 → x = 21.' },
    ],
  },
  {
    code: '7.11B',
    goal: 'Determine if the given value(s) make(s) one-variable, two-step equations and inequalities true.',
    words: [
      { term: 'substitution test', meaning: 'replacing the variable with a number and simplifying to verify equality or truth' },
    ],
    ideas: [
      { title: 'Check equation solutions', text: 'Plug the candidate number into the equation. If both sides evaluate to the same value, it is a true solution.', example: 'Is x = 4 a solution to 3x + 5 = 17? 3(4) + 5 = 12 + 5 = 17 (True).' },
      { title: 'Test inequality sets', text: 'Substitute each value from a given set into the inequality to identify which numbers satisfy the condition.', example: '4x − 6 > 18: test 7: 4(7) − 6 = 22 > 18 (True).' },
    ],
  },

  // ===========================================================================
  // Strand 3: Geometry and Measurement (9 standards)
  // ===========================================================================
  {
    code: '7.4E',
    goal: 'Convert between measurement systems, including the use of proportions and the use of unit rates.',
    words: [
      { term: 'conversion factor', meaning: 'a ratio of equivalent measurements in different systems: e.g. 1 in ≈ 2.54 cm, 1 kg ≈ 2.2 lbs' },
    ],
    ideas: [
      { title: 'Customary to metric conversions', text: '1 inch ≈ 2.54 cm; 1 mile ≈ 1.6 km; 1 kilogram ≈ 2.2 pounds; 1 gallon ≈ 3.8 liters.', example: '5 inches × 2.54 = 12.7 cm.' },
      { title: 'Use conversion proportions', text: 'Align units in both ratios to solve for the unknown measurement.', example: '{1 kg / 2.2 lbs} = {10 kg / x lbs} → x = 22 lbs.' },
    ],
  },
  {
    code: '7.5A',
    goal: 'Generalize the critical attributes of similarity, including ratios within and between similar shapes.',
    words: [
      { term: 'similar figures', meaning: 'figures with congruent corresponding angles and proportional corresponding side lengths' },
      { term: 'scale factor', meaning: 'the multiplier that resizes a figure to produce a similar figure' },
    ],
    ideas: [
      { title: 'Angles stay equal; sides scale', text: 'In similar polygons, corresponding angles are identical. Side lengths are multiplied by the same scale factor.', example: 'If a triangle scales up by 2, its angles remain unchanged while all side lengths double.' },
      { title: 'Equivalent ratios between sides', text: 'Ratio of side 1 to side 2 in the first figure equals the ratio of corresponding side 1 to side 2 in the second figure.', example: '{AB/DE} = {BC/EF}.' },
    ],
  },
  {
    code: '7.5B',
    goal: 'Describe π as the ratio of the circumference of a circle to its diameter.',
    words: [
      { term: 'pi (π)', meaning: 'the constant ratio of circumference to diameter for any circle: π = C / d ≈ 3.14 or 22/7' },
      { term: 'circumference (C)', meaning: 'the distance around a circle' },
      { term: 'diameter (d)', meaning: 'the distance across a circle through its center: d = 2r' },
    ],
    ideas: [
      { title: 'Every circle has the same ratio', text: 'No matter the size of the circle, dividing its circumference by its diameter always yields approximately 3.14159...', example: 'C ÷ d = π ≈ 3.14.' },
      { title: 'Circumference formulas', text: 'C = πd and C = 2πr both come directly from the definition π = C / d.', example: 'A circle with d = 10 has C = 10π ≈ 31.4 units.' },
    ],
  },
  {
    code: '7.5C',
    goal: 'Solve mathematical and real-world problems involving similar shape and scale drawings.',
    words: [
      { term: 'scale drawing', meaning: 'a drawing that represents a real object with dimensions reduced or enlarged proportionally' },
      { term: 'map scale', meaning: 'a ratio comparing map units to actual real-world distances: e.g. 1 cm = 20 miles' },
    ],
    ideas: [
      { title: 'Scale factor proportions', text: 'Set up a proportion matching drawing distance to actual distance.', example: '{1 cm / 20 miles} = {4 cm / x miles} → x = 80 miles.' },
      { title: 'Missing sides of similar polygons', text: 'Use corresponding side proportions to calculate unknown lengths.', example: '{8/12} = {14/x} → 8x = 168 → x = 21 cm.' },
    ],
  },
  {
    code: '7.9A',
    goal: 'Solve problems involving the volume of rectangular prisms, triangular prisms, rectangular pyramids, and triangular pyramids.',
    words: [
      { term: 'prism volume', meaning: 'V = Bh, where B is the base area and h is the height of the prism' },
      { term: 'pyramid volume', meaning: 'V = (1/3)Bh, where volume is one-third of a prism with the same base and height' },
    ],
    ideas: [
      { title: 'Prisms: V = Bh', text: 'Rectangular prism: V = lwh. Triangular prism: find triangular base area B = {1/2}bh, then multiply by prism length.', example: 'Triangular base area 12 sq ft × 10 ft length = 120 cu ft.' },
      { title: 'Pyramids: V = {1/3}Bh', text: 'A pyramid holds exactly one-third the volume of a prism with the same base and height.', example: 'Base area 36 cm² and height 8 cm: V = {1/3}(36)(8) = 96 cm³.' },
    ],
  },
  {
    code: '7.9B',
    goal: 'Determine the circumference and area of circles.',
    words: [
      { term: 'circumference formula', meaning: 'C = 2πr = πd' },
      { term: 'circle area formula', meaning: 'A = πr², measuring the interior surface in square units' },
    ],
    ideas: [
      { title: 'Circumference is perimeter', text: 'Use C = πd. If given radius r, double it to get diameter d first.', example: 'Diameter 14 in → C = 3.14 × 14 = 43.96 in.' },
      { title: 'Area squares the radius', text: 'Always square the radius r, not diameter: A = πr². If given diameter, divide by 2 to find radius.', example: 'Diameter 10 m → radius 5 m → A = 3.14 × 5² = 78.5 m².' },
    ],
  },
  {
    code: '7.9C',
    goal: 'Determine the area of composite figures containing combinations of rectangles, squares, parallelograms, trapezoids, triangles, semicircles, and quarter circles.',
    words: [
      { term: 'composite figure', meaning: 'a geometric shape made up of two or more basic geometric figures' },
    ],
    ideas: [
      { title: 'Additive strategy (sum of parts)', text: 'Decompose the figure into non-overlapping simpler shapes, calculate each area, and add them together.', example: 'Rectangle (40 sq in) + Triangle on top (16 sq in) = 56 sq in.' },
      { title: 'Subtractive strategy (cutouts)', text: 'Calculate the area of the entire outer shape and subtract the area of any holes or cutouts.', example: '108 sq in metal sheet − 16 sq in square cutout = 92 sq in.' },
    ],
  },
  {
    code: '7.9D',
    goal: 'Solve problems involving the lateral and total surface area of a rectangular prism, rectangular pyramid, triangular prism, and triangular pyramid by determining the area of the shape’s net.',
    words: [
      { term: 'net', meaning: 'a two-dimensional flat pattern that can be folded to form a three-dimensional figure' },
      { term: 'lateral surface area', meaning: 'the sum of the areas of the lateral (side) faces, excluding the base(s)' },
      { term: 'total surface area', meaning: 'the sum of all face areas including lateral faces and base(s)' },
    ],
    ideas: [
      { title: 'Lateral vs total', text: 'Lateral surface area excludes the bases. Total surface area includes the lateral area plus base area(s).', example: 'Box lateral area = 108 cm²; with two 20 cm² bases, total area = 148 cm².' },
      { title: 'Nets lay all faces flat', text: 'Find the area of each individual polygon in the net and sum them.', example: 'Square pyramid: 1 square base (64 sq in) + 4 triangles (40 sq in each) = 224 sq in.' },
    ],
  },
  {
    code: '7.11C',
    goal: 'Write and solve equations using geometry concepts, including the sum of the angles in a triangle, and angle relationships.',
    words: [
      { term: 'complementary angles', meaning: 'two angles whose sum is 90°' },
      { term: 'supplementary angles', meaning: 'two angles whose sum is 180°' },
      { term: 'vertical angles', meaning: 'opposite angles formed by intersecting lines; they are equal in measure' },
    ],
    ideas: [
      { title: 'Angle sum of a triangle is 180°', text: 'Set the sum of all three angle expressions equal to 180° and solve for the unknown variable.', example: 'x + 2x + 60 = 180 → 3x = 120 → x = 40°.' },
      { title: 'Complementary and supplementary equations', text: 'Complementary: a + b = 90. Supplementary (linear pair): a + b = 180.', example: '2x + 60 = 180 → 2x = 120 → x = 60°.' },
    ],
  },

  // ===========================================================================
  // Strand 4: Data Analysis and Personal Financial Literacy (10 standards)
  // ===========================================================================
  {
    code: '7.6G',
    goal: 'Solve problems using data represented in bar graphs, dot plots, and circle graphs, including part-to-whole and part-to-part comparisons and equivalents.',
    words: [
      { term: 'circle graph (pie chart)', meaning: 'a circular graph divided into sectors where each sector represents a percentage of the 100% total' },
    ],
    ideas: [
      { title: 'Calculate sector frequencies', text: 'Multiply the sector percentage by the total population to find the exact number of items.', example: '40% fiction books out of 200 total = 0.40 × 200 = 80 books.' },
      { title: 'Part-to-part comparisons', text: 'Compare percentages or counts between two sectors by setting up a simplified ratio.', example: '25% Basketball and 35% Soccer: ratio is 25:35 = 5:7.' },
    ],
  },
  {
    code: '7.12A',
    goal: 'Compare two groups of numeric data using comparative dot plots or box plots by comparing their shapes, centers, and spreads.',
    words: [
      { term: 'comparative box plot', meaning: 'two box plots graphed along the same number line to directly compare two distributions' },
    ],
    ideas: [
      { title: 'Compare centers (medians)', text: 'Look at the line inside each box to compare the median values of the two groups.', example: 'Class A median of 24 is 6 points greater than Class B median of 18.' },
      { title: 'Compare spreads (IQR and range)', text: 'The width of the box measures IQR (spread of middle 50%). The distance between whiskers measures range.', example: 'A wider box indicates greater variability in scores.' },
    ],
  },
  {
    code: '7.12B',
    goal: 'Use data from a random sample to make inferences about a population.',
    words: [
      { term: 'random sample', meaning: 'a sample chosen where every member of the population has an equal chance of being selected' },
      { term: 'inference', meaning: 'a conclusion drawn about an entire population based on sample data' },
    ],
    ideas: [
      { title: 'Representative sampling avoids bias', text: 'A random sample accurately reflects the demographics of the population. Avoid sampling specific interest groups.', example: 'Surveying every 10th student from a school roster avoids elective bias.' },
      { title: 'Scale sample proportions', text: 'Multiply sample rate by population total: (sample favorable / sample size) × population.', example: '15 of 50 students prefer pizza → 15/50 × 600 students = 180 expected.' },
    ],
  },
  {
    code: '7.12C',
    goal: 'Compare two populations based on data in random samples from these populations, including informal comparative inferences about differences between the two populations.',
    words: [
      { term: 'comparative inference', meaning: 'drawing conclusions comparing two groups based on sample centers and spreads' },
    ],
    ideas: [
      { title: 'Compare average performance', text: 'If Sample A has a higher mean or median than Sample B, infer that Population A generally has higher values.', example: 'School X mean of 12 books > School Y mean of 8 books.' },
      { title: 'Compare consistency', text: 'A smaller IQR indicates that data in that population is more consistent and clustered near the center.', example: 'IQR 10 min vs IQR 25 min shows group 1 has less variation.' },
    ],
  },
  {
    code: '7.13A',
    goal: 'Calculate the sales tax for a given purchase and calculate income tax for earned wages.',
    words: [
      { term: 'sales tax', meaning: 'a tax levied on the sale of goods and services, added to the retail price' },
      { term: 'income tax', meaning: 'a tax levied by government on personal earnings' },
      { term: 'gross income', meaning: 'total earnings before taxes and deductions' },
      { term: 'net income', meaning: 'take-home pay remaining after taxes and deductions: Net = Gross − Deductions' },
    ],
    ideas: [
      { title: 'Calculating sales tax', text: 'Multiply retail price by tax rate as a decimal, then add tax to original price.', example: '$40 purchase × 0.0825 sales tax = $3.30 tax → $43.30 total.' },
      { title: 'Gross vs net wages', text: 'Income tax deductions reduce take-home pay.', example: '$4,000 gross − $600 income tax − $300 FICA = $3,100 net income.' },
    ],
  },
  {
    code: '7.13B',
    goal: 'Identify the components of a personal budget, including income; planned savings for college, retirement, and emergencies; taxes; and fixed and variable expenses, and calculate what percentage each category comprises of the total budget.',
    words: [
      { term: 'fixed expenses', meaning: 'expenses that do not change amount from month to month, like rent or car payments' },
      { term: 'variable expenses', meaning: 'expenses that fluctuate each month, like groceries, utility bills, and entertainment' },
      { term: 'emergency fund', meaning: 'savings reserved to cover 3 to 6 months of living expenses in case of financial hardship' },
    ],
    ideas: [
      { title: 'Categorizing budget spending', text: 'Sort spending into fixed obligations, variable needs, taxes, and planned savings.', example: 'Rent is fixed; groceries are variable; emergency fund is savings.' },
      { title: 'Percentage of total budget', text: 'Divide the category dollar amount by total income and multiply by 100.', example: '$1,200 rent ÷ $3,000 total budget = 40%.' },
    ],
  },
  {
    code: '7.13C',
    goal: 'Create and organize a financial assets and liabilities record and construct a net worth statement.',
    words: [
      { term: 'asset', meaning: 'an item of economic value owned by an individual, such as cash, savings, a home, or a car' },
      { term: 'liability', meaning: 'a financial debt or obligation owed to another party, like loans or credit card balances' },
      { term: 'net worth', meaning: 'Total Assets − Total Liabilities' },
    ],
    ideas: [
      { title: 'Net worth formula', text: 'Net worth measures overall wealth: Assets (what you own) − Liabilities (what you owe).', example: '$23,000 assets − $8,000 liabilities = $15,000 net worth.' },
      { title: 'Positive vs negative net worth', text: 'If debts exceed the value of assets, net worth is negative. Paying down debt increases net worth.', example: '$10,000 assets − $15,000 debts = −$5,000 net worth.' },
    ],
  },
  {
    code: '7.13D',
    goal: 'Use a family budget estimator to determine the minimum household budget and average hourly wage needed for a family to meet its basic needs in the student’s city or another large city nearby.',
    words: [
      { term: 'family budget estimator', meaning: 'a financial tool calculating the cost of living (housing, food, healthcare, transportation) for a family' },
    ],
    ideas: [
      { title: 'Calculating required hourly wage', text: 'Divide monthly budget needs by 160 hours (standard full-time work month) to find the necessary wage.', example: '$3,200 monthly need ÷ 160 hours = $20 per hour.' },
      { title: 'Geographic cost of living differences', text: 'Living costs vary widely across Texas cities; major metro areas require higher annual income than rural areas.', example: 'Austin expenses ($4,400/mo) vs El Paso expenses ($3,600/mo).' },
    ],
  },
  {
    code: '7.13E',
    goal: 'Calculate and compare simple interest and compound interest earnings.',
    words: [
      { term: 'simple interest', meaning: 'interest calculated solely on the original principal: I = Prt' },
      { term: 'compound interest', meaning: 'interest earned on both the original principal and accumulated interest from previous periods' },
      { term: 'principal (P)', meaning: 'the initial amount of money deposited or borrowed' },
    ],
    ideas: [
      { title: 'Simple interest: I = Prt', text: 'Multiply principal by annual interest rate (as a decimal) and time in years.', example: '$1,000 at 5% for 3 years: I = 1,000 × 0.05 × 3 = $150.' },
      { title: 'Compound interest grows faster', text: 'Because interest compounds on top of previous interest, compound interest yields greater earnings than simple interest over time.', example: 'Over 2 years at 10%, compound interest earns $210 vs $200 for simple interest.' },
    ],
  },
  {
    code: '7.13F',
    goal: 'Analyze and compare monetary incentives, including sales, rebates, and coupons.',
    words: [
      { term: 'rebate', meaning: 'a partial refund returned to the buyer by mail or digital claim after purchase' },
      { term: 'coupon', meaning: 'a voucher or code granting an instant discount at checkout' },
    ],
    ideas: [
      { title: 'Immediate vs delayed discounts', text: 'Coupons discount purchases instantly at the register. Rebates require submitting forms and waiting for a refund.', example: 'A $20 instant coupon vs a $25 mail-in rebate.' },
      { title: 'Calculating the best deal', text: 'Calculate the net cost of each offer to determine the lowest total expenditure.', example: 'Buy 2 get 1 free on $30 shirts = $60 total. 30% off 3 shirts = $63. Buy 2 get 1 free is cheaper.' },
    ],
  },
];
