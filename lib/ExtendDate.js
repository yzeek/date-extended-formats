'use strict';
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
      if (typeof b !== 'function' && b !== null)
        throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null');
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, '__esModule', { value: true });
exports.ExtendDate = exports.Formats = void 0;
var Formats;
(function (Formats) {
  Formats['DD-MM-YYYY'] = 'DD-MM-YYYY';
  Formats['YYYY-MM-DD'] = 'YYYY-MM-DD';
  Formats['MM/DD/YY'] = 'MM/DD/YY';
  Formats['YY/MM/DD'] = 'YY/MM/DD';
})((Formats = exports.Formats || (exports.Formats = {})));
/**
 * @param string: date string
 * @param Format: the format in which the Date entered
 */
var ExtendDate = /** @class */ (function (_super) {
  __extends(ExtendDate, _super);
  function ExtendDate() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ExtendDate.dateFrom = function (datestring, format) {
    switch (format) {
      case Formats['YYYY-MM-DD']:
        return this.fromYYYY_MM_DD(datestring);
      case Formats['MM/DD/YY']:
        return this.from_Month_Day_Year_with_leading_zeros(datestring);
      case Formats['YY/MM/DD']:
        return this.from_Year_Month_Day_with_leading_zeros(datestring);
      default:
        break;
    }
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
  return ExtendDate;
})(Date);
exports.ExtendDate = ExtendDate;
// export namespace ExtendDate {
//   export enum Formats {
//     "DD-MM-YYYY" = "DD-MM-YYYY",
//     "YYYY-MM-DD" = "YYYY-MM-DD"
//   }
// }
