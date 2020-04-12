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

export interface IBreadCrumb {
    label: string;
    url: string;
}
