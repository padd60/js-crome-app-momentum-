const age = parseInt(prompt("how old are you?"));

if (isNaN(age) || age < 0) {
  console.log("please write positive number");
} else if (age < 18) {
  console.log("you are too young");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink!");
} else if (age > 50 && age <= 80) {
  console.log("you should exercise!");
} else {
  console.log("you can't drink!");
}

true || true === true;
true || false === true;
false || true === true;
false || false === false;

true && true === true;
true && false === false;
false && true === false;
false && false === false;
