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
declare function pad2(n: number): string;
