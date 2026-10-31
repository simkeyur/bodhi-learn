// Grade 8 paired selection: Voices of the Alamo: History and Legend (Passage 1: Informational, Passage 2: Historical Fiction)
import { makeSet, mcq } from '../author.ts';

export const PAIRED_ALAMO = makeSet({
  id: 'g8-paired-alamo',
  grade: 8,
  kind: 'reading',
  title: 'Voices of the Alamo: History and Legend',
  intro: 'Read the two selections and choose the best answer to each question.',
  passages: [
    {
      id: 'g8-paired-alamo-p1',
      title: 'The Siege of 1836: A Historical Record',
      genre: 'informational',
      blocks: [
        { kind: "p", text: "In late February 1836, an old Spanish mission fortress in San Antonio de B\u00e9xar became the focal point of the Texas Revolution. For thirteen harrowing days, from February 23 to March 6, an estimated one hundred and eighty-nine Texian and Tejano defenders held the crumbling limestone compound of the Alamo against General Antonio L\u00f3pez de Santa Anna's Mexican army of several thousand veteran infantry and cavalry troops, who had marched through harsh winter blizzards from central Mexico to suppress the rebellion." },
        { kind: "p", text: "The strategic reality confronting the defenders was bleak. Co-commanded by twenty-six-year-old Lieutenant Colonel William Barret Travis and the celebrated frontier knife-fighter James Bowie, the garrison occupied a sprawling three-acre compound designed as a mission rather than a modern military fortification. Its perimeter walls were too long to be adequately defended by less than two hundred men. Bowie soon collapsed with advanced typhoid pneumonia, leaving Travis in sole command." },
        { kind: "p", text: "Realizing that survival depended upon swift reinforcements, Travis penned several impassioned dispatch letters that slipped past Mexican cavalry patrols via trusted couriers like Captain Albert Martin and Juan Segu\u00edn. His most famous dispatch, addressed 'To the People of Texas & All Americans in the World' on February 24, remains one of the most celebrated documents in American history. In it, Travis stated with unwavering resolve: 'I am besieged, by a thousand or more of the Mexicans under Santa Anna... I shall never surrender or retreat... Victory or Death.'" },
        { kind: "p", text: "Despite Travis's pleas, only thirty-two men from the neighboring settlement of Gonzales managed to ride through enemy lines to reinforce the garrison on March 1. In the pre-dawn darkness of March 6, Santa Anna launched a four-column assault accompanied by the haunting bugle strains of the 'Deg\u00fcello'\u2014a signal that no quarter would be given. The defenders fought with desperate bravery, repelling two successive waves before Mexican infantry breached the northern wall. By sunrise, the fortress had fallen, but the sacrifice transformed the Alamo into an enduring symbol of resistance that galvanized Sam Houston's army to ultimate victory at San Jacinto seven weeks later." },
      ],
    },
    {
      id: 'g8-paired-alamo-p2',
      title: "The Courier's Ride",
      genre: 'fiction',
      blocks: [
        { kind: "p", text: "Young courier Jesse Cummings checked the leather saddlebags of his gray mare, ensuring the dispatch was wrapped in waterproof oilcloth and strapped securely against his chest. It was the icy midnight of February 29, 1836. Fog clung to the damp banks of the San Antonio River as he led his horse quietly through the postern gate of the Alamo. Behind him within the darkened mission walls, fires burned low in the courtyard, where exhausted riflemen slept on stone flags with their flintlocks in their arms." },
        { kind: "p", text: "Jesse recalled the moment hours earlier when Colonel Travis had summoned him to his headquarters in the old mission convento. Travis had looked gaunt, his uniform stained with powder smoke and limestone dust, yet his blue eyes burned with fierce intensity. 'Take this letter east to Washington-on-the-Brazos, Jesse,' Travis had commanded, his voice steady. 'Ride hard, avoid the open royal roads, and do not stop until the delegates hold this paper in their hands. They are drafting a declaration of independence, but without reinforcements, these walls will become our tomb.'" },
        { kind: "p", text: "As Jesse mounted his mare in the shadow of the cottonwood trees, he felt the heavy weight of the mission upon his shoulders. He was only seventeen years old, yet he carried the desperate hopes of nearly two hundred men. Crawling through the mesquite brush to bypass Mexican cavalry pickets, Jesse heard the distant clinking of sabers and the low murmurs of sentries warming themselves by brush fires. His mare's hooves made no sound on the soft river silt." },
        { kind: "p", text: "Once past the enemy perimeter, Jesse leaned forward over the mare's neck and touched her flanks with his spurs. The horse surged into a gallop across the dark prairie under a canopy of cold stars. Behind him, the low silhouette of the Alamo receded into the night. Jesse knew in his heart that he would likely never see Colonel Travis, Jim Bowie, or Davy Crockett again, but the words sealed in his saddlebag would ensure that their defiance would echo across generations forever." },
      ],
    },
  ],
  items: [
    mcq({
      standard: "rla:8.8D.i", cites: [1, 4],
      stem: "What is the controlling idea of Passage 1?",
      choices: [
        ["Santa Anna intended to preserve the Alamo mission as an agricultural trading center.", "Santa Anna assaulted the fortress to crush the rebellion, not for trade."],
        "Although the Alamo fell to overwhelming forces after a thirteen-day siege, the defenders' courageous sacrifice inspired the victory that won Texas independence.",
        ["James Bowie was the sole commander who directed military tactics throughout the battle.", "Bowie fell ill with pneumonia, leaving Travis in command."],
        ["The Alamo was a modern, impregnable fortress capable of withstanding months of siege.", "The text notes it was a crumbling three-acre mission ill-suited for defense."],
      ],
      answer: 1,
      explain: "Passage 1 emphasizes that while the garrison was overwhelmed, their sacrifice became the rallying cry that propelled Texas to victory at San Jacinto.",
    }),
    mcq({
      standard: "rla:8.7C", cites: [2], passage: 1,
      stem: "In Passage 2, how does the flashback to Travis's command in the convento contribute to the plot?",
      choices: [
        "It establishes the urgent stakes of Jesse's courier mission and reveals Travis's clear-eyed understanding of the garrison's perilous situation.",
        ["It reveals that Jesse intended to desert the Texian army and flee to Louisiana.", "Jesse is fully committed to delivering the dispatch to the delegates."],
        ["It shows that Travis had decided to surrender the fort before midnight.", "Travis commanded Jesse to ride for reinforcements and affirmed 'Victory or Death'."],
        ["It explains how Santa Anna successfully breached the postern gate.", "The scene takes place days before the final assault, focusing on courier dispatch."],
      ],
      answer: 0,
      explain: "The flashback in paragraph 2 explains Jesse's mission, the critical importance of the dispatch, and Travis's awareness of their peril.",
    }),
    mcq({
      standard: "rla:8.6C", cites: [3], passage: 0,
      stem: "Which text evidence from both passages best demonstrates Colonel William B. Travis's unwavering resolve?",
      choices: [
        ["'Bowie soon collapsed with advanced typhoid pneumonia...'", "This describes Bowie's illness, not Travis's resolve."],
        ["'...fires burned low in the courtyard, where exhausted riflemen slept...'", "This describes the tired garrison, not Travis's leadership."],
        "In Passage 1, Travis declares 'I shall never surrender or retreat... Victory or Death,' while in Passage 2, his eyes burn with fierce intensity as he dispatches couriers.",
        ["'...designed as a mission rather than a modern military fortification.'", "This describes the mission architecture."],
      ],
      answer: 2,
      explain: "Both passages present Travis as uncompromisingly determined: through his famous dispatch in Passage 1 and his intense focus in Passage 2.",
    }),
    mcq({
      standard: "rla:8.5F", cites: [3, 4], passage: 1,
      stem: "In Passage 2, what can the reader infer about Jesse as he rides away from the Alamo?",
      choices: [
        ["He feels joyous that he escaped military combat without having to fire his rifle.", "He feels the solemn weight of carrying his comrades' hopes."],
        ["He is resentful that older soldiers forced him to make the ride in freezing weather.", "Jesse accepts the responsibility with solemn dedication."],
        ["He intends to abandon the letter at the first trading post he encounters.", "He rides with desperate urgency to deliver it into the delegates' hands."],
        "He experiences a bittersweet mixture of deep sorrow for his doomed comrades and solemn determination to fulfill his duty.",
      ],
      answer: 3,
      explain: "Jesse knows he will never see his comrades again, yet gallops into the night committed to ensuring their message reaches the convention.",
    }),
    mcq({
      standard: "rla:8.9E", cites: [1], passage: 0,
      stem: "How does the point of view differ between Passage 1 and Passage 2?",
      choices: [
        ["Passage 1 is a fictional folktale, while Passage 2 is a government census report.", "Passage 1 is objective history, and Passage 2 is historical fiction."],
        "Passage 1 provides an objective third-person historical overview of strategic military events, while Passage 2 offers a close, personal third-person narrative focused on a young courier's experience.",
        ["Passage 1 is written in the first person by Santa Anna, while Passage 2 is narrated by Davy Crockett.", "Neither passage is narrated by Santa Anna or Crockett."],
        ["Passage 1 uses humorous satire, while Passage 2 is an argumentative debate.", "Neither passage uses satire or debate format."],
      ],
      answer: 1,
      explain: "Passage 1 provides historical context and broad military analysis, while Passage 2 immerses the reader in the subjective sensory experience of a courier.",
    }),
    mcq({
      standard: "rla:8.5H", cites: [3, 4], passage: 0,
      stem: "Synthesizing information from both selections, what role did couriers play in the historical impact of the Alamo?",
      choices: [
        "By carrying Travis's desperate letters through enemy lines, couriers preserved the defenders' voice and galvanized the rest of Texas to rally and win independence.",
        ["Couriers successfully brought three thousand fresh troops to lift the Mexican siege.", "Reinforcements did not arrive in time to lift the siege."],
        ["Couriers negotiated a peaceful truce that allowed all defenders to evacuate safely.", "No truce was negotiated; the defenders fought to the end."],
        ["Couriers delivered secret maps that allowed Santa Anna to capture San Antonio.", "Couriers worked for the Texian defenders, not the Mexican army."],
      ],
      answer: 0,
      explain: "Both texts demonstrate that couriers carrying Travis's dispatches ensured their story survived and rallied Texas to ultimate victory.",
    }),
    mcq({
      standard: "rla:8.5H", cites: [3], passage: 0,
      stem: "What shared understanding do both passages convey regarding the power of the written word?",
      choices: [
        ["Written treaties between nations are consistently ignored during wartime.", "The passages focus on Travis's letters, not international treaties."],
        ["Printing presses were too slow to produce newspapers in nineteenth-century Texas.", "Printing technology is not the focus of either Alamo passage."],
        "A courageous message written in the face of certain mortality can outlast physical stone walls and inspire an entire people to fight for freedom.",
        ["Official military orders are less reliable than oral frontier rumors.", "Both passages treat Travis's written dispatches with sacred reverence."],
      ],
      answer: 2,
      explain: "Both selections show that Travis's written words outlived the fallen mission walls, becoming an immortal rallying cry for freedom.",
    }),
    mcq({
      standard: "rla:8.5E", cites: [4], passage: 0,
      stem: "What enduring connection can readers make between the events of the Alamo and contemporary Texas culture?",
      choices: [
        ["Texans no longer study the Texas Revolution in public school curricula.", "The Texas Revolution and the Alamo are central parts of Texas history curricula."],
        ["The Alamo mission was demolished and replaced by modern shopping centers.", "The Alamo is preserved as a historic state landmark and museum."],
        ["The slogan 'Remember the Alamo' became an internationally recognized symbol of perseverance, sacrifice, and state identity that continues today.", "The slogan remains iconic in Texas history and culture."],
        ["San Antonio abandoned tourism in favor of deep-sea commercial fishing.", "San Antonio is landlocked and celebrates its Alamo historic heritage."],
      ],
      answer: 2,
      explain: "'Remember the Alamo' remains an iconic symbol of sacrifice, courage, and identity in Texas history and modern culture.",
    }),
  ],
});
