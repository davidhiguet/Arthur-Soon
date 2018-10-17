'use strict';


window.onload = function () {

  var socket = io.connect("http://localhost:3000");
  /*////////CUBE////////*/

  $(".homelink").click(function() {
    calcRotation(0);
  });

  $(".aboutLink").click(function() {
    calcRotation(90);
  });

  $(".newsLink").click(function() {
    calcRotation(180);
  });

  $(".contactLink").click(function() {
    calcRotation(270);
  });
  $(".top").click(function() {
    calcRotate(90, 0);
  });
  $(".bottom").click(function() {
    calcRotate(270, 0);
  });
  function calcRotation(rot) {
    $("#cube").css("transform", "rotateY(-" + rot + "deg)");
  }
  function calcRotate(rotat, tran) {
    $("#cube").css("transform", "rotateX(-" + rotat + "deg)  translateZ(" + tran + "px)");
  }

  /*////////MENU OBJECTIF EN RESPONSIVE////////*/

  $("#menu-button").on("click", function() {
    $(document.body).toggleClass("menu-open");
  });
  setTimeout(function() {
    $(".presentation").fadeOut("1000");
  }, 3700);

  /*////////AJAX COPYRIGHT////////*/

  $("#cpy").on("click", function() {
    afficherenajax("copyright.txt");
    $("#couverture").show();
  });

  $("#couverture").on("click", function() {
    $("#couverture").hide();
  });
  function afficherenajax(fichier) {
    $.get("/ressources/" + fichier, function(data) {
      $("#popup_contenu").html(data);
      $("couverture").show();
    });
  }


  var slideIndex = 1;
  showSlides(slideIndex);

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
   /* slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;*/
  }



  /*/ ///////FORMULAIRE////////*/

  var verif = function(e) {

    var form = document.getElementById("formulaire");
    var verif1 = document.getElementById("nom").value;
    var verif2 = document.getElementById("prenom").value;
    var verif3 = document.getElementById("email").value;
    var verif4 = document.getElementById("message").value;

    if (verif1 == "" || verif2 == "" || verif3 == "" || verif4 == "") {

      if (verif1 == "" && verif2 != "" && verif3 != "" && verif4 != "") {
        document.getElementById("test").textContent = "Veuillez saisir votre nom.";
        document.getElementById("test").style.color = "red";
        setTimeout(() => {
          document.getElementById("test").textContent = "";
        }, 2000);
      }

      if (verif2 == "" && verif1 != "" && verif3 != "" && verif4 != "") {
        document.getElementById("test").textContent =
          "Veuillez saisir votre prénom.";
        document.getElementById("test").style.color = "red";
        setTimeout(() => {
          document.getElementById("test").textContent = "";
        }, 2000);
      }

      if (verif3 == "" && verif2 != "" && verif1 != "" && verif4 != "") {
        document.getElementById("test").textContent =
          "Veuillez saisir votre adress email.";
        document.getElementById("test").style.color = "red";
        setTimeout(() => {
          document.getElementById("test").textContent = "";
        }, 2000);
      }

      if (verif4 == "" && verif2 != "" && verif3 != "" && verif1 != "") {
        document.getElementById("test").textContent =
          "Veuillez saisir votre message.";
        document.getElementById("test").style.color = "red";
        setTimeout(() => {
          document.getElementById("test").textContent = "";
        }, 2000);
      }

      if (verif2 == "" && verif1 == "" && verif3 == "" && verif4 == "") {
        document.getElementById("test").textContent ="Veuillez saisir tous les champs correctement.";
        document.getElementById("test").style.color = "red";
      }
      setTimeout(() => {
        document.getElementById("test").textContent = "";
      }, 2000);

    } else {
      console.log("envoi")
      var data = {
        nom: verif1,
        prenom: verif2,
        email: verif3,
        message: verif4
      };

      socket.emit("createMessage", data);
    }
  };

  document.getElementById("send").addEventListener("click", function(event) {
      event.preventDefault();
      verif();

  },false);

  socket.on("messageCreate", function() {
    console.log("envoiiiiiiiiiiiiiii");
    document.getElementById("test").textContent = "Votre message a bien été envoyer.";
    document.getElementById("test").style.color = "green";
    document.getElementById("nom").value= '';
    document.getElementById("prenom").value= '';
    document.getElementById("email").value= '';
    document.getElementById("message").value= '';
    setTimeout(() => {
      document.getElementById("test").textContent = "";
    }, 2000);
  });
};