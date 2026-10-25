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
      { kind: 'p', text: 'Ten-year-old Mateo stood outside the warm animal barn at the county livestock show, clutching a wire brush in his sweaty hand. Inside the wooden pen stood Barnaby, his Boer goat. Mateo had brushed Barnaby\'s white coat until it gleamed like freshly washed linen, but the goat was stubbornly refusing to budge.' },
      { kind: 'p', text: '"He knows it\'s his turn in the ring," said Mateo\'s older sister, Sofia, leaning over the pen railing. "Last year my heifer did the exact same thing right before judging. She planted all four hooves and acted like she was cemented to the ground."' },
      { kind: 'p', text: '"The judge is calling class four right now," Mateo said, his voice trembling slightly. "If I can\'t lead him into the ring in two minutes, we\'ll be disqualified. I\'ve practiced walking him every single morning since March."' },
      { kind: 'p', text: 'Barnaby gave a low, defiant bleat and lowered his head. He was a champion eater, but right now he seemed suspicious of the loud announcements echoing over the loudspeakers and the rustling flags hanging from the metal rafters.' },
      { kind: 'p', text: 'Mateo tugged firmly on the leather show halter, but Barnaby dug his cloven hooves into the soft pine shavings. Pulling harder only made the goat lean backward. Mateo took a deep breath. Getting frustrated was not going to work, and neither was wrestling a seventy-pound goat.' },
      { kind: 'p', text: 'Then Mateo remembered what his grandfather always said at the ranch in Fredericksburg: *A stubborn goat follows his stomach, not your muscles.*' },
      { kind: 'p', text: 'Mateo reached into his denim vest pocket and pulled out a small handful of dried alfalfa pellets. He placed two pellets in his palm and held his hand a few inches in front of Barnaby\'s black nose. Barnaby\'s nostrils flared, twitching with keen curiosity. He stretched his neck forward, nibbled the pellets, and took one tentative step.' },
      { kind: 'p', text: '"That\'s it," Sofia whispered encouragement. "Keep him focused on you, not the crowd."' },
      { kind: 'p', text: 'Mateo stepped backward out of the pen, dropping one pellet every few feet. Enticed by the familiar treat, Barnaby trotted smoothly behind him, through the barn doors and straight into the bright dirt arena just as the announcer shouted, "Entry number forty-two, enter the ring!"' },
      { kind: 'p', text: 'In the show ring, Mateo held Barnaby\'s head high, squared his hooves cleanly on the packed dirt, and looked the judge directly in the eye. Barnaby stood perfectly poised, calm and alert. Ten minutes later, when the judge pinned a glossy blue ribbon to Mateo\'s shirt pocket, Mateo patted Barnaby\'s shoulder. The goat gently bumped Mateo\'s hand, searching for one last pellet.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:4.8C', cites: [3, 9],
      stem: 'Which event marks the climax of the story?',
      choices: [
        ['Mateo brushes Barnaby\'s coat in the barn.', 'This is rising action at the beginning of the story.'],
        ['Sofia tells Mateo about her heifer from last year.', 'This is helpful background conversation, not the turning point.'],
        'Mateo uses alfalfa pellets to coax Barnaby out of the pen and into the show ring just in time.',
        ['The judge pins a blue ribbon on Mateo\'s shirt.', 'This is the resolution that follows after the main problem is solved.'],
      ],
      answer: 2,
      explain: 'The climax is the turning point of greatest tension. Mateo is about to be disqualified when he solves the problem by coaxing Barnaby into the arena (paragraphs 3 and 9).',
    }),
    twoq({
      standard: 'rla:4.8B', cites: [1, 5, 10],
      a: {
        prompt: 'Part A: How does Mateo change from the beginning of the story to the end?',
        choices: [
          'He moves from feeling anxious and helpless to feeling confident and capable.',
          ['He starts out bored with the show and ends up wishing he had entered a heifer.', 'Mateo was never bored; he worked hard since March.'],
          ['He changes from listening to Sofia to ignoring her advice.', 'Sofia encouraged him throughout the event.'],
          ['He begins angry at Barnaby and ends up selling him to another farm.', 'Mateo remained caring and patted Barnaby proudly at the end.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which sentence from the story best supports the answer to Part A?',
        choices: [
          ['"Ten-year-old Mateo stood outside the warm animal barn at the county livestock show, clutching a wire brush in his sweaty hand." (paragraph 1)', 'This shows only his initial nervousness, not how he changed.'],
          ['"Getting frustrated was not going to work, and neither was wrestling a seventy-pound goat." (paragraph 5)', 'This shows him pausing to think, but does not show his final confidence.'],
          '"In the show ring, Mateo held Barnaby\'s head high, squared his hooves cleanly on the packed dirt, and looked the judge directly in the eye." (paragraph 10)',
          ['"The goat gently bumped Mateo\'s hand, searching for one last pellet." (paragraph 10)', 'This describes the goat\'s behavior, not Mateo\'s feelings.'],
        ],
        answer: 2,
      },
      explain: 'Mateo starts with a sweaty hand and trembling voice, worried about disqualification. By paragraph 10, he stands with head high and looks the judge in the eye, demonstrating earned confidence.',
    }),
    mcq({
      standard: 'rla:4.3B', cites: [7],
      stem: 'Read this sentence from paragraph 7. "He stretched his neck forward, nibbled the pellets, and took one tentative step." What does the word **tentative** mean in this context?',
      choices: [
        ['clumsy and loud', 'The goat took a careful step, not a clumsy one.'],
        'cautious and hesitant',
        ['angry and hurried', 'Barnaby was calming down, not hurried or angry.'],
        ['giant and leaping', 'A tentative step is small and unsure, not giant.'],
      ],
      answer: 1,
      explain: 'Barnaby was suspicious of the noise earlier. His first step forward while sniffing the food is cautious and hesitant before he decides it is safe.',
    }),
    mcq({
      standard: 'rla:4.8D', cites: [4],
      stem: 'How does the setting influence Barnaby\'s behavior in paragraph 4?',
      choices: [
        ['The chilly weather makes Barnaby sleepy and sluggish.', 'The story says the animal barn was warm.'],
        ['The smell of other animals makes Barnaby want to run away.', 'The text does not mention other animal smells frightening him.'],
        'The loud loudspeakers and rustling flags startle Barnaby and make him refuse to move.',
        ['The dirt arena is too slippery for Barnaby to walk on.', 'Barnaby was still in his pen on pine shavings.'],
      ],
      answer: 2,
      explain: 'Paragraph 4 explains that Barnaby is suspicious of the loud announcements echoing over loudspeakers and the rustling flags hanging overhead, causing him to freeze.',
    }),
    msq({
      standard: 'rla:4.8A',
      stem: 'Which **two** themes are developed in the story?',
      choices: [
        'Patience and understanding work better than force.',
        ['Older siblings always know the right answers.', 'Sofia shared her story, but Mateo solved the problem using his grandfather\'s advice.'],
        'Remembering wise advice can help solve difficult moments.',
        ['Livestock competitions are too noisy for animals.', 'The setting was noisy, but that is a detail rather than a broad theme.'],
        ['Goats should never be trained for competitions.', 'Barnaby won a blue ribbon when handled properly.'],
      ],
      answers: [0, 2],
      explain: 'Mateo realizes pulling harder fails, while understanding what the animal needs succeeds. He also recalls his grandfather\'s advice, which provides the solution.',
    }),
    mcq({
      standard: 'rla:4.6F', cites: [5, 6],
      stem: 'What can the reader infer about Mateo\'s grandfather based on paragraphs 5 and 6?',
      choices: [
        'He has extensive experience raising and handling ranch animals.',
        ['He was a judge at the county livestock show.', 'The text says he had a ranch in Fredericksburg, not that he was a judge.'],
        ['He told Mateo never to enter animal competitions.', 'He offered helpful animal advice, not discouraging words.'],
        ['He prefers horses over goats.', 'The text mentions his advice about goats.'],
      ],
      answer: 0,
      explain: 'Grandfather\'s practical rule ("A stubborn goat follows his stomach, not your muscles") reflects seasoned knowledge gained from years of working with ranch animals.',
    }),
    mcq({
      standard: 'rla:4.7C', cites: [3],
      stem: 'Which detail from paragraph 3 best shows that Mateo took his responsibility seriously?',
      choices: [
        ['"The judge is calling class four right now," Mateo said.', 'This reports the announcer\'s call.'],
        '"I\'ve practiced walking him every single morning since March."',
        ['Sofia leaned over the pen railing.', 'This describes Sofia\'s posture.'],
        ['Barnaby gave a low, defiant bleat.', 'This describes Barnaby\'s sound.'],
      ],
      answer: 1,
      explain: 'Practicing every single morning for months demonstrates consistent dedication and personal responsibility toward his animal.',
    }),
  ],
});
