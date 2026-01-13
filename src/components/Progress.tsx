import { UserProgress, GameState } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import GameStats from './GameStats'
import { achievements } from '../utils/gameLogic'

interface ProgressProps {
  progress: UserProgress
  onBack: () => void
  gameState: GameState
}

export default function Progress({ progress, onBack, gameState }: ProgressProps) {
  const { t } = useLanguage()
  const topics = Object.keys(progress)
  
  const totalQuestions = topics.reduce((sum, topic) => sum + progress[topic].totalQuestions, 0)
  const totalCorrect = topics.reduce((sum, topic) => sum + progress[topic].correctAnswers, 0)
  const overallPercentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBack}
          className="text-primary hover:text-indigo-700 font-semibold flex items-center"
        >
          ← {t('backToHome')}
        </button>
        <LanguageSwitcher />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        📊 {t('yourProgress')}
      </h2>

      <GameStats gameState={gameState} />

      {gameState.achievements.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">🏆 Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {achievements
              .filter(a => gameState.achievements.includes(a.id))
              .map(achievement => (
                <div key={achievement.id} className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-2 border-yellow-300 text-center">
                  <div className="text-3xl mb-1">{achievement.icon}</div>
                  <div className="text-xs font-semibold text-gray-800">{achievement.title}</div>
                </div>
              ))}
          </div>
        </div>
      )}

      {totalQuestions === 0 ? (
        <div className="text-center p-8 bg-gray-50 rounded-xl">
          <div className="text-5xl mb-4">📚</div>
          <p className="text-xl text-gray-600 mb-2">{t('noQuizzes')}</p>
          <p className="text-gray-500">{t('startLearningProgress')}</p>
        </div>
      ) : (
        <>
          <div className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('overallStats')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{totalQuestions}</div>
                <div className="text-sm text-gray-600">{t('questions')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{totalCorrect}</div>
                <div className="text-sm text-gray-600">{t('correctAnswers')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{overallPercentage}%</div>
                <div className="text-sm text-gray-600">{t('accuracy')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {topics.reduce((sum, topic) => sum + progress[topic].quizzesTaken, 0)}
                </div>
                <div className="text-sm text-gray-600">{t('quizzes')}</div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('topicBreakdown')}</h3>
          <div className="space-y-4">
            {topics.map((topic) => {
              const topicData = progress[topic]
              const accuracy = Math.round((topicData.correctAnswers / topicData.totalQuestions) * 100)
              
              return (
                <div key={topic} className="p-4 border-2 border-gray-200 rounded-xl hover:border-primary transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-lg capitalize text-gray-800">{t(topic)}</h4>
                    <span className={`font-bold text-xl ${
                      accuracy >= 75 ? 'text-green-600' : accuracy >= 50 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {accuracy}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        accuracy >= 75 ? 'bg-green-500' : accuracy >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${accuracy}%` }}
                    />
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{topicData.correctAnswers}/{topicData.totalQuestions} correct</span>
                    <span>{topicData.quizzesTaken} quizzes</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
            <p className="text-gray-700 text-center">
              <span className="font-bold">{t('keepGoing')}</span> {overallPercentage >= 75 ? t('doingAmazing') : t('everyQuestion')}
            </p>
          </div>
        </>
      )}
    </div>
  )
}
