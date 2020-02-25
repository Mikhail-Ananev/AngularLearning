import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseInfo } from '../../models/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  duration: Date;
  @Input() course: CourseInfo;

  @Output() deleteEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.duration = new Date(0, 0, 0, 0, 0, this.course.duration);
  }

  deleteCourse(id: number) {
    this.deleteEvent.emit(id);
    console.log(`The course with ID \"${id}\" were deleted`);
  }

  editCourse(id: number) {
    this.editEvent.emit(id);
  }
}
