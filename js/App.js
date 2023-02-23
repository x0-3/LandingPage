let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
}


function myFunction() {
  var x = document.getElementById("myColors");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function changeBodyBg(color){
  var background = document.getElementsByClassName("colorChange");
  var text = document.getElementsByClassName("textColorChange");

  for (var i = 0; i < background.length; i++) {
    background[i].style.background = color;
  }

  for (var i = 0; i < text.length; i++) {
    text[i].style.color = color;
  }
}
