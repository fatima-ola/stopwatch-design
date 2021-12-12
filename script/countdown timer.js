var startTimerBtn = document.getElementById('start');
var resetTimerBtn = document.getElementById('reset');

var h = document.getElementById("hourTimer-x");
var m = document.getElementById("minuteTimer-x");
var s = document.getElementById("secTimer-x");

//store a reference to the startTimer variable
var startTimer = null;

startTimerBtn.addEventListener('click', ()=>{
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(()=> {
            timer();
        }, 1000);
    }
    startInterval();
})

resetTimerBtn.addEventListener('click', ()=>{
    h.value = 0;
    m.value = 0;
    s.value = 0;
    //stop the timer after pressing "reset"
    stopInterval()
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}