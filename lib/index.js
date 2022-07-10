'use strict';
function pad2(n) {
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
