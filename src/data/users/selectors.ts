import { createSelector } from 'reselect';
import { RootState } from '../reducer';

const getState = (rootState: RootState) => rootState.users;

export const isLoading = createSelector(getState, (state) => state.pending); 
export const getUsers = createSelector(getState, (state) => state.users);