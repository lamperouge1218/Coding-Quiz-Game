// Global Variables
var startPageClass = document.querySelector(".startpage");
var quizStartButton = document.querySelector("#startbutton");
var timeEl = document.querySelector(".time");
var confirmText = document.querySelector(".confirmation-text");
confirmText.setAttribute("style", "text-align:center");
var leaderboardList = document.querySelector(".leaderboard-list");

// Creating mainEl variable so that data can be appended to it
// later on in this process
var mainEl = document.getElementById("main");

// Variables wherein my questions and their potential answers live
// There is also a key for the correctAnswer
var question1 = {
    question: "Commonly used data types DO NOT include:",
    possibleAnswers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: "alerts"
};

var question2 = {
    question: "The condition in an if/else statement is enclosed within _____.",
    possibleAnswers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    correctAnswer: "parentheses"
};

var question3 = {
    question: "Arrays in JavaScript can be used to store _____.",
    possibleAnswers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswer: "all of the above"
};

var question4 = {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    possibleAnswers: ["1. quotes", "2. curly brackets", "3. commas", "4. parentheses"],
    correctAnswer: "quotes"
};

var question5 = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    possibleAnswers: ["1. JavaScript", "2. console.log", "3. for loops", "4. terminal/bash"],
    correctAnswer: "console.log"
};

// Amount of time that starts when quizStartButton is initiated
var timeLeft = 70;

// A variable that grows on button click, and once it reaches max number,
// stops the timer function
var questionCount = 0;

// Variables that contain the array position of the correct answer for use below
// Potentially to tie to the correct button in functions below which would allow for determination
// of correct and incorrect answers
var corAns1 = question1.possibleAnswers[2];
var corAns2 = question2.possibleAnswers[2];
var corAns3 = question3.possibleAnswers[3];
var corAns4 = question4.possibleAnswers[0];
var corAns5 = question5.possibleAnswers[1];

// Function to start timer, starting at 70
function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft;
        if(timeLeft === 0) {
            clearInterval(timerInterval);
            initialPage();
        }
        else if(questionCount === 6) {
            clearInterval(timerInterval);
        };
    
    }, 1000);
};

// 5 Functions for creating the question content dynamically on the page upon button click
function createQuestion1() {
    mainEl.textContent = " ";
    
    var question1Text = document.createElement("h2");
    var oneChoice1 = document.createElement("button");
    var oneChoice2 = document.createElement("button");
    var oneChoice3 = document.createElement("button");
    var oneChoice4 = document.createElement("button");

    question1Text.textContent = (question1.question);
    oneChoice1.textContent = (question1.possibleAnswers[0]);
    oneChoice2.textContent = (question1.possibleAnswers[1]);
    oneChoice3.textContent = (question1.possibleAnswers[2]);
    oneChoice4.textContent = (question1.possibleAnswers[3]);

    oneChoice1.currentQuestion = 1;
    oneChoice2.currentQuestion = 1;
    oneChoice3.currentQuestion = 1;
    oneChoice4.currentQuestion = 1;


    mainEl.appendChild(question1Text);
    question1Text.appendChild(oneChoice1);
    question1Text.appendChild(oneChoice2);
    question1Text.appendChild(oneChoice3);
    question1Text.appendChild(oneChoice4);

    question1Text.setAttribute("style", "display: flex; flex-direction: column; align-items: center;");
    oneChoice1.setAttribute("style", "margin-top: 10px; text-align: left;");
    oneChoice2.setAttribute("style", "margin-top: 10px; text-align: left;");
    oneChoice3.setAttribute("style", "margin-top: 10px; text-align: left;");
    oneChoice4.setAttribute("style", "margin-top: 10px; text-align: left;");

    oneChoice1.addEventListener("click", nextQuestion);
    oneChoice2.addEventListener("click", nextQuestion);
    oneChoice3.addEventListener("click", nextQuestion);
    oneChoice4.addEventListener("click", nextQuestion);  
};

function createQuestion2() {
    mainEl.textContent = " ";
    
    var question2Text = document.createElement("h2");
    var twoChoice1 = document.createElement("button");
    var twoChoice2 = document.createElement("button");
    var twoChoice3 = document.createElement("button");
    var twoChoice4 = document.createElement("button");

    question2Text.textContent = (question2.question);
    twoChoice1.textContent = (question2.possibleAnswers[0]);
    twoChoice2.textContent = (question2.possibleAnswers[1]);
    twoChoice3.textContent = (question2.possibleAnswers[2]);
    twoChoice4.textContent = (question2.possibleAnswers[3]);

    twoChoice1.currentQuestion = 2;
    twoChoice2.currentQuestion = 2;
    twoChoice3.currentQuestion = 2;
    twoChoice4.currentQuestion = 2;

    mainEl.appendChild(question2Text);
    question2Text.appendChild(twoChoice1);
    question2Text.appendChild(twoChoice2);
    question2Text.appendChild(twoChoice3);
    question2Text.appendChild(twoChoice4);

    question2Text.setAttribute("style", "display: flex; flex-direction: column; align-items: center;");
    twoChoice1.setAttribute("style", "margin-top: 10px; text-align: left;");
    twoChoice2.setAttribute("style", "margin-top: 10px; text-align: left;");
    twoChoice3.setAttribute("style", "margin-top: 10px; text-align: left;");
    twoChoice4.setAttribute("style", "margin-top: 10px; text-align: left;");

    twoChoice1.addEventListener("click", nextQuestion);
    twoChoice2.addEventListener("click", nextQuestion);
    twoChoice3.addEventListener("click", nextQuestion);
    twoChoice4.addEventListener("click", nextQuestion);
};

