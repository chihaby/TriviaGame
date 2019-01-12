var time = setInterval(function(){ 
    var seconds = Math.floor((1000 * 60)) / 1000;
        console.log("Hello"); 
    }, 3000);


$("#name").text('Time Remaining: '+ time);

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.text(seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function () {
    var thirtySeconds = 30,
        display = $('#time');
    startTimer(thirtySeconds, display);
});