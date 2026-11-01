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
        ['Kingsville, Texas, is home to the largest and most famous collection of children\'s picture books in the United States.', 'Kingsville is Carmen\'s hometown, not the location of a national book collection.'],
        'Carmen Lomas Garza became a celebrated artist by painting memories of Mexican American family life in Texas.',
        ['Studying painting in college is required before an artist can illustrate children\'s books.', 'College was Carmen\'s personal educational path, not a required rule for illustrating books.'],
        ['Most famous painters create pictures of wild animals rather than people making food in kitchens.', 'Carmen drew animals as a young girl, but the text focuses on her lifelong dedication to painting family traditions.'],
      ],
      answer: 1,
      explain: 'The selection explains how Carmen Lomas Garza celebrated her Mexican American heritage by painting everyday family traditions from South Texas.',
    }),
    mcq({
      standard: 'rla:3.10B', cites: [1, 2, 3, 4, 5],
      stem: 'How does the author organize the selection?',
      choices: [
        'By describing the important events of Carmen\'s life in chronological order from her childhood to adulthood.',
        ['By comparing how to mix paint colors on a palette with how to carve wooden statues.', 'The biography tells Carmen\'s life story in chronological order rather than comparing art techniques.'],
        ['By presenting the steps needed to publish and sell a bilingual picture book in bookstores.', 'Carmen authored bilingual books, but the text does not provide a guide to book publishing.'],
        ['By explaining the history of public school buildings and art museums in South Texas.', 'The selection focuses on Carmen\'s life and artwork rather than the history of public buildings.'],
      ],
      answer: 0,
      explain: 'The author presents the story chronologically, starting with Carmen\'s Texas childhood and moving through her adulthood and art career.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [2],
      stem: 'What can the reader infer from Carmen\'s thoughts about books in paragraph 2?',
      choices: [
        ['She thought reading books in school was a waste of time compared to painting on canvas in her studio.', 'Paragraph 2 explicitly states that Carmen loved reading as a schoolchild.'],
        ['She believed that all books should only be written in Spanish for South Texas families.', 'Carmen embraced both English and Spanish in her bilingual books so everyone could enjoy them.'],
        'She wanted children\'s literature to reflect the traditions and faces of her own community.',
        ['She was eager to move away from Kingsville so she could find better libraries.', 'Carmen cherished her South Texas home and drew inspiration from her hometown community.'],
      ],
      answer: 2,
      explain: 'Because the books in her school did not show Mexican American families, Carmen wanted books that showed her own community and culture.',
    }),
    mcq({
      standard: 'rla:3.6G', cites: [3],
      stem: 'Which detail from paragraph 3 describes something Carmen included in her paintings?',
      choices: [
        ['Children waiting together at the morning school bus stop.', 'Paragraph 3 describes playing with a piñata and stargazing from the roof, but not school buses.'],
        ['Families harvesting crops across green South Texas fields.', 'Farm harvesting is not mentioned among the memories listed in paragraph 3.'],
        ['Students touring a national art museum in the city.', 'Museum displays are discussed in paragraph 5, not as subjects listed in paragraph 3.'],
        'People gathering in the kitchen to make warm tamales.',
      ],
      answer: 3,
      explain: 'Paragraph 3 states that Carmen painted scenes such as people making warm tamales together in the kitchen.',
    }),
    mcq({
      standard: 'rla:3.6H', cites: [1, 5],
      stem: 'What can the reader conclude by connecting Carmen\'s childhood choice in paragraph 1 with her success in paragraph 5?',
      choices: [
        ['Artists who practice daily usually finish their schooling earlier than other students.', 'The text shows Carmen studied hard in college rather than finishing school early.'],
        'Dedication to practicing a craft from a young age can lead to meaningful achievements later in life.',
        ['Childhood drawings are usually more valuable to museum directors than paintings made by adults.', 'The Smithsonian displays Carmen\'s mature adult paintings, not her early childhood sketches.'],
        ['Young children should only paint scenes that are already shown in school reading books.', 'Carmen is celebrated because she painted new cultural traditions that were not yet in books.'],
      ],
      answer: 1,
      explain: 'Deciding to become an artist at age thirteen and practicing daily led to Carmen\'s artwork hanging in famous national museums.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [3],
      stem: 'Which quotation from paragraph 3 shows that Carmen painted everyday family moments?',
      choices: [
        ['"Carmen Lomas Garza grew up in Kingsville, Texas."', 'This sentence appears in paragraph 1 and introduces her hometown.'],
        '"She painted people making warm tamales in the kitchen."',
        ['"When she grew up, Carmen began to paint her childhood memories."', 'This sentence appears in paragraph 2 and describes her general decision to paint memories.'],
        ['"Today, her paintings hang in famous museums like the Smithsonian."', 'This sentence comes from paragraph 5 and explains where her art is displayed today.'],
      ],
      answer: 1,
      explain: 'In paragraph 3, the sentence describing families making tamales together in the kitchen illustrates everyday family life.',
    }),
    mcq({
      standard: 'rla:3.3A', cites: [4],
      stem: 'Read this dictionary entry:\n\n**subject** /ˈsʌb.dʒɪkt/ *noun*\n1. a person ruled by a king or queen\n2. a topic being discussed or depicted\n3. a course of study in a classroom\n4. a word naming who performs the action\n\nWhich definition best matches the meaning of **subject** as used in paragraph 4?',
      choices: [
        ['Definition 1 (a person under rule)', 'Paragraph 4 discusses the themes of Carmen\'s artwork, not citizens under royal rule.'],
        'Definition 2 (a topic being discussed or depicted)',
        ['Definition 3 (a classroom course)', 'Paragraph 4 refers to the artistic topic of her paintings, not a school academic course.'],
        ['Definition 4 (a word naming the person or thing performing the action)', 'This definition refers to the grammatical subject of a sentence rather than an art theme.'],
      ],
      answer: 1,
      explain: 'In paragraph 4, Carmen\'s favorite subject means the topic or theme depicted in her paintings—her Texas home and family.',
    }),
  ],
});
