import { ExamPaper, DBEQuestion } from '../types/exam'

// Sample Grade 4 Term 1 Exam Paper (DBE-style)
export const grade4Term1: ExamPaper = {
  id: 'g4-t1-2025',
  title: 'Grade 4 Mathematics - Term 1 Assessment',
  titleAf: 'Graad 4 Wiskunde - Kwartaal 1 Assessering',
  grade: 4,
  term: 1,
  year: 2025,
  totalMarks: 50,
  duration: 60,
  instructions: [
    'Read all questions carefully.',
    'Answer ALL questions.',
    'Show all your working out.',
    'You may NOT use a calculator.',
    'Write neatly and clearly.',
  ],
  instructionsAf: [
    'Lees alle vrae noukeurig.',
    'Beantwoord ALLE vrae.',
    'Wys al jou bewerkings.',
    'Jy mag NIE \'n sakrekenaar gebruik nie.',
    'Skryf netjies en duidelik.',
  ],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      nameAf: 'Afdeling A: Meervoudige Keuse',
      instructions: 'Choose the correct answer for each question.',
      instructionsAf: 'Kies die korrekte antwoord vir elke vraag.',
      totalMarks: 20,
      questions: [
        {
          id: 'g4-q1',
          question: 'What is 245 + 378?',
          questionAf: 'Wat is 245 + 378?',
          type: 'multiple-choice',
          options: ['613', '623', '633', '643'],
          correctAnswer: '623',
          marks: 2,
          capsAlignment: {
            grade: 4,
            term: 1,
            topic: 'Addition',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Add whole numbers with 3 digits'
          },
          difficulty: 'easy'
        },
        {
          id: 'g4-q2',
          question: 'Round 487 to the nearest hundred:',
          type: 'multiple-choice',
          options: ['400', '480', '490', '500'],
          correctAnswer: '500',
          marks: 2,
          capsAlignment: {
            grade: 4,
            term: 1,
            topic: 'Number Concepts',
            cognitiveLevel: 'knowledge',
            assessmentStandard: 'Round off to the nearest 5, 10, 100'
          },
          difficulty: 'easy'
        },
        {
          id: 'g4-q3',
          question: 'What is the value of 6 in the number 3 641?',
          type: 'multiple-choice',
          options: ['6', '60', '600', '6000'],
          correctAnswer: '600',
          marks: 2,
          capsAlignment: {
            grade: 4,
            term: 1,
            topic: 'Number Concepts',
            cognitiveLevel: 'knowledge',
            assessmentStandard: 'Know place value of digits'
          },
          difficulty: 'easy'
        },
        {
          id: 'g4-q4',
          question: '8 × 7 = ?',
          type: 'multiple-choice',
          options: ['54', '56', '63', '64'],
          correctAnswer: '56',
          marks: 2,
          capsAlignment: {
            grade: 4,
            term: 1,
            topic: 'Multiplication',
            cognitiveLevel: 'knowledge',
            assessmentStandard: 'Multiplication tables to 10'
          },
          difficulty: 'easy'
        },
        {
          id: 'g4-q5',
          question: 'Thabo has R125. He buys a toy for R78. How much money does he have left?',
          type: 'multiple-choice',
          options: ['R37', 'R47', 'R53', 'R57'],
          correctAnswer: 'R47',
          marks: 3,
          capsAlignment: {
            grade: 4,
            term: 1,
            topic: 'Subtraction',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Solve problems in context'
          },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      instructions: 'Show all working out. No calculators allowed.',
      totalMarks: 20,
      questions: [
        {
          id: 'g4-q6',
          question: 'Calculate: 456 + 289',
          type: 'calculation',
          correctAnswer: '745',
          marks: 3,
          showWorking: true,
          capsAlignment: {
            grade: 4,
            term: 1,
            topic: 'Addition',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Add 3-digit numbers'
          },
          difficulty: 'easy',
          explanation: '456 + 289 = 745 (Add units: 6+9=15, carry 1; tens: 5+8+1=14, carry 1; hundreds: 4+2+1=7)'
        },
        {
          id: 'g4-q7',
          question: 'Calculate: 800 - 456',
          type: 'calculation',
          correctAnswer: '344',
          marks: 3,
          showWorking: true,
          capsAlignment: {
            grade: 4,
            term: 1,
            topic: 'Subtraction',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Subtract 3-digit numbers'
          },
          difficulty: 'medium',
          explanation: '800 - 456 = 344 (Decompose: 800 = 7 hundreds + 10 tens)'
        },
        {
          id: 'g4-q8',
          question: 'A school has 6 classrooms. Each classroom has 32 learners. How many learners are there in total?',
          type: 'word-problem',
          correctAnswer: '192',
          marks: 4,
          showWorking: true,
          capsAlignment: {
            grade: 4,
            term: 1,
            topic: 'Multiplication',
            cognitiveLevel: 'problem-solving',
            assessmentStandard: 'Solve word problems involving multiplication'
          },
          difficulty: 'medium',
          explanation: '6 × 32 = 192 learners (6 × 30 = 180, 6 × 2 = 12, 180 + 12 = 192)'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      instructions: 'Read each problem carefully and show all working.',
      totalMarks: 10,
      questions: [
        {
          id: 'g4-q9',
          question: 'A farmer has 245 chickens and 178 ducks. How many birds does the farmer have altogether? If 56 birds are sold, how many birds are left?',
          type: 'word-problem',
          correctAnswer: '367',
          marks: 5,
          showWorking: true,
          capsAlignment: {
            grade: 4,
            term: 1,
            topic: 'Mixed Operations',
            cognitiveLevel: 'problem-solving',
            assessmentStandard: 'Solve multi-step problems'
          },
          difficulty: 'hard',
          explanation: 'Step 1: 245 + 178 = 423 birds. Step 2: 423 - 56 = 367 birds left'
        },
        {
          id: 'g4-q10',
          question: 'A shop sells pencils in packs of 8. Mrs. Dlamini buys 7 packs. How many pencils does she have? If she gives 20 pencils to her class, how many pencils does she have left?',
          type: 'word-problem',
          correctAnswer: '36',
          marks: 5,
          showWorking: true,
          capsAlignment: {
            grade: 4,
            term: 1,
            topic: 'Mixed Operations',
            cognitiveLevel: 'complex',
            assessmentStandard: 'Solve problems with multiple operations'
          },
          difficulty: 'hard',
          explanation: 'Step 1: 7 × 8 = 56 pencils. Step 2: 56 - 20 = 36 pencils left'
        }
      ]
    }
  ],
  questions: [] // Combined from sections
}

// Flatten sections into questions array
grade4Term1.questions = grade4Term1.sections?.flatMap(s => s.questions) || []

// Grade 4 Term 2 Exam Paper
export const grade4Term2: ExamPaper = {
  id: 'g4-t2-2025',
  title: 'Grade 4 Mathematics - Term 2 Assessment',
  grade: 4,
  term: 2,
  year: 2025,
  totalMarks: 50,
  duration: 60,
  instructions: [
    'Read all questions carefully.',
    'Answer ALL questions.',
    'Show all your working out.',
    'You may NOT use a calculator.',
    'Write neatly and clearly.',
  ],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      totalMarks: 16,
      questions: [
        {
          id: 'g4t2-q1',
          question: 'What is 1/2 + 1/4?',
          type: 'multiple-choice',
          options: ['2/4', '2/6', '3/4', '1/6'],
          correctAnswer: '3/4',
          marks: 2,
          capsAlignment: { grade: 4, term: 2, topic: 'Fractions', cognitiveLevel: 'routine', assessmentStandard: 'Add fractions' },
          difficulty: 'easy'
        },
        {
          id: 'g4t2-q2',
          question: 'What is 2.5 + 1.3?',
          type: 'multiple-choice',
          options: ['3.7', '3.8', '4.8', '2.8'],
          correctAnswer: '3.8',
          marks: 2,
          capsAlignment: { grade: 4, term: 2, topic: 'Decimals', cognitiveLevel: 'routine', assessmentStandard: 'Add decimal fractions' },
          difficulty: 'easy'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      totalMarks: 20,
      questions: [
        {
          id: 'g4t2-q3',
          question: 'Calculate: 56 × 7',
          type: 'calculation',
          correctAnswer: '392',
          marks: 3,
          showWorking: true,
          capsAlignment: { grade: 4, term: 2, topic: 'Multiplication', cognitiveLevel: 'routine', assessmentStandard: 'Multiply 2-digit by 1-digit' },
          difficulty: 'medium'
        },
        {
          id: 'g4t2-q4',
          question: 'Calculate: 84 ÷ 4',
          type: 'calculation',
          correctAnswer: '21',
          marks: 3,
          showWorking: true,
          capsAlignment: { grade: 4, term: 2, topic: 'Division', cognitiveLevel: 'routine', assessmentStandard: 'Division with remainders' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      totalMarks: 14,
      questions: [
        {
          id: 'g4t2-q5',
          question: 'A book costs R35. How much will 4 books cost?',
          type: 'word-problem',
          correctAnswer: '140',
          marks: 4,
          showWorking: true,
          capsAlignment: { grade: 4, term: 2, topic: 'Multiplication', cognitiveLevel: 'problem-solving', assessmentStandard: 'Money problems' },
          difficulty: 'medium'
        }
      ]
    }
  ],
  questions: []
}
grade4Term2.questions = grade4Term2.sections?.flatMap(s => s.questions) || []

// Grade 4 Term 3 Exam Paper
export const grade4Term3: ExamPaper = {
  id: 'g4-t3-2025',
  title: 'Grade 4 Mathematics - Term 3 Assessment',
  grade: 4,
  term: 3,
  year: 2025,
  totalMarks: 50,
  duration: 60,
  instructions: [
    'Read all questions carefully.',
    'Answer ALL questions.',
    'Show all your working out.',
    'You may NOT use a calculator.',
    'Write neatly and clearly.',
  ],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      totalMarks: 16,
      questions: [
        {
          id: 'g4t3-q1',
          question: 'What is the perimeter of a rectangle with length 10 cm and width 5 cm?',
          type: 'multiple-choice',
          options: ['15 cm', '20 cm', '30 cm', '50 cm'],
          correctAnswer: '30 cm',
          marks: 2,
          capsAlignment: { grade: 4, term: 3, topic: 'Geometry', cognitiveLevel: 'routine', assessmentStandard: 'Calculate perimeter' },
          difficulty: 'medium'
        },
        {
          id: 'g4t3-q2',
          question: 'What is 3/4 of 20?',
          type: 'multiple-choice',
          options: ['10', '12', '15', '18'],
          correctAnswer: '15',
          marks: 2,
          capsAlignment: { grade: 4, term: 3, topic: 'Fractions', cognitiveLevel: 'routine', assessmentStandard: 'Fractions of whole numbers' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      totalMarks: 20,
      questions: [
        {
          id: 'g4t3-q3',
          question: 'Calculate: 234 + 567',
          type: 'calculation',
          correctAnswer: '801',
          marks: 3,
          showWorking: true,
          capsAlignment: { grade: 4, term: 3, topic: 'Addition', cognitiveLevel: 'routine', assessmentStandard: 'Add 3-digit numbers' },
          difficulty: 'easy'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      totalMarks: 14,
      questions: [
        {
          id: 'g4t3-q4',
          question: 'Sarah has 100 marbles. She gives 1/4 to her friend. How many marbles does she have left?',
          type: 'word-problem',
          correctAnswer: '75',
          marks: 4,
          showWorking: true,
          capsAlignment: { grade: 4, term: 3, topic: 'Fractions', cognitiveLevel: 'problem-solving', assessmentStandard: 'Fractions in context' },
          difficulty: 'medium'
        }
      ]
    }
  ],
  questions: []
}
grade4Term3.questions = grade4Term3.sections?.flatMap(s => s.questions) || []

// Grade 4 Term 4 Exam Paper
export const grade4Term4: ExamPaper = {
  id: 'g4-t4-2025',
  title: 'Grade 4 Mathematics - Term 4 Assessment',
  grade: 4,
  term: 4,
  year: 2025,
  totalMarks: 50,
  duration: 60,
  instructions: [
    'Read all questions carefully.',
    'Answer ALL questions.',
    'Show all your working out.',
    'You may NOT use a calculator.',
    'Write neatly and clearly.',
  ],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      totalMarks: 16,
      questions: [
        {
          id: 'g4t4-q1',
          question: 'What is 500 - 237?',
          type: 'multiple-choice',
          options: ['253', '263', '273', '283'],
          correctAnswer: '263',
          marks: 2,
          capsAlignment: { grade: 4, term: 4, topic: 'Subtraction', cognitiveLevel: 'routine', assessmentStandard: 'Subtract 3-digit numbers' },
          difficulty: 'medium'
        },
        {
          id: 'g4t4-q2',
          question: 'What is the area of a square with side 6 cm?',
          type: 'multiple-choice',
          options: ['12 cm²', '24 cm²', '36 cm²', '48 cm²'],
          correctAnswer: '36 cm²',
          marks: 2,
          capsAlignment: { grade: 4, term: 4, topic: 'Geometry', cognitiveLevel: 'routine', assessmentStandard: 'Calculate area' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      totalMarks: 20,
      questions: [
        {
          id: 'g4t4-q3',
          question: 'Calculate: 144 ÷ 12',
          type: 'calculation',
          correctAnswer: '12',
          marks: 3,
          showWorking: true,
          capsAlignment: { grade: 4, term: 4, topic: 'Division', cognitiveLevel: 'routine', assessmentStandard: 'Division facts' },
          difficulty: 'easy'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      totalMarks: 14,
      questions: [
        {
          id: 'g4t4-q4',
          question: 'A garden is 8 m long and 5 m wide. What is its area?',
          type: 'word-problem',
          correctAnswer: '40',
          marks: 4,
          showWorking: true,
          capsAlignment: { grade: 4, term: 4, topic: 'Geometry', cognitiveLevel: 'problem-solving', assessmentStandard: 'Area problems' },
          difficulty: 'medium'
        }
      ]
    }
  ],
  questions: []
}
grade4Term4.questions = grade4Term4.sections?.flatMap(s => s.questions) || []

// Grade 5 Term 1 Exam Paper
export const grade5Term1: ExamPaper = {
  id: 'g5-t1-2025',
  title: 'Grade 5 Mathematics - Term 1 Assessment',
  grade: 5,
  term: 1,
  year: 2025,
  totalMarks: 60,
  duration: 90,
  instructions: [
    'Read all questions carefully.',
    'Answer ALL questions.',
    'Show all your working out.',
    'You may NOT use a calculator.',
    'Write neatly and clearly.',
  ],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      instructions: 'Choose the correct answer for each question.',
      totalMarks: 20,
      questions: [
        {
          id: 'g5-q1',
          question: 'What is 4,568 + 2,734?',
          type: 'multiple-choice',
          options: ['7,292', '7,302', '7,312', '7,322'],
          correctAnswer: '7,302',
          marks: 2,
          capsAlignment: {
            grade: 5,
            term: 1,
            topic: 'Addition',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Add whole numbers with at least 4 digits'
          },
          difficulty: 'easy'
        },
        {
          id: 'g5-q2',
          question: 'What is 3/4 + 1/4?',
          type: 'multiple-choice',
          options: ['1/2', '3/4', '1', '4/8'],
          correctAnswer: '1',
          marks: 2,
          capsAlignment: {
            grade: 5,
            term: 1,
            topic: 'Fractions',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Add fractions with same denominators'
          },
          difficulty: 'easy'
        },
        {
          id: 'g5-q3',
          question: 'What is 7 × 8?',
          type: 'multiple-choice',
          options: ['54', '56', '63', '64'],
          correctAnswer: '56',
          marks: 2,
          capsAlignment: {
            grade: 5,
            term: 1,
            topic: 'Multiplication',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Multiplication tables to 12'
          },
          difficulty: 'easy'
        },
        {
          id: 'g5-q4',
          question: 'What is 144 ÷ 12?',
          type: 'multiple-choice',
          options: ['11', '12', '13', '14'],
          correctAnswer: '12',
          marks: 2,
          capsAlignment: {
            grade: 5,
            term: 1,
            topic: 'Division',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Division with multiples of 12'
          },
          difficulty: 'easy'
        },
        {
          id: 'g5-q5',
          question: 'Which fraction is equivalent to 1/2?',
          type: 'multiple-choice',
          options: ['2/3', '3/6', '4/6', '5/8'],
          correctAnswer: '3/6',
          marks: 2,
          capsAlignment: {
            grade: 5,
            term: 1,
            topic: 'Fractions',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Recognize equivalent fractions'
          },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      instructions: 'Show all your working.',
      totalMarks: 20,
      questions: [
        {
          id: 'g5-q6',
          question: 'Calculate: 456 × 23',
          type: 'calculation',
          correctAnswer: '10488',
          marks: 4,
          showWorking: true,
          capsAlignment: {
            grade: 5,
            term: 1,
            topic: 'Multiplication',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Multiply 3-digit by 2-digit numbers'
          },
          difficulty: 'medium'
        },
        {
          id: 'g5-q7',
          question: 'Calculate: 3.5 + 2.7',
          type: 'calculation',
          correctAnswer: '6.2',
          marks: 3,
          showWorking: true,
          capsAlignment: {
            grade: 5,
            term: 1,
            topic: 'Decimals',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Add decimal fractions to 2 decimal places'
          },
          difficulty: 'medium'
        },
        {
          id: 'g5-q8',
          question: 'Calculate: 2/5 + 1/5',
          type: 'calculation',
          correctAnswer: '3/5',
          marks: 3,
          showWorking: true,
          capsAlignment: {
            grade: 5,
            term: 1,
            topic: 'Fractions',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Add fractions with same denominators'
          },
          difficulty: 'easy'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      instructions: 'Read carefully and show all calculations.',
      totalMarks: 20,
      questions: [
        {
          id: 'g5-q9',
          question: 'A rectangle has a length of 12 cm and a width of 8 cm. What is its perimeter?',
          type: 'word-problem',
          correctAnswer: '40',
          marks: 4,
          showWorking: true,
          capsAlignment: {
            grade: 5,
            term: 1,
            topic: 'Geometry',
            cognitiveLevel: 'problem-solving',
            assessmentStandard: 'Calculate perimeter of rectangles'
          },
          difficulty: 'medium'
        },
        {
          id: 'g5-q10',
          question: 'Sarah has 48 sweets. She wants to share them equally among 6 friends. How many sweets will each friend get?',
          type: 'word-problem',
          correctAnswer: '8',
          marks: 4,
          showWorking: true,
          capsAlignment: {
            grade: 5,
            term: 1,
            topic: 'Division',
            cognitiveLevel: 'problem-solving',
            assessmentStandard: 'Solve word problems involving division'
          },
          difficulty: 'medium'
        }
      ]
    }
  ],
  questions: []
}

grade5Term1.questions = grade5Term1.sections?.flatMap(s => s.questions) || []

// Grade 5 Term 2 Exam Paper
export const grade5Term2: ExamPaper = {
  id: 'g5-t2-2025',
  title: 'Grade 5 Mathematics - Term 2 Assessment',
  grade: 5,
  term: 2,
  year: 2025,
  totalMarks: 60,
  duration: 90,
  instructions: ['Read all questions carefully.', 'Answer ALL questions.', 'Show all your working out.', 'You may NOT use a calculator.', 'Write neatly and clearly.'],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      totalMarks: 20,
      questions: [
        {
          id: 'g5t2-q1',
          question: 'What is 2/3 - 1/3?',
          type: 'multiple-choice',
          options: ['1/3', '1/6', '3/3', '2/6'],
          correctAnswer: '1/3',
          marks: 2,
          capsAlignment: { grade: 5, term: 2, topic: 'Fractions', cognitiveLevel: 'routine', assessmentStandard: 'Subtract fractions' },
          difficulty: 'easy'
        },
        {
          id: 'g5t2-q2',
          question: 'What is 4.2 - 1.8?',
          type: 'multiple-choice',
          options: ['2.2', '2.4', '3.4', '3.6'],
          correctAnswer: '2.4',
          marks: 2,
          capsAlignment: { grade: 5, term: 2, topic: 'Decimals', cognitiveLevel: 'routine', assessmentStandard: 'Subtract decimals' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      totalMarks: 20,
      questions: [
        {
          id: 'g5t2-q3',
          question: 'Calculate: 234 × 12',
          type: 'calculation',
          correctAnswer: '2808',
          marks: 4,
          showWorking: true,
          capsAlignment: { grade: 5, term: 2, topic: 'Multiplication', cognitiveLevel: 'routine', assessmentStandard: 'Multiply 3-digit by 2-digit' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      totalMarks: 20,
      questions: [
        {
          id: 'g5t2-q4',
          question: 'A car travels 75 km per hour. How far will it travel in 4 hours?',
          type: 'word-problem',
          correctAnswer: '300',
          marks: 4,
          showWorking: true,
          capsAlignment: { grade: 5, term: 2, topic: 'Multiplication', cognitiveLevel: 'problem-solving', assessmentStandard: 'Distance problems' },
          difficulty: 'medium'
        }
      ]
    }
  ],
  questions: []
}
grade5Term2.questions = grade5Term2.sections?.flatMap(s => s.questions) || []

// Grade 5 Term 3 Exam Paper
export const grade5Term3: ExamPaper = {
  id: 'g5-t3-2025',
  title: 'Grade 5 Mathematics - Term 3 Assessment',
  grade: 5,
  term: 3,
  year: 2025,
  totalMarks: 60,
  duration: 90,
  instructions: ['Read all questions carefully.', 'Answer ALL questions.', 'Show all your working out.', 'You may NOT use a calculator.', 'Write neatly and clearly.'],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      totalMarks: 20,
      questions: [
        {
          id: 'g5t3-q1',
          question: 'What is the area of a rectangle with length 15 cm and width 8 cm?',
          type: 'multiple-choice',
          options: ['23 cm²', '46 cm²', '120 cm²', '150 cm²'],
          correctAnswer: '120 cm²',
          marks: 2,
          capsAlignment: { grade: 5, term: 3, topic: 'Geometry', cognitiveLevel: 'routine', assessmentStandard: 'Calculate area' },
          difficulty: 'medium'
        },
        {
          id: 'g5t3-q2',
          question: 'What is 10% of 80?',
          type: 'multiple-choice',
          options: ['4', '6', '8', '10'],
          correctAnswer: '8',
          marks: 2,
          capsAlignment: { grade: 5, term: 3, topic: 'Percentages', cognitiveLevel: 'routine', assessmentStandard: 'Calculate simple percentages' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      totalMarks: 20,
      questions: [
        {
          id: 'g5t3-q3',
          question: 'Calculate: 840 ÷ 15',
          type: 'calculation',
          correctAnswer: '56',
          marks: 4,
          showWorking: true,
          capsAlignment: { grade: 5, term: 3, topic: 'Division', cognitiveLevel: 'routine', assessmentStandard: 'Long division' },
          difficulty: 'hard'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      totalMarks: 20,
      questions: [
        {
          id: 'g5t3-q4',
          question: 'A school has 450 learners. 2/5 of them are boys. How many boys are there?',
          type: 'word-problem',
          correctAnswer: '180',
          marks: 4,
          showWorking: true,
          capsAlignment: { grade: 5, term: 3, topic: 'Fractions', cognitiveLevel: 'problem-solving', assessmentStandard: 'Fractions of quantities' },
          difficulty: 'medium'
        }
      ]
    }
  ],
  questions: []
}
grade5Term3.questions = grade5Term3.sections?.flatMap(s => s.questions) || []

// Grade 5 Term 4 Exam Paper
export const grade5Term4: ExamPaper = {
  id: 'g5-t4-2025',
  title: 'Grade 5 Mathematics - Term 4 Assessment',
  grade: 5,
  term: 4,
  year: 2025,
  totalMarks: 60,
  duration: 90,
  instructions: ['Read all questions carefully.', 'Answer ALL questions.', 'Show all your working out.', 'You may NOT use a calculator.', 'Write neatly and clearly.'],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      totalMarks: 20,
      questions: [
        {
          id: 'g5t4-q1',
          question: 'What is 1/2 of 96?',
          type: 'multiple-choice',
          options: ['38', '42', '48', '52'],
          correctAnswer: '48',
          marks: 2,
          capsAlignment: { grade: 5, term: 4, topic: 'Fractions', cognitiveLevel: 'routine', assessmentStandard: 'Fractions of whole numbers' },
          difficulty: 'easy'
        },
        {
          id: 'g5t4-q2',
          question: 'Round 4,567 to the nearest hundred:',
          type: 'multiple-choice',
          options: ['4,500', '4,600', '5,000', '4,570'],
          correctAnswer: '4,600',
          marks: 2,
          capsAlignment: { grade: 5, term: 4, topic: 'Numbers', cognitiveLevel: 'routine', assessmentStandard: 'Rounding' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      totalMarks: 20,
      questions: [
        {
          id: 'g5t4-q3',
          question: 'Calculate: 6.5 × 8',
          type: 'calculation',
          correctAnswer: '52',
          marks: 4,
          showWorking: true,
          capsAlignment: { grade: 5, term: 4, topic: 'Decimals', cognitiveLevel: 'routine', assessmentStandard: 'Multiply decimals by whole numbers' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      totalMarks: 20,
      questions: [
        {
          id: 'g5t4-q4',
          question: 'A pizza is cut into 8 slices. Tom eats 3 slices. What fraction of the pizza is left?',
          type: 'word-problem',
          correctAnswer: '5/8',
          marks: 4,
          showWorking: true,
          capsAlignment: { grade: 5, term: 4, topic: 'Fractions', cognitiveLevel: 'problem-solving', assessmentStandard: 'Fractions in context' },
          difficulty: 'medium'
        }
      ]
    }
  ],
  questions: []
}
grade5Term4.questions = grade5Term4.sections?.flatMap(s => s.questions) || []

// Grade 6 Term 1 Exam Paper
export const grade6Term1: ExamPaper = {
  id: 'g6-t1-2025',
  title: 'Grade 6 Mathematics - Term 1 Assessment',
  grade: 6,
  term: 1,
  year: 2025,
  totalMarks: 70,
  duration: 90,
  instructions: [
    'Read all questions carefully.',
    'Answer ALL questions.',
    'Show all your working out.',
    'You may NOT use a calculator.',
    'Write neatly and clearly.',
  ],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      instructions: 'Choose the correct answer for each question.',
      totalMarks: 20,
      questions: [
        {
          id: 'g6-q1',
          question: 'What is 25% of 200?',
          type: 'multiple-choice',
          options: ['25', '50', '75', '100'],
          correctAnswer: '50',
          marks: 2,
          capsAlignment: {
            grade: 6,
            term: 1,
            topic: 'Percentages',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Calculate percentages of whole numbers'
          },
          difficulty: 'medium'
        },
        {
          id: 'g6-q2',
          question: 'What is 2/3 + 1/6?',
          type: 'multiple-choice',
          options: ['3/9', '5/6', '3/6', '4/6'],
          correctAnswer: '5/6',
          marks: 3,
          capsAlignment: {
            grade: 6,
            term: 1,
            topic: 'Fractions',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Add fractions with different denominators'
          },
          difficulty: 'medium'
        },
        {
          id: 'g6-q3',
          question: 'What is 3² + 4²?',
          type: 'multiple-choice',
          options: ['7', '12', '25', '49'],
          correctAnswer: '25',
          marks: 2,
          capsAlignment: {
            grade: 6,
            term: 1,
            topic: 'Exponents',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Calculate squares of numbers'
          },
          difficulty: 'medium'
        },
        {
          id: 'g6-q4',
          question: 'What is the area of a square with side 7 cm?',
          type: 'multiple-choice',
          options: ['14 cm²', '28 cm²', '49 cm²', '56 cm²'],
          correctAnswer: '49 cm²',
          marks: 2,
          capsAlignment: {
            grade: 6,
            term: 1,
            topic: 'Geometry',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Calculate area of squares'
          },
          difficulty: 'easy'
        },
        {
          id: 'g6-q5',
          question: 'What is 0.75 as a fraction?',
          type: 'multiple-choice',
          options: ['1/4', '1/2', '3/4', '7/5'],
          correctAnswer: '3/4',
          marks: 2,
          capsAlignment: {
            grade: 6,
            term: 1,
            topic: 'Decimals',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Convert decimals to fractions'
          },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      instructions: 'Show all your working.',
      totalMarks: 25,
      questions: [
        {
          id: 'g6-q6',
          question: 'Calculate: 784 × 36',
          type: 'calculation',
          correctAnswer: '28224',
          marks: 5,
          showWorking: true,
          capsAlignment: {
            grade: 6,
            term: 1,
            topic: 'Multiplication',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Multiply 3-digit by 2-digit numbers'
          },
          difficulty: 'medium'
        },
        {
          id: 'g6-q7',
          question: 'Calculate: 5.6 × 4',
          type: 'calculation',
          correctAnswer: '22.4',
          marks: 4,
          showWorking: true,
          capsAlignment: {
            grade: 6,
            term: 1,
            topic: 'Decimals',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Multiply decimals by whole numbers'
          },
          difficulty: 'medium'
        },
        {
          id: 'g6-q8',
          question: 'Calculate: 3/4 - 1/8',
          type: 'calculation',
          correctAnswer: '5/8',
          marks: 4,
          showWorking: true,
          capsAlignment: {
            grade: 6,
            term: 1,
            topic: 'Fractions',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Subtract fractions with different denominators'
          },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      instructions: 'Read carefully and show all calculations.',
      totalMarks: 25,
      questions: [
        {
          id: 'g6-q9',
          question: 'A shop sells a shirt for R120. During a sale, they offer 20% discount. What is the sale price?',
          type: 'word-problem',
          correctAnswer: '96',
          marks: 5,
          showWorking: true,
          capsAlignment: {
            grade: 6,
            term: 1,
            topic: 'Percentages',
            cognitiveLevel: 'problem-solving',
            assessmentStandard: 'Solve problems involving percentages'
          },
          difficulty: 'hard'
        },
        {
          id: 'g6-q10',
          question: 'A rectangular garden is 15 m long and 8 m wide. What is its area?',
          type: 'word-problem',
          correctAnswer: '120',
          marks: 4,
          showWorking: true,
          capsAlignment: {
            grade: 6,
            term: 1,
            topic: 'Geometry',
            cognitiveLevel: 'problem-solving',
            assessmentStandard: 'Calculate area of rectangles'
          },
          difficulty: 'medium'
        }
      ]
    }
  ],
  questions: []
}

grade6Term1.questions = grade6Term1.sections?.flatMap(s => s.questions) || []

// Grade 6 Term 2 Exam Paper
export const grade6Term2: ExamPaper = {
  id: 'g6-t2-2025',
  title: 'Grade 6 Mathematics - Term 2 Assessment',
  grade: 6,
  term: 2,
  year: 2025,
  totalMarks: 70,
  duration: 90,
  instructions: ['Read all questions carefully.', 'Answer ALL questions.', 'Show all your working out.', 'You may NOT use a calculator.', 'Write neatly and clearly.'],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      totalMarks: 20,
      questions: [
        {
          id: 'g6t2-q1',
          question: 'What is 3/5 × 10?',
          type: 'multiple-choice',
          options: ['3', '5', '6', '8'],
          correctAnswer: '6',
          marks: 2,
          capsAlignment: { grade: 6, term: 2, topic: 'Fractions', cognitiveLevel: 'routine', assessmentStandard: 'Multiply fractions by whole numbers' },
          difficulty: 'medium'
        },
        {
          id: 'g6t2-q2',
          question: 'What is 40% of 150?',
          type: 'multiple-choice',
          options: ['40', '50', '60', '70'],
          correctAnswer: '60',
          marks: 2,
          capsAlignment: { grade: 6, term: 2, topic: 'Percentages', cognitiveLevel: 'routine', assessmentStandard: 'Calculate percentages' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      totalMarks: 25,
      questions: [
        {
          id: 'g6t2-q3',
          question: 'Calculate: 8.4 ÷ 4',
          type: 'calculation',
          correctAnswer: '2.1',
          marks: 4,
          showWorking: true,
          capsAlignment: { grade: 6, term: 2, topic: 'Decimals', cognitiveLevel: 'routine', assessmentStandard: 'Divide decimals' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      totalMarks: 25,
      questions: [
        {
          id: 'g6t2-q4',
          question: 'A bicycle costs R1800. The price increases by 10%. What is the new price?',
          type: 'word-problem',
          correctAnswer: '1980',
          marks: 5,
          showWorking: true,
          capsAlignment: { grade: 6, term: 2, topic: 'Percentages', cognitiveLevel: 'problem-solving', assessmentStandard: 'Percentage increase' },
          difficulty: 'hard'
        }
      ]
    }
  ],
  questions: []
}
grade6Term2.questions = grade6Term2.sections?.flatMap(s => s.questions) || []

// Grade 6 Term 3 Exam Paper
export const grade6Term3: ExamPaper = {
  id: 'g6-t3-2025',
  title: 'Grade 6 Mathematics - Term 3 Assessment',
  grade: 6,
  term: 3,
  year: 2025,
  totalMarks: 70,
  duration: 90,
  instructions: ['Read all questions carefully.', 'Answer ALL questions.', 'Show all your working out.', 'You may NOT use a calculator.', 'Write neatly and clearly.'],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      totalMarks: 20,
      questions: [
        {
          id: 'g6t3-q1',
          question: 'What is the volume of a cube with side 4 cm?',
          type: 'multiple-choice',
          options: ['16 cm³', '24 cm³', '48 cm³', '64 cm³'],
          correctAnswer: '64 cm³',
          marks: 2,
          capsAlignment: { grade: 6, term: 3, topic: 'Geometry', cognitiveLevel: 'routine', assessmentStandard: 'Calculate volume' },
          difficulty: 'medium'
        },
        {
          id: 'g6t3-q2',
          question: 'Express 0.6 as a percentage:',
          type: 'multiple-choice',
          options: ['6%', '0.6%', '60%', '600%'],
          correctAnswer: '60%',
          marks: 2,
          capsAlignment: { grade: 6, term: 3, topic: 'Percentages', cognitiveLevel: 'routine', assessmentStandard: 'Convert decimals to percentages' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      totalMarks: 25,
      questions: [
        {
          id: 'g6t3-q3',
          question: 'Calculate: 5² + 3²',
          type: 'calculation',
          correctAnswer: '34',
          marks: 4,
          showWorking: true,
          capsAlignment: { grade: 6, term: 3, topic: 'Exponents', cognitiveLevel: 'routine', assessmentStandard: 'Calculate squares' },
          difficulty: 'easy'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      totalMarks: 25,
      questions: [
        {
          id: 'g6t3-q4',
          question: 'A box measures 10 cm × 5 cm × 4 cm. What is its volume?',
          type: 'word-problem',
          correctAnswer: '200',
          marks: 5,
          showWorking: true,
          capsAlignment: { grade: 6, term: 3, topic: 'Geometry', cognitiveLevel: 'problem-solving', assessmentStandard: 'Volume problems' },
          difficulty: 'medium'
        }
      ]
    }
  ],
  questions: []
}
grade6Term3.questions = grade6Term3.sections?.flatMap(s => s.questions) || []

// Grade 6 Term 4 Exam Paper
export const grade6Term4: ExamPaper = {
  id: 'g6-t4-2025',
  title: 'Grade 6 Mathematics - Term 4 Assessment',
  grade: 6,
  term: 4,
  year: 2025,
  totalMarks: 70,
  duration: 90,
  instructions: ['Read all questions carefully.', 'Answer ALL questions.', 'Show all your working out.', 'You may NOT use a calculator.', 'Write neatly and clearly.'],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      totalMarks: 20,
      questions: [
        {
          id: 'g6t4-q1',
          question: 'What is 1/2 + 1/3 + 1/6?',
          type: 'multiple-choice',
          options: ['1/2', '3/11', '1', '5/6'],
          correctAnswer: '1',
          marks: 2,
          capsAlignment: { grade: 6, term: 4, topic: 'Fractions', cognitiveLevel: 'routine', assessmentStandard: 'Add multiple fractions' },
          difficulty: 'medium'
        },
        {
          id: 'g6t4-q2',
          question: 'What is √64?',
          type: 'multiple-choice',
          options: ['6', '7', '8', '9'],
          correctAnswer: '8',
          marks: 2,
          capsAlignment: { grade: 6, term: 4, topic: 'Numbers', cognitiveLevel: 'routine', assessmentStandard: 'Square roots' },
          difficulty: 'easy'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      totalMarks: 25,
      questions: [
        {
          id: 'g6t4-q3',
          question: 'Calculate: 15.6 - 8.9',
          type: 'calculation',
          correctAnswer: '6.7',
          marks: 4,
          showWorking: true,
          capsAlignment: { grade: 6, term: 4, topic: 'Decimals', cognitiveLevel: 'routine', assessmentStandard: 'Subtract decimals' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      totalMarks: 25,
      questions: [
        {
          id: 'g6t4-q4',
          question: 'A shop sells a jacket for R450. They reduce the price by 25%. What is the new price?',
          type: 'word-problem',
          correctAnswer: '337.50',
          marks: 5,
          showWorking: true,
          capsAlignment: { grade: 6, term: 4, topic: 'Percentages', cognitiveLevel: 'problem-solving', assessmentStandard: 'Percentage decrease' },
          difficulty: 'hard'
        }
      ]
    }
  ],
  questions: []
}
grade6Term4.questions = grade6Term4.sections?.flatMap(s => s.questions) || []

// Grade 7 Term 1 Exam Paper
export const grade7Term1: ExamPaper = {
  id: 'g7-t1-2025',
  title: 'Grade 7 Mathematics - Term 1 Assessment',
  grade: 7,
  term: 1,
  year: 2025,
  totalMarks: 80,
  duration: 120,
  instructions: [
    'Read all questions carefully.',
    'Answer ALL questions.',
    'Show all your working out.',
    'You may NOT use a calculator.',
    'Write neatly and clearly.',
  ],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      instructions: 'Choose the correct answer for each question.',
      totalMarks: 20,
      questions: [
        {
          id: 'g7-q1',
          question: 'Calculate: (-5) + 8',
          type: 'multiple-choice',
          options: ['-13', '-3', '3', '13'],
          correctAnswer: '3',
          marks: 2,
          capsAlignment: {
            grade: 7,
            term: 1,
            topic: 'Integers',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Add and subtract integers'
          },
          difficulty: 'medium'
        },
        {
          id: 'g7-q2',
          question: 'What is 2³?',
          type: 'multiple-choice',
          options: ['6', '8', '9', '16'],
          correctAnswer: '8',
          marks: 2,
          capsAlignment: {
            grade: 7,
            term: 1,
            topic: 'Exponents',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Calculate powers'
          },
          difficulty: 'easy'
        },
        {
          id: 'g7-q3',
          question: 'Simplify: 3x + 5x',
          type: 'multiple-choice',
          options: ['8x', '8x²', '15x', '3x + 5x'],
          correctAnswer: '8x',
          marks: 2,
          capsAlignment: {
            grade: 7,
            term: 1,
            topic: 'Algebra',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Simplify algebraic expressions'
          },
          difficulty: 'medium'
        },
        {
          id: 'g7-q4',
          question: 'What is the prime factorization of 24?',
          type: 'multiple-choice',
          options: ['2 × 12', '2² × 6', '2³ × 3', '4 × 6'],
          correctAnswer: '2³ × 3',
          marks: 3,
          capsAlignment: {
            grade: 7,
            term: 1,
            topic: 'Numbers',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Find prime factorization'
          },
          difficulty: 'medium'
        },
        {
          id: 'g7-q5',
          question: 'What is 15% of 80?',
          type: 'multiple-choice',
          options: ['10', '12', '15', '20'],
          correctAnswer: '12',
          marks: 2,
          capsAlignment: {
            grade: 7,
            term: 1,
            topic: 'Percentages',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Calculate percentages'
          },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      instructions: 'Show all your working.',
      totalMarks: 30,
      questions: [
        {
          id: 'g7-q6',
          question: 'Calculate: (-12) + 7 - (-5)',
          type: 'calculation',
          correctAnswer: '0',
          marks: 4,
          showWorking: true,
          capsAlignment: {
            grade: 7,
            term: 1,
            topic: 'Integers',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Add and subtract integers'
          },
          difficulty: 'medium'
        },
        {
          id: 'g7-q7',
          question: 'Simplify: 2x + 5 + 3x - 2',
          type: 'calculation',
          correctAnswer: '5x + 3',
          marks: 4,
          showWorking: true,
          capsAlignment: {
            grade: 7,
            term: 1,
            topic: 'Algebra',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Simplify algebraic expressions with multiple terms'
          },
          difficulty: 'medium'
        },
        {
          id: 'g7-q8',
          question: 'Calculate: 2.5 × 3.6',
          type: 'calculation',
          correctAnswer: '9',
          marks: 4,
          showWorking: true,
          capsAlignment: {
            grade: 7,
            term: 1,
            topic: 'Decimals',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Multiply decimal fractions'
          },
          difficulty: 'medium'
        },
        {
          id: 'g7-q9',
          question: 'Find the LCM of 12 and 18',
          type: 'calculation',
          correctAnswer: '36',
          marks: 4,
          showWorking: true,
          capsAlignment: {
            grade: 7,
            term: 1,
            topic: 'Numbers',
            cognitiveLevel: 'routine',
            assessmentStandard: 'Find LCM of numbers'
          },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      instructions: 'Read carefully and show all calculations.',
      totalMarks: 30,
      questions: [
        {
          id: 'g7-q10',
          question: 'If 3x + 5 = 20, what is the value of x?',
          type: 'word-problem',
          correctAnswer: '5',
          marks: 5,
          showWorking: true,
          capsAlignment: {
            grade: 7,
            term: 1,
            topic: 'Algebra',
            cognitiveLevel: 'problem-solving',
            assessmentStandard: 'Solve simple linear equations'
          },
          difficulty: 'hard'
        },
        {
          id: 'g7-q11',
          question: 'The temperature was -3°C in the morning. By afternoon it increased by 8°C. What was the afternoon temperature?',
          type: 'word-problem',
          correctAnswer: '5',
          marks: 4,
          showWorking: true,
          capsAlignment: {
            grade: 7,
            term: 1,
            topic: 'Integers',
            cognitiveLevel: 'problem-solving',
            assessmentStandard: 'Solve problems with integers in context'
          },
          difficulty: 'medium'
        },
        {
          id: 'g7-q12',
          question: 'A cellphone costs R2400. The price increases by 15%. What is the new price?',
          type: 'word-problem',
          correctAnswer: '2760',
          marks: 5,
          showWorking: true,
          capsAlignment: {
            grade: 7,
            term: 1,
            topic: 'Percentages',
            cognitiveLevel: 'problem-solving',
            assessmentStandard: 'Calculate percentage increase'
          },
          difficulty: 'hard'
        }
      ]
    }
  ],
  questions: []
}

grade7Term1.questions = grade7Term1.sections?.flatMap(s => s.questions) || []

// Grade 7 Term 2 Exam Paper
export const grade7Term2: ExamPaper = {
  id: 'g7-t2-2025',
  title: 'Grade 7 Mathematics - Term 2 Assessment',
  grade: 7,
  term: 2,
  year: 2025,
  totalMarks: 80,
  duration: 120,
  instructions: ['Read all questions carefully.', 'Answer ALL questions.', 'Show all your working out.', 'You may NOT use a calculator.', 'Write neatly and clearly.'],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      totalMarks: 20,
      questions: [
        {
          id: 'g7t2-q1',
          question: 'Simplify: 4x - 2x + 5',
          type: 'multiple-choice',
          options: ['2x + 5', '6x + 5', '2x - 5', '7x'],
          correctAnswer: '2x + 5',
          marks: 2,
          capsAlignment: { grade: 7, term: 2, topic: 'Algebra', cognitiveLevel: 'routine', assessmentStandard: 'Simplify expressions' },
          difficulty: 'medium'
        },
        {
          id: 'g7t2-q2',
          question: 'What is (-4) × (-6)?',
          type: 'multiple-choice',
          options: ['-24', '-10', '10', '24'],
          correctAnswer: '24',
          marks: 2,
          capsAlignment: { grade: 7, term: 2, topic: 'Integers', cognitiveLevel: 'routine', assessmentStandard: 'Multiply integers' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      totalMarks: 30,
      questions: [
        {
          id: 'g7t2-q3',
          question: 'Solve for x: 2x - 3 = 11',
          type: 'calculation',
          correctAnswer: '7',
          marks: 5,
          showWorking: true,
          capsAlignment: { grade: 7, term: 2, topic: 'Algebra', cognitiveLevel: 'problem-solving', assessmentStandard: 'Solve equations' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      totalMarks: 30,
      questions: [
        {
          id: 'g7t2-q4',
          question: 'The sum of two numbers is 45. One number is 3 times the other. What are the two numbers?',
          type: 'word-problem',
          correctAnswer: '11.25 and 33.75',
          marks: 6,
          showWorking: true,
          capsAlignment: { grade: 7, term: 2, topic: 'Algebra', cognitiveLevel: 'problem-solving', assessmentStandard: 'Word problems with equations' },
          difficulty: 'hard'
        }
      ]
    }
  ],
  questions: []
}
grade7Term2.questions = grade7Term2.sections?.flatMap(s => s.questions) || []

// Grade 7 Term 3 Exam Paper
export const grade7Term3: ExamPaper = {
  id: 'g7-t3-2025',
  title: 'Grade 7 Mathematics - Term 3 Assessment',
  grade: 7,
  term: 3,
  year: 2025,
  totalMarks: 80,
  duration: 120,
  instructions: ['Read all questions carefully.', 'Answer ALL questions.', 'Show all your working out.', 'You may NOT use a calculator.', 'Write neatly and clearly.'],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      totalMarks: 20,
      questions: [
        {
          id: 'g7t3-q1',
          question: 'What is the ratio 12:18 in simplest form?',
          type: 'multiple-choice',
          options: ['2:3', '3:2', '4:6', '6:9'],
          correctAnswer: '2:3',
          marks: 2,
          capsAlignment: { grade: 7, term: 3, topic: 'Ratios', cognitiveLevel: 'routine', assessmentStandard: 'Simplify ratios' },
          difficulty: 'medium'
        },
        {
          id: 'g7t3-q2',
          question: 'What is 2⁴?',
          type: 'multiple-choice',
          options: ['8', '12', '16', '24'],
          correctAnswer: '16',
          marks: 2,
          capsAlignment: { grade: 7, term: 3, topic: 'Exponents', cognitiveLevel: 'routine', assessmentStandard: 'Calculate powers' },
          difficulty: 'easy'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      totalMarks: 30,
      questions: [
        {
          id: 'g7t3-q3',
          question: 'Calculate: (-8) + 15 - (-3)',
          type: 'calculation',
          correctAnswer: '10',
          marks: 4,
          showWorking: true,
          capsAlignment: { grade: 7, term: 3, topic: 'Integers', cognitiveLevel: 'routine', assessmentStandard: 'Operations with integers' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      totalMarks: 30,
      questions: [
        {
          id: 'g7t3-q4',
          question: 'A recipe needs 3 cups of flour for 12 muffins. How many cups are needed for 20 muffins?',
          type: 'word-problem',
          correctAnswer: '5',
          marks: 5,
          showWorking: true,
          capsAlignment: { grade: 7, term: 3, topic: 'Ratios', cognitiveLevel: 'problem-solving', assessmentStandard: 'Ratio problems' },
          difficulty: 'medium'
        }
      ]
    }
  ],
  questions: []
}
grade7Term3.questions = grade7Term3.sections?.flatMap(s => s.questions) || []

// Grade 7 Term 4 Exam Paper
export const grade7Term4: ExamPaper = {
  id: 'g7-t4-2025',
  title: 'Grade 7 Mathematics - Term 4 Assessment',
  grade: 7,
  term: 4,
  year: 2025,
  totalMarks: 80,
  duration: 120,
  instructions: ['Read all questions carefully.', 'Answer ALL questions.', 'Show all your working out.', 'You may NOT use a calculator.', 'Write neatly and clearly.'],
  sections: [
    {
      name: 'Section A: Multiple Choice',
      totalMarks: 20,
      questions: [
        {
          id: 'g7t4-q1',
          question: 'Express 3:5 as a percentage (first number):',
          type: 'multiple-choice',
          options: ['35%', '53%', '60%', '37.5%'],
          correctAnswer: '37.5%',
          marks: 3,
          capsAlignment: { grade: 7, term: 4, topic: 'Ratios', cognitiveLevel: 'routine', assessmentStandard: 'Convert ratios to percentages' },
          difficulty: 'hard'
        },
        {
          id: 'g7t4-q2',
          question: 'What is the HCF of 24 and 36?',
          type: 'multiple-choice',
          options: ['4', '6', '12', '18'],
          correctAnswer: '12',
          marks: 2,
          capsAlignment: { grade: 7, term: 4, topic: 'Numbers', cognitiveLevel: 'routine', assessmentStandard: 'Find HCF' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section B: Calculations',
      totalMarks: 30,
      questions: [
        {
          id: 'g7t4-q3',
          question: 'Solve for x: 5x + 8 = 33',
          type: 'calculation',
          correctAnswer: '5',
          marks: 5,
          showWorking: true,
          capsAlignment: { grade: 7, term: 4, topic: 'Algebra', cognitiveLevel: 'problem-solving', assessmentStandard: 'Solve linear equations' },
          difficulty: 'medium'
        }
      ]
    },
    {
      name: 'Section C: Problem Solving',
      totalMarks: 30,
      questions: [
        {
          id: 'g7t4-q4',
          question: 'A school has 480 learners. The ratio of boys to girls is 5:7. How many girls are there?',
          type: 'word-problem',
          correctAnswer: '280',
          marks: 6,
          showWorking: true,
          capsAlignment: { grade: 7, term: 4, topic: 'Ratios', cognitiveLevel: 'problem-solving', assessmentStandard: 'Ratio word problems' },
          difficulty: 'hard'
        }
      ]
    }
  ],
  questions: []
}
grade7Term4.questions = grade7Term4.sections?.flatMap(s => s.questions) || []

// Grade 5 Sample Questions
export const grade5Questions: DBEQuestion[] = [
  {
    id: 'g5-q1',
    question: 'What is 3/4 + 1/4?',
    type: 'multiple-choice',
    options: ['1/2', '3/4', '1', '4/8'],
    correctAnswer: '1',
    marks: 2,
    capsAlignment: {
      grade: 5,
      term: 2,
      topic: 'Fractions',
      cognitiveLevel: 'routine',
      assessmentStandard: 'Add fractions with same denominators'
    },
    difficulty: 'easy',
    explanation: '3/4 + 1/4 = 4/4 = 1'
  },
  {
    id: 'g5-q2',
    question: 'Calculate: 3.5 + 2.7',
    type: 'calculation',
    correctAnswer: '6.2',
    marks: 3,
    showWorking: true,
    capsAlignment: {
      grade: 5,
      term: 2,
      topic: 'Decimals',
      cognitiveLevel: 'routine',
      assessmentStandard: 'Add decimal fractions to 2 decimal places'
    },
    difficulty: 'medium',
    explanation: '3.5 + 2.7 = 6.2'
  },
  {
    id: 'g5-q3',
    question: 'A rectangle has a length of 12 cm and a width of 8 cm. What is its perimeter?',
    type: 'word-problem',
    correctAnswer: '40',
    marks: 4,
    showWorking: true,
    capsAlignment: {
      grade: 5,
      term: 3,
      topic: 'Geometry',
      cognitiveLevel: 'problem-solving',
      assessmentStandard: 'Calculate perimeter of rectangles'
    },
    difficulty: 'medium',
    explanation: 'Perimeter = 2(l + w) = 2(12 + 8) = 2(20) = 40 cm'
  }
]

// Grade 6 Sample Questions
export const grade6Questions: DBEQuestion[] = [
  {
    id: 'g6-q1',
    question: 'What is 25% of 200?',
    type: 'calculation',
    correctAnswer: '50',
    marks: 3,
    showWorking: true,
    capsAlignment: {
      grade: 6,
      term: 2,
      topic: 'Percentages',
      cognitiveLevel: 'routine',
      assessmentStandard: 'Calculate percentages of whole numbers'
    },
    difficulty: 'medium',
    explanation: '25% of 200 = 25/100 × 200 = 50'
  },
  {
    id: 'g6-q2',
    question: 'Simplify: 2x + 5 + 3x - 2',
    type: 'calculation',
    correctAnswer: '5x + 3',
    marks: 3,
    capsAlignment: {
      grade: 6,
      term: 4,
      topic: 'Algebra',
      cognitiveLevel: 'routine',
      assessmentStandard: 'Simplify algebraic expressions'
    },
    difficulty: 'medium',
    explanation: '2x + 5 + 3x - 2 = (2x + 3x) + (5 - 2) = 5x + 3'
  }
]

// Grade 7 Sample Questions
export const grade7Questions: DBEQuestion[] = [
  {
    id: 'g7-q1',
    question: 'Calculate: (-5) + 8',
    type: 'calculation',
    correctAnswer: '3',
    marks: 2,
    capsAlignment: {
      grade: 7,
      term: 1,
      topic: 'Integers',
      cognitiveLevel: 'routine',
      assessmentStandard: 'Add and subtract integers'
    },
    difficulty: 'medium',
    explanation: '(-5) + 8 = 3'
  },
  {
    id: 'g7-q2',
    question: 'If 3x + 5 = 20, what is the value of x?',
    type: 'calculation',
    correctAnswer: '5',
    marks: 4,
    showWorking: true,
    capsAlignment: {
      grade: 7,
      term: 4,
      topic: 'Algebra',
      cognitiveLevel: 'problem-solving',
      assessmentStandard: 'Solve simple linear equations'
    },
    difficulty: 'hard',
    explanation: '3x + 5 = 20; 3x = 15; x = 5'
  }
]

export const allExamPapers: ExamPaper[] = [
  grade4Term1, grade4Term2, grade4Term3, grade4Term4,
  grade5Term1, grade5Term2, grade5Term3, grade5Term4,
  grade6Term1, grade6Term2, grade6Term3, grade6Term4,
  grade7Term1, grade7Term2, grade7Term3, grade7Term4
]

export const examQuestionsByGrade = {
  4: grade4Term1.questions,
  5: grade5Questions,
  6: grade6Questions,
  7: grade7Questions
}
