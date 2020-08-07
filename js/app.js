function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Pregunta " + currentQuestionNumber + " de " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>RESULTADO</h1>";
    gameOverHTML += "<h2 id='score'> Tu resultado fue: " + quiz.score + " Respustas correctas "+"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    
};

// create questions
var questions = [
    new Question("¿Cual es mi primer apellido?", ["Garcia", "Duran","Daza", "Vergara"], "Garcia"),
    new Question("¿Cual es la capital de colombia?", ["MEDELLIN", "BOGOTA", "VALLEDUPAR", "CUCUTA"], "BOGOTA"),
    new Question("¿Cuanto es 2+2?.", ["1", "6","2", "4"], "4"),
    new Question("¿Cual es el tercer planeta de el sistema solar?", ["Marte", "Jupiter", "Venus", "Tierra"], "Tierra"),
    new Question("La piramide es una figura... ", ["Circular", "Rectangular", "Triangular", "Cuadrada"], "Triangular"),
    new Question("¿Cual es el departamento mas poblado de colombia?", ["Cesar", "Antioquia","Cundinamarca", "Amazonas"], "Cundinamarca"),
    new Question("¿Como se llama el aereopuerto de bogota?", ["El plateado", "El dorado","El imperial", "El nacional"], "El dorado"),
    new Question("¿Cual es el periodico con mayor circulacion de el pais?", ["El pilon", "El tiempo","El espectador", "Al dia"], "El tiempo"),
    new Question("¿Que significa RV o VR en ingles?", ["Realidad vista", "reproduccion virtual","Realidad virtual", "Ritual var"], "Realidad virtual"),
    new Question("¿Que es windows?", ["Una aplicacion", "Un sistema operativo","Un computador", "Un windows"], "Un sistema operativo")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





