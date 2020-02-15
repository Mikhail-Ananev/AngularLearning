import { CourseInfo } from "./interfaces"

export class courseInfo implements CourseInfo {
    id: Number;
    title: String;
    creationDate: Date;
    duration: Number;
    description: String;
}