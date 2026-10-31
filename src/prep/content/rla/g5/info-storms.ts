// Grade 5 informational text organized by comparison: an original article with well-known facts. Questions
// cover central idea, organization, structure and purpose, text features, key ideas and evidence.

import { makeSet, mcq, msq, twoq } from '../author.ts';

export const INFO_STORMS = makeSet({
  id: 'g5-info-storms',
  grade: 5,
  kind: 'reading',
  title: 'Twisters and Hurricanes',
  intro: 'Read the article and choose the best answer to each question.',
  passages: [{
    id: 'g5-info-storms-p',
    title: 'Twisters and Hurricanes: Two Kinds of Spinning Storms',
    genre: 'informational',
    blocks: [
      { kind: 'p', text: 'Texas gets more than its share of wild weather. Two of the most powerful storms that strike the state are tornadoes and hurricanes. Both are made of spinning winds, and both can do serious damage. But they form in different places, grow to very different sizes, and give people very different amounts of warning.' },
      { kind: 'heading', text: 'Where They Begin' },
      { kind: 'p', text: 'A hurricane begins far out over the ocean, where the water is very warm. Warm, wet air rises from the sea and forms huge thunderstorm clouds. As more air rushes in, the storms begin to spin around a calm center called the eye. When the winds reach 74 miles per hour, the storm is officially a hurricane.' },
      { kind: 'p', text: 'A tornado, on the other hand, usually begins over land. It forms underneath a powerful thunderstorm, when winds blowing at different speeds and directions cause the air to start rotating. A funnel-shaped cloud may stretch down from the storm. When the spinning column touches the ground, it becomes a tornado.' },
      { kind: 'heading', text: 'Size and Strength' },
      { kind: 'p', text: 'The biggest difference between the two storms is their size. A hurricane can be hundreds of miles wide, large enough to cover several states at once. Most tornadoes are less than a mile wide, and many are only as wide as a few football fields.' },
      { kind: 'p', text: 'Size is not the same as strength, though. The winds inside the strongest tornadoes are the fastest winds on Earth, sometimes spinning at more than 200 miles per hour. A hurricane\'s winds are usually slower, but they cover a much larger area and blow for many hours. Hurricanes also push ocean water onto land and drop enormous amounts of rain, so flooding often causes the most damage.' },
      { kind: 'heading', text: 'Time to Get Ready' },
      { kind: 'p', text: 'Because hurricanes form over the ocean and move slowly, scientists can watch them for days with satellites and special airplanes. Families on the coast often have several days to prepare or leave. Tornadoes form quickly and usually last only a few minutes. A tornado warning may give people just a few minutes to find shelter.' },
      { kind: 'sidebar', title: 'Storm Safety', text: 'Tornado: Go to a basement or a small room with no windows on the lowest floor. Cover your head. Hurricane: Follow your family\'s plan, listen to local officials, and leave if you are told to. Never walk or drive through floodwater.' },
      { kind: 'p', text: 'Tornadoes and hurricanes may look different on a weather map, but both deserve respect. Knowing how each storm works helps people stay safe when the sky turns dangerous.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:5.9D.i', cites: [1],
      stem: 'What is the central idea of the article?',
      choices: [
        ['Hurricanes form over warm ocean waters before moving inland.', 'This is one detail from one section.'],
        'Spinning storms differ in formation, size, and warning.',
        ['Tornadoes generate the fastest spinning winds recorded on Earth.', 'This detail supports a comparison but is not the central idea.'],
        ['Texas experiences more severe storm damage than any other state.', 'The article says Texas gets more than its share, but that is not what the article is mainly about.'],
      ],
      answer: 1,
      explain: 'Paragraph 1 states the idea, and each section develops it: where the storms begin, their size and strength, and the warning time.',
    }),
    mcq({
      standard: 'rla:5.9D.iii',
      stem: 'How does the author organize most of the information in the article?',
      choices: [
        ['By telling the story of one storm from beginning to end.', 'The article is not about one storm.'],
        ['By listing problems and their solutions throughout history.', 'Only the sidebar gives solutions.'],
        'By comparing and contrasting the two kinds of storms',
        ['By explaining events in order of importance to scientists.', 'The sections compare features, not rank events.'],
      ],
      answer: 2,
      explain: 'Each section explains how hurricanes and tornadoes are alike or different. Words like "on the other hand" and "the biggest difference" signal a compare-and-contrast structure.',
    }),
    mcq({
      standard: 'rla:5.10B',
      stem: 'Why does the author place a paragraph about hurricanes next to one about tornadoes?',
      choices: [
        ['To prove that coastal hurricanes cause more total damage than tornadoes.', 'The author treats both storms as serious.'],
        'To help readers directly compare the two storms',
        ['To explain step-by-step how atmospheric cloud formations develop in air.', 'The paragraphs are not in time order.'],
        ['To convince readers to relocate their homes away from dangerous weather.', 'The article informs; it doesn\'t persuade readers to move.'],
      ],
      answer: 1,
      explain: 'The author\'s purpose is to explain how the storms differ. Placing the two side by side under each heading helps readers compare them topic by topic.',
    }),
    mcq({
      standard: 'rla:5.9D.ii',
      stem: 'How does the sidebar "Storm Safety" add to the article?',
      choices: [
        'It gives practical storm safety steps.',
        ['It explains the conditions needed for tornadoes to form.', 'That is in the section "Where They Begin."'],
        ['It compares the wind speeds and overall sizes of storms.', 'That is in the section "Size and Strength."'],
        ['It lists the most destructive storms in modern history.', 'No storms are listed by name.'],
      ],
      answer: 0,
      explain: 'The article explains how the storms work. The sidebar adds something new: what to do in each storm to stay safe.',
    }),
    msq({
      standard: 'rla:5.6G', cites: [4, 6],
      stem: 'Which **two** details show how hurricanes and tornadoes are different?',
      choices: [
        'A hurricane can be hundreds of miles wide, but most tornadoes are less than a mile wide.',
        ['Both storms are made of spinning winds.', 'This shows how they are alike, not different.'],
        'Hurricanes can be watched for days, but tornadoes may give only a few minutes of warning.',
        ['Both storms can cause serious damage.', 'This is a similarity.'],
        ['Texas gets wild weather.', 'This is about Texas, not about a difference between the storms.'],
      ],
      answers: [0, 2],
      explain: 'Paragraph 4 contrasts their size, and paragraph 6 contrasts the warning time. The other details describe ways the storms are alike or facts about Texas.',
    }),
    twoq({
      standard: 'rla:5.7C', cites: [5],
      a: {
        prompt: 'Part A: According to the article, what often causes the most damage in a hurricane?',
        choices: [
          ['The calm eye inside the center of the storm', 'The eye is calm.'],
          ['Tornadoes that develop within thunderclouds', 'The article doesn\'t say this.'],
          'Flooding from heavy rain and storm surge',
          ['Lightning strikes produced by the thunderstorms', 'Lightning is not mentioned.'],
        ],
        answer: 2,
      },
      b: {
        prompt: 'Part B: Which sentence best supports the answer to Part A?',
        choices: [
          ['"When the winds reach 74 miles per hour, the storm is officially a hurricane." (paragraph 2)', 'This tells when a storm becomes a hurricane.'],
          '"Flooding often causes the most damage." (paragraph 5)',
          ['"A hurricane can be hundreds of miles wide, large enough to cover several states at once." (paragraph 4)', 'This is about size.'],
          ['"Families on the coast often have several days to prepare or leave." (paragraph 6)', 'This is about warning time.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 5 says hurricanes push ocean water onto land and drop huge amounts of rain, "so flooding often causes the most damage."',
    }),
    mcq({
      standard: 'rla:5.10C',
      stem: 'How do the headings help readers of this article?',
      choices: [
        ['They show which storm is more dangerous to people.', 'The headings name topics, not which storm is worse.'],
        ['They show the order in which spinning storms form.', 'Only one section is about how storms form.'],
        ['They explain the safety steps readers should take.', 'The safety steps are in the sidebar.'],
        'They identify topics used to compare the storms.',
      ],
      answer: 3,
      explain: '"Where They Begin," "Size and Strength," and "Time to Get Ready" are the three points of comparison. They help readers find each part of the comparison.',
    }),
  ],
});
