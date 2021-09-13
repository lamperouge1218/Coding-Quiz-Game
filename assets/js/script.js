// Add classes to index that will allow the text below the header to be 
// removed upon clicking the Start Quiz button

// Class "startpage" added to h1, p, and button element of index.html
// These can be querySelected as such

// Adding all in startpage class to startPageClass variable
// to wipe all text from these on button press
var startPageClass = document.querySelector(".startpage");
var quizStartButton = document.querySelector("#startbutton");
var timeEl = document.querySelector(".time");

// Creating mainEl variable so that data can be appended to it
// later on in this process
var mainEl = document.getElementById("main");

// Variables wherein my questions and their potential answers live
var question1 = {
    question: "Commonly used data types DO NOT include:",
    possibleAnswers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: "alerts"
}

var question2 = {
    question: "The condition in an if/else statement is enclosed within _____.",
    possibleAnswers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    correctAnswer: "parentheses"
}

var question3 = {
    question: "Arrays in JavaScript can be used to store _____.",
    possibleAnswers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswer: "all of the above"
}

var question4 = {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    possibleAnswers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    correctAnswer: "quotes"
}

var question5 = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    possibleAnswers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    correctAnswer: "console.log"
}

var timeLeft = 70;

function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft;
        if(timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
};


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

    question1Text.setAttribute("style", "display: flex; flex-direction: column;");
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

    question2Text.setAttribute("style", "display: flex; flex-direction: column;");
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

    question3Text.setAttribute("style", "display: flex; flex-direction: column;");
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

    question4Text.setAttribute("style", "display: flex; flex-direction: column;");
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


    mainEl.appendChild(question5Text);
    question5Text.appendChild(fiveChoice1);
    question5Text.appendChild(fiveChoice2);
    question5Text.appendChild(fiveChoice3);
    question5Text.appendChild(fiveChoice4);

    question5Text.setAttribute("style", "display: flex; flex-direction: column;");
    fiveChoice1.setAttribute("style", "margin-top: 10px; text-align: left;");
    fiveChoice2.setAttribute("style", "margin-top: 10px; text-align: left;");
    fiveChoice3.setAttribute("style", "margin-top: 10px; text-align: left;");
    fiveChoice4.setAttribute("style", "margin-top: 10px; text-align: left;");

    fiveChoice1.addEventListener("click", nextQuestion);
};



quizStartButton.addEventListener("click", function () {
    setTime();
    createQuestion1();
    
})

function nextQuestion (event) {
    if (event.currentTarget.currentQuestion === 1) {
        createQuestion2();
    }
    else if (event.currentTarget.currentQuestion === 2) {
        createQuestion3();
    }
    else if (event.currentTarget.currentQuestion === 3) {
        createQuestion4();
    }
    else if (event.currentTarget.currentQuestion === 4) {
        createQuestion5();
    }
    else {
       mainEl.textContent = "";
        // got to initial entrance and submission form
    }
}


// Upon clicking a button, I want to go to the next question
// If that button is the wrong answer, remove 10 seconds from the timer and go to next
// If that button is the correct answer, go to the next question 






// In JS, will need to create, add content, style properly, and append
// the first question into the <main> element in index

// Possible function that is called to run when a question is answered???

// Using objects and key/type stuff to store questions as single variables???



// for (let i = 0; i < question1.possibleAnswers.length; i++){

// }

// an array of question objects
// var indexOfCurrentQ = 0;
// question[indexOfCurrentQ].question

// on click, move to next question - how do I do this???