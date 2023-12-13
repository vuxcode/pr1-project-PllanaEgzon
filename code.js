// Variables at the top
var minutes = 25;
var seconds = 0;
var lapNumber = 0;
var timerIntervalId;
var isBreakTime = true;

// Getting the display element by ID for the timer
var timerDisplay = document.getElementById("time");

// Function that starts timer
function startTimer(){
    clearInterval(timerIntervalId);    // Clearing multiple running intervals
    timerIntervalId = setInterval(() => {    // Udating the timer every second and runs other actions
        if (minutes === 0 && seconds === 0) {
            if (lapNumber === 3){           // When to take a longer break and getting an alert from it
                alert("Good job take a long rest");
                resetTimer();
            } else {
                if (isBreakTime) {       // Alerts when you have done less the 3
                    isBreakTime = false;
                    lapNumber++;
                    alert("Take a 5 min break");
                    minutes = 5;
                } else {                // To restart the timer and studying
                    minutes = 25
                    isBreakTime = true;
                }
            }
        } else {
            if (seconds === 0) {
                minutes--;          // Decrease the mins and sec efter exemeple 24:00 it will start at 23:59
                seconds = 59;
            } else {
                seconds--
            }
        }
        updateTimer();        
    }, 1000)
}


// To pause the timer at any moment
function pauseTimer() {
    clearInterval(timerIntervalId);
}

// To restart the whole thing from the begining
function resetTimer() {
    clearInterval(timerIntervalId);
    minutes = 25;
    seconds = 0;
    lapNumber = 0;
    timerIntervalId;
    isBreakTime = true;
    updateTimer();
}

// To update the output of the timer, the tick downs of the timer
function updateTimer() {
    var minutesDisplay = String(minutes);               // Converts the var from numbs to strings
    var secondsDisplay = String(seconds);
    timerDisplay.innerText = `${minutesDisplay}:${secondsDisplay}`;         // Update the numbers on the HTML doc
}
