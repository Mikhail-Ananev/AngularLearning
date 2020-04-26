import { AppState, UserState } from 'src/app/models/interfaces';
import { createSelector } from '@ngrx/store';

const selectUserState = (state: AppState) => state.user;

export const selectUser = createSelector(
    selectUserState,
    (state: UserState) => state
);

export const selectUserAuthenticated = createSelector(
    selectUserState,
    (state: UserState) => state.isAuthenticated
);