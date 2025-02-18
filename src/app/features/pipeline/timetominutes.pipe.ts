import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToMinutes'
})
export class TimeToMinutesPipe implements PipeTransform {

  transform(time: string): number {

    if (!time.includes(":")) { return NaN; }

    let arr = time.split(":");
    if (arr.length != 2) { return NaN; }

    if (arr[0].trim().length === 0 || arr[1].trim().length === 0 || Number(arr[1]) > 59) { return NaN; }

    return (Number(arr[0]) * 60) + Number(arr[1]);
  }

}
