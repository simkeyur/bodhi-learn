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
        ['Students should stop eating fresh fruit in the cafeteria.', 'The speaker wants students to compost leftover fruit, not stop eating it.'],
        'Oak Creek Elementary should start a composting program.',
        ['The school district must hire commercial landscape crews.', 'The speaker advocates a student-run program, not hiring commercial companies.'],
        ['Every student should bring a personal trash can from home.', 'Personal trash cans are never suggested.'],
      ],
      answer: 1,
      explain: 'Paragraph 1 clearly states the central claim: "We should start a student-led cafeteria composting program."',
    }),
    mcq({
      standard: 'rla:4.9E.ii', cites: [4],
      stem: 'Which scientific fact from paragraph 4 does the speaker use to prove that landfill food waste is harmful?',
      choices: [
        ['"Last year, my grandfather showed me his compost bin in Waco during my visit."', 'This is a personal family story from paragraph 2.'],
        ['"One bucket will hold fruit peels, bread crusts, and leftover vegetable pieces."', 'This describes bucket setup in paragraph 3.'],
        '"Trapped food produces methane. Methane is a gas that warms the earth."',
        ['"A team of fourth-grade Compost Captains can check the buckets each day at lunch."', 'This explains student volunteer roles in paragraph 3.'],
      ],
      answer: 2,
      explain: 'Paragraph 4 explains that buried food waste produces methane gas, which warms the earth.',
    }),
    mcq({
      standard: 'rla:4.9E.iii',
      stem: 'Who is the primary intended audience for this persuasive speech?',
      choices: [
        'Fellow students at Oak Creek Elementary.',
        ['City council members who vote on local taxes.', 'The speech is addressed directly to "Fellow students" in the cafeteria.'],
        ['Farmers who drive large tractors in West Texas.', 'The context is an elementary school lunchroom.'],
        ['Garbage truck drivers who collect neighborhood trash.', 'The speech addresses the students creating cafeteria waste.'],
      ],
      answer: 0,
      explain: 'The greeting "Fellow students" and references to "your lunch tray" show the speaker is talking to classmates.',
    }),
    mcq({
      standard: 'rla:4.10G', cites: [2],
      stem: 'Why does the speaker include the personal story about visiting grandfather\'s garden in paragraph 2?',
      choices: [
        ['To explain how much money fresh cherry tomatoes cost at grocery stores.', 'Prices in stores are not mentioned.'],
        'To show how old food scraps turn into rich soil that feeds plants.',
        ['To argue that grandfathers understand science better than teachers.', 'The story shows the composting process in action, not a contest with teachers.'],
        ['To complain that watering watermelon plants took too much hard work.', 'The speaker describes the results with admiration.'],
      ],
      answer: 1,
      explain: 'Sharing how scraps turned into dark soil that grew sweet tomatoes provides real proof that composting works.',
    }),
    mcq({
      standard: 'rla:4.10F', cites: [1, 5],
      stem: 'How does the speaker\'s enthusiastic language ("garden gold") contribute to the voice of the speech?',
      choices: [
        ['It makes the speaker seem bored and tired of the project.', 'The speaker is energetic and committed.'],
        ['It gives the impression of an angry student scolding others.', 'The speaker invites and inspires classmates rather than scolding them.'],
        ['It makes the composting plan sound far too difficult to do.', 'The voice emphasizes that composting is simple and rewarding.'],
        'It creates an upbeat tone that inspires peers to act.',
      ],
      answer: 3,
      explain: 'Enthusiastic words like "garden gold" create an inspiring and lively voice that motivates listeners.',
    }),
    msq({
      standard: 'rla:4.6F', cites: [3, 4],
      stem: 'Which **two** conclusions can the reader reasonably draw about composting based on paragraphs 3 and 4?',
      choices: [
        'Composting works best with fresh air so worms and bugs can help.',
        'Composting helps the environment and provides plant food.',
        ['Cooked meat and plastic containers should be thrown into compost bins.', 'Paragraph 3 specifies only fruit and vegetable scraps, apple cores, and bread crusts.'],
        ['Food scraps break down faster when sealed inside airtight plastic garbage bags.', 'Paragraph 4 explains that trapped rotting food creates methane.'],
        ['Only high school students have the skills to handle compost bins.', 'Fourth graders can easily serve as Compost Captains.'],
      ],
      answers: [0, 1],
      explain: 'Paragraph 4 explains that fresh air allows worms and beetles to produce healthy plant food, preventing landfill methane while feeding gardens.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [1],
      stem: 'Which detail from paragraph 1 shows the large amount of food waste produced at the school?',
      choices: [
        'The cafeteria tosses out seventy-five pounds of scraps daily.',
        ['Hundreds of students eat their lunch in the cafeteria every day.', 'The number of students eating does not show how much food is wasted.'],
        ['Students throw away plastic forks and paper napkins after meals.', 'Trash items like plastic forks are not mentioned in paragraph 1.'],
        ['Many students leave whole carrot sticks and apple cores on trays.', 'Leaving food explains what is left over, not the total amount.'],
      ],
      answer: 0,
      explain: 'Paragraph 1 emphasizes that seventy-five pounds of food scraps are thrown away each day at the school.',
    }),
    mcq({
      standard: 'rla:4.9E.ii', cites: [5],
      stem: 'Which fact from paragraph 5 does the speaker use to convince students that composting provides a direct school benefit?',
      choices: [
        ['Students should talk to their principal about green buckets.', 'This is an action step, not a direct garden benefit.'],
        ['Texas landfills will continue to hold large mounds of garbage.', 'Landfills holding garbage is an outside environmental concern.'],
        'Compost provides free plant fertilizer for campus beds.',
        ['Turning cafeteria food scraps into garden gold requires teamwork.', 'This is a figurative concluding statement, not a factual school benefit.'],
      ],
      answer: 2,
      explain: 'Paragraph 5 points out that composting produces free fertilizer that feeds the school\'s own campus vegetable beds.',
    }),
  ],
});
