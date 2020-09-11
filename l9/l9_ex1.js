window.onload = function () {
  var buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.onclick = () =>
      (document.getElementById("img").src = "img/" + (i + 1) + ".png");
  }
};
