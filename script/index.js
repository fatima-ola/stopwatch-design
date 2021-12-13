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

    if(minutesCounter.innerHTML < 10){
        minutesCounter.innerHTML = "0" + minutesCounter.innerHTML;
    }

    if(hourCounter.innerHTML <10){
        hourCounter.innerHTML = "0" + hourCounter.innerHTML;
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
    document.querySelector(".header").classList.add("deactivate-header");

});

// transition from menu screen back to home screen

const backToMenuBtn = document.querySelector(".back-to-home");

backToMenuBtn.addEventListener("click", () =>{
    document.querySelector(".home-screen").classList.remove("active");
    document.querySelector(".menu-screen").classList.remove("active-menu");
    document.querySelector(".header").classList.remove("deactivate-header");
  
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
    


weatherBtn.addEventListener("click", ()=>{
    document.querySelector(".menu-screen").classList.remove("active-menu");
    document.querySelector(".weather-screen").classList.add("active-weather");
    document.querySelector(".header").classList.remove("deactivate-header");

})

// go back to menu from weather screen
const backToMenuWeatherBtn = document.querySelector(".back-to-menu-weather");

backToMenuWeatherBtn.addEventListener("click", () =>{
    document.querySelector(".menu-screen").classList.add("active-menu");
    document.querySelector(".weather-screen").classList.remove("active-weather");
    document.querySelector(".header").classList.add("deactivate-header");
 
})
// enter countdown timer screen from menu screen
const countDownTimerBtn = document.querySelector(".countdowntimer-icon")

countDownTimerBtn.addEventListener("click", ()=>{
    document.querySelector(".timer-screen").classList.add("active-timer-screen");
    document.querySelector(".menu-screen").classList.remove("active-menu");
    document.querySelector(".header").classList.remove("deactivate-header");

})

// exit countdown timer screen to menu screen

const backToMenuCountdown = document.querySelector(".back-to-menu-countdown");

backToMenuCountdown.addEventListener("click", ()=>{
    document.querySelector(".timer-screen").classList.remove("active-timer-screen");
    document.querySelector(".menu-screen").classList.add("active-menu");
    document.querySelector(".header").classList.add("deactivate-header");

})
