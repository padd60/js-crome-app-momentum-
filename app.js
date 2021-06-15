const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  squared: function (a, b) {
    return a ** b;
  },
};

const addresult = calculator.add(2, 3);
const minusresult = calculator.minus(addresult, 10);
const multiplyresult = calculator.multiply(10, minusresult);
const divideresult = calculator.divide(multiplyresult, addresult);
const squaredresult = calculator.squared(divideresult, minusresult);
