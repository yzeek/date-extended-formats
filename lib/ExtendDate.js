"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendDate = void 0;
var FormatesEnum_1 = require("./FormatesEnum");
/**
 * @param string: date string
 * @param Format: the format in which the Date entered
 */
var ExtendDate = /** @class */ (function (_super) {
    __extends(ExtendDate, _super);
    function ExtendDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendDate.dateFrom = function (datestring, format) {
        switch (format) {
            case FormatesEnum_1.Formats['YYYY-MM-DD']:
                return this.fromYYYY_MM_DD(datestring);
            case FormatesEnum_1.Formats['MM/DD/YY']:
                return this.from_Month_Day_Year_with_leading_zeros(datestring);
            case FormatesEnum_1.Formats['YY/MM/DD']:
                return this.from_Year_Month_Day_with_leading_zeros(datestring);
            case FormatesEnum_1.Formats['DD/MM/YY']:
                return this.from_date_month_year_with_slashes(datestring);
            case FormatesEnum_1.Formats.YYYYMMDDHHMMSS:
                return this.from_year_month_date_hours_minutes_seconds(datestring);
            case FormatesEnum_1.Formats['YYYY-MM-DD HH:MM']:
                return this.from_year_month_date_hours_minutes(datestring);
            default:
                throw new Error('format not implemented');
        }
    };
    ExtendDate.from_year_month_date_hours_minutes = function (dateString) {
        var parts = dateString.split(' ');
        var date = parts[0];
        var dateArr = date.split('-');
        var time = parts[1];
        var timeArr = time.split(':');
        var d = new Date();
        d.setFullYear(Number(dateArr[0]));
        d.setMonth(Number(dateArr[1]) - 1);
        d.setDate(Number(dateArr[2]));
        d.setHours(Number(timeArr[0]));
        d.setMinutes(Number(timeArr[1]));
        return d;
    };
    ExtendDate.from_year_month_date_hours_minutes_seconds = function (dateString) {
        var year = dateString.substring(0, 4);
        var month = dateString.substring(4, 6);
        var date = dateString.substring(6, 8);
        var hours = dateString.substring(8, 10);
        var minutes = dateString.substring(10, 12);
        var seconds = dateString.substring(12, 14);
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
        var values = dateString.split('/');
        var d = new Date();
        d.setDate(Number(values[2]));
        d.setMonth(Number(values[1]) - 1);
        d.setFullYear(Number(values[0]));
        return d;
    };
    ExtendDate.fromYYYY_MM_DD = function (dateString) {
        var values = dateString.split('-');
        var year = values[0];
        var month = values[1];
        var day = values[2];
        var d = new Date();
        d.setDate(Number(day));
        d.setMonth(Number(month) - 1);
        d.setFullYear(Number(year));
        return d;
    };
    ExtendDate.from_Month_Day_Year_with_leading_zeros = function (dateString) {
        var values = dateString.split('/');
        var d = new Date();
        d.setMonth(Number(values[0]) - 1);
        d.setDate(Number(values[1]));
        d.setFullYear(Number(values[2]));
        return d;
    };
    ExtendDate.from_date_month_year_with_slashes = function (dateString) {
        var values = dateString.split('/');
        var d = new Date();
        d.setMonth(Number(values[1]) - 1);
        d.setDate(Number(values[0]));
        d.setFullYear(Number(values[2]));
        return d;
    };
    return ExtendDate;
}(Date));
exports.ExtendDate = ExtendDate;
