// Grade 8 editing draft: Proposal for a Student Astronomy Observatory
import { makeSet, mcq } from '../author.ts';

export const EDIT_LETTER = makeSet({
  id: "g8-edit-letter",
  grade: 8,
  kind: 'editing',
  title: "Proposal for a Student Astronomy Observatory",
  intro: "Read the draft and choose the best answer to each question.",
  passages: [{
    id: "g8-edit-letter-p",
    title: "Proposal for a Student Astronomy Observatory",
    genre: 'informational',
    blocks: [
      {
        kind: 'sentences', sentences: [
          "Dear Members of the Oak Ridge ISD School Board,",
        ]
      },
      {
        kind: 'sentences', sentences: [
          "I am writing on behalf of the Oak Ridge Middle School Science Club to propose the construction of a rooftop student astronomy observatory atop our new STEM wing.",
          "Our school campus currently lacks dedicated astronomical observation equipment, forcing students to rely solely on two-dimensional textbook photographs and computer simulations.",
          "Constructing an on-campus observatory would revolutionize our district's physical science curriculum and inspire the next generation of aerospace innovators.",
        ]
      },
      {
        kind: 'sentences', sentences: [
          "The proposed facility would feature an eight-foot motorized fiberglass dome, an automated fourteen-inch Schmidt-Cassegrain telescope, and a cooled digital astrophotography camera.",
          "With this equipment, eighth-grade earth and space science classes could track sunspot migrations, photograph lunar craters, and measure the orbital periods of Jupiter's Galilean moons.",
          "The science club had raised $4,500 through community car washes and bake sales, and we have applied for a matching educational grant from the Texas Space Grant Consortium.",
        ]
      },
      {
        kind: 'sentences', sentences: [
          "Each of the participating students have agreed to volunteer for weekend community stargazing open houses.",
          "Thank you for your leadership, your dedication to educational excellence, and your thoughtful consideration of our proposal.",
        ]
      },
      {
        kind: 'sentences', sentences: [
          "By investing in this cutting-edge scientific facility today, our school district will establish an enduring educational landmark that will inspire scientific inquiry, foster community engagement, and empower students to reach for the stars for decades to come.",
        ]
      },
      {
        kind: 'sentences', sentences: [
          "Respectfully submitted,\nElena Morales\nScience Club President",
        ]
      },
    ],
  }],
  items: [
    mcq({
      standard: "rla:8.10B.i", cites: [9],
      stem: "Which sentence could best be added before sentence 9 to provide a compelling, action-oriented concluding call to action?",
      choices: [
        ["Telescopes can also be operated during clear daytime hours to watch migrating songbirds perched in nearby pine trees.", "Watching birds in trees diminishes the formal proposal for an astronomy observatory."],
        "By approving this initiative, the Board will invest in an inspiring educational asset for future students.",
        ["Some school board members may warmly recall gazing through toy binoculars during family camping trips in middle school.", "Casual personal nostalgia weakens a professional proposal presented to the school board."],
        ["Rooftop facility keys should remain securely locked inside the principal's main desk drawer at all times during the year.", "Administrative key storage is a minor logistical detail rather than a compelling persuasive call to action."],
      ],
      answer: 1,
      explain: "This sentence provides an inspiring, persuasive call to action emphasizing the long-term educational legacy of the board's decision.",
    }),
    mcq({
      standard: "rla:8.10B.ii", cites: [7],
      stem: "The writer wishes to provide specific details reflecting depth of thought regarding the project's financial budget. Which revision of sentence 7 is best?",
      choices: [
        ["Money is quite difficult to raise, but students baked dozens of cookies and washed pickup trucks at local service stations.", "This phrasing remains informal and focuses on manual fundraising chores rather than presenting structured fiscal planning."],
        ["The science club believes the school board ought to pay for all construction costs since the district maintains large surplus funds.", "Demanding that the board finance the entire project is unprofessional and dismisses shared community financial responsibility."],
        ["A commercial observatory telescope costs many thousands of dollars depending on shipping rates and retail delivery charges.", "This statement is vague and fails to provide the specific budget details needed to demonstrate depth of thought."],
        "Our club raised $4,500, secured $6,000 in gifts, and sought a $10,000 grant to fund the project.",
      ],
      answer: 3,
      explain: "Providing an exact breakdown of student fundraising, sponsorships, and grant requests demonstrates fiscal responsibility and depth of thought.",
    }),
    mcq({
      standard: "rla:8.10C", cites: [3],
      stem: "How can sentence 3 be revised to strengthen the persuasive tone and eliminate wordiness?",
      choices: [
        "Without equipment, our students rely on static diagrams rather than direct observation.",
        ["It is deeply disappointing that our campus lacks a telescope, so classes only view book diagrams that quickly become tedious.", "This phrasing sounds overly informal and complaining rather than maintaining a professional, persuasive proposal tone."],
        ["Because our science classrooms lack equipment, instructors show basic slides and students never view authentic stars.", "This phrasing lacks academic maturity and fails to elevate the persuasive justification for new laboratory facilities."],
        ["Without expensive equipment on campus, students never get the chance to examine the night sky during normal school hours.", "School hours occur during daytime, making the complaint about observing night skies during classes logically flawed."],
      ],
      answer: 0,
      explain: "Expressing the limitation clearly and directly strengthens the persuasive argument without unnecessary wordiness.",
    }),
    mcq({
      standard: "rla:8.10D.ii", cites: [7],
      stem: "Sentence 7 contains an inconsistent shift in verb tense ('had raised... have applied'). How should it be edited?",
      choices: [
        ["Change the verb 'have applied' to the future form 'will be applying'.", "This shifts into future progressive, which conflicts with completed fundraising."],
        ["Change the past verb 'had raised' to the simple future form 'will raise'.", "The funds have already been raised in the past."],
        "Change 'had raised' to 'has raised'.",
        ["Change the verb 'have applied' to the past perfect form 'had had applied'.", "This is ungrammatical."],
      ],
      answer: 2,
      explain: "Using present perfect ('has raised... and we have applied') maintains consistency to show actions completed recently that affect the current proposal.",
    }),
    mcq({
      standard: "rla:8.10D.iii", cites: [8],
      stem: "Sentence 8 contains a subject-verb agreement error across an intervening prepositional phrase. How should it be corrected?",
      choices: [
        ["Change the base verb 'volunteer' to the participle 'volunteering'.", "This creates an ungrammatical infinitive construction."],
        "Change 'have agreed' to 'has agreed'.",
        ["Change the plural noun 'students' to the singular form 'student'.", "'Of the participating students' is a prepositional phrase where 'students' is correctly plural."],
        ["Change the singular noun 'weekend' to the plural form 'weekends'.", "'Weekend' correctly functions as an adjective modifying 'open houses'."],
      ],
      answer: 1,
      explain: "The subject is the indefinite singular pronoun 'Each', which requires the singular verb 'has agreed' (not the plural 'have agreed').",
    }),
    mcq({
      standard: "rla:8.10D.v", cites: [2],
      stem: "Which capitalization edit should be made in sentence 2?",
      choices: [
        ["Lowercase 'Oak Ridge ISD School Board' because it refers to a local public school district agency.", "Proper names of specific elected school boards are official proper nouns and must remain capitalized."],
        ["Capitalize the phrase 'rooftop student astronomy observatory' as an official administrative title.", "This phrase is a common noun phrase describing a facility, not an official proper noun title."],
        ["Lowercase the acronym 'STEM' because it serves as an abbreviation formed from four separate disciplines.", "Acronyms formed from the initials of academic fields (Science, Technology, Engineering, Math) are capitalized."],
        "Capitalize 'Oak Ridge Middle School Science Club'.",
      ],
      answer: 3,
      explain: "The official name of a specific school club ('Oak Ridge Middle School Science Club') is a proper noun that must be capitalized.",
    }),
  ],
});
