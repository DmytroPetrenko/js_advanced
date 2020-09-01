window.onload = function () {
  var date = new Date();
  date.setTime(0);
  var intervalHandler;

  function count() {
    date.setMilliseconds(date.getMilliseconds() + 1000);

    var time = date.valueOf() / 1000;
    var d = Math.floor(
      time / (24 * 60 * 60)
    ); /* though I hope she won't be working for consecutive days :) */
    time = time - d * 24 * 60 * 60;
    var h = Math.floor(time / (60 * 60));
    time = time - h * 60 * 60;
    var m = Math.floor(time / 60);
    time = time - m * 60;
    var s = time;

    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }

    get("output_textbox").innerHTML = h + ":" + m + ":" + s;
  }

  get("startButton").onclick = function () {
    intervalHandler = setInterval(count, 1000);
  };

  get("stopButton").onclick = function () {
    clearInterval(intervalHandler);
  };

  get("clearButton").onclick = function () {
    date.setTime(0);
    get("output_textbox").innerHTML = "00:00:00";
  };
};

var get = function (id) {
  return document.getElementById(id);
};
