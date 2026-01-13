# 🎓 DBE Exam Integration Guide

## Overview

This guide explains how to incorporate South African Department of Basic Education (DBE) exam questions and CAPS-aligned assessments into Math Bru.

## ✅ What's Been Added

### 1. **Exam System Types**
- `src/types/exam.ts` - Complete type definitions for DBE exams
- Grade-specific (4-7)
- Term-based assessments
- CAPS curriculum alignment

### 2. **Sample DBE Questions**
- `src/data/dbeExamQuestions.ts` - Real exam-style questions
- Grade 4 Term 1 full exam paper
- Sample questions for Grades 5-7
- Proper marking schemes

### 3. **Exam Mode Component**
- `src/components/ExamMode.tsx` - Full exam interface
- Timed exam mode
- Practice mode
- Question navigator
- Auto-submit when time expires

## 📋 CAPS Alignment Features

### Cognitive Levels (DBE Framework)
```typescript
'knowledge'        // Recall, recognition
'routine'          // Standard procedures
'complex'          // Multi-step problems
'problem-solving'  // Real-world applications
```

### Question Types
- **Multiple Choice** - 4 options (A, B, C, D)
- **Calculation** - Show working required
- **Word Problems** - Contextual applications
- **Show Work** - Step-by-step solutions

### Assessment Standards
Each question links to specific CAPS assessment standards:
```typescript
{
  grade: 4,
  term: 1,
  topic: 'Addition',
  cognitiveLevel: 'routine',
  assessmentStandard: 'Add whole numbers with 3 digits'
}
```

## 🎯 How to Add More Exam Papers

### Step 1: Create Exam Paper

```typescript
export const grade5Term2: ExamPaper = {
  id: 'g5-t2-2025',
  title: 'Grade 5 Mathematics - Term 2 Assessment',
  grade: 5,
  term: 2,
  year: 2025,
  totalMarks: 60,
  duration: 90, // minutes
  instructions: [
    'Read all questions carefully.',
    'Answer ALL questions.',
    // ... more instructions
  ],
  sections: [
    {
      name: 'Section A: Fractions',
      instructions: 'Answer all questions on fractions.',
      totalMarks: 20,
      questions: [
        // Add questions here
      ]
    }
  ],
  questions: []
}
```

### Step 2: Add Questions

```typescript
const question: DBEQuestion = {
  id: 'g5-q15',
  question: 'What is 1/2 + 1/3?',
  type: 'calculation',
  correctAnswer: '5/6',
  marks: 3,
  showWorking: true,
  capsAlignment: {
    grade: 5,
    term: 2,
    topic: 'Fractions',
    cognitiveLevel: 'routine',
    assessmentStandard: 'Add fractions with different denominators'
  },
  difficulty: 'medium',
  explanation: 'LCD = 6; 3/6 + 2/6 = 5/6'
}
```

### Step 3: Link to Curriculum

Match each question to the CAPS document:
- **Grade level**
- **Term** (1-4)
- **Topic area**
- **Specific assessment standard**
- **Cognitive level**

## 📚 Sample Exam Papers Needed

### Grade 4
- ✅ Term 1: Addition, Subtraction, Place Value
- ⏳ Term 2: Multiplication, Division, Time
- ⏳ Term 3: Fractions, Measurement
- ⏳ Term 4: Geometry, Data Handling

### Grade 5
- ⏳ Term 1: Whole Numbers, Operations
- ✅ Term 2: Fractions, Decimals (sample questions)
- ⏳ Term 3: Geometry, Perimeter, Area
- ⏳ Term 4: Graphs, Probability

### Grade 6
- ⏳ Term 1: Integers, Prime Numbers
- ✅ Term 2: Percentages, Ratio (sample)
- ⏳ Term 3: Algebra, Equations
- ⏳ Term 4: Data Handling, Probability

### Grade 7
- ✅ Term 1: Integers (sample)
- ⏳ Term 2: Exponents, Scientific Notation
- ⏳ Term 3: Geometry, Transformations
- ✅ Term 4: Algebra, Equations (sample)

## 🔗 Integration with Main App

### Add Exam Mode to Navigation

Update `src/App.tsx`:

```typescript
import ExamMode from './components/ExamMode'
import { grade4Term1 } from './data/dbeExamQuestions'

type Screen = 'home' | 'topics' | 'quiz' | 'results' | 'progress' | 'exam'

// In App component:
const [selectedExam, setSelectedExam] = useState<ExamPaper | null>(null)

// Add exam screen:
{screen === 'exam' && selectedExam && (
  <ExamMode
    examPaper={selectedExam}
    mode="timed-exam"
    onComplete={(attempt) => {
      // Save exam attempt
      console.log('Exam completed:', attempt)
      setScreen('results')
    }}
    onExit={() => setScreen('home')}
  />
)}
```

