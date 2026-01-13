import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { ExamPaper, Grade } from '../types/exam'
import { allExamPapers } from '../data/dbeExamQuestions'
import { generateExamPDF } from '../utils/pdfGenerator'

interface ExamSelectorProps {
  onSelectExam: (exam: ExamPaper, mode: 'practice' | 'timed-exam', language: 'en' | 'af') => void
  onBack: () => void
}

export default function ExamSelector({ onSelectExam, onBack }: ExamSelectorProps) {
  const { t } = useLanguage()
  const [selectedGrade, setSelectedGrade] = useState<Grade>(4)
  const [examLanguage, setExamLanguage] = useState<'en' | 'af'>('en')

  const grades: Grade[] = [4, 5, 6, 7]
  const filteredExams = allExamPapers.filter(exam => exam.grade === selectedGrade)

  const handleDownloadPDF = (exam: ExamPaper) => {
    generateExamPDF(exam, examLanguage)
  }

  return (
    <div className="card animate-fade-in">
      <button
        onClick={onBack}
        className="text-primary hover:text-indigo-700 font-semibold mb-6"
      >
        ← {t('backToHome')}
      </button>

      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-mathBru-yellow to-mathBru-orange mb-4 text-center">
        📝 DBE Practice Exams
      </h2>
      <p className="text-center text-gray-600 mb-4">
        Official Department of Basic Education exam papers to prepare for your assessments
      </p>

      {/* Language Selector for Exams */}
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setExamLanguage('en')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            examLanguage === 'en'
              ? 'bg-mathBru-cyan text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setExamLanguage('af')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            examLanguage === 'af'
              ? 'bg-mathBru-cyan text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          Afrikaans
        </button>
      </div>

      {/* Grade Selector Tabs */}
      <div className="flex justify-center gap-2 mb-8">
        {grades.map(grade => (
          <button
            key={grade}
            onClick={() => setSelectedGrade(grade)}
            className={`px-6 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
              selectedGrade === grade
                ? 'bg-gradient-to-r from-mathBru-blue to-mathBru-cyan text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            Grade {grade}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredExams.map(exam => (
          <div 
            key={exam.id} 
            className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border-2 border-mathBru-blue shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{exam.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Grade {exam.grade} • Term {exam.term} • {exam.year}
                </p>
              </div>
              <span className="bg-mathBru-yellow text-white px-3 py-1 rounded-full text-sm font-bold">
                {exam.totalMarks} marks
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="mr-2">⏱️</span>
                <span><strong>Duration:</strong> {exam.duration} minutes</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="mr-2">📊</span>
                <span><strong>Questions:</strong> {exam.questions.length}</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="mr-2">📚</span>
                <span><strong>Sections:</strong> {exam.sections?.length || 1}</span>
              </div>
            </div>

            {exam.instructions && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <p className="text-xs font-semibold text-gray-700 mb-1">Instructions:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {exam.instructions.slice(0, 3).map((instruction, i) => (
                    <li key={i}>• {instruction}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-2 gap-2 mb-2">
              <button
                onClick={() => onSelectExam(exam, 'practice', examLanguage)}
                className="btn bg-gradient-to-r from-mathBru-cyan to-mathBru-blue text-white hover:shadow-xl hover:scale-105 transform transition py-3"
              >
                🎯 Practice
              </button>
              <button
                onClick={() => onSelectExam(exam, 'timed-exam', examLanguage)}
                className="btn bg-gradient-to-r from-mathBru-orange to-mathBru-red text-white hover:shadow-xl hover:scale-105 transform transition py-3"
              >
                ⏱️ Timed
              </button>
            </div>
            <button
              onClick={() => handleDownloadPDF(exam)}
              className="w-full btn bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-xl hover:scale-105 transform transition py-3 flex items-center justify-center"
            >
              📄 Download PDF ({examLanguage === 'en' ? 'English' : 'Afrikaans'})
            </button>
          </div>
        ))}
      </div>

      {filteredExams.length === 0 && (
        <div className="text-center py-12 col-span-2">
          <p className="text-gray-500 text-lg">No exam papers available for Grade {selectedGrade} yet.</p>
          <p className="text-gray-400 mt-2">Try selecting another grade or check back soon!</p>
        </div>
      )}

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
        <h3 className="text-lg font-bold text-gray-800 mb-3">💡 Exam Tips</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
          <div className="flex items-start">
            <span className="mr-2">✓</span>
            <span><strong>Practice Mode:</strong> No time limit, see answers immediately</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2">✓</span>
            <span><strong>Timed Mode:</strong> Real exam conditions with countdown timer</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2">✓</span>
            <span><strong>Show Working:</strong> Always write down your steps</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2">✓</span>
            <span><strong>Check Answers:</strong> Review all questions before submitting</span>
          </div>
        </div>
      </div>
    </div>
  )
}
