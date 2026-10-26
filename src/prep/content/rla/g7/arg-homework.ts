// Grade 7 argumentative: Later School Start Times for Adolescents.
import { makeSet, mcq, twoq } from '../author.ts';

export const ARG_HOMEWORK = makeSet({
  id: 'g7-arg-homework',
  grade: 7,
  kind: 'reading',
  title: 'Rethinking the Morning Bell: The Case for Later School Start Times',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g7-arg-homework-p',
    title: 'Rethinking the Morning Bell: The Case for Later School Start Times',
    genre: 'argumentative',
    blocks: [
      { kind: 'p', text: 'At six o\'clock on a chilly weekday morning, alarm clocks blare across thousands of Texas households, forcing middle school students out of bed long before natural sunrise. Stumbling through breakfast in a groggy fog, teenagers board school buses in pitch-black darkness, arriving at homeroom desks exhausted before their first academic lesson begins. While generations of school boards have treated early morning start times as an immutable tradition, mounting scientific evidence proves that early bells inflict severe damage on adolescent neurological development, academic achievement, and emotional well-being.' },
      { kind: 'p', text: 'The biological reality of the adolescent sleep cycle is rooted in neurobiology, not laziness. During puberty, teenagers experience a documented biological shift in their circadian rhythm known to pediatricians as the "sleep phase delay." The brain\'s pineal gland delays the release of melatonin—the hormone responsible for inducing sleepiness—by approximately two hours compared to younger children and mature adults. Consequently, asking a thirteen-year-old student to fall asleep soundly at nine o\'clock at night is biologically equivalent to asking an adult to sleep at seven o\'clock in the evening. Teenagers are hardwired to fall asleep around eleven o\'clock and wake naturally at eight.' },
      { kind: 'p', text: 'The academic consequences of chronic adolescent sleep deprivation are staggering. When middle school students are compelled to wake at 6:00 a.m., they routinely miss the crucial rapid eye movement (REM) sleep stage that occurs primarily during the final two hours of an eight-to-ten-hour sleep window. REM sleep is the cognitive engine of memory consolidation, mathematical problem-solving, and emotional regulation. Sleep-deprived students struggle to retain vocabulary, demonstrate slower cognitive reaction times during examinations, and experience heightened rates of daytime anxiety and depression.' },
      { kind: 'p', text: 'Opponents of adjusting school schedules frequently argue that shifting the first bell to 8:30 a.m. would disrupt yellow bus transportation logistics and interfere with after-school athletics. Skeptics claim that elementary and secondary routes cannot be reconfigured without bankrupting municipal district budgets. Furthermore, critics worry that later dismissals would reduce daylight hours for sports practices, requiring costly stadium floodlights or shortened competition seasons.' },
      { kind: 'p', text: 'However, these logistical objections crumble when evaluated against real-world data from districts that have modernized their schedules. In Seattle, Washington, public schools shifted secondary start times from 7:50 a.m. to 8:45 a.m. Comprehensive university studies revealed that students gained an average of thirty-four minutes of sleep per night, resulting in a 4.5 percent median increase in student grade point averages and a dramatic decrease in first-period absenteeism. Rather than harming athletic programs, coaches reported that well-rested athletes suffered fewer sports-related injuries and demonstrated sharper tactical reaction times.' },
      { kind: 'p', text: 'Some traditionalists commit the false dilemma fallacy by asserting that school districts must choose between maintaining fiscal responsibility or catering to tired teenagers. In reality, school districts exist fundamentally to foster learning and protect student health, not to preserve outdated transportation convenience. Staggering bus routes tiered by neighborhood rather than age bracket allows districts to optimize fleet efficiency while ensuring every student arrives rested and alert.' },
      { kind: 'p', text: 'The American Academy of Pediatrics, the Centers for Disease Control and Prevention, and the American Medical Association have united in issuing a clear policy mandate: middle and high schools should start no earlier than 8:30 a.m. By aligning school schedules with biological science rather than outmoded industrial-era customs, our Texas school districts can restore student vitality, improve standardized test scores, and foster a generation of healthier, more resilient adolescent learners.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.8E.i', cites: [1, 7],
      stem: 'What is the author\'s primary claim in the selection?',
      choices: [
        ['Middle school students should be assigned fewer homework assignments to ensure they sleep eight hours.', 'Homework quantity is not the author\'s primary claim.'],
        'Middle schools should shift start times to 8:30 a.m. or later to align with adolescent biology, enhancing academic performance, mental health, and physical safety.',
        ['High schools should eliminate competitive athletic sports to allow students to study in the afternoon.', 'The author demonstrates that athletics succeed with later schedules.'],
        ['School districts should purchase smaller electric buses to reduce municipal fuel costs.', 'Bus logistics are an operational detail, not the central thesis.'],
      ],
      answer: 1,
      explain: 'The primary claim across the text is that middle schools must transition to later morning start times (8:30 a.m. or later) to match adolescent biological sleep rhythms.',
    }),
    mcq({
      standard: 'rla:7.8E.ii', cites: [2],
      stem: 'How does the author use biological evidence in paragraph 2 to adapt the argument for school board members and parents?',
      choices: [
        'By explaining that the delay in melatonin release is a neurological puberty shift rather than personal laziness, the author dismantles the misconception that tired teens lack willpower.',
        ['By proving that teenagers require less sleep than elementary school children.', 'The text proves teenagers require 8–10 hours of sleep.'],
        ['By demonstrating that drinking warm milk at night resets the circadian clock instantly.', 'Dietary remedies like warm milk are not discussed.'],
        ['By showing that alarm clocks emit harmful acoustic frequencies that damage the eardrum.', 'Alarm clocks cause waking, but acoustic damage is not argued.'],
      ],
      answer: 0,
      explain: 'The author targets skeptical adults by citing pediatric neuroscience (sleep phase delay, pineal melatonin secretion) to prove teenage sleepiness is biological, not behavioral laziness.',
    }),
    mcq({
      standard: 'rla:7.8E.iii', cites: [4, 5],
      stem: 'Which counterargument does the author address in paragraph 4, and how does paragraph 5 refute it?',
      choices: [
        ['Opponents argue that later starts cause teachers to resign; paragraph 5 proves teacher salaries increase.', 'Teacher salaries and resignations are not the focus of paragraph 4.'],
        'Opponents claim later bells disrupt bus schedules and athletic programs; paragraph 5 refutes this with Seattle data showing higher grades, lower absenteeism, and fewer athletic injuries.',
        ['Opponents claim students will stay up until 2:00 a.m.; paragraph 5 shows students turn off electronic devices at 8:00 p.m.', 'The Seattle study focused on total sleep gained, not early device shut-off.'],
        ['Opponents argue that early bells prepare students for factory jobs; paragraph 5 argues factories are obsolete.', 'Factory preparation is not the refutation provided in paragraph 5.'],
      ],
      answer: 1,
      explain: 'Paragraph 4 outlines concerns about yellow bus logistics and sports practices; paragraph 5 uses the Seattle study to demonstrate improved academic scores and athletic health.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [3],
      a: {
        prompt: 'Part A: What can the reader infer about the relationship between sleep architecture and cognitive learning?',
        choices: [
          'REM sleep serves an indispensable biological function in consolidating memory and regulating emotional equilibrium in developing adolescent brains.',
          ['Deep sleep stages only occur during daytime naps after school.', 'REM sleep occurs predominantly during the final two hours of an 8–10 hour night sleep cycle.'],
          ['Cognitive retention is completely unaffected by waking early as long as students drink water.', 'The text explicitly states sleep deprivation impairs memory and test performance.'],
          ['Students who wake at 6:00 a.m. develop stronger mathematical abilities through early morning discipline.', 'The text notes early waking impairs mathematical problem-solving.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation from paragraph 3 best supports the answer to Part A?',
        choices: [
          ['"The academic consequences of chronic adolescent sleep deprivation are staggering."', 'This introduces the severity, but does not detail the cognitive function.'],
          '"REM sleep is the cognitive engine of memory consolidation, mathematical problem-solving, and emotional regulation."',
          ['"When middle school students are compelled to wake at 6:00 a.m..."', 'This describes the schedule, not the neurological function.'],
          ['"...experience heightened rates of daytime anxiety and depression."', 'This lists negative symptoms, whereas the quotation in choice B defines the cognitive engine.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 3 explicitly identifies REM sleep as the biological foundation for consolidating memory, solving complex problems, and maintaining emotional balance.',
    }),
    mcq({
      standard: 'rla:7.9G', cites: [6],
      stem: 'In paragraph 6, why does the author identify the "false dilemma fallacy" used by traditionalists?',
      choices: [
        ['To praise school boards for creating multiple alternative bus routes.', 'The author criticizes traditionalists for creating a false binary choice.'],
        ['To convince students that economic budgets are completely unimportant in public education.', 'The author argues budgets can be managed smartly through tiered scheduling.'],
        'To expose the flawed assumption that schools must sacrifice student health in order to maintain affordable transportation budgets, showing that both goals can be achieved.',
        ['To argue that middle schools should eliminate yellow school buses entirely.', 'The author recommends staggering and optimizing bus fleets, not eliminating them.'],
      ],
      answer: 2,
      explain: 'The author exposes the false dilemma (either fiscal prudence or rested students) to demonstrate that tiered bus routing can protect budgets while supporting student health.',
    }),
    mcq({
      standard: 'rla:7.5G', cites: [7],
      stem: 'Based on paragraph 7, which medical organizations endorse mandating secondary school start times no earlier than 8:30 a.m.?',
      choices: [
        'The American Academy of Pediatrics, the Centers for Disease Control and Prevention, and the American Medical Association.',
        ['The International Olympic Committee and the National Football League.', 'Sports leagues are not medical policy organizations.'],
        ['The Texas Highway Patrol and the National Transportation Safety Board.', 'These are transportation safety agencies, not the medical groups cited.'],
        ['The United Nations Educational, Scientific and Cultural Organization.', 'UNESCO is not cited in paragraph 7.'],
      ],
      answer: 0,
      explain: 'Paragraph 7 specifically cites the AAP, the CDC, and the AMA as the authoritative medical coalition recommending the 8:30 a.m. threshold.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [2, 3, 5],
      stem: 'Which statement provides an objective summary of the scientific and academic case for later school bells?',
      choices: [
        'Because adolescent puberty naturally delays melatonin release by two hours, early start times deprive teens of critical REM sleep needed for memory and emotional health, whereas later schedules yield higher grades and better health.',
        ['Parents across Texas should demand that schools start at 10:00 a.m. so teenagers can play video games late at night.', 'The recommended time is 8:30 a.m., based on biological health, not video gaming.'],
        ['School districts that shift schedules invariably spend millions of dollars buying extra yellow buses and building sports stadiums.', 'The text notes bus tiers optimize fleets without bankrupting districts.'],
        ['High school students in Seattle stopped attending sports practices because later start times left no daylight.', 'Athletes experienced fewer injuries and remained competitive in Seattle.'],
      ],
      answer: 0,
      explain: 'This choice objectively summarizes the circadian phase shift, the cognitive value of REM sleep, and the documented academic benefits demonstrated by later start schedules.',
    }),
  ],
});
