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
  public showDeleteDialog: boolean;
  private courseId: number;

  @Input() public searchString: string;

  constructor(private coursesService: CoursesService) { }

  public ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  public confirmDeleteCourseById(id: number) {
    this.courseId = id;
    this.openDeleteDialog();
  }

  public editCourseById(id: number) {
    console.log('Here should be a method to edit course with ID: ' + id);
  }

  public deleteCourse(userChoise: boolean) {
    if (userChoise) {
      this.coursesService.deleteCourse(this.courseId);
      this.courses = this.coursesService.getCourses();
    }

    this.closeDeleteDialog();
    this.courseId = null;
  }

  public openDeleteDialog() {
    this.showDeleteDialog = true;
  }

  public closeDeleteDialog() {
    this.showDeleteDialog = false;
  }
}
