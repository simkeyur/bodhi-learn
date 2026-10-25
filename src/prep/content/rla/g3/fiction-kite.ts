// Grade 3 fiction: Mateo and his grandfather building a Texas diamond kite.
// Word count: ~300 words (range 250-650).
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
      { kind: 'p', text: 'Mateo sat on the wooden porch steps in Kerrville, holding two thin pine sticks and a ball of tangled white string. A gentle spring wind rustled through the tall live oak trees, making the leaves whisper softly. Saturday afternoon was the annual Hill Country Kite Festival, and Mateo had promised his younger sister Sofia that they would fly the highest kite on the entire hillside.' },
      { kind: 'p', text: 'His grandfather, Abuelo Tomas, walked outside carrying a pair of scissors, a roll of shiny yellow paper, and several colorful cloth ribbons. "A great kite needs strong bones and steady balance," Abuelo said with a warm smile. He showed Mateo how to lash the two pine sticks together to form a sturdy cross. Next, they stretched the bright yellow paper tightly over the wooden frame, taping the edges carefully so no air could tear the corners.' },
      { kind: 'p', text: 'Mateo tied a long spool of string to the kite\'s center. "It is ready to fly!" he shouted eagerly, starting to run toward the pasture.' },
      { kind: 'p', text: '"Wait, Mateo," Abuelo called out calmly, holding up a long braided tail made of purple and red fabric ribbons. "Without a tail, a kite has no rudder. When strong wind pushes against it, it will spin out of control and crash into the dirt."' },
      { kind: 'p', text: 'Mateo paused and listened to his grandfather. Together, they tied the fluttering ribbon tail to the bottom tip of the diamond kite. When a fresh gust of afternoon wind swept up the grassy slope, Mateo lifted the kite above his head and let go. The yellow diamond leaped into the sky like a bright yellow bird, soaring steadily above the green hills while Sofia clapped her hands with delight.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.8C', cites: [3, 4, 5],
      stem: 'What is the main conflict in the story, and how is it resolved?',
      choices: [
        ['Mateo loses the spool of string in the grass, but Sofia finds it.', 'The string is never lost.'],
        'Mateo rushes to launch the kite before it is balanced, but Abuelo shows him that adding a ribbon tail prevents crashes.',
        ['The wind stops blowing completely, so they have to postpone the flight.', 'The wind blows steadily throughout the afternoon.'],
        ['The yellow paper tears in half, so they build a wooden airplane instead.', 'The kite paper does not tear.'],
      ],
      answer: 1,
      explain: 'Mateo is eager to launch immediately, but Abuelo explains that without a tail the kite will spin out of control. Adding the tail solves the problem and lets the kite fly steadily.',
    }),
    mcq({
      standard: 'rla:3.8B', cites: [2, 4],
      stem: 'How does Abuelo Tomas help Mateo throughout the story?',
      choices: [
        ['He tells Mateo to buy a plastic kite at the store instead.', 'Abuelo helps Mateo build a handmade kite from scratch.'],
        ['He orders Mateo to stay indoors and clean the porch.', 'Abuelo spends time outside teaching Mateo patiently.'],
        'He patiently shares his knowledge about kite balance and helps Mateo construct a stable kite.',
        ['He competes against Mateo to see whose kite flies higher.', 'Abuelo cooperates with Mateo rather than competing.'],
      ],
      answer: 2,
      explain: 'Abuelo provides materials, explains how to lash the frame, and teaches Mateo why a tail is essential for balance.',
    }),
    mcq({
      standard: 'rla:3.8D', cites: [1, 5],
      stem: 'How does the setting influence the events in the story?',
      choices: [
        'The breezy Texas Hill Country provides the open space and steady wind needed to lift the kite into the sky.',
        ['A heavy thunderstorm forces the family to cancel their plans.', 'The weather is described as a pleasant spring afternoon.'],
        ['A dense dark cave prevents the children from seeing the kite.', 'The story takes place outdoors on a grassy hillside.'],
        ['Crowded city traffic blocks Mateo from running down the sidewalk.', 'The setting is a rural pasture with oak trees.'],
      ],
      answer: 0,
      explain: 'Paragraphs 1 and 5 highlight the gentle spring wind and grassy slopes of the Hill Country, which provide the breeze necessary to fly the kite.',
    }),
    mcq({
      standard: 'rla:3.8A',
      stem: 'Which statement best expresses the central theme of the story?',
      choices: [
        ['Older family members rarely understand how toys work.', 'Abuelo understands kite mechanics perfectly.'],
        'Listening to guidance from experienced family members can help you succeed.',
        ['Building things by hand is a waste of valuable time.', 'Mateo and his family take pride and joy in their handmade kite.'],
        ['Kites fly best on days with no wind at all.', 'Wind is required to lift kites.'],
      ],
      answer: 1,
      explain: 'By listening to Abuelo\'s advice about adding a rudder tail, Mateo prevents his kite from crashing and achieves a successful flight.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4, 5],
      stem: 'What can the reader infer about Mateo based on paragraph 5?',
      choices: [
        ['He is angry that Abuelo interrupted his running.', 'Mateo listens carefully and works together with Abuelo.'],
        'He values his grandfather\'s advice and is willing to learn from him.',
        ['He decides he never wants to fly kites again.', 'Mateo launches the kite happily.'],
        ['He gives the kite to a neighbor boy.', 'Mateo flies the kite for his sister Sofia.'],
      ],
      answer: 1,
      explain: 'Mateo pauses, listens respectfully to Abuelo, and helps tie the ribbons, demonstrating that he respects and values his grandfather\'s knowledge.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [2],
      stem: 'Which sentence from paragraph 2 shows that Abuelo Tomas wants the kite to be durable?',
      choices: [
        '"He showed Mateo how to lash the two pine sticks together to form a sturdy cross."',
        ['"Abuelo Tomas walked outside carrying a pair of scissors..."', 'This merely lists the items Abuelo carried.'],
        ['"Saturday afternoon was the annual Hill Country Kite Festival..."', 'This describes the festival schedule from paragraph 1.'],
        ['"Sofia clapped her hands with delight."', 'This describes Sofia\'s reaction in paragraph 5.'],
      ],
      answer: 0,
      explain: 'Lashing the pine sticks to form a "sturdy cross" and taping corners so no air tears them demonstrates building a durable structure.',
    }),
    mcq({
      standard: 'rla:3.6C', cites: [1, 2],
      stem: 'Based on the title and paragraphs 1–2, what prediction can the reader reasonably make about the story?',
      choices: [
        ['Mateo and his grandfather will abandon the kite to go fishing.', 'They are actively assembling materials to build a kite.'],
        ['A blizzard will blanket the hills in snow.', 'Paragraph 1 describes a gentle spring breeze.'],
        'Mateo and Abuelo will work together to build and fly a successful kite.',
        ['Sofia will tear the yellow paper into tiny pieces.', 'Sofia watches and supports her brother.'],
      ],
      answer: 2,
      explain: 'Paragraphs 1 and 2 establish that Mateo promised to fly a kite and that Abuelo brings materials and know-how, supporting the prediction that they will cooperate to build and fly it.',
    }),
  ],
});
