import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-creation-date',
  templateUrl: './input-creation-date.component.html',
  styleUrls: ['./input-creation-date.component.scss']
})
export class InputCreationDateComponent {
  @Input() public creationDateForm: FormGroup;

  constructor() { }

}
