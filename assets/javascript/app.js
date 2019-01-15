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
    const int = setInterval(function() {
        $('#timer').text(n);
        n-- || clearInterval(int);  //if i is 0, clr interval
    }, 1000);
}

var ask = function() {
    var elements = $();
    for (var i =0; i<questionsArr.length; i++){
    // $('#question').text(questionsArr[i].question);
    var element = $('<div>'+ questionsArr[i].question +'</div>')
    elements = elements.add(element);
    
    }
    $('#question').append(elements);
    countDown(30); 
}
ask();







//$('#question').text(questionsArr[i].question);

//fat arrow function