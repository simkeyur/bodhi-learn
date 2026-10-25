// Grade 3 persuasive: A student council speech advocating for planting shade trees on the playground.
// Word count: ~310 words (range 250-650).
// Questions cover claim (3.9E.i), facts for argument (3.9E.ii), audience (3.9E.iii),
// voice (3.10F), hyperbole (3.10G), inference (3.6F), and text evidence (3.7C).

import { makeSet, mcq } from '../author.ts';

export const PERSUADE_TREES = makeSet({
  id: 'g3-persuade-trees',
  grade: 3,
  kind: 'reading',
  title: 'Cool Our Playground with Shade Trees',
  intro: 'Read the speech and choose the best answer to each question.',
  passages: [{
    id: 'g3-persuade-trees-p',
    title: 'Cool Our Playground with Shade Trees',
    genre: 'persuasive',
    blocks: [
      { kind: 'p', text: 'Good morning, fellow classmates and teachers. If you have stepped outside onto our school playground at two o\'clock on an August afternoon, you know that the metal slide feels hot enough to fry an egg in two seconds flat! Our blacktop basketball court and open play fields bake under the scorching Texas sun. Right now, our playground does not have a single large shade tree. It is time for Sunnyvale Elementary to plant five native Texas shade trees around our playground borders.' },
      { kind: 'p', text: 'First, shade trees provide natural, refreshing cooling. According to the United States Forest Service, mature leafy trees can cool surface temperatures on asphalt by up to twenty-five degrees. When children play in the shade of a live oak or cedar elm, they are protected from harmful ultraviolet sunburns and heat exhaustion. A cooler playground means fewer scraped knees, happier recesses, and less overheating.' },
      { kind: 'p', text: 'Second, planting native trees creates a living outdoor classroom and improves local wildlife habitats. Native Texas trees like bur oaks and pecan trees attract colorful songbirds, native butterflies, and beneficial pollinating insects. Our science classes could adopt a tree, measure its yearly growth with tape measures, and observe seasonal changes firsthand.' },
      { kind: 'p', text: 'Planting trees does not have to be expensive. The Texas A&M Forest Service offers free tree saplings and grant assistance to elementary campuses each autumn for Texas Arbor Day. Local parent volunteers have already promised to help dig holes and install drip irrigation bags. Join me in signing our student petition today, and let us work together to make our playground a green, cool oasis!' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9E.i', cites: [1],
      stem: 'What is the speaker\'s central claim in the speech?',
      choices: [
        ['Students should stop playing outdoors during the entire school year.', 'The speaker wants a cooler playground so students can play safely.'],
        'Sunnyvale Elementary should plant five native Texas shade trees around the playground.',
        ['The school should tear down the blacktop basketball court.', 'The speaker proposes planting trees around borders, not removing courts.'],
        ['Parents should bring electric air conditioners to the playground.', 'The proposal focuses on planting natural shade trees.'],
      ],
      answer: 1,
      explain: 'In paragraph 1, the speaker clearly states the claim: "It is time for Sunnyvale Elementary to plant five native Texas shade trees around our playground borders."',
    }),
    mcq({
      standard: 'rla:3.9E.ii', cites: [2],
      stem: 'Which verifiable scientific fact does the speaker cite in paragraph 2 to prove the cooling benefit of trees?',
      choices: [
        'The U.S. Forest Service reports that mature leafy trees can cool asphalt surface temperatures by up to twenty-five degrees.',
        ['The metal slide is the hottest object in the entire solar system.', 'This is an exaggeration or hyperbole, not a scientific fact.'],
        ['Every student in Texas prefers pecan trees over live oak trees.', 'Tree preferences cannot be proven as universal facts.'],
        ['Texas Arbor Day is the most exciting holiday of the year.', 'Excitement is a subjective personal opinion.'],
      ],
      answer: 0,
      explain: 'The statistic from the U.S. Forest Service citing a temperature reduction of up to 25 degrees is an objective, verifiable scientific fact.',
    }),
    mcq({
      standard: 'rla:3.9E.iii',
      stem: 'Who is the speaker\'s intended audience for this speech?',
      choices: [
        ['Astronauts working on the international space station.', 'The speech is addressed to a local school community.'],
        'Students, teachers, and school community members at Sunnyvale Elementary.',
        ['Fishermen sailing off the coast of Galveston.', 'The topic is an elementary school playground in Texas.'],
        ['Car mechanics repairing diesel truck engines.', 'The focus is on schoolyard trees.'],
      ],
      answer: 1,
      explain: 'The speaker begins by greeting "fellow classmates and teachers" and urges listeners to sign a student petition, directly addressing the Sunnyvale Elementary campus.',
    }),
    mcq({
      standard: 'rla:3.10F', cites: [1, 4],
      stem: 'How does the speaker\'s energetic language ("green, cool oasis," "fry an egg") contribute to the voice of the speech?',
      choices: [
        ['It makes the speaker sound indifferent and uninterested in student comfort.', 'The speaker is passionate and energetic.'],
        'It creates a persuasive, enthusiastic, and spirited voice that engages peers and rallies support.',
        ['It gives the impression of someone complaining without wanting any solutions.', 'The speaker presents practical, constructive solutions.'],
        ['It makes the proposal sound impossible and confusing to carry out.', 'The voice makes the plan sound simple, appealing, and achievable.'],
      ],
      answer: 1,
      explain: 'Vivid imagery and upbeat phrases establish an enthusiastic, motivating voice that inspires fellow students to sign the petition and take action.',
    }),
    mcq({
      standard: 'rla:3.10G', cites: [1],
      stem: 'Why does the speaker use hyperbole when saying the slide "feels hot enough to fry an egg in two seconds flat"?',
      choices: [
        ['To give a recipe for cooking breakfast outdoors on the playground.', 'The speaker is not cooking eggs.'],
        'To humorously exaggerate how extremely hot the slide gets in order to emphasize the desperate need for shade.',
        ['To prove that metal slides are made of kitchen frying pans.', 'Slides are playground equipment, not kitchen cookware.'],
        ['To warn students that birds lay eggs on playground equipment.', 'No bird eggs are discussed.'],
      ],
      answer: 1,
      explain: 'Hyperbole is deliberate exaggeration for dramatic effect. Claiming an egg would fry in two seconds emphasizes the intense playground heat.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4],
      stem: 'What can the reader infer about the practical steps required to plant the trees based on paragraph 4?',
      choices: [
        ['The school district will need to spend millions of dollars from taxes.', 'Free saplings and volunteer labor keep costs low.'],
        ['Trees will take forty years before they can be planted in dirt.', 'Volunteers are ready to plant saplings this autumn.'],
        'The project is realistic and achievable because organizations provide free saplings and volunteers offer labor.',
        ['Nobody in the community cares about helping the elementary school.', 'Parent volunteers have already promised to dig holes.'],
      ],
      answer: 2,
      explain: 'Paragraph 4 shows that free saplings from the Texas A&M Forest Service and willing parent volunteers make the project affordable and feasible.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [3],
      stem: 'Which quotation from paragraph 3 shows how the trees would benefit science students?',
      choices: [
        '"Our science classes could adopt a tree, measure its yearly growth with tape measures, and observe seasonal changes firsthand."',
        ['"Native Texas trees like bur oaks and pecan trees attract colorful songbirds..."', 'This describes wildlife.'],
        ['"The Texas A&M Forest Service offers free tree saplings..."', 'This describes funding in paragraph 4.'],
        ['"Our blacktop basketball court and open play fields bake under the scorching sun."', 'This describes the heat in paragraph 1.'],
      ],
      answer: 0,
      explain: 'Adopting a tree, measuring its growth, and observing seasonal changes directly illustrates educational benefits for science classes.',
    }),
  ],
});
