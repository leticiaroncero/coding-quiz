//counter logic
var timerInterval;
var currentQuestionIndex = 0;

var questionOptions = document.querySelector("#choices");

var startTimer = function () {

    var timer = document.querySelector("#time")
    var startTime = 75;

    var countdown = function () {
        startTime--
        timer.textContent = startTime;
        if (startTime <= 0) {
            endGame()
        }
    }

    timerInterval = setInterval(countdown, 1000)
    timer.textContent = startTime;
}

var endGame = function () {
    clearInterval(timerInterval)
    alert("End Game!")
}

var startGame = function () {
    startTimer();
    nextQuestion();
}

function nextQuestion() {
    var initialScreen = document.querySelector("#start-screen");
    initialScreen.setAttribute("class", "hide");

    var currentQuestion = questions[currentQuestionIndex];

    var questionTitle = document.querySelector("#question-title");
    questionTitle.textContent = currentQuestion.title;

    questionOptions.textContent = "";

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var listItem = document.createElement("button")
        var optionsListItem = currentQuestion.choices[i];
        listItem.textContent = (i + 1) + ". " + optionsListItem;
        listItem.setAttribute("data-answer", optionsListItem);
        questionOptions.appendChild(listItem);

        listItem.addEventListener("click", checkAnswer);
    }
}
//event listener

var checkAnswer = function (event) {
    var answerEl = document.querySelector("#feedback")

    if (event.target.getAttribute("data-answer") === questions[currentQuestionIndex].answer) {
        answerEl.textContent = "Correct!"
    } else {
        answerEl.textContent = "Incorrect!"
    }

    currentQuestionIndex++;
    setTimeout(function () {
         answerEl.setAttribute("class", "feedback hide") 
        }, 1000)

    nextQuestion();
}

var startButton = document.querySelector("#start");

startButton.addEventListener("click", startGame)
