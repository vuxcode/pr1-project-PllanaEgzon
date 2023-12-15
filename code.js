// Variables at the top
var minutes = 25;
var seconds = 0;
var lapNumber = 0;
var timerIntervalId;
var isBreakTime = true;

// Getting the display element by ID for the timer
var timerDisplay = document.getElementById("time");

// Function that starts timer
function startTimer() {
    clearInterval(timerIntervalId); // Clearing multiple running intervals
    timerIntervalId = setInterval(() => { // Updating the timer every second and runs other actions
        if (minutes === 0 && seconds === 0) {
            if (lapNumber === 3) { // Alert for a longer break after the 4th time 
                alert("Good job, take a long rest");
                resetTimer();
            } else {
                if (isBreakTime) {
                    alert("Take a 5 min break");
                    minutes = 5;
                    isBreakTime = false;
                } else {
                    alert("Time to work");
                    minutes = 25;
                    isBreakTime = true;
                    lapNumber++;
                }
            }
        } else {
            if (seconds === 0) {
                minutes--; // Decrease the mins and sec, for example, 24:00 it will start at 23:59
                seconds = 59;
            } else {
                seconds--;
            }
        }
        updateTimer();
    }, 1000);
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
    timerIntervalId
    isBreakTime = true;
    updateTimer();
}

// To update the output of the timer, the tick downs of the timer
function updateTimer() {
    var minutesDisplay = String(minutes);    // Converts the var from numbs to strings
    var secondsDisplay = String(seconds).padStart(2, '0');   // Always shows 2 numbers to seconds
    timerDisplay.innerText = `${minutesDisplay}:${secondsDisplay}`;    // Update the numbers on the HTML doc
}
