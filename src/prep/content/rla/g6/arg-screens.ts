// Grade 6 argumentative: Smartphone policies in middle school.
import { makeSet, mcq, msq, twoq } from '../author.ts';

export const ARG_SCREENS = makeSet({
  id: 'g6-arg-screens',
  grade: 6,
  kind: 'reading',
  title: 'Put the Phones Away: Reclaiming Focus in Middle School',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g6-arg-screens-p',
    title: 'Put the Phones Away: Reclaiming Focus in Middle School',
    genre: 'argumentative',
    blocks: [
      { kind: 'p', text: 'Walk through the hallways of an average American middle school during passing period, and you will witness a familiar scene: heads tilted downward, fingers frantically tapping illuminated glass, and students bumping into lockers because their attention is glued to social media feeds. Smartphones have undoubtedly transformed modern communication, putting the sum of human knowledge in the palm of our hands. However, during the instructional school day, these pocket-sized computers have become overwhelming engines of distraction. To cultivate academic success and genuine social connection, middle schools should implement a strict "bell-to-bell" ban on personal smartphone use.' },
      { kind: 'p', text: 'The most compelling reason for restricting phones is their devastating impact on classroom concentration. Human brains, particularly developing adolescent brains, are not built to multitask. When a phone buzzes with a notification, a student\'s train of thought is instantly derailed. A landmark 2022 study by researchers at the London School of Economics evaluated ninety-one schools that banned mobile devices; the researchers found that student test scores increased significantly, with the greatest gains achieved by struggling and disadvantaged students. When notifications cease competing for cognitive bandwidth, students listen more attentively, participate in discussions, and retain complex concepts.' },
      { kind: 'p', text: 'Beyond academic performance, excessive phone access during the school day harms adolescent mental health and real-world social development. Lunch and recess should be vibrant opportunities for students to play games, tell jokes, and practice interpersonal empathy. When students retreat into individual digital bubbles during breaks, meaningful conversation evaporates. Furthermore, having continuous access to social media feeds fuels cyberbullying and intense social comparison. A survey conducted by the Pew Research Center revealed that nearly half of all teens feel overwhelmed by the constant pressure to respond immediately to online messages during school hours.' },
      { kind: 'p', text: 'Opponents of phone restrictions often argue that smartphones are essential for family safety and digital learning. "What if there is an emergency?" anxious parents frequently ask. While parental concern is understandable, schools have well-established landlines and administrative protocols for contacting families instantly in genuine emergencies. In fact, safety experts point out that hundreds of students simultaneously texting and calling during a school lockdown can jam cellular towers, overwhelm first responders, and spread dangerous misinformation.' },
      { kind: 'p', text: 'Others claim that teachers should incorporate smartphones into daily assignments. However, most modern school districts already supply dedicated, school-monitored laptops or tablets that provide educational internet access without social media notifications or messaging apps. Relying on personal devices introduces inequality, as students with older or cheaper phones feel embarrassed beside peers with the latest flagship devices.' },
      { kind: 'p', text: 'Some critics commit a sweeping logical fallacy by insisting that "kids will always sneak their phones anyway, so rules are completely useless." This defeatist logic ignores how clear, consistent school policies actually work. When schools require phones to be silenced and placed inside lockers from morning arrival until dismissal, the temptation vanishes. Educators report that after an initial week of adjustment, students themselves express relief at having a six-hour sanctuary from online peer drama.' },
      { kind: 'p', text: 'Middle school is a pivotal season for intellectual growth, lasting friendship, and character development. When teenagers are freed from constant digital notifications, they rediscover the joy of lively face-to-face conversations, collaborative experiments, and deep, sustained reading. By establishing bell-to-bell phone-free environments, school districts across Texas can restore classrooms as sanctuaries of focused inquiry, giving students the priceless gift of uninterrupted focus, richer camaraderie, and the mental freedom to be truly present in their own education.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.8E.i', cites: [1],
      stem: 'What is the author\'s primary claim in the selection?',
      choices: [
        ['Smartphones should be permanently banned for all teenagers under the age of eighteen.', 'The author proposes a restriction during school hours, not a total ban everywhere.'],
        'Middle schools should enact a bell-to-bell ban on personal smartphones to improve academic focus and social well-being.',
        ['Schools should purchase the newest smartphones for all students to prevent economic inequality.', 'The author suggests leaving phones in lockers, not buying new phones.'],
        ['Teachers should replace all printed textbooks with social media applications.', 'The author argues against social media during the school day.'],
      ],
      answer: 1,
      explain: 'In paragraph 1, the author directly states the claim: "To cultivate academic success and genuine social connection, middle schools should implement a strict \'bell-to-bell\' ban on personal smartphone use."',
    }),
    twoq({
      standard: 'rla:6.8E.ii', cites: [2],
      a: {
        prompt: 'Part A: What type of evidence does the author primarily use in paragraph 2 to support the claim?',
        choices: [
          'Empirical research and data from an academic study evaluating ninety-one schools.',
          ['A personal anecdote about the author losing a cell phone on a bus.', 'No personal anecdotes appear in paragraph 2.'],
          ['A quotation from a fictional movie about middle school.', 'The evidence comes from a formal university study, not fiction.'],
          ['A list of smartphone sales figures from commercial tech companies.', 'Sales figures are not discussed.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which fact from paragraph 2 best supports the answer to Part A?',
        choices: [
          ['"Walk through the hallways of an average American middle school during passing period..."', 'This is an introductory observation from paragraph 1.'],
          '"A landmark 2022 study by researchers at the London School of Economics evaluated ninety-one schools that banned mobile devices; the researchers found that student test scores increased significantly..."',
          ['"Smartphones have undoubtedly transformed modern communication..."', 'This concedes a positive feature of smartphones.'],
          ['"Lunch and recess should be vibrant opportunities for students to play games..."', 'This sentence comes from paragraph 3.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 2 provides objective, research-based evidence from the London School of Economics study showing that test scores rose across 91 schools when mobile devices were prohibited.',
    }),
    mcq({
      standard: 'rla:6.8E.iii', cites: [1, 4, 7],
      stem: 'Who is the intended audience for this persuasive argument?',
      choices: [
        'School board members, principals, parents, and educators considering school cell phone policies.',
        ['Smartphone manufacturers seeking to design new marketing campaigns.', 'The argument opposes phone use in school rather than selling devices.'],
        ['Elementary school students who do not yet own electronic devices.', 'The piece addresses middle school policies and adolescent development.'],
        ['Telecommunications engineers testing 5G cellular towers.', 'The focus is school culture and student learning, not network engineering.'],
      ],
      answer: 0,
      explain: 'The text is directed at the school community—administrators, teachers, and parents—who decide or influence campus rules regarding student electronic devices.',
    }),
    mcq({
      standard: 'rla:6.9G', cites: [6],
      stem: 'In paragraph 6, the author identifies a logical fallacy used by critics: "kids will always sneak their phones anyway, so rules are completely useless." Why is this argument flawed?',
      choices: [
        'It uses a defeatist sweeping generalization that assumes because an imperfect violation might happen, no beneficial rule should exist.',
        ['It relies on too many complex mathematical statistics to confuse readers.', 'The argument uses no statistics; it is a pessimistic assertion.'],
        ['It misquotes the United States Constitution regarding privacy.', 'The quote does not reference constitutional law.'],
        ['It pretends that cell phones have never been invented.', 'The argument recognizes phones but falsely claims rules are powerless.'],
      ],
      answer: 0,
      explain: 'The author exposes this faulty logic: arguing that because some students might break a rule, the rule shouldn\'t exist is a sweeping fallacy that ignores how structure establishes helpful norms.',
    }),
    msq({
      standard: 'rla:6.5F', cites: [3, 4],
      stem: 'Which **two** counterarguments does the author address in paragraphs 4 and 5?',
      choices: [
        'Parents worry they will be unable to contact their children during an emergency.',
        ['Students claim that phones improve their physical athletic abilities in gym class.', 'Physical education is not mentioned.'],
        'Some argue that personal phones are needed as classroom educational tools.',
        ['Cell phone companies threaten to sue school districts that restrict devices.', 'No legal threats from phone companies are mentioned.'],
        ['Teachers prefer grading homework on mobile phone text messages.', 'Teachers use school-provided platforms, not personal text messaging.'],
      ],
      answers: [0, 2],
      explain: 'In paragraphs 4 and 5, the author directly confronts the counterarguments that parents need direct emergency contact and that phones can serve as instructional tools.',
    }),
    mcq({
      standard: 'rla:6.6C', cites: [4],
      stem: 'Which evidence does the author provide to refute the claim that personal cell phones enhance school emergency safety in paragraph 4?',
      choices: [
        ['Cell phones emit loud ringtones that confuse security dogs.', 'Security dogs are not mentioned in paragraph 4.'],
        'Simultaneous calls and texts can jam cellular towers, hinder first responders, and spread dangerous rumors.',
        ['Lockdowns only occur when electricity is completely turned off.', 'Lockdowns occur for safety reasons regardless of electricity.'],
        ['Parents prefer receiving emails hours after an incident concludes.', 'Parents want timely updates through official channels.'],
      ],
      answer: 1,
      explain: 'Paragraph 4 cites safety experts who note that hundreds of people using cellular lines at once can overload towers and interfere with emergency responders.',
    }),
        mcq({
      standard: 'rla:6.8E.ii', cites: [3],
      stem: 'What survey evidence does the author provide in paragraph 3 to prove that constant phone access causes stress?',
      choices: [
        'A Pew Research Center survey revealed that nearly half of all teens feel overwhelmed by the pressure to respond instantly to messages during school hours.',
        ['A London university study showed that test scores doubled in one week.', 'The London study was in paragraph 2 and focused on test scores, not emotional stress.'],
        ['A local school survey showed that students prefer texting to playing games.', 'The author notes students retreat into digital bubbles, but the evidence is the Pew survey.'],
        ['A technology blog claimed that smartphones emit dangerous ultraviolet rays.', 'No ultraviolet claims appear in the text.'],
      ],
      answer: 0,
      explain: 'Paragraph 3 cites the Pew Research Center survey finding that nearly half of teens feel overwhelmed by constant messaging demands.',
    }),
    mcq({
      standard: 'rla:6.5G', cites: [2, 3],
      stem: 'Based on the details in paragraphs 2 and 3, which statement best evaluates how smartphones affect students during the school day?',
      choices: [
        ['Most students use their phones exclusively to complete homework assignments during lunch.', 'The text notes phones distract students from coursework rather than aiding homework completion.'],
        ['Cellular towers near schools frequently overheat due to heavy daytime network usage.', 'Network overload is mentioned during emergencies, not as the primary day-to-day effect on student learning.'],
        'Constant notifications fragment students\' attention, undermining both their academic comprehension and their emotional well-being.',
        ['Teachers prefer communicating with students through text messages rather than lectures.', 'The passage explains teachers struggle to maintain student focus against phone distractions.'],
      ],
      answer: 2,
      explain: 'Paragraphs 2 and 3 detail how buzzing phones disrupt learning retention and create persistent social anxiety, demonstrating that digital interruptions impair both academics and mental health.',
    }),
  ],
});
