const questions = [
  {
    category: 'Ratios & Proportions',
    question: 'A car travels at a constant speed of 60 miles per hour. How far will the car travel in 20 minutes?',
    options: ['20 miles', '15 miles', '10 miles', '25 miles'],
    answer: 1,
  },
  {
    category: 'Ratios & Proportions',
    question: 'At a zoo, there are 3 lions for every 7 tigers. Which of the following is an equivalent ratio?',
    options: ['21 lions and 49 tigers', '25 lions and 63 tigers', '32 lions and 70 tigers', '33 lions and 78 tigers'],
    answer: 0,
  },
  {
    category: 'Percents',
    question: 'Michael earns $600 per week and spends 20% on groceries. How much does he spend on groceries each week?',
    options: ['$80', '$90', '$100', '$120'],
    answer: 2,
  },
  {
    category: 'Percents',
    question: 'Lexi has completed 18 out of 24 chapters. Jack has finished the same percentage of his 40-chapter book. How many chapters has Jack finished?',
    options: ['24', '30', '28', '32'],
    answer: 1,
  },
  {
    category: 'LCM & GCF',
    question: 'Julia runs every 8 days and Marta runs every 12 days. If they both run today, how many days until they run together again?',
    options: ['16 days', '24 days', '32 days', '40 days'],
    answer: 1,
  },
  {
    category: 'LCM & GCF',
    question: 'A company has 42 pens and 56 notebooks. What is the greatest number of identical gift bags they can make?',
    options: ['6', '7', '14', '28'],
    answer: 2,
  },
  {
    category: 'Fraction & Decimal Operations',
    question: 'A factory produces 15,432 bottles in 5 hours. If bottles are packed 96 per crate, how many full crates are produced?',
    options: ['160', '150', '175', '140'],
    answer: 0,
  },
  {
    category: 'Fraction & Decimal Operations',
    question: 'Jane can work 6.5 hours per week. The project takes 30.75 hours. To the nearest tenth, how many weeks will it take to finish?',
    options: ['4.5', '4.7', '4.8', '4.9'],
    answer: 2,
  },
  {
    category: 'Expressions',
    question: 'Which expression represents the amount Ivy gains if she sells r roses and d daisies, earning $2 extra per rose and $1 per daisy?',
    options: ['2r + 1.50d', '2r + d', '1.50r + 0.50d', '1.50r - 0.50d'],
    answer: 1,
  },
  {
    category: 'Expressions',
    question: 'What is the simplified form of 4a + 6 + 3a - 2?',
    options: ['7a + 8', '4a + 4', '7a + 4', '7a + 6'],
    answer: 2,
  },
  {
    category: 'Equations & Inequalities',
    question: 'Sophia earns $12 per hour and spends $40 monthly on transportation. Which equation represents her profit y for x hours?',
    options: ['y = 12x - 40', 'y = 40x - 12', 'y = 12x + 40', 'y = 40 - 12x'],
    answer: 0,
  },
  {
    category: 'Equations & Inequalities',
    question: 'Which inequality represents “up to 25 members can join the club”?',
    options: ['x ≥ 25', 'x ≤ 25', 'x > 25', 'x < 25'],
    answer: 1,
  },
  {
    category: 'Coordinate Plane',
    question: 'A park is at (-3,-1) and a store is at (2,-1). How many units does Sarah walk in 5 days if she goes there and back every day?',
    options: ['30 units', '40 units', '50 units', '60 units'],
    answer: 1,
  },
  {
    category: 'Coordinate Plane',
    question: 'Which point is a reflection of (4,6) across the y-axis?',
    options: ['(4,6)', '(4,-6)', '(-4,-6)', '(-4,6)'],
    answer: 3,
  },
  {
    category: 'Area & Volume',
    question: 'A rectangular prism has a volume of 30 in³, height 5 in, and length 3.75 in. What is the width?',
    options: ['2', '2.5', '5.5', '6'],
    answer: 0,
  },
  {
    category: 'Statistics',
    question: 'If 40% of 25 games are wins, how many games did the team win?',
    options: ['8', '9', '10', '12'],
    answer: 0,
  },
  {
    category: 'Integers',
    question: 'What is the value of -9 + (-17)?',
    options: ['-26', '26', '-8', '8'],
    answer: 0,
  },
  {
    category: 'Integers',
    question: 'A submarine is 350 feet below sea level and a helicopter is 1120 feet above sea level. How much higher is the helicopter?',
    options: ['770', '1470', '1120', '350'],
    answer: 1,
  },
];

const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const nextButton = document.getElementById('next-button');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const categoryName = document.getElementById('category-name');
const answersContainer = document.getElementById('answers');
const questionCount = document.getElementById('question-count');
const scoreCount = document.getElementById('score-count');
const finalScore = document.getElementById('final-score');
const resultText = document.getElementById('result-text');

let currentQuestion = 0;
let score = 0;
let selected = false;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  selected = false;
  startScreen.classList.remove('active');
  resultScreen.classList.remove('active');
  quizScreen.classList.add('active');
  nextButton.disabled = true;
  updateStatus();
  showQuestion();
}

function updateStatus() {
  questionCount.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  scoreCount.textContent = `Score: ${score}`;
}

function showQuestion() {
  const current = questions[currentQuestion];
  categoryName.textContent = current.category;
  questionText.textContent = current.question;
  answersContainer.innerHTML = '';
  selected = false;
  nextButton.disabled = true;

  current.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'answer-btn';
    button.textContent = option;
    button.type = 'button';
    button.addEventListener('click', () => selectAnswer(button, index));
    answersContainer.appendChild(button);
  });
}

function selectAnswer(button, index) {
  if (selected) return;
  selected = true;
  const current = questions[currentQuestion];
  const answerButtons = Array.from(document.querySelectorAll('.answer-btn'));

  answerButtons.forEach((btn, btnIndex) => {
    btn.disabled = true;
    if (btnIndex === current.answer) {
      btn.classList.add('correct');
    }
    if (btnIndex === index && btnIndex !== current.answer) {
      btn.classList.add('wrong');
    }
  });

  if (index === current.answer) {
    score += 1;
  }

  updateStatus();
  nextButton.disabled = false;
}

function nextQuestion() {
  currentQuestion += 1;
  if (currentQuestion >= questions.length) {
    showResults();
    return;
  }
  updateStatus();
  showQuestion();
}

function showResults() {
  quizScreen.classList.remove('active');
  resultScreen.classList.add('active');
  finalScore.textContent = `You scored ${score} out of ${questions.length}.`;
  const percent = Math.round((score / questions.length) * 100);
  resultText.textContent = percent >= 80
    ? 'Great work! You know your 6th grade math review.'
    : 'Nice effort! Try again to improve your score.';
}

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
