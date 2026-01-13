import { useState } from 'react'

interface PaymentModalProps {
  onClose: () => void
  onPaymentComplete: () => void
}

export default function PaymentModal({ onClose, onPaymentComplete }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'eft' | 'payfast'>('card')
  const [processing, setProcessing] = useState(false)

  const handlePayment = () => {
    setProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false)
      onPaymentComplete()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Complete Payment</h2>
          <button onClick={onClose} className="text-3xl text-gray-500 hover:text-gray-700">×</button>
        </div>

        <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-semibold">Math Bru - Yearly Subscription</span>
            <span className="text-2xl font-bold text-primary">R300</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Payment Method</h3>
          <div className="space-y-3">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                paymentMethod === 'card' ? 'border-primary bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💳</span>
                  <span className="font-semibold">Credit/Debit Card</span>
                </div>
                {paymentMethod === 'card' && <span className="text-primary text-xl">✓</span>}
              </div>
            </button>

            <button
              onClick={() => setPaymentMethod('eft')}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                paymentMethod === 'eft' ? 'border-primary bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏦</span>
                  <span className="font-semibold">Instant EFT</span>
                </div>
                {paymentMethod === 'eft' && <span className="text-primary text-xl">✓</span>}
              </div>
            </button>

            <button
              onClick={() => setPaymentMethod('payfast')}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                paymentMethod === 'payfast' ? 'border-primary bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔒</span>
                  <span className="font-semibold">PayFast</span>
                </div>
                {paymentMethod === 'payfast' && <span className="text-primary text-xl">✓</span>}
              </div>
            </button>
          </div>
        </div>

        {paymentMethod === 'card' && (
          <div className="mb-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handlePayment}
          disabled={processing}
          className={`btn w-full text-lg ${processing ? 'bg-gray-400 cursor-not-allowed' : 'btn-primary'}`}
        >
          {processing ? (
            <span className="flex items-center justify-center">
              <span className="animate-spin mr-2">⚙️</span> Processing...
            </span>
          ) : (
            `Pay R300`
          )}
        </button>

        <div className="mt-4 text-center text-xs text-gray-500">
          <p>🔒 Secure payment • SSL encrypted</p>
        </div>
      </div>
    </div>
  )
}
