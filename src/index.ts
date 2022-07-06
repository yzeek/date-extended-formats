interface Date {
  getTimestamp(): number;
  toDatetimeFormat(): string;
}

Date.prototype.getTimestamp = function () {
  return this.getTime();
};

/**
 * Creates an instance of documenter.
 */
Date.prototype.toDatetimeFormat = function () {
  function pad2(n: number) {  // always returns a string
    return (n < 10 ? '0' : '') + n;
  }

  return this.getFullYear() + "-" +
    pad2(this.getMonth() + 1) + "-" +
    pad2(this.getDate()) + " " +
    pad2(this.getHours()) + ":" +
    pad2(this.getMinutes())
  // pad2(this.getSeconds());
}

