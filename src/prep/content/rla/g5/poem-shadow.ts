// Grade 5 poetry: Robert Louis Stevenson's "My Shadow" (A Child's Garden of Verses, 1885), public domain.
// Questions cover speaker, sound devices, figurative language, inference and words in context.

import { makeSet, mcq, msq, twoq } from '../author.ts';

const L = (text: string, stanzaEnd = false) => ({ kind: 'line' as const, text, stanzaEnd });

export const POEM_SHADOW = makeSet({
  id: 'g5-poem-shadow',
  grade: 5,
  kind: 'reading',
  title: 'My Shadow',
  intro: 'Read the poem and choose the best answer to each question.',
  passages: [{
    id: 'g5-poem-shadow-p',
    title: 'My Shadow',
    genre: 'poetry',
    author: 'Robert Louis Stevenson',
    source: "A Child's Garden of Verses, 1885",
    blocks: [
      L('I have a little shadow that goes in and out with me,'),
      L('And what can be the use of him is more than I can see.'),
      L('He is very, very like me from the heels up to the head;'),
      L('And I see him jump before me, when I jump into my bed.', true),
      L('The funniest thing about him is the way he likes to grow—'),
      L('Not at all like proper children, which is always very slow;'),
      L('For he sometimes shoots up taller like an india-rubber ball,'),
      L("And he sometimes gets so little that there's none of him at all.", true),
      L("He hasn't got a notion of how children ought to play,"),
      L('And can only make a fool of me in every sort of way.'),
      L("He stays so close beside me, he's a coward you can see;"),
      L("I'd think shame to stick to nursie as that shadow sticks to me!", true),
      L('One morning, very early, before the sun was up,'),
      L('I rose and found the shining dew on every buttercup;'),
      L('But my lazy little shadow, like an arrant sleepy-head,'),
      L('Had stayed at home behind me and was fast asleep in bed.'),
    ],
  }],
  items: [
    mcq({
      standard: 'rla:5.9B',
      stem: 'Who is the speaker of the poem?',
      choices: [
        ['Robert Louis Stevenson as a grown man', 'Stevenson is the poet. The speaker is the voice in the poem, which can be someone else.'],
        'A young child who is puzzled by his shadow',
        ['The shadow itself', 'The shadow is called "he" and "him." Someone else is talking about it.'],
        ['A nurse who takes care of children', 'The speaker mentions "nursie," so the speaker is the child she cares for.'],
      ],
      answer: 1,
      explain: 'The speaker is the "I" in the poem. He jumps into bed, has a "nursie," and talks about how "proper children" grow, so the speaker is a young child. The poet and the speaker are not always the same.',
    }),
    mcq({
      standard: 'rla:5.9B',
      stem: 'Which sound device does the poet use in every stanza?',
      choices: [
        'Pairs of lines that end with rhyming words, such as "me" and "see"',
        ['Lines that all begin with the same word', 'The lines begin with different words.'],
        ['Words that imitate sounds, such as "buzz" or "crash"', 'There are no sound words like these in the poem.'],
        ['Lines that have no rhythm or rhyme at all', 'The poem has a strong rhythm and rhyme.'],
      ],
      answer: 0,
      explain: 'Each pair of lines rhymes: me / see, head / bed, grow / slow, ball / all. Rhyming pairs like these are called couplets. They give the poem a bouncy, sing-song sound.',
    }),
    mcq({
      standard: 'rla:5.10D', cites: [7],
      stem: 'In line 7, the shadow "shoots up taller like an india-rubber ball." What does this simile show?',
      choices: [
        ['The shadow is round and bouncy.', 'The simile compares how fast the shadow changes, not its shape.'],
        ['The shadow is made of rubber.', 'A simile compares two things. It does not mean one is made of the other.'],
        'The shadow can grow tall very suddenly.',
        ['The shadow likes to play ball games.', 'The poem says the shadow does not know how children play.'],
      ],
      answer: 2,
      explain: 'A rubber ball shoots up fast when it bounces. Comparing the shadow to it shows how suddenly a shadow can stretch tall, unlike children, who grow "very slow."',
    }),
    msq({
      standard: 'rla:5.10D',
      stem: 'The poet describes the shadow as if it were a person. Which **two** lines show this?',
      choices: [
        "\"He hasn't got a notion of how children ought to play,\" (line 9)",
        ['"I rose and found the shining dew on every buttercup;" (line 14)', 'This line describes the morning, not the shadow.'],
        '"But my lazy little shadow, like an arrant sleepy-head," (line 15)',
        ['"One morning, very early, before the sun was up," (line 13)', 'This tells when the morning event happens.'],
        ['"I have a little shadow that goes in and out with me," (line 1)', 'A real shadow does go in and out with you, so this is not a human trait.'],
      ],
      answers: [0, 2],
      explain: 'Giving human traits to something that is not human is called personification. Knowing how children play (line 9) and being lazy (line 15) are human traits.',
    }),
    twoq({
      standard: 'rla:5.6F', cites: [13, 16],
      a: {
        prompt: 'Part A: What is the real reason the shadow "was fast asleep in bed" in the last stanza?',
        choices: [
          ['The shadow was tired from playing the day before.', 'The speaker pretends the shadow is tired, but shadows do not get tired.'],
          'There was no sunlight yet, so there was no shadow.',
          ['The speaker left the shadow behind on purpose.', 'The speaker does not choose to leave it.'],
          ['The shadow was angry at the speaker.', 'Nothing in the poem shows the shadow is angry.'],
        ],
        answer: 1,
      },
      b: {
        prompt: 'Part B: Which line best supports the answer to Part A?',
        choices: [
          ['"He stays so close beside me, he\'s a coward you can see;" (line 11)', 'This describes the shadow on other days.'],
          ['"And can only make a fool of me in every sort of way." (line 10)', 'This is about how the shadow behaves when it is there.'],
          '"One morning, very early, before the sun was up," (line 13)',
          ['"The funniest thing about him is the way he likes to grow—" (line 5)', 'This is about the shadow changing size.'],
        ],
        answer: 2,
      },
      explain: 'Shadows need light. Line 13 says it was "before the sun was up," so there was no light to make a shadow. The speaker playfully says the shadow stayed in bed.',
    }),
    mcq({
      standard: 'rla:5.3B', cites: [9],
      stem: 'Read line 9. "He hasn\'t got a notion of how children ought to play," What does the word **notion** mean?',
      choices: [
        'idea',
        ['game', 'The line is about not knowing how to play, not about a game itself.'],
        ['friend', 'Replacing notion with friend does not make sense in the line.'],
        ['reason', 'This is close, but the line says the shadow does not understand how to play.'],
      ],
      answer: 0,
      explain: 'Not having "a notion of how children ought to play" means not having any idea how to play. You can test a meaning by putting it in place of the word: "He hasn\'t got an idea of how children ought to play."',
    }),
  ],
});
