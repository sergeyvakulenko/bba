import { createSelector } from 'reselect';
import { RootState } from '../reducer';

const getState = (rootState: RootState) => rootState.posts;

export const getPosts = createSelector(getState, (state) => state.posts);
export const getActivePostId = createSelector(getState, (state) => state.activePostId);