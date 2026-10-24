// Grade 7 math, strand 1: probability and numerical representations.
// TEKS 7.2A, 7.6A, 7.6C, 7.6D, 7.6E, 7.6H, 7.6I

import { pick } from '../../rng.ts';
import { frac, mc, num, one, txt, type Gen } from '../build.ts';

// ---------- 7.2A sets and subsets of rational numbers ----------
export const setsOfRationalNumbers: Gen = (rng, d) => {
  if (d === 1) {
    const cases = [
      { num: '−15', right: 'Integers and rational numbers only', wrong: ['Whole numbers only', 'Rational numbers only', 'Whole numbers and integers only'], exp: '−15 is a negative whole number, so it is an integer and a rational number, but not a whole number.' },
      { num: '24', right: 'Whole numbers, integers, and rational numbers', wrong: ['Integers only', 'Rational numbers only', 'Whole numbers only'], exp: '24 is a positive counting number, so it is a whole number, an integer, and a rational number.' },
      { num: '{3/8}', right: 'Rational numbers only', wrong: ['Integers only', 'Whole numbers only', 'Integers and rational numbers only'], exp: '{3/8} cannot be simplified to a whole number or an integer, so it is only a rational number.' },
      { num: '−0.45', right: 'Rational numbers only', wrong: ['Integers only', 'Whole numbers only', 'Integers and rational numbers only'], exp: '−0.45 is a terminating decimal that is not an integer, so it belongs only to rational numbers.' },
    ];
    const c = pick(rng, cases);
    return one('mc', [
      txt(`To which set or sets of numbers does ${c.num} belong?`),
    ],
      mc(rng, c.right, c.wrong),
      c.exp);
  }

  if (d === 2) {
    return one('mc', [
      txt(`Which number is an integer but NOT a whole number?`),
    ],
      mc(rng, '−8', ['12', '{1/2}', '0']),
      `Whole numbers are 0, 1, 2, 3, ... Integers include negative whole numbers like −8. Thus −8 is an integer but not a whole number.`);
  }

  // d === 3: True statements about relationships between sets
  return one('mc', [
    txt(`Which statement about rational numbers is true?`),
  ],
    mc(rng, 'All integers are rational numbers because they can be written as a fraction with a denominator of 1', [
      { text: 'All rational numbers are integers', why: 'Fractions like {1/2} are rational but not integers.' },
      'Whole numbers include negative fractions',
      'Zero is not a rational number',
    ]),
    `Every integer n can be expressed as {n/1}, satisfying the definition of a rational number. Thus all integers are rational numbers.`);
};

// ---------- 7.6A sample spaces with lists and tree diagrams ----------
export const sampleSpaces: Gen = (rng, d) => {
  if (d === 1) {
    // Total outcomes of flipping a coin and rolling a standard 6-sided die
    const dieSides = 6;
    const coinSides = 2;
    const totalOutcomes = dieSides * coinSides;
    return one('mc', [
      txt(`A student flips a fair coin (Heads or Tails) and rolls a standard 6-sided number cube (numbered 1 through 6). How many total possible outcomes are in the sample space?`),
    ],
      mc(rng, `${totalOutcomes}`, [
        `${dieSides + coinSides}`,
        `${dieSides}`,
        `${totalOutcomes * 2}`,
      ]),
      `Multiply the number of outcomes for each independent event: 2 × 6 = ${totalOutcomes} possible outcomes.`);
  }

  if (d === 2) {
    // Menu choices: 3 sandwiches, 4 drinks, 2 sides
    const sandwiches = 3;
    const drinks = 4;
    const sides = 2;
    const totalCombos = sandwiches * drinks * sides;
    return one('mc', [
      txt(`A lunch special allows a customer to choose 1 sandwich, 1 drink, and 1 side. The menu offers ${sandwiches} sandwiches, ${drinks} drinks, and ${sides} sides. How many different meal combinations can be created?`),
    ],
      mc(rng, `${totalCombos}`, [
        `${sandwiches + drinks + sides}`,
        `${sandwiches * drinks}`,
        `${totalCombos + 6}`,
      ]),
      `By the Fundamental Counting Principle, multiply the number of options for each category: ${sandwiches} × ${drinks} × ${sides} = ${totalCombos} combinations.`);
  }

  // d === 3: Tree diagram interpretation
  return one('mc', [
    txt(`A tree diagram is constructed to show all possible outcomes of spinning a 3-color spinner (Red, Blue, Green) twice. How many branches will the tree diagram have at the final level?`),
  ],
    mc(rng, '9 branches', [
      { text: '6 branches', why: 'Added 3 + 3 instead of multiplying 3 × 3.' },
      '3 branches',
      '12 branches',
    ]),
    `There are 3 possible outcomes on the first spin, and for each of those 3 outcomes there are 3 possible outcomes on the second spin: 3 × 3 = 9 branches.`);
};

