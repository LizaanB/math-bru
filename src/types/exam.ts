// South African DBE Exam Types

export type Grade = 4 | 5 | 6 | 7

export type ExamTerm = 1 | 2 | 3 | 4

export interface CAPSAlignment {
  grade: Grade
  term: ExamTerm
  topic: string
  cognitiveLevel: 'knowledge' | 'routine' | 'complex' | 'problem-solving'
  assessmentStandard: string
}

export interface DBEQuestion {
  id: string
  question: string
  questionAf?: string // Afrikaans translation
  type: 'multiple-choice' | 'calculation' | 'word-problem' | 'show-work'
  options?: string[]
  optionsAf?: string[] // Afrikaans options
  correctAnswer: string
  explanation?: string
  explanationAf?: string
  marks: number
  capsAlignment: CAPSAlignment
  difficulty: 'easy' | 'medium' | 'hard'
  showWorking?: boolean // If student needs to show work
}

export interface ExamPaper {
  id: string
  title: string
  titleAf?: string // Afrikaans title
  grade: Grade
  term: ExamTerm
  year: number
  totalMarks: number
  duration: number // minutes
  questions: DBEQuestion[]
  instructions: string[]
  instructionsAf?: string[] // Afrikaans instructions
  sections?: ExamSection[]
}

export interface ExamSection {
  name: string
  nameAf?: string
  instructions: string
  instructionsAf?: string
  questions?: DBEQuestion[]
  totalMarks?: number
}

export interface ExamAttempt {
  examPaperId: string
  startTime: string
  endTime?: string
  answers: { [questionId: string]: string }
  score: number
  totalMarks: number
  percentage: number
  timeSpent: number // seconds
}

export type ExamMode = 'practice' | 'timed-exam' | 'homework'
