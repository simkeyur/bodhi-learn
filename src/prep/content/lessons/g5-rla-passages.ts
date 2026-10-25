// Short passages (40–120 words) for grade 5 reading walkthroughs. Each one is used by several walkthroughs,
// each asking a different question about it. All original.

import type { Passage } from '../types.ts';

const p = (text: string) => ({ kind: 'p' as const, text });
const s = (...sentences: string[]) => ({ kind: 'sentences' as const, sentences });

export const LEMONADE: Passage = {
  id: 'g5-mini-lemonade', title: 'The Lemonade Stand', genre: 'fiction',
  blocks: [
    p('Kira wanted to earn enough money to buy a new soccer ball. Her little brother, Sam, wanted to help, but Kira said he was too young.'),
    p('On Saturday, Kira set up her lemonade stand. For an hour, no one stopped. Then Sam walked down the sidewalk ringing his bike bell and shouting, "Cold lemonade! Best on the block!" Soon a line of neighbors formed.'),
    p('By evening, the jar was full. Kira counted the money and handed Sam half. "You were the best part of the stand," she said.'),
  ],
};

export const CAMP: Passage = {
  id: 'g5-mini-camp', title: 'First Day at Camp', genre: 'fiction',
  blocks: [
    p('I am not a camp person. I like air conditioning, my own bed, and bugs that stay outside where they belong. So when Mom dropped me off at Camp Bluebonnet, I was ready to be miserable.'),
    p('Then a girl in my cabin named Tasha showed me how to catch fireflies in a jar and let them go. By the end of the night, I had a sunburn, eleven mosquito bites, and a best friend. Fine. Maybe I am a little bit of a camp person.'),
  ],
};

export const PRAIRIE_DOGS: Passage = {
  id: 'g5-mini-prairie-dogs', title: 'Towns Under the Prairie', genre: 'informational',
  blocks: [
    { kind: 'heading', text: 'Underground Cities' },
    p('Prairie dogs live in large groups called towns. Each family digs a burrow, a long tunnel with rooms for sleeping and raising pups. Some towns stretch for miles under the grass.'),
    p('Prairie dogs take turns standing guard at the burrow entrance. When a guard spots a hawk or coyote, it gives a sharp bark, and everyone dives underground.'),
    { kind: 'sidebar', title: 'Fast Facts', text: 'Prairie dogs are a kind of ground squirrel. They eat mostly grasses and seeds. A town can hold thousands of prairie dogs.' },
  ],
};

export const SEED: Passage = {
  id: 'g5-mini-seed', title: 'From Seed to Sprout', genre: 'informational',
  blocks: [
    p('A bean seed may look lifeless, but inside it is a tiny plant waiting to grow. First, the seed soaks up water and swells until its coat splits open.'),
    p('Next, a root pushes down into the soil to collect water. Then a shoot pushes up toward the light. Finally, the first leaves open and begin making food from sunlight. In about a week, a dry seed has become a growing plant.'),
  ],
};

export const LIBRARY: Passage = {
  id: 'g5-mini-library', title: 'Open the Library on Sundays', genre: 'argumentative',
  blocks: [
    p('To the members of the city council: Our public library should be open on Sundays.'),
    p('Many families work all week and can only visit on weekends. Students also need a quiet place to study before Monday tests. In a survey at our school, 8 out of 10 students said they would use the library on Sundays.'),
    p('Some people say opening another day costs too much. But volunteers have offered to help, which would keep costs low. Please vote to open the library on Sundays.'),
  ],
};

export const SUNSCREEN: Passage = {
  id: 'g5-mini-sunscreen', title: 'Sunny Day Sunscreen', genre: 'persuasive',
  blocks: [
    p('Kids, are you tired of sunburns ruining your summer fun? Try Sunny Day Sunscreen, the best sunscreen in the whole universe!'),
    p('Sunny Day protects your skin for up to two hours, even in the pool. It smells like fresh oranges, not like medicine. Doctors say wearing sunscreen every day helps protect your skin as you grow up.'),
    p('Ask your parents to grab a bottle today. Your skin will thank you!'),
  ],
};

export const STORM_POEM: Passage = {
  id: 'g5-mini-storm-poem', title: 'Summer Storm', genre: 'poetry',
  blocks: [
    { kind: 'line', text: 'The sky grows dark as a bruise,' },
    { kind: 'line', text: 'The thunder grumbles low,' },
    { kind: 'line', text: 'Then raindrops drum on the old tin roof,' },
    { kind: 'line', text: 'Rat-a-tat, steady and slow.', stanzaEnd: true },
    { kind: 'line', text: 'The puddles fill like silver cups,' },
    { kind: 'line', text: 'The thirsty garden drinks,' },
    { kind: 'line', text: 'And when the clouds have rolled away,' },
    { kind: 'line', text: 'The whole world shines and blinks.' },
  ],
};

export const OAK_POEM: Passage = {
  id: 'g5-mini-oak-poem', title: 'The Old Oak', genre: 'poetry',
  blocks: [
    { kind: 'line', text: 'I have stood on this hill for a hundred years,' },
    { kind: 'line', text: 'I have sheltered the deer from the rain,' },
    { kind: 'line', text: 'I have watched the children grow tall and leave,' },
    { kind: 'line', text: 'And their children come back again.', stanzaEnd: true },
    { kind: 'line', text: 'My branches are tired, my bark is rough,' },
    { kind: 'line', text: 'But each spring, when the warm winds blow,' },
    { kind: 'line', text: 'I stretch out my arms and put on new leaves,' },
    { kind: 'line', text: 'And wait for the children below.' },
  ],
};

