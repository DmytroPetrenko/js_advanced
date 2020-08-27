function Human(age) {
  this.age = age;
}

var arr = new Array(10);
for (let i = 0; i < 10; i++) {
  const element = 10;

  arr[i] = new Human((i + 1) * 1.5);
  document.write(arr[i].age + " ");
}

document.write("<br />");

arr.sort().reverse();

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
  document.write(arr[i].age + " ");    
}