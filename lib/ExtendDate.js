"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendDate = void 0;
var FormatesEnum_1 = require("./FormatesEnum");
/**
 * @param string: date string
 * @param Format: the format in which the Date entered
 */
function pad2(n) {
  return (n < 10 ? "0" : "") + n;
}
var ExtendDate = /** @class */ (function (_super) {
  __extends(ExtendDate, _super);
  function ExtendDate() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ExtendDate.dateFrom = function (datestring, format) {
    switch (format) {
      case FormatesEnum_1.Formats["YYYY-MM-DD"]:
        return this.fromYYYY_MM_DD(datestring);
      case FormatesEnum_1.Formats["MM/DD/YY"]:
        return this.from_Month_Day_Year_with_leading_zeros(datestring);
      case FormatesEnum_1.Formats["YY/MM/DD"]:
        return this.from_Year_Month_Day_with_leading_zeros(datestring);
      case FormatesEnum_1.Formats["DD/MM/YY"]:
        return this.from_date_month_year_with_slashes(datestring);
      case FormatesEnum_1.Formats.YYYYMMDDHHMMSS:
        return this.from_year_month_date_hours_minutes_seconds(datestring);
      case FormatesEnum_1.Formats["YYYY-MM-DD HH:MM"]:
        return this.from_year_month_date_hours_minutes(datestring);
      default:
        throw new Error("format not implemented");
    }
  };
  ExtendDate.from_year_month_date_hours_minutes = function (dateString) {
    var parts = dateString.split(" ");
    var date = parts[0];
    var dateArr = date.split("-");
    var time = parts[1];
    var timeArr = time.split(":");
    var d = new Date();
    var year = Number(dateArr[0]);
    var month = Number(dateArr[1]);
    var day = Number(dateArr[2]);
    var ds = pad2(day) + "-" + pad2(month) + "-" + year;
    if (!this.validate_Date(ds)) throw new Error("Invalid date Error");
    var hours = Number(timeArr[0]);
    var minutes = Number(timeArr[1]);
    if (!this.validateTime(hours, minutes)) throw new Error("Invalid time Error");
    d.setFullYear(year);
    d.setMonth(month - 1);
    d.setDate(day);
    d.setHours(hours);
    d.setMinutes(minutes);
    return d;
  };
  ExtendDate.from_year_month_date_hours_minutes_seconds = function (dateString) {
    var year = dateString.substring(0, 4);
    var month = dateString.substring(4, 6);
    var date = dateString.substring(6, 8);
    var hours = dateString.substring(8, 10);
    var minutes = dateString.substring(10, 12);
    var seconds = dateString.substring(12, 14);
    var ds = date + "-" + month + "-" + year;
    if (!this.validate_Date(ds)) throw new Error("Invalid date Error");
    if (!this.validateTime(Number(hours), Number(minutes), Number(seconds))) throw new Error("Invalid time Error");
    var d = new Date();
    d.setFullYear(Number(year));
    d.setMonth(Number(month) - 1);
    d.setDate(Number(date));
    d.setHours(Number(hours));
    d.setMinutes(Number(minutes));
    d.setSeconds(Number(seconds));
    return d;
  };
  ExtendDate.from_Year_Month_Day_with_leading_zeros = function (dateString) {
    var values = dateString.split("/");
    var day = Number(values[2]);
    var month = Number(values[1]);
    var year = Number(values[0]);
    var ds = pad2(day) + "-" + pad2(month) + "-" + year;
    if (!this.validate_Date(ds)) throw new Error("Invalid date Error");
    var d = new Date();
    d.setDate(day);
    d.setMonth(month - 1);
    d.setFullYear(year);
    return d;
  };
  ExtendDate.fromYYYY_MM_DD = function (dateString) {
    var values = dateString.split("-");
    var year = values[0];
    var month = values[1];
    var day = values[2];
    var ds = pad2(Number(day)) + "-" + pad2(Number(month)) + "-" + year;
    if (!this.validate_Date(ds)) throw new Error("Invalid date Error");
    var d = new Date();
    d.setDate(Number(day));
    d.setMonth(Number(month) - 1);
    d.setFullYear(Number(year));
    return d;
  };
  ExtendDate.from_Month_Day_Year_with_leading_zeros = function (dateString) {
    var values = dateString.split("/");
    var d = new Date();
    var day = Number(values[1]);
    var month = Number(values[0]);
    var year = Number(values[2]);
    var ds = pad2(day) + "-" + pad2(month) + "-" + year;
    if (!this.validate_Date(ds)) throw new Error("Invalid date Error");
    d.setMonth(month - 1);
    d.setDate(day);
    d.setFullYear(year);
    return d;
  };
  ExtendDate.from_date_month_year_with_slashes = function (dateString) {
    var values = dateString.split("/");
    var d = new Date();
    var day = Number(values[0]);
    var month = Number(values[1]);
    var year = Number(values[2]);
    var ds = pad2(day) + "-" + pad2(month) + "-" + year;
    if (!this.validate_Date(ds)) throw new Error("Invalid date Error");
    d.setMonth(month - 1);
    d.setDate(day);
    d.setFullYear(year);
    return d;
  };
  /**
   * @param dateString takes a dd/mm/yyyy or dd-mm-yyyy or dd.mm.yyyy dates and checks if date is valid
   * @returns true if valid, false if not
   */
  ExtendDate.validate_Date = function (dateString) {
    var pattern =
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    return pattern.test(dateString);
  };
  ExtendDate.validateTime = function (hours, minutes, seconds) {
    return (
      hours >= 0 &&
      hours < 24 &&
      minutes >= 0 &&
      minutes < 60 &&
      (seconds === undefined || (seconds >= 0 && seconds < 60))
    );
  };
  return ExtendDate;
})(Date);
exports.ExtendDate = ExtendDate;
