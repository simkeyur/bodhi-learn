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
        ['Mateo drops his spool of string in the grass, but Sofia helps him find and untangle it.', 'Mateo untangles string in paragraph 1, but the string is never lost in the yard.'],
        'Mateo is eager to launch the kite right away, but Abuelo explains why they must attach a tail first.',
        ['The spring wind suddenly dies down, so Mateo and Sofia decide to wait until Sunday morning.', 'The wind continues blowing and carries the kite high into the sky in paragraph 5.'],
        ['The yellow paper rips along the corners, so Abuelo suggests making a different kind of toy out of pine sticks.', 'The paper is taped securely and does not tear during construction.'],
      ],
      answer: 1,
      explain: 'Mateo wants to fly the kite before it has a tail, but Abuelo explains that adding a ribbon tail will keep it balanced.',
    }),
    mcq({
      standard: 'rla:3.8B', cites: [2, 4],
      stem: 'How does Abuelo Tomas help Mateo throughout the story?',
      choices: [
        ['He purchases a completed diamond kite from a festival shop in town.', 'Abuelo brings supplies from home to build a homemade kite rather than buying one.'],
        ['He encourages Mateo to leave the project outside and wait for Sofia.', 'Abuelo works directly with Mateo on the porch rather than having him stop working.'],
        'He guides Mateo step by step in constructing and balancing the kite.',
        ['He races ahead of Mateo to see whose kite will climb higher in the air.', 'Abuelo patiently advises Mateo instead of trying to fly a separate kite.'],
      ],
      answer: 2,
      explain: 'Abuelo shows Mateo how to tie the wooden cross and teaches him that a ribbon tail provides balance.',
    }),
    mcq({
      standard: 'rla:3.8D', cites: [1, 5],
      stem: 'How does the setting influence the events in the story?',
      choices: [
        'The spring breeze across the open yard provides the wind needed to lift the kite.',
        ['The thick branches of tall oak trees in the yard trap the kite before it can rise into the sky.', 'Paragraph 5 explains that the kite soared high above the trees rather than getting caught.'],
        ['A sudden rainfall forces the family to carry their supplies back inside.', 'The weather remains dry and breezy with gentle spring gusts.'],
        ['A crowded street festival distracts Mateo from finishing his project.', 'Mateo builds the kite in his yard at home in preparation for the festival.'],
      ],
      answer: 0,
      explain: 'The gentle spring wind in Kerrville lifts the kite into the sky above the green hills.',
    }),
    mcq({
      standard: 'rla:3.8A',
      stem: 'Which statement best expresses the theme of the story?',
      choices: [
        ['Homemade toys are always more expensive to make than store-bought crafts.', 'The story does not discuss the cost of craft supplies.'],
        'Taking time to listen to wise guidance helps a person achieve success.',
        ['Flying kites is only enjoyable when you do everything without adult help.', 'Mateo\'s kite succeeds specifically because he accepts his grandfather\'s guidance.'],
        ['Outdoor projects should only be attempted when there is no wind blowing.', 'Kites require moving wind to fly through the air.'],
      ],
      answer: 1,
      explain: 'Mateo succeeds in flying his kite because he pauses and listens to his grandfather\'s advice about adding a tail.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4, 5],
      stem: 'What can the reader infer about Mateo in paragraph 5?',
      choices: [
        ['He is frustrated that Abuelo made him wait instead of running immediately.', 'Mateo listens willingly and rejoices when the kite soars high into the air.'],
        'He values his grandfather\'s experience and is glad he paused to add the tail.',
        ['He thinks flying kites is too difficult and decides not to attend the festival.', 'Watching the kite soar fills Mateo and Sofia with happiness rather than frustration.'],
        ['He wishes he had built a larger kite with more strings and ribbons.', 'Mateo is pleased with the kite\'s performance and Sofia claps with excitement.'],
      ],
      answer: 1,
      explain: 'Mateo stops running, listens respectfully, and helps Abuelo tie on the tail, showing he respects his grandfather\'s guidance.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [2],
      stem: 'Which quotation from paragraph 2 shows that Abuelo Tomas wants the kite to be strong?',
      choices: [
        ['"Mateo had promised his younger sister Sofia that they would fly a bright kite high over the green hills."', 'This sentence appears in paragraph 1 and explains Mateo\'s promise to his sister.'],
        ['"When the wind blows hard, the kite will spin around and crash into the dirt."', 'This warning is spoken by Abuelo in paragraph 4 about the need for a tail.'],
        ['"Sofia clapped her hands with joy as the kite flew high above the oak trees."', 'This description appears in paragraph 5 after the kite launches successfully.'],
        '"He showed Mateo how to tie the two sticks into a sturdy cross."',
      ],
      answer: 3,
      explain: 'Tying the sticks into a "sturdy cross" shows Abuelo\'s concern for building a strong, durable frame.',
    }),
    mcq({
      standard: 'rla:3.6C', cites: [1, 2],
      stem: 'Based on paragraphs 1–2, what can the reader predict about the rest of the story?',
      choices: [
        ['Mateo will give up on the project and ask Sofia to build a toy instead.', 'Mateo made a promise to Sofia and actively works with Abuelo to finish the kite.'],
        ['Abuelo will take the kite to the festival alone while Mateo stays home.', 'Abuelo supports Mateo\'s efforts on the porch so they can enjoy flying the kite together.'],
        'Mateo and his grandfather will work together to complete the kite.',
        ['The sticks will break before Mateo can attach any paper or string.', 'Paragraph 2 shows the sticks being tied into a sturdy frame that holds together.'],
      ],
      answer: 2,
      explain: 'Paragraphs 1 and 2 show Mateo with materials and Abuelo bringing supplies to help him build the kite.',
    }),
  ],
});
