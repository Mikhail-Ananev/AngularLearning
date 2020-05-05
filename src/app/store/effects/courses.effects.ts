import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Router } from '@angular/router';

import { CoursesService } from '../../services/courses.service';
import { AppState } from '../../models/interfaces';
import { StartLoading, StopLoading } from '../actions/loading.action';
import {
  GetCourses,
  GetCoursesSuccess,
  GetCourse,
  GetCourseSuccess,
  ClearCoursesList,
  CreateCourse,
  UpdateCourse,
  DeleteCourse
} from '../actions/courses.action';

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(GetCourses),
    switchMap(({ start, filter }) => {
      this.store$.dispatch(StartLoading());

      return this.coursesService.getCourses({ start, filter })
        .pipe(
          map(courses => {
            courses.forEach((course) => course.creationDate = new Date(course.creationDate));

            this.store$.dispatch(GetCoursesSuccess({ courses }));

            return StopLoading();
          }),
        );
    })));

  loadCourse$ = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(GetCourse),
    switchMap(({ courseId }) => {
      this.store$.dispatch(StartLoading());

      return this.coursesService.getCourseById(courseId)
        .pipe(
          map(course => {
            course.creationDate = new Date(course.creationDate);

            this.store$.dispatch(GetCourseSuccess({ course }));

            return StopLoading();
          }),
        );
    })));

  createCourse$ = createEffect(() => this.actions$.pipe(
    ofType(CreateCourse),
    map(action => action.course),
    tap(course => {
      this.store$.dispatch(StartLoading());

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
      this.store$.dispatch(StartLoading());

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
      this.store$.dispatch(StartLoading());

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
    this.store$.dispatch(StopLoading());
    this.router.navigate(['/Courses']);
  }
}
