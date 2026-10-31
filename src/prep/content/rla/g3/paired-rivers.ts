// Grade 3 paired passages:
// Passage 1: "The Mighty Rio Grande" (informational, ~155 words, range 150-390).
// Passage 2: "Canoeing through Santa Elena Canyon" (fiction, ~164 words, range 150-390).
// Questions cover P1 central idea (3.9D.i), P2 plot/setting (3.8D, 3.8C),
// paired connections (3.6E), paired synthesis (3.6H), and text evidence (3.7C).

import { makeSet, mcq, msq } from '../author.ts';

export const PAIRED_RIVERS = makeSet({
  id: 'g3-paired-rivers',
  grade: 3,
  kind: 'reading',
  title: 'Texas River Wonders',
  intro: 'Read the two selections and choose the best answer to each question.',
  passages: [
    {
      id: 'g3-paired-rivers-p1',
      title: 'The Mighty Rio Grande',
      genre: 'informational',
      blocks: [
        { kind: 'p', text: 'The Rio Grande is a famous river. It starts in the mountains of Colorado. Then it flows south to the Gulf of Mexico. For over one thousand miles, this river marks the border between Texas and Mexico. It is a big river. Many towns use its water. People depend on it every day.' },
        { kind: 'p', text: 'In West Texas, the river cuts through the desert at Big Bend. Over many years, moving water carved through the rock. It formed Santa Elena Canyon. Here, rock walls rise 1,500 feet above the river. The canyon walls stand like giant towers above the green water.' },
        { kind: 'p', text: 'The river helps wild animals in the dry desert. Bighorn sheep drink from shallow water. Green birds build nests in the willow trees along the banks. Farmers also use river water to grow sweet oranges, onions, and melons in the valley fields. The river gives water to animals and crops. It gives life to the desert.' },
      ],
    },
    {
      id: 'g3-paired-rivers-p2',
      title: 'Canoeing through Santa Elena Canyon',
      genre: 'fiction',
      blocks: [
        { kind: 'p', text: 'Carlos held his paddle tightly. The red canoe glided into Santa Elena Canyon. Next to him, his father dipped his paddle into the calm water of the Rio Grande. Bright sunlight faded behind tall rock walls. The cliffs rose so high that they seemed to touch the sky. Cool air filled the canyon.' },
        { kind: 'p', text: '"Look up, Carlos," Papa said with a smile. He pointed toward the blue sky high above their heads. The sound of their paddles echoed off the stone walls. It sounded like gentle drums. Carlos listened to the soft splashes in the cool canyon shade.' },
        { kind: 'p', text: 'Suddenly, a bighorn sheep with curled horns stood on a rock ledge fifty feet above them. The sheep looked down before hopping away into the cliffs. Carlos felt small beneath the giant stone walls, but his heart was full of wonder. He smiled as he dipped his paddle into the green river. He knew he would always remember this special day with his father in West Texas.' },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:3.9D.i', cites: [1, 3],
      stem: 'What is the central idea of "The Mighty Rio Grande"?',
      choices: [
        ['The Rio Grande is only used by commercial fishing boats in Colorado.', 'The passage describes its role in Texas for wildlife and agriculture.'],
        'The Rio Grande is vital for animals and farming.',
        ['Big Bend National Park gets covered in heavy snow every single summer.', 'Big Bend is located in the desert.'],
        ['Sweet oranges are the only fruit grown in the entire state of Texas.', 'The passage lists melons and onions as well.'],
      ],
      answer: 1,
      explain: 'Passage 1 explains that the Rio Grande is an essential river that provides water for desert animals, plants, and farm crops.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [2],
      stem: 'Which quotation from "The Mighty Rio Grande" shows the height of the canyon walls?',
      choices: [
        '"Here, rock walls rise 1,500 feet above the river."',
        ['"For over one thousand miles, this river marks the border between Texas and Mexico."', 'This sentence describes the river\'s length in paragraph 1.'],
        ['"Farmers also use river water to grow sweet oranges, onions, and melons in the valley fields."', 'This describes agriculture in paragraph 3.'],
        ['"The canyon walls stand like giant towers above the green water."', 'This is a description, but does not give the height measurement.'],
      ],
      answer: 0,
      explain: 'The statement that rock walls rise 1,500 feet above the river gives the exact height measurement of the canyon walls.',
    }),
    mcq({
      passage: 1,
      standard: 'rla:3.8D', cites: [1, 2],
      stem: 'In "Canoeing through Santa Elena Canyon," how does the setting influence Carlos?',
      choices: [
        ['Busy city noise along the river makes Carlos feel annoyed and tired.', 'The setting is a peaceful natural canyon.'],
        ['Freezing snow makes Carlos wish he had stayed warm inside his house.', 'The weather is calm and pleasant.'],
        ['Shallow mud traps the red canoe so Carlos cannot paddle any farther.', 'The canoe glides smoothly through the water.'],
        'The giant canyon walls fill Carlos with wonder.',
      ],
      answer: 3,
      explain: 'Paragraph 1 and 3 describe the towering rock cliffs, which make Carlos feel small yet filled with quiet wonder.',
    }),
    mcq({
      passage: 1,
      standard: 'rla:3.8C', cites: [3],
      stem: 'What exciting moment happens while Carlos paddles through the canyon?',
      choices: [
        ['A sudden rainstorm overturns the red canoe in the water.', 'The water is calm and the canoe glides safely.'],
        ['Carlos drops his wooden paddle into the deep river.', 'Carlos holds his paddle tightly and paddles successfully.'],
        'A bighorn sheep appears on a rock ledge.',
        ['They discover an old treasure chest along the river.', 'No treasure chest appears in the story.'],
      ],
      answer: 2,
      explain: 'In paragraph 3, a desert bighorn sheep appears on a rock ledge above them and looks down before hopping away.',
    }),
    mcq({
      standard: 'rla:3.6E',
      stem: 'How does Selection 2 connect to Selection 1?',
      choices: [
        ['Selection 2 shows that the Rio Grande dried up completely years ago.', 'Selection 2 shows Carlos canoeing on the flowing river.'],
        'Selection 2 shows a boy seeing the canyon in person.',
        ['Selection 2 explains how farmers ship sweet oranges across Texas.', 'Selection 2 is about canoeing through a canyon.'],
        ['Both selections give step-by-step directions for making a paddle.', 'Neither selection gives boat-building instructions.'],
      ],
      answer: 1,
      explain: 'Selection 1 provides facts about Santa Elena Canyon, while Selection 2 shows a boy experiencing those canyon walls and wildlife firsthand.',
    }),
    mcq({
      standard: 'rla:3.6H',
      stem: 'What theme is shared by both selections?',
      choices: [
        'Texas river landscapes offer wonder and natural beauty.',
        ['Canoeing down desert rivers is too dangerous for young children.', 'The canoe trip in Selection 2 is calm and inspiring.'],
        ['Natural rivers should be covered with wide concrete highways.', 'Both texts celebrate the natural river environment.'],
        ['All rocky canyons should be cleared away to make new farm fields.', 'Neither text suggests removing canyons.'],
      ],
      answer: 0,
      explain: 'Both selections celebrate the natural beauty, wildlife, and wonder of the Rio Grande and its desert canyon environment.',
    }),
    msq({
      standard: 'rla:3.6H',
      stem: 'Based on **both** selections, which **two** statements are true about Santa Elena Canyon?',
      choices: [
        'Moving water carved the canyon over time.',
        'Wild animals like bighorn sheep live there.',
        ['The canyon is located in downtown Houston.', 'It is located in Far West Texas at Big Bend.'],
        ['Boats are not allowed in the canyon.', 'Carlos and his father canoe through the canyon in Selection 2.'],
        ['The canyon walls are made of iron and steel.', 'Both passages state the cliffs are rock.'],
      ],
      answers: [0, 1],
      explain: 'Both passages highlight that the Rio Grande carved Santa Elena Canyon through rock and that bighorn sheep inhabit the cliffs.',
    }),
  ],
});
