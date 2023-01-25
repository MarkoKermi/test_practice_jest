const capitalize = require('./capitalize');

test('string engineer needs to be Engineer', () => {
  expect(capitalize('engineer')).toBe('Engineer');
});

test('the format of string 0engineer is invalid', () => {
  expect(capitalize('0engineer')).toBe('Invalid format');
});
