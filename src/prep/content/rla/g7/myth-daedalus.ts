// Grade 7 myth/classical literature: The Wings of Daedalus.
import { makeSet, mcq, twoq } from '../author.ts';

export const MYTH_DAEDALUS = makeSet({
  id: 'g7-myth-daedalus',
  grade: 7,
  kind: 'reading',
  title: 'The Flight of Daedalus and Icarus',
  intro: 'Read the myth and choose the best answer to each question.',
  passages: [{
    id: 'g7-myth-daedalus-p',
    title: 'The Flight of Daedalus and Icarus',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'Imprisoned inside the high stone palace of King Minos on the island of Crete, the master builder Daedalus paced the terrace overlooking the sea. Daedalus had designed the famous winding Labyrinth for the king. Yet now Minos kept the inventor and his young son, Icarus, as prisoners. The king posted armed guards along the rocky cliffs. Sentries patrolled the palace gates night and day. Minos ordered every merchant ship in the harbor to leave without them.' },
      { kind: 'p', text: '"Minos may control the land and the waves," Daedalus said, watching gulls circle through the breeze, "but the sky remains open to us. To the air, then, I will turn my mind."' },
      { kind: 'p', text: 'Daedalus went to work with deep patience and skill. Over many months, he collected hundreds of fallen bird feathers. He searched the palace grounds and picked up feathers dropped by gulls and eagles. He sorted long flight quills from soft down. He laid them in order of size upon a curved wooden frame. He tied the quills with flax thread and secured the bases with warm beeswax. When the wings were finished, Daedalus strapped them to his shoulders. He moved his arms and felt his feet lift off the marble floor.' },
      { kind: 'p', text: 'Next, he crafted a smaller pair of wings for Icarus, carefully fitting the leather straps to his son\'s shoulders. Yet as he buckled the harness, fear gripped the father\'s heart. Looking into his son\'s excited eyes, Daedalus gave a firm and solemn warning.' },
      { kind: 'p', text: '"Remember, Icarus: keep a middle path through the sky. If you fly too low, the damp sea spray will weigh down your feathers. If you fly too high, the blazing heat of the sun will melt the wax and destroy your wings. Stay right behind me. Follow my flight, and do not soar too close to the clouds."' },
      { kind: 'p', text: 'With tears on his face, Daedalus kissed his son and stepped into the morning air. He flapped his wide wings like a parent bird leading a fledgling from the nest. Down below, a fisherman stopped on the beach, an astonished shepherd leaned on his staff, and a farmer paused behind his plow. They looked up in wonder, convinced they were witnessing two immortal gods descending from Mount Olympus.' },
      { kind: 'p', text: 'At first, Icarus followed closely behind his father. He looked down with delight at the blue waves falling away beneath his feet. The island of Crete soon shrank to a tiny green speck in the vast sea. He felt the cool rush of wind against his face and the wild thrill of flight. But soon, carried away by pride and the joy of soaring freely, the boy wanted to fly higher. He forgot his father\'s warning. He flapped his wings hard and climbed up toward the burning heat of the sun.' },
      { kind: 'p', text: 'Too late, the headstrong boy realized his mistake. The intense sun softened the fragrant wax. Loose feathers drifted away, fluttering like autumn leaves through the empty azure sky. Icarus waved his bare arms, but without feathers, the air could not hold him. With a cry that was swallowed by the surf, he fell into the sea that now carries his name. Far ahead, Daedalus turned and saw only feathers floating on the waves. He landed on a nearby shore and wept bitter tears for the invention that had stolen his only son.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.7C', cites: [4, 5],
      stem: 'How does the author use foreshadowing in paragraphs 4 and 5 to create suspense in the narrative?',
      choices: [
        ['Daedalus\'s fear of damp sea spray hints at an ocean storm hitting Crete.', 'The danger arises from solar heat, not an ocean squall.'],
        ['The father\'s advice suggests that King Minos will launch warships to give chase.', 'King Minos does not pursue the fliers with ships.'],
        'Daedalus\'s dread and warning about solar heat foreshadow Icarus\'s fall.',
        ['The tears on Daedalus\'s cheeks suggest that his own wings will fail him.', 'Daedalus flies safely; only Icarus disobeys and falls.'],
      ],
      answer: 2,
      explain: 'Paragraphs 4 and 5 pair Daedalus\'s uneasy dread with his explicit warning about the sun melting the wax, directly foreshadowing Icarus\'s tragic fall.',
    }),
    mcq({
      standard: 'rla:7.8A', cites: [5, 7, 8],
      stem: 'Which statement expresses a primary theme of the myth?',
      choices: [
        ['Inventions inevitably collapse when tested against the powerful forces of nature.', 'The wings functioned properly when flown along the moderate course.'],
        'Excessive pride and ignoring wise limits can turn great triumph into tragedy.',
        ['True personal liberty can only be found by booking passage on sailing ships.', 'The myth focuses on flight and the consequences of hubris, not sea voyages.'],
        ['Parents should prevent their children from undertaking any daring challenges.', 'The theme emphasizes listening to wise guidance rather than avoiding all challenges.'],
      ],
      answer: 1,
      explain: 'The story warns against hubris (excessive pride): Icarus\'s reckless disregard for his father\'s advice leads to disaster.',
    }),
    mcq({
      standard: 'rla:7.9D', cites: [3, 8],
      stem: 'In paragraph 8, what does the simile "fluttering like autumn leaves through the empty azure sky" emphasize?',
      choices: [
        ['The vibrant seasonal colors of the warm ocean breeze blowing across the Aegean.', 'The simile describes loose feathers falling, not seasonal scenery.'],
        'The rapid, helpless loss of feathers as the wax melts in the hot sunlight.',
        ['The gentle, easy gliding motion that allows Icarus to touch down safely on land.', 'Icarus does not land safely; he falls into the sea.'],
        ['The seasonal migration of coastal wildfowl fleeing the rocky island of Crete.', 'The falling objects are loosened feathers from Icarus\'s ruined wings.'],
      ],
      answer: 1,
      explain: 'The comparison to autumn leaves highlights how rapidly and helplessly the wings shed their feathers once the wax softens.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [6],
      a: {
        prompt: 'Part A: What does the reaction of the onlookers in paragraph 6 reveal about ancient Greek culture?',
        choices: [
          'Common people viewed extraordinary wonders as signs of immortal gods.',
          ['Ancient laborers were skilled aviators who often built small wooden gliders.', 'Human flight was unheard of, causing amazement among onlookers.'],
          ['The workers were planning to alert King Minos\'s sentries about the escape.', 'The onlookers paused in awe rather than running to report to guards.'],
          ['Farmers and fishermen routinely ignored miraculous events around their fields.', 'The workers paused their labor and watched in astonishment.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which detail from paragraph 6 best supports the answer to Part A?',
        choices: [
          ['"...he flapped his wide wings like a parent bird leading a fledgling from a dangerous nest."', 'This describes Daedalus\'s guidance, not the observers\' beliefs.'],
          '"...convinced they were witnessing two immortal gods descending from Mount Olympus."',
          ['"...a solitary fisherman stopped on the beach, looking out over the foaming breakers..."', 'This describes a physical action rather than a religious belief.'],
          ['"...an astonished shepherd leaned on his staff while a farmer paused behind his plow..."', 'This shows surprise but does not explain their theological conclusion.'],
        ],
        answer: 1,
      },
      explain: 'The witnesses believe that beings flying through the air must be Olympian deities, reflecting a cultural belief in gods interacting with humanity.',
    }),
    mcq({
      standard: 'rla:7.7B', cites: [1, 2, 3],
      stem: 'Which character trait enables Daedalus to overcome King Minos\'s blockade?',
      choices: [
        'His clever intellect and patience allow him to fashion wings from feathers.',
        ['His ruthless physical strength lets him overpower the sentries at the gates.', 'Daedalus relies on inventive craftsmanship, not physical violence.'],
        ['His personal wealth allows him to bribe merchant captains to sail past cliffs.', 'King Minos strictly banned ships from helping the captives.'],
        ['His magical knowledge lets him command wild sea eagles to lift him into the sky.', 'Daedalus builds wings through mechanical skill, not magical commands.'],
      ],
      answer: 0,
      explain: 'Daedalus uses keen observation and meticulous craftsmanship to construct functioning wings, demonstrating his intellectual resourcefulness.',
    }),
    mcq({
      standard: 'rla:7.9F', cites: [7, 8],
      stem: 'How does the author\'s tone shift between paragraph 7 and paragraph 8?',
      choices: [
        ['From sorrowful and solemn to lighthearted and humorous.', 'The narrative turns into deep tragedy, not humor.'],
        'From soaring joy to urgent, heartbreaking sorrow.',
        ['From quiet and detached to intensely bitter and angry.', 'The narrative expresses grief and sorrow rather than bitter detachment.'],
        ['From peaceful and restful to triumphant and victorious.', 'The conclusion is a mourning of loss, not victory.'],
      ],
      answer: 1,
      explain: 'Paragraph 7 depicts the euphoric thrill of flight, which abruptly shifts in paragraph 8 to panic, helplessness, and a father\'s grief.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [3, 4, 5],
      stem: 'Which statement provides the best objective summary of Daedalus\'s warning to Icarus?',
      choices: [
        'Daedalus warns Icarus to keep a middle path, avoiding damp spray and hot sun.',
        ['Daedalus orders Icarus to fly directly to Mount Olympus to seek divine sanctuary.', 'Apollo is mentioned regarding solar heat, not as a sanctuary.'],
        ['Daedalus warns that ocean spray is far worse than heat and tells him to fly higher.', 'Daedalus explicitly cautions against flying too high.'],
        ['Daedalus suggests that Icarus practice flying in the palace courtyard before leaving.', 'They fly directly from the terrace out across the open sea.'],
      ],
      answer: 0,
      explain: 'This choice objectively summarizes Daedalus\'s instructions to steer a moderate middle path between moist ocean spray and burning solar heat.',
    }),
  ],
});
