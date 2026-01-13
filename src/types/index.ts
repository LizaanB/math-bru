export type Topic = 
  | 'addition'
  | 'subtraction'
  | 'multiplication'
  | 'division'
  | 'longDivision'
  | 'fractions'
  | 'decimals'
  | 'geometry'
  | 'algebra'

export interface QuizQuestion {
  question: string
  options: number[]
  correctAnswer: number
  explanation: string
}

export interface TopicProgress {
  totalQuestions: number
  correctAnswers: number
  quizzesTaken: number
}

export interface UserProgress {
  [key: string]: TopicProgress
}

export interface TopicInfo {
  id: Topic
  name: string
  description: string
  icon: string
  color: string
  grade: string
}

export interface GameState {
  coins: number
  level: number
  xp: number
  streak: number
  bestStreak: number
  achievements: string[]
  powerUps: {
    hints: number
    fiftyFifty: number
  }
  dailyStreak: number
  lastPlayed: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  requirement: number
  type: 'streak' | 'coins' | 'quizzes' | 'accuracy' | 'level'
}

export interface SubscriptionState {
  isSubscribed: boolean
  subscriptionType: 'free' | 'yearly'
  expiryDate: string | null
  freeTrial: boolean
  quizzesRemaining: number
}
