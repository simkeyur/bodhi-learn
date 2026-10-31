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
      { kind: 'p', text: 'Walk through the halls of a middle school between classes. You see the same scene everywhere. Heads tilt down toward glowing screens. Fingers tap quickly on glass. Students bump into lockers because their eyes are glued to social media feeds. Smartphones can connect us to family members. They put facts at our fingertips in seconds. But during the school day, these pocket devices cause far too much distraction. Middle schools should ban personal phones from the first morning bell to the final afternoon bell. This simple change helps students focus on their lessons and build real friendships.' },
      { kind: 'p', text: 'The biggest reason to limit phones is that they hurt classroom focus. Young minds are not built to do two things at once. When a phone buzzes with an alert, a student\'s train of thought breaks instantly. In a 2015 study, researchers looked at ninety-one schools that banned mobile phones. The economists found that student test scores rose by a wide margin. The biggest gains went to students who had been struggling in class. When notifications stop competing for attention, students listen more carefully. They join in class discussions and remember what their teachers explain.' },
      { kind: 'p', text: 'Constant phone use also hurts friendships and mental health. Lunch and recess should be times for students to talk, laugh, and play games together. When students stare into private screens during every break, real conversations fade away. Being on social media all day can also lead to cyberbullying and online drama. Many students feel constant pressure to read and reply to messages right away. They feel this stress even while sitting in class. That steady stream of alerts creates anxiety when students should be relaxing with their peers.' },
      { kind: 'p', text: 'Some parents and students worry that phone bans make schools less safe. "What if there is an emergency?" family members often ask. That concern is easy to understand. However, schools already have landline phones and office plans to reach families right away. In addition, safety experts point out a serious risk that many people overlook. Hundreds of students may call and text at the same time during a drill or lockdown. When that happens, cellular networks get jammed. This makes it difficult for emergency workers to communicate. It can also spread false rumors across the community.' },
      { kind: 'p', text: 'Other people argue that teachers should let students use their own phones for class assignments. Yet most modern schools already provide laptops or tablets for schoolwork. These school devices give students access to the internet for class projects. They do this without messaging apps, games, or social media feeds. Relying on personal devices also causes unfair social pressure. Students with older or cheaper phones often feel embarrassed when classmates show off the newest models.' },
      { kind: 'p', text: 'Some critics claim that rules will never work because students will always find ways to sneak their phones into class. This defeatist argument is flawed. When schools establish clear, fair rules, students adapt and follow them. Phones should stay turned off and stored inside lockers all day. When that happens, the urge to check them fades quickly. Teachers report that after the first week, students themselves feel relieved. They enjoy having a predictable break from digital drama while they are at school.' },
      { kind: 'p', text: 'Middle school is an important time to learn, make lasting friends, and build strong habits for the future. When teenagers put their screens away, they rediscover the simple joy of talking face to face. They work together on science labs and read without interruption. Middle schools across Texas should create phone-free classrooms. Giving students six hours of quiet focus each day helps them learn more. It also helps them enjoy their time at school.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:6.8E.i', cites: [1],
      stem: 'What is the author\'s primary claim in the selection?',
      choices: [
        ['Schools should buy smartphones for all students to prevent social pressure.', 'The author proposes leaving personal phones in lockers, not buying devices.'],
        'Middle schools should ban personal phones during the day to improve focus.',
        ['Teachers should replace all textbooks with educational phone applications.', 'The author argues against phone use during instructional hours.'],
        ['Families should restrict all teenage screen use at home on the weekends.', 'The author focuses specifically on the school environment.'],
      ],
      answer: 1,
      explain: 'In paragraph 1, the author states the main claim: middle schools should ban personal phones from bell to bell to help students focus and build friendships.',
    }),
    twoq({
      standard: 'rla:6.8E.ii', cites: [2],
      a: {
        prompt: 'Part A: What type of evidence does the author primarily use in paragraph 2 to support the claim?',
        choices: [
          'Data from a study of ninety-one schools that restricted mobile devices.',
          ['A personal story about a student who lost a cell phone during passing period.', 'Paragraph 2 contains no personal stories.'],
          ['Quotes from parents describing how their children complete homework assignments.', 'Parent opinions are discussed in paragraph 4, not paragraph 2.'],
          ['A collection of sales records comparing different models of electronic devices.', 'Commercial sales figures are never discussed.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which sentence from paragraph 2 best supports the answer to Part A?',
        choices: [
          ['"When a phone buzzes with an alert, a student\'s train of thought breaks instantly during class."', 'This describes a common distraction, not the academic study.'],
          '"In a 2015 study, researchers looked at ninety-one schools that banned mobile phones."',
          ['"When notifications stop competing for attention, students listen much more carefully."', 'This explains a positive result rather than the study itself.'],
          ['"The biggest reason to limit phones is that they hurt classroom focus."', 'This is the opening topic sentence of paragraph 2.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 2 relies on empirical research from a 2015 study of ninety-one schools to demonstrate that banning mobile phones improved student test scores.',
    }),
    mcq({
      standard: 'rla:6.8E.iii', cites: [1, 4, 7],
      stem: 'Who is the intended audience for this argument?',
      choices: [
        'School leaders, teachers, and parents who decide campus cell phone policies.',
        ['Smartphone manufacturers who want to advertise new mobile devices to teenagers.', 'The argument opposes phone use in school rather than advertising products.'],
        ['Elementary students who are preparing to receive their first electronic devices.', 'The text addresses middle school rules and adolescent habits.'],
        ['Network engineers who are testing wireless communications during emergencies.', 'The focus is on school culture and learning, not network hardware.'],
      ],
      answer: 0,
      explain: 'The text is directed at administrators, educators, and families who establish or influence school rules on student electronic devices.',
    }),
    mcq({
      standard: 'rla:6.9G', cites: [6],
      stem: 'In paragraph 6, the author addresses the argument that students will always sneak phones into class. Why is this argument flawed?',
      choices: [
        'It assumes that because some students may break a rule, having no rule at all is better.',
        ['It relies on outdated statistics from schools that have never purchased electronic tablets.', 'The argument in paragraph 6 contains no statistical data.'],
        ['It overlooks the legal requirements that govern emergency communication systems in Texas.', 'Legal requirements are not the subject of paragraph 6.'],
        ['It claims that middle school students have no interest in using social media platforms.', 'The argument acknowledges that students want their phones.'],
      ],
      answer: 0,
      explain: 'The author shows that arguing against a rule simply because someone might violate it is faulty logic that ignores how consistent rules establish positive habits.',
    }),
    msq({
      standard: 'rla:6.5F', cites: [4, 5],
      stem: 'Which **two** counterarguments does the author address in paragraphs 4 and 5?',
      choices: [
        'Parents worry they cannot reach their children during an emergency.',
        ['Students argue that phones help them participate in physical education.', 'Physical education is never mentioned in the text.'],
        'Some argue that personal phones are needed for daily class assignments.',
        ['Teachers worry that school-provided laptops are too heavy to carry.', 'Device weight is not discussed.'],
        ['Cell phone companies claim that school rules violate federal privacy laws.', 'No legal claims by phone companies appear in the selection.'],
      ],
      answers: [0, 2],
      explain: 'Paragraph 4 addresses parental concerns about emergency contact, and paragraph 5 responds to the claim that personal phones are needed for schoolwork.',
    }),
    mcq({
      standard: 'rla:6.6C', cites: [4],
      stem: 'Which evidence does the author provide in paragraph 4 to refute the idea that personal phones keep schools safer?',
      choices: [
        ['Emergency workers prefer communicating through emails sent after an event ends.', 'Emergency workers need fast, clear communication during an event.'],
        'Hundreds of calls and texts can jam networks and slow down emergency workers.',
        ['School security alarms fail to operate whenever mobile devices remain powered on.', 'Security alarms are not affected by cell phones.'],
        ['Families usually ignore text alerts sent from private numbers during a lockdown.', 'Parents do respond to messages, which is why circuits get overloaded.'],
      ],
      answer: 1,
      explain: 'Paragraph 4 explains that simultaneous calls and texts during an emergency can overload cellular towers, interfering with first responders.',
    }),
    mcq({
      standard: 'rla:6.8E.ii', cites: [3],
      stem: 'What evidence does the author provide in paragraph 3 to show that continuous phone access causes stress?',
      choices: [
        ['Students refuse to eat lunch when they are separated from their mobile devices.', 'The passage does not claim students skip meals.'],
        ['Researchers found that students lose their phones during outdoor recess games.', 'Lost phones are not mentioned.'],
        'Students face constant pressure to read and reply to messages during the day.',
        ['Teachers spend significant classroom time helping students charge their batteries.', 'Battery charging is not discussed in the text.'],
      ],
      answer: 2,
      explain: 'Paragraph 3 notes that students feel continuous pressure to respond to texts immediately, creating anxiety during the school day.',
    }),
    mcq({
      standard: 'rla:6.5G', cites: [2, 3],
      stem: 'Based on paragraphs 2 and 3, which statement best explains how smartphones affect students during the school day?',
      choices: [
        'Frequent alerts break students\' concentration and create steady social anxiety.',
        ['Students spend their lunch periods completing homework assignments on their screens.', 'The text notes phones distract students rather than help them study.'],
        ['Mobile phone networks near schools regularly shut down because of daytime traffic.', 'Network congestion is mentioned during emergencies, not routine class periods.'],
        ['Teachers find it easier to grade assignments when students submit work through texts.', 'Teachers find phone distractions harmful to classroom learning.'],
      ],
      answer: 0,
      explain: 'Paragraphs 2 and 3 describe how alerts interrupt learning retention and feed social stress, harming both academics and well-being.',
    }),
  ],
});
