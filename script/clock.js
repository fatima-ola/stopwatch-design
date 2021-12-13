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
