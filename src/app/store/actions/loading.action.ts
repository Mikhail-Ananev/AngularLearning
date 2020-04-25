import { createAction } from '@ngrx/store';

export enum LoadingActions {
    Start = '[Loading] Starts server request',
    Stop = '[Loading] Stop server request',
}

export const startLoading = createAction(
    LoadingActions.Start
);

export const stopLoading = createAction(
    LoadingActions.Stop
);
