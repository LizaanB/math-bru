import { UserProgress } from '../types'

const STORAGE_KEY = 'math-bru-progress'

export function saveProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch (error) {
    console.error('Failed to save progress:', error)
  }
}

export function loadProgress(): UserProgress {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : {}
  } catch (error) {
    console.error('Failed to load progress:', error)
    return {}
  }
}

export function clearProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Failed to clear progress:', error)
  }
}
