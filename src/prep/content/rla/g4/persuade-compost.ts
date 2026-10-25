// Grade 4 persuasive: a persuasive speech advocating for a school cafeteria composting program.
// Questions cover claim (4.9E.i), facts for argument (4.9E.ii), intended audience (4.9E.iii),
// voice (4.10F), anecdote (4.10G), inference (4.6F), and text evidence (4.7C).

import { makeSet, mcq, msq } from '../author.ts';

export const PERSUADE_COMPOST = makeSet({
  id: 'g4-persuade-compost',
  grade: 4,
  kind: 'reading',
  title: 'Turn Lunch Scraps into Garden Gold',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g4-persuade-compost-p',
    title: 'Turn Lunch Scraps into Garden Gold',
    genre: 'persuasive',
    blocks: [
      { kind: 'p', text: 'Fellow students, take a good look at your lunch tray today. When you finish eating your sandwich, what will you do with that half-eaten red apple, that leftover banana peel, and those leftover carrot sticks? Like hundreds of other kids in our cafeteria, you will probably scrape everything into a giant plastic trash can without thinking twice. Every single day, Oak Creek Elementary throws away roughly seventy-five pounds of perfectly good food scraps. It is time for our school to stop wasting organic waste and launch a student-led cafeteria composting program.' },
      { kind: 'p', text: 'Last year, my grandfather showed me the wonders of his backyard compost bin in Waco. We dumped watermelon rinds, dry autumn leaves, and coffee grounds into a wooden crate. Three months later, when he shoveled the bottom layer onto his garden soil, the rotten scraps had transformed into rich, crumbly black dirt smelling like fresh rain. That rich soil produced the biggest, sweetest cherry tomatoes I have ever tasted in my entire life.' },
      { kind: 'p', text: 'Composting at school is surprisingly simple and requires very little extra effort. Instead of dumping everything into one giant garbage bin, our cafeteria would set up two designated green buckets next to the dish return line. One bucket would collect fruit and vegetable scraps, apple cores, banana peels, and leftover bread crusts. A team of volunteer fourth-grade "Compost Captains" would take turns monitoring the sorting station during lunch and emptying the buckets daily into two outdoor wooden bins near our science garden.' },
      { kind: 'p', text: 'According to the Environmental Protection Agency, food waste makes up more than twenty percent of all municipal landfill trash. When organic food rots trapped beneath layers of plastic garbage, it produces methane, a powerful greenhouse gas that warms the earth\'s atmosphere. But when food scraps decompose with oxygen in an open compost bin, microscopic organisms, earthworms, and beetles break the material down into natural organic fertilizer.' },
      { kind: 'p', text: 'By establishing a composting system right now, our school can keep thousands of pounds of trash out of Texas landfills each year and create free, nutrient-dense fertilizer for our campus vegetable beds. Doing this teaches every student to be an active steward of our planet. Talk to your teachers, tell our principal that you want green compost buckets, and let us work together to turn our cafeteria scraps into garden gold!' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.9E.i', cites: [1],
      stem: 'What is the speaker\'s central claim in the speech?',
      choices: [
        ['Students should stop eating fresh fruit in the cafeteria.', 'The speaker wants students to compost leftover fruit, not stop eating it.'],
        'Oak Creek Elementary should start a student-led cafeteria composting program.',
        ['The school district must hire professional landscaping companies to care for gardens.', 'The speaker advocates a student-run program, not hiring commercial companies.'],
        ['Every student should bring a personal trash can from home.', 'Personal trash cans are never suggested.'],
      ],
      answer: 1,
      explain: 'Paragraph 1 clearly states the speaker\'s call to action: "It is time for our school to stop wasting organic waste and launch a student-led cafeteria composting program."',
    }),
    mcq({
      standard: 'rla:4.9E.ii', cites: [4],
      stem: 'Which scientific fact from paragraph 4 does the speaker use to prove that landfill food waste is harmful?',
      choices: [
        ['"Last year, my grandfather showed me the wonders of his backyard compost bin..."', 'This is a personal family anecdote from paragraph 2.'],
        ['"One bucket would collect fruit and vegetable scraps, apple cores, and bread crusts."', 'This describes bucket setup in paragraph 3.'],
        '"According to the Environmental Protection Agency, food waste makes up more than twenty percent of all municipal landfill trash. When organic food rots trapped beneath layers of plastic garbage, it produces methane..."',
        ['"A team of volunteer fourth-grade Compost Captains would empty the buckets daily..."', 'This explains student volunteer roles.'],
      ],
      answer: 2,
      explain: 'Paragraph 4 cites official EPA data and explains that buried food waste produces harmful methane gas, providing scientific support for composting.',
    }),
    mcq({
      standard: 'rla:4.9E.iii',
      stem: 'Who is the primary intended audience for this persuasive speech?',
      choices: [
        'Fellow elementary students and classmates at Oak Creek Elementary.',
        ['City council members voting on water taxes.', 'The speech is addressed directly to "Fellow students" in the cafeteria.'],
        ['Farmers selling tractors in West Texas.', 'The context is an elementary school lunchroom.'],
        ['Garbage truck drivers in Houston.', 'The speech addresses the students creating cafeteria waste.'],
      ],
      answer: 0,
      explain: 'The opening greeting ("Fellow students") and references to "your lunch tray" and "our cafeteria" show that the speaker is talking directly to fellow classmates.',
    }),
    mcq({
      standard: 'rla:4.10G', cites: [2],
      stem: 'Why does the speaker include the personal anecdote about visiting grandfather\'s garden in paragraph 2?',
      choices: [
        ['To explain how much money cherry tomatoes cost at the supermarket.', 'Prices at supermarkets are not mentioned.'],
        'To share a firsthand story that illustrates how food scraps turn into rich soil that helps plants grow.',
        ['To prove that grandfathers know more science than school teachers.', 'The story shows the composting process in action, not a contest with teachers.'],
        ['To complain that watering watermelon plants took too much time.', 'The speaker describes the results with admiration.'],
      ],
      answer: 1,
      explain: 'An anecdote is a brief personal story. Describing how watermelon rinds turned into dark soil that grew delicious tomatoes provides relatable evidence that composting works.',
    }),
    mcq({
      standard: 'rla:4.10F', cites: [1, 5],
      stem: 'How does the author\'s enthusiastic language ("garden gold," "ignite lifelong curiosity," "turn lunch scraps into garden gold") contribute to the voice of the speech?',
      choices: [
        ['It makes the speaker sound bored and disinterested in school projects.', 'The speaker is energetic and committed.'],
        'It creates an energetic, passionate, and inspiring tone that motivates peers to take action.',
        ['It gives the impression of an angry speaker scolding the audience.', 'The speaker invites and inspires classmates rather than scolding them.'],
        ['It makes the proposal sound complicated and impossible to achieve.', 'The voice emphasizes that composting is simple and rewarding.'],
      ],
      answer: 1,
      explain: 'Vivid, encouraging expressions like "garden gold" and calls to action give the speech a passionate, upbeat, and persuasive voice.',
    }),
    msq({
      standard: 'rla:4.6F', cites: [3, 4],
      stem: 'Which **two** conclusions can the reader reasonably draw about composting based on paragraphs 3 and 4?',
      choices: [
        'Composting requires oxygen so beneficial organisms like worms and beetles can thrive.',
        'Composting benefits both the environment and the school\'s vegetable garden.',
        ['Cooked meat and plastic containers should be thrown into compost bins.', 'Paragraph 3 specifies only fruit and vegetable scraps, apple cores, and bread crusts.'],
        ['Food scraps break down faster when sealed inside airtight plastic garbage bags.', 'Paragraph 4 explains that trapped rotting food creates methane.'],
        ['Only high school students have the skills to handle compost bins.', 'Fourth graders can easily serve as Compost Captains.'],
      ],
      answers: [0, 1],
      explain: 'Paragraph 4 explains that open-air decomposition allows worms and beetles to produce healthy fertilizer, preventing landfill methane while feeding school gardens.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [1],
      stem: 'Which detail from paragraph 1 demonstrates the large amount of waste currently produced at the school?',
      choices: [
        '"Every single day, Oak Creek Elementary throws away roughly seventy-five pounds of perfectly good food scraps."',
        ['"Composting is surprisingly simple."', 'This describes the ease of composting in paragraph 3.'],
        ['"Last year, my grandfather showed me the wonders of his backyard compost bin in Waco."', 'This is from the anecdote in paragraph 2.'],
        ['"Talk to your teachers, tell our principal that you want green compost buckets..."', 'This is a call to action in paragraph 5.'],
      ],
      answer: 0,
      explain: 'Citing the exact figure of seventy-five pounds of daily food waste provides concrete evidence of how much is thrown away.',
    }),
    mcq({
      standard: 'rla:4.9E.ii', cites: [5],
      stem: 'Which fact from paragraph 5 does the speaker use to convince students that composting provides a direct school benefit?',
      choices: [
        ['"Talk to your teachers, tell our principal that you want green compost buckets..."', 'This is an instruction to talk to staff, not a factual benefit.'],
        ['"Like hundreds of other kids in our cafeteria, you will probably scrape everything into a giant plastic trash can..."', 'This describes the waste problem from paragraph 1.'],
        'Composting produces free, nutrient-dense fertilizer that nourishes the campus vegetable beds.',
        ['"We dumped watermelon rinds, dry autumn leaves, and coffee grounds into a wooden crate."', 'This is from the grandfather anecdote in paragraph 2.'],
      ],
      answer: 2,
      explain: 'Paragraph 5 points out that the school gains free, high-nutrient fertilizer for its own garden beds, providing a practical reason to compost.',
    }),
  ],
});
