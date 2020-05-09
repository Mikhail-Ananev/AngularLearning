import { createReducer, on } from '@ngrx/store';

import { initialCoursesState } from '../state/courses.state';
import {
    GetCoursesSuccess,
    ClearCoursesList,
    GetCourseSuccess,
    ClearCurrentCourseState,
    GetCourses,
    GetCourse,
    CreateCourse,
    CreateCourseComplete,
    UpdateCourse,
    UpdateCourseComplete,
    DeleteCourse,
    DeleteCourseComplete
} from '../actions/courses.action';

export const coursesReducer = createReducer(
    initialCoursesState,
    on(GetCourses, state => ({ ...state, loading: true })),
    on(
        GetCoursesSuccess,
        (state, action) => ({ ...state, courses: [...state.courses, ...action.courses], loading: false })
    ),
    on(GetCourse, state => ({ ...state, loading: true })),
    on(
        GetCourseSuccess,
        (state, action) => ({ ...state, currentCourse: action.course, loading: false })
    ),
    on(ClearCoursesList, state => ({ ...state, courses: [] })),
    on(
        ClearCurrentCourseState,
        state => ({ ...state, currentCourse: initialCoursesState.currentCourse })
    ),
    on(CreateCourse, state => ({ ...state, loading: true })),
    on(CreateCourseComplete, state => ({ ...state, loading: false })),
    on(UpdateCourse, state => ({ ...state, loading: true })),
    on(UpdateCourseComplete, state => ({ ...state, loading: false })),
    on(DeleteCourse, state => ({ ...state, loading: true })),
    on(DeleteCourseComplete, state => ({ ...state, loading: false })),
);
