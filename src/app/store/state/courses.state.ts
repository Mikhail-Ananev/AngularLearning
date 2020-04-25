import { CoursesState } from '../../models/interfaces';

export const initialCoursesState: CoursesState = {
    courses: [],
    currentCourse: {
        id: 0,
        title: '',
        description: '',
        duration: 0,
        creationDate: new Date(),
    },
};
