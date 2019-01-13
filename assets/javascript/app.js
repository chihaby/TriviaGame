var correctAnswer = 0;
var incorrectAnswer = 0;
var unAnswer = 0;

function countDown(n) {
    const int = setInterval(function () {
        $("#counter").text(n);
        n-- || clearInterval(int);  //if i is 0, clr interval
    }, 1000);
}
countDown(30);

