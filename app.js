var hoursNode = document.getElementById("hours_value");
var minutesNode = document.getElementById("minutes_value");
var secondsNode = document.getElementById("seconds_value");
var milesecNode = document.getElementById("milesec_value");

var element_stop = document.getElementById("button_stop_watch");
element_stop.classList.add("disable");

var startPoint = moment("00:00:00:00", "HH:mm:ss:SSS");

function startStopWatch() {

    startPoint = startPoint.add(1, 'milliseconds')
    
    var hours = startPoint.hours().toString().padStart(2, 0);
    hoursNode.textContent = hours;

    var minutes = startPoint.minutes().toString().padStart(2, 0);
    minutesNode.textContent = minutes;

    var seconds = startPoint.seconds().toString().padStart(2, 0);
    secondsNode.textContent = seconds;

    var milliseconds = startPoint.millisecond().toString().padStart(3, 0);
    milesecNode.textContent = milliseconds;
}

var interval

function startStopWatchWithClick() {
    interval = setInterval(startStopWatch, 1);

    var element_start = document.getElementById("button_start_watch");
    element_start.classList.add("disable");

    var element_stop = document.getElementById("button_stop_watch");
    element_stop.classList.remove("disable");
}

function pauseStopWatchWithClick() {
    clearInterval(interval);

    var element_start = document.getElementById("button_start_watch");
    element_start.classList.remove("disable");

    var element_stop = document.getElementById("button_stop_watch");
    element_stop.classList.add("disable");
}

function resetStopWatchWithClick() {
    clearInterval(interval);
    hoursNode.textContent = "00";
    minutesNode.textContent = "00";
    secondsNode.textContent = "00";
    milesecNode.textContent = "000";
}

document.getElementById('button_start_watch').addEventListener("click", startStopWatchWithClick)
document.getElementById('button_stop_watch').addEventListener("click", pauseStopWatchWithClick)
document.getElementById('button_reset_watch').addEventListener("click", resetStopWatchWithClick)