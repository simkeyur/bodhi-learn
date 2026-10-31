// Grade 8 argumentative: The Case for Mindful Tech: Reclaiming Adolescence
import { makeSet, mcq } from '../author.ts';

export const ARG_SCREEN_TIME = makeSet({
  id: "g8-arg-screen-time",
  grade: 8,
  kind: 'reading',
  title: "The Case for Mindful Tech: Reclaiming Adolescence",
  intro: "Read the selection and choose the best answer to each question.",
  passages: [{
    id: "g8-arg-screen-time-p",
    title: "The Case for Mindful Tech: Reclaiming Adolescence",
    genre: "argumentative",
    blocks: [
      { kind: "p", text: "Walk into any middle school hallway across Texas during passing periods, and the sensory landscape is unmistakable: heads angled downward at forty-five-degree angles, thumbs twitching across glowing glass screens, and the relentless chime of push notifications interrupting face-to-face peer conversations. Over the past decade, smartphones and algorithmic social media feeds have infiltrated adolescent life with unprecedented speed. While digital connectivity offers undeniable benefits for collaborative homework projects and remote family communication, the unmonitored immersion of adolescents in algorithmic digital feeds poses an alarming threat to teenage psychological well-being, cognitive endurance, and healthy brain development." },
      { kind: "p", text: "The primary argument against unrestricted teen screen time rests on compelling neurological evidence regarding sleep architecture. According to clinical studies published by the American Academy of Pediatrics, the short-wavelength blue light (450 to 480 nanometers) emitted by smartphone screens directly suppresses the brain's pineal gland from secreting melatonin\u2014the essential biochemical hormone that regulates circadian sleep-wake cycles. When eighth graders scroll through video feeds late into the night, they delay the onset of slow-wave restorative sleep, resulting in chronic sleep deprivation. Cognitive deficits from sleep loss mimic clinical attention-deficit disorders, impairing working memory, emotional regulation, and academic performance in the classroom." },
      { kind: "p", text: "Skeptics and tech industry advocates frequently counter that adolescents require uninhibited digital access to develop essential twenty-first-century technical literacy, maintain vital peer networks, and prepare for modern digital careers. They argue that restricting smartphone access in secondary schools alienates teenagers, isolates students from their friends, and stifles the digital independence required in today's interconnected global economy." },
      { kind: "p", text: "This counterargument, however, fundamentally conflates productive digital fluency with passive, algorithmically manipulated content consumption. Learning computer programming, graphic design, or conducting peer-reviewed historical research on a desktop computer develops disciplined cognitive skills. Conversely, mindlessly scrolling through short-form video reels specifically engineered by behavioral software psychologists to trigger intermittent dopamine spikes does not teach digital literacy; it breeds behavioral dependence. Furthermore, longitudinal adolescent psychological surveys demonstrate that teenagers who spend more than four hours daily on social media report fifty-three percent higher rates of clinical anxiety and depression compared to peers who engage in offline extracurricular activities." },
      { kind: "p", text: "Real-world evidence from school districts that have piloted device restrictions confirms these positive outcomes. When secondary schools in several Texas districts implemented bell-to-bell phone bans, teachers reported immediate, noticeable improvements in academic engagement. Disciplinary infractions involving online cyberbullying dropped by over forty percent within a single semester. Students who previously sat in silence during lunch began talking, laughing, and playing recreational games in courtyards." },
      { kind: "p", text: "To counter this escalating mental health crisis, public schools and families must implement structured, evidence-based digital guardrails. School districts should adopt bell-to-bell smartphone restrictions, requiring students to deposit personal devices in secure magnetic pouches or lockers during the instructional day. Free from the constant ping of notifications, students re-engage in active classroom discussions, rebuild interpersonal empathy, and restore deep, sustained reading focus." },
      { kind: "p", text: "Reclaiming adolescent mental health does not require a Luddite rejection of modern technology. Rather, it demands that parents, educators, and community leaders establish intentional boundaries that subordinate digital convenience to the developmental needs of young minds. When we unplug our adolescents from algorithmic feeds, we give them back their sleep, their focus, and their childhood. By prioritizing human relationships over digital notifications, communities can cultivate a resilient, healthy, and thoughtful generation of independent thinkers prepared to meet the complex social and academic challenges of tomorrow." },
    ],
  }],
  items: [
    mcq({
      standard: "rla:8.8E.i", cites: [1, 2],
      stem: "What is the author's primary claim in the selection?",
      choices: [
        ["Smartphones should be permanently banned from all public libraries and university campuses across Texas.", "The claim focuses specifically on adolescent school and personal screen time boundaries."],
        ["Short-form video apps are effective educational tools that improve teenage reading comprehension.", "The author argues video reels breed behavioral dependence and reduce focus."],
        "Unrestricted, algorithmic smartphone use harms adolescent sleep, mental health, and cognitive focus, necessitating structured boundaries like bell-to-bell school bans.",
        ["Parents should purchase smartphones for young children to accelerate their early digital literacy skills.", "The author warns against early, unmonitored smartphone immersion."],
      ],
      answer: 2,
      explain: "The author clearly argues that unmonitored screen time causes sleep and psychological harm, and advocates for firm boundaries such as bell-to-bell phone restrictions.",
    }),
    mcq({
      standard: "rla:8.8E.ii", cites: [3],
      stem: "Which counterargument does the author identify in paragraph 3?",
      choices: [
        "Advocates claim that restricting smartphone access alienates teens, isolates them from friends, and hinders preparation for digital careers.",
        ["Critics argue that smartphones are too expensive for school districts to purchase for every student.", "Expense is not the counterargument addressed by the author."],
        ["Opponents assert that desktop computers cause more eye strain than portable smartphones.", "Comparative eye strain between devices is not discussed."],
        ["Researchers claim that blue light has no measurable effect on the human pineal gland.", "The author already cited neurological studies proving blue light suppresses melatonin."],
      ],
      answer: 0,
      explain: "Paragraph 3 outlines the opposing argument: that smartphones are necessary for peer social connections and twenty-first-century technical literacy.",
    }),
    mcq({
      standard: "rla:8.8E.ii", cites: [4],
      stem: "How does the author effectively refute the counterargument in paragraph 4?",
      choices: [
        ["By agreeing that social media feeds teach valuable computer programming skills.", "The author explicitly denies that scrolling social feeds teaches technical skills."],
        ["By recommending that teenagers play interactive video games instead of using social media apps.", "Video gaming is not proposed as an alternative."],
        ["By arguing that school districts should eliminate all computers from the academic curriculum.", "The author supports productive digital research and programming on computers."],
        "By distinguishing between productive digital fluency and passive algorithmic consumption designed to trigger dopamine dependence and anxiety.",
      ],
      answer: 3,
      explain: "Paragraph 4 refutes the opposition by distinguishing productive technical literacy (programming, research) from addictive, passive algorithmic video consumption.",
    }),
    mcq({
      standard: "rla:8.8E.iii", cites: [5, 6],
      stem: "Who is the primary intended audience for this argumentative selection?",
      choices: [
        ["Smartphone retail salespeople seeking to increase holiday device sales.", "The text argues against excessive phone usage."],
        "Parents, educators, and school administrators responsible for adolescent development and school policies.",
        ["Software engineers looking for employment at social media corporations.", "The text criticizes algorithmic manipulation rather than recruiting developers."],
        ["Elementary school students preparing for kindergarten standardized assessments.", "The essay addresses middle school adolescent policies."],
      ],
      answer: 1,
      explain: "The author directly addresses educators, parents, and school district leaders, recommending policies like bell-to-bell phone bans in schools.",
    }),
    mcq({
      standard: "rla:8.9G", cites: [4],
      stem: "What rhetorical device does the author use in paragraph 4 to strengthen the argument?",
      choices: [
        ["Bandwagon appeal urging readers to join popular online trends.", "The author warns against conforming to social media trends."],
        ["Circular reasoning repeating the same unproven claim without supporting facts.", "The author provides clinical data and distinct reasons."],
        "Juxtaposition of disciplined computer tasks (programming and research) with passive scrolling designed to trigger dopamine spikes.",
        ["Humorous hyperbole mocking students who enjoy reading printed books.", "The author praises sustained reading focus rather than mocking it."],
      ],
      answer: 2,
      explain: "The author juxtaposes productive technical activities like coding and research against passive, dopamine-seeking reel scrolling to demonstrate the difference.",
    }),
    mcq({
      standard: "rla:8.6C", cites: [2],
      stem: "Which text evidence from paragraph 2 best supports the claim that screens disrupt sleep physiology?",
      choices: [
        "Blue light emitted by screens suppresses the pineal gland from secreting melatonin, the hormone regulating circadian sleep cycles.",
        ["'...heads angled downward at forty-five-degree angles...'", "This describes physical posture, not sleep physiology."],
        ["'...relentless chime of push notifications interrupting face-to-face peer conversations.'", "This highlights social distraction, not biochemical sleep disruption."],
        ["'Cognitive deficits from sleep loss mimic clinical attention-deficit disorders...'", "This describes daytime behavioral effects rather than the physiological mechanism of disruption."],
      ],
      answer: 0,
      explain: "Paragraph 2 specifically identifies the biochemical mechanism: short-wavelength blue light suppresses pineal melatonin secretion.",
    }),
    mcq({
      standard: "rla:8.5E", cites: [1, 5],
      stem: "What societal connection can readers make to the author's discussion of school smartphone policies?",
      choices: [
        ["Many cities are eliminating high school athletic programs due to budget deficits.", "Athletic program budgets are unrelated to phone restrictions."],
        ["Automobile companies are removing navigation screens from modern electric vehicles.", "Vehicle manufacturing is outside the scope of school device policies."],
        ["Universities are requiring all college lectures to be conducted via text messaging.", "Colleges do not conduct lectures via text messaging."],
        "Many school districts across the country are debating or enacting bans on personal phones during class to improve learning and student mental health.",
      ],
      answer: 3,
      explain: "The passage reflects the widespread contemporary policy debate across school districts regarding smartphone bans to enhance focus and mental health.",
    }),
  ],
});
