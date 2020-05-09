import { createSelector } from '@ngrx/store';

import { AppState, CoursesState } from '../../models/interfaces';


const selectCourses = (state: AppState) => state.courses;

export const selectCoursesList = createSelector(
    selectCourses,
    (state: CoursesState) => state.courses
);

export const selectCurrentCourse = createSelector(
    selectCourses,
    (state: CoursesState) => state.currentCourse
);

export const selectLoadingCourse = createSelector(
    selectCourses,
    (state: CoursesState) => state.loading
);
