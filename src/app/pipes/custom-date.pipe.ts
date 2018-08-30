import { Pipe, PipeTransform } from '@angular/core';
import * as dateFormat from 'dateformat'

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return dateFormat(value, 'longDate');
  }

}
