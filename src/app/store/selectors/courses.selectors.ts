import { AppState, CoursesState } from '../../models/interfaces';
import { createSelector } from '@ngrx/store';

const selectCourses = (state: AppState) => state.courses;

export const selectCoursesList = createSelector(
    selectCourses,
    (state: CoursesState) => state.courses
);

export const selectCurrentCourse = createSelector(
    selectCourses,
    (state: CoursesState) => state.currentCourse
);
