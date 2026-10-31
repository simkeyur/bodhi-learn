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
      { kind: "p", text: "The relentless North Atlantic swell heaved the massive iron hull of HMS Agamemnon toward gray, churning clouds on a stormy morning in August 1858. Below decks in the stifling, steam-choked coil hold, fifteen-year-old apprentice telegraphist Colin MacLeod wiped brine and machine grease from his spectacles. The enormous iron spool, wound with hundreds of miles of guttapercha-insulated copper cable, groaned on its hydraulic bearings as it paid out into the black ocean depths two miles below. Every pitch and roll of the warship threatened to snap the thin electrical lifeline connecting the Old World of Europe to the New World of North America." },
      { kind: "p", text: "Beside him stood Cyrus Field, the tireless American entrepreneur who had staked his personal fortune, his reputation, and his health on this audacious endeavor. Field had already endured three catastrophic failures over the preceding four years. Colin vividly recalled the bitter summer of 1857, when the cable had suddenly snapped with the crack of a cannon shot three hundred miles west of Ireland, vanishing irrevocably into the abyss while seasoned sailors wept openly at the railing. Field had not wept; he had merely chartered new ships, re-engineered the winding brakes, and secured heavier copper strands." },
      { kind: "p", text: "\"Keep that galvanometer centered, Colin,\" Field instructed quietly, his voice cutting through the thundering rumble of the steam engines and crashing waves. \"If the needle swings violently toward zero, it means seawater has breached the insulation, and our signal has grounded out in the Atlantic trench.\"" },
      { kind: "p", text: "Colin stared intently at the delicate mirror galvanometer, where a hairline beam of reflected kerosene lamplight quivered across a calibrated ivory scale. For seven consecutive days and sleepless nights, the ships had steamed toward their rendezvous in mid-ocean, splicing the two ends of the cable together before sailing in opposite directions\u2014Agamemnon east toward Valentia Island, Ireland, and USS Niagara west toward Trinity Bay, Newfoundland." },
      { kind: "p", text: "To the Victorian sailors aboard, the cable was an unnatural, almost supernatural contraption. Many crewmen whispered superstition in their hammocks, muttering that plunging a live copper wire into the ocean bed would summon sea monsters or anger Neptune. Yet Colin, raised in the shadow of Glasgow's roaring shipyards, viewed the project with fierce scientific reverence. To him, the thin cable was not a wire; it was a triumphant triumph of human ingenuity that would reduce a ten-day steamship message across three thousand miles of tempestuous ocean into a matter of minutes." },
      { kind: "p", text: "Suddenly, at three in the afternoon, the steady hum of the paying-out machinery choked. A deafening metallic shriek pierced the hold as the cable fouled on a brake drum. Colin's heart leaped into his throat. Before the emergency brake could sever the wire under immense tension, Colin grabbed an oil-soaked wooden pry bar, lunging forward to lever the jammed kink off the grooved roller. Hot friction sparks showered his woolen sleeves, but the spool unlatched with a resonant clang, allowing the wire to resume its smooth, submerged descent." },
      { kind: "p", text: "Minutes later, the mirrored light beam on the galvanometer flickered, danced, and began tapping out a deliberate sequence of rhythmic electrical pulses. Colin held his breath, decoding the faint deflections against his cipher chart. \"Dot... dash... dot... dot...\" Colin whispered, his voice trembling with profound emotion. \"It's Newfoundland, Mr. Field! They're reading our current! The circuit is complete!\" Across the tossing iron deck, hard-bitten sailors erupted in cheers, realizing that the great ocean had finally been tamed by human thought." },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:8.7D', cites: [5],
      stem: 'How does the nineteenth-century maritime setting influence the differing values of the crew members in paragraph 5?',
      choices: [
        ['It makes both sailors and engineers reject modern scientific advancements in favor of ancient traditions.', 'Colin embraces science while the sailors hold superstitious doubts; they do not share the same view.'],
        ['It causes Colin to become disillusioned with machinery and seek a career as a merchant captain.', 'Colin feels fierce reverence for the telegraph and its scientific breakthrough.'],
        'It highlights the contrast between superstitious sailors who fear nature\'s wrath and forward-thinking engineers who believe in technological progress.',
        ['It forces the crew to abandon commercial shipping in order to explore deep-sea biology.', 'The project is focused on telecommunication, not deep-sea biology.'],
      ],
      answer: 2,
      explain: "Paragraph 5 contrasts the superstitious sailors who fear angering Neptune with Colin's scientific awe at bridging ocean distances with telegraphy.",
    }),
    mcq({
      standard: 'rla:8.7C', cites: [2],
      stem: 'How does the flashback in paragraph 2 contribute to the characterization of Cyrus Field?',
      choices: [
        'By showing how he responded to past failures with resilience and renewed engineering determination rather than despair.',
        ['By revealing that he had secretly doubted the feasibility of the transatlantic telegraph from the beginning.', 'Field showed relentless optimism and determination, not secret doubt.'],
        ['By demonstrating that he blamed his crew members whenever an expedition encountered mechanical difficulties.', 'Field did not blame others; he engineered better equipment.'],
        ['By explaining that he inherited his wealth and never had to overcome personal hardships.', 'The text notes he staked his own fortune, health, and reputation.'],
      ],
      answer: 0,
      explain: "The flashback to 1857 illustrates Field's remarkable fortitude; when the cable snapped and others wept, he immediately redesigned the brakes and secured better cables.",
    }),
    mcq({
      standard: 'rla:8.5F', cites: [6],
      stem: "Based on paragraph 6, what can the reader infer about Colin's character during an emergency?",
      choices: [
        ['He waits passively for senior officers to issue orders before taking action.', 'He takes immediate independent action with the wooden pry bar.'],
        ['He fears personal injury so much that he hesitates at critical moments.', 'He acts despite hot sparks showering his sleeves.'],
        ['He is easily flustered and accidentally worsens mechanical problems.', 'His intervention successfully clears the jam and saves the cable.'],
        'He is alert, quick-thinking, and willing to risk personal harm to prevent a disastrous failure.',
      ],
      answer: 3,
      explain: 'Colin instantly grabs a pry bar and levers the jammed kink off the roller despite flying friction sparks, demonstrating bravery and quick problem-solving.',
    }),
    mcq({
      standard: 'rla:8.6C', cites: [1],
      stem: 'Which text evidence from paragraph 1 best supports the idea that the cable-laying voyage was physically dangerous and unpredictable?',
      choices: [
        ['"Below decks in the stifling, steam-choked coil hold..."', 'This describes uncomfortable working conditions rather than structural danger to the mission.'],
        'The swell heaved the warship toward churning clouds, and every roll threatened to snap the thin electrical lifeline into the two-mile abyss.',
        ['"...wiped brine and machine grease from his spectacles."', "This is a small physical detail of Colin's appearance."],
        ['"...connecting the Old World of Europe to the New World of North America."', "This explains the telegraph's geographic scope, not its physical hazard."],
      ],
      answer: 1,
      explain: 'Paragraph 1 emphasizes the heavy seas and the constant threat that the pitching ship would snap the fragile cable descending into a two-mile abyss.',
    }),
    mcq({
      standard: 'rla:8.5G', cites: [3, 4],
      stem: "Which key detail explains why the galvanometer was essential to the expedition's success?",
      choices: [
        'It detected minute electrical pulses and warned operators if insulation had breached in the oceanic trench.',
        ['It provided navigation coordinates to steer the warship through dense Atlantic fogs.', 'The galvanometer measured electrical current, not navigation coordinates.'],
        ["It regulated steam pressure in the ship's boilers to prevent engine explosions.", 'Engine boilers were separate from the telegraph receiver.'],
        ['It recorded ocean depth measurements along the submerged continental shelf.', 'Depth sounding was not the function of the mirror galvanometer.'],
      ],
      answer: 0,
      explain: 'Paragraphs 3 and 4 explain that the delicate mirror galvanometer tracked electrical signals and signaled immediately if seawater breached the insulation.',
    }),
    mcq({
      standard: 'rla:8.5E', cites: [5, 7],
      stem: 'What historical connection can the reader make between the 1858 transatlantic cable and modern global communication?',
      choices: [
        ['Both systems rely exclusively on steamship networks to transport physical messages.', 'Telegraphs and modern networks transfer data electronically, not by physical carriage.'],
        ['Both systems were quickly abandoned due to the superior speed of postal courier services.', 'Telegraphy replaced postal couriers across the ocean.'],
        'The 1858 cable laid the foundation for modern undersea fiber-optic networks that enable instantaneous worldwide internet connectivity.',
        ['Both systems proved that undersea cables are too fragile to be practical for international trade.', 'The project proved the viability of undersea electronic communication.'],
      ],
      answer: 2,
      explain: 'The transatlantic cable established the first global electronic communications network, a direct precursor to modern submarine fiber-optic cables.',
    }),
    mcq({
      standard: 'rla:8.6D', cites: [1, 2, 4, 6, 7],
      stem: 'Which statement provides the best objective summary of the passage?',
      choices: [
        ['Colin MacLeod leaves Glasgow to work on HMS Agamemnon, but the crew mutinies when they fear sea monsters in the Atlantic.', 'There is no mutiny in the story; the crew celebrates at the end.'],
        ['Cyrus Field loses his entire fortune when his telegraph cable snaps in 1857, forcing him to abandon communication experiments.', 'Field perseveres and successfully completes the cable in 1858.'],
        ['Telegraph operators struggle to repair broken electrical lines on land after severe prairie storms damage communication towers.', 'The setting is the open North Atlantic Ocean, not land towers.'],
        'Aboard HMS Agamemnon in 1858, young Colin MacLeod and entrepreneur Cyrus Field battle rough seas and a dangerous mechanical jam to successfully lay and complete the historic transatlantic telegraph cable.',
      ],
      answer: 3,
      explain: 'This summary captures the primary setting, main characters, central obstacle (the mechanical jam), and ultimate success.',
    }),
  ],
});
