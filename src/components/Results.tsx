import { Topic, GameState } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import GameStats from './GameStats'

interface ResultsProps {
  score: number
  totalQuestions: number
  topic: Topic
  difficulty: 'easy' | 'medium' | 'hard'
  onPlayAgain: () => void
  onBackToHome: () => void
  coinsEarned: number
  xpEarned: number
  gameState: GameState
}

export default function Results({ score, totalQuestions, topic, difficulty, onPlayAgain, onBackToHome, coinsEarned, xpEarned, gameState }: ResultsProps) {
  const { t } = useLanguage()
  const percentage = Math.round((score / totalQuestions) * 100)
  
  let message = ''
  let emoji = ''
  let color = ''
  
  if (percentage >= 90) {
    message = t('outstanding')
    emoji = '🌟'
    color = 'text-yellow-600'
  } else if (percentage >= 75) {
    message = t('excellent')
    emoji = '🎉'
    color = 'text-green-600'
  } else if (percentage >= 60) {
    message = t('goodJob')
    emoji = '👍'
    color = 'text-blue-600'
  } else {
    message = t('keepPracticing')
    emoji = '💪'
    color = 'text-orange-600'
  }

  return (
    <div className="card text-center">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>

      <GameStats gameState={gameState} />

      <div className="mb-6">
        <div className="text-7xl mb-4">{emoji}</div>
        <h2 className={`text-4xl font-bold ${color} mb-2`}>
          {message}
        </h2>
      </div>

      <div className="mb-6 p-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-300">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-4xl mb-2">🪙</div>
            <div className="text-3xl font-bold text-yellow-600">+{coinsEarned}</div>
            <div className="text-sm text-gray-600">Coins Earned</div>
          </div>
          <div>
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-3xl font-bold text-primary">+{xpEarned}</div>
            <div className="text-sm text-gray-600">XP Earned</div>
          </div>
        </div>
      </div>

      <div className="mb-8 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
        <div className="text-6xl font-bold text-primary mb-2">
          {score}/{totalQuestions}
        </div>
        <div className="text-2xl text-gray-600 mb-4">
          {percentage}% {t('correctAnswers')}
        </div>
        <div className="text-gray-600 capitalize">
          <span className="font-semibold">{t(topic)}</span> • {t(difficulty)}
        </div>
      </div>

      <div className="mb-6 grid grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="text-3xl font-bold text-green-600">{score}</div>
          <div className="text-sm text-gray-600">{t('correctAnswers')}</div>
        </div>
        <div className="p-4 bg-red-50 rounded-lg">
          <div className="text-3xl font-bold text-red-600">{totalQuestions - score}</div>
          <div className="text-sm text-gray-600">{t('wrong')}</div>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="text-3xl font-bold text-blue-600">{percentage}%</div>
          <div className="text-sm text-gray-600">{t('score')}</div>
        </div>
      </div>

      {percentage === 100 && (
        <div className="mb-6 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border-2 border-yellow-400 animate-pulse">
          <p className="text-xl font-bold text-yellow-800">
            💯 PERFECT SCORE! +50 Bonus Coins!
          </p>
        </div>
      )}

      {percentage < 75 && (
        <div className="mb-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
          <p className="text-gray-700">
            💡 <span className="font-bold">{t('tip')}:</span> Try the same quiz again or practice with easier questions to build your skills!
          </p>
        </div>
      )}

      <div className="space-y-3">
        <button
          onClick={onPlayAgain}
          className="btn btn-primary w-full text-lg"
        >
          🔄 {t('tryAnother')}
        </button>
        
        <button
          onClick={onBackToHome}
          className="btn bg-gray-600 text-white hover:bg-gray-700 w-full text-lg"
        >
          🏠 {t('backToHome')}
        </button>
      </div>
    </div>
  )
}