function createQuestion3() {
    mainEl.textContent = " ";

    var question3Text = document.createElement("h2");
    var threeChoice1 = document.createElement("button");
    var threeChoice2 = document.createElement("button");
    var threeChoice3 = document.createElement("button");
    var threeChoice4 = document.createElement("button");

    question3Text.textContent = (question3.question);
    threeChoice1.textContent = (question3.possibleAnswers[0]);
    threeChoice2.textContent = (question3.possibleAnswers[1]);
    threeChoice3.textContent = (question3.possibleAnswers[2]);
    threeChoice4.textContent = (question3.possibleAnswers[3]);

    threeChoice1.currentQuestion = 3;
    threeChoice2.currentQuestion = 3;
    threeChoice3.currentQuestion = 3;
    threeChoice4.currentQuestion = 3;

    mainEl.appendChild(question3Text);
    question3Text.appendChild(threeChoice1);
    question3Text.appendChild(threeChoice2);
    question3Text.appendChild(threeChoice3);
    question3Text.appendChild(threeChoice4);

    question3Text.setAttribute("style", "display: flex; flex-direction: column; align-items: center;");
    threeChoice1.setAttribute("style", "margin-top: 10px; text-align: left;");
    threeChoice2.setAttribute("style", "margin-top: 10px; text-align: left;");
    threeChoice3.setAttribute("style", "margin-top: 10px; text-align: left;");
    threeChoice4.setAttribute("style", "margin-top: 10px; text-align: left;");

    threeChoice1.addEventListener("click", nextQuestion);
    threeChoice2.addEventListener("click", nextQuestion);
    threeChoice3.addEventListener("click", nextQuestion);
    threeChoice4.addEventListener("click", nextQuestion);
};

function createQuestion4() {
    mainEl.textContent = " ";
    
    var question4Text = document.createElement("h2");
    var fourChoice1 = document.createElement("button");
    var fourChoice2 = document.createElement("button");
    var fourChoice3 = document.createElement("button");
    var fourChoice4 = document.createElement("button");

    question4Text.textContent = (question4.question);
    fourChoice1.textContent = (question4.possibleAnswers[0]);
    fourChoice2.textContent = (question4.possibleAnswers[1]);
    fourChoice3.textContent = (question4.possibleAnswers[2]);
    fourChoice4.textContent = (question4.possibleAnswers[3]);

    fourChoice1.currentQuestion = 4;
    fourChoice2.currentQuestion = 4;
    fourChoice3.currentQuestion = 4;
    fourChoice4.currentQuestion = 4;

    mainEl.appendChild(question4Text);
    question4Text.appendChild(fourChoice1);
    question4Text.appendChild(fourChoice2);
    question4Text.appendChild(fourChoice3);
    question4Text.appendChild(fourChoice4);

    question4Text.setAttribute("style", "display: flex; flex-direction: column; align-items: center;");
    fourChoice1.setAttribute("style", "margin-top: 10px; text-align: left;");
    fourChoice2.setAttribute("style", "margin-top: 10px; text-align: left;");
    fourChoice3.setAttribute("style", "margin-top: 10px; text-align: left;");
    fourChoice4.setAttribute("style", "margin-top: 10px; text-align: left;");

    fourChoice1.addEventListener("click", nextQuestion);
    fourChoice2.addEventListener("click", nextQuestion);
    fourChoice3.addEventListener("click", nextQuestion);
    fourChoice4.addEventListener("click", nextQuestion);
};

function createQuestion5() {
    mainEl.textContent = " ";
    
    var question5Text = document.createElement("h2");
    var fiveChoice1 = document.createElement("button");
    var fiveChoice2 = document.createElement("button");
    var fiveChoice3 = document.createElement("button");
    var fiveChoice4 = document.createElement("button");

    question5Text.textContent = (question5.question);
    fiveChoice1.textContent = (question5.possibleAnswers[0]);
    fiveChoice2.textContent = (question5.possibleAnswers[1]);
    fiveChoice3.textContent = (question5.possibleAnswers[2]);
    fiveChoice4.textContent = (question5.possibleAnswers[3]);

    fiveChoice1.currentQuestion = 5;
    fiveChoice2.currentQuestion = 5;
    fiveChoice3.currentQuestion = 5;
    fiveChoice4.currentQuestion = 5;

    mainEl.appendChild(question5Text);
    question5Text.appendChild(fiveChoice1);
    question5Text.appendChild(fiveChoice2);
    question5Text.appendChild(fiveChoice3);
    question5Text.appendChild(fiveChoice4);

    question5Text.setAttribute("style", "display: flex; flex-direction: column; align-items: center;");
    fiveChoice1.setAttribute("style", "margin-top: 10px; text-align: left;");
    fiveChoice2.setAttribute("style", "margin-top: 10px; text-align: left;");
    fiveChoice3.setAttribute("style", "margin-top: 10px; text-align: left;");
    fiveChoice4.setAttribute("style", "margin-top: 10px; text-align: left;");

    fiveChoice1.addEventListener("click", nextQuestion);
    fiveChoice2.addEventListener("click", nextQuestion);
    fiveChoice3.addEventListener("click", nextQuestion);
    fiveChoice4.addEventListener("click", nextQuestion);
};

