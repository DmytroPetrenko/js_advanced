class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    this.hello = function () {
      document.write(
        name +
          ", " +
          age +
          " years old man. Said: " +
          this.word +
          ". And we all are human." +
          "<br />"
      );
    };
  }
}

Human.prototype.name = "HumanName";
Human.prototype.age = 999999;
Human.prototype.word = "puppy";

var tolia = new Human("Tolia", 24);
tolia.word = "Cat";
tolia.hello();

var katty = new Human("Katty", 45);
katty.hello();
