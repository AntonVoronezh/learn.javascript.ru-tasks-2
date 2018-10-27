const rand = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));

const calculator = {
  read: function() {
    this.num1 = rand(1, 5);
    this.num2 = rand(6, 10);
  },
  sum: function() { return this.num1 + this.num2},
  mul: function() { return this.num1 * this.num2}
};

calculator.read();
console.log(calculator.num1 + ' - ' + calculator.num2);

console.log(calculator.sum());
console.log(calculator.mul());
