import { initialCoursesState } from './courses.state';
import { initialUserState } from './user.state';
import { AppState } from 'src/app/models/interfaces';
import { initialLoadingState } from './loading.state';

export const initialAppState: AppState = {
    courses: initialCoursesState,
    user: initialUserState,
    loading: initialLoadingState
};

export const getInitialState = (): AppState => {
    return initialAppState;
};
