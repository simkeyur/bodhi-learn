// Grade 7 paired set: The 1900 Galveston Hurricane and the Great Seawall.
import { makeSet, mcq } from '../author.ts';

export const PAIRED_GALVESTON = makeSet({
  id: 'g7-paired-galveston',
  grade: 7,
  kind: 'reading',
  title: 'Defending the Island',
  intro: 'Read the next two selections and choose the best answer to each question.',
  passages: [
    {
      id: 'g7-paired-galveston-p1',
      title: 'The Great Wall of Galveston',
      genre: 'informational',
      blocks: [
        { kind: 'p', text: 'On September 8, 1900, a category four hurricane struck Galveston Island with devastating fury. With sustained winds exceeding one hundred and thirty miles per hour and a catastrophic fifteen-foot storm surge that swept completely over the flat, low-lying barrier island, the tempest obliterated over three thousand buildings and claimed an estimated eight thousand lives. At the time, Galveston was the premier deep-water shipping port and financial capital of the American Southwest, often called the "Wall Street of the South." In the span of twelve nightmarish hours, the city\'s economic dominance was shattered, and many predicted Galveston would become a permanent ghost town.' },
        { kind: 'p', text: 'Instead of abandoning their battered home, the citizens of Galveston undertook the most ambitious municipal engineering endeavor in Texas history. City leaders engaged three eminent engineers—Henry M. Robert, Alfred Noble, and H.C. Ripley—to design a permanent barrier against future Gulf tempests. Their bold recommendation was two-fold: first, construct a massive concrete seawall along the vulnerable Gulf shore; second, raise the elevation of the entire residential and commercial district by up to sixteen feet above sea level to prevent catastrophic seawater flooding.' },
        { kind: 'p', text: 'Begun in October 1902, the construction of the Galveston Seawall was a marvel of modern engineering. Workers drove tens of thousands of forty-foot round pine pilings deep into the coastal sands, topping them with treated timber grillage to support the wall\'s immense weight. Over this foundation, laborers poured hundreds of thousands of tons of concrete, shaping a wall seventeen feet high, sixteen feet thick at its base, and five feet wide at its crest. The outer Gulf face curved upward in an elegant concave sweep designed to catch incoming tidal waves and fling their destructive hydraulic energy harmlessly back toward the sea.' },
        { kind: 'p', text: 'Equally astounding was the Grade Raising project. Using four self-loading hopper dredges that sucked liquid sand and saltwater slurry from the ship channel, workers pumped over sixteen million cubic yards of sediment into the city. Before the slurry was pumped, more than two thousand structures—including Victorian mansions, commercial warehouses, and the giant three-thousand-ton St. Patrick\'s Church—were individually hoisted onto mechanical jackscrews by teams of workers turning levers in unison. When a ferocious hurricane of equal magnitude struck Galveston in August 1915, the massive seawall and elevated ground held firm, limiting fatalities to fewer than a dozen and proving the enduring triumph of human engineering.' },
      ],
    },
    {
      id: 'g7-paired-galveston-p2',
      title: 'Night of the Rising Tide',
      genre: 'fiction',
      blocks: [
        { kind: 'p', text: 'The brass telegraph key inside the Western Union office on Strand Street clicked with erratic frenzy as thirteen-year-old Toby dashed across the threshold, his soaked oilskin coat dripping pools of seawater across the wooden floorboards. Outside, the slate-gray sky had lowered until it seemed to brush the rooftops, and gale-force wind whistled through the utility wires like a chorus of screaming banshees. Even three blocks inland, salty froth from the Gulf was already lapping against the street curbs.' },
        { kind: 'p', text: '"Mr. O\'Connell! Dr. Cline from the Weather Bureau sent me!" Toby shouted over the deafening roar of the gathering storm, thrusting a damp, folded dispatch toward the senior telegrapher. "He says the barometer is plunging faster than anything he has ever recorded. The swell on the beach is ten feet high, and the wind has shifted to the northeast. He wants this urgent advisory wired to the district office in Houston immediately!"' },
        { kind: 'p', text: 'Mr. O\'Connell snatched the paper, his weather-beaten face pale as flour under the gaslight. "The mainland wire on the railway trestle went dead twenty minutes ago, Toby," he said grimly, tapping the unresponsive telegraph key. "The telephone cables across the bay snapped right after noon. This dispatch cannot fly across twenty miles of open water without copper wires."' },
        { kind: 'p', text: 'Toby stared at the silent brass key, his heart hammering against his ribs. Through the front window, he watched a horse-drawn wagon splash frantically through rising tide pools that now covered Strand Street from curb to wall. If the warnings could not reach the mainland, thousands of families across Galveston Island would remain unaware that an immense wall of water was hurtling directly toward their vulnerable doorsteps.' },
        { kind: 'p', text: '"The harbor pilot boat, *The Wanderer*!" Toby gasped, wiping stinging salt spray from his forehead. "Captain Evans has steam up at Pier 14. If I sprint through the alley before the wharf floods, he can carry Dr. Cline\'s dispatch across the bay to the rail depot in Texas City before the hurricane makes landfall!"' },
        { kind: 'p', text: 'Mr. O\'Connell gripped Toby\'s shoulder with a firm, desperate hand. "The bay is churning into a cauldron, boy. It\'s treacherous water." He looked into Toby\'s unwavering eyes and tucked the dispatch into an oilskin pouch. "Run, Toby. Run as if the lives of eight thousand people depend upon your boots—because they do."' },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:7.8D.i', cites: [2, 3, 4], passage: 0,
      stem: 'What is the controlling idea of "The Great Wall of Galveston"?',
      choices: [
        'Following the devastating 1900 hurricane, Galveston citizens engineered a massive concrete seawall and raised the city\'s grade to successfully protect the community against future storms.',
        ['The 1900 storm caused Galveston to lose its title as the financial capital of Texas.', 'Galveston did lose economic status, but the article focuses on the massive protective rebuilding effort.'],
        ['Hopper dredges were invented during the 1902 hurricane to clear the ship channel.', 'Dredges were existing tools used for the grade raising project.'],
        ['St. Patrick\'s Church was the only building to survive the 1900 hurricane without damage.', 'The church was one of many buildings elevated on jackscrews during grade raising.'],
      ],
      answer: 0,
      explain: 'The controlling idea is that Galveston engineered the seawall and raised the island\'s elevation to protect against future storm disasters.',
    }),
    mcq({
      standard: 'rla:7.7C', cites: [2, 3, 4], passage: 1,
      stem: 'In "Night of the Rising Tide," what primary conflict do Toby and Mr. O\'Connell face?',
      choices: [
        ['They argue about whether Dr. Cline\'s meteorological data is accurate.', 'Both men recognize the deadly accuracy of the warning.'],
        'Communication cables to the mainland have failed, leaving the island completely cut off from sending critical storm warnings.',
        ['The telegraph office is on fire and they must evacuate company records.', 'The threat is flooding and failed cables, not fire.'],
        ['Captain Evans refuses to operate his boat during rough weather.', 'Toby believes Captain Evans will carry the dispatch across the bay.'],
      ],
      answer: 1,
      explain: 'The severed telegraph wires and snapped telephone cables mean Toby must find an alternative way to send the emergency dispatch.',
    }),
    mcq({
      standard: 'rla:7.5H', passage: 0,
      stem: 'How do both selections emphasize the geographic vulnerability of Galveston Island?',
      choices: [
        'Both selections emphasize that the island\'s low elevation and flat barrier topography expose it directly to violent Gulf tidal surges.',
        ['Both selections explain that Galveston lacks fresh drinking water during summer droughts.', 'Neither selection discusses drinking water shortages.'],
        ['Both selections describe how rocky mountain cliffs collapse during severe tremors.', 'Galveston is a flat sandy barrier island with no mountains.'],
        ['Both selections note that dense pine forests prevent residents from spotting storms.', 'The selections focus on open water and low ground.'],
      ],
      answer: 0,
      explain: 'Passage 1 highlights the low-lying barrier island and 15-foot surge, while Passage 2 describes seawater rapidly covering streets three blocks inland.',
    }),
    mcq({
      standard: 'rla:7.5H', passage: 0,
      stem: 'In contrasting the two selections, which difference in perspective is most evident?',
      choices: [
        ['Passage 1 is written in poetic verse, while Passage 2 is an argumentative editorial.', 'Passage 1 is informational prose and Passage 2 is historical fiction.'],
        ['Passage 1 criticizes island leadership, while Passage 2 celebrates municipal engineers.', 'Passage 1 praises the city leaders and engineers.'],
        'Passage 1 provides a retrospective historical analysis of large-scale engineering solutions, while Passage 2 dramatizes the personal terror and urgency of the storm in real time.',
        ['Passage 1 focuses exclusively on the mainland, while Passage 2 takes place in Houston.', 'Both selections take place on Galveston Island.'],
      ],
      answer: 2,
      explain: 'Passage 1 examines the historical timeline and civic engineering response, whereas Passage 2 drops the reader into the immediate human urgency of the unfolding disaster.',
    }),
    mcq({
      standard: 'rla:7.5H', passage: 0,
      stem: 'A central theme shared by both "The Great Wall of Galveston" and "Night of the Rising Tide" is that -',
      choices: [
        ['people should immediately abandon coastal communities whenever severe weather threatens.', 'Passage 1 celebrates staying to rebuild, and Passage 2 shows courageous persistence.'],
        'resilience, resourcefulness, and determination enable individuals and communities to confront monumental natural disasters.',
        ['technological innovations eliminate all danger posed by natural disasters.', 'Both passages acknowledge nature\'s terrifying force.'],
        ['historical accounts are far more accurate than fictional stories.', 'The theme concerns human response to disaster, not literary genres.'],
      ],
      answer: 1,
      explain: 'Both texts showcase heroic determination: Toby risking his life to carry the warning dispatch, and the community erecting the seawall and raising the city.',
    }),
    mcq({
      standard: 'rla:7.6C', cites: [3], passage: 0,
      stem: 'Which detail from "The Great Wall of Galveston" best explains how the seawall redirects destructive wave energy?',
      choices: [
        ['Laborers drove tens of thousands of forty-foot round pine pilings into coastal sands.', 'Pilings provided foundation support, not wave deflection.'],
        'The outer face curved upward in an elegant concave sweep designed to catch incoming waves and fling their energy back toward the sea.',
        ['The wall stood sixteen feet thick at its base and five feet wide at its crest.', 'These dimensions describe wall thickness, not hydrodynamic redirection.'],
        ['Workers poured hundreds of thousands of tons of concrete over timber grillage.', 'This describes material composition.'],
      ],
      answer: 1,
      explain: 'The concave curved face specifically channeled incoming waves upward and backward to dissipate hydraulic force.',
    }),
    mcq({
      standard: 'rla:7.7D', cites: [1, 4], passage: 1,
      stem: 'In Passage 2, how does the setting on Strand Street contribute to the escalating suspense?',
      choices: [
        ['The quiet evening calm makes Toby fall asleep on the office sofa.', 'The wind is howling and the sea is flooding the streets.'],
        ['The crowded market vendors obstruct Toby\'s view of the telegraph office.', 'The scene is an evacuated street in a brewing storm.'],
        'The rapidly rising floodwaters lapping at curbs and flooding Strand Street signal that time is running out before the island is overwhelmed.',
        ['The office telephone allows Toby to chat casually with residents across the bay.', 'The telephone wires are broken.'],
      ],
      answer: 2,
      explain: 'The visible, physical rise of water on Strand Street visually reinforces the imminent danger of the barrier island being swallowed by the storm.',
    }),
    mcq({
      standard: 'rla:7.5E', cites: [1, 4], passage: 0,
      stem: 'The author of Passage 1 notes that eight thousand lives were lost in 1900, while the 1915 storm caused fewer than a dozen fatalities. Toby\'s experience in Passage 2 helps the reader understand that -',
      choices: [
        'in 1900, the complete lack of modern coastal defenses and instantaneous communication left residents utterly vulnerable to sudden storm surges.',
        ['residents in 1900 had plenty of time to evacuate across the railroad trestles.', 'Passage 2 shows wires down and rising water trapping residents.'],
        ['telegraph operators were unconcerned about hurricane predictions.', 'Telegraphers and Toby were desperately trying to send alerts.'],
        ['weather forecasters in 1900 were unable to measure wind or barometric pressure.', 'Dr. Cline tracked both falling barometric pressure and rising swell.'],
      ],
      answer: 0,
      explain: 'Toby\'s experience vividly portrays how vulnerable Galveston was in 1900 when communications severed and no seawall existed to stop the surge.',
    }),
  ],
});
