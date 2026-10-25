// Grade 6 paired set: The American Bison in Texas.
import { makeSet, mcq, msq, twoq } from '../author.ts';

export const PAIRED_BISON = makeSet({
  id: 'g6-paired-bison',
  grade: 6,
  kind: 'reading',
  title: 'The Great Plains Monarch',
  intro: 'Read the next two selections and choose the best answer to each question.',
  passages: [
    {
      id: 'g6-paired-bison-p1',
      title: 'The Return of the Texas Bison',
      genre: 'informational',
      blocks: [
        { kind: 'p', text: 'Before European settlers arrived on the vast Great Plains, an estimated thirty to sixty million American bison (*Bison bison*) thundered across the endless grasslands of North America. These colossal herbivores, weighing up to two thousand pounds, powerfully shaped the entire prairie ecosystem. Their roaming and grazing stimulated diverse native wildflower and prairie grass growth, while their dust wallowing carved shallow depressions that collected crucial seasonal rainwater for thirsty migrating waterfowl. For millennia, their compacted migration trails carved natural highways across the continent, connecting water springs and mountain passes.' },
        { kind: 'p', text: 'Tragically, the rapid expansion of the nineteenth century brought catastrophic commercial slaughter. Unregulated hide hunters armed with high-powered rifles, transcontinental railway construction crews, and deliberate military campaigns designed to subjugate Native American tribes reduced the once-colossal herds to fewer than one thousand animals by 1889. The Southern Plains herd, which had once carpeted the red cliffs of the Texas Panhandle in dark, unbroken waves, was virtually obliterated in less than two decades of intensive hunting.' },
        { kind: 'p', text: 'The southern herd was saved from total biological extinction primarily through the compassionate intervention of Mary Ann Goodnight, a resilient Texas pioneer woman. In 1878, horrified by the wholesale commercial slaughter taking place around their Palo Duro Canyon ranch, Mary Ann persuaded her husband, legendary rancher Charles Goodnight, to rope and rescue several orphaned bison calves wandering aimlessly along the canyon floor. The Goodnights carefully nurtured these fragile calves on their JA Ranch, establishing a small nucleus herd that steadily expanded over the following decades.' },
        { kind: 'p', text: 'In 1997, the living descendants of Goodnight\'s original herd were donated to the Texas Parks and Wildlife Department and relocated to Caprock Canyons State Park near Quitaque, Texas. Rigorous genetic testing conducted by Texas A&M University biologists revealed an astonishing discovery: the Caprock bison possessed unique, ancient DNA markers completely absent in northern Yellowstone bison, confirming they were the last surviving genetic remnants of the true native southern plains herd.' },
        { kind: 'p', text: 'Today, the celebrated Texas State Bison Herd roams freely across more than ten thousand acres of rugged red canyons and restored native shortgrass prairie. Visitors from around the world watch in awe as these powerful beasts graze against the backdrop of vibrant sandstone cliffs. The successful restoration of this iconic animal stands as a shining testament to how individual conservation foresight and public stewardship can rescue an entire species from the brink of permanent oblivion.' },
      ],
    },
    {
      id: 'g6-paired-bison-p2',
      title: 'Dust on the Caprock',
      genre: 'fiction',
      blocks: [
        { kind: 'p', text: 'From the wooden porch of his family\'s sod dugout, twelve-year-old Caleb watched a thick cloud of red dust billow along the southern rim of the canyon. At first, he thought it was a prairie twister spinning across the caprock. But as the ground beneath his bare feet began to hum with a rhythmic, thunderous vibration, his breath caught in his throat.' },
        { kind: 'p', text: '"Pa! Look yonder!" Caleb shouted, pointing a trembling hand toward the horizon.' },
        { kind: 'p', text: 'His father stepped out of the barn, shielding his weathered eyes with a straw hat. For a long moment, neither of them spoke. Out of the crimson haze emerged a tight vanguard of dark, shaggy silhouettes. Shaggy heads lowered against the wind, massive humps swaying in unison, fifty bison crested the ridge and poured down the rocky slope toward the canyon spring.' },
        { kind: 'p', text: 'Caleb had heard stories from old buffalo runners who stopped at the trading post, men who bragged of herds so vast a horseman could ride three days without reaching the other side. But in Caleb\'s lifetime, the prairie had fallen quiet. Most settlers spoke of the great herds as if they were ghosts belonging to an ancient, vanished world.' },
        { kind: 'p', text: 'The lead bull reached the spring pool first. He stood chest-deep in the cool water, his curved horns glinting in the late afternoon sun, steam rising from his broad flanks. Behind him, cows nudged two reddish-brown calves toward the shallows. The herd drank peacefully, oblivious to the settlers watching in awe from three hundred yards away.' },
        { kind: 'p', text: '"Are they wild, Pa?" Caleb whispered, afraid that even a whisper might dissolve the vision.' },
        { kind: 'p', text: '"They belong to Mrs. Goodnight\'s herd," his father answered quietly, resting a gentle hand on Caleb\'s shoulder. "She and Charlie caught them calves years back when the hide hunters swept through. People said Charlie was wasting good pasture on beasts that had no future. But look at them, son. That\'s the true spirit of this land, alive and unbroken."' },
        { kind: 'p', text: 'Caleb watched until the sun dipped below the rimrock, painting the canyon in streaks of amber and violet. As the herd ambled back into the shadowed draws, Caleb knew he would never forget the deep thunder that had made the earth remember its ancient past.' },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:6.8D.i', cites: [3, 4, 5],
      stem: 'What is the controlling idea of "The Return of the Texas Bison"?',
      choices: [
        'Rescued by pioneer Mary Ann Goodnight, the Texas Southern Plains bison survived near-extinction and now thrive as a genetically unique herd at Caprock Canyons State Park.',
        ['Commercial hunting in the nineteenth century improved agricultural pastures in the Texas Panhandle.', 'Commercial hunting caused the devastating slaughter of the herds.'],
        ['Yellowstone bison were relocated to Texas in 1997 to replace lost herds.', 'The Caprock bison are native southern survivors, not Yellowstone transplants.'],
        ['American bison migration routes followed modern interstate highways.', 'Modern highways often followed ancient animal paths, but this is not the main point.'],
      ],
      answer: 0,
      explain: 'The article focuses on how the Goodnights saved the southern herd from extinction, leading to the genetically unique Texas State Bison Herd at Caprock Canyons.',
    }),
    mcq({
      standard: 'rla:6.7D', cites: [1, 3, 4], passage: 1,
      stem: 'In "Dust on the Caprock," how does the historical setting influence the characters\' reaction to seeing the bison?',
      choices: [
        'Because wild herds had been wiped out years earlier, seeing living bison feels like witnessing a legendary, vanished world come back to life.',
        ['The characters are terrified that the bison will trample their wooden dugout.', 'The characters watch in quiet awe, not terror.'],
        ['Caleb\'s father prepares his rifle to hunt the herd for meat.', 'The father respects the Goodnights\' conservation efforts and watches peacefully.'],
        ['Caleb runs to telephone the county sheriff.', 'Telephones were not available in pioneer dugouts on the caprock.'],
      ],
      answer: 0,
      explain: 'Because the great herds had disappeared before Caleb was born, seeing living bison evokes awe and wonder as if ghosts from an ancient era had returned.',
    }),
    twoq({
      standard: 'rla:6.5H', cites: [3], passage: 0,
      a: {
        prompt: 'Part A: How does the fictional story "Dust on the Caprock" complement the informational account in "The Return of the Texas Bison"?',
        choices: [
          'It provides a personal, emotional perspective of what it felt like for pioneer settlers to witness the surviving Goodnight herd.',
          ['It contradicts the historical facts about Mary Ann Goodnight presented in the article.', 'The story directly confirms Mary Ann Goodnight\'s role in protecting the calves.'],
          ['It proves that Charles Goodnight was solely interested in commercial meat production.', 'Both texts portray the Goodnights as visionary conservationists.'],
          ['It explains the scientific genetic testing carried out at Caprock Canyons in 1997.', 'The genetic testing is described in the article, not the story.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which statement from "Dust on the Caprock" best reflects the historical fact stated in paragraph 3 of the article?',
        choices: [
          ['"At first, he thought it was a prairie twister spinning across the caprock." (paragraph 1)', 'This is Caleb\'s initial sensory observation.'],
          ['"The lead bull reached the spring pool first." (paragraph 5)', 'This describes animal behavior at the water.'],
          '"They belong to Mrs. Goodnight\'s herd... She and Charlie caught them calves years back when the hide hunters swept through." (paragraph 7)',
          ['"As the herd ambled back into the shadowed draws..." (paragraph 8)', 'This describes the herd leaving at twilight.'],
        ],
        answer: 2,
      },
      explain: 'The story dramatizes the emotional reality of seeing the surviving animals, while Caleb\'s father specifically references the Goodnights rescuing calves during the hide hunts (paragraph 7).',
    }),
    msq({
      standard: 'rla:6.5H', passage: 0,
      stem: 'Which **two** ideas are emphasized in **both** selections?',
      choices: [
        'The destruction of the southern bison herds brought the species dangerously close to total extinction.',
        ['Bison were domesticated and trained to pull pioneer farm plows.', 'Bison were wild animals, never trained as farm work animals.'],
        'The foresight and compassion of Mary Ann Goodnight were essential to saving the southern herd.',
        ['Modern tourists must stay inside vehicles when visiting Caprock Canyons.', 'This modern visitor rule is not in the story.'],
        ['Bison herds preferred living in thick pine forests rather than open plains.', 'Both selections place the bison in grasslands and canyon country.'],
      ],
      answers: [0, 2],
      explain: 'Both texts emphasize the catastrophic slaughter that nearly wiped out the herds, and both honor Mary Ann Goodnight for rescuing the orphan calves that preserved the herd.',
    }),
    mcq({
      standard: 'rla:6.5E', cites: [1, 5], passage: 0,
      stem: 'In paragraph 1 of "The Return of the Texas Bison," how did bison contribute to the health of the prairie ecosystem?',
      choices: [
        'Their grazing encouraged plant diversity, and their wallowing created pools that provided water for migrating birds.',
        ['They built tall earthen dams that prevented rivers from flowing into the Gulf of Mexico.', 'Beavers build dams, not bison.'],
        ['They consumed all the grass, leaving bare desert dirt behind.', 'Their grazing stimulated healthy plant regrowth.'],
        ['They protected pioneer crops from grasshopper swarms.', 'The text describes wild prairie ecology before settlement.'],
      ],
      answer: 0,
      explain: 'Paragraph 1 details how bison grazing stimulated wildflower diversity, their wallowing created bird water-holes, and their trails crossed the continent.',
    }),
    mcq({
      standard: 'rla:6.7A', cites: [7], passage: 1,
      stem: 'In "Dust on the Caprock," what does the bison herd symbolize to Caleb\'s father?',
      choices: [
        ['An expensive nuisance that ruined good cattle pasture.', 'This was the opinion of critics, which Caleb\'s father rejects.'],
        'The enduring, resilient spirit of the Texas plains, alive and unbroken despite hardship.',
        ['The danger of living in an isolated sod dugout.', 'The herd brings wonder and inspiration, not fear.'],
        ['The superiority of modern machinery over nature.', 'The father admires the natural majesty of the herd.'],
      ],
      answer: 1,
      explain: 'Caleb\'s father remarks: "That\'s the true spirit of this land, alive and unbroken," symbolizing resilience and endurance.',
    }),
        mcq({
      standard: 'rla:6.5H', passage: 0,
      stem: 'What new understanding about the American bison emerges from reading BOTH selections together?',
      choices: [
        'The survival of the southern plains bison required courageous personal intervention in the past and rigorous scientific preservation in the present.',
        ['Bison were completely replaced by domesticated cattle throughout Texas.', 'Both selections show that pure bison survived and continue to roam.'],
        ['Pioneer settlers were uninterested in preserving native wildlife.', 'The Goodnights and Caleb\'s family showed deep reverence and care.'],
        ['Bison herds preferred living in dense mountain forests rather than plains.', 'Both texts set the bison on the open caprock and plains.'],
      ],
      answer: 0,
      explain: 'Combining the historical fiction with the modern scientific article shows how individual pioneer rescues in the 1870s laid the foundation for modern state conservation today.',
    }),
    mcq({
      standard: 'rla:6.6C', cites: [1, 3], passage: 1,
      stem: 'Which sensory detail from "Dust on the Caprock" best conveys the immense physical power of the approaching herd?',
      choices: [
        'The ground beneath Caleb\'s bare feet hummed with a rhythmic, thunderous vibration.',
        ['The afternoon sun painted the canyon in violet and amber.', 'This describes color in the sky, not physical power.'],
        ['Caleb\'s father wore a weathered straw hat.', 'This describes his clothing.'],
        ['A hawk circled silently in the thermals overhead.', 'This is not in the text.'],
      ],
      answer: 0,
      explain: 'Feeling the earth hum and vibrate under bare feet powerfully conveys the mass, momentum, and physical power of fifty heavy bison running across the caprock.',
    }),
  ],
});
