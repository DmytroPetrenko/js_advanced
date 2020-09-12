window.onload = function () {
  document.getElementById("Btn").onclick = function () {
    httpRequest("GET", "1.html");
    httpRequest("GET", "2.html");
};

function httpRequest(method, page) {
  var xhr = new XMLHttpRequest();
    xhr.open(method, page);
    
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          document.getElementById("output").innerHTML += xhr.responseText;
        }
      }
    };

    xhr.send();
  };
}
