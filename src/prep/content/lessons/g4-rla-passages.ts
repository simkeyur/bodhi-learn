// Short passages (40–120 words) for grade 4 reading walkthroughs. Each one is reused across
// multiple walkthroughs, each asking a different question. All original.

import type { Passage } from '../types.ts';

const p = (text: string) => ({ kind: 'p' as const, text });
const s = (...sentences: string[]) => ({ kind: 'sentences' as const, sentences });

export const LEMONADE: Passage = {
  id: 'g4-mini-lemonade', title: 'The Lemonade Stand', genre: 'fiction',
  blocks: [
    p('Elena wanted to earn enough money to purchase a new telescope. Her younger brother, Mateo, begged to help, but Elena said he was too young to handle change.'),
    p('On Saturday morning, Elena set up her lemonade stand. For an entire hour, not a single neighbor stopped. Then Mateo walked down the street ringing his bicycle bell and singing a silly song: "Ice-cold lemonade, sweet and bright, best in Texas day or night!" Soon a cheerful line of customers wrapped around the corner.'),
    p('By evening, the glass jar was overflowing with coins. Elena counted the money, smiled at her brother, and handed him half. "You were the real star of the stand," she admitted warmly.'),
  ],
};

export const CAMP: Passage = {
  id: 'g4-mini-camp', title: 'First Night at Camp', genre: 'fiction',
  blocks: [
    p('I have never considered myself an outdoors person. I prefer air-conditioned rooms, comfortable sofas, and insects that stay far outside. So when Mom dropped me off at Camp Lone Star for a whole week, I expected complete misery.'),
    p('Then my cabin mate Jamal showed me how to identify the constellation Orion and listen for the soft hoot of a great horned owl. By the time lights went out, I had five mosquito bites, pine sap on my sneakers, and a new best friend. Perhaps camping is not so terrible after all.'),
  ],
};

export const ARMADILLO: Passage = {
  id: 'g4-mini-armadillo', title: 'The Nine-Banded Armadillo', genre: 'informational',
  blocks: [
    { kind: 'heading', text: 'Armor on Four Legs' },
    p('The nine-banded armadillo is the official small state mammal of Texas. Covered in bony armor plates called scutes, this curious creature looks like a prehistoric relic wandering through suburban gardens.'),
    p('Armadillos have poor eyesight and weak hearing, but their keen sense of smell helps them sniff out grubs, earthworms, and beetles buried six inches underground. When startled by a predator, an armadillo can leap three feet straight up into the air before scurrying into a thorny thicket.'),
    { kind: 'sidebar', title: 'Fast Fact', text: 'Female nine-banded armadillos almost always give birth to identical quadruplets from a single egg.' },
  ],
};

export const BATS: Passage = {
  id: 'g4-mini-bats', title: 'Austin\'s Urban Bat Colony', genre: 'informational',
  blocks: [
    p('Each spring, hundreds of thousands of Mexican free-tailed bats migrate north to Austin, Texas, roosting beneath the warm concrete spans of the Ann W. Richards Congress Avenue Bridge.'),
    p('At sunset, the colony emerges in a massive swirling cloud against the twilight sky. These gentle nocturnal mammals are a boon to local farmers, consuming up to twenty thousand pounds of crop-damaging insects in a single night. Spectators gather on the bridge walkways every evening to witness the spectacle.'),
  ],
};

export const LIBRARY: Passage = {
  id: 'g4-mini-library', title: 'Open the Library on Weekends', genre: 'argumentative',
  blocks: [
    p('To the members of the city council: Our public library should expand its operating hours to include Sundays.'),
    p('Working parents often work long weekday hours and can only accompany young children to the library on weekends. Furthermore, elementary students need a quiet, reliable space with internet access to study before Monday tests. In our survey, eight out of ten fourth-graders said they would visit the library on Sunday afternoons.'),
    p('Some officials worry that opening on Sunday is too expensive. However, community volunteers and high school service clubs have offered to shelve books and assist patrons at no cost. Please vote to open the library doors on Sundays.'),
  ],
};

export const RECYCLE: Passage = {
  id: 'g4-mini-recycle', title: 'Join the Cafeteria Clean Team', genre: 'persuasive',
  blocks: [
    p('Fellow students, look around the cafeteria after lunch. Styrofoam trays, half-empty milk cartons, and aluminum cans overflow from every trash barrel.'),
    p('Every piece of aluminum tossed in the trash can sit in a Texas landfill for five hundred years without breaking down. But when we recycle aluminum, it can be melted down and remade into a brand-new soda can in just sixty days. Recycling saves ninety-five percent of the energy needed to make metal from scratch.'),
    p('Join the Clean Team today. Drop your clean cans into the blue bin and help our school protect the environment!'),
  ],
};

export const STORM_POEM: Passage = {
  id: 'g4-mini-storm-poem', title: 'Desert Rain', genre: 'poetry',
  blocks: [
    { kind: 'line', text: 'The sky turns violet, bruised and deep,' },
    { kind: 'line', text: 'While desert shadows start to creep;' },
    { kind: 'line', text: 'Then thunder grumbles in the hills,' },
    { kind: 'line', text: 'And sudden rain the canyon fills.', stanzaEnd: true },
    { kind: 'line', text: 'The thirsty yucca drinks the shower,' },
    { kind: 'line', text: 'The red clay blooms with purple flower;' },
    { kind: 'line', text: 'And as the clouds roll past the plain,' },
    { kind: 'line', text: 'The sweet earth smells of summer rain.' },
  ],
};

export const SCENE: Passage = {
  id: 'g4-mini-scene', title: 'The Science Fair Project', genre: 'drama',
  blocks: [
    { kind: 'direction', text: 'The school cafeteria, fifteen minutes before science fair judging. CARLOS stares anxiously at his volcano model. MAYA enters carrying a paper cup of vinegar.' },
    { kind: 'speech', speaker: 'CARLOS', text: '(gripping the table edge) The red food dye leaked all over the papier-mâché cone! The judges will walk by any second!' },
    { kind: 'speech', speaker: 'MAYA', text: '(calmly wiping the red smudge with a damp napkin) Carlos, breathe. It doesn\'t look like a mistake; it looks like glowing red lava oozing down the side.' },
    { kind: 'speech', speaker: 'CARLOS', text: '(stepping back with a relieved grin) Hey, you\'re right. It actually looks more realistic than before.' },
    { kind: 'direction', text: 'The head judge approaches with a clipboard, smiling at the smoking mountain.' },
  ],
};

export const FABLE: Passage = {
  id: 'g4-mini-fable', title: 'The Ant and the Dove', genre: 'fiction',
  blocks: [
    p('An ant was drinking from a clear mountain spring when a sudden rush of water swept him downstream. Struggling in the current, the tiny insect was about to drown.'),
    p('A dove sitting on an overhead branch took pity on the ant. She plucked a broad green leaf and dropped it into the water beside him. The ant scrambled onto the leaf and floated safely ashore.'),
    p('The next day, a hunter aimed his net at the sleeping dove. Seeing the danger, the ant stung the hunter on the foot. The hunter dropped his net with a cry of pain, and the dove flew away to safety. One good turn deserves another.'),
  ],
};

export const TALL_TALE: Passage = {
  id: 'g4-mini-tall-tale', title: 'Pecos Bill and the Cyclone', genre: 'fiction',
  blocks: [
    p('Pecos Bill was raised by Texas coyotes and grew so hardy that he used a rattlesnake for a bullwhip and rode a mountain lion for fun. When the greatest cyclone in world history blew across the prairie, knocking over mountains, Bill simply leaped onto the storm\'s back.'),
    p('He dug in his spurs and rode the bucking tornado across three states until it begged for mercy. When the cyclone finally rained itself out, it carved the Grand Canyon right where Bill fell off his saddle.'),
  ],
};

export const BIOGRAPHY_OCHOA: Passage = {
  id: 'g4-mini-ochoa', title: 'Dr. Ellen Ochoa: Reaching for the Stars', genre: 'literaryNonfiction',
  blocks: [
    p('Growing up in Southern California, Ellen Ochoa excelled in math and was an accomplished classical flutist. Although some college professors discouraged women from studying advanced engineering, Ochoa earned a doctorate in electrical engineering from Stanford University.'),
    p('In 1993, aboard the space shuttle Discovery, Dr. Ochoa made history as the first Hispanic woman in space. She flew on four shuttle missions, operating the robotic arm that deployed research satellites. Later, she served as director of NASA\'s Johnson Space Center in Houston, proving that dedication and technical excellence can launch anyone to the stars.'),
  ],
};

export const PAIRED_PLASTIC: Passage = {
  id: 'g4-mini-paired-plastic', title: 'Two Texts About Ocean Plastic', genre: 'informational',
  blocks: [
    { kind: 'heading', text: 'Text 1: Rivers of Plastic' },
    p('Millions of tons of discarded plastic bottles and grocery bags wash into coastal waterways each year. In the ocean, sunlight and waves break plastic into tiny microplastics, which marine animals mistake for food.'),
    { kind: 'heading', text: 'Text 2: Community Beach Cleanup' },
    p('In Galveston, hundreds of elementary students and families gathered for the annual Coastal Cleanup Day. Volunteers combed twenty miles of sandy shoreline, collecting over five tons of trash in four hours to protect endangered sea turtles and nesting shorebirds.'),
  ],
};

export const FROGS_TOADS: Passage = {
  id: 'g4-mini-frogs-toads', title: 'Comparing Frogs and Toads', genre: 'informational',
  blocks: [
    { kind: 'heading', text: 'Shared Characteristics' },
    p('Frogs and toads are both amphibians, meaning they are cold-blooded vertebrates that hatch from jelly-like eggs in water and undergo metamorphosis from aquatic tadpoles into air-breathing adults.'),
    { kind: 'heading', text: 'Key Differences' },
    p('Frogs possess moist, slimy skin, slender bodies, and long, powerful back legs designed for leaping through wetlands. In contrast, toads have dry, warty skin, heavier bodies, and shorter hind legs suited for hopping across dry land.'),
  ],
};

export const DRAFT_ROBOT: Passage = {
  id: 'g4-mini-draft-robot', title: 'Building a Recycled Robot', genre: 'fiction',
  blocks: [
    s(
      'Our team built a robot using cardboard boxes and plastic bottle caps.',
      'We painted the body with shiny silver paint.',
      'It looked very realistic.',
      'Then we added aluminum foil ears and two glowing green light bulbs for eyes.',
      'Our classmates cheered when the robot rolled across the table.',
    ),
  ],
};
