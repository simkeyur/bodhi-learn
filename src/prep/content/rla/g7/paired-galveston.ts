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
        { kind: 'p', text: 'On September 8, 1900, a category four hurricane struck Galveston Island with savage power. Sustained winds topped one hundred and thirty miles per hour. A fifteen-foot storm surge swept completely over the flat barrier island. The storm destroyed over three thousand buildings and claimed an estimated eight thousand lives. At the time, Galveston was the busiest deep-water port in Texas. It was the financial hub of the Southwest. In twelve terrifying hours, the city was nearly destroyed. Many people predicted that Galveston would become a ghost town and never recover.' },
        { kind: 'p', text: 'Instead of abandoning their island, the people of Galveston decided to rebuild. City leaders hired three skilled engineers—Henry M. Robert, Alfred Noble, and H.C. Ripley—to design defenses against future Gulf storms. Their plan had two bold parts. First, workers would build a massive concrete seawall along the beach. Second, they would raise the elevation of the entire city up to sixteen feet above sea level to keep seawater out.' },
        { kind: 'p', text: 'Construction began in October 1902. Workers drove tens of thousands of forty-foot pine poles deep into the coastal sands. They placed timber frames over these pilings to bear the wall\'s enormous weight. Laborers then poured hundreds of thousands of tons of concrete. They shaped a wall seventeen feet high, sixteen feet thick at its base, and five feet wide at its crest. The outer face curved upward in a smooth scoop. This curve was designed to catch crashing waves and fling their energy harmlessly back toward the sea.' },
        { kind: 'p', text: 'Next came the grade-raising project. Dredge ships sucked wet sand and seawater slurry from the ship channel. Workers pumped sixteen million cubic yards of this sand into the city. Before pumping began, teams jacked up more than two thousand buildings—including homes, brick stores, and large churches. Crews turned thousands of jackscrews at the same time to lift structures without cracking walls. When another fierce hurricane struck in August 1915, the seawall and raised ground held firm. Behind the wall, only eleven people died, proving the value of the island\'s bold engineering.' },
      ],
    },
    {
      id: 'g7-paired-galveston-p2',
      title: 'Night of the Rising Tide',
      genre: 'fiction',
      blocks: [
        { kind: 'p', text: 'The brass telegraph key inside the Western Union office on Strand Street clicked with frantic speed. Thirteen-year-old Toby dashed across the doorway, his wet coat dripping seawater across the floorboards. Outside, the gray sky seemed to touch the rooftops. Gale winds whistled through utility wires like screams. Even three blocks inland, frothy seawater from the Gulf was already splashing against street curbs.' },
        { kind: 'p', text: '"Mr. O\'Connell! Dr. Cline from the Weather Bureau sent me!" Toby shouted over the roar of the wind. He thrust a damp dispatch toward the telegrapher. "He says the barometer is falling faster than anything he has ever seen. The surf on the beach is ten feet high, and the wind has shifted to the northeast. He wants this storm warning wired to the Houston office at once!"' },
        { kind: 'p', text: 'Mr. O\'Connell took the paper. His face looked pale under the gaslight. "The line to the mainland on the rail trestle went dead twenty minutes ago, Toby," he said grimly. He tapped the silent key. "The cables under the bay snapped right after noon. This dispatch cannot fly across twenty miles of open water without wires."' },
        { kind: 'p', text: 'Toby stared at the brass key. His heart thumped in his chest. Through the window, he watched a horse-drawn wagon splash through floodwaters that covered Strand Street. If warnings could not reach the mainland, thousands of families across Galveston Island would not know that a giant wall of water was heading for their homes.' },
        { kind: 'p', text: '"The harbor pilot boat, The Wanderer!" Toby gasped, wiping stinging salt spray from his eyes. "Captain Evans has steam up at Pier 14. If I run through the alley before the wharf floods, he can carry Dr. Cline\'s message across the bay to Texas City before the storm hits!"' },
        { kind: 'p', text: 'Mr. O\'Connell gripped Toby\'s shoulder. "The bay is rough water, boy. It is very dangerous." He looked into Toby\'s eyes and put the paper into an oilskin pouch. "Run, Toby. Run as if the lives of thousands of people depend upon your boots—because they do."' },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:7.8D.i', cites: [2, 3, 4], passage: 0,
      stem: 'What is the controlling idea of "The Great Wall of Galveston"?',
      choices: [
        'Galveston built a seawall and raised its grade to prevent storm damage.',
        ['The 1900 hurricane caused Galveston to lose its status as the top Texas port.', 'Galveston lost commerce, but the article focuses on the massive rebuilding effort.'],
        ['Engineers designed special steam dredges during the 1902 recovery project.', 'Dredges were tools used during the project, not the central controlling idea.'],
        ['St. Patrick\'s Church was the only structure elevated on mechanical jacks.', 'Many buildings and homes were elevated, not just this single church.'],
      ],
      answer: 0,
      explain: 'The controlling idea is that Galveston successfully designed and built a protective seawall and raised the city\'s grade to safeguard residents from future hurricanes.',
    }),
    mcq({
      standard: 'rla:7.7C', cites: [2, 3, 4], passage: 1,
      stem: 'In "Night of the Rising Tide," what primary conflict do Toby and Mr. O\'Connell face?',
      choices: [
        ['They disagree about whether Dr. Cline\'s weather readings are accurate.', 'Both characters recognize that the weather data is accurate and terrifying.'],
        'Broken wires keep the island from sending urgent storm warnings.',
        ['A sudden office fire threatens to destroy valuable Western Union files.', 'Rising floodwaters, not fire, create the danger in the story.'],
        ['Captain Evans refuses to steer his steam vessel through choppy harbor water.', 'Toby believes Captain Evans will take the dispatch across the bay.'],
      ],
      answer: 1,
      explain: 'The severed railway wires and broken underwater cables leave the island cut off, creating an urgent crisis to get the warning to the mainland.',
    }),
    mcq({
      standard: 'rla:7.5H', passage: 0,
      stem: 'How do both selections emphasize the geographic vulnerability of Galveston Island?',
      choices: [
        'Both show the low island is exposed to violent storm surges.',
        ['Both explain that Galveston lacks fresh drinking water during droughts.', 'Neither passage discusses drinking water shortages during drought seasons.'],
        ['Both describe how rocky mountain ridges crumble during earthquakes.', 'Galveston is a flat sandy barrier island without mountains.'],
        ['Both note that dense pine trees block residents from spotting clouds.', 'The selections focus on open coastal water and rising sea levels.'],
      ],
      answer: 0,
      explain: 'Both selections highlight that the island\'s flat topography and low elevation leave it completely exposed to raging tidal surges from the Gulf.',
    }),
    mcq({
      standard: 'rla:7.5H', passage: 0,
      stem: 'In contrasting the two selections, which difference in perspective is most evident?',
      choices: [
        ['Passage 1 is written in rhyming verse while Passage 2 is an opinion piece.', 'Passage 1 is informational nonfiction and Passage 2 is dramatic historical fiction.'],
        ['Passage 1 faults city leaders while Passage 2 praises municipal workers.', 'Passage 1 praises the city leaders and engineers for their bold solutions.'],
        'Passage 1 analyzes past engineering while Passage 2 dramatizes a crisis.',
        ['Passage 1 focuses on mainland ports while Passage 2 is set deep in Austin.', 'Both selections are set on Galveston Island.'],
      ],
      answer: 2,
      explain: 'Passage 1 provides an objective historical overview of the engineering response, while Passage 2 immerses the reader in the real-time fear and suspense of the storm.',
    }),
    mcq({
      standard: 'rla:7.5H', passage: 0,
      stem: 'A central theme shared by both selections is that -',
      choices: [
        ['People should abandon coastal towns whenever strong weather threatens.', 'Both selections emphasize bravery, rebuilding, and perseverance rather than abandonment.'],
        'Courage and teamwork help people overcome immense natural disasters.',
        ['Technological devices eliminate all hazards from turbulent tempests.', 'Both passages acknowledge the terrifying and unpredictable power of severe storms.'],
        ['Written dispatches are always more dependable than electronic systems.', 'The theme explores human resilience in crisis, not communication technology comparisons.'],
      ],
      answer: 1,
      explain: 'Both selections celebrate human courage and collective determination when confronting catastrophic natural events.',
    }),
    mcq({
      standard: 'rla:7.6C', cites: [3], passage: 0,
      stem: 'Which detail from "The Great Wall of Galveston" explains how the seawall deflects waves?',
      choices: [
        ['Workers drove forty-foot pine poles deep into sandy coastal dunes.', 'Pilings provided foundation support in the sand, not wave deflection.'],
        'The curved outer face caught waves and flung them back.',
        ['The wall stood sixteen feet thick at its base and five feet at crest.', 'These dimensions describe wall thickness rather than wave direction.'],
        ['Laborers poured hundreds of thousands of tons of solid concrete.', 'This describes material construction rather than hydrodynamic deflection.'],
      ],
      answer: 1,
      explain: 'Paragraph 3 notes that the concave upward curve of the outer face caught incoming waves and directed their hydraulic force back toward the sea.',
    }),
    mcq({
      standard: 'rla:7.7D', cites: [1, 4], passage: 1,
      stem: 'In Passage 2, how does the setting on Strand Street contribute to the suspense?',
      choices: [
        ['Quiet evening calm lulls Toby to sleep on the office sofa.', 'The wind is howling and seawater is flooding the streets.'],
        ['Noisy market wagons block Toby\'s view of the front door.', 'Streets are nearly abandoned as floodwaters rise rapidly.'],
        'Rising street water signals that time is running out.',
        ['A working telephone lets Toby chat casually across the bay.', 'Telephone and telegraph wires are broken, cutting off all communication.'],
      ],
      answer: 2,
      explain: 'The floodwaters splashing against curbs and covering Strand Street visually demonstrate the rapid approach of the hurricane and build suspense.',
    }),
    mcq({
      standard: 'rla:7.5E', cites: [1, 4], passage: 0,
      stem: 'The author of Passage 1 notes that thousands died in 1900, while the 1915 storm caused few deaths behind the wall. Toby\'s experience in Passage 2 helps the reader understand that -',
      choices: [
        'in 1900, broken lines and no seawall left residents defenseless.',
        ['islanders in 1900 had ample time to flee across railway trestles.', 'Passage 2 shows that railway trestle wires were dead and flooding trapped residents.'],
        ['telegraph workers were unconcerned about dangerous storm alerts.', 'The telegraphers were desperate to get warnings across the bay.'],
        ['observers in 1900 were unable to track falling barometric levels.', 'Dr. Cline tracked falling barometric pressure and rising swell.'],
      ],
      answer: 0,
      explain: 'Toby\'s experience reveals that before the seawall and modern alerts existed, snapped communication lines left residents completely isolated and vulnerable.',
    }),
  ],
});
