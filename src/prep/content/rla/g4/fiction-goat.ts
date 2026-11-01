// Grade 4 fiction: an original story. Questions cover plot elements, character interactions,
// words in context, setting, theme, text evidence, and inferences.

import { makeSet, mcq, msq, twoq } from '../author.ts';

export const FICTION_GOAT = makeSet({
  id: 'g4-fiction-goat',
  grade: 4,
  kind: 'reading',
  title: 'The Blue Ribbon Goat',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g4-fiction-goat-p',
    title: 'The Blue Ribbon Goat',
    genre: 'fiction',
    blocks: [
      { kind: 'p', text: 'Ten-year-old Mateo stood outside the animal barn at the county fair. He held a wire brush in his hand. Inside the wooden pen stood Barnaby, his Boer goat. Mateo had brushed Barnaby\'s white coat until it shined like clean cloth. But the goat was refusing to move.' },
      { kind: 'p', text: '"He knows it is his turn in the ring," said his sister Sofia. She leaned over the wooden railing. "Last year my calf did the same thing before judging. She planted all four feet and acted like she was stuck to the ground."' },
      { kind: 'p', text: '"The judge is calling our class right now," Mateo said softly. "If I cannot lead him into the ring in two minutes, we will be out of the contest. I have practiced walking him every morning since March."' },
      { kind: 'p', text: 'Barnaby lowered his head. He was a good eater, but right now he seemed scared. Loud voices came over the speakers. Colorful flags fluttered from the metal roof.' },
      { kind: 'p', text: 'Mateo pulled on the leather halter. But Barnaby dug his feet into the wood shavings. Pulling harder only made the goat lean back. Mateo took a slow breath. Getting upset would not help. He could not drag a heavy goat across the barn.' },
      { kind: 'p', text: 'Then Mateo remembered what his grandfather always said at their Texas ranch: *A stubborn goat follows food, not force.*' },
      { kind: 'p', text: 'Mateo reached into his pocket. He pulled out a small handful of green alfalfa pellets. He placed two pellets in his palm. He held his open hand near Barnaby\'s black nose. Barnaby sniffed the air with curiosity. He stretched his neck forward, ate the pellets, and took one tentative step.' },
      { kind: 'p', text: '"That is it," Sofia whispered with a smile. "Keep him looking at you, not the crowd."' },
      { kind: 'p', text: 'Mateo stepped backward out of the pen. He dropped one pellet every few feet on the floor. Wanting the tasty treat, Barnaby trotted smoothly behind him. They walked out of the barn and into the bright dirt ring. The announcer called, "Entry number forty-two, enter the ring!"' },
      { kind: 'p', text: 'In the show ring, Mateo held Barnaby\'s head high. He placed the goat\'s feet neatly on the dirt. He looked the judge in the eye. Barnaby stood still, calm and proud. Ten minutes later, the judge pinned a blue ribbon on Mateo\'s shirt. Mateo patted Barnaby\'s back. The goat gently bumped Mateo\'s hand, looking for one last treat.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.8C', cites: [3, 9],
      stem: 'Which event marks the climax of the story?',
      choices: [
        'Mateo lures Barnaby out of the pen with alfalfa pellets just before the contest deadline.',
        ['Mateo brushes Barnaby\'s white coat inside the wooden pen before the judging begins.', 'Brushing the goat occurs at the start of the story during exposition and preparation.'],
        ['Sofia leans over the railing to tell a story about how her calf froze in place last year.', 'Sofia sharing her memory provides encouragement during rising action, not the climax.'],
        ['The county fair judge pins a blue ribbon onto Mateo\'s shirt pocket after the round.', 'Receiving the blue ribbon is the resolution that follows after the goats are judged.'],
      ],
      answer: 0,
      explain: 'The climax is the turning point of greatest tension. Mateo is about to be disqualified when he solves the problem by coaxing Barnaby into the arena.',
    }),
    twoq({
      standard: 'rla:4.8B', cites: [1, 5, 10],
      a: {
        prompt: 'Part A: How does Mateo change from the beginning of the story to the end?',
        choices: [
          'He transforms from feeling anxious and uncertain into a poised, confident showman.',
          ['He starts out bored by the competition and ends up wishing he had raised a calf.', 'Mateo was dedicated and worked hard for months, not bored.'],
          ['He begins by following Sofia\'s guidance and ends by ignoring his grandfather\'s advice.', 'Mateo values advice from both his sister and grandfather to solve his problem.'],
          ['He feels angry with Barnaby at first and decides never to enter another county fair.', 'Mateo overcomes his worry with calm patience and celebrates their blue ribbon together.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation best supports the answer to Part A?',
        choices: [
          ['"Inside the wooden pen stood Barnaby, his Boer goat."', 'This sentence from paragraph 1 describes the animal in the pen at the start.'],
          ['"Pulling harder only made the goat lean back."', 'This sentence from paragraph 5 describes the physical struggle when Barnaby balked.'],
          '"He placed the goat\'s feet neatly on the dirt. He looked the judge in the eye."',
          ['"The goat gently bumped Mateo\'s hand, looking for one last treat."', 'This sentence describes Barnaby\'s playful behavior rather than Mateo\'s earned confidence.'],
        ],
        answer: 2,
      },
      explain: 'Mateo starts worried about disqualification. In paragraph 10, he stands with head high and looks the judge in the eye, demonstrating earned confidence.',
    }),
    mcq({
      standard: 'rla:4.3B', cites: [7],
      stem: 'Read this sentence from paragraph 7: "He stretched his neck forward, ate the pellets, and took one tentative step." What does the word **tentative** mean in this context?',
      choices: [
        ['clumsy and uncoordinated', 'The goat took a careful step forward rather than moving in an uncoordinated manner.'],
        'cautious and hesitant',
        ['playful and energetic', 'Barnaby was cautious and nervous, not playing with lots of energy.'],
        ['aggressive and stubborn', 'Eating the treat and stepping forward showed willingness rather than stubborn aggression.'],
      ],
      answer: 1,
      explain: 'Barnaby was suspicious earlier. His first step forward while sniffing the food is cautious and hesitant.',
    }),
    mcq({
      standard: 'rla:4.8D', cites: [4],
      stem: 'How does the setting influence Barnaby\'s behavior in paragraph 4?',
      choices: [
        ['The chilly autumn draft blowing through the barn makes Barnaby feel sluggish and sleepy.', 'Barnaby balks because of noise and visual movement, not cold drafts.'],
        ['The scent of unfamiliar farm animals in nearby pens makes Barnaby attempt to break through the gate.', 'Barnaby digs his hooves in and leans backward rather than trying to break through the gate.'],
        ['The dusty dirt in the show ring makes Barnaby sneeze and refuse to walk across the floor.', 'Barnaby refuses to move while still inside his pen, before reaching the show ring.'],
        'The loud blaring loudspeakers and fluttering overhead flags make him feel frightened and freeze in place.',
      ],
      answer: 3,
      explain: 'Paragraph 4 explains that Barnaby is scared by loud voices over the speakers and flags fluttering from the roof, causing him to freeze.',
    }),
    msq({
      standard: 'rla:4.8A',
      stem: 'Which **two** themes are developed in the story?',
      choices: [
        'Patience and gentle understanding are often more effective than using brute physical force.',
        ['Older siblings always have the exact right solution for every unexpected problem.', 'Sofia gave moral support, but Mateo remembered his grandfather\'s rule to solve the dilemma.'],
        'Remembering wise words from experienced mentors can help guide people through difficult challenges.',
        ['Livestock shows are far too chaotic and noisy for young animals to participate safely.', 'The story shows animals can succeed in competitions when handled with patient understanding.'],
        ['Training farm animals requires harsh discipline rather than rewarding good behavior.', 'Pulling with force failed, while patience and food treats succeeded.'],
      ],
      answers: [0, 2],
      explain: 'Mateo realizes pulling harder fails, while understanding what the animal needs succeeds. He also recalls his grandfather\'s advice, which provides the solution.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [5, 6],
      stem: 'What can the reader infer about Mateo\'s grandfather from paragraphs 5 and 6?',
      choices: [
        'He has spent many years observing animal behavior and understands how livestock think.',
        ['He served as an official livestock judge at the county fair for decades.', 'The passage mentions his ranch wisdom, not that he worked as a fair judge.'],
        ['He warned Mateo that Boer goats are too stubborn to ever win ribbons in competition.', 'Grandfather\'s advice taught how to lead goats successfully rather than discouraging Mateo.'],
        ['He preferred training beef calves and horses rather than raising show goats.', 'The passage gives his advice about goats without comparing different livestock species.'],
      ],
      answer: 0,
      explain: 'Grandfather\'s rule reflects seasoned knowledge gained from years of working with ranch animals.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [3],
      stem: 'Which quotation from paragraph 3 shows that Mateo dedicated significant time to preparing for the fair?',
      choices: [
        ['"The judge is calling our class right now," Mateo said softly.', 'This sentence reports the announcer\'s call rather than describing preparation.'],
        '"I have practiced walking him every morning since March."',
        ['"If I cannot lead him into the ring in two minutes, we will be out of the contest."', 'This sentence explains the urgency and time limit rather than previous training.'],
        ['"She planted all four feet and acted like she was stuck to the ground."', 'This quotation from paragraph 2 describes Sofia\'s calf from the previous year.'],
      ],
      answer: 1,
      explain: 'Practicing every morning for months demonstrates consistent dedication and personal preparation for the show.',
    }),
  ],
});
