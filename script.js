var startingMinutes = 1;
var time = startingMinutes * 60;
var countdownStarted = false;


$(document).ready(function(){
    $('#hide').toggle();
})
$(document).ready(function(){
    $('#hideNow').toggle();
})

$(document).ready(function (){
    $('#start').on('click', function(){
        $('#hide').toggle();
    })
})
$(document).ready(function (){
    $('#start').on('click', function(){
        $('#hideNow').toggle();
    })
})
$(document).ready(function (){
    $('#start').on('click', function(){
        $('#start').toggle();
    })
})

$(document).ready(function (){
    $('#start').on('click', function(){
        $('#showQuestion').toggle();
    })
})

function updateCountdown(){
    
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    console.log(seconds.toString().length);
    if (seconds.toString().length < 2) {
        seconds = "0" + seconds;
    }
    var countdownEl = document.getElementById("timer");
    var output = minutes + ":" +  seconds;
    countdownEl.innerHTML = output;
    if(time == 0){
        clearInterval(countdownStarted);
    }
    console.log(output);
    time--;
    
}
window.onload = function(){ 
   

$("#start").click( function(){
    if(!countdownStarted){
        countdownStarted = setInterval(updateCountdown, 1000);
        
    }
    
});
    //Show first question here
    //create html element and create function that shows the next question on the element
    
}


var questions = [
    question1 = "question 1",
    question2 = "question 2"
]
    


