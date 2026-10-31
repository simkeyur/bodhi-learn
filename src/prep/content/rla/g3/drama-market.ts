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
      stem: 'What is the purpose of the stage directions in brackets, such as *[Polishing a large, red-orange peach with a soft cloth]*?',
      choices: [
        ['They tell the audience which actors are getting paid the most.', 'Stage directions guide actors\' actions and behavior.'],
        'They describe what the characters are doing, their physical actions, and how they deliver their lines.',
        ['They give recipes for making peach cobbler at home.', 'Recipes are not part of the stage directions.'],
        ['They list words that the characters must shout loudly.', 'Brackets indicate physical actions and gestures on stage.'],
      ],
      answer: 1,
      explain: 'Stage directions in brackets instruct the actors on how to move, what props to handle, and what gestures or emotions to display during a performance.',
    }),
    mcq({
      standard: 'rla:3.8C', cites: [3, 4, 6],
      stem: 'What problem does Mrs. Reyes have when she visits the booth, and how does Elena resolve it?',
      choices: [
        ['Mrs. Reyes lost her wallet, so Grandpa gives her free fruit.', 'Mrs. Reyes has money and an empty basket to buy peaches.'],
        'Mrs. Reyes is unsure which peaches are best for baking a cobbler, so Elena explains what to look for and offers a delicious taste sample.',
        ['Mrs. Reyes wants to buy apples, but the booth only sells watermelons.', 'The booth sells Fredericksburg peaches.'],
        ['Mrs. Reyes cannot find the market square.', 'She is already standing at the booth in the market square.'],
      ],
      answer: 1,
      explain: 'Mrs. Reyes explains that she does not know which peaches are sweet enough for cobbler. Elena solves her doubt by recommending freestone peaches and giving her a fresh sample.',
    }),
    mcq({
      standard: 'rla:3.8B', cites: [2, 5],
      stem: 'How does Grandpa Klaus support and encourage Elena during their market day?',
      choices: [
        ['He criticizes her for organizing the fruit too slowly.', 'Grandpa compliments her care in arranging the pyramid.'],
        'He gently shares wisdom about treating customers like guests and praises her when she puts his advice into practice.',
        ['He tells Elena to sit quietly and not speak to any customers.', 'He encourages her to greet every visitor warmly.'],
        ['He leaves Elena alone at the booth while he goes to eat lunch.', 'Grandpa stays beside her throughout the scene.'],
      ],
      answer: 1,
      explain: 'Grandpa teaches Elena that great farmers greet visitors like guests, and nods with pride when Elena warmly assists Mrs. Reyes.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4, 6],
      stem: 'What can the reader infer about Elena\'s knowledge of peaches based on line 4?',
      choices: [
        'She has paid close attention to orchard work and understands the specific qualities needed for baking.',
        ['She dislikes the taste of fruit and never eats peaches.', 'She enthusiastically offers a slice of peach.'],
        ['She wants Mrs. Reyes to leave the booth immediately.', 'Elena invites Mrs. Reyes to taste a sample.'],
        ['She guesses randomly because she does not know anything about fruit.', 'She gives specific advice about freestone peaches soft near the stem.'],
      ],
      answer: 0,
      explain: 'Recommending freestone peaches that are soft near the stem shows that Elena possesses genuine practical knowledge about orchard produce and baking.',
    }),
    mcq({
      standard: 'rla:3.9C',
      stem: 'How does the playwright introduce the play before the dialogue begins?',
      choices: [
        ['By printing the entire script in a foreign language.', 'The script is in English.'],
        ['By singing a musical song to the audience.', 'The text is a written play script.'],
        'By providing a cast list of characters and describing the setting of the farmers market.',
        ['By showing a map of grocery stores in Austin.', 'The setting is Fredericksburg town square.'],
      ],
      answer: 2,
      explain: 'Plays traditionally begin with a character list (Elena, Grandpa Klaus, Mrs. Reyes) and a description of the setting and props before characters speak.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [6],
      stem: 'Which quotation from line 6 shows that Mrs. Reyes thoroughly enjoyed Elena\'s sample?',
      choices: [
        '"Oh my goodness, this tastes like pure sunshine! Please pack a dozen of your sweetest peaches in my basket."',
        ['"Look at this pyramid of fruit, Grandpa!"', 'This is Elena speaking in line 1.'],
        ['"I am hoping to bake a fresh peach cobbler..."', 'This is Mrs. Reyes\'s question in line 3.'],
        ['"A great farmer also greets every visitor like a welcome guest..."', 'This is Grandpa\'s advice in line 2.'],
      ],
      answer: 0,
      explain: 'Calling the peach "pure sunshine" and asking for a dozen peaches proves that Mrs. Reyes was delighted with the taste.',
    }),
  ],
});
