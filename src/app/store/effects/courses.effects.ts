import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom, switchMap } from 'rxjs/operators';

import { CoursesActions, GetCourses, GetCoursesSuccess, GetCourse, GetCourseSuccess } from '../actions/courses.action';
import { CoursesService } from 'src/app/services/courses.service';
import { Store, Action } from '@ngrx/store';
import { AppState } from 'src/app/models/interfaces';
import { startLoading, stopLoading } from '../actions/loading.action';

@Injectable()
export class CoursesEffects {

  loadCourses$ = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(GetCourses),
    switchMap(({ start, filter }) => {
      this.store$.dispatch(startLoading());

      return this.coursesService.getCourses({ start, filter })
        .pipe(
          map(courses => {
            courses.forEach((course) => course.creationDate = new Date(course.creationDate));

            this.store$.dispatch(GetCoursesSuccess({ courses }));

            return stopLoading();
          }),
        );
    })));

  loadCourse$ = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(GetCourse),
    switchMap(({ courseId }) => {
      this.store$.dispatch(startLoading());

      return this.coursesService.getCourseById(courseId)
        .pipe(
          map(course => {
            course.creationDate = new Date(course.creationDate);

            this.store$.dispatch(GetCourseSuccess({ course }));

            return stopLoading();
          }),
        );
    })));

    constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store$: Store<AppState>
    ) {}
}
