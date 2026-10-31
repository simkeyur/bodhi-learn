// Grade 4 drama: an original play set in a Texas frontier museum. Questions cover drama structure (4.9C),
// plot elements (4.8C), character interactions (4.8B), inference (4.6F), point of view (4.10E),
// making connections (4.6E), and text evidence (4.7C).

import { makeSet, mcq, msq } from '../author.ts';

export const DRAMA_STAGECOACH = makeSet({
  id: 'g4-drama-stagecoach',
  grade: 4,
  kind: 'reading',
  title: 'The Mystery of the Stagecoach Trunk',
  intro: 'Read the play and choose the best answer to each question.',
  passages: [{
    id: 'g4-drama-stagecoach-p',
    title: 'The Mystery of the Stagecoach Trunk',
    genre: 'drama',
    blocks: [
      { kind: 'direction', text: 'SCENE 1: The restoration room of the Pioneer Frontier Museum in San Angelo, Texas. Wooden crates, kerosene lanterns, and old saddles are stacked neatly along the walls. An antique leather stagecoach trunk rests on a workbench. Ten-year-old CARMEN and her twelve-year-old brother LUIS examine the trunk with magnifying glasses. AUNT ROSA, the museum curator, enters carrying a brass ring of keys.' },
      { kind: 'speech', speaker: 'CARMEN', text: '(excitedly running her fingers along the brass studs) Look at these hand-forged iron hinges, Aunt Rosa! The museum tag says this trunk survived the Overland Stage route between St. Louis and El Paso back in 1858.' },
      { kind: 'speech', speaker: 'LUIS', text: '(shrugging skeptically) It looks like an ordinary dusty wooden box to me. Why would anyone risk their life riding in an unpaved stagecoach across West Texas just to deliver mail?' },
      { kind: 'speech', speaker: 'AUNT ROSA', text: '(smiling warmly as she selects a small key) Before the transcontinental railroad existed, Luis, the stagecoach was the only rapid link between eastern families and the western frontier. People waited months for letters from home, medical supplies, and news from across the continent.' },
      { kind: 'speech', speaker: 'CARMEN', text: '(noticing a small wooden lever near the bottom latch) Wait! Look down here behind the leather trim. There\'s a seam that doesn\'t line up with the rest of the grain.' },
      { kind: 'speech', speaker: 'LUIS', text: '(leaning closer, his skepticism fading) You\'re right. It looks like a false bottom. Don\'t touch it yet—what if there\'s a spring or a brittle lock inside?' },
      { kind: 'speech', speaker: 'AUNT ROSA', text: '(carefully sliding the brass key into the main lock) Excellent eye, Carmen. Stagecoach drivers often hid gold coins, bank deeds, and confidential government dispatches inside secret compartments to keep them safe from bandits.' },
      { kind: 'direction', text: 'Aunt Rosa turns the key with a loud, hollow CLICK. The heavy lid creaks open, releasing a faint scent of cedar shavings and aged parchment. Carmen gently presses the hidden lever. A false wooden floor pops open, revealing a yellowed, handwritten envelope tied with faded blue twine.' },
      { kind: 'speech', speaker: 'CARMEN', text: '(whispering in awe) Look at the postmark! October 12, 1859. It\'s addressed to "Miss Abigail Bennett, Fort Davis, Texas."' },
      { kind: 'speech', speaker: 'LUIS', text: '(eyes wide with excitement) A real letter lost for over one hundred and sixty years! Aunt Rosa, can we help you research who Abigail Bennett was?' },
      { kind: 'speech', speaker: 'AUNT ROSA', text: '(laughing proudly) That, Luis, is exactly what historians do. Grab the museum archives catalog, you two. Our real adventure starts right now.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.9C', cites: [1, 2],
      stem: 'What is the purpose of the stage directions in parentheses before Carmen and Luis speak in speeches 1 and 2?',
      choices: [
        ['To tell the audience which costume changes will happen next.', 'The directions describe running fingers along studs and shrugging.'],
        'To guide the actors on how to move and speak.',
        ['To list the historical dates that the actors must memorize.', 'The stage directions describe physical action and emotion, not memorization.'],
        ['To explain the rhyming pattern used in each character speech.', 'The selection is a play, not a rhyming poem.'],
      ],
      answer: 1,
      explain: 'Stage directions in parentheses tell actors how to deliver lines and what actions to perform on stage.',
    }),
    mcq({
      standard: 'rla:4.8C', cites: [4, 7, 8],
      stem: 'Which event represents the climax of the play?',
      choices: [
        ['Aunt Rosa enters the restoration room holding a ring of brass keys.', 'This is the opening exposition that sets up the scene.'],
        ['Luis asks why anyone would risk riding in a stagecoach back then.', 'This is rising action dialog.'],
        'Carmen opens the hidden floor to find the old letter.',
        ['Aunt Rosa asks Carmen and Luis to search the museum archives catalog.', 'This is the resolution at the conclusion of the scene.'],
      ],
      answer: 2,
      explain: 'The climax is the exciting moment of discovery when Carmen reveals the secret compartment holding the historic letter.',
    }),
    mcq({
      standard: 'rla:4.8B', cites: [2, 8],
      stem: 'How does Luis\'s attitude change from speech 2 to speech 8?',
      choices: [
        ['He goes from being enthusiastic about history to wanting to leave.', 'This is the opposite of what happened.'],
        ['He becomes angry at Carmen for finding the secret wooden lever.', 'Luis is excited, not jealous or angry.'],
        ['He decides that modern transportation is more fun than history.', 'The conversation stays focused on researching the historic letter.'],
        'He goes from doubtful and bored to eager and curious.',
      ],
      answer: 3,
      explain: 'In speech 2, Luis thinks the trunk is an ordinary dusty box, but by speech 8 he is eager to research the hidden letter.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [6],
      stem: 'What can the reader infer from Aunt Rosa\'s explanation in speech 6 about why the trunk had a secret compartment?',
      choices: [
        'Stagecoaches carried valuable goods through risky territory.',
        ['Stagecoach trunks were built poorly and often broke into pieces.', 'Aunt Rosa noted drivers intentionally built secret hiding spots.'],
        ['Passengers on the route used hidden boxes to smuggle illegal pets.', 'The secret spots were for gold coins, deeds, and mail.'],
        ['Aunt Rosa built the antique wooden trunk herself in modern times.', 'The trunk was an antique from 1858.'],
      ],
      answer: 0,
      explain: 'Aunt Rosa explains that drivers hid money and dispatches from bandits because frontier travel could be dangerous.',
    }),
    msq({
      standard: 'rla:4.6E', cites: [3, 8],
      stem: 'Which **two** connections can a modern student make between life today and life during the stagecoach era of 1858?',
      choices: [
        'People in both eras value receiving messages from faraway loved ones.',
        'Modern communication is far faster than 1850s stagecoach mail.',
        ['People in 1858 traveled much faster than passengers on airplanes today.', 'Stagecoaches took weeks to travel across Texas.'],
        ['No one in modern times cares about preserving antique historical artifacts.', 'Museums like Aunt Rosa\'s actively preserve history today.'],
        ['Stagecoaches are still the primary way mail is transported between Texas cities today.', 'Mail today travels by trucks and airplanes.'],
      ],
      answers: [0, 1],
      explain: 'Students can connect with the desire to stay in touch with family while recognizing modern digital speed versus 1850s delays.',
    }),
    mcq({
      standard: 'rla:4.10E', cites: [1, 2, 3],
      stem: 'How does the playwright use dialogue rather than a single narrator to tell the story?',
      choices: [
        ['By having the characters recite rhyming stanzas to one another.', 'The characters speak in natural dramatic prose dialogue.'],
        'By showing each character\'s personality through spoken words.',
        ['By having an invisible narrator explain every fact before scenes.', 'There is no narrator; the scene directions set the stage and dialogue carries the story.'],
        ['By keeping the characters silent while holding painted signs.', 'The characters talk back and forth.'],
      ],
      answer: 1,
      explain: 'Dialogue allows the audience to experience each character\'s personality, questions, and reactions directly.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [7],
      stem: 'Which detail from speech 7 shows that the letter had remained hidden for more than a century?',
      choices: [
        'The postmark date of October 12, 1859',
        ['The hand-forged iron hinges on the outside trunk lid', 'This describes the outside hinges from speech 1.'],
        ['The dusty wooden boards on the bottom of the old box', 'This is Luis\'s skeptical remark from speech 2.'],
        ['The museum archives catalog that Aunt Rosa mentions', 'This is Aunt Rosa\'s concluding direction from speech 9.'] ,
      ],
      answer: 0,
      explain: 'In speech 7, Carmen reads the postmark date of October 12, 1859, confirming the letter had been inside since the frontier era.',
    }),
  ],
});
