interface Date {
  /**
   * returns a date string formatted as YYYY-MMDDTHH:MM:SS.
   *  compatible with datetime-local input
   */
  toDatetimeFormat(): string;
  /**
   * returns a date string formatted as YYYYMMDDHHMMSS.
   *  compatible with datetime-local input
   */
  toYYYYMMDDHHMMSS(): string;
  /**
   * returns a date string formatted as YYYY-MMDDTHH:MM:SS.
   *  compatible with datetime-local input
   */
  toYYYY_MM_DDTHHMMSS(): string;
}
function pad2(n: number) {
  // always returns a string
  return (n < 10 ? '0' : '') + n;
}
Date.prototype.toDatetimeFormat = function () {
  return (
    this.getFullYear() +
    '-' +
    pad2(this.getMonth() + 1) +
    '-' +
    pad2(this.getDate()) +
    ' ' +
    pad2(this.getHours()) +
    ':' +
    pad2(this.getMinutes())
  );
};

Date.prototype.toYYYYMMDDHHMMSS = function () {
  return (
    this.getFullYear() +
    pad2(this.getMonth() + 1) +
    pad2(this.getDate()) +
    pad2(this.getHours()) +
    pad2(this.getMinutes()) +
    pad2(this.getSeconds())
  );
};

Date.prototype.toYYYY_MM_DDTHHMMSS = function () {
  // YYYY-MMDDTHH:MM:SS
  return (
    this.getFullYear() +
    '-' +
    pad2(this.getMonth() + 1) +
    '-' +
    pad2(this.getDate()) +
    'T' +
    pad2(this.getHours()) +
    ':' +
    pad2(this.getMinutes()) +
    ':' +
    pad2(this.getSeconds())
  );
};
