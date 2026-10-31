// Grade 6 paired set: The American Bison in Texas.
import { makeSet, mcq, msq, twoq } from '../author.ts';

export const PAIRED_BISON = makeSet({
  id: 'g6-paired-bison',
  grade: 6,
  kind: 'reading',
  title: 'The Great Plains Monarch',
  intro: 'Read the next two selections and choose the best answer to each question.',
  passages: [
    {
      id: 'g6-paired-bison-p1',
      title: 'The Return of the Texas Bison',
      genre: 'informational',
      blocks: [
        { kind: 'p', text: 'Long ago, thirty to sixty million bison roamed the Great Plains. These giant animals weighed up to two thousand pounds. They shaped the entire prairie. As they grazed, native grasses and wildflowers grew strong. Healthy grasslands gave shelter to prairie dogs, deer, and many nesting birds. Bison also rolled in the dust to make shallow hollows called wallows. When rain fell, these wallows caught water. The pools helped migrating birds find water during dry times. For thousands of years, bison paths crossed the open plains. Their trails connected freshwater springs and mountain passes.' },
        { kind: 'p', text: 'In the 1800s, commercial hide hunters arrived with rifles. They killed millions of bison in a few short years. Train crews and army campaigns also pushed the animals toward extinction. By 1889, fewer than one thousand bison remained in North America. The southern herd had once covered the Texas Panhandle in dark waves. In less than twenty years, nearly all of them were gone.' },
        { kind: 'p', text: 'A Texas pioneer woman named Mary Ann Goodnight helped save the southern herd. In 1878, hunters were shooting bison near her Palo Duro Canyon home. Mary Ann could not bear to watch the slaughter. She asked her husband, rancher Charles Goodnight, to rope several orphan calves wandering the canyon floor. The Goodnights fed and cared for the calves on their JA Ranch. Over time, those few calves grew into a healthy herd.' },
        { kind: 'p', text: 'In 1997, the Goodnight herd was donated to the state of Texas. The bison moved to Caprock Canyons State Park near Quitaque. Scientists from Texas A&M University tested the animals\' genes. They found something extraordinary. The Caprock bison carried ancient genetic markers not found in northern Yellowstone bison. They were the very last survivors of the historic southern plains herd.' },
        { kind: 'p', text: 'Today, the Texas State Bison Herd roams across ten thousand acres of red rock canyons and open plains. People visit from all over to watch these mighty beasts graze below the cliffs. The bison are a living link to the wild history of Texas. Their survival shows how caring people and state parks can save a rare animal from disappearing forever.' },
      ],
    },
    {
      id: 'g6-paired-bison-p2',
      title: 'Dust on the Caprock',
      genre: 'fiction',
      blocks: [
        { kind: 'p', text: 'From the wooden porch of his family\'s sod dugout, twelve-year-old Caleb watched a thick cloud of red dust billow along the southern rim of the canyon. At first, he thought it was a prairie twister spinning across the caprock. But as the ground beneath his bare feet began to hum with a rhythmic, thunderous vibration, his breath caught in his throat.' },
        { kind: 'p', text: '"Pa! Look yonder!" Caleb shouted, pointing a trembling hand toward the horizon.' },
        { kind: 'p', text: 'His father stepped out of the barn, shielding his weathered eyes with a straw hat. For a long moment, neither of them spoke. Out of the crimson haze emerged a tight vanguard of dark, shaggy silhouettes. Shaggy heads lowered against the wind, massive humps swaying in unison, fifty bison crested the ridge and poured down the rocky slope toward the canyon spring.' },
        { kind: 'p', text: 'Caleb had heard stories from old buffalo runners who stopped at the trading post, men who bragged of herds so vast a horseman could ride three days without reaching the other side. But in Caleb\'s lifetime, the prairie had fallen quiet. Most settlers spoke of the great herds as if they were ghosts belonging to an ancient, vanished world.' },
        { kind: 'p', text: 'The lead bull reached the spring pool first. He stood chest-deep in the cool water, his curved horns glinting in the late afternoon sun, steam rising from his broad flanks. Behind him, cows nudged two reddish-brown calves toward the shallows. The herd drank peacefully, oblivious to the settlers watching in awe from three hundred yards away.' },
        { kind: 'p', text: '"Are they wild, Pa?" Caleb whispered, afraid that even a whisper might dissolve the vision.' },
        { kind: 'p', text: '"They belong to Mrs. Goodnight\'s herd," his father answered quietly, resting a gentle hand on Caleb\'s shoulder. "She and Charlie caught them calves years back when the hide hunters swept through. People said Charlie was wasting good pasture on beasts that had no future. But look at them, son. That\'s the true spirit of this land, alive and unbroken."' },
        { kind: 'p', text: 'Caleb watched until the sun dipped below the rimrock, painting the canyon in streaks of amber and violet. As the herd ambled back into the shadowed draws, Caleb knew he would never forget the deep thunder that had made the earth remember its ancient past.' },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:6.8D.i', cites: [3, 4, 5],
      stem: 'What is the controlling idea of "The Return of the Texas Bison"?',
      choices: [
        'Saved by pioneer Mary Ann Goodnight, Texas bison now thrive at Caprock Canyons.',
        ['Commercial hunting in the nineteenth century improved ranching pastures across Texas.', 'Commercial hunting caused the catastrophic near-extinction of the bison.'],
        ['Bison from Yellowstone were brought to Texas in 1997 to replace lost southern herds.', 'The Caprock bison are native southern survivors, not Yellowstone transplants.'],
        ['Early bison migration routes became the foundation for modern interstate highway lanes.', 'This is a minor historical detail from paragraph 1.'],
      ],
      answer: 0,
      explain: 'The article tells how Mary Ann Goodnight saved orphan calves, leading to the protected state herd thriving at Caprock Canyons today.',
    }),
    mcq({
      standard: 'rla:6.7D', cites: [1, 3, 4], passage: 1,
      stem: 'In "Dust on the Caprock," how does the setting influence the characters\' reaction to the bison?',
      choices: [
        'Because wild herds had vanished years before, seeing live bison feels like a miracle.',
        ['The settlers are terrified that the stampeding bison will crush their wooden home.', 'The characters watch in quiet reverence rather than fear.'],
        ['Caleb\'s father loads his hunting rifle to protect the family\'s farm animals from attack.', 'Caleb\'s father admires the herd and watches peacefully.'],
        ['Caleb rushes inside the house to telephone the county sheriff for emergency assistance.', 'Pioneer homes on the caprock did not have telephones.'],
      ],
      answer: 0,
      explain: 'Because the great herds had vanished before Caleb\'s lifetime, seeing live bison makes the characters feel that a legendary world has returned.',
    }),
    twoq({
      standard: 'rla:6.5H', cites: [3], passage: 0,
      a: {
        prompt: 'Part A: How does the story "Dust on the Caprock" complement the article "The Return of the Texas Bison"?',
        choices: [
          'It shows how settlers felt when seeing the surviving Goodnight herd.',
          ['It disputes the historical facts about Mary Ann Goodnight in the article.', 'The story confirms Mary Ann Goodnight\'s role in rescuing the calves.'],
          ['It suggests Charles Goodnight raised bison only for business profit.', 'Both selections portray the Goodnights as caring conservationists.'],
          ['It explains the laboratory testing carried out at Caprock Canyons.', 'Genetic testing is explained in the article, not the story.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which statement from "Dust on the Caprock" best reflects the history in paragraph 3 of the article?',
        choices: [
          ['"At first, he thought it was a prairie twister spinning across the caprock." (paragraph 1)', 'This is Caleb\'s early guess before he recognizes the animals.'],
          ['"Shaggy heads lowered against the wind, massive humps swaying in unison, fifty bison crested the ridge and poured down the rocky slope toward the canyon spring." (paragraph 3)', 'This describes the animals descending the slope.'],
          '"They belong to Mrs. Goodnight\'s herd... She and Charlie caught them calves years back when the hide hunters swept through." (paragraph 7)',
          ['"As the herd ambled back into the shadowed draws..." (paragraph 8)', 'This describes the herd moving away at sunset.'],
        ],
        answer: 2,
      },
      explain: 'The story brings emotional life to the facts, while Caleb\'s father specifically mentions how the Goodnights caught and saved the calves during the hide hunts.',
    }),
    msq({
      standard: 'rla:6.5H', passage: 0,
      stem: 'Which **two** ideas are emphasized in **both** selections?',
      choices: [
        'The slaughter of the southern herds brought bison close to extinction.',
        ['Bison were trained by pioneer farmers to plow prairie fields.', 'Bison were wild animals, never used to pull farm plows.'],
        'Mary Ann Goodnight played a crucial role in rescuing orphaned calves.',
        ['Modern tourists must stay inside cars when visiting Caprock Canyons.', 'This modern visitor rule is not mentioned in the story.'],
        ['Bison preferred living in thick pine forests rather than grasslands.', 'Both selections place bison in open plains and canyons.'],
      ],
      answers: [0, 2],
      explain: 'Both selections highlight the devastating slaughter that nearly destroyed the bison and honor Mary Ann Goodnight for rescuing the orphan calves.',
    }),
    mcq({
      standard: 'rla:6.5E', cites: [1, 5], passage: 0,
      stem: 'In paragraph 1 of "The Return of the Texas Bison," how did bison help the prairie ecosystem?',
      choices: [
        'Their grazing aided plant growth, and their wallows held water for birds.',
        ['They created wide earthen dams that stopped rivers from flowing into the sea.', 'Beavers build dams, not bison.'],
        ['They ate all prairie grasses, clearing ground for early pioneer crops.', 'Bison grazing stimulated plant growth rather than destroying the land.'],
        ['They protected farm animals by chasing away wolves and mountain lions.', 'The text describes wild prairie ecology before settlement.'],
      ],
      answer: 0,
      explain: 'Paragraph 1 explains that grazing stimulated wildflowers and grasses, while dirt wallows collected rainwater that aided migrating birds.',
    }),
    mcq({
      standard: 'rla:6.7A', cites: [7], passage: 1,
      stem: 'In "Dust on the Caprock," what does the bison herd symbolize to Caleb\'s father?',
      choices: [
        ['An expensive nuisance that took grass away from cattle.', 'Caleb\'s father rejects the critics who called the bison a waste of pasture.'],
        'The enduring, unbroken spirit of the Texas plains.',
        ['The danger of raising a family in an isolated home.', 'The herd brings awe and wonder rather than fear.'],
        ['The triumph of human technology over the wild land.', 'The father admires the natural majesty of the animals.'],
      ],
      answer: 1,
      explain: 'Caleb\'s father says: "That\'s the true spirit of this land, alive and unbroken," symbolizing resilience and endurance.',
    }),
    mcq({
      standard: 'rla:6.5H', passage: 0,
      stem: 'What understanding about bison comes from reading BOTH selections together?',
      choices: [
        'Bison survival needed both early personal rescues and modern state protection.',
        ['Bison herds were replaced entirely by domesticated cattle across Texas ranches.', 'Both selections show that pure wild bison survived.'],
        ['Pioneer settlers showed little interest in protecting native prairie animals.', 'The Goodnights and Caleb\'s family showed deep respect for the animals.'],
        ['Bison populations thrived best when living in dense mountain forests in winter.', 'Both texts set the bison on open plains and canyons.'],
      ],
      answer: 0,
      explain: 'Combining the story with the article demonstrates how Mary Ann Goodnight\'s rescue in the 1870s laid the foundation for modern state conservation.',
    }),
    mcq({
      standard: 'rla:6.6C', cites: [1, 3], passage: 1,
      stem: 'Which sensory detail from "Dust on the Caprock" best conveys the physical power of the herd?',
      choices: [
        'The ground hummed with a deep, rhythmic vibration.',
        ['The setting sun lit the canyon in amber and violet.', 'This describes sky color rather than physical power.'],
        ['Caleb\'s father shaded his eyes with a straw hat.', 'This describes his clothing.'],
        ['A thin hawk soared quietly on an afternoon breeze.', 'This detail does not appear in the text.'],
      ],
      answer: 0,
      explain: 'Feeling the earth hum and vibrate under bare feet powerfully conveys the mass and momentum of the approaching bison herd.',
    }),
  ],
});
