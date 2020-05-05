import { createReducer, on } from '@ngrx/store';

import { initialUserState } from '../state/user.state';
import { SaveUserName, ClearUserName } from '../actions/user.action';

export const userReducer = createReducer(
    initialUserState,
    on(SaveUserName, (state, action) => ({ ...state, currentUserName: action.userName, isAuthenticated: true })),
    on(ClearUserName, state => ({ ...state, currentUserName: null, isAuthenticated: false })),
);
