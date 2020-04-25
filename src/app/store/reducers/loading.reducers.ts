import { createReducer, on } from '@ngrx/store';
import { initialLoadingState } from '../state/loading.state';
import { startLoading, stopLoading } from '../actions/loading.action';

export const loadingReducer = createReducer(
    initialLoadingState,
    on(startLoading, state => ({ ...state, loading: true })),
    on(stopLoading, state => ({ ...state, loading: false })),
);
