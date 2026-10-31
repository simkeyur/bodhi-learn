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
      { kind: 'p', text: 'In the sunlit hills of ancient Lydia, there lived a maiden named Arachne whose skill at the loom was celebrated across the land. From early dawn until dusk, her shuttle danced across the warp threads with the swiftness of a swallow in flight. Travelers journeyed from distant shores just to watch her card the soft fleece and spin wool so fine that it drifted upon the breeze like morning mist.' },
      { kind: 'p', text: 'Spectators gasped in wonder at the tapestries that unfolded beneath her fingers. Upon her cloth, fields of golden grain rippled in imaginary winds, and crimson roses seemed fragrant enough to attract real bees. "Surely," the admiring townsfolk murmured, "Athena herself, the goddess of wisdom and craft, must have bestowed this divine gift upon you."' },
      { kind: 'p', text: 'Instead of receiving this praise with humble gratitude, Arachne\'s heart swelled with insolent pride. She tossed her dark curls and laughed haughtily. "Athena? What could that goddess teach me? My skill belongs to my own hands and keen eyes alone! Let Athena come and contest her craft against mine. If her work surpasses mine, I shall willingly submit to whatever punishment she decrees."' },
      { kind: 'p', text: 'Her listeners drew back in horror, whispering prayers to avert the wrath of the heavens. Days later, an elderly woman leaning upon a wooden staff hobbled into Arachne\'s workshop. Her gray hair was covered by a tattered woolen shawl, and her eyes were cloudy with age.' },
      { kind: 'p', text: '"Young woman," the elder rasped gently, "heed the counsel of one who has lived many winters. Seek renown among mortals for your spinning, but never presume to rival the immortal gods. Kneel and ask pardon for your boastful words, and Athena in her mercy may yet forgive you."' },
      { kind: 'p', text: 'Arachne glared fiercely at the visitor and struck her loom with an angry hand. "Keep your timid counsel for foolish children, old crone! I have challenged the goddess openly, yet she coward-like avoids my contest. Why does she not face me herself?"' },
      { kind: 'p', text: 'At those brazen words, the crone\'s crooked form straightened. The ragged shawl fell away, revealing shimmering robes of azure and gold, and her cloudy eyes flashed with unearthly radiance. The mortal onlookers fell upon their faces in awe, for Athena stood revealed in majesty.' },
      { kind: 'p', text: '"Athena has come," the goddess commanded, her voice ringing like a bronze shield. "The contest you desire shall begin this very hour."' },
      { kind: 'p', text: 'Two looms were erected in the open courtyard, and the duel of shuttles commenced in breathless silence. Athena wove a magnificent panorama depicting the twelve Olympians seated upon their thrones of ivory and gold, surrounded by the majesty of the heavens. In the four corners of her border, she wove small, cautionary scenes showing mortals who had dared to defy the gods and were transformed into rocks and wild beasts.' },
      { kind: 'p', text: 'Arachne, undaunted, wove scenes exposing the folly and deceit of the gods, portraying them descending to earth in disguise and causing strife among mortals. Her weaving was so breathtakingly lifelike that the painted water seemed to churn with genuine foam. Even Athena, examining the fabric closely, could find neither flaw nor loose knot in the maiden\'s work.' },
      { kind: 'p', text: 'Yet wrath burned in the goddess\'s heart at Arachne\'s bitter mockery of the divine order. With her shuttle of boxwood, Athena struck the insolent tapestry, rending it in twain. Then she touched Arachne\'s forehead with her spear, filling the maiden\'s soul with overwhelming shame and sorrow.' },
      { kind: 'p', text: 'Overcome with despair at what she had done, Arachne sought to hang herself from a rafter. But Athena softened her punishment with stern pity. "Live, reckless mortal," decreed the goddess, "yet hang you shall forever, you and all your descendants, weaving unending threads in dark corners."' },
      { kind: 'p', text: 'As Athena sprinkled juices of magical aconite over the maiden, Arachne\'s hair fell away, her ears and nose disappeared, and her body dwindled into a tiny sphere. From her sides sprouted eight nimble legs. Even in her new form as a spider, Arachne retained her ancient gift, continually spinning shimmering webs that glisten like dew in the morning sun.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.8A', cites: [3, 7, 13],
      stem: 'Which characteristic of traditional myths is most evident in this selection?',
      choices: [
        'A mortal is transformed by a deity to explain the origin of a creature in nature.',
        ['An animal uses clever tricks to outsmart a stronger rival.', 'This describes a trickster fable, not a classical myth of divine punishment.'],
        ['A historical hero leads an army to defend a besieged fortress.', 'There are no armies or historical battles in this story.'],
        ['A humorous exaggeration accounts for the size of natural landmarks.', 'Tall tales use humorous exaggeration; this myth has a serious tone.'],
      ],
      answer: 0,
      explain: 'A hallmark of Greek mythology is explaining natural phenomena (the spider spinning webs) through the interaction, conflict, and transformation between humans and gods.',
    }),
    twoq({
      standard: 'rla:6.7A', cites: [3, 5, 11, 12],
      a: {
        prompt: 'Part A: What is the primary theme developed in the myth?',
        choices: [
          'Unchecked pride and disrespect toward higher powers bring severe consequences.',
          ['Hard work and continuous practice guarantee happiness in life.', 'Arachne worked hard and had great skill, but her attitude brought tragedy.'],
          ['Beauty and artistic talent are more valuable than humility.', 'Arachne\'s talent did not protect her from the goddess\'s wrath.'],
          ['Advice from elderly people should always be questioned.', 'Arachne ignored the elder\'s wise counsel to her own detriment.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which sentence from the story best supports the answer to Part A?',
        choices: [
          ['"From early dawn until dusk, her shuttle danced across the warp threads with the swiftness of a swallow in flight." (paragraph 1)', 'This describes her remarkable skill, not the moral consequences of pride.'],
          ['"Spectators gasped in wonder at the tapestries that unfolded beneath her fingers." (paragraph 2)', 'This illustrates public admiration, not the theme.'],
          '"Yet wrath burned in the goddess\'s heart at Arachne\'s bitter mockery of the divine order." (paragraph 11)',
          ['"Even in her new form as a spider, Arachne retained her ancient gift..." (paragraph 13)', 'This explains the spider\'s ability, but does not state the cause of her downfall.'],
        ],
        answer: 2,
      },
      explain: 'The myth illustrates the Greek concept of hubris: Arachne\'s boastfulness and mockery of the gods (paragraph 11) provoke divine judgment, resulting in her permanent transformation.',
    }),
    mcq({
      standard: 'rla:6.2B', cites: [3],
      stem: 'Read this sentence from paragraph 3: "Instead of receiving this praise with humble gratitude, Arachne\'s heart swelled with insolent pride." What does the word **insolent** mean?',
      choices: [
        ['quiet and timid', 'Insolent is the opposite of timid; she speaks loudly and boastfully.'],
        'disrespectful and boldly insulting',
        ['sorrowful and regretful', 'Arachne feels no regret when making her boast.'],
        ['curious and eager to learn', 'She refuses to learn from anyone, including Athena.'],
      ],
      answer: 1,
      explain: 'Insolent describes behavior that shows a rude and arrogant lack of respect, as shown when Arachne mocks Athena and claims superiority.',
    }),
    msq({
      standard: 'rla:6.5F', cites: [4, 5, 7],
      stem: 'Which **two** conclusions about Athena can the reader draw from paragraphs 4 through 7?',
      choices: [
        'She offered Arachne an opportunity to repent before revealing her identity.',
        ['She intended to destroy the entire city of Lydia for Arachne\'s boast.', 'Athena only addressed Arachne personally and did not harm the city.'],
        'She values humility and reverence more than mere artistic talent.',
        ['She was frightened that Arachne\'s weaving would be superior to hers.', 'Athena was angry at the insult, not frightened of competition.'],
        ['She wanted to purchase Arachne\'s tapestries for Mount Olympus.', 'Athena had no interest in buying human tapestries.'],
      ],
      answers: [0, 2],
      explain: 'Athena disguised herself as an elder to give Arachne a chance to ask for pardon (paragraph 5) and acted to uphold reverence for the gods rather than reward boastful craftsmanship.',
    }),
    mcq({
      standard: 'rla:6.7C', cites: [10, 11],
      stem: 'Which event marks the climax of the story?',
      choices: [
        ['Travelers arrive from distant shores to watch Arachne spin wool.', 'This occurs in the exposition at the beginning.'],
        ['An elderly woman walks into Arachne\'s workshop with a staff.', 'This begins the confrontation, leading toward the climax.'],
        'Athena inspects Arachne\'s flawless tapestry, tears it in fury, and strikes the maiden with her shuttle.',
        ['Arachne transforms into an eight-legged spider in dark corners.', 'This is the resolution that follows the turning point.'],
      ],
      answer: 2,
      explain: 'The climax is the moment of highest tension when the contest concludes, Athena discovers the weaving is flawless but insulting, and she strikes the tapestry and the girl.',
    }),
    mcq({
      standard: 'rla:6.9F', cites: [6, 7, 8],
      stem: 'How does the author\'s language in paragraphs 6 through 8 create a tense and dramatic mood?',
      choices: [
        ['By using gentle, humorous dialogue between neighbors.', 'The dialogue is serious and hostile, not humorous.'],
        'By using sharp sensory descriptions such as "flashed with unearthly radiance" and "ringing like a bronze shield."',
        ['By describing the colorful scenery of the Greek countryside.', 'The focus shifts completely to the confrontation in the workshop.'],
        ['By questioning whether ancient myths are based on true historical events.', 'The narrator does not step out to analyze historical facts.'],
      ],
      answer: 1,
      explain: 'Phrases like "brazen words," "unearthly radiance," and "ringing like a bronze shield" elevate the dramatic tension as Athena reveals her terrifying divine majesty.',
    }),
    mcq({
      standard: 'rla:6.6C', cites: [10],
      stem: 'Which detail from paragraph 10 shows that Arachne\'s artistic skill was genuinely extraordinary?',
      choices: [
        ['Arachne wove cautionary scenes in the corners of her border.', 'Athena wove the cautionary scenes in her border.'],
        ['The onlookers cheered loudly for Arachne\'s design.', 'The crowd watched in breathless silence.'],
        'Even Athena could find no flaw or loose knot in Arachne\'s woven fabric.',
        ['The thread was made of pure gold and spun silk.', 'The passage notes the painted water and tight weave, not pure gold thread.'],
      ],
      answer: 2,
      explain: 'Paragraph 10 states that "Even Athena, examining the fabric closely, could find neither flaw nor loose knot in the maiden\'s work," proving her mastery.',
    }),
  ],
});
