import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CourseInfo } from '../../models/interfaces';
import { CoursesService } from '../../services/courses.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.scss']
})
export class AddEditItemComponent implements OnInit {
  public course: CourseInfo;
  public creationDate: string;

  private newCourse: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    const courseId = this.activatedRoute.snapshot.paramMap.get('id');

    this.loadingService.startLoading();
    this.course = {
      id: 0,
      title: '',
      description: '',
      duration: 0,
      creationDate: new Date(),
    };

    if (courseId) {
      this.coursesService.getCourseById(+courseId)
        .subscribe(course => {
          this.course = course;
          this.course.creationDate = new Date(course.creationDate);
          this.formInputDate(this.course.creationDate);
          this.loadingService.stopLoading();
        });
      this.newCourse = false;
    } else {
      this.course.id = this.coursesService.generateNewCourseId();
      this.formInputDate(this.course.creationDate);
      this.newCourse = true;
    }
  }

  public saveCourse() {
    this.loadingService.startLoading();
    this.course.creationDate = new Date(this.creationDate);

    this.newCourse
      ? this.coursesService.createCourse(this.course)
        .subscribe(() => {
          this.loadingService.stopLoading();
          this.router.navigate(['/Courses']);
        })
      : this.coursesService.updateCourse(this.course)
        .subscribe(() => {
          this.loadingService.stopLoading();
          this.router.navigate(['/Courses']);
        });
  }

  public cancelCreation() {
    this.router.navigate(['/Courses']);
  }

  private formInputDate(date: Date): void {
    this.creationDate = date.toJSON().slice(0, 10);
  }
}
