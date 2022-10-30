import { IUser } from "../users/types";
import { ActionTypes } from "./actions";

export const DEFAULT_PAGE_SIZE = 5;

export interface IPost {
  id: number;
  body: string;
  title: string;
  userId: number;
  user: IUser;
}

export interface PostsState {
  pending: boolean;
  posts: IPost[];
  error: string | null;
  activePostId: number | null;
  page: number;
  search?: string | null;
  authorId?: number | null;
}

export interface FetchPostsSuccessPayload {
  posts: IPost[];
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface SetActivePostIdPayload {
  postId: number | null;
}

export interface SetSearchPayload {
  search: string | null;
}

export interface SetAuthorIdPayload {
  authorId: number | null;
}

export interface setPagePayload {
  page: number;
}

export interface FetchPostsRequest {
  type: typeof ActionTypes.FETCH;
}

export interface FetchPostsSuccess {
  type: typeof ActionTypes.FETCH_SUCCESS;
  payload: FetchPostsSuccessPayload;
}

export interface FetchPostsFailure {
  type: typeof ActionTypes.FETCH_FAILURE;
  payload: FetchPostsFailurePayload;
}

export interface SetActivePostId {
  type: typeof ActionTypes.SET_ACTIVE_ID;
  payload: SetActivePostIdPayload;
}

export interface SetSearch {
  type: typeof ActionTypes.SET_SEARCH;
  payload: SetSearchPayload;
}

export interface SetAuthorId {
  type: typeof ActionTypes.SET_AUTHOR_ID;
  payload: SetAuthorIdPayload;
}

export interface SetPage {
  type: typeof ActionTypes.SET_PAGE;
  payload: setPagePayload;
}

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure
  | SetActivePostId
  | SetSearch
  | SetAuthorId
  | SetPage;
