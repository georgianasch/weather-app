import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { DateUtils } from '../utils/date-utils';

/**
 * Extends the DatePipe and returns 'Today' string if the date is today or the day of the week if not
 *
 * @param value - The date to be transformed
 * @returns 'Today' string if the date is today or the day of the week if not e.g. 'Sunday'
 *
 */
@Pipe({
  name: 'today',
})
export class TodayPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: string = ''): string | null {
    if (value === DateUtils.convertDateToIsoStringDate(new Date())) {
      return 'Today';
    }
    return this.datePipe ? this.datePipe.transform(value, 'EEEE') : null;
  }
}
