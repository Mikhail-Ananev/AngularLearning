export interface CourseInfo {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated?: boolean;
}

export interface CourseMinInfo {
    id: number;
    title: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface UserName {
    firstName: string;
    lastName: string;
}

export interface IBreadCrumb {
    label: string;
    url: string;
}

export interface UserState {
    users: UserName[];
    currentUser: UserName;
}

export interface CoursesState {
    courses: CourseInfo[];
    currentCourse: CourseInfo;
}

export interface LoadingState {
    loading: boolean;
}

export interface AppState {
    courses: CoursesState;
    users: UserState;
    loading: LoadingState;
}

export interface CourseRequestParams {
    start: number;
    filter: string;
}
