// Variables for Questions, correct vs incorrect, timer, and start button
var onScreenTimer
var startButton = document.querySelector(".start-button")
var correct = document.querySelector(".correct")
var incorrect = document.querySelector(".incorrect")

var allQuestion = {
    'What symbol is used to comment in javascript?': ['?', '/', '!', 0],
    'What is it called when you pre-write your code?': ['Psuedo Coding', 'Pre-Coding', 'Spider-Webbing', 1],
    'What does this === mean?': ['Equal', 'Strictly Equal', 'Same As', 2],
//     question: 'What symbol is used to comment in javascript?',
//     choices: {
//         incorrect: ['?', '!'],
//         correct: '/',
//     }
// }, {
//     question: 'What is it called when you pre-write your code?',
//     choices: {
//         incorrect: ['Pre-Coding', 'Spider-Webbing'],
//         correct: 'Psuedo Coding',
//     }
// }, {
//     question: 'What does this === mean?',
//     choices: ['Similar', 'Not Equal', 'Strictly Equal'],
//     }
}

var timerCount = document.querySelector("timer-count")
var currentQuestion = 0
var answer1Btn = document.querySelector("#answer1")
var answer2Btn = document.querySelector("#answer2")
var answer3Btn = document.querySelector("#answer3")


// Start Game Function
function startGame() {
    timerCount = 40;
    startTimer()
}


// Timer function for game
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        onScreenTimer.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isWin && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                winGame();
            }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            loseGame();
        }
    }, 4000);
}



// Function to ask questions
function askQuestion() {
    var question = object.keys(allQuestion)[currentQuestion];
    var answers = object.keys(allQuestion)[currentQuestion];
    var answer1Text = answers[0]
    var answer2Text = answers[1]
    var answer3Text = answers[2]

    if (currentQuestion==0) {
        window.setTimeout(timeExpires, 40000);
    }
    var questionInfo= document.getElementsByClassName("questionInfo");
    questionInfo.innerHTML = question;
    answer1Btn.innerHTML = answer1Text;
    answer2Btn.innerHTML = answer2Text;
    answer3Btn.innerHTML = answer3Text;
}

function answerQuestions() {
    currentQuestion++;
    loadQuestion()
}

// Init function to store wins



//local stoagre to store quiz scores