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
        ['Hurricanes form over warm tropical ocean waters and produce heavy coastal flooding before moving inland across states.', 'Hurricane origin is a supporting detail from paragraph 2, not the main focus of the entire selection.'],
        'Although tornadoes and hurricanes are both spinning storms, they differ significantly in origin, scale, and preparation time.',
        ['Tornadoes produce the fastest atmospheric winds on Earth, sometimes exceeding two hundred miles per hour during severe weather.', 'Tornado wind speeds illustrate storm intensity in paragraph 5, but do not capture the whole comparison.'],
        ['Texas experiences a higher frequency of catastrophic severe storm damage than any other geographic region in North America.', 'Paragraph 1 notes Texas weather, but the article focuses on comparing two storm types rather than state rankings.'],
      ],
      answer: 1,
      explain: 'The opening paragraph introduces the central comparison, and each subsequent section examines how tornadoes and hurricanes differ in formation, scale, and warning time.',
    }),
    mcq({
      standard: 'rla:5.9D.iii',
      stem: 'How does the author organize the majority of the information in the article?',
      choices: [
        ['By presenting a chronological narrative following the historical path of a single devastating hurricane across the Gulf Coast.', 'The text does not tell the chronological story of one specific storm; it compares two distinct classes of weather phenomena.'],
        ['By organizing a problem-and-solution format detailing how meteorologists design storm-resistant building materials.', 'The article focuses on storm characteristics and warning times rather than architectural engineering solutions.'],
        'By using a compare-and-contrast structure to examine the similarities and differences between tornadoes and hurricanes.',
        ['By listing historical weather records in order of scientific importance to emergency response coordinators.', 'The article examines storm features topic by topic rather than ranking historical weather records.'],
      ],
      answer: 2,
      explain: 'The author compares and contrasts the two storm types across multiple categories, highlighting differences in where they form, their physical dimensions, wind speeds, and evacuation lead times.',
    }),
    mcq({
      standard: 'rla:5.10B',
      stem: 'Why does the author pair a paragraph about hurricanes with a paragraph about tornadoes beneath each heading?',
      choices: [
        ['To demonstrate that ocean hurricanes always cause greater financial devastation than inland tornadoes.', 'The author treats both storms as dangerous and compares their different scales rather than declaring one worse.'],
        ['To explain the step-by-step scientific process required to build complex computer weather forecasting models.', 'The paired paragraphs describe storm behavior, not computer programming or meteorological modeling.'],
        ['To persuade coastal residents to permanently relocate their families away from vulnerable flood zones.', 'The text informs readers about weather science and safety rather than urging people to relocate.'],
        'To allow readers to evaluate and contrast the specific characteristics of both storms side by side.',
      ],
      answer: 3,
      explain: 'Placing paragraphs about hurricanes and tornadoes under the same heading allows the reader to directly compare specific features such as origin, size, and warning times.',
    }),
    mcq({
      standard: 'rla:5.9D.ii',
      stem: 'How does the sidebar "Storm Safety" contribute to the reader\'s understanding of the topic?',
      choices: [
        'It provides direct, actionable safety instructions for protecting oneself during each type of storm.',
        ['It explains the physical atmospheric conditions needed for rotational thunderstorms to develop over land.', 'The scientific formation of storms is discussed in the body text under "Where They Begin," not in the sidebar.'],
        ['It contrasts the scientific measurement tools used by airborne weather recon planes and orbiting satellites.', 'Forecasting technology is mentioned in paragraph 6, whereas the sidebar focuses strictly on personal safety steps.'],
        ['It lists the five costliest hurricanes and deadliest tornadoes that have struck the United States.', 'The sidebar contains emergency safety advice rather than a historical list of storm records.'],
      ],
      answer: 0,
      explain: 'While the main article explains the meteorological science of storms, the sidebar supplies practical emergency safety rules for each situation.',
    }),
    msq({
      standard: 'rla:5.6G', cites: [4, 6],
      stem: 'Which **two** details show how hurricanes and tornadoes are different?',
      choices: [
        'A hurricane can be hundreds of miles wide, but most tornadoes are less than a mile wide.',
        ['Both storms are composed of rapidly rotating columns of atmospheric wind.', 'This describes a shared characteristic rather than a difference.'],
        'Hurricanes can be watched for days, but tornadoes may give only a few minutes of warning.',
        ['Both varieties of storms have the potential to inflict severe structural damage on communities.', 'This is a shared impact rather than a distinguishing difference.'],
        ['Texas weather patterns frequently generate powerful seasonal storms across the state.', 'This is a general regional fact rather than a comparison between the storms.'],
      ],
      answers: [0, 2],
      explain: 'Paragraph 4 contrasts the massive size of hurricanes with the localized width of tornadoes, and paragraph 6 contrasts their warning times.',
    }),
    twoq({
      standard: 'rla:5.7C', cites: [5],
      a: {
        prompt: 'Part A: According to the article, which hazard frequently results in the greatest destruction during a hurricane?',
        choices: [
          ['The calm atmospheric eye located in the central core of the storm', 'The eye is calm and rain-free, not a source of destructive damage.'],
          ['Rapidly rotating funnel clouds that touch down in open pastures', 'Funnel clouds describe tornadoes, which are not the primary cause of hurricane damage.'],
          'Widespread flooding caused by heavy rainfall and pushed ocean waters',
          ['Continuous cloud-to-ground lightning produced by the thunderclouds', 'The passage attributes primary hurricane damage to flooding and storm surge rather than lightning.'],
        ],
        answer: 2,
      },
      b: {
        prompt: 'Part B: Which sentence from the article best supports the answer to Part A?',
        choices: [
          ['"When the winds reach 74 miles per hour, the storm is officially a hurricane." (paragraph 2)', 'This sentence defines hurricane wind thresholds rather than explaining damage causes.'],
          '"Hurricanes also push ocean water onto land and drop enormous amounts of rain, so flooding often causes the most damage." (paragraph 5)',
          ['"A hurricane can be hundreds of miles wide, large enough to cover several states at once." (paragraph 4)', 'This quotation describes overall geographic size rather than identifying flooding as the chief damage hazard.'],
          ['"Families on the coast often have several days to prepare or leave." (paragraph 6)', 'This sentence describes evacuation lead time rather than property damage causes.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 5 states that hurricanes push storm surge inland and dump massive rainfall, making flooding the primary cause of damage.',
    }),
    mcq({
      standard: 'rla:5.10C',
      stem: 'How do the section headings help the reader follow the author\'s ideas?',
      choices: [
        ['They establish which storm variety poses a greater immediate physical threat to human life.', 'Headings indicate subject categories rather than evaluating which storm is more dangerous.'],
        ['They outline the chronological life cycle stages of a rotating thundercloud system.', 'The headings categorize comparative topics rather than tracing a single storm\'s life cycle.'],
        ['They summarize the emergency evacuation orders issued by county emergency officials.', 'Headings organize informational text rather than providing official evacuation orders.'],
        'They clearly identify the specific points of comparison used to contrast the two storms.',
      ],
      answer: 3,
      explain: 'The headings ("Where They Begin," "Size and Strength," and "Time to Get Ready") define the specific points of comparison examined across the article.',
    }),
  ],
});
