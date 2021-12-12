function clock(){
    var currentTime = new Date();
    var hourCounter = document.querySelector(".hour-counter");
    var minutesCounter = document.querySelector(".minutes-counter");
    var dayPeriod = document.querySelector(".period");
    var dayCounter = document.querySelector(".day") ;
    var dateCounter = document.querySelector(".date");
    var monthCounter = document.querySelector(".month");

    timeHourValue = currentTime.getHours ();
    timeMinutesValue = currentTime.getMinutes();
    dayCounterValue = currentTime.getDay();
    dateCounterValue = currentTime.getDate();
    monthCounterValue = currentTime.getMonth();

    
    hourCounter.innerHTML = timeHourValue;
    minutesCounter.innerHTML = timeMinutesValue;
    dayCounter.innerHTML = dayCounterValue;
    dateCounter.innerHTML = dateCounterValue;
    monthCounter.innerHTML = monthCounterValue;

    if(dayCounter.innerHTML === "1"){
        dayCounter.innerHTML  = "Monday";
    } else if(dayCounter.innerHTML === "2"){
        dayCounter.innerHTML  = "Tuesday";
    } else if(dayCounter.innerHTML === "3"){
        dayCounter.innerHTML  = "Wednesday";
    } else if(dayCounter.innerHTML === "4"){
        dayCounter.innerHTML  = "Thursday";
    } else if(dayCounter.innerHTML === "5"){
        dayCounter.innerHTML  = "Friday";
    } else if(dayCounter.innerHTML === "6"){
        dayCounter.innerHTML  = "Saturday";
    } else if(dayCounter.innerHTML === "0"){
        dayCounter.innerHTML  = "Sunday";
    }

    if(monthCounter.innerHTML === "1"){
        monthCounter.innerHTML  = "January";
    } else if(monthCounter.innerHTML === "2"){
        monthCounter.innerHTML  = "February";
    } else if(monthCounter.innerHTML === "3"){
        monthCounter.innerHTML  = "March";
    } else if(monthCounter.innerHTML === "4"){
        monthCounter.innerHTML  = "April";
    } else if(monthCounter.innerHTML === "5"){
        monthCounter.innerHTML  = "May";
    } else if(monthCounter.innerHTML === "6"){
        monthCounter.innerHTML  = "June";
    } else if(monthCounter.innerHTML === "7"){
        monthCounter.innerHTML  = "July";
    } else if(monthCounter.innerHTML === "8"){
        monthCounter.innerHTML  = "August";
    } else if(monthCounter.innerHTML === "9"){
        monthCounter.innerHTML  = "September";
    } else if(monthCounter.innerHTML === "10"){
        monthCounter.innerHTML  = "October";
    } else if(monthCounter.innerHTML === "11"){
        monthCounter.innerHTML  = "November";
    } else if(monthCounter.innerHTML === "12"){
        monthCounter.innerHTML  = "December";
    }

    


    if(hourCounter.innerHTML <= 9 || minutesCounter.innerHTML <=9){
        hourCounter.innerHTML = "0" + hourCounter.innerHTML;
        minutesCounter.innerHTML = "0" + minutesCounter.innerHTML;
    } 
    
    if (dateCounter.innerHTML === 1) {
        dateCounter.innerHTML = dateCounterValue + "st";
    } else if (dateCounter.innerHTML === 2){
        dateCounter.innerHTML = dateCounterValue + "nd";
    } else if (dateCounter.innerHTML === 3){
        dateCounter.innerHTML = dateCounterValue + "rd";
    }else if (dateCounter.innerHTML >= 4 || dateCounter.innerHTML >= 30 ){
        dateCounter.innerHTML = dateCounterValue + "th";
    }
}

clock();


// transition for home screen to menu screen

const homeBtn = document.querySelector(".hm-btn");


homeBtn.addEventListener("click", () =>{
    document.querySelector(".home-screen").classList.add("active");
    document.querySelector(".menu-screen").classList.add("active-menu");
});

// transition from menu screen back to home screen

const backToMenuBtn = document.querySelector(".back-to-home");

backToMenuBtn.addEventListener("click", () =>{
    document.querySelector(".home-screen").classList.remove("active");
    document.querySelector(".menu-screen").classList.remove("active-menu");


});

    // weather application

// display the weather screen

const weatherBtn = document.querySelector(".weather-icon");

// declare a variable for location
var myLocation = document.querySelector(".location");
// declare a variable for temperature icon img
var temperatureIcon = document.querySelector("#temp-icon");
// declare a variable for temperature value
var tempratureValue = document.querySelector("#temp-value");
// declare a variable for climate type
var climateType = document.querySelector("#climate")
// declare an undefined variable for iconFile
let iconFile;
// declare a constant variable associated with the search bar/input
const searchInputCity = document.querySelector("#search-input");
// declare a constant variable for the search button
const searchCityBtn =document.querySelector("#search-button");
    

//from weathericon to weather Screen

weatherBtn.addEventListener("click", ()=>{
    document.querySelector(".menu-screen").classList.remove("active-menu");
    document.querySelector(".weather-screen").classList.add("active-weather");
})

// go back to menu from weather screen
const backToMenuWeatherBtn = document.querySelector(".back-to-menu-weather");

backToMenuWeatherBtn.addEventListener("click", () =>{
    document.querySelector(".menu-screen").classList.add("active-menu");
    document.querySelector(".weather-screen").classList.remove("active-weather");
    
})

// Timer feature

// transition from menu to timer screen
const timerBtn = document.querySelector(".timer-icon");

timerBtn.addEventListener("click", ()=>{
    document.querySelector(".menu-screen").classList.remove("active-menu");
    document.querySelector(".timer-screen").classList.add("active-timer-screen");
})

// go back to menu from timer screen
const backToMenuTimerBtn = document.querySelector(".back-to-menu-timer");

backToMenuTimerBtn.addEventListener("click", ()=>{
    document.querySelector(".menu-screen").classList.add("active-menu");
    document.querySelector(".timer-screen").classList.remove("active-timer-screen");
})





// detect location 


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



function startTimer() {
    stop();
    console.log("clicked start")

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
         startHide.style.display = "none";
         stopDisplay.style.display = "block";

        

}

function stop() {
    clearInterval(intervalValue);
    startHide.style.display = "block";
    stopDisplay.style.display = "none";
}

function resetValue() {
    minutesNotation.textContent = "0" + "0";
    secondsNotation.textContent = "0" + "0";
    milliSecondsNotation.textContent = "0" + "0";

    // location.reload();

}



      var div = document.getElementById("location");

      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, console.log);
        } else {
          div.innerHTML = "The Browser Does not Support Geolocation";
        }
      }

 
