import { createSelector } from 'reselect';
import { RootState } from '../reducer';
import { DEFAULT_PAGE_SIZE } from './types';

const getState = (rootState: RootState) => rootState.posts;

export const isLoading = createSelector(getState, (state) => state.pending); 
export const getPosts = createSelector(getState, (state) => state.posts);
export const getTotal = createSelector(getPosts, (posts) => posts.length);
export const getActivePostId = createSelector(getState, (state) => state.activePostId);
export const getSearch = createSelector(getState, (state) => state.search);
export const getAuthorId = createSelector(getState, (state) => state.authorId);
export const getPage = createSelector(getState, (state) => state.page);

export const getPaginatedPosts = createSelector(getState, getPage, (state, page) => {
  const start = DEFAULT_PAGE_SIZE * (page - 1);
  const end = start + DEFAULT_PAGE_SIZE;
  return state.posts.slice(start, end);
});