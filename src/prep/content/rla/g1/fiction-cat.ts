// Grade 1 fiction reading set: The Red Ball

import { makeSet, mcq } from '../author.ts';
import type { ReadingSet } from '../../types.ts';

export const G1_SET_FICTION_CAT: ReadingSet = makeSet({
  id: 'g1-fiction-cat',
  grade: 1,
  kind: 'reading',
  title: 'The Red Ball',
  intro: 'Read the story and choose the best answer to each question.',
  passages: [
    {
      id: 'g1-pass-cat',
      title: 'The Red Ball',
      genre: 'fiction',
      blocks: [
        {
          kind: 'p',
          text: 'Sam the kitten loved playing in the sunny backyard. One afternoon, he found a shiny red rubber ball resting on the green grass. He tapped the ball with his tiny white paw.',
        },
        {
          kind: 'p',
          text: 'The red ball rolled down the sloping garden path! Sam ran after it as fast as his little legs could carry him. The ball rolled under a wooden bench and stopped. Sam squeezed under the bench and patted his favorite ball happily.',
        },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:1.8C', cites: [2],
      stem: 'What happens after the ball rolls down the garden path?',
      choices: [
        ['The ball splashes into a deep pond.', 'The ball rolls under a bench, not into a pond.'],
        'Sam runs after it and finds it under a wooden bench.',
        ['A big dog takes the ball away.', 'No dog appears in this story.'],
        ['Sam goes inside the house to sleep.', 'Sam chases the ball and catches it.'],
      ],
      answer: 1,
      explain: 'Paragraph 2 tells us that Sam ran after the rolling ball and found it under a wooden bench.',
    }),
    mcq({
      standard: 'rla:1.8B', cites: [2],
      stem: 'Why does Sam run as fast as he can?',
      choices: [
        'He wants to catch the rolling red ball.',
        ['He is scared of the buzzing bees.', 'Sam is excited to play, not scared.'],
        ['He hears his mother calling him for dinner.', 'No mother calls him in the story.'],
        ['He is looking for a warm place to hide.', 'He is chasing his toy ball.'],
      ],
      answer: 0,
      explain: 'Paragraph 2 says Sam ran fast because he was chasing after the red ball.',
    }),
    mcq({
      standard: 'rla:1.8D', cites: [1],
      stem: 'Where does this story take place?',
      choices: [
        ['Inside a classroom at school.', 'The setting is outdoors in a backyard.'],
        ['On a sandy ocean beach.', 'The story takes place on green grass, not a beach.'],
        'In a sunny backyard garden.',
        ['Inside a noisy pet store.', 'The story takes place at home in the yard.'],
      ],
      answer: 2,
      explain: 'Paragraph 1 states that Sam loved playing in the sunny backyard.',
    }),
    mcq({
      standard: 'rla:1.3B', cites: [1],
      stem: 'In paragraph 1, the word **tapped** means—',
      choices: [
        ['bit with sharp teeth', 'Tapped describes using a paw, not biting.'],
        ['threw high into the air', 'Sam is on the ground touching the ball.'],
        ['washed with clean water', 'Tapped means touching lightly.'],
        'hit very gently with a paw',
      ],
      answer: 3,
      explain: 'Sam tapped the ball with his paw, which means touching or hitting it gently.',
    }),
    mcq({
      standard: 'rla:1.6C', cites: [2],
      stem: 'What will Sam most likely do next?',
      choices: [
        ['Fly away into the sky.', 'Kittens cannot fly.'],
        'Keep playing happily with his red ball.',
        ['Swim across a wide lake.', 'The kitten is under a garden bench.'],
        ['Plant flower seeds in the dirt.', 'Kittens do not plant gardens.'],
      ],
      answer: 1,
      explain: 'At the end of paragraph 2, Sam pats the ball happily, showing he will keep playing with it.',
    }),
    mcq({
      standard: 'rla:1.10E', cites: [1],
      stem: 'Who is telling this story?',
      choices: [
        'A narrator telling about Sam the kitten.',
        ['Sam the kitten using the word "I".', 'The story does not use "I"; it is told by an outside narrator.'],
        ['A child named Leo who owns the kitten.', 'Leo is not mentioned in the story.'],
        ['A bird sitting in a tall tree.', 'The narrator is telling the story, not a bird.'],
      ],
      answer: 0,
      explain: 'The story uses third-person words like "he" and "Sam," meaning an outside narrator is telling it.',
    }),
    mcq({
      standard: 'rla:1.7C', cites: [2],
      stem: 'Which sentence shows that Sam likes the ball?',
      choices: [
        '"Sam squeezed under the bench and patted his favorite ball happily."',
        ['"The ball rolled under a wooden bench and stopped."', 'This tells where the ball went, not how Sam feels.'],
        ['"He found a shiny red rubber ball resting on the green grass."', 'This tells how Sam found the ball.'],
        ['"Sam the kitten loved playing in the sunny backyard."', 'This is about the backyard, not the ball.'],
      ],
      answer: 0,
      explain: 'The words "favorite" and "happily" show that Sam likes the ball.',
    }),
    mcq({
      standard: 'rla:1.7D',
      stem: 'Which tells what happens in the story, in the right order?',
      choices: [
        'Sam finds a ball. The ball rolls away. Sam gets the ball.',
        ['Sam gets the ball. Sam finds a ball. The ball rolls away.', 'These events are out of order.'],
        ['The ball rolls away. Sam finds a ball. Sam goes to sleep.', 'Sam does not go to sleep in the story.'],
        ['Sam finds a bench. Sam sits on the grass. Sam runs home.', 'This is not what happens.'],
      ],
      answer: 0,
      explain: 'First Sam finds the ball. Next it rolls away. Last Sam gets it under the bench.',
    }),
  ],
});
