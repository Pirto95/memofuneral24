import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data',
  standalone: true
})
export class DataPipe implements PipeTransform {

  transform(value: Date | string | number): string {
    if (!value) {
      return '';
    }

    const date = new Date(value);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
    const italianLocale = 'it-IT';

    return new Intl.DateTimeFormat(italianLocale, options).format(date);
  }

}
