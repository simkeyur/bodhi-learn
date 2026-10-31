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
      { kind: 'p', text: 'High above the busy brick sidewalks of Galveston, Texas, twelve-year-old Mateo sat on a wooden stool. He was inside the clock tower of St. Mary\'s Hall. Around him, heavy bronze gears ticked with steady precision: tick-clack, tick-clack. Sunbeams poured through the wooden shutters, lighting up dancing specks of dust.' },
      { kind: 'p', text: 'For six months, Mateo had worked as an apprentice to Master Silas Campbell. Silas was a kind Scotsman with silver hair whose watch shop on Strand Street was legendary. The tower clock was the crown jewel of the Galveston waterfront. Harbor captains set their ship chronometers by its noon chime. Steamship captains answered its morning bell with deep whistles, and cotton merchants timed auctions by its brass hands.' },
      { kind: 'p', text: '"Remember, Mateo," Master Silas said, pointing with a polished brass wrench. "A grand clock is more than iron and weights. It is the steady heartbeat of this entire port. If our pendulum stops, the whole city stumbles."' },
      { kind: 'p', text: 'Mateo wiped sweat from his forehead with a rag and nodded seriously. Master Silas had taken him in after his father\'s fishing boat was lost in the Gulf of Mexico. Silas gave him a warm home, hot soup, and patient lessons in clock repair. Mateo dreamed of the day Master Silas would trust him to wind the massive iron weights alone.' },
      { kind: 'p', text: 'That chance came sooner than he expected. On a cloudy Thursday in late September, Master Silas twisted his ankle on a slick dock. Sitting in the shop with his swollen foot propped on a pillow, the old watchmaker handed Mateo a long iron crank and a flask of oil.' },
      { kind: 'p', text: '"The weights will reach the floor at four o\'clock," Master Silas warned, his face tight with pain and worry. "The barometer is dropping fast, Mateo. A squall is blowing in from the Gulf. Harbor masters need the six o\'clock bell to measure the high tide. Climb the tower, oil the gear pins, and wind the cable slowly. Do not rush."' },
      { kind: 'p', text: 'Mateo\'s heart beat fast, but he stood tall. "I will not let the clock stop, Master Silas."' },
      { kind: 'p', text: 'Mateo climbed ninety-six spiral steps to the bell deck. Outside, the afternoon sky had turned a dark, sickly olive green. Gusts of salty wind rattled the shutters, howling like hungry wolves. Inside the tower, the heavy lead weights were only six inches from the wooden floor. In twenty minutes, the pendulum would stop.' },
      { kind: 'p', text: 'Mateo slid the iron crank onto the winding post. Bracing his boots against the floor, he pushed his weight into the turn. The iron cable creaked as the heavy drum began to move. One turn, two turns, three turns. His shoulder muscles burned, and blisters rubbed against his work gloves.' },
      { kind: 'p', text: 'Suddenly, a violent blast of wind shook the belfry. The heavy crank slipped from his sweaty hand and spun backward with great speed. The handle struck his right wrist with a sharp crack, knocking him onto the dusty floor.' },
      { kind: 'p', text: 'Tears of pain filled Mateo\'s eyes. His wrist throbbed with white heat. Above him, the ticking seemed to slow as the cable uncoiled notch by notch. If the weight hit the floor, the gears would jam, and the tower would fall silent before the storm hit the bay.' },
      { kind: 'p', text: 'He remembered Master Silas\'s patient hands showing him how to hold the safety lever. He thought of the ships out in the rough water, waiting for the evening chimes. Gritting his teeth, Mateo scrambled to his knees. He grabbed the emergency brake lever with his uninjured left hand and pulled it backward until the teeth locked tight.' },
      { kind: 'p', text: 'Using his left arm and his whole upper body, he reset the crank. Grunting with each turn, he moved the drum one notch at a time. Slowly, the heavy weight rose toward the dark rafters. When the bronze hammer struck six loud chimes across the bay, Mateo leaned against the wall, tired but proud.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.7C', cites: [10, 11, 12],
      stem: 'Which event forms the climax of the story?',
      choices: [
        ['Master Silas twists his ankle on the slippery dock during a morning walk.', 'This event creates the initial problem, but is part of the rising action.'],
        ['Mateo climbs ninety-six spiral steps to reach the bell deck in the tower.', 'Climbing the steps builds tension before the main crisis occurs.'],
        'Mateo sets the brake and winds the heavy weights with his left hand.',
        ['The town clock strikes six bells across the harbor at the end of the day.', 'The chimes represent the resolution after the crisis has passed.'],
      ],
      answer: 2,
      explain: 'The climax occurs when Mateo overcomes his painful injury to engage the emergency brake and finish winding the weights before time runs out.',
    }),
    twoq({
      standard: 'rla:6.7B', cites: [4, 7, 12, 13],
      a: {
        prompt: 'Part A: What motivates Mateo to persevere despite the pain in his wrist?',
        choices: [
          'Loyalty to Master Silas and concern for the sailors out in the bay.',
          ['A desire to win a cash reward offered by the local cotton merchants.', 'The story never mentions any financial prize or reward.'],
          ['His hope that he will be released from his clockwork apprenticeship.', 'Mateo loves his work and wants to become a skilled watchmaker.'],
          ['A fear that police will arrest him if the tower clock falls silent.', 'There is no fear of arrest, only of failing the harbor community.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation from the passage best supports the answer to Part A?',
        choices: [
          ['"For six months, Mateo had worked as an apprentice to Master Silas Campbell." (paragraph 2)', 'This gives background on his apprenticeship.'],
          ['"Mateo wiped sweat from his forehead with a rag and nodded seriously." (paragraph 4)', 'This shows he is attentive, but does not capture his inner motivation during the crisis.'],
          '"He thought of the ships out in the rough water, waiting for the evening chimes." (paragraph 12)',
          ['"When the bronze hammer struck six loud chimes across the bay, Mateo leaned against the wall..." (paragraph 13)', 'This describes the outcome rather than his motivation.'],
        ],
        answer: 2,
      },
      explain: 'Paragraph 12 shows Mateo\'s thoughts during the crisis: remembering Master Silas\'s guidance and thinking of the ships at sea that depend on the bell.',
    }),
    mcq({
      standard: 'rla:6.7D', cites: [1, 2, 6],
      stem: 'How does the historical setting of an 1890s seaport influence the plot?',
      choices: [
        ['Citizens used digital telegraphs to check accurate local time on their screens.', 'Electronic screens did not exist in the 1890s.'],
        'The port lacked modern electronic tools and relied on the tower clock to navigate.',
        ['Steamships were forbidden by law from entering the harbor after sunset each evening.', 'Ships relied on the clock bell to gauge tides, but were not banned.'],
        ['The coastal city was threatened by a military invasion arriving across the open Gulf.', 'The threat comes from a natural storm, not an invasion.'],
      ],
      answer: 1,
      explain: 'In the 1890s, seaport communities had no modern electronic timekeeping; they relied on central tower clocks for navigation and commerce.',
    }),
    mcq({
      standard: 'rla:6.9D', cites: [8],
      stem: 'Read this sentence from paragraph 8: "Gusts of salty wind rattled the shutters, howling like hungry wolves." What does the simile achieve?',
      choices: [
        ['It shows that wild pack animals had escaped into the bell tower.', 'The comparison is figurative; no real wolves are in the belfry.'],
        ['It explains why the wooden shutters were built from heavy cedar.', 'The simile focuses on the menacing sound of the wind.'],
        'It emphasizes the threatening power and loudness of the storm.',
        ['It suggests that the belfry was completely protected from wind.', 'The simile highlights danger and violent noise.'],
      ],
      answer: 2,
      explain: 'Comparing the howling wind to "hungry wolves" creates a sense of danger and highlights the threatening power of the incoming squall.',
    }),
    msq({
      standard: 'rla:6.5E', cites: [4, 7, 13],
      stem: 'Which **two** qualities of Mateo\'s character are most strongly developed throughout the story?',
      choices: [
        'A strong sense of duty when given an important community task.',
        ['Arrogance about his mechanical skills compared to his mentor.', 'Mateo is humble and eager to learn from Master Silas.'],
        'Determination to push through unexpected physical pain and fear.',
        ['Impatience with the daily chores required in the repair shop.', 'Mateo works patiently and hopes for more responsibility.'],
        ['Hesitation to volunteer when Master Silas is injured on the dock.', 'Mateo stands tall and agrees immediately to wind the clock.'],
      ],
      answers: [0, 2],
      explain: 'Mateo demonstrates a deep sense of duty by protecting the city\'s schedule, and determination by completing the winding despite a painful injury.',
    }),
    mcq({
      standard: 'rla:6.6D', cites: [5, 6, 8, 12, 13],
      stem: 'Which is the best summary of the story?',
      choices: [
        ['Mateo works as an apprentice in Galveston and enjoys climbing ninety-six steps to oil the clock gears on sunny afternoons.', 'This omits the main conflict, the storm, and Mateo\'s injury.'],
        'When his mentor is injured, apprentice Mateo winds the town clock alone, using his left hand after hurting his wrist in a squall.',
        ['A massive hurricane strikes Galveston Island in 1890, destroying the church belfry and forcing harbor ships to anchor out at sea.', 'The belfry is not destroyed, and the clock functions successfully.'],
        ['Master Silas twists his ankle on a wet dock and sends young Mateo to purchase new clock repair tools from a shop on Strand Street.', 'Mateo is sent to wind the tower clock, not buy tools.'],
      ],
      answer: 1,
      explain: 'This summary covers the initiating crisis (Silas\'s injury), the stakes (the squall and the clock), Mateo\'s injury, and his successful resolution.',
    }),
    mcq({
      standard: 'rla:6.5F', cites: [2, 3],
      stem: 'What can the reader infer about Master Silas\'s reputation in Galveston?',
      choices: [
        ['He is regarded as careless with public property around the harbor.', 'Silas maintains the city\'s most important clock with great care.'],
        ['He is widely distrusted by local harbor masters and steamship captains.', 'Captains trust his craftsmanship and set their instruments by his clock.'],
        'He is respected as a master craftsman whose work guides city life.',
        ['He recently relocated his watch shop to Galveston from New York City.', 'Paragraph 2 notes he has run his legendary shop for years.'],
      ],
      answer: 2,
      explain: 'Paragraph 2 describes Silas\'s shop as "legendary" and explains that ship captains and merchants timed their work by his craftsmanship.',
    }),
  ],
});