// ---------- 7.6C experimental probability predictions ----------
export const experimentalPredictions: Gen = (rng, d) => {
  if (d === 1) {
    const trials = 50;
    const favorable = pick(rng, [12, 15, 18, 20]);
    const futureTrials = 200;
    const predicted = (favorable / trials) * futureTrials;
    return one('mc', [
      txt(`In an experiment, a student spins a spinner ${trials} times. The spinner lands on purple ${favorable} times. Based on these experimental results, how many times would the spinner be expected to land on purple in ${futureTrials} spins?`),
    ],
      mc(rng, `${predicted}`, [
        `${predicted + 10}`,
        `${favorable * 2}`,
        `${trials}`,
      ]),
      `The experimental probability is {${favorable}/${trials}}. Multiply by ${futureTrials} spins: ({${favorable}/${trials}}) × ${futureTrials} = ${predicted} times.`);
  }

  if (d === 2) {
    // Quality control batch testing
    const tested = 100;
    const defective = pick(rng, [3, 4, 5, 6]);
    const batchSize = 2500;
    const expectedDefective = (defective / tested) * batchSize;
    return one('mc', [
      txt(`A manufacturer inspected a random sample of ${tested} light bulbs and found that ${defective} were defective. At this rate, how many defective light bulbs should the manufacturer expect in a batch of ${num(batchSize)} light bulbs?`),
    ],
      mc(rng, `${expectedDefective}`, [
        `${defective * 10}`,
        `${expectedDefective + 25}`,
        `${tested}`,
      ]),
      `Set up a proportion: {${defective}/${tested}} = {x/${batchSize}}. Cross-multiply to solve: x = (${defective} × ${batchSize}) ÷ ${tested} = ${expectedDefective}.`);
  }

  // d === 3: Free throws prediction
  const made = 18;
  const attempted = 25;
  const nextSeasonAttempts = 150;
  const expectedMakes = (made / attempted) * nextSeasonAttempts;
  return one('mc', [
    txt(`Elena made ${made} out of ${attempted} free throw attempts during her last 5 games. If she attempts ${nextSeasonAttempts} free throws over the entire season, about how many free throws is she expected to make based on her past performance?`),
  ],
    mc(rng, `${expectedMakes}`, [
      `${made * 6}`,
      `${expectedMakes - 15}`,
      `${attempted * 5}`,
    ]),
    `Elena's experimental success rate is {${made}/${attempted}} = 0.72. Multiply by ${nextSeasonAttempts} attempts: 0.72 × ${nextSeasonAttempts} = ${expectedMakes} makes.`);
};

