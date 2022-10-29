import {
  CreateTagFailure,
  CreateTagFailurePayload,
  CreateTagRequest,
  CreateTagRequestPayload,
  CreateTagSuccess,
  CreateTagSuccessPayload,
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
  CREATE = "[Tags] Create",
  CREATE_SUCCESS = "[Tags] Create Success",
  CREATE_FAILURE = "[Tags] Create Failure",
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

export const create = (
  payload: CreateTagRequestPayload
): CreateTagRequest => ({
  type: ActionTypes.CREATE,
  payload,
});

export const createSuccess = (
  payload: CreateTagSuccessPayload
): CreateTagSuccess => ({
  type: ActionTypes.CREATE_SUCCESS,
  payload,
});

export const createFailure = (
  payload: CreateTagFailurePayload
): CreateTagFailure => ({
  type: ActionTypes.CREATE_FAILURE,
  payload,
});