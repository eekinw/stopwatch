// starts at 00:00
// when click start, timer starts running
// after click start, start button disappears. Pause button and reset button appears
// when pause, time pauses
// after click reset, time start from 00:00

const minuteDisplay = document.getElementById("minute")
const secondDisplay = document.getElementById("second")
const startBtn = document.getElementById("start-btn")
const pauseBtn = document.getElementById("pause-btn")
const resetBtn = document.getElementById("reset-btn")

let intervalId = null;

let minutes = 0
let seconds = 0

minutes = minutes.toString().padEnd(1, "0")
seconds = seconds.toString().padEnd(2, "0")

minuteDisplay.textContent = minutes;
secondDisplay.textContent = seconds;

function updateTimerDisplay() {
    let minutesStr = minutes.toString();
    let secondsStr = seconds.toString();

    if(minutes < 10) {
        minutesStr = "0" + minutesStr
    }

    if(seconds < 10) {
        secondsStr = "0" + secondsStr
    }

    minuteDisplay.textContent = minutesStr;
    secondDisplay.textContent = secondsStr;
}

function incrementTimer() {
    seconds ++

    if(seconds === 60) {
        seconds = 0;
        minutes ++
    }

    updateTimerDisplay()
}

startBtn.addEventListener("click", function() {
    intervalId = setInterval(incrementTimer, 1000)
    startBtn.disabled = true;

    pauseBtn.classList.toggle("hidden")
    resetBtn.classList.toggle("hidden")


})

pauseBtn.addEventListener("click", function() {
    clearInterval(intervalId)
    startBtn.disabled = false;

} )

resetBtn.addEventListener("click", function() {
    clearInterval(intervalId);
    startBtn.disabled = false;

    pauseBtn.classList.toggle("hidden")
    resetBtn.classList.toggle("hidden")

    minutes = 0;
    seconds = 0;

    updateTimerDisplay()
} )


// next steps: build alarm