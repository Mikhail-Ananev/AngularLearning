import { ActionReducerMap } from '@ngrx/store';

import { AppState } from '../../models/interfaces';
import { coursesReducer } from './courses.reducers';
import { userReducer } from './user.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
    courses: coursesReducer,
    user: userReducer,
};
