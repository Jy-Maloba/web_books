function buildQuiz()
{
    const output = [] //store all html output including questions and user answer choices
    myQuestions.forEach(  // build html for each question, looping through each question
        (currentQuestion, questionNumber) =>{
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                        <input type="radio" name="question ${questionNumber}" value=" ${letter}" class="rad_butn"/>
                            ${letter}:
                            ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="slide">
                    <div class="question">
                        ${(questionNumber+1)}. ${(currentQuestion.question)}
                    </div>
                    <div class="answers">
                        ${answers.join("")}
                    </div>
                </div>`
            );
        }
    );
    quizBox.innerHTML = output.join('');
}

function showResults()
{
    const answerBoxs = quizBox.querySelectorAll('.answers'); 
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => { //For each question execute the code within the loop
        //Determine the selected answer
        const answerBox = answerBoxs[questionNumber];  //Look inside the amswerBox for the current question
        const selector = `input[name=question${questionNumber}]:checked`; //Define a CSS selector that will allow us to find which radio button has been checked by the user
        const userAnswer = (answerBox.querySelector(selector) || {}).value; //Determine which radio button has been checked and get the value of the answer or || if no value exists, an empty object {}.

        if(userAnswer === currentQuestion.correctAnswer){  //Set the colour of the answers based on the users answer
            numCorrect++;
            answerBoxs[questionNumber].style.color = 'green';
        }
        else{
            answerBoxs[questionNumber].style.color = 'red';
        }
    //close the forEach Loop
    });
    resultsBox.innerHTML = `${numCorrect} out of ${myQuestions.length}`; //display results
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide'); //Hide the current slide by removing the active-slide class
    slides[n].classList.add('active-slide'); //Show the new slide by adding the active-slide class for slide n
    currentSlide = n; //Update the current slide number

    if(currentSlide === 0){  //If we’re on the first slide
        previousButton.style.display = 'none'; //Hide the previous slide button
    }
    else{
        previousButton.style.display = 'inline-block'; //Otherwise, display the previous button
    }

    if(currentSlide === slides.length-1){ //If we’re on the last slide
        nextButton.style.display = 'none'; //Don’t display the next button
        submitButton.style.display = 'inline-block'; //Instead, display the submit button
    }
    else{
        nextButton.style.display = 'inline-block'; //Otherwise, display the next button
        submitButton.style.display = 'none'; //And, don’t display the submit button
    }

}

function showNextSlide() {
    showSlide(currentSlide + 1);  //Increment current slide by one
}

function showPreviousSlide() {
        showSlide(currentSlide - 1);  //Decrement current slide by one
}

const quizBox = document.getElementById('quiz')
const resultsBox = document.getElementById('results')
const submitButton = document.getElementById('submit')
const tryAgainButton = document.getElementById("tryAgain");

const myQuestions = []
for(i=0; i<data.length; i++){
    myQuestions.push(data[i])
}

document.getElementById('quizLength').innerHTML = data.length;

buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
showSlide(currentSlide);
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide); //If clicked call the showPreviousSlide
nextButton.addEventListener("click", showNextSlide);
tryAgainButton.addEventListener("click", resetQuiz);