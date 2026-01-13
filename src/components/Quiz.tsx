import { useState, useEffect } from 'react'
import { QuizQuestion, Topic, GameState } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { calculateCoins, getStreakMultiplier } from '../utils/gameLogic'
import GameStats from './GameStats'
import ScratchPad from './ScratchPad'

interface QuizProps {
  question: QuizQuestion
  questionNumber: number
  totalQuestions: number
  onAnswer: (isCorrect: boolean, coinsGained: number, xpGained: number) => void
  topic: Topic
  difficulty: 'easy' | 'medium' | 'hard'
  gameState: GameState
  onUpdateGameState: (state: GameState) => void
}

export default function Quiz({ question, questionNumber, totalQuestions, onAnswer, topic, difficulty, gameState, onUpdateGameState }: QuizProps) {
  const { t } = useLanguage()
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [startTime] = useState(Date.now())
  const [usedHint, setUsedHint] = useState(false)
  const [usedFiftyFifty, setUsedFiftyFifty] = useState(false)
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([])
  const [streak, setStreak] = useState(gameState.streak || 0)
  const [isScratchPadOpen, setIsScratchPadOpen] = useState(false)

  useEffect(() => {
    setUsedHint(false)
    setUsedFiftyFifty(false)
    setHiddenOptions([])
  }, [questionNumber])

  const handleUseHint = () => {
    if (gameState.powerUps.hints > 0 && !usedHint) {
      setUsedHint(true)
      const newState = { ...gameState }
      newState.powerUps.hints--
      onUpdateGameState(newState)
    }
  }

  const handleUseFiftyFifty = () => {
    if (gameState.powerUps.fiftyFifty > 0 && !usedFiftyFifty) {
      setUsedFiftyFifty(true)
      const wrongOptions = question.options.filter(opt => opt !== question.correctAnswer)
      const toHide = wrongOptions.slice(0, 2)
      setHiddenOptions(toHide)
      
      const newState = { ...gameState }
      newState.powerUps.fiftyFifty--
      onUpdateGameState(newState)
    }
  }

  const handleSelectAnswer = (answer: number) => {
    if (showFeedback) return
    
    setSelectedAnswer(answer)
    setShowFeedback(true)
    
    const isCorrect = answer === question.correctAnswer
    const timeTaken = (Date.now() - startTime) / 1000
    const timeBonus = timeTaken < 10
    
    let newStreak = isCorrect ? streak + 1 : 0
    const streakMultiplier = getStreakMultiplier(newStreak)
    
    const coinsGained = calculateCoins(isCorrect, timeBonus && !usedHint && !usedFiftyFifty, streakMultiplier, difficulty)
    const xpGained = isCorrect ? (difficulty === 'easy' ? 10 : difficulty === 'medium' ? 15 : 25) : 0
    
    setStreak(newStreak)
    
    const newGameState = { ...gameState }
    newGameState.streak = newStreak
    if (newStreak > newGameState.bestStreak) {
      newGameState.bestStreak = newStreak
    }
    onUpdateGameState(newGameState)
    
    setTimeout(() => {
      onAnswer(isCorrect, coinsGained, xpGained)
      setSelectedAnswer(null)
      setShowFeedback(false)
    }, 2000)
  }

  const isCorrect = selectedAnswer === question.correctAnswer
  const multiplier = getStreakMultiplier(streak)

  return (
    <div className="card">
      <div className="mb-4 flex justify-between items-center">
        <GameStats gameState={gameState} compact />
        {streak > 2 && (
          <div className="bg-orange-100 border-2 border-orange-500 rounded-lg px-4 py-2 animate-pulse">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🔥</span>
              <div>
                <div className="text-xs text-gray-600">Streak</div>
                <div className="font-bold text-orange-600">{streak}x</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-gray-600">
            {t('questionOf', { current: questionNumber, total: totalQuestions })}
          </span>
          <span className="text-sm font-semibold text-primary capitalize">
            {t(topic)}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-4 flex justify-center space-x-2">
        <button
          onClick={handleUseHint}
          disabled={usedHint || gameState.powerUps.hints === 0}
          className={`btn text-sm py-2 px-4 ${usedHint || gameState.powerUps.hints === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          💡 Hint ({gameState.powerUps.hints})
        </button>
        
        <button
          onClick={handleUseFiftyFifty}
          disabled={usedFiftyFifty || gameState.powerUps.fiftyFifty === 0}
          className={`btn text-sm py-2 px-4 ${usedFiftyFifty || gameState.powerUps.fiftyFifty === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-purple-500 text-white hover:bg-purple-600'}`}
        >
          🎯 50/50 ({gameState.powerUps.fiftyFifty})
        </button>
      </div>

      {usedHint && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg border-2 border-blue-300">
          <p className="text-sm text-gray-700">💡 {question.explanation}</p>
        </div>
      )}

      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
          {question.question}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {question.options.map((option, index) => {
          if (hiddenOptions.includes(option)) {
            return (
              <div key={index} className="p-6 rounded-xl border-2 border-gray-100 bg-gray-50 opacity-30">
                <div className="text-xl font-semibold text-gray-400 text-center">---</div>
              </div>
            )
          }

          let buttonClass = 'p-6 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-blue-50 transition-all text-xl font-semibold'
          
          if (showFeedback && selectedAnswer !== null) {
            if (option === question.correctAnswer) {
              buttonClass = 'p-6 rounded-xl border-2 border-green-500 bg-green-100 transition-all text-xl font-semibold'
            } else if (option === selectedAnswer) {
              buttonClass = 'p-6 rounded-xl border-2 border-red-500 bg-red-100 transition-all text-xl font-semibold'
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleSelectAnswer(option)}
              disabled={showFeedback}
              className={buttonClass}
            >
              {option}
              {showFeedback && option === question.correctAnswer && (
                <span className="ml-2 text-green-600">✓</span>
              )}
              {showFeedback && option === selectedAnswer && option !== question.correctAnswer && (
                <span className="ml-2 text-red-600">✗</span>
              )}
            </button>
          )
        })}
      </div>

      {showFeedback && (
        <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-100 border-2 border-green-500' : 'bg-red-100 border-2 border-red-500'} animate-fade-in`}>
          <p className={`font-bold text-lg mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
            {isCorrect ? `🎉 ${t('correct')}` : `❌ ${t('notQuite')}`}
          </p>
          <p className="text-gray-700">{question.explanation}</p>
          {isCorrect && multiplier > 1 && (
            <p className="text-orange-600 font-bold mt-2">🔥 {multiplier}x Multiplier!</p>
          )}
        </div>
      )}

      <ScratchPad isExpanded={isScratchPadOpen} onToggle={() => setIsScratchPadOpen(!isScratchPadOpen)} />
    </div>
  )
}
