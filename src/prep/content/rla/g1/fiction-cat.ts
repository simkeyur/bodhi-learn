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
        ['The ball bounces high into a leafy tree.', 'The ball rolls along the ground under a bench, not up into a tree.'],
        'Sam runs after it and finds it under a wooden bench.',
        ['The ball rolls back up the path to Sam.', 'The ball rolls down the path and stops under a bench.'],
        ['Sam taps the ball softly with his paw.', 'Sam taps the ball before it rolls down the path.'],
      ],
      answer: 1,
      explain: 'Paragraph 2 tells that the ball rolled under a wooden bench, and Sam ran after it and caught it.',
    }),
    mcq({
      standard: 'rla:1.8B', cites: [2],
      stem: 'Why does Sam run as fast as he can?',
      choices: [
        'To chase the rolling ball',
        ['To catch a butterfly in the green grass', 'Sam is running after his red ball, not a butterfly.'],
        ['To get out of the warm afternoon sun', 'Sam loves playing outside in the sunny yard.'],
        ['To hide under the bench from a loud noise', 'Sam crawls under the bench only because the ball rolled there.'],
      ],
      answer: 0,
      explain: 'Paragraph 2 says Sam ran fast because he was chasing after the red ball.',
    }),
    mcq({
      standard: 'rla:1.8D', cites: [1],
      stem: 'Where does this story take place?',
      choices: [
        ['Under a bed inside the house', 'Sam is playing outside on the grass, not inside the house.'],
        ['Near a swing on a school playground', 'The story takes place in a backyard with green grass and a garden path.'],
        'In a sunny backyard',
        ['Inside a big barn near the animals', 'Sam is outside in the backyard garden.'],
      ],
      answer: 2,
      explain: 'Paragraph 1 states that Sam loved playing in the sunny backyard.',
    }),
    mcq({
      standard: 'rla:1.3B', cites: [1],
      stem: 'In paragraph 1, the word **tapped** means—',
      choices: [
        ['chased after', 'Tapped tells how Sam touched the ball with his paw, not how he ran.'],
        ['chewed with teeth', 'Sam uses his paw, not his teeth.'],
        ['rolled away', 'Rolling is what the ball did after Sam tapped it.'],
        'touched gently',
      ],
      answer: 3,
      explain: 'Sam tapped the ball with his paw, which means touching it lightly.',
    }),
    mcq({
      standard: 'rla:1.6C', cites: [2],
      stem: 'What will Sam most likely do next?',
      choices: [
        ['Search the grass for another toy', 'Sam is happy patting the ball he just caught.'],
        'Keep playing with his ball under the bench',
        ['Go to sleep on the garden path', 'Sam is happily playing with his ball under the bench.'],
        ['Run back into the house for lunch', 'Sam wants to keep playing with his ball outside.'],
      ],
      answer: 1,
      explain: 'At the end of paragraph 2, Sam pats the ball happily, showing he will keep playing with it.',
    }),
    mcq({
      standard: 'rla:1.10E', cites: [1],
      stem: 'Who is telling this story?',
      choices: [
        'A narrator who is watching Sam',
        ['Sam the kitten', 'The story uses words like "he" and "Sam," not "I."'],
        ['A child playing catch with Sam in the yard', 'No child is playing with Sam in the story.'],
        ['A bird sitting in a garden tree', 'An outside narrator tells the story, not a bird.'],
      ],
      answer: 0,
      explain: 'The story uses third-person words like "he" and "Sam," meaning an outside narrator is telling it.',
    }),
    mcq({
      standard: 'rla:1.7C', cites: [2],
      stem: 'Which sentence shows that Sam likes the ball?',
      choices: [
        '"Sam squeezed under the bench and patted his favorite ball happily."',
        ['"One afternoon, he found a shiny red rubber ball resting on the green grass."', 'This tells how Sam found the ball, not how much he likes it.'],
        ['"The ball rolled under a wooden bench and stopped."', 'This describes where the ball went, not how Sam feels about it.'],
        ['"Sam ran after it as fast as his little legs could carry him."', 'This shows how fast Sam ran after the ball.'],
      ],
      answer: 0,
      explain: 'The words "favorite" and "happily" show that Sam likes the ball.',
    }),
    mcq({
      standard: 'rla:1.7D',
      stem: 'Which tells what happens in the story, in the right order?',
      choices: [
        'Sam finds a ball, chases it down the path, and gets it under the bench.',
        ['Sam chases a ball, finds it in the grass, and taps it with his paw.', 'Sam finds and taps the ball before he chases it.'],
        ['The ball rolls under a bench, Sam finds it on the grass, and he taps it.', 'The ball rolls under the bench after Sam taps it.'],
        ['Sam taps the ball, crawls under the bench, and watches the ball roll.', 'The ball rolls down the path before Sam crawls under the bench.'],
      ],
      answer: 0,
      explain: 'First Sam finds the ball. Next it rolls away. Last Sam gets it under the bench.',
    }),
  ],
});
