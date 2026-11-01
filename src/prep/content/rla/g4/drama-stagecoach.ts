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
        'To guide the actors on how their characters should act and deliver their lines',
        ['To describe the background scenery and props that need to be moved off the stage', 'The directions describe Carmen running her fingers on studs and Luis shrugging, not moving set pieces.'],
        ['To explain the historical facts that the characters are discussing to the audience', 'Aunt Rosa explains the history through dialogue, while the directions describe character actions.'],
        ['To remind the actors which lines need to be spoken in a rhyming pattern', 'The play is written in spoken prose dialogue rather than rhyming verse.'],
      ],
      answer: 0,
      explain: 'Stage directions in parentheses tell actors how to move, gesture, and speak their lines.',
    }),
    mcq({
      standard: 'rla:4.8C', cites: [4, 7, 8],
      stem: 'Which event represents the climax of the play?',
      choices: [
        ['Aunt Rosa steps into the museum restoration room carrying a ring of brass keys', 'Aunt Rosa entering is part of the exposition that introduces the scene.'],
        ['Luis questions why people would risk traveling on unpaved stagecoach trails', 'Luis\'s question is part of the rising action as the children examine the trunk.'],
        ['Aunt Rosa tells Carmen and Luis to look up Abigail Bennett in the museum catalog', 'Beginning the research project happens in the resolution after the discovery.'],
        'Carmen presses the hidden lever to reveal the secret compartment and the old letter',
      ],
      answer: 3,
      explain: 'The climax is the exciting moment of discovery when Carmen reveals the secret compartment holding the historic letter.',
    }),
    mcq({
      standard: 'rla:4.8B', cites: [2, 8],
      stem: 'How does Luis\'s attitude change from speech 2 to speech 8?',
      choices: [
        ['He starts out excited to explore the trunk but loses interest once it opens', 'Luis becomes more interested once the letter is revealed, not less.'],
        'He changes from doubtful and uninterested to eager to investigate history',
        ['He grows frustrated that Carmen found the hidden compartment before he did', 'Luis is excited by the discovery and asks Aunt Rosa if they can help research it.'],
        ['He shifts from admiring old stagecoaches to wishing they had stayed home', 'Luis was skeptical at first, but ends the scene enthusiastic about researching.'],
      ],
      answer: 1,
      explain: 'In speech 2, Luis dismisses the trunk as an ordinary dusty box, but by speech 8 he eagerly asks to help research the letter.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [6],
      stem: 'What can the reader infer from Aunt Rosa\'s explanation in speech 6 about why the trunk had a secret compartment?',
      choices: [
        ['Stagecoach companies required every passenger to lock away personal luggage', 'Aunt Rosa explains the compartment was for valuables like deeds and dispatches, not routine luggage.'],
        ['Drivers often forgot where they stored mail and misplaced important papers', 'Drivers intentionally hid valuables from bandits, not because they were careless.'],
        'Valuables needed protection because stagecoach journeys could be dangerous',
        ['Secret compartments were designed to keep delicate items from getting dusty', 'The purpose was security against bandits, not keeping out dust.'],
      ],
      answer: 2,
      explain: 'Aunt Rosa explains that drivers hid money, deeds, and dispatches from bandits because frontier travel carried real risks.',
    }),
    msq({
      standard: 'rla:4.6E', cites: [3, 8],
      stem: 'Which **two** connections can a modern student make between life today and life during the stagecoach era of 1858?',
      choices: [
        'People in both eras want to stay in contact with distant family and friends.',
        'Modern communication travels much faster than mail sent by 1850s stagecoach.',
        ['Stagecoaches were significantly faster than modern airplanes and trains.', 'Stagecoaches took weeks, whereas modern travel takes hours.'],
        ['People today have no interest in discovering or studying historic documents.', 'Historians, curators, and students still actively study artifacts and letters today.'],
        ['Stagecoaches remain the most common way to deliver letters in Texas today.', 'Today mail is transported by airplanes, trucks, and electronic networks.'],
      ],
      answers: [0, 1],
      explain: 'Students can connect with the desire to stay in touch with family while recognizing modern digital speed versus 1850s delays.',
    }),
    mcq({
      standard: 'rla:4.10E', cites: [1, 2, 3],
      stem: 'How does the playwright use dialogue rather than a single narrator to tell the story?',
      choices: [
        'By revealing each character\'s thoughts and personality through spoken conversation',
        ['By providing a detailed summary of historic stagecoach routes at the start of each speech', 'The characters speak naturally to one another rather than delivering informational summaries.'],
        ['By having characters describe their own physical actions instead of using stage directions', 'Stage directions describe physical actions, while dialogue expresses the characters\' thoughts and reactions.'],
        ['By using an outside narrator who interrupts to explain what the characters are feeling', 'There is no narrator in the scene; the characters express their feelings directly.'],
      ],
      answer: 0,
      explain: 'Dialogue allows each character\'s personality, questions, and reactions to unfold directly through spoken exchanges.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [7],
      stem: 'Which detail from speech 7 shows that the letter had remained hidden for more than a century?',
      choices: [
        ['The hand-forged iron hinges that secured the heavy lid to the frame', 'The iron hinges show how the trunk was built, not the date the letter was hidden.'],
        ['The faint scent of cedar shavings released when the trunk opened', 'Cedar shavings describe the interior smell, but do not provide an exact time period.'],
        ['The faded blue twine holding the yellowed paper together in the box', 'The twine shows age, but the postmark provides the specific evidence of being over a century old.'],
        'The postmark date of October 12, 1859, on the handwritten envelope',
      ],
      answer: 3,
      explain: 'In speech 7, Carmen reads the postmark date of October 12, 1859, confirming that the letter dates back to the frontier era.',
    }),
  ],
});
