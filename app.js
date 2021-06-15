function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("junghwan", 27);
sayHello("kim", 25);
sayHello("john", 30);

function plus(a, b) {
  console.log(a + b);
}

plus(8, 60);

function divide(a, b) {
  console.log(a / b);
}

divide(98, 20);

const player = {
  name: "kim",
  sayBye: function (personName) {
    console.log("Bye! " + personName);
  },
};

console.log(player.name);
player.sayBye("junghwan");
player.sayBye("john");
