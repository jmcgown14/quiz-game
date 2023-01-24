// Variables for Questions, correct vs incorrect, timer, and start button
var onScreenTimer
var startButton = document.querySelector(".start-button")
var allQuestion = [{
    question: 'What symbol is used to comment in javascript?',
    choices: {
        incorrect: ['?', '!'],
        correct: '/',
    }
}, {
    question: 'What is it called when you pre-write your code?',
    choices: {
        incorrect: ['Pre-Coding', 'Spider-Webbing'],
        correct: 'Psuedo Coding',
    }
}, {
    question: 'What does this === mean?',
    choices: ['Similar', 'Not Equal', 'Strictly Equal'],
    }
]
    // 'What symbol is used to comment in javascript?': ['?', '/', '!', 0],
    // 'What is it called when you pre-write your code?': ['Psuedo Coding', 'Pre-Coding', 'Spider-Webbing', 1],
    // 'What does this === mean?': ['Equal', 'Strictly Equal', 'Same As', 2],

var timer;
var timerCount;


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



// Init function to store wins



//local stoagre to store quiz scores