export const SCENE: Passage = {
  id: 'g5-mini-scene', title: 'The Missing Script', genre: 'drama',
  blocks: [
    { kind: 'direction', text: 'The school stage, ten minutes before the play. ELLA searches through a pile of costumes. MARCUS enters.' },
    { kind: 'speech', speaker: 'ELLA', text: '(panicking) I can\'t find my script anywhere! The play starts in ten minutes!' },
    { kind: 'speech', speaker: 'MARCUS', text: '(calmly) Ella, you\'ve practiced every day for a month. You don\'t need the script. You know every line.' },
    { kind: 'speech', speaker: 'ELLA', text: '(taking a deep breath) You\'re right. I do know them.' },
    { kind: 'direction', text: 'The lights flicker. The curtain begins to rise.' },
  ],
};

export const FABLE: Passage = {
  id: 'g5-mini-fable', title: 'The Thirsty Crow', genre: 'fiction',
  blocks: [
    p('A crow, nearly dying of thirst, found a pitcher with a little water at the bottom. But the pitcher was tall, and her beak could not reach the water.'),
    p('Instead of giving up, the crow picked up a pebble and dropped it in. Then another, and another. With each pebble, the water rose a little higher, until at last she could drink.'),
    p('Moral: Little by little does the trick.'),
  ],
};

export const TALL_TALE: Passage = {
  id: 'g5-mini-tall-tale', title: 'Big Sal of the Brazos', genre: 'fiction',
  blocks: [
    p('Big Sal was born so tall that her cradle was a canoe. By age six, she could lasso a tornado and ride it like a pony. When the Brazos River ran dry one summer, Sal simply wrung out a rain cloud until the river was full again.'),
    p('Folks say the hills in Central Texas are just the spots where Sal sat down to rest her boots.'),
  ],
};

export const GRANDPA: Passage = {
  id: 'g5-mini-grandpa', title: 'Grandpa\'s Paper Route', genre: 'literaryNonfiction',
  blocks: [
    p('My grandpa says hard work is a habit you build one morning at a time. When he was twelve, he delivered newspapers before sunrise, six days a week.'),
    p('He loves to tell about the morning a blizzard buried his town. Everyone stayed home, but Grandpa pulled on two pairs of socks and delivered every paper, even if it took him four hours. "Nobody missed their news that day," he says, grinning, "and I never missed a morning again."'),
  ],
};

export const RECYCLING: Passage = {
  id: 'g5-mini-recycling', title: 'Two Texts About Plastic', genre: 'informational',
  blocks: [
    { kind: 'heading', text: 'Text 1: Where Plastic Goes' },
    p('Most plastic that gets thrown away ends up in landfills, where it can take hundreds of years to break down. Some of it washes into rivers and oceans, where animals can mistake it for food.'),
    { kind: 'heading', text: 'Text 2: A Class Takes Action' },
    p('Ms. Kwan\'s fourth-grade class noticed how many plastic water bottles were tossed in the cafeteria trash. They started a "Bring a Bottle" week, asking students to use refillable bottles. By Friday, the cafeteria trash had 300 fewer plastic bottles.'),
  ],
};

export const BIKES: Passage = {
  id: 'g5-mini-bikes', title: 'Two Texts About Bike Helmets', genre: 'informational',
  blocks: [
    { kind: 'heading', text: 'Text 1: Why Helmets Matter' },
    p('Doctors say that wearing a helmet greatly lowers the chance of a serious head injury in a bike crash. A helmet only works if it fits snugly and is buckled.'),
    { kind: 'heading', text: 'Text 2: Helmet Day' },
    p('At Lakeview Elementary, many students rode to school without helmets because theirs were too small. The parent club held a Helmet Day, fitting more than one hundred students with new helmets that fit.'),
  ],
};

export const FROGS: Passage = {
  id: 'g5-mini-frogs', title: 'Frogs and Toads', genre: 'informational',
  blocks: [
    { kind: 'heading', text: 'Alike' },
    p('Frogs and toads are both amphibians. They both hatch from eggs laid in water and begin life as tadpoles.'),
    { kind: 'heading', text: 'Different' },
    p('Frogs have smooth, wet skin and long legs for jumping. They usually live near water. Toads have dry, bumpy skin and shorter legs for hopping, and they can live farther from water.'),
  ],
};

export const SNOW: Passage = {
  id: 'g5-mini-snow', title: 'Snowed In', genre: 'fiction',
  blocks: [
    p('The night before the big game, a rare ice storm swept across Dallas. By morning, the roads were glazed with ice, and the radio announced that every school event was canceled.'),
    p('Instead of sulking, Mateo and his sisters set up a living-room soccer field with couch cushions for goals. "Championship game," Mateo announced, "Sanchez Siblings versus the Furniture!"'),
  ],
};

export const DRAFT_PETS: Passage = {
  id: 'g5-mini-draft-pets', title: 'A Class Pet', genre: 'argumentative',
  blocks: [
    s(
      'Our class should get a class pet.',
      'A pet would teach us responsibility.',
      'A guinea pig would be a good choice.',
      'Guinea pigs are friendly.',
      'They are easy to care for.',
    ),
  ],
};

export const DRAFT_TRIP: Passage = {
  id: 'g5-mini-draft-trip', title: 'Our Trip to the Science Museum', genre: 'literaryNonfiction',
  blocks: [
    s(
      'Last week, our class went to the science museum.',
      'We saw a huge dinosaur skeleton.',
      'It was big.',
      'Then we watched a show in the planetarium.',
      'My favorite part was the planetarium.',
    ),
  ],
};
