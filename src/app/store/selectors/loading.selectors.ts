import { AppState, LoadingState } from 'src/app/models/interfaces';
import { createSelector } from '@ngrx/store';

const selectLoading = (state: AppState) => state.loading;

export const selectLoadingState = createSelector(
    selectLoading,
    (state: LoadingState) => state.loading
);
