import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { LanguageProvider } from './contexts/LanguageContext'
import { SplashScreen } from '@capacitor/splash-screen'
import { StatusBar, Style } from '@capacitor/status-bar'

// Initialize mobile app
const initMobileApp = async () => {
  try {
    // Set status bar style
    await StatusBar.setStyle({ style: Style.Light })
    await StatusBar.setBackgroundColor({ color: '#1E88E5' })
    
    // Hide splash screen when app is ready
    setTimeout(async () => {
      await SplashScreen.hide()
    }, 2000)
  } catch (error) {
    // Not running on mobile, ignore
    console.log('Running in browser mode')
  }
}

initMobileApp()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)
