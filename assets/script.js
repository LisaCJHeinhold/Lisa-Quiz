//questions
var myQuestions = [
    {
        question: "What is Lisa's favorite color?",
        answers: {
            a: 'aqua marine',
            b: 'pink',
            c: 'orange',
            d: 'chartreuse'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is Lisa's favorite building?",
        answers: {
            a: 'The Leaning Tower of Pisa',
            b: 'The Colosseum',
            c: 'The Sagrada Familia',
            d: 'The Empire State Building'
        },
        correctAnswer: 'c'
    },
    {
        question: "What does Lisa always say her favorite animal is?",
        answers: {
            a: 'dolphin',
            b: 'kitty',
            c: 'leopard',
            d: 'butterfly'
        },
        correctAnswer: 'd'
    },
    {
        question: "What is Lisa's favorite thing to do?",
        answers: {
            a: 'travel',
            b: 'hang out at the beach',
            c: 'hike',
            d: 'watch movies'
        },
        correctAnswer: 'a'
    },
    {
        question: "What would Lisa say her favorite food is?",
        answers: {
            a: 'burgers with pineapple',
            b: 'Red Robin macNcheese',
            c: 'tacos',
            d: 'steak and potatoes'
        },
        correctAnswer: 'b'
    }
];
//vars
var startBtn = document.querySelector("#start-quiz");
var questionsScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");

//start quiz
var startQuiz = function() {
    //hide start screen
    document.getElementById("start-screen").style.display='none';
    //reveal questions
    document.getElementById("questions").style.display='block';
}
//startQuiz();
var getQuestions = function() {

}

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    
    function showQuestions(questions, quizContainer) {
        //store output and answer choices
        var output = [];
        var answers;
        for(var i = 0; i < questions.length; i++) {
            //reset list
            answers = [];
            for(letter in questions[i].answers) {
                answers.push(
                    '<label>'
                        + '<input type="button" name="question'+i+'" value="'+letter+'">' + letter + ': ' + questions[i].answers[letter] + 
                        '</label>'
                );
            }
            //add questions and answers o output
            output.push(
                '<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        //combine output list into string and put on page
        quizContainer.innerHTML = output.join('');
    }
}

//eventlisteners
startBtn.addEventListener("click", startQuiz);