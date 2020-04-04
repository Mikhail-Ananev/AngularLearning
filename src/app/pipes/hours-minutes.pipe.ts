import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursMinutes'
})
export class HoursMinutesPipe implements PipeTransform {

  transform(duration: number): string {
    if (duration > 0 && duration < 60) {
      return `${duration}min`;
    }
    if (duration < 0 || !duration) {
      return `0min`;
    }
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hours}h ${minutes}min`;
  }
}
