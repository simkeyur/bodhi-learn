// Grade 8 editing draft: Next-Generation Solar Windows
import { makeSet, mcq } from '../author.ts';

export const EDIT_SOLAR = makeSet({
  id: "g8-edit-solar",
  grade: 8,
  kind: 'editing',
  title: "Next-Generation Solar Windows",
  intro: "Read the draft and choose the best answer to each question.",
  passages: [{
    id: "g8-edit-solar-p",
    title: "Next-Generation Solar Windows",
    genre: 'informational',
    blocks: [
      { kind: 'sentences', sentences: [
        "Modern commercial skyscrapers feature thousands of square feet of exterior glass windows that let in daylight while regulating heat.",
        "Materials scientists at leading Texas research universities have developed transparent luminescent solar concentrators that convert ordinary architectural glass into functional photovoltaic generators.",
        "These innovative windows generate clean electricity without obstructing scenic outdoor views.",
      ] },
      { kind: 'sentences', sentences: [
        "Unlike opaque silicon rooftop panels, solar windows utilize organic salts that absorb invisible wavelengths of ultraviolet and near-infrared light.",
        "Specialized light guides channel this captured electromagnetic radiation to microscopic photovoltaic cells embedded in the window frame.",
        "The combination of transparent quantum dots with high-efficiency edge cells produce clean renewable electricity throughout the business day.",
      ] },
      { kind: 'sentences', sentences: [
        "If commercial office towers in downtown Austin and Dallas installed these windows, they could generate up to forty percent of their internal electrical needs on-site.",
        "The adoption of this technology promises to transform urban glass architecture into decentralized clean power plants.",
      ] },
      { kind: 'sentences', sentences: [
        "In addition to generating clean electrical power, solar window coatings reduce indoor solar heat gain by over fifty percent, significantly lowering air conditioning costs during blistering Texas summers.",
        "By combining energy conservation with localized power generation, this green technology accelerates the transition toward carbon-neutral urban architecture that reduces dependence on fossil fuels across modern metropolitan centers.",
      ] },
    ],
  }],
  items: [
    mcq({
      standard: "rla:8.10B.i", cites: [8],
      stem: "Which concluding sentence would best follow sentence 8 to reinforce the long-term environmental vision of the draft?",
      choices: [
        "By turning passive building facades into active renewable energy generators, solar windows offer a sustainable blueprint for the climate-resilient cities of tomorrow.",
        ["Texas has many hot summer days when air conditioners run constantly.", "This is a casual observation about hot weather rather than an inspiring conclusion."],
        ["Windows should be cleaned every two weeks with squeegees to remove dust.", "Window maintenance advice is trivial and unrelated to renewable energy innovation."],
        ["Some office workers prefer drawing motorized blinds during afternoon meetings.", "Drawing blinds is an everyday habit that weakens the concluding focus."],
      ],
      answer: 0,
      explain: "This sentence synthesizes the essay's core ideas into an elevated vision for sustainable future cities.",
    }),
    mcq({
      standard: "rla:8.10B.ii", cites: [4],
      stem: "The writer wants to add specific scientific details to sentence 4 to reflect depth of thought. Which sentence is best?",
      choices: [
        ["Chemicals have many letters and numbers on the periodic table of elements.", "This is a childish generalization that adds no scientific depth."],
        "Engineers engineer these organic molecules to absorb non-visible spectrum photons, allowing visible wavelengths (400 to 700 nanometers) to pass through undisturbed so the glass remains crystal clear.",
        ["Solar windows look shiny when the sun strikes them during the noon hour.", "Describing the glass as shiny is superficial."],
        ["Organic salts can be purchased from chemical supply companies in large plastic tubs.", "Purchasing supplies in tubs is an irrelevant commercial detail."],
      ],
      answer: 1,
      explain: "Specifying non-visible photons versus visible wavelengths (400-700 nm) demonstrates scientific depth and explains why the window remains transparent.",
    }),
    mcq({
      standard: "rla:8.10C", cites: [1],
      stem: "How can sentence 1 be revised for improved conciseness and style?",
      choices: [
        ["Skyscrapers have windows that are made of glass and they let light in while venting out hot heat.", "This phrasing is wordy, repetitive ('hot heat'), and informal."],
        "Modern commercial skyscrapers incorporate vast expanses of architectural glass that maximize natural daylighting while regulating thermal exchange.",
        ["Lots of tall skyscrapers possess many thousands of glass windows on their outsides.", "This phrasing is simplistic and informal."],
        ["Glass windows on skyscrapers are very big and sunlight goes through them every day.", "This lacks academic maturity and precision."],
      ],
      answer: 1,
      explain: "Using precise terminology like 'architectural glass,' 'maximizing natural daylighting,' and 'regulating thermal exchange' elevates the style.",
    }),
    mcq({
      standard: "rla:8.10D.iii", cites: [6],
      stem: "Sentence 6 contains a subject-verb agreement error influenced by intervening prepositional phrases. How should it be corrected?",
      choices: [
        ["Change 'combination' to 'combine'.", "'Combine' is a verb; the sentence requires the noun 'combination'."],
        ["Change 'clean' to 'cleanly'.", "'Clean' correctly modifies the noun 'electricity'."],
        ["Change 'produce' to 'producing'.", "Changing to a participle leaves the independent clause without a finite verb."],
        "Change 'produce' to 'produces'.",
      ],
      answer: 3,
      explain: "The subject is the singular noun 'combination' (not the plural 'edge cells'), so the verb must be singular: 'produces'.",
    }),
    mcq({
      standard: "rla:8.10D.v", cites: [7],
      stem: "Which capitalization rule should be applied to sentence 7?",
      choices: [
        "Capitalize proper geographic nouns such as 'Austin' and 'Dallas', while keeping general nouns like 'commercial office towers' lowercase.",
        ["Capitalize every word in the sentence because it discusses important Texas cities.", "Only proper nouns and the first word of a sentence are capitalized."],
        ["Lowercase 'Austin' and 'Dallas' because they are followed by 'commercial towers'.", "City names are proper nouns that must always be capitalized."],
        ["Capitalize 'Electricity' and 'Percent' because they represent mathematical values.", "General nouns and units of measurement are not capitalized."],
      ],
      answer: 0,
      explain: "Proper nouns naming specific cities (Austin, Dallas) are capitalized, while common nouns remain lowercase.",
    }),
    mcq({
      standard: "rla:8.10D.vi", cites: [5],
      stem: "How should nonrestrictive descriptive details be punctuated in sentence 5?",
      choices: [
        ["Specialized light guides channel this captured electromagnetic radiation: to microscopic photovoltaic cells embedded in the window frame.", "A colon is incorrect between a verb and its prepositional complement."],
        ["Specialized light guides, channel this captured electromagnetic radiation, to microscopic cells.", "The commas incorrectly separate the subject and verb."],
        "Specialized light guides (reflective optical conduits) channel this captured electromagnetic radiation to microscopic photovoltaic cells embedded in the window frame.",
        ["Specialized light guides; channel this captured electromagnetic radiation to cells.", "A semicolon cannot separate a subject from its verb."],
      ],
      answer: 2,
      explain: "Parentheses correctly enclose an explanatory parenthetical definition ('reflective optical conduits') without disrupting clause grammar.",
    }),
  ],
});
