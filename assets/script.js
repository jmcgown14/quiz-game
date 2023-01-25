// Variables for Questions, correct vs incorrect, timer, and start button
var onScreenTimer
var startButton = document.querySelector(".start-button")
var correct = document.querySelector(".correct")
var incorrect = document.querySelector(".incorrect")
var mainContainer = document.querySelector('.main')
var cardTimer = document.querySelector('.cardTimer')
var gameContainer = document.querySelector('.hide')
var gameCard = document.querySelector('.gameCard')

var allQuestions = {
    'What symbol is used to comment in javascript?': ['?', '/', '!', '/'],
    'What is it called when you pre-write your code?': ['Psuedo Coding', 'Pre-Coding', 'Spider-Webbing', 'Psuedo Coding'],
    'What does this === mean?': ['Equal', 'Strictly Equal', 'Same As', 'Strictly Equal'],
};

var time = 45
var score = 0
var timerCount = document.querySelector(".timer-count")
var currentQuestion = 0
var answer1Btn = document.querySelector("#answer1")
var answer2Btn = document.querySelector("#answer2")
var answer3Btn = document.querySelector("#answer3")

// Timer function for game
function startTimer() {
    timerCount.textContent = time
    // Sets timer
    var timer = setInterval(function () {
        time--;
        timerCount.textContent = time;
        if (time === 0 || currentQuestion > Object.keys(allQuestions).length - 1) {
            // Tests if win condition is met
            clearInterval(timer)
            endQuiz()
        }
    }, 1000);
}

function endQuiz() {
    mainContainer.textContent = ''
    cardTimer.textContent =''
    var h1 = document.createElement('h1')
    var textNode = document.createTextNode('High Score')
    h1.style.cssText += 'text-align:center'
    h1.appendChild(textNode)

    var inputEl = document.createElement('input')
    inputEl.setAttribute('placeholder', 'Name')

    var submitBtn = document.createElement('button')
    submitBtn.textContent = "SUBMIT"

    mainContainer.append(h1, inputEl, submitBtn)

    submitBtn.addEventListener('click', function() {
        var  userData = {
            name: inputEl.value,
            finalScore: score
        }

        var storage = JSON.parse(localStorage.getItem('quizScores'))
        if(storage === null) {
            storage = []
        }

        storage.push(userData)
        localStorage.setItem('quizScores', JSON.stringify(storage))
        
        window.location.href = 'highscore.html'
    })
}

// Function to ask questions
function askQuestion() {

    if (currentQuestion > Object.keys(allQuestions).length - 1) return
    var question = Object.keys(allQuestions)[currentQuestion];
    var answers = Object.keys(allQuestions)[currentQuestion];

    var answer1Text = allQuestions[answers][0];
    var answer2Text = allQuestions[answers][1];
    var answer3Text = allQuestions[answers][2];

    var questionInfo = document.querySelector(".questionInfo");
    questionInfo.innerHTML = question;
    answer1Btn.innerHTML = answer1Text;
    answer2Btn.innerHTML = answer2Text;
    answer3Btn.innerHTML = answer3Text;
}

function answerQuestions() {
    currentQuestion++;
    askQuestion();
}

function selectAnswer1(event) {
    var answers = Object.values(allQuestions)[currentQuestion];
    var correctAnswer = answers[3];
    var correct = false;
    if (correctAnswer === event.target.textContent) {
        correct = true;
        score += 33
    }
    alert('correct ' + correct + "score: " + score);
    answerQuestions();
}

function selectAnswer2(event) {
    var answers = Object.values(allQuestions)[currentQuestion];
    var correctAnswer = answers[3];
    var correct = false;
    if (correctAnswer === event.target.textContent) {
        correct = true;
        score += 33
    }
    alert('correct ' + correct + "score: " + score);
    answerQuestions();
}

function selectAnswer3(event) {
    var answers = Object.values(allQuestions)[currentQuestion];
    var correctAnswer = answers[3];
    var correct = false;
    if (correctAnswer === event.target.textContent) {
        correct = true;
        score += 33
    }
    alert('correct ' + correct+ "score: " + score);
    answerQuestions();
}

// function timeExpires (){
//     alert('time expires');
// }

startButton.addEventListener("click", function () {
    startTimer()
    askQuestion()
    gameContainer.style.display = "block"
    gameCard.style.display = "none"
});

answer1Btn.addEventListener("click", (event) => selectAnswer1(event));
answer2Btn.addEventListener("click", (event) => selectAnswer2(event));
answer3Btn.addEventListener("click", (event) => selectAnswer3(event));
