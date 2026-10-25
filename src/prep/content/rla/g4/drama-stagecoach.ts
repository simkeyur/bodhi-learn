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
        ['To indicate the rhyming sounds of the poem.', 'The selection is a play, not a rhyming poem.'],
        'To tell the actors how to move their bodies and what emotions to express when delivering their lines.',
        ['To list historical dates that the audience must memorize.', 'The stage directions describe physical action and emotion, not memorization.'],
        ['To explain which costume changes occur offstage.', 'The directions describe running fingers along studs and shrugging.'],
      ],
      answer: 1,
      explain: 'Stage directions in parentheses instruct actors on tone of voice and physical movements, such as Carmen excitedly touching the studs and Luis shrugging skeptically.',
    }),
    mcq({
      standard: 'rla:4.8C', cites: [4, 7, 8],
      stem: 'Which event represents the climax of the play?',
      choices: [
        ['Aunt Rosa walks into the restoration room carrying keys.', 'This is the opening exposition that sets up the scene.'],
        ['Luis asks why people rode stagecoaches in the 1800s.', 'This is rising action dialog.'],
        'Aunt Rosa turns the key, Carmen presses the hidden lever, and the secret compartment pops open to reveal the 1859 letter.',
        ['Aunt Rosa tells the children to grab the museum catalog.', 'This is the resolution at the conclusion of the scene.'],
      ],
      answer: 2,
      explain: 'The climax is the peak discovery moment when the secret false bottom springs open, solving the mystery of the trunk and revealing the historic letter.',
    }),
    mcq({
      standard: 'rla:4.8B', cites: [2, 8],
      stem: 'How does Luis\'s attitude change from speech 2 to speech 8?',
      choices: [
        ['He goes from being enthusiastic about history to wanting to leave the museum.', 'This is the opposite of what happened.'],
        'He changes from being bored and skeptical about the trunk to being genuinely captivated and eager to research the artifact.',
        ['He becomes angry at Carmen for finding the secret lever first.', 'Luis is excited, not jealous or angry.'],
        ['He decides that modern airplanes are more interesting than stagecoaches.', 'The conversation stays focused on researching the historic letter.'],
      ],
      answer: 1,
      explain: 'In speech 2, Luis dismisses the trunk as "an ordinary dusty wooden box." By speech 8, his eyes are wide with excitement and he begs to help research the letter.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [6],
      stem: 'What can the reader infer from Aunt Rosa\'s explanation in speech 6 about why the trunk had a secret compartment?',
      choices: [
        'Stagecoach travel through frontier territories was dangerous because of armed robbers targeting valuable cargo.',
        ['Stagecoach trunks were built poorly and often fell apart.', 'Aunt Rosa noted drivers intentionally built secret hiding spots.'],
        ['The passengers were trying to smuggle illegal pets across state lines.', 'The secret spots were for gold coins, deeds, and mail.'],
        ['Aunt Rosa built the wooden trunk herself in modern times.', 'The trunk was an antique from 1858.'],
      ],
      answer: 0,
      explain: 'Aunt Rosa notes drivers hid gold coins and dispatches from bandits, showing that frontier stagecoach travel was fraught with the danger of theft.',
    }),
    msq({
      standard: 'rla:4.6E', cites: [3, 8],
      stem: 'Which **two** connections can a modern student make between life today and life during the stagecoach era of 1858?',
      choices: [
        'People today and in 1858 both value communication and news from family members who live far away.',
        'Modern technology has made communication instantaneous compared to waiting months for handwritten mail.',
        ['People in 1858 traveled much faster than passengers on airplanes today.', 'Stagecoaches took weeks to travel across Texas.'],
        ['No one in modern times cares about preserving antique historical artifacts.', 'Museums like Aunt Rosa\'s actively preserve history today.'],
        ['Stagecoaches are still the primary way mail is transported between Texas cities today.', 'Mail today travels by trucks and airplanes.'],
      ],
      answers: [0, 1],
      explain: 'Students can connect with the universal human need for communication with loved ones while contrasting modern instant messaging with 1850s mail delays.',
    }),
    mcq({
      standard: 'rla:4.10E', cites: [1, 2, 3],
      stem: 'How does the playwright use dialogue rather than a single narrator to tell the story?',
      choices: [
        ['By having the characters recite rhyming stanzas to each other.', 'The characters speak in natural dramatic prose dialogue.'],
        'By revealing different characters\' contrasting perspectives and personalities through their spoken words and interactions.',
        ['By having an invisible narrator explain every historical fact before actors speak.', 'There is no narrator; the scene directions set the stage and dialogue carries the story.'],
        ['By keeping the characters silent while holding up painted signs.', 'The characters talk back and forth.'],
      ],
      answer: 1,
      explain: 'Dramatic dialogue lets the audience experience Carmen\'s keen enthusiasm, Luis\'s initial skepticism, and Aunt Rosa\'s knowledgeable guidance directly.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [7],
      stem: 'Which detail from speech 7 shows that the letter had remained undisturbed inside the trunk for a very long time?',
      choices: [
        '"Look at the postmark! October 12, 1859. It\'s addressed to \'Miss Abigail Bennett, Fort Davis, Texas.\'"',
        ['"Look at these hand-forged iron hinges..." (speech 1)', 'This describes the outside hinges.'],
        ['"It looks like an ordinary dusty wooden box to me." (speech 2)', 'This is Luis\'s skeptical opening remark.'],
        ['"Grab the museum archives catalog, you two." (speech 9)', 'This is Aunt Rosa\'s concluding direction.'],
      ],
      answer: 0,
      explain: 'The postmark from October 1859 addressed to a frontier fort resident directly confirms the letter was preserved untouched for over a century.',
    }),
  ],
});
