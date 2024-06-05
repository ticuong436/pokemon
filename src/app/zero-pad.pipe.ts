import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroPad'
})
export class ZeroPadPipe implements PipeTransform {

  transform(value: number, length: number = 4): string {
    let valueString = value.toString();
    while (valueString.length < length) {
      valueString = '0' + valueString;
    }
    return valueString;
  }
}

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {
  transform(value: number): number[] {
    let result = [];
    for (let i = 1; i <= value; i++) {
      result.push(i);
    }
    return result;
  }
}