// Test 1

const stringLength = (string) => {
  if (string.length > 0 && string.length < 11) {
    return string.length;
  }
  return "Тhe result does not match the query";
};
module.exports = stringLength;
