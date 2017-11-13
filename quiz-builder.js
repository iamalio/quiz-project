function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
};

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;//from quiz-works group of questions
    this.questionIndex = 0;//starts question counter
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
//raises the count of the right answers
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;//raises question counter
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;//stops quiz once all questions exhausted
}