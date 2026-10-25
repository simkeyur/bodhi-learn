// Grade 4 informational: an article about the Texas Longhorn with headings, a sidebar, and text features.
// Questions cover central idea (4.9D.i), text features (4.9D.ii), organizational patterns (4.9D.iii),
// key ideas (4.6G), print features (4.10C), word parts (4.3C), and evidence (4.7C).

import { makeSet, mcq, msq } from '../author.ts';

export const INFO_LONGHORN = makeSet({
  id: 'g4-info-longhorn',
  grade: 4,
  kind: 'reading',
  title: 'The Marvel of the Texas Longhorn',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g4-info-longhorn-p',
    title: 'The Marvel of the Texas Longhorn',
    genre: 'informational',
    blocks: [
      { kind: 'heading', text: 'Icons of the Open Range' },
      { kind: 'p', text: 'Few creatures symbolize the spirit and history of the American West quite like the Texas Longhorn. With sweeping horns stretching up to eight feet from tip to tip, these hardy cattle roamed the rugged hills, dense brush country, and vast prairie grasslands of Texas for centuries. Unlike modern cattle breeds that require carefully managed pastures and daily supplemental feed, the Longhorn evolved through natural selection to thrive in demanding, unforgiving environments.' },
      { kind: 'heading', text: 'Built for Survival' },
      { kind: 'p', text: 'Spanish explorers brought the ancestors of the Longhorn to the Americas in the early 1500s. Over the next three hundred years, stray animals multiplied in the wild wilderness. Through generations of scorching summer heat, freezing winter blizzards, and severe droughts, only the toughest animals survived. Their long legs allowed them to walk thirty miles in a single day across rocky terrain to find water. Their tough, curved horns provided formidable weapons against hungry predators such as wolves and cougars.' },
      { kind: 'p', text: 'In addition, Longhorns developed extraordinary digestive systems. When tender green grass was scarce, they could readily digest thorny prickly pear cactus, mesquite beans, and coarse mountain shrubs that would sicken other livestock. Their multicolored coats—ranging from deep chestnut and jet black to spotted roan—helped them blend into brushy landscapes.' },
      { kind: 'sidebar', title: 'Horns by the Numbers', text: 'Average horn spread: 5 to 7 feet. Record spread: over 10 feet! Purpose: Self-defense against predators, thermoregulation (cooling blood in hot weather), and clearing thorny brush.' },
      { kind: 'heading', text: 'From Trail Drives to Preservation' },
      { kind: 'p', text: 'After the Civil War, millions of wild Longhorns grazed untamed across Texas. Cowboys drove immense herds north along legendary routes such as the Chisholm Trail to railheads in Kansas. These historic cattle drives revived the postwar Texas economy and sparked the world-famous legend of the American cowboy.' },
      { kind: 'p', text: 'By the 1920s, however, ranchers favored heavier cattle breeds that produced beef more quickly. The purebred Longhorn nearly slipped into total extinction. Fortunately, dedicated conservationists gathered the remaining wild animals to establish protected herds in state and national parks. Today, the Official State Longhorn Herd lives safely at Fort Griffin State Historic Site, ensuring this living symbol of Texas heritage will endure for future generations.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.9D.i', cites: [1, 2, 5],
      stem: 'What is the central idea of the article?',
      choices: [
        ['Texas Longhorns were brought to North America by Spanish explorers in the 1500s.', 'This is a single historical fact, not the main idea of the whole article.'],
        'The Texas Longhorn is a uniquely adapted, resilient breed that played a vital role in Texas history and was saved from extinction.',
        ['Ranchers preferred modern cattle breeds because Longhorns could not survive cold winter blizzards.', 'Longhorns actually survived blizzards very well; ranchers preferred faster-growing beef breeds.'],
        ['Longhorns use their eight-foot horns primarily to clear prickly pear cactus in the spring.', 'Horn size is one interesting adaptation, not the central thesis.'],
      ],
      answer: 1,
      explain: 'The article describes the animal\'s rugged adaptations, its economic impact during historic cattle drives, and its rescue from extinction as a living symbol of Texas heritage.',
    }),
    mcq({
      standard: 'rla:4.9D.ii', cites: [4],
      stem: 'How does the sidebar "Horns by the Numbers" contribute to the reader\'s understanding?',
      choices: [
        ['It explains how cowboys trained young calves to walk across rivers.', 'The sidebar contains facts about horn spread and purposes, not river crossing.'],
        ['It lists the names of famous ranchers who protected the herd in 1920.', 'Names of ranchers are not listed in the sidebar.'],
        'It provides concise measurements and highlights multiple surprising uses of the animal\'s horns.',
        ['It shows a timeline of the Chisholm Trail routes into Kansas.', 'The sidebar does not display a trail route map.'],
      ],
      answer: 2,
      explain: 'The sidebar highlights specific statistics (5 to 7 feet spread, record over 10 feet) and functional purposes like thermoregulation and brush clearing.',
    }),
    mcq({
      standard: 'rla:4.9D.iii', cites: [2, 3],
      stem: 'In paragraphs 2 and 3, how does the author organize the information about the Longhorn\'s physical traits?',
      choices: [
        ['By listing historical events in the order they occurred from 1500 to 1920.', 'Chronological history appears in paragraph 4 and 5; paragraphs 2 and 3 focus on physical features.'],
        ['By presenting a problem and explaining how ranchers solved it.', 'Problem-solution structure describes the preservation effort in paragraph 5.'],
        'By describing specific survival adaptations (long legs, horns, digestive system, coat color) and explaining how each helped the animal endure.',
        ['By comparing the Longhorn to wild buffalo in Oklahoma.', 'The passage does not compare Longhorns to buffalo.'],
      ],
      answer: 2,
      explain: 'Paragraphs 2 and 3 use a descriptive structure, detailing each physical adaptation (legs, horns, digestion, coat) and connecting it to survival in harsh wilderness conditions.',
    }),
    msq({
      standard: 'rla:4.6G', cites: [2, 3],
      stem: 'Which **two** details from the selection explain how the Longhorn survived when food and water were scarce?',
      choices: [
        'Their long legs allowed them to travel up to thirty miles in a day to reach distant water.',
        'They could readily digest tough mesquite beans and prickly pear cactus that other cattle could not eat.',
        ['Cowboys brought them daily bales of hay during summer droughts.', 'Paragraph 1 emphasizes they survived without daily supplemental feed.'],
        ['They slept in heated barns during winter freezes.', 'They lived wild on the open plains without barns.'],
        ['They grew coats of pure white to reflect the summer sun.', 'Paragraph 3 notes their coats were multicolored (chestnut, black, roan).'],
      ],
      answers: [0, 1],
      explain: 'The text explicitly states that thirty-mile daily treks for water and the ability to digest thorny desert plants like prickly pear allowed them to survive harsh shortages.',
    }),
    mcq({
      standard: 'rla:4.10C',
      stem: 'Why did the author include bold subheadings like "Built for Survival" throughout the article?',
      choices: [
        ['To indicate words that readers must look up in a dictionary.', 'Subheadings organize topic sections rather than vocabulary words.'],
        'To organize the article into clear sections and preview the main topic of each section.',
        ['To show which paragraphs were quoted directly from historical cowboy diaries.', 'The text is written by the author, not quoted from diaries.'],
        ['To explain why the Longhorn became nearly extinct in the 1920s.', 'Extinction is discussed under the final subheading.'],
      ],
      answer: 1,
      explain: 'Subheadings guide readers by dividing complex nonfiction texts into manageable sections and previewing the primary focus of each part.',
    }),
    mcq({
      standard: 'rla:4.3C', cites: [5],
      stem: 'In paragraph 5, the word **preservation** contains the root *preserve* and the suffix *-ation*. What does **preservation** mean?',
      choices: [
        ['the act of traveling on a long journey', 'Journeying is migration or travel.'],
        ['the state of being completely forgotten', 'This is oblivion, the opposite of preservation.'],
        'the process of keeping something safe from harm, loss, or destruction',
        ['the practice of trading animals for profit', 'Trading is commerce.'],
      ],
      answer: 2,
      explain: 'The suffix *-ation* denotes an action or process. Preservation is the intentional act or process of keeping something protected and intact.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [4],
      stem: 'Which detail from paragraph 4 shows the economic importance of the Longhorn to Texas?',
      choices: [
        '"These historic cattle drives revived the postwar Texas economy and sparked the world-famous legend of the American cowboy."',
        ['"Spanish explorers brought the ancestors of the Longhorn to the Americas..."', 'This is early Spanish colonial history from paragraph 2.'],
        ['"By the 1920s, however, ranchers favored heavier cattle breeds..."', 'This describes their decline in paragraph 5.'],
        ['"Average horn spread: 5 to 7 feet."', 'This is a physical measurement from the sidebar.'],
      ],
      answer: 0,
      explain: 'The sentence directly explains how the cattle drives following the Civil War revitalized the state\'s economy.',
    }),
  ],
});
