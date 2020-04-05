import { Component, OnInit, Input } from '@angular/core';
import { CourseInfo } from '../../models/interfaces';
import { CoursesService } from 'src/app/services/courses.service';
import { Router } from '@angular/router';

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

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  public confirmDeleteCourseById(id: number) {
    this.courseId = id;
    this.openDeleteDialog();
  }

  public editCourseById(courseName: string) {
    this.router.navigate(['/Courses', courseName]);
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

  public openCreatePage() {
    this.router.navigate(['/Courses/New']);
  }
}
