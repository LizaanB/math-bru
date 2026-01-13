import { GameState } from '../types'
import { buyPowerUp } from '../utils/gameLogic'

interface PowerUpShopProps {
  gameState: GameState
  onPurchase: (newState: GameState) => void
  onClose: () => void
}

export default function PowerUpShop({ gameState, onPurchase, onClose }: PowerUpShopProps) {
  const handleBuy = (powerUp: 'hint' | 'fiftyFifty') => {
    const newState = buyPowerUp(gameState, powerUp)
    if (newState) {
      onPurchase(newState)
    } else {
      alert('Not enough coins!')
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">🏪 Power-Up Shop</h2>
          <button onClick={onClose} className="text-3xl text-gray-500 hover:text-gray-700">×</button>
        </div>
        
        <div className="mb-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300 text-center">
          <div className="text-3xl mb-2">🪙</div>
          <div className="text-2xl font-bold text-yellow-600">{gameState.coins} Coins</div>
        </div>
        
        <div className="space-y-4">
          <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-primary transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className="text-4xl">💡</span>
                <div>
                  <h3 className="font-bold text-lg">Hint</h3>
                  <p className="text-sm text-gray-600">Shows explanation before answering</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">You have</div>
                <div className="font-bold text-primary">{gameState.powerUps.hints}</div>
              </div>
            </div>
            <button
              onClick={() => handleBuy('hint')}
              className="btn bg-blue-500 text-white hover:bg-blue-600 w-full"
            >
              Buy for 50 🪙
            </button>
          </div>
          
          <div className="border-2 border-gray-200 rounded-xl p-4 hover:border-primary transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className="text-4xl">🎯</span>
                <div>
                  <h3 className="font-bold text-lg">50/50</h3>
                  <p className="text-sm text-gray-600">Removes 2 wrong answers</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">You have</div>
                <div className="font-bold text-primary">{gameState.powerUps.fiftyFifty}</div>
              </div>
            </div>
            <button
              onClick={() => handleBuy('fiftyFifty')}
              className="btn bg-purple-500 text-white hover:bg-purple-600 w-full"
            >
              Buy for 100 🪙
            </button>
          </div>
        </div>
        
        <div className="mt-6 p-3 bg-blue-50 rounded-lg text-center text-sm text-gray-600">
          💡 Earn more coins by answering correctly and building streaks!
        </div>
      </div>
    </div>
  )
}
