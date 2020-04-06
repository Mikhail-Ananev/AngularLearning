import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseInfo } from 'src/app/models/interfaces';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.scss']
})
export class AddEditItemComponent implements OnInit {
  public course: CourseInfo;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    const courseName =  this.activatedRoute.snapshot.paramMap.get('courseName');

    if (courseName) {
      this.course = this.coursesService.getCourseByName(courseName);
    } else {
      this.course = {
        id: this.coursesService.generateNewCourseId(),
        title: '',
        description: '',
        duration: 0,
        creationDate: new Date(),
      };
    }
  }

  public saveCourse() {
    this.coursesService.createCourse(this.course);
  }

  public cancelCreation() {
    this.router.navigate(['/Courses']);
  }
}
