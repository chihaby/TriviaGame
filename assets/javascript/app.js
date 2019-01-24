var timeFrame = 5;
var counter = 0;
var correct = 0;
var incorrect = 0;
var n = 0;


var questionArr = ["What is the capital of Australia?", "What is the capital of Liberia?", "What is the capital of Taiwan?", "What is the capital of Japan?", "What is the capital of China?", "What is the capital of Turkey?", "What is the capital of Colombia?", "What is the capital of India?"];
var answerArr = [["Canberra", "Melbourne", "Sydney", "Darwin"], ["Arthington","Monrovia","Tuzon","Marshall"], ["Tainan City", "Taichung", "Taipei", "Hsinchu"], ["Kyoto","Hiroshima","Tokyo","Osaka"], ["Hong Kong", "Macau", "Shanghai", "Beijing"], ["Ankara","Istanbul","Antalya","Bursa"], ["Medellin", "Bogota", "Cartagena", "Cali"], ["Mumbai","Hyderabad","Bangalore","New Delhi"]];
var imageArr = ["<img class='center-block img-right' src='img/australia.png'>", "<img class='center-block img-right' src='img/liberia.png'>", "<img class='center-block img-right' src='img/taiwan.png'>", "<img class='center-block img-right' src='img/japan.png'>", "<img class='center-block img-right' src='img/china.png'>", "<img class='center-block img-right' src='img/turkey.png'>", "<img class='center-block img-right' src='img/colombia.png'>", "<img class='center-block img-right' src='img/india.png'>"];
var correctArr = ["Canberra", "Monrovia", "Taipei", "Tokyo", "Beijing", "Ankara", "Bogota", "New Delhi"];

function start(n) {    
    var n = counter++;
    $('#question').text(questionArr[n]);
    $('#answerA').text(answerArr[n][0]);
    $('#answerB').text(answerArr[n][1]);
    $('#answerC').text(answerArr[n][2]);
    $('#answerD').text(answerArr[n][3]);
    $("button").click(function(){   
             
            if( $(this).text() === correctArr[n]){
                correct++;
                $('.result').text('CORRECT');             
                $('#progress').text('CORRECT: ' + correct + '/ ' + questionArr.length); 
                          
            }
            else {
                incorrect++;
                $('.result').text('Correct answer is: ' + correctArr[n]);
                $('#progress').text('WRONG: ' + incorrect + '   ------  CORRECT: ' + correct);                
                
            }   
        start();
    });  
  
}

function countDown(){
    let timer = $('#timer');
    timer.text(timeFrame);
    var int = setInterval(timeIt, 1000);
    function timeIt(){
        timeFrame--;
        timer.html(timeFrame);
        if (timeFrame === 0){
            clearInterval(int);
            timer.text('Time Up');
        }
    }    
}



start();

countDown();


//setTimeout(game.nextQuestion, 3 * 1000);


















