// Walkthrough lessons for Grade 2 math (43 standards).
// Each lesson has a goal, key words, and at least two big ideas.

import type { Lesson } from '../types.ts';

export const G2_MATH_LESSONS: Lesson[] = [
  // ----- Strand 1: Numerical Representations and Relationships (10 standards) -----
  {
    code: '2.2A',
    goal: 'Learn to compose and decompose numbers up to 1,200 into thousands, hundreds, tens, and ones.',
    words: [
      { term: 'compose', meaning: 'put smaller parts together to make a larger number' },
      { term: 'decompose', meaning: 'break a number apart into places like hundreds, tens, and ones' },
    ],
    ideas: [
      { title: 'Count each base-ten unit', text: '1 thousand cube is 1,000, 1 hundred flat is 100, 1 ten rod is 10, and 1 unit cube is 1.' },
      { title: 'More than one way to make a number', text: 'You can show 340 as 3 hundreds and 4 tens, or trade 1 hundred for 10 tens to get 2 hundreds and 14 tens.' },
    ],
  },
  {
    code: '2.2B',
    goal: 'Learn to write numbers up to 1,200 in standard, word, and expanded forms.',
    words: [
      { term: 'standard form', meaning: 'writing a number using digits, like 582' },
      { term: 'expanded form', meaning: 'showing the sum of the value of each digit, like 500 + 80 + 2' },
    ],
    ideas: [
      { title: 'Each place has a value', text: 'In 734, the digit 7 is worth 700, the digit 3 is worth 30, and the digit 4 is worth 4.' },
      { title: 'Watch for zero in a place', text: 'In 608, there are 0 tens, so the expanded form is 600 + 8.' },
    ],
  },
  {
    code: '2.2C',
    goal: 'Learn to find numbers that are greater than or less than a given number up to 1,200.',
    words: [
      { term: 'greater than', meaning: 'a number that has a larger value' },
      { term: 'less than', meaning: 'a number that has a smaller value' },
    ],
    ideas: [
      { title: 'Compare from left to right', text: 'Look at the hundreds digit first. If hundreds are equal, compare the tens, and then the ones.' },
      { title: 'Check place values carefully', text: 'A number with 5 hundreds (512) is always greater than any number with only 4 hundreds (498).' },
    ],
  },
  {
    code: '2.2D',
    goal: 'Learn to compare and order whole numbers up to 1,200 using >, <, or =.',
    words: [
      { term: 'greater than symbol (>)', meaning: 'the open side points to the bigger number: 650 > 620' },
      { term: 'less than symbol (<)', meaning: 'the small pointed end points to the smaller number: 410 < 430' },
    ],
    ideas: [
      { title: 'Start with the biggest place', text: 'Compare thousands first, then hundreds, then tens, then ones until digits are different.' },
      { title: 'Ordering lists of numbers', text: 'To order from least to greatest, find the smallest number first and write it down.' },
    ],
  },
  {
    code: '2.2E',
    goal: 'Learn to find where a whole number belongs on an open number line.',
    words: [
      { term: 'open number line', meaning: 'a line with no fixed tick marks used to show relative positions of numbers' },
      { term: 'benchmark', meaning: 'a friendly number like 50 or 100 that helps place other numbers' },
    ],
    ideas: [
      { title: 'Use the halfway point', text: 'Halfway between 200 and 300 is 250. A number like 280 will be to the right of 250.' },
      { title: 'Numbers increase to the right', text: 'As you move right on a number line, numbers get larger; moving left, they get smaller.' },
    ],
  },
  {
    code: '2.2F',
    goal: 'Learn to name the number that matches a point on a number line.',
    words: [
      { term: 'interval', meaning: 'the distance and value between each tick mark on a number line' },
      { term: 'point', meaning: 'a dot on a number line showing an exact value' },
    ],
    ideas: [
      { title: 'Find the step size', text: 'Check the difference between labeled marks and count how many equal jumps are in between.' },
      { title: 'Count on by the interval', text: 'If tick marks count by 10s, count on: 400, 410, 420, 430 to name the marked point.' },
    ],
  },
  {
    code: '2.3A',
    goal: 'Learn to divide shapes into equal parts and name them halves, fourths, or eighths.',
    words: [
      { term: 'equal parts', meaning: 'pieces that are the exact same size' },
      { term: 'fourth / quarter', meaning: 'one of four equal parts of a whole' },
    ],
    ideas: [
      { title: 'Parts must be fair shares', text: 'If two parts are different sizes, they are not halves. Halves must be identical in size.' },
      { title: 'Naming the parts', text: '2 equal parts are halves, 4 equal parts are fourths, and 8 equal parts are eighths.' },
    ],
  },
  {
    code: '2.3B',
    goal: 'Understand that more fractional parts mean smaller parts, and fewer parts mean larger parts.',
    words: [
      { term: 'part size', meaning: 'how big one fractional piece is compared to the whole' },
      { term: 'whole', meaning: 'the complete shape before it is cut into parts' },
    ],
    ideas: [
      { title: 'Sharing among more friends', text: 'If you share a pizza with 8 people, each slice is smaller than if you share it with only 2 people.' },
      { title: 'Compare unit fractions', text: 'One half is larger than one fourth, and one fourth is larger than one eighth.' },
    ],
  },
  {
    code: '2.3C',
    goal: 'Learn to count fractional parts beyond one whole using words.',
    words: [
      { term: 'beyond one whole', meaning: 'having more parts than make up one complete object' },
      { term: 'fourths', meaning: 'parts where 4 make up one whole' },
    ],
    ideas: [
      { title: 'Count parts continuously', text: 'Count: 1 fourth, 2 fourths, 3 fourths, 4 fourths (1 whole), 5 fourths, 6 fourths.' },
      { title: 'Recognize the whole', text: 'When the number of parts equals the number needed for one whole, you have completed 1 whole.' },
    ],
  },
  {
    code: '2.3D',
    goal: 'Learn to tell examples and non-examples of halves, fourths, and eighths.',
    words: [
      { term: 'example', meaning: 'a shape divided into equal-sized parts' },
      { term: 'non-example', meaning: 'a shape divided into unequal parts' },
    ],
    ideas: [
      { title: 'Check for equal size', text: 'Count the parts, but also look closely to be sure every part has the same area.' },
      { title: 'Unequal parts do not count', text: 'A rectangle cut into 4 pieces where some are big and some are small is NOT fourths.' },
    ],
  },

  // ----- Strand 2: Computations and Algebraic Relationships (9 standards) -----
  {
    code: '2.4A',
    goal: 'Learn basic addition and subtraction facts within 20 with quick recall.',
    words: [
      { term: 'fact family', meaning: 'a group of related addition and subtraction facts using the same three numbers' },
      { term: 'doubles fact', meaning: 'adding a number to itself, like 8 + 8 = 16' },
    ],
    ideas: [
      { title: 'Make a ten', text: 'To add 8 + 6, take 2 from 6 to make 10 with 8, then add the 4 left over: 10 + 4 = 14.' },
      { title: 'Think addition to subtract', text: 'For 15 - 7, ask yourself: what number plus 7 equals 15? 7 + 8 = 15, so 15 - 7 = 8.' },
    ],
  },
  {
    code: '2.4B',
    goal: 'Learn to add up to four 2-digit numbers and subtract 2-digit numbers.',
    words: [
      { term: 'regroup', meaning: 'trade 10 ones for 1 ten, or 1 ten for 10 ones' },
      { term: 'sum', meaning: 'the result when numbers are added together' },
    ],
    ideas: [
      { title: 'Add ones first', text: 'Line numbers up by place value. Add the ones column first. If you get 10 or more, regroup 1 ten.' },
      { title: 'Combine friendly pairs', text: 'When adding 4 numbers, look for pairs that make 10 or 20 to add faster in your head.' },
    ],
  },
  {
    code: '2.4C',
    goal: 'Learn to solve one-step and multi-step word problems within 1,000.',
    words: [
      { term: 'multi-step', meaning: 'a problem that needs two or more math operations to solve' },
      { term: 'difference', meaning: 'the answer to a subtraction problem' },
    ],
    ideas: [
      { title: 'Break the story into steps', text: 'Figure out what happens first. If more items are bought, add. If items are given away, subtract.' },
      { title: 'Check if the answer makes sense', text: 'Use estimation: round to the nearest ten or hundred to see if your answer is reasonable.' },
    ],
  },
  {
    code: '2.4D',
    goal: 'Learn to create and solve problem stories for addition and subtraction sentences.',
    words: [
      { term: 'number sentence', meaning: 'an equation with numbers and math signs, like 145 + 32 = 177' },
      { term: 'story problem', meaning: 'a real-life situation that matches a math equation' },
    ],
    ideas: [
      { title: 'Match the operation to the action', text: 'Addition matches joining groups or finding a total. Subtraction matches taking away or comparing.' },
      { title: 'Check the numbers in the story', text: 'Make sure the starting amount, the change, and the question match the numbers in the equation.' },
    ],
  },
  {
    code: '2.6A',
    goal: 'Learn to model multiplication situations by joining equal sets of objects.',
    words: [
      { term: 'equal sets', meaning: 'groups that each have the exact same number of items' },
      { term: 'repeated addition', meaning: 'adding the same number multiple times, like 4 + 4 + 4' },
    ],
    ideas: [
      { title: 'Number of groups times group size', text: '3 bags with 5 apples each means 3 groups of 5, which is 5 + 5 + 5 = 15 apples.' },
      { title: 'Skip counting sets', text: 'You can count equal groups by skip counting: 5, 10, 15 to find the total.' },
    ],
  },
  {
    code: '2.6B',
    goal: 'Learn to model division situations by sharing objects into equal groups.',
    words: [
      { term: 'equal shares', meaning: 'dividing a total so each person gets the exact same amount' },
      { term: 'fair share', meaning: 'sharing items one by one until all items are distributed evenly' },
    ],
    ideas: [
      { title: 'Sharing equally', text: 'If 12 cookies are shared equally among 3 children, give one to each until all 12 are shared: each gets 4.' },
      { title: 'Making equal groups', text: 'If you have 15 crayons and put 5 in each box, count how many groups of 5 fit into 15: 3 boxes.' },
    ],
  },
  {
    code: '2.7A',
    goal: 'Learn to determine whether a whole number up to 40 is even or odd.',
    words: [
      { term: 'even number', meaning: 'a number that can be split into pairs with zero left over' },
      { term: 'odd number', meaning: 'a number that has one left over when grouped in pairs' },
    ],
    ideas: [
      { title: 'Look at the ones digit', text: 'Numbers ending in 0, 2, 4, 6, or 8 are even. Numbers ending in 1, 3, 5, 7, or 9 are odd.' },
      { title: 'Pairing up objects', text: 'Draw dots in pairs of two. If every dot has a partner, the number is even; if one dot is alone, it is odd.' },
    ],
  },
  {
    code: '2.7B',
    goal: 'Learn to find 10 or 100 more or less than any number up to 1,200.',
    words: [
      { term: '10 more / 10 less', meaning: 'adding or subtracting 1 in the tens place' },
      { term: '100 more / 100 less', meaning: 'adding or subtracting 1 in the hundreds place' },
    ],
    ideas: [
      { title: 'Only one place value changes', text: 'For 10 more than 435, increase the tens digit 3 to 4: 445. The hundreds and ones do not change.' },
      { title: 'Watch when crossing a hundred', text: '10 more than 295 changes the tens from 9 to 0 and increases the hundreds by 1: 305.' },
    ],
  },
  {
    code: '2.7C',
    goal: 'Learn to solve word problems where the missing number is in any position.',
    words: [
      { term: 'unknown', meaning: 'the missing number in an equation or word problem' },
      { term: 'inverse operation', meaning: 'the opposite operation, like addition undoing subtraction' },
    ],
    ideas: [
      { title: 'Find the start, change, and result', text: 'Write the story as a sentence: Start + Change = Result, and put a blank or box for the unknown.' },
      { title: 'Use inverse operations', text: 'If Start + 15 = 40, subtract to find the missing start: 40 - 15 = 25.' },
    ],
  },

  // ----- Strand 3: Geometry and Measurement (12 standards) -----
  {
    code: '2.8A',
    goal: 'Learn to identify and create 2D shapes based on sides and vertices.',
    words: [
      { term: 'side', meaning: 'a straight line segment that forms part of a 2D shape' },
      { term: 'vertex (plural: vertices)', meaning: 'a corner where two straight sides meet' },
    ],
    ideas: [
      { title: 'Sides equal vertices in polygons', text: 'A triangle always has 3 sides and 3 vertices. A pentagon always has 5 sides and 5 vertices.' },
      { title: 'Attributes define the shape', text: 'A shape with 4 straight sides and 4 square corners is a rectangle, regardless of how it is turned.' },
    ],
  },
  {
    code: '2.8B',
    goal: 'Learn to classify 3D solids by their faces, edges, and vertices.',
    words: [
      { term: 'face', meaning: 'a flat surface on a 3D solid' },
      { term: 'edge', meaning: 'a line where two flat faces meet' },
    ],
    ideas: [
      { title: 'Prisms have flat faces', text: 'A rectangular prism has 6 flat rectangular faces, 12 edges, and 8 vertices.' },
      { title: 'Curved surfaces vs flat faces', text: 'A sphere has no flat faces, no edges, and no vertices. A cylinder has 2 flat circular faces.' },
    ],
  },
  {
    code: '2.8C',
    goal: 'Learn to classify polygons up to 12 sides by their attributes.',
    words: [
      { term: 'polygon', meaning: 'a closed flat shape made with straight sides' },
      { term: 'hexagon / octagon', meaning: 'a polygon with 6 sides (hexagon) or 8 sides (octagon)' },
    ],
    ideas: [
      { title: 'Count the sides carefully', text: 'Count each side without skipping any. A 5-sided shape is a pentagon, 6-sided is a hexagon, 8-sided is an octagon.' },
      { title: 'Sides and vertices match', text: 'Any closed polygon has the exact same number of vertices as sides.' },
    ],
  },
  {
    code: '2.8D',
    goal: 'Learn to put 2D shapes and 3D solids together to build new shapes.',
    words: [
      { term: 'composite shape', meaning: 'a new shape made by combining two or more shapes' },
      { term: 'combine', meaning: 'join shapes together along matching edges or faces' },
    ],
    ideas: [
      { title: 'Join identical triangles', text: 'Two identical right triangles placed along their long sides make a rectangle.' },
      { title: 'Stack 3D solids', text: 'A cone placed on top of a cylinder creates the shape of a rocket or tower.' },
    ],
  },
  {
    code: '2.8E',
    goal: 'Learn to cut or divide 2D shapes into smaller geometric parts.',
    words: [
      { term: 'decompose', meaning: 'cut or divide a large shape into smaller shapes' },
      { term: 'diagonal', meaning: 'a straight line connecting two opposite corners of a polygon' },
    ],
    ideas: [
      { title: 'Cutting a rectangle diagonally', text: 'Drawing a straight line from one corner to the opposite corner divides a rectangle into 2 triangles.' },
      { title: 'Dividing into equal parts', text: 'Cutting a square down the middle creates 2 smaller identical rectangles.' },
    ],
  },
  {
    code: '2.9A',
    goal: 'Learn to measure the length of objects using standard unit models.',
    words: [
      { term: 'unit', meaning: 'a standard measurement length like 1 inch or 1 centimeter' },
      { term: 'length', meaning: 'the distance from one end of an object to the other' },
    ],
    ideas: [
      { title: 'Line units up end to end', text: 'Place measurement cubes in a straight line with no gaps between them and no overlaps.' },
      { title: 'Count the total units', text: 'Count how many units fit from the very start of the object to the very end.' },
    ],
  },
  {
    code: '2.9B',
    goal: 'Understand the relationship between the size of a unit and how many units are needed.',
    words: [
      { term: 'unit size', meaning: 'how long a single measuring tool or unit is' },
      { term: 'inverse relationship', meaning: 'as the unit gets bigger, you need fewer of them to measure the same object' },
    ],
    ideas: [
      { title: 'Bigger units mean fewer units', text: 'Measuring a table with feet takes fewer units than measuring it with inches because 1 foot is longer.' },
      { title: 'Smaller units mean more units', text: 'Because centimeters are smaller than inches, it takes more centimeters to measure the same pencil.' },
    ],
  },
  {
    code: '2.9C',
    goal: 'Learn to represent whole numbers as distances from a start point on a number line.',
    words: [
      { term: 'distance', meaning: 'the number of unit lengths between two points on a line' },
      { term: 'origin / start point', meaning: 'the point where you start measuring distance, often 0' },
    ],
    ideas: [
      { title: 'Distance is measured in jumps', text: 'The distance between 20 and 50 is 30 units because there are 30 steps between them.' },
      { title: 'Subtract to find distance', text: 'To find the distance between any two marks on a number line, subtract the smaller number from the larger.' },
    ],
  },
  {
    code: '2.9D',
    goal: 'Learn to measure length to the nearest marked unit using a ruler or tape.',
    words: [
      { term: 'ruler', meaning: 'a tool used to measure length in inches or centimeters' },
      { term: 'nearest unit', meaning: 'the closest whole number line mark to the end of the object' },
    ],
    ideas: [
      { title: 'Align with the zero mark', text: 'Always place the left end of the object exactly at the 0 mark on the ruler.' },
      { title: 'Read the closest line', text: 'Look at where the right end stops and find the nearest whole number mark.' },
    ],
  },
  {
    code: '2.9E',
    goal: 'Learn to estimate lengths and solve word problems involving length.',
    words: [
      { term: 'estimate', meaning: 'a thoughtful guess close to the real measurement' },
      { term: 'total length', meaning: 'adding two lengths together to find how long both are' },
    ],
    ideas: [
      { title: 'Use everyday benchmarks', text: 'An inch is about the length of a small paperclip. A foot is about the length of a standard ruler.' },
      { title: 'Add or subtract lengths', text: 'If a ribbon is 45 cm long and 15 cm is cut off, subtract to find the remaining length: 45 - 15 = 30 cm.' },
    ],
  },
  {
    code: '2.9F',
    goal: 'Learn to find the area of a rectangle by counting square units with no gaps or overlaps.',
    words: [
      { term: 'area', meaning: 'the amount of flat surface covered by a shape' },
      { term: 'square unit', meaning: 'a square with sides of 1 unit used to measure area' },
    ],
    ideas: [
      { title: 'Count by rows or columns', text: 'If a rectangle has 3 rows of 4 square tiles, you can count by 4s: 4, 8, 12 square units.' },
      { title: 'No gaps and no overlaps', text: 'Tiles must touch edge-to-edge without overlapping or leaving open spaces to find the true area.' },
    ],
  },
  {
    code: '2.9G',
    goal: 'Learn to read and write time to the nearest minute and tell a.m. from p.m.',
    words: [
      { term: 'hour hand', meaning: 'the shorter hand on a clock that shows the hour' },
      { term: 'minute hand', meaning: 'the longer hand on a clock that counts the minutes' },
    ],
    ideas: [
      { title: 'Read the hour first', text: 'Look at the short hand. The hour is the number it has just passed or points directly to.' },
      { title: 'Skip count by 5s then add 1s', text: 'Count by 5s around the clock marks to the nearest number, then count individual tick marks.' },
    ],
  },

  // ----- Strand 4: Data Analysis and Personal Financial Literacy (12 standards) -----
  {
    code: '2.5A',
    goal: 'Learn to find the total value of a collection of coins up to $1.00.',
    words: [
      { term: 'quarter', meaning: 'a coin worth 25 cents' },
      { term: 'dime', meaning: 'a coin worth 10 cents' },
    ],
    ideas: [
      { title: 'Count coins from greatest to least', text: 'Start with quarters (25¢), then dimes (10¢), nickels (5¢), and finally pennies (1¢).' },
      { title: 'Remember 100 cents equals 1 dollar', text: 'Four quarters make 100¢, which equals one whole dollar ($1.00).' },
    ],
  },
  {
    code: '2.5B',
    goal: 'Learn to write coin values using the cent sign, dollar sign, and decimal point.',
    words: [
      { term: 'cent symbol (¢)', meaning: 'a sign written after the number to show cents, like 75¢' },
      { term: 'decimal point (.)', meaning: 'a dot separating dollars from cents in money notation, like $0.75' },
    ],
    ideas: [
      { title: 'Two ways to write money', text: 'Seventy-five cents can be written as 75¢ or as $0.75. Never write both $ and ¢ together.' },
      { title: 'Two digits after the decimal point', text: 'In dollar notation, cents always have two places. Five cents is written $0.05, not $0.5.' },
    ],
  },
  {
    code: '2.10A',
    goal: 'Understand that bar lengths and picture counts represent data values.',
    words: [
      { term: 'bar length', meaning: 'how tall or long a bar is, showing how many items are in that group' },
      { term: 'data point', meaning: 'one piece of information collected in a survey or chart' },
    ],
    ideas: [
      { title: 'Taller bar means greater amount', text: 'A bar that reaches higher on the scale shows a category with more votes or items.' },
      { title: 'Read the scale line', text: 'Trace the top of the bar across to the axis to see the exact number it represents.' },
    ],
  },
  {
    code: '2.10B',
    goal: 'Learn to organize data into bar graphs and pictographs with intervals of 1 or more.',
    words: [
      { term: 'pictograph', meaning: 'a graph that uses picture symbols to show data' },
      { term: 'key / legend', meaning: 'explains what each picture symbol represents (like 1 picture = 2 items)' },
    ],
    ideas: [
      { title: 'Check the key first', text: 'Always read the key on a pictograph. If 1 smiley face means 2 students, count by 2s.' },
      { title: 'Label every category', text: 'A bar graph needs a clear title, category names at each bar, and numbered scale lines.' },
    ],
  },
  {
    code: '2.10C',
    goal: 'Learn to solve one-step addition and subtraction problems using graph data.',
    words: [
      { term: 'how many more', meaning: 'subtract to find the difference between two categories' },
      { term: 'in all / combined', meaning: 'add the categories together to find the grand total' },
    ],
    ideas: [
      { title: 'Read values from the graph', text: 'Find the height of the two bars being compared before doing any calculation.' },
      { title: 'Subtract for comparison questions', text: 'When asked how many more dogs than cats, subtract the cat bar value from the dog bar value.' },
    ],
  },
  {
    code: '2.10D',
    goal: 'Learn to draw conclusions and make predictions using information from a graph.',
    words: [
      { term: 'conclusion', meaning: 'a fact or statement you know is true based on data' },
      { term: 'prediction', meaning: 'a reasonable guess about what might happen next based on data patterns' },
    ],
    ideas: [
      { title: 'Identify most and least', text: 'The tallest bar shows the most popular choice; the shortest bar shows the least popular choice.' },
      { title: 'Compare totals to statements', text: 'Check each answer choice against the numbers shown on the graph to see which statement is true.' },
    ],
  },
  {
    code: '2.11A',
    goal: 'Learn how saving money over time accumulates into larger amounts.',
    words: [
      { term: 'saving', meaning: 'keeping money to use later instead of spending it right away' },
      { term: 'accumulate', meaning: 'grow or build up into a larger total over time' },
    ],
    ideas: [
      { title: 'Small amounts add up', text: 'Saving $2 every week adds up to $8 in 4 weeks and $104 in a year.' },
      { title: 'Saving for a bigger goal', text: 'Putting money in a piggy bank or bank account helps you buy larger items you cannot afford today.' },
    ],
  },
  {
    code: '2.11B',
    goal: 'Understand that saving money is an alternative to spending it.',
    words: [
      { term: 'spending', meaning: 'using money now to buy goods or services' },
      { term: 'choice / tradeoff', meaning: 'choosing to save means you decide not to spend that money right now' },
    ],
    ideas: [
      { title: 'You can only use a dollar once', text: 'If you spend a dollar on candy, you no longer have that dollar to save for a toy later.' },
      { title: 'Delayed satisfaction', text: 'Choosing to save requires waiting, but lets you buy something more meaningful in the future.' },
    ],
  },
  {
    code: '2.11C',
    goal: 'Learn to tell the difference between a bank deposit and a withdrawal.',
    words: [
      { term: 'deposit', meaning: 'putting money into a bank account so it is safely stored' },
      { term: 'withdrawal', meaning: 'taking money out of a bank account to spend or use' },
    ],
    ideas: [
      { title: 'Deposits increase your balance', text: 'When you deposit money, the total amount in your account goes up.' },
      { title: 'Withdrawals decrease your balance', text: 'When you take money out of an ATM or bank, the total amount in your account goes down.' },
    ],
  },
  {
    code: '2.11D',
    goal: 'Learn the difference between responsible and irresponsible borrowing.',
    words: [
      { term: 'borrowing', meaning: 'taking money or an item with the promise to return it soon' },
      { term: 'responsible borrowing', meaning: 'borrowing only what you can afford to pay back on time and keeping promises' },
    ],
    ideas: [
      { title: 'Plan how to pay it back', text: 'A responsible borrower knows when and how they will return borrowed money or items.' },
      { title: 'Irresponsible borrowing harms trust', text: 'Borrowing something you cannot repay or refusing to return it causes problems with others.' },
    ],
  },
  {
    code: '2.11E',
    goal: 'Learn to evaluate lending decisions using costs and benefits.',
    words: [
      { term: 'lending', meaning: 'letting someone else borrow your money or item for a time' },
      { term: 'trustworthy', meaning: 'a person who is reliable and keeps promises to return items' },
    ],
    ideas: [
      { title: 'Weighing benefits and risks', text: 'Lending helps a friend, but there is a risk the item might get broken or not returned.' },
      { title: 'Lending to responsible borrowers', text: 'It is smarter to lend to someone who has shown they return things promptly and safely.' },
    ],
  },
  {
    code: '2.11F',
    goal: 'Learn the difference between producers and consumers, and find the cost to produce.',
    words: [
      { term: 'producer', meaning: 'a person or business that makes goods or provides a service' },
      { term: 'consumer', meaning: 'a person who buys and uses goods or services' },
    ],
    ideas: [
      { title: 'Producers make goods', text: 'A baker who bakes bread or a farmer who grows apples is a producer.' },
      { title: 'Cost to produce', text: 'To find the cost of making lemonade, add the cost of lemons, sugar, cups, and ice together.' },
    ],
  },
];
