const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], answer: 2 },
    { question: "Which programming language is used for web development?", options: ["Python", "JavaScript", "C++", "Java"], answer: 1 },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: 1 },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: 1 },
    { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Charles Dickens", "Mark Twain", "Leo Tolstoy"], answer: 0 },
    { question: "What is the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
    { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"], answer: 1 },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Thailand", "India"], answer: 1 },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "120°C", "110°C"], answer: 1 },
    { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Gold", "Silver", "Osmium"], answer: 0 }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart');

function loadQuestion() {
    feedbackEl.textContent = '';
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        feedbackEl.textContent = 'Correct!';
        feedbackEl.style.color = 'green';
        score++;
    } else {
        feedbackEl.textContent = 'Wrong!';
        feedbackEl.style.color = 'red';
    }
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showScore();
        }
    }, 1000);
}

function showScore() {
    questionEl.textContent = 'Quiz Finished!';
    optionsEl.innerHTML = '';
    feedbackEl.textContent = '';
    scoreEl.textContent = `Your score: ${score} / ${questions.length}`;
    restartBtn.style.display = 'block';
}

restartBtn.onclick = () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreEl.textContent = '';
    restartBtn.style.display = 'none';
    loadQuestion();
};

loadQuestion();
