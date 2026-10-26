// Grade 7 persuasive speech: Preserving Texas Gulf Coast Wetlands.
import { makeSet, mcq, twoq } from '../author.ts';

export const PERSUADE_WETLANDS = makeSet({
  id: 'g7-persuade-wetlands',
  grade: 7,
  kind: 'reading',
  title: 'Guardians of the Coast: Defending Texas Coastal Wetlands',
  intro: 'Read the speech and choose the best answer to each question.',
  passages: [{
    id: 'g7-persuade-wetlands-p',
    title: 'Guardians of the Coast: Defending Texas Coastal Wetlands',
    genre: 'persuasive',
    blocks: [
      { kind: 'p', text: 'Good evening, members of the county commissioners court, coastal community leaders, and fellow citizens of Aransas County. I stand before you tonight at a decisive crossroads in the ecological and economic future of our beloved Texas Coastal Bend. Before us lies a consequential ballot proposition: whether to rezone four thousand acres of pristine salt marsh along Copano Bay for commercial condominium development, or to permanently preserve these vital wetlands as a protected coastal wildlife estuary.' },
      { kind: 'p', text: 'To those who view these salt marshes merely as stagnant, mosquito-infested swampland ripe for bulldozers and asphalt, I urge you to look with eyes informed by ecology. Coastal wetlands are not wasted acreage; they are the living, beating kidneys of our Gulf Coast waters. Every acre of cordgrass and mangrove marsh naturally filters millions of gallons of agricultural and urban runoff each day, trapping toxic pesticides, heavy metals, and excess nitrogen before they can poison our bays and decimate commercial oyster beds.' },
      { kind: 'p', text: 'Moreover, these coastal marshes serve as our most formidable, cost-effective first line of defense against catastrophic tropical hurricanes. When powerful storm surges crash ashore from the Gulf of Mexico, coastal wetlands act as colossal natural shock absorbers. Research by the National Oceanic and Atmospheric Administration (NOAA) confirms that every single mile of healthy coastal marsh reduces hurricane storm surge heights by up to one foot and absorbs billions of gallons of rushing floodwaters. Paving over these wetlands strips our towns of their natural armor.' },
      { kind: 'p', text: 'Consider also the irreplaceable biological nursery thriving beneath the murky waterline. More than ninety percent of commercially and recreationally harvested marine species in the Gulf of Mexico—including blue crabs, brown shrimp, redfish, and spotted sea trout—depend upon salt marshes for spawning, nursery shelter, and early juvenile nourishment. If we pave over these nurseries with waterfront parking lots, we will devastate our multi-million-dollar maritime economy, destroying the livelihoods of commercial shrimpers and local fishing guides. In addition to commercial fisheries, thousands of passionate birdwatchers, coastal kayakers, and nature photographers visit our wetlands annually, providing vital revenue to local family-owned motels and neighborhood cafes.' },
      { kind: 'p', text: 'Proponents of commercial development argue that building luxury vacation resorts will broaden our county\'s property tax base and generate construction jobs. They assure us that concrete bulkheads and artificial retention ponds can adequately replace natural flood control. But let us not be seduced by short-term profits that create long-term catastrophe. When Hurricane Harvey made landfall near Rockport in 2017, properties sheltered behind intact wetlands suffered fifty percent less water damage than subdivisions built on paved marshlands.' },
      { kind: 'p', text: 'We simply cannot engineer a synthetic replacement for ten thousand years of flawless natural adaptation using poured industrial concrete and steel seawalls. Concrete bulkheads rigidly reflect violent wave energy, disastrously accelerating erosion and scouring beaches on neighboring unprotected properties, while deep, fibrous cordgrass root systems naturally bind the fragile coastal soil together against rising tides and sea levels. Preserving our marshes is not a frivolous financial expenditure; it is an indispensable, cost-effective insurance policy safeguarding our children\'s environmental and economic heritage.' },
      { kind: 'p', text: 'Fellow Texans, once a wetland is paved under asphalt, no amount of money or regret can ever bring it back to life. The endangered whooping cranes that migrate two thousand miles to winter in our marshes cannot nest on concrete condominiums. I implore you: vote YES on Proposition 4 to fund the Coastal Estuary Conservation Trust. Let us safeguard our shoreline, protect our homes, and honor the living heritage of the Texas coast.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.5C', cites: [1, 2],
      stem: 'Based on the text structure and opening remarks in paragraph 1, what can the listener predict about the primary focus of the speech?',
      choices: [
        'The speaker will present detailed environmental and economic arguments to persuade citizens to vote against commercial development and protect coastal wetlands.',
        ['The speaker will propose a construction schedule for luxury condominium towers along the bay.', 'The speaker strongly opposes condominium development.'],
        ['The speaker will argue that commercial shrimping should be permanently prohibited in Aransas County.', 'The speaker advocates protecting commercial shrimping nurseries.'],
        ['The speaker will present a debate comparing Texas whooping cranes to Canadian geese.', 'The speech focuses on Texas coastal conservation and local ballot proposition 4.'],
      ],
      answer: 1,
      explain: 'In paragraphs 1 and 7, the speaker explicitly urges the audience to vote YES on Proposition 4 to fund the Coastal Estuary Conservation Trust and protect the marshland.',
    }),
    mcq({
      standard: 'rla:7.8E.ii', cites: [3, 4],
      stem: 'How does the speaker adapt the argument to persuade both business owners and local homeowners?',
      choices: [
        'By demonstrating that healthy wetlands act as natural storm buffers that protect private homes from hurricane flooding and sustain the commercial maritime fishing economy.',
        ['By promising that condominium developers will pay bonuses to local fishing boat captains.', 'Developers are presented as threats to the marine nursery.'],
        ['By proposing that all county taxes be abolished once wetlands are preserved.', 'Tax abolishment is neither proposed nor realistic.'],
        ['By offering free flood insurance policies to anyone who attends the commissioners court.', 'The speaker discusses natural storm surge absorption, not insurance sales.'],
      ],
      answer: 0,
      explain: 'The speaker connects ecological health directly to economic self-interest: coastal wetlands protect homes from storm surges (NOAA data) and sustain the 90% of marine species vital to local fisheries.',
    }),
    mcq({
      standard: 'rla:7.9D', cites: [2],
      stem: 'In paragraph 2, what does the metaphor "the living, beating kidneys of our Gulf Coast waters" emphasize?',
      choices: [
        ['The red coloration of marsh grasses during autumn months.', 'Color is not the comparison being made.'],
        'The vital biological role wetlands play in filtering toxic agricultural pollutants and purifying coastal waters, just as kidneys cleanse blood in an organism.',
        ['The anatomical structure of crabs and shrimp that nest in the marsh.', 'The metaphor describes the wetland ecosystem itself, not individual animals.'],
        ['The circulatory systems of endangered whooping cranes.', 'The comparison refers directly to coastal marsh ecosystems.'],
      ],
      answer: 1,
      explain: 'The metaphor compares the wetland to kidneys to highlight its natural purification function: filtering out toxins, nitrogen, and pesticides to maintain clean water for bays and reefs.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [5],
      a: {
        prompt: 'Part A: What does the historical evidence from Hurricane Harvey in paragraph 5 prove about the debate between natural wetlands and artificial bulkheads?',
        choices: [
          'Natural wetlands provide substantially superior flood and surge protection compared to paved subdivisions protected by artificial barriers.',
          ['Hurricane Harvey completely avoided Aransas County.', 'Harvey made landfall near Rockport with devastating storm surge.'],
          ['Concrete bulkheads are fifty percent cheaper to build than planting native cordgrass.', 'The text shows concrete structures fail and worsen neighboring erosion.'],
          ['Luxury condominiums built on marshes suffered no flood damage during Harvey.', 'Subdivisions built on paved marshes suffered twice as much flood damage.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation from paragraph 5 provides direct textual proof for the answer to Part A?',
        choices: [
          ['"Proponents of commercial development argue that building luxury vacation resorts..."', 'This states the developers\' argument, not the storm evidence.'],
          '"When Hurricane Harvey made landfall near Rockport in 2017, properties sheltered behind intact wetlands suffered fifty percent less water damage than subdivisions built on paved marshlands."',
          ['"They assure us that concrete bulkheads and artificial retention ponds can adequately replace natural flood control."', 'This is a claim made by developers that the speaker disproves.'],
          ['"But let us not be seduced by short-term profits..."', 'This is a rhetorical warning, not empirical data.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 5 provides concrete statistical evidence from Hurricane Harvey showing that homes behind intact wetlands suffered 50% less flood damage than those on paved wetlands.',
    }),
    mcq({
      standard: 'rla:7.8E.iii', cites: [5, 6],
      stem: 'Which counterargument raised by developers does the speaker refute in paragraphs 5 and 6?',
      choices: [
        ['Developers claim that whooping cranes prefer nesting on concrete balconies.', 'Balcony nesting is absurd and not claimed by anyone.'],
        ['Developers claim that tourist condominiums will eliminate mosquito populations entirely.', 'Mosquito elimination is not the developers\' primary economic argument.'],
        'Developers claim that concrete bulkheads and artificial retention ponds provide adequate flood control while broadening the tax base; the speaker refutes this by showing concrete worsens erosion and fails during hurricanes.',
        ['Developers argue that the Gulf of Mexico is running out of salt water.', 'Water salinity shortages are not argued.'],
      ],
      answer: 2,
      explain: 'The speaker directly confronts the developers\' claim that artificial engineering (bulkheads and retention ponds) can replace natural marshes, showing that concrete reflects waves, accelerates erosion, and fails during surges.',
    }),
    mcq({
      standard: 'rla:7.9G', cites: [7],
      stem: 'What rhetorical appeal does the speaker employ in paragraph 7 by referencing the endangered whooping crane?',
      choices: [
        'An emotional and ethical appeal (pathos and ethos) reminding citizens of their moral responsibility to protect rare wildlife that relies entirely on Texas marshes for survival.',
        ['A statistical appeal presenting detailed financial accounting of crane tourism revenues.', 'Crane tourism revenue is not quantified in paragraph 7.'],
        ['A logical appeal explaining how cranes eat concrete materials.', 'Cranes cannot nest or eat on concrete.'],
        ['A historical appeal detailing nineteenth-century bird hunting laws.', 'Hunting history is not discussed in paragraph 7.'],
      ],
      answer: 0,
      explain: 'Invoking the endangered whooping crane migrating 2,000 miles creates a powerful moral and emotional appeal about protecting living creatures that cannot survive on concrete condominiums.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [2, 3, 4],
      stem: 'Which statement provides an objective summary of the environmental and economic services provided by Texas coastal wetlands?',
      choices: [
        'Coastal wetlands filter land runoff to preserve bay water quality, absorb hurricane storm surges to shield coastal towns, and serve as the essential nursery habitat for over ninety percent of harvested commercial marine species.',
        ['Coastal wetlands are muddy areas that must be dredged so large cargo ships can transport oil to international markets.', 'Dredging for oil ships is not discussed in the text.'],
        ['Salt marshes exist primarily to provide decorative landscape views for luxury vacation rentals along Copano Bay.', 'The passage argues against luxury rentals and highlights ecological functions.'],
        ['Wetlands require millions of dollars in annual artificial chemical treatments to keep cordgrass growing.', 'Wetlands operate naturally without artificial chemical treatments.'],
      ],
      answer: 0,
      explain: 'This choice objectively summarizes the three core functions detailed in the speech: water filtration, hurricane storm surge absorption, and marine nursery habitat.',
    }),
    mcq({
      standard: 'rla:7.8E.i', cites: [1, 7],
      stem: 'What is the speaker\'s primary claim regarding Proposition 4?',
      choices: [
        'Voters must approve Proposition 4 to permanently protect coastal wetlands because natural marshes provide irreplaceable flood defense and economic value.',
        ['Voters should reject Proposition 4 in order to lower property taxes for luxury beachfront hotels.', 'The speaker advocates voting YES on Proposition 4 to stop luxury hotels.'],
        ['Voters should postpone Proposition 4 until the county builds concrete bulkheads along all beaches.', 'The speaker argues against concrete bulkheads.'],
        ['Voters should amend Proposition 4 to replace salt marshes with freshwater lakes.', 'Freshwater lakes are not part of the proposal.'],
      ],
      answer: 0,
      explain: 'In paragraphs 1 and 7, the speaker directly states the claim that voters must approve Proposition 4 to fund the Coastal Estuary Conservation Trust and protect the marshland.',
    }),
  ],
});
