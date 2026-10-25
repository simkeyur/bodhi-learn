// Walkthrough lessons for Grade 1 math (39 standards).
// Each lesson has a goal, key words, and at least two big ideas.

import type { Lesson } from '../types.ts';

export const G1_MATH_LESSONS: Lesson[] = [
  // ----- Strand 1 -----
  {
    code: '1.2A',
    goal: 'Learn to recognize small groups of dots quickly without counting one by one.',
    words: [
      { term: 'ten-frame', meaning: 'a grid with 2 rows of 5 boxes used to show numbers up to 10' },
      { term: 'subitize', meaning: 'see how many dots there are in a group right away' },
    ],
    ideas: [
      { title: 'Full rows of five', text: 'A ten-frame has 5 on top and 5 on the bottom. If the top row is full, you know that is 5 right away.' },
      { title: 'Five and more', text: 'When the top row is full and 2 more are on the bottom, think 5 and 2 more make 7.' },
    ],
  },
  {
    code: '1.2B',
    goal: 'Learn to compose and decompose numbers up to 120 using hundreds, tens, and ones.',
    words: [
      { term: 'ten rod', meaning: 'a base-ten block made of 10 small unit cubes' },
      { term: 'hundred flat', meaning: 'a base-ten block made of 10 tens or 100 unit cubes' },
    ],
    ideas: [
      { title: 'Group into tens', text: 'Ten ones snap together to make 1 ten rod. Ten tens snap together to make 1 hundred flat.' },
      { title: 'Counting the blocks', text: 'Count the hundreds first, then count by tens for the rods, and count by ones for the small cubes.' },
    ],
  },
  {
    code: '1.2C',
    goal: 'Learn to write numbers up to 120 in standard form and expanded form.',
    words: [
      { term: 'standard form', meaning: 'writing a number with digits like 64' },
      { term: 'expanded form', meaning: 'showing the value of each digit added together, like 60 + 4' },
    ],
    ideas: [
      { title: 'The value of the tens digit', text: 'In 75, the digit 7 is in the tens place, so it is worth 70.' },
      { title: 'Writing the parts', text: 'Write the tens part plus the ones part: 75 = 70 + 5.' },
    ],
  },
  {
    code: '1.2D',
    goal: 'Learn to find numbers that are greater than or less than a given number up to 120.',
    words: [
      { term: 'greater than', meaning: 'more than another number' },
      { term: 'less than', meaning: 'fewer or smaller than another number' },
    ],
    ideas: [
      { title: 'One more and one less', text: 'On a number line or hundred chart, 1 more is to the right, and 1 less is to the left.' },
      { title: 'Looking at tens', text: 'If a number has more tens, it is greater. If it has fewer tens, it is less.' },
    ],
  },
  {
    code: '1.2E',
    goal: 'Learn to compare two numbers up to 120 using words.',
    words: [
      { term: 'compare', meaning: 'look at two numbers to see which is bigger, smaller, or if they are equal' },
      { term: 'tens place', meaning: 'the digit that tells how many groups of 10' },
    ],
    ideas: [
      { title: 'Check the tens first', text: 'To compare 53 and 48, look at the tens digits. 5 tens is more than 4 tens, so 53 is greater than 48.' },
      { title: 'Check the ones if tens are equal', text: 'If the tens digits are the same, look at the ones. In 67 and 62, 7 ones is more than 2 ones.' },
    ],
  },
  {
    code: '1.2F',
    goal: 'Learn to put numbers up to 120 in order from least to greatest.',
    words: [
      { term: 'least', meaning: 'the smallest number' },
      { term: 'greatest', meaning: 'the largest number' },
    ],
    ideas: [
      { title: 'Find the smallest number first', text: 'Compare the tens digits of all three numbers to see which number is the smallest.' },
      { title: 'Order on a number line', text: 'Numbers on a number line always go from smaller on the left to larger on the right.' },
    ],
  },
  {
    code: '1.2G',
    goal: 'Learn to compare two numbers to 100 using the symbols >, <, and =.',
    words: [
      { term: '>', meaning: 'greater than: the wide open mouth points to the bigger number' },
      { term: '<', meaning: 'less than: the small point points to the smaller number' },
      { term: '=', meaning: 'equal to: both sides have the exact same value' },
    ],
    ideas: [
      { title: 'The alligator mouth', text: 'The comparison symbol opens its wide mouth towards the larger number.' },
      { title: 'Reading from left to right', text: 'Read the numbers from left to right: 45 > 30 reads "45 is greater than 30".' },
    ],
  },

  // ----- Strand 2 -----
  {
    code: '1.3A',
    goal: 'Learn to add a multiple of 10 and a one-digit number up to 99.',
    words: [
      { term: 'multiple of 10', meaning: 'numbers you say when counting by tens, like 10, 20, 30, 40' },
      { term: 'sum', meaning: 'the answer to an addition problem' },
    ],
    ideas: [
      { title: 'Tens stay the same', text: 'When you add 40 + 7, you put 4 tens together with 7 ones to get 47.' },
      { title: 'Using base-ten blocks', text: 'Think of 4 ten rods and 7 unit cubes. Together they make 47.' },
    ],
  },
  {
    code: '1.3B',
    goal: 'Learn to solve word problems within 20 with unknowns in any spot.',
    words: [
      { term: 'unknown', meaning: 'the missing number you need to find' },
      { term: 'joining', meaning: 'putting groups together' },
      { term: 'separating', meaning: 'taking some away from a group' },
    ],
    ideas: [
      { title: 'What is the question asking?', text: 'Read the story carefully to see if things are being joined (added) or separated (subtracted).' },
      { title: 'Finding the missing part', text: 'If 8 + [ ? ] = 14, think: what number added to 8 makes 14? 14 − 8 = 6.' },
    ],
  },
  {
    code: '1.3C',
    goal: 'Learn how to compose 10 using two or more addends.',
    words: [
      { term: 'compose', meaning: 'put parts together to build a whole number' },
      { term: 'addend', meaning: 'a number that is added to another number' },
    ],
    ideas: [
      { title: 'Ten buddies', text: 'Numbers that pair up to make 10: 1+9, 2+8, 3+7, 4+6, and 5+5.' },
      { title: 'Using a ten-frame', text: 'If 7 spaces are full, there are 3 empty spaces left. 7 + 3 = 10.' },
    ],
  },
  {
    code: '1.3D',
    goal: 'Learn fact strategies like making 10 and doubles to add and subtract within 20.',
    words: [
      { term: 'doubles', meaning: 'adding a number to itself, like 6 + 6 = 12' },
      { term: 'make a ten', meaning: 'breaking up an addend to reach 10 first' },
    ],
    ideas: [
      { title: 'Making 10 strategy', text: 'To solve 8 + 5, take 2 from the 5 to turn the 8 into 10. Then 10 + 3 = 13.' },
      { title: 'Doubles plus one', text: 'If you know 6 + 6 = 12, then 6 + 7 is just 1 more: 13.' },
    ],
  },
  {
    code: '1.3F',
    goal: 'Learn to match a real-life story problem to a number sentence.',
    words: [
      { term: 'number sentence', meaning: 'a math sentence with numbers and symbols, like 9 + 4 = 13' },
      { term: 'action', meaning: 'what happens in the story: getting more or giving away' },
    ],
    ideas: [
      { title: 'Addition stories', text: 'Stories where someone gets more, finds items, or joins groups match addition (+).' },
      { title: 'Subtraction stories', text: 'Stories where items are eaten, lost, or given away match subtraction (−).' },
    ],
  },
  {
    code: '1.5B',
    goal: 'Learn to skip count by 2s, 5s, and 10s up to 120.',
    words: [
      { term: 'skip count', meaning: 'counting by jumping ahead the same number of steps each time' },
      { term: 'pattern', meaning: 'a regular rule that repeats' },
    ],
    ideas: [
      { title: 'Counting by tens', text: 'Every number counting by 10 ends in 0: 10, 20, 30, 40, 50, 60...' },
      { title: 'Counting by fives', text: 'Counting by 5 alternates ending in 5 and 0: 5, 10, 15, 20, 25, 30...' },
    ],
  },
  {
    code: '1.5C',
    goal: 'Learn to quickly find 10 more and 10 less than any number up to 120.',
    words: [
      { term: '10 more', meaning: 'add 1 ten to the tens digit' },
      { term: '10 less', meaning: 'subtract 1 ten from the tens digit' },
    ],
    ideas: [
      { title: 'The ones digit stays the same', text: 'When you find 10 more or 10 less, only the tens place changes. In 46, 10 more is 56 and 10 less is 36.' },
      { title: 'Moving on a hundred chart', text: 'Moving down one row adds 10; moving up one row subtracts 10.' },
    ],
  },
  {
    code: '1.5D',
    goal: 'Learn to write number sentences that represent word problems within 20.',
    words: [
      { term: 'represent', meaning: 'show something using numbers and math symbols' },
      { term: 'equation', meaning: 'a math statement with an equal sign' },
    ],
    ideas: [
      { title: 'Identify the numbers', text: 'Find the starting number, the amount added or subtracted, and the final total.' },
      { title: 'Check the operation', text: 'Use + when items are combined, and use − when items are taken away.' },
    ],
  },
  {
    code: '1.5E',
    goal: 'Learn that the equal sign means both sides have the exact same value.',
    words: [
      { term: 'equal sign (=)', meaning: 'shows that the value on the left is the same as the value on the right' },
      { term: 'balance', meaning: 'both sides of an equation are equal like a balanced scale' },
    ],
    ideas: [
      { title: 'Equal does not mean "the answer is"', text: 'The equal sign means balance. 7 + 3 = 5 + 5 is true because both sides equal 10.' },
      { title: 'Calculating both sides', text: 'Solve the left side and solve the right side. If both answers are the same, the equation is true.' },
    ],
  },
  {
    code: '1.5F',
    goal: 'Learn to find the missing unknown number in an addition or subtraction equation.',
    words: [
      { term: 'missing number', meaning: 'the unknown value that makes the equation true' },
      { term: 'inverse operations', meaning: 'addition and subtraction undo each other' },
    ],
    ideas: [
      { title: 'Unknown addend', text: 'In [ ? ] + 5 = 12, think: what number plus 5 equals 12? Subtract: 12 − 5 = 7.' },
      { title: 'Unknown subtrahend', text: 'In 15 − [ ? ] = 9, find the distance between 15 and 9: 15 − 9 = 6.' },
    ],
  },
  {
    code: '1.5G',
    goal: 'Learn to use properties of operations to add two or three numbers easily.',
    words: [
      { term: 'grouping', meaning: 'choosing which numbers to add first' },
      { term: 'friendly numbers', meaning: 'numbers that are easy to add in your head, like making 10' },
    ],
    ideas: [
      { title: 'Look for pairs that make 10', text: 'When adding 4 + 7 + 6, add 4 + 6 first to make 10. Then 10 + 7 = 17.' },
      { title: 'Order does not change the sum', text: 'You can add numbers in any order you like and the answer is always the same.' },
    ],
  },

  // ----- Strand 3 -----
  {
    code: '1.6A',
    goal: 'Learn to classify and sort 2D shapes using informal geometric language.',
    words: [
      { term: 'side', meaning: 'a straight outer edge of a shape' },
      { term: 'corner', meaning: 'where two straight sides meet' },
      { term: 'curved', meaning: 'round with no straight lines' },
    ],
    ideas: [
      { title: 'Straight vs curved', text: 'Circles have round curves. Triangles, squares, and rectangles have straight sides.' },
      { title: 'Counting corners', text: 'Count the sharp corners to help identify the shape: 3 for a triangle, 4 for a rectangle.' },
    ],
  },
  {
    code: '1.6B',
    goal: 'Learn to distinguish between defining attributes and non-defining attributes.',
    words: [
      { term: 'defining attribute', meaning: 'a feature that tells what shape it is, like number of sides and vertices' },
      { term: 'non-defining attribute', meaning: 'features like color, size, or direction that do not change what shape it is' },
    ],
    ideas: [
      { title: 'A triangle is always a triangle', text: 'A small blue triangle and a big yellow upside-down triangle are both triangles because both have 3 sides.' },
      { title: 'Sides and vertices matter', text: 'The number of sides and corners is what defines a 2D shape.' },
    ],
  },
  {
    code: '1.6D',
    goal: 'Learn to identify 2D shapes and describe them using formal math words.',
    words: [
      { term: 'vertex (vertices)', meaning: 'the corner point where two sides meet' },
      { term: 'rhombus', meaning: 'a 4-sided shape where all 4 sides have the same length' },
      { term: 'hexagon', meaning: 'a shape with 6 straight sides and 6 vertices' },
    ],
    ideas: [
      { title: 'Shapes with four sides', text: 'Squares, rectangles, and rhombuses all have 4 sides and 4 vertices.' },
      { title: 'Hexagons', text: 'A hexagon has 6 straight sides and 6 vertices, like a honeycomb cell.' },
    ],
  },
  {
    code: '1.6E',
    goal: 'Learn to identify 3D solids and describe their faces, edges, and vertices.',
    words: [
      { term: '3D solid', meaning: 'a figure with height, width, and depth that takes up space' },
      { term: 'face', meaning: 'a flat surface of a 3D solid' },
      { term: 'sphere', meaning: 'a perfectly round 3D solid with no flat faces' },
    ],
    ideas: [
      { title: 'Cylinders and cones', text: 'A cylinder has 2 flat circle faces and can roll. A cone has 1 flat circle face and 1 pointy vertex.' },
      { title: 'Prisms and cubes', text: 'A cube has 6 square faces. A rectangular prism has 6 rectangular faces.' },
    ],
  },
  {
    code: '1.6F',
    goal: 'Learn how smaller 2D shapes can be put together to make new target shapes.',
    words: [
      { term: 'compose', meaning: 'put smaller shapes together to build a larger shape' },
      { term: 'pattern blocks', meaning: 'shapes used to build pictures and other shapes' },
    ],
    ideas: [
      { title: 'Two triangles make a square', text: 'Putting two right triangles together along their long sides creates a square or rectangle.' },
      { title: 'Building hexagons', text: 'Two equal trapezoids joined together make a 6-sided hexagon.' },
    ],
  },
  {
    code: '1.6G',
    goal: 'Learn to partition 2D shapes into halves and fourths using fair shares.',
    words: [
      { term: 'halves', meaning: '2 equal parts that make up a whole' },
      { term: 'fourths', meaning: '4 equal parts that make up a whole (also called quarters)' },
      { term: 'fair shares', meaning: 'every part is the exact same size' },
    ],
    ideas: [
      { title: 'Cutting into two equal parts', text: 'When you cut a sandwich down the middle into 2 equal parts, each part is one half.' },
      { title: 'Cutting into four equal parts', text: 'When a pizza is cut into 4 equal slices, each slice is one fourth.' },
    ],
  },
  {
    code: '1.6H',
    goal: 'Learn to tell the difference between equal shares (halves and fourths) and unequal parts.',
    words: [
      { term: 'equal parts', meaning: 'parts that have the same area and size' },
      { term: 'unequal parts', meaning: 'parts where one is larger than another' },
    ],
    ideas: [
      { title: 'Parts must be the same size', text: 'Just having 2 pieces does not mean halves. The 2 pieces must be exactly equal in size.' },
      { title: 'Checking fourths', text: 'To be fourths, all 4 pieces must be identical in size (fair shares).' },
    ],
  },
  {
    code: '1.7B',
    goal: 'Learn to measure length using same-size units laid end-to-end.',
    words: [
      { term: 'length', meaning: 'how long an object is from one end to the other' },
      { term: 'end-to-end', meaning: 'placed touching in a straight line with no gaps and no overlaps' },
    ],
    ideas: [
      { title: 'No gaps and no overlaps', text: 'When using cubes or paperclips to measure, leave no space between them and do not place them on top of each other.' },
      { title: 'Start at the very edge', text: 'Line up the first unit with the beginning edge of the object you are measuring.' },
    ],
  },
  {
    code: '1.7C',
    goal: 'Learn why measuring with smaller units takes more units than measuring with bigger units.',
    words: [
      { term: 'unit', meaning: 'an object used to measure, like a paperclip or block' },
      { term: 'inverse relationship', meaning: 'smaller units need more pieces; larger units need fewer pieces' },
    ],
    ideas: [
      { title: 'Shorter units take more', text: 'A small paperclip is shorter than a craft stick, so you need more paperclips to measure the table.' },
      { title: 'Longer units take fewer', text: 'A large shoe takes fewer steps across the room than a small shoe.' },
    ],
  },
  {
    code: '1.7D',
    goal: 'Learn to describe the length of an object to the nearest whole unit.',
    words: [
      { term: 'nearest unit', meaning: 'the closest whole number of measuring pieces' },
      { term: 'label', meaning: 'the name of the unit you measured with, like paperclips or cubes' },
    ],
    ideas: [
      { title: 'Count the units', text: 'Count the total number of paperclips that match the length of the item.' },
      { title: 'Always name the unit', text: 'Say "6 paperclips" or "8 cubes", not just the number 6 or 8.' },
    ],
  },
  {
    code: '1.7E',
    goal: 'Learn to read time to the hour and half hour on analog and digital clocks.',
    words: [
      { term: 'hour hand', meaning: 'the short hand that points to the hour' },
      { term: 'minute hand', meaning: 'the long hand that points to the minutes' },
      { term: 'half hour', meaning: '30 minutes past the hour; minute hand points down to 6' },
    ],
    ideas: [
      { title: 'Time to the hour (:00)', text: 'When the minute hand points straight up at 12, it is o\'clock (:00).' },
      { title: 'Time to the half hour (:30)', text: 'When the minute hand points down at 6, 30 minutes have passed. The hour hand is halfway between two numbers.' },
    ],
  },

  // ----- Strand 4 -----
  {
    code: '1.4A',
    goal: 'Learn to identify pennies, nickels, dimes, and quarters by their value.',
    words: [
      { term: 'penny', meaning: 'a copper coin worth 1 cent (1¢)' },
      { term: 'nickel', meaning: 'a silver coin worth 5 cents (5¢)' },
      { term: 'dime', meaning: 'a small silver coin worth 10 cents (10¢)' },
      { term: 'quarter', meaning: 'a large silver coin worth 25 cents (25¢)' },
    ],
    ideas: [
      { title: 'Coin values', text: 'Penny = 1¢, Nickel = 5¢, Dime = 10¢, Quarter = 25¢.' },
      { title: 'Coin relationships', text: '5 pennies = 1 nickel. 2 nickels = 1 dime. 10 pennies = 1 dime.' },
    ],
  },
  {
    code: '1.4B',
    goal: 'Learn to write coin values using the cent symbol (¢).',
    words: [
      { term: 'cent symbol (¢)', meaning: 'the symbol written after a number to show cents' },
      { term: 'value', meaning: 'how much money a coin is worth' },
    ],
    ideas: [
      { title: 'Writing cents', text: 'Write the number followed by ¢: a nickel is written as 5¢.' },
      { title: 'Cent symbol placement', text: 'The cent sign goes after the number: 10¢, 25¢.' },
    ],
  },
  {
    code: '1.4C',
    goal: 'Learn to count a collection of pennies, nickels, and dimes.',
    words: [
      { term: 'skip count coins', meaning: 'counting dimes by 10s, nickels by 5s, and pennies by 1s' },
      { term: 'total value', meaning: 'how much all the coins are worth added together' },
    ],
    ideas: [
      { title: 'Start with the coins of greatest value', text: 'Count dimes (10, 20, 30...) first, then count on by 5s for nickels, and finally by 1s for pennies.' },
      { title: 'Counting nickels', text: 'Nickels are worth 5¢ each: count 5, 10, 15, 20¢.' },
    ],
  },
  {
    code: '1.8A',
    goal: 'Learn to organize data into categories using tally marks and T-charts.',
    words: [
      { term: 'tally mark', meaning: 'a line used to record counts; four lines with a slash across makes 5' },
      { term: 'category', meaning: 'a group of things that belong together' },
    ],
    ideas: [
      { title: 'Counting bundles of 5', text: 'A closed tally group with a diagonal line is always 5. Count them by fives.' },
      { title: 'Reading single tallies', text: 'Count the single extra lines by ones after counting the groups of 5.' },
    ],
  },
  {
    code: '1.8B',
    goal: 'Learn how pictures and bars represent data in graphs.',
    words: [
      { term: 'picture graph', meaning: 'a graph that uses symbols or pictures to show data' },
      { term: 'bar graph', meaning: 'a graph that uses colored bars to show amounts' },
    ],
    ideas: [
      { title: 'Each picture represents an item', text: 'In Grade 1, each picture or block usually stands for 1 person or 1 vote.' },
      { title: 'Compare heights or lengths', text: 'The tallest bar or longest row shows the category with the most votes.' },
    ],
  },
  {
    code: '1.8C',
    goal: 'Learn to answer questions and draw conclusions from graphs.',
    words: [
      { term: 'most', meaning: 'the largest amount or highest number of votes' },
      { term: 'fewer / how many more', meaning: 'subtract to find the difference between two categories' },
    ],
    ideas: [
      { title: 'Reading the amounts', text: 'Look at the top of each bar to read how many each group has.' },
      { title: 'Finding how many more', text: 'Subtract the smaller number from the larger number to see how many more.' },
    ],
  },
  {
    code: '1.9A',
    goal: 'Learn that income is the money people earn by working at a job.',
    words: [
      { term: 'income', meaning: 'money that a person earns by doing work or providing goods/services' },
      { term: 'job', meaning: 'work people do to earn money' },
    ],
    ideas: [
      { title: 'Working to earn', text: 'People work as teachers, doctors, farmers, and builders to earn income.' },
      { title: 'Gifts vs income', text: 'A birthday gift is not income; income is money earned from labor.' },
    ],
  },
  {
    code: '1.9B',
    goal: 'Learn how income is used to buy goods and services, and choose between wants and needs.',
    words: [
      { term: 'need', meaning: 'something you must have to live, like food, water, and shelter' },
      { term: 'want', meaning: 'something you would like to have, like toys and treats' },
    ],
    ideas: [
      { title: 'Needs come first', text: 'Families use their income to pay for basic needs first before buying wants.' },
      { title: 'Making choices', text: 'Money is limited, so people must choose carefully what to buy.' },
    ],
  },
  {
    code: '1.9C',
    goal: 'Learn the difference between spending money and saving money.',
    words: [
      { term: 'spending', meaning: 'using money to buy goods or services right now' },
      { term: 'saving', meaning: 'setting money aside to use at a later time' },
    ],
    ideas: [
      { title: 'Why save?', text: 'Saving helps you buy bigger things in the future or handle emergencies.' },
      { title: 'Piggy bank and savings bank', text: 'Putting coins in a bank keeps your money safe until you are ready to spend it.' },
    ],
  },
  {
    code: '1.9D',
    goal: 'Learn about charitable giving and helping others in the community.',
    words: [
      { term: 'charitable giving', meaning: 'donating money, food, clothes, or time to help people in need' },
      { term: 'community', meaning: 'the people and neighborhood around us' },
    ],
    ideas: [
      { title: 'Helping others', text: 'People can share what they have with food pantries, toy drives, and shelters.' },
      { title: 'Giving time or goods', text: 'Giving is not just money; donating gently used coats or volunteering also helps.' },
    ],
  },
];
