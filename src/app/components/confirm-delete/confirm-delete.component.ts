import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent {
  @Output() public confirmEvent = new EventEmitter<boolean>();

  constructor() { }

  public confirmDeleteCourse(userChoise: boolean) {
    this.confirmEvent.emit(userChoise);
  }
}
