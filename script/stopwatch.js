
// setting timer variable to zero
var timer = 0;

// declare timer interval but value isn't declared
var intervalValue;

// declare const for minutes, seconds and milliseconds counters


var minutesNotation = document.querySelector(".minutes");
var secondsNotation = document.querySelector(".seconds");
var milliSecondsNotation = document.querySelector(".milli-seconds");
let startHide = document.querySelector(".start");
let stopDisplay =  document.querySelector(".stop");

const startTimerStopWatch = document.querySelector("#stopwatchStartBtn");

startTimerStopWatch.addEventListener("click", ()=>{
    // stop();
    intervalValue = setInterval(()=>{
        timer += 1 / 60;
        milliSecondsValue = Math.floor((timer - Math.floor(timer)) * 100);
        secondsValue = Math.floor((timer) - Math.floor(timer / 60) * 60);
        minuteValue = Math.floor((timer) / 60);

        milliSecondsNotation.innerHTML = milliSecondsValue < 10 ? "0" + milliSecondsValue.toString() : milliSecondsValue;

        secondsNotation.innerHTML = secondsValue < 10 ? "0" + secondsValue.toString() : secondsValue;

        minutesNotation.innerHTML = minuteValue < 10 ? "0" + minuteValue.toString() : minuteValue;
    });

// function startTimer() {
    
    
//     // resetValue();
//     startHide.style.display = "none";
//     stopDisplay.style.display = "block";     

// }

// function stop() {
//     clearInterval(intervalValue);
//     startHide.style.display = "block";
//     stopDisplay.style.display = "none";
// }

// function resetValue() {
//     minutesNotation.textContent = "0" + "0";
//     secondsNotation.textContent = "0" + "0";
//     milliSecondsNotation.textContent = "0" + "0";

//     // location.reload();
