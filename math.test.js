// math.test.js
const { add, subtract, myMultiplication } = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies 5 * 5 to equal 25', () => {
  expect(myMultiplication(5, 5)).toBe(25);
})


