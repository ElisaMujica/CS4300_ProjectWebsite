// JavaScript source code

function countdown() {
    var newYear = new Date("January 1, 2027 00:00:00").getTime();
    var now = new Date().getTime();
    var difference = newYear - now;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        days + " Days " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds";

    if (difference < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "Happy New Year 2027!";
    }
}

var interval = setInterval(countdown, 1000);

countdown();
