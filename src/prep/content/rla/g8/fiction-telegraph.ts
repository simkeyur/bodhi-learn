// Grade 8 historical fiction: The Cable Beneath the Waves (Transatlantic telegraph cable, 1858)
import { makeSet, mcq } from '../author.ts';

export const FICTION_TELEGRAPH = makeSet({
  id: 'g8-fiction-telegraph',
  grade: 8,
  kind: 'reading',
  title: 'The Cable Beneath the Waves',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g8-fiction-telegraph-p',
    title: 'The Cable Beneath the Waves',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'Rough Atlantic waves tossed the iron hull of HMS Agamemnon toward dark, stormy clouds in August 1858. Below deck in the hot, crowded hold, fifteen-year-old apprentice Colin MacLeod wiped machine grease from his glasses. The air in the cargo bay smelled of coal dust, wet hemp rope, and warm engine oil. The huge iron spool held hundreds of miles of heavy copper cable. It turned on its bearings as the wire paid out into the black ocean two miles below. Every pitch and roll of the ship threatened to snap the thin electrical wire connecting Europe to North America.' },
      { kind: 'p', text: 'Beside Colin stood Cyrus Field, the American leader who had invested his money and reputation in this great project. Field had already suffered three painful failures over the past four years. Colin remembered the hard summer of 1857. That year, the cable had snapped like a cannon shot three hundred miles west of Ireland. It sank into the deep water while sailors wept at the deck railing. Field had not cried. Instead, he hired new ships, built stronger brakes, and ordered tougher copper wire.' },
      { kind: 'p', text: '"Keep your eye on that light, Colin," Field said quietly above the rumble of the steam engines and crashing waves. "If the needle swings sharply toward zero, it means seawater has broken through the insulation. That would ground our signal in the deep Atlantic trench."' },
      { kind: 'p', text: 'Colin watched the mirror galvanometer closely. A tiny beam of lamp light rested against a small white scale. For seven days and nights, two ships had steamed toward the middle of the sea. Splicing the heavy cable in the open sea had been a difficult task. Great waves lifted the two massive vessels as engineers joined the copper cores and wrapped them in thick protective rubber. Then the ships sailed in opposite directions. Agamemnon sailed east toward Ireland, while the American ship Niagara sailed west toward Newfoundland.' },
      { kind: 'p', text: 'To many sailors on board, the cable seemed unnatural. Old sailors had crossed the ocean by sail and wind for centuries. They believed the cold depths should remain undisturbed by machines. Some crewmen whispered in their bunks that dropping a live wire into the deep ocean would anger the sea gods. But Colin had grown up near the shipyards of Glasgow. He saw the project with scientific wonder. To him, the cable was a great achievement. It would turn a ten-day steamship voyage into a message sent in minutes.' },
      { kind: 'p', text: 'Suddenly, at three in the afternoon, the steady hum of the machinery stopped. A loud screech echoed through the hold as the cable caught on a brake wheel. Colin\'s heart raced. Before the heavy brake could snap the tight wire, Colin grabbed a wooden pry bar. He leaped forward to pry the kink off the roller. Hot friction sparks flew across his wool sleeves, but the spool broke free with a loud ring. The cable began unrolling smoothly into the sea once again.' },
      { kind: 'p', text: 'Minutes later, the tiny beam of light on the scale danced and began tapping out rhythmic electrical pulses. Colin held his breath as he read the code. "Dot, dash, dot, dot," Colin whispered, his voice shaking with excitement. "It is Newfoundland, Mr. Field! They are reading our current! The circuit is complete!" Across the wet deck, rough sailors broke into cheers. They shook hands and waved their caps into the salty air. The wide Atlantic Ocean had finally been crossed by human thought.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:8.7D', cites: [5],
      stem: 'How does the setting influence the differing values of the crew members in paragraph 5?',
      choices: [
        ['It causes both sailors and engineers to reject modern technical advances.', 'Colin embraces science while the sailors hold doubts; they do not share the same view.'],
        ['It makes Colin abandon engineering to seek a job as a ship captain.', 'Colin is deeply committed to telegraphy and scientific innovation.'],
        'It contrasts fearful sailors with engineers who value progress.',
        ['It forces the crew to abandon commercial shipping to study sea creatures.', 'The expedition is focused on communication rather than marine biology.'],
      ],
      answer: 2,
      explain: 'Paragraph 5 contrasts traditional sailors who fear disturbing nature with Colin, who views the cable as a triumph of reason.',
    }),
    mcq({
      standard: 'rla:8.7C', cites: [2],
      stem: 'How does the flashback in paragraph 2 contribute to the characterization of Cyrus Field?',
      choices: [
        ['It reveals that he secretly doubted the value of the transatlantic cable.', 'Field showed persistent confidence rather than secret doubt.'],
        ['It demonstrates that he blamed crew members for mechanical breakdowns.', 'Field did not blame others; he focused on improving the equipment.'],
        ['It explains that he inherited great wealth and never faced challenges.', 'The text notes he risked his own fortune, health, and reputation.'],
        'It shows that he responded to failure with resilience and resolve.',
      ],
      answer: 3,
      explain: 'The flashback to the 1857 failure demonstrates Field\'s resilience; when the cable snapped, he immediately redesigned the brakes and secured better wire.',
    }),
    mcq({
      standard: 'rla:8.5F', cites: [6],
      stem: 'Based on paragraph 6, what can the reader infer about Colin\'s character during an emergency?',
      choices: [
        ['He waits for older officers to give instructions before taking action.', 'Colin acts immediately on his own initiative with the pry bar.'],
        'He is quick-thinking and acts bravely to prevent serious failure.',
        ['He fears injury so deeply that he hesitates to help during breakdowns.', 'He acts decisively despite friction sparks flying onto his clothes.'],
        ['He becomes easily flustered and accidentally damages delicate tools.', 'His action successfully clears the cable jam and saves the mission.'],
      ],
      answer: 1,
      explain: 'Colin immediately grabs a pry bar and levers the jam off the roller, showing quick thinking and courage under pressure.',
    }),
    mcq({
      standard: 'rla:8.6C', cites: [1],
      stem: 'Which detail from paragraph 1 best supports the idea that the voyage was dangerous?',
      choices: [
        ['Below deck in the hot, crowded hold, Colin wiped grease from his glasses.', 'This details uncomfortable conditions rather than physical danger.'],
        ['The air in the cargo bay smelled of coal dust, hemp, and warm engine oil.', 'This describes sensory details of the cargo bay.'],
        ['The spool held hundreds of miles of heavy wire connecting two worlds.', 'This states the length of the wire rather than the danger of the sea.'],
        'Every pitch and roll threatened to snap the thin electrical wire.',
      ],
      answer: 3,
      explain: 'Paragraph 1 emphasizes that rough ocean swells constantly threatened to snap the thin wire and end the mission.',
    }),
    mcq({
      standard: 'rla:8.5G', cites: [3, 4],
      stem: 'Which detail explains why the galvanometer was essential to the expedition?',
      choices: [
        'It detected electrical signals and showed if the wire was intact.',
        ['It provided navigation coordinates to steer the ship through ocean fogs.', 'The galvanometer tracked electrical currents, not navigational headings.'],
        ['It measured steam pressure in the boilers to avoid engine explosions.', 'Boiler steam was monitored by engine gauges, not telegraph equipment.'],
        ['It recorded water depth measurements along the submerged seabed shelf.', 'Water depth was determined through lead-line soundings, not this device.'],
      ],
      answer: 0,
      explain: 'Paragraphs 3 and 4 explain that the galvanometer tracked electric currents and signaled if seawater breached the insulation.',
    }),
    mcq({
      standard: 'rla:8.5E', cites: [5, 7],
      stem: 'What historical connection can the reader make between the cable and modern communication?',
      choices: [
        ['Both systems rely on wooden sailing vessels to carry physical letters.', 'Electronic networks transmit information through signals rather than mail.'],
        'The cable led to undersea networks that connect the world today.',
        ['Both systems were abandoned because postal messenger routes were faster.', 'The telegraph revolutionized communication by replacing slow couriers.'],
        ['Both systems proved that underwater wires cannot survive deep storms.', 'The successful 1858 expedition proved that undersea cables could bridge oceans.'],
      ],
      answer: 1,
      explain: 'The 1858 cable proved that undersea electronic connections were possible, paving the way for modern global fiber-optic networks.',
    }),
    mcq({
      standard: 'rla:8.6D', cites: [1, 2, 4, 6, 7],
      stem: 'Which statement provides the best objective summary of the selection?',
      choices: [
        'Aboard ship in 1858, Colin MacLeod and Cyrus Field overcome storms and a jammed brake to complete the transatlantic cable.',
        ['Colin MacLeod leaves Glasgow to work on a warship, but the crew mutinies when sailors worry about sea monsters in the Atlantic.', 'The crew does not mutiny; they celebrate together when the signal arrives.'],
        ['Cyrus Field loses his entire fortune when his cable snaps in 1857, forcing him to abandon his transatlantic communication work.', 'Field refuses to give up after the 1857 failure and succeeds in 1858.'],
        ['Telegraph operators struggle to repair broken electrical lines on land after severe wind storms damage telegraph poles across Canada.', 'The story takes place in the North Atlantic Ocean, not on land in Canada.'],
      ],
      answer: 0,
      explain: 'This summary captures the core setting, main figures, the primary crisis (the jammed brake), and the successful completion of the cable.',
    }),
  ],
});
