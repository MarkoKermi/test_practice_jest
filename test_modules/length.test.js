const stringLength = require('./length');

test('Watch has 5 latters', () => {
  expect(stringLength('Watch')).toBe(5);
});

test('Introduction has 12 latters', () => {
  expect(stringLength('Introduction')).toBe(
    'Тhe result does not match the query',
  );
});

test('lenght bellow 1 latter', () => {
  expect(stringLength('')).toBe('Тhe result does not match the query');
});
