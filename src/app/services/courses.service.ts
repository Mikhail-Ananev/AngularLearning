import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { CourseInfo, AppState, CourseRequestParams } from '../models/interfaces';
import { SERVER_URL } from '../models/const';
import { Store, select } from '@ngrx/store';
import { selectCoursesList } from '../store/selectors/courses.selectors';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public searchFilterUpdated$: Subject<string> = new Subject();

  private limit = 4;

  constructor(
    private http: HttpClient,
  ) { }

  public getCourses(params: CourseRequestParams): Observable<CourseInfo[]> {
    this.searchFilterUpdated$.next(params.filter);
    const url = SERVER_URL + `/courses?_start=${params.start}&_limit=${this.limit}&q=${params.filter}`;

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

  // public setFilter(filterStr: string): void {
  //   this.filter = filterStr;
  //   this.searchFilterUpdated$.next();
  // }
}
