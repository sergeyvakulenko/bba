import { createSelector } from 'reselect';
import { RootState } from '../reducer';

const getState = (rootState: RootState) => rootState.tags;

export const getTags = createSelector(getState, (state) => state.tags);