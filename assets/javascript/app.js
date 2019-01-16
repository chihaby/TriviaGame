var counter = 0;
var sec = 30;
var correct = 0;
var incorrect = 0;

var questionArr = ["What is the capital of Australia?", "What is the capital of Liberia?", "What is the capital of Taiwan?", "What is the capital of Japan?", "What is the capital of China?", "What is the capital of Turkey?", "What is the capital of Colombia?", "What is the capital of India?"];
var answerArr = [["Canberra", "Melbourne", "Sydney", "Darwin"], ["Arthington","Monrovia","Tuzon","Marshall"], ["Tainan City", "Taichung", "Taipei", "Hsinchu"], ["Kyoto","Hiroshima","Tokyo","Osaka"], ["Hong Kong", "Macau", "Shanghai", "Beijing"], ["Ankara","Istanbul","Antalya","Bursa"], ["Medellin", "Bogota", "Cartagena", "Cali"], ["Mumbai","Hyderabad","Bangalore","New Delhi"]];
var imageArr = ["<img class='center-block img-right' src='img/australia.png'>", "<img class='center-block img-right' src='img/liberia.png'>", "<img class='center-block img-right' src='img/taiwan.png'>", "<img class='center-block img-right' src='img/japan.png'>", "<img class='center-block img-right' src='img/china.png'>", "<img class='center-block img-right' src='img/turkey.png'>", "<img class='center-block img-right' src='img/colombia.png'>", "<img class='center-block img-right' src='img/india.png'>"];
var correctArr = ["Canberra", "Monrovia", "Taipei", "Tokyo", "Beijing", "Ankara", "Bogota", "New Delhi"];

var start = function() {      
    $('#question').text(questionArr[counter]);
    $('#answerA').text(answerArr[counter][0]);
    $('#answerB').text(answerArr[counter][1]);
    $('#answerC').text(answerArr[counter][2]);
    $('#answerD').text(answerArr[counter][3]);

    $("button").click(function(){   
            if( $(this).text() == correctArr[counter]){
                console.log("CORRECT ANSWER");
                
            }
            else {
                console.log('Wrong answer');
                $('.result').text('Correct answer is: ' + correctArr[counter]);
            }    
        });         
    }
start();







// function countDown(n) {
//     let int = setInterval(function() {
//         $('#timer').text(n);
//         n-- || clearInterval(int);  //if i is 0, clr interval
//     }, 1000);
// }
// var _q = function() {   
//     // countDown(3);
//     $('#question').text(questionArr[current].question);
//     $('#answerA').text(questionArr[current].choices[0]);
//     $('#answerB').text(questionArr[current].choices[1]);
//     $('#answerC').text(questionArr[current].choices[2]);
//     $('#answerD').text(questionArr[current].choices[3]);
//     $("button").click(function(){
       
//             if( $(this).val() == questionsArr[current].correct){
//                 console.log("CORRECT ANSWER");
//             }
//             else {
//                 console.log('no');
//                 $('.result').text('Correct answer is: ' + questionsArr[current++].choices[0]);
//             }    
//         }); 
         
//     }

// _q();

// var nextQ = function() {   
//     countDown(3);
//     $('#question').text(questionsArr[current++].question);
//     $('#answerA').text(questionsArr[current++].choices[0]);
//     $('#answerB').text(questionsArr[current++].choices[1]);
//     $('#answerC').text(questionsArr[current++].choices[2]);
//     $('#answerD').text(questionsArr[current++].choices[3]);
//     $("button").click(function(){
       
//             if( $(this).val() == questionsArr[current++].correct){
//                 console.log("CORRECT ANSWER");
//             }
//             else {
//                 console.log('no');
//                 $('.result').text('Correct answer is: ' + questionsArr[current++].choices[0]);
//             }    
//         }); 
      
//     }
































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




