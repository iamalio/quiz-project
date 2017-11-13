function populate() {
    if(quiz.isEnded()) {
        showScores();//if all questions exhausted returns score
    }
    else {
        // show questions until no more available
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show answer choices based on question
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();//this function identified below
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

//places you along your path--this function called above
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
//function for showing your final score
function showScores() {
    var person = prompt("Please enter your name", " ");

    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'>Congratulations " + person + " You got " + quiz.score + " right!</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions as formatted (text, choice, answer)
var questions = [
    
    new Question("Why is the sky blue?", ["Because of the mixture of atmospheric gasses", "If it was black it would always be night", "Because it's sad"], 
                                            "Because of the mixture of atmospheric gasses"),
    new Question("What is 2 + 2?", ["A math problem", "4", "This is an improperly phrased question"], "A math problem"),
    
    new Question("Who took the cookie from the cookie jar?", ["On a panel of possible culprits that includes Cookie Monster, it could be assumed he is the guilty party.",
                                                                "Most likely the person with crumbs on their fingers", 
                                                                "You took the cookie from the cookie jar!" ], 
                                                                "On a panel of possible culprits that includes Cookie Monster, it could be assumed he is the guilty party."),
    
    new Question("If some apples are oranges and some oranges are grapes, what are bananas?", ["Yellow", "High in potassium", "A fruit"], "Yellow"),
    
    new Question("What is a Crow-Bar?", ["A place where alcoholic crows hang out", "A weapon for getting even", "A useful tool for opening un-opened pistachios"],
                                        "A weapon for getting even"),
    
    new Question("How much does $1,000,000.00 cost?", ["At 5.4 cents per bill it would cost $54,000.00 to make",
                                                        "At $7.25 per hour it would cost 66 working years of my life, 8 hours a day 5 days a week.",
                                                        "In India at $0.28 per hour it would cost 1,717 working years or 25 generations."], 
                                                        "At 5.4 cents per bill it would cost $54,000.00 to make"),
    
    new Question("Why are tomatoes red?", ["Tomatoes are red because of ethylene", "Some tomatoes are green!", "Why is ketchup red?"], "Tomatoes are red because of ethylene")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();