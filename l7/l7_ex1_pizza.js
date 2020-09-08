window.addEventListener("load", init, false);

function init() {
  var pizzaForm = document.getElementById("pizzaForm");

  pizzaForm.addEventListener("submit", initOrder, false);
}

function initOrder(e) {
  var formElements = e.target.elements;

  Array.prototype.forEach.call(formElements, function (element) {
    if (element.id == "selectPizzaSize") {
      var pizzaSize = element.value;
      var test = document.getElementById("size-answer");

      document.getElementById("size-answer").innerHTML = pizzaSize;
    }
  });
}
