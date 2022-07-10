import { Formats } from "./FormatesEnum";


/**
 * @param string: date string
 * @param Format: the format in which the Date entered
 */
export class ExtendDate extends Date {
  static dateFrom(datestring: string, format: Formats): Date | undefined {
    switch (format) {
      case Formats["YYYY-MM-DD"]:
        return this.fromYYYY_MM_DD(datestring);
      case Formats["MM/DD/YY"]:
        return this.from_Month_Day_Year_with_leading_zeros(datestring);
      case Formats['YY/MM/DD']:
        return this.from_Year_Month_Day_with_leading_zeros(datestring);
      case Formats['DD/MM/YY']:
        return this.from_date_month_year_with_slashes(datestring);
      case Formats.YYYYMMDDHHMMSS:
        return this.from_year_month_date_hours_minutes_seconds(datestring);
      case Formats["YYYY-MM-DD HH:MM"]:
        return this.from_year_month_date_hours_minutes(datestring)
      default:
        throw 'format not implemented'
    }
  }
  private static from_year_month_date_hours_minutes(dateString: string): Date {
    const parts = dateString.split(' ');
    let date = parts[0];
    let dateArr = date.split('-');
    let time = parts[1];
    let timeArr = time.split(":");

    const d = new Date();
    d.setFullYear(Number(dateArr[0]));
    d.setMonth(Number(dateArr[1]) - 1);
    d.setDate(Number(dateArr[2]));
    d.setHours(Number(timeArr[0]));
    d.setMinutes(Number(timeArr[1]));

    console.log(d)
    return d;
  }
  private static from_year_month_date_hours_minutes_seconds(dateString: string): Date {
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const date = dateString.substring(6, 8);
    const hours = dateString.substring(8, 10);
    const minutes = dateString.substring(10, 12);
    const seconds = dateString.substring(12, 14);
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
    const values = dateString.split('/');
    const d = new Date();
    d.setDate(Number(values[2]));
    d.setMonth(Number(values[1]) - 1);
    d.setFullYear(Number(values[0]));
    return d;
  }
  private static fromYYYY_MM_DD(dateString: string): Date {
    const values = dateString.split('-');
    const year = values[0];
    const month = values[1];
    const day = values[2];
    const d = new Date();
    d.setDate(Number(day));
    d.setMonth(Number(month) - 1);
    d.setFullYear(Number(year));
    return d;
  }
  private static from_Month_Day_Year_with_leading_zeros(dateString: string): Date {
    const values = dateString.split('/');
    const d = new Date();
    d.setMonth(Number(values[0]) - 1);
    d.setDate(Number(values[1]));
    d.setFullYear(Number(values[2]));
    return d;
  }
  private static from_date_month_year_with_slashes(dateString: string): Date {
    const values = dateString.split('/');
    const d = new Date();
    d.setMonth(Number(values[1]) - 1);
    d.setDate(Number(values[0]));
    d.setFullYear(Number(values[2]));
    return d;
  }
}
