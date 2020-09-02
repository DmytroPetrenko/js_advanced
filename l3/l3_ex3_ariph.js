var text = new String("");

window.onload = function () {
   text = document.getElementById("textInput");
   setInterval(checkTextInput, 1000);
   //text.value = "15+5";
   //checkTextInput();
};

function checkTextInput() {
  document.getElementById("output").innerHTML = calculate(matchNumbers(splitText()), getArithmeticalOperator());
}

function splitText() {
  if (~text.value.indexOf("+")) {
    var pair = text.value.split("+");
  }
  else if (~text.value.indexOf("-")) {
    var pair = text.value.split("-");
  }
  else if (~text.value.indexOf("*")) {
    var pair = text.value.split("*");
  }
  else if (~text.value.indexOf("/")) {
    var pair = text.value.split("/");
  }
  else {
    return 0;
  }
  return pair;
}

function matchNumbers(pair) {
  var pattern = /\d+/;
  var numbers = new Array(2);
  if (pattern.test(pair[0]) && pattern.test(pair[1])) {
    numbers[0] = parseInt(pair[0]);
    numbers[1] = parseInt(pair[1]);
  }
  else {
    return 0;
  }
  return numbers;
}

function getArithmeticalOperator() {
  if (~text.value.indexOf("+")) {
    var arithmeticalOperator = text.value.charAt(text.value.indexOf("+"));
  }
  else if (~text.value.indexOf("-")) {
    var arithmeticalOperator = text.value.charAt(text.value.indexOf("-"));
  }
  else if (~text.value.indexOf("*")) {
    var arithmeticalOperator = text.value.charAt(text.value.indexOf("*"));
  }
  else if (~text.value.indexOf("/")) {
    var arithmeticalOperator = text.value.charAt(text.value.indexOf("/"));
  }
  else {
    return 0;
  }
  return arithmeticalOperator;
}

function calculate(numbers, arithmeticalOperator) {
  if (arithmeticalOperator == "+") {
    var sum = numbers[0] + numbers[1];
  }
  else if (arithmeticalOperator == "-") {
    var sum = numbers[0] - numbers[1];
  }
  else if (arithmeticalOperator == "*") {
    var sum = numbers[0] * numbers[1];
  }
  else if (arithmeticalOperator == "/") {
    var sum = numbers[0] / numbers[1];
  }
  return sum;
}
