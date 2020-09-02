var tags;

window.onload = function () {
  //document.getElementById("l3_ex4_lp1").onclick = onclickHandler;

  tags = document.getElementsByTagName("a");

  initializing();
};

function onclickHandler(id) {
  window.open(id + ".html", "1111", "width=400, height=400");
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
