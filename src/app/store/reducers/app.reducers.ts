import { ActionReducerMap } from '@ngrx/store';
import { AppState } from 'src/app/models/interfaces';
import { coursesReducer } from './courses.reducers';
import { loadingReducer } from './loading.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
    courses: coursesReducer,
    users: null,
    loading: loadingReducer
};
