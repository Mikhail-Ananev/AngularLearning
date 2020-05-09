import { createAction, props } from '@ngrx/store';

import { CourseInfo } from '../../models/interfaces';

export enum CoursesActions {
    GetCourses = '[Courses] Get courses from server',
    GetCoursesComplete = '[Courses] Get courses from server complete',
    GetCourse = '[Courses] Get course',
    GetCourseComplete = '[Courses] Get course complete',
    ClearCoursesList = '[Courses] Clear courses list',
    CreateCourse = '[Courses] Create new course',
    CreateCourseComplete = '[Courses] Create new course complete',
    UpdateCourse = '[Courses] Update course',
    UpdateCourseComplete = '[Courses] Update course complete',
    DeleteCourse = '[Courses] Delete course',
    DeleteCourseComplete = '[Courses] Delete course complete',
    ClearCurrentCourseState = '[Courses] Clear current course state',
}

export const GetCourses = createAction(
    CoursesActions.GetCourses,
    props<{start: number, filter: string}>()
);

export const GetCoursesSuccess = createAction(
    CoursesActions.GetCoursesComplete,
    props<{courses: CourseInfo[]}>()
);

export const GetCourse = createAction(
    CoursesActions.GetCourse,
    props<{courseId: number}>()
);

export const GetCourseSuccess = createAction(
    CoursesActions.GetCourseComplete,
    props<{course: CourseInfo}>()
);

export const ClearCoursesList = createAction(
    CoursesActions.ClearCoursesList
);

export const CreateCourse = createAction(
    CoursesActions.CreateCourse,
    props<{course: CourseInfo}>()
);

export const CreateCourseComplete = createAction(
    CoursesActions.CreateCourseComplete,
);

export const UpdateCourse = createAction(
    CoursesActions.UpdateCourse,
    props<{course: CourseInfo}>()
);

export const UpdateCourseComplete = createAction(
    CoursesActions.UpdateCourseComplete,
);

export const DeleteCourse = createAction(
    CoursesActions.DeleteCourse,
    props<{courseId: number}>()
);

export const DeleteCourseComplete = createAction(
    CoursesActions.DeleteCourseComplete,
);

export const ClearCurrentCourseState = createAction(
    CoursesActions.ClearCurrentCourseState
);
