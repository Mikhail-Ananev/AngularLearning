import { initialCoursesState } from './courses.state';
import { initialUserState } from './user.state';
import { AppState } from 'src/app/models/interfaces';

export const initialAppState: AppState = {
    courses: initialCoursesState,
    user: initialUserState,
};

export const getInitialState = (): AppState => {
    return initialAppState;
};
