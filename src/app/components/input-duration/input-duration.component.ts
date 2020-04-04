import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-duration',
  templateUrl: './input-duration.component.html',
  styleUrls: ['./input-duration.component.scss']
})
export class InputDurationComponent implements OnInit{
  @Input() public duration: number;

  @Output() public changeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if (!this.duration) {
      this.duration = 0;
    }
  }

  public changeValue (value: string): void {
    console.log(value);
    this.changeEvent.emit(value);
  }
}