// ---------- 7.6D theoretical probability predictions ----------
export const theoreticalPredictions: Gen = (rng, d) => {
  if (d === 1) {
    // Rolling a 6-sided die
    const rolls = pick(rng, [60, 120, 180, 240]);
    const targetFace = pick(rng, [3, 4, 5, 6]);
    const expected = rolls / 6;
    return one('mc', [
      txt(`A standard number cube with faces numbered 1 through 6 is rolled ${rolls} times. What is the expected number of times the cube will land on the number ${targetFace}?`),
    ],
      mc(rng, `${expected}`, [
        `${expected * 2}`,
        `${expected - 5}`,
        `${rolls / 10}`,
      ]),
      `The theoretical probability of rolling a ${targetFace} on a fair 6-sided die is {1/6}. Multiply by ${rolls} rolls: {1/6} × ${rolls} = ${expected}.`);
  }

  if (d === 2) {
    // Marble bag: 3 red, 5 blue, 2 green = 10 total
    const red = 3;
    const blue = 5;
    const green = 2;
    const total = red + blue + green;
    const draws = pick(rng, [50, 100, 150]);
    const expectedBlue = (blue / total) * draws;
    return one('mc', [
      txt(`A bag contains ${red} red marbles, ${blue} blue marbles, and ${green} green marbles. A marble is drawn at random and replaced. If this process is repeated ${draws} times, how many times is a blue marble expected to be drawn?`),
    ],
      mc(rng, `${expectedBlue}`, [
        `${blue * 5}`,
        `${draws - expectedBlue}`,
        `${expectedBlue + 10}`,
      ]),
      `Total marbles = ${red} + ${blue} + ${green} = ${total}. P(blue) = {${blue}/${total}} = 0.5. Expected blue draws in ${draws} trials = 0.5 × ${draws} = ${expectedBlue}.`);
  }

  // d === 3: Compound theoretical prediction
  const flips = pick(rng, [80, 120, 160]);
  const expectedBothHeads = flips / 4;
  return one('mc', [
    txt(`Two fair coins are flipped simultaneously ${flips} times. How many times are both coins expected to land on Heads?`),
  ],
    mc(rng, `${expectedBothHeads}`, [
      { text: `${flips / 2}`, why: 'This is the probability of getting at least one head, not both heads.' },
      `${expectedBothHeads * 2}`,
      `${flips / 8}`,
    ]),
    `The outcomes for two coins are (H,H), (H,T), (T,H), (T,T). P(both Heads) = {1/4}. Multiply by ${flips} flips: {1/4} × ${flips} = ${expectedBothHeads}.`);
};

// ---------- 7.6E complement of an event ----------
export const eventComplement: Gen = (rng, d) => {
  if (d === 1) {
    const pEvent = pick(rng, [0.35, 0.4, 0.65, 0.8]);
    const pComp = Math.round((1 - pEvent) * 100) / 100;
    return one('mc', [
      txt(`The probability of rain tomorrow is ${pEvent}. What is the probability that it will NOT rain tomorrow?`),
    ],
      mc(rng, `${pComp}`, [
        `${pEvent}`,
        `${Math.round((pComp - 0.1) * 100) / 100}`,
        `${Math.round((1 + pEvent) * 100) / 100}`,
      ]),
      `The sum of the probability of an event and its complement is 1. P(not rain) = 1 − ${pEvent} = ${pComp}.`);
  }

  if (d === 2) {
    const numFavorable = pick(rng, [3, 5, 7]);
    const totalOutcomes = 10;
    const pNotFavorable = frac(totalOutcomes - numFavorable, totalOutcomes);
    return one('mc', [
      txt(`A spinner has ${totalOutcomes} equal-sized sections numbered 1 through ${totalOutcomes}. What is the probability that the spinner lands on a number that is NOT less than or equal to ${numFavorable}?`),
    ],
      mc(rng, pNotFavorable, [
        frac(numFavorable, totalOutcomes),
        frac(numFavorable + 1, totalOutcomes),
        frac(totalOutcomes - numFavorable - 1, totalOutcomes),
      ]),
      `The numbers less than or equal to ${numFavorable} make up ${numFavorable} sections. The complement consists of the remaining ${totalOutcomes - numFavorable} sections. P(not ≤ ${numFavorable}) = {${totalOutcomes - numFavorable}/${totalOutcomes}} = ${pNotFavorable}.`);
  }

  // d === 3: Relationship between event and complement
  return one('mc', [
    txt(`If the probability of winning a board game is P(win) = {2/7}, which statement about its complement is true?`),
  ],
    mc(rng, 'P(not win) = {5/7}, because P(win) + P(not win) = 1', [
      { text: 'P(not win) = {2/7}, because an event and its complement always have equal probability', why: 'Complements only have equal probability if each is 0.5.' },
      'P(not win) = {7/2}, because the complement is the reciprocal of the event',
      'P(not win) = 0, because winning is guaranteed',
    ]),
    `The complement of winning is not winning. Since all probabilities of an event and its complement sum to 1: P(not win) = 1 − {2/7} = {5/7}.`);
};

