// Grade 8 argumentative: Preserving Texas Night Skies: Why Dark Skies Matter
import { makeSet, mcq } from '../author.ts';

export const PERSUADE_DARKSKY = makeSet({
  id: "g8-persuade-darksky",
  grade: 8,
  kind: 'reading',
  title: "Preserving Texas Night Skies: Why Dark Skies Matter",
  intro: "Read the selection and choose the best answer to each question.",
  passages: [{
    id: "g8-persuade-darksky-p",
    title: "Preserving Texas Night Skies: Why Dark Skies Matter",
    genre: "persuasive",
    blocks: [
      { kind: "p", text: "Look up into the night sky from the bustling downtown centers of Houston, Dallas, or San Antonio, and you will be lucky to glimpse a dozen pale stars through the murky orange glow of urban skyglow. According to satellite photogrammetry published by the National Oceanic and Atmospheric Administration (NOAA), more than eighty percent of North Americans can no longer see the Milky Way from their homes. This pervasive artificial illumination is not merely an aesthetic nuisance for amateur stargazers; it is an unchecked form of environmental degradation that wastes billions of dollars in electricity, disrupts wildlife navigation, and obscures our cosmic heritage." },
      { kind: "p", text: "Fortunately, out in the vast, rugged expanses of West Texas, a determined coalition of civic leaders, ranchers, and astronomers has proven that human habitation and pristine night skies can coexist harmoniously. Covering more than fifteen thousand square miles surrounding the Davis Mountains and Big Bend National Park, the Greater Big Bend International Dark Sky Reserve is now the largest certified dark sky reserve on planet Earth. Its success demonstrates that protecting the night sky does not require plunging communities into primitive darkness, but rather implementing intelligent, energy-efficient outdoor lighting standards." },
      { kind: "p", text: "Opponents and commercial developers often argue that outdoor lighting restrictions compromise public safety and economic commerce. They claim that reducing outdoor illumination invites nocturnal crime, increases vehicle collisions on dark rural highways, and imposes burdensome equipment retrofit costs on small business owners who rely on brightly lit storefront signs to attract passing highway motorists." },
      { kind: "p", text: "This objection, however, is built upon a false dilemma\u2014the erroneous belief that communities must choose between blinding glare or pitch-black danger. In reality, dark-sky lighting ordinances do not demand less illumination; they demand better-directed illumination. Unshielded, glaring floodlights cast harsh shadows that actually impair human night vision and create deep blind spots where intruders can hide undetected. By mandating fully shielded, downward-directed LED fixtures that channel light exclusively onto walkways and parking bays, communities actually enhance nighttime visibility, reduce blinding glare for motorists, and eliminate light trespass into neighboring bedrooms." },
      { kind: "p", text: "Furthermore, adopting dark-sky compliant lighting produces immediate economic and ecological dividends. The City of Fort Davis and neighboring Presidio County retrofitted municipal streetlights with shielded, warm-amber LEDs (color temperature below 3000 Kelvin). Within twenty-four months, municipal electricity expenditures dropped by thirty-two percent. Moreover, pristine night skies have turned West Texas into a booming international astrotourism hub. Tens of thousands of travelers flock annually to the McDonald Observatory and state parks, generating millions in revenue for local hotels, diners, and tour outfitters." },
      { kind: "p", text: "Neighboring municipalities and state natural areas such as Devils River and Seminole Canyon are following suit, creating an unbroken dark-sky conservation corridor spanning hundreds of miles across the Rio Grande basin." },
      { kind: "p", text: "Ecologists also note profound benefits for Texas biodiversity. Millions of migratory songbirds navigating the Central Flyway rely on celestial star cues during nighttime flights. Disorienting urban light domes draw birds off course, causing catastrophic building collisions. Shielded lighting preserves migratory pathways and protects nocturnal desert pollinators like yucca moths and bats. Preserving our dark skies is a shared civic responsibility that honors Texas heritage, protects our environment, and keeps our window to the universe wide open. Every shielded fixture installed today ensures that future generations will look up in wonder at the unblemished celestial wonders of our starry cosmos, drawing inspiration from the infinite expanse above our shared Texas landscape." },
    ],
  }],
  items: [
    mcq({
      standard: "rla:8.8E.i", cites: [1, 2],
      stem: "What is the primary argument the author presents in the selection?",
      choices: [
        ["Cities should ban all forms of electric lighting after sundown to conduct astronomical research.", "The author does not advocate turning off all lights, but using shielded fixtures."],
        "Communities should adopt shielded, dark-sky compliant lighting to save energy, enhance nighttime safety, protect wildlife, and preserve access to the stars.",
        ["The state of Texas should relocate McDonald Observatory to an island in the Gulf of Mexico.", "The observatory is located in the Davis Mountains and benefits from the dark sky reserve."],
        ["Commercial storefront signs are the primary source of carbon emissions in rural Texas.", "Storefront signs are mentioned regarding glare, not as the primary source of carbon emissions."],
      ],
      answer: 1,
      explain: "The author argues that implementing shielded lighting standards saves money, improves safety, protects nocturnal ecosystems, and preserves night skies.",
    }),
    mcq({
      standard: "rla:8.8E.ii", cites: [3],
      stem: "Which counterargument does the author explain in paragraph 3?",
      choices: [
        ["Ranchers claim that stargazing telescopes interfere with livestock grazing patterns.", "Livestock interference is not mentioned."],
        ["Ecologists worry that LED lighting attracts invasive insects to West Texas streams.", "The ecological benefits of warm LED lighting are praised."],
        ["Astronomers assert that municipal streetlights improve telescope calibration.", "Streetlights produce light pollution that blinds telescopes."],
        "Opponents argue that lighting restrictions compromise public safety, increase nighttime crime and traffic accidents, and impose costs on businesses.",
      ],
      answer: 3,
      explain: "Paragraph 3 outlines the objection that lighting limits could compromise safety, invite crime, increase collisions, and burden businesses.",
    }),
    mcq({
      standard: "rla:8.8E.iii", cites: [2, 4, 5],
      stem: "Who is the primary intended audience for the author's persuasive selection?",
      choices: [
        "Local civic leaders, urban planners, business owners, and citizens considering municipal lighting policies.",
        ["Aerospace engineers designing deep-space robotic planetary probes.", "The topic is terrestrial municipal outdoor lighting, not deep-space probes."],
        ["Elementary school students attending their very first summer camping trip.", "The text focuses on municipal ordinances, retrofit costs, and civic policy."],
        ["Highway construction workers installing high-voltage transmission lines.", "The text is an argument for civic lighting policies, not a construction manual."],
      ],
      answer: 0,
      explain: "The author addresses civic leaders, business owners, and community members who vote on and implement outdoor lighting ordinances.",
    }),
    mcq({
      standard: "rla:8.9G", cites: [4],
      stem: "Which logical fallacy does the author expose and refute in paragraph 4?",
      choices: [
        ["Ad hominem attack criticizing the personal appearance of commercial developers.", "The author addresses the argument itself rather than personal attacks."],
        ["Circular reasoning asserting that dark skies are dark because light is absent.", "The author provides substantive reasons and evidence."],
        "False dilemma implying that communities must choose between blinding glare or pitch-black danger.",
        ["Bandwagon appeal claiming that everyone in Texas already owns an astronomical telescope.", "No claim is made that everyone owns a telescope."],
      ],
      answer: 2,
      explain: "Paragraph 4 explicitly calls out the false dilemma that communities must pick between blinding glare or pitch-black danger, showing shielded light provides both safety and dark skies.",
    }),
    mcq({
      standard: "rla:8.5C", cites: [1, 2],
      stem: "Based on the title and introductory paragraph, what prediction can the reader confirm about the text?",
      choices: [
        ["The passage will describe ancient Mayan constellations recorded in stone temples.", "The text focuses on modern artificial light pollution and dark-sky reserves."],
        "The passage will explain why light pollution is harmful and present solutions for preserving natural night skies.",
        ["The passage will argue that Texas should shut down all highway rest stops at night.", "The text discusses lighting fixtures, not closing rest stops."],
        ["The passage will prove that stars are burning out faster in the twenty-first century.", "The stars are obscured by light pollution, not burning out faster."],
      ],
      answer: 1,
      explain: "The title and paragraph 1 establish the problem of artificial light pollution, and the rest of the text confirms the prediction by explaining its harms and solutions.",
    }),
    mcq({
      standard: "rla:8.5G", cites: [5],
      stem: "Which key detail demonstrates the financial benefit of adopting dark-sky compliant lighting fixtures?",
      choices: [
        "Within twenty-four months of retrofitting streetlights with shielded LEDs, Fort Davis municipal electricity costs dropped by thirty-two percent.",
        ["Hotels in West Texas offer free telescope rentals to all passing tourists.", "The text notes tourism revenues, not free telescope rentals."],
        ["The federal government pays each resident a cash bonus for turning off porch lights.", "No federal cash bonus is mentioned."],
        ["Astronomers donate their research salaries to local county road repair funds.", "Observatory staff do not fund county road maintenance."],
      ],
      answer: 0,
      explain: "Paragraph 5 provides specific factual evidence: retrofitting streetlights with shielded LEDs reduced municipal electric bills by 32% within two years.",
    }),
    mcq({
      standard: "rla:8.5F", cites: [5],
      stem: "What can the reader infer from paragraph 5 regarding the relationship between conservation and local economies?",
      choices: [
        ["Environmental conservation always causes severe economic depression in rural communities.", "The passage proves the opposite: conservation generated substantial tourism revenue."],
        ["Tourists only visit West Texas when the McDonald Observatory offers free admission.", "Tourists visit because the night skies are remarkably clear and dark."],
        "Responsible environmental stewardship can stimulate rural economies by creating profitable ecotourism and astrotourism industries.",
        ["Municipal streetlights are the only source of tax revenue for Presidio County.", "Streetlights are an expense, not a source of tax revenue."],
      ],
      answer: 2,
      explain: "The text shows that preserving the night sky created a booming astrotourism market, attracting visitors and boosting local hotels, diners, and outfitters.",
    }),
    mcq({
      standard: "rla:8.8E.i", cites: [5, 6],
      stem: "How does the author use scientific and economic data in paragraphs 5 and 6 to reinforce the main thesis?",
      choices: [
        ["By proving that solar flares will permanently disable urban electrical grids.", "Solar flares are not discussed in the passage."],
        ["By claiming that birds have stopped migrating across the North American continent.", "The text explains that birds still migrate along the Central Flyway."],
        ["By showing that astrotourism has replaced petroleum as Texas's largest industry.", "The author does not claim astrotourism exceeds petroleum."],
        "By showing measurable reductions in municipal electric bills and concrete benefits for migratory birds and pollinators, proving dark-sky policies produce practical advantages.",
      ],
      answer: 3,
      explain: "The author provides hard data on 32% utility savings and ecological protection for birds and bats, demonstrating that dark-sky policies deliver real-world advantages.",
    }),
  ],
});
