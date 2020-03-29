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
    const id =  this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.course = this.coursesService.getCourseById(+id);
    } else {
      this.course = {
        id: -1,
        title: '',
        description: '',
        duration: 0,
        creationDate: new Date(),
      }
    }
  }

  public saveCourse() {
    this.coursesService.createCourse(this.course);
  }

  public cancelCreation() {
    this.router.navigate(['/Course']);
  }
}
