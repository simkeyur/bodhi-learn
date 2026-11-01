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
      { kind: 'p', text: 'Fellow students, look at your lunch tray today. When you finish eating your sandwich, what happens to that red apple core? What happens to your banana peel or carrot sticks? Like many kids in our cafeteria, you probably toss everything into a giant trash bin. Every single day, Oak Creek Elementary throws away roughly seventy-five pounds of food scraps. It is time for our school to stop throwing food away. We should start a student-led cafeteria composting program.' },
      { kind: 'p', text: 'Last year, my grandfather showed me his compost bin in Waco. We dumped watermelon rinds, dry leaves, and coffee grounds into a wooden box. Three months later, the food scraps had turned into rich, dark soil. It smelled like fresh earth after a cool rain. My grandfather shoveled the dark soil into his garden. It helped grow the sweetest cherry tomatoes I have ever tasted in my life. The tomato plants grew tall and strong.' },
      { kind: 'p', text: 'Composting at school is very simple. It does not take much time or hard work. Instead of tossing all garbage into one can, we can set up two green buckets. We can place them near the tray return line. One bucket will hold fruit peels, bread crusts, and vegetable pieces. A team of fourth-grade Compost Captains can check the buckets each day at lunch. Then they can carry them outside to wooden bins near our science garden.' },
      { kind: 'p', text: 'According to the Environmental Protection Agency, food waste makes up more than twenty percent of landfill trash. When food rots under piles of plastic bags, it cannot get air. Trapped food produces methane. Methane is a gas that warms the earth. But when food breaks down with fresh air in a compost bin, small worms and beetles help out. They chew through the scraps. They turn them into natural food for plants.' },
      { kind: 'p', text: 'Starting this project now will keep thousands of pounds of trash out of Texas landfills each year. It also gives our school free fertilizer to feed our campus vegetable beds. Doing this teaches every student how to protect our home planet. Talk to your teachers and our principal about green buckets. Let us work together to turn lunch scraps into garden gold!' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.9E.i', cites: [1],
      stem: 'What is the speaker\'s central claim in the speech?',
      choices: [
        ['Students should stop eating fresh apples and carrots during lunchtime in the cafeteria.', 'The speaker wants students to compost leftover scraps, not avoid eating fresh fruit.'],
        'Oak Creek Elementary should establish a student-led cafeteria composting program to reduce food waste.',
        ['The school board should hire commercial landscaping crews to haul all cafeteria trash to private farms.', 'The proposal calls for student volunteers and on-campus bins rather than outside commercial crews.'],
        ['Each classroom teacher should be responsible for sorting and emptying student food trays after lunch.', 'Student volunteers called Compost Captains would handle the collection rather than teachers.'],
      ],
      answer: 1,
      explain: 'Paragraph 1 clearly states the central claim: "We should start a student-led cafeteria composting program."',
    }),
    mcq({
      standard: 'rla:4.9E.ii', cites: [4],
      stem: 'Which scientific fact from paragraph 4 does the speaker use to prove that landfill food waste is harmful?',
      choices: [
        ['"Last year, my grandfather showed me his compost bin in Waco."', 'This sentence from paragraph 2 introduces a personal family story, not scientific evidence about landfills.'],
        ['"One bucket will hold fruit peels, bread crusts, and vegetable pieces."', 'This sentence from paragraph 3 describes sorting scraps into buckets, not environmental damage.'],
        '"Trapped food produces methane. Methane is a gas that warms the earth."',
        ['"A team of fourth-grade Compost Captains can check the buckets each day at lunch."', 'This sentence explains student volunteer roles rather than providing scientific evidence of pollution.'],
      ],
      answer: 2,
      explain: 'Paragraph 4 explains that buried food waste produces methane gas, which warms the earth.',
    }),
    mcq({
      standard: 'rla:4.9E.iii',
      stem: 'Who is the primary intended audience for this persuasive speech?',
      choices: [
        'Fellow students and classmates who eat lunch at Oak Creek Elementary School.',
        ['City council members who vote on municipal solid waste disposal contracts.', 'The speaker addresses classmates about their cafeteria habits rather than city council members.'],
        ['Agricultural farmers who operate large commercial tractors across North Texas.', 'The speech concerns school food scraps and campus garden beds, not commercial farming operations.'],
        ['Garbage truck drivers who collect residential neighborhood trash bins.', 'The speaker appeals to the students who throw away apple cores, not municipal sanitation drivers.'],
      ],
      answer: 0,
      explain: 'The greeting "Fellow students" and references to "your lunch tray" show the speaker is talking to classmates.',
    }),
    mcq({
      standard: 'rla:4.10G', cites: [2],
      stem: 'Why does the speaker include the personal anecdote about grandfather\'s garden in paragraph 2?',
      choices: [
        ['To explain the financial cost of purchasing fresh cherry tomatoes from regional supermarket produce aisles.', 'The story illustrates the natural decomposition process and its benefits for growing tomatoes, not store prices.'],
        'To demonstrate firsthand how decomposed food scraps transform into nutrient-rich soil that helps plants flourish.',
        ['To argue that grandfather\'s farming methods in Waco are superior to the science curriculum taught by teachers.', 'The anecdote provides evidence that composting works rather than criticizing classroom teachers.'],
        ['To persuade students that watermelon rinds and coffee grounds should be eaten as afternoon snacks.', 'Watermelon rinds and coffee grounds are compost ingredients, not snacks for students.'],
      ],
      answer: 1,
      explain: 'Sharing how scraps turned into dark soil that grew sweet tomatoes provides real proof that composting works.',
    }),
    mcq({
      standard: 'rla:4.10F', cites: [1, 5],
      stem: 'How does the speaker\'s enthusiastic language ("garden gold") contribute to the voice of the speech?',
      choices: [
        ['It gives the impression of a frustrated student scolding peers for being careless with cafeteria garbage.', 'The speaker uses welcoming, motivating language rather than angry scolding.'],
        ['It makes the speaker seem bored and disinterested in whether the campus garden project succeeds.', 'The speaker demonstrates deep personal enthusiasm for improving the school environment.'],
        ['It makes the composting process sound far too difficult and complicated for elementary students to manage.', 'The speaker explains that using two green buckets makes composting straightforward and easy.'],
        'It creates an energetic, optimistic tone that inspires classmates to participate in positive environmental action.',
      ],
      answer: 3,
      explain: 'Enthusiastic words like "garden gold" create an inspiring and lively voice that motivates listeners.',
    }),
    msq({
      standard: 'rla:4.6F', cites: [3, 4],
      stem: 'Which **two** conclusions can the reader reasonably draw about composting based on paragraphs 3 and 4?',
      choices: [
        'Composting requires exposure to fresh air so beneficial insects and microorganisms can break down plant matter.',
        'Composting food scraps reduces harmful landfill methane while simultaneously providing natural plant fertilizer.',
        ['All cafeteria waste including plastic cutlery and polystyrene trays should be tossed into compost buckets.', 'Paragraph 3 specifies that only biodegradable food scraps belong in the buckets, not plastics or cutlery.'],
        ['Food scraps decompose much faster when tightly sealed inside airtight plastic garbage bags.', 'Trapping food in airtight bags prevents aerobic decomposition and generates harmful methane gas.'],
        ['Only adult custodians have the necessary technical training to manage outdoor compost bins.', 'The speaker explicitly proposes that fourth-grade student captains oversee the buckets and transport them.'],
      ],
      answers: [0, 1],
      explain: 'Paragraph 4 explains that fresh air allows worms and beetles to produce healthy plant food, preventing landfill methane while feeding gardens.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [1],
      stem: 'Which detail from paragraph 1 emphasizes the large volume of food waste generated at the school?',
      choices: [
        'Oak Creek Elementary throws away roughly seventy-five pounds of food scraps every single day.',
        ['Hundreds of students carry plastic lunch trays through the cafeteria line each morning.', 'Mentioning student numbers describes cafeteria traffic rather than quantifying food waste.'],
        ['Students toss their used paper napkins and empty beverage cartons into large trash bins.', 'Describing napkins and cartons mentions general paper trash rather than measuring food scraps.'],
        ['Many students leave partially eaten sandwiches and carrot sticks on their trays.', 'Listing types of leftovers describes what is uneaten rather than providing the specific daily weight.'],
      ],
      answer: 0,
      explain: 'Paragraph 1 emphasizes that seventy-five pounds of food scraps are thrown away each day at the school.',
    }),
    mcq({
      standard: 'rla:4.9E.ii', cites: [5],
      stem: 'Which fact from paragraph 5 does the speaker use to prove that composting offers a direct benefit to the school?',
      choices: [
        ['Students can schedule meetings with the principal to request green plastic buckets.', 'Asking the principal for buckets is a procedural step rather than a tangible garden benefit.'],
        ['Landfills across Texas will continue to receive thousands of pounds of household waste.', 'Keeping trash out of landfills is an external environmental benefit, not a direct campus garden resource.'],
        'It provides free natural fertilizer that can enrich the campus vegetable garden beds.',
        ['Turning lunch leftovers into garden gold requires daily dedication from every classroom.', 'The phrase "garden gold" is a figurative metaphor rather than a statement of factual fertilizer benefits.'],
      ],
      answer: 2,
      explain: 'Paragraph 5 points out that composting produces free fertilizer that feeds the school\'s own campus vegetable beds.',
    }),
  ],
});
