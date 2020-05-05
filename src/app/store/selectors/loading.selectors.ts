import { createSelector } from '@ngrx/store';

import { AppState, LoadingState } from '../../models/interfaces';

const selectLoading = (state: AppState) => state.loading;

export const selectLoadingState = createSelector(
    selectLoading,
    (state: LoadingState) => state.loading
);
