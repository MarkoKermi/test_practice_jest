const reverseString = require('./reverse_string');

test('tenis player', () => {
  expect(reverseString('player')).toBe('reyalp');
});

test('if the string is empty should return error', () => {
  expect(reverseString('')).toBe("The string is empty it can't be reversed");
});
