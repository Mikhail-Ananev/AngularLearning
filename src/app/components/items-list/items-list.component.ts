import { Component, OnInit, Input } from '@angular/core';
import { CourseInfo } from '../../models/interfaces';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  public courses: Array<CourseInfo>;

  @Input() public searchString: string;

  constructor(private coursesService: CoursesService) { }

  public ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  public deleteCourseById(id: number) {
    this.coursesService.deleteCourse(id);
    this.courses = this.coursesService.getCourses();
  }

  public editCourseById(id: number) {
    console.log('Here should be a method to edit course with ID: ' + id);
  }
}
