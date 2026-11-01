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
        'Choose apples for afternoon snack time',
        ['Plant an apple tree in the garden', 'The author suggests eating apples, not planting trees.'],
        ['Eat lunch at school every afternoon', 'The author is talking about healthy snack choices.'],
        ['Spread peanut butter on every fruit', 'Peanut butter is just one tasty dip mentioned.'],
      ],
      answer: 0,
      explain: 'The author argues that apples are the best fruit snack and encourages everyone to pack one.',
    }),
    mcq({
      standard: 'rla:1.9E', cites: [2],
      stem: 'Which reason does the author give for why apples are good for you?',
      choices: [
        ['They come in different shapes and bright colors.', 'Color is not a health reason.'],
        'They contain vitamins that keep your body healthy.',
        ['They grow faster than other fruits in the garden.', 'The author does not mention how fast apples grow.'],
        ['They stay fresh without being kept in a cooler.', 'Keeping apples cool is not mentioned in the text.'],
      ],
      answer: 1,
      explain: 'Paragraph 2 states that apples have vitamins that keep your body strong and healthy.',
    }),
    mcq({
      standard: 'rla:1.10A', cites: [1, 2],
      stem: 'Why did the author write this selection?',
      choices: [
        ['To describe how apples are harvested on farms', 'The selection does not describe farm harvesting.'],
        ['To teach readers how to slice fresh fruit safely', 'The text encourages eating apples, not kitchen safety.'],
        'To encourage readers to eat apples',
        ['To tell an amusing story about picking fruit', 'This is an opinion article, not an amusing story.'],
      ],
      answer: 2,
      explain: 'The author wants to persuade readers to choose and eat apples.',
    }),
    mcq({
      standard: 'rla:1.9D.i', cites: [1, 2],
      stem: 'What is the central idea of this selection?',
      choices: [
        ['Peanut butter is the best food.', 'Peanut butter is only mentioned as a dip.'],
        'Apples make a healthy and delicious snack.',
        ['Children should eat fruit each day.', 'The text focuses specifically on why apples are the best snack.'],
        ['Fruit trees need sunshine and fresh water to grow.', 'The passage does not discuss how fruit trees grow.'],
      ],
      answer: 1,
      explain: 'The central idea is that apples are healthy, delicious, and the best fruit snack.',
    }),
    mcq({
      standard: 'rla:1.9E', cites: [1, 2],
      stem: 'The author most likely believes that healthy snacks—',
      choices: [
        'can be sweet and taste great',
        ['take a long time to prepare', 'Apples can be eaten fresh right off the tree.'],
        ['are difficult to find in town', 'Apples are easy to pack in a lunchbox.'],
        ['should only be eaten for lunch', 'The author recommends apples for afternoon snack time.'],
      ],
      answer: 0,
      explain: 'The author highlights both the delicious taste and the health benefits of apples.',
    }),
    mcq({
      standard: 'rla:1.10B', cites: [1, 2],
      stem: 'How does the author organize the ideas in this selection?',
      choices: [
        ['By describing the steps to grow apple trees from seeds', 'The text gives reasons to eat apples, not steps to grow them.'],
        ['By telling a story about visiting an apple orchard', 'The text gives facts and opinions, not a story about a visit.'],
        'By giving reasons to support an opinion',
        ['By comparing red apples with other kinds of snacks', 'The author focuses on reasons to choose apples.'],
      ],
      answer: 2,
      explain: 'The author provides reasons (taste, vitamins, energy) to support the main opinion.',
    }),
  ],
});
