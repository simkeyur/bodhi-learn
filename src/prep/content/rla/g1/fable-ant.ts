// Grade 1 fable reading set: The Ant and the Dove

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G1_SET_FABLE_ANT: ReadingSet = makeSet({
  id: 'g1-fable-ant',
  grade: 1,
  kind: 'reading',
  title: 'The Ant and the Dove',
  intro: 'Read the fable and choose the best answer to each question.',
  passages: [
    {
      id: 'g1-pass-ant',
      title: 'The Ant and the Dove',
      genre: 'fiction',
      blocks: [
        {
          kind: 'p',
          text: 'A thirsty little ant walked down to the clear river for a cool drink. Suddenly, a strong wave swept the ant into deep water. The ant struggled to stay afloat and cried out for help.',
        },
        {
          kind: 'p',
          text: 'A gentle dove perched in a nearby tree saw the ant in trouble. The dove quickly dropped a large green leaf into the water. The ant climbed onto the floating leaf and drifted safely to the grassy bank. The ant thanked the kind dove.',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:1.9A', cites: [2],
      stem: 'This story is a fable because it teaches that—',
      choices: [
        'helping others in need is good',
        ['little ants should stay far from rivers', 'The fable teaches about helping friends, not staying away from rivers.'],
        ['birds prefer to build nests in tall trees', 'The story is about a dove rescuing an ant, not bird nests.'],
        ['rivers have strong waves and cool water', 'This is a setting detail, not the moral lesson.'],
      ],
      answer: 0,
      explain: 'A fable teaches a lesson: here, the dove kindly helps the ant in trouble.',
    }),
    mcq({
      standard: 'rla:1.8C', cites: [1],
      stem: 'What is the main problem the ant faces in the story?',
      choices: [
        'The ant gets swept into deep river water.',
        ['The ant cannot find its way to the river.', 'The ant finds the river easily to get a drink.'],
        ['A dove knocks the ant out of the tree.', 'The dove helps the ant; it does not harm it.'],
        ['The water in the river is too cold to drink.', 'The ant wanted a drink, but the danger was getting swept into deep water.'],
      ],
      answer: 0,
      explain: 'Paragraph 1 explains that a strong wave swept the ant into deep water where it struggled to stay afloat.',
    }),
    mcq({
      standard: 'rla:1.8B', cites: [2],
      stem: 'Why does the dove drop a green leaf into the river?',
      choices: [
        'To give the ant something to climb on and float to safety',
        ['To make a soft nest on top of the water', 'Nests are built in trees, and the dove wanted to rescue the ant.'] ,
        ['To wash the green leaf in the river', 'The dove dropped the leaf to help the ant climb out of the water.'],
        ['To hide the ant from fish in the deep river', 'The ant was in danger of drowning, not being eaten by fish.'],
      ],
      answer: 0,
      explain: 'Paragraph 2 states that the dove dropped the leaf so the ant could climb on and float to safety.',
    }),
    mcq({
      standard: 'rla:1.6F', cites: [2],
      stem: 'How does the ant feel after reaching the grassy bank?',
      choices: [
        ['Tired and hungry for food', 'The ant was just rescued from the water; it is thankful.'],
        ['Still thirsty for water', 'The ant is glad to be safe after almost drowning.'],
        'Safe and thankful',
        ['Afraid of the gentle dove', 'The ant thanked the dove for its help.'],
      ],
      answer: 2,
      explain: 'Paragraph 2 states that the ant reached the bank safely and thanked the kind dove.',
    }),
    mcq({
      standard: 'rla:1.3B', cites: [2],
      stem: 'In paragraph 2, the word **drifted** means—',
      choices: [
        'floated along gently',
        ['swam across the river', 'The ant rode on the leaf; it was not swimming on its own.'],
        ['sank deep', 'The leaf stayed on top of the water so the ant could reach the bank.'],
        ['blew away in the cold wind', 'The leaf moved across the water to the bank, not into the air.'],
      ],
      answer: 0,
      explain: 'The leaf was on the river water, so drifted means floating gently to the bank.',
    }),
    mcq({
      standard: 'rla:1.8D', cites: [1, 2],
      stem: 'Where do the events in this story take place?',
      choices: [
        ['In a grassy meadow with no water', 'The story takes place by a river where the ant went to drink.'],
        'By a clear river near a leafy tree',
        ['High in the branches of a tree', 'The dove sat in a tree, but the main action took place in the river.'],
        ['Inside an ant hill underground', 'The ant walked down to the river bank.'],
      ],
      answer: 1,
      explain: 'The story takes place by a clear river where the dove perches in a nearby tree.',
    }),
    mcq({
      standard: 'rla:1.7C', cites: [1],
      stem: 'Which sentence shows that the ant needs help?',
      choices: [
        ['"A thirsty little ant walked down to the clear river for a cool drink."', 'The ant was looking for water here, not in trouble yet.'],
        '"The ant struggled to stay afloat and cried out for help."',
        ['"Suddenly, a strong wave swept the ant into deep water."', 'This shows the wave hitting the ant, but the next sentence shows the ant calling for help.'],
        ['"The dove quickly dropped a large green leaf into the water."', 'This shows the dove helping, not the ant needing help.'],
      ],
      answer: 1,
      explain: 'The ant is in deep water and cries out for help.',
    }),
    mcq({
      standard: 'rla:1.8A', cites: [2],
      stem: 'What is the lesson of this story?',
      choices: [
        ['Little creatures should never go near rivers.', 'The story is about kindness, not about avoiding rivers.'],
        ['Leaves can float on water.', 'Leaves do float, but that is a detail, not the moral lesson.'],
        'It is good to help friends in trouble.',
        ['Doves always like to sit in tall trees.', 'This is a detail about where the dove was, not the lesson.'],
      ],
      answer: 2,
      explain: 'The theme is the lesson of a story. The dove helps the ant, showing that helping others is good.',
    }),
  ],
});
