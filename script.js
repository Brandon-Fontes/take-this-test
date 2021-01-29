var startingMinutes = 1;
var time = startingMinutes * 60;
var countdownStarted = false;
var questions = [
    {
        question: "True or False: A standard guitar has 4 strings.", 
        answer: "0"
    },
    {
        question: "True of False: Freddie Mercury sang for a band called queen", 
        answer: "1"
    },
    {
        question: "True or False: Lo-Fi is a type of Hip-Hop",
        answer: "1"
    },
    {
        question: "True of False: The band Nirvana was popular in the early 60's",
        answer: "0"
    }
]
var thisQuestion = false;
var totalScore = 0;
var totalPossible = questions.length;

function startQuiz(){
    $('.quizToggle').toggle();
    $('#questionWrapper').css("display", "block");
    if (!countdownStarted) {
        countdownStarted = setInterval(updateCountdown, 1000);

    } 
    showNextQuestion();
}
function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds.toString().length < 2) {
        seconds = "0" + seconds;
    }
    var countdownEl = document.getElementById("timer");
    var output = minutes + ":" + seconds;
    countdownEl.innerHTML = output;
    if (time == 0) {
        gameOver();
    }
    time--;

}



function showNextQuestion(){
    if(questions.length == 0){
        gameOver();
        return;
    }
    thisQuestion = questions.shift();
    console.log($('#showQuestion'));
    $('#showQuestion').text(thisQuestion.question); 
    
}

function gradeQuestion(answer){ 
    
    if(answer === thisQuestion.answer ){
        totalScore++;
    }else{
        time = time-15;
    }

    showNextQuestion();

}



function gameOver(){
    clearInterval(countdownStarted);
    $('#questionWrapper').css("display", "none");
    $("#gameEnd").css("display", "block");
    $('#initial').css("display", "block");
    $('#userInitials').css("display", "block");
    $('#submit').css("display", "block");
    console.log("Game Over");
    $('#totalScore').text(totalScore);
    $('#possibleScore').text(totalPossible);
}

   
function nameDisplay(){
    if(localStorage.getItem('Initials')){
        var initials = localStorage.getItem('Initials');
        var score = localStorage.getItem('Score');
        $('#save').text(initials + " " + score);
        
    }
}



$(document).ready(function () {
    $('#submit').on("click",function(){
        var rememberMe = $('#userInitials');
        console.log(rememberMe.val());
        localStorage.setItem('Initials', rememberMe.val());
        localStorage.setItem('Score', totalScore);
        nameDisplay();
    }) 
    $('#start').on("click", startQuiz);
})

