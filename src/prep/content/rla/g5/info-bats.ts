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
        ['Mexican free-tailed bats use echolocation to detect flying insects more than a mile up in the air.', 'Echolocation is a fascinating biological detail from paragraph 5, but not the central idea of the entire article.'],
        ['Guided evening tours allow tourists to watch millions of bats exit Bracken Cave during the summer.', 'Guided tours are mentioned in the final section as a way to protect the bats, not the main focus of the text.'],
        'The immense bat colony at Bracken Cave benefits Texas agriculture and requires careful protection.',
        ['Conservation groups purchase undeveloped rural acreage across Texas to keep wildlife habitats wild.', 'Land purchases explain how the cave was protected, but do not capture the article\'s full discussion of the colony.'],
      ],
      answer: 2,
      explain: 'Each section develops the central idea that Bracken Cave hosts a remarkable colony whose insect consumption aids farmers and whose preservation is vital.',
    }),
    mcq({
      standard: 'rla:5.9D.ii',
      stem: 'How does the sidebar "A Year at Bracken Cave" assist the reader\'s understanding?',
      choices: [
        ['It explains the scientific mechanics of how high-frequency echolocation pulses bounce off flying insects.', 'Echolocation is explained in the body paragraph under "The Evening Flight," not in the sidebar.'],
        ['It calculates the exact dollar amount Texas farmers save each growing season by reducing pesticide spraying.', 'Economic benefits to agriculture are discussed in "Bug Control for Farmers," not in the sidebar timeline.'],
        ['It provides a detailed geological description of the underground limestone chambers inside the roost cave.', 'The sidebar lists calendar months and life cycle events rather than geological descriptions.'],
        'It presents a chronological timeline summarizing the seasonal life cycle and migration of the colony.',
      ],
      answer: 3,
      explain: 'The sidebar summarizes key events from March to October in chronological order, allowing readers to view the colony\'s annual cycle at a glance.',
    }),
    mcq({
      standard: 'rla:5.9D.iii', cites: [6, 7],
      stem: 'How is the information organized in the section "Bug Control for Farmers"?',
      choices: [
        ['Through a compare-and-contrast pattern showing how bats catch flying prey more effectively than nocturnal insect-eating birds.', 'The section does not compare bats to birds; it focuses on their relationship with agricultural pests.'],
        'Through a cause-and-effect structure explaining how bats eating moths reduces crop damage and lowers pesticide costs.',
        ['Through a chronological sequence listing the specific hourly feeding patterns of adult bats throughout a single summer night.', 'The section discusses ecological and financial impacts rather than providing an hour-by-hour timeline of a night.'],
        ['Through a problem-and-solution structure outlining how chemical pesticide manufacturers develop safer sprays for cotton crops.', 'The text explains how bats naturally reduce the need for pesticides, not how chemical companies make sprays.'],
      ],
      answer: 1,
      explain: 'Paragraphs 6 and 7 use cause and effect: because bats eat moths, fewer crop-eating caterpillars hatch, allowing farmers to reduce pesticide use and save money.',
    }),
    msq({
      standard: 'rla:5.6G', cites: [8],
      stem: 'Which **two** details best support the idea that the bat colony is easy to harm?',
      choices: [
        'Bats have only one pup a year, so the colony grows back slowly.',
        ['The bats can fly more than a mile high in search of moths.', 'Flying high shows flight endurance, not biological vulnerability.'],
        'People entering the cave or building too close can disturb the bats.',
        ['The evening flight is large enough to appear on regional weather radar.', 'Radar appearance illustrates the immense colony size, not its fragility.'],
        ['Mothers identify their individual pups using distinctive sound and scent.', 'This explains parental recognition, not vulnerability to habitat disturbance.'],
      ],
      answers: [0, 2],
      explain: 'Paragraph 8 explains that because bats produce only one pup annually and are vulnerable to human disturbance and development, the colony recovers slowly if damaged.',
    }),
    mcq({
      standard: 'rla:5.10C',
      stem: 'Why does the author divide the article with headings such as "The Evening Flight" and "Protecting the Colony"?',
      choices: [
        'To preview the central topic of each section and help readers navigate the text.',
        ['To indicate which sections contain the most dramatic and exciting scientific facts.', 'Headings organize information by subject matter rather than rating how exciting facts are.'],
        ['To introduce open-ended research questions that readers are expected to answer.', 'Headings are topical titles rather than questions for the reader to research.'],
        ['To credit the various university biologists who contributed research to the article.', 'Headings categorize content topics rather than identifying contributing scientists.'],
      ],
      answer: 0,
      explain: 'Headings divide the article into clear topical sections, previewing upcoming content and helping the reader locate key information.',
    }),
    twoq({
      standard: 'rla:5.7C', cites: [6],
      a: {
        prompt: 'Part A: According to the article, why are the bats of Bracken Cave valuable to Texas farmers?',
        choices: [
          ['They pollinate wild flowers and fruit trees as they fly through rural farming valleys.', 'The article focuses on insect predation, not pollination services.'],
          ['They frighten away nuisance flocking birds that peck at ripening ears of yellow corn.', 'The text does not mention bats scaring away wild birds.'],
          'They consume vast quantities of insects that would otherwise damage important cash crops.',
          ['They enrich the soil around cultivated crop fields by scattering collected seeds.', 'The passage discusses pest consumption rather than seed dispersal or fertilization.'],
        ],
        answer: 2,
      },
      b: {
        prompt: 'Part B: Which sentence from the article best supports the answer to Part A?',
        choices: [
          ['"Every evening, the bats leave the cave to hunt. They spiral upward in a twisting column that can last for hours." (paragraph 4)', 'This sentence describes the emergence flight rather than how bats help farmers.'],
          '"Many of those insects are moths whose caterpillars damage crops such as corn and cotton." (paragraph 6)',
          ['"Scientists estimate that more than 15 million Mexican free-tailed bats live there from spring to fall." (paragraph 2)', 'This quotation gives the estimated population of the colony rather than explaining its agricultural value.'],
          ['"A colony this large is surprisingly easy to harm." (paragraph 8)', 'This sentence introduces the vulnerability of the colony, not its value to farming.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 6 directly explains that bats eat moths whose caterpillars destroy corn and cotton, protecting crops and reducing pesticide expenses.',
    }),
    mcq({
      standard: 'rla:5.10A',
      stem: 'What is the author\'s primary purpose in writing this article?',
      choices: [
        ['To entertain readers with an imaginative fictional story about a swarm of bats flying beneath the Texas summer moon.', 'The text is factual, informative nonfiction rather than an imaginative fiction story.'],
        ['To persuade families to travel to San Antonio to purchase tickets for guided evening nature walks across the hills.', 'Tourism is mentioned only as a controlled activity to protect the bats, not as the primary goal of the article.'],
        ['To provide aspiring naturalists with detailed step-by-step instructions for installing wooden bat houses in backyards.', 'The article describes a wild cave colony and does not provide instructions for building backyard shelters.'],
        'To inform readers about the ecological significance of the Bracken Cave bats and the importance of preserving them.',
      ],
      answer: 3,
      explain: 'The author informs readers about the biology, behavior, and agricultural benefits of the Bracken Cave bats, concluding with an appeal to protect their habitat.',
    }),
  ],
});
