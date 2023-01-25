class calculator {
  static add(x, y) {
    if (x === 0 && y === 0) {
      return "The x & y values are 0";
    }
    return x + y;
  }

  static substract(x, y) {
    if ((x !== 0) & (y === 0)) {
      return "Result remains ${x}";
    }
    return x - y;
  }

  static devide(x, y) {
    if (x !== 0 && y === 0) {
      return "y value is 0, the result remains 0";
    }
    return x / y;
  }

  static multiply(x, y) {
    if (x !== 0 && y === 0) {
      return "result remains ${y}";
    }
    return x * y;
  }
}

module.exports = calculator;
