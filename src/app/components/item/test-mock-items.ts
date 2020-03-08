import { CourseInfo } from './../../models/interfaces';

const MOCKCOURSES: CourseInfo[] = [
    {
        id: 1,
        title: 'Video course',
        creationDate: new Date(1988, 2, 25),
        duration: 75,
        description: 'Some text',
    },
    {
        id: 2,
        title: 'Video course',
        creationDate: new Date(1998, 2, 27),
        duration: 90,
        description: 'Another text',
    }
];

export default MOCKCOURSES;
