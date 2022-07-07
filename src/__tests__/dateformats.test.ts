import '../index';

test('toDatetimeFormat', () => {
  let d = new Date(2022, 6, 6, 22, 0);
  expect(d.toDatetimeFormat()).toBe('2022-07-06 22:00');
});
test('YYYYMMDDHHMMSS', () => {
  let d = new Date(2022, 6, 6, 22, 0);
  expect(d.YYYYMMDDHHMMSS()).toBe('20220706220000');
});

test('todashed_datetime', () => {
  //YYYY-MMDDTHH:MM:SS
  let d = new Date(2022, 6, 6, 22, 0);
  expect(d.YYYY_MM_DDTHHMMSS()).toBe('2022-07-06T22:00:00');
});
