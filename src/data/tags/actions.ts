import {
  FetchTagsFailure,
  FetchTagsFailurePayload,
  FetchTagsRequest,
  FetchTagsSuccess,
  FetchTagsSuccessPayload
} from "./types";

export enum ActionTypes {
  FETCH = "[Tags] Fetch",
  FETCH_SUCCESS = "[Tags] Fetch Success",
  FETCH_FAILURE = "[Tags] Fetch Failure",
};

export const fetch = (): FetchTagsRequest => ({
  type: ActionTypes.FETCH,
});

export const fetchSuccess = (
  payload: FetchTagsSuccessPayload
): FetchTagsSuccess => ({
  type: ActionTypes.FETCH_SUCCESS,
  payload,
});

export const fetchFailure = (
  payload: FetchTagsFailurePayload
): FetchTagsFailure => ({
  type: ActionTypes.FETCH_FAILURE,
  payload,
});