### Add Exam Selection Screen

Create `src/components/ExamSelector.tsx`:

```typescript
export default function ExamSelector({ onSelectExam, onBack }) {
  const exams = allExamPapers
  
  return (
    <div className="card">
      <h2>📝 DBE Practice Exams</h2>
      {exams.map(exam => (
        <div key={exam.id} className="exam-card">
          <h3>{exam.title}</h3>
          <p>Grade {exam.grade} • Term {exam.term}</p>
          <p>{exam.totalMarks} marks • {exam.duration} minutes</p>
          <button onClick={() => onSelectExam(exam)}>
            Start Exam
          </button>
        </div>
      ))}
    </div>
  )
}
```

## 📊 Tracking & Analytics

### Save Exam Attempts

```typescript
// In localStorage or backend
const saveExamAttempt = (attempt: ExamAttempt) => {
  const attempts = JSON.parse(localStorage.getItem('exam-attempts') || '[]')
  attempts.push(attempt)
  localStorage.setItem('exam-attempts', JSON.stringify(attempts))
}
```

### Track Performance by CAPS Standards

```typescript
const analyzePerformance = (attempts: ExamAttempt[]) => {
  // Group by topic
  // Calculate average by cognitive level
  // Identify weak areas
  // Recommend practice topics
}
```

## 🎯 Official DBE Resources

### Where to Get Real Exam Papers

1. **DBE Website**: www.education.gov.za
   - Past exam papers
   - Memorandums
   - CAPS documents

2. **Provincial Education Departments**
   - Gauteng: www.gauteng.gov.za/education
   - Western Cape: wcedonline.westerncape.gov.za
   - KwaZulu-Natal: www.kzneducation.gov.za

3. **CAPS Documents**
   - Download from DBE website
   - Curriculum statements for each grade
   - Assessment standards

### Converting PDF Papers to Digital

1. **Manual Entry** (most accurate)
   - Type questions into the format
   - Verify answers
   - Add explanations

2. **OCR Tools**
   - Adobe Acrobat
   - Google Drive OCR
   - Then format into structure

3. **Quality Check**
   - Verify all marks
   - Check answer keys
   - Test difficulty ratings

## 👥 Teacher Features

### Teacher Dashboard (Future)

```typescript
interface TeacherView {
  classPerformance: {
    examId: string
    averageScore: number
    completionRate: number
    weakTopics: string[]
  }
  studentProgress: {
    studentId: string
    examsCompleted: number
    averagePercentage: number
    strongTopics: string[]
    weakTopics: string[]
  }[]
}
```

### Assign Homework

```typescript
const homework = {
  examPaperId: 'g4-t1-2025',
  dueDate: '2025-02-15',
  classId: 'grade4a',
  mode: 'homework' // Untimed, can pause
}
```

## 🎓 Benefits for Schools

### 1. **CAPS-Aligned Practice**
- Questions match DBE format
- Proper assessment standards
- Cognitive level distribution

### 2. **Exam Preparation**
- Timed practice exams
- Realistic exam conditions
- Instant feedback

### 3. **Progress Tracking**
- Per-topic performance
- Term-by-term improvement
- Identify learning gaps

### 4. **Reduced Paper Usage**
- Digital assessments
- Auto-marking
- Instant results

### 5. **Accessibility**
- Practice anytime
- Multiple attempts
- Self-paced learning

## 📝 Next Steps

### Immediate Actions
1. ✅ Review the Grade 4 Term 1 sample exam
2. ⏳ Add the exam selector to the home screen
3. ⏳ Test the exam mode component
4. ⏳ Gather feedback from teachers

### Short-term (Next 2 Weeks)
1. Add 3 more full exam papers (G5, G6, G7)
2. Create exam results screen with detailed breakdown
3. Add "save and continue later" functionality
4. Implement exam history tracking

### Medium-term (Next Month)
1. Source official DBE past papers
2. Convert to digital format
3. Add all 4 terms for each grade
4. Create teacher dashboard
5. Add homework assignment feature

### Long-term (Next 3 Months)
1. Full CAPS coverage for Grades 4-7
2. Adaptive practice (focus on weak areas)
3. Compare performance to national averages
4. Generate study plans based on exam results
5. Integration with school management systems

## 🤝 Contributing Exam Content

### Teachers Can Help!
If you're a teacher, you can contribute:
- Past papers you've created
- Question banks
- Marking schemes
- CAPS alignment verification

### Quality Standards
- Questions must be grade-appropriate
- Answers verified by teachers
- CAPS alignment accurate
- Clear, unambiguous wording
- Appropriate difficulty distribution

---

**Ready to help SA learners ace their exams! 🇿🇦📚**
