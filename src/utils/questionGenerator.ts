import { Topic, QuizQuestion } from '../types'

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

function generateOptions(correctAnswer: number, count: number = 4): number[] {
  const options = new Set<number>([correctAnswer])
  
  while (options.size < count) {
    const offset = Math.floor(Math.random() * 20) - 10
    const option = correctAnswer + offset
    if (option !== correctAnswer && option > 0) {
      options.add(option)
    }
  }
  
  return shuffleArray(Array.from(options))
}

function generateAdditionQuestion(difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion {
  let a: number, b: number
  
  switch (difficulty) {
    case 'easy':
      a = Math.floor(Math.random() * 50) + 1
      b = Math.floor(Math.random() * 50) + 1
      break
    case 'medium':
      a = Math.floor(Math.random() * 200) + 50
      b = Math.floor(Math.random() * 200) + 50
      break
    case 'hard':
      a = Math.floor(Math.random() * 500) + 200
      b = Math.floor(Math.random() * 500) + 200
      break
  }
  
  const answer = a + b
  
  // Random question formats for variety
  const formats = [
    {
      question: `${a} + ${b} = ?`,
      explanation: `${a} + ${b} = ${answer}`
    },
    {
      question: `What is ${a} plus ${b}?`,
      explanation: `${a} plus ${b} equals ${answer}`
    },
    {
      question: `Add ${a} and ${b}`,
      explanation: `${a} + ${b} = ${answer}`
    },
    {
      question: `Sarah has ${a} apples and gets ${b} more. How many apples does she have now?`,
      explanation: `${a} + ${b} = ${answer} apples`
    },
    {
      question: `If you have ${a} marbles and find ${b} more, how many marbles do you have in total?`,
      explanation: `${a} + ${b} = ${answer} marbles`
    }
  ]
  
  const format = formats[Math.floor(Math.random() * formats.length)]
  
  return {
    question: format.question,
    options: generateOptions(answer),
    correctAnswer: answer,
    explanation: format.explanation
  }
}

function generateSubtractionQuestion(difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion {
  let a: number, b: number
  
  switch (difficulty) {
    case 'easy':
      a = Math.floor(Math.random() * 50) + 25
      b = Math.floor(Math.random() * (a - 10)) + 1
      break
    case 'medium':
      a = Math.floor(Math.random() * 200) + 100
      b = Math.floor(Math.random() * (a - 20)) + 10
      break
    case 'hard':
      a = Math.floor(Math.random() * 500) + 300
      b = Math.floor(Math.random() * (a - 50)) + 50
      break
  }
  
  const answer = a - b
  
  // Random question formats for variety
  const formats = [
    {
      question: `${a} - ${b} = ?`,
      explanation: `${a} - ${b} = ${answer}`
    },
    {
      question: `What is ${a} minus ${b}?`,
      explanation: `${a} minus ${b} equals ${answer}`
    },
    {
      question: `Subtract ${b} from ${a}`,
      explanation: `${a} - ${b} = ${answer}`
    },
    {
      question: `Tom had ${a} coins but spent ${b}. How many coins does he have left?`,
      explanation: `${a} - ${b} = ${answer} coins`
    },
    {
      question: `A store has ${a} items. If ${b} are sold, how many remain?`,
      explanation: `${a} - ${b} = ${answer} items`
    }
  ]
  
  const format = formats[Math.floor(Math.random() * formats.length)]
  
  return {
    question: format.question,
    options: generateOptions(answer),
    correctAnswer: answer,
    explanation: format.explanation
  }
}

function generateMultiplicationQuestion(difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion {
  let a: number, b: number
  
  switch (difficulty) {
    case 'easy':
      a = Math.floor(Math.random() * 10) + 2
      b = Math.floor(Math.random() * 10) + 2
      break
    case 'medium':
      a = Math.floor(Math.random() * 15) + 5
      b = Math.floor(Math.random() * 15) + 5
      break
    case 'hard':
      a = Math.floor(Math.random() * 25) + 10
      b = Math.floor(Math.random() * 25) + 10
      break
  }
  
  const answer = a * b
  
  // Random question formats for variety
  const formats = [
    {
      question: `${a} × ${b} = ?`,
      explanation: `${a} × ${b} = ${answer}`
    },
    {
      question: `What is ${a} times ${b}?`,
      explanation: `${a} times ${b} equals ${answer}`
    },
    {
      question: `Multiply ${a} by ${b}`,
      explanation: `${a} × ${b} = ${answer}`
    },
    {
      question: `Each box contains ${b} items. If there are ${a} boxes, how many items in total?`,
      explanation: `${a} × ${b} = ${answer} items`
    },
    {
      question: `A car travels ${b} km per hour. How far does it travel in ${a} hours?`,
      explanation: `${a} × ${b} = ${answer} km`
    },
    {
      question: `If ${a} students each have ${b} pencils, how many pencils are there altogether?`,
      explanation: `${a} × ${b} = ${answer} pencils`
    }
  ]
  
  const format = formats[Math.floor(Math.random() * formats.length)]
  
  return {
    question: format.question,
    options: generateOptions(answer),
    correctAnswer: answer,
    explanation: format.explanation
  }
}

function generateDivisionQuestion(difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion {
  let divisor: number, answer: number
  
  switch (difficulty) {
    case 'easy':
      divisor = Math.floor(Math.random() * 8) + 2
      answer = Math.floor(Math.random() * 10) + 2
      break
    case 'medium':
      divisor = Math.floor(Math.random() * 12) + 5
      answer = Math.floor(Math.random() * 15) + 5
      break
    case 'hard':
      divisor = Math.floor(Math.random() * 20) + 10
      answer = Math.floor(Math.random() * 25) + 10
      break
  }
  
  const dividend = divisor * answer
  
  // Random question formats for variety
  const formats = [
    {
      question: `${dividend} ÷ ${divisor} = ?`,
      explanation: `${dividend} ÷ ${divisor} = ${answer} (because ${divisor} × ${answer} = ${dividend})`
    },
    {
      question: `What is ${dividend} divided by ${divisor}?`,
      explanation: `${dividend} ÷ ${divisor} = ${answer}`
    },
    {
      question: `Divide ${dividend} by ${divisor}`,
      explanation: `${dividend} ÷ ${divisor} = ${answer}`
    },
    {
      question: `${dividend} cookies are shared equally among ${divisor} children. How many cookies does each child get?`,
      explanation: `${dividend} ÷ ${divisor} = ${answer} cookies per child`
    },
    {
      question: `A teacher has ${dividend} books to distribute equally into ${divisor} boxes. How many books per box?`,
      explanation: `${dividend} ÷ ${divisor} = ${answer} books per box`
    }
  ]
  
  const format = formats[Math.floor(Math.random() * formats.length)]
  
  return {
    question: format.question,
    options: generateOptions(answer),
    correctAnswer: answer,
    explanation: format.explanation
  }
}

function generateLongDivisionQuestion(difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion {
  let divisor: number, answer: number
  
  switch (difficulty) {
    case 'easy':
      divisor = Math.floor(Math.random() * 9) + 2
      answer = Math.floor(Math.random() * 40) + 10
      break
    case 'medium':
      divisor = Math.floor(Math.random() * 20) + 10
      answer = Math.floor(Math.random() * 80) + 20
      break
    case 'hard':
      divisor = Math.floor(Math.random() * 50) + 20
      answer = Math.floor(Math.random() * 150) + 50
      break
  }
  
  const dividend = divisor * answer
  
  // Different long division formats
  const formats = [
    {
      question: `Solve using long division: ${dividend} ÷ ${divisor} = ?`,
      explanation: `${dividend} ÷ ${divisor} = ${answer}. Working: ${divisor} × ${answer} = ${dividend}`
    },
    {
      question: `Use long division to find: ${dividend} divided by ${divisor}`,
      explanation: `${dividend} ÷ ${divisor} = ${answer}`
    },
    {
      question: `A bakery made ${dividend} cupcakes. If they pack them in boxes of ${divisor}, how many full boxes can they make?`,
      explanation: `${dividend} ÷ ${divisor} = ${answer} boxes`
    },
    {
      question: `${dividend} students need to be divided into groups of ${divisor}. How many groups will there be?`,
      explanation: `${dividend} ÷ ${divisor} = ${answer} groups`
    }
  ]
  
  const format = formats[Math.floor(Math.random() * formats.length)]
  
  return {
    question: format.question,
    options: generateOptions(answer),
    correctAnswer: answer,
    explanation: format.explanation
  }
}

function generateFractionsQuestion(difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion {
  let num1: number, den1: number, num2: number, den2: number
  
  switch (difficulty) {
    case 'easy':
      den1 = den2 = Math.floor(Math.random() * 6) + 2
      num1 = Math.floor(Math.random() * (den1 - 1)) + 1
      num2 = Math.floor(Math.random() * (den1 - num1)) + 1
      break
    case 'medium':
      den1 = Math.floor(Math.random() * 8) + 4
      den2 = den1
      num1 = Math.floor(Math.random() * (den1 - 1)) + 1
      num2 = Math.floor(Math.random() * (den1 - 1)) + 1
      break
    case 'hard':
      den1 = Math.floor(Math.random() * 6) + 3
      den2 = den1 * 2
      num1 = Math.floor(Math.random() * (den1 - 1)) + 1
      num2 = Math.floor(Math.random() * (den2 - 1)) + 1
      break
  }
  
  const answer = num1 + num2
  
  return {
    question: `${num1}/${den1} + ${num2}/${den2} = ?/${den2}`,
    options: generateOptions(answer, 4),
    correctAnswer: answer,
    explanation: `${num1}/${den1} + ${num2}/${den2} = ${answer}/${den2}`
  }
}

function generateDecimalsQuestion(difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion {
  let a: number, b: number
  
  switch (difficulty) {
    case 'easy':
      a = Math.round((Math.random() * 10 + 1) * 10) / 10
      b = Math.round((Math.random() * 10 + 1) * 10) / 10
      break
    case 'medium':
      a = Math.round((Math.random() * 50 + 10) * 10) / 10
      b = Math.round((Math.random() * 50 + 10) * 10) / 10
      break
    case 'hard':
      a = Math.round((Math.random() * 100 + 20) * 100) / 100
      b = Math.round((Math.random() * 100 + 20) * 100) / 100
      break
  }
  
  const answer = Math.round((a + b) * 100) / 100
  
  return {
    question: `${a} + ${b} = ?`,
    options: generateOptions(answer, 4).map(opt => Math.round(opt * 100) / 100),
    correctAnswer: answer,
    explanation: `${a} + ${b} = ${answer}`
  }
}

function generateGeometryQuestion(difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion {
  const types = ['perimeter-rectangle', 'area-rectangle', 'perimeter-square', 'area-square', 'triangle-area']
  const type = types[Math.floor(Math.random() * types.length)]
  
  let length: number, width: number, side: number, base: number, height: number
  
  switch (difficulty) {
    case 'easy':
      length = Math.floor(Math.random() * 10) + 3
      width = Math.floor(Math.random() * 10) + 3
      side = Math.floor(Math.random() * 10) + 3
      base = Math.floor(Math.random() * 10) + 3
      height = Math.floor(Math.random() * 10) + 3
      break
    case 'medium':
      length = Math.floor(Math.random() * 20) + 10
      width = Math.floor(Math.random() * 20) + 10
      side = Math.floor(Math.random() * 20) + 10
      base = Math.floor(Math.random() * 20) + 10
      height = Math.floor(Math.random() * 20) + 10
      break
    case 'hard':
      length = Math.floor(Math.random() * 30) + 20
      width = Math.floor(Math.random() * 30) + 20
      side = Math.floor(Math.random() * 30) + 20
      base = Math.floor(Math.random() * 30) + 20
      height = Math.floor(Math.random() * 30) + 20
      break
  }
  
  if (type === 'perimeter-rectangle') {
    const answer = 2 * (length + width)
    return {
      question: `What is the perimeter of a rectangle with length ${length} cm and width ${width} cm?`,
      options: generateOptions(answer),
      correctAnswer: answer,
      explanation: `Perimeter = 2 × (length + width) = 2 × (${length} + ${width}) = ${answer} cm`
    }
  } else if (type === 'area-rectangle') {
    const answer = length * width
    return {
      question: `What is the area of a rectangle with length ${length} m and width ${width} m?`,
      options: generateOptions(answer),
      correctAnswer: answer,
      explanation: `Area = length × width = ${length} × ${width} = ${answer} m²`
    }
  } else if (type === 'perimeter-square') {
    const answer = 4 * side
    return {
      question: `A square has sides of ${side} cm each. What is its perimeter?`,
      options: generateOptions(answer),
      correctAnswer: answer,
      explanation: `Perimeter of square = 4 × side = 4 × ${side} = ${answer} cm`
    }
  } else if (type === 'area-square') {
    const answer = side * side
    return {
      question: `What is the area of a square with side length ${side} m?`,
      options: generateOptions(answer),
      correctAnswer: answer,
      explanation: `Area of square = side × side = ${side} × ${side} = ${answer} m²`
    }
  } else {
    const answer = Math.floor((base * height) / 2)
    return {
      question: `Find the area of a triangle with base ${base} cm and height ${height} cm`,
      options: generateOptions(answer),
      correctAnswer: answer,
      explanation: `Area of triangle = (base × height) ÷ 2 = (${base} × ${height}) ÷ 2 = ${answer} cm²`
    }
  }
}

function generateAlgebraQuestion(difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion {
  let x: number, constant: number, coefficient: number
  
  switch (difficulty) {
    case 'easy':
      x = Math.floor(Math.random() * 10) + 1
      constant = Math.floor(Math.random() * 20) + 5
      coefficient = 1
      break
    case 'medium':
      x = Math.floor(Math.random() * 20) + 5
      constant = Math.floor(Math.random() * 50) + 10
      coefficient = Math.floor(Math.random() * 3) + 2
      break
    case 'hard':
      x = Math.floor(Math.random() * 30) + 10
      constant = Math.floor(Math.random() * 100) + 20
      coefficient = Math.floor(Math.random() * 5) + 2
      break
  }
  
  // Random algebra question types
  const types = ['addition', 'subtraction', 'multiplication', 'mixed']
  const type = types[Math.floor(Math.random() * types.length)]
  
  if (type === 'addition') {
    const result = x + constant
    return {
      question: `If x + ${constant} = ${result}, what is x?`,
      options: generateOptions(x),
      correctAnswer: x,
      explanation: `x + ${constant} = ${result}, so x = ${result} - ${constant} = ${x}`
    }
  } else if (type === 'subtraction') {
    const result = x - constant
    return {
      question: `If x - ${constant} = ${result}, what is x?`,
      options: generateOptions(x),
      correctAnswer: x,
      explanation: `x - ${constant} = ${result}, so x = ${result} + ${constant} = ${x}`
    }
  } else if (type === 'multiplication') {
    const result = coefficient * x
    return {
      question: `If ${coefficient}x = ${result}, what is x?`,
      options: generateOptions(x),
      correctAnswer: x,
      explanation: `${coefficient}x = ${result}, so x = ${result} ÷ ${coefficient} = ${x}`
    }
  } else {
    const result = coefficient * x + constant
    return {
      question: `If ${coefficient}x + ${constant} = ${result}, what is x?`,
      options: generateOptions(x),
      correctAnswer: x,
      explanation: `${coefficient}x + ${constant} = ${result}, so ${coefficient}x = ${result - constant}, therefore x = ${x}`
    }
  }
}

export function generateQuestions(
  topic: Topic,
  difficulty: 'easy' | 'medium' | 'hard',
  count: number
): QuizQuestion[] {
  const questions: QuizQuestion[] = []
  
  const generators: Record<Topic, () => QuizQuestion> = {
    addition: () => generateAdditionQuestion(difficulty),
    subtraction: () => generateSubtractionQuestion(difficulty),
    multiplication: () => generateMultiplicationQuestion(difficulty),
    division: () => generateDivisionQuestion(difficulty),
    longDivision: () => generateLongDivisionQuestion(difficulty),
    fractions: () => generateFractionsQuestion(difficulty),
    decimals: () => generateDecimalsQuestion(difficulty),
    geometry: () => generateGeometryQuestion(difficulty),
    algebra: () => generateAlgebraQuestion(difficulty)
  }
  
  const generator = generators[topic]
  
  for (let i = 0; i < count; i++) {
    questions.push(generator())
  }
  
  return questions
}
