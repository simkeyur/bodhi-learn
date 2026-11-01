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
      stem: 'What is the purpose of the bracketed stage directions in the play?',
      choices: [
        'To describe the characters\' physical movements, gestures, and tone of voice.',
        ['To explain how much money the orchard family charges customers for each basket of peaches.', 'Stage directions describe character actions and emotions rather than product prices.'],
        ['To provide a list of baking ingredients needed to make a peach cobbler.', 'Stage directions instruct the actors rather than providing cooking recipes.'],
        ['To announce when the audience should clap and cheer for the actors.', 'Bracketed notes guide the actors\' movements rather than cueing audience applause.'],
      ],
      answer: 0,
      explain: 'Stage directions instruct actors on how to move, what props to use, and how to deliver lines with emotion.',
    }),
    mcq({
      standard: 'rla:3.8C', cites: [3, 4, 6],
      stem: 'What problem does Mrs. Reyes have, and how is it resolved?',
      choices: [
        ['She forgot her wicker shopping basket at home, so Grandpa Klaus lends her a wooden market crate.', 'Mrs. Reyes brings her own basket and is ready to buy fruit.'],
        ['She cannot find the farmers market square, so Elena calls out to direct her across the lawn.', 'Mrs. Reyes is already speaking directly with Elena and Grandpa at their table.'],
        'She does not know how to pick sweet baking peaches, so Elena explains what to look for and offers a sample.',
        ['The booth runs out of fresh peaches, so Grandpa Klaus offers to bake a cobbler for her instead.', 'The booth has plenty of ripe fruit, and Elena packs a dozen peaches for her.'],
      ],
      answer: 2,
      explain: 'Mrs. Reyes does not know which peaches are sweet enough for cobbler, so Elena explains what to look for and offers a delicious sample.',
    }),
    mcq({
      standard: 'rla:3.8B', cites: [2, 5],
      stem: 'How does Grandpa Klaus guide Elena during the market day?',
      choices: [
        ['He warns her not to speak with customers until all the crates are sorted by size and color.', 'Grandpa encourages her to greet visitors warmly rather than staying quiet.'],
        'He reminds her that welcoming customers warmly is just as important as arranging a neat fruit display.',
        ['He scolds her for polishing the peaches because he wants shoppers to handle the fruit first.', 'Grandpa compliments her careful display and smiles with pride.'],
        ['He insists on handling all conversations himself while Elena cleans the wooden table.', 'Grandpa allows Elena to speak with Mrs. Reyes and praises her hospitality.'],
      ],
      answer: 1,
      explain: 'Grandpa explains that a great farmer greets every visitor like a guest in their home, and praises Elena when she helps Mrs. Reyes.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4, 6],
      stem: 'What can the reader infer about Elena from speech 4?',
      choices: [
        'She understands the qualities that make certain peaches ideal for cooking and baking.',
        ['She prefers eating fresh peaches straight from the orchard rather than baking with them.', 'Elena gives helpful advice about cobblers rather than expressing personal eating preferences.'],
        ['She is worried that Mrs. Reyes will buy fruit from another vendor in the town square.', 'Elena focuses warmly on helping the customer rather than worrying about competitors.'],
        ['She is guessing about freestone peaches because Grandpa Klaus has not trained her yet.', 'Elena speaks with confidence and knows exactly which peaches work best for cobbler.'],
      ],
      answer: 0,
      explain: 'Recommending freestone peaches that are soft near the stem shows that Elena understands orchard produce and baking.',
    }),
    mcq({
      standard: 'rla:3.9C',
      stem: 'How does the playwright introduce the scene before any spoken dialogue begins?',
      choices: [
        ['By including a narrator\'s long speech explaining the history of Gillespie County orchards.', 'The script uses character descriptions and setting directions rather than a narrator speech.'],
        ['By writing a rhyming song that Elena sings while polishing the crates of fruit.', 'Elena\'s actions are described in stage directions; she does not sing an opening song.'],
        'By providing a list of characters followed by a description of the market setting.',
        ['By printing a map of Fredericksburg so readers can find the open town square.', 'The playwright sets the scene with written descriptions rather than printed maps.'],
      ],
      answer: 2,
      explain: 'Plays typically begin with a cast list of characters followed by a description of the setting and props before lines are spoken.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [6],
      stem: 'Which quotation from speech 6 shows that Mrs. Reyes enjoyed the peach sample?',
      choices: [
        ['"Look at this pyramid of fruit, Grandpa! We have the most beautiful peach display in the whole market square."', 'This sentence appears in speech 1 when Elena admires their display.'],
        ['"A great farmer also greets every visitor like a welcome guest in their own home."', 'This sentence is Grandpa Klaus\'s advice to Elena in speech 2.'],
        '"Oh my goodness, this tastes like pure sunshine!"',
        ['"For a cobbler, you want freestone peaches that are soft near the stem."', 'This sentence is Elena\'s helpful explanation in speech 4.'],
      ],
      answer: 2,
      explain: 'Exclaiming that the peach "tastes like pure sunshine" directly proves Mrs. Reyes was delighted with the flavor.',
    }),
  ],
});
