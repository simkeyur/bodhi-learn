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
        ['The Rio Grande flows only through the high, snowy mountains of Colorado.', 'The passage explains that the river flows south to Texas and forms the border with Mexico.'],
        'The Rio Grande is an essential river that provides life and water for desert wildlife, communities, and crops.',
        ['Santa Elena Canyon was built by Texas construction workers to store irrigation water for farms.', 'The canyon was carved naturally by moving river water over time rather than built by workers.'],
        ['Farmers along the Texas border only use the river to transport crates of sweet oranges by boat.', 'Farmers use the water to irrigate oranges, onions, and melons, not just for boat shipping.'],
      ],
      answer: 1,
      explain: 'Passage 1 explains that the Rio Grande is an essential river that provides water for desert animals, plants, and farm crops.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [2],
      stem: 'Which quotation from "The Mighty Rio Grande" states the exact height of the canyon walls?',
      choices: [
        '"Here, rock walls rise 1,500 feet above the river."',
        ['"For over one thousand miles, this river marks the border between Texas and Mexico."', 'This sentence from paragraph 1 gives the river\'s border length rather than canyon wall height.'],
        ['"Farmers also use river water to grow sweet oranges, onions, and melons in the valley fields."', 'This sentence from paragraph 3 describes crop irrigation rather than physical canyon measurements.'],
        ['"The canyon walls stand like giant towers above the green water."', 'This sentence uses a descriptive comparison rather than giving the specific height measurement.'],
      ],
      answer: 0,
      explain: 'The statement that rock walls rise 1,500 feet above the river gives the exact height measurement of the canyon walls.',
    }),
    mcq({
      passage: 1,
      standard: 'rla:3.8D', cites: [1, 2],
      stem: 'In "Canoeing through Santa Elena Canyon," how does the setting affect Carlos?',
      choices: [
        ['The swift river rapids frighten Carlos and make him want to turn back immediately.', 'The water is calm and Carlos dips his paddle with confidence alongside his father.'],
        ['The scorching desert heat makes Carlos too exhausted to paddle the red canoe.', 'The text notes that cool air and refreshing shade fill the canyon between the tall walls.'],
        ['The darkness inside the canyon makes Carlos worry that they have lost their way.', 'Carlos admires the blue sky above and feels wonder rather than worry about getting lost.'],
        'The towering stone cliffs and echoing water fill Carlos with a deep sense of quiet wonder.',
      ],
      answer: 3,
      explain: 'Paragraph 1 and 3 describe the towering rock cliffs, which make Carlos feel small yet filled with quiet wonder.',
    }),
    mcq({
      passage: 1,
      standard: 'rla:3.8C', cites: [3],
      stem: 'What memorable event occurs while Carlos and his father are paddling through the canyon?',
      choices: [
        ['Their red canoe bumps into a submerged boulder and spins in circles in the current.', 'The canoe glides smoothly without hitting rocks or spinning in the current.'],
        'A desert bighorn sheep appears on a high rock ledge above the water before hopping into the cliffs.',
        ['A flock of green water birds lands on the front edge of Carlos\'s paddle.', 'Green birds nesting in willows are mentioned in Selection 1, not in Carlos\'s canoe scene.'],
        ['Papa accidentally drops his wooden paddle into the deep green water.', 'Papa keeps hold of his paddle and points out the view above the cliffs to Carlos.'],
      ],
      answer: 1,
      explain: 'In paragraph 3, a desert bighorn sheep appears on a rock ledge above them and looks down before hopping away.',
    }),
    mcq({
      standard: 'rla:3.6E',
      stem: 'How does Selection 2 connect to the ideas presented in Selection 1?',
      choices: [
        ['Selection 2 explains how farmers built irrigation canals to carry water from the Rio Grande to valley fields.', 'Selection 2 focuses on a personal recreational trip through Santa Elena Canyon, not farm irrigation.'],
        'Selection 2 provides a personal story of a child experiencing the canyon and wildlife described in Selection 1.',
        ['Selection 2 proves that the Rio Grande is too shallow for wild bighorn sheep to find drinking water.', 'Selection 2 shows a bighorn sheep thriving on the cliffs above the flowing river.'],
        ['Selection 2 gives step-by-step instructions for building a wooden canoe and carving paddles.', 'Neither passage explains how to construct canoes or carve wooden equipment.'],
      ],
      answer: 1,
      explain: 'Selection 1 provides facts about Santa Elena Canyon, while Selection 2 shows a boy experiencing those canyon walls and wildlife firsthand.',
    }),
    mcq({
      standard: 'rla:3.6H',
      stem: 'Which idea is supported by both selections?',
      choices: [
        'The Rio Grande and Santa Elena Canyon are remarkable natural treasures of the Texas landscape.',
        ['Canoeing down desert rivers is the best way for field scientists to count endangered canyon wildlife.', 'The story portrays a family outing rather than a scientific wildlife census.'],
        ['The waters of the Rio Grande are too swift for wild animals to drink safely.', 'Selection 1 clearly notes that bighorn sheep drink from the shallow water of the river.'],
        ['Desert canyons are completely dry and lack any plant or animal life.', 'Both selections describe vibrant life, including sheep, birds, willows, and flowing water.'],
      ],
      answer: 0,
      explain: 'Both selections celebrate the natural beauty, wildlife, and wonder of the Rio Grande and its desert canyon environment.',
    }),
    msq({
      standard: 'rla:3.6H',
      stem: 'Based on **both** selections, which **two** statements are true about Santa Elena Canyon?',
      choices: [
        'Flowing river water carved the deep canyon through rock over many years.',
        'Wild creatures such as bighorn sheep can be seen along the rocky ledges.',
        ['The canyon is located along the humid Gulf Coast of Texas.', 'Santa Elena Canyon is located in Far West Texas at Big Bend, not along the Gulf Coast.'],
        ['Canoes and small boats are not permitted inside the canyon.', 'Selection 2 describes Carlos and his father canoeing through the canyon.'],
        ['The rock cliffs are too low to provide any cooling shade.', 'The cliffs rise 1,500 feet and cast extensive cooling shade over the water.'],
      ],
      answers: [0, 1],
      explain: 'Both passages highlight that the Rio Grande carved Santa Elena Canyon through rock and that bighorn sheep inhabit the cliffs.',
    }),
  ],
});
