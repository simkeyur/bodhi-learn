// Grade 6 myth: Arachne and Athena.
import { makeSet, mcq, msq, twoq } from '../author.ts';

export const MYTH_ARACHNE = makeSet({
  id: 'g6-myth-arachne',
  grade: 6,
  kind: 'reading',
  title: 'The Weaver\'s Pride',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g6-myth-arachne-p',
    title: 'The Weaver\'s Pride: The Tale of Arachne',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'In the sunlit hills of ancient Lydia, there lived a maiden named Arachne. Her skill at the weaving loom was celebrated across the land. From early dawn until dusk, her shuttle danced across the threads with the swiftness of a swallow. People traveled from distant shores just to watch her card soft fleece. She spun threads so fine that they floated on the breeze like morning mist.' },
      { kind: 'p', text: 'Spectators gasped in wonder at the tapestries that unfolded beneath her fingers. On her cloth, fields of golden grain seemed to ripple in imaginary winds. Crimson roses looked fresh enough to attract real bees. "Surely," the admiring townsfolk whispered, "Athena herself, the goddess of wisdom and craft, must have bestowed this gift upon you."' },
      { kind: 'p', text: 'Instead of receiving this praise with humble gratitude, Arachne\'s heart swelled with insolent pride. She tossed her dark curls and laughed haughtily. "Athena? What could that goddess teach me? My skill belongs to my own hands and keen eyes alone! Let Athena come and contest her craft against mine. If her work surpasses mine, I shall willingly submit to whatever punishment she decrees."' },
      { kind: 'p', text: 'Her listeners drew back in horror, whispering prayers to turn away the anger of the gods. Days later, an elderly woman leaning upon a wooden staff hobbled into Arachne\'s workshop. Her gray hair was covered by a tattered woolen shawl, and her eyes were cloudy with age.' },
      { kind: 'p', text: '"Young woman," the elder rasped gently, "heed the counsel of one who has lived many winters. Seek renown among mortals for your spinning, but never presume to rival the immortal gods. Kneel and ask pardon for your boastful words, and Athena in her mercy may yet forgive you."' },
      { kind: 'p', text: 'Arachne glared fiercely at the visitor and struck her loom with an angry hand. "Keep your timid counsel for foolish children, old crone! I have challenged the goddess openly, yet she coward-like avoids my contest. Why does she not face me herself?"' },
      { kind: 'p', text: 'At those brazen words, the crone\'s crooked form straightened. The ragged shawl fell away. Shimmering robes of azure and gold shone in the sunlight, and her eyes flashed with power. The mortal onlookers fell upon their faces in awe, for Athena stood revealed in majesty.' },
      { kind: 'p', text: '"Athena has come," the goddess commanded, her voice ringing clear like a bronze shield. "The contest you desire shall begin this very hour."' },
      { kind: 'p', text: 'Two looms were erected in the open courtyard. The duel of shuttles commenced in breathless silence. Athena wove a magnificent panorama. It depicted the twelve Olympians seated upon thrones of ivory and gold. In the four corners of her border, she wove small, cautionary scenes. They showed mortals who dared to defy the gods and were transformed into rocks and beasts.' },
      { kind: 'p', text: 'Arachne, undaunted, wove scenes exposing the folly and deceit of the gods. Her pictures showed them descending to earth in disguise and causing strife among mortals. Her weaving was breathtakingly lifelike. The painted water seemed to churn with genuine foam. Even Athena, examining the fabric closely, could find neither flaw nor loose knot in the maiden\'s work.' },
      { kind: 'p', text: 'Yet wrath burned in the goddess\'s heart at Arachne\'s bitter mockery of the divine order. With her shuttle of boxwood, Athena struck the insolent tapestry, rending it in twain. Then she touched Arachne\'s forehead with her spear, filling the maiden\'s soul with overwhelming shame and sorrow.' },
      { kind: 'p', text: 'Overcome with despair at what she had done, Arachne sought to hang herself from a rafter. But Athena softened her punishment with stern pity. "Live, reckless mortal," decreed the goddess, "yet hang you shall forever, you and all your descendants, weaving unending threads in dark corners."' },
      { kind: 'p', text: 'Athena sprinkled juices of magical aconite over the maiden. Arachne\'s hair fell away. Her ears and nose disappeared. Her body dwindled into a tiny sphere, and eight nimble legs sprouted from her sides. Even in her new form as a spider, Arachne retained her ancient gift. She continually spins shimmering webs that glisten like dew in the morning sun.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.8A', cites: [3, 7, 13],
      stem: 'Which characteristic of traditional myths is most evident in this selection?',
      choices: [
        'A mortal is transformed by a goddess to explain an animal in nature.',
        ['A clever creature uses tricks to outsmart a much larger forest rival.', 'This describes a trickster fable rather than a classical myth.'],
        ['A legendary warrior leads an army to defend an ancient stone fortress.', 'There are no historical battles or armies in this story.'],
        ['A humorous exaggeration explains the height of famous mountains.', 'Tall tales use humorous exaggeration; this myth has a serious tone.'],
      ],
      answer: 0,
      explain: 'A hallmark of classical Greek myths is explaining natural phenomena (the spider spinning webs) through conflict and transformation between humans and gods.',
    }),
    twoq({
      standard: 'rla:6.7A', cites: [3, 5, 11, 12],
      a: {
        prompt: 'Part A: What is the primary theme developed in the myth?',
        choices: [
          'Boastful pride and disrespect toward higher powers bring harsh results.',
          ['Hard work and steady practice always bring happiness to a person\'s life.', 'Arachne worked hard and had great skill, but her attitude brought tragedy.'],
          ['Artistic talent and beauty are more important than showing humility.', 'Arachne\'s talent did not protect her from the goddess\'s anger.'],
          ['Advice from older people should be questioned rather than followed.', 'Arachne ignored the elder\'s wise counsel to her own detriment.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which sentence from the story best supports the answer to Part A?',
        choices: [
          ['"From early dawn until dusk, her shuttle danced across the threads with the swiftness of a swallow." (paragraph 1)', 'This describes her remarkable skill, not the moral consequences of pride.'],
          ['"Spectators gasped in wonder at the tapestries that unfolded beneath her fingers." (paragraph 2)', 'This illustrates public admiration rather than the theme.'],
          '"Yet wrath burned in the goddess\'s heart at Arachne\'s bitter mockery of the divine order." (paragraph 11)',
          ['"Even in her new form as a spider, Arachne retained her ancient gift..." (paragraph 13)', 'This explains the spider\'s ability, but does not state the cause of her downfall.'],
        ],
        answer: 2,
      },
      explain: 'Arachne\'s boastfulness and mockery of the gods provoke divine judgment (paragraph 11), resulting in her permanent transformation into a spider.',
    }),
    mcq({
      standard: 'rla:6.2B', cites: [3],
      stem: 'Read this sentence from paragraph 3: "Instead of receiving this praise with humble gratitude, Arachne\'s heart swelled with **insolent** pride." What does the word **insolent** mean?',
      choices: [
        ['quiet and timid when speaking aloud', 'Insolent is the opposite of timid; she speaks loudly and boastfully.'],
        'disrespectful and boldly rude',
        ['sorrowful and full of regret', 'Arachne feels no regret when making her boast.'],
        ['curious and eager to study', 'She refuses to learn from anyone, including Athena.'],
      ],
      answer: 1,
      explain: 'Insolent describes rude and arrogant behavior showing a lack of respect, as shown when Arachne mocks Athena and claims superiority.',
    }),
    msq({
      standard: 'rla:6.5F', cites: [4, 5, 7],
      stem: 'Which **two** conclusions about Athena can the reader draw from paragraphs 4 through 7?',
      choices: [
        'She gave Arachne a chance to apologize before revealing her true identity.',
        ['She intended to destroy the entire city of Lydia for Arachne\'s foolish words.', 'Athena addressed Arachne personally and did not harm the city.'],
        'She values respect and humility more than artistic talent alone.',
        ['She was frightened that Arachne\'s weaving would be superior to her own.', 'Athena was angry at the insult, not frightened of competition.'],
        ['She wanted to purchase Arachne\'s tapestries to decorate Mount Olympus.', 'Athena had no interest in buying human tapestries.'],
      ],
      answers: [0, 2],
      explain: 'Athena disguised herself as an elder to give Arachne a chance to ask for pardon (paragraph 5) and acted to uphold respect for the gods rather than reward boastfulness.',
    }),
    mcq({
      standard: 'rla:6.7C', cites: [10, 11],
      stem: 'Which event marks the climax of the story?',
      choices: [
        ['Travelers arrive from distant shores to watch Arachne spin wool.', 'This occurs in the exposition at the beginning.'],
        ['An elderly woman enters Arachne\'s workshop leaning on a staff.', 'This begins the confrontation, leading toward the climax.'],
        'Athena tears Arachne\'s flawless tapestry and strikes the girl.',
        ['Arachne transforms into a spider that spins webs in corners.', 'This is the resolution that follows the turning point.'],
      ],
      answer: 2,
      explain: 'The climax is the moment of highest tension when Athena inspects the flawless weaving, tears it in anger, and strikes Arachne with her shuttle.',
    }),
    mcq({
      standard: 'rla:6.9F', cites: [6, 7, 8],
      stem: 'How does the author create a dramatic mood in paragraphs 6 through 8?',
      choices: [
        ['By using gentle, lighthearted dialogue between friendly village neighbors.', 'The dialogue is serious and hostile rather than lighthearted.'],
        'By using vivid descriptions of shining robes and a clear voice.',
        ['By describing the colorful countryside and peaceful mountain meadows.', 'The scene focuses completely on the confrontation in the workshop.'],
        ['By questioning whether ancient myths are based on true historical events.', 'The narrator does not analyze historical facts.'],
      ],
      answer: 1,
      explain: 'Sensory descriptions like shimmering robes, unearthly radiance, and a voice ringing like a bronze shield elevate the dramatic tension.',
    }),
    mcq({
      standard: 'rla:6.6C', cites: [10],
      stem: 'Which detail from paragraph 10 shows that Arachne was truly a master weaver?',
      choices: [
        ['Arachne wove cautionary scenes in the four corners of her border.', 'Athena wove the cautionary scenes in her border.'],
        ['The onlookers cheered loudly when Arachne sat down at the loom.', 'The crowd watched in breathless silence.'],
        'Athena could find neither flaw nor loose knot in Arachne\'s work.',
        ['The woven cloth was made of pure gold threads and spun white silk.', 'The passage describes painted water and tight weaving, not gold threads.'],
      ],
      answer: 2,
      explain: 'Paragraph 10 states that even Athena could find neither flaw nor loose knot in the work, proving Arachne\'s extraordinary skill.',
    }),
  ],
});
