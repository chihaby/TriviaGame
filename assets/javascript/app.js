var timeFrame = 5;
var counter = 0;
var correct = 0;
var incorrect = 0;

var questionArr = ["What is the capital of Australia?", "What is the capital of Liberia?", "What is the capital of Taiwan?", "What is the capital of Japan?", "What is the capital of China?", "What is the capital of Turkey?", "What is the capital of Colombia?", "What is the capital of India?"];
var answerArr = [["Canberra", "Melbourne", "Sydney", "Darwin"], ["Arthington","Monrovia","Tuzon","Marshall"], ["Tainan City", "Taichung", "Taipei", "Hsinchu"], ["Kyoto","Hiroshima","Tokyo","Osaka"], ["Hong Kong", "Macau", "Shanghai", "Beijing"], ["Ankara","Istanbul","Antalya","Bursa"], ["Medellin", "Bogota", "Cartagena", "Cali"], ["Mumbai","Hyderabad","Bangalore","New Delhi"]];
var correctArr = ["Canberra", "Monrovia", "Taipei", "Tokyo", "Beijing", "Ankara", "Bogota", "New Delhi"];

$('#question').text(questionArr[0]);
$('#answerA').text(answerArr[0][0]);
$('#answerB').text(answerArr[0][1]);
$('#answerC').text(answerArr[0][2]);
$('#answerD').text(answerArr[0][3]);

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

function start() {    
    var n = counter;
    $("button").click(function(){   
        if( $(this).text() === correctArr[n]){
            correct++;
            $('.result').text('CORRECT');             
            $('#progress').text('CORRECT: '+ correct)                      
        }
        if( $(this).text() !== correctArr[n]) {
            incorrect++;
            $('.result').text('Correct answer is: ' + correctArr[n]);
            $('#progress').text('WRONG: '+ incorrect)                            
        }  

        $('#question').text(questionArr[n+1]); //1
        $('#answerA').text(answerArr[n+1][0]);
        $('#answerB').text(answerArr[n+1][1]);
        $('#answerC').text(answerArr[n+1][2]);
        $('#answerD').text(answerArr[n+1][3]);
    n++;
    });  
}



start();
countDown();



















