import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Router } from '@angular/router';

import { CoursesService } from '../../services/courses.service';
import { AppState } from '../../models/interfaces';
import {
  GetCourses,
  GetCoursesSuccess,
  GetCourse,
  GetCourseSuccess,
  ClearCoursesList,
  CreateCourse,
  UpdateCourse,
  DeleteCourse,
  CreateCourseComplete,
  UpdateCourseComplete,
  DeleteCourseComplete
} from '../actions/courses.action';

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(GetCourses),
    switchMap(({ start, filter }) => {
      return this.coursesService.getCourses({ start, filter })
        .pipe(
          map(courses => {
            courses.forEach((course) => course.creationDate = new Date(course.creationDate));

            return GetCoursesSuccess({ courses });
          }),
        );
    })));

  loadCourse$ = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(GetCourse),
    switchMap(({ courseId }) => {

      return this.coursesService.getCourseById(courseId)
        .pipe(
          map(course => {
            course.creationDate = new Date(course.creationDate);

            return GetCourseSuccess({ course });
          }),
        );
    })));

  createCourse$ = createEffect(() => this.actions$.pipe(
    ofType(CreateCourse),
    map(action => {
      this.coursesService.createCourse(action.course)
        .subscribe(() => {
          this.redirectToMainPage();
        });

      return CreateCourseComplete();
    })),
  );

  updateCourse$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateCourse),
    map(action => {
      this.coursesService.updateCourse(action.course)
        .subscribe(() => {
          this.redirectToMainPage();
        });

      return UpdateCourseComplete();
    })),
  );

  deleteCourse$ = createEffect(() => this.actions$.pipe(
    ofType(DeleteCourse),
    map(action => {
      this.coursesService.deleteCourse(action.courseId)
        .subscribe(() => {
          this.store$.dispatch(ClearCoursesList());
          this.store$.dispatch(GetCourses({ start: 0, filter: '' }));
        });

      return DeleteCourseComplete();
    })),
  );

  constructor(
  private actions$: Actions,
  private coursesService: CoursesService,
  private store$: Store<AppState>,
  private router: Router,
  ) {}

  private redirectToMainPage() {
    this.router.navigate(['/Courses']);
  }
}
