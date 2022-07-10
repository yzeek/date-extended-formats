import { Formats } from "./FormatesEnum";
/**
 * @param string: date string
 * @param Format: the format in which the Date entered
 */
export declare class ExtendDate extends Date {
    static dateFrom(datestring: string, format: Formats): Date | undefined;
    private static from_year_month_date_hours_minutes;
    private static from_year_month_date_hours_minutes_seconds;
    private static from_Year_Month_Day_with_leading_zeros;
    private static fromYYYY_MM_DD;
    private static from_Month_Day_Year_with_leading_zeros;
    private static from_date_month_year_with_slashes;
}
