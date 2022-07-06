import '../index';

test('My Greeter', () => {
  let d = new Date(2022, 6, 6, 22, 0);
  expect(d.toDatetimeFormat()).toBe('2022-07-06 22:00');
});

