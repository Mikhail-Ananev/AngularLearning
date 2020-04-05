import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CourseInfo } from '../../models/interfaces';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() public course: CourseInfo;
  @Input() public searchString: string;

  @Output() public deleteEvent = new EventEmitter<number>();
  @Output() public editEvent = new EventEmitter<string>();

  constructor() { }

  public deleteCourse(id: number) {
    this.deleteEvent.emit(id);
  }

  public editCourse(courseName: string) {
    this.editEvent.emit(courseName);
  }
}
