window.addEventListener("load", init, false);

function init() {
  var pizzaForm = document.getElementById("pizzaForm");
  var closeOrderCard = document.getElementById("closeOrderCard");

  pizzaForm.addEventListener("submit", initOrder, false);
  pizzaForm.addEventListener("submit", getOrderCard, false);
  closeOrderCard.addEventListener("click", hideOrderCard, false);
}

function hideOrderCard() {
    orderCard = document.getElementById("orderCard");
    orderCard.className = "container fixed-top invisible";
}

function getOrderCard() {
    orderCard = document.getElementById("orderCard");
    orderCard.className = "container fixed-top visible";
}

function initOrder(e) {
  var formElements = e.target.elements;
  var inputs = new Array();

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.id == "selectPizzaSize") {
      var pizzaSize = element.value;

      document.getElementById("size-answer").innerHTML = pizzaSize;
    }
    if (element.id.match("additional-ingridients")) {
      inputs.push(element);
    }
    if (element.id == "phoneInput") {
        var phoneNumber = element.value;
        document.getElementById("phone-answer").innerHTML = phoneNumber;
    }
    if (element.id == "addressInput") {
        var address = element.value;
        document.getElementById("address-answer").innerHTML = address;
    }
  }

  if (inputs.length != 0) {
    if (
      document.getElementById("additional-ingridients-answer").innerHTML != ""
    ) {
      document.getElementById("additional-ingridients-answer").innerHTML = "";
    }
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.checked == true) {
        document.getElementById("additional-ingridients-answer").innerHTML +=
          "<li>" + input.labels[0].innerText + "&nbsp;</li>";
      }
      e.preventDefault();
    }
  }

  e.preventDefault();
}
