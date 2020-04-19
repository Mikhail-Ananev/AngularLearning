import { initialCoursesState } from './courses.state';
import { initialUserState } from './user.state';
import { AppState } from 'src/app/models/interfaces';

export const initialAppState: AppState = {
    courses: initialCoursesState,
    users: initialUserState
};

export const getInitialState = (): AppState => {
    return initialAppState;
};
