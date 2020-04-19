import { Action } from '@ngrx/store';
import { CourseInfo } from 'src/app/models/interfaces';

export enum CoursesActions {
    GetCoursesFromServer = '[Courses] Get courses from server',
    GetCoursesFromServerComplete = '[Courses] Get courses from server complete',
    GetDisplayingCourses = '[Courses] Get courses for displaying',
    GetDisplayingCoursesComplete = '[Courses] Get courses for displaying complete',
    GetAdditionalCourses = '[Courses] Add courses to displaying courses',
    GetAdditionalCoursesComplete = '[Courses] Add courses to displaying courses complete',
    GetCourse = '[Courses] Get course',
    GetCourseComplete = '[Courses] Get course complete',
}

export class GetCoursesFromServer implements Action {
    public readonly type = CoursesActions.GetCoursesFromServer;
}

export class GetCoursesFromServerComplete implements Action {
    public readonly type = CoursesActions.GetCoursesFromServerComplete;
    constructor(public payload: CourseInfo[]) { }
}

export class GetDisplayingCourses implements Action {
    public readonly type = CoursesActions.GetDisplayingCourses;
}

export class GetDisplayingCoursesComplete implements Action {
    public readonly type = CoursesActions.GetDisplayingCoursesComplete;
    constructor(public payload: CourseInfo[]) { }
}

export class GetAdditionalCourses implements Action {
    public readonly type = CoursesActions.GetAdditionalCourses;
}

export class GetAdditionalCoursesComplete implements Action {
    public readonly type = CoursesActions.GetAdditionalCoursesComplete;
    constructor(public payload: CourseInfo[]) { }
}

export class GetCourse implements Action {
    public readonly type = CoursesActions.GetCourse;
}

export class GetCourseComplete implements Action {
    public readonly type = CoursesActions.GetCourseComplete;
    constructor(public payload: CourseInfo) { }
}

export type CoursesAction = GetCoursesFromServer
    | GetCoursesFromServerComplete
    | GetDisplayingCourses
    | GetDisplayingCoursesComplete
    | GetAdditionalCourses
    | GetAdditionalCoursesComplete
    | GetCourse
    | GetCourseComplete;
