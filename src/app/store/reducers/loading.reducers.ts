import { createReducer, on } from '@ngrx/store';
import { initialLoadingState } from '../state/loading.state';
import { StartLoading, StopLoading } from '../actions/loading.action';

export const loadingReducer = createReducer(
    initialLoadingState,
    on(StartLoading, state => ({ ...state, loading: true })),
    on(StopLoading, state => ({ ...state, loading: false })),
);
