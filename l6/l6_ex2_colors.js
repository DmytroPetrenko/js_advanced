window.addEventListener("load", init, true);

function init() {
  document
    .getElementById("colorButtons")
    .addEventListener("click", buttonHandler, true);
}

function buttonHandler(e) {
  var pes = document.getElementsByTagName("p");

  if (e.target.id == "buttonR") {
    Array.prototype.forEach.call(pes, (p) => {
      p.style = "color:red;";
    });
  } else if (e.target.id == "buttonG") {
    Array.prototype.forEach.call(pes, (p) => {
      p.style = "color:green;";
    });
  } else if (e.target.id == "buttonB") {
    Array.prototype.forEach.call(pes, (p) => {
      p.style = "color:blue;";
    });
  } else e.preventDefault();
}
