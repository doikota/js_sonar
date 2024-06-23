const math = require('../src/math');

test('able to add', function () {
  expect(math.add(6, 2)).toBe(8);
});

test('able to subtract', function () {
  expect(math.subtract(6, 2)).toBe(4);
});

test('able to multiple', function () {
  expect(math.multiple(6, 2)).toBe(12);
});

test('able to divide', function () {
  expect(math.divide(6, 2)).toBe(3);
});

test('not able to divide', function () {
  expect(math.divide(6, 0)).toBe(null);
});
