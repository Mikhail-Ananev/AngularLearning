import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';

import { CourseInfo, CourseMinInfo } from '../../models/interfaces';
import { CoursesService } from '../../services/courses.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  public courses: CourseInfo[];
  public showDeleteDialog: boolean;

  private courseId: number;
  private subscriptions = new Subscription();

  @Input() public searchString: string;

  constructor(
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.loadingService.startLoading();

    this.initCourses();
    this.subscriptions.add(this.coursesService.searchFilterUpdated$
      .subscribe(() => {
        this.initCourses();
        this.loadingService.stopLoading();
      }));
  }

  public confirmDeleteCourseById(id: number) {
    this.courseId = id;
    this.openDeleteDialog();
  }

  public editCourseById(courseMinInfo: CourseMinInfo) {
    this.router.navigate(['/Courses', courseMinInfo.id, courseMinInfo.title]);
  }

  public deleteCourse(userChoise: boolean) {
    if (userChoise) {
      this.loadingService.startLoading();

      this.coursesService.deleteCourse(this.courseId)
        .subscribe(() => {
          this.initCourses();
          this.loadingService.stopLoading();
        });
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

  public loadMoreCourses($event) {
    $event.preventDefault();

    this.getCourseRequest(this.courses.length);
  }

  private getCourseRequest(start: number): void {
    this.loadingService.startLoading();

    this.coursesService.getCourses(start)
      .subscribe(data => {
        data.forEach((course) => course.creationDate = new Date(course.creationDate));
        this.courses = [...this.courses, ...data];
        this.loadingService.stopLoading();
      });
  }

  private initCourses() {
    this.courses = [];
    this.getCourseRequest(0);
  }
}
