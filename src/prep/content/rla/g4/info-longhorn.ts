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
        ['Spanish explorers introduced European livestock to North America during the early sixteenth century.', 'The arrival of Spanish cattle is an introductory detail in paragraph 2, not the central idea.'],
        'The Texas Longhorn is a remarkably hardy cattle breed whose unique adaptations helped it survive in the wild and become a historic symbol.',
        ['Texas ranchers in the 1920s developed crossbred cattle that produced heavier beef for meatpackers.', 'The preference for heavier beef explains why the herd dwindled, but is not the main idea.'],
        ['Wild Longhorns used their sharp curved horns exclusively to clear prickly pear cactus pads from grazing trails.', 'Clearing cactus is one of several functional uses for horns, not the overall central idea.'],
      ],
      answer: 1,
      explain: 'The article describes the Longhorn\'s survival traits, historic trail drives, and its preservation from extinction.',
    }),
    mcq({
      standard: 'rla:4.9D.ii', cites: [4],
      stem: 'How does the sidebar "Horns by the Numbers" support the reader\'s understanding?',
      choices: [
        ['It lists the names of historic Texas state parks that shelter the official longhorn herd.', 'State park locations like Fort Griffin appear in paragraph 5, not in the sidebar.'],
        ['It details the precise cattle trail routes cowboys used when driving herds into Kansas.', 'The Chisholm Trail is discussed in the main text of paragraph 4, not in the sidebar box.'],
        'It provides specific measurement statistics and explains how horns aid in survival.',
        ['It outlines step-by-step instructions for ranchers building wooden fences on the open range.', 'The sidebar contains biological data about horns, not ranch construction instructions.'],
      ],
      answer: 2,
      explain: 'The sidebar highlights horn statistics and functional purposes like self-defense, cooling blood, and clearing brush.',
    }),
    mcq({
      standard: 'rla:4.9D.iii', cites: [2, 3],
      stem: 'In paragraphs 2 and 3, how does the author organize the information about Longhorns?',
      choices: [
        ['By listing historical events in chronological order from Spanish arrival to modern trail drives.', 'While chronological order is used elsewhere, paragraphs 2 and 3 describe physical traits.'],
        ['By contrasting the diet of wild Longhorns with the nutritional needs of domestic dairy cows.', 'The text contrasts wild Longhorns with modern cattle in general, not specific dairy cows.'],
        ['By presenting the environmental problem of brush overgrowth and showing how cattle solved it.', 'Brush is described as food the Longhorn could digest, not as an ecological problem to solve.'],
        'By describing specific physical adaptations and explaining how each helped the cattle survive.',
      ],
      answer: 3,
      explain: 'Paragraphs 2 and 3 detail physical traits (legs, horns, digestion, coat) and explain how each helped the animal survive.',
    }),
    msq({
      standard: 'rla:4.6G', cites: [2, 3],
      stem: 'Which **two** details from the selection explain how Longhorns survived when food and water were scarce?',
      choices: [
        'Their long, muscular legs allowed them to walk up to thirty miles in a single day to locate water.',
        'Their hardy digestive systems allowed them to eat thorny cactus pads, dry beans, and rough brush.',
        ['Ranchers transported freshwater and grain in wooden wagons across the desert to feed them.', 'Longhorns roamed wild on the open range without ranchers delivering grain or water.'],
        ['They sought shelter in heated barns and shaded stables during harsh summer and winter freezes.', 'Longhorns survived without barns or man-made shelters.'],
        ['Their thick white coats reflected sunlight to keep their bodies cool in extreme heat.', 'The text describes multicolored spotted coats that provided camouflage, not pure white coats.'],
      ],
      answers: [0, 1],
      explain: 'Long legs for walking thirty miles and the ability to digest desert plants like cactus allowed Longhorns to survive harsh shortages.',
    }),
    mcq({
      standard: 'rla:4.10C',
      stem: 'Why does the author divide the article with bold headings?',
      choices: [
        'To break the text into distinct sections and preview the primary topic of each part.',
        ['To identify specialized scientific vocabulary terms that readers must look up in a dictionary.', 'Headings organize the article by topic rather than highlighting vocabulary definitions.'],
        ['To highlight direct quotations taken from the historical journals of early trail cowboys.', 'Headings are structural section titles written by the author, not cowboy quotes.'],
        ['To explain the legal regulations established by the Texas Parks and Wildlife Department.', 'The text is an informational history article, not a list of wildlife regulations.'],
      ],
      answer: 0,
      explain: 'Headings guide readers by dividing the text into clear sections and previewing the primary topic of each part.',
    }),
    mcq({
      standard: 'rla:4.3C', cites: [5],
      stem: 'In paragraph 5, the word **preservation** comes from the root *preserve* and the suffix *-ation*. What does **preservation** mean?',
      choices: [
        ['the practice of breeding heavier livestock to sell for financial profit', 'Breeding cattle for profit describes commercial ranching, not the protection of herds.'],
        ['the difficult journey of walking large herds of cattle across state lines', 'Driving cattle across states describes the trail drives mentioned in paragraph 4.'],
        'the act or process of protecting something from damage, decay, or extinction',
        ['the natural ability of an animal to blend into its surrounding brush habitat', 'Blending into the background describes camouflage and coloration, not preservation.'],
      ],
      answer: 2,
      explain: 'The suffix *-ation* denotes an action or process. Preservation is the process of keeping something safe from harm or loss.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [4],
      stem: 'Which quotation from paragraph 4 shows that cattle drives provided economic benefits for Texas?',
      choices: [
        ['"Spanish explorers brought cattle to America in the 1500s."', 'This sentence from paragraph 2 describes initial arrival, not post-Civil War economics.'],
        ['"Cowboys gathered large herds and drove them north on famous trails like the Chisholm Trail."', 'This sentence describes the physical gathering and movement of herds, not the financial return.'],
        ['"By the 1920s, ranchers wanted heavier cattle that grew fat more quickly."', 'This sentence from paragraph 5 explains changing rancher preferences, not economic gain.'],
        '"These famous cattle drives brought money to Texas."',
      ],
      answer: 3,
      explain: 'The sentence directly explains how the cattle drives brought financial benefits to Texas after the Civil War.',
    }),
  ],
});
