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
}


quizStartButton.addEventListener("click", function () {
    setTime();
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

   
})

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