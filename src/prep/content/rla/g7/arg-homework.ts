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
      { kind: 'p', text: 'At six o\'clock on a chilly morning, alarm clocks ring across thousands of Texas homes. Middle school students climb out of bed in the dark long before sunrise. Groggy and tired, teenagers stumble through breakfast, shoulder heavy backpacks, and wait at cold street corners. They board yellow buses in pitch-black darkness, arriving at homeroom desks exhausted before their first lesson begins. Many rest their heads on desks, struggling to stay awake through morning announcements. For years, school boards have treated early bells as an unbroken habit. But science shows that early start times harm teenage brain growth, grades, and health.' },
      { kind: 'p', text: 'The sleep needs of teenagers come from biology, not laziness. During puberty, young bodies undergo a natural shift in their daily body clock. Doctors call this change the sleep phase delay. The brain delays releasing melatonin, the hormone that causes sleepiness, by about two hours compared to younger children and adults. Asking a thirteen-year-old to fall asleep soundly at nine o\'clock at night is like asking an adult to sleep at seven in the evening. Most teens are wired to fall asleep near eleven and wake around eight. Fighting this natural rhythm leads to chronic exhaustion.' },
      { kind: 'p', text: 'Losing sleep carries heavy costs in the classroom. When middle school students wake at 6:00 a.m., they miss the final hours of an eight-to-ten-hour rest window. This last window is when rapid eye movement, or REM sleep, takes place. REM sleep is the engine of memory and problem-solving in the brain. Students who lose this sleep struggle to recall vocabulary, react more slowly on tests, and feel higher stress and sadness during the school day.' },
      { kind: 'p', text: 'People who oppose later schedules worry about practical problems. They argue that moving the first bell to 8:30 a.m. would scramble yellow bus routes and harm after-school sports. They fear that changing bus runs will cost too much money. Working parents also worry about matching their own morning commutes with later school drop-offs for different grade levels. Others worry that later dismissals will leave less daylight for afternoon athletic practices.' },
      { kind: 'p', text: 'However, real numbers show that these fears are unfounded. In Seattle, public schools moved secondary start times from 7:50 a.m. to 8:45 a.m. University researchers found that students gained an average of thirty-four minutes of sleep each night. Student grades showed a 4.5 percent median gain, while morning absences dropped sharply. Teachers reported that students were far more alert during first-period lessons. Far from hurting sports, coaches noted that well-rested athletes suffered fewer injuries and played with sharper focus.' },
      { kind: 'p', text: 'Some critics present a false choice: they claim districts must choose between keeping costs low or helping tired students. In truth, schools exist to foster learning and protect health, not to preserve outdated bus habits. Districts can stagger bus runs by neighborhood to run clean fleets while making sure every student arrives alert and ready to learn.' },
      { kind: 'p', text: 'Leading medical groups agree. The American Academy of Pediatrics, the Centers for Disease Control and Prevention, and the American Medical Association all recommend that middle and high schools start at 8:30 a.m. or later. By matching school schedules with modern science, our districts can restore student energy and build healthier, more successful learners. Later bell times offer a proven change that pays big dividends in student safety and success. Our students deserve schedules that support their learning.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.8E.i', cites: [1, 7],
      stem: 'What is the author\'s primary claim in the selection?',
      choices: [
        ['Middle school students should be assigned fewer daily homework packets.', 'Homework volume is not the central claim of the article.'],
        'Middle schools should start at 8:30 a.m. to fit adolescent biology.',
        ['High schools should eliminate athletic sports to permit afternoon study.', 'The author notes that athletics remain successful under later start times.'],
        ['School districts should purchase electric buses to lower fuel expenses.', 'Bus fleet operations are logistical details rather than the thesis.'],
      ],
      answer: 1,
      explain: 'The primary claim is that middle schools should transition to start times of 8:30 a.m. or later to align with adolescent biological sleep cycles.',
    }),
    mcq({
      standard: 'rla:7.8E.ii', cites: [2],
      stem: 'How does the author use biological evidence in paragraph 2 to support the claim?',
      choices: [
        'By showing puberty delays melatonin, proving tired teens are not lazy.',
        ['By proving that teenagers need far less sleep than elementary school children.', 'The text confirms teens require 8–10 hours of nightly rest.'],
        ['By demonstrating that drinking warm milk at night resets the body clock fast.', 'Dietary remedies are never mentioned in the text.'],
        ['By arguing that early alarm clocks emit sound waves that damage inner ear drums.', 'Acoustic damage from alarm clocks is not argued.'],
      ],
      answer: 0,
      explain: 'The author explains the neurological delay in melatonin release to show that adolescent sleep cycles are biological realities rather than behavioral laziness.',
    }),
    mcq({
      standard: 'rla:7.8E.iii', cites: [4, 5],
      stem: 'Which counterargument does the author address in paragraph 4, and how is it refuted?',
      choices: [
        ['Opponents claim teachers will resign; data proves teacher pay rises.', 'Teacher resignations and pay are not discussed.'],
        'Critics fear bus and sports disruption; Seattle data shows gains.',
        ['Critics argue teens stay awake late; data shows teens unplug early.', 'The Seattle research measured total sleep gained rather than evening screen hours.'],
        ['Opponents argue early bells prepare kids for obsolete factory shifts.', 'Factory job readiness is not the counterargument addressed.'],
      ],
      answer: 1,
      explain: 'Paragraph 4 addresses logistical worries about buses and athletics; paragraph 5 refutes them with empirical data from Seattle showing higher grades and fewer sports injuries.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [3],
      a: {
        prompt: 'Part A: What can the reader infer about the importance of REM sleep?',
        choices: [
          'REM sleep is vital for memory consolidation and emotional health.',
          ['Deep sleep stages happen only during short afternoon naps after class.', 'REM sleep occurs predominantly during the final hours of night rest.'],
          ['Waking early has no effect on memory as long as students drink water.', 'The passage explains sleep deprivation directly hurts recall and testing.'],
          ['Waking at dawn develops superior mathematics skills through discipline.', 'Early waking impairs problem-solving abilities.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which quotation from paragraph 3 best supports the answer to Part A?',
        choices: [
          ['"When middle school students wake at 6:00 a.m., they miss the final hours of an eight-to-ten-hour rest window." (paragraph 3)', 'This explains waking early rather than the neurological function of REM sleep.'],
          '"REM sleep is the engine of memory and problem-solving in the brain." (paragraph 3)',
          ['"Losing sleep carries heavy costs in the classroom." (paragraph 3)', 'This is a general introductory statement.'],
          ['"Students who lose this sleep struggle to recall vocabulary, react more slowly on tests..." (paragraph 3)', 'This lists negative symptoms rather than defining the biological engine.'],
        ],
        answer: 1,
      },
      explain: 'Paragraph 3 explicitly identifies REM sleep as the cognitive engine for consolidating memory, solving complex problems, and regulating emotions.',
    }),
    mcq({
      standard: 'rla:7.9G', cites: [6],
      stem: 'In paragraph 6, why does the author identify the "false choice" used by critics?',
      choices: [
        ['To praise school boards for designing alternative neighborhood bus routes.', 'The author criticizes traditionalists for framing a false trade-off.'],
        ['To convince students that economic budgets are completely unimportant.', 'The author shows budgets can be managed smartly with staggered routes.'],
        'To show schools can protect student health while managing budgets.',
        ['To argue that middle schools should eliminate yellow school buses entirely.', 'The author recommends staggering and optimizing routes, not eliminating buses.'],
      ],
      answer: 2,
      explain: 'The author exposes the false dilemma (either fiscal prudence or rested students) to show that staggered bus tiers can protect budgets and support student health.',
    }),
    mcq({
      standard: 'rla:7.5G', cites: [7],
      stem: 'Based on paragraph 7, which medical groups recommend schools start at 8:30 a.m. or later?',
      choices: [
        'The American Academy of Pediatrics, the CDC, and the AMA.',
        ['The International Olympic Committee and the National Football League.', 'Athletic leagues are not medical policy organizations.'],
        ['The Texas Highway Patrol and the National Transportation Safety Board.', 'These are transportation safety agencies, not medical groups.'],
        ['The United Nations Educational, Scientific and Cultural Organization.', 'UNESCO is not cited in the text.'],
      ],
      answer: 0,
      explain: 'Paragraph 7 specifically identifies the AAP, the CDC, and the AMA as the medical organizations calling for start times of 8:30 a.m. or later.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [2, 3, 5],
      stem: 'Which statement provides an objective summary of the case for later school start times?',
      choices: [
        'Teen biology delays sleep, so later bells improve learning and student health.',
        ['Parents want schools to start at 10:00 a.m. so teens can play video games at night.', 'The recommendation is 8:30 a.m. based on biology, not video gaming.'],
        ['Districts that shift schedules spend millions buying extra buses and building stadiums.', 'Staggered bus routes optimize existing fleets without adding immense costs.'],
        ['High school students in Seattle stopped attending sports because daylight ran short.', 'Seattle athletes continued sports and suffered fewer injuries.'],
      ],
      answer: 0,
      explain: 'This concise choice accurately and objectively summarizes the biological delay in adolescent sleep cycles and the academic and health benefits of later bell times.',
    }),
  ],
});
