var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");


module.exports.sendEmail = (mailOptions) => {



    var transport = nodemailer.createTransport(smtpTransport({
        service: "Gmail",
        host: 'smtp.gmail.com',
        auth: {
            user: "davidhiguet@gmail.com",
            pass: "Nala240984"
        }
    }));


    transport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }

        // if you don't want to use this transport object anymore, uncomment following line
        //smtpTransport.close(); // shut down the connection pool, no more messages
    });
}

/*
$(document).ready(function () {
    /*////////CUBE////////*/
/*
    $(".homelink").click(function () {
        calcRotation(0);
    });

    $(".aboutLink").click(function () {
        calcRotation(90);
    });

    $(".newsLink").click(function () {
        calcRotation(180);
    });

    $(".contactLink").click(function () {
        calcRotation(270);
    });
    $(".top").click(function () {
        calcRotate(90, 0);
    });
    $(".bottom").click(function () {
        calcRotate(270, 0);
    });
    function calcRotation(rot) {
        $("#cube").css("transform", "rotateY(-" + rot + "deg)");
    }
    function calcRotate(rotat, tran) {
        $("#cube").css(
            "transform",
            "rotateX(-" + rotat + "deg)  translateZ(" + tran + "px)"
        );
    }
});
/*////////MENU OBJECTIF EN RESPONSIVE////////*/
/*
$("#menu-button").on("click", function () {
    $(document.body).toggleClass("menu-open");
});
setTimeout(function () {
    $(".presentation").fadeOut("1000");
}, 3700);

/*////////AJAX COPYRIGHT////////*/
/*
$("#cpy").on("click", function () {
    afficherenajax("copyright.txt");
    $("#couverture").show();
});

$("#couverture").on("click", function () {
    $("#couverture").hide();
});
function afficherenajax(fichier) {
    $.get("/ressources/" + fichier, function (data) {
        $("#popup_contenu").html(data);
        $("couverture").show();
    });
}
    /*////////MODAL IMAGES////////*/
/*
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

/*////////FORMULAIRE////////*/
/*
var verif = function (e) {
    var form = document.getElementById("formulaire");
    var verif1 = document.getElementById("nom").value;
    var verif2 = document.getElementById("prenom").value;
    var verif3 = document.getElementById("email").value;
    var verif4 = document.getElementById("message").value;
    if (verif1 == "" || verif2 == "" || verif3 == "" || verif4 == "") {
        document.getElementById("test").textContent =
            "Veuillez saisir tous les champs correctement.";
        document.getElementById("test").style.backgroundColor = "red";
        e.preventDefault();
    }

    document.getElementById("test").textContent =
        "Votre message a bien été envoyer.";
    document.getElementById("test").style.backgroundColor = "green";
    form.submit();
};

document.getElementById("send").addEventListener(
    "click",
    function (event) {
        verif();
    },
    false
);

  /*

var maFonction = function(){

  var c = document.getElementsByClassName('mySlides').child('img');
  alert(c);
  var taille = c.style.width;
  taille = ParseInt(taille);
  var verifi = window.innerWidth;
  if(verifi > 900){

  } else {

  taille = 50 +"vw";

  }
}


  /*/ ///////FORMULAIRE////////*/
  /*
var verif = function (e) {
  var form = document.getElementById("formulaire");
  var verif1 = document.getElementById("nom").value;
  var verif2 = document.getElementById("prenom").value;
  var verif3 = document.getElementById("email").value;
  var verif4 = document.getElementById("message").value;

  if (verif1 == "" || verif2 == "" || verif3 == "" || verif4 == "") {

    if (verif1 == "" && verif2 != "" || verif3 != "" || verif4 != "") {
      document.getElementById("test").textContent = "Veuillez saisir votre nom.";
      document.getElementById("test").style.color = "red";
    }
    if (verif2 == "" && verif1 != "" || verif3 != "" || verif4 != "") {
      document.getElementById("test").textContent = "Veuillez saisir votre prénom.";
      document.getElementById("test").style.color = "red";
    }
    if (verif3 == "" && verif2 != "" || verif1 != "" || verif4 != "") {
      document.getElementById("test").textContent = "Veuillez saisir votre adress email.";
      document.getElementById("test").style.color = "red";
    }
    if (verif4 == "" && verif2 != "" || verif3 != "" || verif1 != "") {
      document.getElementById("test").textContent = "Veuillez saisir votre message.";
      document.getElementById("test").style.color = "red";
    }

    document.getElementById("test").textContent = "Veuillez saisir tous les champs correctement.";
    document.getElementById("test").style.color = "red";
    e.preventDefault();

    setTimeout(() => {
      document.getElementById("test").textContent = "";

    }, 2000);


  } else {

    var data = { nom: verif1, prenom: verif2, email: verif3, message: verif4 };

    socket.emit("createMessage", data);


  }
};

document.getElementById("send").addEventListener(
  "click",
  function (event) {
    verif();
  },
  false
);

socket.on("messageCreate", function () {

  document.getElementById("test").textContent = "Votre message a bien été envoyer.";
  document.getElementById("test").style.color = "green";

  setTimeout(() => {
    document.getElementById("test").textContent = "";

  }, 2000);
})
  /*

var maFonction = function(){

  var c = document.getElementsByClassName('mySlides').child('img');
  alert(c);
  var taille = c.style.width;
  taille = ParseInt(taille);
  var verifi = window.innerWidth;
  if(verifi > 900){

  } else {

  taille = 50 +"vw";

  }
}

maFonction();
*/