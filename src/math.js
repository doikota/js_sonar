function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiple(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) return null;
  return x / y;
}

module.exports.add = add;
module.exports.subtract = subtract;
module.exports.multiple = multiple;
module.exports.divide = divide;