// Function that kicks off the quiz with createQuestion and starts timer with setTime
// upon button click
quizStartButton.addEventListener("click", function () {
    setTime();
    createQuestion1();    
});

// Function that has questions switch to the next, sequentially, using code written in 
// previous functions to determine which question is currently being displayed
function nextQuestion (event) {
    if (event.currentTarget.currentQuestion === 1) {
        createQuestion2();
        questionCount++;
        corAnsButt = event.target;
        if (corAnsButt.textContent === corAns1) {
            console.log(corAnsButt);
            confirmText.textContent = "Correct!";
            console.log(confirmText);
        }
        else {
            timeLeft -= 10;
            confirmText.textContent = "Wrong!";
            
        };
    }
    else if (event.currentTarget.currentQuestion === 2) {
        createQuestion3();
        questionCount++;
        corAnsButt = event.target;
        if (corAnsButt.textContent === corAns2) {
            console.log(corAnsButt);
            confirmText.textContent = "Correct!";
        }
        else {
            timeLeft -= 10;
            confirmText.textContent = "Wrong!";
            
        };
    }
    else if (event.currentTarget.currentQuestion === 3) {
        createQuestion4();
        questionCount++;
        corAnsButt = event.target;
        if (corAnsButt.textContent === corAns3) {
            console.log(corAnsButt);
            confirmText.textContent = "Correct!";
        }
        else {
            timeLeft -= 10;
            confirmText.textContent = "Wrong!";
            
        };
    }
    else if (event.currentTarget.currentQuestion === 4) {
        createQuestion5();
        questionCount++;
        corAnsButt = event.target;
        if (corAnsButt.textContent === corAns4) {
            console.log(corAnsButt);
            confirmText.textContent = "Correct!";
        }
        else {
            timeLeft -= 10;
            confirmText.textContent = "Wrong!";
            
        };
    }
    else if (event.currentTarget.currentQuestion === 5) {
        questionCount++;
        corAnsButt = event.target;
        if (corAnsButt.textContent === corAns5) {
            console.log(corAnsButt);
            confirmText.textContent = "Correct!";
            initialPage();
        }
        else {
            timeLeft -= 10;
            initialPage();
        }
    }      
};

var doneHeader = document.createElement("h2");
var enterInitial = document.createElement("p");
var initialEnter = document.createElement("form");
var submitButton = document.createElement("button");
var submitBox = document.createElement("label");
var inputInit = document.createElement("input");

function initialPage() {
    mainEl.textContent = "";
    questionCount = 6;
    
    doneHeader.textContent = "All Done!";
    enterInitial.textContent = "Your final score is " + (timeLeft-1);
    submitButton.textContent = "Submit";
    initialEnter.textContent = "Enter your initials: ";    

    mainEl.appendChild(doneHeader);
    doneHeader.appendChild(enterInitial);
    mainEl.appendChild(initialEnter);
    initialEnter.appendChild(submitBox);
    initialEnter.appendChild(inputInit);
    initialEnter.appendChild(submitButton);

    submitButton.setAttribute("style", "margin: 20px;");
    inputInit.setAttribute("type", "text;");
    inputInit.setAttribute("name", "initials;");
    inputInit.setAttribute("id", "initials;");
    inputInit.setAttribute("placeholder", "Enter Initials");
};


var leaderboardArray = [];

var thanksForPlaying = document.createElement("h2");
thanksForPlaying.textContent = "Thanks for playing!";



// Stuff for storing the final initials and scores into an array for use in localStorage

submitButton.addEventListener("click", function(event){
    event.preventDefault();

    mainEl.textContent = "";
    confirmText.textContent = "";
    mainEl.appendChild(thanksForPlaying);
    leaderboardList.textContent = "Leaderboard: ";

    var initialsScore = {
        initials: inputInit.value,
        score: timeLeft
    };

    leaderboardArray.push(initialsScore);//function fails due to .push not being a function???
    localStorage.setItem("leaderboardMaterial", JSON.stringify(leaderboardArray));

    localStorageScores = JSON.parse(localStorage.getItem("leaderboardMaterial"));
    console.log(localStorageScores);

    // For loop needed to apply stuff to the leaderboard page
    for (var i = 0; i < localStorageScores.length; i++) {
        var score = localStorageScores[i];
        console.log(score);
        var li = document.createElement("li");
        li.textContent = score.initials + ": " + score.score;
        leaderboardList.appendChild(li);
    };

});