// ---------- 7.6H predictions and comparisons from simple experiments ----------
export const qualitativeQuantitativePredictions: Gen = (rng, d) => {
  if (d === 1) {
    return one('mc', [
      txt(`A bag contains 15 blue counters and 5 red counters. A counter is drawn at random. Which qualitative prediction is most reasonable?`),
    ],
      mc(rng, 'Drawing a blue counter is more likely than drawing a red counter', [
        { text: 'Drawing a red counter is certain', why: 'Red counters only make up 5 out of 20 total counters.' },
        'Drawing a blue counter is impossible',
        'Drawing a blue counter and drawing a red counter are equally likely',
      ]),
      `Because there are 15 blue counters compared to only 5 red counters, drawing a blue counter has a higher probability ({15/20} = 75%) than drawing a red counter ({5/20} = 25%).`);
  }

  if (d === 2) {
    const red = 8;
    const yellow = 12;
    const blue = 20;
    const total = red + yellow + blue; // 40
    return one('mc', [
      txt(`A jar contains ${red} red marbles, ${yellow} yellow marbles, and ${blue} blue marbles. If a marble is randomly selected from the ${total} total marbles, which statement correctly compares the probabilities?`),
    ],
      mc(rng, 'Selecting a blue marble is equally as likely as selecting a non-blue marble', [
        { text: 'Selecting a red marble is more likely than selecting a yellow marble', why: 'There are only 8 red marbles compared to 12 yellow marbles.' },
        'Selecting a yellow marble is twice as likely as selecting a blue marble',
        'All three colors have equal likelihood of being selected',
      ]),
      `Blue has ${blue} marbles, which is exactly half of the ${total} total marbles. The remaining non-blue marbles (red + yellow) also total ${red + yellow} = ${total - blue}. Thus selecting blue is equally as likely as selecting non-blue.`);
  }

  // d === 3: Comparing experimental results to theoretical expectations
  return one('mc', [
    txt(`A student flips a fair coin 100 times and records 62 Heads and 38 Tails. How does this experimental result compare to the theoretical expectation?`),
  ],
    mc(rng, 'The experimental result produced 12 more Heads than theoretically expected', [
      { text: 'The experimental result exactly matched the theoretical expectation', why: 'Theoretically, 50 Heads and 50 Tails were expected.' },
      'The experimental result produced 12 fewer Heads than theoretically expected',
      'The experimental probability of Heads was 0.38',
    ]),
    `The theoretical expectation for 100 flips is 50 Heads (0.50 × 100). The experiment yielded 62 Heads, which is 62 − 50 = 12 more Heads than theoretically expected.`);
};

// ---------- 7.6I experimental and theoretical probabilities ----------
export const determineProbabilities: Gen = (rng, d) => {
  if (d === 1) {
    // Simple theoretical probability: rolling an even number on a 6-sided die
    return one('mc', [
      txt(`What is the theoretical probability of rolling an even number on a fair 6-sided number cube numbered 1 through 6?`),
    ],
      mc(rng, '{1/2}', ['{1/3}', '{1/6}', '{2/3}']),
      `The even numbers are 2, 4, 6 (3 favorable outcomes). Total possible outcomes = 6. P(even) = {3/6} = {1/2}.`);
  }

  if (d === 2) {
    // Experimental probability from frequency table
    const heads = pick(rng, [28, 32, 34, 36]);
    const total = 60;
    const tails = total - heads;
    const pTails = frac(tails, total);
    return one('mc', [
      txt(`In 60 trials of flipping a coin, the coin landed on Heads ${heads} times and on Tails ${tails} times. What is the experimental probability of the coin landing on Tails?`),
    ],
      mc(rng, pTails, [
        frac(heads, total),
        '{1/2}',
        frac(tails + 5, total),
      ]),
      `Experimental probability is favorable trials divided by total trials: {${tails}/${total}} = ${pTails}.`);
  }

  // d === 3: Compound probability (independent events)
  return one('mc', [
    txt(`A fair coin is tossed and a standard 6-sided die is rolled. What is the theoretical probability of getting Tails on the coin and rolling a number greater than 4 on the die?`),
  ],
    mc(rng, '{1/6}', [
      { text: '{1/2}', why: 'This is the probability of Tails alone.' },
      '{1/3}',
      '{5/12}',
    ]),
    `P(Tails) = {1/2}. The numbers greater than 4 on a 6-sided die are 5 and 6, so P(> 4) = {2/6} = {1/3}. Multiply for independent events: {1/2} × {1/3} = {1/6}.`);
};

export const STRAND1 = {
  '7.2A': [setsOfRationalNumbers],
  '7.6A': [sampleSpaces],
  '7.6C': [experimentalPredictions],
  '7.6D': [theoreticalPredictions],
  '7.6E': [eventComplement],
  '7.6H': [qualitativeQuantitativePredictions],
  '7.6I': [determineProbabilities],
};
