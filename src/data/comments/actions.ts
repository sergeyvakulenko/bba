import {
  CreateCommentFailure,
  CreateCommentFailurePayload,
  CreateCommentRequest,
  CreateCommentRequestPayload,
  CreateCommentSuccess,
  CreateCommentSuccessPayload,
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
  CREATE = "[Comments] Create",
  CREATE_SUCCESS = "[Comments] Create Success",
  CREATE_FAILURE = "[Comments] Create Failure",
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

export const create = (
  payload: CreateCommentRequestPayload
): CreateCommentRequest => ({
  type: ActionTypes.CREATE,
  payload, 
});

export const createSuccess = (
  payload: CreateCommentSuccessPayload
): CreateCommentSuccess => ({
  type: ActionTypes.CREATE_SUCCESS,
  payload,
});

export const createFailure = (
  payload: CreateCommentFailurePayload
): CreateCommentFailure => ({
  type: ActionTypes.CREATE_FAILURE,
  payload,
});