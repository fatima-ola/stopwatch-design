

// create a variable for the home button
const homeBtn = document.querySelector(".hm-btn");
console.log(homeBtn)
// create an event listener in the home button
homeBtn.addEventListener("click", function() {
    // add a class of .active to the icons-menu class 
    document.querySelector(".menu-screen").classList.add("active");
    console.log("hello")
});





// setting timer variable to zero
var timer = 0;
console.log(timer);
// declare timer interval but value isn't declared
var intervalValue;

// declare const for minutes, seconds and milliseconds counters


var minutesNotation = document.querySelector(".minutes");
console.log(minutesNotation)
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



      var div = document.getElementById("location");

      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, console.log);
        } else {
          div.innerHTML = "The Browser Does not Support Geolocation";
        }
      }

      function showPosition(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        // You need to enter your API Key here
        var api_key = "";
        var img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=14&size=400x300&sensor=false&key=${api_key}`;
        div.innerHTML = `<img src='${img_url}'>`;
      }
      getLocation();
