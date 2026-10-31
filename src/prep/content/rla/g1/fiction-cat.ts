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
        ['The ball rolls into a deep garden pond.', 'The ball rolls under a bench, not into a pond.'],
        'Sam catches it under a wooden bench.',
        ['A big brown dog runs off with the ball.', 'No dog appears in this story.'],
        ['Sam walks inside the house for a nap.', 'Sam chases the ball and catches it.'],
      ],
      answer: 1,
      explain: 'Paragraph 2 tells us that Sam ran after the rolling ball and found it under a wooden bench.',
    }),
    mcq({
      standard: 'rla:1.8B', cites: [2],
      stem: 'Why does Sam run as fast as he can?',
      choices: [
        'To catch the rolling red ball.',
        ['To hide from a barking neighborhood dog.', 'Sam is excited to play, not scared.'],
        ['To find shelter before the rain falls.', 'No rain is mentioned in the story.'],
        ['To follow his mother into the garden.', 'He is chasing his toy ball.'],
      ],
      answer: 0,
      explain: 'Paragraph 2 says Sam ran fast because he was chasing after the red ball.',
    }),
    mcq({
      standard: 'rla:1.8D', cites: [1],
      stem: 'Where does this story take place?',
      choices: [
        ['Inside a big classroom at school.', 'The setting is outdoors in a backyard.'],
        ['On a sandy playground by the park.', 'The story takes place on green grass, not a playground.'],
        'In a sunny backyard garden.',
        ['Next to a noisy road near town.', 'The story takes place at home in the yard.'],
      ],
      answer: 2,
      explain: 'Paragraph 1 states that Sam loved playing in the sunny backyard.',
    }),
    mcq({
      standard: 'rla:1.3B', cites: [1],
      stem: 'In paragraph 1, the word **tapped** means—',
      choices: [
        ['bit with sharp teeth', 'Tapped describes using a paw, not biting.'],
        ['tossed high into the branches', 'Sam is on the ground touching the ball.'],
        ['washed with clean river water', 'Tapped means touching lightly.'],
        'touched softly with a paw',
      ],
      answer: 3,
      explain: 'Sam tapped the ball with his paw, which means touching or hitting it gently.',
    }),
    mcq({
      standard: 'rla:1.6C', cites: [2],
      stem: 'What will Sam most likely do next?',
      choices: [
        ['Fly away into the sky.', 'Kittens cannot fly.'],
        'Play with his red ball.',
        ['Curl up in the grass for a long nap.', 'The kitten is under a garden bench, happily patting his ball.'],
        ['Run back inside the house for lunch.', 'Sam wants to play with his toy.'],
      ],
      answer: 1,
      explain: 'At the end of paragraph 2, Sam pats the ball happily, showing he will keep playing with it.',
    }),
    mcq({
      standard: 'rla:1.10E', cites: [1],
      stem: 'Who is telling this story?',
      choices: [
        'A narrator who watches Sam.',
        ['Sam the kitten telling his own story.', 'The story does not use "I"; it is told by an outside narrator.'],
        ['A young boy who takes care of the kitten.', 'No boy is mentioned in the story.'],
        ['A friendly bird resting in a garden tree.', 'The narrator is telling the story, not a bird.'],
      ],
      answer: 0,
      explain: 'The story uses third-person words like "he" and "Sam," meaning an outside narrator is telling it.',
    }),
    mcq({
      standard: 'rla:1.7C', cites: [2],
      stem: 'Which sentence shows that Sam likes the ball?',
      choices: [
        '"Sam squeezed under the bench and patted his favorite ball happily."',
        ['"One afternoon, he found a shiny red rubber ball resting on the green grass."', 'This tells how Sam found the ball.'],
        ['"The ball rolled under a wooden bench and stopped."', 'This tells where the ball went, not how Sam feels.'],
        ['"Sam ran after it as fast as his little legs could carry him."', 'This tells that Sam chased the ball.'],
      ],
      answer: 0,
      explain: 'The words "favorite" and "happily" show that Sam likes the ball.',
    }),
    mcq({
      standard: 'rla:1.7D',
      stem: 'Which tells what happens in the story, in the right order?',
      choices: [
        'Sam finds a ball. The ball rolls away. Sam gets the ball.',
        ['The ball rolls away. Sam finds a ball. Sam catches the ball.', 'These events are out of order.'],
        ['Sam catches the ball. Sam finds a ball. The ball rolls away.', 'Sam finds the ball first.'],
        ['Sam finds a bench. The ball rolls away. Sam goes inside.', 'This is not what happens.'],
      ],
      answer: 0,
      explain: 'First Sam finds the ball. Next it rolls away. Last Sam gets it under the bench.',
    }),
  ],
});
