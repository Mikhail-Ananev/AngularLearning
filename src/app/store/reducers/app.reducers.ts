import { ActionReducerMap } from '@ngrx/store';
import { AppState } from 'src/app/models/interfaces';
import { coursesReducers } from './courses.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
    courses: coursesReducers,
    users: null,
};
