// Grade 7 editing draft: Mariana Trench Deep-Sea Exploration.
import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_OCEAN = makeSet({
  id: 'g7-edit-ocean',
  grade: 7,
  kind: 'editing',
  title: 'Journey to the Abyss',
  intro: 'Devon wrote this report about exploring the Challenger Deep in the Mariana Trench. Read Devon\'s report and look for any revisions and corrections he needs to make. Then answer the questions.',
  passages: [{
    id: 'g7-edit-ocean-p',
    title: 'Journey to the Abyss',
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        'Nearly seven miles beneath the turbulent rolling surface of the western Pacific Ocean lies the Mariana Trench, the deepest and most enigmatic geological chasm on planet Earth.',
        'The water pressure at the bottom exceeds one thousand times the atmospheric pressure at sea level.',
        'This crushing force is equivalent to balancing fifty jumbo jets on top of a single human being.',
        'For decades, marine scientists assumed that such an inhospitable, sunless environment was completely barren, silent, and devoid of living creatures.',
      ] },
      { kind: 'sentences', sentences: [
        'In recent years, innovative robotic submersibles and manned deep-sea vessels have penetrated the perpetual darkness.',
        'Specialized titanium hulls are engineered to withstand the colossal pressures of the hadal zone.',
        'Powerful floodlights illuminate a ghostly underwater landscape inhabited by translucent snailfish, giant amphipods, and carpet-like microbial mats.',
        'These resilient organisms do not rely on sunlight for energy.',
        'Instead, they draw nourishment from chemical chemosynthesis driven by deep hydrothermal vents.',
      ] },
      { kind: 'sentences', sentences: [
        'Exploring the Mariana Trench provides invaluable scientific insights into tectonic plate subduction, marine geology, and the very origins of planetary life.',
        'Studying hardy extremophile microbes in this deep ocean rift may even yield breakthrough biochemical enzymes for revolutionary modern medical treatments.',
        'The ocean depths remain one of the last mysterious and uncharted frontiers on Earth.',
        'Future deep-sea expeditions will continue to illuminate these remote abyssal depths, expanding our understanding of marine biology and extreme planetary habitats.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.10B.i', cites: [12],
      stem: 'Devon wants to conclude his paper with a strong concluding thought that synthesizes his main points. Which sentence should replace sentence 12?',
      choices: [
        ['Submarines are very expensive to build and require lots of electricity to operate.', 'This focuses on negative financial details rather than concluding insights.'],
        ['Scuba divers can only descend a few hundred feet before nitrogen narcosis sets in.', 'This shifts focus to recreational scuba diving instead of deep ocean exploration.'],
        'By exploring this alien abyss, scientists not only unravel the mysteries of our planet\'s deepest secrets but also glimpse the potential for life on ocean worlds beyond Earth.',
        ['Many people prefer visiting sunny tropical beaches rather than the dark ocean floor.', 'This is colloquial and irrelevant to scientific exploration.'],
      ],
      answer: 2,
      explain: 'This concluding sentence effectively summarizes the scientific value of deep-sea exploration and broadens the perspective to astrobiology.',
    }),
    mcq({
      standard: 'rla:7.10B.ii', cites: [8, 9],
      stem: 'Devon wants to add supporting evidence after sentence 9 to illustrate how hydrothermal vents support life. Which sentence best achieves this?',
      choices: [
        'Superheated mineral-rich fluids spewing from subterranean fissures feed vast colonies of sulfur-oxidizing bacteria, forming the foundation of a bizarre food web.',
        ['Hydrothermal vents were first discovered in the Atlantic Ocean by geologists in 1977.', 'This gives historical discovery trivia rather than explaining how vents sustain life.'],
        ['Volcanoes can also erupt on land and create enormous clouds of ash in the atmosphere.', 'This digresses into terrestrial volcanology.'],
        ['Water freezes at thirty-two degrees Fahrenheit under standard atmospheric conditions.', 'This is unrelated basic physical science.'],
      ],
      answer: 0,
      explain: 'This detail directly explains the biological mechanism of chemosynthesis, clarifying how chemicals from vents feed the food chain.',
    }),
    mcq({
      standard: 'rla:7.10C', cites: [2, 3],
      stem: 'What is the most effective way to combine sentences 2 and 3?',
      choices: [
        ['The water pressure exceeds one thousand times atmospheric pressure, but it balances fifty jumbo jets.', 'The conjunction "but" incorrectly expresses contrast instead of equivalence.'],
        'The water pressure at the bottom exceeds one thousand times the pressure at sea level, a crushing force equivalent to balancing fifty jumbo jets on a single human.',
        ['Because the water pressure exceeds atmospheric pressure, fifty jumbo jets balance on humans.', 'This produces a confusing, illogical causal statement.'],
        ['Pressure is high at the bottom, and fifty jumbo jets are heavy when placed on someone.', 'This is informal and redundant.'],
      ],
      answer: 1,
      explain: 'Using an appositive phrase ("a crushing force equivalent to...") combines both sentences cleanly and powerfully.',
    }),
    inq({
      standard: 'rla:7.10D.v', cites: [8],
      stem: 'Read sentence 8. Choose the correct pronoun to agree with the plural antecedent "organisms."',
      sentence: [
        'These resilient organisms do not rely on sunlight for ',
        { options: ['its', 'their', 'his', 'her'], answer: 1 },
        ' energy.',
      ],
      explain: '"Organisms" is a plural noun, so the third-person plural possessive pronoun "their" is grammatically required.',
    }),
    inq({
      standard: 'rla:7.10D.vi', cites: [5],
      stem: 'Read sentence 5. Choose the correct subordinating conjunction to connect the introductory clause.',
      sentence: [
        { options: ['Although', 'Because', 'Since', 'While'], answer: 2 },
        ' innovative robotic submersibles have advanced in capability, scientists can now penetrate the perpetual darkness.',
      ],
      explain: '"Since" functions as a causal subordinating conjunction explaining why scientists are now able to explore the deep trench.',
    }),
    inq({
      standard: 'rla:7.10D.ix', cites: [6],
      stem: 'Read sentence 6. Choose the correct spelling of the underlined word.',
      sentence: [
        'Specialized titanium hulls are engineered to withstand the ',
        { options: ['colosal', 'collosal', 'colossal', 'colosall'], answer: 2 },
        ' pressures of the hadal zone.',
      ],
      explain: '"Colossal" is spelled with one "l" after "co" and a double "ss" before "al": c-o-l-o-s-s-a-l.',
    }),
  ],
});
