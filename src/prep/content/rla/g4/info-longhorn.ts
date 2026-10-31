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
      { kind: 'p', text: 'Few animals represent the history of the American West like the Texas Longhorn. With wide horns stretching up to eight feet across, these strong cattle roamed Texas for hundreds of years. They lived in rocky hills, thick brush, and open grasslands. Most modern cattle need fenced green pastures and daily food from ranchers. But the Longhorn was built by nature to live in harsh, wild country. They did not need barns or special care.' },
      { kind: 'heading', text: 'Built for Survival' },
      { kind: 'p', text: 'Spanish explorers brought cattle to America in the 1500s. Over the next three hundred years, stray cattle lived wild on the open plains. Only the strongest animals survived hot summers and cold winters. They lived through dry droughts. Their long legs helped them walk thirty miles in one day across rocks. They walked far to find water. Their long, curved horns protected them from hungry wolves, bears, and cougars.' },
      { kind: 'p', text: 'Longhorns also had tough stomachs. When green grass was hard to find, they ate thorny cactus and dry beans. They ate rough shrubs that made other cows sick. Their colorful coats had spots of red, brown, black, and white. These spots helped them blend into the brush to hide from enemies. Calves stayed close to their mothers in the tall grass.' },
      { kind: 'sidebar', title: 'Horns by the Numbers', text: 'Average horn spread: 5 to 7 feet. Record spread: over 10 feet! Purpose: Self-defense against predators, cooling blood in hot weather, and clearing thorny brush.' },
      { kind: 'heading', text: 'From Trail Drives to Preservation' },
      { kind: 'p', text: 'After the Civil War, millions of wild Longhorns grazed across Texas. Cowboys gathered large herds and drove them north on famous trails like the Chisholm Trail. They walked for weeks to reach railroad towns in Kansas. These famous cattle drives brought money to Texas. They also made the American cowboy famous around the world.' },
      { kind: 'p', text: 'By the 1920s, ranchers wanted heavier cattle that grew fat more quickly. The pure Longhorn almost died out completely. Fortunately, people worked together to save the last wild herds in state parks. Today, the Official State Longhorn Herd lives safely at Fort Griffin in Texas. This keeps a proud symbol of history alive for everyone to see.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.9D.i', cites: [1, 2, 5],
      stem: 'What is the central idea of the article?',
      choices: [
        ['Spanish explorers brought cattle to North America during the 1500s.', 'This is a single historical fact, not the main idea.'],
        'The Longhorn is a tough breed saved from extinction.',
        ['Ranchers wanted heavier cattle that could survive winter blizzards.', 'Longhorns survived blizzards; ranchers wanted faster-growing beef.'],
        ['Longhorns use their eight-foot horns to clear prickly cactus pads.', 'Horn size is one detail, not the main idea.'],
      ],
      answer: 1,
      explain: 'The article describes the Longhorn\'s survival traits, historic trail drives, and its preservation from extinction.',
    }),
    mcq({
      standard: 'rla:4.9D.ii', cites: [4],
      stem: 'How does the sidebar "Horns by the Numbers" help the reader?',
      choices: [
        ['It explains how cowboys trained calves to cross deep rivers.', 'The sidebar contains horn facts, not river-crossing tips.'],
        ['It lists the names of famous ranchers who protected the herd.', 'Names of ranchers are not listed in the sidebar.'],
        'It gives horn measurements and describes their uses.',
        ['It shows a map of the Chisholm Trail routes into Kansas.', 'The sidebar does not display a trail route map.'],
      ],
      answer: 2,
      explain: 'The sidebar highlights horn statistics and functional purposes like self-defense, cooling blood, and clearing brush.',
    }),
    mcq({
      standard: 'rla:4.9D.iii', cites: [2, 3],
      stem: 'In paragraphs 2 and 3, how does the author organize information?',
      choices: [
        ['By listing historical dates in the order they occurred in Texas.', 'Dates appear in paragraph 4 and 5; paragraphs 2 and 3 focus on traits.'],
        ['By presenting a problem and explaining how ranchers solved it.', 'Problem-solution structure describes the preservation effort in paragraph 5.'],
        ['By comparing the Texas Longhorn to wild buffalo in Oklahoma.', 'The passage does not compare Longhorns to buffalo.'],
        'By describing physical traits that helped animals survive.',
      ],
      answer: 3,
      explain: 'Paragraphs 2 and 3 detail physical traits (legs, horns, digestion, coat) and explain how each helped the animal survive.',
    }),
    msq({
      standard: 'rla:4.6G', cites: [2, 3],
      stem: 'Which **two** details from the selection explain how the Longhorn survived when food and water were scarce?',
      choices: [
        'Their long legs helped them walk thirty miles in one day across rocks.',
        'They could eat thorny cactus and dry beans that made other cows sick.',
        ['Cowboys brought them daily bales of hay during summer droughts.', 'Paragraph 1 emphasizes they survived without daily food from ranchers.'],
        ['They slept in heated barns during winter freezes.', 'They lived wild on the open plains without barns.'],
        ['They grew coats of pure white to reflect the summer sun.', 'Paragraph 3 notes their coats had spots of red, brown, black, and white.'],
      ],
      answers: [0, 1],
      explain: 'Long legs for walking thirty miles and the ability to digest desert plants like cactus allowed Longhorns to survive harsh shortages.',
    }),
    mcq({
      standard: 'rla:4.10C',
      stem: 'Why did the author include bold headings in the article?',
      choices: [
        'To organize the text into sections and preview topics.',
        ['To indicate difficult vocabulary words that appear on quizzes.', 'Headings organize topic sections rather than vocabulary words.'],
        ['To show which paragraphs were quoted from cowboy diaries.', 'The text is written by the author, not quoted from diaries.'],
        ['To explain why wild Longhorns nearly disappeared in 1920.', 'Extinction is discussed under the final heading.'],
      ],
      answer: 0,
      explain: 'Headings guide readers by dividing the text into clear sections and previewing the primary topic of each part.',
    }),
    mcq({
      standard: 'rla:4.3C', cites: [5],
      stem: 'In paragraph 5, the word **preservation** comes from *preserve* and the suffix *-ation*. What does **preservation** mean?',
      choices: [
        ['the act of traveling on a long journey across the prairie', 'This describes travel or migration.'],
        ['the state of being completely forgotten by young children', 'This is the opposite of preservation.'],
        'the process of keeping something safe from harm',
        ['the business practice of trading farm animals for money', 'This describes trading or commerce.'],
      ],
      answer: 2,
      explain: 'The suffix *-ation* denotes an action or process. Preservation is the process of keeping something safe from harm or loss.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [4],
      stem: 'Which detail from paragraph 4 shows that cattle drives helped the state?',
      choices: [
        ['"Spanish explorers brought cattle to America in the 1500s."', 'This is early Spanish history from paragraph 2.'],
        ['"By the 1920s, ranchers wanted heavier cattle that grew fat more quickly."', 'This describes their decline in paragraph 5.'],
        ['"Cowboys gathered large herds and drove them north on famous trails like the Chisholm Trail."', 'This describes the trail drive process.'],
        '"These famous cattle drives brought money to Texas."',
      ],
      answer: 3,
      explain: 'The sentence directly explains how the cattle drives brought financial benefits to Texas after the Civil War.',
    }),
  ],
});
