var counter = 0;
window.addEventListener("load", init, false);

function init() {
  //document.addEventListener("keypress", press, true);
  document.addEventListener("keydown", press, true);
}

function press(e) {
  e.preventDefault();

  if (e.ctrlKey == true && e.shiftKey == false && e.keyCode == 83) {
    counter++;
    print("Сохранено");
  } else if (e.shiftKey == true && e.ctrlKey == true && e.keyCode == 83) {
    counter++;
    print("Сохранено все");
  } else if (e.ctrlKey == true && e.keyCode == 65) {
    counter++;
    print("Выбрано все");
  }
}

function print(message) {
  var output = document.getElementById("output");
  output.style = "animation-iteration-count: " + counter + ";";
  output.innerHTML = message;
}
