// Add classes to index that will allow the text below the header to be 
// removed upon clicking the Start Quiz button

// Class "startpage" added to h1, p, and button element of index.html
// These can be querySelected as such

// Adding all in startpage class to startPageClass variable
// to wipe all text from these on button press
var startPageClass = document.querySelector(".startpage");
var quizStartButton = document.querySelector("#startbutton");

// Creating mainEl variable so that data can be appended to it
// later on in this process
var mainEl = document.getElementById("main");

// Variables wherein my questions and their potential answers live
var question1 = {
    question: "Commonly used data types DO NOT include:",
    possibleAnswers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
}

var question2 = {
    question: "The condition in an if/else statement is enclosed within _____.",
    possibleAnswers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "parentheses",
}

var question3 = {
    question: "Arrays in JavaScript can be used to store _____.",
    possibleAnswers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above",
}

var question4 = {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    possibleAnswers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes",
}

var question5 = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    possibleAnswers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log",
}


console.log(mainEl);

// Add an event listener that will remove current text on the screen and
// add new text upon click

quizStartButton.addEventListener("click", function () {
    mainEl.textContent = " ";

    var question1 = document.createElement("h2");
    var oneChoice1 = document.createElement("button");
    var oneChoice2 = document.createElement("button");
    var oneChoice3 = document.createElement("button");
    var oneChoice4 = document.createElement("button");

    oneChoice1.textContent = ("1. strings");
    oneChoice2.textContent = ("2. booleans");
    oneChoice3.textContent = ("3. alerts");
    oneChoice4.textContent = ("4. numbers");

    question1.textContent = ("Commonly used data types DO NOT include:");

    question1.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-around;");
    oneChoice1.setAttribute("style", "background-color: purple; border-radius: 5px; font-size: 15px; color: white; font-weight: bold; text-align: left;");
    oneChoice2.setAttribute("style", "background-color: purple; border-radius: 5px; font-size: 15px; color: white; font-weight: bold; text-align: left;");
    oneChoice3.setAttribute("style", "background-color: purple; border-radius: 5px; font-size: 15px; color: white; font-weight: bold; text-align: left;");
    oneChoice4.setAttribute("style", "background-color: purple; border-radius: 5px; font-size: 15px; color: white; font-weight: bold; text-align: left;");

    mainEl.appendChild(question1);
    question1.appendChild(oneChoice1);
    question1.appendChild(oneChoice2);
    question1.appendChild(oneChoice3);
    question1.appendChild(oneChoice4);
})

// In JS, will need to create, add content, style properly, and append
// the first question into the <main> element in index

// Possible function that is called to run when a question is answered???

// Using objects and key/type stuff to store questions as single variables???



for (let i = 0; i < question1.possibleAnswers.length; i++){

}

// an array of question objects
var indexOfCurrentQ = 0;
question[indexOfCurrentQ].question

// on click, move to next question - how do I do this???