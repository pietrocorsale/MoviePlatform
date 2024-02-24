import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
//Author   : Piero Corsale
//Purpose  : Search Pipe class in charge of filtering an array
//Built on : 10/2022
export class SearchFilterPipe implements PipeTransform {
   /**
   * Filter the specified array by the specified property
   *
   * @param  items 
   * @param  searchTerm 
   * @param  searchBy 
   */
  transform(items: any[], searchTerm:string,searchBy : string): any {
    
    if (!searchTerm || searchTerm.length == 0 ) {
      return items;
    }

    try {
      return items.filter(item =>  item[searchBy].toLowerCase( ).includes(searchTerm.toLowerCase( )));
    } catch (error) {
      console.error('Error on filtering the elements , returning the original array');
      return items;
    }
  }

}
