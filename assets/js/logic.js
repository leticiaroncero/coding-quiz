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
    var initialScreen = document.querySelector("#start-screen");

    var currentQuestion = questions[currentQuestionIndex];

    var questionTitle = document.querySelector("#question-title");
    questionTitle.textContent = currentQuestion.title;

    var optionsList = document.createElement("ul");
    questionOptions.appendChild(optionsList);

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var listItem = document.createElement("li")
        var optionsListItem = currentQuestion.choices[i];
        listItem.textContent = optionsListItem;
        optionsList.appendChild(listItem);
    }

    

    questionOptions.textContent = currentQuestion.choices

    initialScreen.setAttribute("class", "hide");
    startTimer()
}
//event listener

var startButton = document.querySelector("#start");

startButton.addEventListener("click", startGame)
