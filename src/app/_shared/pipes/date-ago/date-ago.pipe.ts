import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo',
  pure: true
})
export class DateAgoPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      };
      for (const i of Object.keys(intervals)) {
        const counter = Math.floor(seconds / intervals[i]);
        if (counter > 0) {
          return counter === 1 ? counter + ' ' + i + ' ago' : counter + ' ' + i + 's ago';
        }
      }
    }
    return value;
  }

}
