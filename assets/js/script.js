// when i click the start button - then a timer starts and I am presented with a question
const timer = document.getElementById('timer');
timer.innerHTML = 0;
let counter = 75;

const startButton = document.getElementById('start-btn');
const startScreenEl = document.getElementById('start-screen');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerBtns = document.getElementById('answer-buttons')

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            {text:"Strings", correct: false},
            {text:"Yarns", correct: true},
            {text:"Numeric", correct: false},
            {text:"Boolean", correct: false}
        ]
    },
    {
        question: "The condition in an if /else statement is enclosed with ____.",
        answers: [
            {text:"quotes", correct: false},
            {text:"parenthesis", correct: true},
            {text:"curly brackets", correct: false},
            {text:"square brackets", correct: false}
        ]
    },
    {
        question: "The proper way to add a comment to JavaScript is with ____.",
        answers: [
            {text: "//", correct: true},
            {text: "/*", correct: false},
            {text: "<!--", correct: false},
            {text: "devNote:", correct: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: [
            {text: "numbers and strings", correct: false},
            {text: "other arrays", correct: false},
            {text: "booleans", correct: false},
            {text: "all of the above", correct: true}
        ]
    },
    {
        question: "String values must be enclosed in ___ when being assigned to variables.",
        answers: [
            {text: "quotes", correct: true},
            {text: "parenthesis", correct: false},
            {text: "||", correct: false},
            {text: "curly brackets", correct: false}
        ]
    },
    {
        question: "The <script> element goes in which element on the HTML page?",
        answers: [
            {text: "<head>", correct: false},
            {text: "<body>", correct: true},
            {text: "<p>", correct: false},
            {text: "<HTML>", correct: false}
        ]
    },
]

let shuffledQuestions, currentQuestion

// function addHide () {

// }

function startQuiz() {
    setInterval(countdown, 1000);
    startScreenEl.classList.add('hide-me')
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestion = 0
    questionContainerEl.classList.remove('hide-me')
    setNextQuestion();
}

function countdown () {
    timer.innerHTML = counter
    counter--;;
}

function setNextQuestion () {
    clearAnswers()
    showQuestion(shuffledQuestions[currentQuestion]);
    
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            console.log("yay");
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtns.appendChild(button)
    })
}

function clearAnswers() {
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    }
}

// when I answer a question then I am presented with another question
// when I answer a question incorrectly then time is subtracted from the clock

function selectAnswer() {

}
// call a function that checks answer for correct or incorrect

//when all questions are answered or the timer reaches 0 then the game is over
function endQuiz (){

}
// call a function that removes hide-me class for end screen
function removeHide (){

}

//when the game is over then I can save my initials and score
// when user submits initials call function that collects this information and stores it and takes us to the highscore page.


function saveScore () {

}

// call function that gets this data from local storage and displays it on the final page.

function getScore () {

}

function displayScores () {

}

startButton.addEventListener('click', startQuiz)