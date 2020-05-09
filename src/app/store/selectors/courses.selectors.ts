import { createSelector } from '@ngrx/store';

import { AppState, CoursesState, CourseInfo } from '../../models/interfaces';


const selectCourses = (state: AppState) => state.courses;

export const selectCoursesList = createSelector(
    selectCourses,
    (state: CoursesState) => state.courses
);

export const selectCurrentCourse = createSelector(
    selectCourses,
    (state: CoursesState): CourseInfo => state.currentCourse
);

export const selectLoadingCourse = createSelector(
    selectCourses,
    (state: CoursesState): boolean => state.loading
);
