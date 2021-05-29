import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
  public transform(value: number): number | undefined {
    const lowInteger: number = Math.floor(value);
    const remainder = value % lowInteger;
    if (remainder < 0.25) {
      return lowInteger;
    }
    if (remainder >= 0.25 && remainder < 0.75) {
      return lowInteger + 0.5;
    }
    return Math.ceil(value);
  }
}
