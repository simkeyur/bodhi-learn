// Grade 4 paired set: two texts on Texas wildflowers.
// Selection 1: Informational article on Lady Bird Johnson and the Highway Beautification Act.
// Selection 2: Realistic fiction narrative about a girl planting bluebonnets with her grandfather.
// Questions cover central idea (4.9D.i), plot (4.8C), key ideas (4.6G), author's purpose (4.10A),
// synthesis across texts (4.6H - 3 questions), and text evidence (4.7C).

import { makeSet, mcq, msq } from '../author.ts';

export const PAIRED_WILDFLOWERS = makeSet({
  id: 'g4-paired-wildflowers',
  grade: 4,
  kind: 'reading',
  title: 'Texas Wildflowers: Beauty Along the Way',
  intro: 'Read the next two selections and answer the questions that follow.',
  passages: [
    {
      id: 'g4-paired-wildflowers-p1',
      title: 'Lady Bird Johnson\'s Blooming Legacy',
      genre: 'informational',
      blocks: [
        { kind: 'p', text: 'Every spring, Texas highways transform into spectacular ribbons of cobalt blue, bright red, and golden yellow. Millions of native wildflowers—including bluebonnets, Indian paintbrushes, and Mexican hats—carpet the roadsides from the Piney Woods to the Hill Country. While Texans today take these scenic drives for granted, these blooming roadsides exist thanks largely to the tireless vision of one remarkable woman: former First Lady Claudia "Lady Bird" Johnson.' },
        { kind: 'p', text: 'Growing up near Karnack in East Texas, Lady Bird developed an early love for the natural landscape while paddling canoes among cypress trees draped in Spanish moss. When she moved into the White House in the 1960s, she noticed that American highways were becoming cluttered with rusted junkyards, towering billboards, and barren asphalt. Lady Bird believed that natural beauty was essential for human spirits and mental health.' },
        { kind: 'p', text: 'She spearheaded the historic Highway Beautification Act of 1965, which encouraged states across the nation to plant native wildflowers and clear away roadside litter. Back in Texas, she later founded the National Wildflower Research Center in Austin (now the Lady Bird Johnson Wildflower Center). Lady Bird demonstrated that native plants do far more than look pretty: their deep roots conserve soil moisture, prevent severe erosion along steep highway banks, and provide vital pollen and nectar for bees and butterflies. Her green legacy continues to inspire millions of travelers every spring.' },
      ],
    },
    {
      id: 'g4-paired-wildflowers-p2',
      title: 'Planting Bluebonnets with Abuelo',
      genre: 'fiction',
      blocks: [
        { kind: 'p', text: 'Every October, when the scorching summer heat finally surrendered to crisp autumn breezes, Abuelo and ten-year-old Marisa walked along the fence line of his farm in Brenham. In his weathered hands, Abuelo carried a brown burlap sack filled with thousands of tiny, gravel-hard bluebonnet seeds that he had harvested by hand the previous summer.' },
        { kind: 'p', text: '"Remember the secret, Marisa," Abuelo said, handing her a wooden garden rake. "Bluebonnet seeds have a tough outer coat. You must scratch the soil surface with the rake, scatter the seeds thinly, and press them firmly into the dirt with your boots so the winter birds don\'t eat them."' },
        { kind: 'p', text: 'Marisa raked until her shoulders ached. She scattered the seeds across the bare soil and marched back and forth like a soldier, tamping down the earth. As they walked back to the porch for warm cinnamon tea, Marisa looked out at the brown, dusty ground. It looked dead and empty. "Are you completely certain they will really bloom in the spring, Abuelo?" she asked softly.' },
        { kind: 'p', text: 'Abuelo smiled and patted her shoulder. "Good things take patience, mi nieta. The rain and winter frosts will soften the hard seed coat while they sleep beneath the soil." Five months later, in late March, Marisa bounded out to the fence line. A breathtaking sea of deep blue lupines stood waving in the morning breeze, surrounded by buzzing bumblebees. Marisa knelt in the fragrant grass and whispered, "They woke up, Abuelo. They woke up."' },
      ],
    },
  ],
  items: [
    mcq({
      standard: 'rla:4.9D.i', cites: [1, 3],
      stem: 'What is the central idea of "Lady Bird Johnson\'s Blooming Legacy"?',
      choices: [
        ['Highways in the 1960s were cluttered with billboards and rusted junkyards.', 'This is a supporting problem from paragraph 2, not the main focus.'],
        'Lady Bird Johnson worked passionately to protect natural beauty and promote native wildflowers along highways and across the nation.',
        ['Spanish moss only grows on cypress trees in East Texas near Karnack.', 'This is a small background detail about her childhood.'],
        ['Texas roadsides only have yellow and red flowers in the spring.', 'The passage describes blue, red, and yellow wildflowers.'],
      ],
      answer: 1,
      explain: 'The article highlights Lady Bird Johnson\'s lifelong dedication to planting native wildflowers and cleaning up roadside landscapes.',
    }),
    mcq({
      standard: 'rla:4.8C', cites: [3, 4], passage: 1,
      stem: 'In "Planting Bluebonnets with Abuelo," what is the resolution of the story?',
      choices: [
        ['Marisa rakes the soil until her shoulders ache in October.', 'This is part of the rising action.'],
        ['Abuelo and Marisa drink cinnamon tea on the porch.', 'This is a quiet moment in the middle of the narrative.'],
        'In the spring, Marisa returns to the fence line to discover a stunning sea of blooming bluebonnets.',
        ['Winter birds eat all the seeds because the soil was too hard.', 'The seeds successfully survived and bloomed.'],
      ],
      answer: 2,
      explain: 'The resolution occurs in the spring when Marisa\'s patient efforts are rewarded by the spectacular sea of blooming bluebonnets in paragraph 4.',
    }),
    mcq({
      standard: 'rla:4.6G', cites: [3],
      stem: 'According to paragraph 3 of "Lady Bird Johnson\'s Blooming Legacy," what are **two** ecological benefits of native wildflowers?',
      choices: [
        ['They require daily chemical fertilizers and continuous garden watering.', 'Native wildflowers thrive naturally without chemicals.'],
        'They conserve moisture, prevent soil erosion, and provide essential food for pollinators like bees.',
        ['They grow faster when planted inside concrete pots indoors.', 'They grow along open roadsides and prairies.'],
        ['They replace the need for planting food crops in farm fields.', 'Their role is ecological preservation, not replacing crop agriculture.'],
      ],
      answer: 1,
      explain: 'Paragraph 3 notes that native plants conserve soil moisture, prevent erosion with deep roots, and supply vital nectar for bees and butterflies.',
    }),
    mcq({
      standard: 'rla:4.10A',
      stem: 'What was the author\'s primary purpose in writing "Lady Bird Johnson\'s Blooming Legacy"?',
      choices: [
        ['To entertain readers with a fictional tale about talking flowers.', 'The text is factual historical nonfiction.'],
        'To inform readers about how Lady Bird Johnson\'s efforts helped preserve and beautify Texas roadsides with native wildflowers.',
        ['To persuade readers to stop driving cars on Texas highways.', 'The article discusses highway beautification, not stopping car travel.'],
        ['To explain how to build a commercial billboard beside an interstate.', 'Lady Bird advocated removing billboards.'],
      ],
      answer: 1,
      explain: 'The author informs readers about the historical achievements and environmental vision of Lady Bird Johnson.',
    }),
    mcq({
      standard: 'rla:4.6H',
      stem: 'How do both selections develop the idea that wildflowers are valuable?',
      choices: [
        'Selection 1 shows their environmental and aesthetic value for the public, while Selection 2 shows their emotional value in connecting a family and fostering patience.',
        ['Both selections explain how farmers sell wildflower seeds to grocery stores for profit.', 'Neither text focuses on commercial profit.'],
        ['Both selections prove that wildflowers only grow when planted by highway construction crews.', 'Selection 2 shows planting by hand in a family garden.'],
        ['Both selections describe how difficult it is to remove weeds from roadsides.', 'Neither selection is about weed removal.'],
      ],
      answer: 0,
      explain: 'Selection 1 highlights public beauty and ecological benefits for nature, while Selection 2 highlights personal meaning, family bonding, and the reward of patience.',
    }),
    mcq({
      standard: 'rla:4.6H',
      stem: 'Which statement expresses a theme shared by both "Lady Bird Johnson\'s Blooming Legacy" and "Planting Bluebonnets with Abuelo"?',
      choices: [
        ['Caring for the natural world requires expensive machinery and government permits.', 'Both texts emphasize simple, hand-on, caring actions.'],
        'Nurturing and appreciating native plants enriches human life and leaves a lasting gift for the future.',
        ['Wildflower seeds should only be planted in the spring after the last frost.', 'Selection 2 explains bluebonnet seeds are planted in autumn.'],
        ['Modern highways have destroyed all native prairie flowers in Texas.', 'Both texts celebrate the enduring beauty of Texas wildflowers.'],
      ],
      answer: 1,
      explain: 'Both passages demonstrate that dedicating care to native wildflowers—whether on a national scale or in a family garden—creates beauty and joy that endures.',
    }),
    msq({
      standard: 'rla:4.6H',
      stem: 'Based on both selections, which **two** statements are supported by information in both texts?',
      choices: [
        'Bluebonnets and other native flowers are closely associated with Texas identity and landscapes.',
        'Human action and stewardship play an important role in helping wildflowers thrive.',
        ['Bluebonnet seeds must be kept warm inside greenhouse buildings all winter.', 'Selection 2 explains they need winter frosts outdoors to soften the seed coat.'],
        ['Lady Bird Johnson visited Abuelo\'s farm in Brenham to plant seeds.', 'The two texts describe separate real-world and fictional contexts.'],
        ['Wildflowers are harmful to honeybees and other garden insects.', 'Both texts note flowers provide nectar and attract pollinators.'],
      ],
      answers: [0, 1],
      explain: 'Both texts celebrate wildflowers as icons of Texas and illustrate how thoughtful human care (highway legislation, hand-planting) protects and expands their growth.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [1],
      stem: 'Which quotation from "Lady Bird Johnson\'s Blooming Legacy" best supports the idea that Texas wildflowers create an impressive visual display?',
      choices: [
        '"Every spring, Texas highways transform into spectacular ribbons of cobalt blue, bright red, and golden yellow."',
        ['"When she moved into the White House in the 1960s..." (paragraph 2)', 'This describes her moving to Washington.'],
        ['"She spearheaded the historic Highway Beautification Act of 1965..." (paragraph 3)', 'This describes legislation.'],
        ['"Growing up near Karnack in East Texas..." (paragraph 2)', 'This details her childhood hometown.'],
      ],
      answer: 0,
      explain: 'Describing highways as "spectacular ribbons of cobalt blue, bright red, and golden yellow" creates a striking, vivid image of the visual beauty.',
    }),
  ],
});
