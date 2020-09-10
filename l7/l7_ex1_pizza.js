window.addEventListener("load", init, false);
window.addEventListener("load", priceInit, false);

function getPizzaForm() {
  return document.getElementById("pizzaForm");
}

function priceInit() {
  var basicPrice = document.getElementById("basicPrice");
  var price = document.getElementById("price");
  var pizza = getPizza();  

  if (pizza.pizzaSize === "Большая") {
    basicPrice.innerText = "200 грн";
  } else if (pizza.pizzaSize === "Средняя") {
    basicPrice.innerText = "150 грн";
  } else if (pizza.pizzaSize === "Маленькая") {
    basicPrice.innerText = "100 грн";
  }
}

function getPizza() {
  pizzaForm = getPizzaForm();
  var pizza = new Object();
  for (let i = 0; i < pizzaForm.elements.length; i++) {
    const element = pizzaForm.elements[i];
    if (element.id == "selectPizzaSize") {
      pizza.pizzaSize = element.value;
    }
  }
  return pizza;
}

function init() {
  var pizzaForm = getPizzaForm();
  var flag = true;

  pizzaForm.addEventListener(
    "submit",
    function (event) {
      if (pizzaForm.checkValidity() === false) {
        flag = false;
        event.preventDefault();
        event.stopPropagation();
      }
      pizzaForm.classList.add("was-validated");
      event.preventDefault();
    },
    false
  );

  if (flag === true) {
    var closeOrderCard = document.getElementById("closeOrderCard");

    pizzaForm.addEventListener("submit", initOrder, false);
    pizzaForm.addEventListener("submit", getOrderCard, false);
    closeOrderCard.addEventListener("click", hideOrderCard, false);
    getPizzaForm().addEventListener("change", priceInit, false);
  }
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
