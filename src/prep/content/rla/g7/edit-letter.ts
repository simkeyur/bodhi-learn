// Grade 7 editing draft: Formal Proposal Letter to Principal.
import { inq, makeSet, mcq } from '../author.ts';

export const EDIT_LETTER = makeSet({
  id: 'g7-edit-letter',
  grade: 7,
  kind: 'editing',
  title: 'A Modern Commons for Oak Creek',
  intro: 'Sophia wrote this formal proposal letter to Principal Martinez on behalf of the student council. Read Sophia\'s letter and look for any revisions and corrections she needs to make. Then answer the questions.',
  passages: [{
    id: 'g7-edit-letter-p',
    title: 'A Modern Commons for Oak Creek',
    genre: 'persuasive',
    blocks: [
      { kind: 'sentences', sentences: [
        'Dear Principal Martinez,',
        'On behalf of the Oak Creek Middle School student council, I am writing to propose a vital and transformative enhancement to our campus library facility.',
        'Over the past decade, student academic research habits, digital technology requirements, and collaborative learning methods have evolved dramatically.',
        'However, our current library space remains configured almost exclusively for individual, silent reading with rigid rows of heavy wooden carrels.',
      ] },
      { kind: 'sentences', sentences: [
        'To meet the diverse academic needs of modern twenty-first-century learners, we recommend converting the underutilized west wing of the library into a dynamic digital commons.',
        'This modern flexible space would feature modular desks on wheels, ergonomic seating, and interactive digital display screens for group presentations.',
        'Students could actively collaborate on multimedia history documentaries, scientific research posters, and peer tutoring sessions without disturbing students studying quietly nearby.',
      ] },
      { kind: 'sentences', sentences: [
        'Furthermore, our student council recently conducted a comprehensive, school-wide survey regarding student library usage.',
        'Eighty-four percent of surveyed students indicated that they would enthusiastically utilize the library after school hours if collaborative group study rooms were available.',
        'By investing in this modern collaborative commons, Oak Creek Middle School can foster essential skills of technological literacy, teamwork, and creative problem-solving.',
        'Thank you for your continued dedication to empowering students and enhancing academic opportunities on our campus.',
      ] },
    ],
  }],
  items: [
    mcq({
      standard: 'rla:7.10B.i', cites: [10],
      stem: 'Sophia wants to strengthen the concluding paragraph with a clear, persuasive call to action. Which sentence should follow sentence 10?',
      choices: [
        ['Libraries are quiet places where students can check out mystery books and fantasy novels.', 'This repeats basic facts about traditional libraries rather than making a persuasive call to action.'],
        'We respectfully request an opportunity to present our comprehensive commons proposal and student budget model at the next campus site-based committee meeting.',
        ['Some schools in neighboring districts have already spent lots of money on video games.', 'This distracts with irrelevant spending habits of other districts.'],
        ['If you reject this idea, the student council will stop organizing the annual spring dance.', 'This adopts an inappropriate confrontational tone.'],
      ],
      answer: 1,
      explain: 'A formal call to action respectfully requests a specific next step: presenting the proposal and budget to the site-based decision committee.',
    }),
    mcq({
      standard: 'rla:7.10B.ii', cites: [8, 9],
      stem: 'Sophia wants to add supporting data after sentence 9 to substantiate student interest. Which sentence best accomplishes this?',
      choices: [
        'Additionally, over seventy percent of faculty members reported that their academic assignments now require collaborative multimedia presentations.',
        ['Many students enjoy using their smartphones during lunch break.', 'Smartphones at lunch do not support academic library commons use.'],
        ['The school cafeteria recently introduced vegetarian options on Tuesdays.', 'Dietary menu items are completely unrelated to library facilities.'],
        ['Several students surveyed admitted that they sometimes forget their library cards at home.', 'This minor logistical detail does not support the proposal.'],
      ],
      answer: 0,
      explain: 'Adding faculty survey data substantiates that teachers actively assign group projects, validating the academic necessity of the commons.',
    }),
    mcq({
      standard: 'rla:7.10C', cites: [4],
      stem: 'Sophia wants to ensure a professional, respectful tone throughout the letter. How should she revise the phrase "rigid rows of heavy wooden carrels" in sentence 4?',
      choices: [
        ['clunky ancient wooden boxes that look like museum relics', 'This uses informal and overly harsh slang.'],
        'traditional individual study carrels that do not accommodate cooperative teamwork',
        ['super boring tables that nobody wants to sit at anyway', 'This is colloquial and immature.'],
        ['annoying furniture that ruins everyone\'s study habits', 'This is overly dramatic and emotionally charged.'],
      ],
      answer: 1,
      explain: 'This revision maintains an objective, polite, and persuasive formal academic register suitable for addressing a principal.',
    }),
    inq({
      standard: 'rla:7.10D.vi', cites: [7],
      stem: 'Read sentence 7. Choose the correct subordinating conjunction to connect the introductory clause.',
      sentence: [
        { options: ['Because', 'Although', 'Unless', 'Whereas'], answer: 0 },
        ' group projects are an essential component of modern education, our campus must provide spaces that support collaborative learning.',
      ],
      explain: '"Because" establishes the clear cause-and-effect rationale supporting the need for collaborative learning spaces.',
    }),
    inq({
      standard: 'rla:7.10D.vii', cites: [2],
      stem: 'Read sentence 2. Choose the correct capitalization for the school organization.',
      sentence: [
        'On behalf of the ',
        { options: ['oak creek middle school student council', 'Oak Creek Middle School student council', 'Oak Creek middle school Student Council', 'oak creek Middle School Student Council'], answer: 1 },
        ', I am writing to propose a vital enhancement.',
      ],
      explain: '"Oak Creek Middle School" is the proper name of the institution and is capitalized, while "student council" is a common noun phrase.',
    }),
    inq({
      standard: 'rla:7.10D.viii', cites: [3],
      stem: 'Read sentence 3. Choose the correct punctuation for the compound sentence.',
      sentence: [
        'Student research habits have evolved dramatically',
        { options: [', but our library facility', '; but our library facility', 'but our library facility', ', and but our library facility'], answer: 0 },
        ' remains configured for individual study.',
      ],
      explain: 'A comma precedes the coordinating conjunction "but" when connecting two independent clauses.',
    }),
  ],
});
