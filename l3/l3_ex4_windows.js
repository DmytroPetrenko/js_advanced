var tags;
var w;
var status = 1;

window.onload = function () {
  //document.getElementById("l3_ex4_lp1").onclick = onclickHandler;

  tags = document.getElementsByTagName("a");

  initializing();
};

function onclickHandler(id) {
  var num = document.getElementById(id).innerText.match(/\d/).slice(-1);

  if (status == 1) {
    document.getElementById(id).innerText = "JS Lesson №" + num + " (opened)";
    w = window.open(
      id + ".html",
      "1111",
      "width=400, height=400, left=400, top=400"
    );
    status = 2;

    for (var i = 0; i < tags.length; i++) {
      if (tags[i].id != id) {
        document.getElementById(tags[i].id).style =
          "pointer-events: none; color: #ccc;";
      }
    }
  } else if (status == 2) {
    document.getElementById(id).innerText = "JS Lesson №" + num;
    w.close();
    status = 1;

    for (var i = 0; i < tags.length; i++) {
        if (tags[i].id != id) {
          document.getElementById(tags[i].id).style =
            "pointer-events: auto; color: -webkit-link;";
        }
      }
  }
}

function tagsUpdater(tags) {
  for (var i = 0; i < tags.length; i++) {
    tags[i].onclick = function () {
      document.getElementById(this.id).onclick = onclickHandler(this.id);
      initializing();
    };
  }
}

function initializing() {
  tagsUpdater(tags);
}
