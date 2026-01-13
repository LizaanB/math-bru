import { GameState } from '../types'
import { getXpProgress } from '../utils/gameLogic'

interface GameStatsProps {
  gameState: GameState
  compact?: boolean
}

export default function GameStats({ gameState, compact = false }: GameStatsProps) {
  const { current, needed } = getXpProgress(gameState.xp, gameState.level)
  const progressPercent = (current / needed) * 100

  if (compact) {
    return (
      <div className="flex items-center space-x-4 bg-white bg-opacity-90 rounded-lg px-4 py-2 shadow-md">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">⭐</span>
          <div>
            <div className="text-xs text-gray-600">Level</div>
            <div className="font-bold text-primary">{gameState.level}</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🪙</span>
          <div>
            <div className="text-xs text-gray-600">Coins</div>
            <div className="font-bold text-yellow-600">{gameState.coins}</div>
          </div>
        </div>
        
        {gameState.streak > 0 && (
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🔥</span>
            <div>
              <div className="text-xs text-gray-600">Streak</div>
              <div className="font-bold text-orange-600">{gameState.streak}</div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="text-center p-4 bg-white rounded-lg shadow">
          <div className="text-3xl mb-2">⭐</div>
          <div className="text-2xl font-bold text-primary">{gameState.level}</div>
          <div className="text-sm text-gray-600">Level</div>
        </div>
        
        <div className="text-center p-4 bg-white rounded-lg shadow">
          <div className="text-3xl mb-2">🪙</div>
          <div className="text-2xl font-bold text-yellow-600">{gameState.coins}</div>
          <div className="text-sm text-gray-600">Coins</div>
        </div>
        
        <div className="text-center p-4 bg-white rounded-lg shadow">
          <div className="text-3xl mb-2">🔥</div>
          <div className="text-2xl font-bold text-orange-600">{gameState.bestStreak}</div>
          <div className="text-sm text-gray-600">Best Streak</div>
        </div>
        
        <div className="text-center p-4 bg-white rounded-lg shadow">
          <div className="text-3xl mb-2">🏆</div>
          <div className="text-2xl font-bold text-purple-600">{gameState.achievements.length}</div>
          <div className="text-sm text-gray-600">Achievements</div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-semibold text-gray-700">XP Progress</span>
          <span className="text-gray-600">{current} / {needed}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  )
}
