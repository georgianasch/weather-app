import { Pipe, PipeTransform } from '@angular/core';
import { SortType } from '../constants';
import { orderBy } from 'lodash';

/**
 * Orders an array, ascending or descending, by a certain property
 *
 * @param array - The array which needs to be sorted
 * @param sortBy - The property the array needs to be sorted by
 * @param sortType - The sort type - asc/desc
 * @returns The sorted array
 *
 */
@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(array: any, sortBy: string, sortType?: SortType): any[] {
    const sortOrder = sortType ? sortType : SortType.Ascending;
    return orderBy(array, [sortBy], [sortOrder]);
  }
}
