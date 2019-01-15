var current = 0;
var count = 30;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unAnswer = 0;
var questionsArr = [{
    question: "In Aladdin, what is the name of Jasmine's pet tiger?",
    choices: ["Rajah", "Bo", "Iago", "Jack"],
    images: ["../images/Rajah.gif"],
    correct: 0
}, {
    question: "In Peter Pan, Captain Hook had a hook on which part of his     body?",
    choices: ["Right Foot", "Left Hand", "Left Foot", "Right Hand"],
    correct: 1

}, {
    question: "In the Lion King, where does Mufasa and his family live?",
    choices: ["Rocky Mountain", "Forest", "Desert", "Pride Rock"],
    correct: 3

}, {
    question: "In Beauty and the Beast, how many eggs does Gaston eat for    breakfast?",
    choices: ["2 Dozen", "5 Dozen", "5000", "0"],
    correct: 1

}, {
    question: "In Alice in Wonderland, what is the name of Alice’s kitten?",
    choices: ["Dinah", "Sammie", "Kat", "Luna"],
    correct: 0

}, {
    question: "After being on earth, where did Hercules first meet his   father Zeus?",
    choices: ["Mount Olympus", "Greece", "In the Temple of Zeus", "Elysian   Fields"],
    correct: 2

}, {
    question: "During the ballroom scene of Beauty & the Beast, what color is Belle’s Gown?",
    choices: ["Yellow", "Blue", "Gold", "White"],
    correct: 2

}, {
    question: "In Bambi, what word does the owl use to describe falling in love?",
    choices: ["Whimsical", "Miserable", "Joyful", "Twitterpatted"],
    correct: 3
}];

function countDown(n) {
    let int = setInterval(function() {
        $('#timer').text(n);
        n-- || clearInterval(int);  //if i is 0, clr interval
    }, 1000);
}

var _q = function() {   
    countDown(3);
    $('#question').text(questionsArr[current].question);
    $('#answerA').text(questionsArr[current].choices[0]);
    $('#answerB').text(questionsArr[current].choices[1]);
    $('#answerC').text(questionsArr[current].choices[2]);
    $('#answerD').text(questionsArr[current].choices[3]);
    $("button").click(function(){
       
            if( $(this).val() == questionsArr[current].correct){
            console.log("CORRECT ANSWER");
            }
            else if( n === 0){
                console.log('n=0');
            } else {
            console.log('no');
            $('.result').text('Correct answer is: ' + questionsArr[current].choices[0]);
            setTimeout(function() {
                // nextQ();
                console.log('done');
            });
            }    
        });   
    }

_q();


































// var timer = function() {
//     count--;
//     if (count <= 0) {
//         setTimeout(function() {
//             nextQ();
//         });

//     } else {
//         $("#timer").text(count--);
//     }
// };




