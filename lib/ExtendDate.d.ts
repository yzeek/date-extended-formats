export declare enum Formats {
    'DD-MM-YYYY' = "DD-MM-YYYY",
    'YYYY-MM-DD' = "YYYY-MM-DD",
    'MM/DD/YY' = "MM/DD/YY",
    'YY/MM/DD' = "YY/MM/DD"
}
/**
 * @param string: date string
 * @param Format: the format in which the Date entered
 */
export declare class ExtendDate extends Date {
    static dateFrom(datestring: string, format: Formats): Date | undefined;
    static from_Year_Month_Day_with_leading_zeros(dateString: string): Date;
    static fromYYYY_MM_DD(dateString: string): Date;
    static from_Month_Day_Year_with_leading_zeros(dateString: string): Date;
}
