// Grade 8 biography / informational: Footsteps in the Sea of Tranquility (Neil Armstrong, with citations/footnotes)
import { makeSet, mcq } from '../author.ts';

export const BIO_ARMSTRONG = makeSet({
  id: 'g8-bio-armstrong',
  grade: 8,
  kind: 'reading',
  title: 'Footsteps in the Sea of Tranquility',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g8-bio-armstrong-p',
    title: 'Footsteps in the Sea of Tranquility',
    genre: 'literaryNonfiction',
    blocks: [
      { kind: "p", text: "On July 20, 1969, an estimated six hundred million people\u2014nearly one-fifth of the world's population at the time\u2014watched grainy black-and-white television broadcasts as an American astronaut stepped onto the powdery regolith of the Moon. While the iconic declaration \"That's one small step for man, one giant leap for mankind\" became immortalized in history textbooks, the man behind the gold-tinted helmet visor, Neil Alden Armstrong, was neither a flamboyant daredevil nor a publicity-seeking celebrity. He was, at his core, a meticulous research test pilot and aerospace engineer whose quiet discipline, emotional composure under pressure, and relentless focus on problem-solving defined his historic achievement." },
      { kind: "p", text: "Born in Wapakoneta, Ohio, in 1930, Armstrong developed an intense fascination with aviation at an early age, earning his student pilot's license at age sixteen before he had obtained an automobile driver's license [1]. After serving as a naval combat aviator during the Korean conflict, where he flew seventy-eight combat missions and once safely landed a fighter jet that had lost six feet of its wing to enemy anti-aircraft cables, Armstrong joined the National Advisory Committee for Aeronautics (NACA, later NASA) at the High-Speed Flight Station at Edwards Air Force Base in California." },
      { kind: "p", text: "At Edwards, Armstrong tested experimental rocket planes, including the formidable North American X-15. Flying at hypersonic speeds exceeding Mach 5 and soaring to altitudes above two hundred thousand feet at the very edge of space, pilots frequently faced instantaneous mechanical anomalies. Colleagues noted that while other aviators might shout over cockpit radio channels when guidance computers failed, Armstrong's heart rate barely elevated; he methodically analyzed instrument dials, calculated glide trajectories, and brought damaged aircraft safely onto the Mojave dry lake beds [2]." },
      { kind: "p", text: "This unwavering composure proved decisive during the Apollo 11 lunar landing. As the lunar module Eagle descended toward the Sea of Tranquility, blaring computer alarms (\"1202\" and \"1201\" program alarms) signaled that the radar processor was being overloaded with data. Looking out the triangular cockpit window, Armstrong noticed that the automated computer targeting system was guiding the spacecraft directly into a football-field-sized crater littered with boulders the size of automobiles." },
      { kind: "p", text: "With fuel running dangerously low and Mission Control in Houston counting down remaining seconds of propellant, Armstrong bypassed the autopilot and took manual control of the descent thrusters. Hovering mere feet above the lunar dust, he gently tilted the spacecraft forward, scouting a clear patch of level ground past the crater rim. When Eagle finally settled onto the lunar surface with less than thirty seconds of fuel remaining, Armstrong keyed his microphone and reported with characteristic calmness: \"Houston, Tranquility Base here. The Eagle has landed.\"" },
      { kind: "p", text: "Following his historic mission, Armstrong resisted countless lucrative commercial endorsements and political campaigns, choosing instead to teach engineering at the University of Cincinnati and retire to his Ohio farm. He consistently deflected personal praise, insisting that the lunar landing was the triumph of four hundred thousand dedicated engineers, scientists, technicians, and seamstresses who had built the Apollo program. Until his passing in 2012, at the age of eighty-two, he remained an inspiring advocate for science education, urging young students to pursue careers in aerospace exploration and engineering innovation." },
      { kind: "sidebar", title: "Notes", text: "[1] Hansen, James R. First Man: The Life of Neil A. Armstrong. Simon & Schuster, 2005. [2] Thompson, Milton O. At the Edge of Space: The X-15 Flight Program. Smithsonian Institution Press, 1992." },
    ],
  }],
  items: [
    mcq({
      standard: "rla:8.8D.i", cites: [1],
      stem: "What is the controlling idea or thesis of the selection?",
      choices: [
        ["Neil Armstrong became the most famous astronaut because he was an aggressive daredevil who embraced extreme personal risks.", "The author specifically states he was not a flamboyant daredevil."],
        "Neil Armstrong's historic success as an astronaut was rooted in his quiet composure, engineering discipline, and methodical problem-solving abilities.",
        ["The Apollo 11 moon landing was successful primarily because computer automation prevented human pilot errors.", "The text explains that the computer nearly crashed into a boulder field, requiring manual intervention."],
        ["Armstrong's most influential work occurred after retiring from NASA when he ran for public office in Ohio.", "Armstrong rejected political campaigns and chose to teach engineering."],
      ],
      answer: 1,
      explain: "Paragraph 1 introduces the central thesis: Armstrong was defined not by celebrity bravado, but by meticulous discipline and composure under extreme crisis.",
    }),
    mcq({
      standard: "rla:8.8D.ii", cites: [2],
      stem: "How does the footnote citation [1] support the author's discussion of Armstrong's youth in paragraph 2?",
      choices: [
        "It cites a reputable biographical source that documents Armstrong earning his pilot's license before his driver's license.",
        ["It provides a transcript of Armstrong's first interview with military recruiters in Ohio.", "The citation references Hansen's biography, not a military recruitment interview."],
        ["It explains the physics of how jet engines operated in the early 1950s.", "The note names a biography, not a physics book."],
        ["It contradicts the author's claims by showing that Armstrong struggled with early pilot tests.", "The citation confirms Armstrong's early aviation accomplishments."],
      ],
      answer: 0,
      explain: "Footnote [1] directs the reader to James Hansen's definitive biography First Man, validating the factual claim about Armstrong's early flying credentials.",
    }),
    mcq({
      standard: "rla:8.5G", cites: [4, 5],
      stem: "Which detail from paragraphs 4 and 5 best illustrates Armstrong's exceptional composure during the lunar landing?",
      choices: [
        ["He relied on the autopilot system to calculate the final descent through the boulder crater.", "He actively overrode the autopilot to avoid crashing into boulders."],
        ["He waited for Mission Control in Houston to resolve the 1202 computer alarm before taking action.", "He took immediate manual control of the spacecraft while fuel was running out."],
        "He manually piloted the lunar module over a boulder field with less than thirty seconds of fuel remaining and calmly announced the touchdown.",
        ["He decided to abort the mission and fire the ascent engine back to orbit.", "Armstrong did not abort; he successfully landed on the Moon."],
      ],
      answer: 2,
      explain: "Paragraph 5 emphasizes that despite blaring computer alarms, a boulder-strewn landing zone, and seconds of fuel left, Armstrong calmly piloted Eagle to safety.",
    }),
    mcq({
      standard: "rla:8.6C", cites: [3],
      stem: "Which text evidence from paragraph 3 best supports the idea that Armstrong remained unusually calm in emergency situations?",
      choices: [
        ["\"At Edwards, Armstrong tested experimental rocket planes...\"", "This merely states where he worked and what he flew."],
        ["\"...soaring to altitudes above two hundred thousand feet at the very edge of space...\"", "This describes the flight altitude, not his physiological reaction to stress."],
        ["\"Flying at hypersonic speeds exceeding Mach 5...\"", "This states the speed of the X-15 aircraft."],
        "While other aviators shouted during guidance failures, Armstrong's heart rate barely elevated as he methodically analyzed dials and calculated glide paths.",
      ],
      answer: 3,
      explain: "Paragraph 3 highlights that his physiological heart rate telemetry barely rose when systems failed, demonstrating composure.",
    }),
    mcq({
      standard: "rla:8.9B", cites: [2, 3, 4, 6],
      stem: "How does the chronological text structure contribute to the author's purpose?",
      choices: [
        ["It compares Armstrong's personality traits to those of other famous astronauts.", "The structure is chronological, tracing his life from youth to test pilot to moon landing."],
        "It traces how Armstrong's rigorous early flying experiences systematically prepared him for the intense crisis of the Apollo 11 lunar landing.",
        ["It presents a problem-and-solution format showing how NASA resolved financial cutbacks in the space program.", "The passage focuses on Armstrong's life, not budget logistics."],
        ["It explains why the Soviet Union won the early stages of the Cold War space race.", "The text is a biographical portrait of Armstrong, not a Cold War history."],
      ],
      answer: 1,
      explain: "By following Armstrong from teenage flying to naval combat, hypersonic test piloting, and Apollo 11, the author demonstrates how his discipline was built step by step.",
    }),
    mcq({
      standard: "rla:8.8D.ii", cites: [3],
      stem: "What is the primary function of footnote [2] in establishing the credibility of the text?",
      choices: [
        ["To list the purchase price of experimental X-15 rocket engines built in California.", "The note names a history of the X-15 program, not purchasing records."],
        ["To question the accuracy of NASA flight controllers during hypersonic research.", "The note names a source for the passage; it does not question anyone."],
        "To show readers a published source where they can check the description of X-15 test flights.",
        ["To explain how the Mojave Desert climate affected aircraft maintenance in the 1960s.", "The note names a history of X-15 flights, not desert weather."],
      ],
      answer: 2,
      explain: "Footnote [2] names a published history of the X-15 program, so readers can check the description of the test flights for themselves.",
    }),
    mcq({
      standard: "rla:8.6D", cites: [1, 2, 4, 5, 6],
      stem: "Which statement provides the best objective summary of the selection?",
      choices: [
        "Neil Armstrong's lifelong discipline as a naval combat pilot and research test aviator culminated in his manual touchdown during Apollo 11, after which he humbly credited the collective efforts of the space program.",
        ["Neil Armstrong gained international fame in 1969, using his celebrity to advocate for political reforms and commercial aerospace ventures across America.", "Armstrong resisted celebrity and endorsements, choosing teaching instead."],
        ["A mechanical failure in the Apollo 11 computer forced Mission Control in Houston to pilot the Eagle lunar module to safety from the ground.", "Armstrong piloted the lander manually; Mission Control could not fly it remotely."],
        ["Armstrong spent his youth in Ohio building model airplanes until NASA selected him to design hypersonic rocket engines for Edwards Air Force Base.", "Armstrong was a pilot and astronaut, not an engine designer."],
      ],
      answer: 0,
      explain: "This summary accurately captures his background, the Apollo 11 crisis, and his humble post-mission character.",
    }),
  ],
});
