// Grade 4 informational: an article about Natural Bridge Caverns in the Texas Hill Country.
// Questions cover central idea (4.9D.i), organizational patterns (4.9D.iii), key ideas (4.6G),
// predictions (4.6C), text structure (4.10B), dictionary skills (4.3A), and summarizing (4.7D).

import { makeSet, mcq, msq } from '../author.ts';

export const INFO_CAVERNS = makeSet({
  id: 'g4-info-caverns',
  grade: 4,
  kind: 'reading',
  title: 'Exploring Natural Bridge Caverns',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g4-info-caverns-p',
    title: 'Exploring Natural Bridge Caverns',
    genre: 'informational',
    blocks: [
      { kind: 'heading', text: 'A World Beneath the Hill Country' },
      { kind: 'p', text: 'Beneath the rolling juniper-covered hills north of San Antonio lies one of the most stunning underground wonders in Texas: Natural Bridge Caverns. Named for a sixty-foot natural limestone arch that spans its entrance, this subterranean labyrinth features soaring underground chambers, delicate crystalline ribbons, and towering rock formations that took millions of years to develop.' },
      { kind: 'heading', text: 'How the Caverns Formed' },
      { kind: 'p', text: 'The story of the caverns began during the Cretaceous period, more than one hundred million years ago, when a warm, shallow inland sea covered most of Texas. Layers of shells, mud, and coral settled on the ocean floor, gradually hardening into deep beds of limestone rock. Millions of years later, when the sea retreated, tectonic shifts created natural underground fractures in the stone.' },
      { kind: 'p', text: 'Slowly, rainwater infused with carbon dioxide seeped down through the topsoil, turning into weak carbonic acid. This acidic water dissolved the solid limestone along the cracks, carving out hollow pockets and wide underground river channels. Eventually, the water level dropped, leaving vast air-filled caverns beneath the Texas surface.' },
      { kind: 'heading', text: 'Sculpted by Single Drops' },
      { kind: 'p', text: 'The magnificent formations seen today were sculpted by single, mineral-rich drops of water. As each water droplet drips from the ceiling, it leaves behind an invisible speck of dissolved calcite. Over centuries, these mineral rings grow downward into pointed icicle-shaped stones called stalactites (which hold "tight" to the ceiling). Where droplets splash onto the cavern floor below, minerals pile upward into mound-shaped stalagmites (which "might" one day reach the ceiling). When a stalactite and stalagmite meet, they join to form a colossal stone column.' },
      { kind: 'heading', text: 'The 1960 Discovery' },
      { kind: 'p', text: 'Although native peoples sheltered beneath the limestone arch for thousands of years, the deep underground rooms were discovered only in March 1960. Four college students from St. Mary\'s University noticed cool air blowing from a pile of rubble. Crawling on their stomachs through sixty feet of cramped, muddy crevices, they entered a breathtaking silent chamber with ceilings over one hundred feet high. Today, careful boardwalks and eco-friendly lighting allow hundreds of thousands of curious visitors to explore this delicate underground treasure while protecting its fragile ecosystem.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.9D.i', cites: [1, 3, 4],
      stem: 'What is the central idea of the article?',
      choices: [
        ['Natural Bridge Caverns is named for a sixty-foot limestone bridge near San Antonio.', 'This is a single introductory detail.'],
        'Natural Bridge Caverns is a magnificent subterranean system formed over millions of years through geological and chemical processes.',
        ['Four college students in 1960 were the first people ever to see the limestone arch.', 'Native peoples used the entrance arch thousands of years earlier.'],
        ['Stalactites and stalagmites grow quickly whenever Texas experiences heavy rain.', 'The text emphasizes that formations take centuries and single droplets to build.'],
      ],
      answer: 1,
      explain: 'The article explains the ancient formation of the limestone, how acidic water carved underground rooms, how mineral formations grow, and how the caverns were discovered.',
    }),
    mcq({
      standard: 'rla:4.9D.iii', cites: [2, 3],
      stem: 'How does the author organize the information in paragraphs 2 and 3?',
      choices: [
        ['By comparing limestone caverns to volcanic lava tubes.', 'Volcanic tubes are never mentioned.'],
        'By explaining chronological steps and cause-and-effect processes that created the caverns over millions of years.',
        ['By stating an argument and refuting counterclaims.', 'The passage is informational science, not argumentative.'],
        ['By listing famous tourists who visited the caverns since 1960.', 'The paragraphs focus on ancient geological processes.'],
      ],
      answer: 1,
      explain: 'The author shows cause-and-effect across time: ancient sea creates limestone, tectonic fractures appear, acidic water dissolves stone, and receding water leaves hollow chambers.',
    }),
    msq({
      standard: 'rla:4.6G', cites: [4],
      stem: 'According to paragraph 4, what are **two** ways stalactites differ from stalagmites?',
      choices: [
        'Stalactites grow downward from the ceiling, while stalagmites build upward from the floor.',
        'Stalactites are formed by drops hanging from above, while stalagmites are formed where drops splash below.',
        ['Stalactites are made of limestone, while stalagmites are made of obsidian stone.', 'Both formations are made of calcite minerals.'],
        ['Stalactites took millions of years, while stalagmites formed in a single day.', 'Both take centuries of slow mineral accumulation.'],
        ['Stalactites only exist in caves with artificial electric lighting.', 'They formed in total natural darkness over thousands of years.'],
      ],
      answers: [0, 1],
      explain: 'Paragraph 4 explains that stalactites hang down from the ceiling from hanging drops, while stalagmites pile up from splashing drops on the floor.',
    }),
    mcq({
      standard: 'rla:4.6C', cites: [5],
      stem: 'Based on the heading "The 1960 Discovery" and the opening sentences of paragraph 5, what could a reader reasonably predict before reading the rest of the paragraph?',
      choices: [
        ['The caverns would be destroyed by a volcanic eruption.', 'Caves in Texas do not experience volcanic eruptions.'],
        'Curious explorers would investigate the mysterious blowing air and find an unknown underground cavern.',
        ['The college students would build an amusement park on the surface.', 'The text is about exploring underground cave passages.'],
        ['The state of Texas would close the entrance forever.', 'The heading says "Discovery," suggesting a breakthrough.'],
      ],
      answer: 1,
      explain: 'The heading and the detail of four students noticing cool breeze emerging from rubble signal that their exploration will reveal a major hidden cave system.',
    }),
    mcq({
      standard: 'rla:4.10B', cites: [4],
      stem: 'How does the mnemonic memory trick in paragraph 4 (stalactites hold "tight" / stalagmites "might" reach the ceiling) contribute to the author\'s purpose?',
      choices: [
        ['It warns visitors that touching the rocks can be dangerous.', 'The trick is a memory aid for names, not a safety warning.'],
        ['It proves that the author prefers stalagmites over stalactites.', 'The author describes both formations equally.'],
        'It helps young readers remember the difference between two confusing, similarly named cave formations.',
        ['It explains the exact chemical formula of calcium carbonate.', 'It is an informal wordplay trick, not a chemical formula.'],
      ],
      answer: 2,
      explain: 'The parenthetical notes ("hold tight to the ceiling" and "might reach the ceiling") are classic memory aids designed to help students keep the two terms straight.',
    }),
    mcq({
      standard: 'rla:4.3A', cites: [1],
      stem: 'Read this dictionary entry for the word **labyrinth**.\n\n**lab·y·rinth** /ˈlabəˌrinTH/\n*noun*\n1. a complicated network of winding passages or paths.\n2. an intricate maze in Greek mythology.\n3. a complex anatomical structure in the inner ear.\n\nWhich definition best matches the word **labyrinth** as used in paragraph 1?',
      choices: [
        'Definition 1',
        ['Definition 2', 'Paragraph 1 refers to real Texas cave passages, not Greek mythology.'],
        ['Definition 3', 'The author is describing geological caves, not an inner ear structure.'],
        ['None of the definitions', 'Definition 1 is an exact fit for winding underground tunnels.'],
      ],
      answer: 0,
      explain: 'In paragraph 1, "subterranean labyrinth" refers to the complex network of winding underground passages and chambers.',
    }),
    mcq({
      standard: 'rla:4.7D', cites: [1, 2, 3, 4, 5],
      stem: 'Which statement provides the best overall summary of the article?',
      choices: [
        ['Limestone in Texas formed during the ancient Cretaceous period when dinosaurs roamed near San Antonio.', 'This mentions only early geological time and leaves out the cave formation, structures, and discovery.'],
        ['College students from St. Mary\'s University explored a crawlway and set up electric lights for tourists.', 'This summarizes only the 1960 discovery in paragraph 5.'],
        'Natural Bridge Caverns is an ancient Texas cave system sculpted by dripping water and dissolved limestone, discovered in 1960 and preserved for exploration today.',
        ['Rainwater turns into weak acid that dissolves rocks in every county across Texas.', 'The article specifically focuses on the Natural Bridge Caverns system.'],
      ],
      answer: 2,
      explain: 'This summary encompasses the location, the geological formation process, the slow water sculpting, and the 1960 discovery that opened the caverns to the public.',
    }),
  ],
});
