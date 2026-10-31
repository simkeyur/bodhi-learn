// Grade 3 literary nonfiction: Carmen Lomas Garza, Texas Mexican-American artist.
// Word count: ~253 words (range 250-650).
// Questions cover central idea (3.9D.i), text structure (3.10B), inference (3.6F),
// key details (3.6G), synthesize (3.6H), and text evidence (3.7C), dictionary (3.3A).

import { makeSet, mcq } from '../author.ts';

export const BIO_GARZA = makeSet({
  id: 'g3-bio-garza',
  grade: 3,
  kind: 'reading',
  title: 'Carmen Lomas Garza: Painting Memories',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g3-bio-garza-p',
    title: 'Carmen Lomas Garza: Painting Memories',
    genre: 'literaryNonfiction',
    blocks: [
      { kind: 'p', text: 'Carmen Lomas Garza grew up in Kingsville, Texas. She was born in 1948. As a young girl, she loved art. Her mother was an artist. Carmen watched her mother paint. Soon Carmen began to draw too. She drew animals, green trees, and happy people. When she was thirteen, Carmen made a big choice. She decided to become an artist. She practiced her drawing every day after school.' },
      { kind: 'p', text: 'In school, Carmen loved to read. But the books did not show Mexican American families like her own. Carmen wanted to change that. She wanted books to show her community. When she grew up, Carmen began to paint her childhood memories. She painted everyday life in South Texas.' },
      { kind: 'p', text: 'Carmen painted sweet memories of her family. She painted people making warm tamales in the kitchen. She painted children playing with a birthday piñata. She painted families sitting on the roof to look at stars. Carmen used bright colors. She added small details, like food on plates and smiles on faces.' },
      { kind: 'p', text: 'Carmen worked hard at her art. She went to college to study painting. She learned how to make prints and paper cutouts. Still, her favorite subject was her Texas home. She loved sharing the true stories of her parents, grandparents, and cousins.' },
      { kind: 'p', text: 'Later, Carmen put her paintings into children\'s books. She wrote each story in English and Spanish. That way, many children could read them. Today, her paintings hang in famous museums like the Smithsonian. Children look at her colorful art and learn about Texas family life.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9D.i', cites: [2, 3, 5],
      stem: 'What is the central idea of the selection?',
      choices: [
        ['Many artists only paint pictures of wild animals and green trees.', 'The selection focuses specifically on Carmen\'s life and artwork.'],
        'Carmen shared her culture by painting family memories.',
        ['Children need to study art in college before reading picture books.', 'The text does not state children must study art to read books.'],
        ['Famous art museums only display paintings that were made long ago.', 'The text shows modern art hanging in museums today.'],
      ],
      answer: 1,
      explain: 'The selection explains how Carmen Lomas Garza celebrated her Mexican American heritage by painting everyday family traditions from South Texas.',
    }),
    mcq({
      standard: 'rla:3.10B', cites: [1, 2, 3, 4, 5],
      stem: 'How does the author organize the selection?',
      choices: [
        'By sharing the events of Carmen\'s life in order from childhood.',
        ['By comparing how to mix paint colors with how to make clay pottery pots.', 'The author does not discuss clay pottery or compare paint mixtures.'],
        ['By listing different art supplies in order of their cost in stores.', 'The text does not list prices or rank painting materials.'],
        ['By describing the history of Texas schools and public library buildings.', 'The focus is on Carmen\'s life, not school history.'],
      ],
      answer: 0,
      explain: 'The author presents the story chronologically, starting with Carmen\'s Texas childhood and moving through her adulthood and art career.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [2],
      stem: 'What can the reader infer from Carmen\'s feelings about books in paragraph 2?',
      choices: [
        ['She wanted to stop reading books when she was a student in school.', 'Carmen loved to read as a student.'],
        ['She thought all children\'s books should be printed in black and white.', 'Carmen used bright colors in her art.'],
        'She wanted to see her community shown in books.',
        ['She believed that only grown-ups should visit local public libraries.', 'Carmen wanted all children to see books about Hispanic culture.'],
      ],
      answer: 2,
      explain: 'Because the books in her school did not show Mexican American families, Carmen wanted books that showed her own community and culture.',
    }),
    mcq({
      standard: 'rla:3.6G', cites: [3],
      stem: 'Which detail from paragraph 3 describes something Carmen included in her paintings?',
      choices: [
        ['Children planting vegetable seeds in a school garden.', 'Gardening seeds is not mentioned in paragraph 3.'],
        ['Students riding yellow buses to visit famous museums.', 'Museum visits are discussed in paragraph 5.'],
        ['Workers building wooden tables for a neighborhood park.', 'Building park tables is not mentioned in the text.'],
        'Family members making warm tamales in the kitchen.',
      ],
      answer: 3,
      explain: 'Paragraph 3 states that Carmen painted scenes such as people making warm tamales together in the kitchen.',
    }),
    mcq({
      standard: 'rla:3.6H', cites: [1, 5],
      stem: 'What can the reader conclude by connecting Carmen\'s childhood choice in paragraph 1 with her success in paragraph 5?',
      choices: [
        ['People who love to draw should move away from their Texas hometowns.', 'Carmen celebrated her Texas roots throughout her life.'],
        'Practicing a dream can lead to lasting success.',
        ['Making art is easy and never requires regular practice after school.', 'Carmen practiced drawing every day after school.'],
        ['Every young student who draws pictures will work in a famous museum.', 'The text highlights Carmen\'s unique individual achievements.'],
      ],
      answer: 1,
      explain: 'Deciding to become an artist at age thirteen and practicing daily led to Carmen\'s artwork hanging in famous national museums.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [3],
      stem: 'Which quotation from paragraph 3 shows that Carmen painted everyday family moments?',
      choices: [
        ['"Carmen Lomas Garza grew up in Kingsville, Texas."', 'This sentence appears in paragraph 1, not paragraph 3.'],
        '"She painted people making warm tamales in the kitchen."',
        ['"When she grew up, Carmen began to paint her childhood memories."', 'This sentence appears in paragraph 2, not paragraph 3.'],
        ['"Today, her paintings hang in famous museums like the Smithsonian."', 'This sentence appears in paragraph 5, not paragraph 3.'],
      ],
      answer: 1,
      explain: 'In paragraph 3, the sentence describing families making tamales together in the kitchen illustrates everyday family life.',
    }),
    mcq({
      standard: 'rla:3.3A', cites: [4],
      stem: 'Read this dictionary entry:\n\n**subject** /ˈsʌb.dʒɪkt/ *noun*\n1. a person ruled by a king or queen\n2. a topic being discussed or depicted\n3. a course of study in a classroom\n4. a word naming who performs the action\n\nWhich definition best matches the meaning of **subject** as used in paragraph 4?',
      choices: [
        ['Definition 1 (a person under rule)', 'Paragraph 4 is discussing topics of art, not royalty.'],
        ['Definition 3 (a classroom course)', 'Paragraph 4 refers to the topic of her artwork, not a school subject.'],
        'Definition 2',
        ['Definition 4 (a word performing action)', 'This refers to grammar, not art topics.'],
      ],
      answer: 2,
      explain: 'In paragraph 4, Carmen\'s favorite subject means the topic or theme depicted in her paintings—her Texas home and family.',
    }),
  ],
});
