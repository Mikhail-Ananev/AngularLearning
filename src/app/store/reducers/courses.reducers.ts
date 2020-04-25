import * as coursesAction from '../actions/courses.action';
import { initialCoursesState } from '../state/courses.state';
import { createReducer, on } from '@ngrx/store';

export const coursesReducer = createReducer(
    initialCoursesState,
    on(coursesAction.GetCourses, state => ({...state, loading: true})),
    on(
        coursesAction.GetCoursesSuccess,
        (state, action) => ({ ...state, courses: [...state.courses, ...action.courses] })
    ),
    on(coursesAction.GetCourse, state => ({...state })),
    on(
        coursesAction.GetCourseSuccess,
        (state, action) => ({ ...state, currentCourse: action.course })
    ),
    on(coursesAction.ClearCoursesList, state => ({ ...state, courses: [] })),
);
