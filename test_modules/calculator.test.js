const calculator = require('./calculator');

describe('adding', () => {
  test('2 and 5 are 7', () => {
    expect(calculator.add(2, 5)).toBe(7);
  });

  test('0 and 0 not correct', () => {
    expect(calculator.add(0, 0)).toBe('The x & y values are 0');
  });

  test('10 and 0 equals 10', () => {
    expect(calculator.add(10, 0)).toBe(10);
  });
});

describe('substracting', () => {
  test('5 and 2 are 3', () => {
    expect(calculator.substract(5, 2)).toBe(3);
  });

  test('5 and 0 not correct', () => {
    expect(calculator.substract(5, 0)).toBe('Result remains ${x}');
  });

  test('5 and 10 equals -5', () => {
    expect(calculator.substract(5, 10)).toBe(-5);
  });
});

describe('dividing', () => {
  test('6 and 2 is 3', () => {
    expect(calculator.devide(6, 2)).toBe(3);
  });

  test('5 and 0 is 0', () => {
    expect(calculator.devide(5, 0)).toBe('y value is 0, the result remains 0');
  });

  test('10 and 3 equals 3.3333333333333335', () => {
    expect(calculator.devide(10, 3)).toBe(3.3333333333333335);
  });

  test('-10 and 3 equals -3.3333333333333335', () => {
    expect(calculator.devide(-10, 3)).toBe(-3.3333333333333335);
  });
});

describe('multiplying', () => {
  test('6 and 2 is 12', () => {
    expect(calculator.multiply(6, 2)).toBe(12);
  });

  test('5 and 0 is 0', () => {
    expect(calculator.multiply(5, 0)).toBe('result remains ${y}');
  });

  test('10 and 10 equals 100', () => {
    expect(calculator.multiply(10, 10)).toBe(100);
  });

  test('1.55 and 3 equals 4.65', () => {
    expect(calculator.multiply(1.55, 3)).toBe(4.65);
  });
});
