// Grade 3 drama: A short play set at the Fredericksburg Farmers Market.
// Word count: ~310 words (range 250-650).
// Questions cover drama elements: dialogue, stage directions, acts (3.9C),
// plot elements (3.8C), character relationships (3.8B), inference (3.6F),
// and text evidence (3.7C).

import { makeSet, mcq } from '../author.ts';

export const DRAMA_MARKET = makeSet({
  id: 'g3-drama-market',
  grade: 3,
  kind: 'reading',
  title: 'The Peaches of Fredericksburg',
  intro: 'Read the play and choose the best answer to each question.',
  passages: [{
    id: 'g3-drama-market-p',
    title: 'The Peaches of Fredericksburg',
    genre: 'drama',
    blocks: [
      { kind: 'heading', text: 'Characters' },
      { kind: 'direction', text: 'ELENA: A nine-year-old girl helping at her family\'s orchard booth.\nGRANDPA KLAUS: Elena\'s grandfather and peach orchard owner.\nMRS. REYES: A neighborhood customer searching for fresh produce.' },
      { kind: 'heading', text: 'Act I, Scene 1' },
      { kind: 'direction', text: 'Setting: Saturday morning at the open-air Fredericksburg Farmers Market. Colorful striped tents fill the town square. Crates of ripe, velvet peaches sit neatly arranged on a wooden table.' },
      { kind: 'speech', speaker: 'ELENA', text: '[Polishing a large, red-orange peach with a soft cloth and setting it atop a wooden crate] Look at this pyramid of fruit, Grandpa! We have the most beautiful peach display in the whole market square.' },
      { kind: 'speech', speaker: 'GRANDPA KLAUS', text: '[Chuckling warmly as he straightens a chalkboard sign] You arranged them with great care, Elena. But remember, beauty is only half the secret of a successful market day. A great farmer also greets every visitor like a welcome guest in their own home.' },
      { kind: 'speech', speaker: 'MRS. REYES', text: '[Approaching the booth with an empty wicker basket, looking puzzled] Good morning! I am hoping to bake a fresh peach cobbler for my grandson\'s birthday celebration tonight, but I never know which peaches are sweet enough for baking.' },
      { kind: 'speech', speaker: 'ELENA', text: '[Smiling warmly and stepping forward] We can certainly help you with that, Mrs. Reyes! For a cobbler, you want freestone peaches that are soft near the stem. May I slice a sample for you to taste right now?' },
      { kind: 'speech', speaker: 'GRANDPA KLAUS', text: '[Nodding with pride as Elena hands Mrs. Reyes a fresh slice] You see, Elena? You already know how to make people feel right at home.' },
      { kind: 'speech', speaker: 'MRS. REYES', text: '[Tasting the peach slice and smiling broadly] Oh my goodness, this tastes like pure sunshine! Please pack a dozen of your sweetest peaches in my basket.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9C', cites: [1, 2],
      stem: 'What is the purpose of stage directions in brackets?',
      choices: [
        ['They tell the audience which actors are getting paid the most money.', 'Stage directions guide actors\' movements and emotions, not pay.'],
        'They describe characters\' actions and movements.',
        ['They give a step-by-step recipe for making sweet peach cobbler.', 'Stage directions are not recipes.'],
        ['They list difficult vocabulary words that characters must shout.', 'Brackets indicate physical actions and gestures on stage.'],
      ],
      answer: 1,
      explain: 'Stage directions instruct actors on how to move, what props to use, and how to deliver lines with emotion.',
    }),
    mcq({
      standard: 'rla:3.8C', cites: [3, 4, 6],
      stem: 'What problem does Mrs. Reyes have, and how is it resolved?',
      choices: [
        ['Mrs. Reyes lost her shopping wallet, so Grandpa offers her free fruit.', 'Mrs. Reyes has an empty basket ready to buy fruit.'],
        ['Mrs. Reyes wants fresh apples, but the booth only sells watermelons.', 'The booth sells peaches.'],
        'Mrs. Reyes needs baking peaches, so Elena gives a sample.',
        ['Mrs. Reyes cannot find the town square where the market is set up.', 'She is already standing at the booth.'],
      ],
      answer: 2,
      explain: 'Mrs. Reyes does not know which peaches are sweet enough for cobbler, so Elena explains what to look for and offers a delicious sample.',
    }),
    mcq({
      standard: 'rla:3.8B', cites: [2, 5],
      stem: 'How does Grandpa Klaus support Elena at the market?',
      choices: [
        'He teaches her to welcome visitors kindly.',
        ['He scolds Elena for setting up the crates of fruit too slowly.', 'Grandpa compliments her careful arrangement.'],
        ['He tells Elena to sit quietly and never speak to any shoppers.', 'He encourages her to greet visitors warmly.'],
        ['He leaves Elena alone at the booth while he eats his lunch.', 'Grandpa stays beside her throughout the scene.'],
      ],
      answer: 0,
      explain: 'Grandpa explains that a great farmer greets every visitor like a guest in their home, and praises Elena when she helps Mrs. Reyes.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4, 6],
      stem: 'What can the reader infer about Elena from speech 4?',
      choices: [
        ['She dislikes the taste of fruit and never eats peaches.', 'She enthusiastically offers a peach slice.'],
        'She knows what makes fruit good for baking.',
        ['She wants Mrs. Reyes to leave the fruit stand quickly.', 'Elena welcomes Mrs. Reyes and offers a sample.'],
        ['She guesses randomly because she knows nothing about farming.', 'Elena provides specific advice on freestone peaches.'],
      ],
      answer: 1,
      explain: 'Recommending freestone peaches that are soft near the stem shows that Elena understands orchard produce and baking.',
    }),
    mcq({
      standard: 'rla:3.9C',
      stem: 'How does the play begin before any dialogue starts?',
      choices: [
        ['By printing the entire script in a foreign language for actors.', 'The play is written in English.'],
        ['By singing a musical song to welcome visitors to the market.', 'The text is a written play script.'],
        ['By showing a street map of grocery stores located in Austin.', 'The setting is Fredericksburg town square.'],
        'With a cast list and a description of the setting.',
      ],
      answer: 3,
      explain: 'Plays typically begin with a cast list of characters followed by a description of the setting and props before lines are spoken.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [6],
      stem: 'Which quotation from speech 6 shows that Mrs. Reyes liked the peach?',
      choices: [
        ['"A great farmer also greets every visitor like a welcome guest in their own home."', 'This is Grandpa\'s advice in speech 2.'],
        ['"Look at this pyramid of fruit, Grandpa! We have the most beautiful peach display..."', 'This is Elena speaking in speech 1.'],
        '"Oh my goodness, this tastes like pure sunshine!"',
        ['"I am hoping to bake a fresh peach cobbler for my grandson\'s birthday celebration tonight..."', 'This is Mrs. Reyes\'s opening question in speech 3.'],
      ],
      answer: 2,
      explain: 'Exclaiming that the peach "tastes like pure sunshine" directly proves Mrs. Reyes was delighted with the flavor.',
    }),
  ],
});
