window.addEventListener("load", init, false);
window.addEventListener("load", priceInit, false);

function getPizzaForm() {
  return document.getElementById("pizzaForm");
}

function priceInit() {
  var basicPrice = document.getElementById("basicPrice");
  var priceElem = document.getElementById("price");
  var price = 0;
  var pizza = getPizza();

  if (pizza.pizzaSize === "Большая") {
    basicPrice.innerText = "200 грн";
    price = 200;
  } else if (pizza.pizzaSize === "Средняя") {
    basicPrice.innerText = "150 грн";
    price = 150;
  } else if (pizza.pizzaSize === "Маленькая") {
    basicPrice.innerText = "100 грн";
    price = 100;
  }

  for (let i = 0; i < pizza.inputs.length; i++) {
    const input = pizza.inputs[i];
    if (input.checked == true) {
      if (input.labels[0].innerText.match("Сыр")) {
        price += 30;
      }
      if (input.labels[0].innerText.match("Грибы")) {
        price += 20;
      }
      if (input.labels[0].innerText.match("Бекон")) {
        price += 50;
      }
      if (input.labels[0].innerText.match("Помидоры")) {
        price += 15;
      }
      if (input.labels[0].innerText.match("Оливки")) {
        price += 25;
      }
    }
  }

  priceElem.innerText = price + " грн";
}

function getPizza() {
  pizzaForm = getPizzaForm();
  var pizza = new Object();
  pizza.inputs = new Array();
  for (let i = 0; i < pizzaForm.elements.length; i++) {
    const element = pizzaForm.elements[i];
    if (element.id == "selectPizzaSize") {
      pizza.pizzaSize = element.value;
    }
    if (element.id.match("additional-ingridients")) {
      pizza.inputs.push(element);
    }
  }
  return pizza;
}

function init() {
  var closeOrderCard = document.getElementById("closeOrderCard");
  var pizzaForm = getPizzaForm();

  pizzaForm.addEventListener(
    "submit",
    function (event) {
      setOrderCardVisible(pizzaForm.checkValidity());
      pizzaForm.classList.add("was-validated");
      event.preventDefault();
    },
    false
  );

  pizzaForm.addEventListener("submit", initOrder, false);
  getPizzaForm().addEventListener("change", priceInit, false);
}

function setOrderCardVisible(isValid) {
  orderCard = document.getElementById("orderCard");
  orderCard.className = `container fixed-top ${
    isValid ? "visible" : "invisible"
  }`;
  getPizzaForm().classList.remove("was-validated");
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

  document.getElementById("price-answer").innerHTML = document.getElementById(
    "price"
  ).innerHTML;

  e.preventDefault();
}
