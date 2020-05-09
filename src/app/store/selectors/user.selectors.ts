import { createSelector } from '@ngrx/store';

import { AppState, UserState } from '../../models/interfaces';

const selectUserState = (state: AppState) => state.user;

export const selectUser = createSelector(
    selectUserState,
    (state: UserState) => state
);

export const selectUserAuthenticated = createSelector(
    selectUserState,
    (state: UserState): boolean => state.isAuthenticated
);
