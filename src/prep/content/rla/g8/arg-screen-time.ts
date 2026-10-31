// Grade 8 argumentative: Beyond the Single Sport: Why Early Specialization Harms Young Athletes
import { makeSet, mcq } from '../author.ts';

export const ARG_SCREEN_TIME = makeSet({
  id: 'g8-arg-screen-time',
  grade: 8,
  kind: 'reading',
  title: 'Beyond the Single Sport: Why Early Specialization Harms Young Athletes',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g8-arg-screen-time-p',
    title: 'Beyond the Single Sport: Why Early Specialization Harms Young Athletes',
    genre: 'argumentative',
    blocks: [
      { kind: 'p', text: 'On athletic fields across Texas, a big change has reshaped youth sports over the past twenty years. Many ten- and twelve-year-olds are told to pick one sport. They play it all twelve months of the year. Private travel clubs and select leagues promise that intense dedication leads to starting spots on high school teams and college athletic scholarships. Families spend thousands of dollars each year on private coaching, summer tournaments, and weekend road trips. Children spend their weekends traveling to distant cities instead of resting or playing with friends. While hard work has clear value, pushing children to focus on one sport too early does far more harm than good for growing bodies.' },
      { kind: 'p', text: 'The most urgent concern is physical health. Young bodies grow very quickly during middle school. Bones grow longer before muscles and tendons can fully catch up. When a young athlete repeats the exact same motion thousands of times each week, specific joints bear excessive stress. Doctors report that young baseball pitchers, gymnasts, and soccer players suffer frequent overuse injuries. Repetitive strain causes stress fractures, elbow ligament tears, and chronic knee pain. In contrast, playing multiple sports exposes the body to varied movements. Different sports build balanced strength across all major muscle groups.' },
      { kind: 'p', text: 'Supporters of single-sport training point to champions who began practicing one event as young children. They argue that mastering complex athletic skills requires thousands of hours of focused repetition before high school. According to this view, taking time off to play a different sport wastes precious training time. They claim that taking a break puts young players far behind their competition.' },
      { kind: 'p', text: 'This argument misinterprets how real athletic skill develops. Early repetition may produce quick wins in middle school, but it often limits long-term growth. Medical and sports surveys show that most college and professional athletes played multiple sports throughout their youth. Playing basketball sharpens footwork and court vision that help soccer players. Running track builds speed and stamina that carry over to tennis or football. Swimming builds lung capacity and upper body endurance without pounding growing joints. Sampling different sports builds broad athletic skills. These skills protect players from injury and support lifelong fitness.' },
      { kind: 'p', text: 'The emotional cost of focusing on one sport is just as heavy. When a child\'s identity depends entirely on winning in a single sport, every game brings heavy pressure. High travel costs and parental expectations turn fun games into stressful jobs. When sports stop being fun, young athletes face fatigue and burnout. Studies tracking youth leagues find that many single-sport athletes quit sports completely before they enter high school. They leave athletics behind because the pressure drains the joy out of the game.' },
      { kind: 'p', text: 'To protect young athletes, schools, leagues, and parents must encourage seasonal variety. Middle schools should welcome students who want to play football in the fall, basketball in the winter, and track in the spring. Youth leagues should set mandatory rest periods so young arms and knees have time to heal. Coaches should cooperate rather than demand that players choose one team over another. Most importantly, parents should let their children explore different games without feeling guilty about missing off-season practice.' },
      { kind: 'p', text: 'Youth sports should teach teamwork, resilience, and joy, not cause joint surgeries and early burnout. Young athletes deserve the chance to try new challenges and play games with their friends. By delaying single-sport focus until high school, we protect young bodies and allow children to build a lasting love for physical activity.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:8.8E.i', cites: [1, 2],
      stem: 'What is the author\'s primary claim in the selection?',
      choices: [
        ['High schools should eliminate competitive athletic programs completely.', 'The author supports youth athletics but cautions against premature single-sport dedication.'],
        ['Young athletes should avoid all physical training until they turn sixteen.', 'The author encourages active participation in varied sports throughout childhood.'],
        'Early single-sport focus harms young bodies and causes mental burnout.',
        ['Private travel clubs provide better athletic instruction than public schools.', 'The author criticizes the excessive demands imposed by private select clubs.'],
      ],
      answer: 2,
      explain: 'The author argues that specializing in one sport too early leads to overuse injuries and emotional exhaustion.',
    }),
    mcq({
      standard: 'rla:8.8E.ii', cites: [3],
      stem: 'Which counterargument does the author address in paragraph 3?',
      choices: [
        'Early specialization is necessary to master complex athletic skills.',
        ['Playing multiple sports costs families more money in equipment fees.', 'Financial expenses were discussed in paragraph 1 rather than paragraph 3.'],
        ['Most young athletes prefer playing video games rather than outdoor sports.', 'Video games are not mentioned as an opposing view in the passage.'],
        ['School coaches lack the training needed to prepare players for college.', 'Coaching credentials are not the counterargument presented in paragraph 3.'],
      ],
      answer: 0,
      explain: 'Paragraph 3 notes that proponents believe mastering athletic skills requires thousands of hours of repetition from an early age.',
    }),
    mcq({
      standard: 'rla:8.8E.ii', cites: [4],
      stem: 'How does the author refute the counterargument in paragraph 4?',
      choices: [
        ['By arguing that playing several sports guarantees college scholarships.', 'The author does not promise scholarships, but highlights broader motor skill growth.'],
        'By explaining that varied sports build better overall athletic ability.',
        ['By advising young athletes to avoid playing competitive games altogether.', 'The author advocates participating in different seasonal sports rather than quitting.'],
        ['By claiming that individual sports require less effort than team sports.', 'The passage does not compare effort levels between individual and team sports.'],
      ],
      answer: 1,
      explain: 'The author refutes the claim by showing that playing multiple sports develops transferable coordination, vision, and speed.',
    }),
    mcq({
      standard: 'rla:8.8E.iii', cites: [5, 6],
      stem: 'Who is the primary intended audience for the selection?',
      choices: [
        'Parents, coaches, and leaders who guide decisions about youth athletics.',
        ['Professional athletic trainers seeking employment with college programs.', 'The selection addresses the development of young children and middle school students.'],
        ['Elementary school teachers designing indoor physical fitness activities.', 'The author focuses on competitive youth leagues and school sports policies.'],
        ['Equipment manufacturers developing safety gear for travel soccer leagues.', 'The essay focuses on participation policies rather than sports equipment.'],
      ],
      answer: 0,
      explain: 'The author offers recommendations directly to families, youth leagues, and schools to safeguard young participants.',
    }),
    mcq({
      standard: 'rla:8.9G', cites: [4],
      stem: 'What rhetorical device does the author use in paragraph 4 to support the argument?',
      choices: [
        ['Chronological history describing how modern football rules were created.', 'The author does not trace the historical evolution of sports rules.'],
        ['Emotional appeals urging readers to donate money to private sports camps.', 'The author argues against commercial sports camps rather than fundraising.'],
        'Examples showing how skills from one sport carry over to other sports.',
        ['False dilemmas claiming that students must pick between sports and music.', 'The author encourages participating in multiple physical activities.'],
      ],
      answer: 2,
      explain: 'The author provides concrete examples: basketball footwork helping soccer, and track conditioning helping tennis and football.',
    }),
    mcq({
      standard: 'rla:8.6C', cites: [2],
      stem: 'Which detail from paragraph 2 best supports the idea that repetitive motion injures young athletes?',
      choices: [
        ['Adolescent bodies undergo dramatic growth spurts during middle school.', 'This describes a normal growth stage rather than an injury caused by repetitive strain.'],
        ['Bones grow longer before surrounding muscles and tendons fully adapt.', 'This explains why young bodies are vulnerable, but does not describe the resulting injury.'],
        ['Playing multiple sports exposes the body to varied physical movements.', 'This describes the benefit of varied athletics rather than an injury.'],
        'Repetitive strain causes stress fractures and elbow ligament tears.',
      ],
      answer: 3,
      explain: 'Paragraph 2 specifically identifies stress fractures and ligament tears as direct consequences of repetitive athletic motion.',
    }),
    mcq({
      standard: 'rla:8.5E', cites: [1, 6],
      stem: 'Which connection can a reader best make between the selection and modern community life?',
      choices: [
        ['Many communities have eliminated public parks in favor of private gymnasiums.', 'The passage does not claim that public parks are being replaced by gyms.'],
        ['School districts rarely offer physical education classes during middle school.', 'The passage discusses competitive sports teams rather than school physical education classes.'],
        ['Most college athletes report that they never played sports as young children.', 'Paragraph 4 states that most college athletes played multiple sports during their youth.'],
        'Families often feel stress from the high time demands of youth sports clubs.',
      ],
      answer: 3,
      explain: 'The essay connects to common modern experiences: families investing immense time and money into weekend travel leagues.',
    }),
  ],
});
