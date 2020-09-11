window.addEventListener("load", function () {
  if (window.localStorage.pageColorCookie) {
    document.body.style.backgroundColor = window.localStorage.pageColorCookie;
  }

  if (window.localStorage.fontSizeCookie) {
    document.body.style.fontSize = window.localStorage.fontSizeCookie;
  }

  var form = document.forms[0];
  form.saveBtn.addEventListener("click", function (e) {
    var options = form.bgcSelect.options;
    var selectedColor = options[options.selectedIndex].innerText;
    window.localStorage.pageColorCookie = selectedColor;
    document.body.style.backgroundColor = selectedColor;

    var selectedFontSize = form.numInput.value;
    window.localStorage.fontSizeCookie = selectedFontSize + "px";
    document.body.style.fontSize = selectedFontSize + "px";

    e.preventDefault();
  });
});
