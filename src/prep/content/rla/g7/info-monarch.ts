// Grade 7 informational: Kemp's Ridley Sea Turtle Conservation (replaces monarchs).
import { makeSet, mcq, twoq } from '../author.ts';

export const INFO_MONARCH = makeSet({
  id: 'g7-info-monarch',
  grade: 7,
  kind: 'reading',
  title: "Return of the Kemp's Ridley: Saving the World's Most Endangered Sea Turtle",
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g7-info-monarch-p',
    title: "Return of the Kemp's Ridley: Saving the World's Most Endangered Sea Turtle",
    genre: 'informational',
    blocks: [
      { kind: 'p', text: "Along the warm surf of the Gulf of Mexico lives the smallest sea turtle on Earth: the Kemp's ridley. An adult weighs eighty to one hundred pounds. Its shell is olive-green and about two feet long. While small, this agile reptile is known for its remarkable life. It is also the most endangered sea turtle on our planet. For many years, human actions pushed the species toward extinction. Today, a joint conservation plan between the United States and Mexico is helping this ocean traveler make a hopeful comeback." },
      { kind: 'p', text: "Most sea turtles crawl ashore alone at night to lay their eggs. Kemp's ridleys do something very different. They nest during the daytime, often in large synchronized groups called arribadas. Arribada is a Spanish word that means arrivals. When stiff winds blow ashore, hundreds or even thousands of females come out of the surf together. Moving steadily across the wet sand, each turtle uses her rear flippers to dig a hole about one foot deep. She lays about one hundred soft-shelled eggs. Then she packs sand over the nest and swims back into the sea." },
      { kind: 'p', text: "For generations, almost all Kemp's ridley turtles nested on a single beach near Rancho Nuevo in Tamaulipas, Mexico. In 1947, a Mexican engineer named Andrés Herrera filmed an amazing sight there. His movie showed an estimated forty thousand nesting turtles covering the beach in one day. At that time, many people thought the turtle population would last forever. But people dug up millions of eggs to sell as food. Hunters also caught adult turtles. The population began to drop fast." },
      { kind: 'p', text: "By the late 1900s, commercial fishing created another grave threat. Large shrimp boats dragged heavy nets along the sea floor. These nets swept up turtles along with shrimp. Sea turtles have lungs and must breathe air. When trapped underwater inside heavy nets, they drowned in minutes. Scientists call the accidental catch of unwanted animals bycatch. By 1985, fewer than eight hundred nests were found in the entire world during a whole season. The species stood on the brink of disappearing." },
      { kind: 'p', text: "Saving the turtle took bold work from two countries. Scientists from Mexico and the United States joined forces to protect the nesting shores. In Texas, biologists chose Padre Island National Seashore as a safe haven. Between 1978 and 1988, workers carried thousands of eggs from Rancho Nuevo to Padre Island. They wanted baby turtles to imprint on Texas sand. That way, the females would return to Texas as adults to lay eggs. Today, park rangers and volunteers patrol the Texas beaches on utility vehicles every spring. They search the sandy dunes for fresh turtle tracks." },
      { kind: 'p', text: "When rangers discover a nest on a Texas beach, they carefully dig up the eggs. They carry them to protected incubation pens. This keeps the eggs safe from coyotes, ghost crabs, and driving trucks. Meanwhile, wildlife laws required shrimp boats to add Turtle Excluder Devices, or TEDs, to their nets. A TED is a metal grid with an escape door at the top or bottom. A swimming turtle hits the metal bars and slides out free, while shrimp pass into the net." },
      { kind: 'p', text: "These combined actions brought real progress. Nest counts at Rancho Nuevo and in Texas began to rise. The species is still endangered and faces dangers from oil spills and plastic trash. Still, the return of the Kemp's ridley shows what good science and teamwork can do. Working together across borders, people are helping these hardy turtles thrive in Gulf waters once again." },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.8D.i', cites: [1, 5, 7],
      stem: 'What is the controlling idea of the article?',
      choices: [
        ['Biologists plan to breed all wild Kemp\'s ridleys inside coastal aquariums.', 'The article emphasizes protecting wild turtles in their natural habitats.'],
        'A joint rescue program helped save the endangered Kemp\'s ridley turtle.',
        ['Modern shrimp trawlers fish exclusively along deep rocky ocean trenches.', 'The passage discusses shallow waters where sea turtles and shrimp live.'],
        ['Beach patrols on Padre Island use utility vehicles to study storm surges.', 'Patrols search for turtle nests and tracks, not storm surges.'],
      ],
      answer: 1,
      explain: 'The controlling idea is that collaborative conservation efforts between Mexico and the United States helped save the critically endangered Kemp\'s ridley sea turtle from extinction.',
    }),
    mcq({
      standard: 'rla:7.8D.iii', cites: [2],
      stem: 'How does the author organize paragraph 2 to help the reader understand turtle nesting?',
      choices: [
        "By contrasting Kemp's ridleys with other turtles to explain arribadas.",
        ['By listing the exact chemical ingredients found inside soft turtle shells.', 'Chemical composition is never mentioned in the paragraph.'],
        ['By presenting a chronological history of ancient Spanish sea expeditions.', 'The paragraph describes turtle nesting habits, not human exploration history.'],
        ['By arguing that all barrier island beaches should be closed to tourists.', 'The author describes natural behaviors rather than proposing beach closures.'],
      ],
      answer: 0,
      explain: 'Paragraph 2 contrasts the daytime group nesting of Kemp\'s ridleys with other solitary nocturnal turtles, explaining the mass arribada phenomenon.',
    }),
    mcq({
      standard: 'rla:7.6C', cites: [4],
      stem: 'Which detail from paragraph 4 explains why shrimp nets were dangerous to sea turtles?',
      choices: [
        ['Nets dragged across coral reefs caused turtles to lose their orientation.', 'The danger was drowning inside submerged shrimp nets, not coral reefs.'],
        'Trapped turtles could not reach the surface to breathe and drowned quickly.',
        ['The nets attracted predatory sharks that attacked small animals in the bay.', 'Shark attacks are not mentioned as the cause of turtle mortality.'],
        ['Heavy fishing ropes scratched the protective markings on green turtle shells.', 'The passage explains that trapped air-breathing turtles drowned in nets.'],
      ],
      answer: 1,
      explain: 'Paragraph 4 explains that sea turtles breathe air with lungs, so becoming trapped underwater inside submerged nets caused them to drown within minutes.',
    }),
    twoq({
      standard: 'rla:7.5F', cites: [5],
      a: {
        prompt: 'Part A: What can the reader infer about why researchers brought eggs to Padre Island?',
        choices: [
          'They wanted baby turtles to imprint on Texas sand and return there to nest.',
          ['They hoped to keep Padre Island\'s sandy dunes free of native coastal coyotes.', 'Eggs were transported to establish a secondary turtle nesting population.'],
          ['They believed Texas waters were too warm for adult commercial shrimp to live.', 'The project was designed to save turtles, not alter shrimp habitats.'],
          ['They planned to train hatchlings to avoid commercial fishing boats in winter.', 'Hatchlings cannot be trained to avoid boats.'],
        ],
        answer: 0,
      },
      b: {
        prompt: 'Part B: Which sentence from paragraph 5 best supports the answer to Part A?',
        choices: [
          ['"Saving the turtle took bold work from two countries."', 'This is a general introductory statement.'],
          ['"In Texas, biologists chose Padre Island National Seashore as a safe haven."', 'This identifies the sanctuary location but does not explain the biological goal.'],
          '"That way, the females would return to Texas as adults to lay eggs."',
          ['"They search the sandy dunes for fresh turtle tracks."', 'This describes current patrol activities.'],
        ],
        answer: 2,
      },
      explain: 'Biologists imprinted hatchlings on Texas sands specifically so that adult females would return to Padre Island to establish an additional protected nesting colony.',
    }),
    mcq({
      standard: 'rla:7.5G', cites: [6],
      stem: 'In paragraph 6, how does a Turtle Excluder Device (TED) protect sea turtles?',
      choices: [
        ['It emits loud high-frequency sonar pulses that scare turtles away from nets.', 'A TED is a physical mechanical grid, not an electronic noise emitter.'],
        'It provides a metal escape door that allows trapped turtles to slide out.',
        ['It keeps shrimp nets floating near the ocean surface where turtles never go.', 'Trawl nets are dragged along the bottom where shrimp and turtles feed.'],
        ['It cools surrounding seawater so turtles can remain submerged without air.', 'TEDs allow turtles to escape to the surface to breathe air.'],
      ],
      answer: 1,
      explain: 'Paragraph 6 describes a TED as a metal grid with an escape hatch that lets large sea turtles slip out safely while retaining shrimp inside the net.',
    }),
    mcq({
      standard: 'rla:7.9A', cites: [7],
      stem: 'What is the author\'s primary purpose in writing this article?',
      choices: [
        'To inform readers how international cooperation helped save a sea turtle.',
        ['To explain why commercial shrimpers should catch fewer Gulf Coast shrimp.', 'The focus is on how technology and conservation allow coexistence.'],
        ['To convince readers to buy antique film reels recorded at Rancho Nuevo beach.', 'The historical film is cited as evidence of past population sizes.'],
        ['To prove that sea turtles nest only when severe coastal storms approach.', 'Arribadas occur during stiff winds, but the article\'s purpose is broader conservation history.'],
      ],
      answer: 0,
      explain: 'The author\'s central purpose is to inform readers about the successful international scientific efforts to rescue the Kemp\'s ridley sea turtle from the brink of extinction.',
    }),
    mcq({
      standard: 'rla:7.6D', cites: [3, 4, 5, 6],
      stem: 'Which statement provides the best objective summary of the selection?',
      choices: [
        'Threats drove the Kemp\'s ridley near extinction, but teamwork aided its recovery.',
        ['Rancho Nuevo and Padre Island banned all commercial fishing boats to safeguard marine life.', 'Fishing was modified with TEDs rather than completely banned.'],
        ['Mexican engineer Andrés Herrera invented modern escape devices after filming empty dunes.', 'Herrera filmed the turtles; TEDs were developed later by researchers.'],
        ['Kemp\'s ridley sea turtles nest exclusively at midnight to avoid coyotes on sandy beaches.', 'Kemp\'s ridleys are famous for nesting during daylight hours.'],
      ],
      answer: 0,
      explain: 'This choice provides an accurate and concise overview: human hazards decimated the species, but cross-border conservation partnerships led to population recovery.',
    }),
  ],
});
