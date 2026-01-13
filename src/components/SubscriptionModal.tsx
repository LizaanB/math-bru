import { SubscriptionState } from '../utils/subscription'

interface SubscriptionModalProps {
  onClose: () => void
  onSubscribe: () => void
  subscriptionState: SubscriptionState
}

export default function SubscriptionModal({ onClose, onSubscribe, subscriptionState }: SubscriptionModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🎓</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Unlock Full Access</h2>
          <p className="text-gray-600">Continue your math learning journey!</p>
        </div>

        {!subscriptionState.isSubscribed && subscriptionState.freeTrial && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
            <p className="text-center text-blue-800 font-semibold">
              🎁 Free Trial: {subscriptionState.quizzesRemaining} quizzes remaining
            </p>
          </div>
        )}

        {!subscriptionState.freeTrial && !subscriptionState.isSubscribed && (
          <div className="mb-6 p-4 bg-red-50 rounded-lg border-2 border-red-300">
            <p className="text-center text-red-800 font-semibold">
              ⚠️ Free trial expired. Subscribe to continue learning!
            </p>
          </div>
        )}

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-6 border-2 border-yellow-300">
          <div className="text-center mb-4">
            <div className="text-5xl font-bold text-primary mb-2">R300</div>
            <div className="text-gray-600">per year</div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">Unlimited quizzes</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">All 8 math topics</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">Progress tracking</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">Achievements & rewards</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">Power-ups & hints</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">6 languages support</span>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600">
            💰 That's only R25 per month!
          </div>
        </div>

        <button
          onClick={onSubscribe}
          className="btn btn-primary w-full text-lg mb-3"
        >
          🎉 Subscribe Now - R300/year
        </button>

        {subscriptionState.freeTrial && subscriptionState.quizzesRemaining > 0 && (
          <button
            onClick={onClose}
            className="btn bg-gray-600 text-white hover:bg-gray-700 w-full text-lg"
          >
            Continue with Free Trial
          </button>
        )}

        {(!subscriptionState.freeTrial || subscriptionState.quizzesRemaining === 0) && (
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 w-full text-center mt-3"
          >
            Maybe later
          </button>
        )}

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Secure payment processing</p>
          <p>Cancel anytime • Full refund within 7 days</p>
        </div>
      </div>
    </div>
  )
}
