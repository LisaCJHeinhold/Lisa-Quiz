//questions
var myQuestions = [
    {
        question: "What is Lisa's favorite color?",
        answers: [
            'aqua marine',
            'pink',
            'orange',
            'chartreuse'
        ],
        correctAnswer: 'pink'
    },
    {
        question: "What is Lisa's favorite building?",
        answers: [
            'The Leaning Tower of Pisa',
            'The Colosseum',
            'The Sagrada Familia',
            'The Empire State Building'
        ],
        correctAnswer: 'The Sagrada Familia'
    },
    {
        question: "What does Lisa always say her favorite animal is?",
        answers: [
            'dolphin',
            'kitty',
            'leopard',
            'butterfly'
        ],
        correctAnswer: 'butterfly'
    },
    {
        question: "What is Lisa's favorite thing to do?",
        answers: [
            'travel',
            'hang out at the beach',
            'hike',
            'watch movies'
        ],
        correctAnswer: 'travel'
    },
    {
        question: "What would Lisa say her favorite food is?",
        answers: [
            'burgers with pineapple',
            'Red Robin macNcheese',
            'tacos',
            'steak and potatoes'
        ],
        correctAnswer: 'Red Robin macNcheese'
    },
    {
        question: "What was Lisa's first pet named?",
        answers: [
            'Maya',
            'Goldie',
            'Sweetpea',
            'Luna'
        ],
        correctAnswer: 'Sweetpea'
    },
    {
        question: "What was Lisa's favorite stuffed animal?",
        answers: [
            'doggie the dog',
            'blue the elephant',
            'tip top the giraffe',
            'pinkie the unicorn'
        ],
        correctAnswer: 'doggie the dog'
    },
    {
        question: "What colors has Lisa painted her room?",
        answers: [
            'hot pink, light blue, green',
            'blue, light pink, grey-white',
            'light pink, hot pink, light blue',
            'grey-white, green, hot pink'
        ],
        correctAnswer: 'light pink, hot pink, light blue'
    },
    {
    question: "What was the first new country Lisa ever went to?",
    answers: [
        'England',
        'Mexico',
        'Sweden',
        'Canada'
    ],
    correctAnswer: 'Canada'
},
];
//vars for elements on
var startBtn = document.querySelector("#start-quiz");
var questionsScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var questionTitle = document.querySelector(".question-title");
var optionsDivEl = document.querySelector(".answers");
var restartBtn = document.getElementById("restart-quiz")
//timer var
var timerEl = document.querySelector(".timer");
var timeLeft = myQuestions.length * 10;
var timerCountdown;

//score var
var displayScore = document.querySelector(".final-score")
var score = 0;

//start quiz
var startQuiz = function() {
    //hide start screen
    document.getElementById("start-screen").setAttribute ("class", "hide");
    //reveal questions
    document.getElementById("questions").removeAttribute ("class");
    timerEl.textContent = timeLeft;
    timerCountdown = setInterval(timer, 1000);
    getQuestions();
}
var selectedQuestion = 0;
//get questions from myquestion array
var getQuestions = function() {
    var currentQuestion = myQuestions[selectedQuestion];
    //clear previous questions
    questionTitle.innerText = "";
    optionsDivEl.innerHTML = "";

    //make sure quiz does not repeat
    if(!currentQuestion) {
        endQuiz();
        return;
    }
    questionTitle.innerText = currentQuestion.question;

    //var for answers
    var questionAnswers = currentQuestion.answers;
    //loop for each questions answers
        questionAnswers.forEach(function(answerbtn) {
            var answerButton = document.createElement("button");
            answerButton.setAttribute("class", "answerbtn");
            answerButton.setAttribute("value", answerbtn);
            //sets text to be selected answer
            answerButton.innerText = answerbtn;
            //append to div
            optionsDivEl.appendChild(answerButton);
            //debugger
    });
    //increase selected question by 1 (to next)
    selectedQuestion++;
}
//show wether correct or wrong
var answerSelected = function(event) {
    var currentQuestion = myQuestions[selectedQuestion-1];
    //get target element
    var targetEl = event.target;
    if(targetEl.matches(".answerbtn")) {
        console.log(targetEl);
        if(targetEl.value !== currentQuestion.correctAnswer) {
            console.log("wrong!");
            //give feedback
            var wrongAnswerEl = document.createElement("div");
            var wrongAnswerText = document.createElement("p");
            wrongAnswerText.innerText = "wrong!";
            wrongAnswerText.setAttribute ("class", "feedback-wrong");
            wrongAnswerEl.appendChild(wrongAnswerText);
            questionsScreen.appendChild(wrongAnswerEl);
            //debugger
            if(selectedQuestion==5) {
                endScreen.appendChild(wrongAnswerEl);
            };
            setTimeout(function() {
                wrongAnswerEl.setAttribute("class", "hide");
            },1000);
            timeLeft -= 10
            getQuestions();
        } else {
            console.log("correct!");
            //feedback
            var correctAnswerEl = document.createElement("div");
             var correctAnswerText = document.createElement("p");
             correctAnswerText.innerText = "correct!";
             correctAnswerText.setAttribute ("class", "feedback-correct");
             correctAnswerEl.appendChild(correctAnswerText);
             questionsScreen.appendChild(correctAnswerEl);
             if(selectedQuestion==5) {
                 endScreen.appendChild(correctAnswerEl);
             };
             setTimeout(function() {
                 correctAnswerEl.setAttribute("class", "hide");
             },1000);
             score +=20
             getQuestions();
        }
    }
}
//end quiz
var endQuiz = function() {
    clearInterval(timerCountdown);
    timerEl.textContent = timeLeft;
    score += timeLeft
    console.log(score);
    //hide question screen
    questionsScreen.setAttribute("class", "hide");
    //display end screen
    endScreen.removeAttribute("class");
    displayScore.textContent = "Your score is: " + score + "!";
}
//timer
var timer = function() {
    timeLeft--;
    timerEl.textContent=timeLeft
    if (timeLeft === 0) {
        alert("You're out of time!");
        clearInterval(timerCountdown);
        endQuiz();
    }
};

function restartQuiz() {
    window.location.reload();
};

//eventlisteners
startBtn.addEventListener("click", startQuiz);
questionsScreen.addEventListener("click", answerSelected);
restartBtn.addEventListener("click", restartQuiz);