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
        'Sunnyvale Elementary should plant native Texas shade trees around the playground borders.',
        ['Students should spend all of afternoon recess playing quiet indoor games inside the cafeteria.', 'The speaker wants a cooler playground so students can enjoy outdoor recess.'],
        ['The school board should replace the blacktop basketball court with an open dirt field.', 'The speaker proposes planting trees along borders, not removing the blacktop.'],
        ['Parents should purchase canvas umbrellas for every child to carry across the playground.', 'The speech advocates for permanent shade trees rather than personal umbrellas.'],
      ],
      answer: 0,
      explain: 'In paragraph 1, the speaker clearly states the claim: "It is time for Sunnyvale Elementary to plant five native Texas shade trees around our playground borders."',
    }),
    mcq({
      standard: 'rla:3.9E.ii', cites: [2],
      stem: 'Which statement from paragraph 2 is a factual statement that can be proven true?',
      choices: [
        ['Playing tag under shady pecan trees is always more exciting than playing on the slide.', 'Whether a game is more exciting under shade is a personal feeling, not a measurable fact.'],
        'Shade from big trees can lower ground surface temperatures by up to twenty degrees.',
        ['Recess under a pecan tree is much more enjoyable than recess under a live oak tree.', 'Choosing which tree species is more enjoyable is a subjective preference.'],
        ['A shady playground makes every single student happy during morning recess.', 'Predicting the exact emotions of all students is an opinion rather than a provable fact.'],
      ],
      answer: 1,
      explain: 'The fact that trees can cool ground surface temperatures by up to twenty degrees can be tested and proven scientifically.',
    }),
    mcq({
      standard: 'rla:3.9E.iii',
      stem: 'Who is the speaker\'s intended audience for this speech?',
      choices: [
        ['Nursery owners who sell commercial gardening supplies in town.', 'The speaker addresses the school community to gather petition support, not commercial sellers.'],
        ['City engineers who design paved highways and traffic signals.', 'The speech concerns elementary playground equipment and trees, not public road engineering.'],
        'Classmates and teachers at Sunnyvale Elementary School.',
        ['High school athletes preparing for weekend track meets.', 'The speaker speaks directly to elementary classmates and teachers about their playground.'],
      ],
      answer: 2,
      explain: 'The speaker addresses "classmates and teachers" and asks for signatures on a student petition, speaking directly to the school community.',
    }),
    mcq({
      standard: 'rla:3.10F', cites: [1, 4],
      stem: 'How does the speaker\'s lively language ("green, cool oasis," "fry an egg") affect the speech?',
      choices: [
        ['It makes the speaker seem angry with teachers about playground safety rules.', 'The speaker speaks enthusiastically and encourages cooperation rather than showing anger.'],
        ['It suggests that the speaker is bored and uninterested in student comfort.', 'The speaker demonstrates genuine excitement about making recess cooler and safer.'],
        'It creates an energetic, enthusiastic voice that motivates listeners to support the project.',
        ['It confuses listeners by making the tree-planting project sound far too complicated and impossible to finish.', 'The vivid language is meant to excite and unite students rather than make the project seem too hard.'],
      ],
      answer: 2,
      explain: 'Lively, vivid words create an upbeat, persuasive voice that encourages listeners to sign the petition and help.',
    }),
    mcq({
      standard: 'rla:3.10G', cites: [1],
      stem: 'Why does the speaker say the metal slide feels "hot enough to fry an egg in two seconds flat"?',
      choices: [
        'To use humorous exaggeration to emphasize how dangerously hot the playground gets in the sun.',
        ['To explain to elementary students how to prepare and cook lunch outdoors during science class.', 'The comparison is an exaggerated figure of speech, not practical cooking instructions.'],
        ['To suggest that the cafeteria staff should prepare breakfast on the metal slide.', 'The speaker uses the phrase for humor and emphasis, not as a food preparation idea.'],
        ['To warn students that wild birds might leave fresh eggs on playground equipment.', 'The text uses hyperbole about heat, not an actual warning about wild bird eggs.'],
      ],
      answer: 0,
      explain: 'The speaker uses hyperbole to exaggerate the heat and emphasize how urgently the playground needs shade.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4],
      stem: 'What can the reader infer about the tree-planting project from paragraph 4?',
      choices: [
        ['The school principal will need to apply for expensive loans before buying any trees.', 'The Texas Forest Service provides young trees for free, so loans are not needed.'],
        'The school can successfully plant the trees because parents, students, and community groups will help.',
        ['Teachers will have to do all the physical digging and watering without any outside assistance.', 'Parents and volunteers have promised to bring shovels, dig holes, and help water.'],
        ['The science club will need to wait several years before starting the petition.', 'The speaker asks listeners to sign the petition immediately so work can begin soon.'],
      ],
      answer: 1,
      explain: 'Free saplings from the Texas Forest Service and willing parent volunteers show that the project can be done easily with community help.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [3],
      stem: 'Which quotation from paragraph 3 shows how trees can support student learning?',
      choices: [
        ['"The blacktop basketball court and open play fields bake under the hot Texas sun."', 'This sentence appears in paragraph 1 and describes the overheated playground.'],
        ['"Native trees like bur oaks and pecans bring songbirds and helpful insects."', 'This sentence describes benefits for local songbirds and insects rather than classroom learning.'],
        '"Our science classes could adopt a tree, measure its yearly growth with tape measures, and observe seasonal changes firsthand."',
        ['"The Texas Forest Service gives free young trees to schools."', 'This sentence appears in paragraph 4 and explains how the school gets saplings.'],
      ],
      answer: 2,
      explain: 'Adopting a tree, measuring its growth, and observing seasonal changes directly show educational benefits for science classes.',
    }),
  ],
});
