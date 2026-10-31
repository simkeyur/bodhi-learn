// Grade 6 historical adventure fiction: Mateo in 1890s Galveston.
import { makeSet, mcq, msq, twoq } from '../author.ts';

export const FICTION_CLOCKWORK = makeSet({
  id: 'g6-fiction-clockwork',
  grade: 6,
  kind: 'reading',
  title: 'The Pulse of the Tower',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g6-fiction-clockwork-p',
    title: 'The Pulse of the Tower',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'High above the bustling brick sidewalks of Galveston, Texas, twelve-year-old Mateo perched on a wooden stool inside the clock tower of St. Mary\'s Hall. Around him, the rhythmic heartbeat of bronze gears ticked with reassuring precision: tick-clack, tick-clack. Dust motes danced in the shafts of autumn sunlight that pierced the shuttered louvered windows.' },
      { kind: 'p', text: 'For six months, Mateo had served as apprentice to Master Silas Campbell, a silver-haired Scotsman whose pocket watch shop on Strand Street was legendary. The city clock in this tower was the crown jewel of Galveston\'s waterfront. Harbor captains set their navigational chronometers by its noon chime, steamship whistles answered its morning bell, and cotton merchants timed their auctions by its brass hands.' },
      { kind: 'p', text: '"Remember, Mateo," Master Silas said, pointing with a polished brass wrench toward the escapement wheel. "A clock this grand is not merely iron and weights. It is the steady heartbeat of an entire port. If our pendulum stops, the whole city stumbles."' },
      { kind: 'p', text: 'Mateo wiped sweat from his brow with a greasy rag and nodded earnestly. Master Silas had taken him in after his father\'s fishing boat was lost in the Gulf, offering him shelter, hot soup, and the patient art of precision mechanics. Mateo dreamed of the day Master Silas would trust him to wind the massive iron counterweights alone.' },
      { kind: 'p', text: 'That opportunity arrived sooner than he expected. On an overcast Thursday in late September, Master Silas twisted his ankle on the slippery dock while examining a ship\'s broken sextant. Sitting with his swollen foot propped on a cushion in the workshop, the old watchmaker handed Mateo the long iron crank and a flask of whale-oil lubricant.' },
      { kind: 'p', text: '"The weights will bottom out precisely at four o\'clock," Master Silas cautioned, his brow furrowed with pain and worry. "The atmospheric barometer is plummeting, Mateo. A squall is gathering offshore. The harbor masters will need that six o\'clock bell to gauge high tide. Climb the tower, grease the arbor pins, and wind the cable slowly. Do not rush."' },
      { kind: 'p', text: 'Mateo\'s heart fluttered like a caged finch, but he stood tall. "I will not let the clock stop, Master Silas."' },
      { kind: 'p', text: 'When Mateo reached the bell deck after climbing ninety-six spiral steps, the afternoon sky had turned a sickly olive green. Gusts of salty wind rattled the louvered slats, howling like a pack of hungry wolves. Inside the gear housing, the heavy lead weights were less than six inches from the floor timber. In less than twenty minutes, the pendulum would shudder to a halt.' },
      { kind: 'p', text: 'Mateo fitted the iron crank into the winding arbor. Bracing his boots against the floor joists, he leaned his whole weight into the turn. The cable creaked as the first heavy gear groaned into motion. One turn, two turns, three turns. His shoulder muscles burned, and blisters pinched through his canvas gloves.' },
      { kind: 'p', text: 'Suddenly, a violent squall rocked the belfry. The heavy iron crank slipped from his sweaty palm, spinning backward with ferocious speed. The handle struck his wrist with a sharp crack that sent him sprawling across the dusty floor.' },
      { kind: 'p', text: 'Tears of pain sprang to Mateo\'s eyes. His right wrist throbbed with white heat. Below him, the ticking of the clock seemed to slow, the remaining cable unraveling click by desperate click. If the weight touched down, the escapement would jam, and the tower would fall silent before the storm reached the port.' },
      { kind: 'p', text: 'He thought of Master Silas\'s patient hands showing him how to hold the safety ratchet. He thought of the schooners out in the gray chop, waiting for the evening bell. Clenching his teeth, Mateo scrambled to his knees. He grabbed the emergency brake lever with his uninjured left hand and hauled it backward until the teeth locked with a loud, metallic clink.' },
      { kind: 'p', text: 'With his left arm and the weight of his torso, he reset the crank. Grunting with each agonizing revolution, he turned the drum one notch at a time until the heavy weight ascended into the shadows of the rafters. When the bronze hammer finally struck six resonant chimes across the darkening bay, Mateo collapsed against the timber wall, exhausted but victorious.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.7C', cites: [10, 11, 12],
      stem: 'Which event forms the climax of the story?',
      choices: [
        ['Master Silas twists his ankle on the slippery dock.', 'This event creates the initial problem, but it is part of the rising action.'],
        ['Mateo climbs ninety-six spiral steps to reach the belfry.', 'Climbing the steps builds tension, but the main conflict has not yet peaked.'],
        'Despite an injured wrist, Mateo engages the brake lever and finishes winding the heavy clock weights with his left hand.',
        ['The clock strikes six bells across the harbor at the end.', 'The chime represents the resolution that occurs after the climax.'],
      ],
      answer: 2,
      explain: 'The climax occurs at the moment of greatest crisis: after being struck and injured, Mateo must summon the courage to engage the safety brake and finish winding the mechanism before time runs out.',
    }),
    twoq({
      standard: 'rla:6.7B', cites: [4, 7, 12, 13],
      a: {
        prompt: 'Part A: What motivates Mateo to persevere despite the pain in his wrist?',
        choices: [
          'His sense of loyalty to Master Silas and his concern for the safety of sailors in the harbor.',
          ['His desire to win a cash prize offered by city merchants.', 'The story mentions no monetary reward or competition.'],
          ['His hope that he will be allowed to leave his apprenticeship.', 'Mateo loves his work and wants to become a skilled clockmaker.'],
          ['His fear that he will be sent to jail if the clock stops.', 'There is no fear of legal punishment, only of letting down the port.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation from the passage best supports the answer to Part A?',
        choices: [
          ['"For six months, Mateo had served as apprentice to Master Silas Campbell..." (paragraph 2)', 'This gives background information about his apprenticeship.'],
          ['"Mateo wiped sweat from his brow with a greasy rag and nodded earnestly." (paragraph 4)', 'This shows he is working hard, but does not capture his inner motivation during the crisis.'],
          '"He thought of Master Silas\'s patient hands showing him how to hold the safety ratchet. He thought of the schooners out in the gray chop, waiting for the evening bell." (paragraph 12)',
          ['"When the bronze hammer finally struck six resonant chimes across the darkening bay..." (paragraph 13)', 'This describes the outcome, not his motivation.'],
        ],
        answer: 2,
      },
      explain: 'Paragraph 12 shows Mateo\'s internal thoughts during his moment of crisis: gratitude for Master Silas and awareness that ships at sea depend on the clock\'s chime.',
    }),
    mcq({
      standard: 'rla:6.7D', cites: [1, 2, 6],
      stem: 'How does the historical setting of an 1890s seaport influence the plot?',
      choices: [
        ['Citizens used telegraphs to check the time on their smartphones.', 'Smartphones did not exist in the 1890s.'],
        'Because people lacked modern electronic devices, the entire port depended on the tower clock to navigate and coordinate commerce.',
        ['Steamships were prohibited from entering the bay after sunset.', 'Ships entered the bay using the bells to measure tides and time.'],
        ['The city was threatened by a military invasion from the Gulf.', 'The threat comes from a natural squall and equipment stoppage, not an invasion.'],
      ],
      answer: 1,
      explain: 'In the 1890s, community members relied on central mechanical clocks for navigation, shipping, and business. A stopped clock would disrupt the entire harbor community.',
    }),
    mcq({
      standard: 'rla:6.9D', cites: [8],
      stem: 'Read this sentence from paragraph 8: "Gusts of salty wind rattled the louvered slats, howling like a pack of hungry wolves." What does the simile achieve?',
      choices: [
        ['It shows that wild animals had invaded the bell tower.', 'The comparison is figurative; there are no actual wolves in the tower.'],
        ['It explains why the shutters were built from heavy cedar planks.', 'The simile focuses on the sound and ferocity of the wind, not shutter construction.'],
        'It emphasizes the threatening intensity and violent power of the incoming storm.',
        ['It suggests that the belfry was completely peaceful and protected.', 'The simile highlights danger and chaos, not peace.'],
      ],
      answer: 2,
      explain: 'Comparing the howling wind to "a pack of hungry wolves" creates a sense of predatory menace, emphasizing the violent strength of the squall.',
    }),
    msq({
      standard: 'rla:6.5E', cites: [4, 7, 13],
      stem: 'Which **two** qualities of Mateo\'s character are most strongly developed throughout the story?',
      choices: [
        'Responsibility when entrusted with an important community duty.',
        ['Arrogance about his mechanical superiority over Master Silas.', 'Mateo is humble and eager to learn from his mentor.'],
        'Resilience in the face of unexpected physical hardship.',
        ['Impatience with the repetitive tasks of clock repair.', 'Mateo works patiently and dreams of taking on greater responsibility.'],
        ['Reluctance to help when Master Silas is injured.', 'Mateo volunteers immediately and stands tall when asked.'],
      ],
      answers: [0, 2],
      explain: 'Mateo demonstrates genuine responsibility by taking the town\'s schedule seriously, and resilience by overcoming a painful injury to finish the job.',
    }),
    mcq({
      standard: 'rla:6.6D', cites: [5, 6, 8, 12, 13],
      stem: 'Which is the best summary of the story?',
      choices: [
        ['Mateo works as an apprentice in Galveston and enjoys climbing ninety-six steps to oil the clock tower gears on sunny days.', 'This omits the main conflict, the storm, and the resolution.'],
        'When Master Silas is injured before an approaching storm, his apprentice Mateo must wind the town clock alone; despite a painful wrist injury caused by a slipping crank, he uses his left hand to complete the job and keep the port running.',
        ['A massive squall strikes Galveston Island in 1890, destroying the St. Mary\'s Hall belfry and forcing harbor ships to anchor at sea.', 'The belfry is not destroyed, and the clock strikes successfully.'],
        ['Master Silas twists his ankle on a dock and sends Mateo to buy new clock tools from a neighboring shop on Strand Street.', 'Mateo is sent to wind the tower clock, not buy tools.'],
      ],
      answer: 1,
      explain: 'This summary captures the initiating event (Silas\'s injury), the stakes (the storm and clock winding), the central challenge (wrist injury), and the successful resolution.',
    }),
    mcq({
      standard: 'rla:6.5F', cites: [2, 3],
      stem: 'What can the reader infer about Master Silas\'s reputation in Galveston?',
      choices: [
        ['He is considered careless with public property.', 'Silas maintains the city\'s most vital instrument with great care.'],
        ['He is widely distrusted by local harbor captains.', 'Ship captains trust his work and set their chronometers by his clock.'],
        'He is deeply respected as a master craftsman whose work underpins the city\'s daily life.',
        ['He recently moved to Galveston from New York City.', 'Paragraph 2 notes he is a Scotsman who has run his legendary shop for years.'],
      ],
      answer: 2,
      explain: 'Paragraph 2 describes his shop as "legendary" and explains that captains, merchants, and trains relied on his handiwork every day.',
    }),
  ],
});
