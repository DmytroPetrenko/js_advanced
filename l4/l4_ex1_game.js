var text = new String("");
var counter = 0;
var num;

window.onload = function () {
  setInterval(getAnswer, 1000);
};

function takeInfo() {
  text = document.getElementById("textbox");
  return text.value;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення
}

function randomize() {
  if (counter == 0) {
    num = getRandomInt(1, 100);
    counter++;
  }
  var plNum = takeInfo();
  var answer;
  if (plNum.toString().match(/^\d+$/)) {
    if (num < plNum) {
      answer = "Загадочное значение меньше введенного вами";
    } else if (num > plNum) {
      answer = "Загадочное значение больше введенного вами";
    } else {
      answer = "Вы угадали! Поздравляю!";
    }
  } else {
    answer = "Enter a number pls!";
  }

  return answer;
}

function getAnswer() {
  document.getElementById("answerbox").innerHTML = randomize();
}
