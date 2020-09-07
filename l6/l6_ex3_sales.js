window.addEventListener("load", init, false);

function init() {
  var btn = document.getElementById("saleBtn");

  btn.addEventListener("mouseover", btnMove, false);
}

function btnMove(e) {
var maxX = window.innerWidth;
var maxY = window.innerHeight;
var eWidth = e.target.offsetWidth + 20;
var eHeight = e.target.offsetHeight + 20;

if ((e.pageX <= eWidth) || (e.pageY <= eHeight)) {
    e.target.style.left = getRandomInt(eWidth, maxX - eWidth) + "px";
    e.target.style.top = getRandomInt(eHeight, maxY - eHeight) + "px";
} else {
    e.target.style.left = getRandomInt(0, e.pageX - eWidth) + "px";
    e.target.style.top = getRandomInt(0, e.pageY - eHeight) + "px";
}
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення 
  
  }
