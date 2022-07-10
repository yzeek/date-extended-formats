declare type Formats = import('./FormatesEnum').Formats;
interface Date {
    toFormat(format: Formats): string;
}
declare function pad2(n: number): string;
declare function to_year_month_date_hours_minutes(date: Date): string;
declare function to_year_month_date_with_slashes(date: Date): string;
declare function to_full_year_month_date(date: Date): string;
declare function to_month_date_year_with_slashes(date: Date): string;
declare function to_date_month_year_with_slashes(date: Date): string;
declare function to_full_year_month_date_T_hours_Colon_Minutes_Colon_Seconds(date: Date): string;
