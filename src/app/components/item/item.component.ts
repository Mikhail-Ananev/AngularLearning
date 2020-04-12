import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CourseInfo, CourseMinInfo } from '../../models/interfaces';

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
  @Output() public editEvent = new EventEmitter<CourseMinInfo>();

  private courseMinInfo: CourseMinInfo;

  constructor() { }

  public deleteCourse(id: number) {
    this.deleteEvent.emit(id);
  }

  public editCourse(courseName: string, courseId: number) {
    this.courseMinInfo = {
      id: courseId,
      title: courseName
    };

    this.editEvent.emit(this.courseMinInfo);
  }
}
