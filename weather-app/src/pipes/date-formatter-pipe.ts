import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter',
})
export class DateFormatterPipe implements PipeTransform {
  transform(date: string): string {
    if (!date) {
      throw new Error('A date must be provided !');
    }
    const months = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ];

    const dateObj = new Date(date);

    return `${dateObj.getDate()} ${
      months[dateObj.getMonth()]
    } ${dateObj.getFullYear()}`;
  }
}
