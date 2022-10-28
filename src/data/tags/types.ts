import { ActionTypes } from "./actions";

export interface ITag {
  id: number;
  body: string;
}

export interface TagsState {
  pending: boolean;
  tags: string[];
  error: string | null;
}

export interface FetchTagsSuccessPayload {
  tags: ITag[];
}

export interface FetchTagsFailurePayload {
  error: string;
}

export interface FetchTagsRequest {
  type: typeof ActionTypes.FETCH;
}

export type FetchTagsSuccess = {
  type: typeof ActionTypes.FETCH_SUCCESS;
  payload: FetchTagsSuccessPayload;
};

export type FetchTagsFailure = {
  type: typeof ActionTypes.FETCH_FAILURE;
  payload: FetchTagsFailurePayload;
};

export type TagsActions =
  | FetchTagsRequest
  | FetchTagsSuccess
  | FetchTagsFailure;