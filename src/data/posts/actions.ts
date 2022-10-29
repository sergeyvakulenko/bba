import {
  FetchPostsFailure,
  FetchPostsFailurePayload,
  FetchPostsRequest,
  FetchPostsSuccess,
  FetchPostsSuccessPayload,
  SetActivePostId,
  SetActivePostIdPayload,
  SetAuthorId,
  SetAuthorIdPayload,
  SetPage,
  setPagePayload,
  SetSearch,
  SetSearchPayload
} from "./types";

export enum ActionTypes {
  FETCH = "[Posts] Fetch",
  FETCH_SUCCESS = "[Posts] Fetch Success",
  FETCH_FAILURE = "[Posts] Fetch Failure",
  SET_ACTIVE_ID = "[Posts] Set Active Post Id",
  SET_SEARCH = "[Posts] Set Search",
  SET_AUTHOR_ID = "[Posts] Set Author Id",
  SET_PAGE = "[Posts] Set Page",
};

export const fetch = (): FetchPostsRequest => ({
  type: ActionTypes.FETCH,
});

export const fetchSuccess = (
  payload: FetchPostsSuccessPayload
): FetchPostsSuccess => ({
  type: ActionTypes.FETCH_SUCCESS,
  payload,
});

export const fetchFailure = (
  payload: FetchPostsFailurePayload
): FetchPostsFailure => ({
  type: ActionTypes.FETCH_FAILURE,
  payload,
});

export const setActivePostId = (
  payload: SetActivePostIdPayload
): SetActivePostId => ({
  type: ActionTypes.SET_ACTIVE_ID,
  payload,
});

export const setSearch = (
  payload: SetSearchPayload
): SetSearch => ({
  type: ActionTypes.SET_SEARCH,
  payload,
});

export const setAuthorId = (
  payload: SetAuthorIdPayload
): SetAuthorId => ({
  type: ActionTypes.SET_AUTHOR_ID,
  payload,
});

export const setPage = (
  payload: setPagePayload
): SetPage => ({
  type: ActionTypes.SET_PAGE,
  payload,
});