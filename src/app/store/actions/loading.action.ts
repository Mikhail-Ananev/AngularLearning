import { createAction } from '@ngrx/store';

export enum LoadingActions {
    Start = '[Loading] Starts server request',
    Stop = '[Loading] Stop server request',
}

export const StartLoading = createAction(
    LoadingActions.Start
);

export const StopLoading = createAction(
    LoadingActions.Stop
);
