import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Language, languageNames } from '../i18n/translations'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-90 rounded-lg shadow-md hover:shadow-lg transition-all"
      >
        <span className="text-2xl">🌍</span>
        <span className="font-semibold text-gray-800">{languageNames[language]}</span>
        <span className="text-gray-600">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl overflow-hidden z-50 min-w-[160px]">
          {(Object.keys(languageNames) as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors ${
                language === lang ? 'bg-blue-100 font-semibold' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-800">{languageNames[lang]}</span>
                {language === lang && <span className="text-primary">✓</span>}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
