export interface CourseInfo {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated?: boolean;
    authors?: Author[];
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
    currentUserName: UserName;
    isAuthenticated: boolean;
}

export interface CoursesState {
    courses: CourseInfo[];
    currentCourse: CourseInfo;
    loading: boolean;
}

export interface AppState {
    courses: CoursesState;
    user: UserState;
}

export interface CourseRequestParams {
    start: number;
    filter: string;
}

export interface Author {
    name: string;
}
