import '../index';
import { ExtendDate, Formats } from '../ExtendDate';

test('toDatetimeFormat', () => {
  let d = new Date(2022, 6, 6, 22, 0);
  expect(d.toDatetimeFormat()).toBe('2022-07-06 22:00');
});

test('YYYYMMDDHHMMSS', () => {
  let d = new Date(2022, 6, 6, 22, 0);
  expect(d.toYYYYMMDDHHMMSS()).toBe('20220706220000');
});

test('todashed_datetime', () => {
  let d = new Date(2022, 6, 6, 22, 0);
  expect(d.toYYYY_MM_DDTHHMMSS()).toBe('2022-07-06T22:00:00');
});

test('fromYYYY_MM_DD', () => {
  let str = '2022-07-31';
  let d = ExtendDate.dateFrom(str, Formats['YYYY-MM-DD'])!.toDateString();
  expect(d).toBe('Sun Jul 31 2022');
});

test('from_Month_Day_Year_with_leading_zeros', () => {
  let str = '07/31/2022';
  let d = ExtendDate.dateFrom(str, Formats['MM/DD/YY'])!.toDateString();
  expect(d).toBe('Sun Jul 31 2022');
});

test('from_Month_Day_Year_with_no_zeros', () => {
  let str = '7/31/2022';
  let d = ExtendDate.dateFrom(str, Formats['MM/DD/YY'])!.toDateString();
  expect(d).toBe('Sun Jul 31 2022');
});

test('from_Year_Month_Day_with_leading_zeros', () => {
  let str = '2022/07/31';
  let d = ExtendDate.dateFrom(str, Formats['YY/MM/DD'])!.toDateString();
  expect(d).toBe('Sun Jul 31 2022');
});
