function Ctor(a, b) {
  this.a = a;
  this.b = b;

  this.M = function () {
    return this.a + this.b;
  };
}

Ctor.prototype.pi = 3.14;

Ctor.prototype.StaticM = function () {
  return this.a * this.b;
};

var number1 = new Ctor(3, 4);
var number2 = new Ctor(5, 6);

document.writeln(
  "Number1 values: " + number1.a + " " + number1.b + " " + number1.pi + "<br />"
);
document.writeln("Methods result: " + number1.M() + " " + number1.StaticM() + "<br />");

document.writeln(
  "Number2 values: " + number2.a + " " + number2.b + " " + number2.pi + "<br />"
);
document.writeln("Methods result: " + number2.M() + " " + number2.StaticM() + "<br />");
