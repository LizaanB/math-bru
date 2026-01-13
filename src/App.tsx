import { useState, useEffect } from 'react'
import Home from './components/Home'
import TopicSelection from './components/TopicSelection'
import Quiz from './components/Quiz'
import Results from './components/Results'
import Progress from './components/Progress'
import AchievementModal from './components/AchievementModal'
import SubscriptionModal from './components/SubscriptionModal'
import PaymentModal from './components/PaymentModal'
import ExamSelector from './components/ExamSelector'
import ExamMode from './components/ExamMode'
import { QuizQuestion, UserProgress, Topic, GameState, SubscriptionState } from './types'
import { ExamPaper, ExamAttempt } from './types/exam'
import { generateQuestions } from './utils/questionGenerator'
import { saveProgress, loadProgress } from './utils/storage'
import { getInitialGameState, saveGameState, checkAchievements, calculateLevel } from './utils/gameLogic'
import { getInitialSubscriptionState, saveSubscriptionState, activateSubscription, canTakeQuiz, decrementQuizCount } from './utils/subscription'

type Screen = 'home' | 'topics' | 'quiz' | 'results' | 'progress' | 'exams' | 'exam'

function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [userProgress, setUserProgress] = useState<UserProgress>(loadProgress())
  const [gameState, setGameState] = useState<GameState>(getInitialGameState())
  const [newAchievements, setNewAchievements] = useState<string[]>([])
  const [coinsEarned, setCoinsEarned] = useState(0)
  const [xpEarned, setXpEarned] = useState(0)
  const [subscriptionState, setSubscriptionState] = useState<SubscriptionState>(getInitialSubscriptionState())
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedExam, setSelectedExam] = useState<ExamPaper | null>(null)
  const [examMode, setExamMode] = useState<'practice' | 'timed-exam'>('practice')
  const [examLanguage, setExamLanguage] = useState<'en' | 'af'>('en')

  useEffect(() => {
    saveProgress(userProgress)
  }, [userProgress])

  useEffect(() => {
    saveGameState(gameState)
  }, [gameState])

  useEffect(() => {
    saveSubscriptionState(subscriptionState)
  }, [subscriptionState])

  const handleStartQuiz = (topic: Topic, diff: 'easy' | 'medium' | 'hard') => {
    if (!canTakeQuiz(subscriptionState)) {
      setShowSubscriptionModal(true)
      return
    }

    setSelectedTopic(topic)
    setDifficulty(diff)
    const newQuestions = generateQuestions(topic, diff, 10)
    setQuestions(newQuestions)
    setCurrentQuestionIndex(0)
    setScore(0)
    setAnswers([])
    setCoinsEarned(0)
    setXpEarned(0)
    setScreen('quiz')
    
    // Decrement quiz count for free users
    if (!subscriptionState.isSubscribed) {
      setSubscriptionState(decrementQuizCount(subscriptionState))
    }
  }

  const handleAnswer = (isCorrect: boolean, coinsGained: number, xpGained: number) => {
    const newAnswers = [...answers, isCorrect]
    setAnswers(newAnswers)
    
    setCoinsEarned(prev => prev + coinsGained)
    setXpEarned(prev => prev + xpGained)
    
    if (isCorrect) {
      setScore(score + 1)
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Quiz completed
      const finalScore = score + (isCorrect ? 1 : 0)
      const finalCoins = coinsEarned + coinsGained
      const finalXp = xpEarned + xpGained
      
      const newProgress = { ...userProgress }
      if (!newProgress[selectedTopic!]) {
        newProgress[selectedTopic!] = {
          totalQuestions: 0,
          correctAnswers: 0,
          quizzesTaken: 0
        }
      }
      newProgress[selectedTopic!].totalQuestions += questions.length
      newProgress[selectedTopic!].correctAnswers += finalScore
      newProgress[selectedTopic!].quizzesTaken += 1
      
      const totalQuizzes = Object.values(newProgress).reduce((sum, p) => sum + p.quizzesTaken, 0)
      const quizAccuracy = Math.round((finalScore / questions.length) * 100)
      
      const newGameState = { ...gameState }
      newGameState.coins += finalCoins
      newGameState.xp += finalXp
      newGameState.level = calculateLevel(newGameState.xp)
      
      const achievementIds = checkAchievements(newGameState, totalQuizzes, quizAccuracy)
      if (achievementIds.length > 0) {
        newGameState.achievements = [...newGameState.achievements, ...achievementIds]
        setNewAchievements(achievementIds)
      }
      
      setUserProgress(newProgress)
      setGameState(newGameState)
      setScreen('results')
    }
  }

  const handleSubscribe = () => {
    setShowSubscriptionModal(false)
    setShowPaymentModal(true)
  }

  const handlePaymentComplete = () => {
    setShowPaymentModal(false)
    const newState = activateSubscription(subscriptionState)
    setSubscriptionState(newState)
    
    // Show success message
    alert('🎉 Subscription activated! Welcome to Math Bru Premium!')
  }

  const handleSelectExam = (exam: ExamPaper, mode: 'practice' | 'timed-exam', language: 'en' | 'af') => {
    setSelectedExam(exam)
    setExamMode(mode)
    setExamLanguage(language)
    setScreen('exam')
  }

  const handleExamComplete = (attempt: ExamAttempt) => {
    console.log('Exam completed:', attempt)
    // Save attempt to localStorage
    const attempts = JSON.parse(localStorage.getItem('exam-attempts') || '[]')
    attempts.push(attempt)
    localStorage.setItem('exam-attempts', JSON.stringify(attempts))
    
    // Award coins and XP for exam completion
    const bonus = Math.floor((attempt.percentage / 100) * 50)
    const newGameState = { ...gameState }
    newGameState.coins += bonus
    newGameState.xp += attempt.score * 5
    newGameState.level = calculateLevel(newGameState.xp)
    setGameState(newGameState)
    
    alert(`🎉 Exam Complete!\n\nScore: ${attempt.score}/${attempt.totalMarks} (${attempt.percentage}%)\nBonus: ${bonus} coins + ${attempt.score * 5} XP`)
    setScreen('home')
  }

  const handleBackToHome = () => {
    setScreen('home')
    setSelectedTopic(null)
    setQuestions([])
    setCurrentQuestionIndex(0)
    setScore(0)
    setAnswers([])
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {screen === 'home' && (
          <Home
            onStartLearning={() => setScreen('topics')}
            onViewProgress={() => setScreen('progress')}
            onPracticeExams={() => setScreen('exams')}
            gameState={gameState}
            onUpdateGameState={setGameState}
          />
        )}
        
        {screen === 'topics' && (
          <TopicSelection
            onSelectTopic={handleStartQuiz}
            onBack={handleBackToHome}
            gameState={gameState}
          />
        )}
        
        {screen === 'quiz' && questions.length > 0 && (
          <Quiz
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            topic={selectedTopic!}
            difficulty={difficulty}
            gameState={gameState}
            onUpdateGameState={setGameState}
          />
        )}
        
        {screen === 'results' && (
          <Results
            score={score}
            totalQuestions={questions.length}
            topic={selectedTopic!}
            difficulty={difficulty}
            onPlayAgain={() => setScreen('topics')}
            onBackToHome={handleBackToHome}
            coinsEarned={coinsEarned}
            xpEarned={xpEarned}
            gameState={gameState}
          />
        )}

        {screen === 'exams' && (
          <ExamSelector
            onSelectExam={handleSelectExam}
            onBack={handleBackToHome}
          />
        )}

        {screen === 'exam' && selectedExam && (
          <ExamMode
            examPaper={selectedExam}
            mode={examMode}
            language={examLanguage}
            onComplete={handleExamComplete}
            onExit={handleBackToHome}
          />
        )}
        
        
        {showSubscriptionModal && (
          <SubscriptionModal
            onClose={() => setShowSubscriptionModal(false)}
            onSubscribe={handleSubscribe}
            subscriptionState={subscriptionState}
          />
        )}
        
        {showPaymentModal && (
          <PaymentModal
            onClose={() => setShowPaymentModal(false)}
            onPaymentComplete={handlePaymentComplete}
          />
        )}
        {screen === 'progress' && (
          <Progress
            progress={userProgress}
            onBack={handleBackToHome}
            gameState={gameState}
          />
        )}
        
        {newAchievements.length > 0 && (
          <AchievementModal
            achievementIds={newAchievements}
            onClose={() => setNewAchievements([])}
          />
        )}
      </div>
    </div>
  )
}

export default App
