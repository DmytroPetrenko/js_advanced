window.onload = function () {
  var args = getQueryString();
  var e = document.createElement("p");

  e.innerHTML = "сумма " + args.sum + "<br />";

  document.body.appendChild(e);
};

function getQueryString() {
  var args = {};

  var query = location.search.substring(1);
  var pairs = query.split("&");
  var values = new Array();

  for (let i = 0; i < pairs.length; i++) {
    const element = pairs[i];

    var pos = pairs[i].indexOf("=");
    if (pos == -1) {
      continue;
    }

    values[i] = pairs[i].substring(pos + 1);
  }

  var sum = 0;
  for (let i = 0; i < values.length; i++) {
    const element = values[i];
    sum += parseInt(values[i]);
  }

  args.sum = sum;

  return args;
}
