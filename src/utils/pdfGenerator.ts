import jsPDF from 'jspdf'
import { ExamPaper } from '../types/exam'

export const generateExamPDF = (exam: ExamPaper, language: 'en' | 'af' = 'en') => {
  const doc = new jsPDF()
  
  // Header
  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  const title = language === 'af' && exam.titleAf ? exam.titleAf : exam.title
  doc.text(title, 105, 20, { align: 'center' })
  
  // Subtitle
  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')
  const gradeText = language === 'af' ? 'Graad' : 'Grade'
  const termText = language === 'af' ? 'Kwartaal' : 'Term'
  doc.text(`${gradeText} ${exam.grade} - ${termText} ${exam.term} - ${exam.year}`, 105, 30, { align: 'center' })
  
  // Exam details
  doc.setFontSize(10)
  const totalMarksLabel = language === 'af' ? 'Totale Punte:' : 'Total Marks:'
  const durationLabel = language === 'af' ? 'Tydsduur:' : 'Duration:'
  const minutesLabel = language === 'af' ? 'minute' : 'minutes'
  doc.text(`${totalMarksLabel} ${exam.totalMarks}`, 20, 45)
  doc.text(`${durationLabel} ${exam.duration} ${minutesLabel}`, 120, 45)
  
  // Instructions
  let yPos = 60
  doc.setFont('helvetica', 'bold')
  doc.text(language === 'af' ? 'Instruksies:' : 'Instructions:', 20, yPos)
  doc.setFont('helvetica', 'normal')
  
  const instructions = language === 'af' && exam.instructionsAf ? exam.instructionsAf : exam.instructions
  instructions?.forEach((instruction, i) => {
    yPos += 7
    if (yPos > 270) {
      doc.addPage()
      yPos = 20
    }
    doc.text(`${i + 1}. ${instruction}`, 25, yPos)
  })
  
  yPos += 15
  
  // Questions
  exam.questions.forEach((question, index) => {
    if (yPos > 250) {
      doc.addPage()
      yPos = 20
    }
    
    // Question number and marks
    doc.setFont('helvetica', 'bold')
    const questionLabel = language === 'af' ? 'Vraag' : 'Question'
    const markLabel = question.marks === 1 ? (language === 'af' ? 'punt' : 'mark') : (language === 'af' ? 'punte' : 'marks')
    doc.text(`${questionLabel} ${index + 1} [${question.marks} ${markLabel}]`, 20, yPos)
    
    yPos += 7
    
    // Question text
    doc.setFont('helvetica', 'normal')
    const questionText = language === 'af' && question.questionAf ? question.questionAf : question.question
    const questionLines = doc.splitTextToSize(questionText, 170)
    doc.text(questionLines, 20, yPos)
    yPos += questionLines.length * 7
    
    // Options for multiple choice
    if (question.type === 'multiple-choice' && question.options) {
      const options = language === 'af' && question.optionsAf ? question.optionsAf : question.options
      options.forEach((option, i) => {
        yPos += 6
        if (yPos > 270) {
          doc.addPage()
          yPos = 20
        }
        doc.text(`${String.fromCharCode(65 + i)}) ${option}`, 25, yPos)
      })
    }
    
    // Working space
    yPos += 10
    if (question.showWorking) {
      doc.setFont('helvetica', 'italic')
      doc.text(language === 'af' ? 'Wys jou berekening:' : 'Show your working:', 25, yPos)
      yPos += 20
    } else {
      yPos += 15
    }
    
    yPos += 10
  })
  
  // Save PDF
  const fileName = `${exam.title.replace(/\s+/g, '_')}_${language.toUpperCase()}.pdf`
  doc.save(fileName)
}
