// Grade 5 drama: an original scene. Speeches are numbered (the test numbers lines of dialogue); the cast list,
// scene heading and stage directions are not. Questions cover drama structure, characters, setting, inference,
// predictions and summary.

import { makeSet, mcq, twoq } from '../author.ts';

const say = (speaker: string, text: string) => ({ kind: 'speech' as const, speaker, text });
const dir = (text: string) => ({ kind: 'direction' as const, text });

export const DRAMA_GARDEN = makeSet({
  id: 'g5-drama-garden',
  grade: 5,
  kind: 'reading',
  title: 'Waiting for Rain',
  intro: 'Read the play and choose the best answer to each question.',
  passages: [{
    id: 'g5-drama-garden-p',
    title: 'Waiting for Rain',
    genre: 'drama',
    blocks: [
      dir('CHARACTERS: LUIS, age eleven · ABUELA ROSA, his grandmother · KEISHA, Luis\'s best friend · MS. KIM, a neighbor'),
      { kind: 'heading', text: 'Act 1, Scene 2' },
      dir('A small community garden behind an apartment building in San Antonio. It is a hot August morning. Rows of peppers, beans and tomatoes line a chain-link fence, and a hand-painted sign reads PECAN STREET GARDEN. The tomato plants droop, and the soil is cracked. LUIS sits on an overturned bucket. ABUELA ROSA enters carrying an empty watering can.'),
      say('ABUELA ROSA', 'The city says we can only water once a week now, mijo. No rain for forty days.'),
      say('LUIS', '(kicking at the dirt) Then what\'s the point? Everything is going to die anyway. We should just give up.'),
      say('ABUELA ROSA', 'When I was your age, my mother grew corn in soil harder than this. Gardens are like people. They are tougher than they look.'),
      dir('KEISHA rushes in, out of breath, holding a library book.'),
      say('KEISHA', 'Luis! Abuela Rosa! Look what I found. (She opens the book and points.) It\'s about rain barrels. You put a barrel under the gutter, and when it rains, the water from the whole roof goes in. Then you save it for dry weeks.'),
      say('LUIS', 'Great idea, Keisha. Except it hasn\'t rained in forty days. A barrel full of nothing won\'t help my tomatoes.'),
      say('KEISHA', '(closing the book slowly) Oh. I didn\'t think of that.'),
      dir('MS. KIM appears at her apartment window above the garden, holding a coffee cup.'),
      say('MS. KIM', 'I couldn\'t help overhearing. Did someone say rain barrels? I have two old ones in my storage closet from when I lived in the country. They\'ve been gathering dust for years.'),
      say('ABUELA ROSA', 'And the weather radio says storms are coming on Thursday.'),
      say('LUIS', '(standing up slowly) Wait. If we set up the barrels before Thursday, we could catch the storm water and save it for next month.'),
      say('KEISHA', 'That\'s what I was trying to say!'),
      say('LUIS', '(grinning) Well, it sounds better when I say it.'),
      dir('KEISHA swats him with the library book. Everyone laughs. MS. KIM disappears from the window and comes out a moment later rolling a dusty blue barrel. LUIS runs to help her.'),
      say('ABUELA ROSA', '(watching them, smiling) Tougher than they look.'),
      dir('Lights fade.'),
    ],
  }],
  items: [
    mcq({
      standard: 'rla:5.9C',
      stem: 'What do the stage directions at the beginning of the scene tell the reader?',
      choices: [
        'The setting and appearance of the garden',
        ['What each character is thinking about the severe dry weather.', 'Stage directions describe actions and the setting, not every thought.'],
        ['How the conflict of the play will be resolved by the ending.', 'The opening directions describe the start of the scene.'],
        ['The moral message that the playwright wishes to communicate.', 'The lesson comes through the story, not the opening directions.'],
      ],
      answer: 0,
      explain: 'Stage directions are written in italics or parentheses and are not spoken. The opening ones describe the setting (a San Antonio garden on a hot August morning) and the drooping plants.',
    }),
    mcq({
      standard: 'rla:5.9C', cites: [2],
      stem: 'In line 2, the words "(kicking at the dirt)" appear before Luis speaks. What is the purpose of these words?',
      choices: [
        ['They show spoken words that Luis shouts out loud.', 'Words in parentheses are not spoken.'],
        'To guide the actor in showing frustration',
        ['They tell the theater audience what will happen.', 'They describe what Luis does right now.'],
        ['They show that Abuela Rosa will speak the line.', 'Luis\'s name, the character tag, shows who speaks.'],
      ],
      answer: 1,
      explain: 'Stage directions in parentheses tell actors how to move or speak. Kicking the dirt shows that Luis is upset about the dying garden.',
    }),
    twoq({
      standard: 'rla:5.8B', cites: [2, 9],
      a: {
        prompt: 'Part A: How does Luis\'s attitude change during the scene?',
        choices: [
          'He goes from hopeless to optimistic.',
          ['He goes from excited to deeply annoyed with Keisha.', 'He is upset at the start, not happy.'],
          ['He goes from trusting Keisha to doubting her plans.', 'He ends up using Keisha\'s idea.'],
          ['He decides to abandon gardening for outdoor sports.', 'He doesn\'t talk about a new hobby.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which line best shows the change?',
        choices: [
          ['"Then what\'s the point? Everything is going to die anyway. We should just give up." (line 2)', 'This shows how he feels before the change.'],
          ['"A barrel full of nothing won\'t help my tomatoes." (line 5)', 'He is still doubtful here.'],
          '"Wait. If we set up the barrels before Thursday, we could catch the storm water." (line 9)',
          ['"I couldn\'t help overhearing. Did someone say rain barrels? I have two old ones in my storage closet..." (line 7)', 'Ms. Kim says this, not Luis.'],
        ],
        answer: 2,
      },
      explain: 'At first Luis says, "We should just give up" (line 2). Once he hears about the barrels and the coming storm, he makes a plan (line 9), which shows he is hopeful again.',
    }),
    mcq({
      standard: 'rla:5.8D',
      stem: 'How does the setting create the main problem in the scene?',
      choices: [
        ['Noisy street traffic makes it hard for friends to hear.', 'Noise is not a problem in the scene.'],
        'Drought and heat endanger the garden crops.',
        ['The city library is located too far from the garden bed.', 'Keisha brings the book easily.'],
        ['The country farm has no running tap water for residents.', 'The garden is in San Antonio, behind an apartment building.'],
      ],
      answer: 1,
      explain: 'The scene takes place in August after forty days without rain, and the city limits watering. That setting causes the problem: the plants are drooping and the soil is cracked.',
    }),
    mcq({
      standard: 'rla:5.6F', cites: [12],
      stem: 'At the end, Abuela Rosa says, "Tougher than they look." What does she most likely mean?',
      choices: [
        ['The antique wooden barrels are much sturdier than expected.', 'She is watching the people, connecting back to what she said earlier.'],
        ['The drooping tomato vines can easily survive without rain.', 'They still need water from the barrels.'],
        'Luis and his friends show resilience in tough times.',
        ['Neighbor Ms. Kim has greater physical strength than Luis.', 'She isn\'t comparing their strength.'],
      ],
      answer: 2,
      explain: 'Earlier she said, "Gardens are like people. They are tougher than they look" (line 3). Watching the friends work together, she repeats the idea about them.',
    }),
    mcq({
      standard: 'rla:5.6C',
      stem: 'Based on the scene, what will most likely happen in the next scene?',
      choices: [
        ['Luis will dig up the garden and plant completely new seeds.', 'He has decided to save the garden.'],
        'The friends will install the rain barrels.',
        ['Keisha will return her library book without checking facts.', 'She has already read it and shared the idea.'],
        ['Ms. Kim will move out of her apartment to live in country.', 'Nothing suggests she is moving.'],
      ],
      answer: 1,
      explain: 'Luis makes a plan to set up the barrels before Thursday, and the scene ends with Ms. Kim rolling out a barrel. Those clues point to the barrels being set up next.',
    }),
    mcq({
      standard: 'rla:5.7D',
      stem: 'Which is the best summary of the scene?',
      choices: [
        ['Abuela Rosa describes her mother\'s corn while Keisha reads a gardening book and Ms. Kim drinks coffee.', 'This lists details but leaves out the problem and the plan.'],
        ['Keisha discovers a library guide about rain barrels and reads the entire chapter aloud to her neighbors.', 'This is only one event.'],
        ['Luis and Keisha get into a heated argument about who first invented rain barrels and stop being friends.', 'They laugh together; they don\'t stop being friends.'],
        'Facing drought, Luis feels discouraged until neighbors unite to collect rainwater.',
      ],
      answer: 3,
      explain: 'A summary tells the problem (the drought), the key events (Keisha\'s idea, Ms. Kim\'s barrels, the coming storm) and how the scene ends (a plan to save water).',
    }),
  ],
});
