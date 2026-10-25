// Short passages (60–150 words) for grade 6 reading walkthroughs.
// Each passage is shared across multiple lessons asking different targeted questions.

import type { Passage } from '../types.ts';

const p = (text: string) => ({ kind: 'p' as const, text });

export const G6_MINI_FOSSIL: Passage = {
  id: 'g6-mini-fossil',
  title: 'Treasure in the Limestone',
  genre: 'fiction',
  blocks: [
    p('Maya knelt beside the dried creek bed in Glen Rose, Texas, brushing loose gravel away from a flat limestone slab. Her brother, Leo, leaned impatiently against an oak tree, checking his watch. "Come on, Maya. It\'s just ordinary rock. We\'ve been out here in the heat for two hours, and we haven\'t found a single dinosaur bone."'),
    p('Maya ignored him, pulling a small wooden chisel and a stiff bristle brush from her canvas kit. With gentle, measured taps, she chipped away a brittle layer of shale. Beneath the gray stone lay a spiraled impression, coiled like a coiled nautilus shell and nearly eight inches across. "It isn\'t ordinary rock, Leo," she whispered with a grin. "Look at this perfect ammonite."'),
  ],
};

export const G6_MINI_MONARCH: Passage = {
  id: 'g6-mini-monarch',
  title: 'Wings Across the Continent',
  genre: 'informational',
  blocks: [
    p('Every autumn, millions of monarch butterflies embark on an epic two-thousand-mile migration from southern Canada and the northern United States down through Texas to the volcanic mountains of central Mexico. Weighing less than a paperclip, each fragile insect rides thermal wind currents to travel up to fifty miles in a single day.'),
    p('Scientists long wondered how monarchs navigate to the exact same oyamel fir groves where their great-great-grandparents roosted the previous winter. Recent research reveals that monarchs possess a sophisticated navigational system: a sun compass in their brains combined with circadian clocks in their antennae that adjust for the sun\'s changing position across the sky.'),
  ],
};

export const G6_MINI_SOLAR: Passage = {
  id: 'g6-mini-solar',
  title: 'Power from the Sun',
  genre: 'argumentative',
  blocks: [
    p('School districts across the state face mounting operational expenses, and installing rooftop solar arrays offers an immediate, sensible solution. By generating clean electricity directly above our classrooms, our school could cut annual utility bills by more than thirty percent, freeing thousands of dollars for classroom textbooks, lab equipment, and art supplies.'),
    p('Skeptics argue that high upfront installation expenses make solar panels impractical for public schools. However, state clean-energy rebates and federal grant partnerships frequently offset up to seventy percent of equipment costs. Over a twenty-year operational lifespan, solar arrays pay for themselves several times over, making clean energy both an environmental and economic victory.'),
  ],
};

export const G6_MINI_STORM: Passage = {
  id: 'g6-mini-storm',
  title: 'Thunder over the Caprock',
  genre: 'fiction',
  blocks: [
    p('The afternoon stillness over the canyon rim was shattered by a sudden, jagged spear of lightning that struck the red mesa three miles to the west. A concussive boom of thunder followed instantly, rattling the tin roof of the park ranger\'s cabin. Joaquin jumped up from his sketchpad, dropping his charcoal pencil onto the wooden floor.'),
    p('Outside, the turquoise sky had been swallowed by a towering wall of bruised, indigo storm clouds. A chill breeze swept across the juniper scrub, carrying the pungent scent of ozone and wet caliche dust. Joaquin remembered his grandfather\'s rule about canyon weather: when the air turns cool and smells like damp earth, flash floods follow within minutes.'),
  ],
};

export const G6_MINI_DRAMA: Passage = {
  id: 'g6-mini-drama',
  title: 'The Curator\'s Clue',
  genre: 'drama',
  blocks: [
    { kind: 'speech', speaker: 'ELENA', text: '[Peering through a large magnifying lens at a restored clay vessel.] Look at the incised zigzags along the rim, Dr. Gomez. The geometric pattern is completely different from the coastal Karankawa pottery we cataloged yesterday.' },
    { kind: 'speech', speaker: 'DR. GOMEZ', text: '[Nodding thoughtfully, adjusting her reading glasses.] Excellent observation, Elena. That four-line geometric motif was characteristic of Caddo potters along the Red River. What does that tell you about how this pot arrived at a coastal trade settlement?' },
    { kind: 'speech', speaker: 'ELENA', text: '[Eyes brightening with excitement.] It proves that ancient Texas tribes engaged in extensive inland trade networks long before European explorers arrived!' },
  ],
};

export const G6_MINI_FOREST: Passage = {
  id: 'g6-mini-forest',
  title: 'Architecture of the Piney Woods',
  genre: 'informational',
  blocks: [
    p('The Piney Woods of East Texas are organized into distinct vertical layers, each supporting specialized communities of plants and animals. At the top rises the emergent canopy, where loblolly and shortleaf pines reach heights over one hundred feet, capturing the full brilliance of the sun and sheltering the forest below from violent winds.'),
    p('Beneath the pine boughs lies the understory, where dogwood and redbud trees thrive in dappled shade. Down on the damp forest floor, fallen pine needles and rotting logs create a rich humus layer. This spongy soil absorbs heavy rainfall like a giant natural sponge, preventing severe soil erosion and nourishing delicate ferns, fungi, and salamanders.'),
  ],
};

export const G6_MINI_SPEECH: Passage = {
  id: 'g6-mini-speech',
  title: 'Save the Historic Plaza',
  genre: 'persuasive',
  blocks: [
    p('Citizens of San Marcos, we stand at a critical crossroads. The city council is currently weighing a proposal to bulldoze the century-old oak grove on Heritage Square to construct a four-story asphalt parking garage. Are we truly willing to sacrifice our city\'s living history for a few dozen parking spaces?'),
    p('These majestic trees were planted by our town\'s founders in 1910. They provide shade during scorching summer festivals, reduce urban heat, and give our downtown its unique historic charm. Once an ancient oak is cut down, no amount of concrete or asphalt can ever replace its hundred years of growth. Please attend Tuesday\'s council hearing and vote to protect our green heritage.'),
  ],
};

export const G6_MINI_TELESCOPE: Passage = {
  id: 'g6-mini-telescope',
  title: 'Eyes on the Cosmos',
  genre: 'informational',
  blocks: [
    p('Orbiting one million miles from Earth, the James Webb Space Telescope uses eighteen gold-plated hexagonal mirrors that work together as a single massive light collector. Because the telescope observes faint infrared light from the earliest galaxies formed after the Big Bang, its optical instruments must be kept at temperatures near minus four hundred degrees Fahrenheit.'),
    p('To achieve this extreme cooling without heavy refrigeration machinery, engineers equipped the observatory with a five-layer tennis-court-sized sunshield made of thin, heat-resistant Kapton film. This ingenious barrier blocks searing radiation from the Sun, Earth, and Moon, allowing the golden mirrors to capture cosmic light that has traveled through space for over thirteen billion years.'),
  ],
};
