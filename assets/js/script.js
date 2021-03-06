// when i click the start button - then a timer starts and I am presented with a question
const timer = document.getElementById('timer');
timer.innerHTML = 0;
let counter = 75;
let score

const startButton = document.getElementById('start-btn');
const startScreenEl = document.getElementById('start-screen');
const endtScreenEl = document.getElementById('end-screen');
const finalScoreDisplayEl = document.getElementById('final-score-display');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerBtns = document.getElementById('answer-buttons');
const responseDisplayEl = document.getElementById('question-response');
const submitBtnEl = document.getElementById('submit-btn');
const restartBtnEl = document.getElementById('restart');
const highScoreListEl = document.getElementById('highscore-list')


var highScores = [];


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
    }
]

let shuffledQuestions, currentQuestion


function startQuiz() {
    score = setInterval(countdown, 1000);
    startScreenEl.classList.add('hide-me')
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestion = 0
    questionContainerEl.classList.remove('hide-me')
    setNextQuestion();
}

function countdown () {
    timer.innerHTML = counter
    counter--;
}

function setNextQuestion () {
    clearAnswers();
    if (shuffledQuestions.length < currentQuestion + 1) {
        clearInterval(score);
        endQuiz();
    } else {
        showQuestion(shuffledQuestions[currentQuestion]);
    }   
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        button.setAttribute('id', "btn");
        if (answer.correct) {
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


function selectAnswer(event) {
    var selectedButton = event.target
    var correct = selectedButton.dataset.correct
    setQuestionResponse(responseDisplayEl, correct)
}

function setQuestionResponse(responseDisplayEl, correct) {
    resetResponse(responseDisplayEl)
    if (correct) {
        responseDisplayEl.classList.remove('hide-me');
        responseDisplayEl.innerText = "Correct!";
    }
    else {
        responseDisplayEl.classList.remove('hide-me');
        counter = counter - 10;
    }
    currentQuestion++
    setNextQuestion();
    
}

function resetResponse(responseDisplayEl) {
    responseDisplayEl.classList.add('hide-me')
    responseDisplayEl.innerText = "Wrong!"
}

//when all questions are answered or the timer reaches 0 then the game is over
function endQuiz () {
    myScore = timer.innerHTML
    questionContainerEl.classList.add('hide-me'); 
    endtScreenEl.classList.remove('hide-me');
    finalScoreDisplayEl.innerText = 'Your final score is ' + myScore + "!";
}



function saveScore () {
    var userInitials = document.getElementById('initials').value;
    // var myScore = myScore

    scoreObj = {
       name: userInitials,
       score: myScore,
    }

    highScores.push(scoreObj);
    localStorage.setItem("score", JSON.stringify(highScores));
    location.href="highscores.html";
    getScore();

}

// call function that gets this data from local storage and displays it on the final page.

function getScore () {
    var savedScores = localStorage.getItem("score", highScores);
 
//     if (!highScores) {
//         return false;
//     };

//     savedScores = JSON.parse(savedScores)
//     displayScores();
}

function displayScores () {
    var scoreEl = document.createElement("li");
    scoreEl.className = "previous-score"
    scoreEl.innerText = savedScores
    highScoreListEl.appendChild(highScores)

}

submitBtnEl.addEventListener('click', saveScore)

startButton.addEventListener('click', startQuiz)

