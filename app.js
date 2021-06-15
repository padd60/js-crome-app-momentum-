const calculator = {
  add: function (a, b) {
    console.log("hello");
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
