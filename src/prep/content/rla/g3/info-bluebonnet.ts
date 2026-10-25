// Grade 3 informational: The life cycle and beauty of Texas Bluebonnets.
// Word count: ~310 words (range 250-650).
// Questions cover central idea (3.9D.i), print features (3.10C), organizational pattern (3.9D.iii),
// context clues (3.3B), inference (3.6F), key details (3.6G), and text evidence (3.7C).

import { makeSet, mcq } from '../author.ts';

export const INFO_BLUEBONNET = makeSet({
  id: 'g3-info-bluebonnet',
  grade: 3,
  kind: 'reading',
  title: 'The Secret Life of the Texas Bluebonnet',
  intro: 'Read the selection and choose the best answer to each question.',
  passages: [{
    id: 'g3-info-bluebonnet-p',
    title: 'The Secret Life of the Texas Bluebonnet',
    genre: 'informational',
    blocks: [
      { kind: 'heading', text: 'Springtime Blankets of Blue' },
      { kind: 'p', text: 'Every spring across the rolling hills of Central and South Texas, millions of sapphire-blue wildflowers blanket highway shoulders, pastures, and open meadows. The Texas bluebonnet, officially named the state flower of Texas in 1901, is famous for its vibrant cone-shaped clusters of cobalt blossoms topped with a tiny white peak resembling a pioneer woman\'s sunbonnet.' },
      { kind: 'heading', text: 'Surviving Winter Underground' },
      { kind: 'p', text: 'While tourists admire the flowers in April, the bluebonnet\'s secret life begins months earlier in October. Female bluebonnet plants drop hard-coated black seeds during the hot summer. The tough exterior shell protects the tiny embryo from dry heat, drought, and hungry birds. In autumn, winter rains soften the seed coat, allowing a small rosette—a flat circular cluster of green leaves hugging close to the dirt—to sprout before the first winter frost.' },
      { kind: 'heading', text: 'Partnership with Prairie Soil' },
      { kind: 'p', text: 'Bluebonnets thrive in poor, rocky soil where other garden plants wither and die. They succeed because their root nodules host microscopic bacteria called rhizobia. These beneficial microbes pull nitrogen gas directly from the atmosphere and convert it into rich plant nutrients. When the flowers eventually dry up in late May, they return enriched nitrogen to the earth, creating fertile ground for grasses and sunflowers.' },
      { kind: 'heading', text: 'Protecting Our State Treasure' },
      { kind: 'p', text: 'Contrary to a popular myth, there is no Texas law making it illegal to pick bluebonnets. However, conservationists strongly discourage picking them. Leaving the blossoms in place allows the flowers to drop their seeds for next year\'s crop, ensuring that future generations can enjoy Texas\'s beloved spring tradition.' },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:3.9D.i', cites: [1, 2, 3],
      stem: 'What is the central idea of the selection?',
      choices: [
        ['Bluebonnets only grow inside heated greenhouses during the winter.', 'Bluebonnets grow naturally in open pastures and roadsides.'],
        'The Texas bluebonnet has remarkable adaptations that allow it to survive harsh conditions, enrich the soil, and produce stunning spring blooms.',
        ['Pioneer sunbonnets were made from dried bluebonnet petals.', 'The flower shape resembles a sunbonnet, but was not used to make hats.'],
        ['Texas roadsides have no native plant life except during April.', 'Many native plants grow on Texas roadsides.'],
      ],
      answer: 1,
      explain: 'The text explores the life cycle of the bluebonnet, its hard seed coat, its ability to survive winter, its nitrogen-fixing roots, and its iconic spring blooms.',
    }),
    mcq({
      standard: 'rla:3.10C', cites: [1, 2, 3, 4],
      stem: 'Why does the author include bold subheadings above each section of text?',
      choices: [
        ['To list words that are difficult to spell.', 'The subheadings indicate topics, not spelling words.'],
        'To preview the main topic discussed in each section of the passage.',
        ['To ask questions that the reader must answer on a test.', 'The subheadings are descriptive statements, not questions.'],
        ['To give credit to famous photographers.', 'No photographer credits appear in the subheadings.'],
      ],
      answer: 1,
      explain: 'Subheadings like "Surviving Winter Underground" and "Partnership with Prairie Soil" help readers navigate the passage by previewing each section\'s main subject.',
    }),
    mcq({
      standard: 'rla:3.9D.iii', cites: [3],
      stem: 'What organizational pattern does the author use in paragraph 3 to explain why bluebonnets flourish in poor soil?',
      choices: [
        'Cause and effect, showing how bacteria in root nodules produce nitrogen, causing the plants to thrive and enriching the surrounding dirt.',
        ['Chronological sequence listing historical dates from 1800 to 1900.', 'No dates from the 1800s are discussed in paragraph 3.'],
        ['Compare and contrast explaining why roses smell sweeter than daisies.', 'Roses and daisies are not discussed.'],
        ['Problem and solution describing how farmers build fences around cows.', 'Fencing is not discussed in paragraph 3.'],
      ],
      answer: 0,
      explain: 'Paragraph 3 explains cause and effect: the cause is bacteria in root nodules capturing nitrogen, and the effect is enabling the plant to grow in rocky dirt and fertilize the soil.',
    }),
    mcq({
      standard: 'rla:3.3B', cites: [2],
      stem: 'In paragraph 2, what context clue helps the reader understand the meaning of the word **rosette**?',
      choices: [
        '"...a flat circular cluster of green leaves hugging close to the dirt..."',
        ['"...drop hard-coated black seeds during the hot summer..."', 'This describes the seeds, not the rosette.'],
        ['"...officially named the state flower of Texas in 1901..."', 'This describes state designation in paragraph 1.'],
        ['"...enriching the surrounding dirt..."', 'This describes soil in paragraph 3.'],
      ],
      answer: 0,
      explain: 'The phrase following the dash explicitly defines rosette as "a flat circular cluster of green leaves hugging close to the dirt."',
    }),
    mcq({
      standard: 'rla:3.6F', cites: [4],
      stem: 'What can the reader infer from the advice given by conservationists in paragraph 4?',
      choices: [
        ['Picking flowers helps seeds scatter faster across the highway.', 'Picking flowers prevents seeds from developing and scattering.'],
        ['Police officers arrest anyone who takes a photograph in a bluebonnet field.', 'Photographing bluebonnets is encouraged and legal.'],
        'Preserving wild blooms allows plants to complete their natural seed cycle for future years.',
        ['Bluebonnet seeds can only be purchased from hardware stores.', 'Bluebonnets reseed themselves naturally in the wild.'],
      ],
      answer: 2,
      explain: 'Conservationists encourage leaving blooms so they can drop seeds naturally, ensuring flowers return every spring without human replanting.',
    }),
    mcq({
      standard: 'rla:3.7C', cites: [2],
      stem: 'Which quotation from paragraph 2 explains how the seed survives the harsh summer weather?',
      choices: [
        '"The tough exterior shell protects the tiny embryo from dry heat, drought, and hungry birds."',
        ['"Every spring across the rolling hills of Central and South Texas..."', 'This is the opening of paragraph 1.'],
        ['"Bluebonnets thrive in poor, rocky soil where other garden plants wither..."', 'This describes soil in paragraph 3.'],
        ['"Leaving the blossoms in place allows the flowers to drop their seeds..."', 'This is conservation advice from paragraph 4.'],
      ],
      answer: 0,
      explain: 'The tough exterior shell protecting the embryo from dry heat, drought, and birds explains how the seed endures summer.',
    }),
  ],
});
