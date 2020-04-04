import { Injectable } from '@angular/core';
import COURSES from '../models/mock-courses';
import { CourseInfo } from '../models/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesList: CourseInfo[] = COURSES.slice();

  constructor(private router: Router) { }

  public getCourses() {
    return this.coursesList.slice();
  }
  
  public getCourseById(id: number): CourseInfo {
    return this.coursesList.filter((c) => c.id === id)[0];
  }

  public createCourse(course: CourseInfo) {
    this.coursesList.push(course);

    this.router.navigate(['/Course']);

    return course.id;
  }

  public updateCourse(course: CourseInfo) {
    this.coursesList = this.coursesList.filter((c) => {
      if (c.id === course.id) {
        c.creationDate = course.creationDate;
        c.description = course.description;
        c.duration = course.duration;
        c.title = course.title;
        c.topRated = course.topRated;
      }
    });

    return true;
  }

  public deleteCourse(id: number) {
    this.coursesList = this.coursesList.filter((c) => c.id !== id);
    return true;
  }
}
