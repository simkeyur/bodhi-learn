// Grade 5 informational text: an original article. Facts kept to well-documented ones (Bat Conservation
// International's Bracken Cave Preserve). Questions cover central idea, text features, organization, key
// ideas, evidence and author's purpose.

import { makeSet, mcq, msq, twoq } from '../author.ts';

export const INFO_BATS = makeSet({
  id: 'g5-info-bats',
  grade: 5,
  kind: 'reading',
  title: 'The Bats of Bracken Cave',
  intro: 'Read the article and choose the best answer to each question.',
  passages: [{
    id: 'g5-info-bats-p',
    title: 'The Bats of Bracken Cave',
    genre: 'informational',
    blocks: [
      { kind: 'p', text: 'On a summer evening just north of San Antonio, Texas, visitors gather quietly at the edge of a rocky hillside. They are waiting for one of the most amazing sights in nature. As the sun sinks, a dark cloud begins to pour out of a hole in the ground. The cloud is alive. It is made of millions of bats.' },
      { kind: 'heading', text: 'A City Under the Ground' },
      { kind: 'p', text: 'Bracken Cave is the summer home of the largest bat colony in the world. Scientists estimate that more than 15 million Mexican free-tailed bats live there from spring to fall. That is more bats than there are people in most countries.' },
      { kind: 'p', text: 'Almost all of these bats are mothers and their babies. The females fly north from Mexico each spring. In June, each mother gives birth to a single pup. The pups cling to the cave ceiling in huge groups, packed tightly together to stay warm. When a mother returns from hunting, she finds her own pup among millions by listening for its call and recognizing its scent.' },
      { kind: 'sidebar', title: 'A Year at Bracken Cave', text: 'March: Mothers arrive from Mexico. June: Pups are born. July: Pups learn to fly. October: The colony begins flying south to Mexico for the winter.' },
      { kind: 'heading', text: 'The Evening Flight' },
      { kind: 'p', text: 'Every evening, the bats leave the cave to hunt. They spiral upward in a twisting column that can last for hours. The flight is so large that it shows up on weather radar, looking like a storm spreading across the screen.' },
      { kind: 'p', text: 'Once they are in the air, the bats can fly more than a mile high. There, they catch insects carried by the wind. Bats find their food using echolocation. They make high-pitched sounds and listen for the echoes that bounce back from moths and other insects.' },
      { kind: 'heading', text: 'Bug Control for Farmers' },
      { kind: 'p', text: 'The bats of Bracken Cave eat tons of insects every night. Many of those insects are moths whose caterpillars damage crops such as corn and cotton. When bats eat the moths, fewer caterpillars hatch to feed on the plants.' },
      { kind: 'p', text: 'This helps farmers in a big way. With fewer pests, farmers do not need to spray as much pesticide on their fields. Scientists who study this have found that bats save farmers a great deal of money each year. In a way, the bats are a free pest-control service that works every night of the summer.' },
      { kind: 'heading', text: 'Protecting the Colony' },
      { kind: 'p', text: 'A colony this large is surprisingly easy to harm. Bats have only one pup a year, so a colony grows back slowly if many bats are lost. If people enter the cave or build too close to it, the bats can be disturbed.' },
      { kind: 'p', text: 'For this reason, a conservation group owns and protects the land around Bracken Cave. When houses were planned nearby, the group and its supporters raised money to buy more land and keep it wild. Today, visitors can watch the evening flight only on special guided nights, so the bats stay safe.' },
      { kind: 'p', text: 'The next time you see a bat, remember Bracken Cave. These small, quiet animals do a big job for Texas, and protecting their home helps people too.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:5.9D.i',
      stem: 'What is the central idea of the article?',
      choices: [
        ['Bats use echolocation to find insects in the dark.', 'This is true, but it is one detail from one section.'],
        ['Visitors can watch bats only on special nights.', 'This detail comes near the end and is not what the whole article is about.'],
        'The huge bat colony at Bracken Cave is amazing to see and helps people, so it is worth protecting.',
        ['Mexican free-tailed bats fly north from Mexico every spring.', 'This is a detail about when the bats arrive.'],
      ],
      answer: 2,
      explain: 'Each section adds to one big idea: the colony is amazing (the evening flight), useful (bug control for farmers) and worth protecting (the last section). A central idea covers the whole article, not one detail.',
    }),
    mcq({
      standard: 'rla:5.9D.ii',
      stem: 'How does the sidebar "A Year at Bracken Cave" help the reader?',
      choices: [
        'It shows the order of the bats\' yearly events in one short list.',
        ['It explains how echolocation works.', 'Echolocation is explained in the section "The Evening Flight."'],
        ['It tells how much money bats save farmers.', 'The money is mentioned in "Bug Control for Farmers," not in the sidebar.'],
        ['It describes what the cave looks like inside.', 'The sidebar lists months and events, not what the cave looks like.'],
      ],
      answer: 0,
      explain: 'The sidebar lists March, June, July and October with what happens in each month. Readers can see the bats\' whole year at a glance.',
    }),
    mcq({
      standard: 'rla:5.9D.iii',
      stem: 'How is the information in the section "Bug Control for Farmers" organized?',
      choices: [
        ['It compares bats with birds.', 'Birds are not mentioned.'],
        'It explains a cause and its effects: bats eat moths, so there are fewer pests and farmers save money.',
        ['It lists events in the order they happen during one night.', 'The section explains why bats help, not what happens hour by hour.'],
        ['It describes a problem and asks the reader to solve it.', 'The section explains how bats already help.'],
      ],
      answer: 1,
      explain: 'Paragraphs 6 and 7 connect causes and effects: bats eat moths, so fewer caterpillars hatch; with fewer pests, farmers spray less and save money.',
      cites: [6, 7],
    }),
    msq({
      standard: 'rla:5.6G',
      stem: 'Which **two** details best support the idea that the bat colony is easy to harm?',
      choices: [
        'Bats have only one pup a year, so the colony grows back slowly.',
        ['The bats can fly more than a mile high.', 'This shows how strong the bats are, not how they can be harmed.'],
        'People entering the cave or building too close can disturb the bats.',
        ['The evening flight shows up on weather radar.', 'This shows how large the colony is.'],
        ['Mothers find their pups by sound and scent.', 'This is about how mothers care for pups.'],
      ],
      answers: [0, 2],
      explain: 'Paragraph 8 gives both reasons the colony is easy to harm: bats have only one pup a year, and people nearby can disturb them.',
      cites: [8],
    }),
    mcq({
      standard: 'rla:5.10C',
      stem: 'Why does the author use headings such as "The Evening Flight" and "Protecting the Colony"?',
      choices: [
        ['To show which parts of the article are most exciting', 'Headings name topics. They do not rank how exciting a part is.'],
        ['To list the questions the reader should answer', 'The headings are not questions.'],
        'To tell the reader what each section of the article is about',
        ['To give the names of scientists who studied the bats', 'No scientists are named.'],
      ],
      answer: 2,
      explain: 'Headings divide an article into sections and tell what each section covers, so readers can follow the topics and find information quickly.',
    }),
    twoq({
      standard: 'rla:5.7C', cites: [6],
      a: {
        prompt: 'Part A: According to the article, why are the bats important to farmers?',
        choices: [
          'They eat moths whose caterpillars damage crops.',
          ['They spread seeds that help crops grow.', 'The article does not say bats spread seeds.'],
          ['They scare away birds that eat corn.', 'Birds are not mentioned.'],
          ['They bring visitors who buy farm products.', 'Visitors watch the flight, but the article does not connect them to farm sales.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which sentence from the article best supports the answer to Part A?',
        choices: [
          ['"Every evening, the bats leave the cave to hunt." (paragraph 4)', 'This says the bats hunt but not what they eat or why it matters.'],
          '"Many of those insects are moths whose caterpillars damage crops such as corn and cotton." (paragraph 6)',
          ['"Bats find their food using echolocation." (paragraph 5)', 'This explains how bats hunt, not why they help farmers.'],
          ['"A colony this large is surprisingly easy to harm." (paragraph 8)', 'This is about protecting the bats.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 6 says the moths\' caterpillars damage corn and cotton, so when bats eat the moths, crops are protected.',
    }),
    mcq({
      standard: 'rla:5.10A',
      stem: 'What is the author\'s main purpose for writing the article?',
      choices: [
        ['To entertain readers with a made-up story about a bat', 'The article gives facts about real bats.'],
        'To inform readers about the Bracken Cave bats and why they matter',
        ['To persuade readers to visit San Antonio', 'San Antonio is mentioned only to tell where the cave is.'],
        ['To teach readers how to build a bat house', 'The article never explains how to build anything.'],
      ],
      answer: 1,
      explain: 'The article is full of facts about the colony, how it lives and how it helps people. Its purpose is to inform. The last paragraph adds a message: protecting the bats helps people too.',
    }),
  ],
});
