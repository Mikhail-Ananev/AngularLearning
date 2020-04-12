import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CourseInfo } from '../../models/interfaces';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.scss']
})
export class AddEditItemComponent implements OnInit {
  public course: CourseInfo;
  private newCourse: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    const courseId = this.activatedRoute.snapshot.paramMap.get('id');

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
        });
      this.newCourse = false;
    } else {
      this.course.id = this.coursesService.generateNewCourseId();
      this.newCourse = true;
    }
  }

  public saveCourse() {
    this.newCourse
      ? this.coursesService.createCourse(this.course)
      : this.coursesService.updateCourse(this.course);
  }

  public cancelCreation() {
    this.router.navigate(['/Courses']);
  }
}
