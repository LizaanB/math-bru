import { useState, useEffect } from 'react'
import { ExamPaper, ExamAttempt } from '../types/exam'
import ScratchPad from './ScratchPad'

interface ExamModeProps {
  examPaper: ExamPaper
  onComplete: (attempt: ExamAttempt) => void
  onExit: () => void
  mode: 'practice' | 'timed-exam'
  language: 'en' | 'af'
}

export default function ExamMode({ examPaper, onComplete, onExit, mode, language }: ExamModeProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})
  const [workingNotes, setWorkingNotes] = useState<{ [key: string]: string }>({})
  const [timeRemaining, setTimeRemaining] = useState(examPaper.duration * 60) // seconds
  const [startTime] = useState(new Date().toISOString())
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false)
  const [isScratchPadOpen, setIsScratchPadOpen] = useState(false)

  const question = examPaper.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / examPaper.questions.length) * 100

  useEffect(() => {
    if (mode === 'timed-exam' && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleSubmit()
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [timeRemaining, mode])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [question.id]: answer })
  }

  const handleWorkingChange = (working: string) => {
    setWorkingNotes({ ...workingNotes, [question.id]: working })
  }

  const handleNext = () => {
    if (currentQuestion < examPaper.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowSubmitConfirm(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    const endTime = new Date().toISOString()
    const timeSpent = (new Date(endTime).getTime() - new Date(startTime).getTime()) / 1000

    // Calculate score
    let score = 0
    examPaper.questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        score += q.marks
      }
    })

    const attempt: ExamAttempt = {
      examPaperId: examPaper.id,
      startTime,
      endTime,
      answers,
      score,
      totalMarks: examPaper.totalMarks,
      percentage: Math.round((score / examPaper.totalMarks) * 100),
      timeSpent
    }

    onComplete(attempt)
  }

  const getQuestionStatus = (index: number) => {
    const q = examPaper.questions[index]
    if (answers[q.id]) return 'answered'
    if (index === currentQuestion) return 'current'
    return 'unanswered'
  }

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-mathBru-blue to-blue-700">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-2xl p-4 shadow-xl">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{examPaper.title}</h2>
              <p className="text-sm text-gray-600">Grade {examPaper.grade} • Term {examPaper.term}</p>
            </div>
            {mode === 'timed-exam' && (
              <div className={`text-2xl font-bold ${timeRemaining < 300 ? 'text-red-600' : 'text-gray-700'}`}>
                ⏱️ {formatTime(timeRemaining)}
              </div>
            )}
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div 
              className="bg-mathBru-cyan h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {examPaper.questions.length} • {examPaper.totalMarks} marks total
          </p>
        </div>

        {/* Question Navigator */}
        <div className="bg-white p-3 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {examPaper.questions.map((_, index) => {
              const status = getQuestionStatus(index)
              return (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                    status === 'current'
                      ? 'bg-mathBru-blue text-white ring-2 ring-mathBru-yellow'
                      : status === 'answered'
                      ? 'bg-mathBru-green text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              )
            })}
          </div>
        </div>

        {/* Question Content */}
        <div className="bg-white p-6 shadow-xl">
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <span className="bg-mathBru-yellow text-white px-3 py-1 rounded-full text-sm font-bold">
                {language === 'af' ? 'Vraag' : 'Question'} {currentQuestion + 1}
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-bold">
                {question.marks} {question.marks === 1 ? (language === 'af' ? 'punt' : 'mark') : (language === 'af' ? 'punte' : 'marks')}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {language === 'af' && question.questionAf ? question.questionAf : question.question}
            </h3>
            
            {question.showWorking && (
              <p className="text-sm text-mathBru-red font-semibold">
                ⚠️ {language === 'af' ? 'Wys al jou bewerkings' : 'Show all your working'}
              </p>
            )}
          </div>

          {/* Answer Options/Input */}
          <div className="space-y-3">
            {question.type === 'multiple-choice' && question.options ? (
              (language === 'af' && question.optionsAf ? question.optionsAf : question.options).map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-4 rounded-xl text-left font-semibold transition-all border-2 ${
                    answers[question.id] === option
                      ? 'bg-mathBru-cyan text-white border-mathBru-cyan'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-mathBru-cyan hover:bg-blue-50'
                  }`}
                >
                  <span className="inline-block w-8 h-8 rounded-full bg-white text-mathBru-blue text-center leading-8 mr-3">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </button>
              ))
            ) : (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {language === 'af' ? 'Jou Antwoord:' : 'Your Answer:'}
                </label>
                <input
                  type="text"
                  value={answers[question.id] || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                  className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-mathBru-cyan focus:outline-none text-lg"
                  placeholder={language === 'af' ? 'Tik jou antwoord hier...' : 'Type your answer here...'}
                />
              </div>
            )}
          </div>

          {/* Working/Scratchpad Area - Available for all questions */}
          <div className="mt-6 bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">📝</span>
              <label className="block text-sm font-bold text-gray-700">
                {language === 'af' ? 'Wys Jou Werk / Kladpapier' : 'Show Your Work / Scratchpad'}
              </label>
            </div>
            <textarea
              value={workingNotes[question.id] || ''}
              onChange={(e) => handleWorkingChange(e.target.value)}
              className="w-full p-4 border-2 border-yellow-300 rounded-xl focus:border-mathBru-yellow focus:outline-none bg-white"
              rows={5}
              placeholder={language === 'af' 
                ? '✏️ Skryf of tik hoe jy die probleem opgelos het... Wys jou berekeninge, tekeninge, of stappe hier!'
                : '✏️ Write or type how you solved this problem... Show your calculations, drawings, or steps here!'}
            />
            <p className="text-xs text-gray-600 mt-2">
              {language === 'af' 
                ? '💡 Wenk: Wys al jou stappe om jou te help onthou hoe jy dit opgelos het!'
                : '💡 Tip: Show all your steps to help you remember how you solved it!'}
            </p>
          </div>

          {/* DBE Info */}
          <div className="mt-6 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs text-gray-600">
              <strong>CAPS:</strong> {question.capsAlignment.topic} • {question.capsAlignment.cognitiveLevel}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="bg-white rounded-b-2xl p-4 shadow-xl flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>

          <button
            onClick={onExit}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600"
          >
            Save & Exit
          </button>

          {currentQuestion < examPaper.questions.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-mathBru-cyan text-white rounded-lg font-semibold hover:bg-cyan-600"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={() => setShowSubmitConfirm(true)}
              className="px-6 py-3 bg-mathBru-green text-white rounded-lg font-semibold hover:bg-green-600"
            >
              Submit Exam
            </button>
          )}
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Submit Exam?</h3>
            <p className="text-gray-600 mb-6">
              You have answered <strong>{Object.keys(answers).length}</strong> out of{' '}
              <strong>{examPaper.questions.length}</strong> questions.
              {Object.keys(answers).length < examPaper.questions.length && (
                <span className="block mt-2 text-mathBru-red font-semibold">
                  ⚠️ Some questions are unanswered!
                </span>
              )}
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400"
              >
                Go Back
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-6 py-3 bg-mathBru-green text-white rounded-lg font-semibold hover:bg-green-600"
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      )}

      <ScratchPad isExpanded={isScratchPadOpen} onToggle={() => setIsScratchPadOpen(!isScratchPadOpen)} />
    </div>
  )
}
