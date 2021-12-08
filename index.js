// setting timer variable to zero
var timer = 0;
console.log(timer);
// declare timer interval but value isn't declared
var intervalValue;

// declare const for minutes, seconds and milliseconds counters


var minutesNotation = document.querySelector(".minutes");
var secondsNotation = document.querySelector(".seconds");
var milliSecondsNotation = document.querySelector(".milli-seconds");


console.log(minutesNotation, secondsNotation, milliSecondsNotation);

function startTimer() {
    stop();

    intervalValue = setInterval(function() {
            timer += 1 / 60;
            milliSecondsValue = Math.floor((timer - Math.floor(timer)) * 100);
            secondsValue = Math.floor((timer) - Math.floor(timer / 60) * 60);
            minuteValue = Math.floor((timer) / 60);

            milliSecondsNotation.innerHTML = milliSecondsValue < 10 ? "0" + milliSecondsValue.toString() : milliSecondsValue;

            secondsNotation.innerHTML = secondsValue < 10 ? "0" + secondsValue.toString() : secondsValue;

            minutesNotation.innerHTML = minuteValue < 10 ? "0" + minuteValue.toString() : minuteValue;
        })
        // resetValue();

}

function stop() {
    clearInterval(intervalValue);
}

function resetValue() {
    // minutesNotation.value = "00";
    // console.log(minutesNotation.textContent)
    // console.log(secondsNotation.textContent)
    // minutesNotation.textContent = "0" + "0";
    // secondsNotation.innerHTML = "0" + "0";

    location.reload();

}