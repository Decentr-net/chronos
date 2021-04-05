import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSuffix',
})
export class NumberSuffixPipe implements PipeTransform {
  transform(input: number, args?: number): string {

    const suffixes: string[] = ['k', 'M', 'G', 'T', 'P', 'E'];

    if (Number.isNaN(input)) {
      return '';
    }

    if (input < 1000) {
      return String(input);
    }

    const exp = Math.floor(Math.log(input) / Math.log(1000));

    return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
  }
}
