import { ITag } from "../tags/types";
import { ActionTypes } from "./actions";

export interface IComment {
  id: number;
  body: string;
  email: string;
  name: string;
  parentId?: number;
  postId: number;
  tags?: ITag[];
}

export type TNewComment = Omit<IComment, "id" | "tags">;

export interface CommentsState {
  pending: boolean;
  comments: IComment[];
  error: string | null;
}

export interface FetchCommentsRequestPayload {
  postId: number;
}

export interface FetchCommentsSuccessPayload {
  comments: IComment[];
}

export interface FetchCommentsFailurePayload {
  error: string;
}

export interface CreateCommentRequestPayload {
  comment: TNewComment;
}

export interface CreateCommentSuccessPayload {
  comment: IComment;
}

export interface CreateCommentFailurePayload {
  error: string;
}

export interface FetchCommentsRequest {
  type: typeof ActionTypes.FETCH;
  payload: FetchCommentsRequestPayload;
}

export type FetchCommentsSuccess = {
  type: typeof ActionTypes.FETCH_SUCCESS;
  payload: FetchCommentsSuccessPayload;
};

export type FetchCommentsFailure = {
  type: typeof ActionTypes.FETCH_FAILURE;
  payload: FetchCommentsFailurePayload;
};

export interface CreateCommentRequest {
  type: typeof ActionTypes.CREATE;
  payload: CreateCommentRequestPayload;
}

export type CreateCommentSuccess = {
  type: typeof ActionTypes.CREATE_SUCCESS;
  payload: CreateCommentSuccessPayload;
};

export type CreateCommentFailure = {
  type: typeof ActionTypes.CREATE_FAILURE;
  payload: CreateCommentFailurePayload;
};

export type CommentsActions =
  | FetchCommentsRequest
  | FetchCommentsSuccess
  | FetchCommentsFailure
  | CreateCommentRequest
  | CreateCommentSuccess
  | CreateCommentFailure;
