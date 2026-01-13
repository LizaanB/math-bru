import { GameState, Achievement } from '../types'

export const achievements: Achievement[] = [
  { id: 'first_quiz', title: 'Getting Started', description: 'Complete your first quiz', icon: '🎓', requirement: 1, type: 'quizzes' },
  { id: 'streak_5', title: 'Hot Streak', description: 'Get 5 correct answers in a row', icon: '🔥', requirement: 5, type: 'streak' },
  { id: 'streak_10', title: 'On Fire!', description: 'Get 10 correct answers in a row', icon: '🔥🔥', requirement: 10, type: 'streak' },
  { id: 'coins_100', title: 'Coin Collector', description: 'Earn 100 coins', icon: '🪙', requirement: 100, type: 'coins' },
  { id: 'coins_500', title: 'Treasure Hunter', description: 'Earn 500 coins', icon: '💰', requirement: 500, type: 'coins' },
  { id: 'perfect_quiz', title: 'Perfect Score', description: 'Get 100% on a quiz', icon: '💯', requirement: 100, type: 'accuracy' },
  { id: 'level_5', title: 'Math Apprentice', description: 'Reach level 5', icon: '⭐', requirement: 5, type: 'level' },
  { id: 'level_10', title: 'Math Expert', description: 'Reach level 10', icon: '🌟', requirement: 10, type: 'level' },
  { id: 'quizzes_10', title: 'Dedicated Learner', description: 'Complete 10 quizzes', icon: '📚', requirement: 10, type: 'quizzes' },
  { id: 'quizzes_25', title: 'Math Champion', description: 'Complete 25 quizzes', icon: '🏆', requirement: 25, type: 'quizzes' },
]

export const getXpForLevel = (level: number): number => {
  return level * 100
}

export const calculateLevel = (xp: number): number => {
  let level = 1
  let totalXpNeeded = 0
  
  while (totalXpNeeded + getXpForLevel(level) <= xp) {
    totalXpNeeded += getXpForLevel(level)
    level++
  }
  
  return level
}

export const getXpProgress = (xp: number, level: number): { current: number; needed: number } => {
  let totalXpForPreviousLevels = 0
  for (let i = 1; i < level; i++) {
    totalXpForPreviousLevels += getXpForLevel(i)
  }
  
  const currentXp = xp - totalXpForPreviousLevels
  const neededXp = getXpForLevel(level)
  
  return { current: currentXp, needed: neededXp }
}

export const calculateCoins = (
  isCorrect: boolean,
  timeBonus: boolean,
  streakMultiplier: number,
  difficulty: 'easy' | 'medium' | 'hard'
): number => {
  if (!isCorrect) return 0
  
  let baseCoins = 10
  if (difficulty === 'medium') baseCoins = 15
  if (difficulty === 'hard') baseCoins = 25
  
  let total = baseCoins
  if (timeBonus) total += 5
  total = Math.floor(total * streakMultiplier)
  
  return total
}

export const getStreakMultiplier = (streak: number): number => {
  if (streak >= 10) return 3
  if (streak >= 5) return 2
  if (streak >= 3) return 1.5
  return 1
}

export const checkAchievements = (
  gameState: GameState,
  totalQuizzes: number,
  lastQuizAccuracy: number
): string[] => {
  const newAchievements: string[] = []
  
  achievements.forEach(achievement => {
    if (gameState.achievements.includes(achievement.id)) return
    
    let shouldUnlock = false
    
    switch (achievement.type) {
      case 'streak':
        shouldUnlock = gameState.bestStreak >= achievement.requirement
        break
      case 'coins':
        shouldUnlock = gameState.coins >= achievement.requirement
        break
      case 'quizzes':
        shouldUnlock = totalQuizzes >= achievement.requirement
        break
      case 'accuracy':
        shouldUnlock = lastQuizAccuracy >= achievement.requirement
        break
      case 'level':
        shouldUnlock = gameState.level >= achievement.requirement
        break
    }
    
    if (shouldUnlock) {
      newAchievements.push(achievement.id)
    }
  })
  
  return newAchievements
}

export const getInitialGameState = (): GameState => {
  const saved = localStorage.getItem('math-bru-game-state')
  if (saved) {
    return JSON.parse(saved)
  }
  
  return {
    coins: 0,
    level: 1,
    xp: 0,
    streak: 0,
    bestStreak: 0,
    achievements: [],
    powerUps: {
      hints: 3,
      fiftyFifty: 2
    },
    dailyStreak: 0,
    lastPlayed: new Date().toISOString().split('T')[0]
  }
}

export const saveGameState = (gameState: GameState): void => {
  localStorage.setItem('math-bru-game-state', JSON.stringify(gameState))
}

export const buyPowerUp = (
  gameState: GameState,
  powerUp: 'hint' | 'fiftyFifty'
): GameState | null => {
  const cost = powerUp === 'hint' ? 50 : 100
  
  if (gameState.coins < cost) return null
  
  const newState = { ...gameState }
  newState.coins -= cost
  
  if (powerUp === 'hint') {
    newState.powerUps.hints++
  } else {
    newState.powerUps.fiftyFifty++
  }
  
  return newState
}
