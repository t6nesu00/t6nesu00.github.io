function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


function openModal1() {
  document.getElementById('myModals').style.display = "block";
}

function closeModal1() {
  document.getElementById('myModals').style.display = "none";
}


function openModal2() {
  document.getElementById('myModals2').style.display = "block";
}

function closeModal2() {
  document.getElementById('myModals2').style.display = "none";
}


function openModal3() {
  document.getElementById('myModals3').style.display = "block";
}

function closeModal3() {
  document.getElementById('myModals3').style.display = "none";
}


function openModal4() {
  document.getElementById('myModals4').style.display = "block";
}

function closeModal4() {
  document.getElementById('myModals4').style.display = "none";
}


function myFunction() {
    alert("You have Successfully booked your tickets");
}

function myFunction2() {
    alert("You have Successfully booked your tickets");
}

function myFunction3() {
    alert("You have Successfully booked your tickets");
}

function myFunction4() {
    alert("You have Successfully booked your tickets");
}