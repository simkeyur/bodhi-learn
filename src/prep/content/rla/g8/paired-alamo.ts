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
        { kind: 'p', text: 'In late February 1836, an old Spanish mission fortress in San Antonio became the center of the Texas Revolution. For thirteen tense days, from February 23 to March 6, nearly two hundred Texian and Tejano defenders held the Alamo. They faced General Antonio López de Santa Anna and thousands of Mexican soldiers. The Mexican army had marched through harsh winter weather from central Mexico to stop the Texas revolt.' },
        { kind: 'p', text: 'The defenders faced impossible odds. Lieutenant Colonel William Barret Travis and James Bowie shared command of the post. The garrison occupied a large three-acre mission compound. It was built for church work, not modern warfare. Its long stone walls were hard to defend with so few men. The mission enclosed an open plaza, a roofless church, and low barracks. Local Tejano citizens joined the defense alongside settlers and American volunteers. Soon after the siege began, Bowie fell severely ill with pneumonia. His illness left the twenty-six-year-old Travis in sole command of the fort.' },
        { kind: 'p', text: 'Travis knew that survival required quick help. He wrote several urgent letters and sent them past Mexican lines with trusted riders like Juan Seguín. His most famous letter was dated February 24. It was addressed "To the People of Texas & All Americans in the World." Travis wrote with fierce resolve: "I am besieged, by a thousand or more of the Mexicans under Santa Anna... I shall never surrender or retreat... Victory or Death."' },
        { kind: 'p', text: 'Despite his pleas, only thirty-two men from nearby Gonzales managed to slip inside the Alamo walls. Before dawn on March 6, Santa Anna\'s troops launched a final charge. Bugles sounded the "Degüello," a call signaling that no prisoners would be taken. The defenders fought with desperate courage. They pushed back two waves of troops before Mexican soldiers climbed over the north wall. By sunrise, the fortress had fallen. News of the fall spread rapidly across Texas. The battle cry "Remember the Alamo!" united the colonists. The memory of their sacrifice inspired Sam Houston\'s army to victory at San Jacinto seven weeks later.' },
      ],
    },
    {
      id: 'g8-paired-alamo-p2',
      title: "The Courier's Ride",
      genre: 'fiction',
      blocks: [
        { kind: 'p', text: 'Young courier Jesse Cummings checked the leather saddlebags of his gray mare. He made sure the letter was wrapped in oilcloth and strapped against his chest. It was the icy midnight of February 29, 1836. Thick fog clung to the damp banks of the San Antonio River. He led his horse quietly through the wooden postern gate of the Alamo. Behind him inside the mission walls, campfires burned low in the courtyard. Exhausted riflemen slept on cold stone slabs with their flintlocks held in their arms.' },
        { kind: 'p', text: 'Jesse remembered when Colonel Travis had summoned him to headquarters in the old mission convento. Travis looked thin and tired. His uniform was stained with black powder and limestone dust. Yet his blue eyes burned with fierce resolve. "Take this letter east to Washington-on-the-Brazos, Jesse," Travis had ordered in a steady voice. "Ride hard, avoid the main roads, and do not stop until the delegates hold this paper in their hands. They are writing a declaration of independence. Without reinforcements, these walls will become our tomb."' },
        { kind: 'p', text: 'As Jesse mounted his mare beneath the dark cottonwood trees, he felt the heavy weight of the mission on his shoulders. He was only seventeen years old, but he carried the hopes of nearly two hundred men. Crawling through the mesquite brush to slip past enemy sentries, Jesse heard the distant clink of sabers. Mexican soldiers warmed their hands by brush fires along the river. His horse\'s hooves made almost no sound on the soft river mud.' },
        { kind: 'p', text: 'Once past the enemy line, Jesse leaned forward over his horse\'s neck and pressed his heels into her sides. The mare broke into a fast gallop across the dark prairie under cold stars. Cold wind whipped past his face as the horse sped across the grassy plains. Behind him, the dark outline of the Alamo faded into the night mist. Jesse knew that he might never see Colonel Travis, Jim Bowie, or Davy Crockett again. But the letter sealed in his saddlebag would ensure that their brave stand would never be forgotten.' },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:8.8D.i', cites: [1, 4],
      stem: 'What is the central idea of Passage 1?',
      choices: [
        ['Santa Anna intended to preserve the mission as an agricultural trading hub.', 'Santa Anna marched to suppress the rebellion, not to preserve a trading hub.'],
        'Though the Alamo fell, the defenders\' sacrifice inspired Texas victory.',
        ['James Bowie commanded the defense throughout the entire thirteen-day battle.', 'Bowie fell severely ill with pneumonia early in the siege.'],
        ['The Alamo was a modern fortress built to withstand long military sieges.', 'Passage 1 explains that it was an old mission poorly suited for defense.'],
      ],
      answer: 1,
      explain: 'Passage 1 explains that although the fortress fell, the defenders\' sacrifice inspired Sam Houston\'s army to victory at San Jacinto.',
    }),
    mcq({
      standard: 'rla:8.7C', cites: [2], passage: 1,
      stem: 'In Passage 2, how does the flashback to Travis\'s command contribute to the plot?',
      choices: [
        ['It reveals that Jesse intended to leave the army and move to Louisiana.', 'Jesse is committed to delivering the dispatch to the delegates.'],
        ['It shows that Travis decided to surrender the fort before midnight.', 'Travis resolved never to surrender and dispatched riders for help.'],
        'It establishes the urgent stakes and purpose of Jesse\'s ride.',
        ['It explains how Santa Anna successfully breached the postern gate.', 'The flashback describes Jesse receiving his orders, not enemy tactics.'],
      ],
      answer: 2,
      explain: 'The flashback in paragraph 2 establishes why Jesse is riding into the night and what is at stake if the message fails to arrive.',
    }),
    mcq({
      standard: 'rla:8.6C', cites: [3], passage: 0,
      stem: 'Which text evidence best demonstrates Colonel William B. Travis\'s resolve?',
      choices: [
        ['Passage 1 explains that the perimeter walls were too long to defend with few men.', 'This describes compound architecture rather than Travis\'s resolve.'],
        ['Passage 2 notes that campfires burned low in the courtyard where riflemen rested.', 'This describes tired soldiers in the courtyard.'],
        ['Passage 1 states that Bowie fell ill with pneumonia, leaving Travis in command.', 'This details Bowie\'s illness rather than Travis\'s words of resolve.'],
        'His letter declared, "I shall never surrender or retreat... Victory or Death."',
      ],
      answer: 3,
      explain: 'Travis\'s famous quotation directly demonstrates his determination never to surrender.',
    }),
    mcq({
      standard: 'rla:8.5F', cites: [3, 4], passage: 1,
      stem: 'In Passage 2, what can the reader infer about Jesse as he rides away from the Alamo?',
      choices: [
        'He feels sorrow for his comrades but remains determined to do his duty.',
        ['He feels relieved that he avoided battle and plans to stay on the eastern coast.', 'Jesse is motivated by responsibility to his comrades rather than self-preservation.'],
        ['He is angry that older soldiers forced him to ride through freezing weather.', 'Jesse accepts the mission with solemn dedication rather than resentment.'],
        ['He hopes to sell the letter to news reporters in Washington-on-the-Brazos.', 'Jesse is riding to deliver an official dispatch to convention delegates.'],
      ],
      answer: 0,
      explain: 'Paragraph 4 shows that Jesse knows he may never see his friends again, yet he rides forward determined to preserve their story.',
    }),
    mcq({
      standard: 'rla:8.9E', cites: [1], passage: 0,
      stem: 'How does the point of view differ between Passage 1 and Passage 2?',
      choices: [
        'Passage 1 gives a factual overview, while Passage 2 tells a personal story.',
        ['Passage 1 is a fictional folktale, while Passage 2 is a government census report.', 'Passage 1 is historical nonfiction and Passage 2 is historical fiction.'],
        ['Passage 1 is told from Santa Anna\'s perspective, while Passage 2 is a poem.', 'Neither selection is written from Santa Anna\'s viewpoint or in verse.'],
        ['Passage 1 uses humorous satire, while Passage 2 presents an editorial debate.', 'Both selections treat the historical subject with seriousness.'],
      ],
      answer: 0,
      explain: 'Passage 1 provides an informational overview of the siege, while Passage 2 tells a fictional narrative following a young courier.',
    }),
    mcq({
      standard: 'rla:8.5H', cites: [3, 4], passage: 0,
      stem: 'Synthesizing information from both selections, what role did couriers play in the Texas Revolution?',
      choices: [
        ['Couriers negotiated peace terms that allowed the garrison to evacuate safely.', 'The defenders fought to the end rather than evacuating.'],
        ['Couriers brought three thousand fresh troops to lift the Mexican army siege.', 'Reinforcements did not arrive in time to lift the siege.'],
        'Couriers carried letters that united Texans and rallied them to win freedom.',
        ['Couriers delivered secret maps that helped Santa Anna capture San Antonio.', 'Couriers rode on behalf of the Texian defenders.'],
      ],
      answer: 2,
      explain: 'Both texts show that couriers carried Travis\'s appeals through enemy lines, rallying Texans to unite and win independence.',
    }),
    mcq({
      standard: 'rla:8.5H', cites: [3], passage: 0,
      stem: 'What shared idea do both passages convey about Travis\'s written words?',
      choices: [
        ['Written treaties were consistently ignored by commanders during wartime.', 'The passages discuss Travis\'s appeal letters, not international treaties.'],
        ['Printing technology was too slow to produce newspapers on the frontier.', 'Printing presses are not discussed in either passage.'],
        ['Official military letters were less reliable than spoken frontier rumors.', 'Both selections show that the written letters carried immense historical weight.'],
        'A brave message can outlast stone walls and inspire people to unite.',
      ],
      answer: 3,
      explain: 'Both passages emphasize that Travis\'s words survived the battle and inspired future generations long after the fort fell.',
    }),
    mcq({
      standard: 'rla:8.5E', cites: [4], passage: 0,
      stem: 'What lasting connection can readers make between the Alamo and modern Texas culture?',
      choices: [
        ['The state replaced the Alamo compound with a modern commercial sports stadium.', 'The Alamo is preserved as a historic state shrine and museum.'],
        'The battle cry "Remember the Alamo!" remains an enduring symbol of courage.',
        ['Texas schools no longer teach the history of the 1836 revolution in classes.', 'The battle and revolution remain standard topics in Texas history curricula.'],
        ['San Antonio leaders demolished the mission to build modern municipal offices.', 'The historic structure stands preserved in downtown San Antonio today.'],
      ],
      answer: 1,
      explain: 'The battle cry "Remember the Alamo!" remains an enduring symbol of sacrifice and identity in Texas history and culture.',
    }),
  ],
});
