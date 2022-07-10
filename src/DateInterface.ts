type Formats = import('./FormatesEnum').Formats;

interface Date {
  /**
   *  returns a date string formatted as the requested format.
   *  compatible with datetime-local input
   */
  toFormat(format: Formats): string;
}
function pad2(n: number) {
  return (n < 10 ? '0' : '') + n;
}

Date.prototype.toFormat = function (format: Formats): string {
  const { Formats: formats } = require('./FormatesEnum');

  switch (format) {
    case formats['MM/DD/YY']:
      return to_month_date_year_with_slashes(this);
    case formats['DD/MM/YY']:
      return to_date_month_year_with_slashes(this);
    case formats['YYYY-MMDDTHH:MM:SS']:
      return to_full_year_month_date_T_hours_Colon_Minutes_Colon_Seconds(this);
    case formats['YYYY-MM-DD']:
      return to_full_year_month_date(this);
    case formats['YY/MM/DD']:
      return to_year_month_date_with_slashes(this);
    case formats['YYYY-MM-DD HH:MM']:
      return to_year_month_date_hours_minutes(this);
    default:
      throw new Error('format not implemented');
  }
};

function to_year_month_date_hours_minutes(date: Date): string {
  return (
    date.getFullYear() +
    '-' +
    pad2(date.getMonth() + 1) +
    '-' +
    pad2(date.getDate()) +
    ' ' +
    pad2(date.getHours()) +
    ':' +
    pad2(date.getMinutes())
  );
}
function to_year_month_date_with_slashes(date: Date): string {
  return date.getFullYear() + '/' + pad2(date.getMonth() + 1) + '/' + pad2(date.getDate());
}
function to_full_year_month_date(date: Date): string {
  return date.getFullYear() + '-' + pad2(date.getMonth() + 1) + '-' + pad2(date.getDate());
}
function to_month_date_year_with_slashes(date: Date): string {
  return pad2(date.getMonth() + 1) + '/' + pad2(date.getDate()) + '/' + pad2(date.getFullYear());
}
function to_date_month_year_with_slashes(date: Date): string {
  return pad2(date.getDate()) + '/' + pad2(date.getMonth() + 1) + '/' + pad2(date.getFullYear());
}
function to_full_year_month_date_T_hours_Colon_Minutes_Colon_Seconds(date: Date): string {
  return (
    date.getFullYear() +
    '-' +
    pad2(date.getMonth() + 1) +
    '-' +
    pad2(date.getDate()) +
    'T' +
    pad2(date.getHours()) +
    ':' +
    pad2(date.getMinutes()) +
    ':' +
    pad2(date.getSeconds())
  );
}
