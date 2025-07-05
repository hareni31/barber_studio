var menuBtn = document.getElementById("menuBtn");
var sidenav = document.getElementById("sidenav");
var menu = document.getElementById("menu");
sidenav.style.right = "-250px";

menuBtn.onclick = function () {
  if (sidenav.style.right == "-250px") {
    sidenav.style.right = "0";
    menu.src = "images/close.png";
  } else {
    sidenav.style.right = "-250px";
    menu.src = "images/menu.png";
  }
};

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1500,
  speedAsDuration: true,
});
