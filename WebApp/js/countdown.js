function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date()); //calculate endtime minus time now
    const seconds = Math.floor((total/100)%60); //convert the 3 minutes to seconds
    const minutes = Math.floor((total/1000/60)%60); //converting total into minutes
    return {
        total,
        minutes,
        seconds
    };
}

function initializeClock(id, endtime) {  //Open a function to initialise the clock
    const clock = document.getElementById(id);//Reference the ID of the clock
    const minutesSpan = clock.querySelector('.minutes');//Reference the minutes class
    const secondsSpan = clock.querySelector('.seconds');//Reference the seconds class
    
    function updateClock() {  //Open the update clock function
        const t = getTimeRemaining(endtime); //set t variable to the remaining
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);//Dislay minutes in the minutes <span>
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);//Display seconds in the seconds <span>
        
        if (t.total <= 0) {
            clearInterval(timeinterval); //If the total time is equal to or less than 0 reset the clock
            showResults();
            submitButton.style.display = 'none';
            previousButton.style.display = 'none';
            nextButton.style.display = 'none';
            tryAgainButton.style.display = 'inline-block';
        } 
        else {
            tryAgainButton.style.display = 'none';
        }
    }
}

updateClock(); //Call the updateClock function  
const timeinterval = setInterval(updateClock, 1000);//Update the clock every second (1000 = 1 second)

const deadline = new Date(Date.parse(new Date()) + 3 * 60 * 1000);
initializeClock('clockdiv', deadline);//Set the countdown timer to 3 minutes and initialise the clock