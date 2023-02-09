var target = String("Go Gators");
var targetDate = new Date();

var form = document.querySelector("form");
var countdownInterval;
var alarmInterval;

document.getElementById("header").innerHTML = target;
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countdown(){
    const tar = new Date(Date.parse(targetDate));
    const curr = new Date();
    const totalSeconds = (tar - curr) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

function randomAlarm() {
  var min = 30; // minimum interval in seconds
  var max = 500; // maximum interval in seconds
  var interval = Math.floor(Math.random() * (max - min + 1) + min) * 1000;
  console.log("Alarm will go off in " + interval / 1000 + " seconds.");
  alarmInterval = setTimeout(function() {
    alert("Take a 10s break!");
    randomAlarm();
  }, interval);
}

var submitButton = document.querySelector("#submit");
var clearButton = document.querySelector("#clear");
submitButton.addEventListener("click", () => {
    targetDate = document.querySelector("#time").value;
    countdown();
    countdownInterval = setInterval(countdown, 1000);
    randomAlarm();
});
clearButton.addEventListener("click", () => {
    clearInterval(countdownInterval);
    clearInterval(alarmInterval);
    document.getElementById("time").innerHTML = "";
    daysEl.innerHTML = 0;
    hoursEl.innerHTML = 0;
    minsEl.innerHTML = 0;
    secondsEl.innerHTML = 0;
});
