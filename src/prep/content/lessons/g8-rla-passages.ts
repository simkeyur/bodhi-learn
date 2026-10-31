// Short passages (60–150 words) for grade 8 reading walkthroughs.
// Each passage is shared across multiple lessons asking different targeted questions.

import type { Passage } from '../types.ts';

const p = (text: string) => ({ kind: 'p' as const, text });

export const G8_MINI_FOSSIL: Passage = {
  id: 'g8-mini-fossil',
  title: 'Treasure in the Limestone',
  genre: 'fiction',
  blocks: [
    p('Maya knelt beside the dried creek bed in Glen Rose, Texas, brushing loose gravel away from a flat limestone slab. Her brother, Leo, leaned impatiently against an oak tree, checking his watch. "Come on, Maya. It\'s just ordinary rock. We\'ve been out here in the heat for two hours, and we haven\'t found a single dinosaur bone."'),
    p('Maya ignored him, pulling a small wooden chisel and a stiff bristle brush from her canvas kit. With gentle, measured taps, she chipped away a brittle layer of shale. Beneath the gray stone lay a spiraled impression, coiled like a nautilus shell and nearly eight inches across. "It isn\'t ordinary rock, Leo," she whispered with a grin. "Look at this perfect ammonite."'),
  ],
};

export const G8_MINI_MONARCH: Passage = {
  id: 'g8-mini-monarch',
  title: 'Wings Across the Continent',
  genre: 'informational',
  blocks: [
    p('Every autumn, millions of monarch butterflies embark on an epic two-thousand-mile migration from southern Canada and the northern United States down through Texas to the volcanic mountains of central Mexico. Weighing less than a paperclip, each fragile insect rides thermal wind currents to travel up to fifty miles in a single day.'),
    p('Scientists long wondered how monarchs navigate to the exact same oyamel fir groves where their great-great-grandparents roosted the previous winter. Recent research reveals that monarchs possess a sophisticated navigational system: a sun compass in their brains combined with circadian clocks in their antennae that adjust for the sun\'s changing position across the sky.'),
  ],
};

export const G8_MINI_SOLAR: Passage = {
  id: 'g8-mini-solar',
  title: 'Power from the Sun',
  genre: 'argumentative',
  blocks: [
    p('School districts across Texas face mounting operational expenses, and installing rooftop solar arrays offers an immediate, sensible solution. By generating clean electricity directly above our classrooms, our school could cut annual utility bills by more than thirty percent, freeing thousands of dollars for classroom textbooks, lab equipment, and art supplies.'),
    p('Skeptics argue that high upfront installation expenses make solar panels impractical for public schools. However, state clean-energy rebates and federal grant partnerships frequently offset up to seventy percent of equipment costs. Over a twenty-year operational lifespan, solar arrays pay for themselves several times over, making clean energy both an environmental and economic victory.'),
  ],
};

export const G8_MINI_STORM: Passage = {
  id: 'g8-mini-storm',
  title: 'Thunder over the Caprock',
  genre: 'fiction',
  blocks: [
    p('The afternoon stillness over the canyon rim was shattered by a sudden, jagged spear of lightning that struck the red mesa three miles to the west. A concussive boom of thunder followed instantly, rattling the tin roof of the park ranger\'s cabin. Joaquin jumped up from his sketchpad, dropping his charcoal pencil onto the wooden floor.'),
    p('Outside, the turquoise sky had been swallowed by a towering wall of bruised, indigo storm clouds. A chill breeze swept across the juniper scrub, carrying the pungent scent of ozone and wet caliche dust. Joaquin remembered his grandfather\'s rule about canyon weather: when the air turns cool and smells like damp earth, flash floods follow within minutes.'),
  ],
};

export const G8_MINI_DRAMA: Passage = {
  id: 'g8-mini-drama',
  title: 'The Right to Publish',
  genre: 'drama',
  blocks: [
    { kind: 'speech', speaker: 'HAMILTON', text: '[Facing the jury box directly, his voice echoing across the silent colonial chamber.] Gentlemen, you must decide whether truth itself is a crime in the royal colony of New York. If a citizen cannot expose corruption without facing imprisonment, then our liberties are an illusion.' },
    { kind: 'speech', speaker: 'PROSECUTOR', text: '[Slamming his fist against the mahogany railing.] Objection, Your Honor! The truth of the libel is utterly irrelevant under English common law!' },
    { kind: 'speech', speaker: 'HAMILTON', text: '[Unshaken, making direct eye contact with the foreman.] Then the law must bend to justice. Truth is the shield of free men against arbitrary tyranny.' },
  ],
};

export const G8_MINI_FOREST: Passage = {
  id: 'g8-mini-forest',
  title: 'Architecture of the Piney Woods',
  genre: 'informational',
  blocks: [
    p('The Piney Woods of East Texas are organized into distinct vertical layers, each supporting specialized communities of plants and animals. At the top rises the emergent canopy, where loblolly and shortleaf pines reach heights over one hundred feet, capturing the full brilliance of the sun and sheltering the forest below from violent winds.'),
    p('Beneath the pine boughs lies the understory, where dogwood and redbud trees thrive in dappled shade. Down on the damp forest floor, fallen pine needles and rotting logs create a rich humus layer. This spongy soil absorbs heavy rainfall like a giant natural sponge, preventing severe soil erosion and nourishing delicate ferns, fungi, and salamanders.'),
  ],
};

export const G8_MINI_SPEECH: Passage = {
  id: 'g8-mini-speech',
  title: 'Preserve Our Dark Skies',
  genre: 'argumentative',
  blocks: [
    p('Citizens of West Texas, look up at the vast tapestry of stars above our Davis Mountains. Satellite data confirms that over eighty percent of North Americans can no longer see the Milky Way due to urban light pollution. Are we willing to surrender our majestic cosmic heritage to blinding, unshielded glare?'),
    p('Adopting fully shielded outdoor lighting does not compromise nocturnal safety; rather, it directs light precisely where pedestrians need it while cutting municipal electricity expenditures by thirty percent. By protecting our night skies, we honor Texas heritage, preserve wildlife navigation, and keep our window to the universe open.'),
  ],
};

export const G8_MINI_TELESCOPE: Passage = {
  id: 'g8-mini-telescope',
  title: 'Scanning Distant Atmospheres',
  genre: 'informational',
  blocks: [
    p('Orbiting one million miles from Earth at the Second Lagrange Point, the James Webb Space Telescope uses gold-coated hexagonal mirrors to analyze exoplanet atmospheres through transmission spectroscopy. When an alien world passes in front of its host star, starlight filters through the planet\'s upper atmosphere.'),
    p('Different chemical gases absorb specific infrared wavelengths, creating a unique spectroscopic fingerprint. By analyzing these dips in light, astronomers have detected water vapor, carbon dioxide, and sulfur dioxide on planets dozens of light-years away, paving the way for the detection of potential biosignatures.'),
  ],
};
