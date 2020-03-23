import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {
  @Output() public confirmEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public confirmDeleteCourse(userChoise: boolean) {
    this.confirmEvent.emit(userChoise);
  }
}
