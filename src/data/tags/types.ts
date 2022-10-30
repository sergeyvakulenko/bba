import { ActionTypes } from "./actions";

export interface ITag {
  id: number;
  value: string;
  commentId: number;
}

export type TNewTag = Omit<ITag, "id">;

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

export interface CreateTagRequestPayload {
  tag: TNewTag;
}

export interface CreateTagSuccessPayload {
  tag: ITag;
}

export interface CreateTagFailurePayload {
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

export interface CreateTagRequest {
  type: typeof ActionTypes.CREATE;
  payload: CreateTagRequestPayload;
}

export type CreateTagSuccess = {
  type: typeof ActionTypes.CREATE_SUCCESS;
  payload: CreateTagSuccessPayload;
};

export type CreateTagFailure = {
  type: typeof ActionTypes.CREATE_FAILURE;
  payload: CreateTagFailurePayload;
};

export type TagsActions =
  | FetchTagsRequest
  | FetchTagsSuccess
  | FetchTagsFailure
  | CreateTagRequest
  | CreateTagSuccess
  | CreateTagFailure;
