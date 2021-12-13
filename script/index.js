

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

//Counter feature
// enter countdown timer screen from menu screen
const countDownTimerBtn = document.querySelector(".countdowntimer-icon")

countDownTimerBtn.addEventListener("click", ()=>{
    document.querySelector(".counter-screen").classList.add("active-counter-screen");
    document.querySelector(".menu-screen").classList.remove("active-menu");
})

// exit countdown timer screen to menu screen

const backToMenuCountdown = document.querySelector(".back-to-menu-countdown");

backToMenuCountdown.addEventListener("click", ()=>{
    document.querySelector(".counter-screen").classList.remove("active-counter-screen");
    document.querySelector(".menu-screen").classList.add("active-menu");
})

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
    document.querySelector(".header").classList.remove("deactivate-header");

})

// go back to menu from weather screen
const backToMenuWeatherBtn = document.querySelector(".back-to-menu-weather");

backToMenuWeatherBtn.addEventListener("click", () =>{
    document.querySelector(".menu-screen").classList.add("active-menu");
    document.querySelector(".weather-screen").classList.remove("active-weather");
    document.querySelector(".header").classList.add("deactivate-header");
 
})


// Timer feature

// transition from menu to timer screen
const timerBtn = document.querySelector(".timer-icon");

timerBtn.addEventListener("click", ()=>{
    document.querySelector(".menu-screen").classList.remove("active-menu");
    document.querySelector(".header").classList.remove("deactivate-header");

    document.querySelector(".timer-screen").classList.add("active-timer-screen");
})

// go back to menu from timer screen
const backToMenuTimerBtn = document.querySelector(".back-to-menu-timer");

backToMenuTimerBtn.addEventListener("click", ()=>{
    document.querySelector(".menu-screen").classList.add("active-menu");
    document.querySelector(".header").classList.add("deactivate-header");

    document.querySelector(".timer-screen").classList.remove("active-timer-screen");
})





// detect location 




      var div = document.getElementById("location");

      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, console.log);
        } else {
          div.innerHTML = "The Browser Does not Support Geolocation";
        }
      }



