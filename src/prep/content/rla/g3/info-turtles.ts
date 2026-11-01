// Grade 3 informational: Saving the Texas Horned Lizard.
// Word count: ~298 words (range 250-650).
// Questions cover central idea (3.9D.i), text features (3.9D.ii), organizational pattern (3.9D.iii),
// author's purpose (3.10A), inference (3.6F), key details (3.6G), and text evidence (3.7C).

import { makeSet, mcq } from '../author.ts';

export const INFO_TURTLES = makeSet({
  id: 'g3-info-turtles',
  grade: 3,
  kind: 'reading',
  title: 'Saving the Texas Horned Lizard',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g3-info-turtles-p',
    title: 'Saving the Texas Horned Lizard',
    genre: 'informational',
    blocks: [
      { kind: 'heading', text: 'A Spiky Texas Native' },
      { kind: 'p', text: 'The Texas horned lizard is a famous creature in the Lone Star State. Many Texans call it the horny toad. Even so, it is really a lizard, not a frog. An adult lizard is about four inches long. Sharp spines stick out along its back. Two sharp horns sit on top of its head. Its brown and gray skin helps it hide in dry dirt and grass.' },
      { kind: 'heading', text: 'Hunting on the Anthill' },
      { kind: 'p', text: 'Horned lizards love to eat big red harvester ants. One lizard can eat many ants in a single day. The lizard sits quietly next to an anthill. It waits without moving a muscle. When an ant crawls past, the lizard snaps out its sticky tongue. It gulps the bug down fast. Juices in the lizard belly keep the stinging ant bites from hurting inside.' },
      { kind: 'heading', text: 'Clever Ways to Stay Safe' },
      { kind: 'p', text: 'A horned lizard has smart ways to stay safe from enemies. First, it presses flat against the ground. Its dusty colors blend into the dirt. If a coyote or hawk gets close, the lizard puffs up with air like a spiky ball. This makes it look too prickly to eat. If an enemy still attacks, the lizard can spray a tiny drop of bad-tasting blood from its eye to scare the predator away.' },
      { kind: 'heading', text: 'Helping an Old Friend Return' },
      { kind: 'p', text: 'Years ago, horned lizards began to vanish from many Texas towns. New buildings covered their homes, and fire ants harmed their food. Now scientists and zookeepers work to bring the lizards back. They raise baby horned lizards in safe zoo pens. When the young lizards grow strong, workers release them onto open ranches and parks. Scientists use tiny tags to follow them in the wild. With help from caring people, these spiky friends are thriving again.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9D.i', cites: [1, 4],
      stem: 'What is the central idea of the article?',
      choices: [
        'People are working hard to protect and restore Texas horned lizards.',
        ['Horned lizards spend most of their time fleeing from coyotes and hawks.', 'The third paragraph mentions predators, but lizards mostly hide or hunt rather than flee.'],
        ['Texas horned lizards only live inside warm zoo enclosures.', 'Zoos raise young lizards temporarily before releasing them into wild habitats.'],
        ['Harvester ants are dangerous pests that harm wild animals across Texas.', 'Harvester ants are the lizard\'s main food source, not the main focus of the article.'],
      ],
      answer: 0,
      explain: 'The selection describes the unique traits of the Texas horned lizard and highlights how scientists and zookeepers are helping the species return to the wild.',
    }),
    mcq({
      standard: 'rla:3.9D.ii', cites: [1, 2, 3, 4],
      stem: 'How do the headings help the reader understand the selection?',
      choices: [
        ['They show the exact step-by-step instructions for catching ants in a backyard.', 'The selection describes how lizards hunt, not directions for people catching insects.'],
        'They divide the article into different topics about the horned lizard.',
        ['They list every wild animal that lives in the Texas desert.', 'The headings introduce facts about lizards rather than listing all desert wildlife.'],
        ['They explain where readers can purchase a pet lizard in Texas.', 'The article explains wild conservation and never suggests buying pets.'],
      ],
      answer: 1,
      explain: 'The headings break the selection into clear topics: the lizard\'s traits, hunting habits, defense mechanisms, and recovery efforts.',
    }),
    mcq({
      standard: 'rla:3.9D.iii', cites: [4],
      stem: 'Which organizational pattern does the author use in paragraph 4?',
      choices: [
        ['Chronological order, detailing the daily schedule of a zookeeper.', 'The paragraph describes conservation over years, not an individual worker\'s daily schedule.'],
        ['Comparison, highlighting the differences between horned lizards and frogs.', 'The comparison between lizards and frogs occurs in paragraph 1, not paragraph 4.'],
        'Problem and solution, showing how people help vanishing lizards recover.',
        ['Cause and effect, explaining why horned lizards prefer cold winter weather.', 'The fourth paragraph discusses habitat loss and conservation programs, not winter weather.'],
      ],
      answer: 2,
      explain: 'Paragraph 4 presents problems (habitat loss and food competition) and solutions (breeding lizards in zoos and releasing them into protected habitats).',
    }),
    mcq({
      standard: 'rla:3.10A', cites: [1, 2, 3, 4],
      stem: 'What is the author\'s main purpose for writing the selection?',
      choices: [
        ['To teach scientists and students how to identify different species of ants in the plains.', 'Harvester ants are mentioned only as food for lizards, not as an identification guide.'],
        ['To entertain readers with an imaginary story about a talking toad.', 'The selection is informational nonfiction with facts, not a fictional tale.'],
        ['To persuade people to build wooden cages for wild reptiles.', 'The article encourages protecting wild habitats rather than caging animals.'],
        'To inform readers about the traits of horned lizards and how people are helping them.',
      ],
      answer: 3,
      explain: 'The author\'s main goal is to share informational facts about horned lizards and explain how people are working to help them thrive.',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [3],
      stem: 'What can the reader conclude about the horned lizard from paragraph 3?',
      choices: [
        'It relies on multiple clever adaptations to survive encounters with predators.',
        ['It runs faster than most desert birds and mammals to escape danger.', 'Horned lizards stay motionless or puff up instead of outrunning fast hunters.'],
        ['Its defenses make it completely safe from every danger in the desert.', 'The text shows that lizards face dangers and need special defenses to survive.'],
        ['It prefers to attack large animals like coyotes whenever they approach.', 'Horned lizards defend themselves or hide rather than attacking large predators.'],
      ],
      answer: 0,
      explain: 'Paragraph 3 describes how the lizard uses camouflage, puffs up its body, and squirts blood to protect itself from predators.',
    }),
    mcq({
      standard: 'rla:3.6G', cites: [2],
      stem: 'According to paragraph 2, how does a horned lizard catch harvester ants?',
      choices: [
        ['It chases fast-moving ants across the open grass.', 'The text states that the lizard waits without moving rather than chasing ants.'],
        'It waits motionless near an anthill and snaps them up with a sticky tongue.',
        ['It traps ants by covering their nests with loose dirt.', 'The lizard catches passing ants with its tongue and does not cover their nests.'],
        ['It digs deep underground tunnels beneath ant mounds to find hidden insect food.', 'The lizard sits quietly on the surface next to an anthill rather than digging tunnels.'],
      ],
      answer: 1,
      explain: 'Paragraph 2 explains that the lizard sits quietly near an anthill and flicks out its sticky tongue when an ant crawls by.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [4],
      stem: 'Which quotation from paragraph 4 shows an action taken to protect horned lizards?',
      choices: [
        ['"When an ant crawls past, the lizard snaps out its sticky tongue."', 'This quotation describes how the lizard hunts in paragraph 2, not a conservation action.'],
        ['"If a coyote or hawk gets close, the lizard puffs up with air like a spiky ball."', 'This quotation is from paragraph 3 and explains how the lizard defends itself.'],
        '"They raise baby horned lizards in safe zoo pens."',
        ['"Juices in the lizard belly keep the stinging ant bites from hurting inside."', 'This quotation is from paragraph 2 and describes digestion, not human conservation.'],
      ],
      answer: 2,
      explain: 'In paragraph 4, raising baby lizards in safe zoo pens shows a direct action taken by people to protect the species.',
    }),
  ],
});
