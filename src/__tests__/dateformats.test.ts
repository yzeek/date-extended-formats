import "../index";
import { ExtendDate } from "../ExtendDate";
import { Formats } from "../FormatsEnum";
import { test, expect } from "@jest/globals";

test("fromYYYY_MM_DD", () => {
  let str = "2022-07-31";
  let d = ExtendDate.dateFrom(str, Formats["YYYY-MM-DD"])!.toDateString();
  expect(d).toBe("Sun Jul 31 2022");
});
test("from_Month_Day_Year_with_leading_zeros", () => {
  let str = "07/31/2022";
  let d = ExtendDate.dateFrom(str, Formats["MM/DD/YY"])!.toDateString();
  expect(d).toBe("Sun Jul 31 2022");
});
test("from_year_month_date_hours_minutes", () => {
  let str = "2022-07-29 04:15";
  let d = ExtendDate.dateFrom(str, Formats["YYYY-MM-DD HH:MM"])!.toFormat(Formats["YYYY-MM-DD HH:MM"]);
  expect(d).toBe("2022-07-29 04:15");
});

test("from_year_month_date_hours_minutes invalid date", () => {
  let str = "2022-07-32 04:15";
  // let d = !.toFormat(Formats['YYYY-MM-DD HH:MM']);
  expect(() => {
    ExtendDate.dateFrom(str, Formats["YYYY-MM-DD HH:MM"]);
  }).toThrow("Invalid date Error");
});

test("from_year_month_date_hours_minutes_seconds YYYYMMDDHHMMSS", () => {
  let str = "20220731123559";
  let d = ExtendDate.dateFrom(str, Formats["YYYYMMDDHHMMSS"]);
  expect(d?.toString()).toBe("Sun Jul 31 2022 12:35:59 GMT+0300 (Israel Daylight Time)");
});
test("from_Month_Day_Year_with_no_zeros", () => {
  let str = "7/31/2022";
  let d = ExtendDate.dateFrom(str, Formats["MM/DD/YY"])!.toDateString();
  expect(d).toBe("Sun Jul 31 2022");
});
test("from_Year_Month_Day_with_leading_zeros", () => {
  let str = "2022/07/31";
  let d = ExtendDate.dateFrom(str, Formats["YY/MM/DD"])!.toDateString();
  expect(d).toBe("Sun Jul 31 2022");
});
test("from_date_month_year_with_slashes", () => {
  let str = "31/07/2022";
  let d = ExtendDate.dateFrom(str, Formats["DD/MM/YY"])!.toDateString();
  expect(d).toBe("Sun Jul 31 2022");
});
test("to_format MM/DD/YY", () => {
  let str = "2022/07/31";
  let d = ExtendDate.dateFrom(str, Formats["YY/MM/DD"]);
  let r = d?.toFormat(Formats["MM/DD/YY"]);
  expect(r).toBe("07/31/2022");
});
test("to_format MM/DD/YY", () => {
  let str = "2022/07/31";
  let d = ExtendDate.dateFrom(str, Formats["YY/MM/DD"]);
  let r = d?.toFormat(Formats["DD/MM/YY"]);
  expect(r).toBe("31/07/2022");
});

test("to_format YYYY-MMDDTHH:MM:SS", () => {
  let d = new Date(2022, 6, 6, 22, 0);
  expect(d.toFormat(Formats["YYYY-MMDDTHH:MM:SS"])).toBe("2022-07-06T22:00:00");
});
test("to_format ", () => {
  let d = new Date(2022, 6, 29, 22, 0);
  expect(d.toFormat(Formats["YYYY-MM-DD"])).toBe("2022-07-29");
});
test("to_year_month_date_with_slashes ", () => {
  let d = new Date(2022, 6, 29, 22, 0);
  expect(d.toFormat(Formats["DD/MM/YY"])).toBe("29/07/2022");
});
test("to_year_month_date_hours_minutes ", () => {
  let d = new Date(2022, 6, 29, 22, 59);
  expect(d.toFormat(Formats["YYYY-MM-DD HH:MM"])).toBe("2022-07-29 22:59");
});
test("date error ", () => {
  let str = "2022/15/42";
  expect(() => {
    ExtendDate.dateFrom(str, Formats["YY/MM/DD"]);
  }).toThrow("Invalid date Error");
});
test("invalid time", () => {
  let str = "2022-07-31 04:69";
  // let d = !.toFormat(Formats['YYYY-MM-DD HH:MM']);
  expect(() => {
    ExtendDate.dateFrom(str, Formats["YYYY-MM-DD HH:MM"]);
  }).toThrow("Invalid time Error");
});
test("to_year_month_date_hours_minutes_seconds ", () => {
  let d = new Date(2022, 6, 29, 22, 59, 50);
  expect(d.toFormat(Formats["YYYYMMDDHHMMSS"])).toBe("20220729225950");
});
test("to_year_month_date_hours_minutes ", () => {
  let str = "202209151600";
  let d = ExtendDate.dateFrom(str, Formats["YYYYMMDDHHMM"]);
  let r = d?.toFormat(Formats["MM/DD/YY"]);
  expect(r).toBe("09/15/2022");
});
test("spread ", () => {
  let d = new Date(2022, 8, 15, 22, 59, 50);
  const { date, dayLetter, hebMonth, year } = d.spreadDate();
  expect(date).toBe("15");
  expect(dayLetter).toBe("ה");
  expect(hebMonth).toBe("ספטמבר");
  expect(year).toBe("2022");
});
