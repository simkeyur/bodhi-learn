// Grade 1 persuasive reading set: Eat Red Apples

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G1_SET_PERSUADE_APPLES: ReadingSet = makeSet({
  id: 'g1-persuade-apples',
  grade: 1,
  kind: 'reading',
  title: 'Eat Red Apples',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [
    {
      id: 'g1-pass-apples',
      title: 'Eat Red Apples',
      genre: 'argumentative',
      blocks: [
        {
          kind: 'p',
          text: 'Apples are the best fruit to choose for afternoon snack time. Crisp red apples are sweet, crunchy, and delicious to eat. They taste wonderful right off the tree or sliced with peanut butter.',
        },
        {
          kind: 'p',
          text: 'Apples are also full of vitamins that keep your body strong and healthy. They give your brain energy to learn and play all day. Everyone should pack a juicy apple in their lunchbox every day!',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:1.9E', cites: [1, 2],
      stem: 'What is the author trying to persuade the reader to do?',
      choices: [
        'Eat apples for snack time.',
        ['Grow apple trees in the backyard garden.', 'The text is about eating apples, not planting trees.'],
        ['Drink cold glasses of milk at breakfast.', 'Milk is not discussed in this text.'],
        ['Stop packing crunchy snacks for school.', 'The author encourages healthy fruit snacks.'],
      ],
      answer: 0,
      explain: 'The author argues that apples are the best fruit snack and encourages everyone to pack one.',
    }),
    mcq({
      standard: 'rla:1.9E', cites: [2],
      stem: 'Which reason does the author give for why apples are good for you?',
      choices: [
        ['They taste best when baked into sweet pies.', 'The text highlights fresh nutrition.'],
        'They give your body vitamins.',
        ['They stay cold inside a lunchbox all morning.', 'Temperature is not mentioned.'],
        ['They cost less than other fruits at markets.', 'Cost is not mentioned in the passage.'],
      ],
      answer: 1,
      explain: 'Paragraph 2 states that apples have vitamins that keep your body strong and healthy.',
    }),
    mcq({
      standard: 'rla:1.10A', cites: [1, 2],
      stem: 'Why did the author write this selection?',
      choices: [
        ['To explain how to bake an apple pie.', 'The text is not a recipe.'],
        ['To tell a story about an apple tree monster.', 'This is a persuasive text, not fiction.'],
        'To encourage eating apples.',
        ['To describe how farmers pick ripe red apples.', 'The text is about choosing apples for snacks.'],
      ],
      answer: 2,
      explain: 'The author wants to persuade readers to choose and eat apples.',
    }),
    mcq({
      standard: 'rla:1.9D.i', cites: [1, 2],
      stem: 'What is the central idea of this selection?',
      choices: [
        ['Peanut butter is the best spread for lunch.', 'Peanut butter is only mentioned as a dip.'],
        'Apples make a great snack.',
        ['Lunchboxes should always be painted red.', 'The text discusses healthy food.'],
        ['Children should play games all afternoon.', 'The text focuses on eating apples.'],
      ],
      answer: 1,
      explain: 'The central idea is that apples are healthy, delicious, and the best fruit snack.',
    }),
    mcq({
      standard: 'rla:1.9E', cites: [1, 2],
      stem: 'The author most likely believes that healthy snacks—',
      choices: [
        'can taste delicious too',
        ['should taste bad so they work better.', 'The author emphasizes that apples taste sweet and wonderful.'],
        ['must always be cooked inside a warm oven.', 'Apples can be eaten fresh off the tree.'],
        ['should only be eaten once or twice a week.', 'The author says everyone should pack an apple every day.'],
      ],
      answer: 0,
      explain: 'The author highlights both the delicious taste and the health benefits of apples.',
    }),
    mcq({
      standard: 'rla:1.10B', cites: [1, 2],
      stem: 'How does the author organize the ideas in this selection?',
      choices: [
        ['By telling a story with a beginning and end.', 'This is an opinion text with reasons, not a narrative.'],
        ['By comparing different kinds of vegetables.', 'The text is about apples.'],
        'By giving reasons for an opinion.',
        ['By asking questions that have no answers.', 'The author makes statements and gives supporting facts.'],
      ],
      answer: 2,
      explain: 'The author provides reasons (taste, vitamins, energy) to support the main opinion.',
    }),
  ],
});
