// when i click the start button - then a timer starts and I am presented with a question
var timer = 0

const startButton = document.getElementById('start-btn')
const startScreenEl = document.getElementById('start-screen')
const questionContainerEl = document.getElementById('question-container')

// start quiz function that adds 75 to the clock and calls a countdown function
// call a function that adds hide-me class to start screen
// call a function to cycle through question array with 
function addHide () {

}

function startQuiz() {
    console.log('its begun')
    startScreenEl.classList.add('hide-me')
    questionContainerEl.classList.remove('hide-me')
}

function countdown () {

}

function setNextQuestion () {

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