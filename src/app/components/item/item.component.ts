import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseInfo } from '../../models/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public duration: Date;

  @Input() public course: CourseInfo;

  @Output() public deleteEvent = new EventEmitter<number>();
  @Output() public editEvent = new EventEmitter<number>();

  constructor() { }

  public ngOnInit(): void {
    this.duration = new Date(this.course.duration * 60 * 1000);
  }

  public deleteCourse(id: number) {
    this.deleteEvent.emit(id);
    console.log(`The course with ID \"${id}\" were deleted`);
  }

  public editCourse(id: number) {
    this.editEvent.emit(id);
  }
}