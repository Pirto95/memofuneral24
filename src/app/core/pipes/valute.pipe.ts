import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valute',
  standalone: true
})
export class ValutePipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'EUR', showDecimals: boolean = true): string {
    if (value == null) {
      return '';
    }

    const options: Intl.NumberFormatOptions = {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: showDecimals ? 2 : 0,
      maximumFractionDigits: showDecimals ? 2 : 0
    };

    return new Intl.NumberFormat('it-IT', options).format(value);
  }

}
