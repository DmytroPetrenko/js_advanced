window.addEventListener("load", function () {
  var savedColor = findCookieValue("pageColorCookie");
  if (savedColor) {
      document.body.style.backgroundColor = savedColor;
  }

  var form = document.forms[0];
  form.saveBtn.addEventListener("click", function (e) {
    var options = form.bgcSelect.options;
    var selectedColor =
      options[options.selectedIndex].innerText;
    document.cookie =
      "pageColorCookie=" + encodeURIComponent(selectedColor) + ";max-age=" + 60 * 60;
    document.body.style.backgroundColor = selectedColor;
    e.preventDefault(); // спробувати видалити вкінці
  });
});

function findCookieValue(cookieName) {
    var allcookies = document.cookie;
    var pos = allcookies.indexOf(cookieName + "=");

    if (pos != -1) {
        var start = pos + cookieName.length + 1;
        var end = allcookies.indexOf(";", start);

        if (end == -1) {
            end = allcookies.length;
        }

        var value = allcookies.substring(start, end);
        value = decodeURIComponent(value);
        return value;
    }
}
