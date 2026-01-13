import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import GameStats from './GameStats'
import PowerUpShop from './PowerUpShop'
import { GameState } from '../types'

interface HomeProps {
  onStartLearning: () => void
  onViewProgress: () => void
  onPracticeExams?: () => void
  gameState: GameState
  onUpdateGameState: (state: GameState) => void
}

export default function Home({ onStartLearning, onViewProgress, onPracticeExams, gameState, onUpdateGameState }: HomeProps) {
  const { t } = useLanguage()
  const [showShop, setShowShop] = useState(false)

  return (
    <div className="card text-center animate-fade-in">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>

      <GameStats gameState={gameState} />

      <div className="mb-8">
        <div className="flex justify-center mb-6">
          <img 
            src="/logo.png" 
            alt="Math Bru Logo" 
            className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl animate-bounce-slow"
          />
        </div>
        <p className="text-xl md:text-2xl text-gray-900 font-bold drop-shadow-md">
          {t('tagline')}
        </p>
        <p className="text-lg text-white/90 mt-2 font-semibold">
          {t('forGrades')}
        </p>
      </div>

      <div className="mb-8 p-6 bg-white/95 backdrop-blur rounded-2xl shadow-xl border-4 border-mathBru-yellow">
        <h2 className="text-2xl font-bold text-mathBru-blue mb-3">
          🎯 {t('whatYouLearn')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">➕</span>
            <span className="text-gray-700">{t('feature1')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">✖️</span>
            <span className="text-gray-700">{t('feature2')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🍕</span>
            <span className="text-gray-700">{t('feature3')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📐</span>
            <span className="text-gray-700">{t('feature4')}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={onStartLearning}
          className="btn bg-gradient-to-r from-mathBru-yellow to-mathBru-orange text-white hover:shadow-2xl hover:scale-105 transform transition w-full text-xl py-4 font-bold border-4 border-white shadow-xl"
        >
          🚀 {t('startLearning')}
        </button>

        {onPracticeExams && (
          <button
            onClick={onPracticeExams}
            className="btn bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:scale-105 transform transition w-full text-xl py-4 font-bold border-4 border-white shadow-xl"
          >
            📝 DBE Practice Exams
          </button>
        )}
        
        <button
          onClick={onViewProgress}
          className="btn bg-gradient-to-r from-mathBru-cyan to-mathBru-blue text-white hover:shadow-2xl hover:scale-105 transform transition w-full text-xl py-4 font-bold border-4 border-white shadow-xl"
        >
          📊 {t('viewProgress')}
        </button>
        
        <button
          onClick={() => setShowShop(true)}
          className="btn bg-gradient-to-r from-mathBru-green to-green-600 text-white hover:shadow-2xl hover:scale-105 transform transition w-full text-xl py-4 font-bold border-4 border-white shadow-xl"
        >
          🏪 Power-Up Shop
        </button>
      </div>
      
      {showShop && (
        <PowerUpShop
          gameState={gameState}
          onPurchase={onUpdateGameState}
          onClose={() => setShowShop(false)}
        />
      )}

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
        <p className="text-gray-700 font-medium">
          💡 <span className="font-bold">{t('tip')}:</span> {t('tipMessage')}
        </p>
      </div>
    </div>
  )
}
