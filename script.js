//Buttons
function goToManoDarbai() {
    location.replace("pages/mano_darbai.html")
}

function goToPaslauguKainos() {
    location.replace("pages/paslaugu_kainos.html")
}


function goToRegistracija() {
    location.replace("pages/registracija.html")
}

function goToApieMane2() {
    location.replace("../index.html")
}

function goToManoDarbai2() {
    location.replace("mano_darbai.html")
}

function goToPaslauguKainos2() {
    location.replace("paslaugu_kainos.html")
}


function goToRegistracija2() {
    location.replace("registracija.html")
}

//slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//validation form

function validateForm() {
    var email = document.forms["myForm"]["femail"].value;
    var text = document.forms["myForm"]["ftext"].value;

    if (email == "" && text == "") {
        alert("Turite įvesti elektroninį adresą ir tekstą");
        return false;
    }

    if (email == "") {
        alert("Turite įvesti elektroninį adresą");
        return false;
    }

    if (text == "") {
        alert("Turite įvesti tekstą");
        return false;
    }

    alert("Dėkojame, iki pasimatymo!");
}
