import { useState } from 'react'
import { Topic, TopicInfo, GameState } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import GameStats from './GameStats'

interface TopicSelectionProps {
  onSelectTopic: (topic: Topic, difficulty: 'easy' | 'medium' | 'hard') => void
  onBack: () => void
  gameState: GameState
}

const topicsConfig: TopicInfo[] = [
  {
    id: 'addition',
    name: 'addition',
    description: 'additionDesc',
    icon: '➕',
    color: 'bg-blue-500',
    grade: 'grades45'
  },
  {
    id: 'subtraction',
    name: 'subtraction',
    description: 'subtractionDesc',
    icon: '➖',
    color: 'bg-green-500',
    grade: 'grades45'
  },
  {
    id: 'multiplication',
    name: 'multiplication',
    description: 'multiplicationDesc',
    icon: '✖️',
    color: 'bg-purple-500',
    grade: 'grades46'
  },
  {
    id: 'division',
    name: 'division',
    description: 'divisionDesc',
    icon: '➗',
    color: 'bg-pink-500',
    grade: 'grades46'
  },
  {
    id: 'longDivision',
    name: 'longDivision',
    description: 'longDivisionDesc',
    icon: '📏',
    color: 'bg-yellow-500',
    grade: 'grades47'
  },
  {
    id: 'fractions',
    name: 'fractions',
    description: 'fractionsDesc',
    icon: '🍕',
    color: 'bg-orange-500',
    grade: 'grades57'
  },
  {
    id: 'decimals',
    name: 'decimals',
    description: 'decimalsDesc',
    icon: '🔢',
    color: 'bg-teal-500',
    grade: 'grades57'
  },
  {
    id: 'geometry',
    name: 'geometry',
    description: 'geometryDesc',
    icon: '📐',
    color: 'bg-indigo-500',
    grade: 'grades67'
  },
  {
    id: 'algebra',
    name: 'algebra',
    description: 'algebraDesc',
    icon: '🔤',
    color: 'bg-red-500',
    grade: 'grades67'
  }
]

export default function TopicSelection({ onSelectTopic, onBack, gameState }: TopicSelectionProps) {
  const { t } = useLanguage()
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy')

  const handleStart = () => {
    if (selectedTopic) {
      onSelectTopic(selectedTopic, difficulty)
    }
  }

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBack}
          className="text-primary hover:text-indigo-700 font-semibold flex items-center"
        >
          ← {t('backToHome')}
        </button>
        <div className="flex items-center space-x-3">
          <GameStats gameState={gameState} compact />
          <LanguageSwitcher />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {t('chooseYourTopic')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {topicsConfig.map((topic) => (
          <button
            key={topic.id}
            onClick={() => setSelectedTopic(topic.id)}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedTopic === topic.id
                ? 'border-primary bg-blue-50 scale-105'
                : 'border-gray-200 hover:border-gray-300 hover:scale-102'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`${topic.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}>
                {topic.icon}
              </div>
              <div className="text-left flex-1">
                <h3 className="font-bold text-lg text-gray-800">{t(topic.name)}</h3>
                <p className="text-sm text-gray-600">{t(topic.description)}</p>
                <p className="text-xs text-gray-500 mt-1">{t(topic.grade)}</p>
              </div>
              {selectedTopic === topic.id && (
                <div className="text-primary text-2xl">✓</div>
              )}
            </div>
          </button>
        ))}
      </div>

      {selectedTopic && (
        <div className="animate-fade-in">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{t('selectDifficulty')}</h3>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <button
              onClick={() => setDifficulty('easy')}
              className={`p-4 rounded-lg border-2 transition-all ${
                difficulty === 'easy'
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-1">😊</div>
              <div className="font-semibold">{t('easy')}</div>
              <div className="text-xs text-gray-600">{t('justStarting')}</div>
            </button>
            
            <button
              onClick={() => setDifficulty('medium')}
              className={`p-4 rounded-lg border-2 transition-all ${
                difficulty === 'medium'
                  ? 'border-yellow-500 bg-yellow-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-1">🤔</div>
              <div className="font-semibold">{t('medium')}</div>
              <div className="text-xs text-gray-600">{t('somePractice')}</div>
            </button>
            
            <button
              onClick={() => setDifficulty('hard')}
              className={`p-4 rounded-lg border-2 transition-all ${
                difficulty === 'hard'
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-1">🔥</div>
              <div className="font-semibold">{t('hard')}</div>
              <div className="text-xs text-gray-600">{t('challengeMe')}</div>
            </button>
          </div>

          <button
            onClick={handleStart}
            className="btn btn-primary w-full text-lg"
          >
            {t('startQuiz')} →
          </button>
        </div>
      )}
    </div>
  )
}
