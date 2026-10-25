// Grade 3 informational: The Mexican free-tailed bats of Austin's Congress Avenue Bridge.
// Word count: ~310 words (range 250-650).
// Questions cover central idea (3.9D.i), text features (3.9D.ii), organizational pattern (3.9D.iii),
// author's purpose (3.10A), inference (3.6F), key details (3.6G), and text evidence (3.7C).

import { makeSet, mcq } from '../author.ts';

export const INFO_BATS = makeSet({
  id: 'g3-info-bats',
  grade: 3,
  kind: 'reading',
  title: 'Austin\'s Amazing Flying Mammals',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g3-info-bats-p',
    title: 'Austin\'s Amazing Flying Mammals',
    genre: 'informational',
    blocks: [
      { kind: 'heading', text: 'A Surprising Urban Home' },
      { kind: 'p', text: 'Every year between March and November, the Ann W. Richards Congress Avenue Bridge in downtown Austin becomes home to the largest urban bat colony in North America. More than 1.5 million Mexican free-tailed bats roost in the narrow concrete expansion crevices beneath the roadway. During the day, the mother bats sleep upside down in tight clusters, keeping their newborn pups warm in the dark concrete crevices.' },
      { kind: 'heading', text: 'The Sunset Flight' },
      { kind: 'p', text: 'As the sun dips below the Austin skyline each evening, a magical transformation occurs. Thousands of bats begin fluttering beneath the arches. Suddenly, a spiraling black ribbon of flying mammals surges into the twilight sky over Lady Bird Lake. For nearly an hour, a continuous river of wings sweeps south across Central Texas to hunt for food.' },
      { kind: 'heading', text: 'Natural Pest Controllers' },
      { kind: 'p', text: 'These nocturnal hunters provide an enormous ecological benefit to Texas farmers. Using echolocation—high-frequency clicking sounds that bounce off flying targets—a single colony consumes up to twenty thousand pounds of flying insects every single night. They eat beetles, moths, and crop-destroying corn earworms, saving agricultural communities millions of dollars in crop damage without the need for harmful chemical pesticides.' },
      { kind: 'heading', text: 'Welcoming the Bats' },
      { kind: 'p', text: 'When bats first moved under the bridge in 1980 after a redesign created narrow crevices, many frightened city residents petitioned to remove them. But wildlife biologists taught the community that bats are gentle, harmless neighbors when left alone. Today, hundreds of thousands of tourists gather along the riverbanks each summer to celebrate Austin\'s famous flying ambassadors.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9D.i', cites: [1, 3],
      stem: 'What is the central idea of the selection?',
      choices: [
        ['Downtown Austin is too noisy for nocturnal animals to survive.', 'The bats thrive under the downtown bridge.'],
        'Austin\'s Congress Avenue Bridge hosts a massive bat colony that provides vital ecological benefits by consuming pest insects.',
        ['Tourists only visit Central Texas during freezing winter months.', 'Tourists gather during warm summer evenings.'],
        ['Bridges built of concrete always collapse without maintenance.', 'The bridge provides a safe, warm habitat for bats.'],
      ],
      answer: 1,
      explain: 'The selection highlights the unique colony of 1.5 million bats residing beneath the Austin bridge and explains how their insect diet protects Texas crops.',
    }),
    mcq({
      standard: 'rla:3.9D.ii', cites: [1, 2, 3, 4],
      stem: 'How do the section headings help the reader understand the selection?',
      choices: [
        ['They list the names of famous scientists in alphabetical order.', 'The headings describe topics, not scientist names.'],
        'They organize the text into distinct topics, such as the habitat, evening flight, pest control benefits, and human history.',
        ['They provide step-by-step instructions for building wooden bat houses.', 'The text does not include instructions for making bat houses.'],
        ['They give directions for driving cars across Lady Bird Lake.', 'The headings divide informational topics about bats.'],
      ],
      answer: 1,
      explain: 'Section headings ("A Surprising Urban Home," "The Sunset Flight," "Natural Pest Controllers," "Welcoming the Bats") break the text into clear topical sections for the reader.',
    }),
    mcq({
      standard: 'rla:3.9D.iii', cites: [3],
      stem: 'Which organizational pattern does the author use in paragraph 3 to explain how bats help Texas farmers?',
      choices: [
        'Cause and effect, showing how bats eating nocturnal insects results in millions of dollars in crop savings for farmers.',
        ['Chronological sequence listing the history of pesticide production since 1900.', 'No chemical history timeline is presented.'],
        ['Comparison showing the differences between birds and bats.', 'Birds are not compared in paragraph 3.'],
        ['Problem and solution describing how farmers trap bats in cages.', 'Farmers benefit from bats; they do not trap them.'],
      ],
      answer: 0,
      explain: 'Paragraph 3 uses cause and effect: the cause is bats eating 20,000 pounds of insects nightly, and the effect is preventing crop damage and saving farmers millions of dollars.',
    }),
    mcq({
      standard: 'rla:3.10A',
      stem: 'What is the author\'s main purpose in writing this selection?',
      choices: [
        ['To frighten readers into staying away from downtown Austin after sunset.', 'The author portrays the bats as gentle and celebrated.'],
        'To inform readers about the habits, benefits, and history of the Congress Avenue bat colony.',
        ['To convince the Texas legislature to tear down concrete bridges.', 'The bridge serves as a beneficial sanctuary.'],
        ['To entertain readers with a fictional myth about magical animals.', 'The selection presents real, factual information.'],
      ],
      answer: 1,
      explain: 'The author\'s goal is informational: providing engaging facts about where the bats roost, how they fly, and how they protect Texas agriculture.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4],
      stem: 'What can the reader conclude from paragraph 4 about community attitudes toward bats in Austin?',
      choices: [
        ['Residents still want all the bats removed immediately.', 'Residents now celebrate the bats.'],
        ['City leaders passed laws banning tourists from standing on the riverbank.', 'Thousands of tourists are welcomed every summer.'],
        'Education from wildlife biologists helped citizens appreciate bats as beneficial neighbors rather than fearing them.',
        ['Bats prefer living inside human houses rather than under bridges.', 'Bats live in the concrete bridge crevices.'],
      ],
      answer: 2,
      explain: 'Paragraph 4 shows the shift from initial fear in 1980 to widespread appreciation and tourism after biologists educated the community.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [3],
      stem: 'Which sentence from paragraph 3 provides evidence that bats eat an enormous quantity of food?',
      choices: [
        '"Using echolocation—high-frequency clicking sounds that bounce off flying targets—a single colony consumes up to twenty thousand pounds of flying insects every single night."',
        ['"Every year between March and November, the bridge becomes home to bats..."', 'This is from paragraph 1.'],
        ['"Suddenly, a spiraling black ribbon of flying mammals surges into the twilight sky..."', 'This describes their flight in paragraph 2.'],
        ['"Today, hundreds of thousands of tourists gather along the riverbanks..."', 'This describes tourism in paragraph 4.'],
      ],
      answer: 0,
      explain: 'Consuming "up to twenty thousand pounds of flying insects every single night" directly proves the immense amount of food eaten by the colony.',
    }),
  ],
});
