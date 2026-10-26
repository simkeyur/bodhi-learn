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
      { kind: 'p', text: 'Imprisoned within the imposing, sun-bleached stone walls of King Minos\'s royal palace on the rocky Mediterranean island of Crete, the master artisan Daedalus paced the high marble terrace overlooking the boundless Aegean Sea. Though his brilliant inventive genius had conceptualized and constructed the bewildering subterranean corridors of the legendary Minotaur\'s Labyrinth, King Minos now held the aging inventor and his youthful son, Icarus, as closely guarded captive laborers, posting armed sentries along the cliffs and forbidding every merchant vessel in harbor from carrying the Athenians away from Cretan shores.' },
      { kind: 'p', text: '"Minos may control the land and command the waves," Daedalus resolved, watching a flock of gulls wheel gracefully through the ocean breeze, "but the boundless air remains open to our escape. To the sky, then, I shall apply my cunning."' },
      { kind: 'p', text: 'Daedalus set to work with extraordinary patience and ingenuity. Over many months, he gathered hundreds of bird feathers of various lengths, arranging them in order of size upon a wooden frame like the graduated pipes of Pan\'s flute. He bound the quills securely with flaxen thread and fused the bases using pliable, melted beeswax, bending the curved structure so that it perfectly mirrored the anatomy of an eagle\'s wing. When the apparatus was finished, Daedalus fastened the harness to his shoulders and found that by gently undulating his arms, he could hover lightly above the marble tiles.' },
      { kind: 'p', text: 'He crafted a second pair of wings for Icarus, meticulously adjusting the leather straps to fit his son\'s smaller frame. Yet as he tightened the buckles, a cold shiver of foreboding settled in the father\'s chest. Gazing into his son\'s exuberant, untested eyes, Daedalus offered a solemn, repeated warning.' },
      { kind: 'p', text: '"Remember, Icarus: keep a middle course through the sky. If you fly too low, the moist sea spray will dampen your feathers and drag you down into the dark surf. If you soar too high, the radiant heat of the chariot of Apollo will melt the wax and destroy your wings. Steer directly behind me, and do not gaze ambitiously toward the stars."' },
      { kind: 'p', text: 'With tears glistening on his cheeks, Daedalus kissed his son and launched into the morning air, beating his majestic wings like a mother bird guiding her fledgling from a perilous nest. Below them, a solitary fisherman paused along the surf, an astonished shepherd leaned upon his crook, and a plowing farmer looked up from his furrow, convinced they were witnessing two immortal gods descending from Mount Olympus.' },
      { kind: 'p', text: 'At first, Icarus followed obediently, marveling at how the azure waves of the Aegean fell away beneath his sandals. He felt the cool wind rushing past his temples and the exhilarating surge of artificial flight. But soon, intoxicated by the sensation of effortless freedom and youthful pride, the boy began to yearn for bolder heights. Disregarding his father\'s cautionary command, he beat his wings vigorously, climbing upward toward the blistering brilliance of the sun.' },
      { kind: 'p', text: 'Too late, the headstrong youth recognized his perilous folly. The blazing solar heat softened the fragrant beeswax, and feathers began to detach, fluttering like autumn leaves through the empty azure sky. Icarus waved his bare arms frantically, but the air could no longer sustain him. With a desperate cry that vanished into the roar of the surf, he tumbled into the deep sea that forever bears his name. Far ahead, Daedalus looked back, saw only drifting feathers upon the waves, and wept bitter tears for the invention that had cost him his only son.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.7C', cites: [4, 5],
      stem: 'How does the author use foreshadowing in paragraphs 4 and 5 to create suspense in the narrative?',
      choices: [
        ['Daedalus\'s warning about the sea spray foreshadows a sudden thunderstorm that destroys both pairs of wings.', 'No storm occurs; the failure comes from flying too close to the sun.'],
        ['The father\'s advice foreshadows King Minos sending naval warships to intercept the flying prisoners.', 'King Minos does not pursue them with warships.'],
        'Daedalus\'s cold shiver of foreboding and his explicit warning about the sun melting the wax foreshadow Icarus\'s fatal upward flight.',
        ['The tears on Daedalus\'s cheeks foreshadow his own wings failing before reaching Greece.', 'Daedalus flies safely; only Icarus falls.'],
      ],
      answer: 2,
      explain: 'Paragraphs 4 and 5 combine the father\'s instinctive dread with specific warnings about solar heat melting the wax, directly foreshadowing the tragic consequence of Icarus\'s disobedience.',
    }),
    mcq({
      standard: 'rla:7.8A', cites: [5, 7, 8],
      stem: 'Which statement expresses a primary theme of the myth?',
      choices: [
        ['Human inventions always fail when tested against the natural elements.', 'Daedalus\'s invention was successful when flown properly along the middle course.'],
        'Excessive pride and reckless disregard for wise boundaries can turn extraordinary triumph into tragic catastrophe.',
        ['True freedom can only be achieved by escaping across the ocean on merchant ships.', 'The myth focuses on flight and the consequences of hubris, not sea travel.'],
        ['Parents should prevent their children from ever attempting ambitious challenges.', 'The lesson is about moderation and obedience to sound advice, not avoiding all challenges.'],
      ],
      answer: 1,
      explain: 'The myth illustrates the classical danger of hubris (excessive pride/ambition): Icarus\'s refusal to stay within wise, moderate limits leads directly to his tragic downfall.',
    }),
    mcq({
      standard: 'rla:7.9D', cites: [3, 8],
      stem: 'In paragraph 8, what does the simile "fluttering like autumn leaves through the empty azure sky" emphasize?',
      choices: [
        ['The beautiful seasonal colors of the ocean breeze.', 'The simile focuses on falling feathers and disintegration, not seasonal scenery.'],
        'The rapid, uncontrolled disintegration of the wings as the wax melts, leaving Icarus completely helpless in midair.',
        ['The gentle, gliding descent that allows Icarus to land safely on an island.', 'Icarus does not land safely; he tumbles into the sea and drowns.'],
        ['The migration of wild birds escaping from Crete.', 'The falling objects are Icarus\'s loosened wing feathers, not migratory birds.'],
      ],
      answer: 1,
      explain: 'Comparing the loosened feathers to falling autumn leaves vividly conveys how quickly and helplessly the wings break apart under the sun\'s heat.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [6],
      a: {
        prompt: 'Part A: What does the reaction of the fisherman, shepherd, and farmer in paragraph 6 reveal about ancient Greek culture?',
        choices: [
          'The common people held deep religious reverence and readily attributed miraculous, awe-inspiring occurrences to the presence of immortal deities.',
          ['Ancient laborers were skilled aviators who routinely built mechanical gliders.', 'The laborers were astonished because human flight was unheard of.'],
          ['The workers were plotting to report the escapees to King Minos\'s guards.', 'The workers watched in awe, believing they were seeing gods.'],
          ['Farmers and fishermen were indifferent to extraordinary events occurring around them.', 'The text describes them pausing work and watching in amazement.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which detail from paragraph 6 best supports the answer to Part A?',
        choices: [
          ['"...beating his majestic wings like a mother bird guiding her fledgling..."', 'This describes Daedalus\'s flying style, not the onlookers\' cultural perspective.'],
          '"...convinced they were witnessing two immortal gods descending from Mount Olympus."',
          ['"...a solitary fisherman paused along the surf..."', 'This shows pausing, but does not state the underlying religious belief.'],
          ['"...a plowing farmer looked up from his furrow..."', 'This shows curiosity, but does not provide the theological interpretation.'],
        ],
        answer: 1,
      },
      explain: 'The onlookers assume that two beings flying through the air must be immortal Olympian gods, reflecting a worldview where extraordinary feats belong to the divine.',
    }),
    mcq({
      standard: 'rla:7.7B', cites: [1, 2, 3],
      stem: 'Which character trait enables Daedalus to overcome King Minos\'s blockade?',
      choices: [
        'His resourceful intellect and meticulous craftsmanship enable him to observe nature and engineer a path of escape through the air.',
        ['His ruthless physical strength allows him to overpower the guards at the palace gates.', 'Daedalus relies on intellect and craftsmanship, not physical violence.'],
        ['His wealthy family background enables him to bribe Cretan sea captains.', 'Minos strictly forbade any merchant ship from helping them.'],
        ['His magical incantations summon wild eagles to carry him across the Aegean.', 'Daedalus builds mechanical wings through careful engineering, not magic.'],
      ],
      answer: 0,
      explain: 'Paragraphs 2 and 3 detail Daedalus\'s sharp observation of birds and his patient craftsmanship in assembling feathers and wax, highlighting his intellectual resourcefulness.',
    }),
    mcq({
      standard: 'rla:7.9F', cites: [7, 8],
      stem: 'How does the author\'s tone shift between paragraph 7 and paragraph 8?',
      choices: [
        ['From sorrowful and solemn to humorous and lighthearted.', 'The myth ends in tragedy, not humor.'],
        'From exhilarating, euphoric excitement to urgent, heartbreaking dread and tragedy.',
        ['From indifferent and detached to angry and vindictive.', 'The narrator remains compassionate toward the characters.'],
        ['From peaceful and calm to triumphant and celebratory.', 'The conclusion is a tragic mourning for Icarus, not a celebration.'],
      ],
      answer: 1,
      explain: 'Paragraph 7 captures the breathtaking joy and soaring thrill of flight, which abruptly shifts in paragraph 8 to panic, helplessness, and the grief of a father mourning his fallen son.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [3, 4, 5],
      stem: 'Which statement provides the best objective summary of the instructions Daedalus gives to Icarus?',
      choices: [
        'Daedalus equips Icarus with handmade wings and commands him to follow a moderate middle altitude, warning that flying too low will dampen the feathers while flying too high will melt the wax.',
        ['Daedalus orders Icarus to fly directly to Mount Olympus and demand divine protection from Apollo.', 'Apollo is mentioned only regarding the sun\'s heat, not as an ally.'],
        ['Daedalus tells Icarus that ocean waves are more dangerous than solar heat and advises him to fly as close to the clouds as possible.', 'Daedalus specifically warns against flying near the clouds and sun.'],
        ['Daedalus suggests that Icarus practice flying in the labyrinth before venturing over the ocean surf.', 'They launch immediately from the terrace into the ocean breeze.'],
      ],
      answer: 0,
      explain: 'This choice objectively summarizes Daedalus\'s instructions to maintain a middle course to avoid both ocean moisture and solar heat.',
    }),
  ],
});
