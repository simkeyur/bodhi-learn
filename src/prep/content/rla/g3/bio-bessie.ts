// Grade 3 literary nonfiction: Bessie Coleman, pioneering Texas-born aviator.
// Word count: ~310 words (range 250-650).
// Questions cover central idea (3.9D.i), text structure (3.10B), inference (3.6F),
// key details (3.6G), synthesize (3.6H), and text evidence (3.7C).

import { makeSet, mcq } from '../author.ts';

export const BIO_BESSIE = makeSet({
  id: 'g3-bio-bessie',
  grade: 3,
  kind: 'reading',
  title: 'Bessie Coleman: Queen of the Texas Skies',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g3-bio-bessie-p',
    title: 'Bessie Coleman: Queen of the Texas Skies',
    genre: 'literaryNonfiction',
    blocks: [
      { kind: 'p', text: 'Bessie Coleman was born in 1892 in Atlanta, Texas, and grew up helping her mother pick cotton in the dusty fields of Waxahachie. Walking four miles each day to attend a small one-room schoolhouse, young Bessie was an outstanding math student who loved reading about world history. She dreamed of traveling beyond the horizon and doing something extraordinary with her life.' },
      { kind: 'p', text: 'As a young woman living in Chicago during World War I, Bessie heard exciting stories from soldiers who had flown airplanes over Europe. She immediately knew she wanted to become a pilot. However, no flight school in the United States would accept her because she was both African American and female. Refusing to let prejudice ground her ambition, Bessie saved her earnings as a manicurist, studied French at night school, and sailed across the Atlantic Ocean to France in 1920.' },
      { kind: 'p', text: 'At the prestigious Caudron Brothers flight school in Le Crotoy, France, Bessie learned to fly open-cockpit biplanes, master daring aerial spins, and perform emergency landings. On June 15, 1921, she earned an international pilot\'s license from the Fédération Aéronautique Internationale, becoming the first African American woman and first Native American woman to hold an international aviation pilot\'s license.' },
      { kind: 'p', text: 'When "Queen Bess" returned to America, thousands of cheering spectators packed air shows to watch her perform thrilling figure-eights, loops, and barrel rolls in the sky. She toured the country giving speeches at schools and churches, always refusing to perform at airfields that would not admit integrated audiences. Through courage and determination, Bessie proved that the sky has no boundaries.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9D.i', cites: [2, 3, 4],
      stem: 'What is the central idea of the selection?',
      choices: [
        ['Pilots in the 1920s only flew biplanes made in France.', 'The text focuses on Bessie\'s life and accomplishments, not airplane manufacturing.'],
        'Through determination and perseverance, Bessie Coleman overcame severe obstacles to become a world-renowned aviator.',
        ['Picking cotton in Waxahachie was the only career choice in Texas.', 'Bessie worked in fields as a child, but pursued aviation as an adult.'],
        ['Learning French is required for all modern airline pilots.', 'Bessie learned French specifically to attend flight school in France.'],
      ],
      answer: 1,
      explain: 'The selection chronicles how Bessie Coleman overcame racial and gender discrimination through relentless determination to become an internationally licensed pilot and inspiring aerial performer.',
    }),
    mcq({
      standard: 'rla:3.10B', cites: [1, 2, 3, 4],
      stem: 'How does the author organize the events in the selection to support the main purpose?',
      choices: [
        ['By comparing the speed of biplanes with modern commercial passenger jets.', 'Airplane speeds are not compared in the text.'],
        'By presenting the major events of Bessie\'s life in chronological order from her Texas childhood to her aerial triumphs.',
        ['By listing opinions about airplanes in alphabetical order.', 'The text is a biographical narrative following a clear timeline.'],
        ['By describing the causes and effects of European weather on air shows.', 'Weather conditions in Europe are not the focus.'],
      ],
      answer: 1,
      explain: 'The author uses chronological order (1892 childhood in Texas, moving to Chicago, training in France in 1920-1921, and returning to American air shows) to present her life story.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [2],
      stem: 'What can the reader infer from Bessie\'s decision to learn French and travel to Europe?',
      choices: [
        'She was deeply determined and would not allow unfair obstacles in America to stop her from reaching her goal.',
        ['She preferred living in Europe and never intended to visit Texas again.', 'Paragraph 4 explains she returned to America to tour and inspire audiences.'],
        ['She wanted to work as a translator in Chicago businesses.', 'Her dream was to attend flight school and become a pilot.'],
        ['She found flying airplanes to be boring and simple.', 'She was passionate about aviation and mastered complex aerial stunts.'],
      ],
      answer: 0,
      explain: 'When American flight schools rejected her due to discrimination, Bessie learned French and saved money to travel abroad, proving her exceptional drive and resilience.',
    }),
    mcq({
      standard: 'rla:3.6G', cites: [3],
      stem: 'Which detail from paragraph 3 represents an important historic milestone achieved by Bessie Coleman?',
      choices: [
        ['She worked as a manicurist in a Chicago barbershop.', 'This occurred in paragraph 2 before she traveled to France.'],
        'She earned an international pilot\'s license, becoming the first African American woman and first Native American woman to hold one.',
        ['She walked four miles every day to a one-room school in Texas.', 'This was part of her childhood in paragraph 1.'],
        ['She heard stories told by soldiers who had flown over Europe.', 'Hearing soldiers was her early inspiration in paragraph 2.'],
      ],
      answer: 1,
      explain: 'Paragraph 3 highlights her historic achievement on June 15, 1921, when she became the first African American woman and first Native American woman to earn an international pilot\'s license.',
    }),
    mcq({
      standard: 'rla:3.6H', cites: [1, 4],
      stem: 'By synthesizing Bessie\'s early life in paragraph 1 with her actions in paragraph 4, what broader conclusion can the reader draw?',
      choices: [
        ['Athletic pilots should never speak to audiences at schools.', 'Bessie spoke regularly at schools and churches.'],
        ['Texas cotton farmers usually retired to become international stunt pilots.', 'Bessie\'s journey was an extraordinary individual achievement.'],
        'A person born into humble beginnings can use education, bravery, and persistence to inspire generations of people.',
        ['Spectators in the 1920s disliked watching aerial loops and spins.', 'Paragraph 4 states thousands of spectators cheered her shows.'],
      ],
      answer: 2,
      explain: 'Connecting her humble origins as a child walking miles to a schoolhouse with her role inspiring integrated audiences across the country shows that persistence can transform humble beginnings into lasting inspiration.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [4],
      stem: 'Which quotation from paragraph 4 demonstrates Bessie\'s commitment to fairness and civil rights?',
      choices: [
        '"She toured the country giving speeches at schools and churches, always refusing to perform at airfields that would not admit integrated audiences."',
        ['"When Queen Bess returned to America, thousands of cheering spectators packed air shows..."', 'This describes crowd size.'],
        ['"Bessie Coleman was born in 1892 in Atlanta, Texas..."', 'This is her birth fact from paragraph 1.'],
        ['"At the prestigious Caudron Brothers flight school in Le Crotoy, France..."', 'This names her flight school from paragraph 3.'],
      ],
      answer: 0,
      explain: 'Refusing to perform at airfields that practiced racial segregation directly demonstrates her unwavering stance on civil rights and equality.',
    }),
    mcq({
      standard: 'rla:3.3A', cites: [3],
      stem: 'Read this dictionary entry:\n\n**license** /lye-sens/ *noun*\n1. a legal document giving official permission\n2. freedom to act or speak\n3. an excess of liberty\n4. a vehicle registration tag\n\nWhich definition best matches the meaning of **license** as used in paragraph 3?',
      choices: [
        'Definition 1',
        ['Definition 2', 'Definition 2 refers to artistic or social freedom, not an official pilot certification.'],
        ['Definition 3', 'Definition 3 refers to misconduct, not a pilot credential.'],
        ['Definition 4', 'Definition 4 refers to automobile license plates.'],
      ],
      answer: 0,
      explain: 'In paragraph 3, an international pilot\'s license refers to an official legal document granting permission to fly aircraft.',
    }),
  ],
});
