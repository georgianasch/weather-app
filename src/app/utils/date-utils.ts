export class DateUtils {
  /**
   * Converts ticks to a date
   *
   * @param ticks - The number of 100-nanosecond intervals that have elapsed since 12:00:00 midnight, January 1, 0001
   * @returns The resulted date e.g. Sun Jul 03 2022 06:00:00 GMT+0300 (Eastern European Summer Time)
   *
   */
  static convertTicksToDate(ticks: number): Date {
    return new Date(ticks * 1000);
  }

  /**
   * Converts ticks to a iso date string
   *
   * @param ticks - The number of 100-nanosecond intervals that have elapsed since 12:00:00 midnight, January 1, 0001
   * @returns The resulted iso date string e.g. 2022-06-29
   *
   */
  static convertTicksToDateString(ticks: number): string {
    return this.convertDateToIsoStringDate(this.convertTicksToDate(ticks));
  }

  /**
   * Converts ticks to date and extract the time as string
   *
   * @param ticks - The number of 100-nanosecond intervals that have elapsed since 12:00:00 midnight, January 1, 0001
   * @returns The resulted time string e.g. 21:10
   *
   */
  static convertTicksToTimeString(ticks: number): string {
    var date = this.convertTicksToDate(ticks);
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  /**
   * Converts a date to a iso date string
   *
   * @param date - The date to be converted
   * @returns The resulted time string e.g. 2022-06-29
   *
   */
  static convertDateToIsoStringDate(date: Date): string {
    return date.toISOString().substring(0, 10);
  }
}
