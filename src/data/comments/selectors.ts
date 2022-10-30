import { createSelector } from "reselect";
import { RootState } from "../reducer";

const getState = (rootState: RootState) => rootState.comments;

export const isLoading = createSelector(getState, (state) => state.pending);
export const getError = createSelector(getState, (state) => state.error);
export const getComments = createSelector(getState, (state) => state.comments);
export const getHighLevelComments = createSelector(getState, (state) =>
  state.comments.filter((c) => !c.parentId)
);
export const getChildComments = createSelector(getState, (state) =>
  state.comments.filter((c) => !!c.parentId)
);
