import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'orderBy'
})
//Author   : Piero Corsale
//Purpose  : Order Pipe class in charge of sorting an array of object
//Built on : 10/2022
export class OrderByPipe implements PipeTransform {
  /**
   * Sort the specified array by the specified property in the specified order (asc|desc)
   *
   * @param  items 
   * @param  sortBy 
   * @param  order 
   */
  transform(items: any, sortBy: string, order?: string): any[] {
    const sortOrder = order && order == 'desc' ?'desc' : 'asc';
    console.log('Order: '+ sortOrder);

    try {
      return orderBy(items, [sortBy], [sortOrder]);
    } catch (error) {
      console.error('Error on sorting the elements , returning the original array');
      return items;
    }

  }
}
