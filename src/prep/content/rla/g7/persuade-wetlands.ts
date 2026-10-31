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
      { kind: 'p', text: 'Good evening, commissioners, coastal leaders, and fellow citizens of Aransas County. I stand before you tonight at a vital turning point for the future of our coast. We face an important vote. We must decide whether to rezone four thousand acres of salt marsh along Copano Bay for condominiums, or to protect these wetlands as a permanent wildlife refuge. Our choice will shape this coast for generations.' },
      { kind: 'p', text: 'Some people see these salt marshes as muddy wasteland fit only for bulldozers and fresh pavement. I urge you to look closer. Coastal wetlands are not wasted ground. They are the living kidneys of our Gulf Coast bays. Every acre of cordgrass and mangrove marsh cleans water flowing from towns and farms. The plants trap silt, fertilizer, and oily road runoff before those pollutants reach open water. Without this natural filter, toxic runoff would foul our bays and destroy commercial oyster beds.' },
      { kind: 'p', text: 'Moreover, these marshes serve as our best natural shield against tropical storms. When strong storm surges roll in from the Gulf of Mexico, coastal wetlands act like huge sponges. Dense marsh grasses create friction. This friction slows down rushing water and weakens pounding waves. Healthy wetlands absorb billions of gallons of storm surge. They weaken wave energy before water strikes residential streets. Paving over these wetlands strips our towns of their natural armor. It invites floodwaters directly into our homes.' },
      { kind: 'p', text: 'Consider also the rich nursery of life beneath the water. More than ninety percent of commercially harvested seafood in the Gulf depends on salt marshes for food and shelter when young. Blue crabs, brown shrimp, and red drum all grow up in these quiet waters. If we cover these nurseries with concrete and parking lots, we will harm our local fishing economy. We will hurt commercial shrimpers, fishing guides, and small family businesses. Local cafes, bait shops, and motels rely on visitors who fish, kayak, and watch coastal wildlife. When the marsh thrives, our coastal economy thrives as well.' },
      { kind: 'p', text: 'Supporters of development argue that vacation resorts will expand our tax base and create construction jobs. They tell us that concrete walls and drainage ditches can replace natural marshes. But we should not trade lasting safety for short-term profits. When Hurricane Harvey struck near Rockport in 2017, intact marshes took the brunt of the storm surge. They buffered nearby neighborhoods from the worst wave energy. Paved ground, by contrast, gave runoff nowhere to soak in, causing deep flooding in built-up subdivisions.' },
      { kind: 'p', text: 'We cannot duplicate thousands of years of natural adaptation with poured concrete. Hard seawalls reflect wave energy directly back into the water. This reflection speeds up erosion on neighboring beaches. By contrast, thick networks of cordgrass roots hold fragile soil firmly in place against rising tides. Living shorelines grow stronger over time as plants spread, while artificial concrete slowly cracks and decays. Protecting our marshes is not wasted spending. It is a smart, lasting insurance policy for our future that costs far less than rebuilding ruined seawalls.' },
      { kind: 'p', text: 'Once a wetland is buried under asphalt, no amount of money can bring it back. Rare creatures like the whooping cranes that winter in our marshes cannot nest on concrete patios. I urge you: vote YES on Proposition 4 to fund the Coastal Estuary Conservation Trust. Let us safeguard our shoreline, protect our homes, and honor the living heritage of the Texas coast.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.5C', cites: [1],
      stem: 'Based on the opening remarks in paragraph 1, what can the listener predict about the speech?',
      choices: [
        'The speaker will urge citizens to vote to save coastal wetlands.',
        ['The speaker will present a construction timeline for luxury condominiums.', 'The speaker firmly opposes condominium construction.'],
        ['The speaker will argue that commercial shrimping should be prohibited.', 'The speaker advocates protecting nursery habitats that support shrimping.'],
        ['The speaker will compare Texas whooping cranes to Canadian wild geese.', 'The focus is on local wetland conservation and the upcoming ballot.'],
      ],
      answer: 0,
      explain: 'Paragraph 1 introduces the central decision facing voters and establishes the speaker\'s focus on protecting the salt marsh from condominium development.',
    }),
    mcq({
      standard: 'rla:7.8E.ii', cites: [3, 4],
      stem: 'How does the speaker adapt the argument to appeal to both business owners and homeowners?',
      choices: [
        'By showing that wetlands buffer storms and sustain local fisheries.',
        ['By promising that developers will pay cash bonuses to local fishing crews.', 'Developers are portrayed as a hazard to the marine nursery.'],
        ['By proposing that all county taxes be eliminated once marshes are saved.', 'Tax abolition is never proposed.'],
        ['By offering free flood insurance policies to residents attending court.', 'The speaker discusses natural storm defense, not insurance sales.'],
      ],
      answer: 0,
      explain: 'The speaker appeals to homeowners by highlighting natural storm surge protection and to business owners by demonstrating how wetlands support commercial fishing and tourism.',
    }),
    mcq({
      standard: 'rla:7.9D', cites: [2],
      stem: 'In paragraph 2, what does the metaphor "the living kidneys of our Gulf Coast bays" emphasize?',
      choices: [
        ['The red coloration of native marsh grasses during cool autumn months.', 'Color is not the subject of the comparison.'],
        'The natural filtering work that traps runoff and purifies water.',
        ['The physical anatomy of juvenile crabs and shrimp living in the marsh.', 'The metaphor describes the wetland ecosystem itself, not animal organs.'],
        ['The circular migration routes followed by wintering waterfowl flocks.', 'The focus is on water filtration, not bird migration.'],
      ],
      answer: 1,
      explain: 'The metaphor compares wetlands to kidneys to highlight their biological function: filtering out silt, fertilizer, and pollutants to cleanse bay waters.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [5],
      a: {
        prompt: 'Part A: What does the evidence from Hurricane Harvey in paragraph 5 suggest about coastal wetlands?',
        choices: [
          'Intact marshes offer valuable natural protection against surges.',
          ['Hurricane storms always avoid areas with commercial concrete seawalls.', 'The passage shows artificial walls can worsen wave problems.'],
          ['Concrete walls cost less to build than preserving natural salt marshes.', 'The author notes that living marshes are more cost-effective.'],
          ['Luxury resort subdivisions suffered no water damage during the storm.', 'Built-up paved areas experienced serious flooding.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which sentence from paragraph 5 best supports the answer to Part A?',
        choices: [
          ['"Supporters of development argue that vacation resorts will expand our tax base and create construction jobs."', 'This summarizes the opposing view.'],
          ['"They tell us that concrete walls and drainage ditches can replace natural marshes without losing safety."', 'This is a claim made by developers that the speaker rejects.'],
          '"When Hurricane Harvey struck near Rockport in 2017, intact marshes took the brunt of the storm surge."',
          ['"Paved ground, by contrast, gave runoff nowhere to soak in, causing deep flooding in built-up subdivisions."', 'This shows the failure of paved ground rather than the protective buffer of intact marsh.'],
        ],
        answer: 2,
      },
      explain: 'Paragraph 5 cites Hurricane Harvey to demonstrate that intact coastal marshes absorbed wave energy and buffered nearby neighborhoods from devastating storm surge.',
    }),
    mcq({
      standard: 'rla:7.8E.iii', cites: [5, 6],
      stem: 'Which counterargument raised by developers does the speaker refute in paragraphs 5 and 6?',
      choices: [
        'Walls replace marshes, but the speaker shows hard walls worsen erosion.',
        ['Developers claim that whooping cranes prefer nesting on concrete patios.', 'The speaker uses crane nesting on patios as an absurdity, not a developer claim.'],
        ['Developers claim that building luxury resorts will eradicate mosquitoes.', 'Mosquito control is not presented as the primary developer counterargument.'],
        ['Developers claim that Gulf Coast waters are losing natural salt content.', 'Salinity changes are not argued by developers.'],
      ],
      answer: 0,
      explain: 'Developers argue that concrete walls and ditches replace natural marshes; the speaker refutes this by showing hard walls reflect wave energy and accelerate coastal erosion.',
    }),
    mcq({
      standard: 'rla:7.9G', cites: [7],
      stem: 'What rhetorical appeal does the speaker make in paragraph 7 by mentioning whooping cranes?',
      choices: [
        'An appeal to shared values about safeguarding vulnerable wildlife.',
        ['A financial appeal estimating tax revenues generated by bird tourism.', 'Paragraph 7 makes an ethical plea rather than detailing tax revenues.'],
        ['A logical argument explaining how migrating birds eat concrete dust.', 'Birds cannot nest or feed on concrete.'],
        ['A historical timeline detailing nineteenth-century bird protection.', 'Historical legislation is not referenced in paragraph 7.'],
      ],
      answer: 0,
      explain: 'Mentioning the endangered whooping crane creates an ethical and emotional appeal, urging the audience to protect rare species that depend entirely on intact marshes.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [2, 3, 4],
      stem: 'Which statement provides the best objective summary of paragraphs 2, 3, and 4?',
      choices: [
        'Marshes clean water, buffer storms, and nurture young marine life.',
        ['Marshes should be dredged so large cargo barges can enter local bays.', 'Dredging for cargo ships is never discussed.'],
        ['Marshes exist mainly to provide scenic waterfront views for hotel guests.', 'The speech argues against hotels and emphasizes natural ecological services.'],
        ['Marshes require costly chemical spray treatments to keep grasses green.', 'Marshes function naturally without chemical treatments.'],
      ],
      answer: 0,
      explain: 'This concise choice accurately covers the three central ecological functions: water purification, storm protection, and marine nursery habitat.',
    }),
    mcq({
      standard: 'rla:7.8E.i', cites: [1, 7],
      stem: 'What is the speaker\'s primary claim in the speech?',
      choices: [
        'Citizens must vote for Proposition 4 to protect coastal wetlands.',
        ['Voters should reject Proposition 4 to lower local hotel property taxes.', 'The speaker advocates voting YES on Proposition 4.'],
        ['Voters should delay the ballot until concrete seawalls can be built.', 'The speaker argues against relying on concrete seawalls.'],
        ['Citizens should replace salt marshes with artificial freshwater lakes.', 'Freshwater lakes are not part of the proposal.'],
      ],
      answer: 0,
      explain: 'In paragraphs 1 and 7, the speaker directly urges citizens to vote YES on Proposition 4 to permanently protect the Copano Bay wetlands.',
    }),
  ],
});
