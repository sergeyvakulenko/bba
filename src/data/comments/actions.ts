import {
  FetchCommentsFailure,
  FetchCommentsFailurePayload,
  FetchCommentsRequest,
  FetchCommentsRequestPayload,
  FetchCommentsSuccess,
  FetchCommentsSuccessPayload
} from "./types";

export enum ActionTypes {
  FETCH = "[Comments] Fetch",
  FETCH_SUCCESS = "[Comments] Fetch Success",
  FETCH_FAILURE = "[Comments] Fetch Failure",
};

export const fetch = (
  payload: FetchCommentsRequestPayload
): FetchCommentsRequest => ({
  type: ActionTypes.FETCH,
  payload, 
});

export const fetchSuccess = (
  payload: FetchCommentsSuccessPayload
): FetchCommentsSuccess => ({
  type: ActionTypes.FETCH_SUCCESS,
  payload,
});

export const fetchFailure = (
  payload: FetchCommentsFailurePayload
): FetchCommentsFailure => ({
  type: ActionTypes.FETCH_FAILURE,
  payload,
});