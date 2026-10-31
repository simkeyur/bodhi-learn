// Grade 3 persuasive: A student council speech advocating for planting shade trees on the playground.
// Word count: ~256 words (range 250-650).
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
      { kind: 'p', text: 'Good morning, classmates and teachers. If you have been on our playground in the afternoon, you know the metal slide is hot. It feels hot enough to fry an egg in two seconds flat! The blacktop basketball court and open play fields bake under the hot Texas sun. On sunny days, the playground gets too hot for comfortable play. Right now, our playground does not have shade trees. It is time for Sunnyvale Elementary to plant five native Texas shade trees around our playground borders.' },
      { kind: 'p', text: 'First, shade trees keep us cool. Big trees can cool the ground by up to twenty degrees. When children play under an oak or elm tree, shade protects them from sunburn. Shade keeps students from getting too tired in the heat. Trees block the bright glare. A cooler playground means happier students and safer recess. They give sweet shade for everyone to enjoy.' },
      { kind: 'p', text: 'Second, planting trees helps local birds and butterflies. Native trees like bur oaks and pecans bring songbirds and helpful insects. Trees also help our learning. Our science classes could adopt a tree, measure its yearly growth with tape measures, and observe seasonal changes firsthand.' },
      { kind: 'p', text: 'Planting trees does not have to cost lots of money. The Texas Forest Service gives free young trees to schools. Parents have promised to help dig holes and water the plants. Volunteers can bring shovels from home. Kids can help plant them during science club. Please sign our student petition today. Let us work together and make our school playground a green, cool oasis!' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9E.i', cites: [1],
      stem: 'What is the speaker\'s central claim in the speech?',
      choices: [
        ['Students should stay inside the building during the entire school year.', 'The speaker wants a cooler playground so students can play safely.'],
        'Sunnyvale Elementary should plant five shade trees.',
        ['The school should remove the outdoor blacktop basketball court.', 'The speaker proposes planting trees around borders, not removing courts.'],
        ['Parents should install large electric air conditioners on the grass.', 'The proposal focuses on planting natural shade trees.'],
      ],
      answer: 1,
      explain: 'In paragraph 1, the speaker clearly states the claim: "It is time for Sunnyvale Elementary to plant five native Texas shade trees around our playground borders."',
    }),
    mcq({
      standard: 'rla:3.9E.ii', cites: [2],
      stem: 'Which statement from paragraph 2 is a fact that can be proved true?',
      choices: [
        ['Playing outside is the most exciting part of third grade.', 'Personal excitement is an opinion, not an objective scientific fact.'],
        ['The slide feels hot enough to fry an egg in two seconds.', 'This is a humorous exaggeration, not a scientific fact.'],
        'Big trees can cool the ground by up to twenty degrees.',
        ['Recess is much more fun under an elm than under an oak.', 'Personal preference for tree types is a subjective opinion.'],
      ],
      answer: 2,
      explain: 'The fact that trees can cool ground surface temperatures by up to twenty degrees can be tested and proven scientifically.',
    }),
    mcq({
      standard: 'rla:3.9E.iii',
      stem: 'Who is the speaker\'s intended audience for this speech?',
      choices: [
        ['Astronauts working aboard the space station.', 'The speech is addressed to a local elementary school.'],
        ['Fishermen sailing along the Texas coast.', 'The topic is an elementary playground, not coastal fishing.'],
        ['Bus mechanics repairing vehicle engines.', 'The focus is on schoolyard trees.'],
        'Students and teachers at the school.',
      ],
      answer: 3,
      explain: 'The speaker addresses "classmates and teachers" and asks for signatures on a student petition, speaking directly to the school community.',
    }),
    mcq({
      standard: 'rla:3.10F', cites: [1, 4],
      stem: 'How does the speaker\'s language ("green, cool oasis," "fry an egg") affect the speech?',
      choices: [
        ['It makes the speaker sound bored and uninterested in student comfort.', 'The speaker is energetic and motivated.'],
        ['It makes the speaker seem angry with teachers and playground staff.', 'The tone is cheerful and persuasive.'],
        'It creates an enthusiastic voice that rallies support.',
        ['It makes the planting plan seem too complicated to finish.', 'The voice makes the plan sound fun and achievable.'],
      ],
      answer: 2,
      explain: 'Lively, vivid words create an upbeat, persuasive voice that encourages listeners to sign the petition and help.',
    }),
    mcq({
      standard: 'rla:3.10G', cites: [1],
      stem: 'Why does the speaker say the slide feels "hot enough to fry an egg in two seconds flat"?',
      choices: [
        ['To share a simple recipe for cooking lunch on the playground.', 'The speaker is not cooking food.'],
        'To exaggerate how hot the slide gets without shade.',
        ['To prove that playground slides are made from frying pans.', 'Playground slides are play equipment, not pans.'],
        ['To warn students that wild birds lay eggs on the slide.', 'No bird nests or eggs are discussed.'],
      ],
      answer: 1,
      explain: 'The speaker uses hyperbole to exaggerate the heat and emphasize how urgently the playground needs shade.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4],
      stem: 'What can the reader infer about planting the trees from paragraph 4?',
      choices: [
        'The project is possible with help from volunteers.',
        ['The school district will need to raise millions of dollars.', 'Free trees and parent volunteers keep costs low.'],
        ['Trees will take many years before they can be planted outside.', 'Volunteers are ready to plant trees this autumn.'],
        ['Nobody in the neighborhood cares about helping the campus.', 'Parents have promised to bring shovels and water.'],
      ],
      answer: 0,
      explain: 'Free saplings from the Texas Forest Service and willing parent volunteers show that the project can be done easily with community help.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [3],
      stem: 'Which quotation from paragraph 3 shows how trees help science learning?',
      choices: [
        ['"Our blacktop basketball court and open play fields bake under the hot Texas sun."', 'This describes the hot playground in paragraph 1.'],
        ['"Native trees like bur oaks and pecans bring songbirds and helpful insects."', 'This describes wildlife benefits.'],
        ['"The Texas Forest Service gives free young trees to schools."', 'This describes funding assistance in paragraph 4.'],
        '"Our science classes could adopt a tree..."',
      ],
      answer: 3,
      explain: 'Adopting a tree, measuring its growth, and observing seasonal changes directly show educational benefits for science classes.',
    }),
  ],
});
