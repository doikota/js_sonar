function index() {
  const math = require('../src/math');

  let a = 5;
  let b = 3;

  console.log(a + ' + ' + b + ' = ' + math.add(a, b));
  console.log(a + ' - ' + b + ' = ' + math.subtract(a, b));
  console.log(a + ' * ' + b + ' = ' + math.multiple(a, b));
  console.log(a + ' / ' + b + ' = ' + math.divide(a, b));
}

index();

module.exports.index = index;
