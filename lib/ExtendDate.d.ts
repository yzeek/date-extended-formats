import { Formats } from "./FormatesEnum";
export declare class ExtendDate extends Date {
    static dateFrom(datestring: string, format: Formats): Date | undefined;
    private static from_year_month_date_hours_minutes;
    private static from_year_month_date_hours_minutes_seconds;
    private static from_Year_Month_Day_with_leading_zeros;
    private static fromYYYY_MM_DD;
    private static from_Month_Day_Year_with_leading_zeros;
    private static from_date_month_year_with_slashes;
    /**
     * @param dateString takes a dd/mm/yyyy or dd-mm-yyyy or dd.mm.yyyy dates and checks if date is valid
     * @returns true if valid, false if not
     */
    private static validate_Date;
    private static validateTime;
}
