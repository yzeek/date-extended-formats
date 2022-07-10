export enum Formats {
  'DD-MM-YYYY' = 'DD-MM-YYYY',
  'YYYY-MM-DD' = 'YYYY-MM-DD',
  'MM/DD/YY' = 'MM/DD/YY',
  'YY/MM/DD' = 'YY/MM/DD',
}

/**
 * @param string: date string
 * @param Format: the format in which the Date entered
 */
export class ExtendDate extends Date {
  static dateFrom(datestring: string, format: Formats): Date | undefined {
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
  }
  static from_Year_Month_Day_with_leading_zeros(dateString: string): Date {
    const values = dateString.split('/');
    const d = new Date();
    d.setDate(Number(values[2]));
    d.setMonth(Number(values[1]) - 1);
    d.setFullYear(Number(values[0]));
    return d;
  }
  static fromYYYY_MM_DD(dateString: string): Date {
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
  static from_Month_Day_Year_with_leading_zeros(dateString: string): Date {
    const values = dateString.split('/');
    const d = new Date();
    d.setMonth(Number(values[0]) - 1);
    d.setDate(Number(values[1]));
    d.setFullYear(Number(values[2]));
    return d;
  }
}

// export namespace ExtendDate {

//   export enum Formats {
//     "DD-MM-YYYY" = "DD-MM-YYYY",
//     "YYYY-MM-DD" = "YYYY-MM-DD"
//   }

// }
