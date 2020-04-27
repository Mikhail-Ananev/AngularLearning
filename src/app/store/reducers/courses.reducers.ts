import { createReducer, on } from '@ngrx/store';

import { initialCoursesState } from '../state/courses.state';
import {
    GetCoursesSuccess,
    ClearCoursesList,
    GetCourseSuccess,
    ClearCurrentCourseState
} from '../actions/courses.action';

export const coursesReducer = createReducer(
    initialCoursesState,
    on(
        GetCoursesSuccess,
        (state, action) => ({ ...state, courses: [...state.courses, ...action.courses] })
    ),
    on(
        GetCourseSuccess,
        (state, action) => ({ ...state, currentCourse: action.course })
    ),
    on(ClearCoursesList, state => ({ ...state, courses: [] })),
    on(
        ClearCurrentCourseState,
        state => ({ ...state, currentCourse: initialCoursesState.currentCourse })
    ),
);
