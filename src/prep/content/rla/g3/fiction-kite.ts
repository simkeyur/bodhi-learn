// Grade 3 fiction: Mateo and his grandfather building a Texas diamond kite.
// Word count: ~253 words (range 250-650).
// Questions cover character relationships (3.8B), plot conflict/resolution (3.8C),
// setting influence (3.8D), theme (3.8A), inference (3.6F), and text evidence (3.7C).

import { makeSet, mcq } from '../author.ts';

export const FICTION_KITE = makeSet({
  id: 'g3-fiction-kite',
  grade: 3,
  kind: 'reading',
  title: 'Catching the Hill Country Breeze',
  intro: 'Read the story and choose the best answer to each question.',
  passages: [{
    id: 'g3-fiction-kite-p',
    title: 'Catching the Hill Country Breeze',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'Mateo sat on the wooden porch steps in Kerrville. He held two thin pine sticks and a ball of tangled string. A gentle spring wind blew through the tall oak trees. Green leaves rustled softly in the yard. Saturday was the Hill Country Kite Festival. Mateo had promised his younger sister Sofia that they would fly a bright kite high over the green hills.' },
      { kind: 'p', text: 'His grandfather, Abuelo Tomas, walked outside. He carried scissors, yellow paper, and cloth ribbons. "A great kite needs strong bones," Abuelo said with a warm smile. He showed Mateo how to tie the two sticks into a sturdy cross. Then they taped the yellow paper over the sticks. They taped each corner so the paper would not tear in the wind.' },
      { kind: 'p', text: 'Mateo tied a long string to the center of the cross. "It is ready to fly!" he shouted happily. He started to run toward the open grass.' },
      { kind: 'p', text: '"Wait, Mateo," Abuelo called out gently. He held up a long tail made of purple ribbons. "Without a tail, a kite has no balance. When the wind blows hard, the kite will spin around and crash into the dirt."' },
      { kind: 'p', text: 'Mateo stopped and listened to his grandfather. Together, they tied the ribbon tail to the bottom of the kite. When a fresh gust of wind blew across the grass, Mateo lifted the kite and let go. The yellow diamond soared into the blue sky like a bird. Sofia clapped her hands with joy as the kite flew high above the oak trees.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.8C', cites: [3, 4, 5],
      stem: 'What is the main conflict in the story, and how is it resolved?',
      choices: [
        ['Mateo drops his spool of string, but Sofia finds it in the grass.', 'The string is never lost in the yard.'],
        'Mateo rushes to launch, but Abuelo adds a tail.',
        ['The spring wind stops blowing, so they have to wait until Sunday.', 'The wind blows steadily throughout the day.'],
        ['The yellow paper tears, so they decide to build a wooden toy.', 'The kite paper does not tear.'],
      ],
      answer: 1,
      explain: 'Mateo wants to fly the kite before it has a tail, but Abuelo explains that adding a ribbon tail will keep it balanced.',
    }),
    mcq({
      standard: 'rla:3.8B', cites: [2, 4],
      stem: 'How does Abuelo Tomas help Mateo throughout the story?',
      choices: [
        ['He buys a brand new toy kite from a downtown hobby store.', 'Abuelo helps Mateo build a kite from materials on hand.'],
        ['He tells Mateo to stay inside and clean up the wooden steps.', 'Abuelo works patiently with Mateo outside.'],
        'He teaches Mateo how to build and balance the kite.',
        ['He races against Mateo to see whose kite can fly highest.', 'Abuelo supports Mateo rather than competing.'],
      ],
      answer: 2,
      explain: 'Abuelo shows Mateo how to tie the wooden cross and teaches him that a ribbon tail provides balance.',
    }),
    mcq({
      standard: 'rla:3.8D', cites: [1, 5],
      stem: 'How does the setting influence the events in the story?',
      choices: [
        'The spring breeze provides the wind needed to fly the kite.',
        ['A sudden afternoon rainstorm forces the children to go inside.', 'The weather is pleasant and breezy.'],
        ['A thick forest of tall pine trees blocks all the open spaces.', 'The setting is an open yard with oak trees and grassy hills.'],
        ['Heavy traffic on city roads makes it too dangerous to run.', 'The story takes place in a peaceful Hill Country yard.'],
      ],
      answer: 0,
      explain: 'The gentle spring wind in Kerrville lifts the kite into the sky above the green hills.',
    }),
    mcq({
      standard: 'rla:3.8A',
      stem: 'Which statement best expresses the theme of the story?',
      choices: [
        ['Older relatives rarely understand how to play outdoor games.', 'Abuelo knows exactly how to build and fly a kite.'],
        'Listening to advice can help you succeed.',
        ['Building things by hand is too difficult for young children.', 'Mateo and Abuelo take pride in making the kite.'],
        ['Kites fly much better on calm afternoons with no wind at all.', 'Wind is required to keep a kite in the air.'],
      ],
      answer: 1,
      explain: 'Mateo succeeds in flying his kite because he pauses and listens to his grandfather\'s advice about adding a tail.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4, 5],
      stem: 'What can the reader infer about Mateo in paragraph 5?',
      choices: [
        ['He is upset that Abuelo stopped him from running on the grass.', 'Mateo listens carefully and works with Abuelo.'],
        'He respects his grandfather and values his help.',
        ['He decides that flying kites is too much work to enjoy.', 'Mateo launches the kite happily.'],
        ['He wants to keep the kite hidden away inside his bedroom.', 'Mateo flies the kite proudly for Sofia.'],
      ],
      answer: 1,
      explain: 'Mateo stops running, listens respectfully, and helps Abuelo tie on the tail, showing he respects his grandfather\'s guidance.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [2],
      stem: 'Which quotation from paragraph 2 shows that Abuelo Tomas wants the kite to be strong?',
      choices: [
        ['"Mateo had promised his younger sister Sofia that they would fly a bright kite high over the green hills."', 'This quotation is from paragraph 1.'],
        ['"When the wind blows hard, the kite will spin around and crash into the dirt."', 'This warning appears in paragraph 4.'],
        ['"Sofia clapped her hands with joy as the kite flew high above the oak trees."', 'This quotation appears in paragraph 5.'],
        '"He showed Mateo how to tie the two sticks into a sturdy cross."',
      ],
      answer: 3,
      explain: 'Tying the sticks into a "sturdy cross" shows Abuelo\'s concern for building a strong, durable frame.',
    }),
    mcq({
      standard: 'rla:3.6C', cites: [1, 2],
      stem: 'Based on paragraphs 1–2, what prediction can the reader make about the story?',
      choices: [
        ['Mateo and Abuelo will give up building the kite and go fishing.', 'They are actively assembling materials for the kite.'],
        ['A cold winter blizzard will suddenly cover the green hills in snow.', 'Paragraph 1 establishes that it is a gentle spring day.'],
        'Mateo and Abuelo will finish making the kite together.',
        ['Sofia will rip the yellow paper into tiny pieces on the porch.', 'Sofia is excited to watch the kite fly.'],
      ],
      answer: 2,
      explain: 'Paragraphs 1 and 2 show Mateo with materials and Abuelo bringing supplies to help him build the kite.',
    }),
  ],
});
