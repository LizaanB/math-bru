export interface SubscriptionState {
  isSubscribed: boolean
  subscriptionType: 'free' | 'yearly'
  expiryDate: string | null
  freeTrial: boolean
  quizzesRemaining: number
}

export const getInitialSubscriptionState = (): SubscriptionState => {
  const saved = localStorage.getItem('math-bru-subscription')
  if (saved) {
    const state = JSON.parse(saved)
    // Check if subscription expired
    if (state.expiryDate && new Date(state.expiryDate) < new Date()) {
      return {
        isSubscribed: false,
        subscriptionType: 'free',
        expiryDate: null,
        freeTrial: false,
        quizzesRemaining: 3
      }
    }
    return state
  }
  
  return {
    isSubscribed: false,
    subscriptionType: 'free',
    expiryDate: null,
    freeTrial: true,
    quizzesRemaining: 3
  }
}

export const saveSubscriptionState = (state: SubscriptionState): void => {
  localStorage.setItem('math-bru-subscription', JSON.stringify(state))
}

export const activateSubscription = (_state: SubscriptionState): SubscriptionState => {
  const expiryDate = new Date()
  expiryDate.setFullYear(expiryDate.getFullYear() + 1)
  
  return {
    isSubscribed: true,
    subscriptionType: 'yearly',
    expiryDate: expiryDate.toISOString(),
    freeTrial: false,
    quizzesRemaining: -1 // Unlimited
  }
}

export const canTakeQuiz = (state: SubscriptionState): boolean => {
  if (state.isSubscribed) return true
  if (state.freeTrial && state.quizzesRemaining > 0) return true
  return false
}

export const decrementQuizCount = (state: SubscriptionState): SubscriptionState => {
  if (state.isSubscribed) return state
  
  return {
    ...state,
    quizzesRemaining: Math.max(0, state.quizzesRemaining - 1),
    freeTrial: state.quizzesRemaining - 1 > 0
  }
}
