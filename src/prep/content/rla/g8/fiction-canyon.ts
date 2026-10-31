// Grade 8 realistic fiction: The Beacon of Matagorda (setting, flashback, plot tension)
import { makeSet, mcq } from '../author.ts';

export const FICTION_CANYON = makeSet({
  id: 'g8-fiction-canyon',
  grade: 8,
  kind: 'reading',
  title: 'The Beacon of Matagorda',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g8-fiction-canyon-p',
    title: 'The Beacon of Matagorda',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'Fourteen-year-old Thomas Collins leaned against the black cast-iron railing of the Matagorda Island lighthouse. He watched the gray Gulf waters churn into white foam. The autumn norther had arrived ahead of schedule. It swept across the Texas barrier island with cold, biting gusts. Far below, marsh grasses bowed flat against the wet sand dunes. Shorebirds scrambled for cover behind the sea oats. Thomas pulled his wool coat tight around his chest. Ever since his father passed away in the spring, Thomas and his mother had kept the great lamp burning each night. They guided ships through the shifting pass into Matagorda Bay.' },
      { kind: 'p', text: 'By dusk, the wind shrieked through the iron stays that anchored the tall black tower. Heavy salt spray struck the curved glass panels of the lantern room high above the beach. Thomas knew that late-season schooners often hugged the coastline to escape sudden squalls in the open Gulf. If the light failed tonight, vessels carrying timber and cotton would drift toward the treacherous shoals that lined the shallow inlet. The inlet was notorious for hidden sandbars that shifted with every major tide.' },
      { kind: 'p', text: 'Two years earlier, his father had stood beside him in this very lantern room during a ferocious August storm. His father had placed Thomas\'s hand on the brass winding crank that turned the heavy Fresnel lens. "A lightkeeper cannot panic when the elements rage, Thomas," his father had said calmly above the thunder. "The sea is wild, but iron and glass obey steady hands. Learn every gear, listen to every click, and keep your mind clearer than the lamp\'s chimney."' },
      { kind: 'p', text: 'A sharp metallic grinding sound broke Thomas\'s memory. It echoed down the dark spiral staircase. His mother called his name from the lantern gallery, her voice strained against the rising roar of the gale. Thomas bounded up the cast-iron steps two at a time. His lantern threw dancing shadows along the curved brick walls. When he reached the platform, he found his mother near the pedestal. She held a brass wrench. The rotating lens had ground to a sudden halt, freezing its four beams in place.' },
      { kind: 'p', text: '"The drive cable jammed in the lower pulley," his mother shouted over the howling wind. "If the lens stays fixed, passing ships will confuse our beacon for a mainland campfire." Thomas knelt on the cold iron floor beside the machinery. He examined the brass gears with steady eyes. Fine beach sand had blown past the ventilation vents. The sand bound the drive chain against the cog teeth. The heavy weight that powered the clockwork hung motionless on its wire rope.' },
      { kind: 'p', text: 'Taking a small pig-bristle brush and an oil can from the tool locker, Thomas worked with careful precision. He cleaned the grit from each brass tooth and freed the caught cable. His fingers were cold, but his father\'s patient instructions guided every motion. Together, he and his mother eased the cable back onto its grooved iron wheel. He applied three drops of winterized sperm oil to the spindle, watching the lubricant spread smoothly over the polished metal.' },
      { kind: 'p', text: 'With a firm turn of the iron crank, Thomas reset the suspended weights. The brass gears engaged with a smooth, familiar click. The massive glass lens began its slow, deliberate rotation once more. It cast sweeping light through the darkness across the stormy sea. Moments later, the low blast of a ship\'s horn answered from the outer bar. A coastal schooner had caught the flash and turned safely toward deep water.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:8.7C', cites: [3],
      stem: 'How does the flashback in paragraph 3 contribute to the plot?',
      choices: [
        ['It explains why Thomas decided to build a new lighthouse on the island.', 'The flashback focuses on a childhood storm, not building a lighthouse.'],
        'It reveals the advice that helps Thomas stay calm and repair the lens.',
        ['It shows that his father doubted whether Thomas could handle storms.', 'His father offered calm, encouraging guidance rather than criticism.'],
        ['It hints that the lightkeeper role will be given to an unfamiliar sailor.', 'The flashback relates to Thomas learning to care for the machinery.'],
      ],
      answer: 1,
      explain: 'In paragraph 3, Thomas recalls his father\'s advice to stay calm and listen to the gears, which prepares him to fix the mechanism during the gale.',
    }),
    mcq({
      standard: 'rla:8.6C', cites: [2],
      stem: 'Which detail from paragraph 2 best supports the idea that the storm endangers passing ships?',
      choices: [
        ['The wind shrieked through the tall iron stays anchoring the dark tower.', 'This details the noise of the wind against the tower structure.'],
        ['Salt spray struck the curved glass panels high above the cold beach.', 'This describes sea spray hitting the lantern glass.'],
        'Vessels would drift toward treacherous shoals if the light failed.',
        ['Thomas and his mother kept the great beacon lit each stormy evening.', 'This describes the family\'s daily routine as lightkeepers.'],
      ],
      answer: 2,
      explain: 'Paragraph 2 explains that if the light goes out, ships carrying cargo will drift onto dangerous shoals near the shallow inlet.',
    }),
    mcq({
      standard: 'rla:8.5F', cites: [5],
      stem: 'What can the reader infer about Thomas based on his actions in paragraph 5?',
      choices: [
        'He approaches repairs with calm, steady concentration.',
        ['He depends on his mother to diagnose mechanical breakdowns.', 'Thomas inspects the machinery and identifies the sand himself.'],
        ['He prefers repairing equipment alone rather than collaborating.', 'Thomas works alongside his mother to restore the mechanism.'],
        ['He worries that the clockwork mechanism cannot be restored.', 'Thomas focuses calmly on cleaning the gears rather than giving up.'],
      ],
      answer: 0,
      explain: 'Thomas examines the gears with steady eyes and calmly cleans the grit, showing composure and focus.',
    }),
    mcq({
      standard: 'rla:8.6D', cites: [1, 2, 3, 4, 5, 6, 7],
      stem: 'Which is the best objective summary of the selection?',
      choices: [
        ['During a fierce norther, Thomas remembers an August storm with his father and realizes that he needs more formal training before repairing the lighthouse.', 'Thomas successfully repairs the mechanism using the wisdom he already learned.'],
        ['A severe gale damages the curved glass panels of the lighthouse tower, forcing Thomas and his mother to replace several iron brackets before morning.', 'The story centers on jammed clockwork gears, not broken glass panels.'],
        ['While watching Gulf waters from the iron platform, Thomas spots a coastal schooner stranded on a shallow sandbar and calls for help from the mainland.', 'The ship avoids running aground once the rotating light is restored.'],
        'When a storm stops the lens, Thomas remembers his father\'s advice, clears jammed gears, and restarts the beacon to protect passing ships.',
      ],
      answer: 3,
      explain: 'This summary captures the core situation: the lens jams in a storm, Thomas uses his father\'s advice to fix it, and the beacon saves a ship.',
    }),
    mcq({
      standard: 'rla:8.7A', cites: [3, 6],
      stem: 'How does the author develop the theme of honoring family lessons?',
      choices: [
        ['By showing that Thomas wants to abandon the island after his father\'s death.', 'Thomas remains committed to tending the light with his mother.'],
        'By showing how his father\'s guidance helps Thomas resolve a crisis.',
        ['By contrasting Thomas\'s rash actions with his mother\'s steady personality.', 'Thomas acts carefully and calmly, mirroring his parents\' values.'],
        ['By arguing that modern sailors no longer depend on shore-based lighthouses.', 'The passing ship relies directly on the lighthouse beacon.'],
      ],
      answer: 1,
      explain: 'The story shows that remembering his father\'s guidance gives Thomas the calmness and skill needed to repair the light.',
    }),
    mcq({
      standard: 'rla:8.7B', cites: [5],
      stem: 'In paragraph 5, what motivates Thomas to work with careful precision?',
      choices: [
        ['He wants to prove that he is faster at making repairs than his mother.', 'Thomas is focused on keeping ships safe, not competing with his mother.'],
        ['He is eager to finish his duties quickly so he can escape the cold tower.', 'Thomas works patiently and thoroughly rather than rushing.'],
        'He knows ships will face danger if the beacon stops rotating.',
        ['He hopes a passing ship captain will praise his skill as a lightkeeper.', 'His motivation is protecting human lives from disaster.'],
      ],
      answer: 2,
      explain: 'His mother notes that a stationary light could be mistaken for a campfire, so Thomas works carefully to restore the rotating beam.',
    }),
    mcq({
      standard: 'rla:8.7C', cites: [2],
      stem: 'How does the author\'s description of the weather in paragraph 2 create suspense?',
      choices: [
        ['It suggests that the entire iron tower will collapse into the ocean waves.', 'The passage focuses on navigational danger for ships, not tower collapse.'],
        ['It indicates that Thomas has forgotten to light the lamp before darkness falls.', 'The lamp is lit; the danger arises when the rotation mechanism jams.'],
        ['It reveals that the coastal schooner has already run aground on a sandbar.', 'The schooner is still sailing and at risk of drifting into the shoals.'],
        'It emphasizes the danger ships face while navigating near shallow shoals.',
      ],
      answer: 3,
      explain: 'Paragraph 2 describes how shrieking wind and heavy spray make the shallow shoals treacherous for coastal vessels.',
    }),
  ],
});
