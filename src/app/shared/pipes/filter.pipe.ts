import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../../shared/interfaces/product.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Product[], fieldName : string, value : string): Product[] {
        console.log(items)
        return items.filter(item => {
            return !value || (item[fieldName] && item[fieldName].toLocaleLowerCase().includes(value.toLocaleLowerCase()));
        }); 
      }

}
