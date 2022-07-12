import { Formats } from "./FormatesEnum";
/**
 * @param string: date string
 * @param Format: the format in which the Date entered
 */

function pad2(n: number) {
  return (n < 10 ? "0" : "") + n;
}

export class ExtendDate extends Date {
  static dateFrom(datestring: string, format: Formats): Date | undefined {
    switch (format) {
      case Formats["YYYY-MM-DD"]:
        return this.fromYYYY_MM_DD(datestring);
      case Formats["MM/DD/YY"]:
        return this.from_Month_Day_Year_with_leading_zeros(datestring);
      case Formats["YY/MM/DD"]:
        return this.from_Year_Month_Day_with_leading_zeros(datestring);
      case Formats["DD/MM/YY"]:
        return this.from_date_month_year_with_slashes(datestring);
      case Formats.YYYYMMDDHHMMSS:
        return this.from_year_month_date_hours_minutes_seconds(datestring);
      case Formats["YYYY-MM-DD HH:MM"]:
        return this.from_year_month_date_hours_minutes(datestring);
      default:
        throw new Error("format not implemented");
    }
  }
  private static from_year_month_date_hours_minutes(dateString: string): Date {
    const parts = dateString.split(" ");
    const date = parts[0];
    const dateArr = date.split("-");
    const time = parts[1];
    const timeArr = time.split(":");
    const d = new Date();
    const year = Number(dateArr[0]);
    const month = Number(dateArr[1]);
    const day = Number(dateArr[2]);

    const ds = pad2(day) + "-" + pad2(month) + "-" + year;
    if (!this.validate_Date(ds)) throw new Error("Invalid date Error");

    const hours = Number(timeArr[0]);
    const minutes = Number(timeArr[1]);

    if (!this.validateTime(hours, minutes)) throw new Error("Invalid time Error");

    d.setFullYear(year);
    d.setMonth(month - 1);
    d.setDate(day);
    d.setHours(hours);
    d.setMinutes(minutes);

    return d;
  }
  private static from_year_month_date_hours_minutes_seconds(dateString: string): Date {
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const date = dateString.substring(6, 8);
    const hours = dateString.substring(8, 10);
    const minutes = dateString.substring(10, 12);
    const seconds = dateString.substring(12, 14);

    const ds = date + "-" + month + "-" + year;
    if (!this.validate_Date(ds)) throw new Error("Invalid date Error");

    if (!this.validateTime(Number(hours), Number(minutes), Number(seconds))) throw new Error("Invalid time Error");

    const d = new Date();
    d.setFullYear(Number(year));
    d.setMonth(Number(month) - 1);
    d.setDate(Number(date));
    d.setHours(Number(hours));
    d.setMinutes(Number(minutes));
    d.setSeconds(Number(seconds));
    return d;
  }
  private static from_Year_Month_Day_with_leading_zeros(dateString: string): Date {
    const values = dateString.split("/");
    const day = Number(values[2]);
    const month = Number(values[1]);
    const year = Number(values[0]);
    const ds = pad2(day) + "-" + pad2(month) + "-" + year;
    if (!this.validate_Date(ds)) throw new Error("Invalid date Error");

    const d = new Date();
    d.setDate(day);
    d.setMonth(month - 1);
    d.setFullYear(year);
    return d;
  }
  private static fromYYYY_MM_DD(dateString: string): Date {
    const values = dateString.split("-");
    const year = values[0];
    const month = values[1];
    const day = values[2];
    const ds = pad2(Number(day)) + "-" + pad2(Number(month)) + "-" + year;
    if (!this.validate_Date(ds)) throw new Error("Invalid date Error");
    const d = new Date();
    d.setDate(Number(day));
    d.setMonth(Number(month) - 1);
    d.setFullYear(Number(year));
    return d;
  }
  private static from_Month_Day_Year_with_leading_zeros(dateString: string): Date {
    const values = dateString.split("/");
    const d = new Date();
    const day = Number(values[1]);
    const month = Number(values[0]);
    const year = Number(values[2]);
    const ds = pad2(day) + "-" + pad2(month) + "-" + year;

    if (!this.validate_Date(ds)) throw new Error("Invalid date Error");

    d.setMonth(month - 1);
    d.setDate(day);
    d.setFullYear(year);
    return d;
  }
  private static from_date_month_year_with_slashes(dateString: string): Date {
    const values = dateString.split("/");
    const d = new Date();
    const day = Number(values[0]);
    const month = Number(values[1]);
    const year = Number(values[2]);
    const ds = pad2(day) + "-" + pad2(month) + "-" + year;
    if (!this.validate_Date(ds)) throw new Error("Invalid date Error");
    d.setMonth(month - 1);
    d.setDate(day);
    d.setFullYear(year);
    return d;
  }

  /**
   * @param dateString takes a dd/mm/yyyy or dd-mm-yyyy or dd.mm.yyyy dates and checks if date is valid
   * @returns true if valid, false if not
   */
  private static validate_Date(dateString: string): boolean {
    const pattern =
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    return pattern.test(dateString);
  }

  private static validateTime(hours: number, minutes: number, seconds?: number): boolean {
    return (
      hours >= 0 &&
      hours < 24 &&
      minutes >= 0 &&
      minutes < 60 &&
      (seconds === undefined || (seconds >= 0 && seconds < 60))
    );
  }
}
