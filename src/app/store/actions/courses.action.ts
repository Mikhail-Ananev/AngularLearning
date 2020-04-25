import { createAction, props } from '@ngrx/store';
import { CourseInfo } from 'src/app/models/interfaces';

export enum CoursesActions {
    GetCourses = '[Courses] Get courses from server',
    GetCoursesComplete = '[Courses] Get courses from server complete',
    GetCourse = '[Courses] Get course',
    GetCourseComplete = '[Courses] Get course complete',
    ClearCoursesList = '[Courses] Clear courses list',
    CreateCourse = '[Courses] Create new course',
    UpdateCourse = '[Courses] Update course',
    DeleteCourse = '[Courses] Delete course',
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

export const UpdateCourse = createAction(
    CoursesActions.UpdateCourse,
    props<{course: CourseInfo}>()
);

export const DeleteCourse = createAction(
    CoursesActions.DeleteCourse,
    props<{courseId: number}>()
);

export const ClearCurrentCourseState = createAction(
    CoursesActions.ClearCurrentCourseState
);
