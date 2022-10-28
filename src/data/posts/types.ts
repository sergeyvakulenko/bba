import { ActionTypes } from "./actions";

export interface IPost {
  id: number;
  body: string;
  title: string;
  userId: number;
}

export interface PostsState {
  pending: boolean;
  posts: IPost[];
  error: string | null;
  activePostId: number | null;
}

export interface FetchPostsSuccessPayload {
  posts: IPost[];
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface SetActivePostIdPayload {
  postId: number;
}

export interface FetchPostsRequest {
  type: typeof ActionTypes.FETCH;
}

export interface FetchPostsSuccess {
  type: typeof ActionTypes.FETCH_SUCCESS;
  payload: FetchPostsSuccessPayload;
};

export interface FetchPostsFailure {
  type: typeof ActionTypes.FETCH_FAILURE;
  payload: FetchPostsFailurePayload;
};

export interface SetActivePostId {
  type: typeof ActionTypes.SET_ACTIVE_ID;
  payload: SetActivePostIdPayload;
};

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure;