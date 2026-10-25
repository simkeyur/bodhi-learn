// Short passages (40–120 words) for grade 3 reading walkthroughs. Each one is reused across
// multiple walkthroughs, each asking a different question. All original.

import type { Passage } from '../types.ts';

const p = (text: string) => ({ kind: 'p' as const, text });
const s = (...sentences: string[]) => ({ kind: 'sentences' as const, sentences });

export const LEMONADE: Passage = {
  id: 'g3-mini-lemonade', title: 'The Lemonade Stand', genre: 'fiction',
  blocks: [
    p('Elena wanted to earn money to buy a new science kit. Her younger brother, Mateo, begged to help, but Elena said he was too young to make change.'),
    p('On Saturday morning, Elena set up her yellow wooden stand on the corner. For an hour, not a single neighbor stopped. Then Mateo rode down the sidewalk ringing his bicycle bell and singing a silly song: "Cold lemonade, sweet and bright, best in Texas day or night!" Soon a cheerful line of thirsty customers formed.'),
    p('By evening, the glass jar was full of shiny coins. Elena smiled at her brother and handed him half of the money. "You were the real star of our stand today," she admitted happily.'),
  ],
};

export const CAMP: Passage = {
  id: 'g3-mini-camp', title: 'First Night at Camp', genre: 'fiction',
  blocks: [
    p('I have never considered myself an outdoor camper. I prefer air-conditioned rooms, cozy sofas, and insects that stay outside. So when Mom dropped me off at Camp Lone Star for three days, I expected to be miserable.'),
    p('Then my cabin mate Jamal showed me how to spot the Big Dipper in the starry sky and listen for the soft hoot of a great horned owl. By the time lights went out, I had pine sap on my sneakers, two mosquito bites, and a great new friend. Perhaps camping is not so bad after all.'),
  ],
};

export const ARMADILLO: Passage = {
  id: 'g3-mini-armadillo', title: 'The Nine-Banded Armadillo', genre: 'informational',
  blocks: [
    { kind: 'heading', text: 'Armor on Four Legs' },
    p('The nine-banded armadillo is the official small state mammal of Texas. Covered in bony armor plates called scutes, this curious creature looks like a tiny prehistoric relic scurrying through grassy pastures.'),
    p('Armadillos have poor eyesight and weak hearing, but their keen sense of smell helps them sniff out beetles, earthworms, and grubs buried deep in the dirt. When startled by a coyote, an armadillo can leap three feet straight into the air before darting into a thorny bush.'),
    { kind: 'sidebar', title: 'Fast Fact', text: 'Mother nine-banded armadillos almost always give birth to four identical quadruplet babies.' },
  ],
};

export const BATS: Passage = {
  id: 'g3-mini-bats', title: 'Austin\'s Urban Bat Colony', genre: 'informational',
  blocks: [
    p('Each spring, hundreds of thousands of Mexican free-tailed bats migrate to Austin, Texas, roosting beneath the warm concrete crevices of the Congress Avenue Bridge.'),
    p('At sunset, the colony flies out in a giant swirling ribbon against the evening sky. These gentle nocturnal mammals are a huge benefit to local farmers, eating thousands of pounds of crop-eating insects every single night. Spectators gather on the riverbank to watch the amazing flight.'),
  ],
};

export const LIBRARY: Passage = {
  id: 'g3-mini-library', title: 'Open the Library on Weekends', genre: 'argumentative',
  blocks: [
    p('To the members of the city council: Our public library should expand its operating hours to include Sunday afternoons.'),
    p('Working parents often work long weekday hours and can only take young children to the library on weekends. Furthermore, elementary students need a quiet, comfortable space to read books and study. In our school survey, eight out of ten third-graders said they would visit the library on Sundays.'),
    p('Some officials worry that opening on Sunday costs too much money. However, community volunteers and high school clubs have offered to shelve books and help visitors for free. Please vote to open the library on Sundays.'),
  ],
};

export const RECYCLE: Passage = {
  id: 'g3-mini-recycle', title: 'Join the Cafeteria Clean Team', genre: 'persuasive',
  blocks: [
    p('Fellow students, look around the cafeteria after lunch. Plastic water bottles, sandwich bags, and clean aluminum cans overflow from every trash barrel.'),
    p('Every piece of aluminum thrown into the trash can sit in a Texas landfill for five hundred years without breaking down. But when we recycle aluminum, it can be melted down and remade into a new soda can in just sixty days. Recycling saves ninety-five percent of the energy needed to make metal from scratch.'),
    p('Join the Clean Team today. Drop your clean cans into the blue bins and help our school protect planet Earth!'),
  ],
};

export const FABLE: Passage = {
  id: 'g3-mini-fable', title: 'The Ant and the Grasshopper', genre: 'fiction',
  blocks: [
    p('All summer long, a tiny black Ant carried heavy wheat grains back to her underground nest. Nearby, a carefree Grasshopper sat on a sunflower stalk, chirping songs and laughing at Ant for working so hard in the hot afternoon sun.'),
    p('"Why work so hard?" Grasshopper asked playfully. "Summer days are long, and food is everywhere!"'),
    p('"I am storing food for the freezing winter," Ant replied quietly as she marched ahead with her heavy grain.'),
    p('When winter arrived and ice coated the prairie, Grasshopper found nothing to eat. Shivering in the snow, he knocked on Ant\'s door and begged for a bite of bread. Ant shared her food, but said, "Next summer, remember that those who play all summer must go hungry in winter."'),
  ],
};

export const TALL_TALE: Passage = {
  id: 'g3-mini-tall-tale', title: 'Pecos Bill and the Cyclone', genre: 'fiction',
  blocks: [
    p('Out in West Texas, folks still tell stories about Pecos Bill, the legendary cowboy who grew up with a pack of coyotes. Bill was so tough he used a rattlesnake as a lasso and rode a wild mountain lion instead of a horse.'),
    p('One afternoon, the biggest, meanest green tornado in history spun down from the sky, threatening to blow Texas clean off the map. Bill did not run for shelter. He leaped right onto the tornado\'s swirling neck and rode it like a bucking bronco across the desert, kicking his spurs until the storm rained itself down into a gentle spring shower.'),
  ],
};

export const BIOGRAPHY_OCHOA: Passage = {
  id: 'g3-mini-ochoa', title: 'Ellen Ochoa: Reaching for the Stars', genre: 'literaryNonfiction',
  blocks: [
    p('Growing up in California, Ellen Ochoa was a brilliant flute player who also loved mathematics and science. Although some college professors told her that engineering was not a field for women, Ellen persevered, earning advanced degrees in electrical engineering from Stanford University.'),
    p('In 1991, NASA selected Ellen to join the astronaut program. In April 1993, she boarded the Space Shuttle Discovery, making history as the first Hispanic woman to fly into outer space. During her nine-day mission, she operated a giant robotic arm to capture and release research satellites. Later, Ellen served as the director of NASA\'s Johnson Space Center in Houston, Texas, inspiring thousands of young people to pursue STEM careers.'),
  ],
};

export const FROGS_TOADS: Passage = {
  id: 'g3-mini-frogs-toads', title: 'Frogs and Toads of Texas', genre: 'informational',
  blocks: [
    p('Many people think frogs and toads are the same creature, but these amphibians have distinct physical differences. True frogs usually have long, powerful back legs built for swimming and giant leaps, along with smooth, moist skin that requires damp ponds or riverbanks to stay hydrated.'),
    p('In contrast, toads have shorter, stouter legs designed for hopping and walking across dry ground. Their skin is dry, rough, and covered in bumpy warts. Because a toad\'s thick skin holds moisture better than a frog\'s skin, toads can live in suburban gardens, sandy fields, and rocky deserts far from open water.'),
  ],
};

export const SCENE: Passage = {
  id: 'g3-mini-scene', title: 'The Audition', genre: 'drama',
  blocks: [
    { kind: 'heading', text: 'Characters' },
    p('MARIA: An eight-year-old girl holding a sheet of music.\nCOACH VANCE: The school drama club director.'),
    { kind: 'heading', text: 'Scene 1' },
    p('Setting: The stage of the elementary school auditorium. A piano sits near center stage under a warm spotlight.'),
    { kind: 'speech', speaker: 'MARIA', text: '[Clutching her music sheet nervously and stepping toward the microphone] Good afternoon, Coach Vance. I will be singing "Home on the Range" for my audition today.' },
    { kind: 'speech', speaker: 'COACH VANCE', text: '[Smiling warmly and setting down his clipboard] Take a deep breath, Maria. Everyone feels butterflies before singing. Just imagine you are singing in your living room with friends.' },
    { kind: 'speech', speaker: 'MARIA', text: '[Takes a slow breath, relaxes her shoulders, and begins singing in a clear, confident voice] "Oh, give me a home where the buffalo roam..."' },
  ],
};

export const STORM_POEM: Passage = {
  id: 'g3-mini-storm', title: 'Prairie Thunder', genre: 'poetry',
  blocks: [
    { kind: 'line', text: 'Dark clouds gather in the western sky,' },
    { kind: 'line', text: 'Prairie breezes whisper, then rush by.' },
    { kind: 'line', text: 'A jagged flash of silver light,' },
    { kind: 'line', text: 'Turns the dusty afternoon to night.', stanzaEnd: true },
    { kind: 'line', text: 'Boom! goes the thunder, loud and deep,' },
    { kind: 'line', text: 'Waking cattle from their summer sleep.' },
    { kind: 'line', text: 'Raindrops patter on the tin roof shed,' },
    { kind: 'line', text: 'Safe and dry inside my warm soft bed.', stanzaEnd: true },
  ],
};

export const DRAFT_ROBOT: Passage = {
  id: 'g3-mini-draft-robot', title: 'Our Science Fair Robot', genre: 'informational',
  blocks: [
    s(
      'Last week, my team built a miniature robot for the third-grade science fair.',
      'We named our creation Sparky because it has bright yellow LED lights for eyes.',
      'First, we connected the plastic wheels to two small electric battery motors.',
      'Next, we tested Sparky on the classroom tile floor, but the wheels slipped on the smooth surface.',
      'To solve the problem, we glued rubber bands around the plastic wheels to give them better grip.',
      'Finally, Sparky navigated through the maze without bumping into any wooden blocks.',
      'Our teacher awarded our team a shiny blue first-place ribbon for creative problem-solving.',
    ),
  ],
};
