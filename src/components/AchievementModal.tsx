import { achievements } from '../utils/gameLogic'

interface AchievementModalProps {
  achievementIds: string[]
  onClose: () => void
}

export default function AchievementModal({ achievementIds, onClose }: AchievementModalProps) {
  const unlockedAchievements = achievements.filter(a => achievementIds.includes(a.id))
  
  if (unlockedAchievements.length === 0) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-bounce-in shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
          🎉 Achievement Unlocked!
        </h2>
        
        <div className="space-y-4 mb-6">
          {unlockedAchievements.map((achievement) => (
            <div key={achievement.id} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border-2 border-yellow-300">
              <div className="flex items-center space-x-4">
                <div className="text-5xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={onClose}
          className="btn btn-primary w-full"
        >
          Awesome!
        </button>
      </div>
    </div>
  )
}
