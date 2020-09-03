window.onload = function () {
  setInterval(boxChanger, 1000);
};

function boxChanger() {
  var divs = new Array();
  divs = document.getElementsByTagName("div");

  Array.prototype.forEach.call(divs, (div) => {
      var xy = getRandomPosition();
    div.style =
      "background-color: " +
      getRandomColor() +
      "; border: 5px solid " +
      getRandomColor() +
      "; top: " + xy[1] + "px; left: " + xy[0] + "px;";
  });
}

function getRandomPosition() {
    const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
    

    var x = window.innerWidth ;
    var y = window.innerHeight;
    
	var randomX = getRandom(0, x-200);
	var randomY = getRandom(0, y-200);
	return [randomX,randomY];
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
