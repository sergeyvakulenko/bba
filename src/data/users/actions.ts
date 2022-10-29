import {
  FetchUsersFailure,
  FetchUsersFailurePayload,
  FetchUsersRequest,
  FetchUsersSuccess,
  FetchUsersSuccessPayload,
} from "./types";

export enum ActionTypes {
  FETCH = "[Users] Fetch",
  FETCH_SUCCESS = "[Users] Fetch Success",
  FETCH_FAILURE = "[Users] Fetch Failure",
  SET_ACTIVE_ID = "[Users] Set Active User Id",
  SEARCH = "[Users] Search",
};

export const fetch = (): FetchUsersRequest => ({
  type: ActionTypes.FETCH,
});

export const fetchSuccess = (
  payload: FetchUsersSuccessPayload
): FetchUsersSuccess => ({
  type: ActionTypes.FETCH_SUCCESS,
  payload,
});

export const fetchFailure = (
  payload: FetchUsersFailurePayload
): FetchUsersFailure => ({
  type: ActionTypes.FETCH_FAILURE,
  payload,
});