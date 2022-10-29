import {
  FetchPostsFailure,
  FetchPostsFailurePayload,
  FetchPostsRequest,
  FetchPostsRequestPayload,
  FetchPostsSuccess,
  FetchPostsSuccessPayload,
  SetActivePostId,
  SetActivePostIdPayload
} from "./types";

export enum ActionTypes {
  FETCH = "[Posts] Fetch",
  FETCH_SUCCESS = "[Posts] Fetch Success",
  FETCH_FAILURE = "[Posts] Fetch Failure",
  SET_ACTIVE_ID = "[Posts] Set Active Post Id",
  SEARCH = "[Posts] Search",
};

export const fetch = (
  payload?: FetchPostsRequestPayload
): FetchPostsRequest => ({
  type: ActionTypes.FETCH,
  payload,
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