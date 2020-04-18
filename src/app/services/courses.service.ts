import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { CourseInfo } from '../models/interfaces';
import { SERVER_URL } from '../models/const';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public searchFilterUpdated$: Subject<boolean> = new Subject();

  private count = 4;
  private filter = '';

  constructor(
    private http: HttpClient
  ) { }

  public getCourses(start: number): Observable<CourseInfo[]> {
    const url = SERVER_URL + `/courses?_start=${start}&_limit=${this.count}&q=${this.filter}`;

    return this.http.get<CourseInfo[]>(url);
  }

  public getCourseById(id: number): Observable<CourseInfo> {
    const url = SERVER_URL + `/courses/${id}`;

    return this.http.get<CourseInfo>(url);
  }

  public getCourseByName(title: string): Observable<CourseInfo[]> {
    const url = SERVER_URL + `/courses?title=${title}`;

    return this.http.get<CourseInfo[]>(url);
  }

  public createCourse(course: CourseInfo) {
    const url = SERVER_URL + '/courses';

    return this.http.post<CourseInfo>(url, course);
  }

  public updateCourse(course: CourseInfo) {
    const url = SERVER_URL + `/courses/${course.id}`;

    return this.http.put<CourseInfo>(url, course);
  }

  public deleteCourse(id: number) {
    const url = SERVER_URL + `/courses/${id}`;

    return this.http.delete(url);
  }

  public generateNewCourseId(): number {
    return new Date().getMilliseconds();
  }

  public setFilter(filterStr: string): void {
    this.filter = filterStr;
    this.searchFilterUpdated$.next();
  }
}
