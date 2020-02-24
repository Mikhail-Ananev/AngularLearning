import { Component, OnInit } from '@angular/core';
import COURSES from './mock-items';
import { CourseInfo } from '../../models/interfaces';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  courses: Array<CourseInfo>;
 
  constructor() { }

  ngOnInit(): void {
    this.courses = COURSES.slice();
  }
  
  public deleteCourseById (id: number) {
    this.courses = this.courses.filter(c => c.id !== id);
  }

  public editCourseById (id: number) {
    console.log('Here should be a method to edit course with ID: ' + id);
  }
}
