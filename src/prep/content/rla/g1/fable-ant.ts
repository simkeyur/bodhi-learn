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
        ['ants should never drink cool water', 'The lesson is about kindness and helping, not avoiding water.'],
        'friends help each other when someone is in danger',
        ['birds only like to build large nests', 'The story is about saving the ant.'],
        ['rivers are always dangerous for everyone', 'The story teaches a moral lesson about kindness.'],
      ],
      answer: 1,
      explain: 'A fable teaches a lesson: here, the dove kindly helps the ant in trouble.',
    }),
    mcq({
      standard: 'rla:1.8C', cites: [1],
      stem: 'What is the main problem the ant faces in the story?',
      choices: [
        'The ant falls into deep water and cannot swim.',
        ['The ant cannot find any green leaves.', 'Leaves are not what the ant was looking for.'],
        ['A dove chases the ant away from the river.', 'The dove helps the ant, not chases it.'],
        ['The sun is too hot on the path.', 'The problem is being swept into deep river water.'],
      ],
      answer: 0,
      explain: 'Paragraph 1 explains that a strong wave swept the ant into deep water where it struggled to stay afloat.',
    }),
    mcq({
      standard: 'rla:1.8B', cites: [2],
      stem: 'Why does the dove drop a green leaf into the river?',
      choices: [
        ['To make a soft nest on the ground.', 'The dove drops the leaf into the water to rescue the ant.'],
        ['To hide from a predator in the tree.', 'The dove is helping the ant.'],
        'To help the ant climb to safety.',
        ['To wash the leaf in the river.', 'The leaf acts as a life raft for the ant.'],
      ],
      answer: 2,
      explain: 'Paragraph 2 states that the dove dropped the leaf so the ant could climb on and float to safety.',
    }),
    mcq({
      standard: 'rla:1.6F', cites: [2],
      stem: 'How does the ant feel after reaching the grassy bank?',
      choices: [
        ['Angry at the river water.', 'The ant is grateful, not angry.'],
        ['Tired of playing games.', 'The ant was in danger, not playing.'],
        ['Hungry for sweet fruit.', 'The story does not mention hunger.'],
        'Safe and thankful to the kind dove.',
      ],
      answer: 3,
      explain: 'Paragraph 2 states that the ant reached the bank safely and thanked the kind dove.',
    }),
    mcq({
      standard: 'rla:1.3B', cites: [2],
      stem: 'In paragraph 2, the word **drifted** means—',
      choices: [
        'floated gently across the water',
        ['sank quickly to the bottom', 'Drifted means staying afloat and moving with water.'],
        ['flew high into the clouds', 'The leaf was in the water, not flying.'],
        ['ran across the dirt road', 'The leaf moved in the river.'],
      ],
      answer: 0,
      explain: 'The leaf was on the river water, so drifted means floating gently to the bank.',
    }),
    mcq({
      standard: 'rla:1.8D', cites: [1],
      stem: 'Where do the events in this story take place?',
      choices: [
        ['Inside a cozy farmhouse kitchen.', 'The setting is outdoors by a river.'],
        'Near a clear river and a tree.',
        ['At a busy city playground.', 'The characters are an ant and dove by a natural river.'],
        ['On top of a snowy mountain.', 'The story happens by a warm river.'],
      ],
      answer: 1,
      explain: 'The story takes place by a clear river where the dove perches in a nearby tree.',
    }),
  ],
});
