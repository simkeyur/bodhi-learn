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
      { kind: 'sentences', sentences: [
        "Dear Members of the Oak Ridge ISD School Board,",
      ] },
      { kind: 'sentences', sentences: [
        "I am writing on behalf of the Oak Ridge Middle School Science Club to propose the construction of a rooftop student astronomy observatory atop our new STEM wing.",
        "Our school campus currently lacks dedicated astronomical observation equipment, forcing students to rely solely on two-dimensional textbook photographs and computer simulations.",
        "Constructing an on-campus observatory would revolutionize our district's physical science curriculum and inspire the next generation of aerospace innovators.",
      ] },
      { kind: 'sentences', sentences: [
        "The proposed facility would feature an eight-foot motorized fiberglass dome, an automated fourteen-inch Schmidt-Cassegrain telescope, and a cooled digital astrophotography camera.",
        "With this equipment, eighth-grade earth and space science classes could track sunspot migrations, photograph lunar craters, and measure the orbital periods of Jupiter's Galilean moons.",
        "The science club had raised $4,500 through community car washes and bake sales, and we have applied for a matching educational grant from the Texas Space Grant Consortium.",
      ] },
      { kind: 'sentences', sentences: [
        "Each of the participating students have agreed to volunteer for weekend community stargazing open houses.",
        "Thank you for your leadership, your dedication to educational excellence, and your thoughtful consideration of our proposal.",
      ] },
      { kind: 'sentences', sentences: [
        "By investing in this cutting-edge scientific facility today, our school district will establish an enduring educational landmark that will inspire scientific inquiry, foster community engagement, and empower students to reach for the stars for decades to come.",
      ] },
      { kind: 'sentences', sentences: [
        "Respectfully submitted,\nElena Morales\nScience Club President",
      ] },
    ],
  }],
  items: [
    mcq({
      standard: "rla:8.10B.i", cites: [9],
      stem: "Which sentence could best be added before sentence 9 to provide a compelling, action-oriented concluding call to action?",
      choices: [
        ["Telescopes can also be used during the daytime to watch birds in nearby pine trees.", "Watching birds in trees diminishes the formal proposal for an astronomy observatory."],
        "By approving this initiative, the Board will invest in a transformative educational asset that will illuminate the wonders of the cosmos for thousands of future Oak Ridge students.",
        ["Some board members may remember looking through binoculars when they were in middle school.", "Casual nostalgia weakens a professional proposal."],
        ["Rooftop keys should be stored in the principal's desk drawer at all times.", "Key storage is a minor administrative task, not a persuasive conclusion."],
      ],
      answer: 1,
      explain: "This sentence provides an inspiring, persuasive call to action emphasizing the long-term educational legacy of the board's decision.",
    }),
    mcq({
      standard: "rla:8.10B.ii", cites: [7],
      stem: "The writer wishes to provide specific details reflecting depth of thought regarding the project's financial budget. Which revision of sentence 7 is best?",
      choices: [
        ["Money is hard to raise, but we baked a lot of chocolate chip cookies and washed dirty pickup trucks.", "This phrasing is informal and focuses on manual chores rather than fiscal planning."],
        ["The science club wants the school board to pay for everything because schools have large tax budgets.", "Demanding that the board pay everything is unprofessional and inaccurate."],
        ["A telescope costs several thousand dollars depending on shipping and handling fees.", "This is vague and unhelpful."],
        "Our club has secured $4,500 in student fundraising, received $6,000 in pledged corporate sponsorships from local engineering firms, and submitted a $10,000 matching grant request to the Texas Space Grant Consortium to fully fund the $20,500 budget.",
      ],
      answer: 3,
      explain: "Providing an exact, balanced breakdown of student fundraising, corporate sponsorships, and matching grant numbers demonstrates fiscal responsibility and depth of thought.",
    }),
    mcq({
      standard: "rla:8.10C", cites: [3],
      stem: "How can sentence 3 be revised to strengthen the persuasive tone and eliminate wordiness?",
      choices: [
        "Currently, our students are confined to passive textbook diagrams and flat computer screens, depriving them of the transformative experience of direct astronomical observation.",
        ["It is sad that our school has no telescope, so we only look at pictures in books which is boring.", "This sounds whining and informal."],
        ["Because we lack a telescope, teachers just show slides and we do not see real stars.", "This phrasing lacks academic maturity."],
        ["Without equipment, students do not get to look at the sky at night during school hours.", "School hours take place during the day, making this phrasing illogical."],
      ],
      answer: 0,
      explain: "Elevating the diction ('confined to passive textbook diagrams,' 'depriving them of transformative experience') strengthens the persuasive advocacy.",
    }),
    mcq({
      standard: "rla:8.10D.ii", cites: [7],
      stem: "Sentence 7 contains an inconsistent shift in verb tense ('had raised... have applied'). How should it be edited?",
      choices: [
        ["Change 'have applied' to 'will be applying'.", "This shifts into future progressive, which conflicts with completed fundraising."],
        ["Change 'had raised' to 'will raise'.", "The funds have already been raised in the past."],
        "Change 'had raised' to 'has raised' to maintain consistent present-perfect tense with 'have applied'.",
        ["Change 'have applied' to 'had had applied'.", "This is ungrammatical."],
      ],
      answer: 2,
      explain: "Using present perfect ('has raised... and we have applied') maintains consistency to show actions completed recently that affect the current proposal.",
    }),
    mcq({
      standard: "rla:8.10D.iii", cites: [8],
      stem: "Sentence 8 contains a subject-verb agreement error across an intervening prepositional phrase. How should it be corrected?",
      choices: [
        ["Change 'volunteer' to 'volunteering'.", "This creates an ungrammatical infinitive construction."],
        "Change 'have agreed' to 'has agreed'.",
        ["Change 'students' to 'student'.", "'Of the participating students' is a prepositional phrase where 'students' is correctly plural."],
        ["Change 'weekend' to 'weekends'.", "'Weekend' correctly functions as an adjective modifying 'open houses'."],
      ],
      answer: 1,
      explain: "The subject is the indefinite singular pronoun 'Each', which requires the singular verb 'has agreed' (not the plural 'have agreed').",
    }),
    mcq({
      standard: "rla:8.10D.v", cites: [2],
      stem: "Which capitalization edit should be made in sentence 2?",
      choices: [
        ["Lowercase 'Oak Ridge ISD School Board' because it is a civic body.", "Proper names of specific elected school boards are capitalized."],
        ["Capitalize 'rooftop student astronomy observatory' as a proper title.", "This is a general description, not a proper noun title."],
        ["Lowercase 'STEM' because it is an acronym for four different words.", "Acronyms formed from initials (Science, Technology, Engineering, Math) are capitalized."],
        "Capitalize 'Oak Ridge Middle School Science Club' as the official name of the student organization.",
      ],
      answer: 3,
      explain: "The official name of a specific school club ('Oak Ridge Middle School Science Club') is a proper noun that must be capitalized.",
    }),
  ],
});
