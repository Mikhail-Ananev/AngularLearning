import { createAction, props } from '@ngrx/store';

import { UserName } from '../../models/interfaces';

export enum UserActions {
    InitUserInfo = '[User] Get info from local storage',
    Login = '[User] Login action',
    SaveUserName = '[User] Save user name',
    ClearUserName = '[User] Delete user name',
}

export const Login = createAction(
    UserActions.Login,
    props<{email: string, password: string}>()
);

export const SaveUserName = createAction(
    UserActions.SaveUserName,
    props<{userName: UserName}>()
);

export const ClearUserName = createAction(
    UserActions.ClearUserName
);

export const InitUserInfo = createAction(
    UserActions.InitUserInfo
);
