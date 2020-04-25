import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom, switchMap, exhaustMap, concatMap, tap } from 'rxjs/operators';

import { GetCourses, GetCoursesSuccess, GetCourse, GetCourseSuccess, ClearCoursesList, CreateCourse, UpdateCourse, DeleteCourse } from '../actions/courses.action';
import { CoursesService } from 'src/app/services/courses.service';
import { Store, Action } from '@ngrx/store';
import { AppState } from 'src/app/models/interfaces';
import { startLoading, stopLoading } from '../actions/loading.action';
import { Router } from '@angular/router';

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

  createCourse$ = createEffect(() => this.actions$.pipe(
    ofType(CreateCourse),
    map(action => action.course),
    tap(course => {
      this.store$.dispatch(startLoading());

      this.coursesService.createCourse(course)
        .subscribe(() => {
          this.stopLoadAndRedirectToMainPage();
        });
    })),
    { dispatch: false }
  );

  updateCourse$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateCourse),
    map(action => action.course),
    tap(course => {
      this.store$.dispatch(startLoading());

      this.coursesService.updateCourse(course)
        .subscribe(() => {
          this.stopLoadAndRedirectToMainPage();
        });
    })),
    { dispatch: false }
  );

  deleteCourse$ = createEffect(() => this.actions$.pipe(
    ofType(DeleteCourse),
    map(action => action.courseId),
    tap(courseId => {
      this.store$.dispatch(startLoading());

      this.coursesService.deleteCourse(courseId)
        .subscribe(() => {
          this.store$.dispatch(ClearCoursesList());
          this.store$.dispatch(GetCourses({ start: 0, filter: '' }));
        });
    })),
    { dispatch: false }
  );

  constructor(
  private actions$: Actions,
  private coursesService: CoursesService,
  private store$: Store<AppState>,
  private router: Router,
  ) {}

  private stopLoadAndRedirectToMainPage() {
    this.store$.dispatch(stopLoading());
    this.router.navigate(['/Courses']);
  }
}
