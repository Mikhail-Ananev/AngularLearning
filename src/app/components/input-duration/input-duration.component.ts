import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-duration',
  templateUrl: './input-duration.component.html',
  styleUrls: ['./input-duration.component.scss']
})
export class InputDurationComponent{
  private durationValue = 0;

  @Output() public durationChange = new EventEmitter();

  constructor() { }

  @Input()
  get duration() {
    return this.durationValue;
  }

  set duration(val) {
    this.durationValue = val;
    this.durationChange.emit(this.durationValue);
  }
}
