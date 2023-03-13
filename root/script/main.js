const myAudio = document.getElementById('myAudio');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

let answer = 0 ;

function generateQuetion(){
    var num1 = Math.floor(Math.random() * 13) ; 
    var num2 = Math.floor(Math.random() * 13) ; 
    var myAnwsers1 = Math.floor(Math.random() * 10);
    var myAnwsers2 = Math.floor(Math.random() * 10);
    var allAnswer = [];
    var arrayAnswer = [];

    answer = eval(num1 + num2) ;
    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;

    allAnswer = [answer, myAnwsers1, myAnwsers2];
    for (i = allAnswer.length; i--;){
        arrayAnswer.push(allAnswer.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    };
    option1.innerHTML = arrayAnswer[0];
    option2.innerHTML = arrayAnswer[1];
    option3.innerHTML = arrayAnswer[2]; 
}
option1.addEventListener('click' , function(){
    if(option1.innerHTML == answer){
        generateQuetion()
    }
    else{
        myAudio.play()
    }
}) 

option2.addEventListener('click' , function(){
    if(option2.innerHTML == answer){
        generateQuetion()
    }
    else{
        myAudio.play()
    }
}) 

option3.addEventListener('click' , function(){
    if(option3.innerHTML == answer){
        generateQuetion()
    }
    else{
        myAudio.play()
    }
}) 
generateQuetion()

