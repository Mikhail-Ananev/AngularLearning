import { CoursesAction, CoursesActions } from '../actions/courses.action';
import { initialCoursesState } from '../state/courses.state';
import { CoursesState } from 'src/app/models/interfaces';

export const coursesReducers = (
    state = initialCoursesState,
    action: CoursesAction
): CoursesState => {
    switch (action.type) {
        case CoursesActions.GetCoursesFromServerComplete:
            return {
                ...state,
                courses: action.payload
            };
        case CoursesActions.GetDisplayingCoursesComplete:
            return {
                ...state,
                courses: action.payload
            };
        case CoursesActions.GetAdditionalCoursesComplete:
            return {
                ...state,
                courses: action.payload
            };
        case CoursesActions.GetCourseComplete:
            return {
                ...state,
                currentCourse: action.payload
            };
        default:
            return state;
    }
};
