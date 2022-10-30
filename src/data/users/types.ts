import { ActionTypes } from "./actions";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UsersState {
  pending: boolean;
  users: IUser[];
  error: string | null;
  activeUserId: number | null;
}

export interface FetchUsersSuccessPayload {
  users: IUser[];
}

export interface FetchUsersFailurePayload {
  error: string;
}

export interface SetActiveUserIdPayload {
  userId: number | null;
}

export interface FetchUsersRequest {
  type: typeof ActionTypes.FETCH;
}

export interface FetchUsersSuccess {
  type: typeof ActionTypes.FETCH_SUCCESS;
  payload: FetchUsersSuccessPayload;
}

export interface FetchUsersFailure {
  type: typeof ActionTypes.FETCH_FAILURE;
  payload: FetchUsersFailurePayload;
}

export type UsersActions =
  | FetchUsersRequest
  | FetchUsersSuccess
  | FetchUsersFailure;
