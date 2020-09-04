var savedText = "";

function f(e) {
  var textbox = document.getElementById("textbox");
  if (textbox.value != savedText) {
    return "Вы не сохранили данные. Вы уверенны что хотите покинуть страницу?";
  } else {
    e.preventDefault();
  }
}

function saveInfo() {
  var textbox = document.getElementById("textbox");
  savedText = textbox.value;
}

document.getElementById("savebtn").addEventListener("click", saveInfo, true);
window.addEventListener("beforeunload", f, true);
