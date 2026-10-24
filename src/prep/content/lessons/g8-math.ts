// Walkthroughs for Grade 8 Math: one lesson per standard in G8_MATH.
// Pure data: no React or browser APIs.

import type { Lesson } from '../types.ts';

export const G8_MATH_LESSONS: Lesson[] = [
  // Strand 1: Numerical Representations and Relationships
  {
    code: '8.2A',
    goal: "You'll learn to classify real numbers into sets and subsets such as rational numbers, integers, whole numbers, and irrational numbers.",
    words: [
      { term: 'Rational Number', meaning: 'Any number that can be expressed as a fraction a/b where a and b are integers and b ≠ 0.' },
      { term: 'Irrational Number', meaning: 'A real number that cannot be written as a simple fraction; non-terminating and non-repeating decimal.' },
    ],
    ideas: [
      { title: 'The Real Number Hierarchy', text: 'Real numbers split into rational and irrational numbers. Rational numbers contain integers, which contain whole numbers, which contain natural numbers.' },
      { title: 'Spotting Irrationals', text: 'Non-perfect square roots like √2 or √7 and π are irrational. Repeating or terminating decimals like 0.333... or 0.75 are rational.' },
    ],
  },
  {
    code: '8.2B',
    goal: "You'll learn to approximate the value of irrational numbers and locate them on a number line.",
    words: [
      { term: 'Approximation', meaning: 'An estimate close to the actual value of a number.' },
      { term: 'Square Root', meaning: 'A value that, when multiplied by itself, gives the original number.' },
    ],
    ideas: [
      { title: 'Use Perfect Square Benchmarks', text: 'To estimate √18, notice 4² = 16 and 5² = 25. Since 18 is between 16 and 25, √18 is between 4 and 5 (around 4.2).' },
      { title: 'Placing on a Number Line', text: 'Locate the two consecutive whole numbers first, then place the point closer to the nearer square.' },
    ],
  },
  {
    code: '8.2C',
    goal: "You'll learn to convert numbers between standard decimal form and scientific notation.",
    words: [
      { term: 'Scientific Notation', meaning: 'A way of writing numbers as a × 10ⁿ, where 1 ≤ a < 10 and n is an integer.' },
      { term: 'Exponent', meaning: 'The power showing how many times 10 is multiplied or divided.' },
    ],
    ideas: [
      { title: 'Large Numbers (Positive Exponent)', text: 'Move the decimal point left until one non-zero digit remains on the left. 45,000 becomes 4.5 × 10⁴.' },
      { title: 'Small Numbers (Negative Exponent)', text: 'Move the decimal point right past the first non-zero digit. 0.0032 becomes 3.2 × 10⁻³.' },
    ],
  },
  {
    code: '8.2D',
    goal: "You'll learn to compare and order sets of real numbers from least to greatest or greatest to least.",
    words: [
      { term: 'Real Numbers', meaning: 'The set of all rational and irrational numbers.' },
      { term: 'Order', meaning: 'Arranging values from least to greatest or greatest to least.' },
    ],
    ideas: [
      { title: 'Convert Everything to Decimals', text: 'The easiest way to compare square roots, fractions, percents, and π is to convert every number into decimal form to two decimal places.' },
      { title: 'Watch Negative Numbers', text: 'For negative numbers, the value with the larger absolute value is further to the left on the number line and is smaller: −4.5 < −3.2.' },
    ],
  },

  // Strand 2: Computations and Algebraic Relationships
  {
    code: '8.4A',
    goal: "You'll learn to use similar right triangles along a line to understand that slope is constant.",
    words: [
      { term: 'Slope (m)', meaning: 'The rate comparing vertical change (rise) to horizontal change (run): (y₂ − y₁)/(x₂ − x₁).' },
      { term: 'Similar Triangles', meaning: 'Triangles with equal angles and proportional corresponding sides.' },
    ],
    ideas: [
      { title: 'Rise Over Run', text: 'Any two points on a line can form a right triangle. The ratio of the vertical leg to the horizontal leg is always the slope m.' },
      { title: 'Same Ratio Everywhere', text: 'Because right triangles along a straight line are similar, the ratio rise/run never changes regardless of the triangle size.' },
    ],
  },
  {
    code: '8.4B',
    goal: "You'll learn to graph proportional relationships and interpret the unit rate as the slope of the line.",
    words: [
      { term: 'Unit Rate', meaning: 'A rate with a denominator of 1 unit, representing slope in proportional graphs.' },
      { term: 'Proportional Graph', meaning: 'A linear graph that passes through the origin (0, 0).' },
    ],
    ideas: [
      { title: 'Unit Rate Equals Slope', text: 'In y = kx, the constant of proportionality k is both the unit rate and the slope of the line.' },
      { title: 'Steeper Slope Means Faster Rate', text: 'A line with a steeper slope has a greater unit rate than a flatter line.' },
    ],
  },
  {
    code: '8.4C',
    goal: "You'll learn to determine the slope and y-intercept from tables and graphs to solve problems.",
    words: [
      { term: 'Rate of Change', meaning: 'How much y changes for each unit change in x.' },
      { term: 'Y-Intercept (b)', meaning: 'The value of y where the line crosses the y-axis (when x = 0).' },
    ],
    ideas: [
      { title: 'Finding Slope from a Table', text: 'Pick two rows and compute (y₂ − y₁) / (x₂ − x₁). If the table is linear, this ratio is constant.' },
      { title: 'Finding the Y-Intercept', text: 'Look for x = 0 in the table, or use the equation y = mx + b by plugging in any point (x, y) along with the slope m.' },
    ],
  },
  {
    code: '8.5A',
    goal: "You'll learn to represent linear proportional situations with tables, graphs, and equations in the form y = kx.",
    words: [
      { term: 'Direct Proportionality', meaning: 'A relationship where the ratio y/x is constant: y = kx.' },
      { term: 'Origin', meaning: 'The point (0, 0) where x and y axes meet.' },
    ],
    ideas: [
      { title: 'The Equation y = kx', text: 'There is no addition or subtraction in a proportional equation. When x = 0, y must be 0.' },
      { title: 'Constant Ratio', text: 'Divide every y-value by its matching x-value. If every pair gives the same value k, the relationship is proportional.' },
    ],
  },
  {
    code: '8.5B',
    goal: "You'll learn to represent linear non-proportional situations with tables, graphs, and equations in the form y = mx + b (where b ≠ 0).",
    words: [
      { term: 'Non-Proportional', meaning: 'A linear relationship that does not pass through (0, 0) because b ≠ 0.' },
      { term: 'Initial Value', meaning: 'The starting amount (y-intercept b) before rate changes begin.' },
    ],
    ideas: [
      { title: 'Rate plus Initial Fee', text: 'Situations like $20 flat fee plus $5 per hour follow y = 5x + 20, where 5 is slope m and 20 is y-intercept b.' },
      { title: 'Recognizing from a Table', text: 'In a non-proportional table, the ratio y/x changes from row to row, but the rate of change Δy/Δx is constant.' },
    ],
  },
  {
    code: '8.5E',
    goal: "You'll learn to solve real-world problems involving direct variation.",
    words: [
      { term: 'Direct Variation', meaning: 'A relationship where y = kx; y varies directly with x.' },
      { term: 'Constant of Variation', meaning: 'The value k = y / x in direct variation.' },
    ],
    ideas: [
      { title: 'Find k First', text: 'Divide the given y by x to find constant k. Then multiply k by the new x to find the unknown y.' },
      { title: 'Set Up a Proportion', text: 'Alternatively, write y₁ / x₁ = y₂ / x₂ and cross-multiply to solve for the missing quantity.' },
    ],
  },
  {
    code: '8.5F',
    goal: "You'll learn to distinguish between proportional and non-proportional situations using tables, graphs, and equations.",
    words: [
      { term: 'Proportional', meaning: 'Has the form y = kx; line goes through (0, 0).' },
      { term: 'Non-Proportional', meaning: 'Has the form y = mx + b where b ≠ 0; line misses (0, 0).' },
    ],
    ideas: [
      { title: 'The (0, 0) Check', text: 'If (0, 0) is part of the relationship, it is proportional. If when x = 0, y ≠ 0, it is non-proportional.' },
      { title: 'Look at the Equation', text: 'y = 4x is proportional. y = 4x + 3 is non-proportional because 3 is added.' },
    ],
  },
  {
    code: '8.5G',
    goal: "You'll learn to identify functions using sets of ordered pairs, tables, mappings, and graphs.",
    words: [
      { term: 'Function', meaning: 'A relation where each input x has exactly one output y.' },
      { term: 'Vertical Line Test', meaning: 'A visual check: if any vertical line touches a graph more than once, it is not a function.' },
    ],
    ideas: [
      { title: 'No Repeating Inputs', text: 'Check the x-values. If any x-value appears more than once with different y-values, the relation is NOT a function.' },
      { title: 'Outputs Can Repeat', text: 'Two different inputs can share the same output (like (2, 5) and (3, 5)), and it is still a function.' },
    ],
  },
  {
    code: '8.5H',
    goal: "You'll learn to identify examples of proportional and non-proportional functions arising from real-world contexts.",
    words: [
      { term: 'Linear Function', meaning: 'A function with a constant rate of change that forms a straight line.' },
      { term: 'Non-Linear Function', meaning: 'A function whose rate of change is not constant (such as quadratic A = s²).' },
    ],
    ideas: [
      { title: 'Proportional Real-World Examples', text: 'Buying items by the pound with no flat fee, or traveling at constant speed with 0 starting distance.' },
      { title: 'Non-Proportional Real-World Examples', text: 'Taxi rides with a dispatch fee, gym memberships with signup fees, or area formulas involving exponents.' },
    ],
  },
  {
    code: '8.5I',
    goal: "You'll learn to write linear equations in slope-intercept form (y = mx + b) from words, tables, or graphs.",
    words: [
      { term: 'Slope-Intercept Form', meaning: 'The equation y = mx + b, where m is slope and b is y-intercept.' },
      { term: 'Constant Rate', meaning: 'A steady change per unit that determines the slope m.' },
    ],
    ideas: [
      { title: 'Identify m and b', text: 'Read the problem to identify what repeats per unit (m) and what happens once at the start (b).' },
      { title: 'Writing from a Table', text: 'Calculate m = Δy / Δx. Then find y when x = 0 to get b. Combine them as y = mx + b.' },
    ],
  },
  {
    code: '8.8A',
    goal: "You'll learn to write one-variable equations and inequalities with variables on both sides.",
    words: [
      { term: 'Variable on Both Sides', meaning: 'An equation where the unknown x appears on the left and right sides.' },
      { term: 'Coefficient', meaning: 'The number multiplied by a variable, such as 5 in 5x.' },
    ],
    ideas: [
      { title: 'Compare Two Situations', text: 'When two plans or companies are compared (like Plan A charges 5x + 20 and Plan B charges 8x), set their expressions equal: 5x + 20 = 8x.' },
      { title: 'Inequalities for Comparisons', text: 'Use < or > when asking which plan is cheaper, faster, or greater.' },
    ],
  },
  {
    code: '8.8B',
    goal: "You'll learn to match real-world problem situations to equations with variables on both sides.",
    words: [
      { term: 'Modeling', meaning: 'Using mathematical symbols to represent real situations.' },
      { term: 'Equation', meaning: 'A statement that two expressions are equal.' },
    ],
    ideas: [
      { title: 'Identify Fixed vs Variable Costs', text: 'In 4x + 15 = 6x, the 15 is a one-time fee on the left side, 4 is the per-item cost on the left, and 6 is the per-item cost on the right.' },
      { title: 'Check Increasing vs Decreasing', text: 'If a tank empties, look for subtraction: 100 − 5x. If a tank fills, look for addition: 20 + 3x.' },
    ],
  },
  {
    code: '8.8C',
    goal: "You'll learn to model and solve one-variable equations with variables on both sides.",
    words: [
      { term: 'Inverse Operations', meaning: 'Opposite operations that undo each other, like addition and subtraction.' },
      { term: 'Solution', meaning: 'The value of the variable that makes the equation true.' },
    ],
    ideas: [
      { title: 'Step 1: Simplify Both Sides', text: 'Use the distributive property and combine like terms on each side of the equal sign first.' },
      { title: 'Step 2: Move Variables to One Side', text: 'Subtract or add variable terms so all x terms are on one side, then isolate the variable.' },
    ],
  },
  {
    code: '8.9A',
    goal: "You'll learn to identify and verify the intersection of two linear equations as their simultaneous solution.",
    words: [
      { term: 'System of Linear Equations', meaning: 'Two or more linear equations sharing the same variables.' },
      { term: 'Intersection Point', meaning: 'The coordinate (x, y) where two graphed lines cross, solving both equations.' },
    ],
    ideas: [
      { title: 'One Point Solves Both', text: 'The coordinates of the intersection point (x, y) satisfy both equations at the same time.' },
      { title: 'Check by Substitution', text: 'Substitute the (x, y) values into both equations. If both equations yield true statements, the point is correct.' },
    ],
  },

  // Strand 3: Geometry and Measurement
  {
    code: '8.3A',
    goal: "You'll learn that ratios of corresponding sides of similar shapes are proportional.",
    words: [
      { term: 'Scale Factor (k)', meaning: 'The number you multiply original lengths by to get image lengths.' },
      { term: 'Corresponding Sides', meaning: 'Sides in the same relative position in similar figures.' },
    ],
    ideas: [
      { title: 'Proportional Side Lengths', text: 'In similar figures, dividing corresponding side lengths always yields the same scale factor k.' },
      { title: 'Angles Stay the Same', text: 'Even when shapes scale up or down, all corresponding interior angles remain exactly congruent.' },
    ],
  },
  {
    code: '8.3B',
    goal: "You'll learn to compare the attributes of a shape and its dilation on a coordinate plane.",
    words: [
      { term: 'Dilation', meaning: 'A transformation that enlarges or reduces a figure by a scale factor.' },
      { term: 'Center of Dilation', meaning: 'The fixed point about which a figure is enlarged or reduced (often the origin).' },
    ],
    ideas: [
      { title: 'Enlargement vs Reduction', text: 'If scale factor k > 1, the dilation is an enlargement. If 0 < k < 1, it is a reduction.' },
      { title: 'Similar, Not Congruent', text: 'Dilations preserve shape and angles, but change size. Thus, dilated figures are similar, not congruent.' },
    ],
  },
  {
    code: '8.3C',
    goal: "You'll learn to use algebraic representations to explain dilations on a coordinate plane with the origin as center.",
    words: [
      { term: 'Algebraic Representation', meaning: 'A rule like (x, y) → (kx, ky) describing a transformation.' },
      { term: 'Origin Center', meaning: 'Dilation rays radiate from (0, 0).' },
    ],
    ideas: [
      { title: 'Multiply Both Coordinates by k', text: 'Under a dilation centered at the origin, every point (x, y) becomes (kx, ky).' },
      { title: 'Recognizing Scale Factor from Rule', text: 'In (x, y) → (3x, 3y), the scale factor is 3. In (x, y) → (0.5x, 0.5y), the scale factor is 1/2.' },
    ],
  },
  {
    code: '8.6A',
    goal: "You'll learn to describe the cylinder volume formula V = Bh in terms of its base area and height.",
    words: [
      { term: 'Base Area (B)', meaning: 'The area of the circular base, B = πr².' },
      { term: 'Height (h)', meaning: 'The perpendicular distance between the two circular bases.' },
    ],
    ideas: [
      { title: 'V = Bh Connection', text: 'Like prisms, cylinder volume is the area of the base times the height: V = Bh.' },
      { title: 'Substitute B = πr²', text: 'Because the base of a cylinder is a circle, replacing B with πr² gives V = πr²h.' },
    ],
  },
  {
    code: '8.6C',
    goal: "You'll learn to use models and diagrams of squares on right triangles to explain the Pythagorean theorem.",
    words: [
      { term: 'Pythagorean Theorem', meaning: 'In any right triangle, a² + b² = c².' },
      { term: 'Hypotenuse', meaning: 'The longest side of a right triangle, opposite the right angle.' },
    ],
    ideas: [
      { title: 'Areas of Three Squares', text: 'If you draw a square on each side of a right triangle, Area(A) + Area(B) = Area(C).' },
      { title: 'a² + b² = c²', text: 'The sum of the squares of the legs equals the square of the hypotenuse.' },
    ],
  },
  {
    code: '8.7A',
    goal: "You'll learn to solve problems involving the volume of cylinders, cones, and spheres.",
    words: [
      { term: 'Cone Volume', meaning: 'V = (1/3)πr²h (one-third the volume of a cylinder with the same base and height).' },
      { term: 'Sphere Volume', meaning: 'V = (4/3)πr³.' },
    ],
    ideas: [
      { title: 'Cone is 1/3 of a Cylinder', text: 'A cone holds exactly one-third the volume of a cylinder with identical radius and height.' },
      { title: 'Sphere Uses r³', text: 'Spheres have no height variable; their volume depends entirely on radius cubed: V = (4/3)πr³.' },
    ],
  },
  {
    code: '8.7B',
    goal: "You'll learn to calculate lateral and total surface area for prisms and cylinders.",
    words: [
      { term: 'Lateral Surface Area', meaning: 'The surface area of the sides only, excluding the bases: S = Ph (or 2πrh).' },
      { term: 'Total Surface Area', meaning: 'The area of all faces including bases: S = Ph + 2B (or 2πrh + 2πr²).' },
    ],
    ideas: [
      { title: 'Lateral vs Total', text: 'Lateral is just the perimeter wrapped around the height (Ph). Total adds the two end bases (+ 2B).' },
      { title: 'Cylinder Surface Area', text: 'Lateral = 2πrh (a rolled-out rectangle). Total = 2πrh + 2πr² (adding top and bottom circular lids).' },
    ],
  },
  {
    code: '8.7C',
    goal: "You'll learn to use the Pythagorean theorem and its converse to solve real-world problems.",
    words: [
      { term: 'Legs (a and b)', meaning: 'The two shorter sides meeting at the 90° angle.' },
      { term: 'Converse', meaning: 'If a² + b² = c² is true for three lengths, then the triangle MUST be a right triangle.' },
    ],
    ideas: [
      { title: 'Finding Hypotenuse c', text: 'c = √(a² + b²). Square both legs, add them, then take the square root.' },
      { title: 'Finding a Missing Leg', text: 'a = √(c² − b²). Square the hypotenuse, subtract the other leg squared, then take square root.' },
    ],
  },
  {
    code: '8.7D',
    goal: "You'll learn to determine the distance between two points on a coordinate plane using the Pythagorean theorem.",
    words: [
      { term: 'Distance Formula', meaning: 'd = √((x₂ − x₁)² + (y₂ − y₁)²), derived from the Pythagorean theorem.' },
      { term: 'Coordinate Distance', meaning: 'Horizontal change dx and vertical change dy form the legs of a right triangle.' },
    ],
    ideas: [
      { title: 'Count the Grid Steps', text: 'Find horizontal change Δx and vertical change Δy between the two points.' },
      { title: 'Apply Pythagorean Theorem', text: 'The straight-line distance is the hypotenuse: d = √(Δx² + Δy²).' },
    ],
  },
  {
    code: '8.8D',
    goal: "You'll learn facts about triangle angles, exterior angles, parallel lines cut by a transversal, and AA similarity.",
    words: [
      { term: 'Exterior Angle Theorem', meaning: 'An exterior angle of a triangle equals the sum of the two remote interior angles.' },
      { term: 'Transversal', meaning: 'A line that intersects two or more lines.' },
    ],
    ideas: [
      { title: 'Angles in a Triangle', text: 'All three interior angles in any triangle always add up to 180°.' },
      { title: 'Parallel Lines and Transversals', text: 'Corresponding and alternate interior angles are equal; consecutive interior angles are supplementary (sum to 180°).' },
    ],
  },
  {
    code: '8.10A',
    goal: "You'll learn to generalize properties of orientation and congruence for rotations, reflections, translations, and dilations.",
    words: [
      { term: 'Orientation', meaning: 'The arrangement or order of vertices (clockwise vs counterclockwise).' },
      { term: 'Congruence', meaning: 'Having the exact same shape and size.' },
    ],
    ideas: [
      { title: 'Rigid Motions Preserve Congruence', text: 'Translations, reflections, and rotations preserve size and shape; the image is congruent.' },
      { title: 'Reflection Reverses Vertex Order', text: 'Reflections change vertex orientation from clockwise to counterclockwise.' },
    ],
  },
  {
    code: '8.10B',
    goal: "You'll learn to differentiate between transformations that preserve congruence and those that do not.",
    words: [
      { term: 'Congruence-Preserving', meaning: 'Transformations where lengths and angles stay identical.' },
      { term: 'Dilation Difference', meaning: 'Dilations change size, preserving similarity but NOT congruence.' },
    ],
    ideas: [
      { title: 'The Big Three Isometries', text: 'Translating (sliding), reflecting (flipping), and rotating (turning) always keep figures congruent.' },
      { title: 'Dilations Change Side Lengths', text: 'Multiplying coordinates by a factor other than 1 changes perimeter and area, so congruence is lost.' },
    ],
  },
  {
    code: '8.10C',
    goal: "You'll learn algebraic representations for translations, reflections, and 90°, 180°, and 270° rotations.",
    words: [
      { term: 'Translation Rule', meaning: '(x, y) → (x + a, y + b).' },
      { term: 'Reflection Rules', meaning: 'Over x-axis: (x, −y). Over y-axis: (−x, y).' },
    ],
    ideas: [
      { title: 'Rotation Rules Around Origin', text: '180° rotation: (x, y) → (−x, −y). 90° clockwise: (x, y) → (y, −x). 90° counterclockwise: (x, y) → (−y, x).' },
      { title: 'Translating Coordinates', text: 'Right adds to x, left subtracts from x. Up adds to y, down subtracts from y.' },
    ],
  },
  {
    code: '8.10D',
    goal: "You'll learn how dilations affect the linear and area measurements of two-dimensional shapes.",
    words: [
      { term: 'Linear Measurement', meaning: '1D measures like side length, perimeter, and radius; scales by k.' },
      { term: 'Area Measurement', meaning: '2D measures like surface area and base area; scales by k².' },
    ],
    ideas: [
      { title: 'Perimeter Scales by k', text: 'If a shape is dilated by scale factor 3, its new perimeter is 3 times the original perimeter.' },
      { title: 'Area Scales by k²', text: 'If a shape is dilated by scale factor 3, its new area is 3² = 9 times the original area.' },
    ],
  },

  // Strand 4: Data Analysis and Personal Financial Literacy
  {
    code: '8.5C',
    goal: "You'll learn to contrast bivariate data sets that suggest linear relationships from those that do not.",
    words: [
      { term: 'Bivariate Data', meaning: 'Data involving two paired variables, like height and weight.' },
      { term: 'Linear Relationship', meaning: 'A relationship that follows a straight-line trend.' },
    ],
    ideas: [
      { title: 'Constant Rate of Change', text: 'Linear scatterplots show points clustered along a straight path. Non-linear plots show curved or clustered trends.' },
      { title: 'Rate of Change Check', text: 'If equal steps in x produce approximately equal steps in y, the data is linear.' },
    ],
  },
  {
    code: '8.5D',
    goal: "You'll learn to use a trend line (line of best fit) to make predictions from bivariate data.",
    words: [
      { term: 'Trend Line', meaning: 'A line on a scatterplot showing the general direction that a group of points seems to be heading.' },
      { term: 'Prediction', meaning: 'Using the trend line equation y = mx + b to estimate values.' },
    ],
    ideas: [
      { title: 'Best Fit Placement', text: 'A good trend line passes through the middle of the points with roughly equal points above and below.' },
      { title: 'Substitute into Equation', text: 'Plug the target value into the trend line equation y = mx + b to predict the corresponding value.' },
    ],
  },
  {
    code: '8.11A',
    goal: "You'll learn to construct scatterplots and describe observed data in terms of positive, negative, or no association.",
    words: [
      { term: 'Positive Association', meaning: 'As x increases, y tends to increase.' },
      { term: 'Negative Association', meaning: 'As x increases, y tends to decrease.' },
    ],
    ideas: [
      { title: 'Classifying Associations', text: 'Positive slants upward, negative slants downward, and no association looks like a cloud of random dots.' },
      { title: 'Linear vs Non-Linear', text: 'Linear associations follow a straight path; non-linear associations follow a curve like a parabola.' },
    ],
  },
  {
    code: '8.11B',
    goal: "You'll learn to calculate the mean absolute deviation (MAD) to describe data variability.",
    words: [
      { term: 'Mean Absolute Deviation (MAD)', meaning: 'The average distance between each data value and the mean of the data set.' },
      { term: 'Variability', meaning: 'How spread out or clustered numbers are in a data set.' },
    ],
    ideas: [
      { title: 'Three Steps to Find MAD', text: '1. Calculate the mean. 2. Find the positive distance from each point to the mean. 3. Average those distances.' },
      { title: 'Interpreting MAD', text: 'A smaller MAD means values are clustered close to the mean (more consistent). A larger MAD means more spread out.' },
    ],
  },
  {
    code: '8.12A',
    goal: "You'll learn how interest rate and loan length affect the total cost of credit.",
    words: [
      { term: 'Cost of Credit', meaning: 'The total interest and fees paid above the original borrowed amount.' },
      { term: 'Loan Term', meaning: 'The length of time to repay a loan (such as 36 or 60 months).' },
    ],
    ideas: [
      { title: 'Longer Terms Cost More', text: 'A 5-year loan has lower monthly payments than a 3-year loan, but costs much more total money in interest.' },
      { title: 'Lower APR Saves Money', text: 'Even a 1% reduction in interest rate saves hundreds or thousands of dollars over the life of a loan.' },
    ],
  },
  {
    code: '8.12C',
    goal: "You'll learn how investing small amounts of money regularly produces exponential growth over time through compound interest.",
    words: [
      { term: 'Compound Interest', meaning: 'Interest earned on both the original principal and accumulated interest.' },
      { term: 'Time Horizon', meaning: 'The number of years an investment has to grow.' },
    ],
    ideas: [
      { title: 'Exponential Growth', text: 'Compound growth builds slowly at first, then accelerates rapidly because interest earns its own interest.' },
      { title: 'Start Early', text: 'Investing $100 a month starting at age 20 yields vastly more retirement wealth than starting at age 35.' },
    ],
  },
  {
    code: '8.12D',
    goal: "You'll learn to calculate and compare simple interest and compound interest earnings.",
    words: [
      { term: 'Simple Interest Formula', meaning: 'I = Prt, where P is principal, r is annual rate as decimal, and t is time in years.' },
      { term: 'Compound Interest Formula', meaning: 'A = P(1 + r)ᵗ, where A is the total ending balance.' },
    ],
    ideas: [
      { title: 'Simple Interest is Flat', text: 'Simple interest only pays on the original principal every year: I = Prt.' },
      { title: 'Compound Interest Surpasses Simple', text: 'Compound interest adds earned interest back into the principal, so the balance grows faster each year.' },
    ],
  },
  {
    code: '8.12G',
    goal: "You'll learn to estimate college costs and create a periodic savings plan.",
    words: [
      { term: 'Cost of Attendance', meaning: 'Total estimated expenses including tuition, fees, room and board, books, and supplies.' },
      { term: 'Periodic Savings Plan', meaning: 'Saving a fixed amount each month or year to reach an education funding goal.' },
    ],
    ideas: [
      { title: 'Total Attendance Cost', text: 'Add tuition, housing, meal plans, books, and transportation to find the full cost for one year.' },
      { title: 'Monthly Savings Calculation', text: 'Subtract grants and scholarships from the total cost, then divide the remainder by the number of months until college.' },
    ],
  },
];
