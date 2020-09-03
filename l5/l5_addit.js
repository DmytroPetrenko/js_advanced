window.addEventListener(
  "load",
  function () {
    var numbers = document.getElementById("numbers");
    var buttons = document.getElementById("buttons");

    buttons.addEventListener("click", function (e) {
      if (
        !(
          document.getElementById("num1").value.match(/^\d+$/) &&
          document.getElementById("num2").value.match(/^\d+$/)
        )
      ) {
        document.getElementById("warning").innerHTML = "Just digit pls!";
      }
    });

    buttons.addEventListener("click", function (e) {
      var result;
      var num1 = parseInt(document.getElementById("num1").value, 10);
      var num2 = parseInt(document.getElementById("num2").value, 10);
      var oper = document.getElementById("operation");

      if (e.target.value === "+") {
        result = num1 + num2;
        oper.innerHTML = "+";
      } else if (e.target.value === "-") {
        result = num1 - num2;
        oper.innerHTML = "-";
      } else if (e.target.value === "*") {
        result = num1 * num2;
        oper.innerHTML = "*";
      } else if (e.target.value === "/") {
        result = num1 / num2;
        oper.innerHTML = "/";
      }

      document.getElementById("output").innerHTML = "Result: " + result;
    });

    numbers.addEventListener(
      "keypress",
      function (e) {
        if (!String.fromCharCode(e.charCode).match(/\d/)) {
          e.preventDefault();
        }
      },
      true
    );

    numbers.addEventListener(
      "click",
      function (e) {
        if (e.target.value === "0") {
          e.target.value = "";
        }
      },
      true
    );

    numbers.addEventListener(
      "blur",
      function (e) {
        if (e.target.value == "") {
          e.target.value = "0";
        }
      },
      true
    );
  },
  false
);
