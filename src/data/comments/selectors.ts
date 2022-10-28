import { createSelector } from 'reselect';
import { RootState } from '../reducer';

const getState = (rootState: RootState) => rootState.comments;

export const getComments = createSelector(getState, (state) => state.comments);